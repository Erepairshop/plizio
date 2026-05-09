
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
    
    const descMatches = blockFragment.match(/descriptionAdvanced:\s*\{([^\}]+)\}/g);
    if (descMatches) {
        const lastDesc = descMatches[descMatches.length - 1];
        if (!lastDesc.includes('de:')) {
            console.log(`LAST_DESC_MISSING_DE: ${id} in ${file}`);
        }
    }

    const factsMatches = blockFragment.match(/factsAdvanced:\s*\{([^\}]+)\}/g);
    if (factsMatches) {
        const lastFacts = factsMatches[factsMatches.length - 1];
        if (!lastFacts.includes('de:')) {
            console.log(`LAST_FACTS_MISSING_DE: ${id} in ${file}`);
        }
    }
  });
});
