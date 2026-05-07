import re
with open('/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraEritreaCitiesV2.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix Asmara facts
content = re.sub(r"factsAdvanced: \{\n\s*de: \['Asmara.*?\],", 
    "factsAdvanced: {\n      de: ['Asmara liegt auf 2325 Metern über dem Meeresspiegel.', 'Über 400 Gebäude stammen aus der italienischen Kolonialzeit.', 'Wurde 2017 zum UNESCO-Welterbe ernannt.', 'Die Stadt überstand den Unabhängigkeitskrieg fast unversehrt.', 'Zahlreiche Art-déco-Bauwerke prägen das Stadtbild.', 'Die durchschnittliche Jahrestemperatur beträgt 17 °C.'],\n      hu: ['Aszmara 2325 méteres tengerszint feletti magasságban fekszik.', 'Több mint 400 épület származik az olasz gyarmati időszakból.', '2017-ben lett UNESCO világörökségi helyszín.', 'A város szinte érintetlenül vészelte át a függetlenségi háborút.', 'Számos art déco épület határozza meg a városképet.', 'Az átlagos évi hőmérséklet 17 °C.'],\n      ro: ['Asmara este situată la 2325 de metri deasupra nivelului mării.', 'Peste 400 de clădiri datează din perioada colonială italiană.', 'A fost declarată patrimoniu mondial UNESCO în 2017.', 'Orașul a supraviețuit aproape intact războiului de independență.', 'Numeroase clădiri art déco definesc peisajul urban.', 'Temperatura medie anuală este de 17 °C.'],", content)

# Remove the broken Massawa lines
# I'll just restore the original file and apply the changes properly or just edit it manually.
