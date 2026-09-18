export type Category = "nextjs" | "reactjs" | "reactNative" | "javascript";

type ProjectMessages = Messages["Home"]["PortfolioSection"]["projects"];

type ProjectItemData<C extends Category> = {
    id: keyof ProjectMessages[C] & string;
    title: string;
    websiteLink: string;
    sourceLink: string;
    techStacks: string[];
};

export type ProjectItem = {
    [C in Category]: ProjectItemData<C>;
}[Category];

export type ProjectDescriptionKey = {
    [
        C in Category
    ]: `projects.${C}.${keyof ProjectMessages[C] & string}.description`;
}[Category];

export const projectItems: {
    [C in Category]: ProjectItemData<C>[];
} = {
    nextjs: [
        {
            id: "microsoft-todo-clone",
            title: "Microsoft To-Do Clone",
            websiteLink: "https://microsoft-todo-clone.vercel.app",
            sourceLink: "https://github.com/serdargokhan/microsoft-todo-clone",
            techStacks: ["NextJS", "MongoDB", "Firebase", "SCSS", "TypeScript"]
        },
        {
            id: "add-your-website",
            title: "Add Your Websites",
            websiteLink: "https://serdargokhan-list-your-websites.vercel.app",
            sourceLink:
                "https://github.com/serdargokhan/react-projects/tree/main/7-list-your-websites",
            techStacks: [
                "NextJS",
                "ChakraUI",
                "Firebase",
                "useSWR",
                "TypeScript"
            ]
        },
        {
            id: "shopify-clone",
            title: "Shopify Clone",
            websiteLink: "https://serdargokhan-e-commerce.netlify.app",
            sourceLink:
                "https://github.com/serdargokhan/react-projects/tree/main/6-e-commerce",
            techStacks: ["NextJS", "TailwindCSS", "JavaScript"]
        }
    ],
    reactjs: [
        {
            id: "create-blog-posts",
            title: "Create Blog Posts",
            websiteLink: "https://serdargokhan-blog.netlify.app",
            sourceLink:
                "https://github.com/serdargokhan/react-projects/tree/main/5-blog-website",
            techStacks: [
                "ReactJS",
                "TailwindCSS",
                "Framer Motion",
                "JavaScript"
            ]
        },
        {
            id: "crypto-marketcap",
            title: "CryptoCurrency MarketCap",
            websiteLink: "https://serdargokhan-crypto-marketcap.netlify.app",
            sourceLink:
                "https://github.com/serdargokhan/react-projects/tree/main/4-cryptocurrency-marketcap",
            techStacks: ["ReactJS", "TailwindCSS", "Netlify", "JavaScript"]
        },
        {
            id: "auth-firebase",
            title: "Auth Firebase",
            websiteLink: "https://serdargokhan-login-firebase.netlify.app",
            sourceLink:
                "https://github.com/serdargokhan/react-projects/tree/main/3-login-with-firebase",
            techStacks: ["ReactJS", "TailwindCSS", "Firebase", "JavaScript"]
        },
        {
            id: "currency-converter",
            title: "Currency Converter",
            websiteLink: "https://serdargokhan-currency-converter.netlify.app",
            sourceLink:
                "https://github.com/serdargokhan/react-projects/tree/main/2-currency-converter",
            techStacks: ["ReactJS", "JavaScript"]
        },
        {
            id: "resipe-search",
            title: "Resipe Search",
            websiteLink: "https://serdargokhan-react-recipe.netlify.app",
            sourceLink:
                "https://github.com/serdargokhan/react-projects/tree/main/1-basic-recipe-app",
            techStacks: ["ReactJS", "JavaScript"]
        }
    ],
    reactNative: [
        {
            id: "register-and-search-news",
            title: "Register and Search News",
            websiteLink: "https://expo.dev/@serdargokhan/news-app",
            sourceLink:
                "https://github.com/serdargokhan/react-native-projects/tree/main/3-news-app",
            techStacks: [
                "React-Native",
                "Firebase",
                "React-Hook-Form",
                "useSWR",
                "Native-Base",
                "Expo",
                "TypeScript"
            ]
        },
        {
            id: "restaurant-search",
            title: "Restaurant Search",
            websiteLink: "https://expo.dev/@serdargokhan/search-restaurants",
            sourceLink:
                "https://github.com/serdargokhan/react-native-projects/tree/main/1-restaurant-search-app",
            techStacks: [
                "React-Native",
                "React-Navigation",
                "Expo",
                "TypeScript"
            ]
        },
        {
            id: "auth-screen",
            title: "Auth Screen",
            websiteLink: "https://expo.dev/@serdargokhan/signin-signup-design",
            sourceLink:
                "https://github.com/serdargokhan/react-native-projects/tree/main/2-register-login-design",
            techStacks: [
                "React-Native",
                "React-Navigation",
                "Expo",
                "TypeScript"
            ]
        }
    ],
    javascript: [
        {
            id: "budget-tracker",
            title: "Budget Tracker",
            websiteLink: "https://serdargokhan-budget-tracker.netlify.app",
            sourceLink:
                "https://github.com/serdargokhan/javascript-projects/tree/main/5-budget-tracker",
            techStacks: ["JavaScript", "CSS"]
        },
        {
            id: "movie-list",
            title: "Movie List",
            websiteLink: "https://serdargokhan-movie-app.netlify.app",
            sourceLink:
                "https://github.com/serdargokhan/javascript-projects/tree/main/4-movie-app",
            techStacks: ["JavaScript", "CSS"]
        },
        {
            id: "todo-list",
            title: "To-Do List",
            websiteLink: "https://serdargokhan-todo-app.netlify.app",
            sourceLink:
                "https://github.com/serdargokhan/javascript-projects/tree/main/2-todo-list",
            techStacks: ["JavaScript", "CSS"]
        },
        {
            id: "search-weather-location",
            title: "Search Weather Location",
            websiteLink: "https://serdargokhan-weather-app.netlify.app",
            sourceLink:
                "https://github.com/serdargokhan/javascript-projects/tree/main/1-weather-web-app",
            techStacks: ["JavaScript", "CSS"]
        }
    ]
};
