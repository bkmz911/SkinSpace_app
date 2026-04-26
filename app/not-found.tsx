import { ButtonFillActive } from "@/shared/ui";

export default function NotFound () {
    return (
        <div className="bg-[url('/galaxy.jpg')] bg-no-repeat bg-top sm:bg-center bg-auto h-[800px]">
            <div className="flex items-center justify-center pt-[43%] sm:pt-[10%] 2xl:pt-[5%]">
                <h1 className="text-[120px] sm:text-[250px] font-semibold">
                    404
                </h1>
            </div>
            <div className="-mt-[15px] sm:-mt-[30px]">
                <h2 className="text-center text-[18px] sm:text-[26px] font-medium text-white">
                    Страница не найдена!
                </h2>
            </div>
            <div className="mt-[30px] text-center">
                <span className="text-[10px] sm:text-[14px] font-medium text-white">
                    Вы можете вернуться на главную страницу
                </span>
                <ButtonFillActive
                    className="block mt-[50px] mk-[85px]"
                    href="/"
                >
                    вернуться
                </ButtonFillActive>
            </div>
        </div>
    );
};
