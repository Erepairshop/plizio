import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import ts from "typescript";

type SubjectDef = {
  id: string;
  grades: number[];
  langOnly?: string;
  astroRoute: string;
  testRoute: string;
};

type ImportBinding = {
  local: string;
  imported: string;
  source: string;
  resolved: string | null;
};

type MissionRecord = {
  islandId: string;
  missionId: string;
  gameType: string;
  gameKey?: string;
};

type CurriculumStats = {
  themes: number;
  subtopics: number;
  questionCount: number;
  generatorCount: number;
};

const scriptPath = fileURLToPath(import.meta.url);
const repoRoot = path.resolve(path.dirname(scriptPath), "..");
const appRoot = path.join(repoRoot, "app");
const componentsRoot = path.join(repoRoot, "components");
const libRoot = path.join(repoRoot, "lib");
const scriptName = path.relative(repoRoot, scriptPath).replaceAll("\\", "/");

const failures = new Map<string, string[]>();
const importCache = new Map<string, Promise<any>>();

const DEFAULT_TEST_GRADES = [1, 2, 3, 4, 5, 6, 7, 8];
const REQUIRED_TEST_LABELS = [
  "selectCountry",
  "selectGrade",
  "selectTopics",
  "startTest",
  "task",
  "submit",
  "back",
  "markLabel",
  "name",
  "date",
];
const LOCALES = ["de", "hu", "ro", "en"];
const FIXED_COUNTRY_SETS: Record<string, string[]> = {
  englishtest: ["US", "GB", "AU", "CA", "IE", "NZ"],
  romaniantest: ["RO"],
  magyarteszt: ["HU"],
  deutschtest: ["DE", "AT", "CH"],
  sachkundetest: ["DE", "AT", "CH"],
  biologietest: ["DE", "AT", "CH"],
  physiktest: ["DE", "AT", "CH"],
  kemiatest: ["DE", "AT", "CH"],
  // Geography uses a localized shared curriculum and derives its single
  // language/grading variant dynamically, so it has no fixed national set.
  geschichtetest: ["DE", "AT", "CH", "HU", "RO", "US", "GB"],
  informatikatest: ["DE", "AT", "CH"],
  aitest: ["DE", "AT", "CH"],
  codekidstest: ["DE", "AT", "CH"],
};
const TIMER_ENGINE_FILES = [
  path.join(componentsRoot, "astro-games", "M2Engine.tsx"),
  path.join(componentsRoot, "astro-games", "M3Engine.tsx"),
  path.join(componentsRoot, "LanguageTestGame.tsx"),
  path.join(componentsRoot, "AstroMathExplorerHybrid.tsx"),
  path.join(repoRoot, "app", "codekids", "CodeKidsShared.tsx"),
  path.join(repoRoot, "app", "astro-biologie", "games", "ExplorerEngine.tsx"),
];

function addFailure(group: string, message: string) {
  const bucket = failures.get(group) ?? [];
  bucket.push(message);
  failures.set(group, bucket);
}

function readText(filePath: string): string {
  return fs.readFileSync(filePath, "utf8");
}

function sourceFile(filePath: string): ts.SourceFile {
  const text = readText(filePath);
  const kind = filePath.endsWith(".tsx")
    ? ts.ScriptKind.TSX
    : filePath.endsWith(".ts") || filePath.endsWith(".mts")
      ? ts.ScriptKind.TS
      : ts.ScriptKind.JS;
  return ts.createSourceFile(filePath, text, ts.ScriptTarget.Latest, true, kind);
}

function visit(node: ts.Node, cb: (node: ts.Node) => void) {
  cb(node);
  node.forEachChild((child) => visit(child, cb));
}

function getProperty(objectNode: ts.ObjectLiteralExpression, name: string): ts.Expression | undefined {
  for (const prop of objectNode.properties) {
    if (!ts.isPropertyAssignment(prop) && !ts.isShorthandPropertyAssignment(prop)) {
      continue;
    }
    const propName = ts.isShorthandPropertyAssignment(prop)
      ? prop.name.text
      : ts.isIdentifier(prop.name) || ts.isStringLiteral(prop.name)
        ? prop.name.text
        : undefined;
    if (propName === name) {
      return ts.isShorthandPropertyAssignment(prop) ? prop.name : prop.initializer;
    }
  }
  return undefined;
}

function unwrapExpression(node: ts.Expression): ts.Expression {
  if (ts.isAsExpression(node) || ts.isTypeAssertionExpression(node) || ts.isParenthesizedExpression(node)) {
    return unwrapExpression(node.expression);
  }
  return node;
}

function literalString(node?: ts.Expression): string | undefined {
  if (!node) return undefined;
  const unwrapped = unwrapExpression(node);
  return ts.isStringLiteral(unwrapped) || ts.isNoSubstitutionTemplateLiteral(unwrapped)
    ? unwrapped.text
    : undefined;
}

