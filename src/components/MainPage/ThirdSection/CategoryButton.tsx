import { JavascriptIcon, ReactIcon, NextIcon } from "src/icons";
import { cn } from "src/utils";

interface CategoryButtonProps {
    setCategory: React.Dispatch<React.SetStateAction<string>>;
    category: string;
    id: string;
    title: string;
}

function CategoryButton({
    category,
    setCategory,
    id,
    title
}: CategoryButtonProps) {
    return (
        <div className="flex items-center gap-1">
            {id === "next" && (
                <button
                    id={id}
                    onClick={e => setCategory(e.currentTarget.id)}
                    className={cn(
                        "group flex items-center gap-1.5 py-2 text-lg font-semibold text-primary-100 hover:text-white transition relative border-b-[3px] border-transparent",
                        category === id &&
                            "border-primary-100 hover:border-white"
                    )}
                >
                    <NextIcon className="w-6 h-6 fill-primary-100 group-hover:fill-white" />
                    <span>{title}</span>
                </button>
            )}
            {(id === "react" || id === "react-native") && (
                <button
                    id={id}
                    onClick={e => setCategory(e.currentTarget.id)}
                    className={cn(
                        "group flex items-center gap-1.5 py-2 text-lg font-semibold text-primary-100 hover:text-white transition relative border-b-[3px] border-transparent",
                        category === id &&
                            "border-primary-100 hover:border-white"
                    )}
                >
                    <ReactIcon className="w-6 h-6 fill-primary-100 group-hover:fill-white" />
                    <span>{title}</span>
                </button>
            )}
            {id === "javascript" && (
                <button
                    id={id}
                    onClick={e => setCategory(e.currentTarget.id)}
                    className={cn(
                        "group flex items-center gap-1.5 py-2 text-lg font-semibold text-primary-100 hover:text-white transition relative border-b-[3px] border-transparent",
                        category === id &&
                            "border-primary-100 hover:border-white"
                    )}
                >
                    <JavascriptIcon className="w-6 h-6 fill-primary-100 group-hover:fill-white" />
                    <span>{title}</span>
                </button>
            )}
        </div>
    );
}

export default CategoryButton;
