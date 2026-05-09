
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
        // Check if de is missing in descriptionAdvanced or factsAdvanced
        const descMatches = blockFragment.match(/descriptionAdvanced:\s*\{([^\}]+)\}/g);
        let hasDeDesc = false;
        if (descMatches) {
            descMatches.forEach(m => {
                if (m.includes('de:')) hasDeDesc = true;
            });
        } else {
            hasDeDesc = true; // No descriptionAdvanced at all? 
        }

        const factsMatches = blockFragment.match(/factsAdvanced:\s*\{([^\}]+)\}/g);
        let hasDeFacts = false;
        if (factsMatches) {
            factsMatches.forEach(m => {
                if (m.includes('de:')) hasDeFacts = true;
            });
        } else {
            hasDeFacts = true;
        }

        if (!hasDeDesc || !hasDeFacts) {
            console.log(`MISSING_DE: ${id} in ${file} (Desc: ${hasDeDesc}, Facts: ${hasDeFacts})`);
        }
    }
  });
});
