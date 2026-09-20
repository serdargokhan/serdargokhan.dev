import { useTranslations } from "next-intl";
import { Link } from "@src/i18n/navigation";

export default function NotFoundPage() {
    const t = useTranslations("NotFound");

    return (
        <section className="flex min-h-[calc(100svh-var(--header-height)-var(--footer-height))] items-center bg-cream bg-noise">
            <div className="container grid gap-12 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16 lg:py-28">
                <div className="grid gap-5">
                    <p className="font-mono text-sm font-medium text-blue">
                        {t("eyebrow")}
                    </p>
                    <h1 className="text-5xl font-extrabold tracking-tight text-balance text-ink sm:text-6xl xl:text-7xl">
                        {t("title")}
                    </h1>
                    <p className="max-w-prose text-lg font-medium text-pretty text-ink/80">
                        {t("description")}
                    </p>
                    <div className="mt-2 flex flex-wrap items-center gap-3">
                        <Link
                            href="/"
                            className="inline-flex press items-center border-2 border-ink bg-yellow px-5 py-2.5 font-mono text-sm font-semibold text-ink hover:shadow-brutal-blue motion-safe:hover-fine:translate-x-0.5 motion-safe:hover-fine:-translate-y-0.5"
                        >
                            {t("home")}
                        </Link>
                        <Link
                            href="/#projects"
                            className="inline-flex press items-center border-2 border-ink/20 px-5 py-2.5 font-mono text-sm font-semibold text-ink hover:border-ink hover:bg-ink hover:text-white"
                        >
                            {t("projects")}
                        </Link>
                    </div>
                </div>

                <p
                    aria-hidden="true"
                    className="hidden text-right font-mono text-[clamp(7rem,24vw,14rem)] leading-none font-semibold text-transparent select-none [-webkit-text-stroke:2px_var(--color-blue)] lg:block"
                >
                    404
                </p>
            </div>
        </section>
    );
}
