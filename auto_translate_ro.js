const fs = require('fs');
const path = require('path');
const translate = require('google-translate-api-x');

const files = [
    "lib/visualLab/data/portugalPoi.ts",
    "lib/visualLab/data/poiExtraPortugalCities.ts",
    "lib/visualLab/data/poiExtraPortugalFinal.ts",
    "lib/visualLab/data/poiExtraPortugalHistorical.ts",
    "lib/visualLab/data/poiExtraPortugalIndustry.ts",
    "lib/visualLab/data/poiExtraPortugalMixed.ts",
    "lib/visualLab/data/poiExtraPortugalNature.ts"
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

            const descRegex = /"?descriptionAdvanced"?\s*:\s*\{([\s\S]*?)\}/;
            const descMatch = newBlock.match(descRegex);
            if (descMatch) {
                const descContent = descMatch[1];
                const roMatch = descContent.match(/("?ro"?\s*:\s*)["']([\s\S]*?(?<!\\))["']/);
                const enMatch = descContent.match(/"?en"?\s*:\s*["']([\s\S]*?(?<!\\))["']/);
                const deMatch = descContent.match(/"?de"?\s*:\s*["']([\s\S]*?(?<!\\))["']/);
                
                if (roMatch && roMatch[2].trim() === "") {
                    let textToTranslate = "";
                    if (enMatch && enMatch[1].trim() !== "") textToTranslate = enMatch[1];
                    else if (deMatch && deMatch[1].trim() !== "") textToTranslate = deMatch[1];

                    if (textToTranslate) {
                        console.log(`Translating description for ${block.id}...`);
                        let translated = await translateText(textToTranslate);
                        translated = translated.replace(/"/g, '\\"');
                        newBlock = newBlock.replace(roMatch[0], `${roMatch[1]}"${translated}"`);
                        blockChanged = true;
                    }
                }
            } else {
                const descBasicRegex = /"?description"?\s*:\s*\{([\s\S]*?)\}/;
                const descBasicMatch = newBlock.match(descBasicRegex);
                if (descBasicMatch) {
                    const enMatch = descBasicMatch[1].match(/"?en"?\s*:\s*["']([\s\S]*?(?<!\\))["']/);
                    const deMatch = descBasicMatch[1].match(/"?de"?\s*:\s*["']([\s\S]*?(?<!\\))["']/);
                    
                    let textToTranslate = "";
                    if (enMatch && enMatch[1].trim() !== "") textToTranslate = enMatch[1];
                    else if (deMatch && deMatch[1].trim() !== "") textToTranslate = deMatch[1];

                    if (textToTranslate) {
                        console.log(`Translating basic description to descriptionAdvanced for ${block.id}...`);
                        let translated = await translateText(textToTranslate);
                        translated = translated.replace(/"/g, '\\"');
                        
                        const replacement = `${descBasicMatch[0]},\n    "descriptionAdvanced": { "de": "", "hu": "", "ro": "${translated}", "en": "" }`;
                        newBlock = newBlock.replace(descBasicMatch[0], replacement);
                        blockChanged = true;
                    }
                }
            }

            const factsRegex = /"?factsAdvanced"?\s*:\s*\{([\s\S]*?)\}/;
            const factsMatch = newBlock.match(factsRegex);
            if (factsMatch) {
                const factsContent = factsMatch[1];
                const roMatch = factsContent.match(/("?ro"?\s*:\s*)\[([\s\S]*?)\]/);
                const enMatch = factsContent.match(/"?en"?\s*:\s*\[([\s\S]*?)\]/);
                const deMatch = factsContent.match(/"?de"?\s*:\s*\[([\s\S]*?)\]/);
                
                if (roMatch && roMatch[2].trim() === "") {
                    let arrText = "";
                    if (enMatch && enMatch[1].trim() !== "") arrText = enMatch[1];
                    else if (deMatch && deMatch[1].trim() !== "") arrText = deMatch[1];

                    if (arrText) {
                        const items = arrText.match(/"([^"\\]*(?:\\.[^"\\]*)*)"/g) || [];
                        let translatedItems = [];
                        for (let item of items) {
                            let cleanItem = item.replace(/^"|"$/g, '').replace(/\\"/g, '"');
                            console.log(`Translating fact for ${block.id}...`);
                            let translated = await translateText(cleanItem);
                            translatedItems.push(`"${translated.replace(/"/g, '\\"')}"`);
                        }
                        
                        if (translatedItems.length > 0) {
                            newBlock = newBlock.replace(roMatch[0], `${roMatch[1]}[${translatedItems.join(", ")}]`);
                            blockChanged = true;
                        }
                    }
                }
            } else {
                const factsBasicRegex = /"?facts"?\s*:\s*\{([\s\S]*?)\}/;
                const factsBasicMatch = newBlock.match(factsBasicRegex);
                if (factsBasicMatch) {
                    const enMatch = factsBasicMatch[1].match(/"?en"?\s*:\s*\[([\s\S]*?)\]/);
                    const deMatch = factsBasicMatch[1].match(/"?de"?\s*:\s*\[([\s\S]*?)\]/);
                    
                    let arrText = "";
                    if (enMatch && enMatch[1].trim() !== "") arrText = enMatch[1];
                    else if (deMatch && deMatch[1].trim() !== "") arrText = deMatch[1];

                    if (arrText) {
                        const items = arrText.match(/"([^"\\]*(?:\\.[^"\\]*)*)"/g) || [];
                        let translatedItems = [];
                        for (let item of items) {
                            let cleanItem = item.replace(/^"|"$/g, '').replace(/\\"/g, '"');
                            console.log(`Translating basic fact to factsAdvanced for ${block.id}...`);
                            let translated = await translateText(cleanItem);
                            translatedItems.push(`"${translated.replace(/"/g, '\\"')}"`);
                        }
                        
                        if (translatedItems.length > 0) {
                            const replacement = `${factsBasicMatch[0]},\n    "factsAdvanced": { "de": [], "hu": [], "ro": [${translatedItems.join(", ")}], "en": [] }`;
                            newBlock = newBlock.replace(factsBasicMatch[0], replacement);
                            blockChanged = true;
                        }
                    }
                }
            }
            
            if (blockChanged) {
                // Because some strings might be identical and .replace only replaces the FIRST occurrence, 
                // and block.fullMatch might contain repeated identical sub-blocks? No, fullMatch is unique to the POI.
                newFileContent = newFileContent.replace(block.fullMatch, newBlock);
                if(newFileContent === content) {
                    console.log(`Warning: Replace failed for ${block.id}`);
                }
                content = newFileContent; // update content for the next iterations
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
