import { formatUnixDate } from "@/shared/lib/formatUnixDate";
import { SteamProfile } from "@/shared/lib/user/user-type";
import { DoubleInfoBlock } from "@/features/personal-cabinet/ui";

interface MainInfoProps {
    user: SteamProfile;
}

export const MainInfo = ({ user }: MainInfoProps) => {
    const date = formatUnixDate(user?._json.timecreated);

    return (
        <div>
            <h3 className="text-[20px] font-semibold text-white">
                {user.displayName}
            </h3>
            <div className="mt-[25px] flex items-center justify-center gap-5">
                <img
                    src={user._json.avatarfull}
                    alt="avatar"
                    className="w-[100px] h-[100px] rounded-full"
                />
                <div className="flex flex-col w-[280px] gap-[10px]">
                    <DoubleInfoBlock desc="Комиссия" value="5%" />
                    <DoubleInfoBlock desc="Регистрация" value={date} />
                    <DoubleInfoBlock desc="Обмен" value={0} />
                </div>
            </div>
        </div>
    );
};
