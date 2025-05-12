import { Item, Header } from "@/features/sell/ui/items/main_part/";
import { getInventory } from "@/features/sell/api/get-inventory";
import { ErrorBlock, WarningBlockFunc, WarningBlockStatic } from "@/shared/ui";

interface ItemsBlockProps {
    game: string;
    sort: string | string[] | undefined;
    sortOrder: string | string[] | undefined;
    filter: string | string[] | undefined;
    searchQuery?: string | string[] | undefined;
}

export const ItemsBlock = async ({
    game,
    sort,
    sortOrder,
    filter,
    searchQuery,
}: ItemsBlockProps) => {
    try {
        const items = await getInventory({
            game,
            sort,
            sortOrder,
            filter,
            searchQuery,
        });

        return (
            <div className="bg-[#2C2F35D9] border-[2px] border-[#2E3137] rounded-[20px] p-[45px] max-w-[1135px]">
                <Header />
                {items ? (
                    <div
                        className={`flex items-center justify-start flex-wrap mt-[22px] gap-2 ${
                            items.length > 12
                                ? "h-[821px] overflow-y-scroll"
                                : "h-auto overflow-auto"
                        }`}
                    >
                        {items.length > 0 ? (
                            items.map((item, index: number) => {
                                return (
                                    <Item
                                        key={
                                            game === "dota2"
                                                ? `dota2-${item.classid}-${index}`
                                                : `cs2-${item.classid}-${index}`
                                        }
                                        item={item}
                                    />
                                );
                            })
                        ) : (
                            <WarningBlockStatic
                                mainText="Ничего не найдено!"
                                subText="Отсутствуют результаты по данному запросу."
                            />
                        )}
                    </div>
                ) : (
                    <WarningBlockFunc
                        mainText="Нет доступных предметов!"
                        subText="Для получения информации о предметах вам нужно войти в steam-аккаунт."
                        buttonText="Войти"
                        href="http://localhost:3001/auth/steam"
                    />
                )}
            </div>
        );
    } catch {
        return (
            <div className="bg-[#2C2F35D9] border-[2px] border-[#2E3137] rounded-[20px] p-[45px] h-[1028px] w-[1100px]">
                <ErrorBlock text="Не удалось получить ответ от сервера! Попробуйте позже." />
            </div>
        );
    }
};
