// Remove duplicate HU POIs (same parent+name.de). Keep the one with image, else shorter id.
import fs from "node:fs";
import path from "node:path";

const REPO = path.resolve(import.meta.dirname, "..");
const FILE = path.join(REPO, "lib/visualLab/data/hungaryPoi.ts");
const src = fs.readFileSync(FILE, "utf8");

// Split into prelude + entries by finding the export const ... = [ ... ];
// Each POI = balanced { ... } at root level of array.
const arrayStartM = src.search(/export const \w+:\s*POI\[\]\s*=\s*\[/);
// We need ALL exported arrays — there may be multiple
// hungaryCountry, hungaryRegions, hungaryPois, etc.
const re = /(export const \w+:\s*POI\[\]\s*=\s*\[)([\s\S]*?)(\n\];)/g;

let collected = []; // {arrayStart, body, end, blocks: [{rawText, id, parent, name, hasImage}]}
let m;
while ((m = re.exec(src)) !== null) {
  collected.push({ start: m.index, header: m[1], body: m[2], end: m[3], full: m[0] });
}
console.log(`Found ${collected.length} POI[] arrays`);

function parseEntries(body) {
  // Walk character by character, tracking braces and string-state to extract top-level objects
  const entries = [];
  let depth = 0, start = -1, inStr = false, strQ = null;
  for (let i = 0; i < body.length; i++) {
    const ch = body[i];
    if (inStr) {
      if (ch === "\\") { i++; continue; }
      if (ch === strQ) inStr = false;
      continue;
    }
    if (ch === '"' || ch === "'") { inStr = true; strQ = ch; continue; }
    if (ch === "{") { if (depth === 0) start = i; depth++; }
    else if (ch === "}") {
      depth--;
      if (depth === 0 && start >= 0) {
        const txt = body.slice(start, i + 1);
        const idM = /id:\s*"([^"]+)"/.exec(txt);
        const parentM = /parent:\s*"([^"]+)"/.exec(txt);
        // Use HU name (more stable: pl. "Budapest" vs "Burg X" vs different DE translations)
        const nameDeM = /name:\s*\{[^}]*"hu":\s*"([^"]+)"/.exec(txt) || /name:\s*\{[^}]*hu:\s*"([^"]+)"/.exec(txt) || /name:\s*\{[^}]*"de":\s*"([^"]+)"/.exec(txt);
        const hasImage = /image:\s*"[^"]+"/.test(txt) && !/image:\s*"\s*"/.test(txt);
        entries.push({
          start, end: i + 1, text: txt,
          id: idM?.[1] ?? "",
          parent: parentM?.[1] ?? "",
          name: nameDeM?.[1] ?? "",
          hasImage,
        });
        start = -1;
      }
    }
  }
  return entries;
}

let totalRemoved = 0;
let newSrc = src;
// Process arrays in reverse order so byte offsets stay valid
for (let i = collected.length - 1; i >= 0; i--) {
  const arr = collected[i];
  const entries = parseEntries(arr.body);
  // Group by parent + name.de
  const byKey = new Map();
  for (const e of entries) {
    if (!e.parent || !e.name) continue;
    const k = e.parent + "||" + e.name.toLowerCase().trim();
    if (!byKey.has(k)) byKey.set(k, []);
    byKey.get(k).push(e);
  }
  const toRemove = new Set();
  for (const grp of byKey.values()) {
    if (grp.length < 2) continue;
    // Keep one: prefer hasImage, then shorter id
    grp.sort((a, b) => {
      if (a.hasImage !== b.hasImage) return a.hasImage ? -1 : 1;
      return a.id.length - b.id.length;
    });
    for (let j = 1; j < grp.length; j++) {
      toRemove.add(grp[j]);
      totalRemoved++;
    }
  }
  if (toRemove.size === 0) continue;

  // Sort by start desc, splice out from body
  const removalArr = [...toRemove].sort((a, b) => b.start - a.start);
  let body = arr.body;
  for (const e of removalArr) {
    // Also remove the surrounding comma/whitespace
    let s = e.start;
    let n = e.end;
    // Walk back to previous non-whitespace
    while (s > 0 && /[\s\n,]/.test(body[s - 1])) s--;
    // Walk forward to next non-whitespace
    while (n < body.length && /[\s\n]/.test(body[n])) n++;
    if (body[n] === ",") n++; // consume trailing comma
    body = body.slice(0, s) + (s > 0 && n < body.length ? "\n  " : "") + body.slice(n);
  }
  const newArrText = arr.header + body + arr.end;
  newSrc = newSrc.slice(0, arr.start) + newArrText + newSrc.slice(arr.start + arr.full.length);
}

fs.writeFileSync(FILE, newSrc);
console.log(`Removed ${totalRemoved} duplicate POIs`);
