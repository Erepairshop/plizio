
import fs from 'fs';
import path from 'path';

const files = [
  'lib/visualLab/data/polandPoi.ts',
  'lib/visualLab/data/poiExtraPolandCities.ts',
  'lib/visualLab/data/poiExtraPolandHistory.ts',
  'lib/visualLab/data/poiExtraPolandOther.ts'
];

const results = [];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  // Simple regex to find objects with id and name. 
  // This is a bit fragile but should work for typical TS data files.
  // We're looking for id: '...', name: '...', descriptionAdvanced: { ... }
  
  const poiRegex = /\{\s*id:\s*['"]([^'"]+)['"],\s*name:\s*['"]([^'"]+)['"]/g;
  let match;
  
  while ((match = poiRegex.exec(content)) !== null) {
    const id = match[1];
    const name = match[2];
    
    // Check if descriptionAdvanced exists and has a de field that isn't empty
    const poiBlockStart = match.index;
    // Find the end of the object (rough approximation)
    let poiBlockEnd = content.indexOf('},', poiBlockStart);
    if (poiBlockEnd === -1) poiBlockEnd = content.indexOf('}];', poiBlockStart);
    
    const poiBlock = content.substring(poiBlockStart, poiBlockEnd + 2);
    
    const hasDescDe = /descriptionAdvanced:\s*\{[^}]*de:\s*['"]([^'"]+)['"]/s.test(poiBlock);
    const descDeMatch = poiBlock.match(/descriptionAdvanced:\s*\{[^}]*de:\s*['"]([^'"]+)['"]/s);
    const existingDesc = descDeMatch ? descDeMatch[1] : '';

    results.push({
      id,
      name,
      file,
      hasDescDe: existingDesc.length > 5, // Simple check if it's more than just an empty string
      existingDesc
    });
  }
});

console.log(JSON.stringify(results, null, 2));
