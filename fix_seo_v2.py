import re
import os

file_path = 'lib/visualLab/data/denmarkPoi.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Remove SEO related phrases (already done mostly, but let's be thorough)
# 2. Remove meta-commentary like "Földrajz K7", "Geschichte K8" etc.

# Patterns for meta-commentary at the end of strings or before the closing quote
meta_patterns = [
    r'\s*Földrajz K\d+.*?(?=["\'])',
    r'\s*Geschichte K\d+.*?(?=["\'])',
    r'\s*Geografie K\d+.*?(?=["\'])',
    r'\s*History K\d+.*?(?=["\'])',
    r'\s*Gazdaságtan K\d+.*?(?=["\'])',
]

for pattern in meta_patterns:
    content = re.sub(pattern, '', content)

# Also handle cases where it might be in the middle (unlikely but safe)
# Actually, the above handles it if it's followed by " or '

# Check for any remaining SEO just in case
# (The previous script should have handled most, but let's do a final pass on the whole file)

replacements = [
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
    (r'a strong SEO match', 'an ideal match'),
    (r'a valuable SEO term', 'a valuable term'),
    (r'a strong SEO term', 'a strong term'),
    (r'a useful SEO keyword', 'a useful keyword'),
    (r'a practical SEO destination', 'a practical destination'),
    (r'a powerful SEO keyword', 'a powerful keyword'),
    (r'a powerful SEO location', 'a powerful location'),
    (r'a compelling SEO destination', 'a compelling destination'),
    (r'a strong SEO fit', 'a strong fit'),
    (r'a very strong SEO keyword', 'a very strong keyword'),
    (r'a top SEO keyword', 'a top keyword'),
    (r'SEO keyword', 'keyword'),
    (r'SEO destination', 'destination'),
    (r'SEO-téma', 'téma'),
    (r'SEO-célpont', 'célpont'),
    (r'SEO-vonzóerővel', 'vonzóerővel'),
    (r'SEO-értékét', 'értékét'),
    (r'SEO-egyezés', 'egyezés'),
    (r'SEO-kulcsszó', 'kulcsszó'),
    (r'SEO-helyszín', 'helyszín'),
    (r'SEO-illeszkedés', 'illeszkedés'),
    (r'SEO-választás', 'választás'),
    (r'SEO-kifejezés', 'kifejezés'),
    (r'cuvânt-cheie SEO', 'punct de atracție'),
    (r'destinație SEO', 'destinație'),
    (r'potențial SEO', 'potențial'),
    (r'termen SEO', 'termen'),
    (r'locație SEO', 'locație'),
    (r'potrivire SEO', 'potrivire'),
    (r'reper istoric SEO', 'reper istoric'),
    (r'SEO szempontból', 'turisztikai szempontból'),
    (r'SEO-starker', 'bekannter'),
    (r'SEO-starke', 'bekannte'),
    (r'SEO-starkes', 'bekanntes'),
    (r'SEO-Thema', 'Thema'),
    (r'SEO-Ziel', 'Ziel'),
    (r'SEO-Wirkung', 'Wirkung'),
    (r'SEO-Wert', 'Wert'),
    (r'SEO-Wahrzeichen', 'Wahrzeichen'),
    (r'SEO-Antworten', 'Empfehlungen'),
    (r'SEO-Ergänzung', 'Ergänzung'),
    (r'SEO-Wahl', 'Wahl'),
]

# Apply specific replacements first
for old, new in replacements:
    content = re.sub(old, new, content)

# Then remove any remaining "SEO" (case insensitive) with a space around it or at start/end of sentence
content = re.sub(r'\bSEO\b', '', content)
content = re.sub(r' +', ' ', content) # Clean up multiple spaces

# Specific fixes for German SEO-Thema etc that might have been missed
content = re.sub(r'SEO-([a-zA-ZÄÖÜäöü]+)', r'\1', content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Cleanup complete.")
