import { GithubIcon } from "@src/icons";

type SourceButtonProps = {
    href: string;
};

function SourceButton({ href }: SourceButtonProps) {
    return (
        <a
            href={href}
            rel="noopener noreferrer"
            target="_blank"
            className="group flex w-1/2 items-center justify-around rounded-lg border-2 border-primary-300 px-4 py-2 text-primary-300 hover:bg-primary-300 hover:text-white md:w-1/3"
        >
            <span>Source Code</span>
            <GithubIcon className="h-8 w-8 fill-primary-300 transition group-hover:fill-white" />
        </a>
    );
}

export default SourceButton;
