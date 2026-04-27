const fs = require('fs');

const files = [
  'lib/visualLab/data/poiExtraDeLebenWirtschaft.ts',
  'lib/visualLab/data/poiExtraDeCities.ts',
  'lib/visualLab/data/poiExtraDe1.ts',
  'lib/visualLab/data/poiExtraDe2.ts',
  'lib/visualLab/data/poiExtraDe3a.ts',
  'lib/visualLab/data/poiExtraDe3b.ts',
  'lib/visualLab/data/poiExtraDe4a.ts',
  'lib/visualLab/data/poiExtraDe4b.ts'
];

let allPois = [];

for (const file of files) {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf-8');
    const idRegex = /id:\s*"([^"]+)",[\s\S]*?name:\s*\{\s*(?:de:\s*"([^"]*)")?/g;
    let match;
    while ((match = idRegex.exec(content)) !== null) {
      allPois.push({ id: match[1], name: match[2] || match[1] });
    }
  }
}

fs.writeFileSync('all_pois.json', JSON.stringify(allPois, null, 2), 'utf-8');
console.log(`Extracted ${allPois.length} POIs.`);
