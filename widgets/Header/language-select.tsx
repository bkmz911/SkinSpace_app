import Image from "next/image"

export const LanguageSelect = () => {
    return (
        <div className="relative cursor-pointer flex items-center justify-start xl:justify-center rounded-l-lg pl-[12px] xl:pl-[10px] w-[50px] xl:w-[90px] h-[35px] xl:h-[40px] bg-[#2a2c30] before:content-[''] before:absolute before:block before:w-[25%] xl:before:w-[30%] before:h-[35px] xl:before:h-[40px] before:-translate-x-[8%] xl:before:-translate-x-[2%] before:origin-bottom before:skew-x-[-20deg] xl:before:skew-x-[-30deg] before:bg-[#2a2c30] before:right-0 before:bottom-0">
            <Image
                src="/russia.png"
                className="w-[16px] h-[16px] xl:w-[24px] xl:h-[24px] mr-[3px] xl:mr-[5px]"
                width={24}
                height={24}
                alt="russian_flag"
            />
            <Image
                src="/language_arrow.svg"
                className="w-[8px] h-[5px] xl:w-[14px] xl:h-[9px] ml-[3px] xl:ml-[5px]"
                width={14}
                height={9}
                alt="arrow"
            />
        </div>
    )
}