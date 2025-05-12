import { getUser } from "@/shared/lib/user/get-user";
import { ErrorBlock } from "@/shared/ui";
import {
    AuthNavItem,
    LanguageSelect,
    Logo,
    NavItems,
    UnauthNavItem,
} from "@/widgets/Header";

export const Header = async () => {
    try {
        const user = await getUser();
        return (
            <header className="mx-[35px] xl:mx-[60px]">
                <nav className="flex items-center justify-between pt-[30px] xl:pt-[20px]">
                    <Logo />
                    <NavItems />
                    <div className="flex items-center">
                        <LanguageSelect />

                        {user ? (
                            <AuthNavItem avatar={user._json.avatarmedium} />
                        ) : (
                            <UnauthNavItem />
                        )}
                    </div>
                </nav>
            </header>
        );
    } catch {
        return (
            <div className="mt-[20px] flex mx-auto">
                <ErrorBlock text="Не удалось получить данные о пользователе! Попробуйте позже." />
            </div>
        );
    }
};
