const fs = require('fs');
const cp = require('child_process');

const files = [
  'lib/visualLab/data/poiExtraBotswanaNatureV2.ts',
  'lib/visualLab/data/poiExtraBotswanaReliefV2.ts',
  'lib/visualLab/data/poiExtraBurkinafasoLifeV2.ts',
  'lib/visualLab/data/poiExtraCameroonLifeV2.ts',
  'lib/visualLab/data/poiExtraCameroonNatureV2.ts',
  'lib/visualLab/data/poiExtraColombiaCitiesV2.ts',
  'lib/visualLab/data/poiExtraColombiaEconomicV2.ts',
  'lib/visualLab/data/poiExtraColombiaHistoryV2.ts',
  'lib/visualLab/data/poiExtraColombiaLandmarksV2.ts',
  'lib/visualLab/data/poiExtraColombiaLifeV2.ts',
  'lib/visualLab/data/poiExtraColombiaNatureV2.ts',
  'lib/visualLab/data/poiExtraColombiaReliefV2.ts',
  'lib/visualLab/data/poiExtraDrcongoReliefV2.ts',
  'lib/visualLab/data/poiExtraFrenchguianaHistoryV2.ts',
  'lib/visualLab/data/poiExtraFrenchguianaLandmarksV2.ts',
  'lib/visualLab/data/poiExtraFrenchguianaLifeV2.ts',
  'lib/visualLab/data/poiExtraFrenchguianaNatureV2.ts',
  'lib/visualLab/data/poiExtraFrenchguianaReliefV2.ts',
  'lib/visualLab/data/poiExtraGuyanaHistoryV2.ts',
  'lib/visualLab/data/poiExtraGuyanaLandmarksV2.ts',
  'lib/visualLab/data/poiExtraGuyanaNatureV2.ts',
  'lib/visualLab/data/poiExtraIvorycoastNatureV2.ts',
  'lib/visualLab/data/poiExtraIvorycoastReliefV2.ts',
  'lib/visualLab/data/poiExtraLibyaLifeV2.ts',
  'lib/visualLab/data/poiExtraLibyaReliefV2.ts',
  'lib/visualLab/data/poiExtraMoroccoCitiesV2.ts',
  'lib/visualLab/data/poiExtraMoroccoLifeV2.ts',
  'lib/visualLab/data/poiExtraMozambiqueNatureV2.ts',
  'lib/visualLab/data/poiExtraNigeriaReliefV2.ts',
  'lib/visualLab/data/poiExtraParaguayEconomicV2.ts',
  'lib/visualLab/data/poiExtraParaguayLifeV2.ts',
  'lib/visualLab/data/poiExtraRwandaNatureV2.ts',
  'lib/visualLab/data/poiExtraSenegalLifeV2.ts',
  'lib/visualLab/data/poiExtraSomaliaCitiesV2.ts',
  'lib/visualLab/data/poiExtraSomaliaNatureV2.ts',
  'lib/visualLab/data/poiExtraSouthafricaReliefV2.ts',
  'lib/visualLab/data/poiExtraTanzaniaLifeV2.ts',
  'lib/visualLab/data/poiExtraTanzaniaNatureV2.ts',
  'lib/visualLab/data/poiExtraTanzaniaReliefV2.ts',
  'lib/visualLab/data/poiExtraUgandaNatureV2.ts',
  'lib/visualLab/data/poiExtraUruguayCitiesV2.ts',
  'lib/visualLab/data/poiExtraUruguayEconomicV2.ts',
  'lib/visualLab/data/poiExtraUruguayHistoryV2.ts',
  'lib/visualLab/data/poiExtraUruguayLandmarksV2.ts',
  'lib/visualLab/data/poiExtraUruguayLifeV2.ts',
  'lib/visualLab/data/poiExtraUruguayNatureV2.ts',
  'lib/visualLab/data/poiExtraUruguayReliefV2.ts',
  'lib/visualLab/data/poiExtraZambiaNatureV2.ts',
  'lib/visualLab/data/poiExtraZimbabweLifeV2.ts'
];

function deduplicateKeys(content) {
    // Regex to match descriptionAdvanced: { ... } and factsAdvanced: { ... }
    // We will find all `id: "..."` and process block by block.
    const blocks = content.split(/\n\s*\{\s*\n\s*id:/);
    if (blocks.length <= 1) return content;

    let newContent = blocks[0];
    for (let i = 1; i < blocks.length; i++) {
        let block = '\n  {\n    id:' + blocks[i];
        
        // Remove the first descriptionAdvanced and factsAdvanced if there are duplicates.
        let descCount = (block.match(/descriptionAdvanced\s*:/g) || []).length;
        if (descCount > 1) {
            // remove the first one. It usually spans until the next factsAdvanced or descriptionAdvanced or `}`
            block = block.replace(/descriptionAdvanced\s*:\s*\{[^{}]*\}\s*,?\s*(?=factsAdvanced|descriptionAdvanced)/, '');
            // sometimes it can have nested { } if not careful, but POI descriptions are flat { de: "", hu: "" }
        }
        
        let factsCount = (block.match(/factsAdvanced\s*:/g) || []).length;
        if (factsCount > 1) {
            block = block.replace(/factsAdvanced\s*:\s*\{[^{}]*\}\s*,?\s*(?=\s*\})/s, '');
            // wait, if we remove the first one, the regex should match the first factsAdvanced block:
            // replace the FIRST occurrence
            let firstFactsIdx = block.indexOf('factsAdvanced:');
            let nextKeyIdx = block.indexOf('descriptionAdvanced:', firstFactsIdx);
            if (nextKeyIdx === -1) nextKeyIdx = block.lastIndexOf('}'); // end of block
            
            // A safer regex to remove duplicate properties if they are exactly adjacent:
            // But they might not be adjacent. Let's just use a simple regex that matches `key: { ... },`
        }

        newContent += block;
    }
    return newContent;
}

