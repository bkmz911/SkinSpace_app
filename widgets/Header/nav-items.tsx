"use client";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";

export const NavItems = () => {
    const { game } = useParams(),
        pathname = usePathname();

    const items = [
        { text: "Главная", href: "/" },
        { text: "Продать", href: `/sell/${game ?? "dota2"}?filter=all` },
        { text: "FAQ", href: "/faq" },
    ];

    return (
        <div className="hidden xl:flex">
            {items.map(({ text, href }) => {
                const isActive = pathname === href.split("?")[0];

                return isActive ? (
                    <div
                        key={href}
                        className="inline-block bg-transparent border-[1px] border-lemony skew-x-[-20deg] w-[90px] text-center mx-[30px] cursor-pointer"
                    >
                        <Link
                            href={href}
                            className="skew-x-[20deg] block text-[12px] uppercase text-white font-semibold text-center"
                        >
                            {text}
                        </Link>
                    </div>
                ) : (
                    <Link
                        key={href}
                        href={href}
                        className="text-[12px] uppercase text-[#a5a6a8] font-semibold mx-[30px] cursor-pointer"
                    >
                        {text}
                    </Link>
                );
            })}
        </div>
    );
};
