const fs = require('fs');

const files = [
  'lib/visualLab/data/poiExtraFrenchguianaHistoryV2.ts',
  'lib/visualLab/data/poiExtraFrenchguianaLandmarksV2.ts',
  'lib/visualLab/data/poiExtraFrenchguianaLifeV2.ts',
  'lib/visualLab/data/poiExtraFrenchguianaNatureV2.ts',
  'lib/visualLab/data/poiExtraFrenchguianaReliefV2.ts'
];

for (const f of files) {
  try {
    if (fs.existsSync(f)) {
      let content = fs.readFileSync(f, 'utf-8');
      
      // Fix descriptionAdvanced missing ro, en
      content = content.replace(/descriptionAdvanced\s*:\s*\{\s*(de:\s*".*?"),\s*(hu:\s*".*?")\s*\}/g, 'descriptionAdvanced: { $1, $2, ro: "", en: "" }');
      
      // Fix factsAdvanced missing ro, en
      content = content.replace(/factsAdvanced\s*:\s*\{\s*(de:\s*\[.*?\]),\s*(hu:\s*\[.*?\])\s*\}/g, 'factsAdvanced: { $1, $2, ro: [], en: [] }');
      
      fs.writeFileSync(f, content, 'utf-8');
    }
  } catch(e) {
    console.error('Error fixing', f, e);
  }
}
console.log('Fixed French Guiana files.');
