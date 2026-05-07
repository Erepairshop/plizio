const fs = require('fs');

const file = 'lib/visualLab/data/irelandPoi.ts';
const content = fs.readFileSync(file, 'utf8');
const idRegex = /id:\s*"([^"]+)"/g;
let match;
let noDescAdv = [];

while ((match = idRegex.exec(content)) !== null) {
  const startIdx = match.index;
  const nextMatch = content.indexOf('id:', startIdx + 10);
  const chunk = nextMatch !== -1 ? content.slice(startIdx, nextMatch) : content.slice(startIdx);
  if (!chunk.includes('descriptionAdvanced')) {
    noDescAdv.push(match[1]);
  }
}
console.log(`POIs without descriptionAdvanced: ${noDescAdv.length}`);
console.log(noDescAdv.slice(0, 10));
