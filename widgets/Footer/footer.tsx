import { FooterNav, FooterContacts } from "@/widgets/Footer";

export const Footer = () => {
    return (
        <footer
            className="pb-[80px] -mt-[100px]"
            style={{
                background:
                    "linear-gradient(180deg, rgba(39, 38, 39, 0) 0%, rgba(34, 34, 36, 0.76) 32.43%, rgba(31, 31, 34, 0.81) 54.41%, #181A1E 100%)",
            }}
        >
            <div className="flex items-start justify-between flex-wrap gap-[30px] mx-[50px] xl:mx-[70px]">
                <h2 className="text-[30px] text-white font-semibold">
                    SkinsTrade
                </h2>
                <FooterContacts />
                <FooterNav />
            </div>
        </footer>
    );
};
