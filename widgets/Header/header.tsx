import Image from "next/image";
import { LanguageSelect, Logo, NavItems } from "@/widgets/Header"

export const Header = () => {
    return (
        <header className="mx-[35px] xl:mx-[60px]">
            <nav className="flex items-center justify-between pt-[30px] xl:pt-[20px]">
                <Logo/>
                <NavItems/>
                <div className="flex items-center">
                    <LanguageSelect/>
                    <div className="relative cursor-pointer flex justify-center items-center rounded-r-lg pl-[8px] pr-[10px] xl:px-[20px] ml-[20px] xl:ml-[32px] h-[35px] xl:h-[40px] bg-lemony before:content-[''] before:absolute before:block before:w-[20%] xl:before:w-[12%] before:h-[35px] xl:before:h-[40px] before:translate-x-[-102%] xl:before:translate-x-[-92%] before:origin-bottom before:skew-x-[-20deg] xl:before:skew-x-[-30deg] before:bg-lemony before:left-0 before:bottom-0">
                        {/* <div className="items-center hidden xl:flex">
                            <span className="text-lemony text-[16px] font-semibold mr-[5px]">
                                ₽ 150.20
                            </span>
                            <Image
                                src="/balance_plus.svg"
                                className="w-[14px] h-[14px] ml-[5px]"
                                width={14}
                                height={14}
                                alt="plus"
                            />
                        </div> */}
                        <div className="hidden xl:flex items-center">
                            <Image
                                src="/steam_logo.svg"
                                className="w-[24px] h-[24px]"
                                width={16}
                                height={16}
                                alt="steam_logo"
                            />
                            <span className="text-blackGrey text-[12px] font-bold ml-[7px] uppercase">
                                Войти через Steam
                            </span>
                        </div>
                        <div className="flex items-center xl:hidden">
                            <Image
                                src="/steam_logo.svg"
                                className="w-[16px] h-[16px]"
                                width={16}
                                height={16}
                                alt="steam_logo"
                            />
                            <span className="text-blackGrey text-[8px] font-bold ml-[4px] uppercase">
                                Войти
                            </span>
                        </div>
                    </div>
                    {/* <div className="hidden xl:flex items-center ml-[35px]">
                        <Image
                            src="/man.webp"
                            className="w-[40px] h-[40px] mr-[7px]"
                            width={40}
                            height={40}
                            alt="man"
                        />
                        <Image
                            src="/account_arrow.svg"
                            className="w-[14px] h-[9px] ml-[7px]"
                            width={14}
                            height={9}
                            alt="arrow"
                        />
                    </div> */}
                </div>
            </nav>
        </header>
    );
};
