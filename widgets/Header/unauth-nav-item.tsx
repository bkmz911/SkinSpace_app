import Image from "next/image";

export const UnauthNavItem = () => {
    const handleRedirect = () => {
        window.location.href = "http://localhost:3001/auth/steam";
    };

    return (
        <div
            onClick={() => handleRedirect()}
            className="relative cursor-pointer flex justify-center items-center rounded-r-lg pl-[8px] pr-[10px] xl:px-[20px] ml-[20px] xl:ml-[32px] h-[35px] xl:h-[40px] bg-lemony before:content-[''] before:absolute before:block before:w-[20%] xl:before:w-[12%] before:h-[35px] xl:before:h-[40px] before:translate-x-[-102%] xl:before:translate-x-[-92%] before:origin-bottom before:skew-x-[-20deg] xl:before:skew-x-[-30deg] before:bg-lemony before:left-0 before:bottom-0"
        >
            <div className="hidden xl:flex items-center">
                <Image
                    src="/steam_logo.svg"
                    className="w-[24px] h-[24px]"
                    width={16}
                    height={16}
                    alt="steam_logo"
                />
                <span className="text-blackGrey text-[12px] font-bold ml-[7px] uppercase">
                    Войти через Steam
                </span>
            </div>
            <div className="flex items-center xl:hidden">
                <Image
                    src="/steam_logo.svg"
                    className="w-[16px] h-[16px]"
                    width={16}
                    height={16}
                    alt="steam_logo"
                />
                <span className="text-blackGrey text-[8px] font-bold ml-[4px] uppercase">
                    Войти
                </span>
            </div>
        </div>
    );
};
