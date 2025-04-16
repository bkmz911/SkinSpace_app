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

app.get("/logout", (req, res) => {
    req.logout((err) => {
        if (err) return res.status(500).json({ message: "Logout failed" });
        res.redirect("http://localhost:3000/");
    });
});

app.get("/api/inventory", async (req, res) => {
    if (req.isAuthenticated()) {
        const steamId = req.user.id;
        const appId = 730,
            contextId = 2;
        try {
            const response = await axios.get(
                `https://steamcommunity.com/inventory/${steamId}/${appId}/${contextId}?l=russian&count=500`
            );
            res.json(response.data);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Ошибка получения инвентаря" });
        }
    } else {
        res.status(401).json({ message: "Not authenticated" });
    }
});

