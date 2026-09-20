import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import siteConfig, { localeUrl } from "../../../../site.config";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("Privacy");

    const languages: Record<string, string> = {
        "x-default": siteConfig.baseUrl
    };
    for (const code of siteConfig.locales) {
        languages[code] = `${localeUrl(code)}/privacy`;
    }

    return {
        title: t("title"),
        description: t("seo-description"),
        alternates: { languages }
    };
}

const sections = ["analytics", "hosting", "contact", "changes"] as const;

export default async function PrivacyPage() {
    const t = await getTranslations("Privacy");

    return (
        <section className="bg-cream bg-noise">
            <div className="container grid gap-12 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:py-28">
                <div className="lg:sticky lg:top-24 lg:self-start">
                    <p className="font-mono text-sm font-medium text-blue">
                        {t("last-updated")}
                    </p>
                    <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-balance text-ink sm:text-6xl">
                        {t("title")}
                    </h1>
                    <p className="mt-5 text-lg font-medium text-pretty text-ink/80">
                        {t("intro")}
                    </p>
                </div>

                <div className="grid gap-px border-2 border-ink bg-ink">
                    {sections.map(section => (
                        <article
                            key={section}
                            className="grid gap-3 bg-white p-6 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-8 sm:p-8"
                        >
                            <h2 className="font-mono text-sm font-semibold text-blue">
                                {t(`sections.${section}.title`)}
                            </h2>
                            <p className="font-medium text-pretty text-ink/80">
                                {t(`sections.${section}.body`)}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
