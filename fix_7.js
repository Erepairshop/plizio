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

  // Fix `}\n    descriptionAdvanced:` inside the array (orphan property)
  // We just remove the `}` that prematurely closed the POI object.
  content = content.replace(/\n\s*\}\s*,\s*\n\s*(descriptionAdvanced|factsAdvanced):/g, ',\n    $1:');

  // Fix Colombia EOF missing `}` for POI object
  // If it ends with `en: [...] ,\n\n];` or `en: [...],\n];`
  content = content.replace(/en:\s*(\[[\s\S]*?\]|"[^"]*")\s*,\s*\n\s*\];/g, 'en: $1\n    }\n  }\n];');
  
  // What if it's already `en: [...] }` but missing POI end?
  // e.g. `en: [...] }\n];`
  content = content.replace(/en:\s*(\[[\s\S]*?\]|"[^"]*")\s*\}\s*\n\s*\];/g, 'en: $1\n    }\n  }\n];');

  // Missing comma between objects e.g. `}\n  description:`
  content = content.replace(/\}\s*\n\s*(description|facts|name|descriptionAdvanced|factsAdvanced):/g, '},\n    $1:');

  // Fix French Guiana History missing `descriptionAdvanced` close:
  // `, factsAdvanced: { de: ` -> `}, factsAdvanced: { de: `
  content = content.replace(/",\s*factsAdvanced:\s*\{/g, '",\n      ro: "",\n      en: ""\n    },\n    factsAdvanced: {');
  
  // Paraguay Life `error TS1128: Declaration or statement expected.`
  // This happens when there is an extra `}` or missing `{`.
  // Wait, let's fix missing comma before `description`
  // `    }\n    description:` -> `    },\n    description:`
  content = content.replace(/\}\s*\n\s*description:/g, '},\n    description:');

  // Paraguay missing `,`
  // `en: "..."\n    facts:` -> `en: "..." },\n    facts:`
  // But we did this. What if it's `en: [...]\n    facts:` -> `en: [...] },\n    facts:`
  content = content.replace(/(en:\s*(?:\[[\s\S]*?\]|"[^"]*"))\s*\n\s*facts:/g, '$1\n    },\n    facts:');

  // Somalia `error TS1136: Property assignment expected.`
  // `en: [...]\n {\n id:` -> `en: [...] }\n },\n {\n id:`
  content = content.replace(/(en:\s*(?:\[[\s\S]*?\]|"[^"]*"))\s*\n\s*\{\s*\n\s*id:/g, '$1\n    }\n  },\n  {\n    id:');

  fs.writeFileSync(f, content);
}

const args = ['tsc', '--noEmit', ...files];
const result = cp.spawnSync('npx', args, { encoding: 'utf8' });
console.log('--- TSC STDOUT ---');
console.log(result.stdout);
if (result.error) {
  console.log('Error:', result.error);
}
