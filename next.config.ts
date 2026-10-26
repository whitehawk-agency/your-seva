import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Swap in your own CDN / DAM host when real photography is wired up.
    remotePatterns: [{ protocol: "https", hostname: "images.yourseva.org" }],
  },
};

export default nextConfig;
