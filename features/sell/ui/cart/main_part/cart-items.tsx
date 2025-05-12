"use client";
import { useCartStore } from "@/store/cart.slice";
import { CartItem } from "@/features/sell/ui/cart/main_part/cart-item";
import { WarningBlockStatic } from "@/shared/ui";
import { useParams } from "next/navigation";

export const CartItems = () => {
    const cart = useCartStore((state) => state.cart),
        { game } = useParams<{ game: string }>();

    return (
        <div
            className={`flex items-start flex-wrap gap-2 mt-10 ${
                cart.length >= 5
                    ? "overflow-y-scroll h-[700px]"
                    : "overflow-auto h-auto"
            } pb-[50px]`}
        >
            {cart.length > 0 ? (
                cart.map((item, index: number) => {
                    return (
                        <CartItem
                            key={
                                game === "dota2"
                                    ? `dota2-${item.classid}-${index}`
                                    : `cs2-${item.classid}-${index}`
                            }
                            item={item}
                        />
                    );
                })
            ) : (
                <WarningBlockStatic
                    mainText="Ваш список пуст!"
                    subText="Добавь сюда скины, которые хочешь продать."
                />
            )}
        </div>
    );
};
