import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  turbopack: {
    root: ".",
  },
  webpack: (config: unknown) => {
    return config;
  },
};

export default nextConfig;
