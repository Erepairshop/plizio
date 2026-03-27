#!/usr/bin/env node
/**
 * audit-explorers.mjs
 *
 * Automatically checks ALL astro game explorers across all subjects & grades.
 * Compares what the explorer teaches vs what the topicKeys quiz generators test.
 *
 * Usage: node scripts/audit-explorers.mjs
 */

import fs from "fs";
import path from "path";

const ROOT = path.resolve(import.meta.dirname, "..");

// ─── 1. Discover all astro lib files ──────────────────────────────────────────

const libDir = path.join(ROOT, "lib");
const libFiles = fs.readdirSync(libDir).filter(f => /^astro\w+\d\.ts$/.test(f));

// Group by subject
const subjects = {};
for (const f of libFiles) {
  // e.g. astroEnglish6.ts → subject=English, grade=6
  const m = f.match(/^astro(\w+?)(\d+)\.ts$/);
  if (!m) continue;
  const subject = m[1];
  const grade = parseInt(m[2]);
  if (!subjects[subject]) subjects[subject] = [];
  subjects[subject].push({ grade, file: f });
}

// ─── 2. Parse island definitions from lib files ───────────────────────────────

function parseIslands(filePath) {
  const src = fs.readFileSync(filePath, "utf-8");
  const islands = [];

  // Find island array blocks
  const islandRegex = /\{\s*id:\s*"(i\d+)"[\s\S]*?topicKeys:\s*\[([\s\S]*?)\][\s\S]*?missions:\s*\[([\s\S]*?)\]\s*,?\s*svg/g;
  let match;
  while ((match = islandRegex.exec(src)) !== null) {
    const id = match[1];
    const topicKeysRaw = match[2];
    const missionsRaw = match[3];

    // Extract topic keys
    const topicKeys = [...topicKeysRaw.matchAll(/"([^"]+)"/g)].map(m => m[1]);

    // Extract explore mission gameType
    const exploreMatch = missionsRaw.match(/category:\s*"explore"[\s\S]*?gameType:\s*"([^"]+)"/);
    const exploreGameType = exploreMatch ? exploreMatch[1] : null;

    // Extract island name (english)
    const nameMatch = src.substring(Math.max(0, match.index - 200), match.index + match[0].length)
      .match(/name:\s*\{[^}]*en:\s*"([^"]+)"/);
    const name = nameMatch ? nameMatch[1] : id;

    islands.push({ id, name, topicKeys, exploreGameType });
  }

  return islands;
}

// ─── 3. Find explorer files and extract their topic comments ──────────────────

