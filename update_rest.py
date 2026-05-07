import json, re

asmara_facts = ["Asmara liegt auf 2325 Metern über dem Meeresspiegel.", "Über 400 Gebäude stammen aus der italienischen Kolonialzeit.", "Wurde 2017 zum UNESCO-Welterbe ernannt.", "Die Stadt überstand den Unabhängigkeitskrieg fast unversehrt.", "Zahlreiche Art-déco-Bauwerke prägen das Stadtbild.", "Die durchschnittliche Jahrestemperatur beträgt 17 °C."]
massawa_desc = {
    "de": "Massaua ist die wichtigste Hafenstadt Eritreas am Roten Meer und besteht aus einer Mischung aus Festland und Inseln, die durch Dämme verbunden sind. Die historische Altstadt, das 'Batse-Viertel', zeigt noch heute den Einfluss osmanischer und ägyptischer Architektur aus der Zeit des 19. Jahrhunderts. Geschichte K8 — Kolonialzeit am Roten Meer.",
    "hu": "Massawa Eritrea legfontosabb vörös-tengeri kikötővárosa, amely szárazföldi és szigeti részekből áll, gátakkal összekötve. A történelmi óváros, a 'Batse-negyed' a 19. századi oszmán és egyiptomi építészet hatását őrzi. Történelem K8 — gyarmati időszak a Vörös-tengernél.",
    "ro": "Massawa este cel mai important oraș portuar eritreean la Marea Roșie, fiind format dintr-un amestec de continent și insule unite prin diguri. Centrul istoric al orașului, cartierul 'Batse', păstrează și astăzi influența arhitecturii otomane și egiptene din secolul al XIX-lea. Istorie K8 — perioada colonială la Marea Roșie.",
    "en": "Massawa is Eritrea's most important Red Sea port city, consisting of a blend of mainland and islands connected by causeways. The historic old town, 'Batse district', retains the influence of 19th-century Ottoman and Egyptian architecture. History K8 — colonial period on the Red Sea."
}
massawa_facts = ["Massaua liegt nur wenige Meter über dem Meeresspiegel.", "War der wichtigste Hafen der italienischen Kolonialverwaltung.", "Besitzt eine der historisch bedeutsamsten Altstädte am Roten Meer.", "Wurde im 19. Jahrhundert massiv von Ägypten ausgebaut.", "Gehört zu den heißesten bewohnten Orten der Erde.", "Der Hafen diente als wichtiger Umschlagplatz für Kaffee und Baumwolle."]

with open('/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraEritreaCitiesV2.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Add factsAdvanced to Asmara
content = re.sub(r'(id: "asmara-cities-v2",[\s\S]*?descriptionAdvanced: \{[\s\S]*?\},)', 
                 r'\1\n    factsAdvanced: {\n      de: ' + json.dumps(asmara_facts, ensure_ascii=False) + ',\n      hu: ' + json.dumps(asmara_facts, ensure_ascii=False) + ',\n      ro: ' + json.dumps(asmara_facts, ensure_ascii=False) + ',\n      en: ' + json.dumps(asmara_facts, ensure_ascii=False) + '\n    },', content)

# Add both for Massawa
content = re.sub(r'(id: "massawa-cities-v2",[\s\S]*?facts: \{[\s\S]*?\},\n)', 
                 r'\1    descriptionAdvanced: ' + json.dumps(massawa_desc, ensure_ascii=False, indent=6) + ',\n    factsAdvanced: {\n      de: ' + json.dumps(massawa_facts, ensure_ascii=False) + ',\n      hu: ' + json.dumps(massawa_facts, ensure_ascii=False) + ',\n      ro: ' + json.dumps(massawa_facts, ensure_ascii=False) + ',\n      en: ' + json.dumps(massawa_facts, ensure_ascii=False) + '\n    },\n', content)

with open('/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraEritreaCitiesV2.ts', 'w', encoding='utf-8') as f:
    f.write(content)
