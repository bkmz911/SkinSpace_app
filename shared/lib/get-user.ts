import { cookies } from "next/headers";

const API_URL = process.env.NEXT_API_URL || "http://localhost:3001";

export async function getUser() {
    const cookieStore = await cookies(),
        sidCookie = cookieStore.get("connect.sid"),
        cookieHeader = sidCookie ? `${sidCookie.name}=${sidCookie.value}` : "";

    const response = await fetch(`${API_URL}/api/user`, {
        headers: {
            Cookie: cookieHeader,
        },
        next: {
            revalidate: 3600,
        },
    });

    if (response.status === 401) return null;
    if (!response.ok) throw new Error("Ошибка получения пользователя!");

    return response.json();
}
