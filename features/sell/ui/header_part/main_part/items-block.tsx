import { Header } from "@/features/sell/ui/header_part/";
import { InventoryResponse } from "@/shared/lib/items-type";
import { Item } from "./item";
import { getInventory } from "@/features/sell/api/get-inventory";
import { ErrorBlock } from "@/shared/ui";

interface ItemsBlockProps {
    game: string;
}

export const ItemsBlock = async ({ game }: ItemsBlockProps) => {
    try {
        const items: InventoryResponse = await getInventory({ game });

        return (
            <div className="bg-[#2C2F35D9] border-[2px] border-[#2E3137] rounded-[20px] p-[45px] w-[1120px]">
                <Header />
                {items ?                 <div
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
                </div> : <h1>Данные получить не удалось! Зарегайтесь.</h1>}
            </div>
        );
    } catch {
        return (
            <ErrorBlock text="Не удалось получить данные о пользователе! Попробуйте позже." />
        );
    }
};