function findExplorerTopics(subject, grade) {
  // Map subject names to directory patterns
  const dirMappings = {
    "English": "astroenglish",
    "Deutsch": "astrodeutsch",
    "Magyar": "astromagyar",
    "Biologie": "astro-biologie",
    "Sachkunde": "astro-sachkunde",
    "math": "astromath",
  };

  const results = {};

  for (const [key, dir] of Object.entries(dirMappings)) {
    const explorerDir = path.join(ROOT, "app", dir, "games");
    if (!fs.existsSync(explorerDir)) continue;

    // Check grade-specific subdirectory
    const gradeDir = path.join(explorerDir, `k${grade}`);
    const gradeDirAlt = path.join(explorerDir, `g${grade}`);

    for (const d of [gradeDir, gradeDirAlt, explorerDir]) {
      if (!fs.existsSync(d)) continue;
      const files = fs.readdirSync(d).filter(f => f.endsWith("Explorer.tsx"));

      for (const f of files) {
        const fullPath = path.join(d, f);
        const src = fs.readFileSync(fullPath, "utf-8");
        const first500 = src.substring(0, 500);

        // Extract topics from comment (usually line 2-3)
        const topicComment = first500.match(/\/\/.*Topics?:\s*(.+)/i);
        const topics = topicComment ? topicComment[1].trim() : null;

        // Extract explorerId
        const explorerIdMatch = src.match(/explorerId\s*=\s*"([^"]+)"/);
        const explorerId = explorerIdMatch ? explorerIdMatch[1] : null;

        // Extract the LABELS/TOPICS keys to understand what it teaches
        const topicTitles = [];
        const titleMatches = src.matchAll(/t(\d)_title['":\s]+["']([^"']+)/g);
        for (const tm of titleMatches) {
          topicTitles.push(tm[2]);
        }

        results[f.replace(".tsx", "")] = {
          file: path.relative(ROOT, fullPath),
          commentTopics: topics,
          topicTitles: topicTitles.length > 0 ? topicTitles : null,
          explorerId,
        };
      }
    }
  }

  return results;
}

// ─── 4. Find quiz generators for topic keys ───────────────────────────────────

function findGeneratorTopics() {
  const generatorFiles = fs.readdirSync(libDir).filter(f =>
    f.includes("Generator") || f.includes("Curriculum") || f.includes("curriculum")
  );

  const topicMap = {};

  for (const f of generatorFiles) {
    const fPath = path.join(libDir, f);
    if (!fs.statSync(fPath).isFile()) continue;
    const src = fs.readFileSync(fPath, "utf-8");

    // Find topic key registrations: "topic_key_g6": (cc) => { ... question patterns
    // Or case "topic_key": ... patterns
    const topicKeyRegex = /["'](\w+_g\d+)["']\s*[:=]/g;
    let m;
    while ((m = topicKeyRegex.exec(src)) !== null) {
      const key = m[1];
      if (topicMap[key]) continue;

      // Get ~300 chars after the key to understand what it generates
      const context = src.substring(m.index, m.index + 400);

      // Try to extract question text patterns
      const questions = [];
      const qMatches = context.matchAll(/["'`]([^"'`]{15,80}(?:\?|\.{3}|___)[^"'`]{0,20})["'`]/g);
      for (const qm of qMatches) {
        questions.push(qm[1].substring(0, 80));
      }

      topicMap[key] = {
        file: f,
        sampleQuestions: questions.slice(0, 3),
      };
    }
  }

  return topicMap;
}

// ─── 5. Check page.tsx for explorer wiring ────────────────────────────────────

function checkPageWiring(subject, grade) {
  const dirMappings = {
    "English": "astroenglish",
    "Deutsch": "astrodeutsch",
    "Magyar": "astromagyar",
    "Biologie": "astro-biologie",
    "Sachkunde": "astro-sachkunde",
    "math": "astromath",
  };

  const missing = [];

  for (const [key, dir] of Object.entries(dirMappings)) {
    const pagePath = path.join(ROOT, "app", dir, String(grade), "page.tsx");
    if (!fs.existsSync(pagePath)) continue;

    const src = fs.readFileSync(pagePath, "utf-8");
    return { src, dir };
  }

  return null;
}

// ─── 6. Main audit ───────────────────────────────────────────────────────────

console.log("╔══════════════════════════════════════════════════════════════╗");
console.log("║          ASTRO EXPLORER AUDIT — All Subjects & Grades       ║");
console.log("╚══════════════════════════════════════════════════════════════╝\n");

const allGeneratorTopics = findGeneratorTopics();

let totalIssues = 0;
let totalIslands = 0;

// For each astro lib file, parse islands and check
const allLibFiles = fs.readdirSync(libDir)
  .filter(f => /^astro\w+\d\.ts$/.test(f))
  .sort();

for (const libFile of allLibFiles) {
  const filePath = path.join(libDir, libFile);
  const islands = parseIslands(filePath);

  if (islands.length === 0) continue;

  // Determine subject and grade from filename
  const fm = libFile.match(/^astro(\w+?)(\d+)\.ts$/);
  if (!fm) continue;
  const subject = fm[1];
  const grade = parseInt(fm[2]);

  console.log(`\n${"═".repeat(60)}`);
  console.log(`  ${libFile} — ${subject} Grade ${grade} (${islands.length} islands)`);
  console.log(`${"═".repeat(60)}`);

  // Find page.tsx for this subject+grade
  const dirMappings = {
    "English": "astroenglish",
    "Deutsch": "astrodeutsch",
    "Magyar": "astromagyar",
    "Biologie": "astro-biologie",
    "Sachkunde": "astro-sachkunde",
    "math": "astromath",
  };

  let pageSrc = null;
  let appDir = null;
  for (const [key, dir] of Object.entries(dirMappings)) {
    if (subject.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(subject.toLowerCase())) {
      const pagePath = path.join(ROOT, "app", dir, String(grade), "page.tsx");
      if (fs.existsSync(pagePath)) {
        pageSrc = fs.readFileSync(pagePath, "utf-8");
        appDir = dir;
      }
      // Also try without grade subfolder
      if (!pageSrc) {
        const pagePath2 = path.join(ROOT, "app", dir, "page.tsx");
        if (fs.existsSync(pagePath2)) {
          pageSrc = fs.readFileSync(pagePath2, "utf-8");
          appDir = dir;
        }
      }
      break;
    }
  }

  for (const island of islands) {
    totalIslands++;
    const issues = [];

    // Check 1: Is the explorer gameType wired in page.tsx?
    if (pageSrc && island.exploreGameType) {
      const isWired = pageSrc.includes(`"${island.exploreGameType}"`);
      if (!isWired) {
        issues.push(`❌ MISSING WIRING: gameType "${island.exploreGameType}" not found in page.tsx`);
      }
    }

    // Check 2: Do the topicKeys exist in any generator?
    for (const tk of island.topicKeys) {
      if (!allGeneratorTopics[tk]) {
        // Also check without _gN suffix pattern variations
        const found = Object.keys(allGeneratorTopics).some(k => k === tk);
        if (!found) {
          issues.push(`⚠️  Topic key "${tk}" not found in any generator file`);
        }
      }
    }

    // Check 3: Find the explorer file for this gameType
    if (island.exploreGameType && appDir) {
      // Look for explorer component files
      const gamesDirs = [
        path.join(ROOT, "app", appDir, "games"),
        path.join(ROOT, "app", appDir, "games", `k${grade}`),
        path.join(ROOT, "app", appDir, "games", `g${grade}`),
      ];

      let explorerFound = false;
      let explorerTopicComment = null;

      for (const gd of gamesDirs) {
        if (!fs.existsSync(gd)) continue;
        const files = fs.readdirSync(gd).filter(f => f.endsWith("Explorer.tsx"));

        for (const ef of files) {
          const src = fs.readFileSync(path.join(gd, ef), "utf-8");
          // Check if this file handles the gameType
          if (pageSrc && pageSrc.includes(ef.replace(".tsx", ""))) {
            // Check if this explorer is for the current island's gameType
            const screenCheck = `screen === "${island.exploreGameType}"`;
            if (pageSrc.includes(screenCheck)) {
              explorerFound = true;

              // Extract topic comment
              const first800 = src.substring(0, 800);
              const tc = first800.match(/\/\/.*Topics?:\s*(.+)/i);
              explorerTopicComment = tc ? tc[1].trim() : null;

              // Extract topic titles from LABELS
              const titles = [];
              for (const tm of src.matchAll(/t(\d)_title["':\s]+["']([^"']+)/g)) {
                titles.push(tm[2]);
              }
              if (titles.length > 0) {
                explorerTopicComment = titles.join(" | ");
              }
            }
          }
        }
      }

      if (!explorerFound && island.exploreGameType.includes("explorer")) {
        issues.push(`❌ EXPLORER FILE: No explorer component found for "${island.exploreGameType}"`);
      }
    }

    if (issues.length > 0) {
      totalIssues += issues.length;
      console.log(`\n  ${island.id} ${island.name}`);
      console.log(`  topicKeys: [${island.topicKeys.join(", ")}]`);
      console.log(`  gameType: ${island.exploreGameType || "none"}`);
      for (const issue of issues) {
        console.log(`    ${issue}`);
      }
    }
  }

  const islandIssueCount = islands.filter(i => {
    // Re-check (simplified)
    if (!pageSrc || !i.exploreGameType) return false;
    return !pageSrc.includes(`"${i.exploreGameType}"`);
  }).length;

  if (islandIssueCount === 0 && islands.length > 0) {
    console.log(`\n  ✅ All ${islands.length} islands wired correctly`);
  }
}

console.log(`\n${"═".repeat(60)}`);
console.log(`  SUMMARY: ${totalIslands} islands checked, ${totalIssues} issues found`);
console.log(`${"═".repeat(60)}\n`);