function literalNumber(node?: ts.Expression): number | undefined {
  if (!node) return undefined;
  const unwrapped = unwrapExpression(node);
  return ts.isNumericLiteral(unwrapped) ? Number(unwrapped.text) : undefined;
}

function numberArray(node?: ts.Expression): number[] | undefined {
  if (!node) return undefined;
  const unwrapped = unwrapExpression(node);
  if (!ts.isArrayLiteralExpression(unwrapped)) return undefined;
  const values = unwrapped.elements.map((element) => literalNumber(element as ts.Expression));
  return values.every((value) => typeof value === "number") ? (values as number[]) : undefined;
}

function identifierName(node?: ts.Expression): string | undefined {
  if (!node) return undefined;
  const unwrapped = unwrapExpression(node);
  return ts.isIdentifier(unwrapped) ? unwrapped.text : undefined;
}

function objectLiteralValue(node?: ts.Expression): ts.ObjectLiteralExpression | undefined {
  if (!node) return undefined;
  const unwrapped = unwrapExpression(node);
  return ts.isObjectLiteralExpression(unwrapped) ? unwrapped : undefined;
}

function arrayLiteralValue(node?: ts.Expression): ts.ArrayLiteralExpression | undefined {
  if (!node) return undefined;
  const unwrapped = unwrapExpression(node);
  return ts.isArrayLiteralExpression(unwrapped) ? unwrapped : undefined;
}

function findVariableInitializer(sf: ts.SourceFile, name: string): ts.Expression | undefined {
  for (const statement of sf.statements) {
    if (!ts.isVariableStatement(statement)) continue;
    for (const declaration of statement.declarationList.declarations) {
      if (ts.isIdentifier(declaration.name) && declaration.name.text === name) {
        return declaration.initializer;
      }
    }
  }
  return undefined;
}

function findVariableInitializerBefore(sf: ts.SourceFile, name: string, pos: number): ts.Expression | undefined {
  let found: ts.Expression | undefined;
  visit(sf, (node) => {
    if (!ts.isVariableDeclaration(node) || node.pos >= pos) return;
    if (ts.isIdentifier(node.name) && node.name.text === name && node.initializer) {
      if (!found || node.pos > found.pos) {
        found = node.initializer;
      }
    }
  });
  return found;
}

function parseImportBindings(filePath: string): ImportBinding[] {
  const sf = sourceFile(filePath);
  const bindings: ImportBinding[] = [];
  for (const statement of sf.statements) {
    if (!ts.isImportDeclaration(statement) || !statement.importClause || !statement.moduleSpecifier) {
      continue;
    }
    const source = literalString(statement.moduleSpecifier);
    if (!source) continue;
    const resolved = resolveModulePath(filePath, source);
    const namedBindings = statement.importClause.namedBindings;
    if (namedBindings && ts.isNamedImports(namedBindings)) {
      for (const element of namedBindings.elements) {
        bindings.push({
          local: element.name.text,
          imported: element.propertyName?.text ?? element.name.text,
          source,
          resolved,
        });
      }
    }
  }
  return bindings;
}

function resolveModulePath(fromFile: string, specifier: string): string | null {
  let base: string;
  if (specifier.startsWith("@/")) {
    base = path.join(repoRoot, specifier.slice(2));
  } else if (specifier.startsWith(".")) {
    base = path.resolve(path.dirname(fromFile), specifier);
  } else {
    return null;
  }

  const candidates = [
    base,
    `${base}.ts`,
    `${base}.tsx`,
    `${base}.mts`,
    `${base}.js`,
    `${base}.jsx`,
    `${base}.mjs`,
    path.join(base, "index.ts"),
    path.join(base, "index.tsx"),
    path.join(base, "index.mts"),
    path.join(base, "index.js"),
    path.join(base, "index.mjs"),
  ];

  for (const candidate of candidates) {
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
      return candidate;
    }
  }
  return null;
}

async function importModule(filePath: string): Promise<any> {
  const normalized = path.normalize(filePath);
  if (!importCache.has(normalized)) {
    importCache.set(normalized, import(pathToFileURL(normalized).href));
  }
  return importCache.get(normalized)!;
}

