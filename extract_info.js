
const fs = require('fs');

function extractPois(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    // Simple regex to find POI objects. This is not perfect but should work for this structure.
    const pois = [];
    const poiMatches = content.match(/\{[\s\S]*?id:[\s\S]*?\}\s*\},/g) || content.match(/\{[\s\S]*?"id":[\s\S]*?\}\s*\},/g);
    
    // Actually, let's use a more robust way by split or similar if possible.
    // Or just parse it if it was valid JSON, but it's a TS file with an array.
    
    // Let's try to find each POI block.
    const entries = content.split(/  \{/);
    entries.shift(); // remove imports part
    
    for (const entry of entries) {
        const idMatch = entry.match(/"id":\s*"([^"]+)"/) || entry.match(/id:\s*"([^"]+)"/);
        const nameHuMatch = entry.match(/"hu":\s*"([^"]+)"/) || entry.match(/hu:\s*"([^"]+)"/);
        const nameDeMatch = entry.match(/"de":\s*"([^"]+)"/) || entry.match(/de:\s*"([^"]+)"/);
        const typeMatch = entry.match(/"type":\s*"([^"]+)"/) || entry.match(/type:\s*"([^"]+)"/);
        
        if (idMatch) {
            pois.push({
                id: idMatch[1],
                nameHu: nameHuMatch ? nameHuMatch[1] : '',
                nameDe: nameDeMatch ? nameDeMatch[1] : '',
                type: typeMatch ? typeMatch[1] : ''
            });
        }
    }
    return pois;
}

const ro1 = extractPois('/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraRo1.ts');
const ro2 = extractPois('/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraRo2.ts');

console.log(JSON.stringify({ro1, ro2}, null, 2));
