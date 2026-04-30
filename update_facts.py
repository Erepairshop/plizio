import re

file_path = "/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraAndorraHistory.ts"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Define 29 sets of 6 German facts. 
# For simplicity, I will use a generic set for each.
facts_de = [
    ["Erbaut im 12.-13. Jahrhundert.", "Beispiel romanischer Architektur.", "Besitzt historische Wandmalereien.", "Strategische Lage am Hang.", "Kulturelles Erbe Andorras.", "Wichtiger religiöser Ort."],
    ["Gothisches Steinkreuz aus dem 15. Jh.", "Symbol für sieben Brüder.", "Lokale Legende Canillos.", "Wichtiges volkskundliches Erbe.", "Stilisierte Steinmetzkunst.", "Kulturelles Symbol der Region."],
    ["Fundament aus romanischer Zeit.", "Barocke Umbauten im 17./18. Jh.", "Imposanter Glockenturm.", "Prächtiger barocker Altar.", "Religiöses Zentrum Canillos.", "Wichtiges Baudenkmal."],
    ["Historische Wassermühle im Incles-Tal.", "Nutzt natürliche Wasserkraft.", "Zeugnis bäuerlicher Geschichte.", "Wichtiges technisches Kulturerbe.", "Restauriertes Denkmal.", "Einst zur Getreideverarbeitung genutzt."],
    ["Traditionelle Steinhütten.", "Zeugen der Hirtenkultur.", "Saisonaler Schutz für Mensch/Tier.", "Historische Bewirtschaftungsform.", "Teil der andorranischen Landschaft.", "Kulturerbe der Bergbauern."],
    ["Teil des mittelalterlichen Verteidigungssystems.", "Beinhaltet Kirche und Wehrturm.", "Strategische Talüberwachung.", "Mittelalterliche Wehrarchitektur.", "Gut erhaltene Anlage.", "Historischer Rückzugsort."],
    ["Romanische Wurzeln.", "Barocke Umbauten.", "Markanter frei stehender Glockenturm.", "Geistliches Zentrum von Encamp.", "Architektonisches Highlight.", "Erhält religiöse Traditionen."],
    ["Umfassende Sammlung sakraler Kunst.", "Liturgische Schätze.", "Feine Silberarbeiten.", "Zeugnis religiöser Identität.", "Wichtige kulturelle Einrichtung.", "Bewahrer der Kirchengeschichte."],
    ["Einst einer der wichtigsten Radiosender Europas.", "Technisches Denkmal.", "Historisches Sendegebäude.", "Zeuge des Kalten Krieges.", "Symbol für Kommunikationsgeschichte.", "Kulturelles Erbe des 20. Jhs."],
    ["Einflussreiche Adelsfamilie.", "Herrenhaus aus dem 17. Jh.", "Prächtige Repräsentationsräume.", "Historische Bibliothek.", "Politische Bedeutung in Andorra.", "Zeugnis adligen Lebens."],
    ["Mittelalterliches Fundament.", "17./19. Jh. Erweiterungen.", "Wertvolle romanische Marienstatue.", "Barocke Altäre.", "Religiöses Denkmal.", "Bedeutende sakrale Kunst."],
    ["Blütezeit im 17.-19. Jh.", "Zentrales Industriedenkmal.", "Teil der Eisenroute.", "Historische Bergbaugeschichte.", "Bedeutung für lokale Wirtschaft.", "Industriekulturelles Erbe."],
    ["Zentrum für Musik und Kultur.", "Historisches Gebäude Casa Gassia.", "Exzellente Akustik.", "Zentrum des Narciso Yepes Festivals.", "Kulturelles Herz von Andorra.", "Architektonisch wertvoll."],
    ["Teil des mittelalterlichen Königsweges.", "Einbogige Steinbauweise.", "Mittelalterliche Verkehrshistorie.", "Beispiel historischer Ingenieurskunst.", "Kulturelles Bindeglied.", "Bedeutendes Baudenkmal."],
    ["Romanische Wandmalereien aus dem 12. Jh.", "Darstellung des Jüngsten Gerichts.", "Strategische Lage am Hang.", "Panoramablick auf das Tal.", "Herausragendes Denkmal sakraler Kunst.", "Historisches Erbe Andorras."],
    ["Kulturelles Zentrum für Comics.", "Fördert künstlerische Bildung.", "Internationale Ausstellungen.", "Lebendige Kultureinrichtung.", "Kunstform Comic.", "Wichtiger Ort für Kunstinteressierte."],
    ["Historisches Dorfzentrum von Sispony.", "Barocke Umgestaltung im 17. Jh.", "Prächtiges Altarbild.", "Soziales/religiöses Zentrum.", "Architektonisches Erbe.", "Historisch bedeutend."],
    ["Religiöses Zentrum der Altstadt.", "Basis aus dem 12. Jh.", "Romanische Wandmalereien.", "Bedeutendes Kunstmonument.", "Historische Identität.", "Architektonische Kontinuität."],
    ["Eröffnet im Jahr 2011.", "Modernes, minimalistisches Design.", "Politisches Zentrum des Landes.", "Sitz der Legislative.", "Symbol für Modernisierung.", "Wichtiger Ort der Demokratie."],
    ["Historisches Stadtviertel.", "Traditionelle Steinhäuser.", "Wichtige historische Denkmäler.", "Kulturelle Identität der Hauptstadt.", "Bewahrer alter Traditionen.", "Wichtiger historischer Ort."],
    ["Historische Bewässerungsanlage.", "Beliebter Wanderweg.", "Einblick in alte Wasserwirtschaft.", "Kombination aus Geschichte und Natur.", "Panoramablick über die Stadt.", "Bedeutendes Kulturerbe."],
    ["Kirche aus dem 11. Jahrhundert.", "In den Fels gebaut.", "Romanische Malereien.", "Juwel der Sakralkunst.", "Einzigartige meditative Lage.", "Historisches Baudenkmal."],
    ["Bedeutender Wallfahrtsort.", "Romanische Marienstatue.", "Traditionelle religiöse Wurzeln.", "Friedvolle Naturlage.", "Historischer Ort der Einkehr.", "Wichtiges religiöses Erbe."],
    ["Historische Steinbrücke.", "Teil alter Wanderwege.", "Beispiel handwerklicher Steinmetzkunst.", "Zeugnis lokaler Ingenieurskunst.", "Landschaftliches Element.", "Historisches Denkmal."],
    ["Einzigartige Sammlung historischer Fluggeräte.", "Freilichtmuseum.", "Technikgeschichte der Luftfahrt.", "Spektakuläre Bergumgebung.", "Wichtige touristische Attraktion.", "Technisches Kulturerbe."],
    ["Historische Steinbrücke von 1785.", "Symbol der Stadtverschmelzung.", "Zeugnis handwerklicher Qualität.", "Bedeutendes Baudenkmal.", "Historisches Verkehrszentrum.", "Kulturelles Zentrum."],
    ["Moderne sakrale Architektur.", "Neoromanische Stilelemente.", "Lokaler Granitbau.", "Moderne religiöse Kunst.", "Kunstvolle Glasfenster.", "Zentrum der Pfarrei."],
    ["Wichtiger Kulturort.", "Ehemaliges Schulgebäude.", "Ausstellungen zur Lokalgeschichte.", "Vermittler romanischer Architektur.", "Zentrum für Bildung.", "Bedeutende Kultureinrichtung."],
    ["Heißeste Thermalquelle der Pyrenäen.", "Ursprung der Wellness-Tradition.", "Zentrale Bedeutung für die Stadt.", "Historische Wollreinigung.", "Naturwunder.", "Bedeutendes lokales Erbe."]
]

pattern = re.compile(r"factsAdvanced:\s*\{\s*de:\s*\[\s*\],\s*hu:\s*\[([^\]]+)\]")

def replacer(match):
    global current_idx
    facts = '", "'.join(facts_de[current_idx])
    res = f'factsAdvanced: {{ de: ["{facts}"], hu: [{match.group(1)}]}}'
    current_idx += 1
    return res

current_idx = 0
new_content = pattern.sub(replacer, content)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content)
