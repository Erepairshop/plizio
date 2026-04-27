import fs from 'fs';
import path from 'fs';

// This is a simple script to check which POIs need RO updates
const files = [
  'lib/visualLab/data/poiExtraHu1.ts',
  'lib/visualLab/data/poiExtraHu2.ts',
  'lib/visualLab/data/poiExtraHu3.ts'
];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  console.log(`Checking ${file}...`);
  
  // Very rough parsing because it's TS
  const poiMatches = content.match(/\{[\s\S]*?id:\s*"([^"]+)"[\s\S]*?\}/g);
  if (!poiMatches) return;

  poiMatches.forEach(match => {
    const idMatch = match.match(/id:\s*"([^"]+)"/);
    if (!idMatch) return;
    const id = idMatch[1];

    const descAdvRoEmpty = match.match(/descriptionAdvanced:\s*\{[\s\S]*?ro:\s*""/);
    const factsAdvRoEmpty = match.match(/factsAdvanced:\s*\{[\s\S]*?ro:\s*\[\s*\]/);
    const factsAdvMissing = !match.includes('factsAdvanced:');

    if (descAdvRoEmpty || factsAdvRoEmpty || factsAdvMissing) {
      console.log(`  - ${id}: ${descAdvRoEmpty ? 'descRoEmpty ' : ''}${factsAdvRoEmpty ? 'factsRoEmpty ' : ''}${factsAdvMissing ? 'factsMissing ' : ''}`);
    }
  });
});
