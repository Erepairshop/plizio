
import fs from 'fs';
import path from 'path';

const filePath = 'lib/visualLab/data/poiExtraFranceCities.ts';
const content = fs.readFileSync(filePath, 'utf-8');

const poiMatches = content.match(/\{[\s\S]*?id:\s*"(.*?)"[\s\S]*?\},?\n/g);

const cities = [];
const history = [];
const other = [];

if (poiMatches) {
    poiMatches.forEach(poiStr => {
        const typeMatch = poiStr.match(/type:\s*"(.*?)"/);
        const type = typeMatch ? typeMatch[1] : '';
        
        if (type === 'city' || type === 'state-capital') {
            cities.push(poiStr);
        } else if (type === 'historical' || type === 'castle' || type === 'landmark') {
            history.push(poiStr);
        } else {
            other.push(poiStr);
        }
    });
}

const header = 'import type { POI } from "./poi";\n\n';

function writePoiFile(name, pois) {
    const outPath = `lib/visualLab/data/${name}.ts`;
    const body = `export const ${name}: POI[] = [\n${pois.join('')}];\n`;
    fs.writeFileSync(outPath, header + body);
    console.log(`Wrote ${pois.length} POIs to ${outPath}`);
}

writePoiFile('poiExtraFranceCities', cities);
writePoiFile('poiExtraFranceHistory', history);
writePoiFile('poiExtraFranceOther', other);
