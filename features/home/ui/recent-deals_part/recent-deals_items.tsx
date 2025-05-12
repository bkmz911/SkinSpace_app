import { getUser } from "@/shared/lib/user/get-user";
import { ErrorBlock, WarningBlockFunc, WarningBlockStatic } from "@/shared/ui";

export const RecentDealsItems = async () => {
    try {
        const user = await getUser();

        return (
            <>
                {user ? (
                    <WarningBlockFunc
                        mainText="Нет информации о последних сделках!"
                        subText="Для получения информации о предметах перейти в раздел
                “Продать”."
                        buttonText="Продать"
                        href={`/sell/dota2?filter=all`}
                    />
                ) : (
                    <WarningBlockStatic
                        mainText="Вы не зарегистрированы!"
                        subText="Войдите в steam-аккаунт, если хотите получить информацию о
                сделках."
                    />
                )}
            </>
        );
    } catch {
        return (
            <div className="mt-[50px] flex mx-auto">
                <ErrorBlock text="Не удалось получить данные о пользователе! Попробуйте позже." />
            </div>
        );
    }
};
