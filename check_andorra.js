const fs = require('fs');

const files = [
  'lib/visualLab/data/andorraPoi.ts',
  'lib/visualLab/data/poiExtraAndorraCities.ts',
  'lib/visualLab/data/poiExtraAndorraOther.ts'
];

files.forEach(file => {
  if (!fs.existsSync(file)) {
    console.log(`Missing file: ${file}`);
    return;
  }
  const content = fs.readFileSync(file, 'utf8');
  let missingDesc = 0;
  let emptyDesc = 0;
  let missingFacts = 0;
  let emptyFacts = 0;
  let totalPois = 0;
  
  // A very crude regex check for POIs
  const poiBlocks = content.split('  id: "').slice(1);
  totalPois = poiBlocks.length;
  
  poiBlocks.forEach(block => {
    if (!block.includes('descriptionAdvanced:')) missingDesc++;
    else {
      // Extract hu from descriptionAdvanced
      const match = block.match(/descriptionAdvanced:\s*\{[^}]*hu:\s*"([^"]*)"/);
      if (!match || match[1] === '') emptyDesc++;
    }
    
    if (!block.includes('factsAdvanced:')) missingFacts++;
    else {
      // Extract hu from factsAdvanced
      const match = block.match(/factsAdvanced:\s*\{[^}]*hu:\s*\[(.*?)\]/s);
      if (!match || match[1].trim() === '') emptyFacts++;
    }
  });

  console.log(`File: ${file}`);
  console.log(`  Total POIs: ${totalPois}`);
  console.log(`  Missing descriptionAdvanced: ${missingDesc}`);
  console.log(`  Empty descriptionAdvanced.hu: ${emptyDesc}`);
  console.log(`  Missing factsAdvanced: ${missingFacts}`);
  console.log(`  Empty factsAdvanced.hu: ${emptyFacts}`);
});
