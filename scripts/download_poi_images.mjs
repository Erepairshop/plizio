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
    const MAX_BATCH = 5000;
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

        // More flexible split
        const blocks = content.split(/\n\s*\{/);
        const newBlocks = [blocks[0]];

        console.log(`Processing ${blocks.length - 1} potential POI blocks in ${filename}`);

        for (let i = 1; i < blocks.length; i++) {
            let block = blocks[i];
            
            // Extract name.en - handle both {"en": "..."} and { en: "..." }
            const nameMatch = /name:\s*\{[^}]*?["']?en["']?\s*:\s*["']([^"']+?)["']/.exec(block);
            // Extract image
            const imageMatch = /image:\s*["']([^"']*?)["']/.exec(block);

            if (nameMatch && imageMatch) {
                let currentName = nameMatch[1];
                let currentImagePath = imageMatch[1];

                if (currentImagePath === "") {
                    const kebabName = toKebabCase(currentName);
                    currentImagePath = countryPath 
                        ? `/geo-images/${countryPath}/${kebabName}.webp`
                        : `/geo-images/${kebabName}.webp`;
                    
                    block = block.replace(/image:\s*["']["']/, `image: "${currentImagePath}"`);
                    modified = true;
                    console.log(`[UPDATE] Generated path for ${currentName}: ${currentImagePath}`);
                }

                const targetAbsPath = path.join(rootDir, 'public', currentImagePath.replace(/^\//, ''));
                
                if (!fs.existsSync(targetAbsPath) && totalProcessed < MAX_BATCH) {
                    totalProcessed++;
                    await delay(3000);

                    console.log(`[INFO] Processing ${currentName}...`);
                    const thumbUrl = await getWikipediaThumbnail(currentName);
                    
                    if (thumbUrl) {
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
                    } else {
                        console.log(`[SKIP] No Wikipedia thumbnail found for: ${currentName}`);
                    }
                }
            }
            newBlocks.push(block);
        }

        if (modified) {
            // We need to restore the separator. Since we split by \n\s*{, we should ideally know what was matched.
            // But usually it's \n  {
            fs.writeFileSync(filepath, newBlocks.join('\n  {'), 'utf-8');
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
