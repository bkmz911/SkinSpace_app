import { cookies } from "next/headers";

interface GetInventoryProps {
    game: string;
}

export async function getInventory({ game }: GetInventoryProps) {
    const cookieStore = await cookies(),
        sidCookie = cookieStore.get("connect.sid"),
        cookieHeader = sidCookie ? `${sidCookie.name}=${sidCookie.value}` : "";

    const response = await fetch(
            `http://localhost:3001/api/inventory?currentGame=${game}`,
            {
                headers: {
                    Cookie: cookieHeader,
                },
                next: {
                    revalidate: 3600,
                },
            }
        )

    if (response.status === 401) return null;
    if (!response.ok) throw new Error("Ошибка получения пользователя!");

    return response.json();
}
