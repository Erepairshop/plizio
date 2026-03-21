import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  webpack: (config) => {
    return config;
  },
  experimental: {
    // Disable Turbopack if issues arise
  },
};

export default nextConfig;
