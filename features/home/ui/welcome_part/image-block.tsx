import Image from "next/image";

export const ImageBlock = () => {
    return (
        <div className="pt-[20px] xl:pt-0 ml-[15px]">
            <Image
                src="/wraith_king.webp"
                width={774}
                height={774}
                alt="Wraith_King"
            />
        </div>
    );
};
