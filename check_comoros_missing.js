
const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('lib/visualLab/data').filter(f => f.startsWith('poiExtraComoros') && f.endsWith('V2.ts'));

files.forEach(f => {
    const filePath = path.join('lib/visualLab/data', f);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Split by POI objects (heuristic: lines starting with {)
    const poiBlocks = content.split(/,\s*\{/).slice(1);
    
    // First POI (before the first split)
    const firstMatch = content.match(/poiExtraComoros[a-zA-Z]+V2: POI\[\] = \[\s*\{([\s\S]+?)\},/);
    if (firstMatch) {
        checkPoi(firstMatch[1], f);
    }

    poiBlocks.forEach(block => {
        checkPoi(block, f);
    });
});

function checkPoi(block, fileName) {
    const idMatch = block.match(/id: ["']([^"']+)["']/);
    if (!idMatch) return;
    const id = idMatch[1];
    
    const hasDeDesc = /descriptionAdvanced:\s*\{[\s\S]*?de:/.test(block);
    const hasDeFacts = /factsAdvanced:\s*\{[\s\S]*?de:/.test(block);
    
    if (!hasDeDesc || !hasDeFacts) {
        console.log(`${fileName}: ${id} (Missing: ${!hasDeDesc ? 'desc' : ''} ${!hasDeFacts ? 'facts' : ''})`);
    }
}
