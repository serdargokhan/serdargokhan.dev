"use client";

import { useState, useSyncExternalStore } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@src/i18n/navigation";
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
    const pathname = usePathname();
    const locale = useLocale();
    const t = useTranslations("LocaleDetector");

    const showLocaleDetector =
        shouldDetectLocale && !dismissed && locale !== "tr";

    function persistPreference() {
        localStorage.setItem("locale-preference", "deny");
        setDismissed(true);
    }

    return (
        <div
            role="region"
            aria-label={t("region-label")}
            lang={locale}
            className={cn(
                "invisible fixed inset-0 top-auto translate-y-8 border-t-2 border-yellow bg-white py-4 text-ink opacity-0",
                showLocaleDetector &&
                    "visible translate-y-0 opacity-100 motion-safe:transition-[translate,opacity] motion-safe:delay-400 motion-safe:duration-200 motion-safe:ease-out"
            )}
        >
            <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
                <p className="text-sm font-medium">{t("message")}</p>
                <div className="flex items-center gap-4 max-md:w-full">
                    <div className="inline-block max-md:flex-1">
                        <button
                            type="button"
                            onClick={() => {
                                persistPreference();
                                router.replace(pathname, { locale: "tr" });
                            }}
                            className="inline-block w-full press rounded-md border border-ink bg-white px-4 py-1.5 font-semibold hover:shadow-brutal-blue motion-safe:hover:translate-x-1 motion-safe:hover:-translate-y-1"
                        >
                            {t("action")}
                        </button>
                    </div>
                    <button
                        type="button"
                        aria-label={t("dismiss")}
                        className="rounded-full border border-ink p-1.5 transition-colors duration-150 ease-out hover:bg-blue hover:text-white"
                        onClick={persistPreference}
                    >
                        <CrossIcon aria-hidden="true" className="h-3.5 w-3.5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
