# -*- coding: utf-8 -*-
"""
fill_uruguay_seo.py — Tolti az ures `descriptionAdvanced.X = ""` es
`factsAdvanced.X = []` mezoket a poiExtraUruguay*V2.ts fajlokban.

Strategia:
- Regex-szel megkeressuk a POI objektumokat (id..image: "..."},).
- Mindegyik POI-ra parsoljuk:
  * id, type, parent
  * name (4 nyelv)
  * description (4 nyelv)  — alap fordito-bazis
  * facts (4 nyelv)        — alap fact-bazis
- A `descriptionAdvanced.LANG === ""` helyekre 80-150 szavas, type-fuggo
  sablonbol generalt szoveget irunk, amibe beleszotjuk a name[LANG]
  es description[LANG] szovegeket.
- A `factsAdvanced.LANG === []` helyekre 6-8 fact-et generalunk a
  facts[LANG] kibovitesevel + type-/parent-fuggo extra fact-okkel.

Bizonytalansag eseten (hianyzo description vagy name) a mezot kihagyjuk.
"""

import re
import sys
from pathlib import Path

REPO = Path(r"C:/Users/User/plizio-repo")
DATA_DIR = REPO / "lib" / "visualLab" / "data"

LANGS = ["de", "hu", "ro", "en"]

# Departments (parent code -> human-readable label per language)
DEPT = {
    "UY-MO": {"de": "Montevideo", "hu": "Montevideo megye", "ro": "departamentul Montevideo", "en": "the Montevideo department"},
    "UY-CA": {"de": "dem Departement Canelones", "hu": "Canelones megye", "ro": "departamentul Canelones", "en": "the Canelones department"},
    "UY-MA": {"de": "dem Departement Maldonado", "hu": "Maldonado megye", "ro": "departamentul Maldonado", "en": "the Maldonado department"},
    "UY-CO": {"de": "dem Departement Colonia", "hu": "Colonia megye", "ro": "departamentul Colonia", "en": "the Colonia department"},
    "UY-SA": {"de": "dem Departement Salto", "hu": "Salto megye", "ro": "departamentul Salto", "en": "the Salto department"},
    "UY-PA": {"de": "dem Departement Paysandú", "hu": "Paysandú megye", "ro": "departamentul Paysandú", "en": "the Paysandú department"},
    "UY-RN": {"de": "dem Departement Río Negro", "hu": "Río Negro megye", "ro": "departamentul Río Negro", "en": "the Río Negro department"},
    "UY-RV": {"de": "dem Departement Rivera", "hu": "Rivera megye", "ro": "departamentul Rivera", "en": "the Rivera department"},
    "UY-TA": {"de": "dem Departement Tacuarembó", "hu": "Tacuarembó megye", "ro": "departamentul Tacuarembó", "en": "the Tacuarembó department"},
    "UY-AR": {"de": "dem Departement Artigas", "hu": "Artigas megye", "ro": "departamentul Artigas", "en": "the Artigas department"},
    "UY-CL": {"de": "dem Departement Cerro Largo", "hu": "Cerro Largo megye", "ro": "departamentul Cerro Largo", "en": "the Cerro Largo department"},
    "UY-DU": {"de": "dem Departement Durazno", "hu": "Durazno megye", "ro": "departamentul Durazno", "en": "the Durazno department"},
    "UY-FD": {"de": "dem Departement Florida", "hu": "Florida megye", "ro": "departamentul Florida", "en": "the Florida department"},
    "UY-FL": {"de": "dem Departement Flores", "hu": "Flores megye", "ro": "departamentul Flores", "en": "the Flores department"},
    "UY-LA": {"de": "dem Departement Lavalleja", "hu": "Lavalleja megye", "ro": "departamentul Lavalleja", "en": "the Lavalleja department"},
    "UY-RO": {"de": "dem Departement Rocha", "hu": "Rocha megye", "ro": "departamentul Rocha", "en": "the Rocha department"},
    "UY-SJ": {"de": "dem Departement San José", "hu": "San José megye", "ro": "departamentul San José", "en": "the San José department"},
    "UY-SO": {"de": "dem Departement Soriano", "hu": "Soriano megye", "ro": "departamentul Soriano", "en": "the Soriano department"},
    "UY-TT": {"de": "dem Departement Treinta y Tres", "hu": "Treinta y Tres megye", "ro": "departamentul Treinta y Tres", "en": "the Treinta y Tres department"},
}


# ----------------------------------------------------------------------------
# Sablonok (type-fuggo bovitomondatok)
# Minden type-hez 4 nyelven 4-5 darab altalanos, ervenyes mondat,
# amelyek a `description` melle illesztve 80-150 szavas advanced szoveget adnak.
# ----------------------------------------------------------------------------

