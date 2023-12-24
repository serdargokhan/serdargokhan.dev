import createMiddleware from "next-intl/middleware";
import siteConfig from "site.config";

export default createMiddleware({
    locales: siteConfig.locales,
    defaultLocale: siteConfig.defaultLocale,
    localeDetection: false,
    localePrefix: "as-needed",
    alternateLinks: false
});

export const config = {
    matcher: ["/((?!api|_next|.*\\..*).*)"]
};
