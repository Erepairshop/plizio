import { execSync } from "child_process";

export function getGitLastMod(filePath: string): Date {
  try {
    const ts = execSync(`git log -1 --format=%ct -- ${filePath}`, {
      encoding: "utf8",
    }).trim();
    return ts ? new Date(parseInt(ts, 10) * 1000) : new Date();
  } catch {
    return new Date();
  }
}
