/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  allowedDevOrigins: [
    "localhost",
    "100.108.42.13",
    "100.109.55.70",
    "100.110.65.120",
  ],
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
