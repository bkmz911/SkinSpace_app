"use client";
import { getSkinWord } from "@/features/sell/model/get-skin-word";
import { ButtonFillActive, ButtonFillDisabled } from "@/shared/ui";
import { useCartStore } from "@/store/cart.slice";

export const Footer = () => {
    const cart = useCartStore((state) => state.cart);

    return (
        <div className="h-[212px] absolute bottom-0 right-0 left-0 w-full bg-[#202328] rounded-b-[20px] p-[35px]">
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
                    href="/personal-cabinet"
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
