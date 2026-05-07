const fs = require('fs');
const dir = 'lib/visualLab/data';

fs.readdirSync(dir).forEach(file => {
  if (!file.endsWith('.ts')) return;
  let txt = fs.readFileSync(dir + '/' + file, 'utf8');
  let oldTxt = txt;

  txt = txt.replace(/},,/g, '},');
  txt = txt.replace(/\}\s*\}\s*facts:\s*\{/g, '},\n    facts: {');
  txt = txt.replace(/\}\s*\}\s*description:\s*\{/g, '},\n    description: {');
  txt = txt.replace(/\}\s*\}\s*descriptionAdvanced:\s*\{/g, '},\n    descriptionAdvanced: {');
  txt = txt.replace(/\}\s*\}\s*factsAdvanced:\s*\{/g, '},\n    factsAdvanced: {');

  // Merge duplicates for descriptionAdvanced
  let modifiedHere = false;
  do {
    let temp = txt;
    txt = txt.replace(/(descriptionAdvanced:\s*\{[^{}]*)\},\s*descriptionAdvanced:\s*\{/g, '$1,');
    if (temp === txt) break;
  } while(true);

  // Merge duplicates for factsAdvanced
  do {
    let temp = txt;
    txt = txt.replace(/(factsAdvanced:\s*\{[^{}]*)\},\s*factsAdvanced:\s*\{/g, '$1,');
    if (temp === txt) break;
  } while(true);
  
  // Merge duplicates for description
  do {
    let temp = txt;
    txt = txt.replace(/(description:\s*\{[^{}]*)\},\s*description:\s*\{/g, '$1,');
    if (temp === txt) break;
  } while(true);

  // Merge duplicates for facts
  do {
    let temp = txt;
    txt = txt.replace(/(facts:\s*\{[^{}]*)\},\s*facts:\s*\{/g, '$1,');
    if (temp === txt) break;
  } while(true);

  if (oldTxt !== txt) {
    fs.writeFileSync(dir + '/' + file, txt);
    console.log('Completely fixed', file);
  }
});
