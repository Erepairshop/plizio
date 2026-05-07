import re
import json

ts_file = 'lib/visualLab/data/poiExtraAndorraCities.ts'

with open(ts_file, 'r', encoding='utf-8') as f:
    content = f.read()

updates = {
    "city-el-tarter-extra": {
        "desc": "El Tarter ist ein bedeutendes Dorf in der Gemeinde Canillo, das direkten Zugang zum Skigebiet Grandvalira bietet. Es ist ein Zentrum für Wintersportler, insbesondere wegen des Snowparks El Tarter, in dem regelmäßig internationale Freestyle-Wettbewerbe stattfinden. Im Sommer verwandelt sich die Region in ein Paradies für Wanderer und Mountainbiker.",
        "facts": ["Teil des Skigebiets Grandvalira", "Berühmter Snowpark El Tarter", "Höhe von 1.710 Metern über dem Meeresspiegel", "Ausgangspunkt für Wanderungen", "Traditionelle Architektur"]
    },
    "city-incles-extra": {
        "desc": "Das Incles-Tal ist eines der schönsten Hochtäler Andorras und ein geschütztes Naturschutzgebiet, bekannt für seine unberührte Natur. Es ist der Ausgangspunkt für Wanderungen zu den Tristaina-Seen oder dem Juclà-See, dem größten See Andorras. Im Frühling und Sommer blüht hier eine reiche Vielfalt an alpinen Pflanzen.",
        "facts": ["Geschütztes Bergtal", "Juclà-See (größter See)", "Wanderziel", "Vielfältige alpine Flora", "Gletschergeformte Landschaften"]
    },
    "city-meritxell-extra": {
        "desc": "Das Heiligtum von Meritxell ist das religiöse Zentrum Andorras und ehrt die Schutzpatronin des Landes. Nach einem verheerenden Brand im Jahr 1972 entwarf der berühmte Architekt Ricardo Bofill ein modernes Gebäude, das nun die alten romanischen Strukturen ergänzt. Der Ort ist ein nationales Symbol und ein wichtiger Wallfahrtsort für Einheimische und Besucher.",
        "facts": ["Religiöses Zentrum Andorras", "Moderne Architektur von Bofill", "Brand im Jahr 1972", "Heiligtum von Meritxell", "Wichtiger Wallfahrtsort"]
    },
    "city-prats-canillo-extra": {
        "desc": "Prats ist eines der sonnigen, hoch gelegenen Dörfer der Gemeinde Canillo. Die Siedlung bietet einen atemberaubenden Blick auf das Tal und die umliegenden Berge. Eine Besonderheit ist die Kirche Sant Miquel de Prats, ein romanisches Bauwerk, das im 17. und 18. Jahrhundert stark umgebaut wurde. Das Dorf ist ein idealer Ausgangspunkt für Ruhesuchende.",
        "facts": ["Panoramablick auf das Tal", "Kirche Sant Miquel de Prats", "Einfacher Zugang zu Wanderwegen", "Traditionelle Steinarchitektur", "Ruhige und friedliche Atmosphäre"]
    },
    "city-ransol-extra": {
        "desc": "Ransol ist ein friedliches Dorf nahe den Sektoren Soldeu und El Tarter von Grandvalira. Es bildet das Tor zum Ransol-Tal, einem beliebten Wandergebiet mit reicher alpiner Flora und Fauna. Im Sommer kann man grasende Pferde und Kühe beobachten, was der Landschaft eine idyllische, ländliche Atmosphäre verleiht.",
        "facts": ["Tor zum Ransol-Tal", "Beliebte Wanderwege", "Im Sommer weiden Pferde", "Nah am Skigebiet Grandvalira", "Ideal zur Naturbeobachtung"]
    },
    "city-el-forn-canillo-extra": {
        "desc": "El Forn ist ein hoch gelegenes Gebiet über dem Dorf Canillo, benannt nach einem alten Kalkofen. Heute ist es vor allem als Bergstation des Sektors Canillo in Grandvalira bekannt, die durch eine Seilbahn erreicht wird. Im Sommer beherbergt das Gebiet den Familienpark Mon(t) Magic mit Seilrutschen und anderen Attraktionen.",
        "facts": ["Familienpark Mon(t) Magic", "Bergstation der Canillo-Seilbahn", "Atemberaubende Aussicht", "Ausgangspunkt für Wanderwege", "Winteraktivitäten im Schnee"]
    },
    "city-laldosa-canillo-extra": {
        "desc": "L'Aldosa de Canillo ist ein kleines, sonniges Dorf, das den Charakter der traditionellen andorranischen Architektur bewahrt hat. Es ist ein idealer Ort zum Entspannen und Erholen, weit weg vom Trubel der belebten Touristenzentren. Dennoch liegt es in der Nähe der Pisten von Grandvalira und der Dienstleistungen von Canillo.",
        "facts": ["Traditionelle Steinhäuser", "Ruhige, ländliche Umgebung", "Sonnige Lage mit guter Aussicht", "Nähe zum Zentrum von Canillo", "Idealer Ausgangspunkt für Erkundungen"]
    },
    "city-el-vilar-canillo-extra": {
        "desc": "El Vilar ist ein modernes Wohngebiet auf der Sonnenseite von Canillo, das einen hervorragenden Blick auf das Tal und die Berge bietet. Die Immobilien hier sind größtenteils neu gebaute Apartments und Häuser. Es ist bei Einheimischen und Ausländern beliebt, die Ruhe und Panoramablicke suchen.",
        "facts": ["Moderne Wohngebäude", "Hervorragender Talblick", "Sonnige Südausrichtung", "Ruhige Nachbarschaft", "Naturnah gelegen"]
    },
    "city-armiana-extra": {
        "desc": "Armiana ist eine winzige Siedlung mit nur wenigen Häusern in der Nähe von El Tarter, die absolute Nähe zur Natur und völlige Ruhe bietet. Es ist die perfekte Wahl für alle, die sich vom Lärm der Welt zurückziehen und inmitten von Bergen und Wäldern entspannen möchten.",
        "facts": ["Extrem kleine Siedlung", "Völlige Abgeschiedenheit", "Umgeben von Bergwäldern", "Traditionelle Pyrenäen-Landschaft", "Perfekter Ort für Ruhe"]
    },
    "city-bordes-denvalira-extra": {
        "desc": "Bordes d'Envalira ist eine hochgelegene Siedlung mit modernen Apartmentkomplexen nahe dem Pass Port d'Envalira. Sie bietet direkten Zugang zu den Pisten von Grandvalira im Sektor Grau Roig und ist daher eine ideale Wahl für Skiliebhaber. Der Name 'bordes' bezieht sich auf die alten Hirtenhütten, die früher hier standen.",
        "facts": ["Auf über 2.000 Metern Höhe gelegen", "Direkter Zugang zu Skipisten", "Historischer Ort alter Hirtenhütten", "Moderne touristische Infrastruktur", "Spektakuläre Schneelandschaften"]
    },
    "city-planoles-extra": {
        "desc": "Planoles ist eine winzige, friedliche Siedlung in der Nähe des Heiligtums Meritxell. Die traditionellen Steinhäuser und die ruhige Umgebung bieten einen perfekten Rückzugsort. Das Dorf liegt in der Nähe des Wallfahrtsortes sowie der Dienstleistungen im Zentrum von Canillo.",
        "facts": ["Kleine und friedliche Siedlung", "Traditionelle Steinarchitektur", "Nähe zum Heiligtum Meritxell", "Entspannende Umgebung", "Kulturelles Erbe"]
    },
    "city-molleres-extra": {
        "desc": "Molleres ist ein winziges, sonniges Dorf in der Gemeinde Canillo, das die Merkmale der traditionellen Pyrenäenarchitektur bewahrt hat. Das Dorf liegt auf der Sonnenseite des Tals und ist der ideale Ort für Ruhesuchende. Die Umgebung ist stark landwirtschaftlich geprägt.",
        "facts": ["Sonnige Lage im Tal", "Gut erhaltene alte Häuser", "Landwirtschaftliche Tradition", "Abseits des Massentourismus", "Idyllische Atmosphäre"]
    },
    "city-cascada-moles-extra": {
        "desc": "Die Cascada de les Moles ist ein spektakulärer Wasserfall in der Gemeinde Canillo, der über einen beliebten und einfachen Wanderweg erreichbar ist. Das Gebiet um den Wasserfall eignet sich ideal für einen angenehmen Waldspaziergang und um die Natur zu genießen, besonders im Frühling nach der Schneeschmelze.",
        "facts": ["Spektakulärer Wasserfall", "Leichter Wanderweg", "Besonders beeindruckend im Frühling", "Natur-Beobachtungsplatz", "Fotogenes Ausflugsziel"]
    },
    "city-grau-roig-extra": {
        "desc": "Grau Roig ist einer der wildesten und natürlichsten Sektoren des Skigebiets Grandvalira. Es gibt kein klassisches Dorf, nur ein paar Hotels und Restaurants, sodass der Fokus ganz auf dem Skifahren und den Bergerlebnissen liegt. Von hier aus starten die schönsten Freeride-Routen sowie spezielle Aktivitäten wie Hundeschlittenfahrten.",
        "facts": ["Skigebiet ohne städtisches Zentrum", "Ausgezeichnete Freeride-Möglichkeiten", "Hundeschlittenfahrten verfügbar", "Hochgelegene Luxushotels", "Spektakuläre Naturkulisse"]
    },
    "city-les-bons-extra": {
        "desc": "Les Bons ist ein historisches Juwel an der Grenze von Encamp. Das Dorf liegt auf einem Felsvorsprung und bewahrt einen kompletten mittelalterlichen Komplex: einen Wachturm (Torre dels Moros), die Kirche Sant Romà de les Bons und weitere antike Bauwerke. Das Innere der Kirche zeigt Kopien romanischer Fresken aus dem 12. Jahrhundert.",
        "facts": ["Mittelalterlicher Gebäudekomplex", "Wachturm 'Torre dels Moros'", "Romanische Kirche Sant Romà", "Alte Verteidigungsanlagen", "Wichtige historische Stätte"]
    },
    "city-vila-encamp-extra": {
        "desc": "Vila ist der älteste historische Kern von Encamp, der heute vollständig in die moderne Stadt integriert ist. Ein Spaziergang durch die engen Gassen und zwischen den alten Steinhäusern lässt die Atmosphäre der Vergangenheit noch spüren, im starken Kontrast zu den nahegelegenen modernen Gebäuden.",
        "facts": ["Historischer Stadtkern", "Verflochten mit der modernen Stadt", "Alte Steingebäude", "Lokale Traditionen", "Zentrale Lage in Encamp"]
    },
    "city-cortals-dencamp-extra": {
        "desc": "Cortals d'Encamp ist ein malerisches Hochtal oberhalb von Encamp. Früher diente es als Sommerweide, heute ist es ein beliebtes Zentrum für Wanderungen und Abenteuersport. Von hier starten zahlreiche Klettersteige, Mountainbike-Strecken und Wanderwege, unter anderem zu den malerischen Pessons-Seen.",
        "facts": ["Malerisches Hochtal", "Ehemalige Sommerweide", "Klettersteige (Via Ferrata)", "Mountainbike-Strecken", "Wanderwege zu Seen"]
    },
    "city-la-tremada-extra": {
        "desc": "La Tremada ist ein ruhiges Wohngebiet im südlichen Teil von Encamp am Ufer des Flusses Valira d'Orient. Es besteht hauptsächlich aus Wohngebäuden und ist der ideale Ort für diejenigen, die in der Nähe von städtischen Dienstleistungen, aber in einer friedlichen Umgebung leben möchten.",
        "facts": ["Ruhiges Wohngebiet", "Lage am Fluss Valira d'Orient", "Nahe dem Zentrum von Encamp", "Friedliche Atmosphäre", "Moderner Wohnraum"]
    },
    "city-mosquera-extra": {
        "desc": "La Mosquera ist ein zentrales und belebtes Viertel von Encamp, das sich entlang der Hauptstraße nach Frankreich entwickelt hat. Hier gibt es viele Geschäfte, Restaurants, Hotels und Dienstleistungen, und die Talstation der Seilbahn Funicamp ist von hier aus leicht zu erreichen.",
        "facts": ["Zentrales Geschäftsviertel", "Liegt an der Hauptstraße", "Viele Geschäfte und Restaurants", "Gute Verkehrsanbindung", "Schneller Zugang zum Funicamp"]
    },
    "city-port-denvalira-extra": {
        "desc": "Der Port d'Envalira ist mit 2.408 Metern der höchste asphaltierte Gebirgspass der Pyrenäen und verbindet Andorra mit Frankreich. Er bleibt im Winter (je nach Wetter) geöffnet, aber der Envalira-Tunnel garantiert einen sicheren Transit. Der Pass bietet atemberaubende Panoramen und ist ein legendärer Anstieg bei der Tour de France.",
        "facts": ["Höchster Pass der Pyrenäen (2.408 m)", "Verbindet Andorra mit Frankreich", "Legendäre Tour-de-France-Etappe", "Envalira-Tunnel für den Winter", "Ganzjährig wichtigste Verkehrsader"]
    },
    "city-les-pardines-extra": {
        "desc": "Les Pardines ist ein leicht begehbarer, familienfreundlicher Lehrpfad in der Nähe des Engolasters-Sees. Entlang des Weges geben Informationstafeln Auskunft über die lokale Flora und Fauna. Die Route ist flach und kann problemlos mit kleinen Kindern und Kinderwagen zurückgelegt werden.",
        "facts": ["Familienfreundlicher Lehrpfad", "Nähe zum Engolasters-See", "Informationstafeln zur Natur", "Flaches und sicheres Gelände", "Erholung für Familien"]
    },
    "city-les-costes-extra": {
        "desc": "Les Costes ist ein modernes Wohngebiet in sonniger Lage oberhalb von Encamp. Von den hier gebauten Häusern und Apartments hat man einen herrlichen Blick auf die Stadt und das Tal. Dank der Südausrichtung ist die Gegend den ganzen Tag über von Sonnenlicht durchflutet.",
        "facts": ["Moderne Wohnviertel", "Sonnige Hanglage", "Atemberaubende Talblicke", "Luxuriöse Apartments", "Südausrichtung"]
    },
    "city-vall-dorient-extra": {
        "desc": "Das Vall d'Orient (Osttal) ist das Tal des Flusses Valira d'Orient, das sich von Canillo bis zur französischen Grenze erstreckt. Es ist eine der wichtigsten Verkehrsadern Andorras und verbindet Städte wie Soldeu und Pas de la Casa. Das Tal beherbergt auch mehrere Sektoren des Skigebiets Grandvalira.",
        "facts": ["Tal des Flusses Valira d'Orient", "Wichtige Verkehrsader", "Verbindet Canillo mit Frankreich", "Umfasst Grandvalira-Sektoren", "Malerische Landschaften"]
    },
    "city-riu-dels-llacs-extra": {
        "desc": "Der Riu dels Llacs (Fluss der Seen) ist ein Bach, der aus den Gletscherseen von Pessons entspringt und für sein kristallklares Wasser und seine Forellen bekannt ist. Eine Wanderung entlang des Flusses ist eines der schönsten Naturerlebnisse in der Gegend von Grau Roig, besonders im Sommer.",
        "facts": ["Entspringt den Pessons-Seen", "Kristallklares Wasser", "Bekannt für Forellenangeln", "Schöne Sommerwanderwege", "Teil der alpinen Ökologie"]
    },
    "city-les-ortes-extra": {
        "desc": "Les Ortes ist eines der wenigen verbliebenen landwirtschaftlichen Gebiete in der Nähe von Encamp, in denen noch Spuren des traditionellen Gartenbaus zu finden sind. Die Gegend erinnert an eine Zeit, in der die Wirtschaft des Tals noch auf der Subsistenzlandwirtschaft beruhte.",
        "facts": ["Traditionelles Agrargebiet", "Spuren des alten Gartenbaus", "Erinnerung an die Subsistenzwirtschaft", "Nahe dem städtischen Encamp", "Historische Bedeutung"]
    },
    "city-pal-extra": {
        "desc": "Pal ist eines der schönsten und intaktesten Beispiele andorranischer Landarchitektur. Das Dorf ist ein geschütztes historisches Ensemble, in dem Steinhäuser und Schieferdächer in perfekter Harmonie mit der umliegenden Landschaft stehen. Das Kronjuwel ist die Kirche Sant Climent de Pal mit ihrem einzigartigen Doppelbogen-Glockenturm.",
        "facts": ["Geschütztes historisches Ensemble", "Romanische Kirche Sant Climent de Pal", "Klassische Schieferdächer", "Tor zum Skigebiet Pal-Arinsal", "Eine der schönsten Ortschaften"]
    },
    "city-erets-extra": {
        "desc": "Erts ist ein winziges, aber strategisch wichtiges Dorf in der Gemeinde La Massana, da sich hier die Straße in Richtung Pal und Arinsal gabelt. Das Dorf hat seinen traditionellen, ländlichen Charme bewahrt und ist ein idealer Ausgangspunkt, um die nahegelegenen Skigebiete zu erkunden.",
        "facts": ["Strategische Straßenkreuzung", "Ländlicher Charme", "Wegweiser nach Pal und Arinsal", "Kleine, traditionelle Gemeinde", "Beliebt bei Wintersportlern"]
    },
    "city-sispony-extra": {
        "desc": "Sispony ist ein sonniges, nach Süden ausgerichtetes Dorf oberhalb von La Massana. Es beherbergt das Museum Casa Rull, das in einem ehemaligen Haus einer wohlhabenden Landbesitzerfamilie den andorranischen Lebensstil des 19. Jahrhunderts zeigt. Die engen, verwinkelten Gassen versetzen den Besucher in die Vergangenheit zurück.",
        "facts": ["Sonnige Hanglage", "Museum Casa Rull", "Geschichte des 19. Jahrhunderts", "Traditionelle Steingebäude", "Wunderschöner Panoramablick"]
    },
    "city-anyos-extra": {
        "desc": "Anyós ist ein Bergdorf, das das Tal zwischen La Massana und Escaldes überblickt. Im Zentrum des Dorfes steht die mittelalterliche Kirche Sant Cristòfol. Heute beherbergt Anyós auch ein modernes Sport- und Wellnesszentrum, das Menschen anzieht, die Erholung und Aktivität suchen.",
        "facts": ["Kirche Sant Cristòfol", "Panoramablick auf zwei Täler", "Modernes Sport- und Wellnesszentrum", "Mittelalterlicher Ursprung", "Exklusive Wohngegend"]
    },
    "city-laldosa-massana-extra": {
        "desc": "L'Aldosa de La Massana ist eine ruhige, familienfreundliche Wohngegend in der Nähe des Zentrums von La Massana. Am bekanntesten ist der Bezirk für sein Reitzentrum, das Reitunterricht und Reittouren in die Berge anbietet. Die Gegend ist ideal für Familien, die eine erholsame Pause suchen.",
        "facts": ["Bekanntes Reitzentrum", "Familienfreundliche Umgebung", "Ruhiges Wohnviertel", "Nähe zum Zentrum von La Massana", "Naturnahe Freizeitaktivitäten"]
    },
    "city-escas-extra": {
        "desc": "Escàs ist eines jener kleinen, in den Berghang gebauten Dörfer, die die traditionelle andorranische Architektur bewahrt haben. Aufgrund seiner Lage bietet das Dorf einen herrlichen Blick auf das Tal und direkten Zugang zu den Wanderwegen der umliegenden Berge.",
        "facts": ["Traditionelle Architektur", "Lage am steilen Berghang", "Hervorragender Talblick", "Zugang zu Wanderwegen", "Ruhe und Abgeschiedenheit"]
    },
    "city-puiol-del-piu-extra": {
        "desc": "Puiol del Piu ist eine winzige Siedlung mit nur wenigen Häusern in der Nähe von La Massana, entlang der Straße in Richtung Pal. Der Ort ist ein perfektes Beispiel für ländliche Ruhe, während die städtischen Annehmlichkeiten nur wenige Minuten entfernt sind.",
        "facts": ["Winzige Siedlung", "Ländliche Ruhe", "An der Straße nach Pal", "Nah an städtischen Dienstleistungen", "Viel unberührte Natur"]
    },
    "city-xixerella-extra": {
        "desc": "Xixerella ist ein kleines Dorf entlang der Straße nach Arinsal am Ufer des Flusses Valira del Nord. Am bekanntesten ist es für seinen Campingplatz und den Pitch & Putt-Golfplatz, die bei Familien sehr beliebt sind. Das Dorf bietet sportliche und aktive Erholung in einer wunderschönen natürlichen Umgebung.",
        "facts": ["Campingplatz Xixerella", "Pitch & Putt-Golfplatz", "Lage am Fluss Valira del Nord", "Familienfreundliche Aktivitäten", "Aktive Erholung in der Natur"]
    },
    "city-mas-de-ribafeta-extra": {
        "desc": "Mas de Ribafeta ist ein kleiner, abgelegener Weiler an der Straße in Richtung Arinsal, der an die Atmosphäre des traditionellen andorranischen Landlebens erinnert. Die Siedlung, die aus wenigen Häusern besteht, ist eine Insel der Ruhe in der Nähe der belebten Skigebiete.",
        "facts": ["Abgelegener Weiler", "Atmosphäre des alten Landlebens", "Nähe zum Skigebiet Arinsal", "Kleine Insel der Ruhe", "Traditionelle Strukturen"]
    },
    "city-el-cortalet-extra": {
        "desc": "El Cortalet ist ein kleiner Bezirk am Ufer des Flusses Valira del Nord zwischen Erts und Arinsal. Die Lage ist ideal für einen schnellen Zugang zum Skigebiet Pal-Arinsal, während die Lage am Fluss eine entspannte und friedliche Atmosphäre bietet.",
        "facts": ["Lage am Flussufer", "Zwischen Erts und Arinsal", "Schneller Zugang zu Skipisten", "Friedliche Atmosphäre", "Schöne Naturkulisse"]
    },
    "city-jan-dels-plans-extra": {
        "desc": "Jan dels Plans ist ein modernes, sonniges Wohngebiet in der Nähe des Zentrums von La Massana. Die Gebäude hier folgen den neuesten architektonischen Trends und bieten den Bewohnern jeglichen städtischen Komfort, während sie gleichzeitig die Nähe zu den Bergen genießen können.",
        "facts": ["Modernes Wohngebiet", "Sonnige Lage", "Neueste Architektur", "Städtischer Komfort", "Nähe zur Natur"]
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

print("Updated 36 POIs successfully.")
