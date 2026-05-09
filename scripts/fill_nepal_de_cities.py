"""Fill descriptionAdvanced.de + factsAdvanced.de for POIs in poiExtraNepalCitiesV2.ts

Skips already-filled POIs (where descriptionAdvanced.de is non-empty).
"""
from __future__ import annotations
import re
from pathlib import Path

FILE = Path(r"C:\Users\User\plizio-repo\lib\visualLab\data\poiExtraNepalCitiesV2.ts")

DATA: dict[str, dict] = {
    "kathmandu-cities-v2": {
        "desc": (
            "Kathmandu ist seit 1768 die Hauptstadt Nepals und liegt auf 1.400 Metern Höhe im "
            "gleichnamigen Tal, umgeben von den Vorbergen des Himalaya. Die Stadt mit rund 1,5 "
            "Millionen Einwohnern (Metropolregion über 2,5 Millionen) wurde im 12. Jahrhundert von "
            "der Newar-Dynastie gegründet. König Prithvi Narayan Shah eroberte sie 1768 und machte "
            "sie zur Hauptstadt des vereinigten Königreichs Nepal (1768-2008). Sieben Stätten im "
            "Tal sind UNESCO-Weltkulturerbe seit 1979. Das schwere Erdbeben vom 25. April 2015 "
            "(Stärke 7,8) tötete fast 9.000 Menschen und zerstörte zahlreiche Tempel am Durbar Square. "
            "Heute ist Kathmandu auch Tor zum Mount Everest (8.848 m)."
        ),
        "facts": [
            "Hauptstadt seit 1768 (Königreich Nepal 1768-2008)",
            "Bevölkerung ca. 1,5 Millionen (Metropolregion 2,5 Mio.)",
            "Auf 1.400 Metern Höhe im Kathmandu-Tal",
            "Sieben UNESCO-Welterbestätten seit 1979",
            "Erdbeben am 25. April 2015 (Stärke 7,8, ca. 9.000 Tote)",
            "Pashupatinath-Tempel und Boudhanath-Stupa",
            "Tor zum Mount Everest (8.848 m)",
            "Newar-Königreich gegründet im 12. Jahrhundert",
        ],
    },
    "pokhara-cities-v2": {
        "desc": (
            "Pokhara liegt auf 822 Metern Höhe am Phewa-See und ist mit rund 415.000 Einwohnern die "
            "zweitgrößte Stadt Nepals. Sie gilt als Tor zum Annapurna-Massiv mit dem 8.091 Meter "
            "hohen Annapurna I. Die Stadt war jahrhundertelang ein wichtiger Handelsposten an der "
            "Karawanenroute zwischen Indien und Tibet. Nach der Vereinigung Nepals durch König "
            "Prithvi Narayan Shah 1768 blieb Pokhara abgeschieden, bis 1968 die erste Straße nach "
            "Kathmandu eröffnet wurde. Berühmt ist die spiegelartige Reflexion des heiligen Berges "
            "Machapuchare (6.993 m) im Phewa-See. Im Jahr 2017 wurde Pokhara offiziell zur "
            "Tourismushauptstadt Nepals erklärt. Der internationale Flughafen Pokhara wurde 2023 eröffnet."
        ),
        "facts": [
            "Zweitgrößte Stadt Nepals, ca. 415.000 Einwohner",
            "Auf 822 Metern Höhe am Phewa-See",
            "Tor zum Annapurna-Massiv (Annapurna I: 8.091 m)",
            "Heiliger Berg Machapuchare (6.993 m) sichtbar",
            "Erste Straße nach Kathmandu erst 1968",
            "Tourismushauptstadt Nepals seit 2017",
            "Internationaler Flughafen seit 2023",
            "Königreich Nepal 1768-2008",
        ],
    },
    "lalitpur-cities-v2": {
        "desc": (
            "Lalitpur, traditionell Patan genannt, liegt direkt südlich von Kathmandu am Fluss "
            "Bagmati und hat rund 285.000 Einwohner. Die Stadt wurde der Legende nach im 3. "
            "Jahrhundert v. Chr. von Kaiser Ashoka gegründet, der vier buddhistische Stupas an den "
            "Stadtgrenzen errichten ließ. Patan war jahrhundertelang eines der drei Königreiche im "
            "Kathmandu-Tal, bis König Prithvi Narayan Shah es 1768 eroberte und das vereinigte "
            "Königreich Nepal (1768-2008) schuf. Der Patan Durbar Square ist UNESCO-Weltkulturerbe "
            "seit 1979 und gilt als Höhepunkt der Newari-Architektur mit dem Krishna-Tempel von "
            "1637. Beim Erdbeben am 25. April 2015 wurden mehrere historische Tempel schwer beschädigt. "
            "Patan ist Zentrum tibetischer Bronzeguss-Tradition."
        ),
        "facts": [
            "Bevölkerung ca. 285.000",
            "Vermutet gegründet 3. Jh. v. Chr. von Kaiser Ashoka",
            "Patan Durbar Square UNESCO-Welterbe seit 1979",
            "Krishna-Tempel von 1637",
            "Eines der drei Königreiche im Kathmandu-Tal",
            "Eroberung durch Prithvi Narayan Shah 1768",
            "Erdbebenschäden am 25. April 2015",
            "Zentrum tibetischer Bronzeguss-Tradition",
        ],
    },
    "bharatpur-cities-v2": {
        "desc": (
            "Bharatpur liegt am Narayani-Fluss in der Chitwan-Region auf rund 200 Metern Höhe und "
            "ist mit etwa 280.000 Einwohnern die viertgrößte Stadt Nepals. Die Stadt wurde erst nach "
            "1956 gegründet, als die Malaria im inneren Terai durch das Welternährungsprogramm "
            "ausgerottet wurde und die Tharu-Region für Siedler aus den Bergen geöffnet werden "
            "konnte. Davor war das dichte Urwaldgebiet königliches Jagdrevier des Königreichs Nepal "
            "(1768-2008). Heute ist Bharatpur das wichtigste medizinische Zentrum außerhalb von "
            "Kathmandu und beherbergt das B.P. Koirala Memorial Cancer Hospital. Die Stadt ist Tor "
            "zum Chitwan-Nationalpark, der 1973 gegründet wurde und seit 1984 UNESCO-Welterbe ist - "
            "Heimat von Panzernashörnern und bengalischen Tigern."
        ),
        "facts": [
            "Viertgrößte Stadt Nepals, ca. 280.000 Einwohner",
            "Liegt am Narayani-Fluss in Chitwan",
            "Gegründet nach Malaria-Ausrottung 1956",
            "B.P. Koirala Memorial Cancer Hospital",
            "Tor zum Chitwan-Nationalpark",
            "Chitwan-Park UNESCO-Welterbe seit 1984",
            "Königliches Jagdrevier bis 1956",
            "Königreich Nepal 1768-2008",
        ],
    },
    "birgunj-cities-v2": {
        "desc": (
            "Birgunj liegt direkt an der indischen Grenze in der Provinz Madhesh, gegenüber der "
            "indischen Stadt Raxaul, und ist mit rund 240.000 Einwohnern der wichtigste Grenzübergang "
            "Nepals. Über diesen Knotenpunkt läuft etwa 65 Prozent des nepalesischen Außenhandels - "
            "der größte Teil der Importe aus dem Ausland kommt über diese Strecke. Die Stadt wurde "
            "1897 von Premierminister Bir Shamsher Jung Bahadur Rana gegründet und nach ihm benannt "
            "(während der Rana-Familienherrschaft 1846-1951 im Königreich Nepal 1768-2008). 1927 "
            "verband die erste Eisenbahnlinie Nepals Birgunj mit Raxaul. Beim indischen "
            "Wirtschaftsembargo 2015-2016 stand der Grenzverkehr monatelang still und löste eine "
            "schwere Versorgungskrise aus."
        ),
        "facts": [
            "Bevölkerung ca. 240.000",
            "Wichtigster Grenzübergang Nepals (65% des Außenhandels)",
            "Gegenüber Raxaul (Indien)",
            "Gegründet 1897 von Bir Shamsher Rana",
            "Erste Eisenbahnlinie Nepals 1927",
            "Rana-Familienherrschaft 1846-1951",
            "Königreich Nepal 1768-2008",
            "Indisches Embargo 2015-2016",
        ],
    },
    "biratnagar-cities-v2": {
        "desc": (
            "Biratnagar ist mit rund 244.000 Einwohnern die fünftgrößte Stadt Nepals und seit 2018 "
            "Hauptstadt der Provinz Koshi im äußersten Osten des Landes. Die Stadt liegt auf rund "
            "72 Metern Höhe in der Terai-Tiefebene, nur sechs Kilometer von der indischen Grenze "
            "entfernt. 1936 wurde hier die erste Jutefabrik des Königreichs Nepal (1768-2008) "
            "errichtet, die das Tor zur industriellen Entwicklung des Landes öffnete. 1947 fand in "
            "Biratnagar der berühmte Streik der Jutearbeiter statt, der zum Auslöser der Revolution "
            "von 1951 wurde, die der Rana-Familienherrschaft (1846-1951) ein Ende setzte. Hier "
            "wurde 1925 auch der spätere Premierminister B.P. Koirala geboren. Die Stadt ist heute "
            "Zentrum der Jute-, Zucker- und Textilindustrie."
        ),
        "facts": [
            "Fünftgrößte Stadt Nepals, ca. 244.000 Einwohner",
            "Hauptstadt der Provinz Koshi seit 2018",
            "Erste Jutefabrik Nepals 1936",
            "Streik 1947 löste Revolution 1951 aus",
            "Geburtsort von B.P. Koirala (1925)",
            "Rana-Herrschaft 1846-1951",
            "Königreich Nepal 1768-2008",
            "6 km von der indischen Grenze",
        ],
    },
    "janakpur-cities-v2": {
        "desc": (
            "Janakpur ist seit 2018 Hauptstadt der Provinz Madhesh und liegt rund 123 Kilometer "
            "südöstlich von Kathmandu in der Terai-Tiefebene. Die Stadt mit rund 153.000 Einwohnern "
            "gilt nach hinduistischem Glauben als Geburtsort der Göttin Sita, der Frau von Lord Rama, "
            "und wird im Epos Ramayana als Hauptstadt des antiken Königreichs Mithila beschrieben. "
            "Der Janaki-Mandir-Tempel im Mughal-Rajput-Stil wurde 1910 von der Königin Vrisha Bhanu "
            "von Tikamgarh erbaut. Während der Rana-Herrschaft (1846-1951) im Königreich Nepal "
            "(1768-2008) blieb die Stadt abgeschieden. Janakpur ist Zentrum der Maithili-Sprache "
            "und -Kultur sowie der traditionellen Maithili-Malerei. Die Stadt wird von 24 historischen "
            "Teichen umgeben, die eine wichtige Rolle in religiösen Festen spielen."
        ),
        "facts": [
            "Hauptstadt der Provinz Madhesh seit 2018",
            "Bevölkerung ca. 153.000",
            "123 km südöstlich von Kathmandu",
            "Geburtsort der Göttin Sita (Ramayana)",
            "Janaki-Mandir-Tempel von 1910",
            "Zentrum der Maithili-Kultur",
            "24 historische Teiche",
            "Königreich Nepal 1768-2008",
        ],
    },
    "hetauda-cities-v2": {
        "desc": (
            "Hetauda ist seit 2017 Hauptstadt der Provinz Bagmati und liegt 132 Kilometer südlich "
            "von Kathmandu am Knotenpunkt des Mahendra-Highways und der Tribhuvan Rajpath. Die Stadt "
            "mit rund 154.000 Einwohnern wurde während der Rana-Familienherrschaft (1846-1951) im "
            "Königreich Nepal (1768-2008) als Tor zum inneren Terai gegründet. 1956 wurde die "
            "Tribhuvan Rajpath, die erste asphaltierte Straße zwischen Kathmandu und der indischen "
            "Grenze, eröffnet und führte direkt durch Hetauda. Die Stadt entwickelte sich rasch zum "
            "Industriezentrum mit dem Hetauda-Industriegebiet, das in den 1970er Jahren mit "
            "indischer Hilfe errichtet wurde. Bekannt sind die Hetauda-Zementfabrik (1976) und die "
            "Brauerei. Die Stadt ist umgeben von dichten Sal-Wäldern."
        ),
        "facts": [
            "Hauptstadt der Provinz Bagmati seit 2017",
            "Bevölkerung ca. 154.000",
            "132 km südlich von Kathmandu",
            "Tribhuvan Rajpath eröffnet 1956",
            "Hetauda-Zementfabrik seit 1976",
            "Rana-Herrschaft 1846-1951",
            "Königreich Nepal 1768-2008",
            "Sahid-Smarak-Park",
        ],
    },
    "dharan-cities-v2": {
        "desc": (
            "Dharan liegt auf rund 350 Metern Höhe am Fuß der Mahabharat-Berge in der Provinz Koshi "
            "und hat etwa 173.000 Einwohner. Die Stadt wurde 1953 als Verwaltungszentrum gegründet "
            "und ist heute für ihre Sauberkeit, das angenehme Klima und die enge Verbindung zur "
            "britischen Gurkha-Tradition bekannt. Die britische Gurkha-Rekrutierung läuft seit 1815 - "
            "von 1953 bis 1989 betrieb die britische Armee in Dharan ein Hauptrekrutierungszentrum. "
            "Im Königreich Nepal (1768-2008) wurden die Gurkhas zur Säule der Außenpolitik. Bei "
            "einem schweren Erdbeben am 21. August 1988 (Stärke 6,9) starben in der Region rund 700 "
            "Menschen. Der Budha-Subba-Tempel ist ein heiliger Ort der Limbu und Kirat. Die "
            "B.P. Koirala-Gesundheitsfakultät wurde 1993 gegründet."
        ),
        "facts": [
            "Bevölkerung ca. 173.000",
            "Auf 350 Metern Höhe",
            "Gegründet 1953",
            "Britisches Gurkha-Rekrutierungszentrum 1953-1989",
            "Erdbeben am 21. August 1988 (Stärke 6,9)",
            "B.P. Koirala-Gesundheitsfakultät seit 1993",
            "Budha-Subba-Tempel",
            "Königreich Nepal 1768-2008",
        ],
    },
    "butwal-cities-v2": {
        "desc": (
            "Butwal liegt am Tinau-Fluss am Übergang von der Terai-Ebene in die Siwalik-Hügel und "
            "ist mit rund 195.000 Einwohnern eine der schnellst wachsenden Städte Nepals. Die Stadt "
            "in der Provinz Lumbini liegt nur 22 Kilometer nördlich von Lumbini, dem UNESCO-Welterbe "
            "und Geburtsort Buddhas (um 563 v. Chr.). Butwal entstand als Karawanenstation an der "
            "Handelsroute zwischen Indien und Tibet, gewann aber erst nach dem Bau des "
            "Mahendra-Highways in den 1970er Jahren wirtschaftlich an Bedeutung. Während des "
            "Königreichs Nepal (1768-2008) war die Region als 'Naya Muluk' (Neues Land) eine relativ "
            "späte Erwerbung. Heute ist Butwal Verkehrsknotenpunkt zwischen dem Siddhartha-Highway "
            "nach Pokhara und dem Mahendra-Highway."
        ),
        "facts": [
            "Bevölkerung ca. 195.000",
            "Liegt am Tinau-Fluss",
            "Provinz Lumbini",
            "22 km nördlich von Lumbini (UNESCO-Welterbe)",
            "Geburtsort Buddhas um 563 v. Chr. (Lumbini)",
            "Mahendra-Highway seit den 1970er Jahren",
            "Knotenpunkt mit Siddhartha-Highway",
            "Königreich Nepal 1768-2008",
        ],
    },
    "itahari-cities-v2": {
        "desc": (
            "Itahari liegt im Sunsari-Distrikt der Provinz Koshi am Schnittpunkt des Mahendra-Highways "
            "und des Koshi-Highways, rund 23 Kilometer nördlich von Biratnagar. Die Stadt mit etwa "
            "165.000 Einwohnern wuchs in den 1980er Jahren explosionsartig, nachdem die zwei "
            "wichtigsten Ost-West- und Nord-Süd-Straßen Nepals hier zusammentrafen. Vorher war das "
            "Gebiet während der Rana-Herrschaft (1846-1951) im Königreich Nepal (1768-2008) ein "
            "kaum besiedelter Sal-Wald, der erst nach der Malaria-Bekämpfung in den 1960er Jahren "
            "für Siedler aus den Bergen geöffnet wurde. Heute zieht Itahari Investitionen aus ganz "
            "Ostnepal an und gilt als 'wirtschaftliches Tor' der Region. In der Nähe liegt das "
            "Koshi-Tappu-Wildschutzgebiet, ein wichtiges Vogelreservat am Saptakoshi-Fluss."
        ),
        "facts": [
            "Bevölkerung ca. 165.000",
            "Sunsari-Distrikt, Provinz Koshi",
            "23 km nördlich von Biratnagar",
            "Schnittpunkt Mahendra- und Koshi-Highway",
            "Boom seit den 1980er Jahren",
            "Sal-Wald bis zur Malaria-Bekämpfung 1960er",
            "Königreich Nepal 1768-2008",
            "Koshi-Tappu-Wildschutzgebiet in der Nähe",
        ],
    },
    "nepalgunj-cities-v2": {
        "desc": (
            "Nepalgunj liegt im Banke-Distrikt der Provinz Lumbini direkt an der indischen Grenze "
            "und ist mit rund 138.000 Einwohnern das wirtschaftliche Tor zum entlegenen Mid-Western "
            "Nepal. Die Stadt wurde 1860 nach dem Sugauli-Vertrag (1816) und der Rückgabe von Naya "
            "Muluk (Neues Land) durch die Briten an Nepal gegründet, während der Rana-Herrschaft "
            "(1846-1951) im Königreich Nepal (1768-2008). Sie wurde planmäßig als Grenz- und "
            "Handelsstadt angelegt. Im Sommer erreichen die Temperaturen oft über 45 Grad Celsius - "
            "Nepalgunj ist eine der heißesten Städte Nepals. Während des Bürgerkriegs (1996-2006) "
            "war die Region stark vom maoistischen Aufstand betroffen. Der Bageshwori-Tempel ist "
            "eine der wichtigsten Shakti-Pilgerstätten Nepals."
        ),
        "facts": [
            "Bevölkerung ca. 138.000",
            "Banke-Distrikt, Provinz Lumbini",
            "Gegründet 1860",
            "Sommertemperaturen über 45 Grad Celsius",
            "Sugauli-Vertrag 1816 (Naya Muluk)",
            "Rana-Herrschaft 1846-1951",
            "Königreich Nepal 1768-2008",
            "Bageshwori-Tempel (Shakti-Pilgerort)",
        ],
    },
    "siddharthanagar-cities-v2": {
        "desc": (
            "Siddharthanagar, traditionell Bhairahawa genannt, liegt im Rupandehi-Distrikt der "
            "Provinz Lumbini direkt an der indischen Grenze, gegenüber Sunauli. Die Stadt mit rund "
            "78.000 Einwohnern liegt nur 22 Kilometer südlich von Lumbini, dem UNESCO-Welterbe und "
            "Geburtsort von Siddhartha Gautama (um 563 v. Chr.), nach dem die Stadt offiziell "
            "umbenannt wurde. Die Region war Teil des antiken Shakya-Königreichs, in dem Buddha "
            "die ersten 29 Jahre seines Lebens verbrachte. Während der Rana-Herrschaft (1846-1951) "
            "im Königreich Nepal (1768-2008) war Bhairahawa ein wichtiger Grenzposten. 2022 wurde "
            "der internationale Flughafen Gautam Buddha eröffnet - der zweite internationale "
            "Flughafen Nepals nach Kathmandu. Die Stadt ist Sitz mehrerer Industriegebiete und "
            "Universitäten."
        ),
        "facts": [
            "Bevölkerung ca. 78.000",
            "Provinz Lumbini, Rupandehi-Distrikt",
            "Gegenüber Sunauli (Indien)",
            "22 km südlich von Lumbini (UNESCO-Welterbe)",
            "Buddha geboren um 563 v. Chr. in Lumbini",
            "Internationaler Flughafen Gautam Buddha seit 2022",
            "Antikes Shakya-Königreich",
            "Königreich Nepal 1768-2008",
        ],
    },
    "dhangadhi-cities-v2": {
        "desc": (
            "Dhangadhi ist seit 2018 Hauptstadt der Provinz Sudurpashchim im äußersten Westen "
            "Nepals und liegt im Kailali-Distrikt direkt an der indischen Grenze. Die Stadt mit "
            "rund 147.000 Einwohnern entwickelte sich erst nach 1960, als die Malaria im westlichen "
            "Terai bekämpft wurde und Siedler aus den Hügeln in die Region zogen. Davor war das "
            "Gebiet hauptsächlich von der indigenen Tharu-Bevölkerung bewohnt, die seit "
            "Jahrhunderten gegen die Malaria resistent war. Während des Königreichs Nepal "
            "(1768-2008) war diese Region die abgelegenste des Landes. Dhangadhi liegt nur 5 "
            "Kilometer vom Shuklaphanta-Nationalpark entfernt, einem 305 km² großen Reservat für "
            "Sumpfhirsche und Bengaltiger. Die Far Western University wurde 2010 in Dhangadhi gegründet."
        ),
        "facts": [
            "Hauptstadt der Provinz Sudurpashchim seit 2018",
            "Bevölkerung ca. 147.000",
            "Kailali-Distrikt an indischer Grenze",
            "Entwicklung seit Malaria-Bekämpfung 1960",
            "Indigene Tharu-Bevölkerung",
            "Shuklaphanta-Nationalpark (305 km²) 5 km entfernt",
            "Far Western University seit 2010",
            "Königreich Nepal 1768-2008",
        ],
    },
    "bhaktapur-cities-v2": {
        "desc": (
            "Bhaktapur, die 'Stadt der Gläubigen', liegt 13 Kilometer östlich von Kathmandu auf "
            "1.401 Metern Höhe und hat rund 81.000 Einwohner. Die Stadt wurde 889 von König "
            "Ananda Deva gegründet und war von 1484 bis 1768 die Hauptstadt eines der drei "
            "Königreiche im Kathmandu-Tal. König Prithvi Narayan Shah eroberte sie 1768 und "
            "vereinte das Tal zum Königreich Nepal (1768-2008). Der Bhaktapur Durbar Square ist "
            "UNESCO-Weltkulturerbe seit 1979 und gilt als das am besten erhaltene mittelalterliche "
            "Stadtensemble Nepals. Der fünfstöckige Nyatapola-Tempel von 1702 ist mit 30 Metern der "
            "höchste Tempel Nepals. Beim Erdbeben am 25. April 2015 (Stärke 7,8) wurden über 100 "
            "Tempel der Stadt schwer beschädigt. Berühmt sind Töpferei und Juju-Dhau-Joghurt."
        ),
        "facts": [
            "Bevölkerung ca. 81.000",
            "Auf 1.401 Metern Höhe, 13 km östlich von Kathmandu",
            "Gegründet 889 von König Ananda Deva",
            "Hauptstadt im Kathmandu-Tal 1484-1768",
            "Bhaktapur Durbar Square UNESCO-Welterbe seit 1979",
            "Nyatapola-Tempel von 1702 (30 m hoch)",
            "Erdbeben am 25. April 2015 (Stärke 7,8)",
            "Königreich Nepal 1768-2008",
        ],
    },
    "tulsipur-cities-v2": {
        "desc": (
            "Tulsipur liegt im Dang-Distrikt der Provinz Lumbini in einem inneren Terai-Tal auf rund "
            "700 Metern Höhe und hat etwa 142.000 Einwohner. Die Stadt war historisch Hauptort des "
            "Fürstentums Tulsipur, das vor der Vereinigung Nepals durch König Prithvi Narayan Shah "
            "1768 (Königreich Nepal 1768-2008) ein eigenständiges Reich war. 1859 brannte der Großteil "
            "der Stadt nieder und der Königspalast wurde aufgegeben. Während des Bürgerkriegs "
            "(1996-2006) war die Region eine der Hochburgen des maoistischen Aufstandes - die "
            "kommunistische Partei wurde hier in den 1990er Jahren stark. Tulsipur ist heute "
            "Verwaltungssitz für den südlichen Dang-Distrikt und Tor zum Pilgerort Swargadwari, "
            "einem heiligen Hindu-Berg auf 2.039 Metern Höhe."
        ),
        "facts": [
            "Bevölkerung ca. 142.000",
            "Dang-Distrikt, Provinz Lumbini",
            "Auf rund 700 Metern Höhe",
            "Ehemaliges Fürstentum Tulsipur",
            "Eingegliedert ins Königreich Nepal 1768",
            "Großbrand 1859",
            "Maoisten-Hochburg im Bürgerkrieg 1996-2006",
            "Swargadwari-Pilgerberg (2.039 m)",
        ],
    },
    "birendranagar-cities-v2": {
        "desc": (
            "Birendranagar ist seit 2018 Hauptstadt der Provinz Karnali und liegt im Surkhet-Tal "
            "auf rund 720 Metern Höhe. Die Stadt mit etwa 110.000 Einwohnern wurde 1976 nach dem "
            "regierenden König Birendra Bir Bikram Shah Dev (Regierungszeit 1972-2001) im "
            "Königreich Nepal (1768-2008) benannt. König Birendra wurde am 1. Juni 2001 zusammen "
            "mit fast der gesamten königlichen Familie von Kronprinz Dipendra im Königspalast "
            "Narayanhiti ermordet - eines der traumatischsten Ereignisse der nepalesischen Geschichte. "
            "Die Stadt wurde planmäßig als Verwaltungszentrum für das abgelegene Karnali-Hochland "
            "errichtet. In der Nähe liegen die archäologischen Kakrebihar-Ruinen aus der Khasa-Malla-"
            "Königreichszeit (12.-14. Jahrhundert). Karnali ist die ärmste Provinz Nepals."
        ),
        "facts": [
            "Hauptstadt der Provinz Karnali seit 2018",
            "Bevölkerung ca. 110.000",
            "Auf 720 Metern Höhe im Surkhet-Tal",
            "Gegründet 1976",
            "Benannt nach König Birendra (1972-2001)",
            "Königsmassaker am 1. Juni 2001",
            "Kakrebihar-Ruinen (Khasa-Malla 12.-14. Jh.)",
            "Königreich Nepal 1768-2008",
        ],
    },
    "ghorahi-cities-v2": {
        "desc": (
            "Ghorahi ist die größte Stadt im Dang-Distrikt der Provinz Lumbini und hat rund 156.000 "
            "Einwohner. Die Stadt liegt im Dang-Tal, dem größten inneren Terai-Tal Asiens mit einer "
            "Fläche von rund 2.955 km². Die Region wurde 1786 von König Bahadur Shah ins Königreich "
            "Nepal (1768-2008) eingegliedert. Im 19. Jahrhundert war das Dang-Tal königliches "
            "Jagdrevier und wegen der Malaria nur dünn besiedelt - hauptsächlich von der indigenen "
            "Tharu-Bevölkerung. Erst nach der Malaria-Bekämpfung in den 1960er Jahren strömten "
            "Siedler aus den Bergen ins Tal. Während des Bürgerkriegs (1996-2006) war Ghorahi 2001 "
            "Schauplatz eines spektakulären Maoisten-Angriffs auf die Armee-Kaserne, bei dem rund "
            "150 Soldaten getötet wurden. Heute prägen Landwirtschaft und der Gorakhnath-Tempel die Stadt."
        ),
        "facts": [
            "Bevölkerung ca. 156.000",
            "Größtes inneres Terai-Tal Asiens (2.955 km²)",
            "Provinz Lumbini, Dang-Distrikt",
            "Eingegliedert 1786 unter König Bahadur Shah",
            "Indigene Tharu-Bevölkerung",
            "Maoisten-Angriff auf Armee 2001",
            "Gorakhnath-Tempel",
            "Königreich Nepal 1768-2008",
        ],
    },
    "tikapur-cities-v2": {
        "desc": (
            "Tikapur liegt im Kailali-Distrikt der Provinz Sudurpashchim am Karnali-Fluss und hat "
            "rund 76.000 Einwohner. Die Stadt wurde in den 1970er Jahren während der Regierungszeit "
            "von König Mahendra Bir Bikram Shah Dev (1955-1972) im Königreich Nepal (1768-2008) als "
            "Mustersiedlung mit planmäßigem Grundriss gegründet. Mahendra ließ hier seine Sommer-"
            "Residenz mit großem Park errichten - der Tikapur Mahendra Park ist mit 360 Hektar "
            "einer der größten Parks Nepals. Am 24. August 2015 wurde Tikapur Schauplatz tragischer "
            "Ereignisse: Bei Protesten der indigenen Tharu-Bevölkerung gegen die neue Verfassung "
            "wurden acht Polizisten und ein 18 Monate altes Kind getötet. Die Stadt liegt in einer "
            "der wichtigsten Bananen- und Maisanbauregionen Nepals."
        ),
        "facts": [
            "Bevölkerung ca. 76.000",
            "Kailali-Distrikt, Provinz Sudurpashchim",
            "Liegt am Karnali-Fluss",
            "Gegründet in den 1970er Jahren",
            "Tikapur Mahendra Park (360 ha)",
            "Tragische Tharu-Proteste am 24. August 2015",
            "Bananen- und Maisanbauregion",
            "Königreich Nepal 1768-2008",
        ],
    },
    "kirtipur-cities-v2": {
        "desc": (
            "Kirtipur liegt auf einem 1.414 Meter hohen Hügel im Südwesten des Kathmandu-Tals und "
            "hat rund 67.000 Einwohner. Die Stadt war im 12. Jahrhundert eine Festung der Newar und "
            "spielte eine zentrale Rolle bei der Eroberung des Kathmandu-Tals durch König Prithvi "
            "Narayan Shah - drei Belagerungen waren nötig (1757, 1764, 1767), bevor Kirtipur fiel. "
            "Als Strafe für den hartnäckigen Widerstand ließ Prithvi Narayan Shah angeblich allen "
            "männlichen Einwohnern Nasen und Lippen abschneiden, bevor er 1768 das Königreich Nepal "
            "(1768-2008) gründete. Diese Geschichte ist bis heute umstritten. Kirtipur ist Sitz der "
            "1959 gegründeten Tribhuvan-Universität, der ältesten und größten Universität Nepals. "
            "Beim Erdbeben am 25. April 2015 wurden mehrere historische Tempel beschädigt."
        ),
        "facts": [
            "Bevölkerung ca. 67.000",
            "Auf 1.414 Metern Höhe im Kathmandu-Tal",
            "Festung der Newar im 12. Jahrhundert",
            "Drei Belagerungen 1757, 1764, 1767",
            "Eroberung durch Prithvi Narayan Shah",
            "Tribhuvan-Universität seit 1959",
            "Erdbeben am 25. April 2015",
            "Königreich Nepal 1768-2008",
        ],
    },
    "lahan-cities-v2": {
        "desc": (
            "Lahan liegt im Siraha-Distrikt der Provinz Madhesh am Mahendra-Highway, rund 250 "
            "Kilometer östlich von Kathmandu, und hat etwa 90.000 Einwohner. Die Stadt entwickelte "
            "sich nach dem Bau des Mahendra-Highways in den 1970er Jahren während des Königreichs "
            "Nepal (1768-2008) zum wichtigen Handelsplatz. Berühmt ist Lahan für das Sagarmatha "
            "Choudhary Eye Hospital, das 1983 von der niederländischen Augenärztin Ruit gegründet "
            "wurde und heute eines der größten Augenkrankenhäuser Südasiens ist - jährlich werden "
            "hier rund 80.000 Operationen durchgeführt, viele davon kostenlos für Arme. Die "
            "Hauptpatienten kommen aus Nepal und Indien. Die Region ist auch berühmt für Mango- und "
            "Litchi-Plantagen sowie für die jährlichen Mela-Pilgerfeste am Salhesh-Tempel."
        ),
        "facts": [
            "Bevölkerung ca. 90.000",
            "Siraha-Distrikt, Provinz Madhesh",
            "250 km östlich von Kathmandu",
            "Sagarmatha Choudhary Eye Hospital seit 1983",
            "Ca. 80.000 Augenoperationen jährlich",
            "Mahendra-Highway in den 1970er Jahren",
            "Mango- und Litchi-Plantagen",
            "Königreich Nepal 1768-2008",
        ],
    },
    "rajbiraj-cities-v2": {
        "desc": (
            "Rajbiraj ist Hauptort des Saptari-Distrikts in der Provinz Madhesh und hat rund 53.000 "
            "Einwohner. Die Stadt wurde 1938 während der Rana-Herrschaft (1846-1951) im Königreich "
            "Nepal (1768-2008) als die erste planmäßig errichtete Stadt Nepals gegründet. Premier "
            "Juddha Shamsher Rana ließ den Grundriss nach dem Vorbild der indischen Stadt Jaipur "
            "anlegen - mit breiten Straßen in einem strikten Rasternetz. Der Name Rajbiraj bedeutet "
            "'königliche Pracht'. Die Stadt liegt in der Terai-Tiefebene nahe der indischen Grenze "
            "und ist Zentrum der Maithili-Kultur. Während des Madhesh-Aufstandes 2007-2008 war "
            "Rajbiraj eine der Hauptbasen der Bewegung, die mehr Rechte für die Madheshi-Bevölkerung "
            "in Nepal forderte. Der Rajdevi-Tempel und die historischen Teiche prägen das Stadtbild."
        ),
        "facts": [
            "Bevölkerung ca. 53.000",
            "Hauptort des Saptari-Distrikts",
            "Erste planmäßig errichtete Stadt Nepals",
            "Gegründet 1938 unter Juddha Shamsher Rana",
            "Rasterlayout nach Vorbild Jaipur (Indien)",
            "Rana-Herrschaft 1846-1951",
            "Madhesh-Aufstand 2007-2008",
            "Königreich Nepal 1768-2008",
        ],
    },
    "deukhuri-cities-v2": {
        "desc": (
            "Deukhuri liegt im Dang-Distrikt der Provinz Lumbini im inneren Terai-Tal am Rapti-Fluss "
            "und wurde 2018 zur Hauptstadt der Provinz Lumbini bestimmt. Die Wahl war umstritten, "
            "da Butwal und Bhairahawa entwickelter sind, doch Deukhuri wurde wegen seiner zentralen "
            "Lage gewählt. Die kleine Stadt mit rund 70.000 Einwohnern muss erst zur Hauptstadt "
            "aufgebaut werden - die Bauarbeiten am Provinz-Verwaltungszentrum laufen seit 2019. "
            "Die Region war Teil des indigenen Tharu-Gebietes und während des Königreichs Nepal "
            "(1768-2008) königliches Jagdrevier wegen der Malaria. Erst nach der Malaria-Bekämpfung "
            "in den 1960er Jahren begann die systematische Besiedlung durch Berghochlandbewohner. "
            "Heute ist Deukhuri Zentrum der Reis- und Senfanbauregion."
        ),
        "facts": [
            "Hauptstadt der Provinz Lumbini seit 2018",
            "Bevölkerung ca. 70.000",
            "Dang-Distrikt, am Rapti-Fluss",
            "Bauarbeiten am Verwaltungszentrum seit 2019",
            "Indigenes Tharu-Gebiet",
            "Königliches Jagdrevier bis 1960",
            "Malaria-Bekämpfung 1960er Jahre",
            "Königreich Nepal 1768-2008",
        ],
    },
    "damak-cities-v2": {
        "desc": (
            "Damak liegt im Jhapa-Distrikt der Provinz Koshi am Mahendra-Highway, rund 20 Kilometer "
            "westlich der ostnepalesischen Grenze zu Indien, und hat etwa 96.000 Einwohner. Die "
            "Stadt entwickelte sich nach dem Bau des Mahendra-Highways in den 1970er Jahren während "
            "des Königreichs Nepal (1768-2008) zum Handelszentrum für Tee, Kardamom und Ingwer aus "
            "dem ostnepalesischen Hügelland. Damak wurde international bekannt als Standort von "
            "sieben Flüchtlingslagern für ethnische Nepalesen aus Bhutan (sogenannte Lhotshampa), "
            "die zwischen 1990 und 1992 aus Bhutan vertrieben wurden. Auf dem Höhepunkt lebten "
            "hier rund 110.000 bhutanische Flüchtlinge. Seit 2007 wurden über 90.000 von ihnen in "
            "Drittländer wie die USA und Kanada umgesiedelt. Heute prägen Teeplantagen die Region."
        ),
        "facts": [
            "Bevölkerung ca. 96.000",
            "Jhapa-Distrikt, Provinz Koshi",
            "Mahendra-Highway in den 1970er Jahren",
            "Sieben Flüchtlingslager für Lhotshampa",
            "110.000 bhutanische Flüchtlinge auf Höhepunkt",
            "Vertreibung aus Bhutan 1990-1992",
            "Umsiedlung in Drittländer seit 2007",
            "Königreich Nepal 1768-2008",
        ],
    },
    "birtamod-cities-v2": {
        "desc": (
            "Birtamod liegt im Jhapa-Distrikt der Provinz Koshi am Mahendra-Highway, rund 35 "
            "Kilometer von der indischen Grenze entfernt, und hat etwa 105.000 Einwohner. Die Stadt "
            "ist heute die kommerziellste Stadt Ostnepals und wuchs in den 1990er und 2000er "
            "Jahren explosionsartig - vorher war Birtamod ein einfacher Dorfmarkt. Der Name "
            "bedeutet wörtlich 'Birta-Markt', wobei 'Birta' Land bezeichnet, das im Königreich "
            "Nepal (1768-2008) während der Rana-Herrschaft (1846-1951) als königliche Schenkung "
            "vergeben wurde. Birtamod ist Zentrum des Tee-, Kardamom- und Ingwerhandels für die "
            "ostnepalesische Hügelregion. Die Stadt liegt nur 50 Kilometer von Darjeeling (Indien) "
            "entfernt und kulturell stark indisch und bengalisch geprägt. Zwei Stunden Autofahrt "
            "trennen Birtamod von Bhutan."
        ),
        "facts": [
            "Bevölkerung ca. 105.000",
            "Jhapa-Distrikt, Provinz Koshi",
            "35 km von der indischen Grenze",
            "Kommerziellste Stadt Ostnepals",
            "Boom seit den 1990er Jahren",
            "Tee-, Kardamom- und Ingwerhandel",
            "50 km von Darjeeling (Indien)",
            "Königreich Nepal 1768-2008, Rana 1846-1951",
        ],
    },
    "banepa-cities-v2": {
        "desc": (
            "Banepa liegt 26 Kilometer östlich von Kathmandu am Araniko-Highway, der historischen "
            "Handelsroute zwischen Kathmandu und Tibet, auf 1.460 Metern Höhe und hat rund 56.000 "
            "Einwohner. Die Stadt war zwischen 1326 und 1382 eine kleine eigenständige Newar-"
            "Königsstadt, bevor sie ins Bhaktapur-Königreich integriert wurde. Sie liegt im "
            "Kavrepalanchok-Distrikt der Provinz Bagmati. Während der Vereinigung Nepals durch "
            "König Prithvi Narayan Shah 1768 (Königreich Nepal 1768-2008) wurde Banepa Teil des "
            "vereinigten Reiches. Der Araniko-Highway wurde 1967 mit chinesischer Hilfe gebaut und "
            "verbindet Kathmandu mit Kodari an der tibetischen Grenze. Beim Erdbeben am 25. April "
            "2015 (Stärke 7,8) wurde Banepa schwer beschädigt - viele alte Newari-Häuser stürzten "
            "ein. Der Chandeshwori-Tempel ist eine wichtige Pilgerstätte."
        ),
        "facts": [
            "Bevölkerung ca. 56.000",
            "26 km östlich von Kathmandu",
            "Auf 1.460 Metern Höhe",
            "Eigene Newar-Königsstadt 1326-1382",
            "Araniko-Highway nach Tibet seit 1967",
            "Erdbeben am 25. April 2015 (Stärke 7,8)",
            "Chandeshwori-Tempel",
            "Königreich Nepal 1768-2008",
        ],
    },
    "gorkha-cities-v2": {
        "desc": (
            "Gorkha liegt auf 1.135 Metern Höhe im Gorkha-Distrikt der Provinz Gandaki, rund 140 "
            "Kilometer westlich von Kathmandu, und hat etwa 35.000 Einwohner. Die Stadt ist der "
            "Geburtsort des Königs Prithvi Narayan Shah (1723-1775), der 1768 das Königreich "
            "Gorkha auf das vereinigte Königreich Nepal (1768-2008) ausweitete. Der Gorkha-Durbar-"
            "Palast aus dem 17. Jahrhundert thront auf einem 300 Meter über der Stadt aufragenden "
            "Felsen und ist Wallfahrtsort. Die berühmten Gurkha-Soldaten der britischen und "
            "indischen Armee haben ihren Namen von dieser Stadt - die Briten warben sie nach dem "
            "Anglo-Nepalesischen Krieg (1814-1816) und dem Sugauli-Vertrag (1816) als Söldner an. "
            "Das Epizentrum des Erdbebens vom 25. April 2015 (Stärke 7,8) lag im Gorkha-Distrikt."
        ),
        "facts": [
            "Bevölkerung ca. 35.000",
            "Auf 1.135 Metern Höhe",
            "140 km westlich von Kathmandu",
            "Geburtsort von König Prithvi Narayan Shah (1723)",
            "Gorkha-Durbar-Palast aus dem 17. Jahrhundert",
            "Ursprung der Gurkha-Soldaten",
            "Sugauli-Vertrag 1816",
            "Epizentrum Erdbeben 25. April 2015",
        ],
    },
    "kapilvastu-cities-v2": {
        "desc": (
            "Kapilvastu, offiziell Taulihawa, ist Hauptort des Kapilvastu-Distrikts in der Provinz "
            "Lumbini und hat rund 36.000 Einwohner. Die Region gilt als das antike Königreich der "
            "Shakya, in dem Siddhartha Gautama, der spätere Buddha (geboren um 563 v. Chr. in "
            "Lumbini, 27 km östlich), die ersten 29 Jahre seines Lebens verbrachte. Die "
            "archäologischen Ruinen von Tilaurakot - 4 Kilometer nördlich der heutigen Stadt - "
            "werden von vielen Forschern als die antike Hauptstadt Kapilavastu identifiziert "
            "(britische Ausgrabungen seit 1899). Buddha verließ diese Stadt im Alter von 29 Jahren, "
            "um seine spirituelle Suche zu beginnen. Während des Königreichs Nepal (1768-2008) "
            "war die Region als westliches Terai-Anbaugebiet wichtig. Heute ist Kapilvastu zentrale "
            "buddhistische Pilgerstätte mit jährlichen Festlichkeiten."
        ),
        "facts": [
            "Bevölkerung ca. 36.000",
            "Provinz Lumbini, Kapilvastu-Distrikt",
            "Antike Hauptstadt der Shakya",
            "Buddha verbrachte hier 29 Jahre",
            "Buddha geboren um 563 v. Chr. in Lumbini",
            "Tilaurakot-Ruinen 4 km nördlich",
            "Britische Ausgrabungen seit 1899",
            "Königreich Nepal 1768-2008",
        ],
    },
    "baglung-cities-v2": {
        "desc": (
            "Baglung liegt auf 980 Metern Höhe am Kali-Gandaki-Fluss in der Provinz Gandaki und "
            "hat rund 28.000 Einwohner. Die Stadt am Hang oberhalb der tiefsten Schlucht der Welt "
            "(Kali Gandaki, 6.000 Meter tief zwischen Annapurna und Dhaulagiri) gilt als Tor zum "
            "Dhaulagiri-Massiv mit dem 8.167 Meter hohen Dhaulagiri I, dem siebthöchsten Berg der "
            "Welt. Baglung wurde 1786 von König Bahadur Shah ins Königreich Nepal (1768-2008) "
            "eingegliedert. Die Stadt ist berühmt für ihre traditionelle Hängebrücken-Bautechnik - "
            "über 280 Hängebrücken wurden im Distrikt errichtet, mehr als irgendwo sonst in Nepal. "
            "Während des Bürgerkriegs (1996-2006) war die Region Hochburg der Maoisten. Der "
            "Kalika-Bhagawati-Tempel auf einem Hügel über der Stadt ist eine wichtige Shakti-Pilgerstätte."
        ),
        "facts": [
            "Bevölkerung ca. 28.000",
            "Auf 980 Metern Höhe",
            "Provinz Gandaki, am Kali-Gandaki-Fluss",
            "Tor zum Dhaulagiri (8.167 m, 7. höchster der Welt)",
            "Tiefste Schlucht der Welt (6.000 m)",
            "Eingegliedert 1786",
            "Über 280 Hängebrücken im Distrikt",
            "Königreich Nepal 1768-2008",
        ],
    },
    "mechinagar-cities-v2": {
        "desc": (
            "Mechinagar liegt im Jhapa-Distrikt der Provinz Koshi am Mechi-Fluss, der die Grenze "
            "zwischen Nepal und Indien bildet, und ist mit rund 113.000 Einwohnern die östlichste "
            "Stadt Nepals. Der Stadtteil Kakarvitta ist der wichtigste Grenzübergang in den "
            "indischen Bundesstaat Westbengalen sowie nach Bangladesch (über das Siliguri-Korridor) "
            "und Bhutan (140 km entfernt). Während des Königreichs Nepal (1768-2008) wurde dieser "
            "Grenzposten erst nach dem Sugauli-Vertrag (1816) und der Rückgabe von Naya Muluk "
            "(Neues Land) 1860 endgültig festgelegt. Mechinagar entwickelte sich nach dem Bau des "
            "Mahendra-Highways in den 1970er Jahren rasch und ist heute Zentrum des Teehandels - "
            "in der Region Ilam und Jhapa werden hochwertige Tees produziert, die mit Darjeeling "
            "konkurrieren."
        ),
        "facts": [
            "Bevölkerung ca. 113.000",
            "Östlichste Stadt Nepals",
            "Provinz Koshi, Jhapa-Distrikt",
            "Liegt am Mechi-Fluss (Grenze zu Indien)",
            "Kakarvitta-Grenzübergang nach Westbengalen",
            "Sugauli-Vertrag 1816, Naya Muluk 1860",
            "Mahendra-Highway seit den 1970er Jahren",
            "Königreich Nepal 1768-2008",
        ],
    },
}


