import fs from 'fs';

const tsFile = 'lib/visualLab/data/hungaryPoi.ts';
let content = fs.readFileSync(tsFile, 'utf-8');

const regex = /\{\s*id:\s*"([^"]+)",[\s\S]*?name:\s*\{[^}]*"en":\s*"([^"]+)"[\s\S]*?description:\s*\{[^}]*"en":\s*"([^"]+)"[\s\S]*?descriptionAdvanced:\s*\{([\s\S]*?)\}[\s\S]*?factsAdvanced:\s*\{([\s\S]*?)\}/g;

let match;
let missing = [];

while ((match = regex.exec(content)) !== null) {
  const id = match[1];
  const nameEn = match[2];
  const descEn = match[3];
  const descAdv = match[4];
  const factsAdv = match[5];
  
  const hasEnDesc = /"en":\s*"\s*[^"]+/.test(descAdv);
  if (!hasEnDesc) {
    missing.push({ id, nameEn, descEn });
  }
}

console.log(`Found ${missing.length} POIs missing 'en' fields`);
fs.writeFileSync('missing_hungary_en.json', JSON.stringify(missing, null, 2));
