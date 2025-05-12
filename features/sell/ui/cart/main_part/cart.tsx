import { getUser } from "@/shared/lib/user/get-user";
import { CartItems, Header, Footer } from "@/features/sell/ui/cart/main_part";
import { ErrorBlock, WarningBlockStatic } from "@/shared/ui";

export const Cart = async () => {
    try {
        const user = await getUser();

        return (
            <div className="bg-[#2C2F35D9] border-[2px] border-[#2E3137] w-full sm:w-[606px] rounded-[20px] h-[600px] sm:h-[1028px] relative p-[45px]">
                <Header />
                {user ? (
                    <>
                        <CartItems />
                        <Footer />
                    </>
                ) : (
                    <WarningBlockStatic
                        mainText="Ваш список пуст!"
                        subText="Добавь сюда скины, которые хочешь продать."
                    />
                )}
            </div>
        );
    } catch {
        return (
            <div className="bg-[#2C2F35D9] border-[2px] border-[#2E3137] rounded-[20px] p-[45px] w-[606px]">
                <ErrorBlock text="Не удалось получить ответ от сервера! Попробуйте позже." />
            </div>
        );
    }
};