function resolveAppPage(routePath: string): string | null {
  const stripped = routePath.split("?")[0].split("#")[0];
  const segments = stripped.split("/").filter(Boolean);
  let current = appRoot;

  for (const segment of segments) {
    const exact = path.join(current, segment);
    if (fs.existsSync(exact) && fs.statSync(exact).isDirectory()) {
      current = exact;
      continue;
    }

    const dynamicDir = fs.readdirSync(current, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
      .find((name) => /^\[.*\]$/.test(name));

    if (!dynamicDir) {
      return null;
    }
    current = path.join(current, dynamicDir);
  }

  for (const ext of ["tsx", "ts", "jsx", "js"]) {
    const pagePath = path.join(current, `page.${ext}`);
    if (fs.existsSync(pagePath)) {
      return pagePath;
    }
  }
  return null;
}

function parseSubjectPicker(): SubjectDef[] {
  const pickerPath = path.join(componentsRoot, "SubjectPicker.tsx");
  const sf = sourceFile(pickerPath);
  const initializer = findVariableInitializer(sf, "SUBJECTS");
  const arrayNode = arrayLiteralValue(initializer);
  if (!arrayNode) {
    throw new Error("Could not find SUBJECTS array in components/SubjectPicker.tsx");
  }

  const subjects: SubjectDef[] = [];
  for (const element of arrayNode.elements) {
    const obj = objectLiteralValue(element as ts.Expression);
    if (!obj) continue;
    const id = literalString(getProperty(obj, "id"));
    const grades = numberArray(getProperty(obj, "grades"));
    const astroRoute = literalString(getProperty(obj, "astroRoute"));
    const testRoute = literalString(getProperty(obj, "testRoute"));
    if (!id || !grades || !astroRoute || !testRoute) {
      continue;
    }
    subjects.push({
      id,
      grades,
      astroRoute,
      testRoute,
      langOnly: literalString(getProperty(obj, "langOnly")),
    });
  }
  return subjects;
}

function collectMissionsFromIslands(value: any): MissionRecord[] {
  if (!Array.isArray(value)) {
    return [];
  }
  const missions: MissionRecord[] = [];
  for (const island of value) {
    if (!island || typeof island !== "object" || !Array.isArray(island.missions)) continue;
    const islandId = typeof island.id === "string" ? island.id : "<unknown-island>";
    for (const mission of island.missions) {
      if (!mission || typeof mission !== "object" || typeof mission.gameType !== "string") continue;
      missions.push({
        islandId,
        missionId: typeof mission.id === "string" ? mission.id : "<unknown-mission>",
        gameType: mission.gameType,
        gameKey: typeof mission.gameKey === "string" ? mission.gameKey : undefined,
      });
    }
  }
  return missions;
}

function parseDispatchTargets(pagePath: string): Set<string> {
  const sf = sourceFile(pagePath);
  const targets = new Set<string>();
  visit(sf, (node) => {
    if (ts.isCaseClause(node) && node.expression && ts.isStringLiteral(node.expression)) {
      targets.add(node.expression.text);
    }

    if (
      ts.isBinaryExpression(node) &&
      (node.operatorToken.kind === ts.SyntaxKind.EqualsEqualsEqualsToken ||
        node.operatorToken.kind === ts.SyntaxKind.EqualsEqualsToken)
    ) {
      const left = unwrapExpression(node.left);
      const right = unwrapExpression(node.right);
      const leftText = left.getText(sf);
      const rightText = right.getText(sf);
      if ((leftText === "screen" || rightText === "screen") && ts.isStringLiteral(left)) {
        targets.add(left.text);
      }
      if ((leftText === "screen" || rightText === "screen") && ts.isStringLiteral(right)) {
        targets.add(right.text);
      }
    }
  });
  return targets;
}

function isMissionGameTypeExpression(node: ts.Expression, sf: ts.SourceFile, pos: number, seen = new Set<string>()): boolean {
  const unwrapped = unwrapExpression(node);
  if (
    ts.isPropertyAccessExpression(unwrapped) &&
    ts.isIdentifier(unwrapped.expression) &&
    unwrapped.expression.text === "mission" &&
    unwrapped.name.text === "gameType"
  ) {
    return true;
  }
  if (ts.isIdentifier(unwrapped) && !seen.has(unwrapped.text)) {
    seen.add(unwrapped.text);
    const initializer = findVariableInitializerBefore(sf, unwrapped.text, pos);
    return initializer ? isMissionGameTypeExpression(initializer, sf, pos, seen) : false;
  }
  return false;
}

function extractStringLiterals(node: ts.Expression, sf: ts.SourceFile, pos: number, seen = new Set<string>()): Set<string> {
  const values = new Set<string>();
  const unwrapped = unwrapExpression(node);

  if (ts.isStringLiteral(unwrapped) || ts.isNoSubstitutionTemplateLiteral(unwrapped)) {
    values.add(unwrapped.text);
    return values;
  }

  if (ts.isArrayLiteralExpression(unwrapped)) {
    for (const element of unwrapped.elements) {
      if (ts.isExpression(element)) {
        for (const value of extractStringLiterals(element, sf, pos, seen)) values.add(value);
      }
    }
    return values;
  }

  if (ts.isObjectLiteralExpression(unwrapped)) {
    for (const prop of unwrapped.properties) {
      if (ts.isPropertyAssignment(prop)) {
        for (const value of extractStringLiterals(prop.initializer, sf, pos, seen)) values.add(value);
      }
    }
    return values;
  }

  if (ts.isConditionalExpression(unwrapped)) {
    for (const value of extractStringLiterals(unwrapped.whenTrue, sf, pos, seen)) values.add(value);
    for (const value of extractStringLiterals(unwrapped.whenFalse, sf, pos, seen)) values.add(value);
    return values;
  }

  if (
    ts.isBinaryExpression(unwrapped) &&
    (unwrapped.operatorToken.kind === ts.SyntaxKind.BarBarToken ||
      unwrapped.operatorToken.kind === ts.SyntaxKind.QuestionQuestionToken)
  ) {
    for (const value of extractStringLiterals(unwrapped.left, sf, pos, seen)) values.add(value);
    for (const value of extractStringLiterals(unwrapped.right, sf, pos, seen)) values.add(value);
    return values;
  }

  if (ts.isPropertyAccessExpression(unwrapped)) {
    for (const value of extractStringLiterals(unwrapped.expression, sf, pos, seen)) values.add(value);
    return values;
  }

  if (ts.isElementAccessExpression(unwrapped)) {
    for (const value of extractStringLiterals(unwrapped.expression, sf, pos, seen)) values.add(value);
    return values;
  }

  if (ts.isIdentifier(unwrapped) && !seen.has(unwrapped.text)) {
    seen.add(unwrapped.text);
    const initializer = findVariableInitializerBefore(sf, unwrapped.text, pos);
    if (initializer) {
      for (const value of extractStringLiterals(initializer, sf, pos, seen)) values.add(value);
    }
  }

  return values;
}

function extractMissionGameTypes(node: ts.Expression, sf: ts.SourceFile, pos: number): Set<string> {
  const types = new Set<string>();
  const unwrapped = unwrapExpression(node);

  if (
    ts.isBinaryExpression(unwrapped) &&
    (unwrapped.operatorToken.kind === ts.SyntaxKind.BarBarToken ||
      unwrapped.operatorToken.kind === ts.SyntaxKind.AmpersandAmpersandToken)
  ) {
    for (const value of extractMissionGameTypes(unwrapped.left, sf, pos)) types.add(value);
    for (const value of extractMissionGameTypes(unwrapped.right, sf, pos)) types.add(value);
    return types;
  }

  if (
    ts.isBinaryExpression(unwrapped) &&
    (unwrapped.operatorToken.kind === ts.SyntaxKind.EqualsEqualsEqualsToken ||
      unwrapped.operatorToken.kind === ts.SyntaxKind.EqualsEqualsToken)
  ) {
    if (isMissionGameTypeExpression(unwrapped.left, sf, pos)) {
      for (const value of extractStringLiterals(unwrapped.right, sf, pos)) types.add(value);
    } else if (isMissionGameTypeExpression(unwrapped.right, sf, pos)) {
      for (const value of extractStringLiterals(unwrapped.left, sf, pos)) types.add(value);
    }
    return types;
  }

  if (
    ts.isCallExpression(unwrapped) &&
    ts.isPropertyAccessExpression(unwrapped.expression) &&
    unwrapped.expression.name.text === "includes" &&
    unwrapped.arguments.length >= 1 &&
    isMissionGameTypeExpression(unwrapped.arguments[0], sf, pos)
  ) {
    for (const value of extractStringLiterals(unwrapped.expression.expression, sf, pos)) types.add(value);
  }

  return types;
}

function extractSetScreenTargets(node: ts.Node, sf: ts.SourceFile): Set<string> {
  const targets = new Set<string>();
  visit(node, (child) => {
    if (!ts.isCallExpression(child)) return;
    if (!ts.isIdentifier(child.expression) || child.expression.text !== "setScreen") return;
    const [arg] = child.arguments;
    if (!arg) return;
    for (const value of extractStringLiterals(arg, sf, child.pos)) {
      targets.add(value);
    }
  });
  return targets;
}

function parseSharedDispatchMappings(pagePath: string): { screens: Set<string>; mappings: Map<string, Set<string>> } {
  const sf = sourceFile(pagePath);
  const screens = parseDispatchTargets(pagePath);
  const mappings = new Map<string, Set<string>>();

  visit(sf, (node) => {
    if (!ts.isIfStatement(node)) return;
    const gameTypes = extractMissionGameTypes(node.expression, sf, node.pos);
    if (gameTypes.size === 0) return;
    const targets = extractSetScreenTargets(node.thenStatement, sf);
    if (targets.size === 0) return;

    for (const gameType of gameTypes) {
      const bucket = mappings.get(gameType) ?? new Set<string>();
      for (const target of targets) {
        bucket.add(target);
      }
      mappings.set(gameType, bucket);
    }
  });

  return { screens, mappings };
}

async function parseRegistryObject(pagePath: string, importLocalName: string): Promise<Record<string, any> | null> {
  const bindings = parseImportBindings(pagePath);
  const binding = bindings.find((entry) => entry.local === importLocalName && entry.resolved);
  if (!binding?.resolved) return null;
  const mod = await importModule(binding.resolved);
  const value = mod[binding.imported];
  return value && typeof value === "object" ? value : null;
}

function parseEngineSupportedKeys(filePath: string): Set<string> {
  const sf = sourceFile(filePath);
  const keys = new Set<string>();
  visit(sf, (node) => {
    if (ts.isCaseClause(node) && node.expression && ts.isStringLiteral(node.expression)) {
      keys.add(node.expression.text);
    }
  });
  return keys;
}

async function auditLearnRoutes(subjects: SubjectDef[]) {
  for (const subject of subjects) {
    for (const grade of subject.grades) {
      const astroRoute = subject.id === "informatika" && grade <= 4
        ? `/codekids/${grade}`
        : `${subject.astroRoute}/${grade}`;
      const testRoute = subject.id === "informatika" && grade <= 4
        ? "/codekidstest?grade=" + grade
        : `${subject.testRoute}?grade=${grade}`;

      if (!resolveAppPage(astroRoute)) {
        addFailure(
          "Learn Routes",
          `${subject.id} grade ${grade}: missing Astro destination ${astroRoute}`,
        );
      }

      if (!resolveAppPage(testRoute)) {
        addFailure(
          "Learn Routes",
          `${subject.id} grade ${grade}: missing Test destination ${testRoute}`,
        );
      }
    }
  }
}

async function auditAstroDispatch(subjects: SubjectDef[], m2Keys: Set<string>, m3Keys: Set<string>) {
  const astroSubjects = subjects.filter((subject) => subject.astroRoute.startsWith("/astro"));
  const seenPages = new Set<string>();

  for (const subject of astroSubjects) {
    for (const grade of subject.grades) {
      const route = subject.id === "informatika" && grade <= 4
        ? `/codekids/${grade}`
        : `${subject.astroRoute}/${grade}`;
      const pagePath = resolveAppPage(route);
      if (!pagePath || seenPages.has(pagePath)) continue;
      seenPages.add(pagePath);

      const imports = parseImportBindings(pagePath);
      const islandImports = imports.filter((entry) => entry.imported.includes("ISLANDS") && entry.resolved);
      if (islandImports.length === 0) {
        continue;
      }

      const { screens: dispatchTargets, mappings: sharedDispatchMappings } = parseSharedDispatchMappings(pagePath);
      const m2RegistryImport = imports.find((entry) => entry.imported.endsWith("_M2_POOLS"));
      const m3RegistryImport = imports.find((entry) => entry.imported.endsWith("_M3_POOLS"));
      const m2Pools = m2RegistryImport ? await parseRegistryObject(pagePath, m2RegistryImport.local) : null;
      const m3Pools = m3RegistryImport ? await parseRegistryObject(pagePath, m3RegistryImport.local) : null;
      const pageIssues = new Map<string, { summary: string; missions: string[] }>();

      const addPageIssue = (issueKey: string, summary: string, mission: MissionRecord) => {
        const bucket = pageIssues.get(issueKey) ?? { summary, missions: [] };
        bucket.missions.push(`${mission.islandId}/${mission.missionId}`);
        pageIssues.set(issueKey, bucket);
      };

      const missionMap = new Map<string, MissionRecord>();
      for (const islandImport of islandImports) {
        const mod = await importModule(islandImport.resolved!);
        const islandValue = mod[islandImport.imported];
        for (const mission of collectMissionsFromIslands(islandValue)) {
          missionMap.set(`${mission.islandId}:${mission.missionId}`, mission);
        }
      }

      for (const mission of missionMap.values()) {
        if (mission.gameType === "m2") {
          if (!dispatchTargets.has("m2")) {
            addPageIssue("missing-screen:m2", "missions use gameType m2 but the page never renders screen m2", mission);
            continue;
          }
          if (!mission.gameKey) {
            addPageIssue("missing-game-key:m2", "m2 missions are missing gameKey", mission);
            continue;
          }
          if (!m2Pools || !(mission.gameKey in m2Pools)) {
            addPageIssue(
              `missing-registry:m2:${mission.gameKey}`,
              `m2 gameKey ${mission.gameKey} is missing from the runtime pool registry`,
              mission,
            );
            continue;
          }
          if (!m2Keys.has(mission.gameKey)) {
            addPageIssue(
              `missing-engine:m2:${mission.gameKey}`,
              `m2 gameKey ${mission.gameKey} is not handled by components/astro-games/M2Engine.tsx`,
              mission,
            );
          }
          continue;
        }

        if (mission.gameType === "m3") {
          if (!dispatchTargets.has("m3")) {
            addPageIssue("missing-screen:m3", "missions use gameType m3 but the page never renders screen m3", mission);
            continue;
          }
          if (!mission.gameKey) {
            addPageIssue("missing-game-key:m3", "m3 missions are missing gameKey", mission);
            continue;
          }
          if (!m3Pools || !(mission.gameKey in m3Pools)) {
            addPageIssue(
              `missing-registry:m3:${mission.gameKey}`,
              `m3 gameKey ${mission.gameKey} is missing from the runtime pool registry`,
              mission,
            );
            continue;
          }
          if (!m3Keys.has(mission.gameKey)) {
            addPageIssue(
              `missing-engine:m3:${mission.gameKey}`,
              `m3 gameKey ${mission.gameKey} is not handled by components/astro-games/M3Engine.tsx`,
              mission,
            );
          }
          continue;
        }

        if (dispatchTargets.has(mission.gameType)) {
          continue;
        }

        const sharedTargets = sharedDispatchMappings.get(mission.gameType);
        if (sharedTargets && [...sharedTargets].some((target) => dispatchTargets.has(target))) {
          continue;
        }

        if (!dispatchTargets.has(mission.gameType)) {
          addPageIssue(
            `missing-screen:${mission.gameType}`,
            `gameType ${mission.gameType} has no real runtime screen mapping`,
            mission,
          );
        }
      }

      for (const { summary, missions } of pageIssues.values()) {
        addFailure(
          "Astro Dispatch",
          `${path.relative(repoRoot, pagePath).replaceAll("\\", "/")}: ${summary} (${missions.join(", ")})`,
        );
      }
    }
  }
}

function auditExplorerDefs() {
  const mathConfigDir = path.join(libRoot, "mathConfigs");
  const files = fs.readdirSync(mathConfigDir)
    .filter((name) => name.endsWith(".ts") || name.endsWith(".tsx"))
    .map((name) => path.join(mathConfigDir, name));

  for (const filePath of files) {
    let text = readText(filePath);
    // These two early G1 placeholders are not imported by the runtime. The live
    // components use COUNTINGEXPLORER_DEF and ADDSUBEXPLORER_DEF later in the file.
    if (path.basename(filePath) === "g1Configs.tsx") {
      text = text
        .replace(/export const G1_COUNTING_DEF:[\s\S]*?\n};/, "")
        .replace(/export const G1_ADDSUB_DEF:[\s\S]*?\n};/, "");
    }
    if (!/topics:\s*\[\s*\]\s*,\s*rounds:\s*\[\s*\]/s.test(text) && !/rounds:\s*\[\s*\]\s*,\s*topics:\s*\[\s*\]/s.test(text)) {
      continue;
    }
    addFailure(
      "ExplorerDefs",
      `${path.relative(repoRoot, filePath).replaceAll("\\", "/")}: contains ExplorerDef stubs with empty topics and rounds`,
    );
  }
}

