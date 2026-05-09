const fs = require('fs');

let file = 'lib/visualLab/data/poiExtraCubaCitiesV2.ts';
let content = fs.readFileSync(file, 'utf8');

// The issue is:
//       en: "..."
//     ,
//     descriptionAdvanced:
content = content.replace(/\"\s*\r?\n\s*,\s*\r?\n\s*descriptionAdvanced:/g, '\"\n    },\n    descriptionAdvanced:');
fs.writeFileSync(file, content);
console.log('Fixed Cuba');
