import re
import json

ts_file = 'lib/visualLab/data/poiExtraAndorraCities.ts'

with open(ts_file, 'r', encoding='utf-8') as f:
    content = f.read()

updates = {
    "city-padola-extra": {
        "desc": "Padola ist ein ruhiges Gebiet mit Wohnstraßen in der Nähe von La Massana. Die Nachbarschaft besteht hauptsächlich aus Villen und Familienhäusern, die eine friedliche Atmosphäre bieten, obwohl sie sich in der Nähe des geschäftigen städtischen Lebenszentrums befinden.",
        "facts": ["Ruhige Wohnstraßen", "Hauptsächlich Villen", "Familienfreundlich", "In der Nähe von La Massana", "Friedliche Atmosphäre"]
    },
    "city-borda-rossell-extra": {
        "desc": "Borda Rossell repräsentiert das landwirtschaftliche Erbe von La Massana. Die 'Bordas' waren traditionelle Bauernhäuser und Lagerräume in den Pyrenäen. Einige dieser alten Gebäude wurden erhalten und in Museen oder authentische andorranische Restaurants umgewandelt.",
        "facts": ["Historisches landwirtschaftliches Erbe", "Traditionelle Pyrenäen-Bordas", "Einige als Museen erhalten", "Authentische andorranische Restaurants", "Erinnerung an das alte Bergleben"]
    },
    "city-comapedrosa-base-extra": {
        "desc": "Dieses Gebiet dient als Haupteingang zum Naturpark Coma Pedrosa. Von hier aus beginnen die beliebtesten Wanderwege zum höchsten Gipfel Andorras (2.942 m). Das Basislager ist von dichter Natur umgeben und ein idealer Ausgangspunkt für Hochgebirgstouren.",
        "facts": ["Eingang zum Naturpark Coma Pedrosa", "Startpunkt für Bergtouren", "Weg zum höchsten Gipfel Andorras", "Reiche alpine Flora und Fauna", "Mekka für Wanderer"]
    },
    "city-llorts-extra": {
        "desc": "Llorts ist eines der idyllischsten Dörfer in Ordino, geprägt von den dunklen Schieferdächern der traditionellen andorranischen Architektur. Das Dorf war ein wichtiges Zentrum der Eisenindustrie, an die die Eisenskulpturen und die nahe gelegene alte Eisenmine erinnern.",
        "facts": ["Traditionelle andorranische Architektur", "Historisches Eisenindustriezentrum", "Skulpturenweg der Eisenroute", "Alte Eisenmine in der Nähe", "Idyllische Berglage"]
    },
    "city-el-serrat-extra": {
        "desc": "El Serrat ist die nördlichste besiedelte Stadt Andorras vor dem Skigebiet Ordino Arcalís. Umgeben von unberührter Natur und rauschenden Bergbächen ist das Dorf ein beliebter Zwischenstopp für Skifahrer im Winter und ein Paradies für Wanderer im Sommer.",
        "facts": ["Nördlichste Siedlung Andorras", "Tor zum Skigebiet Ordino Arcalís", "Umgeben von Bergbächen", "Paradies für Wanderer", "Winter-Zwischenstopp für Skifahrer"]
    },
    "city-la-cortinada-extra": {
        "desc": "La Cortinada ist ein malerisches Dorf in Ordino, das vor allem für seine romanische Kirche Sant Martí de la Cortinada aus dem 12. Jahrhundert bekannt ist. Die Fresken der Kirche und die alte Mühle Cal Pal nebenan sind Zeugen des mittelalterlichen Lebens in den Pyrenäen.",
        "facts": ["Malerisches Dorf in Ordino", "Romanische Kirche Sant Martí", "Fresken aus dem 12. Jahrhundert", "Alte Mühle Cal Pal", "Zeugnisse des Mittelalters"]
    },
    "city-segudet-extra": {
        "desc": "Segudet ist ein winziges Dorf, versteckt im Wald in der Nähe der Stadt Ordino. Es bietet eine außergewöhnlich friedliche Umgebung und ist ein Ausgangspunkt für Wanderwege, die in die umliegenden dichten Pinienwälder führen.",
        "facts": ["Verstecktes Dorf im Wald", "Nahe der Stadt Ordino", "Ausgangspunkt für Wanderungen", "Dichte Pinienwälder", "Außergewöhnlich friedlich"]
    },
    "city-sorna-extra": {
        "desc": "Sornàs liegt in der Gemeinde Ordino und ist ein beispielhaftes Dorf, das den wahren andorranischen ländlichen Charakter bewahrt hat. Das Dorf ist von Tabakfeldern und Gemüsegärten umgeben, die die traditionelle Landwirtschaft der Region am Leben erhalten.",
        "facts": ["Wahrer ländlicher Charakter", "Tabakfelder und Gemüsegärten", "Traditionelle Landwirtschaft", "Lage in der Gemeinde Ordino", "Lebendiges Kulturerbe"]
    },
    "city-ancodina-extra": {
        "desc": "Ancodina ist eine kleine Siedlung im Tal von Ordino, die für ihre herrliche Naturkulisse bekannt ist. Die Gegend ist weniger touristisch geprägt, was sie zu einem perfekten Rückzugsort für diejenigen macht, die Ruhe und Entspannung inmitten der Berge suchen.",
        "facts": ["Kleine Siedlung in Ordino", "Herrliche Naturkulisse", "Weniger touristisch", "Perfekter Rückzugsort", "Ruhige Atmosphäre"]
    },
    "city-arans-extra": {
        "desc": "Arans ist ein ruhiges Bergdorf entlang der Straße in Richtung El Serrat. Die Siedlung hat sich ihren rustikalen Charme bewahrt und bietet einen ungehinderten Blick auf das umliegende grüne Tal und die schneebedeckten Gipfel.",
        "facts": ["Ruhiges Bergdorf", "Entlang der Straße nach El Serrat", "Rustikaler Charme", "Ungehinderter Blick auf das Tal", "Schneebedeckte Gipfel im Winter"]
    },
    "city-casa-molines-extra": {
        "desc": "Casa Molines ist eher ein historisches Wahrzeichen oder Gutsbezirk, der das reiche landwirtschaftliche Erbe der Gemeinde widerspiegelt. Solche Orte sind typisch für das alte Andorra, wo Großfamilien riesige Ländereien verwalteten.",
        "facts": ["Historisches Wahrzeichen", "Spiegelt das landwirtschaftliche Erbe wider", "Typisch für das alte Andorra", "Großfamilien-Besitz", "Ländliche Tradition"]
    },
    "city-els-plans-ordino-extra": {
        "desc": "Els Plans ist ein moderneres Viertel in Ordino, in dem neuere Gebäude harmonisch in die natürliche Umgebung integriert sind. Es bietet hochwertige Wohnimmobilien mit hervorragendem Blick auf die Berge.",
        "facts": ["Modernes Viertel in Ordino", "Harmonische Integration in die Natur", "Hochwertige Wohnimmobilien", "Hervorragender Bergblick", "Sonnige Lage"]
    },
    "city-ordino-arcalis-extra": {
        "desc": "Dies ist die Basis des Skigebiets Ordino Arcalís, bekannt für seine exzellente Schneequalität und spektakulären Freeride-Gebiete. Das Gebiet hat kein städtisches Zentrum, sondern ist voll und ganz auf alpine Sportarten und Bergerlebnisse ausgerichtet.",
        "facts": ["Basis des Skigebiets Ordino Arcalís", "Exzellente Schneequalität", "Spektakuläre Freeride-Gebiete", "Fokus auf alpine Sportarten", "Kein städtisches Zentrum"]
    },
    "city-sorteny-valley-extra": {
        "desc": "Der Eingang zum Sorteny-Tal, das heute ein geschützter Naturpark ist. Dieses Gebiet ist berühmt für seine botanische Vielfalt mit über 700 Pflanzenarten. Es ist ein Paradies für Naturliebhaber und Wanderer, die die unberührte Flora Andorras entdecken möchten.",
        "facts": ["Eingang zum Sorteny-Naturpark", "Über 700 Pflanzenarten", "Botanische Vielfalt", "Paradies für Naturliebhaber", "Geschütztes Ökosystem"]
    },
    "city-pont-d-arcalis-extra": {
        "desc": "Pont d'Arcalís ist eine Brücke und ein Treffpunkt auf dem Weg in Richtung des Skigebiets. Es markiert den Übergang in die hochalpinen Landschaften und ist oft ein Ausgangspunkt für Wanderungen und Klettertouren in den steilen Felsen.",
        "facts": ["Brücke auf dem Weg zum Skigebiet", "Übergang in hochalpine Landschaften", "Ausgangspunkt für Wanderungen", "Startpunkt für Klettertouren", "Spektakuläre Umgebung"]
    },
    "city-les-salines-extra": {
        "desc": "Les Salines ist ein kleines, friedliches Viertel in Ordino, das von üppigen Wäldern umgeben ist. Die traditionelle andorranische Architektur ist hier gut erhalten, und die Gegend strahlt eine Aura von historischer Gelassenheit aus.",
        "facts": ["Friedliches Viertel in Ordino", "Von üppigen Wäldern umgeben", "Traditionelle andorranische Architektur", "Historische Gelassenheit", "Abgelegen und entspannend"]
    },
    "city-pla-dordino-extra": {
        "desc": "Pla d'Ordino ist ein flacheres, sonniges Gebiet in der ansonsten steilen Gemeinde. Es bietet Platz für landwirtschaftliche Felder und einige Wohngebäude und gilt als eines der landschaftlich reizvollsten Wohngebiete der Region.",
        "facts": ["Flacheres, sonniges Gebiet", "Landwirtschaftliche Felder", "Reizvolles Wohngebiet", "Schöne Ausblicke", "Ruhiges Leben"]
    },
    "city-riu-de-tristaina-extra": {
        "desc": "Die Umgebung entlang des Flusses Tristaina in Ordino, nahe den berühmten Tristaina-Seen. Die Gegend ist wild, geprägt von rauschenden Gewässern und bietet im Sommer perfekte Routen für erfahrene Wanderer und Naturliebhaber.",
        "facts": ["Entlang des Flusses Tristaina", "Nahe den Tristaina-Seen", "Wilde, natürliche Umgebung", "Rauschende Gewässer", "Perfekte Wanderrouten im Sommer"]
    },
    "city-aixirivall-extra": {
        "desc": "Aixirivall ist ein charmantes Dorf hoch oben an den Hängen von Sant Julià de Lòria. Es ist bekannt für seine atemberaubende Aussicht über das Tal und die traditionellen Tabakfelder. Die Gegend bewahrt ihren ländlichen Charakter trotz der Nähe zur Hauptstadt.",
        "facts": ["Charmantes Dorf am Hang", "Atemberaubende Aussicht", "Traditionelle Tabakfelder", "Ländlicher Charakter", "In der Gemeinde Sant Julià de Lòria"]
    },
    "city-bixessarri-extra": {
        "desc": "Bixessarri ist eines der malerischsten Dörfer Andorras und liegt tief im Os-Tal. Die rustikalen Steinhäuser mit Schieferdächern drängen sich an den Ufern des Flusses d'Os zusammen und schaffen ein Postkartenmotiv inmitten wilder Natur.",
        "facts": ["Malerisches Dorf im Os-Tal", "Rustikale Steinhäuser", "Lage am Fluss d'Os", "Postkartenmotiv", "Wilde, natürliche Umgebung"]
    },
    "city-fontaneda-extra": {
        "desc": "Fontaneda liegt auf einer Höhe von 1.300 Metern und ist umgeben von Weinbergen. Dieses Dorf spielt eine wichtige Rolle in der Wiederbelebung des andorranischen Weinbaus. Die romanische Kirche Sant Miquel de Fontaneda ist eine weitere bemerkenswerte Sehenswürdigkeit.",
        "facts": ["Lage auf 1.300 Metern Höhe", "Umgeben von Weinbergen", "Wiederbelebung des andorranischen Weinbaus", "Kirche Sant Miquel de Fontaneda", "Einzigartiges Terroir"]
    },
    "city-aubinya-extra": {
        "desc": "Auvinyà, oder Aubinyà, ist ein rekonstruiertes Dorf, das in den letzten Jahren im traditionellen andorranischen Stil neu erbaut wurde. Es vereint mittelalterliche architektonische Elemente mit modernem Komfort und ist für seine Weinproduktion bekannt.",
        "facts": ["Rekonstruiertes Dorf", "Traditioneller andorranischer Stil", "Mittelalterliche Architekturelemente", "Modernster Komfort", "Bekannt für Weinproduktion"]
    },
    "city-juberri-extra": {
        "desc": "Juberri ist ein sonniges Dorf in großer Höhe mit herrlichem Blick auf Sant Julià de Lòria. Eine Besonderheit des Dorfes sind die Gärten von Juberri (Jardins de Juberri), die mit modernen Skulpturen und exotischen Pflanzen geschmückt sind.",
        "facts": ["Sonniges Dorf in großer Höhe", "Herrlicher Talblick", "Gärten von Juberri", "Moderne Skulpturen", "Exotische Pflanzen"]
    },
    "city-nagol-extra": {
        "desc": "Nagol ist ein ruhiges, abgeschiedenes Dorf, das für die spektakulär gelegene romanische Kirche Sant Serni de Nagol aus dem 11. Jahrhundert berühmt ist. Die Kirche wurde fast am Rand einer steilen Klippe erbaut und bietet ein unglaubliches Panorama.",
        "facts": ["Ruhiges, abgeschiedenes Dorf", "Romanische Kirche Sant Serni de Nagol", "Bauwerk aus dem 11. Jahrhundert", "Lage am Rand einer Klippe", "Unglaubliches Panorama"]
    },
    "city-certers-extra": {
        "desc": "Certés ist ein winziges, altes Dorf auf einem Hügel, das den ursprünglichen Lebensstil der Bergbewohner Andorras widerspiegelt. Die Umgebung ist geprägt von Weideland und kleinen traditionellen Höfen (Bordes).",
        "facts": ["Winziges, altes Dorf", "Lage auf einem Hügel", "Ursprünglicher Lebensstil der Bergbewohner", "Weideland und kleine Höfe", "Traditionelles Andorra"]
    },
    "city-lumeneneres-extra": {
        "desc": "Llumeneres ist ein extrem kleines, abgelegenes Dorf nahe der spanischen Grenze. Nur eine Handvoll Einwohner leben hier, was es zu einem der am besten erhaltenen, authentischsten Teile von Sant Julià de Lòria macht.",
        "facts": ["Extrem kleines, abgelegenes Dorf", "Nahe der spanischen Grenze", "Nur wenige Einwohner", "Sehr gut erhalten und authentisch", "Maximale Ruhe"]
    },
    "city-aixovall-extra": {
        "desc": "Aixovall liegt am Zusammenfluss des Valira-Flusses und des Bixessarri-Flusses. Es beherbergte lange Zeit eines der wenigen Fußballstadien des Landes. Der Ort fungiert als Verkehrsknotenpunkt in Richtung Os de Civís.",
        "facts": ["Zusammenfluss zweier Flüsse", "Verkehrsknotenpunkt nach Os de Civís", "Ehemaliger Standort eines Fußballstadions", "Leicht erreichbar von Sant Julià", "Historisch wichtige Lage"]
    },
    "city-canolich-extra": {
        "desc": "Das Heiligtum von Canòlich ist ein Ort großer religiöser Bedeutung hoch in den Bergen. Das Heiligtum aus dem 12. Jahrhundert ist der Schutzpatronin von Sant Julià de Lòria gewidmet. Jedes Jahr im Mai wird hier ein großes Fest gefeiert.",
        "facts": ["Ort großer religiöser Bedeutung", "Heiligtum aus dem 12. Jahrhundert", "Schutzpatronin von Sant Julià", "Jährliches Fest im Mai", "Herrliche Aussicht auf die Täler"]
    },
    "city-mas-dalins-extra": {
        "desc": "Mas d'Alins ist ein altes Gehöft, das einen tiefen Einblick in das traditionelle ländliche Leben bietet. Solche isolierten Höfe bildeten in der Vergangenheit das Rückgrat der andorranischen Landwirtschaft.",
        "facts": ["Altes Gehöft", "Einblick in das traditionelle Leben", "Isolierte Lage", "Rückgrat der alten Landwirtschaft", "Ländliche Geschichte"]
    },
    "city-naturlandia-base-extra": {
        "desc": "Die Basisstation des Abenteuerparks Naturlandia in Rabassa. Dieses Gebiet bietet im Sommer und im Winter eine Vielzahl von Outdoor-Aktivitäten für Familien, darunter den berühmten Tobotronc, die längste alpine Rodelbahn der Welt.",
        "facts": ["Abenteuerpark Naturlandia", "Vielzahl von Outdoor-Aktivitäten", "Berühmter Tobotronc", "Längste alpine Rodelbahn der Welt", "Familienfreundliche Attraktionen"]
    },
    "city-les-cases-noves-extra": {
        "desc": "Les Cases Noves ist eine neuere Wohnsiedlung in Sant Julià de Lòria. Es spiegelt das Wachstum der Gemeinde in den letzten Jahrzehnten wider und bietet modernen Wohnraum in bequemer Nähe zur spanischen Grenze.",
        "facts": ["Neuere Wohnsiedlung", "Spiegelt das Wachstum der Gemeinde wider", "Moderner Wohnraum", "Nähe zur spanischen Grenze", "Bequeme Infrastruktur"]
    },
    "city-la-feria-extra": {
        "desc": "La Farga war historisch gesehen ein Zentrum der Eisenverarbeitung in Andorra, wo Schmieden am Flussufer das Wasser nutzten, um Mühlen und Hämmer anzutreiben. Heute erinnert der Name an diese vorindustrielle Ära.",
        "facts": ["Historisches Zentrum der Eisenverarbeitung", "Alte Schmieden am Flussufer", "Vorindustrielle Ära Andorras", "Nutzt Wasserkraft", "Erinnerung an alte Handwerke"]
    },
    "city-pont-de-fontaneda-extra": {
        "desc": "Die Umgebung der Brücke Pont de Fontaneda, die über den Valira-Fluss führt. Die historische Steinbrücke war eine der wenigen Verbindungen für den Handel zwischen den kleinen Bergdörfern in der Vergangenheit.",
        "facts": ["Historische Steinbrücke", "Führt über den Valira-Fluss", "Wichtige Handelsverbindung", "Architektonisches Erbe", "Malerischer Ort"]
    },
    "city-coll-de-la-gallina-extra": {
        "desc": "Coll de la Gallina ist ein anspruchsvoller Gebirgspass, der bei professionellen und Amateur-Radfahrern berühmt ist. Der steile Anstieg ist oft Schauplatz der Vuelta a España oder anderer wichtiger Radrennen.",
        "facts": ["Anspruchsvoller Gebirgspass", "Berühmt bei Radfahrern", "Oft Schauplatz der Vuelta a España", "Sehr steiler Anstieg", "Sportliches Highlight"]
    },
    "city-santa-coloma-extra": {
        "desc": "Santa Coloma gehört zur Gemeinde Andorra la Vella und ist berühmt für seine präromanische Kirche mit einem einzigartigen runden Glockenturm. Es ist eines der ältesten und wertvollsten historischen Denkmäler des Landes.",
        "facts": ["Teil von Andorra la Vella", "Präromanische Kirche", "Einzigartiger runder Glockenturm", "Eines der ältesten Denkmäler", "Wertvolles historisches Erbe"]
    },
    "city-la-margineda-extra": {
        "desc": "La Margineda liegt am Stadtrand der Hauptstadt und beherbergt die wichtigste mittelalterliche Brücke Andorras, die Pont de la Margineda. Es ist auch ein bedeutendes archäologisches Gebiet mit Überresten antiker Siedlungen.",
        "facts": ["Mittelalterliche Brücke Pont de la Margineda", "Wichtigstes historisches Bauwerk", "Am Stadtrand der Hauptstadt gelegen", "Bedeutendes archäologisches Gebiet", "Überreste antiker Siedlungen"]
    }
}

for poi_id, data in updates.items():
    desc_de = data['desc'].replace('"', '\\"')
    facts_de = json.dumps(data['facts'], ensure_ascii=False)

    poi_pattern = r'(\{\s*id:\s*"' + re.escape(poi_id) + r'"[\s\S]*?)(^\s*\}(?:,|\s*$))'
    match = re.search(poi_pattern, content, re.MULTILINE)
    if not match:
        print(f"Not found: {poi_id}")
        continue

    poi_block = match.group(1)
    end_part = match.group(2)
    new_block = poi_block

    # Replace descriptionAdvanced.de: "" with descriptionAdvanced.de: "desc_de"
    new_block = re.sub(r'(descriptionAdvanced:\s*\{[\s\S]*?de:\s*)"([^"]*)"', r'\1"' + desc_de + '"', new_block)
    
    # Replace factsAdvanced.de: [] with factsAdvanced.de: [...]
    new_block = re.sub(r'(factsAdvanced:\s*\{[\s\S]*?de:\s*)\[(.*?)\]', r'\1' + facts_de, new_block)

    content = content.replace(poi_block + end_part, new_block + end_part)

with open(ts_file, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated 36 POIs successfully (Batch 2).")
