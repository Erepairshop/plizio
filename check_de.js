
import fs from 'fs';
const content = fs.readFileSync('lib/visualLab/data/poiExtraNigeriaLandmarksV2.ts', 'utf8');
const blocks = content.split('descriptionAdvanced: {');
blocks.shift(); // remove header
blocks.forEach((block, i) => {
  const inner = block.split('}')[0];
  if (!inner.includes('de:')) {
    console.log(`Missing de in block ${i}`);
  }
});
