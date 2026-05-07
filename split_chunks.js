import fs from 'fs';

const data = JSON.parse(fs.readFileSync('missing_hungary_en.json', 'utf-8'));
const chunkSize = 45;

for (let i = 0; i < data.length; i += chunkSize) {
  const chunk = data.slice(i, i + chunkSize);
  const chunkIndex = Math.floor(i / chunkSize) + 1;
  fs.writeFileSync(`missing_hungary_en_chunk${chunkIndex}.json`, JSON.stringify(chunk, null, 2));
}

console.log(`Split into ${Math.ceil(data.length / chunkSize)} chunks.`);
