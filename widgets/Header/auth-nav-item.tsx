import Image from "next/image";

interface AuthNavItemProps {
    avatar: string;
}

const handleRedirect = () => {
    window.location.href = "http://localhost:3001/logout";
};

export const AuthNavItem = ({ avatar }: AuthNavItemProps) => {
    return (
        <details className="relative">
            {/* Скрываем стандартный значок "triangle" */}
            <summary className="flex items-center cursor-pointer list-none outline-none">
                {/* Блок с балансом */}
                <div
                    className="relative flex justify-center items-center rounded-r-lg pl-[8px] pr-[10px] xl:px-[10px] ml-[20px] xl:ml-[32px] w-[41px] sm:w-[65px] xl:w-[140px] h-[35px] xl:h-[40px] bg-[#2a2c30]
                     before:content-[''] before:absolute before:block before:w-[35%] sm:before:w-[20%] before:h-[35px] xl:before:h-[40px] before:translate-x-[-102%] xl:before:translate-x-[-92%]
                     before:origin-bottom before:skew-x-[-20deg] xl:before:skew-x-[-30deg] before:bg-[#2a2c30] before:left-0 before:bottom-0"
                >
                    <div className="flex items-center">
                        <span className="text-lemony text-[10px] xl:text-[16px] font-semibold mr-[5px]">
                            ₽ 0
                        </span>
                        <Image
                            src="/balance_plus.svg"
                            className="w-[14px] h-[14px] ml-[5px] hidden xl:block"
                            width={14}
                            height={14}
                            alt="plus"
                        />
                    </div>
                </div>
                {/* Блок с аватаркой и стрелочкой */}
                <div className="flex items-center ml-[5px] xl:ml-[35px]">
                    <img
                        src={avatar}
                        className="xl:w-[40px] xl:h-[40px] w-[24px] h-[24px] mr-[7px] rounded-full"
                        alt="avatar"
                    />
                    <Image
                        src="/account_arrow.svg"
                        className="w-[8px] h-[8px] xl:w-[14px] xl:h-[14px] ml-1 xl:ml-[7px]"
                        width={14}
                        height={14}
                        alt="стрелочка"
                    />
                </div>
            </summary>

            {/* Всплывающее меню */}
            <div className="absolute right-0 mt-2 w-[226px] bg-[#2a2c30] text-white rounded-md shadow-lg z-50">
                <ul className="flex flex-col cursor-pointer">
                    <li className="px-4 py-2 hover:bg-blackOlive hover:rounded-t-md border-b-[1px] border-blackOlive">
                        Пополнить баланс
                    </li>
                    <li className="px-4 py-2 hover:bg-blackOlive border-b-[1px] border-blackOlive">
                        Вывести с баланса
                    </li>
                    <li className="px-4 py-2 hover:bg-blackOlive border-b-[1px] border-blackOlive">
                        Личный кабинет
                    </li>
                    <li
                        className="px-4 py-2 hover:bg-blackOlive hover:rounded-b-md"
                        onClick={() => handleRedirect()}
                    >
                        Выйти
                    </li>
                </ul>
            </div>
        </details>
    );
};
