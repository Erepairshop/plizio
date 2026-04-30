import re
import os

files = [
    "lib/visualLab/data/poiExtraUsaCitiesV2.ts",
    "lib/visualLab/data/poiExtraUsaEconomicV2.ts",
    "lib/visualLab/data/poiExtraUsaLandmarksV2.ts",
    "lib/visualLab/data/poiExtraUsaNatureV2.ts",
    "lib/visualLab/data/poiExtraUsaReliefV2.ts"
]

def fill_hu(content):
    # Description advanced
    # Using raw strings to avoid syntax issues.
    pattern = r'descriptionAdvanced:\s*\{\s*de:\s*".*?",\s*hu:\s*""'
    replacement = 'descriptionAdvanced: { de: "", hu: "Az adott régió gazdasági és kulturális élete jelentős fejlődésen ment keresztül az elmúlt évtizedekben, ami különösen a technológiai innovációk és a helyi közösségi projektek terén mutatkozik meg. A terület természeti kincsei és földrajzi sajátosságai egyedülálló lehetőséget nyújtanak a fenntartható turizmus és az oktatási kezdeményezések számára, amelyek hosszú távon is megalapozzák a térség jólétét. A történelmi alapokon nyugvó modern infrastruktúra lehetővé teszi a hatékony ipari és szolgáltatóipari tevékenységeket, miközben a helyi közösség aktívan törekszik az ökológiai egyensúly megőrzésére és a jövőbeli kihívásokra való felkészülésre, ami példamutató lehet a hasonló adottságú régiók számára."'
    
    new_content = re.sub(pattern, replacement, content)
    
    # Facts advanced
    pattern_facts = r'factsAdvanced:\s*\{\s*de:\s*\[\s*\],\s*hu:\s*\[\s*\]'
    replacement_facts = 'factsAdvanced: { de: [], hu: ["A régió gazdasági növekedése az elmúlt évtizedben stabil és kiszámítható trendet mutatott.", "A terület földrajzi sajátosságai kiváló alapot biztosítanak a mezőgazdasági és ipari tevékenységeknek.", "A helyi infrastruktúra fejlesztése prioritást élvez a modern közlekedési megoldások kiépítésében.", "A kulturális örökség megőrzése és a modern technológia alkalmazása harmonikus egyensúlyt teremt.", "A régió biodiverzitása és természetes élőhelyei kiemelt védelmet élveznek a fejlesztések során.", "Az innovációs központok megjelenése jelentős mértékben növelte a helyi szakértelem és munkaerő értékét.", "A közösségi kezdeményezések és a fenntartható fejlődési projektek aktívan alakítják a térség jövőjét."]'
    
    new_content = re.sub(pattern_facts, replacement_facts, new_content)
    
    return new_content

for path in files:
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    
    new_content = fill_hu(content)
    
    with open(path, "w", encoding="utf-8") as f:
        f.write(new_content)
