import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "@/shared/lib/providers";

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
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
