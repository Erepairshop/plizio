import fs from "node:fs";
import path from "node:path";

// A sitemap index must reference urlsets, never another sitemap index.
export function imageSitemapEntries(out, site) {
  const file = path.join(out, "sitemap-images.xml");
  if (!fs.existsSync(file)) return [];
  const xml = fs.readFileSync(file, "utf8");
  let files;
  if (/<urlset\b/.test(xml)) files = [file];
  else if (/<sitemapindex\b/.test(xml)) {
    files = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => {
      const url = new URL(match[1].trim().replace(/&amp;/g, "&"));
      if (url.origin !== new URL(site).origin || url.search || url.hash || !/^\/sitemap-images\/\d+\.xml$/.test(url.pathname)) throw Error("Invalid image sitemap chunk URL: " + url.href);
      return path.join(out, url.pathname.slice(1));
    });
  } else throw Error("Invalid image sitemap root");
  return [...new Set(files)].map((chunk) => {
    if (!fs.existsSync(chunk)) throw Error("Missing image sitemap chunk: " + chunk);
    if (!/<urlset\b/.test(fs.readFileSync(chunk, "utf8"))) throw Error("Image sitemap child must be a urlset: " + chunk);
    return { loc: site + "/" + path.relative(out, chunk).split(path.sep).join("/"), lastmod: fs.statSync(chunk).mtime.toISOString().slice(0, 19) + "+00:00" };
  });
}
