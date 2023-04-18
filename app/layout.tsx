import "./globals.css";
import { Nunito } from "next/font/google";
import { ReactNode } from "react";
import type { Metadata } from "next";
import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";

const nunitoFont = Nunito({
    subsets: ["latin", "latin-ext"],
    weight: "variable"
});

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html className={`${nunitoFont.className} scroll-smooth`} lang="en">
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}

export const metadata: Metadata = {
    title: "Serdar Gökhan's Portfolio",
    description:
        "I’m a front-end developer also a mechatronics engineer building scalable, cross-browser compatible, performant, and responsive websites located in İstanbul.",
    icons: {
        icon: "/Navbar/LogoG.svg"
    },
    openGraph: {
        title: "Serdar Gökhan Portfolio",
        description:
            "I’m a front-end developer also a mechatronics engineer building scalable, cross-browser compatible, performant, and responsive websites located in İstanbul.",
        url: "https://serdargokhan.dev",
        siteName: "Serdar Gökhan Portfolio",
        images: [
            {
                url: "https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=90",
                width: 800,
                height: 600
            }
        ],
        locale: "en-US",
        type: "website"
    }
};
