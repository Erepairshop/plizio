import re
import os

def generate_faq_lines(name_dict, facts_dict, poi_type):
    faq = {
        "de": [],
        "hu": [],
        "ro": [],
        "en": []
    }
    
    langs = ["de", "hu", "ro", "en"]
    
    templates = {
        "de": ["Wann wurde {name} gegründet?", "Was ist eine Besonderheit von {name}?", "Welche weiteren Fakten gibt es?", "Was zeichnet diesen Ort aus?", "Gibt es noch etwas Wissenswertes?"],
        "hu": ["Mikor alapították {name} várost/helyet?", "Mi {name} egyik legfontosabb jellemzője?", "Milyen egyéb érdekességek vannak?", "Mi teszi különlegessé ezt a helyet?", "Van még valamilyen fontos információ?"],
        "ro": ["Când a fost fondat {name}?", "Care este o caracteristică specială a {name}?", "Ce alte fapte mai sunt cunoscute?", "Ce face acest loc deosebit?", "Mai sunt și alte informații interesante?"],
        "en": ["When was {name} founded?", "What is a special feature of {name}?", "Are there any other interesting facts?", "What makes this place unique?", "Is there anything else to know?"]
    }
    
    if poi_type in ["mountain", "elevation"]:
        templates["de"][0] = "Wie hoch ist der {name}?"
        templates["hu"][0] = "Milyen magas a {name}?"
        templates["ro"][0] = "Ce înălțime are {name}?"
        templates["en"][0] = "How high is {name}?"
    elif poi_type in ["river", "lake", "island"]:
        templates["de"][0] = "Was ist {name}?"
        templates["hu"][0] = "Mi az a {name}?"
        templates["ro"][0] = "Ce este {name}?"
        templates["en"][0] = "What is {name}?"

    for lang in langs:
        lang_facts = facts_dict.get(lang, [])
        lang_name = name_dict.get(lang, "")
        for i, fact in enumerate(lang_facts[:5]):
            q_template = templates[lang][min(i, len(templates[lang])-1)]
            q = q_template.format(name=lang_name)
            a = fact.strip()
            if not a.endswith('.') and not a.endswith('!') and not a.endswith('?'):
                a += '.'
            faq[lang].append({"q": q, "a": a})
            
    faq_str = "    faq: {\n"
    for lang in langs:
        faq_str += f"      {lang}: [\n"
        for item in faq[lang]:
            q = item['q'].replace('"', '\\"')
            a = item['a'].replace('"', '\\"')
            faq_str += f'        {{ q: "{q}", a: "{a}" }},\n'
        if faq[lang]:
            faq_str = faq_str[:-2] + "\n"
        faq_str += "      ],\n"
    faq_str = faq_str[:-2] + "\n    }"
    return faq_str

def parse_simple_dict(js_str):
    # This is a VERY crude parser for { de: "...", hu: "...", ... } or { de: ["...", ...], ... }
    res = {}
    # Find keys
    keys = re.findall(r'(\w+):\s*', js_str)
    for key in keys:
        if key not in ["de", "hu", "ro", "en"]: continue
        # Find value for this key
        # Value can be "..." or ["...", "..."]
        val_match = re.search(key + r':\s*("(.*?)"|\[(.*?)\])', js_str, re.DOTALL)
        if val_match:
            if val_match.group(2) is not None: # String
                res[key] = val_match.group(2)
            elif val_match.group(3) is not None: # Array
                array_str = val_match.group(3)
                facts = re.findall(r'"(.*?)"', array_str)
                res[key] = facts
    return res

def process_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if 'faq:' in content:
        print(f"Skipping {file_path}, already has faq")
        # continue processing to be safe, but skip individual POIs later
    
    # Split content by POI objects
    # A simple way is to find { id: " and the closing }
    
    pois = re.split(r'(?=\{\s*id:)', content)
    new_pois = []
    
    for poi_str in pois:
        if 'id:' not in poi_str:
            new_pois.append(poi_str)
            continue
            
        if 'faq:' in poi_str:
            new_pois.append(poi_str)
            continue
            
        # Extract ID
        id_match = re.search(r'id:\s*"([^"]+)"', poi_str)
        if not id_match:
            new_pois.append(poi_str)
            continue
            
        # Extract Name and Facts
        name_match = re.search(r'name:\s*({.*?})', poi_str, re.DOTALL)
        facts_match = re.search(r'facts:\s*({.*?})', poi_str, re.DOTALL)
        type_match = re.search(r'type:\s*"([^"]+)"', poi_str)
        
        if not name_match or not facts_match:
            new_pois.append(poi_str)
            continue
            
        name_dict = parse_simple_dict(name_match.group(1))
        facts_dict = parse_simple_dict(facts_match.group(1))
        poi_type = type_match.group(1) if type_match else ""
        
        faq_str = generate_faq_lines(name_dict, facts_dict, poi_type)
        
        # Insert before historyYear or area or elevation or before the end of object
        insert_patterns = [r'\n\s*historyYear:', r'\n\s*area:', r'\n\s*elevation:', r'\n\s*length:', r'\s*\}\s*,?\s*(\n|$)']
        inserted = False
        for pattern in insert_patterns:
            match = re.search(pattern, poi_str)
            if match:
                pos = match.start()
                # If it's the closing brace, we want to insert before it
                poi_str = poi_str[:pos] + ",\n" + faq_str + poi_str[pos:]
                inserted = True
                break
        
        if not inserted:
            # Fallback: find last }
            pos = poi_str.rfind('}')
            if pos != -1:
                poi_str = poi_str[:pos] + ",\n" + faq_str + "\n  " + poi_str[pos:]
                
        new_pois.append(poi_str)
        
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write("".join(new_pois))

files = [
    'lib/visualLab/data/dominicanrepublicPoi.ts',
    'lib/visualLab/data/haitiPoi.ts',
    'lib/visualLab/data/jamaicaPoi.ts',
    'lib/visualLab/data/bahamasPoi.ts',
    'lib/visualLab/data/trinidadPoi.ts'
]

for f in files:
    if os.path.exists(f):
        print(f"Processing {f}...")
        process_file(f)
    else:
        print(f"File not found: {f}")
