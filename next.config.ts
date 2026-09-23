import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const isDev = process.env.NODE_ENV === "development";

const contentSecurityPolicy = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' ${isDev ? "'unsafe-eval' " : ""}https://va.vercel-scripts.com https://vercel.live;
    style-src 'self' 'unsafe-inline';
    img-src 'self' data: blob:;
    font-src 'self';
    connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com https://vercel.live wss://ws.vercel.live;
    media-src 'none';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    frame-src 'self' https://vercel.live;
    upgrade-insecure-requests;
`;

const securityHeaders = [
    {
        key: "Content-Security-Policy",
        value: contentSecurityPolicy.replace(/\s+/g, " ").trim()
    },
    {
        key: "Referrer-Policy",
        value: "origin-when-cross-origin"
    },
    {
        key: "X-Frame-Options",
        value: "DENY"
    },
    {
        key: "X-Content-Type-Options",
        value: "nosniff"
    },
    {
        key: "X-DNS-Prefetch-Control",
        value: "on"
    },
    {
        key: "Strict-Transport-Security",
        value: "max-age=31536000; includeSubDomains; preload"
    },
    {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=()"
    }
];

const nextConfig = {
    poweredByHeader: false,
    typedRoutes: true,
    experimental: {
        globalNotFound: true
    },
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: securityHeaders
            }
        ];
    }
} satisfies NextConfig;

export default createNextIntlPlugin()(nextConfig);
