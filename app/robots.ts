import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{
      userAgent: "*",
      allow: "/",
      // ?focus= and ?vlab= are deep-link params for game/test pages; they all
      // canonicalize to the bare /<subject>test/ or /astro-<subject>/ URL.
      // Disallow saves crawl budget for the actual content pages.
      disallow: ["/*?focus=", "/*?vlab="],
    }],
    sitemap: "https://plizio.com/sitemap.xml",
  };
}
