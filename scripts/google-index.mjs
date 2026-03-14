/**
 * Google Indexing API — tömeges URL beküldés
 *
 * TELEPÍTÉS / BEÁLLÍTÁS (egyszer kell elvégezni):
 * ─────────────────────────────────────────────
 * 1. Google Cloud Console: https://console.cloud.google.com/
 *    → Új projekt vagy meglévő kiválasztása
 *    → APIs & Services → Enable APIs → "Web Search Indexing API" engedélyezése
 *
 * 2. Service Account létrehozása:
 *    → APIs & Services → Credentials → Create Credentials → Service Account
 *    → Adj neki nevet (pl. "plizio-indexing")
 *    → Keys → Add Key → JSON → letöltés
 *    → Másold a letöltött JSON fájlt ide: scripts/service-account.json
 *
 * 3. Google Search Console:
 *    → https://search.google.com/search-console/
 *    → Settings → Users and permissions → Add user
 *    → Add the service account EMAIL (pl. plizio-indexing@project.iam.gserviceaccount.com)
 *    → Permission: OWNER (fontos!)
 *
 * 4. Futtatás:
 *    node scripts/google-index.mjs
 *
 * KORLÁTOK:
 * - 200 URL/nap az Indexing API-val
 * - A script automatikusan megáll 200-nál (lehet módosítani: MAX_PER_DAY)
 * - Ajánlott: fontosabb URL-eket előre rakni a listába
 */

import { readFileSync, existsSync } from "fs";
import { createSign } from "crypto";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ── Konfiguráció ──────────────────────────────────────────────────────────────
const SERVICE_ACCOUNT_PATH = path.join(__dirname, "service-account.json");
const MAX_PER_DAY = 200;       // Google napi limit
const DELAY_MS = 500;          // ms várakozás URL-ek között (ne bombázzuk)
const BATCH_LOG = true;        // logolás minden URL-hez

// ── Sitemapok (prioritás sorrendben) ─────────────────────────────────────────
const SITEMAP_FILES = [
  "../public/sitemap.xml",
  "../public/sitemap-games.xml",
  "../public/sitemap-education.xml",
  "../public/sitemap-math-test-en.xml",
  "../public/sitemap-deutsch-test.xml",
  "../public/sitemap-english-test.xml",
  "../public/sitemap-categories.xml",
  "../public/sitemap-blog.xml",
];

// ── Ellenőrzés ────────────────────────────────────────────────────────────────
if (!existsSync(SERVICE_ACCOUNT_PATH)) {
  console.error(`
❌ Hiányzó fájl: scripts/service-account.json

Kövesd a fenti telepítési utasítást:
1. Google Cloud Console → Web Search Indexing API engedélyezése
2. Service Account létrehozása → JSON letöltése
3. Másold ide: scripts/service-account.json
4. Search Console → Add service account email as OWNER
`);
  process.exit(1);
}

// ── Service Account betöltése ─────────────────────────────────────────────────
const sa = JSON.parse(readFileSync(SERVICE_ACCOUNT_PATH, "utf-8"));

// ── JWT létrehozása (Google OAuth2) ───────────────────────────────────────────
function createJWT(serviceAccount) {
  const now = Math.floor(Date.now() / 1000);
  const header = Buffer.from(JSON.stringify({ alg: "RS256", typ: "JWT" })).toString("base64url");
  const payload = Buffer.from(JSON.stringify({
    iss: serviceAccount.client_email,
    scope: "https://www.googleapis.com/auth/indexing",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now,
  })).toString("base64url");

  const sign = createSign("RSA-SHA256");
  sign.update(`${header}.${payload}`);
  const signature = sign.sign(serviceAccount.private_key, "base64url");

  return `${header}.${payload}.${signature}`;
}

// ── Access Token lekérése ─────────────────────────────────────────────────────
async function getAccessToken() {
  const jwt = createJWT(sa);
  const resp = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });
  if (!resp.ok) {
    const err = await resp.text();
    throw new Error(`Token hiba: ${err}`);
  }
  const { access_token } = await resp.json();
  return access_token;
}

