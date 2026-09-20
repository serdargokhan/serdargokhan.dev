import type { MetadataRoute } from "next";
import siteConfig, { localeUrl } from "../../site.config";

const routes = ["", "/privacy"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date().toISOString().split("T")[0];

    const languagesFor = (path: string) =>
        siteConfig.locales.reduce<Record<string, string>>(
            (acc, code) => {
                acc[code] = `${localeUrl(code)}${path}`;
                return acc;
            },
            { "x-default": `${localeUrl(siteConfig.defaultLocale)}${path}` }
        );

    return siteConfig.locales.flatMap(locale =>
        routes.map(route => ({
            url: `${localeUrl(locale)}${route}`,
            lastModified,
            alternates: { languages: languagesFor(route) }
        }))
    );
}
