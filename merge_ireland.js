const fs = require('fs');
let allData = {};
for (let i = 1; i <= 4; i++) {
  const file = `ireland_out_${i}.json`;
  if (fs.existsSync(file)) {
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    allData = { ...allData, ...data };
  }
}
fs.writeFileSync('all_ireland_out.json', JSON.stringify(allData, null, 2), 'utf8');
console.log(`Merged ${Object.keys(allData).length} POIs into all_ireland_out.json`);
