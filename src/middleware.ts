import createMiddleware from "next-intl/middleware";

export default createMiddleware({
    locales: ["en", "tr"],
    defaultLocale: "en",
    localeDetection: false
});

export const config = {
    matcher: ["/((?!api|_next|.*\\..*).*)"]
};
