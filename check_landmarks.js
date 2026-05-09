
import fs from 'fs';
const file = 'lib/visualLab/data/poiExtraNigeriaLandmarksV2.ts';
const content = fs.readFileSync(file, 'utf8');
const pois = content.split('  {').slice(1);
pois.forEach(poi => {
  const idMatch = poi.match(/id: "(.*?)"/);
  if (!idMatch) return;
  const id = idMatch[1];
  const hasDescDe = poi.includes('descriptionAdvanced: {') && poi.split('descriptionAdvanced: {')[1].split('}')[0].includes('de:');
  const hasFactsDe = poi.includes('factsAdvanced: {') && poi.split('factsAdvanced: {')[1].split('}')[0].includes('de:');
  if (!hasDescDe || !hasFactsDe) {
    console.log(`POI ${id} is missing DE advanced content`);
  }
});
