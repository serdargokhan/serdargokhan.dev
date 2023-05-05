import { SourceButton, WebsiteButton } from "@src/components/common";
import { ProjectItem as ProjectItemProps } from "./projectItems";

function ProjectItem({
    title,
    description,
    websiteLink,
    sourceLink,
    techStacks
}: ProjectItemProps) {
    return (
        <article className="flex cursor-default flex-col gap-6 bg-white p-6 text-primary-300 transition duration-300 hover:shadow-primary-100 hover:translate-x-4 hover:-translate-y-4">
            <h3 className="bg-primary-100 p-2 text-center font-semibold">
                {title}
            </h3>
            <p>{description}</p>
            <ul className="flex flex-wrap gap-4 text-primary-200">
                {techStacks.map((techStack, index) => (
                    <li key={index}>{techStack}</li>
                ))}
            </ul>
            <div className="flex justify-end mt-auto gap-4">
                <WebsiteButton href={websiteLink} />
                <SourceButton href={sourceLink} />
            </div>
        </article>
    );
}

export default ProjectItem;
