import re

file_path = '/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraHu3.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Define the POIs 26-50 with all fields
pois_26_50_data = [
    {
        "id": "historical-szegedi-dom-extra",
        "type": "historical",
        "parent": "HU-CS",
        "coords": [20.149, 46.248],
        "name": { "de": "Votivkirche von Szeged", "hu": "Szegedi Dóm", "ro": "Catedrala din Szeged", "en": "Votive Church of Szeged" },
        "description": {
            "de": "Ein imposantes neoromanisches Bauwerk, errichtet nach der großen Flut von 1879.",
            "hu": "Impozáns neoromán épület, amelyet az 1879-es nagy árvíz után emeltek fogadalomból.",
            "ro": "O clădire neoromanică impunătoare, ridicată ca urmare a marii inundații din 1879.",
            "en": "An imposing Neo-Romanesque building, built after the great flood of 1879."
        },
        "facts": {
            "de": ["Zweithöchste Kirche Ungarns.", "Berühmte Freilichtspiele."],
            "hu": ["Magyarország 4. legmagasabb temploma.", "Híres Szabadtéri Játékok helyszíne."],
            "ro": ["A patra cea mai înaltă biserică din Ungaria.", "Locul celebrelor Jocuri în Aer Liber."],
            "en": ["The 4th tallest church in Hungary.", "Venue for the famous Open-Air Festival."]
        },
        "descriptionAdvanced": "Die Votivkirche von Szeged, auch als Kathedrale Unserer Lieben Frau von Ungarn bekannt, ist eines der beeindruckendsten religiösen Bauwerke des Landes. Nach der verheerenden Flut von 1879 gelobten die Bürger von Szeged, eine prächtige Kirche zu errichten, falls ihre Stadt wiederaufgebaut würde. Der Bau im neoromanischen Stil begann 1913 und wurde 1930 abgeschlossen. Die markanten roten Backsteintürme ragen 81 Meter in den Himmel und prägen die Silhouette der Stadt. Der Dómplatz, der die Kirche umgibt, ist genau so groß wie der Markusplatz in Venedig und bietet eine einzigartige Akustik. Im Inneren beeindruckt die Kathedrale durch monumentale Fresken, eine gewaltige Orgel mit über 9.000 Pfeifen und die Statue der 'Madonna im Pelz'. Die Votivkirche ist nicht nur ein Ort des Gebets, sondern auch das Herzstück der berühmten Szegeder Freilichtspiele, die jeden Sommer tausende Besucher auf den Platz locken.",
        "factsAdvanced": [
            "Die Kirche wurde als Einlösung eines Gelübdes nach der großen Flut von 1879 erbaut.",
            "Mit ihren 81 Meter hohen Türmen ist sie eine der höchsten Kirchen Ungarns.",
            "Die Orgel der Kathedrale ist die drittgrößte in Europa und verfügt über 9.040 Pfeifen.",
            "Auf dem Dómplatz finden seit 1931 die berühmten Szegeder Freilichtspiele statt.",
            "Das Gebäude wurde aus Millionen von roten Ziegelsteinen im neoromanischen Stil errichtet.",
            "Im Inneren befindet sich ein Mosaik der Jungfrau Maria in traditioneller ungarischer Hirtenkleidung.",
            "Die Krypta der Kathedrale dient als letzte Ruhestätte für bedeutende Persönlichkeiten der Region.",
            "Das Glockenspiel der Kirche ist weithin über die Stadt Szeged zu hören."
        ]
    },
    {
        "id": "historical-mora-ferenc-muzeum-extra",
        "type": "historical",
        "parent": "HU-CS",
        "coords": [20.152, 46.252],
        "name": { "de": "Móra Ferenc Museum", "hu": "Móra Ferenc Múzeum", "ro": "Muzeul Móra Ferenc", "en": "Mora Ferenc Museum" },
        "description": {
            "de": "Ein bedeutendes Kulturzentrum in Szeged, benannt nach dem berühmten Schriftsteller.",
            "hu": "Szeged jelentős kulturális központja, a híres íróról elnevezve.",
            "ro": "Un centru cultural important din Szeged, numit după celebrul scriitor.",
            "en": "A significant cultural center in Szeged, named after the famous writer."
        },
        "facts": {
            "de": ["Prachtvolles klassizistisches Gebäude.", "Direkt an der Theiß."],
            "hu": ["Pompás klasszicista épület.", "Közvetlenül a Tisza-parton áll."],
            "ro": ["Clădire clasicistă superbă.", "Chiar pe malul Tisei."],
            "en": ["Magnificent Neoclassical building.", "Located right on the Tisza riverbank."]
        },
        "descriptionAdvanced": "Das Móra-Ferenc-Museum in Szeged ist ein bedeutendes kulturelles Zentrum und eines der meistbesuchten Museen in Südungarn. Das im imposanten klassizistischen Stil direkt am Ufer der Theiß errichtete Gebäude wurde 1896 zur Millenniumsfeier Ungarns eröffnet. Benannt ist es nach dem berühmten ungarischen Schriftsteller Ferenc Móra, der viele Jahre lang der Direktor des Museums war. Die Sammlungen umfassen ein breites Spektrum von Archäologie über Ethnografie bis hin zu Naturwissenschaften und Bildender Kunst. Besonders berühmt ist das Museum für seine wertvolle Goldfund-Sammlung der Hunnen und seine wechselnden internationalen Großausstellungen, die oft Schätze aus aller Welt zeigen. Die prachtvolle Fassade mit ihren korinthischen Säulen ist ein Wahrzeichen der Stadt. Besucher können hier tief in die Geschichte der ungarischen Tiefebene eintauchen und gleichzeitig moderne Kunstwerke bewundern, was das Museum zu einem unverzichtbaren Ziel für Kulturliebhaber in Szeged macht.",
        "factsAdvanced": [
            "Das Museum wurde 1896 als Teil der nationalen Millenniumsfeierlichkeiten eröffnet.",
            "Das Gebäude wurde im Stil des Neoklassizismus von den Architekten Adolf Voyta entworfen.",
            "Der namensgebende Schriftsteller Ferenc Móra leitete das Museum von 1917 bis 1934.",
            "Eine der bedeutendsten Sammlungen des Hauses umfasst archäologische Funde der Awaren und Hunnen.",
            "Die ethnografische Abteilung zeigt das traditionelle Leben der Fischer und Handwerker an der Theiß.",
            "Das Museum beherbergt eine wertvolle Gemäldegalerie mit Werken ungarischer Meister.",
            "Die Freitreppe des Museums ist ein beliebter Treffpunkt und bietet einen Blick auf die Theiß.",
            "Regelmäßig finden hier internationale Wanderausstellungen zu Themen wie Ägypten oder Pompeji statt."
        ]
    },
    {
        "id": "historical-csongradi-ovaros-extra",
        "type": "historical",
        "parent": "HU-CS",
        "coords": [20.144, 46.713],
        "name": { "de": "Altstadt von Csongrád", "hu": "Csongrádi Óváros", "ro": "Centrul Vechi Csongrád", "en": "Csongrad Old Town" },
        "description": {
            "de": "Ein Denkmalensemble mit reetgedeckten Fischerhäusern an der Theiß.",
            "hu": "Nádtetős halászházakból álló műemléki együttes a Tisza partján.",
            "ro": "Un ansamblu istoric de case pescărești cu acoperiș de stuf pe malul Tisei.",
            "en": "A historic ensemble of thatched-roof fisherman cottages on the Tisza banks."
        },
        "facts": {
            "de": ["Besondere Atmosphäre.", "Lebendiges Freilichtmuseum."],
            "hu": ["Különleges hangulatot áraszt.", "Élő skanzenként működik."],
            "ro": ["Atmosferă deosebită.", "Funcționează ca un muzeu viu."],
            "en": ["Unique atmosphere.", "Functions as a living open-air museum."]
        },
        "descriptionAdvanced": "Die Altstadt von Csongrád, oft auch als 'Stamm' (Belsőváros) bezeichnet, ist ein einzigartiges architektonisches Juwel an der Theiß. Dieses historische Viertel besteht aus einer Gruppe von gut erhaltenen, traditionellen Fischerhäusern mit reetgedeckten Dächern und strahlend weißen Wänden. Es ist eines der wenigen Beispiele für eine geschlossene dörfliche Siedlungsstruktur, die inmitten einer modernen Stadt erhalten geblieben ist. Die engen Gassen und die malerische Umgebung vermitteln den Besuchern das Gefühl, in die Zeit des 18. und 19. Jahrhunderts zurückversetzt zu sein. Viele der Häuser werden heute als Museen, Kunsthandwerkswerkstätten oder Gästehäuser genutzt, was der Altstadt ein lebendiges und authentisches Flair verleiht. Die unmittelbare Nähe zum Fluss prägt den Charakter des Viertels und erinnert an die jahrhundertelange Bedeutung der Fischerei für die Bewohner. Ein Spaziergang durch die Altstadt bietet Ruhe und Inspiration und ist ein Muss für jeden, der die traditionelle ungarische Volksarchitektur hautnah erleben möchte.",
        "factsAdvanced": [
            "Die Altstadt von Csongrád steht seit den 1970er Jahren unter nationalem Denkmalschutz.",
            "Das Viertel besteht aus 37 denkmalgeschützten Gebäuden in traditioneller Bauweise.",
            "Die Häuser sind typische Beispiele für die Volksarchitektur der Region mit Schilfdächern.",
            "Ursprünglich war dieses Gebiet die Siedlung der Fischer, Schiffer und Handwerker.",
            "Heute dient die Altstadt als lebendiges Freilichtmuseum und Künstlerkolonie.",
            "Die weißen Wände und die blauen Fensterrahmen sind charakteristisch für diesen Baustil.",
            "Jährlich finden in der Altstadt traditionelle Weinfeste und Handwerksmärkte statt.",
            "Besucher können in einigen der historischen Häuser übernachten und das alte Lebensgefühl erfahren."
        ]
    },
    {
        "id": "animal-habitat-szegedi-vadaspark-extra",
        "type": "animal-habitat",
        "parent": "HU-CS",
        "coords": [20.117, 46.252],
        "name": { "de": "Zoo Szeged", "hu": "Szegedi Vadaspark", "ro": "Grădina Zoologică din Szeged", "en": "Szeged Zoo" },
        "description": {
            "de": "Der flächenmäßig größte Zoo Ungarns, spezialisiert auf seltene Tierarten.",
            "hu": "Magyarország legnagyobb területű állatkertje, ritka fajok tartására szakosodva.",
            "ro": "Cea mai mare grădină zoologică din Ungaria ca suprafață, specializată pe specii rare.",
            "en": "Hungary's largest zoo by territory, specializing in rare animal species."
        },
        "facts": {
            "de": ["Große natürliche Gehege.", "Fokus auf Naturschutz."],
            "hu": ["Tágas, természetes kifutók.", "Természetvédelemre fókuszál."],
            "ro": ["Țarcuri naturale vaste.", "Focus pe conservare."],
            "en": ["Large natural enclosures.", "Focuses on conservation programs."]
        },
        "descriptionAdvanced": "Der Zoo Szeged, auch als Wildpark bekannt, ist flächenmäßig die größte zoologische Einrichtung in Ungarn und besticht durch seine weitläufigen, naturnahen Gehege. Er liegt in einem wunderschönen Waldgebiet am Rande der Stadt und hat sich auf die Haltung seltener und gefährdeter Tierarten spezialisiert. Ein besonderer Schwerpunkt liegt auf den Tieren Südamerikas, doch finden sich hier Bewohner aus allen Kontinenten. Der Zoo ist bekannt für seine erfolgreichen Erhaltungszuchtprogramme und seine modernen Bildungsansätze. Besucher können auf schattigen Waldwegen wandern und dabei Tiere wie Schneeleoparden, Ameisenbären und Gibbons beobachten. Großen Wert legt der Zoo auf den Schutz der Biodiversität und bietet zahlreiche interaktive Stationen, die insbesondere Kindern den Wert der Natur vermitteln. Die großzügige Gestaltung der Anlage sorgt dafür, dass sich die Tiere in einer Umgebung wohlfühlen, die ihrem natürlichen Lebensraum so nahe wie möglich kommt, was den Zoo zu einem der attraktivsten Ausflugsziele in der Region macht.",
        "factsAdvanced": [
            "Der Zoo Szeged wurde 1989 eröffnet und ist damit einer der jüngsten Zoos in Ungarn.",
            "Mit einer Fläche von rund 45 Hektar ist er der größte Zoo des Landes.",
            "Der Zoo ist in geografische Zonen unterteilt, die die Flora und Fauna der Kontinente widerspiegeln.",
            "Er beherbergt seltene Arten wie den Mähnenwolf, den Riesenotter und den Roten Vari.",
            "Der Zoo nimmt an zahlreichen internationalen Zuchtprogrammen (EEP) für bedrohte Tierarten teil.",
            "Ein besonderes Highlight ist das moderne Elefantenhaus, das 2018 eingeweiht wurde.",
            "Auf dem Gelände befindet sich auch eine Rettungsstation für verletzte heimische Wildtiere.",
            "Der Zoo bietet spezielle pädagogische Programme für Schulen und Kindergartengruppen an."
        ]
    },
    {
        "id": "industry-szegedi-paprika-extra",
        "type": "industry",
        "parent": "HU-CS",
        "coords": [20.140, 46.230],
        "name": { "de": "Paprikafabrik Szeged", "hu": "Szegedi Paprikafeldolgozó", "ro": "Fabrica de Paprika din Szeged", "en": "Szeged Paprika Processing" },
        "description": {
            "de": "Szeged ist weltweit bekannt für sein Paprikapulver, das 'rote Gold' Ungarns.",
            "hu": "Szeged világszerte ismert a fűszerpaprikájáról, a magyar 'vörös aranyról'.",
            "ro": "Szeged este cunoscut în întreaga lume pentru paprika, 'aurul roșu' al Ungariei.",
            "en": "Szeged is world-famous for its spice paprika, the 'red gold' of Hungary."
        },
        "facts": {
            "de": ["Hungaricum-Produkt.", "Hunderte Jahre Tradition."],
            "hu": ["Hungarikum termék.", "Több száz éves hagyomány."],
            "ro": ["Produs Hungaricum.", "Tradiție de sute de ai."],
            "en": ["A certified Hungaricum.", "Centuries of tradition."]
        },
        "descriptionAdvanced": "Die Paprikaverarbeitung in Szeged ist ein bedeutender Pfeiler der ungarischen Lebensmittelindustrie und ein Symbol für die kulinarische Identität des Landes. Die Region um Szeged bietet ideale klimatische Bedingungen für den Anbau von Gewürzpaprika, der hier als 'rotes Gold' bezeichnet wird. Die Tradition reicht bis in das 18. Jahrhundert zurück, als der Paprika zunächst als Zierpflanze und später als unverzichtbares Gewürz Einzug hielt. In den modernen Verarbeitungsbetrieben wird der Paprika nach strengen Verfahren getrocknet und zu feinem Pulver gemahlen, wobei die charakteristische Farbe und das Aroma erhalten bleiben. Der Szegeder Paprika ist weltweit für seine außergewöhnliche Qualität bekannt und besitzt eine geschützte Ursprungsbezeichnung. Die Fabrik ist nicht nur ein Produktionsstandort, sondern auch ein Bewahrer von Traditionen, die seit Generationen vom Vater auf den Sohn übertragen werden. Das hier hergestellte Paprikapulver ist die Seele vieler ungarischer Nationalgerichte wie Gulasch und Pörkölt.",
        "factsAdvanced": [
            "Der Paprikaanbau in der Region Szeged begann bereits im frühen 18. Jahrhundert.",
            "Szegeder Paprika ist seit 2010 ein offiziell anerkanntes 'Hungarikum' und gesetzlich geschützt.",
            "Die Früchte werden traditionell im Spätsommer geerntet und früher an den Wänden der Häuser getrocknet.",
            "Es gibt verschiedene Qualitätsstufen, von 'Edelsüß' bis hin zu 'Scharf'.",
            "Die charakteristische rote Farbe verdankt das Pulver dem hohen Gehalt an natürlichen Farbstoffen (Carotinoiden).",
            "In Szeged gibt es ein eigenes Paprika-Museum, das die Geschichte des Anbaus und der Verarbeitung zeigt.",
            "Ungarischer Paprika enthält von Natur aus einen hohen Anteil an Vitamin C, was bereits Albert Szent-Györgyi entdeckte.",
            "Das Paprikapulver wird in over 50 Länder weltweit exportiert und steht für ungarische Qualität."
        ]
    },
    {
        "id": "historical-bory-var-extra",
        "type": "historical",
        "parent": "HU-FE",
        "coords": [18.455, 47.202],
        "name": { "de": "Bory-Burg", "hu": "Bory-vár", "ro": "Cetatea Bory", "en": "Bory Castle" },
        "description": {
            "de": "Eine von Jenő Bory im 20. Jahrhundert eigenhändig errichtete Betonburg in Székesfehérvár.",
            "hu": "Bory Jenő által a 20. században saját kezűleg épített betonvár Székesfehérváron.",
            "ro": "O cetate de beton construită manual de Jenő Bory în secolul XX, în Székesfehérvár.",
            "en": "A concrete castle built single-handedly by Jenő Bory in the 20th century in Székesfehérvár."
        },
        "facts": {
            "de": ["Denkmal der ewigen Liebe.", "Hunderte Skulpturen."],
            "hu": ["Az örök szerelem emlékműve.", "Százszámra láthatók itt szobrok."],
            "ro": ["Monument al iubirii eterne.", "Sute de sculpturi expuse."],
            "en": ["Monument to eternal love.", "Features hundreds of sculptures."]
        },
        "descriptionAdvanced": "Die Bory-Burg in Székesfehérvár ist ein einzigartiges architektonisches Kunstwerk und ein Denkmal der ewigen Liebe. Der Architekt und Bildhauer Jenő Bory errichtete dieses märchenhafte Schloss über einen Zeitraum von 40 Jahren fast im Alleingang. Das Besondere an der Konstruktion ist die frühe und innovative Verwendung von Beton, aus dem nicht nur die Mauern, sondern auch hunderte von Statuen und dekorativen Elementen geformt wurden. Die Burg ist ein Labyrinth aus Türmen, Arkaden, Innenhöfen und Galerien, die mit Kunstwerken von Bory und seiner Frau, der Malerin Ilona Komócsin, geschmückt sind. Jede Ecke des Gebäudes erzählt eine Geschichte und spiegelt die künstlerische Vision seines Schöpfers wider. Die Anlage ist nicht nur ein Wohnhaus und Atelier, sondern ein Gesamtkunstwerk, das verschiedene Baustile von der Romanik bis zur Renaissance vereint. Heute ist die Bory-Burg eines der romantischsten Ziele in Ungarn und fasziniert Besucher durch ihre fantastische Atmosphäre und die Liebe zum Detail.",
        "factsAdvanced": [
            "Jenő Bory baute die Burg zwischen 1923 und 1959 fast ohne fremde Hilfe.",
            "Das Gebäude steht im Guinness-Buch der Rekorde als das größte Gebäude, das eine Person allein errichtet hat.",
            "Bory nutzte Beton als modernes künstlerisches Medium, was zur damaligen Zeit revolutionär war.",
            "Die Burg beherbergt hunderte von Skulpturen, die fast alle von Jenő Bory selbst geschaffen wurden.",
            "In der 'Galerie der Frauen' sind Porträts und Statuen zu sehen, die seine Frau Ilona darstellen.",
            "Die Burg verfügt über sieben Türme und dreißig Räume unterschiedlicher Größe.",
            "Die Anlage wird heute noch von den Nachkommen der Familie Bory gepflegt und bewohnt.",
            "Die Bory-Burg gilt als eines der wichtigsten Beispiele für exzentrische Architektur in Mitteleuropa."
        ]
    },
    {
        "id": "historical-martonvasari-kastely-extra",
        "type": "historical",
        "parent": "HU-FE",
        "coords": [18.789, 47.319],
        "name": { "de": "Schloss Brunszvik", "hu": "Brunszvik-kastély", "ro": "Castelul Brunszvik", "en": "Brunszvik Mansion" },
        "description": {
            "de": "Ein neugotisches Schloss in Martonvásár, bekannt für seine Beethoven-Verbindungen.",
            "hu": "Neogótikus kastély Martonvásáron, amely Beethoven látogatásairól híres.",
            "ro": "Un castel neogotic în Martonvásár, cunoscut pentru legăturile cu Beethoven.",
            "en": "A Neo-Gothic mansion in Martonvásár, famous for its connections to Beethoven."
        },
        "facts": {
            "de": ["Beethoven-Gedenkmuseum.", "Prächtiger englischer Garten."],
            "hu": ["Beethoven Emlékmúzeum.", "Gyönyörű angolkert veszi körül."],
            "ro": ["Muzeu memorial Beethoven.", "Grădină englezească superbă."],
            "en": ["Beethoven Memorial Museum.", "Surrounded by a beautiful English garden."]
        },
        "descriptionAdvanced": "Das Schloss Brunszvik in Martonvásár ist ein prachtvolles Beispiel neugotischer Architektur und ein bedeutender Ort der Musikgeschichte. Das im 18. Jahrhundert ursprünglich barocke Gebäude erhielt Mitte des 19. Jahrhunderts sein heutiges romantisches Aussehen mit Zinnen und Spitzbogenfenstern. Weltberühmt ist das Schloss vor allem durch seine enge Verbindung zu Ludwig van Beethoven, der ein enger Freund der Familie Brunszvik war und das Anwesen mehrfach besuchte. Man sagt, dass Beethoven hier Inspiration für einige seiner berühmtesten Werke fand und eine tiefe Zuneigung zu den Brunszvik-Schwestern hegte. Heute beherbergt das Schloss ein faszinierendes Beethoven-Gedenkmuseum und das Forschungsinstitut für Agrarwissenschaften der Ungarischen Akademie der Wissenschaften. Umgeben ist das Gebäude von einem der schönsten englischen Landschaftsgärten Ungarns, dessen alter Baumbestand und idyllischer See zum Träumen einladen. Im Sommer bilden der Schlosshof und der Park eine zauberhafte Kulisse für hochkarätige Beethoven-Konzerte, die Musikliebhaber aus aller Welt anziehen.",
        "factsAdvanced": [
            "Das Schloss wurde ursprünglich im Barockstil erbaut und später im Tudor-Stil neugotisch umgestaltet.",
            "Ludwig van Beethoven besuchte Martonvásár zwischen 1800 und 1806 mehrmals.",
            "Einige Historiker vermuten, dass die 'Unsterbliche Geliebte' Beethovens eine der Brunszvik-Schwestern war.",
            "Im Schloss befindet sich das einzige Beethoven-Museum Ungarns mit wertvollen Originalmanuskripten.",
            "Der Schlosspark umfasst 70 Hektar und beherbergt seltene Baumarten wie Sumpfzypressen.",
            "Das Anwesen ist heute Sitz des Zentrums für Agrarforschung der Ungarischen Akademie der Wissenschaften.",
            "Im Sommer finden auf einer Insel im Schlosspark regelmäßig Open-Air-Konzerte mit Werken Beethovens statt.",
            "Brunszvik Teréz, die Tochter des Hauses, gründete 1828 in Ungarn den ersten Kindergarten Mitteleuropas."
        ]
    },
    {
        "id": "historical-nadasdy-kastely-extra",
        "type": "historical",
        "parent": "HU-FE",
        "coords": [18.254, 47.118],
        "name": { "de": "Schloss Nádasdy", "hu": "Nádasdy-kastély", "ro": "Castelul Nádasdy", "en": "Nádasdy Mansion" },
        "description": {
            "de": "Ein einzigartiges neugotisches Tudor-Schloss in Nádasdladány.",
            "hu": "Egyedülálló Tudor-stílusú neogótikus kastély Nádasdladányban.",
            "ro": "Un castel neogotic unic în stil Tudor, situat în Nádasdladány.",
            "en": "A unique Tudor-style Neo-Gothic mansion in Nádasdladány."
        },
        "facts": {
            "de": ["Historische Bibliothek.", "Stimmungsvoller Schlosspark."],
            "hu": ["Történelmi könyvtár.", "Hangulatos kastélypark."],
            "ro": ["Bibliotecă istorică.", "Parc de castel atmosferic."],
            "en": ["Historic library.", "Atmospheric castle park."]
        },
        "descriptionAdvanced": "Das Schloss Nádasdy in Nádasdladány ist ein einzigartiges architektonisches Juwel in Ungarn, da es konsequent im englischen Tudor-Stil errichtet wurde. Das im späten 19. Jahrhundert erbaute Schloss strahlt den Charme eines britischen Landsitzes aus und war für seine Zeit technisch hochmodern ausgestattet. Die Familie Nádasdy wollte mit diesem Bau an ihre glorreiche Vergangenheit anknüpfen und schuf ein Gebäude von außergewöhnlicher Eleganz und Detailtreue. Besonders beeindruckend ist der Ahnensaal mit seinen lebensgroßen Porträts und der prächtig geschnitzten Holzdecke. Auch die Bibliothek, die einen bedeutenden Teil der Familiensammlung beherbergt, zeugt von der hohen Kultur der Besitzer. Das Schloss ist von einem weitläufigen Park umgeben, der mit seinem künstlichen See und den verschlungenen Wegen perfekt zur romantischen Architektur passt. Nach einer umfassenden Restaurierung in den letzten Jahren erstrahlt das Schloss wieder in altem Glanz und bietet Besuchern die Möglichkeit, in die aristokratische Welt des späten 19. Jahrhunderts einzutauchen.",
        "factsAdvanced": [
            "Das Schloss wurde zwischen 1873 und 1876 nach Plänen von István Linzbauer erbaut.",
            "Es ist das einzige Schloss in Ungarn, das im romantischen englischen Tudor-Stil errichtet wurde.",
            "Das Gebäude verfügte bereits bei seiner Fertigstellung über moderne Annehmlichkeiten wie Gasbeleuchtung und Telefon.",
            "Der Ahnensaal ist mit aufwendigen Holzschnitzereien und Porträts der Familie Nádasdy geschmückt.",
            "Die Bibliothek des Schlosses ist eine der wenigen aristokratischen Sammlungen, die den Zweiten Weltkrieg überstanden haben.",
            "In den Mauern des Schlosses befindet sich eine Kapelle, die der Heiligen Helena gewidmet ist.",
            "Der Schlosspark wurde als englischer Landschaftsgarten mit einem malerischen Teich angelegt.",
            "Das Schloss diente aufgrund seiner einzigartigen Architektur bereits mehrfach als Kulisse für Filmproduktionen."
        ]
    },
    {
        "id": "animal-habitat-velencei-madarrezervatum-extra",
        "type": "animal-habitat",
        "parent": "HU-FE",
        "coords": [18.577, 47.195],
        "name": { "de": "Vogelreservat Velence-See", "hu": "Velencei-tavi Madárrezervátum", "ro": "Rezervația de Păsări de la Lacul Velence", "en": "Velence Lake Bird Sanctuary" },
        "description": {
            "de": "Ein geschütztes Feuchtgebiet am Velence-See, Heimat zahlreicher Wasservögel.",
            "hu": "Védett vizes élőhely a Velencei-tó nyugati részén, számos vízimadár otthona.",
            "ro": "O zonă umedă protejată la Lacul Velence, casă pentru numeroase păsări de apă.",
            "en": "A protected wetland on Lake Velence, home to numerous water birds."
        },
        "facts": {
            "de": ["Sperrgebiet für Besucher.", "Wichtiger Rastplatz."],
            "hu": ["Látogatástól elzárt terület.", "Fontos vonulóhely."],
            "ro": ["Zonă restricționată vizitatorilor.", "Loc important de popas."],
            "en": ["Restricted area for visitors.", "Important migratory stopover."]
        },
        "descriptionAdvanced": "Das Vogelreservat am Velence-See ist ein Naturparadies von internationaler Bedeutung und ein Rückzugsort für zahlreiche bedrohte Vogelarten. Es erstreckt sich über den westlichen, stark verschilften Teil des Sees und bietet ideale Brut- und Rastbedingungen. Das Reservat ist Teil des Natura-2000-Netzwerks und steht unter strengem Schutz, um das empfindliche Ökosystem zu bewahren. Besucher können hier seltene Vögel wie den Silberreiher, den Löffler und verschiedene Rohrsängerarten beobachten. Besonders während des Vogelzugs im Frühjahr und Herbst dient der See als lebenswichtiger Rastplatz für tausende Zugvögel auf ihrem Weg zwischen Europa und Afrika. Die weiten Schilfflächen und die flachen Wasserbereiche sind nicht nur ökologisch wertvoll, sondern strahlen auch eine tiefe Ruhe aus. Von speziellen Aussichtstürmen am Rande des Reservats aus können Naturfreunde und Fotografen die faszinierende Vogelwelt beobachten, ohne die Tiere in ihrem natürlichen Lebensraum zu stören. Das Reservat ist ein lebendiges Beispiel für erfolgreichen Naturschutz in der ungarischen Kulturlandschaft.",
        "factsAdvanced": [
            "Das Reservat wurde 1958 gegründet, um die einzigartige Flora und Fauna des Velence-Sees zu schützen.",
            "Es umfasst eine Fläche von rund 420 Hektar im westlichen Teil des Sees.",
            "Über 200 verschiedene Vogelarten wurden in dem Gebiet bereits nachgewiesen.",
            "Das Reservat ist als international bedeutendes Feuchtgebiet nach der Ramsar-Konvention geschützt.",
            "Die dichten Schilfbestände bieten Schutz für seltene Arten wie die Rohrdommel und die Rohrweihe.",
            "Ein Teil des Reservats ist für die Öffentlichkeit gesperrt, um die Brutgeschäfte der Vögel nicht zu stören.",
            "Der Velence-See ist einer der wärmsten Seen Europas, was die biologische Vielfalt zusätzlich begünstigt.",
            "Naturkundliche Führungen werden am Rande des Reservats angeboten, um Besuchern die Ökologie näherzubringen."
        ]
    },
    {
        "id": "industry-dunaujvarosi-vasmu-extra",
        "type": "industry",
        "parent": "HU-FE",
        "coords": [18.932, 46.945],
        "name": { "de": "Hüttenwerk Dunaújváros", "hu": "Dunaújvárosi Vasmű", "ro": "Combinatul Siderurgic Dunaújváros", "en": "Dunaujvaros Steel Works" },
        "description": {
            "de": "Das größte Stahlwerk Ungarns, das Herz der Industriestadt Dunaújváros.",
            "hu": "Magyarország legnagyobb vasműve, Dunaújváros ipari központja.",
            "ro": "Cel mai mare combinat siderurgic din Ungaria, inima oraului industrial Dunaújváros.",
            "en": "Hungary's largest steel works, the heart of the industrial city Dunaujvaros."
        },
        "facts": {
            "de": ["In den 1950ern gebaut.", "Enorme Produktionskapazität."],
            "hu": ["Az 1950-es években épült.", "Hatalmas termelési kapacitás."],
            "ro": ["Construit în anii 1950.", "Capacitate uriașă de producție."],
            "en": ["Built in the 1950s.", "Enormous production capacity."]
        },
        "descriptionAdvanced": "Das Hüttenwerk in Dunaújváros, heute als Dunaferr bekannt, ist das größte integrierte Stahlwerk Ungarns und das industrielle Herz der Stadt. Es wurde in den 1950er Jahren als monumentales Projekt der sozialistischen Industrialisierung gegründet, wobei die Stadt Dunaújváros (damals Sztálinváros) eigens um das Werk herum geplant wurde. Der Komplex umfasst den gesamten Produktionsprozess von der Roheisenerzeugung bis hin zu gewalzten Stahlprodukten. Über Jahrzehnte hinweg war das Werk der wichtigste Lieferant für die ungarische Maschinenbau- und Bauindustrie. Die riesigen Hochöfen, Kokereien und Walzwerke prägen das Stadtbild und zeugen von der gewaltigen Dimension der schweren Industrie. Trotz der Herausforderungen des wirtschaftlichen Wandels bleibt das Werk ein entscheidender Arbeitgeber in der Region. In den letzten Jahren wurden Anstrengungen unternommen, um die Produktion effizienter und umweltfreundlicher zu gestalten. Das Hüttenwerk ist nicht nur ein Industriestandort, sondern auch ein historisches Zeugnis einer Ära, die Ungarn nachhaltig geprägt hat.",
        "factsAdvanced": [
            "Die Grundsteinlegung für das kombinat erfolgte im Jahr 1950 im Rahmen des ersten Fünfjahresplans.",
            "Dunaújváros war die erste planmäßig angelegte sozialistische Industriestadt in Ungarn.",
            "Das Werk verfügt über einen eigenen Donauhafen für den Import von Eisenerz und Kohle.",
            "Auf dem Höhepunkt der Produktion beschäftigte das Unternehmen über 10.000 Mitarbeiter.",
            "Die hier produzierten Stahlbleche werden unter anderem in der Automobilindustrie und im Schiffsbau verwendet.",
            "Das Werk umfasst ein Gelände von mehreren hundert Hektar mit einem eigenen internen Schienennetz.",
            "Im Werk befindet sich eine eigene Berufsschule, die Fachkräfte für die Metallurgie ausbildet.",
            "Das Hüttenwerk spielt eine zentrale Rolle für die Energieversorgung der Stadt durch Abwärmenutzung."
        ]
    },
    {
        "id": "historical-pannonhalmi-apatsag-extra",
        "type": "historical",
        "parent": "HU-GS",
        "coords": [17.761, 47.552],
        "name": { "de": "Erzabtei Pannonhalma", "hu": "Pannonhalmi Főapátság", "ro": "Abatia Pannonhalma", "en": "Pannonhalma Archabbey" },
        "description": {
            "de": "Ein UNESCO-Weltkulturerbe und spirituelles Zentrum der ungarischen Benediktiner.",
            "hu": "UNESCO világörökségi helyszín, a magyar bencések szellemi központja.",
            "ro": "Sit al patrimoniului mondial UNESCO și centrul spiritual al benedictinilor maghiari.",
            "en": "A UNESCO World Heritage site and the spiritual center of Hungarian Benedictines."
        },
        "facts": {
            "de": ["Über 1000 Jahre alt.", "Berühmte Bibliothek."],
            "hu": ["Több mint 1000 éves.", "Híres könyvtárral rendelkezik."],
            "ro": ["Vechime de peste 1000 de ani.", "Bibliotecă celebră."],
            "en": ["Over 1000 years old.", "Features a famous library."]
        },
        "descriptionAdvanced": "Die Erzabtei Pannonhalma ist eines der ältesten und bedeutendsten historischen Denkmäler Ungarns und ein lebendiges Zentrum des Benediktinerordens. Auf dem 'Heiligen Berg von Pannonia' gelegen, blickt das Kloster auf eine über tausendjährige Geschichte zurück, die eng mit der Gründung des ungarischen Staates verbunden ist. Die Abtei vereint meisterhaft verschiedene Baustile, von der romanischen Krypta über die gotische Basilika bis hin zum klassizistischen Bibliotheksturm. Besonders berühmt ist die monumentale Bibliothek mit über 400.000 Bänden und der Gründungsurkunde der Abtei aus dem Jahr 1001. Die Erzabtei ist seit 1996 UNESCO-Weltkulturerbe und zieht Pilger sowie Touristen gleichermaßen an. Neben der geistlichen Arbeit widmen sich die Mönche heute auch dem Weinbau, der Kräuterkunde und der Bildung im angeschlossenen Gymnasium. Der Blick von den Klostermauern über die hügelige Landschaft ist atemberaubend und unterstreicht die Erhabenheit dieses Ortes, der Tradition und Moderne auf einzigartige Weise verbindet.",
        "factsAdvanced": [
            "Die Abtei wurde im Jahr 996 vom Fürsten Géza, dem Vater des heiligen Stephan, gegründet.",
            "Sie ist das spirituelle Zentrum des Benediktinerordens in Ungarn und eine eigenständige Diözese.",
            "In der Bibliothek wird das älteste schriftliche Denkmal der ungarischen Sprache, die Stiftungsurkunde von Tihany, aufbewahrt.",
            "Die heutige Basilika St. Martin wurde im 13. Jahrhundert im frühgotischen Stil erbaut.",
            "Das Kloster beherbergt ein renommiertes Internatsgymnasium, das zu den besten Schulen des Landes zählt.",
            "Pannonhalma betreibt eine eigene Weinkellerei, die die jahrhundertealte Weinbautradition der Mönche fortsetzt.",
            "Die Abtei verfügt über einen bedeutenden botanischen Garten (Arboretum) mit seltenen Heilpflanzen.",
            "Seit 1996 gehört die gesamte Anlage zum UNESCO-Weltkulturerbe."
        ]
    },
    {
        "id": "historical-soproni-tuztorony-extra",
        "type": "historical",
        "parent": "HU-GS",
        "coords": [16.591, 47.685],
        "name": { "de": "Soproner Feuerturm", "hu": "Soproni Tűztorony", "ro": "Turnul de Foc din Sopron", "en": "Sopron Fire Tower" },
        "description": {
            "de": "Das Wahrzeichen von Sopron, erbaut auf römischen Fundamenten.",
            "hu": "Sopron városának jelképe, amely római kori alapokra épült.",
            "ro": "Simbolul oraului Sopron, construit pe fundații romane.",
            "en": "The landmark of Sopron, built on Roman foundations."
        },
        "facts": {
            "de": ["Blick auf die Alpen.", "Tor der Treue."],
            "hu": ["Kilátás az Alpokra.", "A Hűség Kapuja található alatta."],
            "ro": ["Vedere spre Alpi.", "Sub el se află Poarta Fidelității."],
            "en": ["View of the Alps.", "The Gate of Loyalty is located below it."]
        },
        "descriptionAdvanced": "Der Feuerturm in Sopron ist das unbestrittene Wahrzeichen der Stadt und ein faszinierendes Zeugnis ihrer wechselvollen Geschichte. Er wurde auf den Fundamenten der antiken römischen Stadtmauer errichtet und vereint in seiner Architektur Elemente aus verschiedenen Epochen, von der Gotik bis zum Barock. Ursprünglich diente der Turm der Überwachung der Stadt; die Wächter hielten Ausschau nach Bränden und kündigten die Ankunft fremder Händler oder hoher Gäste mit Fanfarenklängen an. Das untere quadratische Teil des Turms ist mittelalterlich, während der obere, mit einer Laterne gekrönte Teil nach dem großen Stadtbrand von 1676 in seiner heutigen barocken Form entstand. Besonders symbolträchtig ist das 'Tor der Treue' am Fuße des Turms, das an die Volksabstimmung von 1921 erinnert, bei der sich die Bürger für den Verbleib bei Ungarn entschieden. Wer die 119 Stufen zur Aussichtsplattform erklimmt, wird mit einem herrlichen Blick über die mittelalterliche Altstadt von Sopron bis hin zu den Ausläufern der Alpen belohnt.",
        "factsAdvanced": [
            "Der Turm steht auf den Überresten eines quadratischen römischen Torturms aus dem 4. Jahrhundert.",
            "Nach dem großen Brand von 1676 wurde der Turm im Barockstil mit einer charakteristischen Haube wiederaufgebaut.",
            "Das 'Tor der Treue' (Civitas Fidelissima) wurde 1922 zum Gedenken an den Anschluss an Ungarn errichtet.",
            "Die Turmwächter hatten früher die Aufgabe, bei Feuer Signale mit Laternen oder Fahnen zu geben.",
            "Die Gesamthöhe des Turms beträgt 58 Meter, und man muss 119 Stufen zur Galerie hinaufsteigen.",
            "Das Glockenspiel des Turms spielt regelmäßig Melodien, die eng mit der Geschichte der Stadt verbunden sind.",
            "An der Fassade des Turms sind verschiedene Wappen der Stadt und bedeutender Adelsfamilien zu sehen.",
            "Der Turm dient heute als Museum, das Einblicke in die Stadtbefestigung und die Geschichte von Sopron bietet."
        ]
    },
    {
        "id": "historical-nagycenki-szechenyi-kastely-extra",
        "type": "historical",
        "parent": "HU-GS",
        "coords": [16.705, 47.608],
        "name": { "de": "Schloss Széchenyi Nagycenk", "hu": "Nagycenki Széchenyi-kastély", "ro": "Castelul Széchenyi din Nagycenk", "en": "Szechenyi Mansion Nagycenk" },
        "description": {
            "de": "Der ehemalige Wohnsitz von István Széchenyi, dem 'größten Ungarn'.",
            "hu": "Széchenyi István, a 'legnagyobb magyar' egykori lakhelye.",
            "ro": "Fosta reședință a lui István Széchenyi, 'cel mai mare maghiar'.",
            "en": "The former residence of István Széchenyi, the 'Greatest Hungarian'."
        },
        "facts": {
            "de": ["Gedenkmuseum.", "Prachtvolle Lindenallee."],
            "hu": ["Emlékmúzeum működik benne.", "Gyönyörű hárfasor vezet hozzá."],
            "ro": ["Muzeu memorial.", "Alee de tei superbă."],
            "en": ["Memorial museum.", "Magnificent linden alley leads to it."]
        },
        "descriptionAdvanced": "Das Schloss Széchenyi in Nagycenk ist ein Ort von höchster nationaler Bedeutung in Ungarn, da es der Wohnsitz von Graf István Széchenyi war, den man den 'größten Ungarn' nennt. Das im klassizistischen Stil erbaut Schloss strahlt eine vornehme Zurückhaltung aus und spiegelt den Geist seines berühmten Bewohners wider, der das Land im 19. Jahrhundert entscheidend modernisierte. Heute beherbergt das Gebäude das István-Széchenyi-Gedenkmuseum, das das Leben und Wirken des Grafen, seine Reformideen und seine technischen Errungenschaften, wie den Bau der Kettenbrücke, dokumentiert. Besonders beeindruckend ist die prachtvolle, 2,6 Kilometer lange Lindenallee, die direkt zum Schloss führt und bereits im 18. Jahrhundert angelegt wurde. In der Nähe des Schlosses befindet sich auch das Mausoleum der Familie Széchenyi, ein bedeutender Wallfahrtsort für viele Ungarn. Die gesamte Anlage, eingebettet in einen ruhigen Park, ist ein Symbol für Patriotismus, Fortschritt und das kulturelle Erbe der Reformzeit, das bis heute die Identität des Landes prägt.",
        "factsAdvanced": [
            "Das Schloss war der Stammsitz der Familie Széchenyi und wurde im 18. Jahrhundert errichtet.",
            "Graf István Széchenyi führte hier im Jahr 1827 das erste moderne Badezimmer Ungarns ein.",
            "Die berühmte Lindenallee besteht aus über 400 Bäumen und wurde von Széchenyis Vorfahren gepflanzt.",
            "Das Museum im Schloss zeigt persönliche Gegenstände des Grafen und Modelle seiner technischen Projekte.",
            "In der Schlosskapelle befindet sich eine wertvolle Orgel, auf der schon berühmte Musiker spielten.",
            "Das Mausoleum in Nagycenk ist die letzte Ruhestätte von István Széchenyi und seiner Frau.",
            "In unmittelbarer Nähe befindet sich eine historische Museumsbahn, die besonders bei Familien beliebt ist.",
            "Das Schlossensemble gehört seit 2001 zum UNESCO-Welterbe der Kulturlandschaft Fertő/Neusiedler See."
        ]
    },
    {
        "id": "animal-habitat-ferto-hansag-park-extra",
        "type": "animal-habitat",
        "parent": "HU-GS",
        "coords": [16.820, 47.660],
        "name": { "de": "Nationalpark Fertő-Hanság", "hu": "Fertő-Hanság Nemzeti Park", "ro": "Parcul Național Fertő-Hanság", "en": "Ferto-Hansag National Park" },
        "description": {
            "de": "Ein grenzüberschreitender Nationalpark, der den Neusiedler See und seine Sümpfe schützt.",
            "hu": "Határon átnyúló nemzeti park, amely a Fertő-tavat és a Hanság mocsárvilágát védi.",
            "ro": "Un parc național transfrontalier care protejează Lacul Neusiedler și mlaștinile Hanság.",
            "en": "A cross-border national park protecting Lake Neusiedler and the Hanság marshlands."
        },
        "facts": {
            "de": ["UNESCO-Welterbe.", "Seltene Wasservögel."],
            "hu": ["Világörökségi helyszín.", "Ritka vízimadarak élnek itt."],
            "ro": ["Patrimoniu UNESCO.", "Păsări de apă rare."],
            "en": ["UNESCO World Heritage site.", "Home to rare water birds."]
        },
        "descriptionAdvanced": "Der Nationalpark Fertő-Hanság umfasst die einzigartige Seenlandschaft des Neusiedler Sees und die geheimnisvolle Sumpfwelt des Hanság. Als grenzüberschreitender Nationalpark mit Österreich schützt er ein Ökosystem, das aufgrund seiner Lage am Übergang zwischen Alpenausläufern und ungarischer Tiefebene eine außergewöhnliche Artenvielfalt beherbergt. Der Neusiedler See ist ein Steppensee mit ausgedehnten Schilfgürteln, die als Kinderstube für unzählige Fisch- und Vogelarten dienen. Im Hanság-Gebiet dominieren Feuchtwiesen und Moorwälder, in denen seltene Pflanzenarten wie das Sumpf-Knabenkraut gedeihen. Der Park ist ein Paradies für Vogelbeobachter, da hier Arten wie der Große Trapp, der Seeadler und tausende von Gänsen leben. Besucher können die Natur auf zahlreichen Lehrpfaden, mit dem Fahrrad oder bei geführten Kanutouren durch das Schilflabyrinth entdecken. Die harmonische Verbindung von Natur und jahrhundertealter Kulturlandschaft macht den Nationalpark zu einem der wertvollsten Schutzgebiete in ganz Mitteleuropa.",
        "factsAdvanced": [
            "Der Nationalpark wurde 1991 gegründet und war der erste grenzüberschreitende Nationalpark Ungarns.",
            "Das Gebiet des Fertő-Sees ist seit 2001 Teil des UNESCO-Welterbes.",
            "Der Neusiedler See ist nach dem Plattensee der zweitgrößte Steppensee Mitteleuropas.",
            "Im Nationalpark leben seltene ungarische Haustierrassen wie das Graurind und das Wasserbüffel.",
            "Das Schilfgürtel des Sees ist stellenweise bis zu fünf Kilometer breit.",
            "Der Nationalpark ist ein wichtiger Rastplatz auf der europäischen Vogelzuglinie zwischen Nord und Süd.",
            "Im Hanság-Gebiet werden Anstrengungen zur Wiederherstellung der ursprünglichen Sumpflandschaft unternommen.",
            "Es gibt mehrere Besucherzentren, wie das 'Haus am See' in Sarród, die Ausstellungen zur Natur bieten."
        ]
    },
    {
        "id": "industry-audi-gyor-extra",
        "type": "industry",
        "parent": "HU-GS",
        "coords": [17.685, 47.695],
        "name": { "de": "Audi Hungaria Győr", "hu": "Audi Hungaria Győr", "ro": "Audi Hungaria Győr", "en": "Audi Hungaria Győr" },
        "description": {
            "de": "Eines der größten Motorenwerke der Welt und ein bedeutendes Fahrzeugwerk.",
            "hu": "A világ egyik legnagyobb motorgyára és jelentős járműgyártó központ.",
            "ro": "Una dintre cele mai mari fabrici de motoare din lume și un centru auto major.",
            "en": "One of the world's largest engine plants and a major automobile manufacturing hub."
        },
        "facts": {
            "de": ["Seit 1993 in Győr.", "Exportiert weltweit."],
            "hu": ["1993 óta működik Győrben.", "Világszerte exportál termékeket."],
            "ro": ["În Győr din 1993.", "Exportă în toată lumea."],
            "en": ["In Győr since 1993.", "Exports products worldwide."]
        },
        "descriptionAdvanced": "Audi Hungaria in Győr ist einer der größten und modernsten Industriekomplexe weltweit und das Rückgrat der ungarischen Exportwirtschaft. Seit seiner Gründung im Jahr 1993 hat sich der Standort zum größten Motorenwerk der Welt entwickelt, das fast die gesamte Palette der Audi- und Volkswagen-Modelle beliefert. Neben der Motorenproduktion verfügt Győr auch über ein komplettes Fahrzeugwerk, in dem unter anderem die Modelle Audi Q3 und TT gefertigt werden. Das Werk zeichnet sich durch höchste technologische Standards, innovative Produktionsmethoden und eine starke Ausrichtung auf die Elektromobilität aus. Tausende hochqualifizierte Ingenieure und Facharbeiter sorgen dafür, dass täglich tausende Motoren und Fahrzeuge den Standort verlassen. Audi Hungaria ist zudem ein wichtiger Partner der Wissenschaft und arbeitet eng mit der regionalen Universität zusammen. Die Ansiedlung von Audi hat Győr zu einer der wohlhabendsten und dynamischsten Städte Ungarns gemacht und die gesamte Region zu einem globalen Zentrum der Automobilindustrie transformiert.",
        "factsAdvanced": [
            "Audi Hungaria wurde 1993 gegründet und startete zunächst als reines Motorenwerk.",
            "Der Standort in Győr ist heute das größte Motorenwerk der Welt.",
            "Seit 1998 werden in Győr auch komplette Fahrzeuge produziert, beginnend mit dem Audi TT.",
            "Das Werk verfügt über eine der größten Photovoltaik-Dachanlagen Europas zur nachhaltigen Energiegewinnung.",
            "Audi ist der größte Exporteur Ungarns und einer der bedeutendsten Arbeitgeber des Landes.",
            "Das Unternehmen betreibt in Győr ein eigenes Werkzeugbau-Zentrum für internationale Projekte.",
            "In Zusammenarbeit mit der Universität Győr wurde ein Lehrstuhl für Fahrzeugtechnik etabliert.",
            "Das Werk in Győr ist seit 2020 bilanziell CO2-neutral in seiner Produktion."
        ]
    },
    {
        "id": "historical-debreceni-egyetem-extra",
        "type": "historical",
        "parent": "HU-HB",
        "coords": [21.623, 47.554],
        "name": { "de": "Universität Debrecen", "hu": "Debreceni Egyetem főépület", "ro": "Universitatea din Debrecen", "en": "University of Debrecen Main Building" },
        "description": {
            "de": "Das monumentale Hauptgebäude einer der ältesten Universitäten Ungarns.",
            "hu": "Magyarország egyik legrégebbi egyetemének monumentális főépülete.",
            "ro": "Clădirea principală monumentală a uneia dintre cele mai vechi universități din Ungaria.",
            "en": "The monumental main building of one of Hungary's oldest universities."
        },
        "facts": {
            "de": ["Imposanter Vorplatz.", "Historische Glasmalereien."],
            "hu": ["Impozáns előtérrel rendelkezik.", "Történelmi üvegablakok."],
            "ro": ["Piață monumentală în față.", "Vitralii istorice."],
            "en": ["Imposing front square.", "Historic stained glass windows."]
        },
        "descriptionAdvanced": "Das Hauptgebäude der Universität Debrecen ist ein architektonisches Monument und ein Wahrzeichen der 'kalvinistischen Metropole'. Das im neobarocken Stil errichtete Gebäude beeindruckt durch seine monumentale Größe, die prachtvolle Fassade und den weitläufigen Vorplatz mit seinem kunstvollen Springbrunnen. Die Universität blickt auf eine Tradition zurück, die bis zum Reformierten Kollegium im 16. Jahrhundert reicht, und ist heute eine der führenden Bildungseinrichtungen des Landes. Besonders sehenswert ist der glasüberdachte Innenhof, der als Aula dient und einen majestätischen Rahmen für akademische Feierlichkeiten bietet. Die Universität ist nicht nur ein Ort des Lernens, sondern auch ein kulturelles Zentrum mit einer bedeutenden Bibliothek und botanischen Gärten. Die Statuen bedeutender Gelehrter auf dem Campus zeugen vom intellektuellen Erbe der Stadt. Als eine der ältesten kontinuierlich betriebenen Hochschulen Ungarns verbindet die Universität Debrecen historische Pracht mit modernster Forschung und Lehre auf internationalem Niveau.",
        "factsAdvanced": [
            "Das monumentale Hauptgebäude wurde im Jahr 1932 in Anwesenheit des Reichsverwesers eingeweiht.",
            "Die Universität geht auf das 1538 gegründete Reformierte Kollegium von Debrecen zurück.",
            "Die Aula im Innenhof ist 700 Quadratmeter groß und wird von einer beeindruckenden Glaskuppel gekrönt.",
            "Hinter dem Hauptgebäude erstreckt sich der Botanische Garten der Universität mit über 5.000 Pflanzenarten.",
            "Die Universitätsbibliothek von Debrecen ist die größte Provinzbibliothek des Landes.",
            "An der Fassade befinden sich Reliefs, die die Geschichte der Fakultäten und der Stadt darstellen.",
            "Debrecen ist die zweitgrößte Stadt Ungarns und wird oft als 'Rom des Kalvinismus' bezeichnet.",
            "Die Universität beherbergt Studenten aus over 100 Nationen, was sie zu einem internationalen Zentrum macht."
        ]
    },
    {
        "id": "historical-hortobagyi-pasztormuzeum-extra",
        "type": "historical",
        "parent": "HU-HB",
        "coords": [21.148, 47.581],
        "name": { "de": "Hirtenmuseum Hortobágy", "hu": "Hortobágyi Pásztormúzeum", "ro": "Muzeul Păstorilor din Hortobágy", "en": "Hortobagy Shepherd Museum" },
        "description": {
            "de": "Ein Museum, das das traditionelle Leben der Hirten in der Puszta präsentiert.",
            "hu": "A pusztai pásztorélet hagyományait bemutató múzeum.",
            "ro": "Un muzeu care prezintă viața tradițională a păstorilor din Puszta.",
            "en": "A museum showcasing the traditional lifestyle of shepherds in the Puszta."
        },
        "facts": {
            "de": ["In einem alten Stall.", "Ganzjährig geöffnet."],
            "hu": ["Egy régi szekérállásban van.", "Egész évben látogatható."],
            "ro": ["Într-un vechi grajd.", "Deschis tot anul."],
            "en": ["Housed in an old stable.", "Open all year round."]
        },
        "descriptionAdvanced": "Das Hirtenmuseum in Hortobágy ist das Herzstück des Nationalparks und vermittelt einen tiefen Einblick in das traditionelle Leben in der ungarischen Puszta. Es ist in einem historischen Gebäude untergebracht, das früher als Remise für Pferdefuhrwerke diente. Die Ausstellungen zeigen die jahrhundertealte Kultur der Hirten, ihre kunstvoll gefertigten Gebrauchsgegenstände, Trachten und die Hierarchie innerhalb der Hirtengemeinschaft. Besucher erfahren hier, wie die Menschen im Einklang mit der rauen Natur der Tiefebene lebten und ihre Herden aus Graurindern, Zackelschafen und Pferden hüteten. Die Puszta von Hortobágy ist UNESCO-Welterbe, und das Museum erklärt die Bedeutung dieser einzigartigen Kulturlandschaft. Durch lebensnahe Dioramen und historische Fotografien wird die Vergangenheit lebendig und vermittelt den Stolz und die Freiheit des Hirtenlebens. Direkt neben dem Museum befindet sich die berühmte 'Neunbögige Brücke', das Wahrzeichen der Region, was den Ort zu einem unverzichtbaren Ziel für jeden Besucher der Puszta macht.",
        "factsAdvanced": [
            "Das Museum ist in einem denkmalgeschützten Gebäude aus dem 18. Jahrhundert untergebracht.",
            "Hortobágy ist die größte zusammenhängende natürliche Grassteppe (Puszta) in Mitteleuropa.",
            "Die Ausstellung dokumentiert die verschiedenen Hirtengruppen wie Csikós (Pferdehirten) und Gulyás (Rinderhirten).",
            "Besonders sehenswert sind die handgeschnitzten Trinkhörner und die berühmten ungarischen Hirtenmäntel (Suba).",
            "Hortobágy wurde 1999 aufgrund seiner einzigartigen Hirtenkultur in die Liste des UNESCO-Welterbes aufgenommen.",
            "In der Nähe des Museums findet jährlich der traditionelle Brückenmarkt statt.",
            "Das Museum bietet interaktive Elemente, die zeigen, wie Hirten in der weiten Ebene navigierten.",
            "Hortobágy ist auch für seine traditionellen Gasthöfe (Csárda) bekannt, die regionale Spezialitäten anbieten."
        ]
    },
    {
        "id": "historical-deri-muzeum-extra",
        "type": "historical",
        "parent": "HU-HB",
        "coords": [21.622, 47.532],
        "name": { "de": "Déri-Museum", "hu": "Déri Múzeum", "ro": "Muzeul Déri", "en": "Déri Museum" },
        "description": {
            "de": "Ein bedeutendes Museum in Debrecen, bekannt für die Munkácsy-Trilogie.",
            "hu": "Debrecen jelentős múzeuma, híres a Munkácsy-trilógiáról.",
            "ro": "Un muzeu important din Debrecen, celebru pentru trilogia lui Munkácsy.",
            "en": "A significant museum in Debrecen, famous for the Munkácsy trilogy."
        },
        "facts": {
            "de": ["Reiche Sammlungen.", "Ägyptische Ausstellung."],
            "hu": ["Gazdag gyűjtemények.", "Egyiptomi kiállítással."],
            "ro": ["Colecții bogate.", "Expoziție egipteană."],
            "en": ["Rich collections.", "Features an Egyptian exhibition."]
        },
        "descriptionAdvanced": "Das Déri-Museum in Debrecen gehört zu den bedeutendsten Kultureinrichtungen Ungarns und ist weltberühmt für seine einzigartige Sammlung. Das prachtvolle Gebäude im neoklassizistischen Stil beherbergt Schätze aus verschiedensten Epochen und Weltkulturen. Das absolute Highlight des Museums ist die monumentale Christus-Trilogie des ungarischen Malers Mihály Munkácsy, deren gewaltige Leinwände in einem speziell dafür errichteten Saal die Besucher in ihren Bann ziehen. Neben dieser nationalen Kostbarkeit bietet das Museum faszinierende Einblicke in die altägyptische Kultur, das Handwerk der Region und die Stadtgeschichte von Debrecen. Die Schenkung des Seidenfabrikanten Frigyes Déri bildete den Grundstock für die vielfältigen Exponate, die von Samurai-Rüstungen bis hin zu archäologischen Funden aus der Puszta reichen. Das Museum ist ein Ort der Staunens und der Bildung, der die lokale Identität mit der Weltgeschichte verknüpft und durch seine abwechslungsreiche Gestaltung Besucher jeden Alters begeistert.",
        "factsAdvanced": [
            "Das Museum wurde 1930 eröffnet und basiert auf der privaten Schenkung von Frigyes Déri.",
            "Mihály Munkácsys Trilogie (Christus vor Pilatus, Ecce Homo, Golgatha) ist das Herzstück der Ausstellung.",
            "Die ägyptische Abteilung zeigt zwei echte Mumien und wertvolle Grabbeigaben.",
            "Vor dem Museum stehen vier preisgekrönte Bronzestatuen des Bildhauers Ferenc Medgyessy.",
            "Die ethnografische Sammlung präsentiert die traditionelle Handwerkskunst der Region Hajdúság.",
            "Das Gebäude wurde nach den Plänen der Architekten Dénes Györgyi und Aladár Münnich errichtet.",
            "Im Museum befindet sich auch eine bedeutende numismatische Sammlung mit seltenen Münzen.",
            "Regelmäßig finden moderne Wechselausstellungen statt, die einen Bogen zur Gegenwart schlagen."
        ]
    },
    {
        "id": "animal-habitat-nagyerdei-kulturpark-extra",
        "type": "animal-habitat",
        "parent": "HU-HB",
        "coords": [21.635, 47.550],
        "name": { "de": "Kulturpark Debrecen", "hu": "Nagyerdei Kultúrpark", "ro": "Parcul de Cultură Debrecen", "en": "Nagyerdei Culture Park" },
        "description": {
            "de": "Kombination aus Zoo und Vergnügungspark im großen Wald von Debrecen.",
            "hu": "Állatkert és vidámpark ötvözete Debrecenben, a Nagyerdő szívében.",
            "ro": "Combinație de grădină zoologică și parc de distracții în Pădurea Mare.",
            "en": "A combination of a zoo and an amusement park in the heart of the Great Forest."
        },
        "facts": {
            "de": ["1958 eröffnet.", "Über 160 Tierarten."],
            "hu": ["1958-ban nyílt meg.", "Több mint 160 állatfaj."],
            "ro": ["Deschis în 1958.", "Peste 160 de specii de animale."],
            "en": ["Opened in 1958.", "Home to over 160 animal species."]
        },
        "descriptionAdvanced": "Der Kulturpark im Großen Wald von Debrecen (Nagyerdei Kultúrpark) ist eine einzigartige Kombination aus einem Zoologischen Garten und einem Vergnügungspark. Er war die erste Einrichtung dieser Art in der ungarischen Provinz und liegt inmitten eines jahrhundertealten Naturschutzgebietes. Der Zoo beherbergt eine Vielzahl von Tierarten aus allen Kontinenten, wobei ein Schwerpunkt auf dem Erhalt bedrohter Arten und der Umweltbildung liegt. Besonders beliebt ist die Afrikasavanne und das Tropenhaus. Direkt nebenan bietet der Vergnügungspark mit seinen historischen und modernen Fahrgeschäften Spaß für die ganze Familie. Die schattigen Wege unter den alten Eichen des Großen Waldes machen den Besuch auch an heißen Sommertagen sehr angenehm. Der Park ist ein traditionsreicher Ort der Erholung für die Bewohner von Debrecen und bietet eine harmonische Mischung aus Naturerlebnis, Tierbeobachtung und Unterhaltung. Regelmäßige Veranstaltungen wie die 'Nacht im Zoo' machen den Park zu einem lebendigen Zentrum für Freizeit und Bildung.",
        "factsAdvanced": [
            "Der Zoo von Debrecen wurde 1958 als erster Zoo außerhalb der Hauptstadt Budapest eröffnet.",
            "Der Park erstreckt sich über eine Fläche von rund 17 Hektar im geschützten Großen Wald.",
            "Es werden over 160 Tierarten gezeigt, darunter seltene Giraffen, Tiger und Rote Pandas.",
            "Der angeschlossene Vergnügungspark verfügt über nostalgische Karussells aus den 1950er Jahren.",
            "Der Nagyerdei Kultúrpark ist Mitglied in den wichtigsten internationalen Zoo-Vereinigungen (EAZA, WAZA).",
            "Ein besonderes Highlight ist das jährliche Blumenkarneval-Wochenende im August.",
            "Der Park legt großen Wert auf pädagogische Programme und besitzt eine eigene Zooschule.",
            "Der 'Große Wald' selbst ist seit 1939 das erste staatliche Naturschutzgebiet Ungarns."
        ]
    },
    {
        "id": "industry-bmw-debrecen-extra",
        "type": "industry",
        "parent": "HU-HB",
        "coords": [21.500, 47.580],
        "name": { "de": "BMW Werk Debrecen", "hu": "BMW Gyár Debrecen", "ro": "Fabrica BMW Debrecen", "en": "BMW Plant Debrecen" },
        "description": {
            "de": "Ein hochmodernes Automobilwerk von BMW, das sich auf E-Mobilität spezialisiert.",
            "hu": "A BMW ultramodern autógyára, amely az e-mobilitásra fókuszál.",
            "ro": "Fabrica auto ultramodernă a BMW, specializată în e-mobilitate.",
            "en": "BMW's state-of-the-art car plant, focusing on e-mobility."
        },
        "facts": {
            "de": ["In Bau/Inbetriebnahme.", "Fokus auf Nachhaltigkeit."],
            "hu": ["Építés/beüzemelés alatt.", "Fenntarthatósági fókusz."],
            "ro": ["În construcție/punere în funcțiune.", "Focus pe sustenabilitate."],
            "en": ["Under construction/commissioning.", "Focuses on sustainability."]
        },
        "descriptionAdvanced": "Das neue BMW-Werk in Debrecen ist eines der zukunftsweisendsten Industrieprojekte in Europa und ein Meilenstein für die Elektromobilität. Es ist das weltweit erste Werk der BMW Group, das konsequent nach dem Prinzip der 'iFACTORY' konzipiert wurde – es ist also vollständig digitalisiert, nachhaltig und hochflexibel. Hier wird ab Mitte der 2020er Jahre die 'Neue Klasse', die nächste Generation von vollelektrischen Fahrzeugen, vom Band laufen. Das Werk setzt neue Maßstäbe im Umweltschutz, indem es komplett auf fossile Brennstoffe verzichtet und seinen Energiebedarf aus erneuerbaren Quellen deckt. Die Ansiedlung von BMW hat Debrecen zu einem der wichtigsten Zentren der globalen Automobilindustrie gemacht und zieht zahlreiche Zulieferbetriebe und hochkarätige Forschungsprojekte in die Region. Mit tausenden neuen Arbeitsplätzen und modernster Infrastruktur ist das Werk ein Motor für die wirtschaftliche Entwicklung in Ostungarn und ein Symbol für den technologischen Wandel in der gesamten Branche.",
        "factsAdvanced": [
            "Die Entscheidung für den Standort Debrecen wurde 2018 bekannt gegeben.",
            "Das Werk ist für eine jährliche Produktionskapazität von rund 150.000 Fahrzeugen ausgelegt.",
            "Debrecen ist das erste BMW-Werk weltweit, das CO2-frei und ohne fossile Energieträger operiert.",
            "Hier wird die 'Neue Klasse' eingeführt, die Basis für alle zukünftigen Elektro-Modelle von BMW.",
            "Das Gelände des Werks umfasst eine Fläche von over 400 Hektar.",
            "BMW investiert über zwei Milliarden Euro in den Aufbau des Standorts und der Batterieproduktion.",
            "Das Unternehmen fördert lokale Bildungsprogramme und kooperiert eng mit der Universität Debrecen.",
            "Das Werk verfügt über eine direkte Anbindung an das ungarische Autobahn- und Schienennetz."
        ]
    },
    {
        "id": "historical-siroki-var-extra",
        "type": "historical",
        "parent": "HU-HE",
        "coords": [20.196, 47.940],
        "name": { "de": "Burg Sirok", "hu": "Siroki vár", "ro": "Cetatea Sirok", "en": "Sirok Castle" },
        "description": {
            "de": "Eine faszinierende Felsenburg im Mátra-Gebirge mit vielen Höhlengängen.",
            "hu": "Lenyűgöző sziklavár a Mátrában, számos sziklába vájt folyosóval.",
            "ro": "O cetate de stâncă fascinantă în munții Mátra, cu multe galerii săpate.",
            "en": "A fascinating rock castle in the Mátra Mountains with many carved tunnels."
        },
        "facts": {
            "de": ["Strategische Lage.", "Vulkanische Felsen."],
            "hu": ["Stratégiai elhelyezkedés.", "Vulkanikus kőzeten áll."],
            "ro": ["Poziție strategică.", "Pe roci vulcanice."],
            "en": ["Strategic location.", "Built on volcanic rocks."]
        },
        "descriptionAdvanced": "Die Burg von Sirok ist eine der faszinierendsten und geheimnisvollsten Festungsanlagen Ungarns, da sie teilweise direkt in die vulkanischen Felsen des Mátra-Gebirges gehauen wurde. Die Ruine thront spektakulär auf einem steilen Gipfel und bietet einen atemberaubenden Blick über die umliegenden Täler und Wälder. Besonders beeindruckend ist das weitverzweigte System von Höhlengängen und unterirdischen Kasematten, die von den Verteidigern in den weichen Tuffstein getrieben wurden. Die Geschichte der Burg reicht bis in die Zeit nach dem Mongoleneinfall zurück, und sie war im 16. Jahrhundert ein wichtiger Teil des Grenzfestungssystems gegen die Türken. Heute können Besucher die rekonstruierten Ober- und Unterburgen erkunden und durch die dunklen Felsengänge wandern, die eine fast mystische Atmosphäre ausstrahlen. Die Sage von der schönen Helena, die sich vor Trauer von den Burgmauern stürzte, ist bis heute lebendig. Die Burg Sirok ist ein Muss für Wanderer und Geschichtsinteressierte, die eine Burg abseits der klassischen Pfade entdecken möchten.",
        "factsAdvanced": [
            "Die Burg wurde auf einem vulkanischen Tufffelsen in etwa 296 Metern Höhe errichtet.",
            "Große Teile der Wohnräume und Verteidigungsanlagen wurden direkt aus dem Fels herausgeschlagen.",
            "Im 16. Jahrhundert wurde die Burg kampflos an die Osmanen übergeben, die sie 90 Jahre lang besetzten.",
            "Zwei markante Felsformationen unterhalb der Burg werden als 'Versteinerte Musikanten' bezeichnet.",
            "Die Burg wurde im späten 17. Jahrhundert von kaiserlichen Truppen teilweise gesprengt.",
            "Nach umfassenden Restaurierungen ist die Burg seit 2012 wieder sicher für Touristen zugänglich.",
            "Ein Ausstellungsraum in der Unterburg informiert über das tägliche Leben in der Grenzfestung.",
            "Die Burg ist Teil der nationalen Burgenroute und ein beliebtes Wanderziel im Mátra-Gebirge."
        ]
    },
    {
        "id": "historical-egri-var-extra",
        "type": "historical",
        "parent": "HU-HE",
        "coords": [20.380, 47.904],
        "name": { "de": "Burg Eger", "hu": "Egri vár", "ro": "Cetatea din Eger", "en": "Eger Castle" },
        "description": {
            "de": "Symbol des heldenhaften Widerstands gegen die Osmanen im Jahr 1552.",
            "hu": "Az 1552-es török elleni hősies ellenállás jelképe.",
            "ro": "Simbolul rezistenței eroice împotriva otomanilor în anul 1552.",
            "en": "Symbol of the heroic resistance against the Ottomans in 1552."
        },
        "facts": {
            "de": ["Nationales Denkmal.", "Interaktive Museen."],
            "hu": ["Nemzeti emlékhely.", "Interaktív múzeumok."],
            "ro": ["Monument național.", "Muzee interactive."],
            "en": ["National heritage site.", "Houses interactive museums."]
        },
        "descriptionAdvanced": "Die Burg von Eger ist das stolze Symbol des ungarischen Widerstandswillens und eines der wichtigsten nationalen Denkmäler des Landes. Weltberühmt wurde sie durch die heldenhafte Verteidigung im Jahr 1552, als eine kleine Gruppe ungarischer Soldaten unter István Dobó einer gewaltigen osmanischen Übermacht standhielt. Dieser Sieg verhinderte für Jahrzehnte das weitere Vordringen der Türken ins Innere Europas. Die weitläufige Anlage beherbergt heute das István-Dobó-Burgmuseum mit Ausstellungen zu den Kämpfen, der Waffenkunst und dem mittelalterlichen Leben. Besucher können die massiven Bastionen, die unterirdischen Kasematten und die Ruinen der gotischen Kathedrale besichtigen. Jährlich finden historische Festspiele statt, die die Ereignisse von 1552 mit Ritterturnieren und Kanonendonner nachstellen. Die Burg bietet zudem einen fantastischen Blick über die barocke Altstadt von Eger. Für jeden Ungarn ist ein Besuch der Burg eine Reise zum Herzen der nationalen Identität, geprägt von Tapferkeit und Opferbereitschaft.",
        "factsAdvanced": [
            "Die Belagerung von 1552 dauerte 39 Tage; etwa 2.000 Verteidiger besiegten ein Heer von fast 40.000 Türken.",
            "Die Geschichte der Belagerung wurde im berühmten Roman 'Die Sterne von Eger' von Géza Gárdonyi verewigt.",
            "Innerhalb der Burg befinden sich die Ruinen einer der größten gotischen Kathedralen Ungarns.",
            "Die Kasematten sind ein riesiges unterirdisches Labyrinth, das früher als Schutzraum und Lager diente.",
            "Das Grabmal des Schriftstellers Géza Gárdonyi befindet sich auf dem Gelände der Burg.",
            "Täglich um 15:52 Uhr wird zur Erinnerung an den Sieg eine Kanone auf der Burg abgefeuert.",
            "In der Burgkapelle können Besucher den Eid des István Dobó und seiner Soldaten nachlesen.",
            "Die Burg von Eger wurde 2014 offiziell zum nationalen Kulturerbe erklärt."
        ]
    },
    {
        "id": "historical-egri-minaret-extra",
        "type": "historical",
        "parent": "HU-HE",
        "coords": [20.377, 47.905],
        "name": { "de": "Minarett von Eger", "hu": "Egri minaret", "ro": "Minaretul din Eger", "en": "Eger Minaret" },
        "description": {
            "de": "Das nördlichste historische Minarett aus der Zeit der osmanischen Herrschaft.",
            "hu": "Az oszmán hódoltság idejéből származó legészakibb történelmi minaret.",
            "ro": "Cel mai nordic minaret istoric din perioada stăpânirii otomane.",
            "en": "The northernmost historic minaret from the Ottoman era."
        },
        "facts": {
            "de": ["40 Meter hoch.", "97 Stufen zur Spitze."],
            "hu": ["40 méter magas.", "97 lépcső vezet a tetejére."],
            "ro": ["40 de metri înălțime.", "97 de trepte până în vârf."],
            "en": ["40 meters high.", "97 steps to the top."]
        },
        "descriptionAdvanced": "Das Minarett von Eger ist eines der markantesten Wahrzeichen der Stadt und ein seltenes bauliches Zeugnis der fast hundertjährigen osmanischen Herrschaft in Ungarn. Es ist das am besten erhaltene und zugleich nördlichste historische Minarett in Mitteleuropa. Das im frühen 17. Jahrhundert aus rotem Sandstein errichtete Bauwerk gehörte ursprünglich zu einer Moschee, die nach der Rückeroberung der Stadt abgerissen wurde. Das Minarett selbst überdauerte die Jahrhunderte und wurde später mit einem christlichen Kreuz an der Spitze gekrönt, um den Sieg des Christentums zu symbolisieren. Mit einer Höhe von 40 Metern prägt es die Silhouette der Stadt. Wer die 97 steilen und engen Stufen der Wendeltreppe zur Aussichtsgalerie erklimmt, wird mit einem spektakulären Rundblick über die Barockstadt Eger belohnt. Das Minarett ist nicht nur ein architektonisches Kuriosum, sondern auch ein Mahnmal für die wechselvolle Geschichte der Region am Schnittpunkt der Kulturen.",
        "factsAdvanced": [
            "Das Minarett wurde um 1600 während der osmanischen Besetzung von Eger erbaut.",
            "Es ist das nördlichste Bauwerk dieser Art aus der Zeit des Osmanischen Reiches in Europa.",
            "Nach der Rückeroberung 1687 versuchten 400 Ochsen vergeblich, den Turm mit Seilen umzureißen.",
            "Das Minarett hat einen 14-eckigen Grundriss und ist 40 Meter hoch.",
            "Die schmale Wendeltreppe im Inneren besteht aus 97 Steinstufen.",
            "Die ursprüngliche Moschee wurde im 19. Jahrhundert zerstört, nur der Turm blieb erhalten.",
            "Das Minarett wurde in den letzten Jahren aufwendig stabilisiert und restauriert.",
            "Die Galerie in 26 Metern Höhe bietet einen der besten Fotopunkte der gesamten Stadt."
        ]
    },
    {
        "id": "animal-habitat-gyongyosi-allatkert-extra",
        "type": "animal-habitat",
        "parent": "HU-HE",
        "coords": [19.932, 47.785],
        "name": { "de": "Zoo Gyöngyös", "hu": "Gyöngyösi Állatkert", "ro": "Grădina Zoologică din Gyöngyös", "en": "Gyongyos Zoo" },
        "description": {
            "de": "Ein kleiner, aber beliebter Zoo am Fuße des Mátra-Gebirges.",
            "hu": "Kicsi, de kedvelt állatkert a Mátra lábánál.",
            "ro": "O grădină zoologică mică, dar populară, la poalele munților Mátra.",
            "en": "A small but popular zoo at the foot of the Mátra Mountains."
        },
        "facts": {
            "de": ["Besuchernah.", "Viele exotische Tiere."],
            "hu": ["Barátságos környezet.", "Sok egzotikus állat."],
            "ro": ["Aproape de vizitatori.", "Multe animale exotice."],
            "en": ["Visitor-friendly.", "Home to many exotic animals."]
        },
        "descriptionAdvanced": "Der Zoo Gyöngyös, am Fuße des Mátra-Gebirges gelegen, ist eine charmante und besonders besucherfreundliche Einrichtung. Trotz seiner vergleichsweise geringen Fläche bietet der Zoo eine erstaunliche Vielfalt an Tieren aus aller Welt. Ein Markenzeichen des Zoos ist die Nähe zu den Tieren; viele Gehege sind so gestaltet, dass Besucher die Bewohner hautnah erleben können. Von majestätischen Löwen und Tigern über verspielte Erdmännchen bis hin zu exotischen Reptilien und Vögeln gibt es viel zu entdecken. Ein besonderer Schwerpunkt liegt auf interaktiven Programmen wie Schaufütterungen und Tierbegegnungen, die besonders bei Kindern sehr beliebt sind. Die familiäre Atmosphäre und die übersichtliche Gestaltung machen den Zoo zu einem idealen Ausflugsziel für Familien mit kleineren Kindern. Eingebettet in die malerische Landschaft der Mátra-Region, lässt sich ein Besuch im Zoo wunderbar mit Wanderungen oder einer Fahrt mit der Schmalspurbahn kombinieren. Der Zoo Gyöngyös beweist eindrucksvoll, dass auch kleinere Einrichtungen einen großen Beitrag zur Umweltbildung und zum Tierschutz leisten können.",
        "factsAdvanced": [
            "Der Zoo Gyöngyös wurde im Jahr 2004 als Privatinitiative gegründet.",
            "Er beherbergt heute over 100 verschiedene Tierarten auf einer Fläche von rund 2 Hektar.",
            "Der Zoo ist bekannt für seine erfolgreiche Zucht von weißen Löwen und Tigern.",
            "Es gibt einen großen Streichelzoo, in dem Kinder Kontakt zu Ziegen, Schafen und Alpakas haben können.",
            "Der Zoo bietet regelmäßig Nachtführungen an, bei denen man die Tiere in der Dämmerung erlebt.",
            "Auf dem Gelände befindet sich ein moderner Spielplatz für die jüngsten Besucher.",
            "Der Zoo arbeitet eng mit lokalen Schulen zusammen, um Wissen über bedrohte Tierarten zu vermitteln.",
            "Durch die Lage direkt an der Hauptstraße ist der Zoo sehr leicht für Touristen erreichbar."
        ]
    },
    {
        "id": "industry-matrai-eromu-extra",
        "type": "industry",
        "parent": "HU-HE",
        "coords": [20.060, 47.782],
        "name": { "de": "Kraftwerk Mátra", "hu": "Mátrai Erőmű", "ro": "Centrala Electrică Mátra", "en": "Matra Power Plant" },
        "description": {
            "de": "Eines der größten Kraftwerke Ungarns, das Braunkohle aus Tagebauen nutzt.",
            "hu": "Magyarország egyik legnagyobb erőműve, amely lignit tüzelésű.",
            "ro": "Una dintre cele mai mari centrale electrice din Ungaria, care folosește lignit.",
            "en": "One of Hungary's largest power plants, using lignite as its main fuel source."
        },
        "facts": {
            "de": ["Riesige Schaufelradbagger.", "Zentrum der Energieregion."],
            "hu": ["Hatalmas kotrógépek.", "Az energiarégió központja."],
            "ro": ["Excavatoare uriașe.", "Centrul regiunii energetice."],
            "en": ["Features massive bucket-wheel excavators.", "Center of the energy region."]
        },
        "descriptionAdvanced": "Das Kraftwerk Mátra in Visonta ist einer der größten Energieerzeuger Ungarns und von strategischer Bedeutung für die Stromversorgung des Landes. Es nutzt hauptsächlich Lignit, eine Form der Braunkohle, die in riesigen nahegelegenen Tagebauen gewonnen wird. Die gewaltigen Schaufelradbagger in den Gruben Visonta und Bükkábrány sind technologische Giganten und prägen die Landschaft. Das Kraftwerk selbst ist weithin an seinen massiven Kühltürmen und Schornsteinen erkennbar. In den letzten Jahren hat sich der Standort zu einem Zentrum der Energiewende gewandelt: Neben der Kohleverbrennung wird zunehmend Biomasse eingesetzt, und auf den rekultivierten Flächen der ehemaligen Tagebaue entstand einer der größten Solarparks Ungarns. Das Unternehmen ist der wichtigste Arbeitgeber in der Region Heves und sichert tausende Arbeitsplätze in der Industrie und im Bergbau. Das Kraftwerk Mátra steht beispielhaft für den Wandel von der traditionellen Schwerindustrie hin zu einer nachhaltigeren Energiezukunft, während es gleichzeitig die Stabilität des nationalen Stromnetzes garantiert.",
        "factsAdvanced": [
            "Das Kraftwerk wurde in den 1960er Jahren unter dem Namen 'Gagarin-Kraftwerk' erbaut.",
            "Es ist das einzige bedeutende Kraftwerk Ungarns, das heimische Braunkohle verfeuert.",
            "Die installierte elektrische Leistung des Kraftwerks beträgt rund 950 Megawatt.",
            "Die Tagebaue des Werks fördern jährlich mehrere Millionen Tonnen Lignit.",
            "Das Kraftwerk deckt etwa 15 Prozent des ungarischen Strombedarfs ab.",
            "Auf dem Gelände befindet sich eine der größten Photovoltaik-Anlagen des Landes mit über 70.000 Modulen.",
            "Das Unternehmen investiert massiv in die Rekultivierung der Tagebauflächen, um sie der Natur zurückzugeben.",
            "Ein Industriepark rund um das Kraftwerk nutzt die Abwärme für verschiedene Produktionsprozesse."
        ]
    }
]

