// Components
import CategoryButton from "./CategoryButton";

interface CategoriesProps {
    setCategory: React.Dispatch<React.SetStateAction<string>>;
    category: string;
}

function Categories({ setCategory, category }: CategoriesProps) {
    return (
        <div className="my-10 flex flex-wrap justify-center gap-8">
            <CategoryButton
                setCategory={setCategory}
                category={category}
                id="next"
                title="Next JS"
            />
            <CategoryButton
                setCategory={setCategory}
                category={category}
                id="react"
                title="React JS"
            />
            <CategoryButton
                setCategory={setCategory}
                category={category}
                id="react-native"
                title="React Native"
            />
            <CategoryButton
                setCategory={setCategory}
                category={category}
                id="javascript"
                title="Javascript"
            />
        </div>
    );
}

export default Categories;
