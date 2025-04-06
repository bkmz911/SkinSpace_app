import React from "react";

interface ItemContentProps {
    mainText: string;
    desc: string;
    width: number;
}

export const ItemContent = ({ mainText, desc, width }: ItemContentProps) => {
    return (
        <div
            style={{ width: `${width}px` }}
            className={`flex flex-col items-center justify-center text-center h-[143px] xl:h-[252px] rounded-2xl border-[#666666] border-[2px] bg-[#2c2f35] opacity-85`}
        >
            <h3 className="text-[20px] xl:text-[34px] text-lemony font-semibold uppercase">
                {mainText}
            </h3>
            <span className="text-[14px] xl:text-[22px] text-[#bfc0c2] font-medium block mt-[10px]">
                {desc}
            </span>
        </div>
    );
};
