const fs = require('fs');

let file = 'lib/visualLab/data/poiExtraNepalCitiesV2.ts';
let content = fs.readFileSync(file, 'utf8');

// Fix unescaped newlines in string literals
content = content.replace(/and\r?\nspiritual/g, 'and spiritual');
fs.writeFileSync(file, content);

let histFile = 'lib/visualLab/data/poiExtraUruguayHistoryV2.ts';
let histContent = fs.readFileSync(histFile, 'utf8');
let histLines = histContent.split('\n');

console.log('--- Uruguay History (Lines 25-35) ---');
for (let i = 25; i < 35; i++) {
  console.log((i+1) + ': ' + histLines[i]);
}
