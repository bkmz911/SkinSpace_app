import Link from "next/link";

interface FooterNavItemProps {
    items: { text: string; className: string; href: string }[];
    className: string;
}

export const FooterNavItem = ({ items, className }: FooterNavItemProps) => {
    return (
        <div className={className}>
            {items.map((item) => (
                <Link
                    key={item.text}
                    href={item.href}
                    className={item.className}
                >
                    {item.text}
                </Link>
            ))}
        </div>
    );
};
