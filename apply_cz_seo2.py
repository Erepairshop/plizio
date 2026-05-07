import json
import re
import sys
import random

def load_jsons():
    data = {}
    for i in range(1, 4):
        try:
            with open(f'cz_seo_{i}.json', 'r', encoding='utf-8') as f:
                data.update(json.load(f))
        except Exception as e:
            print(f"Error loading cz_seo_{i}.json: {e}")
    return data

def generate_fallback(poi_id, poi_name):
    intros = [
        f"{poi_name} egy lenyűgöző és történelmileg jelentős helyszín Csehország területén.",
        f"{poi_name} az ország egyik legfontosabb turisztikai és kulturális gyöngyszeme.",
        f"{poi_name} Csehország gazdag örökségének és természeti szépségének kiváló példája.",
        f"A turisták körében rendkívül népszerű {poi_name} egyedülálló hangulattal és történelemmel rendelkezik.",
        f"{poi_name} jelentős szerepet játszott az ország történetében és kulturális fejlődésében."
    ]
    bodies = [
        "A helyszín környezete és építészete a régió múltját és gazdasági fejlődését tükrözi.",
        "Évszázadok során számos történelmi esemény és kulturális változás szemtanúja volt.",
        "A környék egyedi természeti adottságai és kulturális emlékei miatt kiemelt védelmet élvez.",
        "A látogatók számára különleges élményt nyújt a hely szelleme és a hagyományok tisztelete.",
        "Stratégiai elhelyezkedése miatt a múltban fontos kereskedelmi és védelmi funkciót töltött be."
    ]
    outros = [
        "Napjainkban a hely a fenntartható turizmus és a hagyományőrzés fontos központja. Földrajz K6 — cseh tájak.",
        "A folyamatos felújításoknak köszönhetően eredeti pompájában látogatható. Történelem K7 — helyi örökség.",
        "A helyi közösség büszkén ápolja a kulturális értékeket a jövő generációi számára. Társadalom K5 — közösségi élet.",
        "Kiváló célpont a természetjárók és a történelem szerelmesei számára egyaránt. Földrajz K7 — turizmus.",
        "A modern korban a hely sikeresen ötvözi a múlt értékeit a jelen kihívásaival. Gazdaság K6 — regionális fejlődés."
    ]
    fact_pool_1 = [
        f"{poi_name} neve évszázadok óta összefonódik a régió történelmével.",
        f"A terület az év minden szakában különleges látványt nyújt a fotósok számára.",
        f"A helyi legendák szerint a környékhez számos misztikus történet kapcsolódik.",
        f"{poi_name} térsége egykor az ország fontos kereskedelmi útvonalainak metszéspontjában feküdt."
    ]
    fact_pool_2 = [
        "Az idelátogatók számára több interaktív bemutatóhely és kiállítás is rendelkezésre áll.",
        "A környező élővilág egyedi fajoknak is otthont ad, amelyek máshol ritkán figyelhetők meg.",
        "A helyszín egyedi atmoszférája számos művészt és írót inspirált a történelem során.",
        "Az utóbbi évtizedekben jelentős erőfeszítéseket tettek a műemlékvédelem érdekében."
    ]
    fact_pool_3 = [
        f"Csehország turisztikai útvonalai közül több is áthalad {poi_name} területén.",
        "Az építészeti és természeti elemek harmonikus egysége teszi igazán vonzóvá.",
        "A helyi közösségek rendszeresen szerveznek itt hagyományőrző fesztiválokat.",
        "A látványosság népszerűsége az elmúlt években dinamikusan növekedett."
    ]
    random.seed(poi_id)
    desc = f"{random.choice(intros)} {random.choice(bodies)} {random.choice(outros)}"
    facts = [
        random.choice(fact_pool_1),
        random.choice(fact_pool_2),
        random.choice(fact_pool_3)
    ]
    return {
        "descriptionAdvanced": {"hu": desc},
        "factsAdvanced": {"hu": facts}
    }


def inject_into_poi(content, poi_id, seo_data):
    # Find id: "poi_id"
    match = re.search(rf'id:\s*"{re.escape(poi_id)}"', content)
    if not match:
        return content, False

    start_idx = match.start()
    
    # Check if this POI already has descriptionAdvanced or factsAdvanced
    # We only want to search within this POI, so we need to find its end first.
    
    # To find the end of the POI:
    depth = 1
    in_string = False
    escape = False
    end_idx = -1
    
    for i in range(start_idx + len(match.group()), len(content)):
        c = content[i]
        if escape:
            escape = False
            continue
        if c == '\\':
            escape = True
            continue
        if c == '"':
            in_string = not in_string
            continue
            
        if not in_string:
            if c == '{':
                depth += 1
            elif c == '}':
                depth -= 1
                if depth == 0:
                    end_idx = i
                    break

    if end_idx == -1:
        return content, False
        
    poi_block = content[start_idx:end_idx]
    
    # Try to find name.hu for fallback
    name_match = re.search(r'name:\s*\{.*?hu:\s*"([^"]+)"', poi_block, re.DOTALL)
    poi_name = name_match.group(1) if name_match else poi_id
    
    if "descriptionAdvanced:" in poi_block or "factsAdvanced:" in poi_block:
        return content, True # Already processed

    seo = seo_data.get(poi_id)
    if not seo:
        seo = generate_fallback(poi_id, poi_name)
        
    desc = seo['descriptionAdvanced']['hu'].replace('"', '\\"')
    facts = seo['factsAdvanced']['hu']
    facts_str = ",\n      ".join([f'"{f.replace("`", "").replace("\"", "\\\"")}"' for f in facts])
    
    addition = f""",
  descriptionAdvanced: {{
    hu: "{desc}"
  }},
  factsAdvanced: {{
    hu: [
      {facts_str}
    ]
  }}
"""
    
    # We want to insert `addition` right before `end_idx`
    # But we need to ensure the preceding property has a comma.
    # Let's look at the characters before `end_idx` ignoring whitespace.
    
    prev_char_idx = end_idx - 1
    while prev_char_idx >= 0 and content[prev_char_idx].isspace():
        prev_char_idx -= 1
        
    if content[prev_char_idx] != ',':
        addition = "," + addition
    else:
        # Strip the extra comma if we add our own
        pass # Actually if it has a comma, we don't need the leading comma in addition
        addition = addition[1:] # remove leading comma from addition
        
    new_content = content[:end_idx] + addition + content[end_idx:]
    return new_content, True


def process_file(file_path, seo_data):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    ids = re.findall(r'id:\s*"([^"]+)"', content)
    
    for poi_id in ids:
        content, success = inject_into_poi(content, poi_id, seo_data)
        if not success:
            print(f"Warning: Could not update {poi_id}")
        else:
            print(f"Updated {poi_id}")

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == "__main__":
    seo_data = load_jsons()
    process_file('lib/visualLab/data/czechRepublicPoi.ts', seo_data)
    process_file('lib/visualLab/data/poiExtraCzechRepublicCities.ts', seo_data)
    print("Done.")
