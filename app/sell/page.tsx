import Image from "next/image";

export default function Sell() {
    return (
        <section className="flex items-center justify-center gap-[12px] flex-wrap my-[60px] ml-[60px] mr-[80px]">
            {/* <div className="bg-[#2C2F35D9] border-[2px] border-[#2E3137] rounded-[20px] h-[1028px]">
                <div className="px-[10px] pt-[20px] flex items-center justify-between">
                    <div className="flex sm:hidden items-center">
                        <div className="flex items-center">
                            <div className="bg-[#292C32] border-[2px] border-[#FFFFFF33] rounded-[8px] flex items-center justify-center w-[70px] h-[30px]">
                                <span className="sell_text-[10px] text-white font-medium leading-[14px]">
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
                    <div className="px-[40px] pt-[40px] hidden: sm:flex items-center justify-between">
                        <div className="sell_erorr_leftBlock_headerPartLeft">
                            <div className="flex items-center">
                                <img src="img/prereloader.png" className="w-[30px] h-[30px]" alt="загрузчик"/>
                                <div className="bg-[#292C32] border-[2px] border-[#FFFFFF33] rounded-[8px] flex items-center justify-center w-[124px] h-[40px] ml-[28px] mr-[30px]">
                                    <span className="text-[14px] text-white font-medium leading-[20px]">Dota 2</span>
                                    <img src="img/arrow_down.svg" className="w-[20px] h-[20px]" alt="стрелочка"/>
                                </div>
                                <div className="relative w-[412px] h-[40px]">
                                    <img src="img/search_input.svg" className="w-[34px] h-[34px] absolute left-[20px] top-[3px]" alt="лупа"/>
                                    <input type="text" className="bg-[#FFFFFF1A] rounded-[10px] w-[412px] h-[40px] pl-[62px]" placeholder="Поиск по скинам"/>
                                </div>
                            </div>
                        </div>
                        <div className="ml-[55px]">
                            <div className="sell_erorr_leftBlock_sub_headerPartRight">
                                <div className="sell_erorr_leftBlock_sub_headerPart_filterItems_filter">
                                    <div className="sell_erorr_leftBlock_sub_headerPart_filterItems">
                                        <span className="sell_erorr_leftBlock_sub_headerPart_filterItems_text">Все предметы</span>
                                        <img src="img/arrow_down.svg" className="arrow_filter" alt="стрелочка"/>
                                    </div>
                                    <div className="sell_erorr_leftBlock_sub_headerPart_filterItems_filterBlock">
                                        <span className="sell_erorr_leftBlock_sub_headerPart_filterItems_filterBlock_textActive">Все предметы</span>
                                        <span className="sell_erorr_leftBlock_sub_headerPart_filterItems_filterBlock_text">На продаже</span>
                                        <span className="sell_erorr_leftBlock_sub_headerPart_filterItems_filterBlock_text">Не на продаже</span>
                                    </div>
                                </div>
                                <div className="sell_erorr_leftBlock_sub_headerPart_filterPrice_filter">
                                    <div className="sell_erorr_leftBlock_sub_headerPart_filterPrice">
                                        <span className="sell_erorr_leftBlock_sub_headerPart_filterPrice_text">Цена</span>
                                        <img src="img/ladder.svg" className="ladder" alt="лесенка"/>
                                        <img src="img/arrow_down.svg" className="arrow_filter" alt="стрелочка"/>
                                    </div>
                                    <div className="sell_erorr_leftBlock_sub_headerPart_filterPrice_filterBlock">
                                        <div className="sell_erorr_leftBlock_sub_headerPart_filterPrice_sub_filterBlock">
                                            <span className="sell_erorr_leftBlock_sub_headerPart_filterPrice_sub_filterBlock_textActive">
                                                Цена
                                            </span>
                                            <img src="img/ladder.svg" className="ladder_filter" alt="лесенка"/>
                                        </div>
                                        <div className="sell_erorr_leftBlock_sub_headerPart_filterPrice_sub_filterBlock">
                                            <span className="sell_erorr_leftBlock_sub_headerPart_filterPrice_sub_filterBlock_text">
                                                Float
                                            </span>
                                            <img src="img/ladder_gray.svg" className="ladder_filterGray" alt="лесенка"/>
                                        </div>
                                    </div>
                                </div>
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
