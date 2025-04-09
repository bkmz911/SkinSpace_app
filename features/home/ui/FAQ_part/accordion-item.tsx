import Image from "next/image";

interface AccordionItemProps {
    id: number;
    text: string;
    desc: string;
}
export const AccordionItem = ({ id, text, desc }: AccordionItemProps) => {
    return (
        <div key={id} className="mt-4">
            <input
                type="checkbox"
                id={`accordion-${id}`}
                className="peer hidden"
            />
            <label
                htmlFor={`accordion-${id}`}
                className="accordion_item cursor-pointer flex items-center justify-between bg-[#3A3C40] py-[15px] px-[10px] sm:px-[30px] relative before:content-[''] before:absolute before:block before:bg-[#3A3C40] before:w-[2%] before:h-[55px] xl:before:h-[70px] before:translate-x-[-85%] before:origin-bottom before:skew-x-[-10deg] before:left-0 before:top-0"
            >
                <span className="text-[12px] xl:text-[20px] text-[#E9EAEA] font-semibold">
                    {text}
                </span>
                <div className="rounded-full w-[25px] xl:w-[40px] h-[25px] xl:h-[40px] bg-[#414347] flex justify-center items-center transition-transform duration-300 peer-checked:rotate-180">
                    <Image
                        src="/circel_arrow.svg"
                        className="w-[9px] xl:w-[14px] h-[5px] xl:h-[9px]"
                        width={14}
                        height={9}
                        alt="arrow"
                    />
                </div>
            </label>
            <div className="accordion_desc overflow-hidden max-h-0 peer-checked:max-h-screen transition-all duration-300 -ml-[1.7%]">
                <div className="accordion_desc_text pl-[30px] xl:pl-[60px] pr-[50px] py-[20px] xl:py-[35px] bg-[#3A3C40] border-t-[2px] border-[#2b2c30]">
                    <span className="text-[12px] xl:text-[20px] text-[#969799] font-semibold">
                        {desc}
                    </span>
                </div>
            </div>
        </div>
    );
};
