import re, json
import apply_ro_1
import apply_ro_3

# Extract the texts we already wrote for the corrupted names
thorshofn = apply_ro_3.data_by_name["Þórshöfn"]
olafsfjordur = apply_ro_3.data_by_name["Ólafsfjörður"]
thjorsardalur = apply_ro_3.data_by_name["?jórsárdalur"]
olafsvik = apply_ro_3.data_by_name["Ólafsvík"]
thingeyri = apply_ro_3.data_by_name["Þingeyri"]

thorlakshofn = {
  "desc": "Þorlákshöfn este singurul port maritim major de pe coasta sudică a Islandei, un hub logistic esențial care conectează insulele Westman (Vestmannaeyjar) de continent. Deși zona a fost colonizată încă din epoca vikingă, orașul modern a crescut spectaculos la mijlocul secolului al XX-lea în jurul portului său natural protejat. Este renumit pentru dunele de nisip vulcanic negru masive, unde pasionații de sporturi cu motor (motocross și ATV) se adună frecvent. Dincolo de utilitatea sa portuară, orașul se mândrește cu facilități excelente, incluzând bazine de înot calde recunoscute și acces ușor la traseele de coastă presărate cu faruri pitorești.",
  "facts": [
    "Servește ca unicul port major funcțional de pe toată coasta sudică islandeză.",
    "Feribotul principal Herjólfur pleacă frecvent de aici spre Insulele Westman.",
    "Plajele din sudul orașului sunt extrem de populare printre surferii internaționali.",
    "Numele său onorează pe Sfântul Thorlak, episcop patron al Islandei."
  ]
}

data_by_id = {
    "city-thorshofn-extra": thorshofn,
    "city-olafsfjordur-extra": olafsfjordur,
    "city-thjorsardalur-extra": thjorsardalur,
    "city-olafsvik-extra": olafsvik,
    "city-thorlakshofn-extra": thorlakshofn,
    "city-thingeyri-extra": thingeyri,
    
    "city-fludir-new-extra": apply_ro_1.data["city-fludir-extra"],
    "city-hella-new-extra": apply_ro_1.data["city-hella-extra"],
    "city-grenivik-north-extra": apply_ro_1.data["city-grenivik-extra"],
    "city-eskifjordur-new-extra": apply_ro_1.data["city-eskifjordur-extra"],
    "city-flateyri-is-007-extra": apply_ro_1.data["city-flateyri-extra"],
    "city-hvammstangi-north-extra": apply_ro_1.data["city-hvammstangi-extra"],
    "city-faskrudsfjordur-new-extra": {
        "desc": "Fáskrúðsfjörður este un sat pitoresc din estul Islandei, renumit pentru legăturile sale istorice unice cu pescarii francezi care au operat în aceste ape în secolele trecute. Această moștenire este vizibilă chiar și astăzi, prin semnele stradale bilingve în islandeză și franceză, care oferă localității un caracter cultural distinctiv în peisajul islandez. Satul găzduiește un centru cultural remarcabil, situat într-un fost spital francez restaurat, care spune povestea pescarilor care au navigat în condiții aspre în Atlanticul de Nord. Amplasat într-un fiord spectaculos, Fáskrúðsfjörður oferă panorame uimitoare asupra oceanului și a munților din jur, fiind o destinație ideală pentru pasionații de istorie și natură care doresc să descopere o latură mai puțin cunoscută a Islandei.",
        "facts": [
            "Are străzi cu semne bilingve, islandeze și franceze, în onoarea pescarilor francezi din secolul XIX.",
            "Vechiul spital francez a fost restaurat masiv și transformat în hotel de patrimoniu și muzeu.",
            "Fiordul din jurul satului oferă priveliști spectaculoase spre vulcanul adormit Snæfell.",
            "Satul sărbătorește anual 'Zilele Franceze' printr-un festival tematic estival."
        ]
    }
}

with open("lib/visualLab/data/poiExtraIcelandCities.ts", "r", encoding="utf-8") as f:
    content = f.read()

pois_text = re.split(r"(?=\n  \{\n    id:)", content)
out_blocks = []

for block in pois_text:
    if "id:" not in block:
        out_blocks.append(block)
        continue
        
    id_match = re.search(r"id:\s*\"(.*?)\"", block)
    if not id_match:
        out_blocks.append(block)
        continue
        
    pid = id_match.group(1)
    
    info = None
    if pid in data_by_id:
        info = data_by_id[pid]
        
    if info:
        # Add descriptionAdvanced if entirely missing
        if "descriptionAdvanced:" not in block:
            inject_desc = f"""
    descriptionAdvanced: {{
      de: "",
      hu: "",
      ro: "{info['desc']}",
      en: ""
    }},"""
            block = re.sub(r"(description:\s*\{.*?\},\n    facts:\s*\{.*?\},?)", r"\1" + inject_desc, block, flags=re.DOTALL)
        else:
            def repl_desc(m2):
                inner = m2.group(1)
                if "ro: \"\"" in inner:
                    inner = inner.replace("ro: \"\"", f"ro: \"{info['desc']}\"")
                elif "ro:" not in inner:
                    inner = f"\n        ro: \"{info['desc']}\",\n" + inner
                else:
                    inner = re.sub(r"ro:\s*\".*?\",", f"ro: \"{info['desc']}\",", inner, flags=re.DOTALL)
                return "descriptionAdvanced: {" + inner + "}"
            block = re.sub(r"descriptionAdvanced:\s*\{(.*?)\}", repl_desc, block, flags=re.DOTALL)
            
        # Add factsAdvanced if entirely missing
        ro_facts = json.dumps(info['facts'], ensure_ascii=False)
        if "factsAdvanced:" not in block:
            inject_facts = f"""
    factsAdvanced: {{
      de: [],
      hu: [],
      ro: {ro_facts},
      en: []
    }},"""
            block = re.sub(r"(descriptionAdvanced:\s*\{.*?\},?)", r"\1" + inject_facts, block, flags=re.DOTALL)
        else:
            def repl_facts(m2):
                inner = m2.group(1)
                if "ro: []" in inner:
                    inner = inner.replace("ro: []", f"ro: {ro_facts}")
                elif "ro:" not in inner:
                    inner = f"\n        ro: {ro_facts},\n" + inner
                else:
                    inner = re.sub(r"ro:\s*\[.*?\],", f"ro: {ro_facts},", inner, flags=re.DOTALL)
                return "factsAdvanced: {" + inner + "}"
            block = re.sub(r"factsAdvanced:\s*\{(.*?)\}", repl_facts, block, flags=re.DOTALL)
            
    out_blocks.append(block)

with open("lib/visualLab/data/poiExtraIcelandCities.ts", "w", encoding="utf-8") as f:
    f.write("".join(out_blocks))

print("Applied batch 4 data.")
