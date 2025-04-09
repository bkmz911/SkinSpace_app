import {
    CustomBorder,
    FAQ,
    IntermediateBlock,
    RecentDeals,
    Statistic,
    TotalSold,
    WelcomeBlock,
    WhyUs,
} from "@/features/home/ui";

export const HomePage = () => {
    return (
        <>
            {/* welcome part */}
            <section>
                <WelcomeBlock />
                <CustomBorder />
            </section>

            {/* why-us and recent-deals parts */}
            <section className="bg-[url(@/public/bg_CS.png)] bg-top bg-no-repeat bg-cover ">
                <WhyUs />
                <RecentDeals />
            </section>

            {/* intermediate block */}
            <IntermediateBlock
                style="linear-gradient(180deg, #272321 0%, #242222 39.93%, #232528 71.68%, rgba(37, 40, 44, 0) 100%)"
                className="h-[10px] pt-[25px] pb-[35px] relative z-10"
            />

            {/* statistic and FAQ parts */}
            <section className="bg-[url(@/public/bg_Dota.png)] bg-no-repeat bg-cover bg-top -mt-[45px]">
                <TotalSold />
                <Statistic />
                <FAQ />
            </section>
            
            {/* intermediate block */}
            <IntermediateBlock
                style="linear-gradient(180deg, rgba(33,36,39,0.8995973389355743) 18%, rgba(25,27,31,1) 60%)"
                className="h-[200px] w-full"
            />
        </>
    );
};
