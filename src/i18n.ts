import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import siteConfig from "site.config";

const locales = siteConfig.locales;

export default getRequestConfig(async ({ locale }) => {
    if (!locales.includes(locale as any)) notFound();

    return {
        messages: (await import(`../translations/${locale}.json`)).default
    };
});
