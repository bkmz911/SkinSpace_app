import {
    EmailInfoBlock,
    TripleInfoBlock,
} from "@/features/personal-cabinet/ui/";

export const ContactInfo = () => {
    return (
        <div>
            <h3 className="text-[16px] font-bold text-white uppercase">
                Контактная информация
            </h3>
            <div className="mt-[25px] flex items-center justify-center gap-5">
                <div className="flex flex-col w-[380px] gap-[10px]">
                    <EmailInfoBlock />
                    <TripleInfoBlock desc="Телефон:" value="—" field="phoneNumber" />
                    <TripleInfoBlock desc="Telegram:" value="—" field="tg" />
                </div>
            </div>
        </div>
    );
};
