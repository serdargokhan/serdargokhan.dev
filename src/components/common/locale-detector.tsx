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
            role="region"
            aria-label="Dil önerisi"
            lang="tr"
            className={cn(
                "invisible fixed inset-0 top-auto translate-y-8 border-t-2 border-yellow bg-white py-4 text-ink opacity-0",
                showLocaleDetector &&
                    "visible translate-y-0 opacity-100 motion-safe:transition-[translate,opacity] motion-safe:delay-400 motion-safe:duration-200 motion-safe:ease-out"
            )}
        >
            <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
                <p className="text-sm font-medium">
                    Görünüşe göre Türkiye&apos;den bağlanıyorsunuz. Daha iyi bir
                    içerik deneyimi için dilinizi Türkçe yapabilirsiniz.
                </p>
                <div className="flex items-center gap-4 max-md:w-full">
                    <div className="inline-block max-md:flex-1">
                        <button
                            type="button"
                            onClick={() => router.push("/", { locale: "tr" })}
                            className="inline-block w-full press rounded-md border border-ink bg-white px-4 py-1.5 font-semibold hover:shadow-brutal-blue motion-safe:hover-fine:translate-x-1 motion-safe:hover-fine:-translate-y-1"
                        >
                            Devam
                        </button>
                    </div>
                    <button
                        type="button"
                        aria-label="Dismiss language suggestion"
                        className="rounded-full border border-ink p-1.5 transition-colors duration-150 ease-out hover:bg-blue hover:text-white"
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
