import Image from "next/image";
import React from "react";

interface ItemImageProps {
    src: string;
}

export const ItemImage = ({ src }: ItemImageProps) => {
    return (
        <>
            <Image
                src={`/${src}_mobile.webp`}
                className="w-[306px] h-[143px] block xl:hidden"
                width={306}
                height={143}
                alt={`${src}_mobile`}
            />
            <Image
                src={`/${src}_desktop.webp`}
                className="w-[306px] h-[252px] hidden xl:block"
                width={306}
                height={252}
                alt={`${src}_desktop`}
            />
        </>
    );
};
