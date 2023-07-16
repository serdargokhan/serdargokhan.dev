/** @type {import('prettier').Config} */
const prettierConfig = {
    tabWidth: 4,
    jsxSingleQuote: false,
    trailingComma: "none",
    arrowParens: "avoid",
    plugins: ["prettier-plugin-tailwindcss"]
};

export default prettierConfig;
