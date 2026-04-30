
import fs from 'fs';

const files = [
  'lib/visualLab/data/polandPoi.ts',
  'lib/visualLab/data/poiExtraPolandCities.ts',
  'lib/visualLab/data/poiExtraPolandHistory.ts',
  'lib/visualLab/data/poiExtraPolandOther.ts'
];

const results = [];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  
  // Use a more robust way to find POI objects
  // We look for objects that have an 'id' and 'name' property
  const poiRegex = /\{\s*id:\s*['"]([^'"]+)['"],\s*(?:type:[^,]+,)?\s*(?:parent:[^,]+,)?\s*(?:coords:[^,]+,)?\s*name:\s*\{[^}]*de:\s*['"]([^'"]+)['"]/g;
  
  let match;
  while ((match = poiRegex.exec(content)) !== null) {
    const id = match[1];
    const nameDe = match[2];
    
    // Find the bounds of this POI object
    let poiBlockStart = match.index;
    let braceCount = 0;
    let poiBlockEnd = -1;
    
    for (let i = poiBlockStart; i < content.length; i++) {
      if (content[i] === '{') braceCount++;
      if (content[i] === '}') braceCount--;
      if (braceCount === 0 && i > poiBlockStart) {
        poiBlockEnd = i;
        break;
      }
    }
    
    if (poiBlockEnd !== -1) {
      const poiBlock = content.substring(poiBlockStart, poiBlockEnd + 1);
      
      // Extract existing descriptionAdvanced.de
      const descDeMatch = poiBlock.match(/descriptionAdvanced:\s*\{[^}]*de:\s*['"]([^'"]*)['"]/s);
      const existingDescDe = descDeMatch ? descDeMatch[1] : '';
      
      // Extract existing factsAdvanced.de
      const factsDeMatch = poiBlock.match(/factsAdvanced:\s*\{[^}]*de:\s*\[([^\]]*)\]/s);
      let existingFactsDe = [];
      if (factsDeMatch && factsDeMatch[1].trim()) {
          // Very basic extraction of array elements
          existingFactsDe = factsDeMatch[1].split(',').map(f => f.trim().replace(/^['"]|['"]$/g, '')).filter(f => f.length > 0);
      }

      results.push({
        id,
        nameDe,
        file,
        hasDescDe: existingDescDe.length > 50, // More than a placeholder
        existingDescDe,
        hasFactsDe: existingFactsDe.length >= 6,
        existingFactsDe
      });
    }
  }
});

console.log(JSON.stringify(results, null, 2));
