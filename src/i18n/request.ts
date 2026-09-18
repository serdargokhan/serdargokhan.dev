import * as rootParams from "next/root-params";
import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ locale }) => {
    const requested = locale ?? (await rootParams.locale());

    const currentLocale = hasLocale(routing.locales, requested)
        ? requested
        : routing.defaultLocale;

    return {
        locale: currentLocale,
        messages: (await import(`../../translations/${currentLocale}.json`))
            .default
    };
});
