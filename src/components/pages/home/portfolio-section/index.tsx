"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@src/utils/cn";
import { Category, projectItems } from "./project-items";
import { categoryButtons } from "./category-buttons";
import ProjectItem from "./project-item";

export default function PortfolioSection() {
    const [category, setCategory] = useState<Category>("nextjs");

    const t = useTranslations("Home.PortfolioSection");

    return (
        <section className="grid section-height bg-primary-300" id="projects">
            <div className="container py-12 lg:py-20">
                <h2 className="text-3xl font-bold text-white md:text-6xl">
                    {t("title")}
                </h2>

                <div className="my-10 flex flex-wrap justify-center gap-8">
                    {categoryButtons.map(categoryButton => (
                        <button
                            type="button"
                            key={categoryButton.id}
                            onClick={() => setCategory(categoryButton.id)}
                            className={cn(
                                "group relative flex items-center gap-1.5 border-b-[3px] border-transparent py-2 text-lg font-semibold text-primary-100 transition hover:text-white",
                                category === categoryButton.id &&
                                    "border-white text-white [&>svg]:fill-white"
                            )}
                        >
                            <categoryButton.icon className="h-6 w-6 fill-primary-100 transition group-hover:fill-white" />
                            <span>{categoryButton.title}</span>
                        </button>
                    ))}
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                    {projectItems[category].map(projectItem => (
                        <ProjectItem
                            key={projectItem.sourceLink}
                            category={category}
                            item={projectItem}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
