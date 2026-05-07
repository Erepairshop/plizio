import re
massawa_data = {
    "de": "Massaua ist die wichtigste Hafenstadt Eritreas am Roten Meer und besteht aus einer Mischung aus Festland und Inseln, die durch Dämme verbunden sind. Die historische Altstadt, das 'Batse-Viertel', zeigt noch heute den Einfluss osmanischer und ägyptischer Architektur aus der Zeit des 19. Jahrhunderts. Geschichte K8 — Kolonialzeit am Roten Meer.",
    "hu": "Massawa Eritrea legfontosabb vörös-tengeri kikötővárosa, amely szárazföldi és szigeti részekből áll, gátakkal összekötve. A történelmi óváros, a 'Batse-negyed' a 19. századi oszmán és egyiptomi építészet hatását őrzi. Történelem K8 — gyarmati időszak a Vörös-tengernél.",
    "ro": "Massawa este cel mai important oraș portuar eritreean la Marea Roșie, fiind format dintr-un amestec de continent și insule unite prin diguri. Centrul istoric al orașului, cartierul 'Batse', păstrează și astăzi influența arhitecturii otomane și egiptene din secolul al XIX-lea. Istorie K8 — perioada colonială la Marea Roșie.",
    "facts": ["Massaua liegt nur wenige Meter über dem Meeresspiegel.", "War der wichtigste Hafen der italienischen Kolonialverwaltung.", "Besitzt eine der historisch bedeutsamsten Altstädte am Roten Meer.", "Wurde im 19. Jahrhundert massiv von Ägypten ausgebaut.", "Gehört zu den heißesten bewohnten Orten der Erde.", "Der Hafen diente als wichtiger Umschlagplatz für Kaffee und Baumwolle."]
}
with open('/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraEritreaCitiesV2.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace Massawa's empty strings
content = re.sub(r'massawa-cities-v2",[\s\S]*?descriptionAdvanced: \{\n\s*de: "",\n\s*hu: "",\n\s*ro: "",', 
    f'massawa-cities-v2",\n    descriptionAdvanced: {{\n      de: "{massawa_data["de"]}",\n      hu: "{massawa_data["hu"]}",\n      ro: "{massawa_data["ro"]}",', content)
content = re.sub(r'factsAdvanced: \{\n\s*de: \[\'Asmara.*?\]', 
    f'factsAdvanced: {{\n      de: {massawa_data["facts"]},\n      hu: {massawa_data["facts"]},\n      ro: {massawa_data["facts"]}', content)

with open('/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraEritreaCitiesV2.ts', 'w', encoding='utf-8') as f:
    f.write(content)
