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
  
  // A simple regex approach to find POI IDs and their descriptionAdvanced.hu
  // Since we are looking for MISSING or EMPTY, we can try to parse the array structure.
  // However, since it's TS, I'll use a more robust regex or a simple parser if needed.
  // For now, let's try to extract objects.
  
  // Objects start with { and end with }, but they can be nested.
  // We can look for id: "..." and then check if descriptionAdvanced: { ... hu: "..." } exists and is not empty.
  
  // Since the files might be large, I'll use a simple state machine or regex to find the IDs and check the property.
  
  const pois = [];
  // Match each object in the array
  const poiMatches = content.matchAll(/\{[\s\S]*?id:\s*"([^"]+)"[\s\S]*?\}/g);
  
  const results = [];
  
  for (const match of poiMatches) {
    const poiContent = match[0];
    const poiId = match[1];
    
    const descAdvMatch = poiContent.match(/descriptionAdvanced:\s*\{([\s\S]*?)\}/);
    if (!descAdvMatch) {
      results.push(poiId);
      continue;
    }
    
    const innerContent = descAdvMatch[1];
    const huMatch = innerContent.match(/hu:\s*"([^"]*)"/);
    
    if (!huMatch || huMatch[1].trim() === "") {
      results.push(poiId);
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