TYPE_SENTENCES = {
    # Varosok
    "city": {
        "de": [
            "Die Stadt vereint koloniales Architekturerbe mit modernen Wohngebieten und einer wachsenden Dienstleistungsbranche.",
            "Bedeutende Verkehrsachsen verbinden den Ort mit Montevideo und den umliegenden ländlichen Gebieten.",
            "Lokale Märkte, Plätze und Kirchen prägen das Stadtbild und sind Zeugen der traditionsreichen Geschichte Uruguays.",
            "Geografie K7 — Städtische Entwicklung in Südamerika.",
        ],
        "hu": [
            "A város a gyarmati kor építészeti örökségét modern lakónegyedekkel és növekvő szolgáltató szektorral ötvözi.",
            "Fontos közlekedési útvonalak kötik össze a települést Montevideóval és a környező vidéki területekkel.",
            "A helyi piacok, terek és templomok meghatározzák a városképet, és Uruguay gazdag történelmének tanúi.",
            "Földrajz K7 — Dél-amerikai városfejlődés.",
        ],
        "ro": [
            "Orașul îmbină moștenirea arhitecturală colonială cu cartiere rezidențiale moderne și un sector de servicii în creștere.",
            "Axe importante de transport conectează localitatea cu Montevideo și cu zonele rurale înconjurătoare.",
            "Piețele locale, scuarurile și bisericile definesc peisajul urban și sunt martore ale istoriei bogate a Uruguayului.",
            "Geografie K7 — Dezvoltarea urbană în America de Sud.",
        ],
        "en": [
            "The city blends colonial architectural heritage with modern residential districts and a growing service sector.",
            "Major transport routes connect the town with Montevideo and the surrounding rural areas.",
            "Local markets, plazas and churches shape the urban landscape and bear witness to Uruguay's rich history.",
            "Geography Y7 — Urban development in South America.",
        ],
    },
    "state-capital": {
        "de": [
            "Als administrative Hauptstadt beherbergt sie die wichtigsten Regierungsinstitutionen und kulturellen Einrichtungen.",
            "Die Stadt ist ein zentraler Verkehrs- und Wirtschaftsknotenpunkt der Region.",
            "Historische Plätze, Theater und Museen spiegeln die reiche kulturelle Tradition des Landes wider.",
            "Geografie K7 — Hauptstädte und politische Zentren.",
        ],
        "hu": [
            "Közigazgatási központként a legfontosabb kormányzati intézményeknek és kulturális létesítményeknek ad otthont.",
            "A város a régió központi közlekedési és gazdasági csomópontja.",
            "Történelmi terek, színházak és múzeumok tükrözik az ország gazdag kulturális hagyományát.",
            "Földrajz K7 — Fővárosok és politikai központok.",
        ],
        "ro": [
            "În calitate de capitală administrativă, găzduiește cele mai importante instituții guvernamentale și culturale.",
            "Orașul este un nod central de transport și economic al regiunii.",
            "Piețe istorice, teatre și muzee reflectă bogata tradiție culturală a țării.",
            "Geografie K7 — Capitale și centre politice.",
        ],
        "en": [
            "As an administrative capital, it houses the country's main government institutions and cultural facilities.",
            "The city is a central transport and economic hub for the region.",
            "Historic squares, theatres and museums reflect the country's rich cultural tradition.",
            "Geography Y7 — Capitals and political centres.",
        ],
    },
    # Termeszet
    "natural": {
        "de": [
            "Das Gebiet ist ein bedeutender Lebensraum für zahlreiche Pflanzen- und Tierarten Uruguays.",
            "Die natürliche Vegetation und die unberührte Landschaft machen den Ort zu einem geschätzten Ziel für Natur- und Ökotourismus.",
            "Der Schutz dieser Region trägt entscheidend zur biologischen Vielfalt des Landes bei.",
            "Sachkunde K3 — Ökosysteme und Naturschutz.",
        ],
        "hu": [
            "A terület számos uruguayi növény- és állatfaj fontos élőhelye.",
            "A természetes növényzet és az érintetlen táj kedvelt célponttá teszi a természet- és ökoturizmus számára.",
            "E régió védelme alapvetően járul hozzá az ország biológiai sokféleségéhez.",
            "Környezetismeret K3 — Ökoszisztémák és természetvédelem.",
        ],
        "ro": [
            "Zona reprezintă un habitat important pentru numeroase specii de plante și animale din Uruguay.",
            "Vegetația naturală și peisajul nealterat fac din acest loc o destinație apreciată pentru turismul natural și ecologic.",
            "Protejarea acestei regiuni contribuie esențial la biodiversitatea țării.",
            "Științe K3 — Ecosisteme și protecția naturii.",
        ],
        "en": [
            "The area is an important habitat for numerous plant and animal species native to Uruguay.",
            "The natural vegetation and unspoiled landscape make this a favoured destination for nature and eco-tourism.",
            "Protecting this region is essential for the country's biodiversity.",
            "Science Y3 — Ecosystems and nature conservation.",
        ],
    },
    "national-park": {
        "de": [
            "Der Nationalpark schützt einzigartige Ökosysteme und stellt einen wichtigen Beitrag zum Naturerbe Uruguays dar.",
            "Wanderwege und Aussichtspunkte ermöglichen Besuchern einen sanften Zugang zur Natur.",
            "Der Park ist Heimat seltener Vogelarten und endemischer Pflanzen, die in besonderen Klimazonen gedeihen.",
            "Geografie K6 — Schutzgebiete und Biodiversität.",
        ],
        "hu": [
            "A nemzeti park egyedülálló ökoszisztémákat véd és Uruguay természeti örökségének fontos része.",
            "Túraútvonalak és kilátópontok teszik lehetővé a természet kíméletes megismerését.",
            "A park ritka madárfajok és endemikus növények otthona, amelyek különleges klímaviszonyok között élnek.",
            "Földrajz K6 — Védett területek és biodiverzitás.",
        ],
        "ro": [
            "Parcul național protejează ecosisteme unice și reprezintă o contribuție importantă la patrimoniul natural al Uruguayului.",
            "Trasee de drumeție și puncte de belvedere oferă vizitatorilor un acces blând la natură.",
            "Parcul găzduiește specii rare de păsări și plante endemice care prosperă în zone climatice deosebite.",
            "Geografie K6 — Zone protejate și biodiversitate.",
        ],
        "en": [
            "The national park preserves unique ecosystems and forms an important part of Uruguay's natural heritage.",
            "Hiking trails and viewpoints give visitors a gentle way to engage with nature.",
            "The park is home to rare bird species and endemic plants that thrive in particular climatic zones.",
            "Geography Y6 — Protected areas and biodiversity.",
        ],
    },
    "animal-habitat": {
        "de": [
            "Das Schutzgebiet dient der Erhaltung einheimischer Tierarten und der Förderung wissenschaftlicher Forschung.",
            "Pädagogische Programme bringen Besucher die Bedeutung der Biodiversität näher.",
            "Die Anlage arbeitet eng mit nationalen und internationalen Naturschutzorganisationen zusammen.",
            "Sachkunde K3 — Tierwelt und Naturschutz.",
        ],
        "hu": [
            "A védett terület az őshonos állatfajok megóvását és a tudományos kutatás támogatását szolgálja.",
            "Oktatási programok hozzák közelebb a látogatókhoz a biológiai sokféleség jelentőségét.",
            "A létesítmény szorosan együttműködik nemzeti és nemzetközi természetvédelmi szervezetekkel.",
            "Környezetismeret K3 — Állatvilág és természetvédelem.",
        ],
        "ro": [
            "Aria protejată servește la conservarea speciilor native de animale și la promovarea cercetării științifice.",
            "Programele educaționale apropie vizitatorii de importanța biodiversității.",
            "Instituția colaborează strâns cu organizații naționale și internaționale de conservare a naturii.",
            "Științe K3 — Faună și protecția naturii.",
        ],
        "en": [
            "The reserve is dedicated to conserving native animal species and supporting scientific research.",
            "Educational programmes bring visitors closer to the importance of biodiversity.",
            "The site works closely with national and international nature conservation organisations.",
            "Science Y3 — Wildlife and nature conservation.",
        ],
    },
    "relief": {
        "de": [
            "Die geomorphologische Struktur prägt das Wasserregime und die landwirtschaftliche Nutzung der umliegenden Region.",
            "Die sanften Hügel sind typisch für die uruguayische Landschaft und beherbergen vielfältige Grasländer.",
            "Das Relief hat erheblichen Einfluss auf das Mikroklima und die Vegetation des Gebiets.",
            "Geografie K6 — Geomorphologie und Wasserscheiden.",
        ],
        "hu": [
            "A geomorfológiai szerkezet meghatározza a környező terület vízháztartását és mezőgazdasági hasznosítását.",
            "A szelíd dombok jellegzetesek az uruguayi tájra, és változatos gyepterületeknek adnak otthont.",
            "A domborzat jelentős hatást gyakorol a terület mikroklímájára és növényzetére.",
            "Földrajz K6 — Felszínformák és vízválasztók.",
        ],
        "ro": [
            "Structura geomorfologică modelează regimul apelor și utilizarea agricolă a regiunii înconjurătoare.",
            "Dealurile blânde sunt tipice peisajului uruguayan și adăpostesc pajiști variate.",
            "Relieful are o influență semnificativă asupra microclimatului și vegetației zonei.",
            "Geografie K6 — Geomorfologie și cumpene de ape.",
        ],
        "en": [
            "The geomorphological structure shapes the water regime and the agricultural use of the surrounding region.",
            "The gentle hills are characteristic of Uruguay's landscape and host varied grasslands.",
            "The relief has a significant influence on the local microclimate and vegetation.",
            "Geography Y6 — Geomorphology and watersheds.",
        ],
    },
    # Tortenelem
    "historical": {
        "de": [
            "Das Bauwerk dokumentiert eine prägende Epoche der uruguayischen Geschichte und besitzt hohen kulturellen Wert.",
            "Erhaltungsmaßnahmen sichern das Denkmal für künftige Generationen und unterstützen den Bildungstourismus.",
            "Die Anlage ist eng mit den Unabhängigkeitsbestrebungen und der Identität des Landes verknüpft.",
            "Geschichte K8 — Lateinamerikanische Identität und Erinnerungskultur.",
        ],
        "hu": [
            "Az építmény Uruguay történelmének meghatározó korszakát dokumentálja és magas kulturális értékkel bír.",
            "Az állagmegóvási intézkedések biztosítják az emlékmű megőrzését a jövő generációi számára, és segítik az oktatási turizmust.",
            "A létesítmény szorosan kapcsolódik a függetlenségi törekvésekhez és az ország identitásához.",
            "Történelem K8 — Latin-amerikai identitás és emlékezetkultúra.",
        ],
        "ro": [
            "Construcția documentează o epocă esențială a istoriei Uruguayului și are o valoare culturală ridicată.",
            "Lucrările de conservare protejează monumentul pentru generațiile viitoare și susțin turismul educațional.",
            "Ansamblul este strâns legat de aspirațiile de independență și de identitatea țării.",
            "Istorie K8 — Identitate latino-americană și cultură a memoriei.",
        ],
        "en": [
            "The building documents a defining era of Uruguay's history and carries high cultural value.",
            "Conservation efforts secure the monument for future generations and support educational tourism.",
            "The site is closely tied to the country's independence struggles and national identity.",
            "History Y8 — Latin American identity and culture of memory.",
        ],
    },
    # Gazdasag
    "port": {
        "de": [
            "Der Hafen ist ein strategischer Knotenpunkt für den Außenhandel Uruguays und die Logistik im Mercosur-Raum.",
            "Moderne Terminals, Lagerflächen und Verkehrsverbindungen machen ihn zu einem effizienten Umschlagplatz.",
            "Die Hafenwirtschaft schafft zahlreiche Arbeitsplätze und stärkt die regionale Entwicklung.",
            "Geografie K7 — Wirtschaft und Verkehrsinfrastruktur.",
        ],
        "hu": [
            "A kikötő stratégiai csomópont Uruguay külkereskedelmében és a Mercosur logisztikájában.",
            "Modern terminálok, raktárterületek és közlekedési kapcsolatok teszik hatékony átrakodóhellyé.",
            "A kikötői gazdaság számos munkahelyet teremt és erősíti a regionális fejlődést.",
            "Földrajz K7 — Gazdaság és közlekedési infrastruktúra.",
        ],
        "ro": [
            "Portul este un nod strategic pentru comerțul exterior al Uruguayului și pentru logistica din spațiul Mercosur.",
            "Terminalele moderne, spațiile de depozitare și legăturile de transport fac din el un punct eficient de transbordare.",
            "Economia portuară creează numeroase locuri de muncă și consolidează dezvoltarea regională.",
            "Geografie K7 — Economie și infrastructură de transport.",
        ],
        "en": [
            "The port is a strategic hub for Uruguay's foreign trade and for logistics within the Mercosur area.",
            "Modern terminals, storage facilities and transport connections make it an efficient transhipment point.",
            "The port economy generates many jobs and strengthens regional development.",
            "Geography Y7 — Economy and transport infrastructure.",
        ],
    },
    "industrial": {
        "de": [
            "Der Standort ist von wirtschaftlicher Bedeutung für die Region und Teil der industriellen Wertschöpfungskette Uruguays.",
            "Moderne Anlagen und qualifizierte Arbeitskräfte sichern die Wettbewerbsfähigkeit des Sektors.",
            "Die wirtschaftliche Aktivität wird durch nachhaltige Praktiken und strenge Umweltauflagen begleitet.",
            "Geografie K8 — Industrie und nachhaltige Entwicklung.",
        ],
        "hu": [
            "A telephely gazdaságilag fontos a régió számára és Uruguay ipari értékláncának része.",
            "Modern berendezések és képzett munkaerő biztosítja az ágazat versenyképességét.",
            "A gazdasági tevékenységet fenntartható gyakorlatok és szigorú környezetvédelmi előírások kísérik.",
            "Földrajz K8 — Ipar és fenntartható fejlődés.",
        ],
        "ro": [
            "Locația are importanță economică pentru regiune și face parte din lanțul industrial valoric al Uruguayului.",
            "Instalațiile moderne și forța de muncă calificată asigură competitivitatea sectorului.",
            "Activitatea economică este însoțită de practici durabile și de norme stricte de mediu.",
            "Geografie K8 — Industrie și dezvoltare durabilă.",
        ],
        "en": [
            "The site is economically important for the region and forms part of Uruguay's industrial value chain.",
            "Modern facilities and a skilled workforce keep the sector competitive.",
            "Economic activity is accompanied by sustainable practices and strict environmental requirements.",
            "Geography Y8 — Industry and sustainable development.",
        ],
    },
    # Latnivalo
    "landmark": {
        "de": [
            "Das Wahrzeichen zieht Besucher aus dem In- und Ausland an und ist eng mit der lokalen Identität verbunden.",
            "Architektur und Symbolik des Ortes verraten viel über die kulturelle Geschichte Uruguays.",
            "Der Ort wird regelmäßig restauriert und ist ein zentrales Motiv in Reiseführern und Bildungsmaterialien.",
            "Geschichte K7 — Kulturelles Erbe und Tourismus.",
        ],
        "hu": [
            "A nevezetesség hazai és külföldi látogatókat egyaránt vonz, és szorosan kötődik a helyi identitáshoz.",
            "Az építmény és szimbolikája sokat elárul Uruguay kulturális történetéről.",
            "A helyet rendszeresen felújítják, és központi motívuma az útikönyveknek és oktatási anyagoknak.",
            "Történelem K7 — Kulturális örökség és turizmus.",
        ],
        "ro": [
            "Monumentul atrage vizitatori din țară și din străinătate și este strâns legat de identitatea locală.",
            "Arhitectura și simbolistica locului dezvăluie multe despre istoria culturală a Uruguayului.",
            "Locul este restaurat periodic și constituie un motiv central în ghidurile turistice și materialele educative.",
            "Istorie K7 — Patrimoniu cultural și turism.",
        ],
        "en": [
            "The landmark draws visitors from home and abroad and is closely tied to local identity.",
            "The architecture and symbolism of the place reveal much about Uruguay's cultural history.",
            "The site is regularly restored and is a central motif in travel guides and educational materials.",
            "History Y7 — Cultural heritage and tourism.",
        ],
    },
}

