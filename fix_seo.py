import re
import os

file_path = 'lib/visualLab/data/denmarkPoi.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

replacements = [
    # English
    (r'and a strong SEO keyword for travelers who want', 'making it a premier destination for travelers seeking'),
    (r'and a practical SEO destination for', 'making it a key hub for'),
    (r'and a strong SEO appeal for', 'offering an attractive mix for'),
    (r'Its SEO value comes from being', 'It is highly regarded for being'),
    (r'and a strong SEO match for', 'making it an ideal choice for'),
    (r'and a compelling SEO destination for', 'making it a fascinating destination for'),
    (r'and a powerful SEO keyword for', 'offering an exceptional experience for'),
    (r'and a powerful SEO location for', 'serving as a significant site for'),
    (r'and a strong SEO fit for', 'making it a perfect fit for'),
    (r'and a very strong SEO keyword for', 'and is a highly recommended destination for'),
    (r'and a useful SEO keyword for', 'making it a popular choice for'),
    (r'and a strong SEO term for', 'making it a top-rated area for'),
    (r'and a valuable SEO term for', 'making it a prized location for'),
    (r'one of the best SEO answers for', 'one of the top recommendations for'),
    (r'one of Denmark\'s strongest historical SEO landmarks', 'one of Denmark\'s most significant historical landmarks'),
    (r'a major Danish industrial landmark and a top SEO term for', 'a major Danish industrial landmark and a key focal point for'),
    (r'a strong SEO keyword for', 'a premier destination for'),
    (r'a useful SEO addition for', 'a wonderful addition for'),
    (r'a strong SEO choice for', 'an excellent choice for'),
    (r'an important SEO keyword for', 'a significant landmark for'),
    (r'a top SEO landmark', 'a premier landmark'),

    # German
    (r'und ein starkes SEO-Thema für Reisende, die', 'was es zu einem erstklassigen Ziel für Reisende macht, die'),
    (r'und ein starkes SEO-Ziel für', 'was es zu einem wichtigen Ausgangspunkt für ... macht'), # Generic fix below
    (r'und starker SEO-Wirkung für', 'mit einer großen Anziehungskraft für'),
    (r'Ihr SEO-Wert liegt darin, dass', 'Besonders hervorzuheben ist, dass'),
    (r'und ein starkes SEO-Thema für', 'und ein erstklassiges Ziel für'),
    (r'und eine der besten SEO-Antworten für', 'und eine der besten Adressen für'),
    (r'gehören zu den stärksten historischen SEO-Wahrzeichen', 'gehören zu den bedeutendsten historischen Wahrzeichen'),
    (r'und ein starkes SEO-Ziel für', 'und ein begehrtes Ziel für'),
    (r'und ein nützliches SEO-Thema für', 'und ein hervorragendes Ziel für'),
    (r'und ein wertvolles SEO-Thema für', 'und ein geschätztes Ziel für'),
    (r'ein nützliches SEO-Thema für', 'ein attraktives Ziel für'),
    (r'ein praktisches SEO-Ziel für', 'ein praktisches Ziel für'),
    (r'eine starke SEO-Wahl für', 'eine hervorragende Wahl für'),
    (r'ein wichtiges SEO-Thema für', 'ein bedeutendes Wahrzeichen für'),
    (r'ein erstklassiges SEO-Wahrzeichen', 'ein erstklassiges Wahrzeichen'),
    (r'eine hervorragende SEO-Ergänzung für', 'eine hervorragende Ergänzung für'),
    (r'ein sehr starkes SEO-Thema für', 'ein sehr beliebtes Thema für'),
    (r'ein starkes SEO-Thema für', 'ein erstklassiges Thema für'),

    # Hungarian
    (r'és erős SEO-téma az olyan utazóknak, akik', 'így kiváló úti cél az olyan utazók számára, akik'),
    (r'és erős SEO-célpont a', 'így fontos központ a'),
    (r'és erős SEO-vonzóerővel a', 'így vonzó célpont a'),
    (r'SEO-értékét az adja, hogy', 'Különlegessége abban rejlik, hogy'),
    (r'és erős SEO-egyezés a', 'így ideális választás a'),
    (r'és erős SEO-kulcsszó a', 'így kiemelkedő célpont a'),
    (r'és erős SEO-helyszín a', 'így jelentős helyszín a'),
    (r'és erős SEO-illeszkedés a', 'így tökéletes választás a'),
    (r'és hasznos SEO-kulcsszó a', 'így népszerű célpont a'),
    (r'és értékes SEO-kulcsszó a', 'így értékes célpont a'),
    (r'az egyik legjobb SEO-válasz azoknak', 'az egyik legjobb választás azoknak'),
    (r'Dánia egyik legerősebb történelmi SEO-helyszínei', 'Dánia egyik legjelentősebb történelmi helyszíne'),
    (r'hasznos SEO-kulcsszó a', 'hasznos támpont a'),
    (r'praktikus SEO-célpont a', 'praktikus célpont a'),
    (r'erős SEO-értékkel a', 'jelentős vonzerővel a'),
    (r'erős SEO-választás mindazok számára', 'kiváló választás mindazok számára'),
    (r'vonzó SEO-célpont az', 'vonzó célpont az'),
    (r'erős SEO-kifejezés a', 'kiváló választás a'),
    (r'praktikus SEO-kulcsszó a', 'praktikus választás a'),
    (r'értékes SEO-kulcsszó a', 'értékes választás a'),
    (r'erős SEO-kulcsszó a', 'kiváló választás a'),
    (r'Kiváló SEO-kiegészítés azoknak', 'Kiváló kiegészítés azoknak'),
    (r'nagyon erős SEO-kulcsszó a', 'kiemelten népszerű célpont a'),

    # Romanian
    (r'și un cuvânt-cheie SEO puternic pentru călătorii care caută', 'fiind o destinație de prim rang pentru călătorii care caută'),
    (r'și o destinație SEO puternică pentru', 'fiind un punct cheie pentru'),
    (r'și un mare potențial SEO pentru', 'oferind o atracție deosebită pentru'),
    (r'Valoarea sa SEO vine din faptul că', 'Atractivitatea sa rezidă în faptul că'),
    (r'și un termen SEO puternic pentru', 'fiind o alegere ideală pentru'),
    (r'și un termen SEO performant pentru', 'fiind un punct de referință pentru'),
    (r'și o locație SEO puternică pentru', 'fiind un loc emblematic pentru'),
    (r'și o potrivire SEO puternică pentru', 'fiind o destinație perfectă pentru'),
    (r'și un cuvânt-cheie SEO foarte puternic pentru', 'fiind un punct de atracție major pentru'),
    (r'și un cuvânt-cheie SEO util pentru', 'fiind o destinație populară pentru'),
    (r'și un termen SEO valoros pentru', 'fiind o locație prețuită pentru'),
    (r'și una dintre cele mai bune răspunsuri SEO pentru', 'și una dintre cele mai bune opțiuni pentru'),
    (r'unul dintre cele mai puternice repere istorice SEO', 'unul dintre cele mai importante repere istorice'),
    (r'un cuvânt-cheie SEO util pentru', 'un punct de referință util pentru'),
    (r'o destinație SEO practică pentru', 'o destinație practică pentru'),
    (r'o valoare SEO mare pentru', 'o valoare turistică mare pentru'),
    (r'o locație SEO utilă pentru', 'o locație utilă pentru'),
    (r'o alegere SEO puternică pentru', 'o alegere excelentă pentru'),
    (r'o destinație SEO convingătoare pentru', 'o destinație fascinantă pentru'),
    (r'o locație SEO puternică pentru', 'o locație emblematică pentru'),
    (r'o completare SEO excelentă pentru', 'o completare excelentă pentru'),
    (r'un cuvânt-cheie SEO puternic pentru', 'o alegere excelentă pentru'),
    (r'un termen SEO important pentru', 'un punct de reper important pentru'),
    (r'un reper istoric SEO de top', 'un reper istoric de top'),

    # Generic catch-all for remaining "SEO" occurrences in sentences
    (r' SEO ', ' '),
    (r' SEO-', '-'),
    (r' SEO', ' '),
]

for old, new in replacements:
    content = re.sub(old, new, content)

# Final cleanup for any missed meta-commentary like "Földrajz K7" if they contain SEO
# (The user didn't explicitly ask for Földrajz K7 removal, but I'll stick to SEO)

# Double check for any remaining "SEO" (case insensitive)
remaining = re.findall(r'.{0,50}SEO.{0,50}', content, re.IGNORECASE)
if remaining:
    print("Remaining SEO occurrences found:")
    for r in remaining:
        print(f"...{r}...")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Replacement complete.")
