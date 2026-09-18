"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { cn } from "@src/utils/cn";
import NextImage from "@src/components/common/next-image";
import NextLink from "@src/components/common/next-link";
import SiteLogo from "@public/images/common/site-logo.svg";

const navigationLinks = ["about", "projects", "contact"] as const;

export default function Navbar() {
    const [activeLink, setActiveLink] = useState("");
    const locale = useLocale();
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
                <NextLink
                    className="shrink-0 rounded-full bg-yellow p-1"
                    href="#"
                    aria-label="Back to top"
                    onClick={() => setActiveLink("")}
                >
                    <NextImage width={28} height={28} src={SiteLogo} alt="" />
                </NextLink>

                <ul className="flex items-center gap-4 text-sm font-semibold sm:gap-8 sm:text-base">
                    {navigationLinks.map(navigationLink => (
                        <li key={navigationLink}>
                            <NextLink
                                href={`#${navigationLink}`}
                                aria-current={
                                    activeLink === navigationLink
                                        ? "location"
                                        : undefined
                                }
                                onClick={() => setActiveLink(navigationLink)}
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
                            </NextLink>
                        </li>
                    ))}
                </ul>

                <NextLink
                    className="inline-block shrink-0 press border-2 border-ink bg-white px-3 py-1.5 text-xs font-bold text-ink hover:shadow-brutal-yellow xs:text-sm sm:px-4 motion-safe:hover-fine:translate-x-0.5 motion-safe:hover-fine:-translate-y-0.5"
                    href={
                        locale === "tr"
                            ? "/static/Serdar-Gökhan-BAKIRCI-TR.pdf"
                            : "/static/Serdar-Gökhan-BAKIRCI-EN.pdf"
                    }
                    target="_blank"
                    prefetch={false}
                >
                    {t("resume")}
                </NextLink>
            </div>
        </nav>
    );
}
