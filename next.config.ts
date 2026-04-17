import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  allowedDevOrigins: ["100.115.92.197", "localhost", "100.108.42.13", "100.109.55.70"],
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config: unknown) => {
    return config;
  },
};

export default nextConfig;
