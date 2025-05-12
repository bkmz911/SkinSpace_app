import { Cart } from "@/features/sell/ui/cart/main_part/cart";
import { ItemsBlock } from "@/features/sell/ui/items/main_part/items-block";
import Image from "next/image";

export default async function Sell({
    params,
    searchParams,
}: {
    params: Promise<{ game: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const { game } = await params,
        { sort, order, filter, searchQuery } = await searchParams;
    return (
        <section className="flex justify-center gap-[12px] flex-wrap my-[60px] ml-[60px] mr-[80px]">
            <ItemsBlock
                game={game}
                sort={sort}
                sortOrder={order}
                filter={filter}
                searchQuery={searchQuery}
            />
            <Image
                src="/arrow_continue.svg"
                width={50}
                height={50}
                alt="arrow-continue"
            />
            <Cart />
        </section>
    );
}
