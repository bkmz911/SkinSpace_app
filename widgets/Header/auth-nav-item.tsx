import { NavPopUp } from "@/widgets/Header";
import Image from "next/image";

interface AuthNavItemProps {
    avatar: string;
}

export const AuthNavItem = ({ avatar }: AuthNavItemProps) => {
    return (
        <details className="relative">
            <summary className="flex items-center cursor-pointer list-none outline-none">
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

                <div className="flex items-center ml-[5px] xl:ml-[35px]">
                    <img
                        src={avatar}
                        className="xl:w-[40px] xl:h-[40px] w-[24px] h-[24px] mr-[7px] rounded-full"
                        alt="avatar"
                    />
                    <Image
                        src="/arrow_account.svg"
                        className="w-[8px] h-[8px] xl:w-[14px] xl:h-[14px] ml-1 xl:ml-[7px]"
                        width={14}
                        height={14}
                        alt="стрелочка"
                    />
                </div>
            </summary>

            <NavPopUp />
        </details>
    );
};
