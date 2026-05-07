const fs = require('fs');
const translate = require('google-translate-api-x');

const files = [
    "lib/visualLab/data/irelandPoi.ts",
    "lib/visualLab/data/poiExtraIrelandAnimal.ts",
    "lib/visualLab/data/poiExtraIrelandCities.ts",
    "lib/visualLab/data/poiExtraIrelandOther.ts"
];

async function translateText(text) {
    try {
        const res = await translate(text, { to: 'ro' });
        return res.text;
    } catch (e) {
        console.error("Translation failed:", e);
        return text;
    }
}

async function processFiles() {
    for (const file of files) {
        if (!fs.existsSync(file)) continue;
        
        let content = fs.readFileSync(file, 'utf-8');
        let changed = false;

        const blockRegex = /(["']?)id\1\s*:\s*["']([^"']+)["']([\s\S]*?)(?=(?:\n\s*(?:["']?)id\1\s*:|\Z|\n\s*\];))/g;
        
        let match;
        let blocks = [];
        while ((match = blockRegex.exec(content)) !== null) {
            blocks.push({
                fullMatch: match[0],
                id: match[2],
                content: match[3]
            });
        }
        
        let newFileContent = content;

        for (const block of blocks) {
            let newBlock = block.fullMatch;
            let blockChanged = false;

            // Handle descriptionAdvanced
            const descRegex = /("?descriptionAdvanced"?\s*:\s*\{)([\s\S]*?)\}/;
            const descMatch = newBlock.match(descRegex);
            if (descMatch) {
                const descContent = descMatch[2];
                const roMatch = descContent.match(/("?ro"?\s*:\s*)["']([\s\S]*?(?<!\\))["']/);
                const enMatch = descContent.match(/"?en"?\s*:\s*["']([\s\S]*?(?<!\\))["']/);
                const huMatch = descContent.match(/"?hu"?\s*:\s*["']([\s\S]*?(?<!\\))["']/);
                const deMatch = descContent.match(/"?de"?\s*:\s*["']([\s\S]*?(?<!\\))["']/);
                
                if (!roMatch || roMatch[2].trim() === "") {
                    let textToTranslate = "";
                    if (huMatch && huMatch[1].trim() !== "") textToTranslate = huMatch[1];
                    else if (enMatch && enMatch[1].trim() !== "") textToTranslate = enMatch[1];
                    else if (deMatch && deMatch[1].trim() !== "") textToTranslate = deMatch[1];

                    if (textToTranslate) {
                        console.log(`Translating descriptionAdvanced for ${block.id}...`);
                        let translated = await translateText(textToTranslate);
                        translated = translated.replace(/"/g, '\\"');
                        if (roMatch) {
                            newBlock = newBlock.replace(roMatch[0], `${roMatch[1]}"${translated}"`);
                        } else {
                            // insert ro at the end
                            newBlock = newBlock.replace(descMatch[0], `${descMatch[1]}${descContent.trimEnd()},\n      "ro": "${translated}"\n    }`);
                        }
                        blockChanged = true;
                    }
                }
            }

            // Handle factsAdvanced
            const factsRegex = /("?factsAdvanced"?\s*:\s*\{)([\s\S]*?)\}/;
            const factsMatch = newBlock.match(factsRegex);
            if (factsMatch) {
                const factsContent = factsMatch[2];
                const roMatch = factsContent.match(/("?ro"?\s*:\s*)\[([\s\S]*?)\]/);
                const enMatch = factsContent.match(/"?en"?\s*:\s*\[([\s\S]*?)\]/);
                const huMatch = factsContent.match(/"?hu"?\s*:\s*\[([\s\S]*?)\]/);
                const deMatch = factsContent.match(/"?de"?\s*:\s*\[([\s\S]*?)\]/);
                
                if (!roMatch || roMatch[2].trim() === "") {
                    let arrText = "";
                    if (huMatch && huMatch[1].trim() !== "") arrText = huMatch[1];
                    else if (enMatch && enMatch[1].trim() !== "") arrText = enMatch[1];
                    else if (deMatch && deMatch[1].trim() !== "") arrText = deMatch[1];

                    if (arrText) {
                        const items = arrText.match(/"([^"\\]*(?:\\.[^"\\]*)*)"/g) || [];
                        let translatedItems = [];
                        for (let item of items) {
                            let cleanItem = item.replace(/^"|"$/g, '').replace(/\\"/g, '"');
                            console.log(`Translating factsAdvanced fact for ${block.id}...`);
                            let translated = await translateText(cleanItem);
                            translatedItems.push(`"${translated.replace(/"/g, '\\"')}"`);
                        }
                        
                        if (translatedItems.length > 0) {
                            if (roMatch) {
                                newBlock = newBlock.replace(roMatch[0], `${roMatch[1]}[${translatedItems.join(", ")}]`);
                            } else {
                                newBlock = newBlock.replace(factsMatch[0], `${factsMatch[1]}${factsContent.trimEnd()},\n      "ro": [${translatedItems.join(", ")}]\n    }`);
                            }
                            blockChanged = true;
                        }
                    }
                }
            }
            
            if (blockChanged) {
                newFileContent = newFileContent.replace(block.fullMatch, newBlock);
                changed = true;
            }
        }
        
        if (changed) {
            fs.writeFileSync(file, newFileContent, 'utf-8');
            console.log(`Saved updates to ${file}`);
        }
    }
}

processFiles().then(() => console.log('Done!'));