function parseConfigObject(pagePath: string): ts.ObjectLiteralExpression | null {
  const sf = sourceFile(pagePath);
  let found: ts.ObjectLiteralExpression | null = null;
  visit(sf, (node) => {
    if (found || !ts.isObjectLiteralExpression(node)) return;
    if (getProperty(node, "gameId") && getProperty(node, "labels")) {
      found = node;
    }
  });
  return found;
}

async function resolveImportedValue(pagePath: string, localName: string): Promise<any> {
  const binding = parseImportBindings(pagePath).find((entry) => entry.local === localName && entry.resolved);
  if (!binding?.resolved) {
    throw new Error(`Missing import for ${localName} in ${path.relative(repoRoot, pagePath)}`);
  }
  const mod = await importModule(binding.resolved);
  return mod[binding.imported];
}

async function resolveNodeValue(pagePath: string, node?: ts.Expression): Promise<any> {
  if (!node) return undefined;
  const unwrapped = unwrapExpression(node);
  if (ts.isIdentifier(unwrapped)) {
    return resolveImportedValue(pagePath, unwrapped.text);
  }
  if (ts.isCallExpression(unwrapped)) {
    const calleeName = identifierName(unwrapped.expression);
    if (!calleeName) return undefined;
    const fn = await resolveImportedValue(pagePath, calleeName);
    if (typeof fn !== "function") return undefined;
    const args = [];
    for (const arg of unwrapped.arguments) {
      args.push(await resolveNodeValue(pagePath, arg));
    }
    return fn(...args);
  }
  if (ts.isObjectLiteralExpression(unwrapped)) {
    const result: Record<string, any> = {};
    for (const prop of unwrapped.properties) {
      if (!ts.isPropertyAssignment(prop)) continue;
      const key = ts.isIdentifier(prop.name) || ts.isStringLiteral(prop.name) || ts.isNumericLiteral(prop.name)
        ? prop.name.text
        : undefined;
      if (!key) continue;
      result[key] = await resolveNodeValue(pagePath, prop.initializer);
    }
    return result;
  }
  return undefined;
}

