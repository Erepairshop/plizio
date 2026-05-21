#!/usr/bin/env node
// GSC analytics for plizio.com — last 28 days summary.
// Auth: same service account as the Indexing API submitter.
// Usage on VPS:
//   node scripts/gsc_stats.mjs                  # human summary
//   node scripts/gsc_stats.mjs --json           # machine-readable
//   DIM=country DAYS=7 node scripts/gsc_stats.mjs   # custom dimension/range

import { readFileSync } from "node:fs";
import { createSign } from "node:crypto";
import https from "node:https";

const SERVICE_ACCOUNT_PATH = process.env.SERVICE_ACCOUNT_PATH || "/home/erik/imgpipe/service-account.json";
const SITE_URL = process.env.GSC_SITE_URL || "https://plizio.com/";
const DAYS = Number(process.env.DAYS || 28);
const TOP = Number(process.env.TOP || 15);
const AS_JSON = process.argv.includes("--json");

function fmtDate(d) {
  return d.toISOString().slice(0, 10);
}
const now = new Date();
const endDate = fmtDate(new Date(now.getTime() - 2 * 86400000)); // GSC lag ~2 days
const startDate = fmtDate(new Date(now.getTime() - (DAYS + 2) * 86400000));

function jwt(serviceAccount) {
  const header = { alg: "RS256", typ: "JWT" };
  const iat = Math.floor(Date.now() / 1000);
  const claim = {
    iss: serviceAccount.client_email,
    scope: "https://www.googleapis.com/auth/webmasters.readonly",
    aud: "https://oauth2.googleapis.com/token",
    iat,
    exp: iat + 3600,
  };
  const b64url = (o) => Buffer.from(JSON.stringify(o)).toString("base64url");
  const unsigned = `${b64url(header)}.${b64url(claim)}`;
  const sig = createSign("RSA-SHA256").update(unsigned).sign(serviceAccount.private_key, "base64url");
  return `${unsigned}.${sig}`;
}

function post(host, path, body, headers = {}) {
  return new Promise((resolve, reject) => {
    const data = typeof body === "string" ? body : JSON.stringify(body);
    const req = https.request({ host, path, method: "POST", headers: { "Content-Type": "application/json", "Content-Length": Buffer.byteLength(data), ...headers } }, (res) => {
      let buf = "";
      res.on("data", (c) => (buf += c));
      res.on("end", () => {
        if (res.statusCode >= 400) reject(new Error(`HTTP ${res.statusCode}: ${buf.slice(0, 500)}`));
        else resolve(JSON.parse(buf));
      });
    });
    req.on("error", reject);
    req.write(data);
    req.end();
  });
}

async function getAccessToken() {
  const sa = JSON.parse(readFileSync(SERVICE_ACCOUNT_PATH, "utf-8"));
  const assertion = jwt(sa);
  const body = new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion }).toString();
  const res = await post("oauth2.googleapis.com", "/token", body, { "Content-Type": "application/x-www-form-urlencoded" });
  return res.access_token;
}

async function query(token, dimensions, rowLimit = 1000) {
  return post(
    "searchconsole.googleapis.com",
    `/webmasters/v3/sites/${encodeURIComponent(SITE_URL)}/searchAnalytics/query`,
    { startDate, endDate, dimensions, rowLimit },
    { Authorization: `Bearer ${token}` }
  );
}

function table(rows, dimLabel) {
  const w = Math.max(dimLabel.length, ...rows.map((r) => (r.keys[0] || "").length));
  console.log(`${dimLabel.padEnd(w)}  | clicks  | impr.   | ctr     | pos`);
  console.log(`${"-".repeat(w)}  |---------|---------|---------|------`);
  for (const r of rows) {
    const k = (r.keys[0] || "?").padEnd(w);
    const c = String(r.clicks).padStart(7);
    const i = String(r.impressions).padStart(7);
    const ctr = (r.ctr * 100).toFixed(2) + "%";
    const pos = r.position.toFixed(1);
    console.log(`${k}  | ${c} | ${i} | ${ctr.padStart(7)} | ${pos.padStart(5)}`);
  }
}

(async () => {
  const token = await getAccessToken();
  const [total, byCountry, byQuery, byPage, byDate] = await Promise.all([
    query(token, [], 1),
    query(token, ["country"], TOP),
    query(token, ["query"], TOP),
    query(token, ["page"], TOP),
    query(token, ["date"], DAYS + 5),
  ]);

  if (AS_JSON) {
    console.log(JSON.stringify({ range: { startDate, endDate }, total: total.rows?.[0], byCountry: byCountry.rows, byQuery: byQuery.rows, byPage: byPage.rows, byDate: byDate.rows }, null, 2));
    return;
  }

  const t = total.rows?.[0] || { clicks: 0, impressions: 0, ctr: 0, position: 0 };
  console.log(`\n=== plizio.com — GSC summary ${startDate} → ${endDate} (${DAYS} nap) ===\n`);
  console.log(`TOTAL: clicks=${t.clicks}  impressions=${t.impressions}  ctr=${(t.ctr * 100).toFixed(2)}%  avg-pos=${t.position.toFixed(1)}\n`);

  console.log(`--- TOP ${TOP} country (kattintás szerint) ---`);
  table(byCountry.rows || [], "country");
  console.log(`\n--- TOP ${TOP} query ---`);
  table(byQuery.rows || [], "query");
  console.log(`\n--- TOP ${TOP} page ---`);
  table(byPage.rows || [], "page");
  console.log(`\n--- Napi trend (${(byDate.rows || []).length} nap) ---`);
  for (const r of (byDate.rows || []).slice(-10)) {
    console.log(`  ${r.keys[0]}  clicks=${String(r.clicks).padStart(4)}  impr=${String(r.impressions).padStart(5)}  pos=${r.position.toFixed(1)}`);
  }
  console.log();
})().catch((e) => {
  console.error("ERROR:", e.message);
  process.exit(1);
});
