
import fs from 'fs';
const content = fs.readFileSync('lib/visualLab/data/poiExtraGuatemalaLandmarksV2.ts', 'utf-8');
const blocks = content.split(/id:\s*"/).slice(1);
blocks.forEach(b => {
    const id = b.split('"')[0];
    const advMatches = b.match(/descriptionAdvanced:\s*\{([^\}]+)\}/g);
    if (advMatches) {
        advMatches.forEach((m, i) => {
            if (!m.includes('de:')) {
                console.log(`MISSING_DE_IN_BLOCK: ${id} Block[${i}]`);
            }
        });
    }
});
