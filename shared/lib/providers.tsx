import StoreProvider from "@/store/storeProvider";
import { Header, Footer } from "@/widgets";
import NextTopLoader from "nextjs-toploader";

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <>
            <StoreProvider>
                <Header />
                <main>{children}</main>
                <Footer />
            </StoreProvider>
            <NextTopLoader color="#ffdb18" />
        </>
    );
};