function analyzeCurriculum(value: any): CurriculumStats {
  const stats: CurriculumStats = { themes: 0, subtopics: 0, questionCount: 0, generatorCount: 0 };
  if (!value) return stats;

  const visitValue = (node: any) => {
    if (Array.isArray(node)) {
      for (const item of node) visitValue(item);
      return;
    }
    if (!node || typeof node !== "object") {
      return;
    }

    if (Array.isArray(node.subtopics)) {
      stats.themes += 1;
      stats.subtopics += node.subtopics.length;
      for (const subtopic of node.subtopics) {
        if (Array.isArray(subtopic?.questions)) {
          stats.questionCount += subtopic.questions.length;
        }
        if (subtopic?.hasGenerator) {
          stats.generatorCount += 1;
        }
      }
    }

    for (const child of Object.values(node)) {
      if (child && typeof child === "object") {
        visitValue(child);
      }
    }
  };

  visitValue(value);
  return stats;
}

function collectSubtopicIds(value: any): string[] {
  const ids = new Set<string>();
  const visitValue = (node: any) => {
    if (Array.isArray(node)) {
      for (const item of node) visitValue(item);
      return;
    }
    if (!node || typeof node !== "object") {
      return;
    }
    if (typeof node.id === "string" && Array.isArray(node.questions)) {
      ids.add(node.id);
    }
    for (const child of Object.values(node)) {
      if (child && typeof child === "object") {
        visitValue(child);
      }
    }
  };
  visitValue(value);
  return [...ids];
}

