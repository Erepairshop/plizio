import fs from "node:fs";
import path from "node:path";

const HEAD_BYTES = 64 * 1024;

function canonicalPathFromHtml(filePath: string): string | null {
  let fd: number | undefined;
  try {
    fd = fs.openSync(filePath, "r");
    const buffer = Buffer.allocUnsafe(HEAD_BYTES);
    const bytesRead = fs.readSync(fd, buffer, 0, HEAD_BYTES, 0);
    const head = buffer.toString("utf8", 0, bytesRead);
    const canonical = head.match(/<link\b[^>]*\brel=["']canonical["'][^>]*\bhref=["']([^"']+)["']/i)?.[1]
      ?? head.match(/<link\b[^>]*\bhref=["']([^"']+)["'][^>]*\brel=["']canonical["']/i)?.[1];
    if (!canonical) return null;
    const pathname = new URL(canonical, "https://plizio.com").pathname;
    return pathname.endsWith("/") ? pathname : `${pathname}/`;
  } catch {
    return null;
  } finally {
    if (fd !== undefined) fs.closeSync(fd);
  }
}

/**
 * Discover every canonical static HTML map route from public/*-map/index.html.
 * The HTML canonical is authoritative: this automatically excludes /hu/, whose
 * canonical is the root Hungarian route, while keeping real localized variants.
 */
export function discoverStaticMapPaths(
  publicDir = process.env.PLIZIO_PUBLIC_DIR || path.resolve(process.cwd(), "public"),
): string[] {
  let mapDirs: fs.Dirent[] = [];
  try {
    mapDirs = fs.readdirSync(publicDir, { withFileTypes: true })
      .filter((entry) => entry.isDirectory() && entry.name.endsWith("-map"));
  } catch {
    return [];
  }

  const paths = new Set<string>();
  const consider = (filePath: string, expectedPath: string) => {
    if (!fs.existsSync(filePath)) return;
    if (canonicalPathFromHtml(filePath) === expectedPath) paths.add(expectedPath);
  };

  for (const mapDir of mapDirs) {
    const mapPath = `/${mapDir.name}/`;
    const absoluteMapDir = path.join(publicDir, mapDir.name);
    consider(path.join(absoluteMapDir, "index.html"), mapPath);

    let children: fs.Dirent[] = [];
    try {
      children = fs.readdirSync(absoluteMapDir, { withFileTypes: true });
    } catch {
      continue;
    }
    for (const child of children) {
      if (!child.isDirectory()) continue;
      const localizedPath = `${mapPath}${child.name}/`;
      consider(path.join(absoluteMapDir, child.name, "index.html"), localizedPath);
    }
  }

  return [...paths].sort();
}
