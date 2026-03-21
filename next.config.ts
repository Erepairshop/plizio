import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  webpack: (config: unknown) => {
    return config;
  },
};

export default nextConfig;