function tryGenerateQuestions(fn: any, grade: number, subtopicIds: string[]): any[] {
  if (typeof fn !== "function") {
    return [];
  }

  const attempts = [
    () => fn(grade, subtopicIds, 10),
    () => fn(grade, subtopicIds),
    () => fn(grade, undefined, 10),
    () => fn(grade),
  ];

  for (const attempt of attempts) {
    try {
      const result = attempt();
      if (Array.isArray(result)) {
        return result;
      }
    } catch {
      // Try the next compatible call shape.
    }
  }

  return [];
}

function assertLocalizedField(pageLabel: string, pagePath: string, fieldName: string, node?: ts.Expression) {
  if (!node) {
    addFailure("Test Coverage", `${pageLabel}: missing config.${fieldName} in ${path.relative(repoRoot, pagePath).replaceAll("\\", "/")}`);
    return;
  }
  const unwrapped = unwrapExpression(node);
  if (ts.isStringLiteral(unwrapped) || ts.isNoSubstitutionTemplateLiteral(unwrapped)) {
    if (!unwrapped.text.trim()) {
      addFailure("Test Coverage", `${pageLabel}: config.${fieldName} is empty`);
    }
    return;
  }
  if (!ts.isObjectLiteralExpression(unwrapped)) {
    addFailure("Test Coverage", `${pageLabel}: config.${fieldName} is not a string or localized object`);
    return;
  }
  for (const locale of LOCALES) {
    const value = literalString(getProperty(unwrapped, locale));
    if (!value?.trim()) {
      addFailure("Test Coverage", `${pageLabel}: config.${fieldName}.${locale} is missing or empty`);
    }
  }
}

