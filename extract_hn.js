const fs = require('fs');

const files = [
  "lib/visualLab/data/poiExtraHondurasCitiesV2.ts",
  "lib/visualLab/data/poiExtraHondurasEconomicV2.ts",
  "lib/visualLab/data/poiExtraHondurasHistoryV2.ts",
  "lib/visualLab/data/poiExtraHondurasLandmarksV2.ts",
  "lib/visualLab/data/poiExtraHondurasLifeV2.ts",
  "lib/visualLab/data/poiExtraHondurasNatureV2.ts",
  "lib/visualLab/data/poiExtraHondurasReliefV2.ts"
];

let results = [];

files.forEach(f => {
  if (!fs.existsSync(f)) {
    console.log(`File not found: ${f}`);
    return;
  }
  const content = fs.readFileSync(f, 'utf8');
  
  // Quick and dirty regex to extract POI objects
  // We'll look for `id: "..."` and `name: { ... }`
  const idRegex = /id:\s*"([^"]+)"/g;
  let match;
  while ((match = idRegex.exec(content)) !== null) {
    const id = match[1];
    
    // Check if descriptionAdvanced exists and has de
    const startIndex = match.index;
    const nextIdIndex = content.indexOf('id: "', startIndex + 10);
    const poiBlock = content.substring(startIndex, nextIdIndex !== -1 ? nextIdIndex : content.length);
    
    let needsDe = false;
    if (!poiBlock.includes('descriptionAdvanced:')) {
      needsDe = true;
    } else {
      const descAdvMatch = poiBlock.match(/descriptionAdvanced:\s*\{([^}]*)\}/);
      if (descAdvMatch) {
        if (!descAdvMatch[1].includes('de:')) {
          needsDe = true;
        } else {
           const deMatch = descAdvMatch[1].match(/de:\s*"([^"]*)"/);
           if (!deMatch || deMatch[1].trim() === "") {
             needsDe = true;
           }
        }
      } else {
        needsDe = true;
      }
    }
    
    if (needsDe) {
      const nameMatch = poiBlock.match(/name:\s*\{\s*[^}]*en:\s*"([^"]+)"/);
      const name = nameMatch ? nameMatch[1] : id;
      results.push({ id, name });
    }
  }
});

console.log(JSON.stringify(results, null, 2));
