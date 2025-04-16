import Image from "next/image";

interface ErrorBlockProps {
    text: string;
}

export const ErrorBlock = ({ text }: ErrorBlockProps) => {
    return (
        <div className="bg-[#2c2f35] opacity-85 rounded-[16px] w-[270px] sm:w-[500px] py-[20px] sm:py-[48px] mx-auto relative mt-[50px]">
            <Image
                src="/error.svg"
                width={30}
                height={30}
                className="w-[30px] h-[30px] mx-auto"
                alt="error"
            />
            <h2 className="text-[14px] sm:text-[20px] text-white font-medium leading-[20px] sm:leading-[30px] mt-[10px] sm:mt-[14px] max-w-[242px] sm:max-w-[346px] mx-auto text-center">
                {text}
            </h2>
        </div>
    );
};
