const fs = require('fs');

let content = fs.readFileSync('lib/visualLab/data/faq/deFaq.ts', 'utf-8');

// There are 8 places where `    ]\n    en: [` occurs.
// We can just replace `    ]\n    en: [` with `    ],\n    en: [` globally, EXCEPT when it's a duplicate `en:` block!
// Actually, let's just find the duplicate `en:` blocks and remove the second one.
// The pattern is:
//     en: [
//       { ... }
//     ]
//     en: [

const duplicateRegex = /en:\s*\[([\s\S]*?)\n    \]\r?\n    en:\s*\[[\s\S]*?\n    \]/g;
let c = 0;
content = content.replace(duplicateRegex, (match, p1) => {
    c++;
    return `en: [${p1}\n    ]`;
});

// Now we might still have `    ]\n    en: [` if the first array before it was NOT `en` but maybe `ro` or `de`.
// Let's globally fix missing commas before `en: [`
content = content.replace(/\n    \]\n    en: \[/g, '\n    ],\n    en: [');

// same for `hu:` and `ro:` just in case
content = content.replace(/\n    \]\n    hu: \[/g, '\n    ],\n    hu: [');
content = content.replace(/\n    \]\n    ro: \[/g, '\n    ],\n    ro: [');

fs.writeFileSync('lib/visualLab/data/faq/deFaq.ts', content, 'utf-8');
console.log("Fixed duplicates:", c);
