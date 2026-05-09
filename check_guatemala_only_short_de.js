
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
    
    const advBlockMatches = blockFragment.match(/descriptionAdvanced:\s*\{([^\}]+)\}/g);
    if (advBlockMatches && advBlockMatches.length === 1) {
        const m = advBlockMatches[0];
        const deValMatch = m.match(/de:\s*"([^"]*)"/);
        if (deValMatch) {
            const deVal = deValMatch[1];
            if (deVal.length < 200) {
                console.log(`ONLY_ONE_AND_SHORT_DE: ${id} in ${file} (${deVal.length} chars)`);
            }
        }
    }
  });
});
