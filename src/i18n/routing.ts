import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";
import siteConfig from "site.config";

export const routing = defineRouting({
    locales: siteConfig.locales,
    defaultLocale: siteConfig.defaultLocale,
    alternateLinks: false
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
    createNavigation(routing);
