const fs = require('fs');
const cp = require('child_process');
const path = require('path');

const files = [
  'lib/visualLab/data/poiExtraBotswanaNatureV2.ts',
  'lib/visualLab/data/poiExtraBotswanaReliefV2.ts',
  'lib/visualLab/data/poiExtraBurkinafasoLifeV2.ts',
  'lib/visualLab/data/poiExtraCameroonLifeV2.ts',
  'lib/visualLab/data/poiExtraCameroonNatureV2.ts',
  'lib/visualLab/data/poiExtraColombiaCitiesV2.ts',
  'lib/visualLab/data/poiExtraColombiaEconomicV2.ts',
  'lib/visualLab/data/poiExtraColombiaHistoryV2.ts',
  'lib/visualLab/data/poiExtraColombiaLandmarksV2.ts',
  'lib/visualLab/data/poiExtraColombiaLifeV2.ts',
  'lib/visualLab/data/poiExtraColombiaNatureV2.ts',
  'lib/visualLab/data/poiExtraColombiaReliefV2.ts',
  'lib/visualLab/data/poiExtraDrcongoReliefV2.ts',
  'lib/visualLab/data/poiExtraFrenchguianaHistoryV2.ts',
  'lib/visualLab/data/poiExtraFrenchguianaLandmarksV2.ts',
  'lib/visualLab/data/poiExtraFrenchguianaLifeV2.ts',
  'lib/visualLab/data/poiExtraFrenchguianaNatureV2.ts',
  'lib/visualLab/data/poiExtraFrenchguianaReliefV2.ts',
  'lib/visualLab/data/poiExtraGuyanaHistoryV2.ts',
  'lib/visualLab/data/poiExtraGuyanaLandmarksV2.ts',
  'lib/visualLab/data/poiExtraGuyanaNatureV2.ts',
  'lib/visualLab/data/poiExtraIvorycoastNatureV2.ts',
  'lib/visualLab/data/poiExtraIvorycoastReliefV2.ts',
  'lib/visualLab/data/poiExtraLibyaLifeV2.ts',
  'lib/visualLab/data/poiExtraLibyaReliefV2.ts',
  'lib/visualLab/data/poiExtraMoroccoCitiesV2.ts',
  'lib/visualLab/data/poiExtraMoroccoLifeV2.ts',
  'lib/visualLab/data/poiExtraMozambiqueNatureV2.ts',
  'lib/visualLab/data/poiExtraNigeriaReliefV2.ts',
  'lib/visualLab/data/poiExtraParaguayEconomicV2.ts',
  'lib/visualLab/data/poiExtraParaguayLifeV2.ts',
  'lib/visualLab/data/poiExtraRwandaNatureV2.ts',
  'lib/visualLab/data/poiExtraSenegalLifeV2.ts',
  'lib/visualLab/data/poiExtraSomaliaCitiesV2.ts',
  'lib/visualLab/data/poiExtraSomaliaNatureV2.ts',
  'lib/visualLab/data/poiExtraSouthafricaReliefV2.ts',
  'lib/visualLab/data/poiExtraTanzaniaLifeV2.ts',
  'lib/visualLab/data/poiExtraTanzaniaNatureV2.ts',
  'lib/visualLab/data/poiExtraTanzaniaReliefV2.ts',
  'lib/visualLab/data/poiExtraUgandaNatureV2.ts',
  'lib/visualLab/data/poiExtraUruguayCitiesV2.ts',
  'lib/visualLab/data/poiExtraUruguayEconomicV2.ts',
  'lib/visualLab/data/poiExtraUruguayHistoryV2.ts',
  'lib/visualLab/data/poiExtraUruguayLandmarksV2.ts',
  'lib/visualLab/data/poiExtraUruguayLifeV2.ts',
  'lib/visualLab/data/poiExtraUruguayNatureV2.ts',
  'lib/visualLab/data/poiExtraUruguayReliefV2.ts',
  'lib/visualLab/data/poiExtraZambiaNatureV2.ts',
  'lib/visualLab/data/poiExtraZimbabweLifeV2.ts'
];

function fixFile(file) {
  let content = fs.readFileSync(file, 'utf-8');

  // Fix 1: Orphan multiple keys like `ro: "", en: ""` inside descriptionAdvanced or factsAdvanced
  // e.g. en: "...", \n ro: "", \n en: "" -> remove the trailing empty ones
  content = content.replace(/,\s*ro:\s*(""|\[\]),\s*en:\s*(""|\[\])(?=\s*\})/g, '');
  content = content.replace(/,\s*en:\s*(""|\[\]),\s*ro:\s*(""|\[\])(?=\s*\})/g, '');
  content = content.replace(/ro:\s*(""|\[\]),\s*en:\s*(""|\[\])\s*\}/g, '}');
  
  // Fix duplicate keys in a single object manually (ro, en)
  content = content.replace(/ro:\s*"[^"]*",\s*ro:\s*(""|\[\])/g, 'ro: ""');
  
  // Actually, let's remove duplicate `ro: ""` if `ro: "..."` is already present
  // A regex to fix ", ro: "", en: """ after `en: "..."` has been defined.
  // We can just use a replacer function for any `{...}` to deduplicate keys.
  // Since objects can span multiple lines, let's just strip lines that are exactly `ro: ""` or `en: ""` if they are obviously duplicates or trailing before a brace.
  content = content.replace(/(en:\s*"[^"]*")\s*,\s*ro:\s*"",\s*en:\s*""/g, '$1');
  content = content.replace(/(en:\s*\[[^\]]*\])\s*,\s*ro:\s*\[\],\s*en:\s*\[\]/g, '$1');

  // Generic key deduplication is risky with regex. Let's run eslint --fix if we can, but it might fail on syntax.

  // Fix 2: Missing commas between objects
  // }\n {
  content = content.replace(/\}\s*\{/g, '},\n  {');
  content = content.replace(/\}\s*\n\s*\{/g, '},\n  {');

  // Fix 3: Extra ]; or } at the end
  // Replace anything after the first `];` at the end of the file
  let idx = content.lastIndexOf('];');
  if (idx !== -1) {
    content = content.substring(0, idx + 2) + '\n';
  }
  
  // If no `];` at the end, try to append it.
  if (content.indexOf('];') === -1) {
      if (content.trim().endsWith('}')) {
          content = content.trim() + '\n];\n';
      }
  }

  // Fix 4: Polluting text
  content = content.replace(/file_path: ".*?"/g, '');
  content = content.replace(/ergonomic_write_file=true/g, '');
  
  // Fix literal \n (escaped newline)
  content = content.replace(/\\n/g, ' ');

  // Fix unclosed string literals (basic heuristic: line ends with " without escaping, but it was started? hard to regex).
  
  fs.writeFileSync(file, content, 'utf-8');
}

for (const f of files) {
  try {
    if (fs.existsSync(f)) {
      fixFile(f);
    }
  } catch(e) {
    console.error('Error fixing', f, e);
  }
}

console.log('Fixed syntax superficially.');
