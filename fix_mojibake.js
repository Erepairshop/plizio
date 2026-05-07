const fs = require('fs');
const path = require('path');

const dir = 'lib/visualLab/data';

const contBytes = '\\x80-\\xBF\\u20AC\\u201A\\u0192\\u201E\\u2026\\u2020\\u2021\\u02C6\\u2030\\u0160\\u2039\\u0152\\u017D\\u2018\\u2019\\u201C\\u201D\\u2022\\u2013\\u2014\\u02DC\\u2122\\u0161\\u203A\\u0153\\u017E\\u0178';
const regex = new RegExp('[\\xF0-\\xF4][' + contBytes + ']{3}|[\\xE0-\\xEF][' + contBytes + ']{2}|[\\xC2-\\xDF][' + contBytes + ']', 'g');

const cp1252ToByte = c => {
  const code = c.charCodeAt(0);
  if (code < 256) return code;
  const map = {
    0x20AC: 0x80, 0x201A: 0x82, 0x0192: 0x83, 0x201E: 0x84, 0x2026: 0x85, 0x2020: 0x86, 0x2021: 0x87,
    0x02C6: 0x88, 0x2030: 0x89, 0x0160: 0x8A, 0x2039: 0x8B, 0x0152: 0x8C, 0x017D: 0x8E, 0x2018: 0x91,
    0x2019: 0x92, 0x201C: 0x93, 0x201D: 0x94, 0x2022: 0x95, 0x2013: 0x96, 0x2014: 0x97, 0x02DC: 0x98,
    0x2122: 0x99, 0x0161: 0x9A, 0x203A: 0x9B, 0x0153: 0x9C, 0x017E: 0x9E, 0x0178: 0x9F
  };
  return map[code] !== undefined ? map[code] : code;
};

let filesFixed = 0;

fs.readdirSync(dir).forEach(file => {
  if (!file.endsWith('.ts')) return;
  const filePath = path.join(dir, file);
  const txt = fs.readFileSync(filePath, 'utf8');
  
  const fixedTxt = txt.replace(regex, match => {
    const bytes = Uint8Array.from([...match].map(cp1252ToByte));
    const decoded = Buffer.from(bytes).toString('utf8');
    if (decoded.includes('\uFFFD')) {
      return match;
    }
    return decoded;
  });

  if (txt !== fixedTxt) {
    fs.writeFileSync(filePath, fixedTxt, 'utf8');
    console.log('Fixed mojibake in', file);
    filesFixed++;
  }
});

console.log('Total files fixed:', filesFixed);
