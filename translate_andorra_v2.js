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
        if (!fs.existsSync(file)) continue;
        let content = fs.readFileSync(file, 'utf-8');
        let changed = false;

        // Split by "id: "
        const parts = content.split(/id:\s*["']/);
        if (parts.length < 2) continue;

        let newContent = parts[0];

        for (let i = 1; i < parts.length; i++) {
            let part = parts[i];
            const idMatch = part.match(/^([^"']+)["']/);
            if (!idMatch) {
                newContent += 'id: "' + part;
                continue;
            }
            const id = idMatch[1];
            let partChanged = false;

            // 1. Process descriptionAdvanced
            const descRegex = /(descriptionAdvanced\s*:\s*\{)([\s\S]*?)(\})/;
            const descMatch = part.match(descRegex);
            if (descMatch) {
                const descContent = descMatch[2];
                const roMatch = descContent.match(/(ro\s*:\s*)["']([\s\S]*?(?<!\\))["']/);
                
                if (!roMatch || (roMatch && roMatch[2].trim() === "")) {
                    const huMatch = descContent.match(/hu\s*:\s*["']([\s\S]*?(?<!\\))["']/);
                    const enMatch = descContent.match(/en\s*:\s*["']([\s\S]*?(?<!\\))["']/);
                    const deMatch = descContent.match(/de\s*:\s*["']([\s\S]*?(?<!\\))["']/);
                    
                    let textToTranslate = "";
                    if (huMatch && huMatch[1].trim() !== "") textToTranslate = huMatch[1];
                    else if (enMatch && enMatch[1].trim() !== "") textToTranslate = enMatch[1];
                    else if (deMatch && deMatch[1].trim() !== "") textToTranslate = deMatch[1];

                    if (textToTranslate) {
                        console.log(`Translating description for ${id}...`);
                        let translated = await translateText(textToTranslate);
                        translated = translated.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
                        if (roMatch) {
                            const newRoStr = `${roMatch[1]}"${translated}"`;
                            const newDescContent = descContent.replace(roMatch[0], newRoStr);
                            part = part.replace(descMatch[0], `${descMatch[1]}${newDescContent}${descMatch[3]}`);
                        } else {
                            // If ro is completely missing, append it
                            const newDescContent = descContent.replace(/(\s*)$/, `,\n        ro: "${translated}"$1`);
                            part = part.replace(descMatch[0], `${descMatch[1]}${newDescContent}${descMatch[3]}`);
                        }
                        partChanged = true;
                    }
                }
            }

            // 2. Process factsAdvanced
            const factsRegex = /(factsAdvanced\s*:\s*\{)([\s\S]*?)(\})/;
            const factsMatch = part.match(factsRegex);
            if (factsMatch) {
                const factsContent = factsMatch[2];
                const roMatch = factsContent.match(/(ro\s*:\s*)\[([\s\S]*?)\]/);
                
                if (!roMatch || (roMatch && roMatch[2].trim() === "")) {
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
                        console.log(`Translating facts for ${id}...`);
                        let translatedItems = [];
                        for (let item of itemsToTranslate) {
                            let trans = await translateText(item);
                            trans = trans.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
                            translatedItems.push(`"${trans}"`);
                        }
                        if (roMatch) {
                            const newRoStr = `${roMatch[1]}[${translatedItems.join(", ")}]`;
                            const newFactsContent = factsContent.replace(roMatch[0], newRoStr);
                            part = part.replace(factsMatch[0], `${factsMatch[1]}${newFactsContent}${factsMatch[3]}`);
                        } else {
                            const newFactsContent = factsContent.replace(/(\s*)$/, `,\n        ro: [${translatedItems.join(", ")}]$1`);
                            part = part.replace(factsMatch[0], `${factsMatch[1]}${newFactsContent}${factsMatch[3]}`);
                        }
                        partChanged = true;
                    }
                }
            }

            if (partChanged) {
                changed = true;
            }
            // Put it back together with "id: " + quote
            // We know the quote was lost in split, we can use double quotes by default since TS accepts both,
            // but let's check what it was. Actually, we split by `id:\s*["']` so we lost the exact whitespace and quote.
            // Let's just use `id: "`
            newContent += 'id: "' + part;
        }

        if (changed) {
            fs.writeFileSync(file, newContent, 'utf-8');
            console.log(`Updated ${file}`);
        }
    }
}

processFiles().then(() => console.log("Done")).catch(console.error);