def to_str_arr(items: list[str]) -> str:
    parts = []
    for it in items:
        esc = it.replace("\\", "\\\\").replace('"', '\\"')
        parts.append(f'"{esc}"')
    return "[" + ", ".join(parts) + "]"


def find_empty_de(text: str) -> list[str]:
    poi_pattern = re.compile(r'id:\s*"([^"]+)"')
    matches = list(poi_pattern.finditer(text))
    empty = []
    for i, m in enumerate(matches):
        poi_id = m.group(1)
        start = m.start()
        end = matches[i + 1].start() if i + 1 < len(matches) else len(text)
        block = text[start:end]
        da = re.search(r'descriptionAdvanced:\s*\{', block)
        if not da:
            empty.append(poi_id)
            continue
        body_start = da.end()
        depth = 1
        j = body_start
        while j < len(block) and depth > 0:
            if block[j] == '{':
                depth += 1
            elif block[j] == '}':
                depth -= 1
            j += 1
        body = block[body_start:j - 1]
        de_match = re.search(r'\bde:\s*"([^"]*)"', body)
        if not de_match or not de_match.group(1).strip():
            empty.append(poi_id)
    return empty


def main():
    src = FILE.read_text(encoding="utf-8")
    empty_before = find_empty_de(src)
    print(f"Empty descriptionAdvanced.de before: {len(empty_before)}")

    target_ids = [pid for pid in empty_before if pid in DATA]
    print(f"Target POIs (in DATA, skipping filled): {len(target_ids)}")

    patched = 0
    skipped = []
    for poi_id in target_ids:
        data = DATA[poi_id]
        desc_de = data["desc"].replace("\\", "\\\\").replace('"', '\\"')
        facts_arr = to_str_arr(data["facts"])

        id_re = re.compile(r'id:\s*"' + re.escape(poi_id) + r'"')
        m = id_re.search(src)
        if not m:
            skipped.append(poi_id + " (id not found)")
            continue
        facts_m = re.search(r'facts:\s*\{', src[m.end():])
        if not facts_m:
            skipped.append(poi_id + " (no facts block)")
            continue
        facts_open = m.end() + facts_m.end()
        depth = 1
        j = facts_open
        while j < len(src) and depth > 0:
            if src[j] == '{':
                depth += 1
            elif src[j] == '}':
                depth -= 1
            j += 1
        facts_end = j

        adv = (
            ',\n    descriptionAdvanced: { de: "' + desc_de + '" }'
            + ',\n    factsAdvanced: { de: ' + facts_arr + ' }'
        )
        src = src[:facts_end] + adv + src[facts_end:]
        patched += 1

    FILE.write_text(src, encoding="utf-8")
    empty_after = find_empty_de(src)
    print(f"Patched {patched} POIs")
    print(f"Empty descriptionAdvanced.de after: {len(empty_after)}")
    if skipped:
        print("Skipped:")
        for s in skipped:
            print(" -", s)


if __name__ == "__main__":
    main()
