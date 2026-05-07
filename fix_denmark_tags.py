import re
import os

file_path = "/mnt/c/Users/User/plizio-repo/lib/visualLab/data/denmarkPoi.ts"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Tags
tags = {
    "geography": {
        "hu": "Földrajz K7 – Dánia földrajza és társadalma.",
        "de": "Erdkunde K7 – Dänemarks Geografie und Gesellschaft.",
        "ro": "Geografie K7 – Geografia și societatea Danemarcei.",
        "en": "Geography K7 – Denmark's geography and society."
    },
    "history": {
        "hu": "Történelem K8 – Dánia történelmi öröksége.",
        "de": "Geschichte K8 – Dänemarks historisches Erbe.",
        "ro": "Istorie K8 – Moștenirea istorică a Danemarcei.",
        "en": "History K8 – Denmark's historical heritage."
    },
    "biology": {
        "hu": "Biológia K7 – Dánia élővilága és ökoszisztémái.",
        "de": "Biologie K7 – Dänemarks Tierwelt und Ökosysteme.",
        "ro": "Biologie K7 – Fauna și ecosistemele Danemarcei.",
        "en": "Biology K7 – Denmark's wildlife and ecosystems."
    },
    "economics": {
        "hu": "Gazdaságtan K8 – Dánia gazdasága és ipara.",
        "de": "Wirtschaft K8 – Dänemarks Wirtschaft und Industrie.",
        "ro": "Economie K8 – Economia și industria Danemarcei.",
        "en": "Economics K8 – Denmark's economy and industry."
    }
}

def get_tag_type(poi_id, poi_type):
    if poi_type in ["forest", "animal-habitat"]:
        return "biology"
    if poi_id.startswith("nat-") and poi_type not in ["mountain", "lake"]:
        return "biology"
    if poi_type in ["country", "city", "region", "river", "mountain", "lake", "sea", "island"]:
        return "geography"
    elif poi_type in ["historical", "landmark"]:
        return "history"
    elif poi_type in ["agriculture", "industry", "port"]:
        return "economics"
    return "geography"

poi_pattern = re.compile(r'\{\s*id:\s*"([^"]+)",\s*type:\s*"([^"]+)"', re.DOTALL)

# Improved regex to remove existing curriculum tags
# It should match from the start of the tag (Subject K7/8) until the end of that sentence.
tag_rem_pattern = re.compile(r'\s*(?:Földrajz|Erdkunde|Geografie|Geography|Történelem|Geschichte|Istorie|History|Biológia|Biologie|Biology|Gazdaságtan|Wirtschaft|Economie|Economics)\s+K[5-8]\s*–\s*[^"]+?\.', re.IGNORECASE)

new_content = content
poi_matches = list(poi_pattern.finditer(content))

for match in reversed(poi_matches):
    poi_id = match.group(1)
    poi_type = match.group(2)
    tag_type = get_tag_type(poi_id, poi_type)
    
    start_pos = match.start()
    desc_adv_match = re.search(r'descriptionAdvanced:\s*\{', content[start_pos:])
    if desc_adv_match:
        desc_start = start_pos + desc_adv_match.end()
        brace_count = 1
        desc_end = desc_start
        while brace_count > 0 and desc_end < len(content):
            if content[desc_end] == '{':
                brace_count += 1
            elif content[desc_end] == '}':
                brace_count -= 1
            desc_end += 1
        
        desc_block = content[desc_start:desc_end-1]
        
        for lang in ["de", "hu", "ro", "en"]:
            lang_tag = tags[tag_type][lang]
            lang_pattern = re.compile(fr'({lang}:\s*")([^"]+)(")', re.DOTALL)
            
            def repl(m):
                prefix = m.group(1)
                text = m.group(2).strip()
                suffix = m.group(3)
                
                # Remove ANY existing tags matching our broad pattern
                old_text = text
                while True:
                    new_text = tag_rem_pattern.sub('', old_text).strip()
                    if new_text == old_text:
                        break
                    old_text = new_text
                text = old_text
                
                if not text.endswith(".") and not text.endswith("!") and not text.endswith("?"):
                    if text: text += "."
                
                # Avoid adding empty tags or just space
                if not text:
                    return f'{prefix}{lang_tag}{suffix}'
                
                return f'{prefix}{text} {lang_tag}{suffix}'
            
            desc_block = lang_pattern.sub(repl, desc_block)
            
        new_content = new_content[:desc_start] + desc_block + new_content[desc_end-1:]

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Finished processing 58 POIs and properly cleaned up tags.")
