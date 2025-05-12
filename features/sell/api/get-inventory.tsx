import { cookies } from "next/headers";
import { InventoryResponse } from "../model/items.type";

interface GetInventoryProps {
    game: string;
    sort: string | string[] | undefined;
    sortOrder: string | string[] | undefined;
    filter: string | string[] | undefined;
    searchQuery: string | string[] | undefined;
}

export async function getInventory({
    game,
    sort,
    sortOrder,
    filter,
    searchQuery,
}: GetInventoryProps) {
    const cookieStore = await cookies(),
        sidCookie = cookieStore.get("connect.sid"),
        cookieHeader = sidCookie ? `${sidCookie.name}=${sidCookie.value}` : "";

    let URL = `http://localhost:3001/api/inventory?currentGame=${game}&sort=${sort}&order=${sortOrder}&filter=${filter}`;
    if (searchQuery) {
        URL += `&searchQuery=${searchQuery}`;
    }

    const response = await fetch(URL, {
            headers: {
                Cookie: cookieHeader,
            },
            next: {
                revalidate: 3600,
            },
        }),
        data: InventoryResponse = await response.json();

    if (response.status === 401) return null;
    if (!response.ok) throw new Error("Ошибка получения пользователя!");

    return data.descriptions;
}
