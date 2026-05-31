import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  allowedDevOrigins: ["100.115.92.197", "localhost", "100.108.42.13", "100.109.55.70"],
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    workerThreads: false,
    cpus: 2,
    // Turbopack persistent build cache → incremental `next build` (cold compile
    // was ~14 min every deploy; cached recompile is a few min). Cache dir is
    // .next/cache, persisted by actions/cache in deploy-vps.yml.
    turbopackFileSystemCacheForBuild: true,
  },
};

export default nextConfig;
