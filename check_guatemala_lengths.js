
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
    
    // Find all de descriptions
    const deMatches = blockFragment.match(/de:\s*"([^"]*)"/g);
    if (!deMatches) {
        console.log(`${id} | ${file} | NO_DE_AT_ALL`);
        return;
    }
    
    // Check lengths of de descriptions in Advanced fields
    // This is tricky because de: is used for name, description, and descriptionAdvanced.
    // We only care about Advanced.
    const advBlockMatches = blockFragment.match(/descriptionAdvanced:\s*\{([^\}]+)\}/g);
    if (advBlockMatches) {
        advBlockMatches.forEach((m, idx) => {
            const deValMatch = m.match(/de:\s*"([^"]*)"/);
            const deVal = deValMatch ? deValMatch[1] : "MISSING";
            console.log(`${id} | ${file} | AdvDesc[${idx}]: ${deVal.length} chars | ${deVal.substring(0, 20)}...`);
        });
    } else {
        console.log(`${id} | ${file} | NO_ADV_DESC`);
    }
  });
});
