import {
    PopUpBase,
    PopUpCustom,
    ResetButton,
    SearchInput,
} from "@/features/sell/ui/header_part";
export const Header = () => {
    return (
        <div className="flex items-center justify-between gap-[30px]">
            <ResetButton />
            <PopUpBase items={["Dota 2", "CS2"]} href={["dota2", "cs2"]} />
            <SearchInput />
            {/* <PopUpBase
                mainText="Все предметы"
                items={["Все предметы", "На продаже", "Не на продаже"]}
            /> */}
            <PopUpCustom />
        </div>
    );
};
