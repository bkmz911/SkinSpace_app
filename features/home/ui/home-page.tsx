import {
    CustomBorder,
    RecentDeals,
    WelcomeBlock,
    WhyUs,
} from "@/features/home/ui";

export const HomePage = () => {
    return (
        <>
            {/* welcome part */}
            <section>
                <WelcomeBlock />
                <CustomBorder />
            </section>

            {/* why-us and recent-deals part */}
            <section className="bg-[url(@/public/bg_CS.png)] bg-top bg-no-repeat bg-cover">
                <WhyUs />
                <RecentDeals />
            </section>
            <div className="w-full h-[20px] bg-linear-[180deg,rgba(40,40,40,1)_25%,rgba(37,41,44,1)_75%]"></div>
            <section className="bg-[url(@/public/bg_Dota.png)] bg-no-repeat bg-cover bg-top">
                <div>
                    <span className="total_sold_textGray">
                        Всего продано на
                        <span className="total_sold_textWhite">30050.50</span>
                    </span>
                </div>
                <div className="statistic">
                    <div className="skins_sell">
                        <h2 className="skins_sell_lemony">30890</h2>
                        <span className="skins_sell_gray">Скинов продано</span>
                    </div>
                    <div className="skins_sell">
                        <h2 className="skins_sell_lemony">10000</h2>
                        <span className="skins_sell_gray">
                            Позитивных отзывов
                        </span>
                    </div>
                    <div className="skins_sell">
                        <h2 className="skins_sell_lemony">5</h2>
                        <span className="skins_sell_gray">Лет на рынке</span>
                    </div>
                    <div className="skins_sell">
                        <h2 className="skins_sell_lemony">9.5</h2>
                        <span className="skins_sell_gray">Наша оценка</span>
                    </div>
                </div>
                <div className="reviews">
                    <h2 className="reviews_main_text">ОТЗЫВЫ О НАС</h2>
                </div>
                <div className="review_block">
                    <div className="review_block_left">
                        <img
                            src="img/yandex.svg"
                            className="review_block_left_yandex"
                            alt="яндекс лого"
                        />
                        <div className="review_block_sub_left">
                            <span className="review_block_sub_left_quantity">
                                345 отзывов
                            </span>
                            <span className="review_block_sub_left_lastMonth">
                                За последние 3 месяца
                            </span>
                        </div>
                    </div>
                    <div className="review_block_center">
                        <span className="review_block_center_grade">4.5</span>
                        <img
                            src="img/full_star.svg"
                            className="review_block_center_star"
                            alt="звезда рейтинга"
                        />
                        <img
                            src="img/full_star.svg"
                            className="review_block_center_star"
                            alt="звезда рейтинга"
                        />
                        <img
                            src="img/full_star.svg"
                            className="review_block_center_star"
                            alt="звезда рейтинга"
                        />
                        <img
                            src="img/full_star.svg"
                            className="review_block_center_star"
                            alt="звезда рейтинга"
                        />
                        <img
                            src="img/half_star.svg"
                            className="review_block_center_star"
                            alt="половинка звезды рейтинга"
                        />
                    </div>
                    <div className="sell_button_review">
                        <a href="#" className="sell_button_a_review">
                            смотреть отзывы
                        </a>
                    </div>
                </div>
                <div className="FAQ">
                    <h2 className="FAQ_main_text">ЧАСТЫЕ ВОПРОСЫ</h2>
                </div>
                <div className="FAQ_blocks">
                    <div className="FAQ_block_lorem">
                        <div className="FAQ_block_lorem_same">
                            <span className="FAQ_block_lorem_same_text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit?
                            </span>
                        </div>
                        <div className="custom_circel_faq">
                            <img
                                src="img/circel_arrow.svg"
                                className="custom_border_circe_arrow"
                                alt="стрелочка"
                            />
                        </div>
                    </div>
                    <div className="FAQ_block_lorem">
                        <div className="FAQ_block_lorem_same">
                            <span className="FAQ_block_lorem_same_text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit?
                            </span>
                        </div>
                        <div className="custom_circel_faq">
                            <img
                                src="img/circel_arrow.svg"
                                className="custom_border_circe_arrow"
                                alt="стрелочка"
                            />
                        </div>
                    </div>
                    <div className="FAQ_block_lorem">
                        <div className="FAQ_block_lorem_same">
                            <span className="FAQ_block_lorem_same_text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit?
                            </span>
                        </div>
                        <div className="custom_circel_faq">
                            <img
                                src="img/circel_arrow.svg"
                                className="custom_border_circe_arrow"
                                alt="стрелочка"
                            />
                        </div>
                    </div>
                    <div className="FAQ_block_lorem">
                        <div className="FAQ_block_lorem_same">
                            <span className="FAQ_block_lorem_same_text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit?
                            </span>
                        </div>
                        <div className="custom_circel_faq">
                            <img
                                src="img/circel_arrow.svg"
                                className="custom_border_circe_arrow"
                                alt="стрелочка"
                            />
                        </div>
                    </div>
                    <div className="FAQ_block_lorem">
                        <div className="FAQ_block_lorem_same">
                            <span className="FAQ_block_lorem_same_text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit?
                            </span>
                        </div>
                        <div className="custom_circel_faq">
                            <img
                                src="img/circel_arrow.svg"
                                className="custom_border_circe_arrow"
                                alt="стрелочка"
                            />
                        </div>
                    </div>
                    <div className="FAQ_block_lorem_bottom_subtext">
                        <div>
                            <span className="FAQ_block_lorem_bottom_subtext_same_text">
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
