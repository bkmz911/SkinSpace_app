import {
    PopUpGames,
    PopUpSort,
    PopUpFilter,
    ResetButton,
    SearchInput,
} from "@/features/sell/ui/items/main_part";
export const Header = () => {
    return (
        <div className="flex items-center justify-between gap-[30px]">
            <ResetButton />
            <PopUpGames items={["Dota 2", "CS2"]} href={["dota2", "cs2"]} />
            <SearchInput />
            <PopUpFilter />
            <PopUpSort />
        </div>
    );
};
