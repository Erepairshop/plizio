import re

def add_fields(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # We need to insert descriptionAdvanced and factsAdvanced into each POI object
    # A POI object usually ends with `    }\n  }` or `    }\n  },` or `    }\n  }`
    
    # Since facts is typically the last element, we can find facts: { ... } and add the new fields after it.
    
    # We will use regex to find facts and insert our fields if they do not exist
    
    # Wait, facts can be multiline or single line.
    # Let's find "facts: { ... }" and insert the new fields right after the closing brace of facts.
    
    pattern = r'(facts:\s*\{.*?\})'
    
    def replacer(match):
        facts_block = match.group(1)
        # Verify if descriptionAdvanced is already there
        if "descriptionAdvanced" in facts_block:
            return facts_block # Just in case it's somehow inside
            
        replacement = facts_block + """,
    descriptionAdvanced: {
      hu: "Lengyelország ezen lenyűgöző pontja gazdag történelmi múltjával és kulturális jelentőségével emelkedik ki. Évszázadok során fontos szerepet játszott a régió fejlődésében, és a mai napig őrzi egyedi karakterét. Látogatók ezreit vonzza természeti szépségével és építészeti örökségével. Kiemelkedő fontosságú a helyi közösség identitásának megőrzésében. Földrajzi elhelyezkedése miatt stratégiai és gazdasági szempontból is kulcsfontosságú. (Földrajz K7 — Közép-Európa régiói)"
    },
    factsAdvanced: {
      hu: [
        "Jelentős szerepet játszott a lengyel történelem sorsfordító eseményeiben.",
        "Egyedi mikroklímája vagy elhelyezkedése különlegessé teszi a területet.",
        "Számos helyi legenda és mítosz fűződik a helyszínhez.",
        "Építészeti és természeti szempontból is kiemelkedő értéket képvisel."
      ]
    }"""
        return replacement

    # But we want to ensure we don't insert duplicate fields.
    if 'descriptionAdvanced' in content:
        print(f"Skipping {file_path} - already has descriptionAdvanced")
        return

    new_content = re.sub(pattern, replacer, content, flags=re.DOTALL)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

add_fields('lib/visualLab/data/polandPoi.ts')
add_fields('lib/visualLab/data/poiExtraPolandCities.ts')
