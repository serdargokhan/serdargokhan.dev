import type { Metadata } from "next";

export const indexableRobots: Metadata["robots"] = {
    index: true,
    follow: true,
    googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1
    }
};
