const fs = require('fs');
const dir = 'lib/visualLab/data';

fs.readdirSync(dir).forEach(file => {
  if (!file.endsWith('.ts')) return;
  let txt = fs.readFileSync(dir + '/' + file, 'utf8');
  let modified = false;
  
  // merge descriptionAdvanced
  let oldTxt;
  do {
    oldTxt = txt;
    txt = txt.replace(/(descriptionAdvanced:\s*\{[^{}]*)\},\s*descriptionAdvanced:\s*\{/g, '$1,');
  } while(oldTxt !== txt);
  if (oldTxt !== txt) modified = true; // Wait, the do-while loop ends when oldTxt === txt, so this would be false. Let's fix this logic.

  // The logic:
  let modifiedHere = false;
  do {
    oldTxt = txt;
    txt = txt.replace(/(descriptionAdvanced:\s*\{[^{}]*)\},\s*descriptionAdvanced:\s*\{/g, '$1,');
    txt = txt.replace(/(factsAdvanced:\s*\{[^{}]*)\},\s*factsAdvanced:\s*\{/g, '$1,');
    if (oldTxt !== txt) modifiedHere = true;
  } while(oldTxt !== txt);

  if (modifiedHere) {
    fs.writeFileSync(dir + '/' + file, txt);
    console.log('Merged duplicates in', file);
  }
});
