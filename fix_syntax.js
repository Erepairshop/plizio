const fs = require('fs');
const dir = 'lib/visualLab/data';

fs.readdirSync(dir).forEach(file => {
  if (!file.endsWith('.ts')) return;
  let txt = fs.readFileSync(dir + '/' + file, 'utf8');
  let modified = false;
  
  if (txt.match(/},\s*,\s*([a-z]{2}):\s*\[/)) {
    txt = txt.replace(/},\s*,\s*([a-z]{2}):\s*\[/g, '},\n    factsAdvanced: {\n      $1: [');
    modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(dir + '/' + file, txt);
    console.log('Fixed factsAdvanced in', file);
  }
});
