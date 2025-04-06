import Image from "next/image";
import React from "react";

export const AuthNavItem = () => {
    return (
        <div className="flex items-center">
            <div className="relative flex justify-center items-center rounded-r-lg pl-[8px] pr-[10px] xl:px-[10px] ml-[20px] xl:ml-[32px] w-[65px] xl:w-[140px] h-[35px] xl:h-[40px] bg-lemony xl:bg-[#2a2c30] before:content-[''] before:absolute before:block before:w-[20%] before:h-[35px] xl:before:h-[40px] before:translate-x-[-102%] xl:before:translate-x-[-92%] before:origin-bottom before:skew-x-[-20deg] xl:before:skew-x-[-30deg] before:bg-lemony xl:before:bg-[#2a2c30] before:left-0 before:bottom-0">
                <div className="flex items-center">
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
            </div>
            <div className="flex items-center ml-[35px]">
                <Image
                    src="/man.webp"
                    className="w-[40px] h-[40px] mr-[7px]"
                    width={40}
                    height={40}
                    alt="man"
                />
                <Image
                    src="/account_arrow.svg"
                    className="w-[14px] h-[14px] ml-[7px]"
                    width={14}
                    height={14}
                    alt="стрелочка"
                />
            </div>
        </div>
    );
};
