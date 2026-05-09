
import fs from 'fs';

const files = [
  'lib/visualLab/data/poiExtraNigeriaCitiesV2.ts',
  'lib/visualLab/data/poiExtraNigeriaEconomicV2.ts',
  'lib/visualLab/data/poiExtraNigeriaHistoryV2.ts',
  'lib/visualLab/data/poiExtraNigeriaLandmarksV2.ts',
  'lib/visualLab/data/poiExtraNigeriaLifeV2.ts',
  'lib/visualLab/data/poiExtraNigeriaNatureV2.ts',
  'lib/visualLab/data/poiExtraNigeriaReliefV2.ts'
];

const results = [];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  const content = fs.readFileSync(file, 'utf8');
  
  // Split content by POI objects approximately
  const poiBlocks = content.split(/id:\s*"/);
  
  poiBlocks.forEach(block => {
    const idMatch = block.match(/^(.*?)"/);
    if (!idMatch) return;
    const id = idMatch[1];
    
    // Check descriptionAdvanced
    const descMatch = block.match(/descriptionAdvanced:\s*{([\s\S]*?)}/);
    if (!descMatch) {
      results.push({ id, file, missing: 'descriptionAdvanced' });
    } else {
      const descContent = descMatch[1];
      if (!descContent.includes('de:') || descContent.match(/de:\s*""/)) {
        results.push({ id, file, missing: 'descriptionAdvanced.de' });
      }
    }

    // Check factsAdvanced
    const factsMatch = block.match(/factsAdvanced:\s*{([\s\S]*?)}/);
    if (!factsMatch) {
       // if descriptionAdvanced is also missing, we already recorded it, but usually both are missing
       // results.push({ id, file, missing: 'factsAdvanced' });
    } else {
      const factsContent = factsMatch[1];
      if (!factsContent.includes('de:') || factsContent.match(/de:\s*\[\s*\]/)) {
        results.push({ id, file, missing: 'factsAdvanced.de' });
      }
    }
  });
});

console.log(JSON.stringify(results, null, 2));
