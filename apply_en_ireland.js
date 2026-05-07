const fs = require('fs');

const files = [
    'lib/visualLab/data/irelandPoi.ts',
    'lib/visualLab/data/poiExtraIrelandAnimal.ts',
    'lib/visualLab/data/poiExtraIrelandCities.ts',
    'lib/visualLab/data/poiExtraIrelandOther.ts'
];

let allData = {};
for (let i = 1; i <= 3; i++) {
    if (fs.existsSync(`en_data_${i}.json`)) {
        const data = JSON.parse(fs.readFileSync(`en_data_${i}.json`, 'utf8'));
        Object.assign(allData, data);
    }
}

const escapeString = (str) => {
    if (!str) return '""';
    return JSON.stringify(str);
};

const formatFacts = (factsArray) => {
    if (!factsArray || !Array.isArray(factsArray)) return '[]';
    return '[\n      ' + factsArray.map(f => escapeString(f)).join(',\n      ') + '\n    ]';
};

for (const file of files) {
    if (!fs.existsSync(file)) continue;

    let content = fs.readFileSync(file, 'utf8');
    let changed = false;

    for (const [id, data] of Object.entries(allData)) {
        if (!data || !data.descriptionAdvanced || !data.factsAdvanced) continue;
        
        const regex = new RegExp(`(id:\\s*"${id}"[\\s\\S]*?)(?=id:\\s*"|];|export const)`);
        
        content = content.replace(regex, (match) => {
            let newBlock = match;
            
            // 1. Process descriptionAdvanced
            if (newBlock.includes('descriptionAdvanced:')) {
                const descBlockRegex = /(descriptionAdvanced:\s*\{)([\s\S]*?\})/;
                newBlock = newBlock.replace(descBlockRegex, (m, g1, g2) => {
                    if (g2.includes('en:')) {
                        return m.replace(/en:\s*"[^"]*",?|en:\s*"[\s\S]*?",?|en:\s*'[^']*',?/, `en: ${escapeString(data.descriptionAdvanced)},`);
                    } else {
                        return `${g1}\n      en: ${escapeString(data.descriptionAdvanced)},\n${g2}`;
                    }
                });
            } else {
                const insertString = `\n  descriptionAdvanced: {\n    en: ${escapeString(data.descriptionAdvanced)}\n  },`;
                if (newBlock.includes('facts:')) {
                    newBlock = newBlock.replace(/(\s+facts:\s*\{)/, `${insertString}$1`);
                } else if (newBlock.includes('historyYear:')) {
                    newBlock = newBlock.replace(/(\s+historyYear:)/, `${insertString}$1`);
                } else {
                    newBlock = newBlock.replace(/(\s+description:\s*\{[\s\S]*?\s*\},)/, `$1${insertString}`);
                }
            }

            // 2. Process factsAdvanced
            if (newBlock.includes('factsAdvanced:')) {
                const factsBlockRegex = /(factsAdvanced:\s*\{)([\s\S]*?\})/;
                newBlock = newBlock.replace(factsBlockRegex, (m, g1, g2) => {
                    if (g2.includes('en:')) {
                        return m.replace(/en:\s*\[[\s\S]*?\],?/, `en: ${formatFacts(data.factsAdvanced)},`);
                    } else {
                        return `${g1}\n      en: ${formatFacts(data.factsAdvanced)},\n${g2}`;
                    }
                });
            } else {
                const insertString = `\n  factsAdvanced: {\n    en: ${formatFacts(data.factsAdvanced)}\n  },`;
                if (newBlock.includes('descriptionAdvanced:')) {
                     let count = 0;
                     let idx = newBlock.indexOf('descriptionAdvanced:');
                     let startBrace = newBlock.indexOf('{', idx);
                     let ptr = startBrace;
                     while(ptr < newBlock.length) {
                         if (newBlock[ptr] === '{') count++;
                         else if (newBlock[ptr] === '}') count--;
                         if (count === 0) {
                             const p1 = newBlock.substring(0, ptr + 1);
                             let p2 = newBlock.substring(ptr + 1);
                             if (!p2.trim().startsWith(',')) {
                                 p2 = ',' + p2;
                             }
                             newBlock = p1 + ',' + insertString + p2.substring(1);
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

            if (newBlock !== match) changed = true;
            return newBlock;
        });
    }

    if (changed) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated ${file}`);
    }
}
