"use client";

import { useRouter, usePathname } from "next/navigation";
import { Label } from "@src/components/ui/Label";
import { Switch } from "@src/components/ui/Switch";

function Footer() {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <footer className="h-footer flex cursor-default items-center bg-primary-300 text-primary-400">
            <div className="container flex items-center justify-between text-sm">
                <p>Made with ❤️ © {new Date().getFullYear()}</p>
                <div className="flex items-center space-x-2 font-semibold">
                    <Label htmlFor="lang">TR</Label>
                    <Switch
                        id="lang"
                        aria-label="Locale Switcher"
                        className="border-white bg-primary-100 [&>span]:bg-primary-300"
                        defaultChecked={pathname !== "/tr"}
                        onCheckedChange={checkedValue => {
                            router.push(checkedValue ? "/" : "/tr");
                        }}
                    />
                    <Label htmlFor="lang">EN</Label>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
