const fs = require('fs');
const translate = require('google-translate-api-x');

const files = [
    "lib/visualLab/data/irelandPoi.ts",
    "lib/visualLab/data/poiExtraIrelandAnimal.ts",
    "lib/visualLab/data/poiExtraIrelandCities.ts",
    "lib/visualLab/data/poiExtraIrelandOther.ts"
];

// Helper to wait a bit between requests to avoid rate-limiting
const delay = ms => new Promise(res => setTimeout(res, ms));

async function translateText(text) {
    if (!text || text.trim() === "") return text;
    try {
        await delay(500); // 500ms delay
        const res = await translate(text, { to: 'ro' });
        return res.text;
    } catch (e) {
        console.error("Translation failed for text:", text.substring(0, 30), e.message);
        // If it fails, fallback to original
        return text;
    }
}

async function processFiles() {
    for (const file of files) {
        if (!fs.existsSync(file)) continue;
        
        let content = fs.readFileSync(file, 'utf-8');
        let changed = false;

        const blockRegex = /(["']?)id\1\s*:\s*(["'])(.*?)\2([\s\S]*?)(?=(?:\n\s*(?:["']?)id\1\s*:|\Z|\n\s*\];))/g;
        
        let match;
        let blocks = [];
        while ((match = blockRegex.exec(content)) !== null) {
            blocks.push({
                fullMatch: match[0],
                id: match[3],
                content: match[4]
            });
        }
        console.log(`Found ${blocks.length} blocks in ${file}`);
        
        let newFileContent = content;

        for (const block of blocks) {
            let newBlock = block.fullMatch;
            let blockChanged = false;

            // descriptionAdvanced
            const descRegex = /("?descriptionAdvanced"?\s*:\s*\{)([\s\S]*?)\}/;
            const descMatch = newBlock.match(descRegex);
            if (descMatch) {
                const descContent = descMatch[2];
                const roMatch = descContent.match(/("?ro"?\s*:\s*)(["'])([\s\S]*?(?<!\\))\2/);
                const enMatch = descContent.match(/"?en"?\s*:\s*(["'])([\s\S]*?(?<!\\))\1/);
                const huMatch = descContent.match(/"?hu"?\s*:\s*(["'])([\s\S]*?(?<!\\))\1/);
                const deMatch = descContent.match(/"?de"?\s*:\s*(["'])([\s\S]*?(?<!\\))\1/);
                
                if (!roMatch || roMatch[3].trim() === "") {
                    let textToTranslate = "";
                    if (huMatch && huMatch[2].trim() !== "") textToTranslate = huMatch[2];
                    else if (deMatch && deMatch[2].trim() !== "") textToTranslate = deMatch[2];
                    else if (enMatch && enMatch[2].trim() !== "") textToTranslate = enMatch[2];

                    if (textToTranslate) {
                        console.log(`Translating descriptionAdvanced for ${block.id}...`);
                        let translated = await translateText(textToTranslate);
                        translated = translated.replace(/"/g, '\\"');
                        if (roMatch) {
                            newBlock = newBlock.replace(roMatch[0], `${roMatch[1]}"${translated}"`);
                        } else {
                            newBlock = newBlock.replace(descMatch[0], `${descMatch[1]}${descContent.trimEnd()},\n      "ro": "${translated}"\n    }`);
                        }
                        blockChanged = true;
                    } else {
                        console.log(`NO textToTranslate for desc of ${block.id}`);
                    }
                }
            } else {
                console.log(`No descMatch for ${block.id}`);
            }

            // factsAdvanced
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
                    else if (deMatch && deMatch[1].trim() !== "") arrText = deMatch[1];
                    else if (enMatch && enMatch[1].trim() !== "") arrText = enMatch[1];

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
                    } else {
                        console.log(`NO arrText for facts of ${block.id}`);
                    }
                }
            } else {
                console.log(`No factsMatch for ${block.id}`);
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