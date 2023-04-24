import { ExternalLinkIcon } from "@src/icons";

type WebsiteButtonProps = {
    href: string;
};

function WebsiteButton({ href }: WebsiteButtonProps) {
    return (
        <a
            href={href}
            rel="noopener noreferrer"
            target="_blank"
            className="group flex w-1/2 items-center justify-around rounded-lg border-2 border-primary-300 px-4 py-2 text-primary-300 hover:bg-primary-300 hover:text-white md:w-1/3"
        >
            <span>Visit Website</span>
            <ExternalLinkIcon className="w-8 h-8 fill-primary-300 group-hover:fill-white transition" />
        </a>
    );
}

export default WebsiteButton;
