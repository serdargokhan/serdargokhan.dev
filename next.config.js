import withNextIntl from "next-intl/plugin"

/** @type {import('next').NextConfig} */
const nextConfig = {
    headers() {
        return [
            {
                source: "/(.*)",
                headers: securityHeaders
            }
        ];
    }
};

const contentSecurityPolicy = `
    default-src 'self' vercel.live;
    script-src 'self' 'unsafe-eval' 'unsafe-inline' cdn.vercel-insights.com vercel.live;
    style-src 'self' 'unsafe-inline';
    img-src * blob: data:;
    media-src 'none';
    connect-src *;
    font-src 'self';
`;

const securityHeaders = [
    {
        key: "Content-Security-Policy",
        value: contentSecurityPolicy.replace(/\n/g, "")
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

export default withNextIntl()(nextConfig);
