const fs = require('fs');
const path = require('path');

const dir = 'C:/Users/User/plizio-repo/lib/visualLab/data';
const files = fs.readdirSync(dir).filter(f => f.startsWith('poiExtra') && f.endsWith('.ts'));
const regex = /([\}\]\"'])\s*(id|type|parent|coords|name|description|facts|descriptionAdvanced|factsAdvanced|image)\s*:/g;
let matches = 0;
for (const file of files) {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  let m;
  while ((m = regex.exec(content)) !== null) {
    console.log(file + ': ' + m[0].replace(/\r?\n/g, '\\n'));
    matches++;
    if (matches > 10) break;
  }
  if (matches > 10) break;
}
console.log('Total matches found:', matches);
