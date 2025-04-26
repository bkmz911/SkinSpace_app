import Image from "next/image";
import Link from "next/link";

interface PopUpBaseProps {
    items: string[];
    mainText: string;
}

export const PopUpBase = ({ items, mainText }: PopUpBaseProps) => {
    return (
        <details className="relative inline-block text-left">
            <summary className="inline-flex justify-between items-center rounded-[6px] border-[2px] border-[#ffffff33] px-[28px] py-[10px] bg-[#292c32] text-white text-sm font-[500] hover:bg-[#2c2f35] cursor-pointer list-none">
                {mainText}
                <Image
                    src="/arrow_button.svg"
                    width={20}
                    height={20}
                    alt="arrow_button"
                />
            </summary>

            <div className="absolute left-0 mt-[6px] bg-[#292c32] border-[2px] border-[#ffffff33] rounded-[6px] z-10">
                <Link
                    className="px-4 py-2 text-white hover:bg-blackOlive cursor-pointer block"
                    href="/sell/dota2"
                >
                    {items[0]}
                </Link>

                <Link
                    className="px-4 py-2 text-white hover:bg-blackOlive cursor-pointer block"
                    href="/sell/CS2"
                >
                    {items[1]}
                </Link>
                {/* <li
                    className={`px-4 py-2 text-white hover:bg-blackOlive cursor-pointer`}
                    
                >
                    {items[2]}
                </li> */}
            </div>
        </details>
    );
};
