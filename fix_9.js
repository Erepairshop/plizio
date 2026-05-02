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

  // Fix `coords: [...] \n },`
  content = content.replace(/(coords:\s*\[[^\]]+\])\s*\n\s*\},/g, '$1,');
  // Or without newline
  content = content.replace(/(coords:\s*\[[^\]]+\])\s*\},/g, '$1,');

  // Fix `parent: "..." \n },`
  content = content.replace(/(parent:\s*"[^"]+")\s*\n\s*\},/g, '$1,');
  content = content.replace(/(parent:\s*"[^"]+")\s*\},/g, '$1,');

  // Fix `type: "..." \n },`
  content = content.replace(/(type:\s*"[^"]+")\s*\n\s*\},/g, '$1,');
  content = content.replace(/(type:\s*"[^"]+")\s*\},/g, '$1,');

  // Fix `id: "..." \n },`
  content = content.replace(/(id:\s*"[^"]+")\s*\n\s*\},/g, '$1,');
  content = content.replace(/(id:\s*"[^"]+")\s*\},/g, '$1,');

  // Also in Colombia/Uruguay/Paraguay there are orphan `descriptionAdvanced` or `factsAdvanced` blocks or double keys.
  // E.g. `descriptionAdvanced: { ... }, \n factsAdvanced: { ... }, \n ];`
  // Wait, if an array item ends with `factsAdvanced: { ... },` and the next is `];`, it's an error.
  content = content.replace(/(\s*(?:factsAdvanced|facts|descriptionAdvanced):\s*\{[\s\S]*?\}\s*),(\s*\n\s*\];)/g, '$1\n  }$2');

  // Missing commas before `descriptionAdvanced` or `factsAdvanced`
  content = content.replace(/\}\s*\n\s*(descriptionAdvanced|factsAdvanced):/g, '},\n    $1:');

  // Any remaining orphan blocks like `  },\n    descriptionAdvanced:`
  // We need to merge them back into the object! So `  },\n    descriptionAdvanced:` -> `  ,\n    descriptionAdvanced:`
  // Oh wait, `},\n    descriptionAdvanced:` is valid if it's closing `facts: { ... }`.
  // BUT if it's `  },\n    descriptionAdvanced:` (two spaces indent vs four spaces), it means it was closing the POI!
  // POI objects are indented with `  {` and `  }`.
  // Inner objects are `    facts: {` and `    }`.
  // Let's replace `\n  \},\n    descriptionAdvanced:` with `,\n    descriptionAdvanced:`
  content = content.replace(/\n  \},\n    (descriptionAdvanced|factsAdvanced):/g, ',\n    $1:');

  fs.writeFileSync(f, content);
}

const args = ['tsc', '--noEmit', ...files];
const result = cp.spawnSync('npx', args, { encoding: 'utf8' });
console.log('--- TSC STDOUT ---');
console.log(result.stdout);
if (result.error) {
  console.log('Error:', result.error);
}
