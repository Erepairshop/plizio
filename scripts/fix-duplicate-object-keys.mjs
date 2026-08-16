#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import { copyFileSync, existsSync, readFileSync, writeFileSync } from "node:fs";
import ts from "typescript";

const APPLY = process.argv.includes("--apply");
const roots = ["app", "components", "lib", "mathe"];
const backupSuffix = ".before_duplicate_key_fix.bak";

function listFiles() {
  const output = execFileSync("rg", ["--files", ...roots, "-g", "!**/*.d.ts"], {
    cwd: process.cwd(),
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });
  return output
    .split("\n")
    .map((line) => line.trim())
    .filter((file) => file.endsWith(".ts") || file.endsWith(".tsx"));
}

function propertyName(prop) {
  const { name } = prop;
  if (!name || ts.isComputedPropertyName(name)) return null;
  if (ts.isIdentifier(name) || ts.isPrivateIdentifier(name)) return name.text;
  if (ts.isStringLiteral(name) || ts.isNumericLiteral(name)) return name.text;
  return null;
}

function isKeyedProperty(prop) {
  return (
    ts.isPropertyAssignment(prop) ||
    ts.isShorthandPropertyAssignment(prop) ||
    ts.isMethodDeclaration(prop) ||
    ts.isGetAccessorDeclaration(prop) ||
    ts.isSetAccessorDeclaration(prop)
  );
}

function collectEdits(file, sourceText) {
  const kind = file.endsWith(".tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS;
  const sourceFile = ts.createSourceFile(file, sourceText, ts.ScriptTarget.Latest, true, kind);
  if (sourceFile.parseDiagnostics.length) {
    const first = sourceFile.parseDiagnostics[0];
    const where = sourceFile.getLineAndCharacterOfPosition(first.start ?? 0);
    throw new Error(`${file}:${where.line + 1}:${where.character + 1} has a syntax error; refusing to edit`);
  }

  const edits = [];
  function visit(node) {
    if (ts.isObjectLiteralExpression(node)) {
      const occurrences = new Map();
      for (const prop of node.properties) {
        if (!isKeyedProperty(prop)) continue;
        const key = propertyName(prop);
        if (!key) continue;
        const list = occurrences.get(key) ?? [];
        list.push(prop);
        occurrences.set(key, list);
      }

      for (const props of occurrences.values()) {
        // JavaScript already uses the last property value. Remove every earlier
        // occurrence so runtime behavior remains unchanged.
        for (const duplicate of props.slice(0, -1)) {
          const index = node.properties.indexOf(duplicate);
          const next = node.properties[index + 1];
          if (!next) throw new Error(`${file}: internal edit boundary error`);
          edits.push({ start: duplicate.getFullStart(), end: next.getFullStart() });
        }
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(sourceFile);
  return edits;
}

let duplicateCount = 0;
let changedFiles = 0;
for (const file of listFiles()) {
  const sourceText = readFileSync(file, "utf8");
  const edits = collectEdits(file, sourceText);
  if (!edits.length) continue;
  duplicateCount += edits.length;
  changedFiles += 1;
  if (!APPLY) continue;

  const backup = file + backupSuffix;
  if (!existsSync(backup)) copyFileSync(file, backup);
  let output = sourceText;
  for (const edit of edits.sort((a, b) => b.start - a.start)) {
    output = output.slice(0, edit.start) + output.slice(edit.end);
  }
  writeFileSync(file, output, "utf8");
}

console.log(`${APPLY ? "Removed" : "Found"} ${duplicateCount} duplicate keys in ${changedFiles} files.`);
if (!APPLY && duplicateCount) console.log("Run with --apply to create backups and apply the safe rewrite.");
