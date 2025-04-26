import Image from "next/image";

export const SearchInput = () => {
    return (
        <div className="relative w-[412px] h-[44px]">
            <Image
                src="/search-icon.svg"
                className="w-[34px] h-[34px] absolute left-[20px] top-[3px]"
                width={34}
                height={34}
                alt="search-icon"
            />
            <input
                type="text"
                className="bg-[#FFFFFF1A] rounded-[10px] w-full h-full pl-[62px] placeholder:text-[14px] placeholder:text-[#FFFFFF80] placeholder:font-medium"
                placeholder="Поиск по скинам"
            />
        </div>
    );
};
