import { useTranslations } from "next-intl";
import ExternalLink from "@src/components/common/external-link";
import CopyEmailButton from "./copy-email-button";

const email = "gokhan_bakirci_53@hotmail.com";

export default function ContactSection() {
    const t = useTranslations("Home.ContactSection");

    return (
        <section className="flex items-center bg-cream bg-noise" id="contact">
            <div className="container grid gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:py-28">
                <div className="grid min-w-0 gap-5">
                    <h2 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl">
                        {t("title")}
                    </h2>
                    <div className="grid max-w-prose gap-4 text-lg font-medium text-pretty text-ink/80">
                        <p>{t("paragraph-one")}</p>
                        <p>{t("paragraph-two")}</p>
                    </div>
                </div>

                <div className="min-w-0 border-2 border-ink bg-white p-6 shadow-brutal-blue sm:p-8">
                    <p className="font-mono text-xs font-semibold text-ink/70">
                        {t("email-label")}
                    </p>
                    <ExternalLink
                        href={`mailto:${email}`}
                        className="mt-3 block font-mono text-lg font-semibold wrap-anywhere text-blue underline decoration-2 underline-offset-4 transition-colors duration-150 ease-out hover:bg-yellow sm:text-xl"
                    >
                        {email}
                    </ExternalLink>
                    <div className="mt-6 flex flex-wrap items-center gap-3">
                        <CopyEmailButton email={email} />
                        <ExternalLink
                            href={`mailto:${email}`}
                            className="inline-flex press items-center border-2 border-ink bg-yellow px-4 py-1.5 font-mono text-xs font-semibold text-ink hover:shadow-brutal-blue motion-safe:hover-fine:translate-x-0.5 motion-safe:hover-fine:-translate-y-0.5"
                        >
                            {t("cta")}
                        </ExternalLink>
                    </div>
                </div>
            </div>
        </section>
    );
}
