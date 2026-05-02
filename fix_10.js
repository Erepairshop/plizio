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

  // Guyana files missing array close at EOF
  if (content.endsWith('  },') || content.endsWith('  },\n') || content.endsWith('  },\r\n')) {
    content = content.replace(/\s*\}\s*,\s*$/, '\n  }\n];\n');
  }

  // IvorycoastNatureV2.ts line 410 `];\n  {`
  content = content.replace(/\];\s*\{\s*\n\s*id:/g, '},\n  {\n    id:');

  // MoroccoCitiesV2.ts literal `\n` characters: `\\n  \{` -> `\n  {`
  // Actually, replace literal `\\n` followed by any space and `{` with a real newline.
  content = content.replace(/\\n\s*\{/g, '\n  {');
  content = content.replace(/\\n/g, '\n');

  // Paraguay and Uruguay `en: [...], \n  ,\n  facts:` -> `en: [...] \n  },\n  facts:`
  // And `en: [...], \n  ,\n  description:` -> `en: [...] \n  },\n  description:`
  // Or just `,\n  ,\n` -> `\n  },\n`
  content = content.replace(/(\]\s*|"[^"]*"\s*|'[^']*'\s*),\s*\n\s*,\s*\n\s*(facts|description|descriptionAdvanced|factsAdvanced):/g, '$1\n    },\n    $2:');

  // Fix ParaguayEconomicV2 missing `}` before `description:`
  // e.g. `en: [...]\n    }\n    description:`
  content = content.replace(/\}\s*\n\s*description:\s*\n\s*\{/g, '},\n    description: {\n');
  
  // Paraguay Economic: `en: [...]\n    }\n    description:\n  {\n    id: "..."`
  content = content.replace(/\}\s*\n\s*description:\s*\n\s*\{\s*\n\s*id:/g, '}\n  },\n  {\n    id:');

  // General check for Paraguay `en: [...] \n }, \n description:\n {`
  content = content.replace(/(\s*en:\s*\[[\s\S]*?\])\s*\n\s*\}\s*\n\s*description:\s*\n\s*\{\s*\n\s*id:/g, '$1\n    }\n  },\n  {\n    id:');

  // Remove duplicate commas that might exist: `},,` -> `},`
  content = content.replace(/\}\s*,\s*,/g, '},');
  content = content.replace(/\}\s*\n\s*,\s*\n\s*(descriptionAdvanced|factsAdvanced|faq|facts|description|name):/g, '},\n    $1:');

  // Any remaining orphan `,` instead of `},` for closing inner objects
  // `en: ['...'],\n    facts:`
  content = content.replace(/(en:\s*(?:\[[\s\S]*?\]|'[^']*'|"[^"]*"))\s*,\s*\n\s*(descriptionAdvanced|factsAdvanced|faq|facts|description|name):/g, '$1\n    },\n    $2:');

  fs.writeFileSync(f, content);
}

const args = ['tsc', '--noEmit', ...files];
const result = cp.spawnSync('npx', args, { encoding: 'utf8' });
console.log('--- TSC STDOUT ---');
console.log(result.stdout);
if (result.error) {
  console.log('Error:', result.error);
}
