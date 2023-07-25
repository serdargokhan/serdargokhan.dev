import { useTranslations } from "next-intl";
import { ExternalLinkIcon, GithubIcon } from "@src/icons";
import { NextLink } from "@src/components/common";
import type { ProjectItem as ProjectItemProps } from "./projectItems";

export default function ProjectItem({
    title,
    description,
    websiteLink,
    sourceLink,
    techStacks
}: Omit<ProjectItemProps, "id">) {
    const t = useTranslations("Home.PortfolioSection.actions");

    return (
        <article className="flex cursor-default flex-col gap-6 bg-white p-6 transition duration-300 hover:-translate-y-4 hover:translate-x-4 hover:shadow-primary-100-lg">
            <h3 className="bg-primary-100 p-2 text-center font-semibold">
                {title}
            </h3>
            <p>{description}</p>
            <ul className="flex flex-wrap gap-2.5 text-primary-200">
                {techStacks.map((techStack, index) => (
                    <li
                        className="rounded-full border border-primary-200 px-3 py-1 text-sm"
                        key={index}
                    >
                        {techStack}
                    </li>
                ))}
            </ul>

            <div className="mt-auto flex justify-end gap-4">
                <NextLink
                    href={websiteLink}
                    className="group flex w-1/2 items-center justify-around rounded-lg border-2 border-primary-300 px-4 py-2 hover:bg-primary-300 hover:text-white md:w-1/3"
                >
                    <span>{t("visit-website")}</span>
                    <ExternalLinkIcon className="h-8 w-8 fill-primary-300 transition group-hover:fill-white" />
                </NextLink>

                <NextLink
                    href={sourceLink}
                    className="group flex w-1/2 items-center justify-around rounded-lg border-2 border-primary-300 px-4 py-2 hover:bg-primary-300 hover:text-white md:w-1/3"
                >
                    <span>{t("source-code")}</span>
                    <GithubIcon className="h-8 w-8 fill-primary-300 transition group-hover:fill-white" />
                </NextLink>
            </div>
        </article>
    );
}
