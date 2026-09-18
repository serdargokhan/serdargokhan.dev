"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { useTranslations, useLocale } from "next-intl";
import { cn } from "@src/utils/cn";
import NextImage from "@src/components/common/next-image";
import NextLink from "@src/components/common/next-link";
import SiteLogo from "@public/images/common/site-logo.svg";

const navigationLinks = ["about", "projects", "contact"] as const;

function subscribeToHash(onStoreChange: () => void) {
    window.addEventListener("hashchange", onStoreChange);
    return () => window.removeEventListener("hashchange", onStoreChange);
}

function getHashLink() {
    return window.location.hash.slice(1);
}

export default function Navbar() {
    const hashLink = useSyncExternalStore(
        subscribeToHash,
        getHashLink,
        () => ""
    );
    const [activeLink, setActiveLink] = useState<string | null>(null);

    const currentLink = activeLink ?? hashLink;

    const locale = useLocale();
    const t = useTranslations("Navigation");

    useEffect(() => {
        if (window.location.hash) {
            document
                .querySelector(window.location.hash)
                ?.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    return (
        <nav className="sticky top-0 z-50 flex h-header items-center border-b-2 border-primary-100 bg-primary-300">
            <div className="container flex items-center justify-between">
                <NextLink
                    className="rounded-full bg-primary-100 p-1"
                    href="#"
                    title=""
                    onClick={() => setActiveLink("")}
                >
                    <NextImage
                        width={28}
                        height={28}
                        src={SiteLogo}
                        priority
                        alt="Site Logo"
                    />
                </NextLink>

                <ul className="hidden items-center justify-between gap-2 font-medium text-white xs:flex sm:gap-6">
                    {navigationLinks.map(navigationLink => (
                        <li key={navigationLink}>
                            <NextLink
                                href={`#${navigationLink}`}
                                onClick={() => setActiveLink(navigationLink)}
                                className={cn(
                                    "py-1 decoration-2 underline-offset-8",
                                    currentLink === navigationLink
                                        ? "text-primary-100 underline"
                                        : "hover:text-primary-100 transition hover:underline"
                                )}
                            >
                                {t(navigationLink)}
                            </NextLink>
                        </li>
                    ))}
                </ul>

                <div className="group inline-block">
                    <NextLink
                        className="inline-block rounded-md border border-primary-300 bg-white px-4 py-1.5 font-medium transition duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:shadow-[-4px_4px_0px_0px_#ffd300]"
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
            </div>
        </nav>
    );
}
