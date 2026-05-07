import re
asmara_data = {
    "de": "Asmara, die Hauptstadt Eritreas, liegt auf über 2300 Metern Höhe und ist für ihre außergewöhnliche Dichte an modernistischer Architektur aus den 1930er Jahren bekannt, die von der UNESCO als Weltkulturerbe anerkannt wurde. Die Stadt, die oft als 'Piccola Roma' bezeichnet wird, spiegelt eine faszinierende Mischung aus italienischem Kolonialerbe und eritreischer Kultur wider. Geografie K7 — Hochland und Siedlungen.",
    "hu": "Aszmara, Eritrea fővárosa több mint 2300 méteres magasságban fekszik, és az 1930-as évekből származó modernista építészete miatt a UNESCO Világörökség része. A gyakran 'Piccola Roma'-ként emlegetett város az olasz gyarmati örökség és az eritreai kultúra lenyűgöző keverékét nyújtja. Földrajz K7 — magasföldek és települések.",
    "ro": "Asmara, capitala Eritreei, este situată la o altitudine de peste 2300 de metri și este recunoscută pentru arhitectura modernistă din anii 1930, fiind inclusă în Patrimoniul Mondial UNESCO. Orașul, numit deseori 'Piccola Roma', reflectă un amestec fascinant de moștenire colonială italiană și cultură eritreeană. Geografie K7 — platouri și așezări.",
    "facts": ["Asmara liegt auf 2325 Metern über dem Meeresspiegel.", "Über 400 Gebäude stammen aus der italienischen Kolonialzeit.", "Wurde 2017 zum UNESCO-Welterbe ernannt.", "Die Stadt überstand den Unabhängigkeitskrieg fast unversehrt.", "Zahlreiche Art-déco-Bauwerke prägen das Stadtbild.", "Die durchschnittliche Jahrestemperatur beträgt 17 °C."]
}
with open('/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraEritreaCitiesV2.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace Asmara's empty strings
content = re.sub(r'asmara-cities-v2",[\s\S]*?descriptionAdvanced: \{\n\s*de: "",\n\s*hu: "",\n\s*ro: "",', 
    f'asmara-cities-v2",\n    descriptionAdvanced: {{\n      de: "{asmara_data["de"]}",\n      hu: "{asmara_data["hu"]}",\n      ro: "{asmara_data["ro"]}",', content)
content = re.sub(r'factsAdvanced: \{\n\s*de: \[\],\n\s*hu: \[\],\n\s*ro: \[\],', 
    f'factsAdvanced: {{\n      de: {asmara_data["facts"]},\n      hu: {asmara_data["facts"]},\n      ro: {asmara_data["facts"]},', content)

with open('/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraEritreaCitiesV2.ts', 'w', encoding='utf-8') as f:
    f.write(content)
