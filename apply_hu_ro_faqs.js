const fs = require('fs');

let content = fs.readFileSync('lib/visualLab/data/faq/deFaq.ts', 'utf-8');

const regex = /de:\s*\[\s*\{\s*q:\s*"Was ist ([^"]+)\?",[\s\S]*?\],?\s*(?=en:\s*\[)/g;

let replacedCount = 0;
content = content.replace(regex, (match, name) => {
    replacedCount++;
    const hu_ro = `hu: [
      { q: "Mi az a(z) ${name}?", a: "${name} egy jelentős földrajzi vagy történelmi nevezetesség Németországban." },
      { q: "Miért ismert ${name}?", a: "${name} történelme vagy különleges elhelyezkedése miatt kedvelt úti cél." },
      { q: "Mitől különleges ${name}?", a: "A hagyomány és a festői szépség ötvözete teszi ezt a helyet egyedivé." },
      { q: "Érdekes ${name} a turisták számára?", a: "Igen, sokan látogatnak el ide, hogy többet tudjanak meg a német kultúráról és természetről." }
    ],
    ro: [
      { q: "Ce este ${name}?", a: "${name} este un obiectiv geografic sau istoric important din Germania." },
      { q: "De ce este cunoscut ${name}?", a: "${name} este o destinație apreciată datorită istoriei sale sau a locației sale deosebite." },
      { q: "Ce face ca ${name} să fie special?", a: "Combinația de tradiție și frumusețe peisagistică face acest loc unic." },
      { q: "Este ${name} interesant pentru turiști?", a: "Da, mulți oameni vizitează acest loc pentru a afla mai multe despre cultura și natura Germaniei." }
    ],`;
    
    const lastBracketIndex = match.lastIndexOf(']');
    const before = match.substring(0, lastBracketIndex + 1); 
    
    return before + ',\n    ' + hu_ro + '\n    ';
});

console.log("Applied", replacedCount, "generic replacements.");

const keysToFix = ['DE-BB', 'DE-BE', 'DE-BW', 'DE-BY', 'city-berlin', 'city-muenchen', 'landmark-brandenburg-gate', 'landmark-neuschwanstein'];

keysToFix.forEach(k => {
    const blockRegex = new RegExp(`("${k}": \\{[\\s\\S]*?\\n  \\})`);
    content = content.replace(blockRegex, (block) => {
        let fixedBlock = block.replace(/\n    \]\n    (hu|ro|en): \[/g, '\n    ],\n    $1: [');
        
        // We want to capture the first `en:` array and discard the second one.
        const duplicateEnRegex = /en:\s*\[([\s\S]*?)\],\s*en:\s*\[[\s\S]*?\]\n/g;
        fixedBlock = fixedBlock.replace(duplicateEnRegex, 'en: [$1]\n');
        
        return fixedBlock;
    });
});

fs.writeFileSync('lib/visualLab/data/faq/deFaq.ts', content, 'utf-8');
console.log("Fixed custom entries.");
