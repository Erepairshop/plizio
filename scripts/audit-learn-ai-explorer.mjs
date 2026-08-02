import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, "..");
const explorerDir = path.join(repoRoot, "lib", "explorerPools");
const genericExplorerPath = path.join(repoRoot, "app", "codekids", "GenericInfoExplorer.tsx");
const tokenLabelPattern = /^t\d+_[a-z0-9]+$/i;

function listPoolFiles() {
  return fs
    .readdirSync(explorerDir)
    .filter((name) => /^aiK.*\.ts$/.test(name) || /^informatikaK.*\.ts$/.test(name))
    .sort()
    .map((name) => path.join(explorerDir, name));
}

function getLineCol(sourceFile, position) {
  const { line, character } = sourceFile.getLineAndCharacterOfPosition(position);
  return `${line + 1}:${character + 1}`;
}

function getPropertyNameText(name) {
  if (!name) return null;
  if (ts.isIdentifier(name) || ts.isPrivateIdentifier(name) || ts.isStringLiteral(name) || ts.isNumericLiteral(name)) {
    return name.text;
  }
  return null;
}

function getObjectProperty(node, key) {
  return node.properties.find((prop) => {
    if (!ts.isPropertyAssignment(prop)) return false;
    return getPropertyNameText(prop.name) === key;
  });
}

function getStringInitializer(prop) {
  if (!prop || !ts.isPropertyAssignment(prop)) return null;
  return ts.isStringLiteral(prop.initializer) ? prop.initializer.text : null;
}

function auditFile(filePath, issues) {
  const sourceText = fs.readFileSync(filePath, "utf8");
  const relativePath = path.relative(repoRoot, filePath).replaceAll("\\", "/");
  const sourceFile = ts.createSourceFile(filePath, sourceText, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);

  for (const diagnostic of sourceFile.parseDiagnostics) {
    issues.push({
      file: relativePath,
      position: getLineCol(sourceFile, diagnostic.start ?? 0),
      kind: "parse",
      detail: ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n"),
    });
  }

  function visit(node) {
    if (ts.isObjectLiteralExpression(node)) {
      const seenKeys = new Map();

      for (const prop of node.properties) {
        if (!ts.isPropertyAssignment(prop) && !ts.isShorthandPropertyAssignment(prop)) continue;
        const key = getPropertyNameText(prop.name);
        if (!key) continue;

        if (seenKeys.has(key)) {
          issues.push({
            file: relativePath,
            position: getLineCol(sourceFile, prop.name.getStart(sourceFile)),
            kind: "duplicate-key",
            detail: key,
          });
        } else {
          seenKeys.set(key, prop.name.getStart(sourceFile));
        }
      }

      const typeProp = getObjectProperty(node, "type");
      const itemsProp = getObjectProperty(node, "items");
      const typeValue = getStringInitializer(typeProp);

      if (
        typeValue === "icon-grid" &&
        itemsProp &&
        ts.isPropertyAssignment(itemsProp) &&
        ts.isArrayLiteralExpression(itemsProp.initializer)
      ) {
        for (const item of itemsProp.initializer.elements) {
          if (!ts.isObjectLiteralExpression(item)) continue;
          const labelProp = getObjectProperty(item, "label");
          if (!labelProp) continue;
          const labelValue = getStringInitializer(labelProp);
          if (labelValue === null) continue;

          if (labelValue.trim() === "") {
            issues.push({
              file: relativePath,
              position: getLineCol(sourceFile, labelProp.name.getStart(sourceFile)),
              kind: "empty-icon-grid-label",
              detail: "empty label",
            });
          } else if (tokenLabelPattern.test(labelValue)) {
            issues.push({
              file: relativePath,
              position: getLineCol(sourceFile, labelProp.name.getStart(sourceFile)),
              kind: "token-icon-grid-label",
              detail: labelValue,
            });
          }
        }
      }
    }

    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
}

const files = [...listPoolFiles(), genericExplorerPath];
const issues = [];

for (const filePath of files) {
  auditFile(filePath, issues);
}

if (issues.length > 0) {
  for (const issue of issues) {
    console.error(`${issue.file}:${issue.position} [${issue.kind}] ${issue.detail}`);
  }
  console.error(`Found ${issues.length} issue(s) in ${files.length} file(s).`);
  process.exit(1);
}

console.log(`Audit passed for ${files.length} file(s): no parse errors, duplicate keys, empty icon-grid labels, or token icon-grid labels.`);
