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

  // Fix missing `},` when I accidentally replaced it with `,`
  // e.g. `en: ["..."],\n    descriptionAdvanced:` -> `en: ["..."] },\n    descriptionAdvanced:`
  content = content.replace(/(en:\s*(?:\[[^\]]*\]|"[^"]*"))\s*,\s*(descriptionAdvanced|factsAdvanced|faq|facts|description|name):/g, '$1\n    },\n    $2:');

  // End of file `}\n];` instead of `}\n}\n];`
  // A POI object ends with `facts: { ... }` or `factsAdvanced: { ... }`.
  // The facts object ends with `en: [...] }`. Then the POI object must end with `}`.
  // If the file ends with `en: [...]\n    }\n];` it is missing one `}`.
  content = content.replace(/(\s*en:\s*(?:\[[^\]]*\]|"[^"]*")\s*\n\s*\})\s*\n\];/g, '$1\n  }\n];');
  
  // What if it ends with `en: [...] }\n  }\n];` already? The above regex requires `}\n];`, so it won't match if there are two `}`.
  
  // There are some leftover cases where `en: [...] }` has an extra comma at the end:
  // `en: [...] },\n];` -> should be `en: [...] }\n  }\n];`
  content = content.replace(/(\s*en:\s*(?:\[[^\]]*\]|"[^"]*")\s*\n\s*\})\s*,\s*\n\];/g, '$1\n  }\n];');

  fs.writeFileSync(f, content);
}

const args = ['tsc', '--noEmit', ...files];
const result = cp.spawnSync('npx', args, { encoding: 'utf8' });
console.log('--- TSC STDOUT ---');
console.log(result.stdout);
if (result.error) {
  console.log('Error:', result.error);
}
