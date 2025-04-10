import Image from "next/image";

interface FooterContactsImgProps {
    src: string;
    alt: string;
    className: string;
}

export const FooterContactsImg = ({
    src,
    alt,
    className,
}: FooterContactsImgProps) => {
    return (
        <>
            <Image
                src={src}
                width={42}
                height={42}
                className={className}
                alt={alt}
            />
        </>
    );
};
