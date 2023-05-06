import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://serdargokhan.dev",
            lastModified: new Date()
        }
    ];
}
