"use client";

import { useRouter, usePathname, Link } from "@src/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Label } from "@src/components/ui/label";
import { Switch } from "@src/components/ui/switch";
import ExternalLink from "@src/components/common/external-link";
import GithubIcon from "@src/icons/github";
import LinkedinIcon from "@src/icons/linkedin";
import TwitterIcon from "@src/icons/twitter";

const navigationLinks = [
    { href: "/#about", key: "about" },
    { href: "/#experience", key: "experience" },
    { href: "/#contact", key: "contact" },
    { href: "/privacy", key: "privacy" }
] as const;

const socialLinks = [
    {
        href: "https://github.com/serdargokhan",
        label: "GitHub",
        icon: GithubIcon
    },
    {
        href: "https://www.linkedin.com/in/serdarrgokhann",
        label: "LinkedIn",
        icon: LinkedinIcon
    },
    {
        href: "https://twitter.com/serdarrgokhann",
        label: "Twitter",
        icon: TwitterIcon
    }
] as const;

export default function Footer() {
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();
    const t = useTranslations("Navigation");
    const tFooter = useTranslations("Footer");

    return (
        <footer className="bg-ink text-white">
            <div className="container flex min-h-footer flex-col items-center justify-center gap-5 py-5 lg:flex-row lg:justify-between lg:gap-8">
                <div className="flex items-center gap-1">
                    {socialLinks.map(({ href, label, icon: Icon }) => (
                        <ExternalLink
                            key={href}
                            href={href}
                            aria-label={label}
                            className="group p-1"
                        >
                            <Icon
                                aria-hidden="true"
                                className="h-6 w-6 fill-white transition-colors duration-150 ease-out group-hover:fill-yellow"
                            />
                        </ExternalLink>
                    ))}
                </div>

                <nav aria-label={tFooter("nav-label")}>
                    <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold">
                        {navigationLinks.map(({ href, key }) => (
                            <li key={key}>
                                <Link
                                    href={href}
                                    className="text-white/70 transition-colors duration-150 ease-out hover:text-yellow"
                                >
                                    {key === "privacy"
                                        ? tFooter("privacy")
                                        : t(key)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex items-center gap-5">
                    <p className="font-mono text-xs text-white/50">
                        {tFooter("copyright", {
                            year: new Date().getFullYear()
                        })}
                    </p>
                    <div
                        role="group"
                        aria-label={tFooter("language")}
                        className="flex items-center gap-2.5"
                    >
                        <Label
                            htmlFor="lang"
                            lang="tr"
                            className="cursor-pointer"
                        >
                            Türkçe
                        </Label>
                        <Switch
                            id="lang"
                            aria-label={tFooter("language")}
                            className="border-white bg-yellow [&>span]:bg-ink"
                            checked={locale === "en"}
                            onCheckedChange={checkedValue => {
                                router.replace(pathname, {
                                    locale: checkedValue ? "en" : "tr"
                                });
                            }}
                        />
                        <Label
                            htmlFor="lang"
                            lang="en"
                            className="cursor-pointer"
                        >
                            English
                        </Label>
                    </div>
                </div>
            </div>
        </footer>
    );
}
