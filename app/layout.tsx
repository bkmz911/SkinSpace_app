import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/widgets/Header/header";
import { Footer } from "@/widgets/Footer/footer";

const montserrat = Montserrat({
    variable: "--font-montserrat",
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
                <Header />
                <main>{children}</main>
                <Footer/>
            </body>
        </html>
    );
}
