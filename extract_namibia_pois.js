const fs = require('fs');
const files = [
    "lib/visualLab/data/poiExtraNamibiaCitiesV2.ts",
    "lib/visualLab/data/poiExtraNamibiaEconomicV2.ts",
    "lib/visualLab/data/poiExtraNamibiaHistoryV2.ts",
    "lib/visualLab/data/poiExtraNamibiaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraNamibiaLifeV2.ts",
    "lib/visualLab/data/poiExtraNamibiaNatureV2.ts",
    "lib/visualLab/data/poiExtraNamibiaReliefV2.ts"
];

let allMissing = [];

files.forEach(f => {
    if (!fs.existsSync(f)) {
        console.log(`File not found: ${f}`);
        return;
    }
    const content = fs.readFileSync(f, 'utf8');
    
    // Simple regex parsing since we only need id and name and missing descriptionAdvanced.hu
    // Split by { id:
    const parts = content.split(/\{\s*id:\s*/).slice(1);
    for (const part of parts) {
        const idMatch = part.match(/^"([^"]+)"|^'([^']+)'/);
        if (!idMatch) continue;
        const id = idMatch[1] || idMatch[2];
        
        const huNameMatch = part.match(/name:\s*\{[^}]*hu:\s*"([^"]+)"/);
        const name = huNameMatch ? huNameMatch[1] : id;
        
        const descAdvMatch = part.match(/descriptionAdvanced:\s*\{/);
        const hasDescAdvHu = part.match(/descriptionAdvanced:\s*\{[^}]*hu:\s*"[^"]+"/);
        
        if (!hasDescAdvHu) {
            allMissing.push({ id, name, file: f });
        }
    }
});

console.log(JSON.stringify(allMissing, null, 2));
