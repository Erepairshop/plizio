import fs from 'fs';

const files = [
  'lib/visualLab/data/poiExtraHu1.ts',
  'lib/visualLab/data/poiExtraHu2.ts',
  'lib/visualLab/data/poiExtraHu3.ts'
];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  console.log(`Checking ${file}...`);
  
  const poiBlocks = content.split('  {').slice(1);
  poiBlocks.forEach(block => {
    const idMatch = block.match(/id:\s*"([^"]+)"/);
    if (!idMatch) return;
    const id = idMatch[1];

    // Check descriptionAdvanced
    const descMatch = block.match(/descriptionAdvanced:\s*\{([^}]+)\}/);
    let descRoEmpty = false;
    if (descMatch) {
      const roLine = descMatch[1].split('\n').find(line => line.includes('ro:'));
      if (roLine && (roLine.includes('""') || roLine.includes("''"))) {
        descRoEmpty = true;
      }
    } else {
      descRoEmpty = true;
    }

    // Check factsAdvanced
    const factsMatch = block.match(/factsAdvanced:\s*\{([^}]+)\}/);
    let factsRoEmpty = false;
    if (factsMatch) {
      const roLine = factsMatch[1].split('\n').find(line => line.includes('ro:'));
      if (roLine && (roLine.includes('[]') || roLine.includes('[""]'))) {
        factsRoEmpty = true;
      }
    } else {
      factsRoEmpty = true;
    }

    if (descRoEmpty || factsRoEmpty) {
      console.log(`  - ${id}: ${descRoEmpty ? 'descRoEmpty ' : ''}${factsRoEmpty ? 'factsRoEmpty ' : ''}`);
    }
  });
});
