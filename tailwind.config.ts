import type { Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            container: {
                center: true,
                padding: "1rem",
                screens: { xl: "1280px" }
            },
            colors: {
                primary: {
                    100: "#ffd300",
                    200: "#3a10e5",
                    300: "#10162f",
                    400: "#fff0e5"
                }
            },
            boxShadow: {
                "primary-100": "-10px 10px 0px 5px #ffd300",
                "primary-400": "0px 0px 10px 2px #fff0e5"
            }
        }
    },
    future: {
        hoverOnlyWhenSupported: true
    },
    plugins: []
} satisfies Config;
