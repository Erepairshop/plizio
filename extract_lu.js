const fs = require('fs');

const content = fs.readFileSync('lib/visualLab/data/luxembourgPoi.ts', 'utf-8');
const regex = /id:\s*"([^"]+)"[\s\S]*?name:\s*\{([^}]*)\}[\s\S]*?descriptionAdvanced:\s*\{([^}]*)\}[\s\S]*?factsAdvanced:\s*\{([^}]*)\}/g;

let match;
let missing = [];

while ((match = regex.exec(content)) !== null) {
  const id = match[1];
  const nameBlock = match[2];
  const descBlock = match[3];
  const factsBlock = match[4];
  
  const deNameMatch = nameBlock.match(/de:\s*"([^"]*)"/);
  const deName = deNameMatch ? deNameMatch[1] : id;
  
  const deDescMatch = descBlock.match(/de:\s*"([^"]*)"/);
  const deDesc = deDescMatch ? deDescMatch[1] : "";
  
  const deFactsMatch = factsBlock.match(/de:\s*\[([\s\S]*?)\]/);
  let deFacts = [];
  if (deFactsMatch) {
     const strings = deFactsMatch[1].match(/"([^"]*)"/g);
     if (strings) deFacts = strings.map(s => s.slice(1, -1));
  }
  
  const roDescMatch = descBlock.match(/ro:\s*"([^"]*)"/);
  const roFactsMatch = factsBlock.match(/ro:\s*\[([\s\S]*?)\]/);
  
  let isMissing = false;
  if (!roDescMatch || roDescMatch[1].trim() === '') isMissing = true;
  if (!roFactsMatch || roFactsMatch[1].trim() === '') isMissing = true;
  
  if (isMissing) {
    missing.push({
      id,
      name: deName,
      deDesc,
      deFacts
    });
  }
}

fs.writeFileSync('missing_lu.json', JSON.stringify(missing, null, 2));
console.log(`Saved ${missing.length} items to missing_lu.json`);
