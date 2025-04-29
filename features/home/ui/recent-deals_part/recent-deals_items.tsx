import { getUser } from "@/shared/lib/get-user";
import { ErrorBlock, WarningBlock, WarningBlockUnauth } from "@/shared/ui";

export const RecentDealsItems = async () => {
    try {
        const user = await getUser();

        return (
            <>
                {user ? (
                    <WarningBlock
                        mainText="Нет информации о последних сделках!"
                        subText="Для получения информации о предметах перейти в раздел
                “Продать”."
                        buttonText="Продать"
                        href={`/sell/dota2`}
                    />
                ) : (
                    <WarningBlockUnauth />
                )}
            </>
        );
    } catch {
        return (
            <ErrorBlock text="Не удалось получить данные о пользователе! Попробуйте позже." />
        );
    }
};
