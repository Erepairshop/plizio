const fs = require('fs');
const translate = require('google-translate-api-x');

const files = [
    "lib/visualLab/data/andorraPoi.ts",
    "lib/visualLab/data/poiExtraAndorraCities.ts",
    "lib/visualLab/data/poiExtraAndorraOther.ts"
];

async function translateText(text) {
    if (!text || text.trim() === '') return text;
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
        if (!fs.existsSync(file)) {
            console.log("File not found:", file);
            continue;
        }
        
        let content = fs.readFileSync(file, 'utf-8');
        let changed = false;

        const blockRegex = /(["']?)id\1\s*:\s*["']([^"']+)["']([\s\S]*?)(?=(?:\n\s*(?:["']?)id\1\s*:|\Z|\n\s*\];))/g;
        
        let match;
        let blocks = [];
        while ((match = blockRegex.exec(content)) !== null) {
            blocks.push({
                fullMatch: match[0],
                id: match[2],
                content: match[3],
                index: match.index
            });
        }
        
        let newFileContent = content;

        for (const block of blocks) {
            let newBlock = block.fullMatch;
            let blockChanged = false;

            // 1. Process descriptionAdvanced
            const descRegex = /(descriptionAdvanced\s*:\s*\{)([\s\S]*?)(\})/;
            const descMatch = newBlock.match(descRegex);
            if (descMatch) {
                const descContent = descMatch[2];
                const roMatch = descContent.match(/(ro\s*:\s*)["']([\s\S]*?(?<!\\))["']/);
                
                if (roMatch && roMatch[2].trim() === "") {
                    // find hu or de or en
                    const huMatch = descContent.match(/hu\s*:\s*["']([\s\S]*?(?<!\\))["']/);
                    const enMatch = descContent.match(/en\s*:\s*["']([\s\S]*?(?<!\\))["']/);
                    const deMatch = descContent.match(/de\s*:\s*["']([\s\S]*?(?<!\\))["']/);
                    
                    let textToTranslate = "";
                    if (huMatch && huMatch[1].trim() !== "") textToTranslate = huMatch[1];
                    else if (enMatch && enMatch[1].trim() !== "") textToTranslate = enMatch[1];
                    else if (deMatch && deMatch[1].trim() !== "") textToTranslate = deMatch[1];

                    if (textToTranslate) {
                        console.log(`Translating description for ${block.id}...`);
                        let translated = await translateText(textToTranslate);
                        translated = translated.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
                        const newRoStr = `${roMatch[1]}"${translated}"`;
                        const newDescContent = descContent.replace(roMatch[0], newRoStr);
                        newBlock = newBlock.replace(descMatch[0], `${descMatch[1]}${newDescContent}${descMatch[3]}`);
                        blockChanged = true;
                    }
                }
            }

            // 2. Process factsAdvanced
            const factsRegex = /(factsAdvanced\s*:\s*\{)([\s\S]*?)(\})/;
            const factsMatch = newBlock.match(factsRegex);
            if (factsMatch) {
                const factsContent = factsMatch[2];
                const roMatch = factsContent.match(/(ro\s*:\s*)\[([\s\S]*?)\]/);
                
                if (roMatch && roMatch[2].trim() === "") {
                    const huMatch = factsContent.match(/hu\s*:\s*\[([\s\S]*?)\]/);
                    const enMatch = factsContent.match(/en\s*:\s*\[([\s\S]*?)\]/);
                    const deMatch = factsContent.match(/de\s*:\s*\[([\s\S]*?)\]/);
                    
                    let itemsToTranslate = [];
                    if (huMatch && huMatch[1].trim() !== "") {
                        itemsToTranslate = [...huMatch[1].matchAll(/["']([\s\S]*?(?<!\\))["']/g)].map(m => m[1]);
                    } else if (enMatch && enMatch[1].trim() !== "") {
                        itemsToTranslate = [...enMatch[1].matchAll(/["']([\s\S]*?(?<!\\))["']/g)].map(m => m[1]);
                    } else if (deMatch && deMatch[1].trim() !== "") {
                        itemsToTranslate = [...deMatch[1].matchAll(/["']([\s\S]*?(?<!\\))["']/g)].map(m => m[1]);
                    }

                    if (itemsToTranslate.length > 0) {
                        console.log(`Translating facts for ${block.id}...`);
                        let translatedItems = [];
                        for (let item of itemsToTranslate) {
                            let trans = await translateText(item);
                            trans = trans.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
                            translatedItems.push(`"${trans}"`);
                        }
                        const newRoStr = `${roMatch[1]}[${translatedItems.join(", ")}]`;
                        const newFactsContent = factsContent.replace(roMatch[0], newRoStr);
                        newBlock = newBlock.replace(factsMatch[0], `${factsMatch[1]}${newFactsContent}${factsMatch[3]}`);
                        blockChanged = true;
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
            console.log(`Updated ${file}`);
        }
    }
}

processFiles().then(() => console.log("Done")).catch(console.error);