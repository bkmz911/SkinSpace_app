interface StatisticItem {
    key: number
    num: number
    text: string
}

export const StatisticItem = ({num, text, key}: StatisticItem) => {
    return (
        <div key={key} className="mx-[70px] mt-[40px] xl:mt-0">
            <h2 className="text-[40px] font-semibold text-lemony text-center">
                {num}
            </h2>
            <span className="text-[20px] text-[#a7a8a9] font-medium">
                {text}
            </span>
        </div>
    );
};
