const fs = require('fs');

const files = [
    "lib/visualLab/data/poiExtraLibyaCitiesV2.ts",
    "lib/visualLab/data/poiExtraLibyaEconomicV2.ts",
    "lib/visualLab/data/poiExtraLibyaHistoryV2.ts",
    "lib/visualLab/data/poiExtraLibyaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraLibyaLifeV2.ts",
    "lib/visualLab/data/poiExtraLibyaNatureV2.ts",
    "lib/visualLab/data/poiExtraLibyaReliefV2.ts"
];

let pois = [];

for (const file of files) {
    if (!fs.existsSync(file)) {
        console.log(`Missing file: ${file}`);
        continue;
    }
    const content = fs.readFileSync(file, 'utf-8');
    
    // basic parsing
    const blocks = content.split('id:');
    for (let i = 1; i < blocks.length; i++) {
        const block = blocks[i];
        
        const idMatch = block.match(/^\s*["']([^"']+)["']/);
        if (!idMatch) continue;
        const id = idMatch[1];
        
        const nameMatch = block.match(/name:\s*\{[^}]*en:\s*["']([^"']+)["']/);
        const name = nameMatch ? nameMatch[1] : id;
        
        // check if descriptionAdvanced exists and has en
        const descAdvMatch = block.match(/descriptionAdvanced:\s*\{[^}]*en:\s*["'](.*?)["']/s);
        
        if (!descAdvMatch || descAdvMatch[1].trim() === '') {
            pois.push({ id, name, file });
        }
    }
}

fs.writeFileSync('libya_missing_pois.json', JSON.stringify(pois, null, 2));
console.log(`Found ${pois.length} POIs missing descriptionAdvanced.en`);
