"use client";

import { Label } from "@src/components/ui/Label";
import { Switch } from "@src/components/ui/Switch";
import { useRouter, usePathname } from "next/navigation";

function Footer() {
    const router = useRouter();

    const pathname = usePathname();

    return (
        <footer className="h-16 flex items-center bg-primary-300 text-primary-400 cursor-default">
            <div className="container flex justify-between text-sm items-center">
                <p>Made with ❤️ in Istanbul © {new Date().getFullYear()}</p>
                <div className="flex items-center space-x-2 font-semibold">
                    <Label htmlFor="lang">TR</Label>
                    <Switch
                        id="lang"
                        aria-label="Locale Switcher"
                        className="bg-primary-100 border-white [&>span]:bg-primary-300"
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
