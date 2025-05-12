"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export const ResetButton = () => {
    const { game } = useParams();

    return (
        <Link href={`/sell/${game}?filter=all`}>
            <Image
                src="/reload-icon.svg"
                width={30}
                height={30}
                alt="reload-icon"
            />
        </Link>
    );
};
