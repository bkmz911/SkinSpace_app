import { DescriptionItem } from "@/features/sell/model/items.type";
import { capitalize } from "lodash";
import { AddItemButtonCart } from "./add-item_button-cart";
import { getRarityTag } from "@/shared/lib/get-rarity-tag";

interface CartItemProps {
    item: DescriptionItem;
    game?: string;
}

export const CartItem = ({ item }: CartItemProps) => {
    const { name, color } = getRarityTag(item.tags);

    return (
        <div className="rounded-[6px] w-[240px]">
            <div
                className="rounded-t-[6px] relative"
                style={{
                    background:
                        "linear-gradient(135deg, #6E6F70 15.90%, #ABABAC 50.49%, #757676 83.64%)",
                }}
            >
                <img
                    src={`https://steamcommunity-a.akamaihd.net/economy/image/${item.icon_url}`}
                    className="mx-auto h-[180px] rounded-t-[6px]"
                    alt="item-img"
                />
            </div>
            <div className="bg-[#FFFFFF24] border-t-[1px] border-[#707071] rounded-b-[6px] py-[12px] px-[14px]">
                <p className="text-[18px] text-white font-medium leading-[1.4] whitespace-nowrap overflow-hidden text-ellipsis">
                    {item.market_name}
                </p>
                <div className="flex items-center justify-between mt-[10px]">
                    <p
                        style={{
                            color: `${color ? `#${color}` : undefined}`,
                        }}
                        className={`text-[18px] font-extrabold leading-normal`}
                    >
                        {capitalize(name)}
                    </p>
                    <AddItemButtonCart item={item} />
                </div>
            </div>
        </div>
    );
};
