import Image from "next/image";

export default function Sell() {
    return (
        <section className="flex items-center justify-center gap-[12px] flex-wrap my-[60px] ml-[60px] mr-[80px]">
            {/* <div className="bg-[#2C2F35D9] border-[2px] border-[#2E3137] rounded-[20px] h-[1028px]">
                <div className="px-[10px] pt-[20px] flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="flex items-center">
                            <div className="bg-[#292C32] border-[2px] border-[#FFFFFF33] rounded-[8px] flex items-center justify-center w-[70px] h-[30px]">
                                <span className="sell_text-[10px] text-white font-medium leading-[14px]erorr_leftBlock_sub_headerPart_filterDota_text_mobile">
                                    CS:GO
                                </span>
                                <Image
                                    src="/arrow_button.svg"
                                    className="w-[17px] h-[17px] pb-[2px]"
                                    width={17}
                                    height={17}
                                    alt="arrow"
                                />
                            </div>
                            <div className="flex items-center justify-center bg-[#292C32] rounded-[8px] border-[2px] border-[#FFFFFF33] w-[113px] h-[30px] ml-[4px]">
                                <span className="text-[10px] text-white font-medium leading-[14px]">
                                    Все предметы
                                </span>
                                <Image
                                    src="/arrow_button.svg"
                                    className="w-[17px] h-[17px] pb-[2px]"
                                    width={17}
                                    height={17}
                                    alt="arrow"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="bg-[#2C2F35D9] border-[2px] border-[#2E3137] rounded-[20px] p-[45px]">
                <div className="flex items-center justify-between">
                    <Image
                        src="/reload-icon.svg"
                        width={30}
                        height={30}
                        alt="reload-icon"
                    />
                    <details className="relative inline-block text-left">
                        <summary className="inline-flex justify-between items-center rounded-[6px] border-[2px] border-[#ffffff33] px-[28px] py-[10px] bg-[#292c32] text-white text-sm font-[500] hover:bg-[#2c2f35] cursor-pointer list-none">
                            Dota 2
                            <Image
                                src="/arrow_button.svg"
                                width={20}
                                height={20}
                                alt="arrow_button"
                            />
                        </summary>

                        <ul className="absolute left-0 mt-[6px] bg-[#292c32] border-[2px] border-[#ffffff33] rounded-[6px] z-10">
                            <li className="px-4 py-2 text-white cursor-pointer">
                                Dota 2
                            </li>
                            <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                                CS2
                            </li>
                            <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                                Rust
                            </li>
                        </ul>
                    </details>
                </div>
            </div>
            <Image
                src="/arrow_continue.svg"
                width={50}
                height={50}
                alt="arrow-continue"
            />
            <div className="bg-[#2C2F35D9] border-[2px] border-[#2E3137] w-full sm:w-[606px] rounded-[20px] h-[600px] sm:h-[1028px] relative"></div>
        </section>
    );
}
