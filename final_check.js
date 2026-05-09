
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
let total = 0;
let missingDe = 0;
files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const ids = content.match(/id: "(.*?)"/g);
  if (ids) {
    total += ids.length;
    ids.forEach(idMatch => {
      const id = idMatch.match(/"(.*?)"/)[1];
      const startIdx = content.indexOf(idMatch);
      let endIdx = content.indexOf('id: "', startIdx + 1);
      if (endIdx === -1) endIdx = content.length;
      const block = content.substring(startIdx, endIdx);
      if (!block.includes('descriptionAdvanced: {') || !block.includes('de: "')) {
         // This check is a bit naive because 'de: "' could be in name or description
         // Let's check for 'descriptionAdvanced: {' then 'de:' inside it
         const descMatch = block.match(/descriptionAdvanced:\s*{([\s\S]*?)}/);
         if (!descMatch || !descMatch[1].includes('de:')) {
           console.log(`Missing DE in ${id} (${file})`);
           missingDe++;
         }
      }
    });
  }
});
console.log(`Total: ${total}, Missing DE: ${missingDe}`);
