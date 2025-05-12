import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
    return (
        <Link href="/" className="flex items-end cursor-pointer">
            <div className="mr-[4px] relative bottom-[5px]">
                <Image
                    src="/nav_burger.svg"
                    className="w-[22px] h-[14px] block xl:hidden"
                    width={28}
                    height={28}
                    alt="burger_menu"
                />
            </div>
            <Image
                src="/fire_logo.webp"
                className="w-[24px] h-[32px] xl:w-[41px] xl:h-[56px] mx-[4px]"
                width={41}
                height={56}
                alt="logo"
            />
            <h2 className="text-[16px] xl:text-[30px] text-white font-bold ml-[4px]">
                SkinSpace
            </h2>
        </Link>
    );
};
