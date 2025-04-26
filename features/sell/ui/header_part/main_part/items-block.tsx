import { Header } from "@/features/sell/ui/header_part/";
import { InventoryResponse } from "@/shared/lib/items-type";
import { cookies } from "next/headers";
import { Item } from "./item";

interface ItemsBlockProps {
    game: string;
}

export const ItemsBlock = async ({ game }: ItemsBlockProps) => {
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
        ),
        items: InventoryResponse = await response.json();

        console.log(items)

    return (
        <div className="bg-[#2C2F35D9] border-[2px] border-[#2E3137] rounded-[20px] p-[45px] w-[1120px]">
            <Header />
            <div
                className={`flex items-center justify-start flex-wrap mt-[22px] gap-2 ${
                    items?.descriptions?.length > 12
                        ? "h-[821px] overflow-y-scroll"
                        : "h-auto overflow-auto"
                }`}
            >
                {items?.descriptions?.map((item, index: number) => {
                    return (
                        <Item
                            key={`dota 2-${item.classid}-${index}`}
                            item={item}
                        />
                    );
                })}
            </div>
        </div>
    );
};
