"use client";
import { useGetUser } from "@/shared/lib/useGetUser";
import { PreloaderAuthentication } from "@/shared/ui";
import {
    AuthNavItem,
    LanguageSelect,
    Logo,
    NavItems,
    UnauthNavItem,
} from "@/widgets/Header";

export const Header = () => {
    const { user, isLoading, error } = useGetUser();

    if (isLoading) return <PreloaderAuthentication />;
    if (error) return <h1>AAA АШИБКА</h1>;

    return (
        <header className="mx-[35px] xl:mx-[60px]">
            <nav className="flex items-center justify-between pt-[30px] xl:pt-[20px]">
                <Logo />
                <NavItems />
                <div className="flex items-center">
                    <LanguageSelect />

                    {user ? (
                        <AuthNavItem avatar={user.avatarmedium} />
                    ) : (
                        <UnauthNavItem />
                    )}
                </div>
            </nav>
        </header>
    );
};
