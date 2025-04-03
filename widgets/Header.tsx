import Image from "next/image";
import React from "react";

export const Header = () => {
    return (
        <header className="mx-[35px] xl:mx-[60px]">
            <nav className="flex items-center justify-between pt-[30px] xl:pt-[20px]">
                <div className="flex items-end">
                    <div className="mr-[4px] relative bottom-[5px]">
                        <Image
                            src="/nav_burger.svg"
                            className="w-[22px] h-[14px] block xl:hidden"
                            width={28}
                            height={28}
                            alt="burger_menu"
                        />
                    </div>
                    <Image
                        src="/fire_logo.webp"
                        className="w-[24px] h-[32px] xl:w-[41px] xl:h-[56px] mx-[4px]"
                        width={41}
                        height={56}
                        alt="logo"
                    />
                    <h2 className="text-[16px] xl:text-[30px] text-white font-bold ml-[4px]">
                        SkinSpace
                    </h2>
                </div>
                <div className="hidden xl:block">
                    <span className="text-[12px] uppercase text-[#a5a6a8] font-semibold mx-[30px]">
                        Обмен
                    </span>
                    <span className="text-[12px] uppercase text-[#a5a6a8] font-semibold mx-[30px]">
                        Купить
                    </span>
                    <span className="text-[12px] uppercase text-[#a5a6a8] font-semibold mx-[30px]">
                        Продать
                    </span>
                    <span className="text-[12px] uppercase text-[#a5a6a8] font-semibold mx-[30px]">
                        FAQ
                    </span>
                </div>
                <div className="flex items-center">
                    <div className="relative flex items-center justify-start xl:justify-center rounded-l-lg pl-[12px] xl:pl-[10px] w-[50px] xl:w-[90px] h-[35px] xl:h-[40px] bg-[#2a2c30] before:content-[''] before:absolute before:block before:w-[25%] xl:before:w-[30%] before:h-[35px] xl:before:h-[40px] before:-translate-x-[8%] xl:before:-translate-x-[2%] before:origin-bottom before:skew-x-[-20deg] xl:before:skew-x-[-30deg] before:bg-[#2a2c30] before:right-0 before:bottom-0">
                        <Image
                            src="/russia.png"
                            className="w-[16px] h-[16px] xl:w-[24px] xl:h-[24px] mr-[3px] xl:mr-[5px]"
                            width={24}
                            height={24}
                            alt="russian_flag"
                        />
                        <Image
                            src="/language_arrow.svg"
                            className="w-[8px] h-[5px] xl:w-[14px] xl:h-[9px] ml-[3px] xl:ml-[5px]"
                            width={14}
                            height={9}
                            alt="arrow"
                        />
                    </div>
                    <div className="relative flex justify-center items-center rounded-r-lg pl-[8px] pr-[10px] xl:px-[10px] ml-[20px] xl:ml-[32px] w-[65px] xl:w-[140px] h-[35px] xl:h-[40px] bg-lemony xl:bg-[#2a2c30] before:content-[''] before:absolute before:block before:w-[20%] before:h-[35px] xl:before:h-[40px] before:translate-x-[-102%] xl:before:translate-x-[-92%] before:origin-bottom before:skew-x-[-20deg] xl:before:skew-x-[-30deg] before:bg-lemony xl:before:bg-[#2a2c30] before:left-0 before:bottom-0">
                        <div className="items-center hidden xl:flex">
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
                        </div>
                        <div className="flex items-center xl:hidden">
                            <Image
                                src="/steam_logo.svg"
                                className="w-[16px] h-[16px] mr-[2px]"
                                width={16}
                                height={16}
                                alt="steam_logo"
                            />
                            <span className="text-blackGrey text-[8px] font-bold ml-[2px]">
                                ВОЙТИ
                            </span>
                        </div>
                    </div>
                    <div className="hidden xl:flex items-center ml-[35px]">
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
                    </div>
                </div>
            </nav>
        </header>
    );
};
