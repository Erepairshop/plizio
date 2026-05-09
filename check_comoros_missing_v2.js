
const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('lib/visualLab/data').filter(f => f.startsWith('poiExtraComoros') && f.endsWith('V2.ts'));

files.forEach(f => {
    const filePath = path.join('lib/visualLab/data', f);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Find all ID blocks
    const poiRegex = /id:\s*["']([^"']+)["']([\s\S]+?)(?=\r?\n\s+id:|\r?\n\];)/g;
    let match;
    while ((match = poiRegex.exec(content)) !== null) {
        const id = match[1];
        const block = match[2];
        
        const hasDeDesc = /descriptionAdvanced:\s*\{[^}]*de:\s*["']/.test(block);
        const hasDeFacts = /factsAdvanced:\s*\{[^}]*de:\s*\[/.test(block);
        
        if (!hasDeDesc || !hasDeFacts) {
             // Check if it's really missing or just empty string/array
             const isEmptyDeDesc = /descriptionAdvanced:\s*\{[^}]*de:\s*["']["']/.test(block);
             const isEmptyDeFacts = /factsAdvanced:\s*\{[^}]*de:\s*\[\s*\]/.test(block);
             
             if (!hasDeDesc || isEmptyDeDesc || !hasDeFacts || isEmptyDeFacts) {
                 console.log(`${f}: ${id} (Missing: ${(!hasDeDesc || isEmptyDeDesc) ? 'desc' : ''} ${(!hasDeFacts || isEmptyDeFacts) ? 'facts' : ''})`);
             }
        }
    }
});
