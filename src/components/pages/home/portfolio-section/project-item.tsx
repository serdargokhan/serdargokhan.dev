import { useTranslations } from "next-intl";
import ExternalLink from "@src/components/common/external-link";
import ExternalLinkIcon from "@src/icons/external-link";
import GithubIcon from "@src/icons/github";
import type {
    Category,
    ProjectDescriptionKey,
    ProjectItem as ProjectItemData
} from "./project-items";

type ProjectItemProps = {
    category: Category;
    item: ProjectItemData;
};

export default function ProjectItem({ category, item }: ProjectItemProps) {
    const t = useTranslations("Home.PortfolioSection");

    const description = t(
        `projects.${category}.${item.id}.description` as ProjectDescriptionKey
    );

    return (
        <article className="group relative -mx-4 grid gap-6 border-b-2 border-white/15 px-4 py-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-start md:gap-10 md:py-10">
            <span
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-yellow group-hover:scale-y-100 motion-safe:transition-transform motion-safe:duration-200 motion-safe:ease-out"
            />
            <div>
                <h3 className="text-2xl font-extrabold tracking-tight text-white transition-colors duration-150 ease-out group-hover:text-yellow sm:text-3xl">
                    {item.title}
                </h3>
                <p className="mt-3 max-w-prose text-pretty text-white/70">
                    {description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2 font-mono text-xs">
                    {item.techStacks.map(techStack => (
                        <li
                            className="border border-white/40 px-2.5 py-1 text-white/70"
                            key={techStack}
                        >
                            {techStack}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex flex-wrap items-center gap-x-7 gap-y-3 md:flex-col md:items-end md:gap-4">
                <ExternalLink
                    href={item.websiteLink}
                    className="group/action inline-flex items-center gap-2 font-mono text-sm font-medium text-white/70 transition-colors duration-150 ease-out group-hover:text-white hover:text-yellow"
                >
                    {t("actions.visit-website")}
                    <span className="sr-only">: {item.title}</span>
                    <ExternalLinkIcon
                        aria-hidden="true"
                        className="h-4 w-4 fill-current transition-transform duration-150 ease-out group-hover/action:translate-x-0.5 group-hover/action:-translate-y-0.5"
                    />
                </ExternalLink>

                <ExternalLink
                    href={item.sourceLink}
                    className="group/action inline-flex items-center gap-2 font-mono text-sm font-medium text-white/70 transition-colors duration-150 ease-out group-hover:text-white hover:text-yellow"
                >
                    {t("actions.source-code")}
                    <span className="sr-only">: {item.title}</span>
                    <GithubIcon
                        aria-hidden="true"
                        className="h-4 w-4 fill-current"
                    />
                </ExternalLink>
            </div>
        </article>
    );
}
