import { cookies } from "next/headers";
import { SteamProfile } from "@/shared/lib/user/user-type";

const API_URL = process.env.NEXT_API_URL || "http://localhost:3001";

export async function getUser(): Promise<SteamProfile | null> {
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
        }),
        data: SteamProfile = await response.json();

    if (response.status === 401) return null;
    if (!response.ok) throw new Error("Ошибка получения пользователя!");

    return data;
}
