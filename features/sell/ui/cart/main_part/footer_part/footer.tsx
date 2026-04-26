"use client";
import { getSkinWord } from "@/features/sell/model/get-skin-word";
import { ButtonFillActive, ButtonFillDisabled } from "@/shared/ui";
import { useCartStore } from "@/store/cart.slice";
import Image from "next/image";
import { useState } from "react";

export const Footer = () => {
    const cart = useCartStore((state) => state.cart),
        [isModalOpen, setModalOpen] = useState(false);

    return (
        <div className="h-[212px] absolute bottom-0 right-0 left-0 w-full bg-[#202328] rounded-b-[20px] p-[35px]">
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000099]">
                    <div
                        className="bg-granite rounded-[20px] w-[500px] h-[320px] p-[40px]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div>
                            <Image
                                src="/warning.webp"
                                width={40}
                                height={40}
                                alt="warning-image"
                                className="mx-auto"
                            />
                            <p className="text-[22px] text-white font-medium text-center mt-[15px]">
                                Требуется Steam API-ключ
                            </p>
                            <span className="text-[14px] text-[#929699] font-medium text-center mt-[15px]">
                                Чтобы выставить предметы на продажу, необходимо
                                добавить Steam API-ключ в вашем личном кабинете.
                            </span>
                            <ButtonFillActive href="/personal-cabinet" className="block mt-[50px] ml-[100px]">
                                В кабинет
                            </ButtonFillActive>
                        </div>
                    </div>
                </div>
            )}
            <div className="flex items-center justify-between">
                <p className="text-[22px] text-white font-medium">
                    Поступит в инвентарь:
                </p>
                <p className="text-[26px] text-lemony font-medium">
                    {cart.length} {getSkinWord(cart.length)}
                </p>
            </div>
            {cart.length > 0 ? (
                <ButtonFillActive
                    onClick={() => setModalOpen(true)}
                    href=""
                    className="block mt-[50px] ml-[85px]"
                >
                    Выставить на продажу
                </ButtonFillActive>
            ) : (
                <ButtonFillDisabled
                    href=""
                    className="block mt-[50px] ml-[85px]"
                >
                    Выставить на продажу
                </ButtonFillDisabled>
            )}
        </div>
    );
};
