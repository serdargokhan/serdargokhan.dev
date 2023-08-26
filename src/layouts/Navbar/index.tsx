"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { cn } from "@src/utils";
import { NextImage, NextLink } from "@src/components/common";
import SiteLogo from "@public/images/common/site-logo.svg";

const navigationLinks = ["about", "projects", "contact"] as const;

export default function Navbar() {
    const [activeLink, setActiveLink] = useState("");

    const pathname = usePathname();

    const t = useTranslations("Navigation");

    useEffect(() => {
        if (window.location.hash) {
            setActiveLink(window.location.hash.slice(1));
            const section = document.querySelector(window.location.hash);
            section?.scrollIntoView({
                behavior: "smooth"
            });
        }
    }, []);

    return (
        <nav className="h-header sticky top-0 z-50 flex items-center border-b-2 border-primary-100 bg-primary-300">
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

                <ul className="flex items-center justify-between gap-2 font-medium text-white sm:gap-6">
                    {navigationLinks.map(navigationLink => (
                        <li key={navigationLink}>
                            <NextLink
                                href={`#${navigationLink}`}
                                onClick={() => setActiveLink(navigationLink)}
                                className={cn(
                                    "py-1 decoration-2 underline-offset-8",
                                    activeLink === navigationLink
                                        ? "text-primary-100 underline"
                                        : "transition hover:text-primary-100 hover:underline"
                                )}
                            >
                                {t(navigationLink)}
                            </NextLink>
                        </li>
                    ))}
                </ul>

                <div className="group inline-block">
                    <NextLink
                        className="inline-block rounded-md border border-primary-300 bg-white px-4 py-1.5 font-medium transition duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:shadow-[-4px_4px_0px_0px_#ffd300]"
                        href={
                            pathname === "/tr"
                                ? "/static/resume-tr.pdf"
                                : "/static/resume-en.pdf"
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
