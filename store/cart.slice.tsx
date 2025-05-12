import { DescriptionItem } from "@/features/sell/model/items.type";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartState {
    cart: DescriptionItem[];
    setItemCart: (value: DescriptionItem) => void;
    removeItemCart: (classid: string) => void;
}

export const useCartStore = create<CartState>()(
    persist(
        (set) => ({
            cart: [],
            setItemCart: (item) =>
                set((state) => ({
                    cart: state.cart.some((i) => i.classid === item.classid)
                        ? state.cart
                        : [...state.cart, item],
                })),
            removeItemCart: (classid) =>
                set((state) => ({
                    cart: state.cart.filter((i) => i.classid !== classid),
                })),
        }),
        { name: "cart-storage" }
    )
);