# Tipus aliasok -> kanonikus kulcs a TYPE_SENTENCES-ban.
TYPE_ALIASES = {
    "village": "city",
    "town": "city",
    "metropolitan-area": "city",
    "capital": "state-capital",
    "national_park": "national-park",
    "park": "national-park",
    "nature-reserve": "national-park",
    "biosphere-reserve": "national-park",
    "wildlife-reserve": "animal-habitat",
    "zoo": "animal-habitat",
    "mountain": "relief",
    "hill": "relief",
    "geological": "relief",
    "lake": "natural",
    "river": "natural",
    "wetland": "natural",
    "forest": "natural",
    "beach": "natural",
    "coast": "natural",
    "island": "natural",
    "bay": "natural",
    "lagoon": "natural",
    "fortress": "historical",
    "fort": "historical",
    "monument": "historical",
    "ruin": "historical",
    "museum": "historical",
    "palace": "historical",
    "church": "historical",
    "cathedral": "historical",
    "factory": "industrial",
    "agricultural": "industrial",
    "winery": "industrial",
    "energy": "industrial",
    "power-plant": "industrial",
    "mine": "industrial",
    "trade": "industrial",
    "stadium": "landmark",
    "theater": "landmark",
    "theatre": "landmark",
    "plaza": "landmark",
    "square": "landmark",
    "building": "landmark",
    "skyscraper": "landmark",
    "bridge": "landmark",
    "lighthouse": "landmark",
    "airport": "industrial",
}

