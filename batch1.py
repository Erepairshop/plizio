import re, json

DATA = {
  "finland": {
    "desc": "Finnland ist eine nordeuropäische Nation, die an Skandinavien, Russland und die Ostsee grenzt. Bekannt als das 'Land der tausend Seen', ist es berühmt für seine weiten Wälder, unberührte Natur und hohe Lebensqualität. Finnland ist führend in den Bereichen Bildung, Technologie und Nachhaltigkeit. Das Land hat eine einzigartige Kultur, die nordische Traditionen mit seiner eigenen ausgeprägten Sprache und Bräuchen verbindet, darunter die weltberühmte Saunakultur und eine tiefe Verbindung zur arktischen Wildnis.",
    "facts": [
      "Finnland wurde vom UN World Happiness Report bis 2024 sieben Jahre in Folge zum glücklichsten Land der Welt gekürt.",
      "Im Land gibt es rund 3,3 Millionen Saunen, was die Anzahl der Personenkraftwagen in Finnland übersteigt.",
      "Die finnische Landschaft wird von etwa 187.888 Seen und 179.000 Inseln geprägt.",
      "Das finnische Bildungssystem zählt weltweit zu den besten und legt großen Wert auf Chancengleichheit.",
      "Im Jahr 1906 gewährte Finnland als erstes europäisches Land Frauen das volle politische Wahlrecht."
    ]
  },
  "city-helsinki": {
    "desc": "Helsinki, die lebendige Hauptstadt Finnlands, verbindet nahtlos moderne Architektur mit klassischem nordischen Design. Gelegen am Finnischen Meerbusen, besticht die Stadt durch ihre maritime Atmosphäre und zahlreiche Grünflächen. Besucher können historische Wahrzeichen wie den weißen Dom von Helsinki oder die markante Seefestung Suomenlinna erkunden. Die Stadt gilt als Zentrum für Technologie, Kultur und Bildung im Ostseeraum. Zudem bietet Helsinki eine unvergleichliche Lebensqualität, in der städtisches Flair und unberührte Natur stets nur einen kurzen Spaziergang voneinander entfernt sind.",
    "facts": [
      "Helsinki wurde 1550 vom schwedischen König Gustav Wasa gegründet, um mit Tallinn im Handel zu konkurrieren.",
      "Etwa ein Drittel der Stadtfläche Helsinkis besteht aus Parks und Erholungsgebieten.",
      "Die Uspenski-Kathedrale in Helsinki ist die größte orthodoxe Kirche in Westeuropa.",
      "Helsinki war 1952 Gastgeber der Olympischen Sommerspiele, was das internationale Profil der Stadt nachhaltig stärkte.",
      "Das Design District Helsinki umfasst über 200 Boutiquen, Ateliers und Museen auf 25 Straßen."
    ]
  },
  "city-tampere": {
    "desc": "Tampere wird oft als das 'Manchester des Nordens' bezeichnet und ist die zweitgrößte Stadtregion Finnlands. Sie liegt einzigartig auf einer schmalen Landenge zwischen den großen Seen Näsijärvi und Pyhäjärvi. Die historischen roten Backsteingebäude der Textil- und Papierindustrie entlang der Tammerkoski-Stromschnellen wurden heute in trendige Kulturzentren und Museen umgewandelt. Tampere ist eine dynamische Studentenstadt und ein Innovationszentrum. Die Stadt trägt zudem stolz den Titel 'Saunahauptstadt der Welt', da sie die meisten öffentlichen Saunen Finnlands beheimatet.",
    "facts": [
      "Tampere wurde 1779 von König Gustav III. von Schweden am Ufer der Tammerkoski-Stromschnellen gegründet.",
      "Die Stadt beheimatet das weltweit einzige Mumin-Museum, das den berühmten Figuren von Tove Jansson gewidmet ist.",
      "Der Finlayson-Fabrikkomplex in Tampere war 1882 das erste Gebäude in den nordischen Ländern, das elektrisch beleuchtet wurde.",
      "Der Pyynikki-Aussichtsturm bietet einen atemberaubenden Blick über die beiden großen Seen der Stadt.",
      "Mit über 50 öffentlichen Saunen ist Tampere das absolute Zentrum der finnischen Saunakultur."
    ]
  },
  "city-turku": {
    "desc": "Turku ist die älteste Stadt Finnlands und diente als frühere Hauptstadt des Landes, bevor diese Funktion im 19. Jahrhundert an Helsinki überging. Die Stadt liegt an der Südwestküste, wo der Fluss Aura in die Ostsee mündet. Die majestätische Burg von Turku und der mächtige Dom prägen seit über 700 Jahren das historische Stadtbild. Entlang des Flussufers pulsiert das urbane Leben mit Museumsschiffen, Restaurants und lebhaften Cafés. Als Tor zum riesigen Schärenmeer ist Turku nicht nur ein akademisches Zentrum, sondern auch ein idealer Ausgangspunkt für maritime Abenteuer.",
    "facts": [
      "Turku wurde im 13. Jahrhundert gegründet und ist damit die mit Abstand älteste Stadt Finnlands.",
      "Die Akademie zu Turku war die erste Universität Finnlands, gegründet im Jahr 1640.",
      "Die Burg von Turku aus dem Jahr 1280 ist das größte noch erhaltene mittelalterliche Gebäude Finnlands.",
      "Nach dem verheerenden Großen Brand von 1827 wurde die Stadt nach einem modernen, weitläufigen Rasterplan neu aufgebaut.",
      "Das Schärenmeer vor Turku umfasst über 40.000 Inseln und Klippen."
    ]
  },
  "reg-lapland-fi": {
    "desc": "Finnisch-Lappland ist eine magische arktische Wildnis, die das nördliche Drittel des Landes einnimmt. Die Landschaft ist geprägt von weiten Fjells, zugefrorenen Seen und uralten Wäldern. Im Sommer herrscht hier die Mitternachtssonne, während die langen Winternächte von flackernden Nordlichtern erleuchtet werden. Lappland ist die Heimat der indigenen Sámi, deren Kultur und Rentierzucht fest mit der Region verwurzelt sind. Ob Husky-Safaris, Skifahren in Levi oder ein Besuch in der offiziellen Heimatstadt des Weihnachtsmannes in Rovaniemi – Lappland bietet unvergleichliche Naturerlebnisse.",
    "facts": [
      "Lappland macht fast 30 Prozent der Gesamtfläche Finnlands aus, hat aber nur etwa 3 Prozent der Bevölkerung.",
      "In Lappland leben mehr Rentiere (ca. 200.000) als Menschen.",
      "Rovaniemi gilt weltweit als die offizielle Heimatstadt des Weihnachtsmannes.",
      "An den nördlichsten Punkten Lapplands geht die Sonne im Sommer für über 70 Tage nicht unter.",
      "Die indigene Kultur der Sámi in Lappland besitzt eine eigene Sprache und ein eigenes Parlament."
    ]
  },
  "nat-lakeland": {
    "desc": "Die finnische Seenplatte ist ein faszinierendes Labyrinth aus Blau und Grün und bildet das größte Seengebiet Europas. Zehntausende von Seen, darunter der riesige Saimaa-See, prägen diese weitläufige Region in Zentral- und Ostfinnland. Hier ist die traditionelle finnische Sommerhauskultur tief verwurzelt, wo holzbeheizte Saunen und ruhige Bootsfahrten den Alltag bestimmen. Die dichten Wälder bieten einen sicheren Lebensraum für seltene Tierarten, darunter die vom Aussterben bedrohte Saimaa-Ringelrobbe. Die Seenplatte ist der perfekte Ort für Kanutouren, Dampfschifffahrten und absolute Entschleunigung in der Natur.",
    "facts": [
      "Die finnische Seenplatte umfasst mehr als 55.000 Seen, die jeweils breiter als 200 Meter sind.",
      "Der Saimaa-See ist mit rund 4.400 Quadratkilometern der viertgrößte Süßwassersee Europas.",
      "In der Saimaa-Region leben nur noch etwa 400 Exemplare der extrem seltenen Saimaa-Ringelrobbe.",
      "Die Seen sind durch ein komplexes Netz aus natürlichen Kanälen und Flüssen miteinander verbunden.",
      "Die Region ist das Herzstück der finnischen 'Mökki'-Kultur, dem traditionellen Sommerhaus am Wasser."
    ]
  },
  "nat-archipelago": {
    "desc": "Der Schärengarten vor der südwestlichen Küste Finnlands ist ein riesiges maritimes Wunder, das aus über 40.000 Inseln und Klippen besteht. Er erstreckt sich von Turku bis zu den autonomen Åland-Inseln und ist einer der größten Archipele der Welt. Die Region zeichnet sich durch glatte Granitfelsen, rot gestrichene Holzhäuser und eine tiefe maritime Tradition aus. Während die inneren Inseln dichte Wälder und geschützte Buchten bieten, trotzen die äußeren Schären dem rauen Wind der Ostsee. Ein gut ausgebautes Netz aus kostenlosen Fähren und Brücken macht das Inselhüpfen zu einem unvergesslichen Erlebnis.",
    "facts": [
      "Der finnische Schärengarten gilt als der größte der Welt, gemessen an der Anzahl der Inseln.",
      "Viele der äußeren Inseln sind nur im Sommer mit kleinen Booten oder Kajaks erreichbar.",
      "Die Schären-Ringstraße ist eine 250 Kilometer lange Route, die Autofahrern und Radfahrern das Inselhüpfen ermöglicht.",
      "Auf den Inseln gibt es zahlreiche historische Leuchttürme, von denen einige heute als Hotels dienen.",
      "Die Schärenregion beherbergt eine einzigartige Vogelwelt und bietet Rastplätze für Millionen von Zugvögeln."
    ]
  },
  "cult-savonlinna": {
    "desc": "Savonlinna ist das malerische Herz der finnischen Seenlandschaft, das durch seine romantische Lage auf mehreren Inseln besticht. Die Stadt ist vor allem berühmt für die mittelalterliche Burg Olavinlinna, die dramatisch auf einer Felseninsel in der Strömung thront. Jeden Sommer verwandelt sich diese Festung in die atemberaubende Kulisse für die internationalen Opernfestspiele von Savonlinna, die Musikliebhaber aus aller Welt anziehen. Neben der Hochkultur bietet die Umgebung Zugang zu den unberührten Gewässern des Saimaa-Sees und den ausgedehnten Nationalparks Linnansaari und Kolovesi. Savonlinna ist ein perfektes Zusammenspiel aus Geschichte, Kunst und nordischer Natur.",
    "facts": [
      "Die Burg Olavinlinna wurde 1475 gegründet, um die Ostgrenze des schwedischen Reiches zu sichern.",
      "Die Savonlinna-Opernfestspiele wurden 1912 ins Leben gerufen und gehören zu den renommiertesten Europas.",
      "Die Stadt liegt inmitten des Saimaa-Seengebiets, einem der größten Labyrinthe aus Süßwasser weltweit.",
      "In den Gewässern rund um Savonlinna lebt die seltene Saimaa-Ringelrobbe.",
      "Der traditionelle Marktplatz von Savonlinna ist bekannt für 'Lörtsy', eine lokale herzhafte Teigtasche."
    ]
  },
  "city-espoo": {
    "desc": "Espoo, Finnlands zweitgrößte Stadt, bietet eine bemerkenswerte Mischung aus städtischer Innovation und direkter Nähe zur Natur. Die Stadt umschließt weite Teile des Nuuksio-Nationalparks, in dem sich dichte Wälder und stille Seen erstrecken. Gleichzeitig ist Espoo das finnische Zentrum für Technologie und Start-ups, angetrieben vom Campus der Aalto-Universität und der Firmenzentrale von Nokia. Die lange Küstenlinie lockt mit zahlreichen Stränden und Inseln im Schärengarten. In Espoo verschmelzen zukunftsorientierte Architektur und unberührte Landschaften zu einem dynamischen Lebensraum.",
    "facts": [
      "Espoo beherbergt den Otaniemi-Campus, das technologische und wissenschaftliche Herz Finnlands.",
      "Die Stadt besitzt eine Küstenlinie von 58 Kilometern Länge mit 165 eigenen Inseln.",
      "Der Nuuksio-Nationalpark bietet Besuchern auf über 50 Quadratkilometern reine nordische Wildnis.",
      "Espoo wurde zur nachhaltigsten Stadt Europas gekürt, basierend auf ökologischen, sozialen und wirtschaftlichen Kriterien.",
      "Das moderne Ausstellungszentrum EMMA (Espoo Museum of Modern Art) ist das größte Kunstmuseum Finnlands."
    ]
  },
  "city-oulu": {
    "desc": "Oulu liegt malerisch an der Mündung des Oulujoki in den Bottnischen Meerbusen und gilt als die wichtigste Technologiestadt Nordfinnlands. Einst ein bedeutendes Handelszentrum für Holzteer, hat sich Oulu zu einer modernen Universitätsstadt mit einer pulsierenden IT-Branche entwickelt. Die Stadt verbindet eine junge, studentische Atmosphäre mit exzellenter städtischer Infrastruktur, darunter eines der besten Radwegenetze Europas, das auch im tiefsten Winter genutzt wird. Der historische Marktplatz, flankiert von alten Salzspeichern, und das nahegelegene Nallikari-Erholungsgebiet machen Oulu zu einem vielseitigen urbanen Zentrum nahe der Polarkreisgrenze.",
    "facts": [
      "Oulu wurde 1605 von König Karl IX. von Schweden gegründet und ist die älteste Stadt Nordfinnlands.",
      "Die Stadt ist bekannt als Erfinderin der jährlichen Luftgitarren-Weltmeisterschaft, die hier seit 1996 stattfindet.",
      "Oulus Fahrradnetz ist so gut ausgebaut, dass selbst im schneereichsten Winter tausende Einwohner mit dem Rad fahren.",
      "Im 19. Jahrhundert war Oulu der größte Exporteur von Holzteer in der gesamten Welt.",
      "Der Technologiepark Oulu ist einer der ältesten und größten seiner Art in den nordischen Ländern."
    ]
  },
  "city-vantaa": {
    "desc": "Vantaa ist eine moderne und schnell wachsende Großstadt in der Hauptstadtregion, die vor allem als Tor nach Finnland bekannt ist. Hier befindet sich der internationale Flughafen Helsinki-Vantaa sowie das riesige Einkaufs- und Unterhaltungszentrum Jumbo. Neben dieser hochmodernen Infrastruktur bewahrt Vantaa auch charmante historische Elemente, wie das alte Dorf Helsinginge und die steinerne St. Laurentius-Kirche aus dem Mittelalter. Die Stadt zeichnet sich durch das Wissenschaftszentrum Heureka aus, das interaktive Erlebnisse für die ganze Familie bietet. Mit seinen zahlreichen Parks am Vantaa-Fluss bietet die Stadt trotz ihrer urbanen Prägung viel Erholungsraum.",
    "facts": [
      "Der Flughafen Helsinki-Vantaa ist der wichtigste internationale Luftverkehrsknotenpunkt Finnlands.",
      "Die St. Laurentius-Kirche in Vantaa wurde um 1460 erbaut und ist eines der ältesten Gebäude der Region.",
      "Das Heureka Science Centre ist eines der beliebtesten Museen Finnlands für wissenschaftliche Phänomene.",
      "Die Ringbahn von Vantaa verbindet den Flughafen in wenigen Minuten direkt mit dem Zentrum von Helsinki.",
      "Vantaa ist eine der vielkulturellsten Städte Finnlands mit über 100 gesprochenen Sprachen."
    ]
  },
  "city-lahti": {
    "desc": "Lahti ist eine sportliche und umweltbewusste Stadt, die am Ufer des großen Vesijärvi-Sees liegt. Sie ist weltweit für ihre exzellenten Wintersportanlagen bekannt, insbesondere durch die imposanten Skisprungschanzen des Salpausselkä, die das Stadtbild prägen. Lahti hat sich in den letzten Jahren rasant von einer traditionellen Industriestadt zu einem Vorreiter für Nachhaltigkeit und grünes Leben entwickelt. Der Hafenbereich am Seeufer wurde umfassend modernisiert und bietet nun elegante Cafés sowie die atemberaubende Sibelius-Halle, ein Meisterwerk moderner Holzarchitektur. Die Stadt ist zudem der Ausgangspunkt in die weitläufige finnische Seenplatte.",
    "facts": [
      "Lahti wurde 2021 von der Europäischen Kommission zur 'Umwelthauptstadt Europas' ernannt.",
      "Die Stadt war bereits sieben Mal Gastgeber der Nordischen Skiweltmeisterschaften.",
      "Die preisgekrönte Sibelius-Halle ist eines der größten öffentlichen Holzgebäude Finnlands.",
      "Der Salpausselkä-Höhenzug, auf dem Lahti liegt, entstand während der letzten Eiszeit vor rund 10.000 Jahren.",
      "Lahti hat eine der traditionsreichsten Brauerei- und Getränkeindustrien des Landes, allen voran Hartwall."
    ]
  },
  "city-jyvaskyla": {
    "desc": "Jyväskylä wird oft als das 'Athen Finnlands' bezeichnet und ist das Bildungs- und Architekturzentrum im Herzen des Landes. Die Stadt ist weltweit berühmt für die größte Konzentration von Gebäuden des Stararchitekten Alvar Aalto, die von seinen frühen Werken bis hin zu seinen späten Meisterstücken reicht. Eingerahmt von dichten Wäldern und dem See Päijänne bietet Jyväskylä eine junge, dynamische Atmosphäre, die stark von ihren Universitäten geprägt wird. Das lebendige Stadtzentrum ist ideal zum Einkaufen und Entspannen, während der nahegelegene Hafen Lutakko ein populärer Treffpunkt für sommerliche Veranstaltungen ist. Hier verschmelzen Bildung, Architektur und die Schönheit der zentralfinnischen Seenplatte.",
    "facts": [
      "In Jyväskylä wurde 1858 das erste finnischsprachige Gymnasium gegründet, was den Titel 'Athen Finnlands' prägte.",
      "Die Stadt beherbergt fast 30 Gebäude, die vom berühmten Architekten Alvar Aalto entworfen wurden.",
      "Jyväskylä ist die Heimat des Alvar-Aalto-Museums, das das Lebenswerk des Designers dokumentiert.",
      "Die Neste Rally Finland, ein rasantes Motorsport-Ereignis, findet traditionell rund um Jyväskylä statt.",
      "Die Universität Jyväskylä ist eine der größten und angesehensten multidisziplinären Universitäten des Landes."
    ]
  },
  "city-kuopio": {
    "desc": "Kuopio ist die Hauptstadt der Region Nordsavo und liegt malerisch eingebettet in das weite Wassersystem des Kallavesi-Sees. Die Stadt gilt als das kulturelle Herz der östlichen Seenplatte, geprägt von einer entspannten Lebensart und dem berühmten Savonia-Humor. Der Puijo-Turm, der auf einem bewaldeten Hügel thront, bietet einen spektakulären Panoramablick über das Labyrinth aus Wäldern und Seen. Kuopio ist auch für seinen lebendigen Marktplatz bekannt, wo lokale Delikatessen wie die fischgefüllte Teigkruste 'Kalakukko' verkauft werden. Die Stadt ist ein bedeutendes Zentrum für Medizin, Technologie und sommerliche Festivals.",
    "facts": [
      "Kuopio wurde 1779 gegründet und ist heute die achtgrößte Stadt Finnlands.",
      "Der traditionelle Marktplatz von Kuopio wird von den Einheimischen scherzhaft als 'Nabel der Welt' bezeichnet.",
      "Die lokale Spezialität 'Kalakukko', ein im Roggenbrot gebackener Fisch, hat eine EU-geschützte Ursprungsbezeichnung.",
      "Der 75 Meter hohe Puijo-Aussichtsturm wurde 1963 erbaut und beherbergt ein rotierendes Panoramarestaurant.",
      "Kuopio ist im Winter ein beliebtes Ziel für Eismarathons auf dem zugefrorenen Kallavesi-See."
    ]
  },
  "city-joensuu": {
    "desc": "Joensuu, gelegen an der Mündung des Flusses Pielisjoki in den großen Pyhäselkä-See, ist die vitale Hauptstadt der Region Nordkarelien. Als lebendige Universitätsstadt verbindet sie jugendliche Energie mit den tief verwurzelten Traditionen Ostfinnlands. Joensuu ist berühmt für seine musikalische Atmosphäre, die sich im jährlichen Ilosaarirock-Festival manifestiert, einem der ältesten und größten Open-Air-Events des Landes. Die Stadt ist das Tor zu den weiten Wäldern und Hügeln Kareliens, ideal für Wanderungen und Naturerlebnisse in Nationalparks wie Koli. Die karalische Gastfreundschaft und die orthodoxe Kultur verleihen Joensuu einen ganz besonderen, authentischen Charme.",
    "facts": [
      "Joensuu wurde 1848 von Zar Nikolaus I. von Russland gegründet.",
      "Etwa ein Viertel der Bevölkerung von Joensuu sind Studenten, was der Stadt eine sehr junge Atmosphäre verleiht.",
      "Das Botanische Zentrum Botania beherbergt hunderte tropischer Pflanzen sowie einen Schmetterlingspark.",
      "Das Ilosaarirock-Festival zieht jeden Juli zehntausende von Musikfans nach Joensuu.",
      "Die Region um Joensuu ist bekannt für karelische Piroggen, eine traditionelle Teigspezialität mit Milchreis."
    ]
  },
  "city-vaasa": {
    "desc": "Vaasa ist das Herzstück der Region Österbotten und verbindet eine reiche schwedisch-finnische Zweisprachigkeit mit einer starken industriellen Basis. Die Stadt liegt an der Küste des Bottnischen Meerbusens und ist das Tor zum einzigartigen Kvarken-Archipel, einem UNESCO-Weltnaturerbe. Vaasa besticht durch breite Boulevards, historische Holzviertel und eine lebendige Universitätskultur. Als Nordeuropas führendes Zentrum für Energietechnologie ist die Stadt ein Vorreiter in Sachen nachhaltige Innovationen. Die maritime Umgebung bietet im Sommer wie im Winter fantastische Möglichkeiten für Naturerlebnisse und Bootsfahrten.",
    "facts": [
      "Vaasa wurde nach einem verheerenden Brand im Jahr 1852 etwa sieben Kilometer näher ans Meer verlegt und neu aufgebaut.",
      "Die Stadt beheimatet den größten Energie-Cluster Skandinaviens mit über 160 Unternehmen.",
      "Etwa 25 Prozent der Einwohner von Vaasa sprechen Schwedisch als Muttersprache.",
      "Die Ruinen von Alt-Vaasa (Vanha Vaasa) sind heute ein beliebter historischer Park.",
      "Der Kvarken-Archipel bei Vaasa erhebt sich aufgrund der postglazialen Landhebung jährlich um fast einen Zentimeter."
    ]
  },
  "city-porvoo": {
    "desc": "Porvoo ist die zweitälteste Stadt Finnlands und ein architektonisches Juwel an der südlichen Küste. Die historische Altstadt verzaubert Besucher mit einem Labyrinth aus kopfsteingepflasterten Gassen, charmanten Cafés und den berühmten zinnoberroten Holzspeichern entlang des Flusses Porvoonjoki. Dieser idyllische Ort war lange Zeit ein wichtiges Handelszentrum und zog zahlreiche Künstler und Dichter an, darunter Finnlands Nationaldichter J.L. Runeberg. Porvoo verbindet auf elegante Weise seine jahrhundertealte Geschichte mit erstklassigen Restaurants und Boutiquen für modernes Design. Es ist ein lebendiges Freilichtmuseum, das zu jeder Jahreszeit eine romantische Atmosphäre ausstrahlt.",
    "facts": [
      "Porvoo erhielt bereits 1380 die Stadtrechte und ist nach Turku die zweitälteste Stadt des Landes.",
      "Die roten Uferspeicher wurden im 18. Jahrhundert zu Ehren des Besuchs von König Gustav III. von Schweden rot gestrichen.",
      "Der Dom von Porvoo, der mehrfach abbrannte, war 1809 Schauplatz des berühmten Reichstags von Porvoo.",
      "Das Wohnhaus des Nationaldichters Johan Ludvig Runeberg in Porvoo ist heute das älteste Hausmuseum Finnlands.",
      "Die Runeberg-Törtchen, ein traditionelles finnisches Gebäck, wurden in Porvoo von der Frau des Dichters erfunden."
    ]
  },
  "city-lappeenranta": {
    "desc": "Lappeenranta liegt an der südlichen Spitze des riesigen Saimaa-Sees und bildet die wichtigste Brücke zwischen der karelischen Kultur und der modernen Grenzregion. Die Stadt ist besonders für ihre historische Festungsanlage bekannt, deren Wälle und Kasernen an die einstige strategische Bedeutung zwischen Schweden und Russland erinnern. Heute ist Lappeenranta eine grüne Universitätsstadt und ein Vorreiter im Bereich umweltfreundlicher Technologien und erneuerbarer Energien. Im Sommer erwacht der geschäftige Hafen zum Leben, von wo aus Schiffe durch den Saimaa-Kanal bis zum Finnischen Meerbusen fahren. Lappeenranta bietet die perfekte Kombination aus historischem Erbe und atemberaubender Seenlandschaft.",
    "facts": [
      "Die Festung von Lappeenranta wurde im 18. Jahrhundert zunächst von den Schweden und später von den Russen erbaut.",
      "Die Stadt ist der Ausgangspunkt für den 43 Kilometer langen Saimaa-Kanal, der den See mit der Ostsee verbindet.",
      "Lappeenranta wurde 2021 mit dem 'European Green Leaf Award' für ihre herausragenden Umweltleistungen ausgezeichnet.",
      "Jeden Sommer wird in Lappeenranta die größte Sandburg Finnlands mit bis zu 3 Millionen Kilo Sand errichtet.",
      "Auf dem Marktplatz der Stadt kann man die lokale Fleischpastete 'Vety' genießen, eine karelische Spezialität."
    ]
  },
  "city-kotka": {
    "desc": "Kotka ist eine dynamische Hafenstadt an der Südküste Finnlands, tief verwurzelt in der maritimen Geschichte und der Holzindustrie. Die Stadt erstreckt sich über mehrere Inseln an der Mündung des Kymijoki-Flusses und bietet spektakuläre Ausblicke auf die Ostsee. Kotka ist berühmt für seine preisgekrönten Stadtparks, wie den Sapokka-Wasserpark, die eine grüne Oase inmitten der industriellen Architektur bilden. Das maritime Zentrum Vellamo bietet interaktive Ausstellungen über die finnische Seefahrtsgeschichte. Mit seiner rauen Hafenromantik, den historischen Festungsruinen und dem imperialen Fischerhaus Langinkoski verbindet Kotka maritime Stärke mit royaler Eleganz.",
    "facts": [
      "Kotka besitzt den bedeutendsten Exporthafen Finnlands, der stark auf die Forst- und Papierindustrie ausgerichtet ist.",
      "Die Seeschlacht von Svensksund, eine der größten maritimen Schlachten der Geschichte, fand 1790 vor der Küste Kotkas statt.",
      "Das Maritime Zentrum Vellamo wurde architektonisch so gestaltet, dass es wie eine riesige Welle aussieht.",
      "Kotka wurde offiziell zur 'Parkhauptstadt Finnlands' ernannt, da sie über zahlreiche meisterhaft angelegte Grünanlagen verfügt.",
      "Zar Alexander III. von Russland nutzte die Langinkoski-Hütte in Kotka als sommerlichen Angelrückzugsort."
    ]
  },
  "city-rovaniemi": {
    "desc": "Rovaniemi ist das unbestrittene urbane Zentrum von Finnisch-Lappland und liegt genau am Rande des Polarkreises. Die Stadt wurde nach dem Zweiten Weltkrieg in Form eines Rentiergeweihs neu aufgebaut, basierend auf den Plänen des Stararchitekten Alvar Aalto. Rovaniemi ist weltweit berühmt als die offizielle Heimatstadt des Weihnachtsmannes, deren Weihnachtsmanndorf das ganze Jahr über magische Momente für Familien bietet. Neben dem Tourismus ist die Stadt ein wichtiger Knotenpunkt für Arktisforschung, unter anderem durch das beeindruckende Arktikum-Museum. Von hier aus starten unzählige Expeditionen in die weite lappländische Wildnis, sei es zur Beobachtung von Nordlichtern oder auf Hundeschlitten.",
    "facts": [
      "Rovaniemi wurde am Ende des Zweiten Weltkriegs im sogenannten Lapplandkrieg fast vollständig zerstört.",
      "Das Weihnachtsmanndorf in Rovaniemi empfängt jährlich über eine halbe Million internationale Besucher.",
      "Der Grundriss des Stadtzentrums wurde von Alvar Aalto so entworfen, dass er die Form eines Rentierkopfs hat.",
      "Das Arktikum ist ein Wissenschaftszentrum und Museum, das die Natur und Kultur der gesamten Arktis dokumentiert.",
      "An der offiziellen Polarkreislinie in Rovaniemi gibt es im Hochsommer fast einen vollen Monat lang durchgehend Tageslicht."
    ]
  },
  "cult-suomenlinna": {
    "desc": "Suomenlinna ist eine monumentale Seefestung, die sich über sechs verbundene Inseln vor der Küste Helsinkis erstreckt und zu den bedeutendsten historischen Monumenten Finnlands zählt. Sie wurde im 18. Jahrhundert unter schwedischer Herrschaft erbaut, um die Verteidigung gegen das Russische Reich zu stärken, und später von Russland übernommen, bevor sie an das unabhängige Finnland überging. Heute ist Suomenlinna ein UNESCO-Weltkulturerbe und eines der beliebtesten Ausflugsziele des Landes. Neben den gewaltigen Festungsmauern und Tunneln beherbergt die Insel Museen, historische U-Boote und eine lebendige Wohn- und Künstlergemeinschaft. Es ist ein Ort, an dem Geschichte auf atemberaubende Schärenlandschaften trifft.",
    "facts": [
      "Die Festung Suomenlinna wurde 1748 unter dem Namen Sveaborg (Schwedische Burg) gegründet.",
      "Heute leben das ganze Jahr über rund 800 ständige Einwohner innerhalb der historischen Festungsmauern.",
      "Die Festung wurde 1991 von der UNESCO aufgrund ihrer einzigartigen Militärarchitektur zum Weltkulturerbe erklärt.",
      "In den Trockendocks von Suomenlinna werden noch heute alte Segelschiffe aus Holz restauriert.",
      "Das U-Boot Vesikko, das im Zweiten Weltkrieg im Einsatz war, kann auf Suomenlinna von innen besichtigt werden."
    ]
  },
  "cult-rovaniemi-santa": {
    "desc": "Das Weihnachtsmanndorf in Rovaniemi ist eine magische Destination, die den Zauber von Weihnachten das ganze Jahr über lebendig hält. Direkt auf der offiziellen Linie des nördlichen Polarkreises gelegen, ist es der Ort, an dem der Weihnachtsmann seine Gäste empfängt und seine Rentiere grast. Das Dorf beherbergt das offizielle Postamt des Weihnachtsmannes, das jedes Jahr Hunderttausende von Briefen von Kindern aus der ganzen Welt erhält. Neben den Begegnungen mit dem Weihnachtsmann bietet das Dorf traditionelle lappländische Handwerkskunst, winterliche Aktivitäten und Husky-Schlittenfahrten. Es ist ein unvergessliches Erlebnis, das die nordische Winterromantik perfekt einfängt.",
    "facts": [
      "Das offizielle Postamt des Weihnachtsmannes im Dorf hat seinen eigenen Sonderstempel für ausgehende Briefe.",
      "Die Polarkreislinie ist im Dorf auf dem Boden markiert und wird von Besuchern oft für Fotos überquert.",
      "Eleanor Roosevelt, die Witwe des US-Präsidenten, war 1950 der erste prominente Gast an diesem Ort.",
      "Das Dorf ist 365 Tage im Jahr geöffnet und empfängt Besucher aus über 100 verschiedenen Ländern.",
      "Alle Briefe, die an die Adresse des Weihnachtsmannes geschickt werden, werden von speziellen Postelfen sortiert."
    ]
  },
  "cult-olavinlinna": {
    "desc": "Die Burg Olavinlinna ist eine der spektakulärsten mittelalterlichen Festungen Nordeuropas, gelegen auf einer Felseninsel inmitten des strömenden Saimaa-Sees in Savonlinna. Erbaut im Jahr 1475 von den Schweden, um die strategisch wichtige Wasserstraße gegen den Osten zu verteidigen, hat die Burg eine bewegte Geschichte zahlreicher Schlachten und Belagerungen hinter sich. Die massiven runden Türme und steinernen Mauern bieten einen faszinierenden Einblick in die militärische Architektur des Mittelalters. Heute ist Olavinlinna weltweit berühmt als Schauplatz der jährlichen Savonlinna-Opernfestspiele, wo die exzellente Akustik im Burghof unvergessliche musikalische Erlebnisse schafft. Die Burg ist ein stolzes Symbol des finnischen Seebezirks.",
    "facts": [
      "Olavinlinna ist die nördlichste noch intakte mittelalterliche Steinburg der Welt.",
      "Die Burg wurde nach dem norwegischen Heiligen Olaf benannt, der als Schutzpatron der Festung galt.",
      "Zwei der ursprünglichen Festungstürme wurden im Laufe der Jahrhunderte durch Explosionen und Schlachten zerstört.",
      "Während der Savonlinna-Opernfestspiele wird der Innenhof mit einem riesigen Zeltdach überdacht.",
      "Ein lokaler Mythos erzählt von einem Ebereschenbaum, der aus dem Grab einer tragisch verliebten Burgjungfrau gewachsen sein soll."
    ]
  },
  "cult-sibelius": {
    "desc": "Der Sibelius-Park in Helsinki ist eine Hommage an Jean Sibelius, den größten und bedeutendsten Komponisten Finnlands. Das Herzstück des Parks ist das abstrakte Sibelius-Monument, das von der Bildhauerin Eila Hiltunen entworfen wurde. Die Skulptur besteht aus über 600 hohlen Stahlrohren, die in einer wellenartigen Form zusammengeschweißt wurden, um visuell die Essenz von Sibelius' symphonischer Musik und die Wälder Finnlands einzufangen. Neben der beeindruckenden Röhrenkonstruktion befindet sich eine metallene Büste des Komponisten. Der Park am Meer ist nicht nur ein Muss für Kunst- und Musikliebhaber, sondern auch ein beliebter Ort der Ruhe in der Hauptstadt.",
    "facts": [
      "Das Sibelius-Monument wurde 1967, zehn Jahre nach dem Tod des Komponisten, enthüllt.",
      "Das abstrakte Design der Skulptur war anfangs höchst umstritten, was zur nachträglichen Hinzufügung der Büste führte.",
      "Die Stahlkonstruktion wiegt 24 Tonnen und misst etwa 8,5 Meter in der Höhe.",
      "Wenn der Wind weht, erzeugen die Stahlrohre der Skulptur leise, pfeifende musikalische Töne.",
      "Eine kleinere Nachbildung des Denkmals befindet sich am Sitz der Vereinten Nationen in New York."
    ]
  },
  "cult-design-district": {
    "desc": "Das Helsinki Design District ist ein lebendiges Netzwerk von kreativen Vierteln im Herzen der finnischen Hauptstadt, das die globale Bedeutung des finnischen Designs unterstreicht. Das Areal umfasst etwa 25 Straßen und beherbergt über 200 Designboutiquen, Galerien, Ateliers, Museen und trendige Restaurants. Hier finden Besucher alles von ikonischen finnischen Marken wie Marimekko, Artek und Iittala bis hin zu innovativen Werken junger, aufstrebender Designer. Das Viertel ist nicht nur ein Einkaufsparadies, sondern ein kultureller Raum, der die finnische Philosophie des funktionalen, nachhaltigen und minimalistischen Designs feiert. Ein Spaziergang durch den Design District ist eine Entdeckungsreise durch den ästhetischen Geist Finnlands.",
    "facts": [
      "Das Design District Helsinki wurde 2005 offiziell als Initiative lokaler Unternehmer gegründet.",
      "Im Herzen des Bezirks liegt das berühmte Design Museum, das eine umfangreiche Sammlung finnischen Industriedesigns zeigt.",
      "Die Straßen des Distrikts erstrecken sich über die angesagten Viertel Punavuori, Kaartinkaupunki und Kamppi.",
      "Helsinki wurde 2012 zur World Design Capital gewählt, was den internationalen Ruf des Viertels festigte.",
      "Viele Boutiquen im District legen großen Wert auf Slow Fashion, Recycling und umweltfreundliche Materialien."
    ]
  },
  "hist-hame-castle": {
    "desc": "Die Burg Häme (Hämeen linna) ist eine der ältesten und bedeutendsten Backsteinfestungen Finnlands, majestätisch am Ufer des Vanajavesi-Sees in Hämeenlinna gelegen. Wahrscheinlich im späten 13. Jahrhundert nach einem schwedischen Kreuzzug gegründet, diente sie lange Zeit als militärischer Außenposten und administratives Zentrum. Die Burg zeichnet sich durch ihren markanten roten Backsteinbau aus, der sich deutlich von anderen nordischen Steinfestungen abhebt. Im Laufe der Jahrhunderte erlebte die Festung eine wechselvolle Geschichte und diente unter russischer Herrschaft sogar als Frauengefängnis. Heute ist die prächtig restaurierte Anlage ein Museum, das Besucher tief in die mittelalterliche Geschichte Finnlands eintauchen lässt.",
    "facts": [
      "Die Burg Häme ist eine von nur einer Handvoll erhaltener mittelalterlicher Königsburgen in Finnland.",
      "Der Hauptbau der Festung ist einzigartig in Skandinavien, da er primär aus rotem Ziegelstein statt aus Naturstein errichtet wurde.",
      "Das Gebäude wurde bis 1953 als Strafanstalt genutzt, bevor umfangreiche Restaurierungsarbeiten begannen.",
      "Im Sommer ist das Burggelände Austragungsort für mittelalterliche Märkte und historische Ritterturniere.",
      "Zur Festungsanlage gehören auch das Waffenmuseum Museo Militaria und das Gefängnismuseum Prison."
    ]
  },
  "hist-old-rauma": {
    "desc": "Alt-Rauma (Vanha Rauma) ist das größte zusammenhängende historische Holzhausviertel der nordischen Länder und gehört zum UNESCO-Weltkulturerbe. Das idyllische Zentrum an der Westküste umfasst rund 600 kunstvoll verzierte Holzgebäude, die enge und verwinkelte Gassen säumen. Im Gegensatz zu vielen Museumsinseln ist Alt-Rauma ein lebendiger Stadtteil, in dem Menschen wohnen, arbeiten und Geschäfte betreiben. Die Gegend ist berühmt für ihre jahrhundertealte Tradition des Klöppelns und ihre reiche Seefahrtsgeschichte. Ein Spaziergang durch die Kopfsteinpflasterstraßen vorbei an bunten Häusern und der markanten Heilig-Kreuz-Kirche gleicht einer Zeitreise ins 18. und 19. Jahrhundert.",
    "facts": [
      "Alt-Rauma wurde 1991 als erste finnische Stätte in die UNESCO-Welterbeliste aufgenommen.",
      "Die Heilig-Kreuz-Kirche in Rauma wurde im 15. Jahrhundert als Teil eines Franziskanerklosters erbaut.",
      "Der historische Marktplatz von Alt-Rauma ist noch heute das geschäftige Zentrum des Viertels.",
      "Viele der Holzhäuser tragen eigene historische Namen, die oft seit Jahrhunderten unverändert geblieben sind.",
      "Rauma ist für einen einzigartigen, fast unverständlichen lokalen Dialekt ('Rauman giäl') bekannt."
    ]
  },
  "hist-petajavesi-old-church": {
    "desc": "Die Alte Kirche von Petäjävesi, tief in der Seenlandschaft Mittelfinnlands gelegen, ist ein Meisterwerk der nordischen Holzarchitektur und gehört zum UNESCO-Weltkulturerbe. Sie wurde zwischen 1763 und 1764 von einem lokalen Zimmermannsmeister erbaut und verkörpert perfekt die traditionelle finnische Blockbauweise, kombiniert mit europäischen Architekturstilen wie der Renaissance und Gotik. Das rustikale Gebäude aus Kiefernholz, das wunderschön auf einer kleinen Landenge zwischen zwei Seen thront, ist weitgehend in seinem ursprünglichen Zustand erhalten. Im Inneren beeindrucken einfache Holzschnitzereien und eine tiefe spirituelle Stille. Die Kirche ist ein eindrucksvolles Zeugnis der Handwerkskunst der ländlichen finnischen Bevölkerung im 18. Jahrhundert.",
    "facts": [
      "Die Alte Kirche von Petäjävesi wurde 1994 aufgrund ihrer einzigartigen Holzkonstruktion zum UNESCO-Weltkulturerbe erklärt.",
      "Der Bau wurde vom Bauern und Meisterzimmermann Jaakko Klemetinpoika Leppänen ohne formale Architektenausbildung geleitet.",
      "Der markante Glockenturm wurde 1821 vom Enkel des ursprünglichen Baumeisters hinzugefügt.",
      "Da die Kirche im Winter keine Heizung besitzt, finden Messen und Hochzeiten traditionell nur im Sommer statt.",
      "Das Dach der Kirche ist vollständig mit handgefertigten, geteerten Holzschindeln gedeckt."
    ]
  },
  "hist-sammallahdenmaki": {
    "desc": "Sammallahdenmäki ist eine faszinierende archäologische Stätte in der Nähe von Rauma, die die bedeutendsten und umfangreichsten bronzezeitlichen Grabstätten Skandinaviens bewahrt. Dieses UNESCO-Weltkulturerbe umfasst über 30 Steinhügelgräber (Cairns), die vor mehr als 3.000 Jahren von Gemeinden errichtet wurden, die die skandinavische Sonnenanbetung praktizierten. Diese Gräber aus grauem Granit wurden einst in Küstennähe angelegt, obwohl sich das Meer durch die nacheiszeitliche Landhebung heute weit zurückgezogen hat. Sammallahdenmäki bietet einen mystischen und ruhigen Einblick in die steinzeitlichen Bestattungsrituale und die religiösen Vorstellungen der frühen Bewohner Finnlands.",
    "facts": [
      "Sammallahdenmäki wurde 1999 als erstes prähistorisches archäologisches Denkmal in Finnland zum UNESCO-Welterbe ernannt.",
      "Das berühmteste Grab der Anlage ist der sogenannte 'Kirchenboden' (Kirkonlaattia), ein einzigartiges quadratisches Steingebilde.",
      "Die Cairns wurden grob zwischen 1500 und 500 vor Christus während der skandinavischen Bronzezeit errichtet.",
      "Ausgrabungen haben gezeigt, dass die Verstorbenen innerhalb der Steinhügel verbrannt und mit Beigaben beerdigt wurden.",
      "Das gesamte Gebiet umfasst rund 36 Hektar und ist heute von einem ruhigen Kiefernwald umgeben."
    ]
  },
  "hist-tali-ihantala": {
    "desc": "Tali-Ihantala, nördlich der Stadt Viipuri gelegen (heute in Russland, nahe der finnischen Grenze), war im Sommer 1944 der Schauplatz der größten und verlustreichsten Schlacht in der nordischen Militärgeschichte. Hier gelang es der finnischen Armee, unterstützt durch deutsche Luft- und Panzerabwehrwaffen, eine gewaltige sowjetische Großoffensive zu stoppen. Dieser entscheidende Abwehrsieg verhinderte die Besetzung Finnlands und sicherte dem Land die Unabhängigkeit am Ende des Fortsetzungskrieges. Das Schlachtfeld ist heute ein Ort des Gedenkens, das stark in das nationale Bewusstsein der Finnen eingebrannt ist. Verschiedene Denkmäler in der Umgebung ehren die Soldaten, die in diesen dichten, zerschossenen Wäldern die finnische Verteidigungslinie hielten.",
    "facts": [
      "An der Schlacht von Tali-Ihantala nahmen auf beiden Seiten schätzungsweise über 200.000 Soldaten teil.",
      "Die entscheidende Rolle für den finnischen Erfolg spielten die konzentrierten Artillerieschläge und die Luftunterstützung.",
      "Der Sieg in Tali-Ihantala wird oft als das 'Wunder von Ihantala' bezeichnet.",
      "Ein bekannter finnischer Film aus dem Jahr 2007 (Tali-Ihantala 1944) rekonstruiert die strategischen Phasen der Schlacht.",
      "Der Erfolg zwang die Sowjetunion dazu, Finnland aufzugeben und ihre Truppen in Richtung Berlin umzuleiten."
    ]
  },
  "hist-salpa-line-museum": {
    "desc": "Das Salpa-Linie-Museum im Südosten Finnlands dokumentiert die Geschichte der massivsten und ausgedehntesten Verteidigungslinie, die jemals im Land gebaut wurde. Die über 1.200 Kilometer lange Bunkerlinie wurde während des Interimfriedens (1940-1941) hastig errichtet, um sich nach dem Winterkrieg vor weiteren sowjetischen Invasionen zu schützen. Das Freilichtmuseum in Miehikkälä bietet Besuchern die Möglichkeit, ein kilometerlanges Netz aus originalen Panzerhindernissen, tiefen in den Fels gesprengten Bunkern und Schützengräben zu erkunden. Obwohl an der Salpa-Linie nie gekämpft wurde, steht sie als gewaltiges Symbol für den unbändigen Willen Finnlands, seine Unabhängigkeit und Sicherheit um jeden Preis zu verteidigen.",
    "facts": [
      "Die Salpa-Linie erstreckte sich vom Finnischen Meerbusen bis ganz in den Norden nach Lappland und zum Arktischen Ozean.",
      "Beim Bau der Verteidigungslinie wurden über 35.000 Zivilisten und Freiwillige eingesetzt.",
      "Das Verteidigungswerk bestand aus über 700 Betonbunkern und mehr als 3.000 Kilometern Stacheldraht.",
      "Die fast 225 Kilometer langen Panzerhindernisse wurden mühevoll aus riesigen Steinblöcken gehauen.",
      "Trotz der massiven Bauarbeiten wurde an der Salpa-Linie während des Zweiten Weltkriegs kein einziger Schuss abgefeuert."
    ]
  }
}

import json
from patch import patch_file
patch_file(DATA)
