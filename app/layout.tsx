import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/widgets/Header/header";
import { Footer } from "@/widgets/Footer/footer";
import StoreProvider from "@/store/storeProvider";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    weight: ["500", "600", "700", "800"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "SkinSpace | Main",
    description:
        "SkinSpace - site for selling and buying skins in CS:GO, DOTA 2, Rust and more...",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${montserrat.className} antialiased bg-[#1F2125]`}
            >
                <StoreProvider>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </StoreProvider>
            </body>
        </html>
    );
}
