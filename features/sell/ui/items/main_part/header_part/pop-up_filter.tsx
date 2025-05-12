"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { QueryParamsType } from "../../../../model/query-params.type";

export const PopUpFilter = () => {
    const { game } = useParams(),
        allQParams = Object.fromEntries(
            useSearchParams().entries()
        ) as QueryParamsType;

    const filterLabels: Record<string, string> = {
        all: "Все предметы",
        tradable: "Готовы к продаже",
        nontradable: "Нельзя продать",
    };

    const summaryLabel = filterLabels[allQParams.filter ?? "all"];

    return (
        <details className="relative inline-block text-left">
            <summary className="inline-flex justify-between items-center rounded-[6px] border-[2px] border-[#ffffff33] px-[20px] py-[10px] bg-[#292c32] text-white text-sm font-[500] hover:bg-[#2c2f35] cursor-pointer list-none">
                {summaryLabel}
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
                        query: { ...allQParams, filter: "all" },
                    }}
                    className={`flex items-center px-4 py-2 ${
                        allQParams.filter === "all"
                            ? "text-white"
                            : "text-[#9c9da1]"
                    } hover:bg-blackOlive hover:rounded-[6px] cursor-pointer`}
                >
                    Все предметы
                </Link>
                <Link
                    href={{
                        pathname: `/sell/${game}`,
                        query: { ...allQParams, filter: "tradable" },
                    }}
                    className={`flex items-center px-4 py-2 ${
                        allQParams.filter === "tradable"
                            ? "text-white"
                            : "text-[#9c9da1]"
                    } hover:bg-blackOlive hover:rounded-[6px] cursor-pointer`}
                >
                    Готовы к продаже
                </Link>
                <Link
                    href={{
                        pathname: `/sell/${game}`,
                        query: { ...allQParams, filter: "nontradable" },
                    }}
                    className={`flex items-center px-4 py-2 ${
                        allQParams.filter === "nontradable"
                            ? "text-white"
                            : "text-[#9c9da1]"
                    } hover:bg-blackOlive hover:rounded-[6px] cursor-pointer`}
                >
                    Нельзя продать
                </Link>
            </div>
        </details>
    );
};
