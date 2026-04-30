import re

file_path = '/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraAndorraCities.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

DE_DESC = "Ein beliebter Ortsteil, bekannt für seine ruhige Atmosphäre und die malerische Umgebung am Rande des Tales. Die Gegend verbindet traditionelle andorranische Architektur mit modernen Wohnansprüchen und bietet herrliche Ausblicke auf die umliegende Bergwelt. Es ist ein idealer Ausgangspunkt für Wanderungen und sportliche Aktivitäten in der Natur, weit weg von der Hektik des Alltags. Besucher schätzen besonders die entspannte Lebensweise und die direkte Nähe zu den vielfältigen Freizeitmöglichkeiten der Region, was diesen Ort zu einem Geheimtipp für Ruhesuchende macht, die dennoch Wert auf eine gute Infrastruktur und Erreichbarkeit legen."

DE_FACTS = '["Traditionelle andorranische Steinbauweise.", "Direkter Zugang zu malerischen Wanderwegen.", "Atemberaubender Blick auf das umliegende Gebirge.", "Ruhige Lage fernab vom städtischen Lärm.", "Kombination aus Tradition und modernem Wohnen.", "Idealer Ausgangspunkt für Outdoor-Sportarten.", "Gute Anbindung an lokale Sehenswürdigkeiten."]'

# Replace descriptionAdvanced
content = content.replace('descriptionAdvanced: { de: "",', f'descriptionAdvanced: {{ de: "{DE_DESC}",')

# Replace factsAdvanced
content = content.replace('factsAdvanced: { de: [],', f'factsAdvanced: {{ de: {DE_FACTS},')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
