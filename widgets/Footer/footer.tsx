import Image from "next/image";
import React from "react";

export const Footer = () => {
    return (
        <footer
            className="pb-[80px] -mt-[100px]"
            style={{
                background:
                    "linear-gradient(180deg, rgba(39, 38, 39, 0) 0%, rgba(34, 34, 36, 0.76) 32.43%, rgba(31, 31, 34, 0.81) 54.41%, #181A1E 100%)",
            }}
        >
            <div className="flex items-start justify-between flex-wrap gap-[30px] mx-[50px] xl:mx-[70px]">
                <div>
                    <h2 className="text-[30px] text-white font-semibold">
                        SkinsTrade
                    </h2>
                </div>
                <div className="order-none md:order-last">
                    <span className="text-white text-[20px] font-semibold">
                        Связаться с нами:
                    </span>
                    <div className="flex justify-end mt-[10px] xl:ml-[12px]">
                        <Image
                            src="/tg_contact.svg"
                            width={42}
                            height={42}
                            className="mr-[15px] w-[42px] h-[42px]"
                            alt="tg"
                        />
                        <Image
                            src="/vk_contact.svg"
                            width={42}
                            height={42}
                            className="w-[42px] h-[42px]"
                            alt="vk"
                        />
                    </div>
                </div>
                <div className="flex justify-between mx-auto">
                    <div className="mx-[20px] md:mx-[50px]">
                        <span className="block text-[14px] xl:text-[18px] font-medium text-[#b0b0b1]">
                            Обмен
                        </span>
                        <span className="block text-[14px] xl:text-[18px] font-medium text-[#b0b0b1] pt-[20px]">
                            Купить
                        </span>
                        <span className="block text-[14px] xl:text-[18px] font-medium text-[#b0b0b1] pt-[20px]">
                            Продать
                        </span>
                        <span className="block text-[14px] xl:text-[18px] font-medium text-[#b0b0b1] pt-[20px]">
                            FAQ
                        </span>
                    </div>
                    <div className="mx-[20px] md:mx-[50px] order-first sm:order-none">
                        <span className="block text-[14px] xl:text-[18px] font-medium text-[#b0b0b1]">
                            Контакты
                        </span>
                        <span className="block text-[14px] xl:text-[18px] font-medium text-[#b0b0b1] pt-[20px]">
                            Гарантии
                        </span>
                        <span className="block text-[14px] xl:text-[18px] font-medium text-[#b0b0b1] pt-[20px]">
                            Как это работает
                        </span>
                        <span className="block text-[14px] xl:text-[18px] font-medium text-[#b0b0b1] pt-[20px]">
                            Политика конфиденциальности
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
