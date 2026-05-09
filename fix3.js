const fs = require('fs');

['lib/visualLab/data/poiExtraUruguayHistoryV2.ts', 'lib/visualLab/data/poiExtraUruguayNatureV2.ts'].forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/\]\,\s*\r?\n\s*facts:/g, ']\n    },\n    facts:');
  fs.writeFileSync(file, content);
});
console.log('Fixed Uruguay');
