import Image from "next/image";
import { ButtonFill } from "./button-fill";

interface WarningBlockProps {
    mainText: string;
    subText: string;
    buttonText: string;
    href: string;
}

export const WarningBlock = ({
    mainText,
    subText,
    buttonText,
    href,
}: WarningBlockProps) => {

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
            <ButtonFill href={href} className="block mt-[70px] ml-[75px]">
                {buttonText}
            </ButtonFill>
        </div>
    );
};

export const WarningBlockUnauth = () => {
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
                Вы не зарегистрированы!
            </h2>
            <span className="mt-[24px] sm:mt-[20px] text-[10px] sm:text-[14px] text-[#FFFFFF80] font-medium max-w-[170px] sm:max-w-[289px] block text-center mx-auto">
                Войдите в steam-аккаунт, если хотите получить информацию о
                сделках.
            </span>
        </div>
    );
};

