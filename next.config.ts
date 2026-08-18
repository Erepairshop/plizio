import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  allowedDevOrigins: [
    "100.115.92.197",
    "localhost",
    "100.108.42.13",
    "100.109.55.70",
    "desktop-msifig9.tailf0e64e.ts.net",
  ],
  // The preview worktree shares dependencies with the main checkout. Keeping
  // both paths under one explicit root lets Turbopack follow that junction.
  turbopack: {
    root: process.env.PLIZIO_TURBOPACK_ROOT || process.cwd(),
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    workerThreads: false,
    cpus: 2,
    turbopackFileSystemCacheForDev: process.env.PLIZIO_DEV_PREVIEW !== "1",
    // The production export uses Webpack because the current Turbopack graph
    // retains the generated SEO module until it exhausts RAM + swap. Next's
    // low-risk Webpack memory mode trades a little build speed for a lower peak.
    webpackMemoryOptimizations: true,
    // Keep filesystem caching enabled for local/Turbopack builds too. The VPS
    // workflow persists .next/cache in RELEASE_BASE/shared between runner jobs.
    // The preview machine's CPU lacks BMI2, which Turbopack's persistent cache
    // requires. Disable only for the local tailnet preview.
    turbopackFileSystemCacheForBuild: process.env.PLIZIO_DEV_PREVIEW !== "1",
  },
};

export default nextConfig;
