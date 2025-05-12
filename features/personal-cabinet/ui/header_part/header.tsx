import { ContactInfo, MainInfo } from "@/features/personal-cabinet/ui";
import { SteamProfile } from "@/shared/lib/user/user-type";

interface HeaderProps {
    user: SteamProfile;
}

export const Header = ({ user }: HeaderProps) => {
    return (
        <div className="flex items-center justify-between">
            <MainInfo user={user} />
            <ContactInfo />
        </div>
    );
};