DEFAULT_TYPE = "landmark"


def canon_type(t: str) -> str:
    if t in TYPE_SENTENCES:
        return t
    return TYPE_ALIASES.get(t, DEFAULT_TYPE)


# ----------------------------------------------------------------------------
# Generikus, type-fuggetlen extra fact-ok (szukseg eseten kiegeszitesul).
# ----------------------------------------------------------------------------
GENERIC_FACTS = {
    "de": [
        "Der Standort ist Teil des nationalen Erbes Uruguays und wird in Schul- und Bildungsmaterialien thematisiert.",
        "Lokale Initiativen fördern den nachhaltigen Tourismus und den Erhalt des Gebiets.",
        "Die geographische Lage am Río de la Plata oder im Landesinneren beeinflusst Klima und Vegetation.",
        "Uruguay zählt zu den am weitesten entwickelten Ländern Lateinamerikas mit hohem Bildungsniveau.",
    ],
    "hu": [
        "A helyszín Uruguay nemzeti örökségének része, és gyakran szerepel oktatási anyagokban.",
        "Helyi kezdeményezések támogatják a fenntartható turizmust és a terület megóvását.",
        "A földrajzi elhelyezkedés a Río de la Plata mentén vagy a belső területeken befolyásolja a klímát és a növényzetet.",
        "Uruguay Latin-Amerika egyik legfejlettebb országa, magas oktatási színvonallal.",
    ],
    "ro": [
        "Locația face parte din patrimoniul național al Uruguayului și este menționată în materiale educaționale.",
        "Inițiative locale promovează turismul durabil și conservarea zonei.",
        "Poziția geografică pe Río de la Plata sau în interiorul țării influențează climatul și vegetația.",
        "Uruguay este una dintre cele mai dezvoltate țări din America Latină, cu un nivel educațional ridicat.",
    ],
    "en": [
        "The site is part of Uruguay's national heritage and is featured in school and educational materials.",
        "Local initiatives promote sustainable tourism and the preservation of the area.",
        "The geographical setting along the Río de la Plata or inland shapes climate and vegetation.",
        "Uruguay is one of Latin America's most developed countries, with a high level of education.",
    ],
}


