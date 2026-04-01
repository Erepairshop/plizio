#!/usr/bin/env node

import { spawnSync } from "node:child_process";

function run(label, command, args) {
  console.log(`\n[preflight] ${label}`);
  const result = spawnSync(command, args, {
    stdio: "inherit",
    shell: false,
    env: process.env,
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

run("Checking duplicate object keys", "node", ["scripts/check-duplicate-object-keys.mjs"]);
run("Running TypeScript check", "npx", ["tsc", "-p", "tsconfig.typecheck.json", "--noEmit", "--pretty", "false"]);

console.log("\n[preflight] OK");
