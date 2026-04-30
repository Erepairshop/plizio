
import fs from 'fs';
import path from 'path';

const dataDir = 'lib/visualLab/data';
const files = ['francePoi.ts', 'franceCitiesExtra.ts', 'poiExtraFranceCities.ts'];

files.forEach(file => {
    const filePath = path.join(dataDir, file);
    if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf-8');
        console.log(`Checking ${file}...`);
        // This is a rough check, might need better parsing if we want to be precise
        const poiMatches = content.match(/\{[\s\S]*?id:\s*"(.*?)"[\s\S]*?\}/g);
        if (poiMatches) {
            poiMatches.forEach(poi => {
                const idMatch = poi.match(/id:\s*"(.*?)"/);
                const id = idMatch ? idMatch[1] : 'unknown';
                const hasDescAdv = poi.includes('descriptionAdvanced:') && poi.match(/descriptionAdvanced:\s*\{[\s\S]*?de:\s*"(?!")/) !== null;
                if (!hasDescAdv) {
                    console.log(`Missing for ID: ${id}`);
                }
            });
        }
    }
});
