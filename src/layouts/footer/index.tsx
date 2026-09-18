"use client";

import { useRouter } from "@src/i18n/navigation";
import { useLocale } from "next-intl";
import { Label } from "@src/components/ui/label";
import { Switch } from "@src/components/ui/switch";
import ExternalLink from "@src/components/common/external-link";
import GithubIcon from "@src/icons/github";
import LinkedinIcon from "@src/icons/linkedin";
import TwitterIcon from "@src/icons/twitter";

export default function Footer() {
    const router = useRouter();
    const locale = useLocale();

    return (
        <footer className="flex h-footer items-center bg-ink text-white">
            <div className="container flex items-center justify-between text-sm">
                <div className="flex items-center gap-2.5">
                    <ExternalLink
                        href="https://github.com/serdargokhan"
                        aria-label="GitHub"
                    >
                        <GithubIcon
                            aria-hidden="true"
                            className="h-8 w-8 fill-white transition-colors duration-150 ease-out hover:fill-yellow"
                        />
                    </ExternalLink>
                    <ExternalLink
                        href="https://www.linkedin.com/in/serdarrgokhann"
                        aria-label="LinkedIn"
                    >
                        <LinkedinIcon
                            aria-hidden="true"
                            className="h-8 w-8 fill-white transition-colors duration-150 ease-out hover:fill-yellow"
                        />
                    </ExternalLink>
                    <ExternalLink
                        href="https://twitter.com/serdarrgokhann"
                        aria-label="Twitter"
                    >
                        <TwitterIcon
                            aria-hidden="true"
                            className="h-8 w-8 fill-white transition-colors duration-150 ease-out hover:fill-yellow"
                        />
                    </ExternalLink>
                </div>
                <p className="hidden sm:inline-block">
                    Made with ❤️ © {new Date().getFullYear()}
                </p>
                <div className="flex items-center space-x-2 font-semibold">
                    <Label lang="tr">Türkçe</Label>
                    <Switch
                        id="lang"
                        aria-label={
                            locale === "en"
                                ? "Switch to Turkish"
                                : "Switch to English"
                        }
                        className="border-white bg-yellow [&>span]:bg-ink"
                        checked={locale === "en"}
                        onCheckedChange={checkedValue => {
                            router.push("/", {
                                locale: checkedValue ? "en" : "tr"
                            });
                        }}
                    />
                    <Label lang="en">English</Label>
                </div>
            </div>
        </footer>
    );
}