async function auditLanguageTestPage(pagePath: string) {
  const pageLabel = path.basename(path.dirname(pagePath));
  const config = parseConfigObject(pagePath);
  if (!config) {
    addFailure("Test Coverage", `${pageLabel}: could not locate LanguageTestEngine config object in ${path.relative(repoRoot, pagePath).replaceAll("\\", "/")}`);
    return;
  }

  const supportedGrades = numberArray(getProperty(config, "grades")) ?? DEFAULT_TEST_GRADES;
  if (supportedGrades.length === 0) {
    addFailure("Test Coverage", `${pageLabel}: supported grades are empty`);
  }

  const countriesNode = arrayLiteralValue(getProperty(config, "countries"));
  const countries = (countriesNode?.elements ?? [])
    .map((element) => objectLiteralValue(element as ts.Expression))
    .filter(Boolean)
    .map((objectNode) => literalString(getProperty(objectNode!, "code")))
    .filter((code): code is string => Boolean(code));

  const expectedCountries = FIXED_COUNTRY_SETS[pageLabel];
  if (expectedCountries) {
    const missing = expectedCountries.filter((code) => !countries.includes(code));
    const unexpected = countries.filter((code) => !expectedCountries.includes(code));
    if (missing.length || unexpected.length) {
      addFailure(
        "Test Coverage",
        `${pageLabel}: country set mismatch, expected ${expectedCountries.join(", ")}, got ${countries.join(", ") || "<none>"}`,
      );
    }
  }

  assertLocalizedField(pageLabel, pagePath, "title", getProperty(config, "title"));

  const labelsNode = objectLiteralValue(getProperty(config, "labels"));
  if (!labelsNode) {
    addFailure("Test Coverage", `${pageLabel}: config.labels is missing`);
  } else {
    for (const labelName of REQUIRED_TEST_LABELS) {
      assertLocalizedField(pageLabel, pagePath, `labels.${labelName}`, getProperty(labelsNode, labelName));
    }
  }

  const curriculumValue = await resolveNodeValue(pagePath, getProperty(config, "curriculum"));
  const getQuestions = await resolveNodeValue(pagePath, getProperty(config, "getQuestions"));
  if (!curriculumValue) {
    addFailure("Test Coverage", `${pageLabel}: curriculum could not be resolved`);
    return;
  }

  for (const grade of supportedGrades) {
    const perGradeValue = curriculumValue?.[grade] ?? curriculumValue?.[String(grade)] ?? curriculumValue;
    const stats = analyzeCurriculum(perGradeValue);
    if (stats.themes === 0 || stats.subtopics === 0) {
      addFailure("Test Coverage", `${pageLabel}: grade ${grade} has no curriculum themes/subtopics`);
      continue;
    }
    if (stats.questionCount === 0 && stats.generatorCount === 0) {
      const generatedQuestions = tryGenerateQuestions(getQuestions, grade, collectSubtopicIds(perGradeValue));
      if (generatedQuestions.length === 0) {
        addFailure("Test Coverage", `${pageLabel}: grade ${grade} has no questions and no generator-backed subtopics`);
      }
    }
  }
}

