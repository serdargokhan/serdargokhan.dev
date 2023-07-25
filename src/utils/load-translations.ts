import type { Locale } from "@src/types";
import { cache } from "react";

export const loadTranslations = cache(async (locale: Locale) => {
    return (await import(`../../translations/${locale}.json`)).default;
});
