
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
    
    const hasFaq = blockFragment.includes('faq:');
    let hasFaqDe = false;
    if (hasFaq) {
        const faqMatch = blockFragment.match(/faq:\s*\{([^\}]+)\}/);
        if (faqMatch && faqMatch[1].includes('de:')) hasFaqDe = true;
    }

    if (!hasFaq || !hasFaqDe) {
        console.log(`MISSING_FAQ_DE: ${id} in ${file} (HasFaq: ${hasFaq})`);
    }
  });
});
