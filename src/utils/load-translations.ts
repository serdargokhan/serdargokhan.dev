import type { Locale } from "@src/types/locale";
import { cache } from "react";

export const loadTranslations = cache(async (locale: Locale) => {
    return (await import(`../../translations/${locale}.json`)).default;
});

export const loadClientTranslations = cache(async (locale: Locale) => {
    const messages = await loadTranslations(locale);

    return {
        Navigation: messages.Navigation,
        Footer: messages.Footer,
        Error: messages.Error,
        Home: {
            ContactSection: messages.Home.ContactSection,
            PortfolioSection: messages.Home.PortfolioSection
        }
    };
});
