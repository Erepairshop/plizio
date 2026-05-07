const fs = require('fs');

const files = [
  'lib/visualLab/data/irelandPoi.ts',
  'lib/visualLab/data/poiExtraIrelandAnimal.ts',
  'lib/visualLab/data/poiExtraIrelandCities.ts',
  'lib/visualLab/data/poiExtraIrelandHistory.ts',
  'lib/visualLab/data/poiExtraIrelandOther.ts'
];

for (const file of files) {
  if (!fs.existsSync(file)) {
    console.log(`Missing file: ${file}`);
    continue;
  }
  const content = fs.readFileSync(file, 'utf8');
  // quick regex check
  const idRegex = /id:\s*"([^"]+)"/g;
  let match;
  let missing = 0;
  let total = 0;
  while ((match = idRegex.exec(content)) !== null) {
    total++;
    // This is a rough check, not a true AST parse
  }
  console.log(`${file}: found ${total} POIs`);
}
