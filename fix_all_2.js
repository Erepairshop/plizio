const fs = require('fs');
const cp = require('child_process');

const files = [
"lib/visualLab/data/poiExtraBotswanaNatureV2.ts",
"lib/visualLab/data/poiExtraBotswanaReliefV2.ts",
"lib/visualLab/data/poiExtraBurkinafasoLifeV2.ts",
"lib/visualLab/data/poiExtraCameroonLifeV2.ts",
"lib/visualLab/data/poiExtraCameroonNatureV2.ts",
"lib/visualLab/data/poiExtraColombiaCitiesV2.ts",
"lib/visualLab/data/poiExtraColombiaEconomicV2.ts",
"lib/visualLab/data/poiExtraColombiaHistoryV2.ts",
"lib/visualLab/data/poiExtraColombiaLandmarksV2.ts",
"lib/visualLab/data/poiExtraColombiaLifeV2.ts",
"lib/visualLab/data/poiExtraColombiaNatureV2.ts",
"lib/visualLab/data/poiExtraColombiaReliefV2.ts",
"lib/visualLab/data/poiExtraDrcongoReliefV2.ts",
"lib/visualLab/data/poiExtraFrenchguianaHistoryV2.ts",
"lib/visualLab/data/poiExtraFrenchguianaLandmarksV2.ts",
"lib/visualLab/data/poiExtraFrenchguianaLifeV2.ts",
"lib/visualLab/data/poiExtraFrenchguianaNatureV2.ts",
"lib/visualLab/data/poiExtraFrenchguianaReliefV2.ts",
"lib/visualLab/data/poiExtraGuyanaHistoryV2.ts",
"lib/visualLab/data/poiExtraGuyanaLandmarksV2.ts",
"lib/visualLab/data/poiExtraGuyanaNatureV2.ts",
"lib/visualLab/data/poiExtraIvorycoastNatureV2.ts",
"lib/visualLab/data/poiExtraIvorycoastReliefV2.ts",
"lib/visualLab/data/poiExtraLibyaLifeV2.ts",
"lib/visualLab/data/poiExtraLibyaReliefV2.ts",
"lib/visualLab/data/poiExtraMoroccoCitiesV2.ts",
"lib/visualLab/data/poiExtraMoroccoLifeV2.ts",
"lib/visualLab/data/poiExtraMozambiqueNatureV2.ts",
"lib/visualLab/data/poiExtraNigeriaReliefV2.ts",
"lib/visualLab/data/poiExtraParaguayEconomicV2.ts",
"lib/visualLab/data/poiExtraParaguayLifeV2.ts",
"lib/visualLab/data/poiExtraRwandaNatureV2.ts",
"lib/visualLab/data/poiExtraSenegalLifeV2.ts",
"lib/visualLab/data/poiExtraSomaliaCitiesV2.ts",
"lib/visualLab/data/poiExtraSomaliaNatureV2.ts",
"lib/visualLab/data/poiExtraSouthafricaReliefV2.ts",
"lib/visualLab/data/poiExtraTanzaniaLifeV2.ts",
"lib/visualLab/data/poiExtraTanzaniaNatureV2.ts",
"lib/visualLab/data/poiExtraTanzaniaReliefV2.ts",
"lib/visualLab/data/poiExtraUgandaNatureV2.ts",
"lib/visualLab/data/poiExtraUruguayCitiesV2.ts",
"lib/visualLab/data/poiExtraUruguayEconomicV2.ts",
"lib/visualLab/data/poiExtraUruguayHistoryV2.ts",
"lib/visualLab/data/poiExtraUruguayLandmarksV2.ts",
"lib/visualLab/data/poiExtraUruguayLifeV2.ts",
"lib/visualLab/data/poiExtraUruguayNatureV2.ts",
"lib/visualLab/data/poiExtraUruguayReliefV2.ts",
"lib/visualLab/data/poiExtraZambiaNatureV2.ts",
"lib/visualLab/data/poiExtraZimbabweLifeV2.ts"
];

for (const f of files) {
  if (!fs.existsSync(f)) continue;
  let content = fs.readFileSync(f, 'utf8');

  // Fix missing closing brace for `en:` property inside description, name, etc.
  // When it matches `en: "something" ,` or `en: ["..."] ,` and next line is `facts:` or `descriptionAdvanced:` etc.
  // Wait, a simpler way: if we have `en: "..." ,` and it's missing a closing brace, we replace it with `en: "..." },`
  // Actually, we can just replace `(en:\s*"[^"]*"\s*),(\s*(facts|factsAdvanced|descriptionAdvanced|faq|description|name):)`
  // Wait! A `"` might be escaped, or it could be a single quote.
  // Safer to just regex: `(en:\s*".*?[^\\]")\s*,(\s*(?:facts|factsAdvanced|descriptionAdvanced|faq|description|name|type|parent|coords|id):)`
  
  content = content.replace(/(en:\s*".*?[^\\]"|en:\s*\[[\s\S]*?\])\s*,(\s*(?:facts|factsAdvanced|descriptionAdvanced|faq|description|name|type|parent|coords|id):)/g, '$1 },$2');

  // What about `en: "..." \n    }` being missing?
  // Let's also check if there's an `en:` without closing brace.
  content = content.replace(/(en:\s*".*?[^\\]"|en:\s*\[[\s\S]*?\])\s*,(\s*\n\s*(?:facts|factsAdvanced|descriptionAdvanced|faq|description|name|type|parent|coords|id):)/g, '$1 },$2');

  // Sometimes it's `description: { de: "...", hu: "...", ro: "...", en: "..."\n    }` but missing `}`? The previous fix handled missing `}`, what if it was just `,` instead of `},`?
  // Let's do a generic one: replace `,` with `},` if it's immediately after `en:` value and before another main key.
  
  fs.writeFileSync(f, content);
}

const args = ['tsc', '--noEmit', ...files];
const result = cp.spawnSync('npx', args, { encoding: 'utf8' });
console.log('--- TSC STDOUT ---');
console.log(result.stdout);
console.log('--- TSC STDERR ---');
console.log(result.stderr);
if (result.error) {
  console.log('Error:', result.error);
}
