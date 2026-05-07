const fs = require('fs');
const path = require('path');

const files = [
  'lib/visualLab/data/poiExtraAlgeriaCitiesV2.ts',
  'lib/visualLab/data/poiExtraAlgeriaEconomicV2.ts',
  'lib/visualLab/data/poiExtraAlgeriaHistoryV2.ts',
  'lib/visualLab/data/poiExtraAlgeriaLandmarksV2.ts',
  'lib/visualLab/data/poiExtraAlgeriaLifeV2.ts',
  'lib/visualLab/data/poiExtraAlgeriaNatureV2.ts',
  'lib/visualLab/data/poiExtraAlgeriaReliefV2.ts'
];

const basePath = '/mnt/c/Users/User/plizio-repo/';

files.forEach(file => {
  const filePath = path.join(basePath, file);
  if (!fs.existsSync(filePath)) {
    console.log(`${file}: File not found`);
    return;
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Split by "id:" to get sections for each POI
  const parts = content.split(/id:\s*"/);
  // The first part is everything before the first "id:"
  
  const results = [];
  
  for (let i = 1; i < parts.length; i++) {
    const part = parts[i];
    const idMatch = part.match(/^([^"]+)"/);
    if (!idMatch) continue;
    const poiId = idMatch[1];
    
    // Now we want to look for descriptionAdvanced in THIS POI.
    // We should limit our search until the next "id:" would start, 
    // but we already split by that. 
    // However, the "part" contains everything until the next "id:".
    
    const descAdvMatch = part.match(/descriptionAdvanced:\s*\{([\s\S]*?)\}/);
    
    if (!descAdvMatch) {
      results.push(poiId);
    } else {
      const innerContent = descAdvMatch[1];
      const huMatch = innerContent.match(/hu:\s*"([^"]*)"/);
      if (!huMatch || huMatch[1].trim() === "") {
        results.push(poiId);
      }
    }
  }
  
  console.log(`FILE: ${file}`);
  if (results.length > 0) {
    results.forEach(id => console.log(id));
  } else {
    console.log("None");
  }
  console.log("");
});
