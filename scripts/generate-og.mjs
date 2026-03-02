/**
 * PLIZIO OG Image Generator
 *
 * Generates social preview PNG images (1200×630) for all key pages.
 * Uses sharp (bundled with Next.js) to create images from SVG.
 *
 * Usage: node scripts/generate-og.mjs
 * Run BEFORE npx next build
 *
 * Output: public/og/*.png
 */

import { createRequire } from "module";
import { writeFileSync, mkdirSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

// Use sharp from Next.js node_modules
let sharp;
try {
  sharp = require(path.join(__dirname, "../node_modules/sharp"));
} catch {
  console.error("sharp not found in node_modules. Run: npm install sharp");
  process.exit(1);
}

const OUTPUT_DIR = path.join(__dirname, "../public/og");
mkdirSync(OUTPUT_DIR, { recursive: true });

// ─── SVG TEMPLATE ─────────────────────────────────────────────────────────────
function buildSvg({ title, subtitle, badge, accentColor, bgGradient, emoji }) {
  const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

  // Split title into max 2 lines (30 chars per line)
  const words = title.split(" ");
  const lines = [];
  let current = "";
  for (const word of words) {
    if ((current + " " + word).trim().length > 28 && current.length > 0) {
      lines.push(current.trim());
      current = word;
    } else {
      current = (current + " " + word).trim();
    }
    if (lines.length === 2) { current = "..."; break; }
  }
  if (current) lines.push(current.trim());

  const titleY1 = lines.length === 1 ? 270 : 240;
  const titleY2 = titleY1 + 80;

  return `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${bgGradient[0]}"/>
      <stop offset="100%" stop-color="${bgGradient[1]}"/>
    </linearGradient>
    <radialGradient id="glow1" cx="85%" cy="20%" r="40%">
      <stop offset="0%" stop-color="${accentColor}" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="${accentColor}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="15%" cy="80%" r="35%">
      <stop offset="0%" stop-color="${accentColor}" stop-opacity="0.1"/>
      <stop offset="100%" stop-color="${accentColor}" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow1)"/>
  <rect width="1200" height="630" fill="url(#glow2)"/>

  <!-- Left accent bar -->
  <rect x="64" y="100" width="5" height="430" rx="3" fill="${accentColor}" opacity="0.6"/>

  <!-- Badge -->
  <rect x="88" y="110" width="${badge.length * 11 + 40}" height="36" rx="18"
    fill="${accentColor}" fill-opacity="0.15" stroke="${accentColor}" stroke-opacity="0.4" stroke-width="1"/>
  <text x="108" y="134" font-family="Arial, sans-serif" font-size="15" font-weight="700"
    fill="${accentColor}" letter-spacing="1.5">${esc(badge)}</text>

  <!-- Emoji -->
  <text x="88" y="${titleY1 - 20}" font-family="Arial, sans-serif" font-size="56">${esc(emoji)}</text>

  <!-- Title line 1 -->
  <text x="88" y="${titleY1 + 50}" font-family="Arial Black, Arial, sans-serif" font-size="70"
    font-weight="900" fill="white">${esc(lines[0] || "")}</text>

  <!-- Title line 2 (accent color) -->
  ${lines[1] ? `<text x="88" y="${titleY2 + 50}" font-family="Arial Black, Arial, sans-serif" font-size="70"
    font-weight="900" fill="${accentColor}">${esc(lines[1])}</text>` : ""}

  <!-- Subtitle -->
  <text x="88" y="${(lines[1] ? titleY2 + 50 : titleY1 + 50) + 52}"
    font-family="Arial, sans-serif" font-size="22" fill="rgba(255,255,255,0.55)"
    font-weight="400">${esc(subtitle)}</text>

  <!-- Bottom branding -->
  <rect x="88" y="560" width="1024" height="1" fill="rgba(255,255,255,0.08)"/>
  <text x="88" y="600" font-family="Arial Black, Arial, sans-serif" font-size="24"
    font-weight="900" fill="white" letter-spacing="2">PLIZIO</text>
  <text x="180" y="600" font-family="Arial, sans-serif" font-size="14"
    fill="rgba(255,255,255,0.35)">plizio.com · Free Online Games</text>

  <!-- Corner dots -->
  <circle cx="1140" cy="590" r="4" fill="${accentColor}" opacity="0.6"/>
  <circle cx="1120" cy="590" r="3" fill="${accentColor}" opacity="0.3"/>
  <circle cx="1104" cy="590" r="2" fill="${accentColor}" opacity="0.15"/>
</svg>`;
}

// ─── PAGE DEFINITIONS ─────────────────────────────────────────────────────────
const PAGES = [
  // Category pages
  { filename: "educational-games", title: "Free Educational Games Online", subtitle: "Math tests · Word games · Quizzes · No download", badge: "EDUCATIONAL GAMES", accentColor: "#00FF88", bgGradient: ["#0A0A1A", "#0A1A10"], emoji: "📚" },
  { filename: "brain-games",       title: "Free Brain Games Online",       subtitle: "Memory · Logic · Word puzzles · Quiz challenges", badge: "BRAIN GAMES", accentColor: "#B44DFF", bgGradient: ["#0A0A1A", "#120A1A"], emoji: "🧠" },
  { filename: "reflex-games",      title: "Free Reflex Games Online",      subtitle: "Racing · Platformers · Speed challenges · Instant play", badge: "REFLEX GAMES", accentColor: "#FF2D78", bgGradient: ["#0A0A1A", "#1A0A0A"], emoji: "💥" },

  // Mathe test hub
  { filename: "mathe-test",        title: "Mathe Test Online", subtitle: "Kostenlos üben · Klasse 1–8 · Kein Account nötig", badge: "MATHE TEST · DE / AT / CH", accentColor: "#00D4FF", bgGradient: ["#0A0A1A", "#0A101A"], emoji: "🧮" },

  // Klasse pages
  ...Array.from({ length: 8 }, (_, i) => ({
    filename: `mathe-klasse-${i + 1}`,
    title: `Mathe Test Klasse ${i + 1}`,
    subtitle: `Kostenlos üben · ${["6–7","7–8","8–9","9–10","10–11","11–12","12–13","13–14"][i]} Jahre · Sofort im Browser`,
    badge: `MATHE KLASSE ${i + 1}`,
    accentColor: "#00D4FF",
    bgGradient: ["#0A0A1A", "#0A101A"],
    emoji: ["🌱","🌿","🌲","⛰️","🌋","🌀","🌊","🔥"][i],
  })),

  // English Math Test hub + grade pages
  { filename: "math-test-en",      title: "Free Math Test Online", subtitle: "Grades 1–8 · US Common Core · Instant Feedback", badge: "MATH TEST · ENGLISH", accentColor: "#00FF88", bgGradient: ["#0A0A1A", "#0A1A10"], emoji: "🧮" },
  ...Array.from({ length: 8 }, (_, i) => ({
    filename: `math-grade-${i + 1}-en`,
    title: `Free Math Test Grade ${i + 1}`,
    subtitle: `Ages ${["6–7","7–8","8–9","9–10","10–11","11–12","12–13","13–14"][i]} · Common Core · No Login`,
    badge: `GRADE ${i + 1} MATH`,
    accentColor: "#00FF88",
    bgGradient: ["#0A0A1A", "#0A1A10"],
    emoji: ["🌱","🌿","🌲","⛰️","🌋","🌀","🌊","🔥"][i],
  })),

  // Blog articles
  { filename: "blog-einmaleins",        title: "Einmaleins lernen", subtitle: "8 Methoden die wirklich funktionieren | PLIZIO Blog", badge: "BLOG · KLASSE 3", accentColor: "#FFD700", bgGradient: ["#0A0A1A", "#1A150A"], emoji: "✖️" },
  { filename: "blog-mathe-klasse-3",    title: "Mathe Tipps Klasse 3", subtitle: "10 Tipps für Eltern und Kinder | PLIZIO Blog", badge: "BLOG · TIPPS", accentColor: "#FFD700", bgGradient: ["#0A0A1A", "#1A150A"], emoji: "💡" },
  { filename: "blog-bruchrechnung",     title: "Bruchrechnung leicht", subtitle: "Schritt-für-Schritt für Klasse 4 & 5 | PLIZIO Blog", badge: "BLOG · KLASSE 4–5", accentColor: "#FFD700", bgGradient: ["#0A0A1A", "#1A150A"], emoji: "½" },
  { filename: "blog-mathe-vorbereitung",title: "Mathe Test Vorbereitung", subtitle: "Der perfekte Lernplan | PLIZIO Blog", badge: "BLOG · PRÜFUNG", accentColor: "#FFD700", bgGradient: ["#0A0A1A", "#1A150A"], emoji: "📝" },
  { filename: "blog-free-math-games",   title: "Free Math Games for Kids", subtitle: "Best Browser Games – No Download | PLIZIO Blog", badge: "BLOG · ENGLISH", accentColor: "#00FF88", bgGradient: ["#0A0A1A", "#0A1A10"], emoji: "🎮" },
];

// ─── GENERATE ─────────────────────────────────────────────────────────────────
async function generateAll() {
  console.log(`Generating ${PAGES.length} OG images → public/og/\n`);

  for (const page of PAGES) {
    const svg = buildSvg(page);
    const outputPath = path.join(OUTPUT_DIR, `${page.filename}.png`);

    try {
      await sharp(Buffer.from(svg))
        .resize(1200, 630)
        .png({ quality: 90, compressionLevel: 8 })
        .toFile(outputPath);
      console.log(`  ✓ ${page.filename}.png`);
    } catch (err) {
      console.error(`  ✗ ${page.filename}: ${err.message}`);
    }
  }

  console.log("\nDone! Update metadata to reference /og/<filename>.png");
}

generateAll();
