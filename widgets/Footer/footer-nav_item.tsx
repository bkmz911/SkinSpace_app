interface FooterNavItemProps {
    items: { text: string; className: string }[];
    className: string;
}

export const FooterNavItem = ({ items, className }: FooterNavItemProps) => {
    return (
        <div className={className}>
            {items.map((item) => (
                <span key={item.text} className={item.className}>
                    {item.text}
                </span>
            ))}
        </div>
    );
};
