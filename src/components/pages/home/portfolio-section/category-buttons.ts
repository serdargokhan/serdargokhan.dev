import JavascriptIcon from "@src/icons/javascript";
import NextIcon from "@src/icons/next";
import ReactIcon from "@src/icons/react";

export const categoryButtons = [
    {
        id: "nextjs",
        title: "Next.js",
        icon: NextIcon
    },
    {
        id: "reactjs",
        title: "React.js",
        icon: ReactIcon
    },
    {
        id: "reactNative",
        title: "React Native",
        icon: ReactIcon
    },
    {
        id: "javascript",
        title: "JavaScript",
        icon: JavascriptIcon
    }
] as const;
