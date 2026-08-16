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
    // The production export uses Webpack because the current Turbopack graph
    // retains the generated SEO module until it exhausts RAM + swap. Next's
    // low-risk Webpack memory mode trades a little build speed for a lower peak.
    webpackMemoryOptimizations: true,
    // Keep filesystem caching enabled for local/Turbopack builds too. The VPS
    // workflow persists .next/cache in RELEASE_BASE/shared between runner jobs.
    turbopackFileSystemCacheForBuild: true,
  },
};

export default nextConfig;
