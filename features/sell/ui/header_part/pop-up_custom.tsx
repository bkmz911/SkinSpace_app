import Image from "next/image";
export const PopUpCustom = () => {
    return (
        <details className="relative inline-block text-left">
            <summary className="inline-flex justify-between items-center rounded-[6px] border-[2px] border-[#ffffff33] px-[28px] py-[10px] bg-[#292c32] text-white text-sm font-[500] hover:bg-[#2c2f35] cursor-pointer list-none">
                Цена
                <Image
                    src="/ladder-decrease-icon(white).svg"
                    className="mx-[10px]"
                    width={11}
                    height={11}
                    alt="ladder-icon"
                />
                <Image
                    src="/arrow_button.svg"
                    width={20}
                    height={20}
                    alt="arrow_button"
                />
            </summary>

            <ul className="absolute left-0 mt-[6px] bg-[#292c32] border-[2px] border-[#ffffff33] rounded-[6px] z-10">
                <li className="flex items-center px-4 py-2 text-white cursor-pointer">
                    Цена
                    <Image
                        src="/ladder-decrease-icon(white).svg"
                        width={14}
                        height={14}
                        className="mx-[8px]"
                        alt="ladder-decrease(white)"
                    />
                </li>
                <li className="flex items-center px-4 py-2 text-white hover:bg-gray-100 cursor-pointer opacity-50">
                    Цена
                    <Image
                        src="/ladder-increase-icon(grey).svg"
                        width={14}
                        height={14}
                        className="mx-[8px]"
                        alt="ladder-decrease(grey)"
                    />
                </li>
                <li className="px-4 py-2 text-white hover:bg-gray-100 cursor-pointer opacity-50">
                    Популярность
                </li>
            </ul>
        </details>
    );
};
