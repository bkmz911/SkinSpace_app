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
    req.logout(err => {
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
    Rust: 252490,
};

app.get("/api/inventory", async (req, res) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "Not authenticated" });
    }

    const steamId = req.user.id;
    const gameKey = req.query.currentGame; // ожидаем "CS2", "Dota 2" или "Rust"
    const appId = gameAppIds[gameKey] || gameAppIds["Dota 2"];
    const contextId = 2; // обычно 2 для большинства игр

    try {
        const steamRes = await axios.get(
            `https://steamcommunity.com/inventory/${steamId}/${appId}/${contextId}?l=russian&count=500`
        );
        return res.json(steamRes.data);
    } catch (error) {
        console.error("Steam Inventory Error:", error);
        return res.status(500).json({ error: "Ошибка получения инвентаря" });
    }
});

app.post("/api/set-api-key", (req, res) => {
    const { apiKey } = req.body;
    if (typeof apiKey !== "string" || !apiKey.trim()) {
        return res.status(400).json({ error: "Invalid apiKey" });
    }

    req.session.apiKey = apiKey.trim();
    res.json({ ok: true });
});