for (const f of files) {
  try {
    if (fs.existsSync(f)) {
      let content = fs.readFileSync(f, 'utf-8');
      
      // 1. Specific regex for the double blocks.
      // e.g. `descriptionAdvanced: { de: "...", ... en: "" }\n    descriptionAdvanced: {`
      // We can just replace the first one if followed by the same key, or simply:
      content = content.replace(/descriptionAdvanced\s*:\s*\{[^{}]*\}\s*,\s*(?=descriptionAdvanced\s*:)/g, '');
      content = content.replace(/factsAdvanced\s*:\s*\{[^{}]*\}\s*,\s*(?=factsAdvanced\s*:)/g, '');
      content = content.replace(/descriptionAdvanced\s*:\s*\{[^{}]*\}\s*,\s*(?=factsAdvanced\s*:\s*\{[^{}]*\}\s*,\s*descriptionAdvanced\s*:)/g, '');
      content = content.replace(/factsAdvanced\s*:\s*\{[^{}]*\}\s*,\s*(?=\s*descriptionAdvanced\s*:)/g, '');
      
      // Let's do a more robust string replacement:
      // Find `descriptionAdvanced: { ... }` and if another exists in the same `{ ... id: ... }`, remove the first.
      
      let lines = content.split('\n');
      let out = [];
      let inObj = false;
      let seenDesc = false;
      let seenFacts = false;
      let skipDesc = false;
      let skipFacts = false;
      
      for (let i = 0; i < lines.length; i++) {
         let line = lines[i];
         
         // This line-by-line is tricky because objects span multiple lines.
      }
      
      // Let's use the simplest possible replace for the known artifact format:
      // Artifact format 1: 
      // descriptionAdvanced: { de: "...", hu: "...", ro: "...", en: "" }
      // factsAdvanced: { de: [], hu: ["..."], ro: ["..."], en: [] }
      // descriptionAdvanced: { ...
      
      // Let's remove the FIRST pair of descriptionAdvanced & factsAdvanced if they are immediately followed by another descriptionAdvanced.
      content = content.replace(/descriptionAdvanced\s*:\s*\{[^{}]*\}\s*,\s*factsAdvanced\s*:\s*\{[^{}]*\}\s*,\s*(?=descriptionAdvanced\s*:)/gs, '');
      
      // What if it is descriptionAdvanced, then descriptionAdvanced?
      content = content.replace(/descriptionAdvanced\s*:\s*\{[^{}]*\}\s*,\s*(?=descriptionAdvanced\s*:)/gs, '');
      content = content.replace(/factsAdvanced\s*:\s*\{[^{}]*\}\s*,\s*(?=factsAdvanced\s*:)/gs, '');

      // Sometimes factsAdvanced is at the end of the POI object, and there's a duplicate factsAdvanced before it.
      content = content.replace(/factsAdvanced\s*:\s*\{[^{}]*\}\s*,\s*(?=factsAdvanced\s*:)/gs, '');

      // In case they are separated by newlines:
      
      // One issue is `factsAdvanced: { ... }\n    }` where there's a trailing comma or no trailing comma.
      // If there are two factsAdvanced, let's remove the first one.
      let chunks = content.split('  {\n    id:');
      for(let i=1; i<chunks.length; i++) {
         let chunk = chunks[i];
         // count how many descriptionAdvanced
         let dMatches = [...chunk.matchAll(/descriptionAdvanced\s*:/g)];
         if (dMatches.length > 1) {
             // remove the first one. It goes from dMatches[0].index to the next `descriptionAdvanced` or `factsAdvanced`
             let start = dMatches[0].index;
             let nextKey = chunk.indexOf('factsAdvanced:', start);
             if (nextKey === -1 || nextKey > dMatches[1].index) {
                 nextKey = dMatches[1].index;
             }
             chunk = chunk.substring(0, start) + chunk.substring(nextKey);
         }
         
         let fMatches = [...chunk.matchAll(/factsAdvanced\s*:/g)];
         if (fMatches.length > 1) {
             let start = fMatches[0].index;
             // find the end of this object
             // it's a flat object `{ de: ..., en: ... }`
             let end = chunk.indexOf('}', start) + 1;
             // remove trailing comma and spaces
             let afterEnd = chunk.substring(end).replace(/^\s*,\s*/, '\n    ');
             chunk = chunk.substring(0, start) + afterEnd;
         }
         
         chunks[i] = chunk;
      }
      content = chunks.join('  {\n    id:');
      
      fs.writeFileSync(f, content, 'utf-8');
    }
  } catch(e) {
    console.error('Error fixing', f, e);
  }
}
console.log('Done deduplicating keys');
