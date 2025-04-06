import Image from "next/image";

export const CustomBorder = () => {
    return (
        <div className="custom_bw-full h-[6px] bg-linear-[90deg,rgba(24,24,26,1)_0%,rgba(43,44,48,1)_50%,rgba(24,25,27,1)_100%] shadow-customBorder">
            <div className="rounded-full w-[40px] h-[40px] bg-blueBlack flex justify-center items-center mx-auto relative bottom-[10px] animate-bounce">
                <Image
                    src="/circel_arrow.svg"
                    className="w-[9px] xl:w-[14px] h-[5px] xl:h-[9px]"
                    width={14}
                    height={14}
                    alt="arrow"
                />
            </div>
        </div>
    );
};
