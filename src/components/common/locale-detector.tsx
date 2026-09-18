"use client";

import { useState, useSyncExternalStore } from "react";
import { useLocale } from "next-intl";
import { useRouter } from "@src/i18n/navigation";
import CrossIcon from "@src/icons/cross";
import { cn } from "@src/utils/cn";

const subscribe = () => () => {};

function getShouldDetectLocale() {
    const isTurkeyTimeZone =
        Intl.DateTimeFormat().resolvedOptions().timeZone === "Europe/Istanbul";
    const isDenied = localStorage.getItem("locale-preference") === "deny";

    return isTurkeyTimeZone && !isDenied;
}

export default function LocaleDetector() {
    const [dismissed, setDismissed] = useState(false);
    const shouldDetectLocale = useSyncExternalStore(
        subscribe,
        getShouldDetectLocale,
        () => false
    );

    const router = useRouter();
    const locale = useLocale();

    const showLocaleDetector =
        shouldDetectLocale && !dismissed && locale !== "tr";

    return (
        <div
            className={cn(
                "border-primary-100 text-primary-300 invisible fixed inset-0 top-auto translate-y-8 border-t-2 bg-white py-4 opacity-0",
                showLocaleDetector &&
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
                            type="button"
                            onClick={() => router.push("/", { locale: "tr" })}
                            className="inline-block w-full rounded-md border border-primary-300 bg-white px-4 py-1.5 font-semibold transition duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:shadow-[-4px_4px_0px_0px_#3a10e5]"
                        >
                            Devam
                        </button>
                    </div>
                    <button
                        type="button"
                        aria-label="Dismiss language suggestion"
                        className="rounded-full border border-primary-300 p-1.5 transition hover:bg-primary-200 hover:text-white"
                        onClick={() => {
                            localStorage.setItem("locale-preference", "deny");
                            setDismissed(true);
                        }}
                    >
                        <CrossIcon aria-hidden="true" className="h-3.5 w-3.5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
