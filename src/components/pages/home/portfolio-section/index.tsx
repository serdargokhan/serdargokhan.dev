"use client";

import { ViewTransition, startTransition, useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@src/utils/cn";
import { Category, projectItems } from "./project-items";
import { categoryButtons } from "./category-buttons";
import ProjectItem from "./project-item";

export default function PortfolioSection() {
    const [category, setCategory] = useState<Category>("nextjs");

    const t = useTranslations("Home.PortfolioSection");

    function selectCategory(nextCategory: Category) {
        startTransition(() => {
            setCategory(nextCategory);
        });
    }

    return (
        <section className="bg-ink" id="projects">
            <div className="container py-20 lg:py-28">
                <h2 className="max-w-2xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                    {t("title")}
                </h2>

                <div className="mt-10 flex flex-wrap gap-2.5">
                    {categoryButtons.map(categoryButton => (
                        <button
                            type="button"
                            key={categoryButton.id}
                            aria-pressed={category === categoryButton.id}
                            onClick={() => selectCategory(categoryButton.id)}
                            className={cn(
                                "press flex items-center gap-2 border-2 px-3.5 py-2 text-sm font-bold",
                                category === categoryButton.id
                                    ? "border-yellow bg-yellow text-ink"
                                    : "border-white/20 text-white/70 hover:border-white/50 hover:text-white"
                            )}
                        >
                            <categoryButton.icon
                                aria-hidden="true"
                                className="h-5 w-5"
                            />
                            <span>{categoryButton.title}</span>
                        </button>
                    ))}
                </div>

                <ViewTransition
                    key={category}
                    name="projects-list"
                    share="projects-fade"
                    enter="projects-fade"
                    default="none"
                >
                    <div className="mt-12 border-t-2 border-white/15">
                        {projectItems[category].map(projectItem => (
                            <ProjectItem
                                key={projectItem.sourceLink}
                                category={category}
                                item={projectItem}
                            />
                        ))}
                    </div>
                </ViewTransition>
            </div>
        </section>
    );
}
