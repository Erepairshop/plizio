#!/usr/bin/env node
// GSC indexing health check — sitemap status + per-URL inspection for problems.
// Auth: same service account as gsc_stats.mjs.

import { readFileSync } from "node:fs";
import { createSign } from "node:crypto";
import https from "node:https";

const SERVICE_ACCOUNT_PATH = process.env.SERVICE_ACCOUNT_PATH || "/home/erik/imgpipe/service-account.json";
const SITE_URL = process.env.GSC_SITE_URL || "https://plizio.com/";

function jwt(svc) {
  const header = { alg: "RS256", typ: "JWT" };
  const iat = Math.floor(Date.now() / 1000);
  const claim = {
    iss: svc.client_email,
    scope: "https://www.googleapis.com/auth/webmasters.readonly",
    aud: "https://oauth2.googleapis.com/token",
    iat, exp: iat + 3600,
  };
  const b64 = o => Buffer.from(JSON.stringify(o)).toString("base64url");
  const head_payload = `${b64(header)}.${b64(claim)}`;
  const sig = createSign("RSA-SHA256").update(head_payload).end().sign(svc.private_key, "base64url");
  return `${head_payload}.${sig}`;
}

function httpJson(method, url, body, headers = {}) {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    const req = https.request({
      method, hostname: u.hostname, path: u.pathname + u.search,
      headers: { "Content-Type": "application/json", ...headers },
    }, (res) => {
      let data = "";
      res.on("data", c => data += c);
      res.on("end", () => {
        try { resolve({ status: res.statusCode, data: data ? JSON.parse(data) : null }); }
        catch (e) { resolve({ status: res.statusCode, data, parseError: e.message }); }
      });
    });
    req.on("error", reject);
    if (body) req.write(typeof body === "string" ? body : JSON.stringify(body));
    req.end();
  });
}

async function getToken() {
  const svc = JSON.parse(readFileSync(SERVICE_ACCOUNT_PATH, "utf-8"));
  const assertion = jwt(svc);
  const body = `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${assertion}`;
  const { data } = await httpJson("POST", "https://oauth2.googleapis.com/token", body,
    { "Content-Type": "application/x-www-form-urlencoded" });
  return data.access_token;
}

async function listSitemaps(token) {
  const url = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE_URL)}/sitemaps`;
  const { data } = await httpJson("GET", url, null, { Authorization: `Bearer ${token}` });
  return data;
}

async function inspectUrl(token, urlToCheck) {
  const url = "https://searchconsole.googleapis.com/v1/urlInspection/index:inspect";
  const body = { inspectionUrl: urlToCheck, siteUrl: SITE_URL };
  const { data } = await httpJson("POST", url, body, { Authorization: `Bearer ${token}` });
  return data;
}

(async () => {
  const token = await getToken();

  console.log("=== Plizio.com — GSC Index Health ===\n");

  // 1) Sitemap status
  console.log("--- Sitemap Status ---");
  const sm = await listSitemaps(token);
  if (sm.sitemap) {
    for (const s of sm.sitemap) {
      const errs = s.errors || 0;
      const warns = s.warnings || 0;
      const subm = (s.contents || []).reduce((a, c) => a + Number(c.submitted || 0), 0);
      const ind = (s.contents || []).reduce((a, c) => a + Number(c.indexed || 0), 0);
      const status = errs > 0 ? "❌" : warns > 0 ? "⚠️ " : "✅";
      console.log(`${status} ${s.path}`);
      console.log(`   submitted: ${subm}  indexed: ${ind}  ratio: ${subm ? (ind/subm*100).toFixed(1) : "—"}%  errors: ${errs}  warnings: ${warns}`);
      if (s.lastSubmitted) console.log(`   last submitted: ${s.lastSubmitted}`);
      if (s.lastDownloaded) console.log(`   last downloaded: ${s.lastDownloaded}`);
    }
  } else {
    console.log("(no sitemaps found)");
  }

  // 2) URL Inspection on sample URLs (from CLI args or env)
  const sampleUrls = (process.env.URLS || "").split(/[\s,]+/).filter(Boolean);
  if (sampleUrls.length === 0) {
    // Default: a few representative URLs
    sampleUrls.push(
      "https://plizio.com/",
      "https://plizio.com/de/",
      "https://plizio.com/hu/magyarorszag/budapest/budapest/",
      "https://plizio.com/de/ungarn/budapest/",
      "https://plizio.com/sitemap.xml",
    );
  }
  console.log("\n--- URL Inspection (sample) ---");
  for (const u of sampleUrls.slice(0, 20)) {
    try {
      const r = await inspectUrl(token, u);
      const ir = r.inspectionResult || {};
      const ind = ir.indexStatusResult || {};
      const cov = ind.coverageState || "?";
      const verdict = ind.verdict || "?";
      const lastCrawl = ind.lastCrawlTime || "—";
      const robots = ind.robotsTxtState || "?";
      const indexability = ind.indexingState || "?";
      console.log(`\n${u}`);
      console.log(`  verdict: ${verdict}  coverage: ${cov}  indexability: ${indexability}`);
      console.log(`  robots: ${robots}  last crawl: ${lastCrawl}`);
      if (ind.pageFetchState && ind.pageFetchState !== "SUCCESSFUL") {
        console.log(`  pageFetchState: ${ind.pageFetchState}`);
      }
      if (ind.crawledAs) console.log(`  crawled as: ${ind.crawledAs}`);
      if (ind.googleCanonical) console.log(`  google-canonical: ${ind.googleCanonical}`);
      if (ind.userCanonical && ind.userCanonical !== ind.googleCanonical) {
        console.log(`  user-canonical:   ${ind.userCanonical}  (MISMATCH)`);
      }
    } catch (e) {
      console.log(`\n${u}\n  ERROR: ${e.message}`);
    }
  }
})();
