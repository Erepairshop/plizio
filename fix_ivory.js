const fs = require('fs');
const file = 'lib/visualLab/data/poiExtraIvorycoastLandmarksV2.ts';
let txt = fs.readFileSync(file, 'utf8');

// The pattern is:
// de: "Some new text."Leftover text."
// So we have a line that has: de: "..."...".
// We can just use a regex to fix it:
const lines = txt.split('\n');
for (let i=0; i<lines.length; i++) {
  let line = lines[i];
  if (line.match(/de:\s*"([^"]+)"([^"]+)"/)) {
    // replace it with just the first part
    lines[i] = line.replace(/de:\s*"([^"]+)".*$/, 'de: "$1",');
    // Note: if there's no trailing comma on that line originally, maybe we don't need it.
    // Actually in descriptionAdvanced, there might be other keys.
    // Let's just do:
    lines[i] = line.replace(/de:\s*"([^"]+)".*?$/, 'de: "$1"');
  }
}
fs.writeFileSync(file, lines.join('\n'));
console.log('Fixed ivorycoast');