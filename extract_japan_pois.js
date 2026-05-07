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

let all_pois = [];

files.forEach(file => {
    if (fs.existsSync(file)) {
        const content = fs.readFileSync(file, 'utf8');
        const idRegex = /id:\s*["']([^"']+)["']/g;
        let match;
        while ((match = idRegex.exec(content)) !== null) {
            all_pois.push({ id: match[1], file: file });
        }
    }
});

fs.writeFileSync('japan_pois.json', JSON.stringify(all_pois, null, 2));
console.log("Total POIs extracted:", all_pois.length);
