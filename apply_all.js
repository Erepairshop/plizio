const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.startsWith('pt_en_') && f.endsWith('.json'));
const allData = [];
for (const file of files) {
    allData.push(...JSON.parse(fs.readFileSync(file, 'utf-8')));
}

const tsFiles = fs.readdirSync('lib/visualLab/data').filter(f => /Portugal.*\.ts/i.test(f)).map(f => 'lib/visualLab/data/' + f);

let totalUpdated = 0;

for (const tsFile of tsFiles) {
    let content = fs.readFileSync(tsFile, 'utf-8');
    let changed = false;

    for (const item of allData) {
        const poiId = item.id;
        const enDesc = item.en_desc || item.en_desc; // just in case it's named differently
        const enFacts = item.en_facts || item.en_facts;
        
        // Find the block for this POI
        const blockRegex = new RegExp(`(?:\\{\\s*(?:\\/\\/.*?\\n\\s*)*id:\\s*["']${poiId}["'][\\s\\S]*?(?=(?:\\n\\s*(?:\\{\\s*(?:\\/\\/.*?\\n\\s*)*)?id:|\\Z|\\n\\s*\\];)))`, 'g');
        const match = blockRegex.exec(content);
        
        if (match) {
            let block = match[0];
            let newBlock = block;
            
            // Replace or add descriptionAdvanced
            // First, find the location of descriptionAdvanced: {
            const descAdvIndex = newBlock.search(/descriptionAdvanced\s*:\s*\{/);
            if (descAdvIndex !== -1) {
                // Find the closing brace of descriptionAdvanced
                let braceCount = 0;
                let endIndex = -1;
                for (let i = newBlock.indexOf('{', descAdvIndex); i < newBlock.length; i++) {
                    if (newBlock[i] === '{') braceCount++;
                    if (newBlock[i] === '}') braceCount--;
                    if (braceCount === 0) {
                        endIndex = i;
                        break;
                    }
                }
                
                if (endIndex !== -1) {
                    const innerBlock = newBlock.substring(descAdvIndex, endIndex + 1);
                    // we want to ensure it has en: "enDesc"
                    // we can just rebuild the inner block to be safe!
                    // but we need to keep de, hu, ro.
                    const deMatch = innerBlock.match(/de:\s*"((?:[^"\\]|\\.)*?)"/);
                    const huMatch = innerBlock.match(/hu:\s*"((?:[^"\\]|\\.)*?)"/);
                    const roMatch = innerBlock.match(/ro:\s*"((?:[^"\\]|\\.)*?)"/);
                    
                    const deText = deMatch ? deMatch[1] : '';
                    const huText = huMatch ? huMatch[1] : '';
                    const roText = roMatch ? roMatch[1] : '';
                    
                    const rebuilt = `descriptionAdvanced: { de: "${deText}", hu: "${huText}", ro: "${roText}", en: "${enDesc.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}" }`;
                    newBlock = newBlock.replace(innerBlock, rebuilt);
                }
            } else {
                // Insert it after description
                const descStr = `,\n    descriptionAdvanced: { de: "", hu: "", ro: "", en: "${enDesc.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}" }`;
                // To avoid breaking inner objects of description, we just find description: { ... } and insert after its closing brace
                const descIndex = newBlock.search(/description\s*:\s*\{/);
                if(descIndex !== -1) {
                    let braceCount = 0;
                    let endDesc = -1;
                    for (let i = newBlock.indexOf('{', descIndex); i < newBlock.length; i++) {
                        if (newBlock[i] === '{') braceCount++;
                        if (newBlock[i] === '}') braceCount--;
                        if (braceCount === 0) {
                            endDesc = i;
                            break;
                        }
                    }
                    if(endDesc !== -1) {
                        newBlock = newBlock.substring(0, endDesc + 1) + descStr + newBlock.substring(endDesc + 1);
                    }
                }
            }

            // Replace or add factsAdvanced
            const factsAdvIndex = newBlock.search(/factsAdvanced\s*:\s*\{/);
            const factsStr = JSON.stringify(enFacts);
            if (factsAdvIndex !== -1) {
                let braceCount = 0;
                let endIndex = -1;
                for (let i = newBlock.indexOf('{', factsAdvIndex); i < newBlock.length; i++) {
                    if (newBlock[i] === '{') braceCount++;
                    if (newBlock[i] === '}') braceCount--;
                    if (braceCount === 0) {
                        endIndex = i;
                        break;
                    }
                }
                
                if (endIndex !== -1) {
                    const innerBlock = newBlock.substring(factsAdvIndex, endIndex + 1);
                    const deMatch = innerBlock.match(/de:\s*(\[.*?\])/);
                    const huMatch = innerBlock.match(/hu:\s*(\[.*?\])/);
                    const roMatch = innerBlock.match(/ro:\s*(\[.*?\])/);
                    
                    const deText = deMatch ? deMatch[1] : '[]';
                    const huText = huMatch ? huMatch[1] : '[]';
                    const roText = roMatch ? roMatch[1] : '[]';
                    
                    const rebuilt = `factsAdvanced: { de: ${deText}, hu: ${huText}, ro: ${roText}, en: ${factsStr} }`;
                    newBlock = newBlock.replace(innerBlock, rebuilt);
                }
            } else {
                const factsAdvStr = `,\n    factsAdvanced: { de: [], hu: [], ro: [], en: ${factsStr} }`;
                const factsIndex = newBlock.search(/facts\s*:\s*\{/);
                if(factsIndex !== -1) {
                    let braceCount = 0;
                    let endFacts = -1;
                    for (let i = newBlock.indexOf('{', factsIndex); i < newBlock.length; i++) {
                        if (newBlock[i] === '{') braceCount++;
                        if (newBlock[i] === '}') braceCount--;
                        if (braceCount === 0) {
                            endFacts = i;
                            break;
                        }
                    }
                    if(endFacts !== -1) {
                        newBlock = newBlock.substring(0, endFacts + 1) + factsAdvStr + newBlock.substring(endFacts + 1);
                    }
                }
            }
            
            if (block !== newBlock) {
                content = content.replace(block, newBlock);
                changed = true;
                totalUpdated++;
            }
        }
    }
    
    if (changed) {
        fs.writeFileSync(tsFile, content, 'utf-8');
        console.log(`Saved ${tsFile}`);
    }
}
console.log(`Total updated: ${totalUpdated}`);
