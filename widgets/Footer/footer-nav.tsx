import { FooterNavItem } from "@/widgets/Footer";

const classNameFirstItem =
        "block text-[14px] xl:text-[18px] font-medium text-[#b0b0b1]",
    classNameItem =
        "block text-[14px] xl:text-[18px] font-medium text-[#b0b0b1] pt-[20px]",
    nav_items = [
        {
            text: "Обмен",
            className: classNameFirstItem,
        },
        {
            text: "Купить",
            className: classNameItem,
        },
        {
            text: "Продать",
            className: classNameItem,
        },
        {
            text: "FAQ",
            className: classNameItem,
        },
    ],
    items = [
        {
            text: "Контакты",
            className: classNameFirstItem,
        },
        { text: "Гарантии", className: classNameItem },
        { text: "Как это работает", className: classNameItem },
        { text: "Политика конфиденциальности", className: classNameItem },
    ];

export const FooterNav = () => {
    return (
        <div className="flex justify-between mx-auto">
            <FooterNavItem
                items={nav_items}
                className="mx-[20px] md:mx-[50px]"
            />
            <FooterNavItem
                items={items}
                className="mx-[20px] md:mx-[50px] order-first sm:order-none"
            />
        </div>
    );
};
