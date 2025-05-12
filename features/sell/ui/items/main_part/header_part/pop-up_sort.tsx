"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { QueryParamsType } from "../../../../model/query-params.type";

export const PopUpSort = () => {
    const { game } = useParams(),
        allQParams = Object.fromEntries(
            useSearchParams().entries()
        ) as QueryParamsType;

    return (
        <details className="relative inline-block text-left">
            <summary className="inline-flex justify-between items-center rounded-[6px] border-[2px] border-[#ffffff33] px-[20px] py-[10px] bg-[#292c32] text-white text-sm font-[500] hover:bg-[#2c2f35] cursor-pointer list-none">
                Редкость
                <Image
                    src="/arrow_button.svg"
                    width={20}
                    height={20}
                    alt="arrow_button"
                />
            </summary>

            <div className="absolute left-0 mt-[6px] bg-[#292c32] border-[2px] border-[#ffffff33] rounded-[6px] z-10">
                <Link
                    href={{
                        pathname: `/sell/${game}`,
                        query: { ...allQParams, sort: "rarity", order: "desc" },
                    }}
                    className={`flex items-center px-4 py-2 ${
                        allQParams.order === "desc"
                            ? "text-white"
                            : "text-[#9c9da1]"
                    } hover:bg-blackOlive hover:rounded-[6px] cursor-pointer`}
                >
                    Редкость
                    <Image
                        src={`${
                            allQParams.order === "desc"
                                ? "/ladder-decrease-icon(white).svg"
                                : "/ladder-decrease-icon(grey).svg"
                        }`}
                        width={14}
                        height={14}
                        className="mx-[8px]"
                        alt="ladder-decrease"
                    />
                </Link>
                <Link
                    href={{
                        pathname: `/sell/${game}`,
                        query: { ...allQParams, sort: "rarity", order: "asc" },
                    }}
                    className={`flex items-center px-4 py-2  ${
                        allQParams.order === "asc"
                            ? "text-white"
                            : "text-[#9c9da1]"
                    } hover:bg-blackOlive hover:rounded-[6px] cursor-pointer`}
                >
                    Редкость
                    <Image
                        src={`${
                            allQParams.order === "asc"
                                ? "/ladder-increase-icon(white).svg"
                                : "/ladder-increase-icon(grey).svg"
                        }`}
                        width={14}
                        height={14}
                        className="mx-[8px]"
                        alt="ladder-decrease(grey)"
                    />
                </Link>
            </div>
        </details>
    );
};
