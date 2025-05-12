import Image from "next/image";
import { ButtonFillActive } from "@/shared/ui/";

interface WarningBlockFuncProps {
    mainText: string;
    subText: string;
    buttonText: string;
    href: string;
}

export const WarningBlockFunc = ({
    mainText,
    subText,
    buttonText,
    href,
}: WarningBlockFuncProps) => {
    return (
        <div className="pt-[50px] sm:pt-[80px] pb-[50px] sm:pb-[100px] w-[365px] mx-auto">
            <Image
                src="/warning.webp"
                className="w-[40px] h-[40px] mx-auto"
                width={40}
                height={40}
                alt="warning"
            />
            <h2 className="text-[18px] sm:text-[22px] text-white font-medium mx-auto mt-[16px] sm:mt-[16px] text-center">
                {mainText}
            </h2>
            <span className="mt-[24px] sm:mt-[20px] text-[10px] sm:text-[14px] text-[#FFFFFF80] font-medium max-w-[170px] sm:max-w-[289px] block text-center mx-auto">
                {subText}
            </span>
            <ButtonFillActive href={href} className="block mt-[70px] ml-[75px]">
                {buttonText}
            </ButtonFillActive>
        </div>
    );
};

interface WarningBlockStaticProps {
    mainText: string;
    subText: string;
}

export const WarningBlockStatic = ({
    mainText,
    subText,
}: WarningBlockStaticProps) => {
    return (
        <div className="pt-[50px] sm:pt-[80px] pb-[50px] sm:pb-[100px] w-[312px] mx-auto">
            <Image
                src="/warning.webp"
                className="w-[40px] h-[40px] mx-auto"
                width={40}
                height={40}
                alt="warning"
            />
            <h2 className="text-[18px] sm:text-[22px] text-white font-medium mx-auto mt-[16px] sm:mt-[16px] text-center">
                {mainText}
            </h2>
            <span className="mt-[24px] sm:mt-[20px] text-[10px] sm:text-[14px] text-[#FFFFFF80] font-medium max-w-[170px] sm:max-w-[289px] block text-center mx-auto">
                {subText}
            </span>
        </div>
    );
};
