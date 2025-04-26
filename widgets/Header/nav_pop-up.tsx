"use client";

import Link from "next/link";

const items = [
    {
        text: "Пополнить баланс",
        className:
            "px-4 py-2 hover:bg-blackOlive hover:rounded-t-md border-b-[1px] border-blackOlive",
    },
    {
        text: "Вывести с баланса",
        className:
            "px-4 py-2 hover:bg-blackOlive border-b-[1px] border-blackOlive",
    },
    {
        text: "Личный кабинет",
        className:
            "px-4 py-2 hover:bg-blackOlive border-b-[1px] border-blackOlive",
    },
];

export const NavPopUp = () => {
    return (
        <div className="absolute right-0 mt-2 w-[226px] bg-[#2a2c30] text-white rounded-md shadow-lg z-50">
            <ul className="flex flex-col cursor-pointer">
                {items.map((item) => (
                    <li key={item.text} className={item.className}>
                        {item.text}
                    </li>
                ))}
                <Link
                    href="http://localhost:3001/api/logout"
                    className="px-4 py-2 hover:bg-blackOlive hover:rounded-b-md"
                >
                    Выйти
                </Link>
            </ul>
        </div>
    );
};
