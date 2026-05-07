const fs = require('fs');

const files = [
  "lib/visualLab/data/poiExtraNigeriaCitiesV2.ts",
  "lib/visualLab/data/poiExtraNigeriaEconomicV2.ts",
  "lib/visualLab/data/poiExtraNigeriaHistoryV2.ts",
  "lib/visualLab/data/poiExtraNigeriaLandmarksV2.ts",
  "lib/visualLab/data/poiExtraNigeriaLifeV2.ts",
  "lib/visualLab/data/poiExtraNigeriaNatureV2.ts",
  "lib/visualLab/data/poiExtraNigeriaReliefV2.ts"
];

const missingPois = [];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf-8');
  const regex = /id:\s*"([^"]+)"([\s\S]*?)(?=id:\s*"|\];)/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const id = match[1];
    const block = match[2];
    
    let hasDescAdvEn = false;
    const descAdvMatch = block.match(/descriptionAdvanced:\s*\{([\s\S]*?)\}/);
    if (descAdvMatch) {
      const enMatch = descAdvMatch[1].match(/en:\s*"(.*?)"/);
      if (enMatch && enMatch[1].trim() !== '') {
        hasDescAdvEn = true;
      }
    }
    
    if (!hasDescAdvEn) {
      // get name.en
      const nameMatch = block.match(/name:\s*\{[^}]*en:\s*"([^"]+)"/);
      const nameEn = nameMatch ? nameMatch[1] : id;
      // get description.en
      const descMatch = block.match(/description:\s*\{[^}]*en:\s*"([^"]+)"/);
      const descEn = descMatch ? descMatch[1] : "";
      
      missingPois.push({ id, name: nameEn, desc: descEn });
    }
  }
});

fs.writeFileSync('missing_pois.json', JSON.stringify(missingPois, null, 2));
console.log(`Found ${missingPois.length} missing POIs.`);
