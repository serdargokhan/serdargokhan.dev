import { useState } from "react";
// Components
import Categories from "./Categories";
import ProjectItems from "./ProjectItems";

function ThirdSection() {
    const [category, setCategory] = useState("next");

    return (
        <section
            className="min-h-full w-full bg-primary-300 py-20"
            id="projects"
        >
            <div className="mx-auto w-11/12 max-w-7xl">
                <p className="text-4xl font-bold text-white">
                    Some Projects I've Built
                </p>
                <Categories setCategory={setCategory} category={category} />
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2">
                    {category === "next" && (
                        <>
                            <ProjectItems
                                title="Microsoft To-Do Clone(Unfinished)"
                                website="https://github.com/serdargokhan"
                                source="https://github.com/serdargokhan/microsoft-todo-clone"
                                description="This is the biggest project that I have in my portfolio. It took me so long even to get the project so far. I could not finish it due to work but I have done a lot. I owe a lot of new knowledge to this project. In this project I have used TypeScript, SCSS, Firebase Authentication, and MongoDB. I learnt MongoDB from scratch with this project."
                                stack={
                                    <>
                                        <li>NextJS</li>
                                        <li>MongoDB</li>
                                        <li>Firebase</li>
                                        <li>SCSS</li>
                                        <li>TypeScript</li>
                                    </>
                                }
                            />
                            <ProjectItems
                                title="Add Your Websites"
                                website="https://serdargokhan-list-your-websites.vercel.app/"
                                source="https://github.com/serdargokhan/react-projects/tree/main/7-list-your-websites"
                                description="I have developed this project as a part of a tutorial from Youtube thanks to Lee Robinson for inspiration. I have used Chakra UI, useSWR, and Skeleton loading for the first time with this project. I also stored the user information on Firebase Firestore and login was implemented with Firebase authentication. It has Github login authentication."
                                stack={
                                    <>
                                        <li>NextJS</li>
                                        <li>ChakraUI</li>
                                        <li>TypeScript</li>
                                        <li>Firebase</li>
                                        <li>Firestore</li>
                                        <li>useSWR</li>
                                    </>
                                }
                            />
                            <ProjectItems
                                title="Shopify Clone"
                                website="https://serdargokhan-e-commerce.netlify.app/"
                                source="https://github.com/serdargokhan/react-projects/tree/main/6-e-commerce"
                                description="I have completed this project and I got inspired from Shopify website. It is kind of e-commerce website. There are sign in and sign up proccess. User can create a product, delete a product if they created it, and also add to cart. I used minimal workflow with this project and no extra framework."
                                stack={
                                    <>
                                        <li>NextJS</li>
                                        <li>TailwindCSS</li>
                                        <li>JavaScript</li>
                                    </>
                                }
                            />
                        </>
                    )}

                    {category === "react" && (
                        <>
                            <ProjectItems
                                title="Create Blog Posts"
                                website="https://serdargokhan-blog.netlify.app/"
                                source="https://github.com/serdargokhan/react-projects/tree/main/5-blog-website"
                                description="I have completed this blog website. It has sign in and sign up utilities. User can sign up, sign in, and create a blog post. sign in and sign up credentials is stored on firebase real-time database. After blog post is created, it will be shown on the home page. I also experienced framer-motion library with this project."
                                stack={
                                    <>
                                        <li>ReactJS</li>
                                        <li>TailwindCSS</li>
                                        <li>Framer-Motion</li>
                                        <li>JavaScript</li>
                                    </>
                                }
                            />
                            <ProjectItems
                                title="CryptoCurrency MarketCap"
                                website="https://serdargokhan-crypto-marketcap.netlify.app/"
                                source="https://github.com/serdargokhan/react-projects/tree/main/4-cryptocurrency-marketcap"
                                description="I have completed this cryptocurrency marketcap website. It has landing page, and a header to show some crypto statistics. It also has coins tab and user can see Top 100 coins with images and some other values. I have used Cryptomarketcap API for this project. Finally, there were some errors about CORS policy and I used netlify-cli tool for that as well."
                                stack={
                                    <>
                                        <li>ReactJS</li>
                                        <li>TailwindCSS</li>
                                        <li>Netlify-CLI</li>
                                        <li>JavaScript</li>
                                    </>
                                }
                            />
                            <ProjectItems
                                title="Auth Firebase"
                                website="https://serdargokhan-login-firebase.netlify.app/"
                                source="https://github.com/serdargokhan/react-projects/tree/main/3-login-with-firebase"
                                description="This was my first project using TailwindCSS. It has basically two screens sign up and sign in. There is no react-router setup. I learned basics of React. I used Firebase real-time database to store user credentials."
                                stack={
                                    <>
                                        <li>ReactJS</li>
                                        <li>TailwindCSS</li>
                                        <li>Firebase</li>
                                        <li>JavaScript</li>
                                    </>
                                }
                            />
                            <ProjectItems
                                title="Currency Converter"
                                website="https://serdargokhan-currency-converter.netlify.app/"
                                source="https://github.com/serdargokhan/react-projects/tree/main/2-currency-converter"
                                description="This is a basic currency converter website. I have used currency API to retrieve data of currencies. I also used react-select library to be specific about currency exchanges."
                                stack={
                                    <>
                                        <li>ReactJS</li>
                                        <li>React-Select</li>
                                        <li>JavaScript</li>
                                    </>
                                }
                            />
                            <ProjectItems
                                title="Resipe Search"
                                website="https://serdargokhan-react-recipe.netlify.app/"
                                source="https://github.com/serdargokhan/react-projects/tree/main/1-basic-recipe-app"
                                description="This is my very first React single page application. I have used edamam API for this project. It basically has an input field for searching some recipes. I also used react-loader-spinner for loading state for this project for better user experience."
                                stack={
                                    <>
                                        <li>ReactJS</li>
                                        <li>JavaScript</li>
                                    </>
                                }
                            />
                        </>
                    )}

                    {category === "react-native" && (
                        <>
                            <ProjectItems
                                title="Register and Search News"
                                website="https://expo.dev/@serdargokhan/news-app"
                                source="https://github.com/serdargokhan/react-native-projects/tree/main/3-news-app"
                                description="This is my news application developed with React-Native. I have used lots of frameworks with this project. It has sign up and sign in screens. Once user is authenticated it redirects user to home page to show the latest news from news API. I implemented categories, search, and skeleton loading into this project. There is also a profile section which user can see information about itself."
                                stack={
                                    <>
                                        <li>React-Native</li>
                                        <li>Firebase</li>
                                        <li>React-Hook-Form</li>
                                        <li>useSWR</li>
                                        <li>Native-Base</li>
                                        <li>Expo</li>
                                        <li>TypeScript</li>
                                    </>
                                }
                            />
                            <ProjectItems
                                title="Restaurant Search"
                                website="https://expo.dev/@serdargokhan/search-restaurants"
                                source="https://github.com/serdargokhan/react-native-projects/tree/main/1-restaurant-search-app"
                                description="This is a restaurant search application. I have used Yelp API to get the data about restaurants. There is an input field on the home page for users to search restaurants. Once they search it, they can tap into the details of individual restaurant and see lots of details like reviews, images, and location of the restaurant on the map."
                                stack={
                                    <>
                                        <li>React-Native</li>
                                        <li>React-Navigation</li>
                                        <li>Expo</li>
                                        <li>TypeScript</li>
                                    </>
                                }
                            />
                            <ProjectItems
                                title="Auth Screen Design"
                                website="https://expo.dev/@serdargokhan/signin-signup-design"
                                source="https://github.com/serdargokhan/react-native-projects/tree/main/2-register-login-design"
                                description="This is a basic UI implementation for react-native. It has just sign up and sign in screens with no interactivity like signing in. I have used bottom tab navigator with this project and also I improved my layout skills in react-native."
                                stack={
                                    <>
                                        <li>React-Native</li>
                                        <li>React-Navigation</li>
                                        <li>Expo</li>
                                        <li>TypeScript</li>
                                    </>
                                }
                            />
                        </>
                    )}

                    {category === "javascript" && (
                        <>
                            <ProjectItems
                                title="Budget Tracker"
                                website="https://serdargokhan-budget-tracker.netlify.app/"
                                source="https://github.com/serdargokhan/javascript-projects/tree/main/5-budget-tracker"
                                description="This is a budget tracker website. It provides some functions for user to track their budget with one screen."
                                stack={
                                    <>
                                        <li>JavaScript</li>
                                        <li>CSS</li>
                                    </>
                                }
                            />
                            <ProjectItems
                                title="Movie List"
                                website="https://serdargokhan-movie-app.netlify.app/"
                                source="https://github.com/serdargokhan/javascript-projects/tree/main/4-movie-app"
                                description="This is a movie list website. It shows latest trending movies on the screen. I have used themoviedb API to get the data of movies."
                                stack={
                                    <>
                                        <li>JavaScript</li>
                                        <li>CSS</li>
                                    </>
                                }
                            />
                            <ProjectItems
                                title="Quiz"
                                website="https://serdargokhan-quiz-app.netlify.app/"
                                source="https://github.com/serdargokhan/javascript-projects/tree/main/3-basic-quiz-app"
                                description="This is just a static website where I created some questions and user can answer those questions to get some score at the end."
                                stack={
                                    <>
                                        <li>JavaScript</li>
                                        <li>CSS</li>
                                    </>
                                }
                            />
                            <ProjectItems
                                title="To-Do List"
                                website="https://serdargokhan-todo-app.netlify.app/"
                                source="https://github.com/serdargokhan/javascript-projects/tree/main/2-todo-list"
                                description="This is a to-do list website. As every beginner I made a to-do list to understand everything more in programming. User can add to-do, complete to-do, and delete to-do like so."
                                stack={
                                    <>
                                        <li>JavaScript</li>
                                        <li>CSS</li>
                                    </>
                                }
                            />
                            <ProjectItems
                                title="Search Weather Location"
                                website="https://serdargokhan-weather-app.netlify.app/"
                                source="https://github.com/serdargokhan/javascript-projects/tree/main/1-weather-web-app"
                                description="This is a weather website to show weather of a given location. I have used Openweathermap API to get the data and show to the user. It also has the search functionality for a location."
                                stack={
                                    <>
                                        <li>JavaScript</li>
                                        <li>CSS</li>
                                    </>
                                }
                            />
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}

export default ThirdSection;