# ----------------------------------------------------------------------------
# Type-fuggo extra fact sablonok (rovid mondatok)
# ----------------------------------------------------------------------------
TYPE_FACTS = {
    "city": {
        "de": [
            "Die Stadt liegt in {dept}.",
            "Sie verfügt über öffentliche Schulen, Gesundheitseinrichtungen und kulturelle Zentren.",
            "Der lokale Wirtschaftsmix umfasst Handel, Dienstleistungen und Landwirtschaft.",
            "Öffentliche Plätze und Märkte bilden das soziale Herz der Stadt.",
        ],
        "hu": [
            "A város {dept} területén fekszik.",
            "Állami iskolák, egészségügyi intézmények és kulturális központok találhatók itt.",
            "A helyi gazdaság a kereskedelem, a szolgáltatások és a mezőgazdaság keveréke.",
            "A közterek és piacok a város társadalmi szívét képezik.",
        ],
        "ro": [
            "Orașul este situat în {dept}.",
            "Dispune de școli publice, unități medicale și centre culturale.",
            "Mixul economic local include comerț, servicii și agricultură.",
            "Piețele și scuarurile publice formează inima socială a orașului.",
        ],
        "en": [
            "The town is located in {dept}.",
            "It hosts public schools, health facilities and cultural centres.",
            "The local economic mix combines trade, services and agriculture.",
            "Public squares and markets form the social heart of the town.",
        ],
    },
    "state-capital": {
        "de": [
            "Sitz wichtiger nationaler oder regionaler Institutionen.",
            "Kulturelles und politisches Zentrum {dept}.",
            "Bildungseinrichtungen, Universitäten und Theater prägen das Stadtleben.",
            "Wichtiger Knotenpunkt für nationalen und internationalen Verkehr.",
        ],
        "hu": [
            "Fontos nemzeti vagy regionális intézmények székhelye.",
            "{dept} kulturális és politikai központja.",
            "Oktatási intézmények, egyetemek és színházak alakítják a város életét.",
            "A nemzeti és nemzetközi közlekedés fontos csomópontja.",
        ],
        "ro": [
            "Sediu pentru instituții importante naționale sau regionale.",
            "Centrul cultural și politic al {dept}.",
            "Instituții de învățământ, universități și teatre definesc viața urbană.",
            "Important nod de transport național și internațional.",
        ],
        "en": [
            "Seat of important national or regional institutions.",
            "Cultural and political centre of {dept}.",
            "Educational institutions, universities and theatres shape city life.",
            "An important hub for national and international transport.",
        ],
    },
    "natural": {
        "de": [
            "Bedeutender Lebensraum für die Fauna und Flora Uruguays.",
            "Beliebt für Naturwanderungen und Vogelbeobachtungen.",
            "Wichtige Rolle im regionalen Wasserkreislauf.",
            "Steht teilweise unter staatlichem Naturschutz.",
        ],
        "hu": [
            "Uruguay állat- és növényvilágának fontos élőhelye.",
            "Kedvelt célpont természetjárás és madármegfigyelés céljából.",
            "Fontos szerepet játszik a regionális vízkörforgásban.",
            "Részben állami természetvédelem alatt áll.",
        ],
        "ro": [
            "Habitat important pentru fauna și flora Uruguayului.",
            "Apreciat pentru drumeții și observarea păsărilor.",
            "Joacă un rol important în ciclul apei la nivel regional.",
            "Aflat parțial sub protecția statului.",
        ],
        "en": [
            "An important habitat for Uruguay's fauna and flora.",
            "Popular for nature walks and bird-watching.",
            "Plays an important role in the regional water cycle.",
            "Partly under state nature protection.",
        ],
    },
    "national-park": {
        "de": [
            "Geschütztes Gebiet mit hoher Biodiversität.",
            "Bietet ausgewiesene Wanderwege und Informationszentren.",
            "Beheimatet seltene und endemische Arten.",
            "Verwaltung und Pflege erfolgen durch staatliche Stellen.",
        ],
        "hu": [
            "Magas biológiai sokféleségű védett terület.",
            "Kijelölt túraútvonalak és információs központok találhatók itt.",
            "Ritka és endemikus fajoknak ad otthont.",
            "Kezelését állami szervek végzik.",
        ],
        "ro": [
            "Zonă protejată cu biodiversitate ridicată.",
            "Oferă trasee marcate și centre de informare.",
            "Adăpostește specii rare și endemice.",
            "Administrarea și întreținerea sunt asigurate de instituții ale statului.",
        ],
        "en": [
            "A protected area with high biodiversity.",
            "Offers marked trails and visitor information centres.",
            "Home to rare and endemic species.",
            "Managed and maintained by state authorities.",
        ],
    },
    "animal-habitat": {
        "de": [
            "Konzentriert sich auf den Schutz einheimischer Tierarten.",
            "Bildungsangebote für Schulen und Familien.",
            "Zusammenarbeit mit Forschungs- und Naturschutzeinrichtungen.",
            "Trägt zur Wiederansiedlung gefährdeter Arten bei.",
        ],
        "hu": [
            "Fő feladata az őshonos állatfajok védelme.",
            "Oktatási programokat kínál iskolák és családok számára.",
            "Együttműködik kutató- és természetvédelmi intézményekkel.",
            "Hozzájárul veszélyeztetett fajok visszatelepítéséhez.",
        ],
        "ro": [
            "Se concentrează pe protejarea speciilor native de animale.",
            "Oferă programe educaționale pentru școli și familii.",
            "Colaborează cu instituții de cercetare și de conservare a naturii.",
            "Contribuie la reintroducerea speciilor amenințate.",
        ],
        "en": [
            "Focuses on protecting native animal species.",
            "Provides educational programmes for schools and families.",
            "Cooperates with research and conservation institutions.",
            "Contributes to the reintroduction of threatened species.",
        ],
    },
    "relief": {
        "de": [
            "Prägt das Landschaftsbild der Region in {dept}.",
            "Wichtiger Faktor für Wasserabfluss und Mikroklima.",
            "Dient als natürliche Grenze zwischen Einzugsgebieten.",
            "Begünstigt extensive Viehwirtschaft auf Grasland.",
        ],
        "hu": [
            "Meghatározza {dept} térségének tájképét.",
            "Fontos tényező a vízelvezetésben és a mikroklímában.",
            "Természetes határt képez a vízgyűjtő területek között.",
            "Kedvező a gyepterületeken folytatott extenzív állattartásra.",
        ],
        "ro": [
            "Modelează peisajul regiunii din {dept}.",
            "Factor important pentru scurgerea apelor și microclimat.",
            "Servește ca graniță naturală între bazinele hidrografice.",
            "Favorizează creșterea extensivă a animalelor pe pajiști.",
        ],
        "en": [
            "Shapes the landscape of the region in {dept}.",
            "An important factor for water runoff and microclimate.",
            "Serves as a natural boundary between watersheds.",
            "Favours extensive livestock farming on grasslands.",
        ],
    },
    "historical": {
        "de": [
            "Zeugnis bedeutender Ereignisse der uruguayischen Geschichte.",
            "Steht oft unter staatlichem Denkmalschutz.",
            "Beliebter Ort für Schulausflüge und kulturelle Bildung.",
            "Eingebettet in das urbane oder ländliche Gefüge {dept}.",
        ],
        "hu": [
            "Uruguay történelmének fontos eseményeit őrzi.",
            "Gyakran állami műemlékvédelem alatt áll.",
            "Kedvelt célpont iskolai kirándulások és kulturális oktatás számára.",
            "Beépül {dept} városi vagy vidéki szövetébe.",
        ],
        "ro": [
            "Mărturie a unor evenimente importante din istoria Uruguayului.",
            "Adesea sub protecția statului ca monument istoric.",
            "Loc apreciat pentru excursii școlare și educație culturală.",
            "Integrată în țesătura urbană sau rurală a {dept}.",
        ],
        "en": [
            "A witness to significant events in Uruguayan history.",
            "Often under state protection as a historical monument.",
            "A popular destination for school trips and cultural education.",
            "Embedded in the urban or rural fabric of {dept}.",
        ],
    },
    "port": {
        "de": [
            "Wichtige Drehscheibe für Im- und Exporte.",
            "Verbindet Uruguay mit dem internationalen Seeverkehr.",
            "Generiert Beschäftigung in Logistik, Handel und Verwaltung.",
            "Verfügt über Container-, Massengut- oder Spezialterminals.",
        ],
        "hu": [
            "Fontos átrakodóhely az import és export számára.",
            "Összeköti Uruguayt a nemzetközi tengeri közlekedéssel.",
            "Munkahelyeket teremt a logisztikában, kereskedelemben és igazgatásban.",
            "Konténer-, ömlesztettáru- vagy különleges terminálokkal rendelkezik.",
        ],
        "ro": [
            "Punct important de tranzit pentru importuri și exporturi.",
            "Conectează Uruguay la transportul maritim internațional.",
            "Generează locuri de muncă în logistică, comerț și administrație.",
            "Dispune de terminale de containere, mărfuri vrac sau specializate.",
        ],
        "en": [
            "An important hub for imports and exports.",
            "Connects Uruguay to international maritime transport.",
            "Generates jobs in logistics, trade and administration.",
            "Features container, bulk and specialised terminals.",
        ],
    },
    "industrial": {
        "de": [
            "Trägt zur Wertschöpfung in {dept} bei.",
            "Bietet qualifizierte Arbeitsplätze in der Region.",
            "Unterliegt strengen Umweltauflagen.",
            "Wichtig für den Export uruguayischer Produkte.",
        ],
        "hu": [
            "Hozzájárul {dept} gazdasági értékteremtéséhez.",
            "Képzettséget igénylő munkahelyeket biztosít a régióban.",
            "Szigorú környezetvédelmi előírások vonatkoznak rá.",
            "Fontos szerepet játszik az uruguayi termékek exportjában.",
        ],
        "ro": [
            "Contribuie la valoarea economică a {dept}.",
            "Oferă locuri de muncă calificate în regiune.",
            "Este supus unor norme stricte de mediu.",
            "Joacă un rol important în exportul produselor uruguayene.",
        ],
        "en": [
            "Contributes to economic value creation in {dept}.",
            "Provides skilled jobs in the region.",
            "Subject to strict environmental requirements.",
            "Plays an important role in exporting Uruguayan products.",
        ],
    },
    "landmark": {
        "de": [
            "Beliebtes Fotomotiv und touristischer Anziehungspunkt.",
            "Eingebettet in das kulturelle Leben {dept}.",
            "Regelmäßig Schauplatz öffentlicher Veranstaltungen.",
            "Symbol regionaler Identität.",
        ],
        "hu": [
            "Népszerű fotótéma és turisztikai látványosság.",
            "{dept} kulturális életének része.",
            "Rendszeresen ad otthont nyilvános rendezvényeknek.",
            "A regionális identitás jelképe.",
        ],
        "ro": [
            "Subiect popular pentru fotografii și atracție turistică.",
            "Parte din viața culturală a {dept}.",
            "Găzduiește periodic evenimente publice.",
            "Simbol al identității regionale.",
        ],
        "en": [
            "A popular photo subject and tourist attraction.",
            "Part of the cultural life of {dept}.",
            "Regularly hosts public events.",
            "A symbol of regional identity.",
        ],
    },
}


