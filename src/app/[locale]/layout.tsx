import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import type { Locale } from "@src/types/locale";
import { loadClientTranslations } from "@src/utils/load-translations";
import { nunitoFont, plexMonoFont } from "@src/utils/fonts";
import { routing } from "@src/i18n/routing";
import LocaleDetector from "@src/components/common/locale-detector";
import SkipToContent from "@src/components/common/skip-to-content";
import Navbar from "@src/layouts/navbar";
import Footer from "@src/layouts/footer";
import siteConfig, { localeUrl } from "../../../site.config";

export function generateStaticParams(): { locale: Locale }[] {
    return routing.locales.map(locale => ({ locale }));
}

export default async function RootLayout(props: LayoutProps<"/[locale]">) {
    const { children } = props;
    const locale = await getLocale();

    const messages = await loadClientTranslations(locale);

    return (
        <html
            className={`${nunitoFont.className} ${plexMonoFont.variable}`}
            lang={locale}
            data-scroll-behavior="smooth"
        >
            <body className="flex min-h-svh flex-col">
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <SkipToContent />
                    <Navbar />
                    <main className="flex-1" id="main-content">
                        {children}
                    </main>
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

    const t = await getTranslations({ locale });

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
