"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

interface PopUpBaseProps {
    items: string[];
    href?: string[];
}

type ParamsType = {
    game: string;
};
export const PopUpGames = ({ items, href }: PopUpBaseProps) => {
    const params = useParams<ParamsType>(),
        newParams = (params?.game ?? "").toUpperCase();

    return (
        <details className="relative inline-block text-left">
            <summary className="inline-flex justify-between items-center rounded-[6px] border-[2px] border-[#ffffff33] px-[20px] py-[10px] bg-[#292c32] text-white text-sm font-[500] hover:bg-[#2c2f35] cursor-pointer list-none">
                {newParams}
                <Image
                    src="/arrow_button.svg"
                    width={20}
                    height={20}
                    alt="arrow_button"
                />
            </summary>

            <div className="absolute left-0 mt-[6px] bg-[#292c32] border-[2px] border-[#ffffff33] rounded-[6px] z-10">
                <Link
                    className={`px-4 py-2 ${
                        items[0].replace(/\s/g, "").toUpperCase() === newParams
                            ? "text-white"
                            : "text-[#9c9da1]"
                    } hover:bg-blackOlive hover:rounded-[6px] cursor-pointer block`}
                    href={`/sell/${href?.[0] ?? "dota2"}?filter=all`}
                >
                    {items[0]}
                </Link>

                <Link
                    className={`px-4 py-2 ${
                        items[1].replace(/\s/g, "").toUpperCase() === newParams
                            ? "text-white"
                            : "text-[#9c9da1]"
                    } hover:bg-blackOlive hover:rounded-[6px] cursor-pointer block`}
                    href={`/sell/${href?.[1] ?? "dota2"}?filter=all`}
                >
                    {items[1]}
                </Link>
            </div>
        </details>
    );
};
