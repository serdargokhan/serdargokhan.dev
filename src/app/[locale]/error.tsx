"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@src/i18n/navigation";

export default function ErrorPage({
    error,
    reset
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    const t = useTranslations("Error");

    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <section className="flex min-h-[calc(100svh-var(--header-height)-var(--footer-height))] items-center bg-ink">
            <div className="container grid gap-5 py-20 lg:py-28">
                <p className="font-mono text-sm font-medium text-yellow">
                    {t("eyebrow")}
                </p>
                <h1 className="max-w-3xl text-5xl font-extrabold tracking-tight text-balance text-white sm:text-6xl">
                    {t("title")}
                </h1>
                <p className="max-w-prose text-lg font-medium text-pretty text-white/70">
                    {t("description")}
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-3">
                    <button
                        type="button"
                        onClick={reset}
                        className="inline-flex press items-center border-2 border-yellow bg-yellow px-5 py-2.5 font-mono text-sm font-semibold text-ink hover:shadow-brutal-blue motion-safe:hover-fine:translate-x-0.5 motion-safe:hover-fine:-translate-y-0.5"
                    >
                        {t("retry")}
                    </button>
                    <Link
                        href="/"
                        className="inline-flex press items-center border-2 border-white/25 px-5 py-2.5 font-mono text-sm font-semibold text-white hover:border-white hover:bg-white hover:text-ink"
                    >
                        {t("home")}
                    </Link>
                </div>
            </div>
        </section>
    );
}
