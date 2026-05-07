import re
import json

files = ['lib/visualLab/data/poiExtraAndorraCities.ts', 'lib/visualLab/data/poiExtraAndorraOther.ts']

updates = {
    "city-ciutat-de-valls-extra": {
        "desc": "Ciutat de Valls ist ein dicht besiedeltes Wohnviertel an den Hängen oberhalb der Hauptstadt. Dieses Viertel zeigt typische Elemente der städtischen Expansion in Andorra, bei der Wohnkomplexe aufgrund des Platzmangels im Tal direkt an den Berg gebaut wurden.",
        "facts": ["Dicht besiedeltes Wohnviertel", "Am Hang erbaut", "Symptomatisch für Andorras Platzmangel", "Städtische Expansion", "Oberhalb der Hauptstadt"]
    },
    "city-comella-extra": {
        "desc": "La Comella liegt südlich des Stadtzentrums auf einem Hügel und ist für das Sportzentrum Centre Esportiu Serradells und das Gefängnis von Andorra bekannt. Die Gegend ist umgeben von dichten Wäldern und bietet einen spektakulären Panoramablick auf die Hauptstadt.",
        "facts": ["Südlich der Hauptstadt gelegen", "Zuhause des Centre Esportiu Serradells", "Gefängnis von Andorra befindet sich hier", "Umgeben von Wäldern", "Spektakulärer Panoramablick"]
    },
    "city-barri-antic-extra": {
        "desc": "Das Barri Antic, oder die Altstadt, ist das historische Herz von Andorra la Vella. In den kopfsteingepflasterten Straßen reihen sich alte Steingebäude aneinander, darunter die berühmte Casa de la Vall, in der bis vor kurzem das andorranische Parlament tagte.",
        "facts": ["Historische Altstadt", "Kopfsteingepflasterte Straßen", "Casa de la Vall (altes Parlament)", "Alte Steingebäude", "Herz von Andorra la Vella"]
    },
    "city-avinguda-meritxell-area-extra": {
        "desc": "Die Avinguda Meritxell ist die wichtigste Einkaufsstraße in Andorra la Vella. Die Straße ist gesäumt von luxuriösen Boutiquen, Kaufhäusern und Elektronikgeschäften. Sie zieht jedes Jahr Millionen von Touristen an, die vom steuerfreien Einkaufen profitieren möchten.",
        "facts": ["Wichtigste Einkaufsstraße", "Teil der 'Shopping Mile'", "Luxusboutiquen und Elektronik", "Millionen von Touristen jährlich", "Zentrum des steuerfreien Einkaufs"]
    },
    "city-parc-central-area-extra": {
        "desc": "Der Parc Central ist die größte Grünfläche in der Hauptstadt. Der vom Architekten Daniel d'Andrés entworfene Park ist ein wichtiger Erholungsort für die Einwohner der Stadt, mit Spielplätzen, Wasserflächen und schattigen Bänken entlang des Valira-Flusses.",
        "facts": ["Größter Park der Hauptstadt", "Entworfen von Daniel d'Andrés", "Lage am Valira-Fluss", "Wichtiger Erholungsort", "Zahlreiche Spielplätze"]
    },
    "city-riu-valira-area-extra": {
        "desc": "Das Gebiet entlang des Flusses Valira in der Hauptstadt wurde in den letzten Jahren durch neue Promenaden und Fußgängerzonen aufgewertet. Es verbindet die Natur des Flusses mit der geschäftigen städtischen Umgebung und bietet malerische Spazierwege.",
        "facts": ["Promenaden am Flussufer", "Fluss Valira in der Hauptstadt", "Aufgewertetes städtisches Gebiet", "Malerische Spazierwege", "Verbindet Natur und Stadt"]
    },
    "city-santa-coloma-d-andorra-extra": {
        "desc": "Santa Coloma d'Andorra ist eine historische Siedlung im Süden der Hauptstadt. Weltberühmt ist die romanische Kirche aus dem 9. Jahrhundert. Im neuen Ausstellungsraum Espai Columba können Besucher auch die originalen Wandmalereien bewundern, die hierher zurückgebracht wurden.",
        "facts": ["Historische Siedlung", "Romanische Kirche aus dem 9. Jahrhundert", "Ausstellungsraum Espai Columba", "Rückkehr originaler Wandmalereien", "Im Süden der Hauptstadt"]
    },
    "city-les-escaldes-extra": {
        "desc": "Les Escaldes ist eine der am schnellsten wachsenden städtischen Siedlungen in Andorra und für ihre heißen Thermalquellen bekannt. Der Name bedeutet 'heiße Wasser'. Die historischen Badehäuser wurden teilweise von modernen Spa-Zentren abgelöst.",
        "facts": ["Berühmt für heiße Thermalquellen", "Name bedeutet 'heiße Wasser'", "Schnell wachsende Siedlung", "Historische Badehäuser", "Zentrum des Wellness-Tourismus"]
    },
    "city-engolasters-extra": {
        "desc": "Engolasters ist eine malerische Siedlung hoch oben in den Bergen in der Nähe des Engolasters-Sees. Die Siedlung ist für ihre romanische Kirche Sant Miquel d'Engolasters mit dem außergewöhnlich hohen lombardischen Glockenturm bekannt.",
        "facts": ["Lage hoch oben in den Bergen", "Romanische Kirche Sant Miquel", "Lombardischer Glockenturm", "In der Nähe des Engolasters-Sees", "Malerische Bergsiedlung"]
    },
    "city-els-vilars-extra": {
        "desc": "Els Vilars ist eines der exklusivsten und modernsten Wohnviertel in Escaldes-Engordany. Die an den sonnigen Hängen gebauten Luxusvillen und Apartments bieten einen atemberaubenden Panoramablick auf die Stadt und das umliegende Tal.",
        "facts": ["Exklusives Wohnviertel", "Luxusvillen und Apartments", "Sonnige Hanglage", "Atemberaubender Panoramablick", "Modernste Architektur"]
    },
    "city-engordany-extra": {
        "desc": "Engordany bildet den alten, historischen Teil der Gemeinde Escaldes-Engordany am Nordufer des Flusses Valira d'Orient. Im Gegensatz zum städtischen Escaldes hat sich Engordany eher seinen traditionellen andorranischen Charakter mit kleinen Steinhäusern bewahrt.",
        "facts": ["Historischer Teil der Gemeinde", "Am Nordufer des Flusses gelegen", "Traditioneller andorranischer Charakter", "Alte Steinhäuser", "Kontrast zum modernen Escaldes"]
    },
    "city-fener-extra": {
        "desc": "Der Fener-Bezirk ist ein dicht bebautes Wohn- und Gewerbegebiet in Escaldes-Engordany. Das Viertel profitiert von seiner Nähe zur Einkaufsstraße Vivand und den großen Spa-Zentren, was es zu einer beliebten Wohngegend macht.",
        "facts": ["Dicht bebautes Gebiet", "Wohn- und Gewerbeviertel", "Nähe zur Einkaufsstraße Vivand", "Nähe zu Spa-Zentren", "Zentrale städtische Lage"]
    },
    "city-pla-dels-vilars-extra": {
        "desc": "Pla dels Vilars ist ein flaches Gebiet oberhalb der Stadt Escaldes, in dem archäologische Überreste der ersten andorranischen Siedler gefunden wurden. Heute ist es eine elegante Wohngegend mit leichtem Zugang zu den Bergen.",
        "facts": ["Flaches Gebiet oberhalb der Stadt", "Archäologische Überreste gefunden", "Erste andorranische Siedler", "Elegante Wohngegend", "Leichter Zugang zu den Bergen"]
    },
    "city-madriu-pera-claror-valley-entrance-extra": {
        "desc": "Dies ist der offizielle Zugangspunkt zum Madriu-Perafita-Claror-Tal, das zum UNESCO-Weltkulturerbe gehört. Von Escaldes aus führen steile, kopfsteingepflasterte Pfade in das unberührte Tal, in das keine Straßen führen und das nur zu Fuß erreichbar ist.",
        "facts": ["Zugang zum Madriu-Perafita-Claror-Tal", "UNESCO-Weltkulturerbe", "Nur zu Fuß erreichbar (keine Straßen)", "Steile, alte Pfade", "Start in unberührte Natur"]
    },
    "city-pont-d-engordany-extra": {
        "desc": "Die Umgebung der alten romanischen Brücke (Pont d'Engordany), die die Bezirke Escaldes und Engordany über den Valira d'Orient verbindet. Es ist eines der am meisten fotografierten historischen Monumente der Stadt.",
        "facts": ["Alte romanische Brücke", "Verbindet Escaldes und Engordany", "Führt über den Valira d'Orient", "Beliebtes Fotomotiv", "Historisches Monument"]
    },
    "city-rambla-molleres-extra": {
        "desc": "Rambla de les Molleres ist eine wichtige städtische Promenade in Escaldes, die von modernen Wohnblöcken, Geschäften und Dienstleistungen gesäumt ist. Sie repräsentiert die dynamische städtebauliche Entwicklung des Landes.",
        "facts": ["Städtische Promenade", "Moderne Wohnblöcke", "Zahlreiche Geschäfte und Dienstleistungen", "Zentral in Escaldes", "Dynamische städtebauliche Entwicklung"]
    },
    "city-caldea-area-extra": {
        "desc": "Das Viertel rund um Caldea, das von der charakteristischen futuristischen Glaspyramide des Spa-Zentrums dominiert wird. Es ist das geschäftigste Touristenzentrum der Stadt mit zahlreichen Hotels, Restaurants und exklusiven Geschäften.",
        "facts": ["Futuristische Glaspyramide von Caldea", "Geschäftigstes Touristenzentrum", "Zahlreiche Hotels und Restaurants", "Zentrum des Spa-Tourismus", "Modernes architektonisches Highlight"]
    },
    "city-carrer-del-riu-extra": {
        "desc": "Die Carrer del Riu (Flussstraße) in Escaldes bewahrt die Atmosphäre alter Handwerksviertel, in denen früher Woll- und Textilmühlen entlang des Flusses Valira betrieben wurden.",
        "facts": ["Historische Handwerksatmosphäre", "Ehemalige Woll- und Textilmühlen", "Direkt am Flussufer", "Teil der Industriegeschichte Andorras", "Malerische alte Gebäude"]
    },
    "city-entrada-sud-extra": {
        "desc": "Das südliche Eingangstor zu Escaldes von Andorra la Vella. Die Hauptstraßen kreuzen sich hier, was den Ort zu einem wichtigen Verkehrs- und Gewerbeknotenpunkt voller neu gebauter Geschäftszentren macht.",
        "facts": ["Südlicher Eingang nach Escaldes", "Wichtiger Verkehrsknotenpunkt", "Übergang zu Andorra la Vella", "Gewerbegebiet", "Neugebaute Geschäftszentren"]
    },
    "city-vivand-area-extra": {
        "desc": "Vivand ist die Fortsetzung der Avinguda Meritxell in Escaldes-Engordany, jedoch als Fußgängerzone konzipiert. Es ist das absolute Handelszentrum von Escaldes, mit unzähligen Boutiquen, Cafés und Restaurants unter dem Motto 'The Shopping Mile'.",
        "facts": ["Fußgängerzone für Einkäufe", "Teil der 'The Shopping Mile'", "Handelszentrum von Escaldes", "Zahlreiche Boutiquen und Cafés", "Lebendige städtische Atmosphäre"]
    },
    "ad-animal-habitat-marmot-viewpoint-canillo-extra": {
        "desc": "Ein abgelegenes Gebiet im Canillo-Tal, in dem Alpenmurmeltiere in freier Wildbahn beobachtet werden können. Die Murmeltiere bevorzugen grasbewachsene Hänge über der Baumgrenze, wo sie weiche Erde graben können. Am besten lassen sich die Tiere früh am Morgen oder spät am Nachmittag beobachten.",
        "facts": ["Murmeltiere in freier Wildbahn", "Hänge über der Baumgrenze", "Erdhöhlen-Netzwerke", "Frühe oder späte Beobachtung am besten", "Alpines Ökosystem"]
    },
    "ad-animal-habitat-pyrenean-chamois-ordino-extra": {
        "desc": "Steile, felsige Klippen in Ordino dienen als Lebensraum für die berühmte Pyrenäen-Gämse (Isard). Diese geschickten Kletterer sind an das raue alpine Klima angepasst. Im Winter steigen sie auf der Suche nach Nahrung in tiefere, bewaldete Gebiete hinab.",
        "facts": ["Pyrenäen-Gämse (Isard)", "Steile, felsige Lebensräume", "Geschickte Bergsteiger", "Anpassung ans raue Klima", "Saisonale Wanderung"]
    },
    "ad-animal-habitat-griffon-vulture-nesting-la-massana-extra": {
        "desc": "Auf den hohen, unzugänglichen Klippen von La Massana nisten mächtige Gänsegeier. Diese aasfressenden Vögel mit ihrer beeindruckenden Spannweite kreisen oft in der warmen Thermik und spielen eine entscheidende Rolle als 'Reinigungskräfte' der Natur.",
        "facts": ["Nistplätze auf unzugänglichen Klippen", "Mächtige Gänsegeier", "Beeindruckende Flügelspannweite", "Ökologische 'Reinigungskräfte'", "Segelflug in der Thermik"]
    },
    "ad-animal-habitat-wild-boar-forest-encamp-extra": {
        "desc": "In den tiefen Laub- und Mischwäldern von Encamp sind Wildschweine häufig anzutreffen. Die Tiere ernähren sich von Eicheln, Wurzeln und Pilzen und sind meist dämmerungs- oder nachtaktiv. Spuren ihrer Nahrungssuche im Waldboden sind für Wanderer leicht zu erkennen.",
        "facts": ["Tiefere Laub- und Mischwälder", "Wildschweine suchen nach Eicheln und Pilzen", "Dämmerungs- und nachtaktiv", "Wühlspuren im Waldboden", "Wichtiger Teil der Waldökologie"]
    },
    "ad-animal-habitat-brook-trout-river-sant-julia-extra": {
        "desc": "Die kalten, schnell fließenden Bergbäche rund um Sant Julià de Lòria sind die Heimat der Bachforelle. Diese Fische benötigen extrem sauberes, sauerstoffreiches Wasser und machen Andorra zu einem beliebten Ziel für passionierte Fliegenfischer.",
        "facts": ["Schnell fließende Bergbäche", "Heimat der Bachforelle", "Extrem sauberes Wasser erforderlich", "Beliebt bei Fliegenfischern", "Sauerstoffreiche Gewässer"]
    },
    "ad-animal-habitat-golden-eagle-peaks-escaldes-extra": {
        "desc": "Die unzugänglichen Bergspitzen über Escaldes-Engordany sind das Jagd- und Brutgebiet des majestätischen Steinadlers. Diese streng monogamen Vögel nutzen die steilen Felsen für ihre Horste und jagen kleinere Säugetiere in den Tälern.",
        "facts": ["Unzugängliche Bergspitzen", "Majestätischer Steinadler", "Monogame Lebensweise", "Steile Felsen für Nistplätze", "Sichtungen in den Bergtälern"]
    },
    "ad-animal-habitat-fire-salamander-damp-forests-extra": {
        "desc": "In den schattigen, feuchten Wäldern Andorras, besonders in der Nähe kleiner Quellen, lebt der auffällige Feuersalamander. Seine schwarz-gelbe Warnfärbung schützt ihn vor Feinden, während er nachts auf die Jagd nach Insekten und Würmern geht.",
        "facts": ["Schattige, feuchte Wälder", "Schwarz-gelber Feuersalamander", "Nähe zu kleinen Quellen", "Nachtaktive Lebensweise", "Warnfärbung gegen Feinde"]
    },
    "ad-animal-habitat-red-squirrel-pine-forests-extra": {
        "desc": "Die ausgedehnten Kiefernwälder Andorras sind die Heimat des eurasischen Eichhörnchens. Diese flinken Nagetiere sind ganzjährig aktiv und können oft beobachtet werden, wie sie Zapfen sammeln oder in rasantem Tempo die Baumstämme hinaufklettern.",
        "facts": ["Ausgedehnte Kiefernwälder", "Eurasisches Eichhörnchen", "Ganzjährig aktiv", "Zapfensammler", "Flinke Baumbewohner"]
    },
    "ad-animal-habitat-butterfly-meadows-ordino-extra": {
        "desc": "In den Sommermonaten verwandeln sich die unberührten alpinen Wiesen von Ordino in ein Paradies für unzählige Schmetterlingsarten. Die Artenvielfalt der Schmetterlinge ist ein Indikator für den intakten ökologischen Zustand der andorranischen Bergflora.",
        "facts": ["Alpine Schmetterlingswiesen", "Paradies im Sommer", "Zeichen für intakte Ökologie", "Hohe Artenvielfalt", "Wichtige Bestäuber"]
    },
    "ad-animal-habitat-bat-caves-sant-julia-extra": {
        "desc": "In den Kalksteinhöhlen und alten verlassenen Stollen um Sant Julià de Lòria finden verschiedene Fledermausarten Unterschlupf. Fledermäuse sind essenziell für die Kontrolle von Insektenpopulationen im Sommer.",
        "facts": ["Kalksteinhöhlen und alte Stollen", "Schlafplätze für Fledermäuse", "Wichtig zur Insektenkontrolle", "Nachtaktive Säugetiere", "Teil des andorranischen Ökosystems"]
    },
    "ad-animal-habitat-ptarmigan-high-altitudes-extra": {
        "desc": "Auf den unwirtlichen, schneebedeckten Gipfeln über 2.000 Metern trotzt das Alpenschneehuhn dem strengen andorranischen Winter. Diese Meister der Tarnung wechseln ihr Gefieder von braun im Sommer zu reinweiß im Winter.",
        "facts": ["Höhenlagen über 2.000 Meter", "Alpenschneehuhn (Ptarmigan)", "Tarnkünstler im Schnee", "Gefiederwechsel Sommer/Winter", "Trotzt extremen Temperaturen"]
    },
    "ad-animal-habitat-asp-viper-sunny-slopes-extra": {
        "desc": "Die Aspisviper wärmt sich im Frühjahr auf den sonnigen, felsigen Hängen des Tals auf. Diese scheue und seltene Giftschlange spielt eine wichtige Rolle bei der Regulierung von Nagetierpopulationen in der Bergregion.",
        "facts": ["Sonnige, felsige Hänge", "Aspisviper (Giftschlange)", "Reguliert Nagetierpopulationen", "Scheues Tier", "Aktiv an warmen Frühlingstagen"]
    },
    "ad-animal-habitat-badger-den-la-massana-extra": {
        "desc": "In den weicheren Erdböden der Mischwälder von La Massana graben Dachse ihre ausgedehnten Baue. Die nachtaktiven Allesfresser meiden den Menschen, weshalb man meist nur ihre markanten Pfotenabdrücke oder Grablöcher im Boden entdeckt.",
        "facts": ["Mischwälder von La Massana", "Ausgedehnte Dachsbaue", "Nachtaktive Allesfresser", "Meiden menschlichen Kontakt", "Spuren im Waldboden"]
    },
    "ad-animal-habitat-weasel-farmlands-canillo-extra": {
        "desc": "Rund um die landwirtschaftlichen Höfe und Steinmauern in Canillo finden Wiesel ideale Bedingungen. Sie jagen kleine Nagetiere und nutzen die Felsspalten der alten 'Bordes' (Bauernhäuser) als perfektes Versteck.",
        "facts": ["Bauernhöfe und Steinmauern in Canillo", "Lebensraum für Wiesel", "Jagd auf kleine Nagetiere", "Verstecke in Felsspalten", "Nützlich für die Landwirtschaft"]
    },
    "ad-animal-habitat-capercaillie-forests-ordino-extra": {
        "desc": "In den alten, abgelegenen Kiefern- und Fichtenwäldern von Ordino lebt das seltene Auerhuhn. Die prächtigen Vögel sind extrem scheu und benötigen absolut ungestörte Wälder, besonders während ihrer eindrucksvollen Balzzeit im Frühling.",
        "facts": ["Alte Kiefern- und Fichtenwälder", "Seltenes Auerhuhn", "Extrem scheue Vögel", "Eindrucksvolle Frühlingsbalz", "Indikator für ungestörte Wälder"]
    },
    "ad-animal-habitat-otter-valira-river-extra": {
        "desc": "Dank strenger Umweltschutzmaßnahmen und einer verbesserten Wasserqualität ist der Fischotter in den Unterlauf des Valira-Flusses zurückgekehrt. Die verspielten Tiere gelten als Symbol für den erfolgreichen Naturschutz in Andorra.",
        "facts": ["Unterlauf des Valira-Flusses", "Rückkehr des Fischotters", "Ergebnis verbesserter Wasserqualität", "Zeichen für erfolgreichen Naturschutz", "Seltener Anblick"]
    }
}

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    changed = False
    for poi_id, data in updates.items():
        if poi_id not in content:
            continue
            
        changed = True
        desc_de = data['desc'].replace('"', '\\"')
        facts_de = json.dumps(data['facts'], ensure_ascii=False)

        poi_pattern = r'(\{\s*id:\s*[\'"]' + re.escape(poi_id) + r'[\'"][\s\S]*?)(^\s*\}(?:,|\s*$))'
        match = re.search(poi_pattern, content, re.MULTILINE)
        if not match:
            print(f"Not found: {poi_id} in {file}")
            continue

        poi_block = match.group(1)
        end_part = match.group(2)
        new_block = poi_block

        # Try to replace existing descriptionAdvanced.de
        new_block = re.sub(r'(descriptionAdvanced:\s*\{[\s\S]*?de:\s*)"([^"]*)"', r'\1"' + desc_de + '"', new_block)
        new_block = re.sub(r'(descriptionAdvanced:\s*\{[\s\S]*?de:\s*)\'([^\']*)\'', r'\1"' + desc_de + '"', new_block)
        
        # Try to replace existing factsAdvanced.de
        new_block = re.sub(r'(factsAdvanced:\s*\{[\s\S]*?de:\s*)\[(.*?)\]', r'\1' + facts_de, new_block)

        content = content.replace(poi_block + end_part, new_block + end_part)

    if changed:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {file} (Batch 3).")
