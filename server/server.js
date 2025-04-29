/* eslint-disable @typescript-eslint/no-require-imports */
require("dotenv").config();
const express = require("express");
const passport = require("passport");
const SteamStrategy = require("passport-steam").Strategy;
const session = require("express-session");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
const port = 3001;

app.use(express.json());

// Настройка CORS для работы с фронтендом на Next.js
app.use(
    cors({
        origin: "http://localhost:3000", // твой фронтенд
        credentials: true, // важно для отправки кук
    })
);

// Парсинг кук
app.use(cookieParser());

// Настройка сессий
app.use(
    session({
        secret: "super_puper_secret", // замени на свой секретный ключ
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false }, // в продакшене используй secure: true с HTTPS
    })
);

// Инициализация Passport
app.use(passport.initialize());
app.use(passport.session());

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});

passport.use(
    new SteamStrategy(
        {
            returnURL: "http://localhost:3001/auth/steam/return",
            realm: "http://localhost:3001/",
            apiKey: process.env.STEAM_API_KEY, // вставь свой ключ
        },
        (identifier, profile, done) => {
            // Сохраняем профиль пользователя в сессию
            return done(null, profile);
        }
    )
);

// Сериализация пользователя в сессию
passport.serializeUser((user, done) => {
    done(null, user);
});

// Десериализация пользователя из сессии
passport.deserializeUser((obj, done) => {
    done(null, obj);
});

app.get("/auth/steam", passport.authenticate("steam"));

app.get(
    "/auth/steam/return",
    passport.authenticate("steam", { failureRedirect: "/" }),
    (req, res) => {
        res.redirect("http://localhost:3000/"); // твой фронтенд
    }
);

app.get("/api/user", (req, res) => {
    if (req.isAuthenticated()) {
        res.json(req.user); // данные из сессии (Steam профиль)
    } else {
        res.status(401).json({ message: "Not authenticated" });
    }
});

app.get("/api/logout", (req, res) => {
    req.logout((err) => {
        if (err) return res.status(500).json({ message: "Logout failed" });
        res.clearCookie("connect.sid");
        // либо верните JSON { ok: true }, либо редирект:
        return res.redirect("http://localhost:3000/");
    });
});

// Получение инвентаря юзера по конкретной игре:

const gameAppIds = {
    CS2: 730,
    "Dota 2": 570,
    // Rust: 252490,
};

// Построим нормализованную мапу один раз при старте сервера
const normalizedAppIds = Object.entries(gameAppIds).reduce(
    (acc, [name, id]) => {
        // Приводим имя к нижнему регистру и удаляем все пробельные символы
        const key = name.toLowerCase().replace(/\s+/g, "");
        acc[key] = id;
        return acc;
    },
    {}
);

// Получение инвентаря юзера по конкретной игре:
app.get("/api/inventory", async (req, res) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "Not authenticated" });
    }

    const steamId = req.user.id;
    // 1) Нормализуем incoming параметр
    const rawGame = String(req.query.currentGame || "");
    const normGame = rawGame.toLowerCase().replace(/\s+/g, "");

    // 2) Берём appId из нормализованной мапы или по умолчанию Dota 2
    const appId = normalizedAppIds[normGame] || gameAppIds["Dota 2"];
    const contextId = 2;

    // 2.1) Словари редкости для сортировки
    const rarityOrder = {
        dota2: [
            "Common",
            "Uncommon",
            "Rare",
            "Mythical",
            "Legendary",
            "Immortal",
            "Arcana",
            "Ancient",
            "Доступ Dota Plus",
            "Сезонное",
        ],
        cs2: [
            "Consumer Grade",
            "Industrial Grade",
            "Mil-Spec",
            "Restricted",
            "Classified",
            "Covert",
            "Contraband",
        ],
    };
    // извлекаем параметры сортировки из query
    const { sort, order } = req.query;
    // выбираем мапу для текущей игры, или дефолтную Dota2
    const orderMap = rarityOrder[normGame] || rarityOrder.dota2;

    try {
        // 3) Получаем инвентарь
        const steamRes = await axios.get(
            `https://steamcommunity.com/inventory/${steamId}/${appId}/${contextId}`,
            { params: { l: "russian", count: 500 } }
        );

        // 4) Сортируем descriptions по редкости, если нужно
        let descriptions = steamRes.data.descriptions;
        if (sort === "rarity") {
            descriptions = descriptions.sort((a, b) => {
                // находим index локализованной редкости в orderMap
                const aTag = a.tags.find((t) =>
                    orderMap.includes(t.localized_tag_name)
                )?.localized_tag_name;
                const bTag = b.tags.find((t) =>
                    orderMap.includes(t.localized_tag_name)
                )?.localized_tag_name;
                const ai = orderMap.indexOf(aTag || "");
                const bi = orderMap.indexOf(bTag || "");
                return order === "desc" ? bi - ai : ai - bi;
            });
        }

        // 5) Отдаём клиенту оригинальный объект, но с отсортированным descriptions
        const response = { ...steamRes.data, descriptions };

        return res.json(response);
    } catch (error) {
        console.error("Steam Inventory Error:", error);
        return res.status(500).json({ error: "Ошибка получения инвентаря" });
    }
});

// Установка API-ключа
app.post("/api/set-api-key", (req, res) => {
    const { apiKey } = req.body;
    if (typeof apiKey !== "string" || !apiKey.trim()) {
        return res.status(400).json({ error: "Invalid apiKey" });
    }

    req.session.apiKey = apiKey.trim();
    res.json({ ok: true });
});
