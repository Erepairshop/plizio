const fs = require('fs');
const path = require('path');

const validPoisText = fs.readFileSync('valid_pois.txt', 'utf8');
const validPois = {};
let currentState = '';
for (const line of validPoisText.split('\n')) {
  const tLine = line.trim();
  if (tLine.startsWith('=== DE-')) {
    currentState = tLine.replace('=== DE-', '').replace(' ===', '').toLowerCase();
    validPois[currentState] = [];
  } else if (tLine && currentState) {
    validPois[currentState].push(tLine);
  }
}

const errorsText = fs.readFileSync('quiz_errors_copy.txt', 'utf8');
const fileReplacements = {}; // { file: { oldId: newId } }

// Parse errors
// Examples:
// [de/bbQuiz.ts :: de-bb-med-3] spot_error: option POI "hist-kloster-chorin-extra" not found
// [de/bbQuiz.ts :: de-bb-hard-1] order_by: some POIs not found: hist-filmpark-babelsberg-extra, landmark-spreewald-kahnfahrt-extra
// [de/bbQuiz.ts :: de-bb-hard-2] distance_guess: missing POI hist-schloss-rheinsberg-extra 
// [de/beQuiz.ts :: de-be-med-2] click_poi: targetPoiId "forest-grunewald-extra" not found in POI data
for (const line of errorsText.split('\n')) {
  const match = line.match(/\[(de\/[a-z]{2}Quiz\.ts) :: ([^\]]+)\] (.*)/);
  if (!match) continue;
  const file = match[1];
  const state = file.replace('de/', '').replace('Quiz.ts', '').toLowerCase();
  const errorMsg = match[3];
  
  if (!fileReplacements[file]) fileReplacements[file] = {};
  
  // Extract missing POIs
  let missing = [];
  
  const mSpot = errorMsg.match(/option POI "([^"]+)"/);
  if (mSpot) missing.push(mSpot[1]);
  
  const mClick = errorMsg.match(/targetPoiId "([^"]+)"/);
  if (mClick) missing.push(mClick[1]);
  
  const mOrder = errorMsg.match(/some POIs not found: (.*)/);
  if (mOrder) {
    missing.push(...mOrder[1].split(',').map(s => s.trim()));
  }
  
  const mDist = errorMsg.match(/missing POI\s+(.*)/);
  if (mDist) {
    missing.push(...mDist[1].trim().split(/\s+/));
  }

  // Assign replacements
  for (const badId of missing) {
    if (!badId) continue;
    if (!fileReplacements[file][badId]) {
      // pop a valid POI to use as replacement
      // wait, we can just randomly pick one, but it's better to ensure it's not the exact same for all if possible
      // let's just pick one from the valid list, maybe cycle through them
      const statePois = validPois[state];
      if (statePois && statePois.length > 0) {
         // get a random one, or sequence
         const validId = statePois[Math.floor(Math.random() * statePois.length)];
         fileReplacements[file][badId] = validId;
      }
    }
  }
}

// Now replace in files
for (const file of Object.keys(fileReplacements)) {
  const fullPath = path.join(__dirname, 'lib/visualLab/quiz/data', file);
  if (!fs.existsSync(fullPath)) {
    console.error(`File not found: ${fullPath}`);
    continue;
  }
  let content = fs.readFileSync(fullPath, 'utf8');
  
  const replacements = fileReplacements[file];
  for (const [oldId, newId] of Object.entries(replacements)) {
    // Replace all occurrences of oldId with newId
    // It's usually enclosed in quotes
    const regex = new RegExp(`"${oldId}"`, 'g');
    content = content.replace(regex, `"${newId}"`);
  }
  
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`Updated ${file} with ${Object.keys(replacements).length} replacements.`);
}
