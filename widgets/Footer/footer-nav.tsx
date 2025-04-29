import { FooterNavItem } from "@/widgets/Footer";

const classNameFirstItem =
        "block text-[14px] xl:text-[18px] font-medium text-[#b0b0b1]",
    classNameItem =
        "block text-[14px] xl:text-[18px] font-medium text-[#b0b0b1] pt-[20px]",
    nav_items = [
        {
            text: "Главная",
            className: classNameFirstItem,
            href: "/",
        },
        {
            text: "Продать",
            className: classNameItem,
            href: "/sell/dota2",
        },
        {
            text: "FAQ",
            className: classNameItem,
            href: "/faq",
        },
    ],
    items = [
        {
            text: "Контакты",
            className: classNameFirstItem,
            href: "#",
        },
        { text: "Гарантии", className: classNameItem, href: "#" },
        { text: "Как это работает", className: classNameItem, href: "#" },
        {
            text: "Политика конфиденциальности",
            className: classNameItem,
            href: "#",
        },
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
