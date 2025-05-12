"use client";
import Image from "next/image";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export const SearchInput = () => {
    const searchParams = useSearchParams(),
        pathname = usePathname(),
        { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set("searchQuery", term);
        } else {
            params.delete("searchQuery");
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);
    return (
        <div className="relative w-[412px] h-[44px]">
            <Image
                src="/search-icon.svg"
                className="w-[34px] h-[34px] absolute left-[15px] top-[3px]"
                width={34}
                height={34}
                alt="search-icon"
            />
            <input
                onChange={(e) => handleSearch(e.target.value)}
                defaultValue={searchParams.get("searchQuery")?.toString()}
                type="text"
                className="bg-[#FFFFFF1A] rounded-[10px] w-full h-full pl-[62px] placeholder:text-[14px] placeholder:text-[#FFFFFF80] placeholder:font-medium text-white"
                placeholder="Поиск по скинам"
            />
        </div>
    );
};
