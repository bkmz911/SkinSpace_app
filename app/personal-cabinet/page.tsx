import { PersonalAccount } from "@/features/personal-cabinet/ui/personal-account";
import { getUser } from "@/shared/lib/user/get-user";

export default async function PersonalCabinet() {
    try {
        const user = await getUser()

        return (
            <>
                {user ? (
                    <div className="mt-[120px] mx-auto w-[960px]">
                        <h2 className="text-[26px] font-medium text-white">
                            Личная информация
                        </h2>
                        <PersonalAccount user={user}/>
                    </div>
                ) : (
                    "Вы не зареганы!"
                )}
            </>
        );
    } catch (error){
        console.error(`Error: ${error}`)
    }
}
