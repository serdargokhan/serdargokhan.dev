import type { MetadataRoute } from "next";
import siteConfig, { localeUrl } from "../../site.config";

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date().toISOString().split("T")[0];

    return siteConfig.locales.map(locale => ({
        url: localeUrl(locale),
        lastModified,
        alternates: {
            languages: siteConfig.locales.reduce<Record<string, string>>(
                (acc, code) => {
                    acc[code] = localeUrl(code);
                    return acc;
                },
                {}
            )
        }
    }));
}
