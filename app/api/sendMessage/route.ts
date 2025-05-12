import { NextResponse } from "next/server";

const TELEGRAM_TOKEN = process.env.BOT_TOKEN!;
const CHAT_ID = process.env.CHAT_ID!;

export async function POST(request: Request) {

    const { text } = await request.json();
    if (!text)
        return NextResponse.json({ error: "Empty message" }, { status: 400 });

    const telegramRes = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text,
                parse_mode: undefined,
            }),
        }
    );

    if (!telegramRes.ok) {
        const err = await telegramRes.text();
        console.error("Telegram error:", err);
        return NextResponse.json({ error: err }, { status: 500 });
    }
    return NextResponse.json({ ok: true });
}
