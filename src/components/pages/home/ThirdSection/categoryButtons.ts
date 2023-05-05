import { JavascriptIcon, NextIcon, ReactIcon } from "@src/icons";

export const categoryButtons = [
    {
        id: "nextjs",
        title: "Next JS",
        icon: NextIcon
    },
    {
        id: "reactjs",
        title: "React JS",
        icon: ReactIcon
    },
    {
        id: "reactNative",
        title: "React Native",
        icon: ReactIcon
    },
    {
        id: "javascript",
        title: "Javascript",
        icon: JavascriptIcon
    }
] as const;
