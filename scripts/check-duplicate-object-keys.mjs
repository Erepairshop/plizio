#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import ts from "typescript";

const roots = ["app", "components", "lib", "mathe"];

function listFiles() {
  const args = ["--files", ...roots, "-g", "!**/*.d.ts"];
  const output = execFileSync("rg", args, {
    cwd: process.cwd(),
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });

  return output
    .split("\n")
    .map(line => line.trim())
    .filter(Boolean)
    .filter(file => file.endsWith(".ts") || file.endsWith(".tsx"));
}

function getPropertyName(node) {
  const { name } = node;
  if (!name) return null;
  if (ts.isComputedPropertyName(name)) return null;
  if (ts.isIdentifier(name) || ts.isPrivateIdentifier(name)) return name.text;
  if (ts.isStringLiteral(name) || ts.isNumericLiteral(name)) return name.text;
  return null;
}

function checkFile(file) {
  const sourceText = readFileSync(file, "utf8");
  const scriptKind = file.endsWith(".tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS;
  const sourceFile = ts.createSourceFile(file, sourceText, ts.ScriptTarget.Latest, true, scriptKind);
  const findings = [];

  function visit(node) {
    if (ts.isObjectLiteralExpression(node)) {
      const seen = new Map();

      for (const prop of node.properties) {
        if (
          !ts.isPropertyAssignment(prop) &&
          !ts.isShorthandPropertyAssignment(prop) &&
          !ts.isMethodDeclaration(prop) &&
          !ts.isGetAccessorDeclaration(prop) &&
          !ts.isSetAccessorDeclaration(prop)
        ) {
          continue;
        }

        const key = getPropertyName(prop);
        if (!key) continue;

        const existing = seen.get(key);
        if (existing) {
          const { line, character } = sourceFile.getLineAndCharacterOfPosition(prop.name.getStart());
          findings.push({
            file,
            key,
            line: line + 1,
            column: character + 1,
          });
        } else {
          seen.set(key, prop);
        }
      }
    }

    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
  return findings;
}

const files = listFiles();
const findings = files.flatMap(checkFile);

if (findings.length) {
  console.error("Duplicate object keys found:");
  for (const finding of findings) {
    console.error(`- ${finding.file}:${finding.line}:${finding.column} duplicate key "${finding.key}"`);
  }
  process.exit(1);
}

console.log(`Duplicate key check passed for ${files.length} files.`);