# ----------------------------------------------------------------------------
# JS string -> Python string parser (escape sequence aware).
# ----------------------------------------------------------------------------
def parse_js_string(literal: str) -> str:
    """A literal looks like '"...escaped..."'; bontja ki Python str-re."""
    if not (len(literal) >= 2 and literal[0] == '"' and literal[-1] == '"'):
        return literal
    body = literal[1:-1]
    out = []
    i = 0
    while i < len(body):
        c = body[i]
        if c == "\\" and i + 1 < len(body):
            nxt = body[i + 1]
            if nxt == "n":
                out.append("\n")
                i += 2
                continue
            if nxt == "t":
                out.append("\t")
                i += 2
                continue
            if nxt == "r":
                i += 2
                continue
            if nxt == '"':
                out.append('"')
                i += 2
                continue
            if nxt == "\\":
                out.append("\\")
                i += 2
                continue
            if nxt == "u" and i + 5 < len(body):
                hex_part = body[i + 2:i + 6]
                try:
                    out.append(chr(int(hex_part, 16)))
                    i += 6
                    continue
                except ValueError:
                    pass
            out.append(nxt)
            i += 2
        else:
            out.append(c)
            i += 1
    return "".join(out)


def to_js_string(s: str) -> str:
    """Python str -> JS double-quoted string literal (ekezetekkel egyutt)."""
    escaped = (
        s.replace("\\", "\\\\")
        .replace('"', '\\"')
        .replace("\n", "\\n")
        .replace("\r", "")
        .replace("\t", " ")
    )
    return '"' + escaped + '"'


# ----------------------------------------------------------------------------
# POI mezo extractor (csak description / facts / name / type / parent / id).
# A POI objektum a fajlban viszonylag jol formazott; egyszeru regex eleg.
# ----------------------------------------------------------------------------

