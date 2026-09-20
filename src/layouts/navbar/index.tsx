"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@src/i18n/navigation";
import { cn } from "@src/utils/cn";
import NextImage from "@src/components/common/next-image";
import NextLink from "@src/components/common/next-link";
import ExternalLinkIcon from "@src/icons/external-link";
import SiteLogo from "@public/images/common/site-logo.svg";

const navigationLinks = ["about", "projects", "contact"] as const;

export default function Navbar() {
    const [activeLink, setActiveLink] = useState("");
    const locale = useLocale();
    const pathname = usePathname();
    const isHome = pathname === "/";
    const t = useTranslations("Navigation");

    useEffect(() => {
        if (window.location.hash) {
            document
                .querySelector(window.location.hash)
                ?.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    useEffect(() => {
        const sections = navigationLinks
            .map(id => document.getElementById(id))
            .filter((section): section is HTMLElement => section !== null);

        const observer = new IntersectionObserver(
            entries => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        setActiveLink(entry.target.id);
                    }
                }
            },
            { rootMargin: "-45% 0px -50% 0px" }
        );

        for (const section of sections) {
            observer.observe(section);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <nav className="sticky top-0 z-50 border-b-2 border-yellow bg-ink">
            <div className="container flex h-header items-center justify-between gap-3">
                <Link
                    className="shrink-0 rounded-full bg-yellow p-1"
                    href="/"
                    aria-label={t("home")}
                    onClick={event => {
                        setActiveLink("");

                        if (isHome) {
                            event.preventDefault();
                            window.history.replaceState(
                                null,
                                "",
                                window.location.pathname
                            );
                            window.scrollTo({ top: 0 });
                        }
                    }}
                >
                    <NextImage width={28} height={28} src={SiteLogo} alt="" />
                </Link>

                <ul className="flex items-center gap-4 text-sm font-semibold sm:gap-8 sm:text-base">
                    {navigationLinks.map(navigationLink => (
                        <li key={navigationLink}>
                            <Link
                                href={`/#${navigationLink}`}
                                aria-current={
                                    activeLink === navigationLink
                                        ? "location"
                                        : undefined
                                }
                                onClick={() => {
                                    if (isHome) {
                                        setActiveLink(navigationLink);
                                    }
                                }}
                                className={cn(
                                    "relative py-2 transition-colors duration-150 ease-out",
                                    activeLink === navigationLink
                                        ? "text-yellow"
                                        : "text-white/70 hover:text-white"
                                )}
                            >
                                {t(navigationLink)}
                                <span
                                    aria-hidden="true"
                                    className={cn(
                                        "absolute inset-x-0 bottom-0 h-0.5 origin-left bg-yellow transition-transform duration-150 ease-out",
                                        activeLink === navigationLink
                                            ? "scale-x-100"
                                            : "scale-x-0"
                                    )}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>

                <NextLink
                    className="inline-flex shrink-0 press items-center gap-1.5 border-2 border-ink bg-white px-3 py-1.5 text-xs font-bold text-ink hover:shadow-brutal-yellow xs:text-sm sm:px-4 motion-safe:hover-fine:translate-x-0.5 motion-safe:hover-fine:-translate-y-0.5"
                    href={
                        locale === "tr"
                            ? "/static/Serdar-Gökhan-BAKIRCI-TR.pdf"
                            : "/static/Serdar-Gökhan-BAKIRCI-EN.pdf"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    prefetch={false}
                >
                    {t("resume")}
                    <ExternalLinkIcon
                        aria-hidden="true"
                        className="h-3.5 w-3.5 fill-current"
                    />
                </NextLink>
            </div>
        </nav>
    );
}
