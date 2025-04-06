import { ItemsBlock } from "@/features/home/ui/why-us_part/items-block";
export const WhyUs = () => {
    return (
        <div className="pt-[50px] xl:pt-[100px]">
            <h2 className="text-[26px] w-[205px] xl:w-auto mx-auto xl:text-[59px] text-white font-medium text-center">
                ПОЧЕМУ ИМЕННО МЫ?
            </h2>
            <ItemsBlock />
        </div>
    );
};
