import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const temp = fs.mkdtempSync(path.join(os.tmpdir(), "plizio-seo-content-test-"));
const gate = fileURLToPath(new URL("./seo-release-gate.mjs", import.meta.url));
const url = "https://plizio.com/en/example/";
fs.mkdirSync(path.join(temp, "en/example"), { recursive: true });
fs.writeFileSync(path.join(temp, "sitemap-0.xml"), `<urlset><url><loc>${url}</loc></url></urlset>`);
const run = (body) => {
  fs.writeFileSync(path.join(temp, "en/example/index.html"),
    `<html lang="en"><head><link rel="canonical" href="${url}"></head><body>${body}</body></html>`);
  return spawnSync(process.execPath, [gate], { encoding: "utf8", env: {
    ...process.env, OUT_DIR: temp, SEO_GATE_CHECK_IMAGES: "0", SEO_GATE_MAX_URLS: "0",
  } });
};
try {
  const valid = run("<h1>Example</h1><p>A mobile-friendly reaction game.</p>");
  assert.equal(valid.status, 0, valid.stdout + valid.stderr);
  const invalid = run("<h1>Example</h1><p>A mobile-friendly [object Object].</p>");
  assert.equal(invalid.status, 1, invalid.stdout + invalid.stderr);
  assert.match(invalid.stderr, /object interpolation in rendered content/);
  const scriptOnly = run('<h1>Example</h1><script>const example = "[object Object]";</script>');
  assert.equal(scriptOnly.status, 0, scriptOnly.stdout + scriptOnly.stderr);
  console.log("PASS: valid content accepted, object interpolation rejected, script payload ignored");
} finally {
  // Only remove the exact temporary fixture created above, never a project path.
  fs.rmSync(temp, { recursive: true, force: true });
}
