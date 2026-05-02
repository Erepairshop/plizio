const fs = require('fs');
const translate = require('google-translate-api-x');

const files = [
    "lib/visualLab/data/luxembourgPoi.ts",
    "lib/visualLab/data/poiExtraLuxembourgCities.ts",
    "lib/visualLab/data/poiExtraLuxembourgHistory.ts",
    "lib/visualLab/data/poiExtraLuxembourgOther.ts"
];

async function translateText(text) {
    if (!text || text.trim() === "") return "";
    try {
        const res = await translate(text, { to: 'ro' });
        return res.text;
    } catch (e) {
        console.error("Translation failed:", e);
        return text; // Return original on failure
    }
}

async function processFiles() {
    for (const file of files) {
        if (!fs.existsSync(file)) continue;
        
        let content = fs.readFileSync(file, 'utf-8');
        let changed = false;

        // More robust parsing for POI objects
        const blockRegex = /(["']?)id\1\s*:\s*["']([^"']+)["']([\s\S]*?)(?=(?:\n\s*(?:["']?)id\1\s*:|\Z|\n\s*\];|\n\s*\}\s*,\s*\{|\n\s*\}\s*\]))/g;
        
        let match;
        let blocks = [];
        while ((match = blockRegex.exec(content)) !== null) {
            blocks.push({
                fullMatch: match[0],
                id: match[2]
            });
        }
        
        for (const block of blocks) {
            let newBlock = block.fullMatch;
            let blockChanged = false;

            // Handle descriptionAdvanced
            const descRegex = /(descriptionAdvanced\s*:\s*\{[\s\S]*?ro\s*:\s*)["']([^"']*?)["']/;
            const descMatch = newBlock.match(descRegex);
            
            if (descMatch && descMatch[2].trim() === "") {
                const deMatch = newBlock.match(/descriptionAdvanced\s*:\s*\{[\s\S]*?de\s*:\s*["']([^"']*?)["']/);
                const enMatch = newBlock.match(/descriptionAdvanced\s*:\s*\{[\s\S]*?en\s*:\s*["']([^"']*?)["']/);
                
                let textToTranslate = "";
                if (deMatch && deMatch[1].trim() !== "") textToTranslate = deMatch[1];
                else if (enMatch && enMatch[1].trim() !== "") textToTranslate = enMatch[1];

                if (textToTranslate) {
                    console.log(`Translating description for ${block.id}...`);
                    let translated = await translateText(textToTranslate);
                    translated = translated.replace(/"/g, '\\"');
                    newBlock = newBlock.replace(descMatch[0], `${descMatch[1]}"${translated}"`);
                    blockChanged = true;
                }
            }

            // Handle factsAdvanced
            const factsRegex = /(factsAdvanced\s*:\s*\{[\s\S]*?ro\s*:\s*\[)([\s\S]*?)(\])/;
            const factsMatch = newBlock.match(factsRegex);
            
            if (factsMatch && factsMatch[2].trim() === "") {
                const deMatch = newBlock.match(/factsAdvanced\s*:\s*\{[\s\S]*?de\s*:\s*\[([\s\S]*?)\]/);
                const enMatch = newBlock.match(/factsAdvanced\s*:\s*\{[\s\S]*?en\s*:\s*\[([\s\S]*?)\]/);
                
                let arrText = "";
                if (deMatch && deMatch[1].trim() !== "") arrText = deMatch[1];
                else if (enMatch && enMatch[1].trim() !== "") arrText = enMatch[1];

                if (arrText) {
                    const items = arrText.match(/"([^"\\]*(?:\\.[^"\\]*)*)"/g) || [];
                    let translatedItems = [];
                    for (let item of items) {
                        let cleanItem = item.replace(/^"|"$/g, '').replace(/\\"/g, '"');
                        console.log(`Translating fact for ${block.id}...`);
                        let translated = await translateText(cleanItem);
                        translatedItems.push(`\n        "${translated.replace(/"/g, '\\"')}"`);
                    }
                    
                    if (translatedItems.length > 0) {
                        newBlock = newBlock.replace(factsMatch[0], `${factsMatch[1]}${translatedItems.join(",")}\n      ${factsMatch[3]}`);
                        blockChanged = true;
                    }
                }
            }
            
            if (blockChanged) {
                content = content.replace(block.fullMatch, newBlock);
                changed = true;
            }
        }
        
        if (changed) {
            fs.writeFileSync(file, content, 'utf-8');
            console.log(`Saved updates to ${file}`);
        } else {
            console.log(`No updates needed for ${file}`);
        }
    }
}

processFiles().then(() => console.log('Done!'));
