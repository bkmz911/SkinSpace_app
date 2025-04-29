import { ItemsBlock } from "@/features/sell/ui/header_part/main_part/items-block";
import Image from "next/image";

export default async function Sell({
    params,
    searchParams,
}: {
    params: Promise<{ game: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const { game } = await params,
        { sort, order } = await searchParams;

    return (
        <section className="flex justify-center gap-[12px] flex-wrap my-[60px] ml-[60px] mr-[80px]">
            <ItemsBlock game={game} sort={sort} sortOrder={order} />
            <Image
                src="/arrow_continue.svg"
                width={50}
                height={50}
                alt="arrow-continue"
            />
            <div className="bg-[#2C2F35D9] border-[2px] border-[#2E3137] w-full sm:w-[606px] rounded-[20px] h-[600px] sm:h-[1028px] relative"></div>
        </section>
    );
}
