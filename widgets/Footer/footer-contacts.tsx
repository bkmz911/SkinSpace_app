import { FooterContactsImg } from "@/widgets/Footer";

export const FooterContacts = () => {
    return (
        <div className="order-none md:order-last">
            <span className="text-white text-[20px] font-semibold">
                Связаться с нами:
            </span>
            <div className="flex justify-end mt-[10px] xl:ml-[12px]">
                <FooterContactsImg
                    src="/tg_contact.svg"
                    className="mr-[15px] w-[42px] h-[42px]"
                    alt="tg"
                />
                <FooterContactsImg
                    src="/vk_contact.svg"
                    className="w-[42px] h-[42px]"
                    alt="vk"
                />
            </div>
        </div>
    );
};
