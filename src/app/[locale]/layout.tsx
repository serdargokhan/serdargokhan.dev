import "../globals.css";
import { NextIntlClientProvider, createTranslator } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import type { Locale } from "@src/types";
import { loadTranslations, nunitoFont } from "src/utils";
import { LocaleDetector } from "@src/components/common";
import Navbar from "@src/layouts/Navbar";
import Footer from "@src/layouts/Footer";
import siteConfig from "site.config";

export function generateStaticParams(): { locale: Locale }[] {
    return siteConfig.locales.map(locale => ({ locale }));
}

export default async function RootLayout(props: LayoutProps<"/[locale]">) {
    const params = await props.params;
    const { locale } = params;
    const { children } = props;

    setRequestLocale(locale);
    const messages = await loadTranslations(locale as Locale);

    return (
        <html className={nunitoFont.className} lang={locale}>
            <body>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                    <LocaleDetector />
                </NextIntlClientProvider>

                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}

const BASE_URL = "https://serdargokhan.dev";

export async function generateMetadata(props: {
    params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
    const params = await props.params;
    const { locale } = params;

    const messages = await loadTranslations(locale);

    const t = createTranslator({ locale, messages });

    return {
        metadataBase: new URL(BASE_URL),
        title: {
            default: t("default-seo-title"),
            template: "%s | Serdar Gökhan"
        },
        description: t("default-seo-description"),
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
            description: t("default-seo-description"),
            url: `${BASE_URL}/${locale}`,
            siteName: "Serdar Gökhan",
            locale,
            type: "website"
        }
    };
}
