import sys

def fix_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    bad_string = """,
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
    
    new_content = content.replace(bad_string, "")
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

fix_file("lib/visualLab/data/poiExtraPolandCities.ts")
