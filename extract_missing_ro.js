const fs = require('fs');
const files = [
    "lib/visualLab/data/poiExtraNicaraguaCitiesV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaEconomicV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaHistoryV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaLifeV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaNatureV2.ts",
    "lib/visualLab/data/poiExtraNicaraguaReliefV2.ts"
];

let allMissing = [];

for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8');
    // Basic regex to find POI objects
    const poiRegex = /{[\s\S]*?id:\s*['"]([^'"]+)['"][\s\S]*?name:\s*{([^}]+)}[\s\S]*?}/g;
    
    let match;
    while ((match = poiRegex.exec(content)) !== null) {
        const fullMatch = match[0];
        const id = match[1];
        const nameBlock = match[2];
        
        let enName = '';
        const enMatch = nameBlock.match(/en:\s*['"]([^'"]+)['"]/);
        if (enMatch) {
            enName = enMatch[1];
        }
        
        // Check if descriptionAdvanced exists and has ro
        const descAdvMatch = fullMatch.match(/descriptionAdvanced:\s*{([^}]+)}/);
        let hasRoDesc = false;
        if (descAdvMatch) {
            if (/ro:\s*['"]/.test(descAdvMatch[1])) {
                hasRoDesc = true;
            }
        }
        
        if (!hasRoDesc) {
            allMissing.push({ id, file, name: enName });
        }
    }
}

console.log(JSON.stringify(allMissing, null, 2));
