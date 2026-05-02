const fs = require('fs');

let data = [];
try {
    data = JSON.parse(fs.readFileSync('/mnt/c/Users/User/plizio-repo/pt_en_extra.json', 'utf-8'));
} catch (e) {
    try {
        data = JSON.parse(fs.readFileSync('pt_en_extra.json', 'utf-8'));
    } catch (e2) {
        console.log("Could not find pt_en_extra.json");
    }
}

if (data.length > 0) {
    let content = fs.readFileSync('lib/visualLab/data/poiExtraPortugalHistorical.ts', 'utf-8');

    for (const item of data) {
        const deText = item.de_text;
        const enDesc = item.en_desc;
        const enFacts = item.en_facts;
        
        // Find the block
        const idx = content.indexOf(deText);
        if (idx !== -1) {
            const enDescIdx = content.indexOf('en: ""', idx);
            if (enDescIdx !== -1 && enDescIdx < idx + 2000) {
                content = content.substring(0, enDescIdx) + `en: "${enDesc.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"` + content.substring(enDescIdx + 6);
                
                const factsIdx = content.indexOf('factsAdvanced:', enDescIdx);
                if (factsIdx !== -1) {
                    const enFactsIdx = content.indexOf('en: []', factsIdx);
                    if (enFactsIdx !== -1 && enFactsIdx < factsIdx + 500) {
                        content = content.substring(0, enFactsIdx) + `en: ${JSON.stringify(enFacts)}` + content.substring(enFactsIdx + 6);
                    }
                }
            }
        }
    }
    fs.writeFileSync('lib/visualLab/data/poiExtraPortugalHistorical.ts', content, 'utf-8');
    console.log('Saved lib/visualLab/data/poiExtraPortugalHistorical.ts');
}
