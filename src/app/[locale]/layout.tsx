import "../globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nunito } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { Analytics } from "@vercel/analytics/react";
import { cn } from "src/utils";
import Navbar from "@src/components/layouts/Navbar";
import Footer from "@src/components/layouts/Footer";

const nunitoFont = Nunito({
    subsets: ["latin", "latin-ext"],
    weight: "variable"
});

export function generateStaticParams() {
    return [{ locale: "en" }, { locale: "tr" }];
}

type RootLayoutProps = {
    children: ReactNode;
    params: { locale: string };
};

export default async function RootLayout({
    children,
    params: { locale }
}: RootLayoutProps) {
    let messages;
    try {
        messages = (await import(`../../../translations/${locale}.json`))
            .default;
    } catch (error) {
        notFound();
    }

    return (
        <html
            className={cn("scroll-smooth", nunitoFont.className)}
            lang={locale}
        >
            <body>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                </NextIntlClientProvider>

                <Analytics />
            </body>
        </html>
    );
}

const BASE_URL = "https://serdargokhan.dev";

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),
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
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1
        }
    },
    alternates: {
        languages: {
            "x-default": BASE_URL,
            en: `${BASE_URL}/en`,
            tr: `${BASE_URL}/tr`
        },
        canonical: BASE_URL
    },
    verification: {
        google: "UJthXaWw4SK7do_wKDjzQXss3tPHWfF0dXCBjfQrZek"
    },
    twitter: {
        card: "summary_large_image",
        creator: "@serdarrgokhann"
    },
    openGraph: {
        title: "Serdar Gökhan",
        description:
            "I’m a front-end developer also a mechatronics engineer building scalable, cross-browser compatible, performant, and responsive websites located in İstanbul.",
        url: BASE_URL,
        siteName: "Serdar Gökhan",
        locale: "en-US",
        type: "website"
    }
};
