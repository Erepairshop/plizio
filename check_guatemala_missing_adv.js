
import fs from 'fs';
import path from 'path';

const rootDir = '/mnt/c/Users/User/plizio-repo/lib/visualLab/data';
const files = fs.readdirSync(rootDir).filter(f => f.endsWith('.ts'));

files.forEach(file => {
  const filePath = path.join(rootDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  
  const poiBlocks = content.split(/id:\s*"/).slice(1);
  poiBlocks.forEach(blockFragment => {
    const idMatch = blockFragment.match(/^([^"]+)"/);
    if (!idMatch) return;
    const id = idMatch[1];
    
    if (id.startsWith('gt-') || id.includes('guatemala')) {
        const hasDescAdv = blockFragment.includes('descriptionAdvanced');
        const hasFactsAdv = blockFragment.includes('factsAdvanced');

        if (!hasDescAdv || !hasFactsAdv) {
            console.log(`MISSING_ADV: ${id} in ${file} (Desc: ${hasDescAdv}, Facts: ${hasFactsAdv})`);
        }
    }
  });
});
