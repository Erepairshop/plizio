const fs = require('fs');
const dir = 'lib/visualLab/data';

fs.readdirSync(dir).forEach(file => {
  if (!file.endsWith('.ts')) return;
  let txt = fs.readFileSync(dir + '/' + file, 'utf8');
  let modified = false;
  
  if (txt.match(/\}\s*\}\s*image:\s*"/)) {
    txt = txt.replace(/\}\s*\}\s*image:\s*"/g, '},\n    image: "');
    modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(dir + '/' + file, txt);
    console.log('Fixed image syntax in', file);
  }
});
