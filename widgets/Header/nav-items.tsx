import Link from "next/link";

export const NavItems = () => {
    const className =
            "text-[12px] uppercase text-[#a5a6a8] font-semibold mx-[30px] cursor-pointer",
        items = [
            {
                text: "Обмен",
                className,
            },
            {
                text: "Купить",
                className,
            },
            {
                text: "Продать",
                className,
            },
            {
                text: "FAQ",
                className,
            },
        ];

    return (
        <div className="hidden xl:block">
            {items.map((item) => (
                <Link href="/sell" key={item.text} className={item.className}>
                    {item.text}
                </Link>
            ))}
        </div>
    );
};
