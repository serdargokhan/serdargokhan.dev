"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@src/utils";
import { Category, projectItems } from "./projectItems";
import { categoryButtons } from "./categoryButtons";
import ProjectItem from "./ProjectItem";

function ThirdSection() {
    const [category, setCategory] = useState<Category>("nextjs");

    const t = useTranslations("Home.ThirdSection");

    return (
        <section
            className="grid min-h-screen bg-primary-300 py-20"
            id="projects"
        >
            <div className="container">
                <h2 className="text-4xl font-bold text-white">{t("title")}</h2>

                <div className="my-10 flex flex-wrap justify-center gap-8">
                    {categoryButtons.map(categoryButton => (
                        <button
                            type="button"
                            key={categoryButton.id}
                            onClick={() => setCategory(categoryButton.id)}
                            className={cn(
                                "group relative flex items-center gap-1.5 border-b-[3px] border-transparent py-2 text-lg font-semibold text-primary-100 transition hover:text-primary-400",
                                category === categoryButton.id &&
                                    "border-primary-400 text-primary-400 [&>svg]:fill-primary-400"
                            )}
                        >
                            <categoryButton.icon className="h-6 w-6 fill-primary-100 transition group-hover:fill-primary-400" />
                            <span>{categoryButton.title}</span>
                        </button>
                    ))}
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                    {projectItems[category].map(projectItem => (
                        <ProjectItem
                            key={projectItem.sourceLink}
                            title={projectItem.title}
                            websiteLink={projectItem.websiteLink}
                            sourceLink={projectItem.sourceLink}
                            description={projectItem.description}
                            techStacks={projectItem.techStacks}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ThirdSection;
