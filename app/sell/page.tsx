import Image from "next/image";

export default function Sell() {
    return (
        <section className="flex items-center justify-center gap-[12px] flex-wrap my-[60px] ml-[60px] mr-[80px]">
            <div className="bg-[#2C2F35D9] border-[2px] border-[#2E3137] rounded-[20px] h-[1028px]">
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
