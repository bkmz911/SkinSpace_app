import { RecentDealsItems } from "@/features/home/ui/recent-deals_part/recent-deals_items";
export const RecentDeals = () => {
    return (
        <div className="mt-[100px]">
            <h2 className="text-[26px] xl:text-[59px] font-medium text-white text-center">
                ПОСЛЕДНИЕ ПРЕДМЕТЫ
            </h2>
            <RecentDealsItems />
        </div>
    );
};
