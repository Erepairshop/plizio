const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'lib/visualLab/data');

const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));
let totalFixed = 0;

files.forEach(f => {
    let p = path.join(dir, f);
    let content = fs.readFileSync(p, 'utf8');
    let original = content;

    // Fix missing comma after facts object
    // }\n    factsAdvanced:
    content = content.replace(/\}(\s*)factsAdvanced:/g, '},$1factsAdvanced:');
    
    // Also check if there's any other place missing a comma like "]" before factsAdvanced
    content = content.replace(/\](\s*)factsAdvanced:/g, '],$1factsAdvanced:');
    content = content.replace(/\"(\s*)factsAdvanced:/g, '",$1factsAdvanced:');

    if (content !== original) {
        fs.writeFileSync(p, content, 'utf8');
        totalFixed++;
    }
});

console.log('Fixed ' + totalFixed + ' files.');