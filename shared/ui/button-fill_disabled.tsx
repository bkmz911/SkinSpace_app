import Link from "next/link";
import { AnchorHTMLAttributes, FC, ReactNode } from "react";

type LinkButtonProps = {
    children: ReactNode;
    href: string | null;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const ButtonFillDisabled: FC<LinkButtonProps> = ({
    children,
    href,
    ...others
}) => {

    return (
        <Link href={href} {...others}>
            <span
                className={`text-[18px] py-[17px] px-[60px] rounded-tl-lg rounded-br-lg uppercase text-blackGrey font-extrabold bg-[#7c6e23] relative before:content-[''] before:absolute before:block before:w-[20%] before:h-[56px] before:translate-x-[-78%] before:rounded-tl-lg before:rounded-tr-[0.2rem] before:origin-bottom before:skew-x-[-30deg] before:bg-[#7c6e23] before:left-0 before:bottom-0 after:content-[''] after:absolute after:block after:w-[20%] after:h-[56px] after:translate-x-[5%] after:origin-bottom after:skew-x-[-30deg] after:bg-[#7c6e23] after:rounded-br-lg after:right-0 after:top-0`}
            >
                {children}
            </span>
        </Link>
    );
};
