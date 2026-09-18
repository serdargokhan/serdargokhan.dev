import { defineRouting } from "next-intl/routing";
import siteConfig from "../../site.config";

export const routing = defineRouting({
    locales: siteConfig.locales,
    defaultLocale: siteConfig.defaultLocale,
    alternateLinks: false,
    localeDetection: false,
    localePrefix: "as-needed"
});
