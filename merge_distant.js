const fs = require('fs');
const dir = 'lib/visualLab/data';

fs.readdirSync(dir).forEach(file => {
  if (!file.endsWith('.ts')) return;
  let txt = fs.readFileSync(dir + '/' + file, 'utf8');
  let oldTxt = txt;

  // Split by POI objects. A POI object starts with '{' and ends with 'image: ... }'
  let result = [];
  let pos = 0;
  
  // We can just find all descriptionAdvanced and factsAdvanced in each POI.
  // But a simpler regex: match the first block, then find the second block and inject the keys.
  
  // Actually, let's use a simpler approach. If we find:
  // descriptionAdvanced: {\n      hu: "...",\n      ro: "..."\n    },
  // and later:
  // descriptionAdvanced: { ... }
  // We can extract the inner keys of the first block, delete the first block, and put the keys into the second block!
  
  const mergeBlocks = (propName) => {
    let regex = new RegExp(propName + ':\\s*\\{([^{}]+)\\}\\s*,([\\s\\S]*?)' + propName + ':\\s*\\{', 'g');
    txt = txt.replace(regex, (match, firstInner, middle) => {
      // firstInner contains 'hu: "...", ro: "..."'
      // we remove the first block and append firstInner to the second block
      return middle + propName + ': {\n' + firstInner + ',';
    });
  };

  mergeBlocks('descriptionAdvanced');
  mergeBlocks('factsAdvanced');
  mergeBlocks('description');
  mergeBlocks('facts');

  if (oldTxt !== txt) {
    fs.writeFileSync(dir + '/' + file, txt);
    console.log('Merged distant duplicates in', file);
  }
});