def format_dict(d, indent=4):
    lines = []
    for k, v in d.items():
        if isinstance(v, list):
            list_lines = ",\n" + " " * (indent + 6)
            v_str = "[" + list_lines.join([f'"{x}"' for x in v]) + "]"
            lines.append(f'{" " * indent}{k}: {v_str},')
        elif isinstance(v, dict):
            inner = format_dict(v, indent + 2)
            lines.append(f'{" " * indent}{k}: {{\n{inner}\n{" " * indent}}},')
        else:
            v_escaped = v.replace('"', '\\"')
            lines.append(f'{" " * indent}{k}: "{v_escaped}",')
    return "\n".join(lines)

new_block_parts = []
for p in pois_26_50_data:
    name_str = "{" + ", ".join([f'{k}: "{v}"' for k, v in p["name"].items()]) + "}"
    desc_str = "{\n      " + ",\n      ".join([f'{k}: "{v}"' for k, v in p["description"].items()]) + "\n    }"
    facts_str = "{\n      " + ",\n      ".join([f'{k}: {str(v).replace("\'", "\"")}' for k, v in p["facts"].items()]) + "\n    }"
    
    facts_adv_list = ",\n      ".join([f'"{f}"' for f in p["factsAdvanced"]])
    
    poi_str = f"""  {{
    id: "{p["id"]}",
    type: "{p["type"]}",
    parent: "{p["parent"]}",
    coords: {p["coords"]},
    name: {name_str},
    description: {desc_str},
    facts: {facts_str},
    descriptionAdvanced: {{
      de: "{p["descriptionAdvanced"]}",
      hu: "",
      ro: "",
      en: ""
    }},
    factsAdvanced: {{
      de: [
        {facts_adv_list}
      ],
      hu: [],
      ro: [],
      en: []
    }},
  }},"""
    new_block_parts.append(poi_str)

start_marker = "// HU-CS: Csongrád-Csanád (3G, 1LN, 1W)"
end_marker = "// HU-JN: Jász-Nagykun-Szolnok (2G, 2LN, 1W)"

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx != -1 and end_idx != -1:
    new_block = start_marker + "\n" + "\n".join(new_block_parts) + "\n\n  "
    new_content = content[:start_idx] + new_block + content[end_idx:]
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Successfully updated POIs 26-50 with clean structure")
else:
    print(f"Could not find markers: {start_idx}, {end_idx}")
