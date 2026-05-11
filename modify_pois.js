const fs = require('fs');
const path = 'C:\\Users\\User\\plizio-repo\\lib\\visualLab\\data\\poiExtraBangladeshCitiesV2.ts';
let content = fs.readFileSync(path, 'utf8');

// The goal is to insert '    facts: {},\n' after the closing brace of the description object.
// Description objects look like:
// description: {
//   de: "...",
//   ...
//   en: "...",
// },

// We search for description: { ... } and insert after it.
// We use a regex that matches the description block.
// description: { [anything until the matching closing brace] }

let count = 0;
content = content.replace(/(description: \{[\s\S]*?\n\s{4}\},)/g, (match) => {
    count++;
    // Check if facts: already exists right after this match (ignoring whitespace/comments)
    // We look ahead in the original content if possible, but here we can just check if we are already adding it or if it's there.
    // However, the instruction says "add to ALL 30" and "Just insert".
    return match + '\n    facts: {},';
});

console.log(`Updated ${count} occurrences.`);
fs.writeFileSync(path, content);
