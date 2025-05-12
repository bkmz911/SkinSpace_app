"use client";
import { useCartStore } from "@/store/cart.slice";

export const Header = () => {
    const cart = useCartStore((state) => state.cart);

    return (
        <div className="flex items-center justify-between">
            <p className="text-[18px] font-medium text-white">На продажу</p>
            <p className="text-[18px] text-[#949599] font-medium">
                Всего:{" "}
                <span className="text-[18px] text-lemony font-extrabold">
                    {cart.length}
                </span>
            </p>
        </div>
    );
};
