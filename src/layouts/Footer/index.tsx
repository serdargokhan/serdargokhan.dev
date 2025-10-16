"use client";

import { useRouter, usePathname } from "@src/i18n/routing";
import { Label, Switch } from "@src/components/ui";
import { NextLink } from "@src/components/common";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@src/icons";

export default function Footer() {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <footer className="h-footer bg-primary-300 flex cursor-default items-center text-white">
            <div className="container flex items-center justify-between text-sm">
                <div className="flex items-center gap-2.5">
                    <NextLink
                        href="https://github.com/serdargokhan"
                        title="Github"
                    >
                        <GithubIcon className="hover:fill-primary-100 h-8 w-8 fill-white transition" />
                    </NextLink>
                    <NextLink
                        href="https://www.linkedin.com/in/serdarrgokhann"
                        title="Linkedin"
                    >
                        <LinkedinIcon className="hover:fill-primary-100 h-8 w-8 fill-white transition" />
                    </NextLink>
                    <NextLink
                        href="https://twitter.com/serdarrgokhann"
                        title="Twitter"
                    >
                        <TwitterIcon className="hover:fill-primary-100 h-8 w-8 fill-white transition" />
                    </NextLink>
                </div>
                <p className="hidden sm:inline-block">
                    Made with ❤️ © {new Date().getFullYear()}
                </p>
                <div className="flex items-center space-x-2 font-semibold">
                    <Label htmlFor="lang">Türkçe</Label>
                    <Switch
                        id="lang"
                        aria-label="Locale Switcher"
                        className="bg-primary-100 [&>span]:bg-primary-300 border-white"
                        defaultChecked={pathname !== "/tr"}
                        onCheckedChange={checkedValue => {
                            router.push("/", {
                                locale: checkedValue ? "en" : "tr"
                            });
                        }}
                    />
                    <Label htmlFor="lang">English</Label>
                </div>
            </div>
        </footer>
    );
}
