import Image from "next/image";
import { ButtonFill } from "./button-fill";
import React from "react";

export const WarningBlockAuth = () => {
    return (
        <div className="pt-[50px] sm:pt-[80px] pb-[50px] sm:pb-[100px] w-[312px] mx-auto">
            <Image
                src="/warning.webp"
                className="w-[40px] h-[40px] mx-auto"
                width={40}
                height={40}
                alt="warning"
            />
            <h2 className="text-[18px] sm:text-[22px] text-white font-medium max-w-[141px] mx-auto sm:max-w-none mt-[16px] sm:mt-[16px] text-center">
                Нет доступных предметов!
            </h2>
            <span className="mt-[24px] sm:mt-[20px] text-[10px] sm:text-[14px] text-[#FFFFFF80] font-medium max-w-[170px] sm:max-w-[289px] block text-center mx-auto">
                Для приобретения скинов на продажу вам нужно перейти в раздел
                “Купить”.
            </span>
            <ButtonFill href="#" className="block mt-[70px] ml-[55px]">
                Купить
            </ButtonFill>
        </div>
    );
};

export const WarningBlockUnauth = () => {
    return (
        <div className="pt-[50px] sm:pt-[80px] pb-[50px] sm:pb-[100px] w-[312px] mx-auto">
            <Image
                src="/warning.webp"
                className="w-[40px] h-[40px] mx-auto"
                width={40}
                height={40}
                alt="warning"
            />
            <h2 className="text-[18px] sm:text-[22px] text-white font-medium max-w-[141px] mx-auto sm:max-w-none mt-[16px] sm:mt-[16px] text-center">
                Ваш список пуст!
            </h2>
            <span className="mt-[24px] sm:mt-[20px] text-[10px] sm:text-[14px] text-[#FFFFFF80] font-medium max-w-[170px] sm:max-w-[289px] block text-center mx-auto">
                Добавь или перетащи сюда скины, которые хочешь продать.
            </span>
        </div>
    );
};
