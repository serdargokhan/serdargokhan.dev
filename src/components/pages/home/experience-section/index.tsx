import { useTranslations } from "next-intl";
import { experienceItems } from "./experience-items";
import ExperienceItem from "./experience-item";

export default function ExperienceSection() {
    const t = useTranslations("Home.ExperienceSection");

    return (
        <section className="bg-ink" id="experience">
            <div className="container py-20 lg:py-28">
                <h2 className="max-w-2xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                    {t("title")}
                </h2>
                <p className="mt-5 max-w-prose text-lg font-medium text-pretty text-white/70">
                    {t("description")}
                </p>

                <ol className="mt-12 border-t-2 border-white/15" role="list">
                    {experienceItems.map(experienceItem => (
                        <ExperienceItem
                            key={experienceItem.id}
                            item={experienceItem}
                        />
                    ))}
                </ol>
            </div>
        </section>
    );
}
