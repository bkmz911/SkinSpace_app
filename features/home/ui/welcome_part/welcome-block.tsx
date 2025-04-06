import { ButtonFill } from "@/shared/ui";
import { ImageBlock } from "@/features/home/ui";

export const WelcomeBlock = () => {
    return (
        <div className="flex items-center justify-center flex-wrap mt-[50px] xl:mt-0">
            <div className="max-w-[570px] mx-[35px] xl:mr-[15px]">
                <h1 className="text-white mx-auto w-[310px] xl:w-auto text-[33px] xl:text-[52px] font-semibold">
                    ПРОДАЙ СКИНЫ ПРЯМО СЕЙЧАС !
                </h1>
                <div className="mt-[25px] font-medium max-w-[500px]">
                    <span className="text-[#a5a6a8] text-[10px] xl:text-[18px]">
                        Мгновенный обмен, продажа или покупка скинов{" "}
                        <span className="text-lemony text-[10px] xl:text-[18px]">
                            CS:GO , DOTA 2{" "}
                        </span>
                        <span className="text-white text-[10px] xl:text-[18px]">
                            за реальные деньги!
                        </span>
                    </span>
                </div>
                <div className="text-center xl:text-left">
                    <ButtonFill href="#">Продать</ButtonFill>
                </div>
            </div>

            <ImageBlock />
        </div>
    );
};