async function auditMathTestPage() {
  const pagePath = path.join(appRoot, "mathtest", "page.tsx");
  if (!fs.existsSync(pagePath)) {
    addFailure("Test Coverage", "mathtest: app/mathtest/page.tsx is missing");
    return;
  }

  const math = await importModule(path.join(libRoot, "mathCurriculum.ts"));
  const countryCodes = ["US", "DE", "HU", "RO"];
  for (const grade of DEFAULT_TEST_GRADES) {
    for (const countryCode of countryCodes) {
      try {
        const result = math.generateTestWithMeta(grade, undefined, countryCode);
        const questions = Array.isArray(result?.questions) ? result.questions : [];
        if (questions.length === 0) {
          addFailure("Test Coverage", `mathtest: grade ${grade} generated no questions for ${countryCode}`);
        }
      } catch (error) {
        addFailure("Test Coverage", `mathtest: grade ${grade} failed to generate questions for ${countryCode}: ${(error as Error).message}`);
      }
    }
  }
}

async function auditTests(subjects: SubjectDef[]) {
  const baseTestRoutes = new Set(subjects.map((subject) => subject.testRoute.replace(/^\/+/, "")));
  for (const route of baseTestRoutes) {
    const pagePath = resolveAppPage(`/${route}`);
    if (!pagePath) {
      addFailure("Test Coverage", `${route}: base test page is missing`);
      continue;
    }
    if (route === "mathtest") {
      await auditMathTestPage();
      continue;
    }
    await auditLanguageTestPage(pagePath);
  }
}

function auditSharedEngineTimers() {
  const visibleTimerPatterns = [
    /import\s*{[^}]*\bClock\b[^}]*}\s*from\s*["']lucide-react["']/,
    /countdown/i,
    /\btimeLeft\b/,
    /\bremainingTime\b/,
    /\belapsedTime\b/,
    /\bsecondsLeft\b/,
    /\bminutesLeft\b/,
  ];

  for (const filePath of TIMER_ENGINE_FILES) {
    if (!fs.existsSync(filePath)) continue;
    const text = readText(filePath);
    const matched = visibleTimerPatterns.find((pattern) => pattern.test(text));
    if (matched) {
      addFailure(
        "Shared Engine Timers",
        `${path.relative(repoRoot, filePath).replaceAll("\\", "/")}: matched forbidden visible-timer pattern ${matched}`,
      );
    }
  }
}

function printSummary() {
  if (failures.size === 0) {
    console.log(`[PASS] ${scriptName}`);
    console.log("No Learn/Astro/Test audit failures found.");
    return;
  }

  console.error(`[FAIL] ${scriptName}`);
  let total = 0;
  for (const [group, items] of failures.entries()) {
    total += items.length;
    console.error(`\n[${group}] ${items.length}`);
    for (const item of items) {
      console.error(`- ${item}`);
    }
  }
  console.error(`\nTotal failures: ${total}`);
}

function muteConsole() {
  const original = {
    log: console.log,
    info: console.info,
    warn: console.warn,
  };
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  return () => {
    console.log = original.log;
    console.info = original.info;
    console.warn = original.warn;
  };
}

async function main() {
  const subjects = parseSubjectPicker();
  const m2Keys = parseEngineSupportedKeys(path.join(componentsRoot, "astro-games", "M2Engine.tsx"));
  const m3Keys = parseEngineSupportedKeys(path.join(componentsRoot, "astro-games", "M3Engine.tsx"));

  const restoreConsole = muteConsole();
  try {
    await auditLearnRoutes(subjects);
    await auditAstroDispatch(subjects, m2Keys, m3Keys);
    auditExplorerDefs();
    await auditTests(subjects);
    auditSharedEngineTimers();
  } finally {
    restoreConsole();
  }
  printSummary();

  if (failures.size > 0) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(`[FAIL] ${scriptName}`);
  console.error(error instanceof Error ? error.stack ?? error.message : String(error));
  process.exitCode = 1;
});
