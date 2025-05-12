import { cookies } from "next/headers";

interface UserID {
    steamId: string;
}

const API_URL = process.env.NEXT_API_URL || "http://localhost:3001";

export async function getUserID(): Promise<UserID | null> {
    const cookieStore = await cookies(),
        sidCookie = cookieStore.get("connect.sid"),
        cookieHeader = sidCookie ? `${sidCookie.name}=${sidCookie.value}` : "";

    const response = await fetch(`${API_URL}/api/user-id`, {
            headers: {
                Cookie: cookieHeader,
            },
            next: {
                revalidate: 3600,
            },
        }),
        data: UserID = await response.json();

    if (response.status === 401) return null;
    if (!response.ok) throw new Error("Ошибка получения пользователя!");

    return data;
}
