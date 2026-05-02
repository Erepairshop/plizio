const fs = require('fs');

const fileNames = [
  'lib/visualLab/data/luxembourgPoi.ts',
  'lib/visualLab/data/poiExtraLuxembourgCities.ts',
  'lib/visualLab/data/poiExtraLuxembourgHistory.ts',
  'lib/visualLab/data/poiExtraLuxembourgOther.ts'
];

let totalMissing = 0;

for (const fileName of fileNames) {
  const content = fs.readFileSync(fileName, 'utf-8');
  let match;
  const regex = /id:\s*"([^"]+)"[\s\S]*?descriptionAdvanced:\s*\{([^}]*)\}[\s\S]*?factsAdvanced:\s*\{([^}]*)\}/g;
  let count = 0;
  while ((match = regex.exec(content)) !== null) {
    const id = match[1];
    const desc = match[2];
    const facts = match[3];
    
    // Check if `ro:` exists and is empty, or doesn't exist
    const roDescMatch = desc.match(/ro:\s*"([^"]*)"/);
    const roFactsMatch = facts.match(/ro:\s*\[([\s\S]*?)\]/);
    
    let isMissing = false;
    if (!roDescMatch || roDescMatch[1].trim() === '') {
      isMissing = true;
    }
    // facts could be empty array
    if (!roFactsMatch || roFactsMatch[1].trim() === '') {
      isMissing = true;
    }
    
    if (isMissing) {
      console.log(`Missing RO in ${id}`);
      count++;
    }
  }
  console.log(`${fileName}: ${count} missing.`);
  totalMissing += count;
}
console.log(`Total missing: ${totalMissing}`);
