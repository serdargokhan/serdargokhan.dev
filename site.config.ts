import { Locale } from "@src/types/locale";

type Config = {
    baseUrl: string;
    locales: Locale[];
    defaultLocale: Locale;
    lastUpdated: string;
};

const siteConfig: Config = {
    baseUrl: "https://serdargokhan.dev",
    locales: ["en", "tr"],
    defaultLocale: "en",
    lastUpdated: "2026-09-21"
};

const { baseUrl, defaultLocale } = siteConfig;

export function localeUrl(locale: Locale) {
    return locale === defaultLocale ? baseUrl : `${baseUrl}/${locale}`;
}

export default siteConfig;
