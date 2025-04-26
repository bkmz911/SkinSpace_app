"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export const NavItems = () => {
    const params = useParams(),
        pathname = usePathname(),
        className =
            "text-[12px] uppercase text-[#a5a6a8] font-semibold mx-[30px] cursor-pointer",
        items = [
            {
                text: "Главная",
                className,
                pathname: "/",
            },
            {
                text: "Продать",
                className,
                pathname: `/sell/${params.game ? params.game : "dota2"}`,
            },
            {
                text: "FAQ",
                className,
                pathname: "/faq",
            },
        ];

    return (
        <div className="hidden xl:block">
            {items.map((item) => (
                <>
                    {item.pathname === pathname ? (
                        <div className="inline-block bg-transparent border-[1px] border-lemony skew-x-[-20deg] w-[90px] text-center mx-[30px] cursor-pointer">
                            <Link
                                href={item.pathname}
                                key={item.text}
                                className="skew-x-[20deg] block text-[12px] uppercase text-white font-semibold text-center"
                            >
                                {item.text}
                            </Link>
                        </div>
                    ) : (
                        <Link
                            href={item.pathname}
                            key={item.text}
                            className={item.className}
                        >
                            {item.text}
                        </Link>
                    )}
                </>
            ))}
        </div>
    );
};
