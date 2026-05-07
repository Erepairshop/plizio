const fs = require('fs');

const files = [
    'lib/visualLab/data/irelandPoi.ts',
    'lib/visualLab/data/poiExtraIrelandAnimal.ts',
    'lib/visualLab/data/poiExtraIrelandCities.ts',
    'lib/visualLab/data/poiExtraIrelandOther.ts'
];

const allData = JSON.parse(fs.readFileSync('all_ireland_out.json', 'utf8'));

// Function to properly stringify strings without issues
const escapeString = (str) => {
    if (!str) return '""';
    return JSON.stringify(str); // Handles escaping properly
};

const formatFacts = (factsArray) => {
    if (!factsArray || !Array.isArray(factsArray)) return '[]';
    return '[\n      ' + factsArray.map(f => escapeString(f)).join(',\n      ') + '\n    ]';
};

for (const file of files) {
    if (!fs.existsSync(file)) continue;

    let content = fs.readFileSync(file, 'utf8');

    for (const [id, data] of Object.entries(allData)) {
        if (!data || !data.descriptionAdvanced_ro || !data.factsAdvanced_ro) continue;
        
        // Find the specific POI block
        const idMatch = new RegExp(`id:\\s*"${id}"`);
        if (!idMatch.test(content)) continue;

        // Split file around this POI (very roughly)
        // A safer way is to find id: "id", then find the NEXT `id:` or the end of the array,
        // and do replacements within that block.
        
        // We'll use a regex that matches the POI object
        const regex = new RegExp(`(id:\\s*"${id}"[\\s\\S]*?)(?=id:\\s*"|];|export const)`);
        
        content = content.replace(regex, (match) => {
            let newBlock = match;
            
            // 1. Process descriptionAdvanced
            if (newBlock.includes('descriptionAdvanced:')) {
                // It has descriptionAdvanced. Does it have ro: inside it?
                // Let's find the descriptionAdvanced block
                const descBlockRegex = /(descriptionAdvanced:\s*\{)([\s\S]*?\})/;
                newBlock = newBlock.replace(descBlockRegex, (m, g1, g2) => {
                    if (g2.includes('ro:')) {
                        // We replace the existing ro:
                        return m.replace(/ro:\s*"[^"]*",?|ro:\s*"[\s\S]*?",?|ro:\s*'[^']*',?/, `ro: ${escapeString(data.descriptionAdvanced_ro)},`);
                    } else {
                        // Append ro:
                        return `${g1}\n      ro: ${escapeString(data.descriptionAdvanced_ro)},\n${g2}`;
                    }
                });
            } else {
                // Insert descriptionAdvanced just before facts or at the end
                // We'll append it before facts if facts exists, else before the closing brace
                const insertString = `\n  descriptionAdvanced: {\n    ro: ${escapeString(data.descriptionAdvanced_ro)}\n  },`;
                if (newBlock.includes('facts:')) {
                    newBlock = newBlock.replace(/(\s+facts:\s*\{)/, `${insertString}$1`);
                } else if (newBlock.includes('historyYear:')) {
                    newBlock = newBlock.replace(/(\s+historyYear:)/, `${insertString}$1`);
                } else {
                    // Try to insert before the last closing brace of the object (which might be tricky)
                    // We know the block ends with something before the next `id:` or `];`.
                    // A better hook is after the description block
                    newBlock = newBlock.replace(/(\s+description:\s*\{[\s\S]*?\s*\},)/, `$1${insertString}`);
                }
            }

            // 2. Process factsAdvanced
            if (newBlock.includes('factsAdvanced:')) {
                const factsBlockRegex = /(factsAdvanced:\s*\{)([\s\S]*?\})/;
                newBlock = newBlock.replace(factsBlockRegex, (m, g1, g2) => {
                    if (g2.includes('ro:')) {
                        return m.replace(/ro:\s*\[[\s\S]*?\],?/, `ro: ${formatFacts(data.factsAdvanced_ro)},`);
                    } else {
                        return `${g1}\n      ro: ${formatFacts(data.factsAdvanced_ro)},\n${g2}`;
                    }
                });
            } else {
                const insertString = `\n  factsAdvanced: {\n    ro: ${formatFacts(data.factsAdvanced_ro)}\n  },`;
                // Insert after descriptionAdvanced
                if (newBlock.includes('descriptionAdvanced:')) {
                     // find the end of descriptionAdvanced
                     let count = 0;
                     let idx = newBlock.indexOf('descriptionAdvanced:');
                     let startBrace = newBlock.indexOf('{', idx);
                     let ptr = startBrace;
                     while(ptr < newBlock.length) {
                         if (newBlock[ptr] === '{') count++;
                         else if (newBlock[ptr] === '}') count--;
                         
                         if (count === 0) {
                             // found the end of descriptionAdvanced
                             const p1 = newBlock.substring(0, ptr + 1);
                             let p2 = newBlock.substring(ptr + 1);
                             if (!p2.trim().startsWith(',')) {
                                 p2 = ',' + p2; // ensure comma
                             }
                             newBlock = p1 + ',' + insertString + p2.substring(1); // comma handled
                             break;
                         }
                         ptr++;
                     }
                } else if (newBlock.includes('facts:')) {
                     let count = 0;
                     let idx = newBlock.indexOf('facts:');
                     let startBrace = newBlock.indexOf('{', idx);
                     let ptr = startBrace;
                     while(ptr < newBlock.length) {
                         if (newBlock[ptr] === '{') count++;
                         else if (newBlock[ptr] === '}') count--;
                         
                         if (count === 0) {
                             const p1 = newBlock.substring(0, ptr + 1);
                             let p2 = newBlock.substring(ptr + 1);
                             newBlock = p1 + ',' + insertString + p2.substring(p2.indexOf(','));
                             break;
                         }
                         ptr++;
                     }
                } else {
                     newBlock = newBlock.replace(/(\s+description:\s*\{[\s\S]*?\s*\},)/, `$1${insertString}`);
                }
            }

            return newBlock;
        });
    }

    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
}
