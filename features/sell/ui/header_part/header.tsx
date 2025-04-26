import Image from "next/image";
import {
    PopUpBase,
    PopUpCustom,
    SearchInput,
} from "@/features/sell/ui/header_part";

export const Header = () => {
    return (
        <div className="flex items-center justify-between gap-[30px]">
            <Image
                src="/reload-icon.svg"
                width={30}
                height={30}
                alt="reload-icon"
            />
            <PopUpBase mainText="Dota 2" items={["Dota 2", "CS2", "Rust"]} />
            <SearchInput />
            {/* <PopUpBase
                mainText="Все предметы"
                items={["Все предметы", "На продаже", "Не на продаже"]}
            /> */}
            <PopUpCustom />
        </div>
    );
};