// ── URL beküldése az Indexing API-ba ─────────────────────────────────────────
async function submitUrl(url, token) {
  const resp = await fetch(
    "https://indexing.googleapis.com/v3/urlNotifications:publish",
    {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url, type: "URL_UPDATED" }),
    }
  );
  const data = await resp.json();
  return { ok: resp.ok, status: resp.status, data };
}

// ── Sitemap XML beolvasása ────────────────────────────────────────────────────
function extractUrlsFromSitemap(xmlContent) {
  const matches = xmlContent.matchAll(/<loc>(https?:\/\/[^<]+)<\/loc>/g);
  return [...matches].map((m) => m[1].trim());
}

// ── Fő logika ─────────────────────────────────────────────────────────────────
async function main() {
  console.log("🚀 Plizio Google Indexing API\n");

  // Összes URL összegyűjtése (sitemapokból)
  const allUrls = [];
  const seen = new Set();

  for (const relPath of SITEMAP_FILES) {
    const fullPath = path.join(__dirname, relPath);
    if (!existsSync(fullPath)) {
      console.warn(`⚠️  Sitemap nem található: ${relPath}`);
      continue;
    }
    const xml = readFileSync(fullPath, "utf-8");
    const urls = extractUrlsFromSitemap(xml);
    let added = 0;
    for (const u of urls) {
      if (!seen.has(u)) {
        seen.add(u);
        allUrls.push(u);
        added++;
      }
    }
    console.log(`📄 ${path.basename(relPath)}: ${added} URL`);
  }

  console.log(`\n✅ Összesen: ${allUrls.length} egyedi URL`);

  const toSubmit = allUrls.slice(0, MAX_PER_DAY);
  console.log(`📤 Beküldendő: ${toSubmit.length} URL (napi limit: ${MAX_PER_DAY})\n`);

  if (toSubmit.length === 0) {
    console.log("Nincs beküldenivaló URL.");
    return;
  }

  // Token lekérése
  console.log("🔑 Access token lekérése...");
  let token;
  try {
    token = await getAccessToken();
    console.log("✅ Token OK\n");
  } catch (e) {
    console.error("❌ Token hiba:", e.message);
    console.error("\nEllenőrizd:\n- service-account.json helyes-e\n- Search Console-ban OWNER jogot kapott-e a service account\n- Web Search Indexing API engedélyezve van-e");
    process.exit(1);
  }

  // Beküldés
  let ok = 0;
  let fail = 0;
  const errors = [];

  for (let i = 0; i < toSubmit.length; i++) {
    const url = toSubmit[i];
    const prefix = `[${String(i + 1).padStart(3, "0")}/${toSubmit.length}]`;

    try {
      const result = await submitUrl(url, token);
      if (result.ok) {
        ok++;
        if (BATCH_LOG) console.log(`${prefix} ✅ ${url}`);
      } else {
        fail++;
        const msg = result.data?.error?.message || JSON.stringify(result.data);
        errors.push({ url, msg });
        if (BATCH_LOG) console.log(`${prefix} ❌ ${url} — ${msg}`);
      }
    } catch (e) {
      fail++;
      errors.push({ url, msg: e.message });
      if (BATCH_LOG) console.log(`${prefix} ❌ ${url} — ${e.message}`);
    }

    // Várakozás (ne bombázzuk az API-t)
    if (i < toSubmit.length - 1) {
      await new Promise((r) => setTimeout(r, DELAY_MS));
    }
  }

  // Összefoglaló
  console.log(`\n${"─".repeat(50)}`);
  console.log(`✅ Sikeres: ${ok} URL`);
  console.log(`❌ Sikertelen: ${fail} URL`);
  if (errors.length > 0) {
    console.log("\n❌ Hibák:");
    errors.forEach(({ url, msg }) => console.log(`   ${url}\n   → ${msg}`));
  }
  if (allUrls.length > MAX_PER_DAY) {
    console.log(`\n⚠️  Még ${allUrls.length - MAX_PER_DAY} URL maradt (napi limit elérve). Holnap futtasd újra!`);
    console.log(`   Tipp: növeld MAX_PER_DAY értékét ha több API kvótád van.`);
  }
  console.log(`${"─".repeat(50)}\n`);
}

main().catch((e) => {
  console.error("Váratlan hiba:", e);
  process.exit(1);
});
