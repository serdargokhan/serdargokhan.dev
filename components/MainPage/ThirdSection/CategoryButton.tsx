// Assets
import JavascriptSVG from "components/Assets/JavascriptSVG";
import NextjsSVG from "components/Assets/NextjsSVG";
import ReactSVG from "components/Assets/ReactSVG";

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
    title,
}: CategoryButtonProps) {
    return (
        <div className="group flex items-center gap-1">
            {id === "next" ? <NextjsSVG /> : null}
            {id === "react" || id === "react-native" ? <ReactSVG /> : null}
            {id === "javascript" ? <JavascriptSVG /> : null}
            <button
                onClick={(e) => setCategory(e.currentTarget.id)}
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