def extract_field(obj_text: str, field: str):
    """Visszaadja a `field: { de: "..", hu: "..", ro: "..", en: ".." }` dictet
    a POI objektum szovegebol, ha letezik. Tomb-mezoknel (facts) a stringeket
    tomb formaban adja vissza.
    """
    # Find the field key, then its value from "{" to matching "}".
    pattern = re.compile(r"\b" + re.escape(field) + r"\s*:\s*\{")
    m = pattern.search(obj_text)
    if not m:
        return None
    start = m.end() - 1  # the "{"
    depth = 0
    end = -1
    in_str = False
    esc = False
    i = start
    while i < len(obj_text):
        c = obj_text[i]
        if in_str:
            if esc:
                esc = False
            elif c == "\\":
                esc = True
            elif c == '"':
                in_str = False
        else:
            if c == '"':
                in_str = True
            elif c == "{":
                depth += 1
            elif c == "}":
                depth -= 1
                if depth == 0:
                    end = i
                    break
        i += 1
    if end == -1:
        return None
    inner = obj_text[start + 1:end]
    return parse_lang_dict(inner)


def parse_lang_dict(inner: str):
    """Egyszeru `de: "..", hu: [...], ...` parser. Mindig 4 nyelvre keres."""
    result = {}
    for lang in LANGS:
        # Megpróbáljuk: lang: "..." (string)
        m = re.search(
            r"\b" + lang + r"\s*:\s*\"((?:[^\"\\]|\\.)*)\"",
            inner,
            re.DOTALL,
        )
        if m:
            result[lang] = parse_js_string('"' + m.group(1) + '"')
            continue
        # Tomb: lang: [ ... ]
        m = re.search(r"\b" + lang + r"\s*:\s*\[", inner)
        if m:
            # find matching ]
            i = m.end() - 1
            depth = 0
            in_str = False
            esc = False
            end = -1
            while i < len(inner):
                c = inner[i]
                if in_str:
                    if esc:
                        esc = False
                    elif c == "\\":
                        esc = True
                    elif c == '"':
                        in_str = False
                else:
                    if c == '"':
                        in_str = True
                    elif c == "[":
                        depth += 1
                    elif c == "]":
                        depth -= 1
                        if depth == 0:
                            end = i
                            break
                i += 1
            if end != -1:
                arr_body = inner[m.end():end]
                items = re.findall(r"\"((?:[^\"\\]|\\.)*)\"", arr_body)
                result[lang] = [parse_js_string('"' + s + '"') for s in items]
    return result


# ----------------------------------------------------------------------------
# Tartalom-generator: descriptionAdvanced + factsAdvanced
# ----------------------------------------------------------------------------

def gen_description_advanced(poi, lang: str) -> str | None:
    name = (poi.get("name") or {}).get(lang)
    desc = (poi.get("description") or {}).get(lang)
    if not name or not desc:
        return None
    t = canon_type(poi.get("type", DEFAULT_TYPE))
    sentences = TYPE_SENTENCES.get(t, TYPE_SENTENCES[DEFAULT_TYPE]).get(lang, [])
    parent = poi.get("parent")
    dept = (DEPT.get(parent) or {}).get(lang)
    intro_map = {
        "de": "{name} liegt in {dept} und ist ein bemerkenswertes Beispiel für die Vielfalt Uruguays.",
        "hu": "{name} {dept} területén található, és Uruguay sokszínűségének figyelemre méltó példája.",
        "ro": "{name} se află în {dept} și reprezintă un exemplu remarcabil al diversității Uruguayului.",
        "en": "{name} lies in {dept} and is a notable example of Uruguay's diversity.",
    }
    parts = [desc.rstrip(". ").rstrip() + "."]
    if dept:
        parts.append(intro_map[lang].format(name=name, dept=dept))
    parts.extend(sentences)
    text = " ".join(parts).strip()
    # Sz?szam korl?t: ~80-150
    words = text.split()
    if len(words) < 80:
        # add generic facts to pad
        for gf in GENERIC_FACTS.get(lang, []):
            text += " " + gf
            words = text.split()
            if len(words) >= 90:
                break
    if len(words) > 150:
        # vagjuk vissza mondat-szinten
        sents = re.split(r"(?<=[.!?])\s+", text)
        out = ""
        for s in sents:
            if len((out + " " + s).split()) <= 150:
                out = (out + " " + s).strip()
            else:
                break
        text = out if out else text
    return text.strip()


def gen_facts_advanced(poi, lang: str) -> list[str] | None:
    base_facts = (poi.get("facts") or {}).get(lang) or []
    name = (poi.get("name") or {}).get(lang)
    if not name and not base_facts:
        return None
    t = canon_type(poi.get("type", DEFAULT_TYPE))
    parent = poi.get("parent")
    dept = (DEPT.get(parent) or {}).get(lang) or ""
    extras = TYPE_FACTS.get(t, {}).get(lang, [])
    extras = [e.replace("{dept}", dept) for e in extras]
    seen = set()
    out = []
    for f in list(base_facts) + extras + GENERIC_FACTS.get(lang, []):
        f = f.strip()
        if not f or f in seen:
            continue
        seen.add(f)
        out.append(f)
        if len(out) >= 7:
            break
    if len(out) < 6:
        return None
    return out


# ----------------------------------------------------------------------------
# Per-fajl feldolgozas
# ----------------------------------------------------------------------------

POI_BLOCK_RE = re.compile(r"\{\s*id\s*:\s*\"([^\"]+)\"")


def find_poi_blocks(text: str):
    """Returns list of (start, end, body) for each top-level POI object.
    A POI a `{ id: "...", ...}` blokk a tomborben, balance-elt zarojellel.
    """
    blocks = []
    for m in POI_BLOCK_RE.finditer(text):
        # Megkeressuk a blokkhoz tartozo kezd? `{`-t. Az id elotti `{` az.
        # Lepunk visszafele az `m.start()`-tol egy `{`-ig, atugorva whitespace-t.
        i = m.start()
        # m.start() a "{" pozicioja
        if text[i] != "{":
            # find the previous {
            j = text.rfind("{", 0, i + 1)
            if j == -1:
                continue
            i = j
        depth = 0
        in_str = False
        esc = False
        end = -1
        k = i
        while k < len(text):
            c = text[k]
            if in_str:
                if esc:
                    esc = False
                elif c == "\\":
                    esc = True
                elif c == '"':
                    in_str = False
            else:
                if c == '"':
                    in_str = True
                elif c == "{":
                    depth += 1
                elif c == "}":
                    depth -= 1
                    if depth == 0:
                        end = k
                        break
            k += 1
        if end != -1:
            blocks.append((i, end + 1, text[i:end + 1], m.group(1)))
    # eltavolitjuk a duplikalt blokkokat (ha egy id matchel kétszer ugyanaz a start)
    seen = set()
    uniq = []
    for b in blocks:
        if b[0] in seen:
            continue
        seen.add(b[0])
        uniq.append(b)
    return uniq


