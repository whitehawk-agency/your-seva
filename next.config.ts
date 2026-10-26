import type { NextConfig } from "next";

const staticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // `npm run build:static` emits a fully static site to ./out — every route
  // is prerendered, so it can be served from any CDN or static host.
  ...(staticExport ? { output: "export" as const, trailingSlash: true } : {}),
  images: {
    // Swap in your own CDN / DAM host when real photography is wired up.
    remotePatterns: [{ protocol: "https", hostname: "images.yourseva.org" }],
    ...(staticExport ? { unoptimized: true } : {}),
  },
};

export default nextConfig;
