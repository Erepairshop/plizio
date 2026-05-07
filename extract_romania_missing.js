const fs = require('fs');

const file = fs.readFileSync('lib/visualLab/data/romaniaPoi.ts', 'utf8');

// A very simple regex to find all IDs in the file.
const ids = [...file.matchAll(/id: "([^"]+)"/g)].map(m => m[1]);

console.log("Total IDs:", ids.length);