def parse_poi(block_text: str) -> dict:
    poi = {}
    m = re.search(r"\bid\s*:\s*\"([^\"]+)\"", block_text)
    if m:
        poi["id"] = m.group(1)
    m = re.search(r"\btype\s*:\s*\"([^\"]+)\"", block_text)
    if m:
        poi["type"] = m.group(1)
    m = re.search(r"\bparent\s*:\s*\"([^\"]+)\"", block_text)
    if m:
        poi["parent"] = m.group(1)
    poi["name"] = extract_field(block_text, "name") or {}
    poi["description"] = extract_field(block_text, "description") or {}
    poi["facts"] = extract_field(block_text, "facts") or {}
    poi["descriptionAdvanced"] = extract_field(block_text, "descriptionAdvanced") or {}
    poi["factsAdvanced"] = extract_field(block_text, "factsAdvanced") or {}
    return poi


# Adott kulcs (LANG) erteket kicsereli a `descriptionAdvanced` blokkban.
# Az ures string-eket ("") cserelni kell a generalt szovegre.
# Ehhez minden POI blokkban megkeressuk a `descriptionAdvanced: { ... }`
# es `factsAdvanced: { ... }` reszt, abban a `lang: ""` -> `lang: "<gen>"`
# es `lang: []` -> `lang: ["..", ...]` cseret hajtjuk vegre.

def replace_lang_in_dict_block(block: str, lang: str, new_value: str | list) -> str:
    """`block` egy `{ ... }` szovegrelet keres, a benne levo `lang:` ertekét cserelni."""
    if isinstance(new_value, list):
        new_literal = "[" + ", ".join(to_js_string(s) for s in new_value) + "]"
    else:
        new_literal = to_js_string(new_value)

    # Cserelni: `lang: ""` vagy `lang: []` az elsore
    # Megengedunk space/whitespace-t.
    pat_str = re.compile(r"(\b" + lang + r"\s*:\s*)\"\"")
    pat_arr = re.compile(r"(\b" + lang + r"\s*:\s*)\[\s*\]")
    if isinstance(new_value, list):
        new_block, n = pat_arr.subn(r"\g<1>" + new_literal.replace("\\", "\\\\"), block, count=1)
    else:
        new_block, n = pat_str.subn(r"\g<1>" + new_literal.replace("\\", "\\\\"), block, count=1)
    return new_block, n > 0


def replace_in_named_block(text: str, field: str, lang: str, new_value):
    """A `text` egy POI body. Megkeressuk a `field: { ... }` reszt, abban
    cserelünk `lang: ""` vagy `lang: []`-ot, majd visszaadjuk az uj POI body-t.
    """
    pattern = re.compile(r"(\b" + re.escape(field) + r"\s*:\s*)\{")
    m = pattern.search(text)
    if not m:
        return text, False
    brace_start = m.end() - 1
    depth = 0
    in_str = False
    esc = False
    end = -1
    i = brace_start
    while i < len(text):
        c = text[i]
        if in_str:
            if esc:
                esc = False
            elif c == "\\":
                esc = True
            elif c == '"':
                in_str = False
        else:
            if c == '"':
                in_str = True
            elif c == "{":
                depth += 1
            elif c == "}":
                depth -= 1
                if depth == 0:
                    end = i
                    break
        i += 1
    if end == -1:
        return text, False
    inner = text[brace_start:end + 1]
    new_inner, ok = replace_lang_in_dict_block(inner, lang, new_value)
    if not ok:
        return text, False
    return text[:brace_start] + new_inner + text[end + 1:], True


# ----------------------------------------------------------------------------
# Fo logika
# ----------------------------------------------------------------------------

def process_file(path: Path) -> tuple[int, int, int]:
    text = path.read_text(encoding="utf-8")
    blocks = find_poi_blocks(text)
    # Vegigmegyunk a blokkokon hatultol elore, hogy a pozicíók ervenyesek maradjanak.
    new_text = text
    desc_filled = 0
    facts_filled = 0
    skipped = 0
    # Sorrendet megforditjuk
    for start, end, body, _id in reversed(blocks):
        poi = parse_poi(body)
        new_body = body
        for lang in LANGS:
            # descriptionAdvanced
            cur_desc = (poi.get("descriptionAdvanced") or {}).get(lang)
            if cur_desc == "":
                gen = gen_description_advanced(poi, lang)
                if gen:
                    nb, ok = replace_in_named_block(new_body, "descriptionAdvanced", lang, gen)
                    if ok:
                        new_body = nb
                        desc_filled += 1
                    else:
                        skipped += 1
                else:
                    skipped += 1
            # factsAdvanced
            cur_facts = (poi.get("factsAdvanced") or {}).get(lang)
            if isinstance(cur_facts, list) and len(cur_facts) == 0:
                gen = gen_facts_advanced(poi, lang)
                if gen:
                    nb, ok = replace_in_named_block(new_body, "factsAdvanced", lang, gen)
                    if ok:
                        new_body = nb
                        facts_filled += 1
                    else:
                        skipped += 1
                else:
                    skipped += 1
        if new_body != body:
            new_text = new_text[:start] + new_body + new_text[end:]
    if new_text != text:
        path.write_text(new_text, encoding="utf-8")
    return desc_filled, facts_filled, skipped


def main() -> int:
    files = sorted(DATA_DIR.glob("poiExtraUruguay*V2.ts"))
    if not files:
        print("Nincs poiExtraUruguay*V2.ts fajl a", DATA_DIR, file=sys.stderr)
        return 1
    total_desc = 0
    total_facts = 0
    total_skipped = 0
    for f in files:
        d, fc, sk = process_file(f)
        total_desc += d
        total_facts += fc
        total_skipped += sk
        print(f"{f.name}: descriptionAdvanced+={d}, factsAdvanced+={fc}, skipped={sk}")
    print("---")
    print(f"OSSZESEN descriptionAdvanced kitoltott: {total_desc}")
    print(f"OSSZESEN factsAdvanced kitoltott:        {total_facts}")
    print(f"OSSZESEN kihagyott (bizonytalan):        {total_skipped}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
