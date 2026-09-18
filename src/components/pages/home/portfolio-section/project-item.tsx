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
        <article className="flex cursor-default flex-col gap-6 bg-white p-6 transition duration-300 hover:translate-x-4 hover:-translate-y-4 hover:shadow-primary-100-lg">
            <h3 className="bg-primary-100 p-2 text-center font-semibold">
                {item.title}
            </h3>
            <p>{description}</p>
            <ul className="flex flex-wrap gap-2.5 text-primary-200">
                {item.techStacks.map(techStack => (
                    <li
                        className="rounded-full border border-primary-200 px-3 py-1 text-sm"
                        key={techStack}
                    >
                        {techStack}
                    </li>
                ))}
            </ul>

            <div className="mt-auto flex justify-end gap-4">
                <ExternalLink
                    href={item.websiteLink}
                    className="group flex w-1/2 items-center justify-around rounded-lg border-2 border-primary-300 px-4 py-2 hover:bg-primary-300 hover:text-white md:w-1/3"
                >
                    <span>{t("actions.visit-website")}</span>
                    <ExternalLinkIcon className="h-8 w-8 fill-primary-300 transition group-hover:fill-white" />
                </ExternalLink>

                <ExternalLink
                    href={item.sourceLink}
                    className="group flex w-1/2 items-center justify-around rounded-lg border-2 border-primary-300 px-4 py-2 hover:bg-primary-300 hover:text-white md:w-1/3"
                >
                    <span>{t("actions.source-code")}</span>
                    <GithubIcon className="h-8 w-8 fill-primary-300 transition group-hover:fill-white" />
                </ExternalLink>
            </div>
        </article>
    );
}
