const fs = require('fs');

function applySeo(filePath, seoData) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let updated = false;

  for (const [id, data] of Object.entries(seoData)) {
    const idRegex = new RegExp(`(id:\\s*"${id}"[\\s\\S]*?descriptionAdvanced:\\s*\\{[\\s\\S]*?)(hu:\\s*"[^"]*")`, 'g');
    const hasHuDesc = idRegex.test(content);
    
    if (hasHuDesc) {
      // replace hu description
      content = content.replace(new RegExp(`(id:\\s*"${id}"[\\s\\S]*?descriptionAdvanced:\\s*\\{[\\s\\S]*?hu:\\s*)"([^"]*)"`), `$1"${data.description}"`);
    } else {
      // If it doesn't have descriptionAdvanced at all, we'd need to insert it. But the prompt says "Ha a POI-nak MÁR VAN descriptionAdvanced...". Let's handle both.
      // Easiest is to find facts: { ... }, and insert after it if descriptionAdvanced doesn't exist.
      const poiBlockRegex = new RegExp(`(id:\\s*"${id}"[\\s\\S]*?facts:\\s*\\{[^}]+\\})`, 'g');
      content = content.replace(poiBlockRegex, (match) => {
        if (match.includes('descriptionAdvanced:')) return match; // fallback
        return `${match},\n    descriptionAdvanced: {\n      de: "",\n      hu: "${data.description}",\n      ro: "",\n      en: ""\n    }`;
      });
    }

    const factsRegex = new RegExp(`(id:\\s*"${id}"[\\s\\S]*?factsAdvanced:\\s*\\{[\\s\\S]*?)(hu:\\s*\\[[^\\]]*\\])`, 'g');
    if (factsRegex.test(content)) {
      const factsStr = data.facts.map(f => `"${f}"`).join(',\n        ');
      content = content.replace(new RegExp(`(id:\\s*"${id}"[\\s\\S]*?factsAdvanced:\\s*\\{[\\s\\S]*?hu:\\s*\\[)[^\\]]*(\\])`), `$1\n        ${factsStr}\n      $2`);
    } else {
      const descBlockRegex = new RegExp(`(id:\\s*"${id}"[\\s\\S]*?descriptionAdvanced:\\s*\\{[^}]+\\})`, 'g');
      content = content.replace(descBlockRegex, (match) => {
        if (match.includes('factsAdvanced:')) return match;
        const factsStr = data.facts.map(f => `"${f}"`).join(',\n        ');
        return `${match},\n    factsAdvanced: {\n      de: [],\n      hu: [\n        ${factsStr}\n      ],\n      ro: [],\n      en: []\n    }`;
      });
    }
    updated = true;
  }

  if (updated) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${filePath}`);
  }
}

const seoData = JSON.parse(fs.readFileSync('seo_data_full.json', 'utf-8'));
const files = [
  'lib/visualLab/data/poiExtraDeLebenWirtschaft.ts',
  'lib/visualLab/data/poiExtraDeCities.ts',
  'lib/visualLab/data/poiExtraDe1.ts',
  'lib/visualLab/data/poiExtraDe2.ts',
  'lib/visualLab/data/poiExtraDe3a.ts',
  'lib/visualLab/data/poiExtraDe3b.ts',
  'lib/visualLab/data/poiExtraDe4a.ts',
  'lib/visualLab/data/poiExtraDe4b.ts'
];

for (const file of files) {
  if (fs.existsSync(file)) {
    applySeo(file, seoData);
  }
}
