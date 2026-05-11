const fs = require('fs');
const config = JSON.parse(fs.readFileSync('tsconfig.json', 'utf8'));
config.include = ['lib/visualLab/data/poiExtraNamibiaLandmarksV2.ts'];
fs.writeFileSync('tsconfig2.json', JSON.stringify(config, null, 2));
