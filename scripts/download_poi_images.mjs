import fs from 'fs';
import path from 'path';
import https from 'https';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

const countryConfig = {
    'francePoi.ts': 'france',
    'italyPoi.ts': 'italy',
    'spainPoi.ts': 'spain',
    'unitedkingdomPoi.ts': 'unitedkingdom',
    'netherlandsPoi.ts': 'netherlands',
    'polandPoi.ts': 'poland',
    'austriaPoi.ts': 'austria',
    'hungaryPoi.ts': 'hungary',
    'poi.ts': '',
    'romaniaPoi.ts': 'romania'
};

const targetCountries = Object.keys(countryConfig);

let sharp;
try {
    sharp = (await import('sharp')).default;
} catch (e) {
    console.error("sharp is required but not found. Please install it with 'npm install sharp --no-save'");
    process.exit(1);
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function toKebabCase(str) {
    return str
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

async function getWikipediaThumbnail(name) {
    const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&titles=${encodeURIComponent(name)}&prop=pageimages&pithumbsize=800`;
    try {
        const res = await fetch(url, { headers: { 'User-Agent': 'PlizioBot/1.0 (https://plizio.com/)' } });
        if (!res.ok) {
            if (res.status === 429) console.error("Rate limited by Wikipedia (429)");
            return null;
        }
        const data = await res.json();
        const pages = data.query?.pages;
        if (!pages) return null;
        const pageId = Object.keys(pages)[0];
        if (pageId === '-1') return null;
        return pages[pageId]?.thumbnail?.source || null;
    } catch (err) {
        console.error(`Wikipedia API error for ${name}: ${err.message}`);
        return null;
    }
}

async function downloadImage(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch image: ${res.statusText}`);
    const arrayBuffer = await res.arrayBuffer();
    return Buffer.from(arrayBuffer);
}

async function run() {
    let newlyDownloadedCount = 0;
    let totalProcessed = 0;
    const MAX_BATCH = 1000;
    const COMMIT_BATCH_SIZE = 50;
    let uncommittedCount = 0;
    let toCommitPaths = new Set();

    for (const filename of targetCountries) {
        const filepath = path.join(rootDir, 'lib', 'visualLab', 'data', filename);
        if (!fs.existsSync(filepath)) {
            console.log(`[WARN] File not found: ${filepath}`);
            continue;
        }

        let content = fs.readFileSync(filepath, 'utf-8');
        let modified = false;
        const countryPath = countryConfig[filename];

        const matches = [];
        
        // name followed by image (restricted to not cross { or })
        const regex1 = /(name:\s*\{[^}]*?["']?en["']?\s*:\s*["']([^"']+?)["'][^}]*?\}[^{}]*?image:\s*["']([^"']*?)["'])/gs;
        let match;
        while ((match = regex1.exec(content)) !== null) {
            matches.push({
                fullMatch: match[1],
                name: match[2],
                imagePath: match[3],
                index: match.index,
                type: 1
            });
        }

        // image followed by name (restricted to not cross { or })
        const regex2 = /(image:\s*["']([^"']*?)["'][^{}]*?name:\s*\{[^}]*?["']?en["']?\s*:\s*["']([^"']+?)["'][^}]*?\})/gs;
        while ((match = regex2.exec(content)) !== null) {
            if (!matches.find(m => m.index === match.index)) {
                matches.push({
                    fullMatch: match[1],
                    name: match[3],
                    imagePath: match[2],
                    index: match.index,
                    type: 2
                });
            }
        }

        console.log(`Found ${matches.length} POIs in ${filename}`);

        for (const poi of matches) {
            if (totalProcessed >= MAX_BATCH) break;

            let currentImagePath = poi.imagePath;
            let currentName = poi.name;

            if (currentImagePath === "") {
                const kebabName = toKebabCase(currentName);
                currentImagePath = countryPath 
                    ? `/geo-images/${countryPath}/${kebabName}.webp`
                    : `/geo-images/${kebabName}.webp`;
                
                const oldBlock = poi.fullMatch;
                const newBlock = oldBlock.replace(/image:\s*["']["']/, `image: "${currentImagePath}"`);
                content = content.replace(oldBlock, newBlock);
                modified = true;
                console.log(`[UPDATE] Generated path for ${currentName}: ${currentImagePath}`);
            }

            const targetAbsPath = path.join(rootDir, 'public', currentImagePath.replace(/^\//, ''));
            
            if (fs.existsSync(targetAbsPath)) {
                continue;
            }

            totalProcessed++;
            await delay(3000); // Increased delay to 3s

            console.log(`[INFO] Processing ${currentName}...`);
            const thumbUrl = await getWikipediaThumbnail(currentName);
            
            if (!thumbUrl) {
                console.log(`[SKIP] No Wikipedia thumbnail found for: ${currentName}`);
                continue;
            }

            try {
                const imgBuffer = await downloadImage(thumbUrl);
                const targetDir = path.dirname(targetAbsPath);
                if (!fs.existsSync(targetDir)) {
                    fs.mkdirSync(targetDir, { recursive: true });
                }

                await sharp(imgBuffer)
                    .webp({ quality: 80 })
                    .toFile(targetAbsPath);

                console.log(`[DOWNLOADED] ${currentName} -> ${currentImagePath}`);
                newlyDownloadedCount++;
                uncommittedCount++;
                
                const dirParts = currentImagePath.split('/').filter(Boolean);
                if (dirParts.length >= 2 && dirParts[0] === 'geo-images') {
                     // If it's a file in geo-images/ (like DE-BY.webp), add the file itself
                     if (dirParts.length === 2) {
                         toCommitPaths.add(`public/geo-images/${dirParts[1]}`);
                     } else {
                         toCommitPaths.add(`public/geo-images/${dirParts[1]}/`);
                     }
                }

                if (uncommittedCount >= COMMIT_BATCH_SIZE) {
                    commitBatch(toCommitPaths);
                    uncommittedCount = 0;
                    toCommitPaths.clear();
                }

            } catch (err) {
                console.error(`[FAILED] Failed to process ${currentName}: ${err.message}`);
            }
        }

        if (modified) {
            fs.writeFileSync(filepath, content, 'utf-8');
            console.log(`[SAVED] Updated ${filename} with new image paths.`);
            execSync(`git add ${filepath}`, { cwd: rootDir });
        }
    }

    if (uncommittedCount > 0) {
        commitBatch(toCommitPaths);
    }

    console.log(`Done! Total new images downloaded: ${newlyDownloadedCount}`);
}

function commitBatch(pathsSet) {
    if (pathsSet.size === 0) return;
    const paths = Array.from(pathsSet).join(' ');
    console.log(`\n[GIT] Committing batch for paths: ${paths}`);
    try {
        execSync(`git add ${paths} scripts/download_poi_images.mjs`, { cwd: rootDir, stdio: 'inherit' });
        execSync(`git commit -m "HU/DE/RO POI kepek letoltes: Wikipedia API thumbnail WebP (Flash kiterjesztett script)"`, { cwd: rootDir, stdio: 'inherit' });
        console.log(`[GIT] Commit successful.\n`);
    } catch (err) {
        console.error(`[GIT ERROR] Failed to commit: ${err.message}`);
    }
}

run();
