const fs = require('fs');
const path = require('path');

const dir = 'lib/visualLab/data';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));

let fixedFiles = 0;
files.forEach(file => {
  let filepath = path.join(dir, file);
  let content = fs.readFileSync(filepath, 'utf8');
  let original = content;
  
  // Fix 1: Missing closing brace for description
  content = content.replace(/\"\s*\r?\n\s*,\s*\r?\n\s*descriptionAdvanced:/g, '\"\n    },\n    descriptionAdvanced:');
  
  // Fix 2: Missing closing brace for factsAdvanced before facts
  content = content.replace(/\]\,\s*\r?\n\s*facts:/g, ']\n    },\n    facts:');
  
  if (content !== original) {
    fs.writeFileSync(filepath, content);
    fixedFiles++;
    console.log('Fixed', file);
  }
});
console.log('Total fixed files:', fixedFiles);
