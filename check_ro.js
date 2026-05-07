const fs = require('fs');

const fileContent = fs.readFileSync('lib/visualLab/data/romaniaPoi.ts', 'utf8');

// We need to parse this TS file. It contains export const ... = [ ... ];
// Let's strip the imports and types.
let stripped = fileContent
    .replace(/import .*/g, '')
    .replace(/export const \w+: POI\[\] = /g, 'global.pois = ')
    .replace(/export const \w+: POI\[\] = /g, 'global.pois2 = ')
    .replace(/;\s*$/g, '');

// Since there are multiple exports, let's just make it a single array
// Actually, let's extract each POI block by splitting.
let match;
let missingRO = [];
let allIds = [];

const regex = /id:\s*"([^"]+)"/g;
while ((match = regex.exec(fileContent)) !== null) {
    allIds.push(match[1]);
}

console.log("Total POIs:", allIds.length);
console.log(allIds.join(', '));
