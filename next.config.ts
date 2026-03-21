import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  webpack: (config: unknown) => {
    return config;
  },
  experimental: {
    // Disable Turbopack if issues arise
  },
};

export default nextConfig;
