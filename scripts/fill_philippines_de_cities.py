"""Fill descriptionAdvanced.de + factsAdvanced.de for POIs in poiExtraPhilippinesCitiesV2.ts

The file currently has no descriptionAdvanced/factsAdvanced fields. This script
inserts them after the existing `facts: { ... }` block for each targeted POI.
"""
from __future__ import annotations
import re
from pathlib import Path

FILE = Path(r"C:\Users\User\plizio-repo\lib\visualLab\data\poiExtraPhilippinesCitiesV2.ts")

DATA: dict[str, dict] = {
    "ph-manila-cities-v2": {
        "desc": (
            "Manila ist seit 1976 erneut die Hauptstadt der Philippinen und liegt am Ostufer der Manilabucht. "
            "Die Stadt wurde am 24. Juni 1571 von dem spanischen Konquistador Miguel López de Legazpi "
            "gegründet, nachdem Ferdinand Magellan 1521 als erster Europäer die Inseln erreicht hatte. "
            "Während der spanischen Kolonialzeit von 1565 bis 1898 wurde das ummauerte Viertel Intramuros "
            "errichtet, ein einzigartiges Beispiel kolonialer Stadtplanung. Nach dem Spanisch-Amerikanischen "
            "Krieg ging die Stadt 1898 an die USA über und blieb bis 1946 unter US-Verwaltung. Im Zweiten "
            "Weltkrieg wurde Manila bei der Schlacht 1945 fast vollständig zerstört. Heute leben im "
            "Stadtgebiet rund 1,8 Millionen Menschen, in der Metropolregion über 13 Millionen."
        ),
        "facts": [
            "Am 24. Juni 1571 von Miguel López de Legazpi gegründet",
            "Stadtgebiet ca. 1,8 Millionen, Metropolregion über 13 Millionen Einwohner",
            "Eine der dichtestbesiedelten Städte der Welt",
            "Spanische Kolonialzeit 1565 bis 1898, danach US-Verwaltung bis 1946",
            "Historisches Mauerviertel Intramuros gegründet 1571",
            "Universität Santo Tomás 1611 gegründet, älter als Harvard",
            "Bei der Schlacht von Manila 1945 wurde die Stadt weitgehend zerstört",
            "Hauptstadt der Philippinen erneut seit dem 24. Juni 1976",
        ],
    },
    "ph-quezon-city-cities-v2": {
        "desc": (
            "Quezon City ist mit über 2,9 Millionen Einwohnern die bevölkerungsreichste Stadt der "
            "Philippinen und Teil der Metropolregion Manila. Die Stadt wurde am 12. Oktober 1939 "
            "von Präsident Manuel L. Quezon gegründet, der sie als künftige Hauptstadt anstelle "
            "Manilas plante. Tatsächlich diente Quezon City von 1948 bis 1976 als offizielle "
            "Hauptstadt der Philippinen, bevor Manila diese Rolle zurückerhielt. Nach dem Ende "
            "der US-Verwaltung 1946 entstanden hier zahlreiche Regierungsgebäude, Universitäten "
            "und Medienzentren. Die Universität der Philippinen Diliman ist die führende "
            "staatliche Hochschule des Landes. Quezon City ist heute Sitz des Repräsentantenhauses "
            "und Heimat der größten Fernsehnetzwerke ABS-CBN und GMA."
        ),
        "facts": [
            "Am 12. Oktober 1939 von Präsident Manuel L. Quezon gegründet",
            "Über 2,9 Millionen Einwohner, größte Stadt der Philippinen",
            "Hauptstadt der Philippinen von 1948 bis 1976",
            "Sitz des Repräsentantenhauses (Batasang Pambansa)",
            "Universität der Philippinen Diliman gegründet 1949",
            "Quezon Memorial Circle mit 66 Meter hohem Mausoleum",
            "Heimat der TV-Sender ABS-CBN und GMA Network",
            "Fläche von rund 161 km², größte Stadt Metro Manilas nach Fläche",
        ],
    },
    "ph-davao-city-cities-v2": {
        "desc": (
            "Davao City auf der Südinsel Mindanao ist mit einer Fläche von rund 2.444 km² die "
            "flächenmäßig größte Stadt der Philippinen und mit etwa 1,8 Millionen Einwohnern die "
            "drittgrößte. Die Stadt wurde am 29. Juni 1848 vom spanischen Eroberer José Cruz de "
            "Uyanguren während der spanischen Kolonialzeit (1565-1898) als Nueva Vergara gegründet. "
            "Nach dem Übergang in die US-Verwaltung 1898 entwickelte sich Davao zum landwirtschaftlichen "
            "Zentrum mit Bananen-, Ananas- und Abacá-Plantagen, viele davon von japanischen Siedlern "
            "betrieben. Vor dem Berg Apo, mit 2.954 m dem höchsten Gipfel der Philippinen, gelegen, "
            "ist Davao heute ein wichtiges Handels- und Verkehrsdrehkreuz Mindanaos. Die Stadt ist "
            "Heimatstadt des ehemaligen Präsidenten Rodrigo Duterte und berühmt für die Durianfrucht."
        ),
        "facts": [
            "Am 29. Juni 1848 von José Cruz de Uyanguren als Nueva Vergara gegründet",
            "Rund 1,8 Millionen Einwohner, Fläche 2.444 km²",
            "Flächenmäßig größte Stadt der Philippinen",
            "Liegt am Fuß des Berges Apo (2.954 m), höchster Berg des Landes",
            "Spanische Kolonialzeit 1565-1898, danach US-Verwaltung bis 1946",
            "Bekannt als Durianhauptstadt der Philippinen",
            "Heimatstadt von Ex-Präsident Rodrigo Duterte",
            "Wichtigster Hafen und Flughafen Mindanaos",
        ],
    },
    "ph-cebu-city-cities-v2": {
        "desc": (
            "Cebu City auf der gleichnamigen Visayas-Insel ist mit rund 970.000 Einwohnern die "
            "älteste Stadt der Philippinen und war die erste spanische Hauptstadt des Archipels. "
            "Ferdinand Magellan landete hier am 7. April 1521 und pflanzte das berühmte Magellan-Kreuz, "
            "bevor er kurz darauf am 27. April 1521 in der Schlacht von Mactan gegen Häuptling "
            "Lapu-Lapu fiel. Am 13. Februar 1565 gründete Miguel López de Legazpi hier die erste "
            "spanische Siedlung Villa de San Miguel, später Villa del Santísimo Nombre de Jesús, "
            "und damit den Ausgangspunkt der spanischen Kolonialherrschaft, die bis 1898 dauerte. "
            "Bis zur Verlegung der Hauptstadt nach Manila 1571 war Cebu der Verwaltungssitz. Heute "
            "ist Cebu das wichtigste Wirtschaftszentrum der Visayas und berühmt für das Sinulog-Fest."
        ),
        "facts": [
            "Am 13. Februar 1565 von Miguel López de Legazpi gegründet",
            "Älteste Stadt der Philippinen, rund 970.000 Einwohner",
            "Erste Hauptstadt der Philippinen bis 1571",
            "Magellan landete hier am 7. April 1521",
            "Schlacht von Mactan am 27. April 1521, Tod Magellans",
            "Spanische Kolonialzeit 1565-1898, danach US-Verwaltung",
            "Sinulog-Festival jährlich im Januar zu Ehren des Santo Niño",
            "Magellan-Kreuz seit 1521 als Wahrzeichen der Stadt",
        ],
    },
    "ph-zamboanga-city-cities-v2": {
        "desc": (
            "Zamboanga City an der Westspitze Mindanaos ist mit rund 970.000 Einwohnern eine der "
            "größten Hafenstädte der Philippinen. Die spanische Kolonialgründung erfolgte am "
            "23. Juni 1635 mit dem Bau der Festung Real Fuerza de San José, später als Fort Pilar "
            "bekannt, gegen die Angriffe der muslimischen Sulu-Sultane. Während der spanischen "
            "Kolonialzeit (1565-1898) entwickelte sich hier die Kreolsprache Chavacano, die einzige "
            "spanischbasierte Kreolsprache Asiens und bis heute Muttersprache der Mehrheit der "
            "Bewohner. Nach dem Ende der spanischen Herrschaft 1898 stand die Stadt unter US-Verwaltung "
            "bis 1946. Wegen ihres lateinischen Erbes trägt sie den Beinamen Asiens Lateinische Stadt. "
            "Berühmt sind die bunten Vinta-Boote der Sama-Bajau und die Insel Santa Cruz mit rosa Sand."
        ),
        "facts": [
            "Festung Fort Pilar gegründet am 23. Juni 1635",
            "Rund 970.000 Einwohner, größte Stadt der Region Zamboanga Halbinsel",
            "Heimat der Chavacano-Sprache, einziges spanischbasiertes Kreol Asiens",
            "Spanische Kolonialzeit 1565-1898, US-Verwaltung 1898-1946",
            "Beiname Asiens Lateinische Stadt",
            "Berühmt für die bunten Vinta-Auslegerboote",
            "Insel Santa Cruz mit rosa Sandstrand vorgelagert",
            "Wichtiger Sardinen- und Meeresfrüchteproduzent der Philippinen",
        ],
    },
    "ph-antipolo-cities-v2": {
        "desc": (
            "Antipolo liegt rund 25 Kilometer östlich von Manila in der Provinz Rizal auf einem "
            "Plateau in den Sierra-Madre-Ausläufern und zählt heute über 880.000 Einwohner. Die "
            "spanische Missionsgründung erfolgte 1591 durch Jesuiten. Berühmt wurde die Stadt durch "
            "das Marienbildnis Nuestra Señora de la Paz y Buen Viaje, das 1626 aus Mexiko gebracht "
            "wurde und als Schutzpatronin der Galeonenfahrt zwischen Manila und Acapulco diente. "
            "Während der spanischen Kolonialzeit (1565-1898) und der US-Verwaltung (1898-1946) "
            "entwickelte sich Antipolo zum bedeutendsten katholischen Pilgerziel der Philippinen. "
            "Am 26. Juli 2011 wurde der Wallfahrtsdom zur Internationalen Basilika erhoben. Im "
            "Jahr 2020 wurde Antipolo zur offiziellen Hauptstadt der Provinz Rizal erklärt."
        ),
        "facts": [
            "Spanische Missionsgründung durch Jesuiten 1591",
            "Über 880.000 Einwohner, größte Stadt der Provinz Rizal",
            "Marienbildnis seit 1626 in der Stadt",
            "Internationale Basilika seit 26. Juli 2011",
            "Spanische Kolonialzeit 1565-1898, US-Verwaltung 1898-1946",
            "Schutzpatronin der Manila-Acapulco-Galeonen",
            "Hauptstadt der Provinz Rizal seit 2020",
            "Berühmt für Cashewnüsse und Suman-Reiskuchen",
        ],
    },
    "ph-pasig-cities-v2": {
        "desc": (
            "Pasig liegt am gleichnamigen Fluss im Osten der Metropolregion Manila und zählt rund "
            "800.000 Einwohner. Die Siedlung wurde von den Augustinern 1573 als Misions-Pueblo "
            "gegründet, nur zwei Jahre nach Manila, und gehört damit zu den ältesten Orten der "
            "Philippinen. Während der spanischen Kolonialzeit (1565-1898) war Pasig ein wichtiger "
            "Handelsumschlagplatz auf der Wasserstraße zwischen Manilabucht und der Lagune Laguna "
            "de Bay. Bis 1975 war die Stadt Hauptstadt der Provinz Rizal. Nach der US-Verwaltung "
            "(1898-1946) wurde Pasig 1995 zur eigenständigen Stadt erhoben. Heute beherbergt sie "
            "mit dem Ortigas Center eines der größten Geschäftsviertel des Landes mit Wolkenkratzern, "
            "Einkaufszentren und Konzernzentralen wie San Miguel Corporation und Meralco."
        ),
        "facts": [
            "1573 von Augustinern als Mission gegründet",
            "Rund 800.000 Einwohner",
            "Hauptstadt der Provinz Rizal bis 1975",
            "Stadtstatus seit dem 25. Januar 1995",
            "Ortigas Center als zweitgrößtes Geschäftsviertel Metro Manilas",
            "Spanische Kolonialzeit 1565-1898, US-Verwaltung 1898-1946",
            "Pasig-Fluss verbindet Manilabucht und Laguna de Bay",
            "Sitz von San Miguel Corporation und Meralco",
        ],
    },
    "ph-taguig-cities-v2": {
        "desc": (
            "Taguig im Süden der Metropolregion Manila zählt rund 890.000 Einwohner und ist eine "
            "der am schnellsten wachsenden Städte der Philippinen. Die Siedlung wurde 1587 von den "
            "Augustinern gegründet, der Name leitet sich vom Tagalog-Wort tagagiik (Reisdrescher) "
            "ab. Während der spanischen Kolonialzeit (1565-1898) war Taguig ein Fischerdorf am "
            "Ufer der Laguna de Bay. Nach der US-Verwaltung (1898-1946) und der Übergabe der "
            "ehemaligen US-Militärbasis Fort Bonifacio durch den Bases Conversion Development "
            "Authority Act von 1992 entstand hier das moderne Geschäftsviertel Bonifacio Global "
            "City (BGC) mit Wolkenkratzern und Konzernzentralen. Stadtstatus erhielt Taguig erst "
            "am 8. Dezember 2004. Hier liegt auch der Manila American Cemetery mit 17.184 Gräbern."
        ),
        "facts": [
            "1587 von Augustinern gegründet",
            "Rund 890.000 Einwohner",
            "Stadtstatus seit dem 8. Dezember 2004",
            "Bonifacio Global City auf ehemaligem US-Militärgelände Fort Bonifacio",
            "Manila American Cemetery mit 17.184 Gräbern aus dem Zweiten Weltkrieg",
            "Spanische Kolonialzeit 1565-1898, US-Verwaltung 1898-1946",
            "Liegt am Ufer der Laguna de Bay, dem größten See der Philippinen",
            "Name aus tagagiik (Reisdrescher) abgeleitet",
        ],
    },
    "ph-cagayan-de-oro-cities-v2": {
        "desc": (
            "Cagayan de Oro an der Nordküste Mindanaos zählt rund 730.000 Einwohner und ist die "
            "Hauptstadt der Region Northern Mindanao sowie der Provinz Misamis Oriental. Die "
            "spanische Missionsgründung erfolgte 1622 durch die Augustiner-Rekollekten, die hier "
            "die Mission San Agustín errichteten. Während der spanischen Kolonialzeit (1565-1898) "
            "war die Siedlung als Cagayán de Misamis bekannt. Berühmt wurde die Stadt durch die "
            "Schlacht am Macahambus-Hügel am 4. Juni 1900, bei der philippinische Truppen unter "
            "Apolinario Velez die US-Streitkräfte schlugen, einer der wenigen Siege im Philippinisch-"
            "Amerikanischen Krieg (1899-1902). Stadtstatus erhielt Cagayan de Oro am 15. Juni 1950. "
            "Heute ist sie das Handelszentrum Nord-Mindanaos und berühmt für Wildwasser-Rafting."
        ),
        "facts": [
            "Spanische Mission 1622 durch Augustiner-Rekollekten gegründet",
            "Rund 730.000 Einwohner",
            "Stadtstatus seit dem 15. Juni 1950",
            "Schlacht am Macahambus-Hügel am 4. Juni 1900",
            "Hauptstadt der Region Northern Mindanao",
            "Spanische Kolonialzeit 1565-1898, US-Verwaltung 1898-1946",
            "Beiname Stadt der goldenen Freundschaft",
            "Wildwasser-Rafting auf dem Cagayan-Fluss als Touristenmagnet",
        ],
    },
    "ph-paranaque-cities-v2": {
        "desc": (
            "Parañaque im Süden der Metropolregion Manila zählt rund 690.000 Einwohner und liegt "
            "an der Manilabucht. Der Ort wurde 1572 von den Augustinern gegründet, nur ein Jahr "
            "nach Manila, und gehört damit zu den ältesten Siedlungen Luzons. Der Name leitet "
            "sich angeblich von palanyag ab, einem traditionellen Liebeslied der Bewohner. "
            "Während der spanischen Kolonialzeit (1565-1898) waren Salzgewinnung und Fischerei "
            "die Haupterwerbszweige. Hier befindet sich der nationale Schrein Baclaran, eine "
            "Wallfahrtskirche der Redemptoristen, die seit 1958 jeden Mittwoch hunderttausende "
            "Pilger zur Andacht zur Mutter der immerwährenden Hilfe anzieht. Nach US-Verwaltung "
            "(1898-1946) erhielt Parañaque am 15. Februar 1998 den Stadtstatus. Heute beherbergt "
            "die Stadt die Entertainment City mit großen Casino-Resorts wie Solaire und Okada."
        ),
        "facts": [
            "1572 von Augustinern gegründet",
            "Rund 690.000 Einwohner",
            "Stadtstatus seit dem 15. Februar 1998",
            "Wallfahrtskirche Baclaran als nationaler Schrein der Mutter der immerwährenden Hilfe",
            "Entertainment City mit Solaire, Okada und City of Dreams Manila",
            "Spanische Kolonialzeit 1565-1898, US-Verwaltung 1898-1946",
            "Name vom Liebeslied palanyag abgeleitet",
            "SM Mall of Asia in der Nähe als eines der größten Einkaufszentren Asiens",
        ],
    },
    "ph-dasmarinas-cities-v2": {
        "desc": (
            "Dasmariñas in der Provinz Cavite südlich von Manila zählt rund 705.000 Einwohner und "
            "ist die größte Stadt der Provinz. Der Ort wurde 1867 als Pueblo Pérez Dasmariñas "
            "gegründet und nach dem spanischen Generalgouverneur Gómez Pérez Dasmariñas benannt, "
            "der die Philippinen von 1590 bis 1593 regierte. Während der spanischen Kolonialzeit "
            "(1565-1898) war die Region für ihre Zuckerrohr- und Reisplantagen bekannt. Im "
            "Philippinisch-Amerikanischen Krieg (1899-1902) während der US-Verwaltung (1898-1946) "
            "fanden hier Gefechte statt. Stadtstatus erhielt Dasmariñas am 25. November 2009. "
            "Heute ist die Stadt das Bildungszentrum Cavites mit der renommierten De La Salle "
            "Universität Dasmariñas (gegründet 1977) und beherbergt zahlreiche Industriezonen "
            "des First Cavite Industrial Estate."
        ),
        "facts": [
            "1867 als Pueblo Pérez Dasmariñas gegründet",
            "Rund 705.000 Einwohner, größte Stadt der Provinz Cavite",
            "Stadtstatus seit dem 25. November 2009",
            "Benannt nach Generalgouverneur Gómez Pérez Dasmariñas (1590-1593)",
            "De La Salle Universität Dasmariñas gegründet 1977",
            "Spanische Kolonialzeit 1565-1898, US-Verwaltung 1898-1946",
            "Universitätshauptstadt der Provinz Cavite",
            "First Cavite Industrial Estate als wichtige Industriezone",
        ],
    },
    "ph-valenzuela-cities-v2": {
        "desc": (
            "Valenzuela im Norden der Metropolregion Manila zählt rund 715.000 Einwohner und war "
            "ursprünglich Teil der Provinz Bulacan. Die Siedlung wurde 1623 von Augustinern als "
            "Polo gegründet. Während der spanischen Kolonialzeit (1565-1898) und der US-Verwaltung "
            "(1898-1946) blieb sie ein landwirtschaftliches Zentrum. Im Jahr 1963 wurde der Ort "
            "in Valenzuela umbenannt zu Ehren des Arztes und Revolutionärs Pío Valenzuela "
            "(1869-1956), der Mitbegründer der Geheimgesellschaft Katipunan war und am Aufstand "
            "gegen Spanien 1896 teilnahm. Stadtstatus erhielt Valenzuela am 14. Februar 1998. "
            "Heute ist sie eines der wichtigsten Industriezentren der Metropolregion Manila mit "
            "Lebensmittel-, Textil- und Kunststoffproduktion und beherbergt Konzerne wie Universal "
            "Robina und Wyeth Philippines."
        ),
        "facts": [
            "1623 von Augustinern als Polo gegründet",
            "Rund 715.000 Einwohner",
            "Stadtstatus seit dem 14. Februar 1998",
            "1963 nach Dr. Pío Valenzuela (1869-1956) umbenannt",
            "Pío Valenzuela war Mitbegründer der Katipunan-Revolutionsbewegung",
            "Spanische Kolonialzeit 1565-1898, US-Verwaltung 1898-1946",
            "Eines der wichtigsten Industriezentren Metro Manilas",
            "Früher Teil der Provinz Bulacan",
        ],
    },
    "ph-bacoor-cities-v2": {
        "desc": (
            "Bacoor in der Provinz Cavite südlich von Manila zählt rund 665.000 Einwohner und "
            "wurde 1671 von Augustinern gegründet. Der Name stammt vom Tagalog-Wort bakood "
            "(erhöhtes Land) ab. Während der spanischen Kolonialzeit (1565-1898) gewann die "
            "Stadt historische Bedeutung durch die Schlacht an der Zapote-Brücke am 17. Februar "
            "1897, in der philippinische Revolutionäre unter Edilberto Evangelista den Spaniern "
            "eine schwere Niederlage zufügten. Eine zweite Schlacht an derselben Brücke fand am "
            "13. Juni 1899 zu Beginn der US-Verwaltung (1898-1946) statt. Bacoor war von 1898 "
            "bis 1899 sogar Sitz der Revolutionsregierung von Emilio Aguinaldo. Stadtstatus "
            "erhielt Bacoor am 28. Juni 2012. Die Stadt ist berühmt für ihre Muschelzucht "
            "(tahong) in der Bacoor-Bucht."
        ),
        "facts": [
            "1671 von Augustinern gegründet",
            "Rund 665.000 Einwohner",
            "Stadtstatus seit dem 28. Juni 2012",
            "Schlacht an der Zapote-Brücke am 17. Februar 1897",
            "Sitz der Revolutionsregierung Aguinaldos 1898-1899",
            "Spanische Kolonialzeit 1565-1898, US-Verwaltung 1898-1946",
            "Berühmt für Muschelzucht (tahong) in der Bacoor-Bucht",
            "Name vom Tagalog bakood (erhöhtes Land) abgeleitet",
        ],
    },
    "ph-general-santos-cities-v2": {
        "desc": (
            "General Santos im Süden Mindanaos zählt rund 700.000 Einwohner und ist die "
            "südlichste Großstadt der Philippinen. Die Stadt wurde am 27. Februar 1939 als "
            "Buayan gegründet und 1954 nach dem Pionier und General Paulino Santos (1890-1945) "
            "umbenannt, der hier die nationale Siedlungsbewegung National Land Settlement "
            "Administration leitete und christliche Siedler aus Luzon und den Visayas "
            "ansiedelte. Anders als Manila oder Cebu wurde der Ort erst nach dem Ende der "
            "spanischen Kolonialzeit (1565-1898) und während der US-Verwaltung (1898-1946) "
            "richtig erschlossen. Stadtstatus erhielt General Santos am 5. September 1968. "
            "Berühmt ist die Stadt als Tunfischhauptstadt der Philippinen mit dem größten "
            "Tunfischhafen Südostasiens und als Heimatstadt des Boxweltmeisters Manny Pacquiao."
        ),
        "facts": [
            "Am 27. Februar 1939 als Buayan gegründet",
            "Rund 700.000 Einwohner",
            "Stadtstatus seit dem 5. September 1968",
            "1954 nach General Paulino Santos (1890-1945) umbenannt",
            "Tunfischhauptstadt der Philippinen mit größtem Tunfischhafen Südostasiens",
            "Heimatstadt des Boxweltmeisters Manny Pacquiao",
            "Spanische Kolonialzeit 1565-1898, US-Verwaltung 1898-1946",
            "Südlichste Großstadt des Landes",
        ],
    },
    "ph-las-pinas-cities-v2": {
        "desc": (
            "Las Piñas im Süden der Metropolregion Manila zählt rund 605.000 Einwohner und wurde "
            "1762 als unabhängige Pfarrei der Augustiner-Rekollekten gegründet. Der Name leitet "
            "sich von las piñas (die Ananas) ab, da die Region für ihre Plantagen bekannt war. "
            "Während der spanischen Kolonialzeit (1565-1898) wurde hier zwischen 1816 und 1824 "
            "von Pater Diego Cera die weltberühmte Bambusorgel der Pfarrkirche St. Joseph gebaut, "
            "die mit 902 von 1031 Pfeifen aus Bambus die einzige ihrer Art weltweit ist und seit "
            "2003 als nationaler Kulturschatz gilt. Nach der US-Verwaltung (1898-1946) entwickelte "
            "sich Las Piñas zu einem Zentrum der Salzproduktion und der Jeepney-Manufaktur. "
            "Stadtstatus erhielt die Gemeinde am 27. März 1997."
        ),
        "facts": [
            "1762 von Augustiner-Rekollekten gegründet",
            "Rund 605.000 Einwohner",
            "Stadtstatus seit dem 27. März 1997",
            "Bambusorgel von Pater Diego Cera 1816-1824 erbaut",
            "Bambusorgel mit 902 Bambuspfeifen, einzigartig weltweit",
            "Nationaler Kulturschatz seit 2003",
            "Spanische Kolonialzeit 1565-1898, US-Verwaltung 1898-1946",
            "Name von las piñas (die Ananas) abgeleitet",
        ],
    },
    "ph-makati-cities-v2": {
        "desc": (
            "Makati in der Mitte der Metropolregion Manila zählt rund 630.000 Einwohner und gilt "
            "als das führende Finanzzentrum der Philippinen. Die Siedlung wurde 1670 von den "
            "Jesuiten als San Pedro Macati gegründet, der Name leitet sich vom Tagalog kati "
            "(Ebbe) ab. Während der spanischen Kolonialzeit (1565-1898) blieb der Ort ein "
            "Sumpfgebiet ohne große Bedeutung. Erst während der US-Verwaltung (1898-1946) "
            "begann der Aufstieg, als die Familie Ayala große Landflächen erwarb. Nach dem "
            "Zweiten Weltkrieg ließ Joseph McMicking ab 1948 das geplante Geschäftsviertel "
            "Makati Central Business District mit der Ayala Avenue als Wall Street der "
            "Philippinen entwerfen. Stadtstatus erhielt Makati am 4. Januar 1995. Heute beherbergt "
            "sie die Philippinische Börse, die meisten internationalen Banken und 62 Botschaften."
        ),
        "facts": [
            "1670 von Jesuiten als San Pedro Macati gegründet",
            "Rund 630.000 Einwohner",
            "Stadtstatus seit dem 4. Januar 1995",
            "Ayala Avenue gilt als Wall Street der Philippinen",
            "Sitz der Philippinischen Börse",
            "Beherbergt 62 Botschaften, mehr als jede andere Stadt des Landes",
            "Spanische Kolonialzeit 1565-1898, US-Verwaltung 1898-1946",
            "Geplantes Geschäftsviertel ab 1948 von Joseph McMicking entworfen",
        ],
    },
    "ph-bacolod-cities-v2": {
        "desc": (
            "Bacolod auf der Insel Negros zählt rund 600.000 Einwohner und ist die Hauptstadt "
            "der Provinz Negros Occidental. Die Siedlung wurde 1755 als unabhängige Pfarrei "
            "gegründet, der Name stammt vom Hiligaynon-Wort bakólod (steiniger, hügeliger "
            "Boden) ab. Während der spanischen Kolonialzeit (1565-1898) erlebte die Region ab "
            "den 1850er Jahren mit der Einführung des Zuckerrohranbaus durch den briten Nicholas "
            "Loney einen rasanten Aufstieg, der Negros Occidental zur Zuckerinsel der Philippinen "
            "machte. Am 5. November 1898 schlugen die Negrenser unter Aniceto Lacson die "
            "spanischen Truppen kampflos und gründeten kurzzeitig die Republik Negros. Während "
            "der US-Verwaltung (1898-1946) blieb Bacolod Zuckerzentrum. Stadtstatus seit dem "
            "18. Juni 1938. Bekannt als Stadt des Lächelns wegen des MassKara-Festivals seit 1980."
        ),
        "facts": [
            "1755 als Pfarrei gegründet",
            "Rund 600.000 Einwohner",
            "Stadtstatus seit dem 18. Juni 1938",
            "Aufstand am 5. November 1898 und Republik Negros",
            "MassKara-Festival jährlich seit 1980",
            "Beiname Stadt des Lächelns",
            "Spanische Kolonialzeit 1565-1898, US-Verwaltung 1898-1946",
            "Zuckerhauptstadt der Philippinen",
        ],
    },
    "ph-muntinlupa-cities-v2": {
        "desc": (
            "Muntinlupa im äußersten Süden der Metropolregion Manila zählt rund 545.000 Einwohner "
            "und ist die südlichste Stadt der Hauptstadtregion. Die Siedlung wurde 1601 von den "
            "Augustinern als Visita von San Pedro Tunasan gegründet. Der Name leitet sich vom "
            "Tagalog muntinglupa (kleines Land) ab. Während der spanischen Kolonialzeit "
            "(1565-1898) blieb der Ort ein landwirtschaftliches Dorf am Westufer der Laguna de "
            "Bay. Während der US-Verwaltung (1898-1946) wurde 1940 das berüchtigte "
            "Hochsicherheitsgefängnis New Bilibid Prison von Manila hierher verlegt, das "
            "größte Gefängnis der Philippinen. Stadtstatus erhielt Muntinlupa am 1. März 1995. "
            "Heute beherbergt die Stadt das luxuriöse Wohnviertel Ayala Alabang Village und "
            "den Geschäftspark Filinvest City als Smaragdstadt der Philippinen."
        ),
        "facts": [
            "1601 von Augustinern als Visita von San Pedro Tunasan gegründet",
            "Rund 545.000 Einwohner",
            "Stadtstatus seit dem 1. März 1995",
            "New Bilibid Prison seit 1940 als größtes Gefängnis der Philippinen",
            "Ayala Alabang Village als luxuriöses Wohnviertel",
            "Spanische Kolonialzeit 1565-1898, US-Verwaltung 1898-1946",
            "Beiname Smaragdstadt der Philippinen",
            "Name von Tagalog muntinglupa (kleines Land) abgeleitet",
        ],
    },
    "ph-san-jose-del-monte-cities-v2": {
        "desc": (
            "San Jose del Monte in der Provinz Bulacan, nördlich der Metropolregion Manila, "
            "zählt rund 700.000 Einwohner und ist die größte Stadt der Provinz. Die Gemeinde "
            "wurde 1751 als unabhängige Pfarrei gegründet. Während der spanischen Kolonialzeit "
            "(1565-1898) und der US-Verwaltung (1898-1946) blieb der Ort ein landwirtschaftliches "
            "Bergdorf an den Ausläufern der Sierra Madre. Im 20. Jahrhundert verwandelte sich "
            "die Gemeinde durch große Umsiedlungsprogramme in eine Schlafstadt für Manila-Pendler, "
            "insbesondere nach dem Pinatubo-Ausbruch 1991, als zahlreiche Aeta-Familien hier "
            "angesiedelt wurden. Stadtstatus erhielt San Jose del Monte am 10. September 2000. "
            "Wegen der Aussicht auf die Hauptstadt vom 777 m hohen Berg Balagbag trägt die Stadt "
            "den Beinamen Balkon der Metropole."
        ),
        "facts": [
            "1751 als Pfarrei gegründet",
            "Rund 700.000 Einwohner, größte Stadt der Provinz Bulacan",
            "Stadtstatus seit dem 10. September 2000",
            "Aeta-Umsiedlungen nach dem Pinatubo-Ausbruch 1991",
            "Berg Balagbag mit 777 m als Aussichtspunkt auf Manila",
            "Beiname Balkon der Metropole",
            "Spanische Kolonialzeit 1565-1898, US-Verwaltung 1898-1946",
            "Wichtigste Schlafstadt für Pendler aus Metro Manila",
        ],
    },
    "ph-marikina-cities-v2": {
        "desc": (
            "Marikina im Osten der Metropolregion Manila zählt rund 460.000 Einwohner und liegt "
            "in einem Tal zwischen den Sierra-Madre-Ausläufern. Die Siedlung wurde 1630 von den "
            "Jesuiten gegründet, später von den Augustinern verwaltet. Der Name leitet sich "
            "vermutlich vom Generalgouverneur Felix Berenguer de Marquina ab. Während der "
            "spanischen Kolonialzeit (1565-1898) entstand hier ab 1887 dank Don Laureano "
            "Guevara die philippinische Schuhindustrie, die Marikina zur Schuhhauptstadt der "
            "Philippinen machte. Während der US-Verwaltung (1898-1946) und danach blühte die "
            "Schuhproduktion auf, in den 1950er Jahren produzierten hier über 500 Werkstätten. "
            "Stadtstatus erhielt Marikina am 8. Dezember 1996. Berühmt sind das Schuhmuseum "
            "mit der Sammlung der Imelda Marcos und strenge Sauberkeitsvorschriften."
        ),
        "facts": [
            "1630 von Jesuiten gegründet",
            "Rund 460.000 Einwohner",
            "Stadtstatus seit dem 8. Dezember 1996",
            "Schuhindustrie seit 1887 durch Don Laureano Guevara",
            "Schuhhauptstadt der Philippinen",
            "Schuhmuseum mit der Sammlung von Imelda Marcos",
            "Spanische Kolonialzeit 1565-1898, US-Verwaltung 1898-1946",
            "Liegt im Marikina-Tal zwischen Sierra Madre und Quezon City",
        ],
    },
    "ph-iloilo-city-cities-v2": {
        "desc": (
            "Iloilo City auf der Insel Panay zählt rund 460.000 Einwohner und ist die Hauptstadt "
            "der Region Western Visayas und der Provinz Iloilo. Die spanische Kolonialgründung "
            "erfolgte am 7. Juli 1572 durch Miguel de Loarca, sieben Jahre nach Cebu. Während "
            "der spanischen Kolonialzeit (1565-1898) entwickelte sich Iloilo zum drittgrößten "
            "Hafen der Philippinen. Königin Isabella II. verlieh der Stadt 1889 den Titel "
            "edelste und treueste Stadt für ihre Loyalität gegenüber Spanien während der "
            "Revolution. Diese Treue endete jedoch am 25. Dezember 1898, als die Iloilonos "
            "die Spanier vertrieben. Während der US-Verwaltung (1898-1946) bauten zahlreiche "
            "britische und chinesische Kaufleute prächtige Herrenhäuser entlang der Calle Real. "
            "Stadtstatus seit dem 16. Juli 1937. Berühmt für das Dinagyang-Festival im Januar."
        ),
        "facts": [
            "Am 7. Juli 1572 von Miguel de Loarca gegründet",
            "Rund 460.000 Einwohner",
            "Stadtstatus seit dem 16. Juli 1937",
            "Königin Isabella II. verlieh 1889 den Titel edelste und treueste Stadt",
            "Vertreibung der Spanier am 25. Dezember 1898",
            "Spanische Kolonialzeit 1565-1898, US-Verwaltung 1898-1946",
            "Dinagyang-Festival jährlich im Januar",
            "Calle Real mit historischen Kaufmannshäusern",
        ],
    },
    "ph-pasay-cities-v2": {
        "desc": (
            "Pasay südlich von Manila zählt rund 440.000 Einwohner und gilt als das internationale "
            "Tor der Philippinen, da hier der Ninoy-Aquino-Internationalflughafen liegt. Die "
            "Siedlung wurde 1727 von den Augustinern als unabhängige Pfarrei gegründet. Der "
            "Legende nach trägt der Ort den Namen einer Prinzessin Dayang-dayang Pasay des "
            "Königreichs Namayan, das vor der spanischen Kolonisierung hier herrschte. Während "
            "der spanischen Kolonialzeit (1565-1898) und der US-Verwaltung (1898-1946) entwickelte "
            "sich Pasay zum bevorzugten Wohnort wohlhabender Manila-Familien. 1948 wurde die "
            "Gemeinde nach Quezon City zur zweiten Stadt erhoben (Stadtstatus seit dem 21. Juni "
            "1947). Heute beherbergt sie das Philippinische Kulturzentrum (CCP), das SM Mall "
            "of Asia und das World Trade Center und gilt als Reisehauptstadt der Philippinen."
        ),
        "facts": [
            "1727 von Augustinern gegründet",
            "Rund 440.000 Einwohner",
            "Stadtstatus seit dem 21. Juni 1947",
            "Ninoy-Aquino-Internationalflughafen als wichtigster Flughafen der Philippinen",
            "Philippinisches Kulturzentrum (CCP) seit 1969",
            "Spanische Kolonialzeit 1565-1898, US-Verwaltung 1898-1946",
            "SM Mall of Asia als eines der größten Einkaufszentren Asiens",
            "Beiname Reisehauptstadt der Philippinen",
        ],
    },
    "ph-caloocan-cities-v2": {
        "desc": (
            "Caloocan im Norden der Metropolregion Manila zählt rund 1,66 Millionen Einwohner "
            "und ist die drittgrößte Stadt der Philippinen. Die Siedlung wurde 1815 als "
            "unabhängige Pfarrei gegründet. Der Name leitet sich vom Tagalog kalook-lookan "
            "(innerster Teil) ab. Historische Bedeutung erlangte die Stadt während der spanischen "
            "Kolonialzeit (1565-1898) als Geburtsort der Philippinischen Revolution: Hier rief "
            "Andrés Bonifacio am 23. August 1896 mit dem Schrei von Pugadlawin und der Zerreißung "
            "der spanischen Steuerausweise (cédulas) die Revolution gegen Spanien aus. Der Hauptsitz "
            "der Geheimgesellschaft Katipunan befand sich ebenfalls hier. Stadtstatus erhielt "
            "Caloocan am 16. Februar 1962. Einzigartig ist die geographische Teilung in zwei "
            "Teile, getrennt durch Quezon City und Valenzuela. Wahrzeichen ist das Bonifacio-Denkmal."
        ),
        "facts": [
            "1815 als Pfarrei gegründet",
            "Rund 1,66 Millionen Einwohner",
            "Stadtstatus seit dem 16. Februar 1962",
            "Schrei von Pugadlawin am 23. August 1896",
            "Geburtsort der Philippinischen Revolution unter Andrés Bonifacio",
            "Drittgrößte Stadt der Philippinen",
            "Spanische Kolonialzeit 1565-1898, US-Verwaltung 1898-1946",
            "Geographisch in Nord- und Südteil geteilt durch Quezon City",
        ],
    },
    "ph-angeles-city-cities-v2": {
        "desc": (
            "Angeles City in der Provinz Pampanga, nördlich von Manila, zählt rund 460.000 "
            "Einwohner. Die Stadt wurde am 8. Dezember 1829 von Don Ángel Pantaleón de Miranda "
            "und seiner Frau Doña Rosalía de Jesús als Culiat gegründet, 1830 nach den Schutzheiligen "
            "Los Santos Ángeles Custodios in Angeles umbenannt. Während der spanischen Kolonialzeit "
            "(1565-1898) entwickelte sich der Ort als Zucker- und Reisbaugebiet. Bedeutung erlangte "
            "die Stadt während der US-Verwaltung (1898-1946) durch die benachbarte Clark Air Base, "
            "die von 1903 bis zum Pinatubo-Ausbruch 1991 die größte US-Militärbasis außerhalb des "
            "Festlands der USA war. Stadtstatus erhielt Angeles am 5. Januar 1964. Berühmt ist die "
            "Stadt als Geburtsort des Nationalgerichts Sisig und als kulinarische Hauptstadt der "
            "Philippinen sowie für ihre Unterhaltungsmeile."
        ),
        "facts": [
            "Am 8. Dezember 1829 von Don Ángel Pantaleón de Miranda als Culiat gegründet",
            "Rund 460.000 Einwohner",
            "Stadtstatus seit dem 5. Januar 1964",
            "1830 nach Los Santos Ángeles Custodios umbenannt",
            "Clark Air Base 1903-1991 als US-Militärstützpunkt",
            "Geburtsort des Nationalgerichts Sisig",
            "Spanische Kolonialzeit 1565-1898, US-Verwaltung 1898-1946",
            "Kulinarische Hauptstadt der Philippinen",
        ],
    },
    "ph-lapu-lapu-city-cities-v2": {
        "desc": (
            "Lapu-Lapu City auf der Insel Mactan in der Provinz Cebu zählt rund 500.000 Einwohner "
            "und ist nach dem ersten philippinischen Volkshelden Lapu-Lapu benannt. Hier fand am "
            "27. April 1521 die berühmte Schlacht von Mactan statt, in der Häuptling Lapu-Lapu "
            "den portugiesischen Entdecker Ferdinand Magellan, der unter spanischer Flagge "
            "segelte, tötete und damit den ersten Versuch der Kolonisierung der Philippinen "
            "vereitelte. Während der spanischen Kolonialzeit (1565-1898) hieß der Ort Opón. "
            "Während der US-Verwaltung (1898-1946) entstand hier ab 1956 der Mactan-Cebu "
            "Internationalflughafen. Stadtstatus erhielt der Ort am 17. Juni 1961 unter dem "
            "neuen Namen Lapu-Lapu. Heute ist die Insel Mactan Zentrum für Luxusresorts, "
            "Tauchen und Gitarrenmanufaktur."
        ),
        "facts": [
            "Schlacht von Mactan am 27. April 1521",
            "Rund 500.000 Einwohner",
            "Stadtstatus seit dem 17. Juni 1961",
            "Lapu-Lapu tötete Magellan und gilt als erster philippinischer Held",
            "Mactan-Cebu Internationalflughafen seit 1956",
            "Spanische Kolonialzeit 1565-1898, US-Verwaltung 1898-1946",
            "Zentrum für Luxusresorts und Tauchurlaub",
            "Berühmt für Gitarrenmanufaktur in Mactan",
        ],
    },
    "ph-imus-cities-v2": {
        "desc": (
            "Imus in der Provinz Cavite südlich von Manila zählt rund 500.000 Einwohner und ist "
            "die offizielle Hauptstadt der Provinz Cavite. Die Siedlung wurde 1795 von den "
            "Augustiner-Rekollekten als unabhängige Pfarrei gegründet. Während der spanischen "
            "Kolonialzeit (1565-1898) erlangte die Stadt historische Bedeutung durch die Schlacht "
            "von Alapan am 28. Mai 1898, in der General Emilio Aguinaldo zum ersten Mal die "
            "philippinische Nationalflagge im Kampf gegen die Spanier hisste. Aus diesem Grund "
            "wird in Imus jährlich der Flaggentag begangen, und die Stadt trägt den Beinamen "
            "Flaggenhauptstadt der Philippinen. Im Philippinisch-Amerikanischen Krieg (1899-1902) "
            "während der US-Verwaltung (1898-1946) fanden hier weitere Gefechte statt. Stadtstatus "
            "erhielt Imus am 30. Juni 2012. Berühmt ist das jährliche Wagayway-Festival."
        ),
        "facts": [
            "1795 von Augustiner-Rekollekten gegründet",
            "Rund 500.000 Einwohner",
            "Stadtstatus seit dem 30. Juni 2012",
            "Schlacht von Alapan am 28. Mai 1898",
            "Erste Hissung der philippinischen Nationalflagge im Kampf",
            "Beiname Flaggenhauptstadt der Philippinen",
            "Spanische Kolonialzeit 1565-1898, US-Verwaltung 1898-1946",
            "Wagayway-Festival jährlich am Flaggentag 28. Mai",
        ],
    },
    "ph-mandaluyong-cities-v2": {
        "desc": (
            "Mandaluyong in der Mitte der Metropolregion Manila zählt rund 425.000 Einwohner und "
            "liegt zwischen Manila, Makati und Pasig am Pasig-Fluss. Die Siedlung wurde 1841 als "
            "unabhängige Pfarrei aus dem Gebiet von Santa Ana abgetrennt. Der Name leitet sich "
            "vermutlich vom Tagalog daluyong (große Welle) ab. Während der spanischen Kolonialzeit "
            "(1565-1898) und der US-Verwaltung (1898-1946) blieb der Ort ein agrarisches Vorort. "
            "1928 wurde hier das Philippinische Mentalkrankenhaus gegründet, heute Nationales "
            "Zentrum für psychische Gesundheit, das größte psychiatrische Krankenhaus der "
            "Philippinen. Stadtstatus erhielt Mandaluyong am 9. Februar 1994 als zweite Stadt "
            "Metro Manilas nach Quezon City. Heute beherbergt sie zusammen mit Pasig das "
            "Geschäftsviertel Ortigas Center und das größte Einkaufszentrum SM Megamall."
        ),
        "facts": [
            "1841 als Pfarrei gegründet",
            "Rund 425.000 Einwohner",
            "Stadtstatus seit dem 9. Februar 1994",
            "Nationales Zentrum für psychische Gesundheit seit 1928",
            "Ortigas Center gemeinsam mit Pasig",
            "SM Megamall als größtes Einkaufszentrum der Philippinen",
            "Spanische Kolonialzeit 1565-1898, US-Verwaltung 1898-1946",
            "Beiname Tigerstadt der Philippinen",
        ],
    },
    "ph-malabon-cities-v2": {
        "desc": (
            "Malabon im Norden der Metropolregion Manila zählt rund 380.000 Einwohner und liegt "
            "an der Manilabucht. Die Siedlung wurde 1599 von Augustinern als Tambobong gegründet "
            "und gehört damit zu den ältesten Orten der Philippinen. 1607 wurde der Ort in "
            "Malabon umbenannt, der Name stammt vom Tagalog labon (eintauchen) wegen der oft "
            "überfluteten Lage. Während der spanischen Kolonialzeit (1565-1898) war der Ort "
            "eine wichtige Fischer- und Salzgewinnungssiedlung. In Malabon befand sich auch eine "
            "der ersten Druckereien der Philippinen, die im 19. Jahrhundert revolutionäre "
            "Schriften herausgab. Während der US-Verwaltung (1898-1946) entwickelte sich die "
            "Stadt zum Industriezentrum. Stadtstatus erhielt Malabon am 21. April 2001. Berühmt "
            "ist die Stadt für das Nudelgericht Pancit Malabon und ihre Erbe-Häuser."
        ),
        "facts": [
            "1599 von Augustinern als Tambobong gegründet",
            "Rund 380.000 Einwohner",
            "Stadtstatus seit dem 21. April 2001",
            "1607 in Malabon umbenannt",
            "Eine der ersten Druckereien der Philippinen im 19. Jahrhundert",
            "Berühmt für Pancit Malabon",
            "Spanische Kolonialzeit 1565-1898, US-Verwaltung 1898-1946",
            "Anfällig für Überflutungen wegen niedriger Lage",
        ],
    },
    "ph-mandaue-cities-v2": {
        "desc": (
            "Mandaue auf der Insel Cebu zählt rund 365.000 Einwohner und liegt direkt nördlich "
            "von Cebu City. Die Siedlung wurde 1638 von Jesuiten gegründet. Der Name stammt "
            "vermutlich vom Cebuano mantawi, einer hier wachsenden Pflanze. Während der spanischen "
            "Kolonialzeit (1565-1898) entstand hier 1601 die Pfarrkirche St. Joseph mit dem "
            "Heiligen Christus von Mandaue, einem der drei berühmten Christusfiguren der "
            "Philippinen, die laut Tradition aus Mexiko gebracht wurden. Während der US-Verwaltung "
            "(1898-1946) entwickelte sich Mandaue zum Industriezentrum der Visayas. Stadtstatus "
            "erhielt die Gemeinde am 21. Juni 1969. Heute ist sie die Möbelhauptstadt der "
            "Philippinen und beherbergt zahlreiche Großindustrien wie Norkis, San Miguel und "
            "Asia Brewery, verbunden mit Mactan über zwei große Brücken."
        ),
        "facts": [
            "1638 von Jesuiten gegründet",
            "Rund 365.000 Einwohner",
            "Stadtstatus seit dem 21. Juni 1969",
            "Heiliger Christus von Mandaue als Verehrungsobjekt seit dem 17. Jahrhundert",
            "Möbelhauptstadt der Philippinen",
            "Zwei Brücken verbinden Mandaue mit der Insel Mactan",
            "Spanische Kolonialzeit 1565-1898, US-Verwaltung 1898-1946",
            "Industriezentrum der Visayas mit Norkis und Asia Brewery",
        ],
    },
    "ph-baguio-cities-v2": {
        "desc": (
            "Baguio in der Cordillera Central auf der Insel Luzon zählt rund 365.000 Einwohner "
            "und liegt auf 1.470 Metern Höhe. Wegen ihres kühlen Klimas mit Tagestemperaturen "
            "um 20 Grad wurde Baguio während der US-Verwaltung (1898-1946) ab 1903 vom "
            "amerikanischen Architekten Daniel Burnham als Sommerhauptstadt der Philippinen "
            "geplant und am 1. September 1909 zur Stadt erhoben. Vor der Ankunft der Amerikaner "
            "war das Gebiet von den Ibaloi und Kankanaey besiedelt; die Spanier hatten in der "
            "späten Kolonialzeit (1565-1898) hier nur die Comandancia von Benguet eingerichtet. "
            "Im Zweiten Weltkrieg wurde die Stadt 1945 fast vollständig zerstört. Berühmt ist "
            "Baguio für das Panagbenga-Blumenfestival jeden Februar, Erdbeerfelder, Pinienwälder "
            "und die Philippine Military Academy."
        ),
        "facts": [
            "Stadtstatus seit dem 1. September 1909",
            "Rund 365.000 Einwohner",
            "Liegt auf 1.470 Metern Höhe",
            "Sommerhauptstadt der Philippinen seit 1903",
            "Stadtplan von Daniel Burnham entworfen",
            "Panagbenga-Blumenfestival jährlich im Februar",
            "Spanische Kolonialzeit 1565-1898, US-Verwaltung 1898-1946",
            "Sitz der Philippine Military Academy seit 1936",
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
    """Return list of POI ids whose descriptionAdvanced.de is missing/empty."""
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
    print(f"Target POIs (in DATA): {len(target_ids)}")

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
