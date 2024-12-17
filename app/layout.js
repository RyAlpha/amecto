import { Anton, Roboto } from "next/font/google";
import "./globals.css";

const luckyguy = Anton({
    variable: "--font-anton",
    weight: ["400"],
    // subsets: ["latin"],
});

const robo = Roboto({
    variable: "--font-roboto",
    weight: ["400"],
    // subsets: ["latin"],
});

export const metadata = {
    title: "$AME",
    description: "Average Male Experience",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${luckyguy.variable} ${robo.variable}`}>{children}</body>
        </html>
    );
}
