import {
    CustomBorder,
    RecentDeals,
    WelcomeBlock,
    WhyUs,
} from "@/features/home/ui";
import { ButtonFill } from "@/shared/ui";
import Image from "next/image";

export const HomePage = () => {
    return (
        <>
            {/* welcome part */}
            <section>
                <WelcomeBlock />
                <CustomBorder />
            </section>

            {/* why-us and recent-deals part */}
            <section className="bg-[url(@/public/bg_CS.png)] bg-top bg-no-repeat bg-cover after:content-[''] after:absolute after:h-[17px] after:w-full after:bg-linear-[180deg,rgba(37,31,31,1)_25%,rgba(41,40,39,1)_75%]">
                <WhyUs />
                <RecentDeals />
            </section>
            {/* <div className="w-full h-[20px] bg-linear-[180deg,rgba(40,40,40,1)_25%,rgba(37,41,44,1)_75%] opacity-0.5"></div> */}
            <section className="bg-[url(@/public/bg_Dota.png)] bg-no-repeat bg-cover bg-top before:content-[''] before:absolute before:h-[17px] before:w-full before:bg-linear-[180deg,rgba(41,40,39,1)_25%,rgba(37,41,43,1)_75%] before:mt-4">
                <div className="flex justify-end items-center pr-[60px] pt-[35px]">
                    <span className="text-[18px] text-[#a7a8a9] font-semibold">
                        Всего продано на {" "}
                        <span className="text-[18px] text-white font-semibold">30050.50</span>
                    </span>
                </div>
                <div className="flex items-center justify-center flex-wrap mt-[120px]">
                    <div className="mx-[70px] mt-[40px] xl:mt-0">
                        <h2 className="text-[40px] font-semibold text-lemony text-center">30890</h2>
                        <span className="text-[20px] text-[#a7a8a9] font-medium">Скинов продано</span>
                    </div>
                    <div className="mx-[70px] mt-[40px] xl:mt-0">
                        <h2 className="text-[40px] font-semibold text-lemony text-center">10000</h2>
                        <span className="text-[20px] text-[#a7a8a9] font-medium">
                            Позитивных отзывов
                        </span>
                    </div>
                    <div className="mx-[70px] mt-[40px] xl:mt-0">
                        <h2 className="text-[40px] font-semibold text-lemony text-center">5</h2>
                        <span className="text-[20px] text-[#a7a8a9] font-medium">Лет на рынке</span>
                    </div>
                    <div className="mx-[70px] mt-[40px] xl:mt-0">
                        <h2 className="text-[40px] font-semibold text-lemony text-center">9.5</h2>
                        <span className="text-[20px] text-[#a7a8a9] font-medium">Наша оценка</span>
                    </div>
                </div>
                <div className="mt-[60px] xl:mt-[100px]">
                    <h2 className="text-[26px] xl:text-[59px] text-white font-medium text-center">ОТЗЫВЫ О НАС</h2>
                </div>
                <div className="flex lg:justify-between justify-center items-center flex-wrap mt-[30px] xl:mt-[50px] px-[10px] sm:px-[35px] xl:px-[50px] mx-[35px] xl:mx-[70px] py-[40px] rounded-2xl border-[1px] border-[#666666]">
                    <div className="flex items-center">
                        <Image
                            src="/yandex.svg"
                            className="w-[54px] h-[54px]"
                            width={54}
                            height={54}
                            alt="yandex_logo"
                        />
                        <div className="ml-[12px]">
                            <span className="text-[20px] text-white font-semibold block w-[172px]">
                                345 отзывов
                            </span>
                            <span className="text-[14px] text-[#929396] font-medium">
                                За последние 3 месяца
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-1 mx-[50px]">
                        <span className="text-[30px] text-white font-semibold mr-[8px]">4.5</span>
                        <Image
                            src="/full_star.svg"
                            className="w-[28px] h-[28px]"
                            width={28}
                            height={28}
                            alt="star_rating"
                        />
                        <Image
                            src="/full_star.svg"
                            className="w-[28px] h-[28px]"
                            width={28}
                            height={28}
                            alt="star_rating"
                        />
                        <Image
                            src="/full_star.svg"
                            className="w-[28px] h-[28px]"
                            width={28}
                            height={28}
                            alt="star_rating"
                        />
                        <Image
                            src="/full_star.svg"
                            className="w-[28px] h-[28px]"
                            width={28}
                            height={28}
                            alt="star_rating"
                        />
                        <Image
                            src="/half_star.svg"
                            className="w-[28px] h-[28px]"
                            width={28}
                            height={28}
                            alt="star_rating"
                        />
                    </div>
                    <ButtonFill href="#" className="mr-[50px]">Смотреть отзывы</ButtonFill>
                </div>
                <div className="mt-[60px] xl:mt-[100px] mb-[50px]">
                    <h2 className="text-[26px] xl:text-[59px] font-medium text-white text-center">ЧАСТЫЕ ВОПРОСЫ</h2>
                </div>
                <div className="ml-[45px] xl:ml-[100px] mr-[35px] xl:mr-[70px]">
                    <div className="flex items-center justify-between bg-[#2e3032] opacity-60 mt-[20px] py-[15px] px-[30px] relative before:content-[''] before:absolute before:block before:bg-[#2e3032] before:w-[2%] before:h-[55px] xl:before:h-[70px] before:translate-x-[-85%] before:origin-bottom before:skew-x-[-10deg] before:left-0 before:top-0">
                        <div>
                            <span className="text-[12px] xl:text-[20px] text-[#E9EAEA] font-semibold">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit?
                            </span>
                        </div>
                        <div className="rounded-full w-[25px] xl:w-[40px] h-[25px] xl:h-[40px] bg-[#414347] flex justify-center items-center">
                            <img
                                src="img/circel_arrow.svg"
                                className="w-[9px] xl:w-[14px] h-[5px] xl:h-[9px]"
                                alt="arrow"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-[20px] py-[15px] px-[30px] relative before:content-[''] before:absolute before:block before:bg-[#2e3032] before:w-[2%] before:h-[55px] xl:before:h-[70px] before:translate-x-[-85%] before:origin-bottom before:skew-x-[-10deg] before:left-0 before:top-0">
                        <div>
                            <span className="text-[12px] xl:text-[20px] text-[#E9EAEA] font-semibold">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit?
                            </span>
                        </div>
                        <div className="rounded-full w-[25px] xl:w-[40px] h-[25px] xl:h-[40px] bg-[#414347] flex justify-center items-center">
                            <img
                                src="img/circel_arrow.svg"
                                className="w-[9px] xl:w-[14px] h-[5px] xl:h-[9px]"
                                alt="arrow"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-[20px] py-[15px] px-[30px] relative before:content-[''] before:absolute before:block before:bg-[#2e3032] before:w-[2%] before:h-[55px] xl:before:h-[70px] before:translate-x-[-85%] before:origin-bottom before:skew-x-[-10deg] before:left-0 before:top-0">
                        <div>
                            <span className="text-[12px] xl:text-[20px] text-[#E9EAEA] font-semibold">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit?
                            </span>
                        </div>
                        <div className="rounded-full w-[25px] xl:w-[40px] h-[25px] xl:h-[40px] bg-[#414347] flex justify-center items-center">
                            <img
                                src="img/circel_arrow.svg"
                                className="w-[9px] xl:w-[14px] h-[5px] xl:h-[9px]"
                                alt="arrow"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-[20px] py-[15px] px-[30px] relative before:content-[''] before:absolute before:block before:bg-[#2e3032] before:w-[2%] before:h-[55px] xl:before:h-[70px] before:translate-x-[-85%] before:origin-bottom before:skew-x-[-10deg] before:left-0 before:top-0">
                        <div>
                            <span className="text-[12px] xl:text-[20px] text-[#E9EAEA] font-semibold">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit?
                            </span>
                        </div>
                        <div className="rounded-full w-[25px] xl:w-[40px] h-[25px] xl:h-[40px] bg-[#414347] flex justify-center items-center">
                            <img
                                src="img/circel_arrow.svg"
                                className="w-[9px] xl:w-[14px] h-[5px] xl:h-[9px]"
                                alt="arrow"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-[20px] py-[15px] px-[30px] relative before:content-[''] before:absolute before:block before:bg-[#2e3032] before:w-[2%] before:h-[55px] xl:before:h-[70px] before:translate-x-[-85%] before:origin-bottom before:skew-x-[-10deg] before:left-0 before:top-0">
                        <div>
                            <span className="text-[12px] xl:text-[20px] text-[#E9EAEA] font-semibold">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit?
                            </span>
                        </div>
                        <div className="rounded-full w-[25px] xl:w-[40px] h-[25px] xl:h-[40px] bg-[#414347] flex justify-center items-center">
                            <img
                                src="img/circel_arrow.svg"
                                className="w-[9px] xl:w-[14px] h-[5px] xl:h-[9px]"
                                alt="arrow"
                            />
                        </div>
                    </div>
                    <div className="pl-[60px] pr-[50px] py-[20px] xl:py-[35px] -ml-[1.7%]">
                        <div>
                            <span className="text-[12px] xl:text-[20px] text-[#969799] font-semibold">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur.
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
