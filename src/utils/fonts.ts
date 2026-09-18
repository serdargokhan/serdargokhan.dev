import { IBM_Plex_Mono, Nunito } from "next/font/google";

export const nunitoFont = Nunito({
    subsets: ["latin", "latin-ext"],
    weight: "variable",
    display: "swap"
});

export const plexMonoFont = IBM_Plex_Mono({
    subsets: ["latin", "latin-ext"],
    weight: ["400", "500", "600"],
    variable: "--font-plex-mono",
    display: "swap"
});
