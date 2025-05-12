import { SteamProfile } from "@/shared/lib/user/user-type";
import { Header, Main } from "@/features/personal-cabinet/ui";

interface PersonalAccountProps {
    user: SteamProfile;
}

export const PersonalAccount = ({ user }: PersonalAccountProps) => {
    return (
        <div className="bg-[#292c31] border-[2px] border-[#2e3137] rounded-[20px] h-[550px] mt-[15px] p-[40px]">
            <Header user={user} />
            <Main />
        </div>
    );
};
