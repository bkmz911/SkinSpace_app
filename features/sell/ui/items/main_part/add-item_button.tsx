"use client";
import { DescriptionItem } from "@/features/sell/model/items.type";
import { useCartStore } from "@/store/cart.slice";
import Image from "next/image";

interface AddItemButtonProps {
    item: DescriptionItem;
}

export const AddItemButton = ({ item }: AddItemButtonProps) => {
    const setItemCart = useCartStore((state) => state.setItemCart);

    return (
        <>
            <Image
                src="/plus-icon.svg"
                width={28}
                height={28}
                className="cursor-pointer"
                alt="plus-icon"
                onClick={() => setItemCart(item)}
            />
        </>
    );
};
