// IndexNow URL submission to Bing/Yandex/Naver (Google doesn't support).
// Reads sitemap.xml, extracts all URLs, submits in batches of 10000.
import fs from 'fs';
import https from 'https';
import path from 'path';

const HOST = 'plizio.com';
const KEY = 'f917447fb329af2cf60b5fb96bde8c36';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

function extractUrlsFromXml(xml) {
  const urls = [];
  const regex = /<loc>([^<]+)<\/loc>/g;
  let m;
  while ((m = regex.exec(xml)) !== null) urls.push(m[1].trim());
  return urls;
}

async function fetchText(url) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      let chunks = '';
      res.on('data', c => chunks += c);
      res.on('end', () => resolve(chunks));
    }).on('error', reject);
  });
}

async function loadAllSitemapsLive() {
  const all = new Set();
  const rootSitemap = `https://${HOST}/sitemap.xml`;
  const rootXml = await fetchText(rootSitemap);
  const firstLevel = extractUrlsFromXml(rootXml);

  // Root sitemap may be an index (pointing to sub-sitemaps) OR contain URLs directly
  // Check if root contains <sitemap> tags
  const isIndex = rootXml.includes('<sitemap>') || rootXml.includes('<sitemapindex');
  if (isIndex) {
    for (const sm of firstLevel) {
      try {
        const xml = await fetchText(sm);
        extractUrlsFromXml(xml).forEach(u => all.add(u));
      } catch (e) { console.error(`failed ${sm}: ${e.message}`); }
    }
  } else {
    firstLevel.forEach(u => all.add(u));
  }

  // Also try known sub-sitemaps
  const subSitemaps = [
    'sitemap-blog.xml', 'sitemap-categories.xml', 'sitemap-deutsch-test.xml',
    'sitemap-education.xml', 'sitemap-english-test.xml', 'sitemap-games.xml',
    'sitemap-math-test-en.xml',
  ];
  for (const sub of subSitemaps) {
    try {
      const xml = await fetchText(`https://${HOST}/${sub}`);
      extractUrlsFromXml(xml).forEach(u => all.add(u));
    } catch (e) { /* ok if 404 */ }
  }

  return [...all].filter(u => u.startsWith(`https://${HOST}`));
}

async function post(payload) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify(payload);
    const req = https.request({
      hostname: 'api.indexnow.org',
      path: '/indexnow',
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8', 'Content-Length': Buffer.byteLength(body) },
    }, res => {
      let chunks = '';
      res.on('data', c => chunks += c);
      res.on('end', () => resolve({ status: res.statusCode, body: chunks }));
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

(async () => {
  const urls = await loadAllSitemapsLive();
  console.log(`Found ${urls.length} URLs across live sitemaps (plizio.com)`);

  if (urls.length === 0) { console.error('No URLs'); process.exit(1); }

  // IndexNow allows max 10000 URLs per batch
  const batchSize = 10000;
  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    const payload = { host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList: batch };
    const { status, body } = await post(payload);
    console.log(`Batch ${i/batchSize+1}: ${batch.length} URLs → HTTP ${status} ${body.slice(0,200)}`);
  }
  console.log('DONE');
})();
