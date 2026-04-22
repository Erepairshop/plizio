import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const dataDir = path.join(rootDir, 'lib', 'visualLab', 'data');

const isFix = process.argv.includes('--fix');

function getAllImages(dir) {
    let results = [];
    if (!fs.existsSync(dir)) return results;
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getAllImages(fullPath));
        } else {
            if (/\.(webp|png|jpg|jpeg|svg)$/i.test(file)) {
                // Return relative to public dir
                results.push('/' + path.relative(publicDir, fullPath).replace(/\\/g, '/'));
            }
        }
    });
    return results;
}

const allImages = getAllImages(path.join(publicDir, 'geo-images'));

function getBestMatch(imagePath, id, nameEn) {
    const reqDir = path.posix.dirname(imagePath);
    let candidates = allImages.filter(img => path.posix.dirname(img) === reqDir);
    if (candidates.length === 0) candidates = allImages;

    const toKebab = (str) => str ? str.toLowerCase().replace(/[^a-z0-9]+/g, '-') : '';
    const nameKebab = toKebab(nameEn);
    const idKebab = toKebab(id);
    const reqBase = path.posix.basename(imagePath, path.posix.extname(imagePath)).toLowerCase();
    const prefixRegex = /^(it|es|fr|uk|nl|pl|at|de|hu|ro)-/;
    const reqBaseNoPrefix = reqBase.replace(prefixRegex, '');
    const idKebabNoPrefix = idKebab.replace(prefixRegex, '');

    // 1. Exact match on requested filename
    let match = candidates.find(img => path.posix.basename(img).toLowerCase() === path.posix.basename(imagePath).toLowerCase());
    if (match) return match;

    // 2. Exact match on requested filename without prefix
    match = candidates.find(img => path.posix.basename(img, path.posix.extname(img)).toLowerCase().replace(prefixRegex, '') === reqBaseNoPrefix);
    if (match) return match;

    // 3. Match by id
    if (idKebab) {
        match = candidates.find(img => {
            const base = path.posix.basename(img, path.posix.extname(img)).toLowerCase();
            return base === idKebab || base.replace(prefixRegex, '') === idKebabNoPrefix;
        });
        if (match) return match;
    }

    // 4. Match by name.en kebab
    if (nameKebab) {
        match = candidates.find(img => {
            const base = path.posix.basename(img, path.posix.extname(img)).toLowerCase();
            return base === nameKebab || base.replace(prefixRegex, '') === nameKebab;
        });
        if (match) return match;
        
        // Also try words from nameKebab if it's a single strong word
        const words = nameKebab.split('-');
        if (words.length > 0) {
            match = candidates.find(img => {
                const base = path.posix.basename(img, path.posix.extname(img)).toLowerCase().replace(prefixRegex, '');
                return words.includes(base) && base.length >= 4;
            });
            if (match) return match;
        }
    }
    
    // 5. Try suffix/prefix match on the base filename (e.g. "visegradi-fellegvar" -> "visegrad" is not safe, but "visegrad-castle" -> "visegrad" might be ok)
    // To be safe, only match if one fully contains the other and length >= 6
    match = candidates.find(img => {
        const base = path.posix.basename(img, path.posix.extname(img)).toLowerCase().replace(prefixRegex, '');
        if (base.length >= 6 && reqBaseNoPrefix.length >= 6) {
            if (reqBaseNoPrefix.startsWith(base) || base.startsWith(reqBaseNoPrefix)) return true;
        }
        return false;
    });
    if (match) return match;

    return null;
}

function processFiles() {
    const files = fs.readdirSync(dataDir).filter(f => f.endsWith('Poi.ts') || f === 'poi.ts');
    let totalFixed = 0;
    let totalMissing = 0;

    for (const file of files) {
        const filePath = path.join(dataDir, file);
        const content = fs.readFileSync(filePath, 'utf8');
        let newContent = content;
        let fileChanged = false;

        newContent = content.replace(/image:\s*(["'])([^"']+)\1/g, (match, quote, imagePath, index) => {
            const fullImgPath = path.join(publicDir, imagePath);
            if (fs.existsSync(fullImgPath)) {
                return match; // Image exists, no action needed
            }

            // Find id and name
            const precedingText = content.substring(Math.max(0, index - 500), index);
            const idMatches = [...precedingText.matchAll(/id:\s*["']([^"']+)["']/g)];
            const id = idMatches.length > 0 ? idMatches[idMatches.length - 1][1] : null;

            const enMatches = [...precedingText.matchAll(/en:\s*["']([^"']+)["']/g)];
            const nameEn = enMatches.length > 0 ? enMatches[enMatches.length - 1][1] : null;

            const bestMatch = getBestMatch(imagePath, id, nameEn);

            if (bestMatch) {
                console.log(`[FIXED] ${file} | POI: ${id || '?'} | Old: ${imagePath} -> New: ${bestMatch}`);
                fileChanged = true;
                totalFixed++;
                return `image: ${quote}${bestMatch}${quote}`;
            } else {
                console.log(`[WARNING] ${file} | POI: ${id || '?'} | No match found for: ${imagePath}`);
                totalMissing++;
                return match;
            }
        });

        if (isFix && fileChanged) {
            fs.writeFileSync(filePath, newContent, 'utf8');
        }
    }

    console.log(`\nAudit Summary:`);
    console.log(`Fixed/Match found: ${totalFixed}`);
    console.log(`Still missing: ${totalMissing}`);
    if (!isFix) {
        console.log(`\nRun with --fix to apply changes.`);
    }
}

processFiles();
