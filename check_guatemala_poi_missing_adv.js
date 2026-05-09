
import fs from 'fs';
import path from 'path';

const rootDir = '/mnt/c/Users/User/plizio-repo/lib/visualLab/data';
const content = fs.readFileSync(path.join(rootDir, 'guatemalaPoi.ts'), 'utf-8');

const poiBlocks = content.split(/id:\s*"/).slice(1);
poiBlocks.forEach(blockFragment => {
    const id = blockFragment.split('"')[0];
    if (id.startsWith('gt-') || id.includes('guatemala')) {
        if (!blockFragment.includes('descriptionAdvanced')) {
            console.log(`MISSING_ADV_IN_GUATEMALA_POI: ${id}`);
        }
    }
});
