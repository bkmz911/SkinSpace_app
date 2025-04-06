import {
    LanguageSelect,
    Logo,
    NavItems,
    UnauthNavItem,
} from "@/widgets/Header";

export const Header = () => {
    return (
        <header className="mx-[35px] xl:mx-[60px]">
            <nav className="flex items-center justify-between pt-[30px] xl:pt-[20px]">
                <Logo />
                <NavItems />
                <div className="flex items-center">
                    <LanguageSelect />
                    <UnauthNavItem />
                </div>
            </nav>
        </header>
    );
};
