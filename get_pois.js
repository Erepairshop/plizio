const fs = require('fs');

const files = [
    "lib/visualLab/data/poiExtraJapanCitiesV2.ts",
    "lib/visualLab/data/poiExtraJapanEconomicV2.ts",
    "lib/visualLab/data/poiExtraJapanHistoryV2.ts",
    "lib/visualLab/data/poiExtraJapanLandmarksV2.ts",
    "lib/visualLab/data/poiExtraJapanLifeV2.ts",
    "lib/visualLab/data/poiExtraJapanNatureV2.ts",
    "lib/visualLab/data/poiExtraJapanReliefV2.ts"
];

let allMissing = [];

for (const file of files) {
    const content = fs.readFileSync(`/mnt/c/Users/User/plizio-repo/${file}`, 'utf-8');
    
    // Simple parsing by splitting on 'id: "'
    const parts = content.split('id: "');
    for (let i = 1; i < parts.length; i++) {
        const idMatch = parts[i].match(/^([^"]+)",/);
        if (!idMatch) continue;
        const id = idMatch[1];
        
        const blockStr = parts[i].substring(0, parts[i].indexOf('id: "') !== -1 ? parts[i].indexOf('id: "') : parts[i].length);
        
        let hasRoAdv = false;
        
        // Find descriptionAdvanced block
        const advIndex = parts[i].indexOf('descriptionAdvanced:');
        if (advIndex !== -1) {
            // substring from advIndex to next main key, e.g. facts: or faq:
            const nextKeyIndex1 = parts[i].indexOf('facts:', advIndex);
            const nextKeyIndex2 = parts[i].indexOf('factsAdvanced:', advIndex);
            const nextKeyIndex3 = parts[i].indexOf('faq:', advIndex);
            
            let endOfAdv = parts[i].length;
            if (nextKeyIndex1 !== -1 && nextKeyIndex1 < endOfAdv) endOfAdv = nextKeyIndex1;
            if (nextKeyIndex2 !== -1 && nextKeyIndex2 < endOfAdv) endOfAdv = nextKeyIndex2;
            if (nextKeyIndex3 !== -1 && nextKeyIndex3 < endOfAdv) endOfAdv = nextKeyIndex3;
            
            const advBlock = parts[i].substring(advIndex, endOfAdv);
            if (advBlock.includes('ro: "') && !advBlock.match(/ro:\s*""/)) {
                hasRoAdv = true;
            }
        }
        
        if (!hasRoAdv) {
            allMissing.push({
                id, file
            });
        }
    }
}

fs.writeFileSync('japan_missing_ro.json', JSON.stringify(allMissing, null, 2));
console.log("Missing:", allMissing.length);
