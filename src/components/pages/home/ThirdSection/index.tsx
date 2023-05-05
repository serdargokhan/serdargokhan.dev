"use client";

import { useState } from "react";
import { cn } from "@src/utils";
import ProjectItem from "./ProjectItem";
import { Category, projectItems } from "./projectItems";
import { categoryButtons } from "./categoryButtons";

function ThirdSection() {
    const [category, setCategory] = useState<Category>("nextjs");

    return (
        <section
            className="min-h-screen bg-primary-300 py-20 grid"
            id="projects"
        >
            <div className="container">
                <h2 className="text-4xl font-bold text-white">
                    Some Projects I&apos;ve Built
                </h2>

                <div className="my-10 flex flex-wrap justify-center gap-8">
                    {categoryButtons.map(categoryButton => (
                        <button
                            type="button"
                            key={categoryButton.id}
                            onClick={() => setCategory(categoryButton.id)}
                            className={cn(
                                "group flex items-center gap-1.5 py-2 text-lg font-semibold text-primary-100 hover:text-primary-400 transition relative border-b-[3px] border-transparent",
                                category === categoryButton.id &&
                                    "border-primary-400 text-primary-400 [&>svg]:fill-primary-400"
                            )}
                        >
                            <categoryButton.icon className="group-hover:fill-primary-400 transition w-6 h-6 fill-primary-100" />
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
