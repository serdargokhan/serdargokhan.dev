export type Category = "nextjs" | "reactjs" | "reactNative" | "javascript";

export type ProjectItem = {
    id: string;
    title: string;
    description: string;
    websiteLink: string;
    sourceLink: string;
    techStacks: string[];
};

export const projectItems = {
    nextjs: [
        {
            id: "microsoft-todo-clone",
            title: "Microsoft To-Do Clone",
            description:
                "This is the biggest project that I have in my portfolio. It took me so long even to get the project so far. I could not finish it due to work but I have done a lot. I owe a lot of new knowledge to this project. In this project I have used TypeScript, SCSS, Firebase Authentication, and MongoDB. I learnt MongoDB from scratch with this project.",
            websiteLink: "https://microsoft-todo-clone.vercel.app",
            sourceLink: "https://github.com/serdargokhan/microsoft-todo-clone",
            techStacks: ["NextJS", "MongoDB", "Firebase", "SCSS", "TypeScript"]
        },
        {
            id: "add-your-website",
            title: "Add Your Websites",
            description:
                "I have developed this project as a part of a tutorial from Youtube thanks to Lee Robinson for inspiration. I have used Chakra UI, useSWR, and Skeleton loading for the first time with this project. I also stored the user information on Firebase Firestore and login was implemented with Firebase authentication. It has Github login authentication.",
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
            description:
                "I have completed this project and I got inspired from Shopify website. It is kind of e-commerce website. There are sign in and sign up proccess. User can create a product, delete a product if they created it, and also add to cart. I used minimal workflow with this project and no extra framework.",
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
            description:
                "I have completed this blog website. It has sign in and sign up utilities. User can sign up, sign in, and create a blog post. sign in and sign up credentials is stored on firebase real-time database. After blog post is created, it will be shown on the home page. I also experienced framer-motion library with this project.",
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
            description:
                "I have completed this cryptocurrency marketcap website. It has landing page, and a header to show some crypto statistics. It also has coins tab and user can see Top 100 coins with images and some other values. I have used Cryptomarketcap API for this project. Finally, there were some errors about CORS policy and I used netlify-cli tool for that as well.",
            websiteLink: "https://serdargokhan-crypto-marketcap.netlify.app",
            sourceLink:
                "https://github.com/serdargokhan/react-projects/tree/main/4-cryptocurrency-marketcap",
            techStacks: ["ReactJS", "TailwindCSS", "Netlify", "JavaScript"]
        },
        {
            id: "auth-firebase",
            title: "Auth Firebase",
            description:
                "This was my first project using TailwindCSS. It has basically two screens sign up and sign in. There is no react-router setup. I learned basics of React. I used Firebase real-time database to store user credentials.",
            websiteLink: "https://serdargokhan-login-firebase.netlify.app",
            sourceLink:
                "https://github.com/serdargokhan/react-projects/tree/main/3-login-with-firebase",
            techStacks: ["ReactJS", "TailwindCSS", "Firebase", "JavaScript"]
        },
        {
            id: "currency-converter",
            title: "Currency Converter",
            description:
                "This is a basic currency converter website. I have used currency API to retrieve data of currencies. I also used react-select library to be specific about currency exchanges.",
            websiteLink: "https://serdargokhan-currency-converter.netlify.app",
            sourceLink:
                "https://github.com/serdargokhan/react-projects/tree/main/2-currency-converter",
            techStacks: ["ReactJS", "JavaScript"]
        },
        {
            id: "resipe-search",
            title: "Resipe Search",
            description:
                "This is my very first React single page application. I have used edamam API for this project. It basically has an input field for searching some recipes. I also used react-loader-spinner for loading state for this project for better user experience.",
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
            description:
                "This is my news application developed with React-Native. I have used lots of frameworks with this project. It has sign up and sign in screens. Once user is authenticated it redirects user to home page to show the latest news from news API. I implemented categories, search, and skeleton loading into this project. There is also a profile section which user can see information about itself.",
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
            description:
                "This is a restaurant search application. I have used Yelp API to get the data about restaurants. There is an input field on the home page for users to search restaurants. Once they search it, they can tap into the details of individual restaurant and see lots of details like reviews, images, and location of the restaurant on the map.",
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
            description:
                "This is a basic UI implementation for react-native. It has just sign up and sign in screens with no interactivity like signing in. I have used bottom tab navigator with this project and also I improved my layout skills in react-native.",
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
            description:
                "This is a budget tracker website. It provides some functions for user to track their budget with one screen.",
            websiteLink: "https://serdargokhan-budget-tracker.netlify.app",
            sourceLink:
                "https://github.com/serdargokhan/javascript-projects/tree/main/5-budget-tracker",
            techStacks: ["JavaScript", "CSS"]
        },
        {
            id: "movie-list",
            title: "Movie List",
            description:
                "This is a movie list website. It shows latest trending movies on the screen. I have used themoviedb API to get the data of movies.",
            websiteLink: "https://serdargokhan-movie-app.netlify.app",
            sourceLink:
                "https://github.com/serdargokhan/javascript-projects/tree/main/4-movie-app",
            techStacks: ["JavaScript", "CSS"]
        },
        {
            id: "todo-list",
            title: "To-Do List",
            description:
                "This is a to-do list website. As every beginner I made a to-do list to understand everything more in programming. User can add to-do, complete to-do, and delete to-do like so.",
            websiteLink: "https://serdargokhan-todo-app.netlify.app",
            sourceLink:
                "https://github.com/serdargokhan/javascript-projects/tree/main/2-todo-list",
            techStacks: ["JavaScript", "CSS"]
        },
        {
            id: "search-weather-location",
            title: "Search Weather Location",
            description:
                "This is a weather website to show weather of a given location. I have used Openweathermap API to get the data and show to the user. It also has the search functionality for a location.",
            websiteLink: "https://serdargokhan-weather-app.netlify.app",
            sourceLink:
                "https://github.com/serdargokhan/javascript-projects/tree/main/1-weather-web-app",
            techStacks: ["JavaScript", "CSS"]
        }
    ]
} satisfies Record<Category, ProjectItem[]>;
