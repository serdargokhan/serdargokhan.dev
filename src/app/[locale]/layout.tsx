import "../globals.css";
import { NextIntlClientProvider, createTranslator } from "next-intl";
import { getLocale } from "next-intl/server";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import type { Locale } from "@src/types/locale";
import { loadTranslations } from "@src/utils/load-translations";
import { nunitoFont } from "@src/utils/fonts";
import LocaleDetector from "@src/components/common/locale-detector";
import Navbar from "@src/layouts/navbar";
import Footer from "@src/layouts/footer";
import siteConfig, { localeUrl } from "../../../site.config";

export function generateStaticParams(): { locale: Locale }[] {
    return siteConfig.locales.map(locale => ({ locale }));
}

export default async function RootLayout(props: LayoutProps<"/[locale]">) {
    const { children } = props;
    const locale = await getLocale();

    const messages = await loadTranslations(locale);

    return (
        <html
            className={nunitoFont.className}
            lang={locale}
            data-scroll-behavior="smooth"
        >
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

const ogLocale = (locale: Locale) => (locale === "tr" ? "tr_TR" : "en_US");

export async function generateMetadata(props: {
    params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
    const { locale } = await props.params;

    const messages = await loadTranslations(locale);

    const t = createTranslator({ locale, messages });

    const languages: Record<string, string> = {
        "x-default": siteConfig.baseUrl
    };
    for (const code of siteConfig.locales) {
        languages[code] = localeUrl(code);
    }

    return {
        metadataBase: new URL(siteConfig.baseUrl),
        title: {
            default: t("default-seo-title"),
            template: "%s | Serdar Gökhan"
        },
        description: t("default-seo-description"),
        icons: {
            shortcut: "/favicon.ico",
            apple: "/static/apple-icon.png",
            other: [
                {
                    url: "/static/favicon-32x32.png",
                    sizes: "32x32",
                    type: "image/png"
                },
                {
                    url: "/static/favicon-16x16.png",
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
            languages,
            canonical: localeUrl(locale)
        },
        verification: {
            google: "UJthXaWw4SK7do_wKDjzQXss3tPHWfF0dXCBjfQrZek"
        },
        twitter: {
            card: "summary_large_image",
            creator: "@serdarrgokhann",
            images: ["/opengraph-image.jpg"]
        },
        openGraph: {
            title: "Serdar Gökhan",
            description: t("default-seo-description"),
            url: localeUrl(locale),
            siteName: "Serdar Gökhan",
            locale: ogLocale(locale),
            type: "website",
            images: ["/opengraph-image.jpg"]
        }
    };
}
