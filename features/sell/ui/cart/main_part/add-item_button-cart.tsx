"use client";
import { DescriptionItem } from "@/features/sell/model/items.type";
import { useCartStore } from "@/store/cart.slice";
import Image from "next/image";

interface AddItemButtonCartProps {
    item: DescriptionItem;
}

export const AddItemButtonCart = ({ item }: AddItemButtonCartProps) => {
    const removeItemCart = useCartStore((state) => state.removeItemCart);

    return (
        <>
            <Image
                src="/minus-icon.svg"
                width={28}
                height={28}
                className="cursor-pointer"
                alt="plus-icon"
                onClick={() => removeItemCart(item.classid)}
            />
        </>
    );
};
