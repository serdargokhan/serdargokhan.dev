import { JavascriptIcon, ReactIcon, NextIcon } from "src/icons";

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
        <div className="group flex items-center gap-1">
            {id === "next" && (
                <NextIcon className="w-6 h-6 fill-primary-100 transition group-hover:fill-white" />
            )}
            {(id === "react" || id === "react-native") && (
                <ReactIcon className="w-6 h-6 fill-primary-100 transition group-hover:fill-white" />
            )}
            {id === "javascript" && (
                <JavascriptIcon className="w-6 h-6 fill-primary-100 transition group-hover:fill-white" />
            )}
            <button
                onClick={e => setCategory(e.currentTarget.id)}
                id={id}
                className={`py-3 text-lg font-semibold text-primary-100 transition-all duration-200 group-hover:text-white ${
                    category === id
                        ? "underline decoration-2 underline-offset-8"
                        : null
                } `}
            >
                {title}
            </button>
        </div>
    );
}

export default CategoryButton;
