// Components
import SourceButton from "components/Utils/SourceButton";
import WebsiteButton from "components/Utils/WebsiteButton";

interface ItemProps {
    title?: string;
    description?: string;
    website: string;
    source: string;
    stack?: JSX.Element;
}

function ProjectItems({
    title,
    description,
    website,
    source,
    stack,
}: ItemProps) {
    return (
        <article className="flex cursor-default flex-col gap-6 bg-white p-7 transition-all duration-300 hover:translate-x-2  hover:-translate-y-2 hover:shadow-primary-yellow md:hover:translate-x-4 md:hover:-translate-y-4">
            <p className="w-fit border bg-primary-100 p-2 text-center text-primary-300">
                {title}
            </p>
            <p className="flex-1 text-justify text-primary-300">
                {description}
            </p>
            <ul className="flex flex-wrap gap-4 text-primary-200">{stack}</ul>
            <div className="flex justify-center gap-5">
                <WebsiteButton href={website} />
                <SourceButton href={source} />
            </div>
        </article>
    );
}

export default ProjectItems;
