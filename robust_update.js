import fs from 'fs';

function updateFile(filePath, updates) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  for (const [id, data] of Object.entries(updates)) {
    // Find the POI block starting with the id
    const startIdx = content.indexOf(`id: "${id}"`);
    if (startIdx === -1) continue;
    
    // Find the end of the POI block (rough estimate)
    let endIdx = content.indexOf('  },', startIdx);
    if (endIdx === -1) endIdx = content.indexOf('  }', startIdx);
    
    let block = content.substring(startIdx, endIdx + 4);
    
    if (data.desc) {
      block = block.replace(/descriptionAdvanced:\s*{[\s\S]*?ro:\s*""/, (m) => m.replace(/ro:\s*""/, `ro: "${data.desc}"`));
    }
    
    if (data.facts) {
      block = block.replace(/factsAdvanced:\s*{[\s\S]*?ro:\s*\[\s*\]/, (m) => m.replace(/ro:\s*\[\s*\]/, `ro: [\n        "${data.facts.join('",\n        "')}"\n      ]`));
    }
    
    content = content.substring(0, startIdx) + block + content.substring(startIdx + block.length);
  }
  
  fs.writeFileSync(filePath, content);
}

// Example for poiExtraHu1.ts
const hu1Updates = {
  "city-obuda-extra": { facts: ["Óbuda este cel mai vechi sector al Budapestei, având o istorie care urcă până în epoca romană.", "Numele sectorului înseamnă 'Buda Veche' în limba maghiară.", "Aici se află rămășițele faimosului oraș roman Aquincum și două amfiteatre antice.", "În secolul al XIX-lea, Óbuda era un centru industrial prosper, renumit pentru fabricile sale de textile.", "Piața principală (Fő tér) păstrează o atmosferă barocă fermecătoare, cu clădiri istorice bine conservate.", "Podul Árpád face legătura între Óbuda și partea de est a orașului, Pest.", "Sectorul găzduiește anual festivaluri culturale majore în insula Hajógyári.", "Muzeul Kiscelli din apropiere prezintă istoria Budapestei într-o fostă mănăstire barocă."] },
  // ... and so on
};
// Actually, I'll generate the content for all in a loop or similar.
