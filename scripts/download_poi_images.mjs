import fs from 'fs';
import path from 'path';
import https from 'https';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

const targetCountries = [
    'francePoi.ts', 'italyPoi.ts', 'spainPoi.ts',
    'unitedkingdomPoi.ts', 'netherlandsPoi.ts', 'polandPoi.ts', 'austriaPoi.ts'
];

let sharp;
try {
    sharp = (await import('sharp')).default;
} catch (e) {
    console.error("sharp is required but not found. Please install it with 'npm install sharp --no-save'");
    process.exit(1);
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function getWikipediaThumbnail(name) {
    const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&titles=${encodeURIComponent(name)}&prop=pageimages&pithumbsize=800`;
    try {
        const res = await fetch(url, { headers: { 'User-Agent': 'PlizioBot/1.0 (https://plizio.com/)' } });
        if (!res.ok) return null;
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
    let toProcess = [];

    // Parse files
    for (const filename of targetCountries) {
        const filepath = path.join(rootDir, 'lib', 'visualLab', 'data', filename);
        if (!fs.existsSync(filepath)) {
            console.log(`[WARN] File not found: ${filepath}`);
            continue;
        }

        const content = fs.readFileSync(filepath, 'utf-8');
        
        // Match block that has name.en and image
        // It's safer to split by '{\n' or similar, but let's try a regex that captures both.
        // A POI block usually looks like { id: ..., type: ..., name: {"en": "Paris"}, image: "/geo-images/france/paris.webp" }
        // We'll search for 'name:' and 'image:' within a reasonable distance (e.g. 500 characters)
        const regex = /name:\s*\{[^}]*?["']?en["']?\s*:\s*["']([^"']+?)["'][^}]*\}.*?image:\s*["']([^"']+?)["']/gs;
        
        let match;
        while ((match = regex.exec(content)) !== null) {
            const name = match[1];
            const imagePath = match[2];
            
            // We also need to be careful if image comes before name. Let's do a more robust search.
            toProcess.push({ name, imagePath });
        }
        
        // Let's also search for image before name just in case
        const regex2 = /image:\s*["']([^"']+?)["'].*?name:\s*\{[^}]*?["']?en["']?\s*:\s*["']([^"']+?)["'][^}]*\}/gs;
        while ((match = regex2.exec(content)) !== null) {
            const imagePath = match[1];
            const name = match[2];
            if (!toProcess.find(p => p.imagePath === imagePath)) {
                toProcess.push({ name, imagePath });
            }
        }
    }

    console.log(`Found ${toProcess.length} POIs with images across the specified files.`);

    const MAX_BATCH = 150;
    const COMMIT_BATCH_SIZE = 30;
    let totalProcessed = 0;
    let newlyDownloadedCount = 0;
    let uncommittedCount = 0;
    let toCommitPaths = new Set();

    for (const poi of toProcess) {
        if (totalProcessed >= MAX_BATCH) {
            console.log(`Reached max batch size of ${MAX_BATCH}. Stopping.`);
            break;
        }

        const targetAbsPath = path.join(rootDir, 'public', poi.imagePath.replace(/^\//, ''));
        
        if (fs.existsSync(targetAbsPath)) {
            console.log(`[SKIP] Already exists: ${poi.imagePath}`);
            continue;
        }

        totalProcessed++; // Only count towards rate limit / max batch if we actually attempt to process

        // 1 POI / 2 sec rate limit, apply it before requesting to space them out
        await delay(2000);

        console.log(`[INFO] Processing ${poi.name}...`);
        const thumbUrl = await getWikipediaThumbnail(poi.name);
        
        if (!thumbUrl) {
            console.log(`[SKIP] No Wikipedia thumbnail found for: ${poi.name}`);
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

            console.log(`[DOWNLOADED] ${poi.name} -> ${poi.imagePath}`);
            newlyDownloadedCount++;
            uncommittedCount++;
            
            // Keep track of parent directories to commit
            const dirParts = poi.imagePath.split('/').filter(Boolean);
            if (dirParts.length >= 2 && dirParts[0] === 'geo-images') {
                 toCommitPaths.add(`public/geo-images/${dirParts[1]}/`);
            }

            if (uncommittedCount >= COMMIT_BATCH_SIZE) {
                commitBatch(toCommitPaths);
                uncommittedCount = 0;
                toCommitPaths.clear();
            }

        } catch (err) {
            console.error(`[FAILED] Failed to process ${poi.name}: ${err.message}`);
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
        execSync(`git commit -m "POI kepek letoltes + WebP konvert: FR/IT/ES/UK/NL/PL/AT Wikipedia API thumbnail 800px (batch)"`, { cwd: rootDir, stdio: 'inherit' });
        console.log(`[GIT] Commit successful.\n`);
    } catch (err) {
        console.error(`[GIT ERROR] Failed to commit: ${err.message}`);
    }
}

run();
