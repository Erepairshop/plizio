const fs = require('fs');
const filePath = '/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraRo2.ts';
let content = fs.readFileSync(filePath, 'utf8');

// The issue is:
// facts: {
//   ...
// }
// descriptionAdvanced: {

// It should be:
// facts: {
//   ...
// },
// descriptionAdvanced: {

content = content.replace(/\n\s*\}\n\s*descriptionAdvanced:/g, '\n    },\n    descriptionAdvanced:');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed missing commas');
