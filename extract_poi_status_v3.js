
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
  
  // Find "id: '...'"
  const idRegex = /id:\s*['"]([^'"]+)['"]/g;
  
  let match;
  while ((match = idRegex.exec(content)) !== null) {
    const id = match[1];
    
    // Skip if it's the "poland" id which is the country object (usually at the top)
    // Actually, user wants all POIs, but let's see.
    
    // Find the bounds of this POI object
    // Find the starting '{' before this 'id:'
    let poiBlockStart = content.lastIndexOf('{', match.index);
    if (poiBlockStart === -1) continue;
    
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
      
      // Check if this is a POI object by checking if it has a 'name' property
      const nameMatch = poiBlock.match(/name:\s*\{[^}]*de:\s*['"]([^'"]+)['"]/);
      if (!nameMatch) continue;
      
      const nameDe = nameMatch[1];
      
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

// Deduplicate by ID
const uniqueResults = [];
const seenIds = new Set();
for (const item of results) {
    if (!seenIds.has(item.id)) {
        seenIds.add(item.id);
        uniqueResults.push(item);
    }
}

console.log(JSON.stringify(uniqueResults, null, 2));
