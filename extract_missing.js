const fs = require('fs');

const files = [
    "lib/visualLab/data/poiExtraGuyanaCitiesV2.ts",
    "lib/visualLab/data/poiExtraGuyanaEconomicV2.ts",
    "lib/visualLab/data/poiExtraGuyanaHistoryV2.ts",
    "lib/visualLab/data/poiExtraGuyanaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraGuyanaLifeV2.ts",
    "lib/visualLab/data/poiExtraGuyanaNatureV2.ts",
    "lib/visualLab/data/poiExtraGuyanaReliefV2.ts"
];

let allMissing = [];

files.forEach(f => {
    if (!fs.existsSync(f)) {
        console.log(`File missing: ${f}`);
        return;
    }
    const content = fs.readFileSync(f, 'utf8');
    
    // Quick regex to find POI blocks
    // This might be tricky because of nested braces. Let's just use a simple approach:
    // search for id: "gy-..."
    
    let regex = /id:\s*"([^"]+)"[\s\S]*?name:\s*\{\s*[^}]*?en:\s*"([^"]+)"/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        let id = match[1];
        let name = match[2];
        
        // Check if descriptionAdvanced exists and has en
        let blockStart = match.index;
        let nextIdMatch = content.indexOf('id: "', blockStart + 10);
        if (nextIdMatch === -1) nextIdMatch = content.length;
        
        let block = content.substring(blockStart, nextIdMatch);
        
        if (!block.includes('descriptionAdvanced:') || !block.match(/descriptionAdvanced:\s*\{[^}]*en:\s*"([^"]+)"/)) {
            allMissing.push({id, name, file: f});
        }
    }
});

fs.writeFileSync('missing_guyana_en.json', JSON.stringify(allMissing, null, 2));
console.log(`Found ${allMissing.length} missing POIs.`);
