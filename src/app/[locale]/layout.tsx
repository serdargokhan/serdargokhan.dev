import "./globals.css";
import { Nunito } from "next/font/google";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { useLocale } from "next-intl";
import { cn } from "src/utils";
import Navbar from "@src/components/layouts/Navbar";
import Footer from "@src/components/layouts/Footer";

const nunitoFont = Nunito({
    subsets: ["latin", "latin-ext"],
    weight: "variable"
});

export default function RootLayout({ children }: { children: ReactNode }) {
    const locale = useLocale();

    return (
        <html
            className={cn("scroll-smooth", nunitoFont.className)}
            lang={locale}
        >
            <body>
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}

export const metadata: Metadata = {
    title: {
        default: "Portfolio | Serdar Gökhan",
        template: "%s | Serdar Gökhan"
    },
    description:
        "I’m a front-end developer also a mechatronics engineer building scalable, cross-browser compatible, performant, and responsive websites located in İstanbul.",
    icons: {
        shortcut: "/favicon.ico",
        apple: "static/apple-icon.png",
        other: [
            {
                url: "static/favicon-32x32.png",
                sizes: "32x32",
                type: "image/png"
            },
            {
                url: "static/favicon-16x16.png",
                sizes: "16x16",
                type: "image/png"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        creator: "@serdarrgokhann"
    },
    openGraph: {
        title: "Serdar Gökhan",
        description:
            "I’m a front-end developer also a mechatronics engineer building scalable, cross-browser compatible, performant, and responsive websites located in İstanbul.",
        url: "https://serdargokhan.dev",
        siteName: "Serdar Gökhan",
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
