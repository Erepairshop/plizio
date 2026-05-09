
import fs from 'fs';
import path from 'path';

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
  const content = fs.readFileSync(file, 'utf8');
  const poiRegex = /id:\s*"(.*?)"[\s\S]*?descriptionAdvanced:\s*{([\s\S]*?)}/g;
  let match;
  while ((match = poiRegex.exec(content)) !== null) {
    const id = match[1];
    const descContent = match[2];
    if (!descContent.includes('de: "') || descContent.includes('de: ""')) {
      results.push({ id, file });
    }
  }
});

console.log(JSON.stringify(results, null, 2));
