"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@src/utils";
import { NextImage } from "@src/components/common";
import SiteLogo from "@public/images/common/site-logo.svg";

const navigationLinks = ["about", "projects", "contact"] as const;

export default function Navbar() {
    const [activeLink, setActiveLink] = useState("");

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
                <a
                    className="rounded-full bg-primary-100 p-1 transition hover:shadow-primary-400"
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
                </a>

                <ul className="flex items-center justify-between gap-2 font-semibold text-primary-400 sm:gap-4">
                    {navigationLinks.map(navigationLink => (
                        <li
                            key={navigationLink}
                            onClick={() => setActiveLink(navigationLink)}
                            className={cn(
                                "cursor-pointer decoration-[3px] underline-offset-8",
                                activeLink === navigationLink
                                    ? "text-primary-100 underline"
                                    : "hover:text-primary-100 hover:underline"
                            )}
                        >
                            <a href={`#${navigationLink}`}>
                                {t(navigationLink)}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            className="rounded-full border-2 border-primary-100 px-3 py-1.5 transition hover:bg-primary-100 hover:text-primary-300 hover:shadow-primary-400"
                            href="/static/resume.pdf"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            {t("resume")}
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
