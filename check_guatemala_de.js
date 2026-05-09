
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
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${file}`);
    return;
  }
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Simple regex to find POI blocks and their IDs
  const poiMatches = content.matchAll(/id:\s*"([^"]+)"/g);
  for (const match of poiMatches) {
    const id = match[1];
    // Find the block for this ID
    const startIdx = match.index;
    const nextMatch = content.indexOf('id:', startIdx + 1);
    const blockEnd = nextMatch !== -1 ? nextMatch : content.length;
    const block = content.substring(startIdx, blockEnd);
    
    // Check if descriptionAdvanced or factsAdvanced missing 'de'
    const hasDescAdvDe = /descriptionAdvanced:\s*\{[^\}]*de:\s*"[^"]+"/.test(block);
    const hasFactsAdvDe = /factsAdvanced:\s*\{[^\}]*de:\s*\[[^\]]+\]/.test(block);
    
    if (!hasDescAdvDe || !hasFactsAdvDe) {
        console.log(`MISSING_DE: ${id} in ${file} (Desc: ${hasDescAdvDe}, Facts: ${hasFactsAdvDe})`);
    }
  }
});
