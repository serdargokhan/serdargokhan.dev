import { useTranslations } from "next-intl";
import NextImage from "@src/components/common/next-image";
import ExternalLink from "@src/components/common/external-link";
import GreetingImage from "@public/images/pages/home/greeting.svg";

export default function GreetingSection() {
    const t = useTranslations("Home.GreetingSection");

    return (
        <section className="flex min-h-[calc(100svh-var(--header-height))] items-center bg-cream bg-noise">
            <div className="rise-in container grid translate-y-0 items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
                <div className="grid gap-5">
                    <p className="font-mono text-sm font-medium text-blue">
                        {t("greeting")}
                    </p>
                    <h1 className="text-5xl font-extrabold tracking-tight text-balance text-ink sm:text-6xl xl:text-7xl">
                        {t("name")}
                    </h1>
                    <p className="text-xl font-bold text-ink/60 sm:text-2xl">
                        {t("title")}
                    </p>
                    <div className="grid max-w-prose gap-4 font-medium text-pretty text-ink/80">
                        <p>{t("paragraph-one")}</p>
                        <p>
                            {t.rich("paragraph-two", {
                                link: children => (
                                    <ExternalLink
                                        href="https://www.borusanotomotiv.com/"
                                        className="font-bold text-blue underline decoration-2 underline-offset-2 transition-colors duration-150 ease-out hover:bg-yellow"
                                    >
                                        {children}
                                    </ExternalLink>
                                )
                            })}
                        </p>
                    </div>
                </div>
                <NextImage
                    className="mx-auto h-auto w-full max-w-md lg:max-w-none"
                    src={GreetingImage}
                    preload
                    fetchPriority="high"
                    alt=""
                />
            </div>
        </section>
    );
}
