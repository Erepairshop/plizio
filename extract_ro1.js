const fs = require('fs');
const ts = require('typescript');

const code = fs.readFileSync('lib/visualLab/data/poiExtraRo1.ts', 'utf8');
const result = ts.transpileModule(code, { compilerOptions: { module: ts.ModuleKind.CommonJS } });
fs.writeFileSync('.tmp_ro1.js', result.outputText);

const pois = require('./.tmp_ro1.js').poiExtraRo1;
fs.writeFileSync('ro1_pois.json', JSON.stringify(pois, null, 2));
