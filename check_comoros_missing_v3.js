
const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('lib/visualLab/data').filter(f => f.startsWith('poiExtraComoros') && f.endsWith('V2.ts'));

files.forEach(f => {
    const filePath = path.join('lib/visualLab/data', f);
    const content = fs.readFileSync(filePath, 'utf8');
    
    const poiRegex = /id:\s*["']([^"']+)["']([\s\S]+?)(?=\r?\n\s+id:|\r?\n\];)/g;
    let match;
    while ((match = poiRegex.exec(content)) !== null) {
        const id = match[1];
        const block = match[2];
        
        if (!block.includes('descriptionAdvanced')) {
            console.log(`${f}: ${id} (Missing descriptionAdvanced)`);
        }
    }
});
