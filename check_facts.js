
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
files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const ids = content.match(/id: "(.*?)"/g);
  if (ids) {
    ids.forEach(idMatch => {
      const id = idMatch.match(/"(.*?)"/)[1];
      const startIdx = content.indexOf(idMatch);
      let endIdx = content.indexOf('id: "', startIdx + 1);
      if (endIdx === -1) endIdx = content.length;
      const block = content.substring(startIdx, endIdx);
      
      const factsMatch = block.match(/factsAdvanced:\s*{([\s\S]*?)}/);
      if (factsMatch && !factsMatch[1].includes('de:')) {
           console.log(`Missing factsAdvanced.de in ${id} (${file})`);
      }
    });
  }
});
