const fs = require('fs');

// Fix Bhutan duplicate facts
let bhutan = fs.readFileSync('lib/visualLab/data/poiExtraBhutanNatureV2.ts', 'utf8');
bhutan = bhutan.replace(/,\s*facts:\s*{\s*de:\s*\[\"Hat eine hohe Fließgeschwindigkeit.*?\}\s*}/s, '\n  }');
fs.writeFileSync('lib/visualLab/data/poiExtraBhutanNatureV2.ts', bhutan);

// Fix Nepal duplicate properties
let nepal = fs.readFileSync('lib/visualLab/data/poiExtraNepalCitiesV2.ts', 'utf8');
let nepalLines = nepal.split('\n');

let res = [];
for (let i = 0; i < nepalLines.length; i++) {
    // lines 44-61 inclusive, and lines 104-121 inclusive
    if ((i >= 44 && i <= 61) || (i >= 104 && i <= 121)) {
        continue;
    }
    res.push(nepalLines[i]);
}
fs.writeFileSync('lib/visualLab/data/poiExtraNepalCitiesV2.ts', res.join('\n'));

console.log('Fixed Bhutan and Nepal TS1117 errors');
