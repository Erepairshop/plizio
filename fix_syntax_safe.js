const fs = require('fs');
const dir = 'lib/visualLab/data';

let filesFixed = 0;

fs.readdirSync(dir).forEach(file => {
  if (!file.endsWith('.ts')) return;
  let txt = fs.readFileSync(dir + '/' + file, 'utf8');
  let oldTxt = txt;

  txt = txt.replace(/},,/g, '},');
  txt = txt.replace(/\}\s*\}\s*facts:\s*\{/g, '},\n    facts: {');
  txt = txt.replace(/\}\s*\}\s*description:\s*\{/g, '},\n    description: {');
  txt = txt.replace(/\}\s*\}\s*descriptionAdvanced:\s*\{/g, '},\n    descriptionAdvanced: {');
  txt = txt.replace(/\}\s*\}\s*factsAdvanced:\s*\{/g, '},\n    factsAdvanced: {');
  txt = txt.replace(/\}\s*\}\s*image:\s*"/g, '},\n    image: "');
  
  // Missing factsAdvanced wrapper if facts are added with `}, , en: [`
  txt = txt.replace(/},\s*,\s*([a-z]{2}):\s*\[/g, '},\n    factsAdvanced: {\n      $1: [');

  if (oldTxt !== txt) {
    fs.writeFileSync(dir + '/' + file, txt);
    console.log('Fixed syntax safely in', file);
    filesFixed++;
  }
});

console.log('Total files fixed safely:', filesFixed);
