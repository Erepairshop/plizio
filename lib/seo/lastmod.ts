import { execSync } from "child_process";

// Cache: per-file last modification time (unix seconds)
let cache: Map<string, number> | null = null;
let cacheBuildFailed = false;

function buildCache(): Map<string, number> {
  if (cache) return cache;
  const m = new Map<string, number>();
  try {
    // One git call: list every tracked file's most recent commit timestamp.
    // --name-only on a whatchanged-style log is slow; instead we iterate log entries once.
    const raw = execSync('git log --name-only --pretty=format:"COMMIT:%ct"', {
      encoding: "utf8",
      maxBuffer: 128 * 1024 * 1024,
    });
    let currentTs = 0;
    for (const line of raw.split("\n")) {
      if (line.startsWith("COMMIT:")) {
        currentTs = parseInt(line.slice(7), 10) || 0;
        continue;
      }
      const f = line.trim();
      if (!f) continue;
      // Keep the MOST RECENT (first seen, since log is DESC) timestamp per file.
      if (!m.has(f)) m.set(f, currentTs);
    }
  } catch {
    cacheBuildFailed = true;
  }
  cache = m;
  return m;
}

export function getGitLastMod(filePath: string): Date {
  if (cacheBuildFailed) return new Date();
  const c = buildCache();
  const ts = c.get(filePath);
  return ts ? new Date(ts * 1000) : new Date();
}
