import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  experimental: {
    cpus: 1,
    workerThreads: false,
  },
  allowedDevOrigins: ["100.115.92.197", "localhost", "100.108.42.13", "100.109.55.70"],
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config: any) => {
    const rules = config.module?.rules ?? [];
    for (const rule of rules) {
      if (!rule.oneOf) continue;
      for (const r of rule.oneOf) {
        if (!Array.isArray(r.use)) continue;
        for (const use of r.use) {
          if (
            typeof use === "object" &&
            use.loader?.includes("css-loader") &&
            use.options
          ) {
            use.options.import = false;
          }
        }
      }
    }
    return config;
  },
};

export default nextConfig;
