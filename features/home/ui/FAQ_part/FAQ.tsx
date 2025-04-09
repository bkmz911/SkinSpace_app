import { Accordion } from "@/features/home/ui";

export const FAQ = () => {
    return (
        <>
            <div className="mt-[60px] xl:mt-[100px] mb-[70px]">
                <h2 className="text-[26px] xl:text-[59px] font-medium text-white text-center">
                    ЧАСТЫЕ ВОПРОСЫ
                </h2>
            </div>
            <Accordion />
        </>
    );
};
