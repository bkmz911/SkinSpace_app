import { StatisticItem } from "@/features/home/ui";

const items = [
    {
        num: 30890,
        text: "Скинов продано",
    },
    {
        num: 10000,
        text: "Позитивных отзывов",
    },
    {
        num: 5,
        text: "Лет на рынке",
    },
    {
        num: 9.5,
        text: "Наша оценка",
    },
];

export const Statistic = () => {
    return (
        <div className="flex items-center justify-center flex-wrap mt-[60px] xl:mt-[100px]">
            {items.map((item) => {
                return (
                    <StatisticItem
                        key={item.num}
                        num={item.num}
                        text={item.text}
                    />
                );
            })}
        </div>
    );
};
