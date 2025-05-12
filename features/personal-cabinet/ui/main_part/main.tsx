import { GeneralInfoBlock } from "@/features/personal-cabinet/ui/";
import { getUserID } from "@/shared/lib/user/get-userID";

export const Main = async () => {
    try {
        const userID = await getUserID();

        return (
            <div className="mt-[60px]">
                <h2 className="text-[16px] text-white font-bold uppercase">
                    Общая информация
                </h2>
                <div className="flex flex-col gap-5 mt-[32px]">
                    <GeneralInfoBlock
                        name="Trade link:"
                        action="Получить ссылку"
                        field="tradeLink"
                        userID={userID?.steamId}
                    />
                    <GeneralInfoBlock
                        name="API-ключ:"
                        action="Получить ключ"
                        field="apiKey"
                    />
                    <div className="flex items-center pb-[5px] border-b-[1px] border-[#3d4045]">
                        <p className="text-[14px] font-medium text-[#949597]">
                            Steam ID64:
                        </p>
                        <span className="text-[14px] text-lemony font-medium cursor-pointer ml-[25px]">
                            {userID?.steamId}
                        </span>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error(`Error: ${error}`);
    }
};
