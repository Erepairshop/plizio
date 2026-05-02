const fs = require('fs');
const translate = require('google-translate-api-x');

const file = "lib/visualLab/data/luxembourgPoi.ts";

async function translateText(text) {
    if (!text || text.trim() === "") return "";
    try {
        const res = await translate(text, { to: 'ro' });
        return res.text;
    } catch (e) {
        console.error("Translation failed:", e);
        return text;
    }
}

async function processFile() {
    let content = fs.readFileSync(file, 'utf-8');
    let changed = false;

    const mainRegex = /id:\s*"([^"]+)"([\s\S]*?)descriptionAdvanced:\s*\{([^}]*)\}([\s\S]*?)factsAdvanced:\s*\{([^}]*)\}/g;
    
    let match;
    let updates = [];
    
    while ((match = mainRegex.exec(content)) !== null) {
        const fullMatch = match[0];
        const id = match[1];
        const preDesc = match[2];
        const descContent = match[3];
        const preFacts = match[4];
        const factsContent = match[5];
        
        let roDescMatch = descContent.match(/ro:\s*"([^"]*)"/);
        let roFactsMatch = factsContent.match(/ro:\s*\[([\s\S]*?)\]/);
        
        let newDescContent = descContent;
        let newFactsContent = factsContent;
        let blockChanged = false;

        // descriptionAdvanced translation
        if (roDescMatch && roDescMatch[1].trim() === "") {
            let deDescMatch = descContent.match(/de:\s*"([^"]*)"/);
            let enDescMatch = descContent.match(/en:\s*"([^"]*)"/);
            
            let textToTranslate = "";
            if (deDescMatch && deDescMatch[1].trim() !== "") textToTranslate = deDescMatch[1];
            else if (enDescMatch && enDescMatch[1].trim() !== "") textToTranslate = enDescMatch[1];

            if (textToTranslate) {
                console.log(`Translating description for ${id}...`);
                let translated = await translateText(textToTranslate);
                translated = translated.replace(/"/g, '\\"');
                newDescContent = newDescContent.replace(roDescMatch[0], `ro: "${translated}"`);
                blockChanged = true;
            }
        }

        // factsAdvanced translation
        if (roFactsMatch && roFactsMatch[1].trim() === "") {
            let deFactsMatch = factsContent.match(/de:\s*\[([\s\S]*?)\]/);
            let enFactsMatch = factsContent.match(/en:\s*\[([\s\S]*?)\]/);
            
            let arrText = "";
            if (deFactsMatch && deFactsMatch[1].trim() !== "") arrText = deFactsMatch[1];
            else if (enFactsMatch && enFactsMatch[1].trim() !== "") arrText = enFactsMatch[1];

            if (arrText) {
                const items = arrText.match(/"([^"\\]*(?:\\.[^"\\]*)*)"/g) || [];
                let translatedItems = [];
                for (let item of items) {
                    let cleanItem = item.replace(/^"|"$/g, '').replace(/\\"/g, '"');
                    console.log(`Translating fact for ${id}...`);
                    let translated = await translateText(cleanItem);
                    translatedItems.push(`\n        "${translated.replace(/"/g, '\\"')}"`);
                }
                
                if (translatedItems.length > 0) {
                    newFactsContent = newFactsContent.replace(roFactsMatch[0], `ro: [${translatedItems.join(",")}\n      ]`);
                    blockChanged = true;
                }
            }
        }

        if (blockChanged) {
            const newMatch = `id: "${id}"${preDesc}descriptionAdvanced: {${newDescContent}}${preFacts}factsAdvanced: {${newFactsContent}}`;
            updates.push({ old: fullMatch, new: newMatch });
        }
    }
    
    for (const update of updates) {
        content = content.replace(update.old, update.new);
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(file, content, 'utf-8');
        console.log(`Saved updates to ${file}`);
    } else {
        console.log(`No updates needed for ${file}`);
    }
}

processFile().then(() => console.log('Done!'));