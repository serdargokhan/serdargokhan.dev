"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "@src/i18n/routing";
import { CrossIcon } from "@src/icons";
import { cn } from "@src/utils";

export default function LocaleDetector() {
    const [showLocaleDetector, setShowLocaleDetector] = useState(false);

    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const isTurkeyTimeZone =
            Intl.DateTimeFormat().resolvedOptions().timeZone ===
            "Europe/Istanbul";

        if (localStorage.getItem("locale-preference") === "deny") {
            setShowLocaleDetector(false);
        } else {
            setShowLocaleDetector(isTurkeyTimeZone);
        }
    }, []);

    return (
        <div
            className={cn(
                "border-primary-100 text-primary-300 invisible fixed inset-0 top-auto translate-y-8 border-t-2 bg-white py-4 opacity-0",
                showLocaleDetector &&
                    pathname !== "/tr" &&
                    "visible translate-y-0 opacity-100 transition delay-1000 duration-300 ease-in"
            )}
        >
            <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
                <p className="text-sm font-medium">
                    Görünüşe göre Türkiye&apos;den bağlanıyorsunuz. Daha iyi bir
                    içerik deneyimi için dilinizi Türkçe yapabilirsiniz.
                </p>
                <div className="flex items-center gap-4 max-md:w-full">
                    <div className="group inline-block max-md:flex-1">
                        <button
                            onClick={() => router.push("/", { locale: "tr" })}
                            className="border-primary-300 inline-block w-full rounded-md border bg-white px-4 py-1.5 font-semibold transition duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:shadow-[-4px_4px_0px_0px_#3a10e5]"
                        >
                            Devam
                        </button>
                    </div>
                    <button
                        className="border-primary-300 hover:bg-primary-200 rounded-full border p-1.5 transition hover:text-white"
                        onClick={() => {
                            localStorage.setItem("locale-preference", "deny");
                            setShowLocaleDetector(false);
                        }}
                    >
                        <CrossIcon className="h-3.5 w-3.5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
