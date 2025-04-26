import { Header, Footer } from "@/widgets";
import NextTopLoader from "nextjs-toploader";

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
            <NextTopLoader color="#ffdb18" />
        </>
    );
};
