import { ItemContent, ItemImage } from "@/features/home/ui";

export const ItemsBlock = () => {
    return (
        <div className="flex items-center justify-center gap-6 mx-[35px] xl:mx-auto max-w-[1296px] flex-wrap mt-[50px]">
            <ItemContent
                mainText="Выгодно"
                desc="Самые низкие цены на покупку"
                width={526}
            />
            <div>
                <ItemImage src="cs-card" />
            </div>
            <ItemContent
                mainText="Гарантии"
                desc="Предоставляем гарантии на каждую сделку"
                width={416}
            />
            <div>
                <ItemImage src="dota-card" />
            </div>
            <ItemContent
                mainText="Выгодно"
                desc="Низкие комиссии за пополнение баланса"
                width={416}
            />
            <ItemContent
                mainText="Быстро"
                desc="Продажа покупка или обмен в течении нескольких минут"
                width={526}
            />
        </div>
    );
};
