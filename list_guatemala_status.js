
import fs from 'fs';
import path from 'path';

const files = [
  'lib/visualLab/data/poiExtraGuatemalaCitiesV2.ts',
  'lib/visualLab/data/poiExtraGuatemalaEconomicV2.ts',
  'lib/visualLab/data/poiExtraGuatemalaHistoryV2.ts',
  'lib/visualLab/data/poiExtraGuatemalaLandmarksV2.ts',
  'lib/visualLab/data/poiExtraGuatemalaLifeV2.ts',
  'lib/visualLab/data/poiExtraGuatemalaNatureV2.ts',
  'lib/visualLab/data/poiExtraGuatemalaReliefV2.ts'
];

const rootDir = '/mnt/c/Users/User/plizio-repo';

files.forEach(file => {
  const filePath = path.join(rootDir, file);
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, 'utf-8');
  
  const poiBlocks = content.split(/id:\s*"/).slice(1);
  poiBlocks.forEach(blockFragment => {
    const id = blockFragment.split('"')[0];
    
    const hasDescDe = /descriptionAdvanced:\s*\{[^\}]*de:\s*"[^"]+"/.test(blockFragment);
    const hasFactsDe = /factsAdvanced:\s*\{[^\}]*de:\s*\[[^\]]+\]/.test(blockFragment);

    console.log(`${id} | ${file} | DescDe: ${hasDescDe} | FactsDe: ${hasFactsDe}`);
  });
});
