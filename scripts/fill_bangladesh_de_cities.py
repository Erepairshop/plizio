"""Fill descriptionAdvanced.de + factsAdvanced.de for POIs in poiExtraBangladeshCitiesV2.ts

The file already has descriptionAdvanced/factsAdvanced blocks, but the German
content is a generic template ("Damit zaehlt der Ort zu den charakteristischen
Punkten Bangladeschs ..."). This script REPLACES the de: "..." string inside
descriptionAdvanced and the de: [...] array inside factsAdvanced with specific
Bangladeshi content. POIs whose DE text does not contain the template marker
are skipped (already filled by hand).
"""
from __future__ import annotations
import re
from pathlib import Path

FILE = Path(r"C:\Users\User\plizio-repo\lib\visualLab\data\poiExtraBangladeshCitiesV2.ts")

TEMPLATE_MARKER = "Damit zählt der Ort zu den charakteristischen Punkten Bangladeschs"

DATA: dict[str, dict] = {
    "dhaka-cities-v2": {
        "desc": (
            "Dhaka ist seit 1971 die Hauptstadt Bangladeschs und liegt am Buriganga-Fluss "
            "im Ganges-Brahmaputra-Delta. Die Stadt wurde 1608 unter dem Mogulkaiser Jahangir "
            "zur Hauptstadt der Provinz Bengalen erhoben und in 'Jahangirnagar' umbenannt. "
            "Während der britischen Kolonialzeit (1858-1947) verlor sie an Bedeutung, "
            "bevor sie 1947 Hauptstadt Ostpakistans und nach der Unabhängigkeit 1971 "
            "Hauptstadt Bangladeschs wurde. Die Metropolregion zählt heute über "
            "22 Millionen Einwohner. Dhaka ist als 'Rikscha-Hauptstadt der Welt' bekannt; "
            "täglich verkehren rund 600.000 Rikschas. Das von Louis Kahn entworfene "
            "Parlamentsgebäude Jatiya Sangsad Bhaban wurde 1982 fertiggestellt."
        ),
        "facts": [
            "Hauptstadt seit 1971 (Mogul-Hauptstadt 1608)",
            "Bevölkerung Metropolregion über 22 Millionen",
            "Britische Kolonialzeit 1858-1947",
            "Unabhängigkeit Bangladeschs am 26. März 1971",
            "Lalbagh-Fort ab 1678 erbaut",
            "Täglich rund 600.000 Rikschas",
            "Parlament Jatiya Sangsad Bhaban (Louis Kahn, 1982)",
            "Universität Dhaka 1921 gegründet",
        ],
    },
    "chittagong-cities-v2": {
        "desc": (
            "Chittagong, offiziell seit 2018 Chattogram, ist mit rund 5,2 Millionen Einwohnern "
            "die zweitgrößte Stadt Bangladeschs und der wichtigste Seehafen am Golf von "
            "Bengalen. Die Stadt liegt an der Mündung des Karnaphuli und blickt auf eine "
            "über 2.000-jährige Geschichte als Handelshafen zurück; bereits "
            "griechische und arabische Seefahrer kannten sie. Während der britischen "
            "Kolonialzeit (1858-1947) wurde der Hafen massiv ausgebaut. Nach der Unabhängigkeit "
            "Bangladeschs 1971 – die hier am 26. März 1971 von Major Ziaur Rahman "
            "über Radio ausgerufen wurde – entwickelte sich die Stadt zum Industriezentrum. "
            "Heute werden über 90 Prozent des bangladeschischen Außenhandels über den "
            "Hafen abgewickelt."
        ),
        "facts": [
            "Zweitgrößte Stadt, ca. 5,2 Millionen Einwohner",
            "Offiziell Chattogram seit 2018",
            "Hafen wickelt über 90% des Außenhandels ab",
            "Britische Kolonialzeit 1858-1947",
            "Unabhängigkeit Bangladeschs am 26. März 1971",
            "Schiffsabwrackindustrie in Sitakunda",
            "Chittagong-Armoury-Raid 1930 gegen Briten",
            "Karnaphuli-Tunnel seit 2023 (3,32 km)",
        ],
    },
    "khulna-cities-v2": {
        "desc": (
            "Khulna ist mit rund 950.000 Einwohnern die drittgrößte Stadt Bangladeschs und "
            "liegt am Rupsha- und Bhairab-Fluss, etwa 125 Kilometer nördlich des Golfs von "
            "Bengalen. Die Stadt ist Tor zu den Sundarbans, dem mit rund 10.000 Quadratkilometern "
            "größten Mangrovenwald der Welt und seit 1997 UNESCO-Weltnaturerbe. "
            "Während der britischen Kolonialzeit (1858-1947) blühte Khulna durch den "
            "Salz-, Zucker- und Jutehandel auf. Nach der Unabhängigkeit Bangladeschs 1971 "
            "wurde die Stadt zum Zentrum der Schiffbauindustrie und Garnelenverarbeitung. Der nahe "
            "Hafen Mongla, 48 Kilometer südlich, ist der zweitgrößte des Landes. Die "
            "Rupsha-Brücke wurde 2005 mit japanischer Hilfe eröffnet."
        ),
        "facts": [
            "Drittgrößte Stadt, ca. 950.000 Einwohner",
            "Tor zu den Sundarbans (UNESCO seit 1997)",
            "Sundarbans rund 10.000 km² groß",
            "Britische Kolonialzeit 1858-1947",
            "Unabhängigkeit Bangladeschs 1971",
            "Hafen Mongla 48 km südlich",
            "Rupsha-Brücke seit 2005",
            "Wichtigstes Garnelen-Exportzentrum",
        ],
    },
    "rajshahi-cities-v2": {
        "desc": (
            "Rajshahi liegt am Padma-Fluss (Hauptarm des Ganges) im Westen Bangladeschs nahe der "
            "indischen Grenze und zählt rund 750.000 Einwohner. Die Stadt blickt auf eine "
            "über 2.000-jährige Geschichte zurück und liegt nahe der Ruinen von "
            "Mahasthangarh, der mit dem 3. Jahrhundert v. Chr. ältesten archäologischen "
            "Stätte des Landes, sowie der buddhistischen Klosteranlage Somapura Mahavihara "
            "(8. Jahrhundert), seit 1985 UNESCO-Weltkulturerbe. Während der britischen "
            "Kolonialzeit (1858-1947) wurde Rajshahi 1876 zur Distriktstadt erhoben und durch die "
            "Eisenbahn erschlossen. Nach der Unabhängigkeit Bangladeschs 1971 entwickelte sich "
            "Rajshahi zum Zentrum der Seidenindustrie. Die Stadt ist als 'Stadt der Mangos' bekannt; "
            "die Region produziert rund 80 Prozent der bangladeschischen Mangoernte."
        ),
        "facts": [
            "Bevölkerung ca. 750.000",
            "Liegt am Padma (Ganges-Hauptarm)",
            "Mahasthangarh: älteste Stätte (3. Jh. v. Chr.)",
            "Somapura Mahavihara UNESCO seit 1985",
            "Britische Kolonialzeit 1858-1947",
            "Distriktstadt seit 1876",
            "'Stadt der Seide' und 'Stadt der Mangos'",
            "Universität Rajshahi seit 1953",
        ],
    },
    "sylhet-cities-v2": {
        "desc": (
            "Sylhet liegt am Surma-Fluss im Nordosten Bangladeschs am Fuß der Meghalaya-Berge "
            "und zählt rund 530.000 Einwohner. Die Region wurde 1303 vom Sufi-Heiligen Hazrat "
            "Shah Jalal islamisiert; sein Mausoleum ist bis heute eines der wichtigsten "
            "Pilgerziele Südasiens. Während der britischen Kolonialzeit (1858-1947) "
            "begann hier 1857 in Malnicherra der erste kommerzielle Teeanbau Südasiens; heute "
            "zählt die Region über 150 Teepläntagen. Bei der Teilung Indiens 1947 "
            "stimmte Sylhet in einem Referendum mehrheitlich für den Beitritt zu Ostpakistan. "
            "Nach der Unabhängigkeit Bangladeschs 1971 entwickelte sich die Stadt durch starke "
            "Rückflüsse der britisch-bangladeschischen Diaspora rasant; rund 95 Prozent "
            "der Bangladeshi in Großbritannien stammen aus Sylhet."
        ),
        "facts": [
            "Bevölkerung ca. 530.000",
            "Erste Teepläntage Südasiens 1857 (Malnicherra)",
            "Über 150 Teepläntagen in der Region",
            "Mausoleum Hazrat Shah Jalal seit 1303",
            "Britische Kolonialzeit 1858-1947",
            "Sylhet-Referendum 1947",
            "Unabhängigkeit Bangladeschs 1971",
            "95% der britischen Bangladeshi aus Sylhet",
        ],
    },
    "barisal-cities-v2": {
        "desc": (
            "Barisal, offiziell seit 2016 Barishal, liegt am Kirtankhola-Fluss im südlichen "
            "Ganges-Brahmaputra-Delta und zählt rund 330.000 Einwohner. Die Stadt wird "
            "wegen ihres dichten Flussnetzes und der schwimmenden Märkte als 'Venedig "
            "Bengalens' bezeichnet. Während der britischen Kolonialzeit (1858-1947) war "
            "Barisal ein wichtiger Reishandelsplatz und seit 1859 Distriktstadt. Bei der Teilung "
            "Indiens 1947 fiel die Stadt an Ostpakistan; viele hinduistische Familien flohen "
            "damals nach Westbengalen. Nach der Unabhängigkeit Bangladeschs 1971 entwickelte "
            "sich Barisal zum Verwaltungszentrum der gleichnamigen Division. Die Region ist "
            "berühmt für ihre schwimmenden Guaven-Märkte in Swarupkathi und für "
            "den 1869 eingeführten Padma-Dampferdienst, der Dhaka mit Barisal über Nacht "
            "verband."
        ),
        "facts": [
            "Bevölkerung ca. 330.000",
            "Offiziell Barishal seit 2016",
            "'Venedig Bengalens'",
            "Britische Kolonialzeit 1858-1947",
            "Distriktstadt seit 1859",
            "Unabhängigkeit Bangladeschs 1971",
            "Schwimmende Guaven-Märkte in Swarupkathi",
            "Rocket-Dampferdienst nach Dhaka seit 1869",
        ],
    },
    "rangpur-cities-v2": {
        "desc": (
            "Rangpur liegt im Nordwesten Bangladeschs nahe der indischen Grenze und ist mit rund "
            "350.000 Einwohnern Verwaltungssitz der gleichnamigen Division, die seit 2010 besteht. "
            "Die Stadt wurde 1769 von der britischen East India Company übernommen und "
            "während der britischen Kolonialzeit (1858-1947) durch die Eisenbahn 1879 "
            "erschlossen. Bekannt wurde Rangpur durch den Indigo-Aufstand von 1859 und den "
            "Bauernaufstand von 1783. Nach der Unabhängigkeit Bangladeschs 1971 entwickelte "
            "sich Rangpur zum Zentrum des Tabakanbaus und der Tonwarenproduktion; die Shataranji-"
            "Webteppiche aus Rangpur sind seit dem 18. Jahrhundert berühmt. Die Region ist Teil "
            "der historischen Landschaft Greater Rangpur, die im Norden bis zu den Auspizien des "
            "Himalaya reicht. Tajhat Palace aus dem 19. Jahrhundert ist heute Museum."
        ),
        "facts": [
            "Bevölkerung ca. 350.000",
            "Eigene Division seit 2010",
            "Bauernaufstand 1783 gegen East India Company",
            "Eisenbahnanschluss seit 1879",
            "Britische Kolonialzeit 1858-1947",
            "Unabhängigkeit Bangladeschs 1971",
            "Shataranji-Webteppiche seit dem 18. Jahrhundert",
            "Tajhat Palace als Museum",
        ],
    },
    "mymensingh-cities-v2": {
        "desc": (
            "Mymensingh liegt am alten Brahmaputra-Fluss nördlich von Dhaka und zählt "
            "rund 470.000 Einwohner. Die Stadt wurde 1787 von der britischen East India Company "
            "als Distriktstadt gegründet und während der britischen Kolonialzeit "
            "(1858-1947) zum Verwaltungszentrum Nord-Bengalens ausgebaut. 1879 erhielt Mymensingh "
            "Eisenbahnanschluss und 1908 die Bangladesh Agricultural University, die zweitälteste "
            "des Landes. Bei der Teilung Indiens 1947 fiel die Stadt an Ostpakistan. Während "
            "des Befreiungskriegs 1971 wurde Mymensingh am 10. Dezember 1971 – wenige Tage "
            "vor der Unabhängigkeit Bangladeschs am 16. Dezember – von den Mukti Bahini "
            "befreit. Seit 2015 ist Mymensingh eigene Division. Der Shashi Lodge Palast (1905) "
            "und die Garo-Hill-Region beim nahen Halua bilden die wichtigsten Sehenswürdigkeiten."
        ),
        "facts": [
            "Bevölkerung ca. 470.000",
            "Distriktstadt seit 1787",
            "Bangladesh Agricultural University seit 1908",
            "Eigene Division seit 2015",
            "Britische Kolonialzeit 1858-1947",
            "Befreiung am 10. Dezember 1971",
            "Unabhängigkeit Bangladeschs am 16. Dezember 1971",
            "Shashi Lodge Palast 1905",
        ],
    },
    "comilla-cities-v2": {
        "desc": (
            "Comilla, offiziell seit 2018 Cumilla, liegt im Südosten Bangladeschs an der "
            "Nationalstraße Dhaka-Chittagong und zählt rund 400.000 Einwohner. Die "
            "Region beherbergt das buddhistische Kloster Mainamati-Lalmai aus dem 8. bis 12. "
            "Jahrhundert mit über 50 Stätten der einstigen Deva- und Chandra-Dynastie. "
            "Während des Zweiten Weltkriegs lag in Comilla einer der größten "
            "Kriegsfriedhöfe der Alliierten in Südasien. Während der britischen "
            "Kolonialzeit (1858-1947) wurde Comilla durch die Assam-Bengal-Eisenbahn 1895 "
            "erschlossen. Nach der Unabhängigkeit Bangladeschs 1971 wurde die Stadt durch "
            "das berühmte 'Comilla-Modell' der ländlichen Genossenschaftsentwicklung "
            "(BARD-Institut, gegründet 1959) weltweit bekannt. Die Spezialität Roshmalai "
            "stammt aus Comilla."
        ),
        "facts": [
            "Bevölkerung ca. 400.000",
            "Offiziell Cumilla seit 2018",
            "Mainamati-Lalmai-Kloster 8.-12. Jahrhundert",
            "Comilla-Modell BARD seit 1959",
            "Britische Kolonialzeit 1858-1947",
            "Eisenbahnanschluss seit 1895",
            "Unabhängigkeit Bangladeschs 1971",
            "Spezialität Roshmalai",
        ],
    },
    "narayanganj-cities-v2": {
        "desc": (
            "Narayanganj liegt am Shitalakshya-Fluss südöstlich von Dhaka und zählt "
            "rund 290.000 Einwohner; mit der Agglomeration aber über 1,5 Millionen. Die Stadt "
            "wurde 1766 vom hinduistischen Gutsherrn Bicon Lal Pandey als Hafensiedlung gegründet "
            "und während der britischen Kolonialzeit (1858-1947) zur 'Dundee des Ostens' "
            "ausgebaut, da hier der weltgrößte Jutehandel stattfand; 1908 entstand die "
            "erste Jutemaschine in Adamjee. Nach der Unabhängigkeit Bangladeschs 1971 wurde "
            "die einst größte Jutemühle der Welt, Adamjee Jute Mills (1951-2002), "
            "geschlossen. Heute ist Narayanganj das Zentrum der bangladeschischen Textilindustrie "
            "mit über 4.000 Bekleidungsfabriken in der Region. Der Stadtteil Sonargaon war von "
            "1338 bis 1610 Hauptstadt Bengalens unter den Sultanen von Bengalen."
        ),
        "facts": [
            "Bevölkerung ca. 290.000 (Agglo. 1,5 Mio.)",
            "Sonargaon: Hauptstadt Bengalens 1338-1610",
            "'Dundee des Ostens' im Jutehandel",
            "Adamjee Jute Mills 1951-2002",
            "Britische Kolonialzeit 1858-1947",
            "Unabhängigkeit Bangladeschs 1971",
            "Zentrum der Textilindustrie",
            "Liegt am Shitalakshya-Fluss",
        ],
    },
    "gazipur-cities-v2": {
        "desc": (
            "Gazipur liegt nördlich von Dhaka und ist mit rund 1,2 Millionen Einwohnern die "
            "fünftgrößte Stadt Bangladeschs. Die Stadt wurde erst 2013 zum "
            "Verwaltungssitz des gleichnamigen Distrikts erhoben und entwickelte sich nach der "
            "Unabhängigkeit Bangladeschs 1971 zum Zentrum der Bekleidungsindustrie. Hier "
            "befinden sich über 2.000 Textilfabriken, die einen Großteil der bangladeschischen "
            "Bekleidungsexporte produzieren. Während der britischen Kolonialzeit (1858-1947) "
            "war die Region primär ländlich geprägt. Gazipur beherbergt heute "
            "wichtige Bildungseinrichtungen wie die Bangladesh University of Textile Engineering "
            "und das Bangabandhu Sheikh Mujibur Rahman Agricultural University. Der Bhawal-"
            "Nationalpark mit 5.022 Hektar Salwald ist ein wichtiges Naherholungsgebiet für "
            "Dhaka. Hier ereignete sich 2012 das Tazreen-Fashions-Feuer mit 117 Toten."
        ),
        "facts": [
            "Bevölkerung ca. 1,2 Millionen",
            "Fünftgrößte Stadt Bangladeschs",
            "Distrikthauptstadt seit 2013",
            "Über 2.000 Textilfabriken",
            "Britische Kolonialzeit 1858-1947",
            "Unabhängigkeit Bangladeschs 1971",
            "Bhawal-Nationalpark 5.022 Hektar",
            "Tazreen-Fashions-Feuer 2012 (117 Tote)",
        ],
    },
    "bogra-cities-v2": {
        "desc": (
            "Bogra, offiziell seit 2018 Bogura, liegt am Karatoa-Fluss im Norden Bangladeschs und "
            "zählt rund 400.000 Einwohner. Nahe der Stadt liegt Mahasthangarh, die mit dem 3. "
            "Jahrhundert v. Chr. älteste archäologisch nachgewiesene Stadt Bangladeschs "
            "und einstige Hauptstadt der Pundravardhana-Region. Während der britischen "
            "Kolonialzeit (1858-1947) wurde Bogra 1821 zum Distrikt erhoben und durch die "
            "Eisenbahn 1900 erschlossen. Die Stadt wurde nach dem Mogul-Gouverneur Mohammad Bogra "
            "Khan (16. Jahrhundert) benannt. Nach der Unabhängigkeit Bangladeschs 1971 "
            "entwickelte sich Bogra zum Industrie- und Handelszentrum Nordbengalens. Die "
            "berühmte Spezialität 'Bogurar Doi' (Quark) hat seit 2015 die geografische "
            "Herkunftsbezeichnung Bangladeschs erhalten. Die Stadt ist auch Geburtsort des früheren "
            "Präsidenten Ziaur Rahman."
        ),
        "facts": [
            "Bevölkerung ca. 400.000",
            "Offiziell Bogura seit 2018",
            "Mahasthangarh: älteste Stätte (3. Jh. v. Chr.)",
            "Distrikt seit 1821",
            "Britische Kolonialzeit 1858-1947",
            "Unabhängigkeit Bangladeschs 1971",
            "Bogurar Doi geografische Herkunft seit 2015",
            "Geburtsort von Präsident Ziaur Rahman",
        ],
    },
    "kushtia-cities-v2": {
        "desc": (
            "Kushtia liegt am Gorai-Fluss im Westen Bangladeschs nahe der indischen Grenze und "
            "zählt rund 235.000 Einwohner. Die Stadt ist eng mit dem Nobelpreisträger "
            "Rabindranath Tagore verbunden, dessen Familiengut Shilaidaha Kuthibari (heute Museum) "
            "hier liegt; Tagore lebte von 1891 bis 1901 hier und schrieb in dieser Zeit Teile "
            "seines Werkes Gitanjali. Während der britischen Kolonialzeit (1858-1947) wurde "
            "Kushtia 1869 zur Distriktstadt und durch die Eastern Bengal Railway 1862 als erste "
            "Bahnstation Ostbengalens erschlossen. Kushtia ist auch Geburtsort des mystischen "
            "Volkssängers Lalon Shah (1774-1890), dessen Mausoleum (Cheuriya) bis heute "
            "jährlich Tausende Pilger anzieht. Nach der Unabhängigkeit Bangladeschs 1971 "
            "wurde die Region durch den Ganges-Kobadak-Bewässerungsplan 1954-1983 zur "
            "Kornkammer."
        ),
        "facts": [
            "Bevölkerung ca. 235.000",
            "Tagores Familiengut Shilaidaha Kuthibari",
            "Tagore lebte hier 1891-1901",
            "Geburtsort von Lalon Shah (1774-1890)",
            "Erste Bahnstation Ostbengalens 1862",
            "Britische Kolonialzeit 1858-1947",
            "Unabhängigkeit Bangladeschs 1971",
            "Ganges-Kobadak-Bewässerungsplan 1954-1983",
        ],
    },
    "jessore-cities-v2": {
        "desc": (
            "Jessore, offiziell seit 2018 Jashore, liegt am Bhairab-Fluss im Südwesten "
            "Bangladeschs nahe der indischen Grenze und zählt rund 240.000 Einwohner. Jessore "
            "war zur Mogulzeit von 1574 bis 1612 Sitz des Königreichs Pratapaditya, eines der "
            "Twelve Bhuiyans, der Bengalen gegen die Mogulen verteidigte. Während der "
            "britischen Kolonialzeit (1858-1947) wurde Jessore 1781 zum ersten Distrikt Bengalens "
            "erhoben – früher als alle anderen Distrikte des heutigen Bangladeschs. Im "
            "Befreiungskrieg von 1971 wurde Jessore am 6. Dezember 1971 als erste Stadt "
            "Bangladeschs befreit, zehn Tage vor der Unabhängigkeit am 16. Dezember 1971. "
            "Heute ist Jessore Zentrum der Blumenproduktion Bangladeschs; 60 Prozent der Schnittblumen "
            "des Landes stammen aus Godkhali. Der Flughafen Jessore ist einer der ältesten des "
            "Landes."
        ),
        "facts": [
            "Bevölkerung ca. 240.000",
            "Offiziell Jashore seit 2018",
            "Erster Distrikt Bengalens seit 1781",
            "Britische Kolonialzeit 1858-1947",
            "Erste befreite Stadt am 6. Dezember 1971",
            "Unabhängigkeit Bangladeschs am 16. Dezember 1971",
            "60% der Schnittblumen aus Godkhali",
            "Flughafen seit 1947",
        ],
    },
    "coxs-bazar-cities-v2": {
        "desc": (
            "Cox's Bazar liegt am Golf von Bengalen im Südosten Bangladeschs und ist mit dem "
            "120 Kilometer langen, durchgehend befahrbaren Strand der längste natürliche "
            "Sandstrand der Welt. Die Stadt mit rund 110.000 Einwohnern wurde 1854 nach dem "
            "britischen Captain Hiram Cox benannt, der hier 1798 — noch vor der eigentlichen "
            "britischen Kolonialzeit (1858-1947) — flüchtende Arakanesen ansiedelte. "
            "Während des Zweiten Weltkriegs lag in Cox's Bazar ein wichtiger britischer "
            "Militärflugplatz, der 2021 zum internationalen Flughafen ausgebaut wurde. Nach "
            "der Unabhängigkeit Bangladeschs 1971 entwickelte sich der Ort zum wichtigsten "
            "Tourismuszentrum des Landes. Seit August 2017 leben in den Lagern Kutupalong und "
            "Balukhali nahe Cox's Bazar rund 950.000 Rohingya-Flüchtlinge aus dem benachbarten "
            "Myanmar – das größte Flüchtlingslager der Welt."
        ),
        "facts": [
            "Bevölkerung ca. 110.000",
            "Längster natürlicher Sandstrand (120 km)",
            "Benannt 1854 nach Captain Hiram Cox",
            "Britische Kolonialzeit 1858-1947",
            "Unabhängigkeit Bangladeschs 1971",
            "Internationaler Flughafen seit 2021",
            "Rund 950.000 Rohingya-Flüchtlinge seit 2017",
            "Größtes Flüchtlingslager der Welt",
        ],
    },
    "brahmanbaria-cities-v2": {
        "desc": (
            "Brahmanbaria liegt am Titas-Fluss im Osten Bangladeschs nahe der indischen Grenze und "
            "zählt rund 270.000 Einwohner. Die Stadt ist als 'Kulturhauptstadt Bangladeschs' "
            "bekannt, da hier zahlreiche bedeutende Musiker und Künstler stammen, darunter "
            "der klassische Sänger Ustad Alauddin Khan (1862-1972), Begründer der Maihar "
            "Gharana, sowie Ustad Ayet Ali Khan und der Sarod-Spieler Ustad Ali Akbar Khan. "
            "Während der britischen Kolonialzeit (1858-1947) wurde Brahmanbaria 1860 zum "
            "Subdivision und 1984, also nach der Unabhängigkeit Bangladeschs 1971, zum Distrikt "
            "erhoben. Die Region war Schauplatz wichtiger Schlachten im Befreiungskrieg 1971; das "
            "berühmte Akhaura-Massaker im April 1971 ereignete sich nahe der Stadt. Die "
            "Spezialität Chana (Joghurt) und der traditionelle Bambushandwerk prägen die "
            "Region."
        ),
        "facts": [
            "Bevölkerung ca. 270.000",
            "'Kulturhauptstadt Bangladeschs'",
            "Geburtsort Ustad Alauddin Khan (1862-1972)",
            "Subdivision seit 1860",
            "Distrikt seit 1984",
            "Britische Kolonialzeit 1858-1947",
            "Unabhängigkeit Bangladeschs 1971",
            "Akhaura-Massaker April 1971",
        ],
    },
    "dinajpur-cities-v2": {
        "desc": (
            "Dinajpur liegt im äußersten Nordwesten Bangladeschs nahe der indischen "
            "Grenze und zählt rund 200.000 Einwohner. Die Stadt ist Zentrum der Region "
            "Greater Dinajpur, die historisch zum Königreich Pundravardhana gehörte. "
            "Nahe der Stadt befindet sich der Kantajew-Tempel (1722 fertiggestellt), ein "
            "neuntürmiger Terrakotta-Hindutempel, der als bedeutendstes religiöses Monument "
            "Bangladeschs gilt. Während der britischen Kolonialzeit (1858-1947) wurde Dinajpur "
            "1786 zum Distrikt erhoben und durch die Eisenbahn 1878 erschlossen. Bei der Teilung "
            "Indiens 1947 wurde der Distrikt zwischen Indien und Ostpakistan geteilt. Nach der "
            "Unabhängigkeit Bangladeschs 1971 entwickelte sich Dinajpur zum landwirtschaftlichen "
            "Zentrum, berühmt für seinen Litschi-Anbau (rund 30 Prozent der nationalen "
            "Produktion) und für die Steinkohlenmine Barapukuria, die einzige Bangladeschs."
        ),
        "facts": [
            "Bevölkerung ca. 200.000",
            "Kantajew-Terrakotta-Tempel von 1722",
            "Distrikt seit 1786",
            "Britische Kolonialzeit 1858-1947",
            "Teilung Indiens 1947",
            "Unabhängigkeit Bangladeschs 1971",
            "Steinkohlenmine Barapukuria (einzige des Landes)",
            "Rund 30% der nationalen Litschi-Produktion",
        ],
    },
    "pabna-cities-v2": {
        "desc": (
            "Pabna liegt am Ichamati-Fluss im Westen Bangladeschs am rechten Ufer des Padma und "
            "zählt rund 145.000 Einwohner. Die Stadt war Schauplatz des Pabna-Bauernaufstands "
            "von 1873 gegen die hinduistischen Zamindar (Gutsherren) und britische Kolonialbeamte "
            "während der britischen Kolonialzeit (1858-1947); der Aufstand führte 1885 "
            "zum Bengal Tenancy Act. 1828 wurde Pabna zum Distrikt erhoben. Nahe der Stadt liegt "
            "die Jüngste Brücke des Landes: die 4,8 Kilometer lange Padma-Brücke "
            "wurde 2022 eröffnet und verbindet Südwest-Bangladesch mit Dhaka. Pabna war "
            "auch Heimat des Schriftstellers Pramatha Chaudhuri und des Bauunternehmens Edward "
            "Brothers. Nach der Unabhängigkeit Bangladeschs 1971 wurde hier 2017 Bangladeschs "
            "erstes Atomkraftwerk Rooppur in Bau gegeben (mit russischer Hilfe, geplante Inbetriebnahme "
            "2026)."
        ),
        "facts": [
            "Bevölkerung ca. 145.000",
            "Pabna-Bauernaufstand 1873",
            "Bengal Tenancy Act 1885",
            "Distrikt seit 1828",
            "Britische Kolonialzeit 1858-1947",
            "Unabhängigkeit Bangladeschs 1971",
            "Atomkraftwerk Rooppur seit 2017 in Bau",
            "Padma-Brücke seit 2022 (4,8 km)",
        ],
    },
    "tangail-cities-v2": {
        "desc": (
            "Tangail liegt am Lohajang-Fluss zwischen Dhaka und Mymensingh und zählt rund "
            "165.000 Einwohner. Die Stadt ist landesweit berühmt für ihre handgewebten "
            "Tangail-Saris, deren Herstellung im Dorf Pathrail bis ins 18. Jahrhundert zurückgeht "
            "und seit 2024 als geographische Herkunftsangabe Bangladeschs geschützt ist. "
            "Während der britischen Kolonialzeit (1858-1947) wurde Tangail 1869 zum Subdivision "
            "und 1969 zum Distrikt erhoben. Im Befreiungskrieg 1971 ereignete sich am 11. Dezember "
            "die berühmte Schlacht von Tangail mit dem ersten Luftlandeoperation der "
            "indisch-bangladeschischen Streitkräfte; sie war entscheidend für die "
            "Unabhängigkeit Bangladeschs am 16. Dezember 1971. Tangail ist auch berühmt "
            "für seine Süßigkeit Chamcham aus Porabari und für den Mahera "
            "Zamindar Bari, einen erhaltenen Gutsherren-Palast aus dem 19. Jahrhundert."
        ),
        "facts": [
            "Bevölkerung ca. 165.000",
            "Tangail-Sari geographische Herkunft seit 2024",
            "Subdivision seit 1869",
            "Distrikt seit 1969",
            "Britische Kolonialzeit 1858-1947",
            "Schlacht von Tangail 11. Dezember 1971",
            "Unabhängigkeit Bangladeschs am 16. Dezember 1971",
            "Süßigkeit Chamcham aus Porabari",
        ],
    },
    "sirajganj-cities-v2": {
        "desc": (
            "Sirajganj liegt am rechten Ufer des Jamuna (Brahmaputra) im Norden Bangladeschs und "
            "zählt rund 165.000 Einwohner. Die Stadt war während der britischen "
            "Kolonialzeit (1858-1947) wegen ihrer günstigen Lage am Jamuna ein wichtiger "
            "Jutehandelsplatz und beherbergte zahlreiche Webereien. 1845 wurde Sirajganj zum "
            "Subdivision erhoben. Bekannt ist die Stadt für ihre handgewebten Saris und das "
            "Tantibazar-Webviertel. Über den Jamuna führt seit 1998 die Bangabandhu-"
            "Brücke, mit 4,8 Kilometern eine der längsten Brücken Südasiens; sie "
            "verbindet erstmals den Westen mit dem Osten Bangladeschs ohne Fähre. Nach der "
            "Unabhängigkeit Bangladeschs 1971 wurde Sirajganj 1984 zum Distrikt erhoben. Die "
            "Region ist berühmt für ihren Joghurt aus Shahjadpur und für Tagores "
            "Familiengut Shahjadpur Kachharibari."
        ),
        "facts": [
            "Bevölkerung ca. 165.000",
            "Subdivision seit 1845",
            "Distrikt seit 1984",
            "Bangabandhu-Brücke (4,8 km) seit 1998",
            "Britische Kolonialzeit 1858-1947",
            "Unabhängigkeit Bangladeschs 1971",
            "Wichtiger Jutehandelsplatz im 19./20. Jh.",
            "Tagores Kachharibari in Shahjadpur",
        ],
    },
    "feni-cities-v2": {
        "desc": (
            "Feni liegt im Südosten Bangladeschs an der Nationalstraße Dhaka-Chittagong "
            "und zählt rund 105.000 Einwohner. Die Stadt liegt am Feni-Fluss, der die Grenze "
            "zum indischen Bundesstaat Tripura bildet. Während der britischen Kolonialzeit "
            "(1858-1947) wurde Feni 1876 zum Subdivision erhoben und durch die Assam-Bengal-"
            "Eisenbahn 1895 erschlossen. Bei der Teilung Indiens 1947 fiel Feni an Ostpakistan, "
            "wodurch die Stadt zu einem strategischen Grenzposten wurde. Im Befreiungskrieg 1971 "
            "lief über Feni einer der wichtigsten Versorgungswege für die Mukti Bahini "
            "aus Indien; die Stadt wurde am 6. Dezember 1971 befreit. Nach der Unabhängigkeit "
            "Bangladeschs 1971 wurde Feni 1984 zum Distrikt erhoben. Heute ist die Stadt vor allem "
            "für ihre Spezialität Khandesh (Süßigkeit) und die Mahipal-Kreuzung "
            "an der N1 bekannt."
        ),
        "facts": [
            "Bevölkerung ca. 105.000",
            "Subdivision seit 1876",
            "Distrikt seit 1984",
            "Eisenbahnanschluss seit 1895",
            "Britische Kolonialzeit 1858-1947",
            "Teilung Indiens 1947",
            "Befreiung am 6. Dezember 1971",
            "Unabhängigkeit Bangladeschs am 16. Dezember 1971",
        ],
    },
    "jamalpur-cities-v2": {
        "desc": (
            "Jamalpur liegt am alten Brahmaputra-Fluss nördlich von Dhaka nahe der indischen "
            "Grenze zu Meghalaya und zählt rund 140.000 Einwohner. Die Stadt wurde nach dem "
            "Sufi-Heiligen Jamal Shah (15. Jahrhundert) benannt, dessen Mausoleum in der Stadt "
            "liegt. Während der britischen Kolonialzeit (1858-1947) wurde Jamalpur 1845 zum "
            "Subdivision von Mymensingh erhoben und durch die Eisenbahn 1899 erschlossen. Im "
            "Befreiungskrieg 1971 war die Schlacht um Jamalpur am 9.-11. Dezember 1971 entscheidend "
            "für die Befreiung Nord-Bangladeschs vor der Unabhängigkeit am 16. Dezember "
            "1971. Nach der Unabhängigkeit Bangladeschs 1971 wurde Jamalpur 1978 zum Distrikt "
            "erhoben. Die Region ist berühmt für Nakshi-Kantha-Stickerei (UNESCO immaterielles "
            "Kulturerbe seit 2009) und für den Madhutila-Ökopark im benachbarten Sherpur."
        ),
        "facts": [
            "Bevölkerung ca. 140.000",
            "Benannt nach Jamal Shah (15. Jahrhundert)",
            "Subdivision seit 1845",
            "Distrikt seit 1978",
            "Britische Kolonialzeit 1858-1947",
            "Schlacht um Jamalpur 9.-11. Dezember 1971",
            "Unabhängigkeit Bangladeschs am 16. Dezember 1971",
            "Nakshi-Kantha-Stickerei (UNESCO 2009)",
        ],
    },
    "naogaon-cities-v2": {
        "desc": (
            "Naogaon liegt am Choto-Jamuna-Fluss im Nordwesten Bangladeschs nahe der indischen "
            "Grenze und zählt rund 155.000 Einwohner. In der Stadtumgebung liegt Paharpur, "
            "die Ruine des buddhistischen Großklosters Somapura Mahavihara aus dem 8. "
            "Jahrhundert, gegründet von König Dharmapala der Pala-Dynastie; seit 1985 "
            "UNESCO-Weltkulturerbe und größtes buddhistisches Kloster südlich des "
            "Himalaya. Während der britischen Kolonialzeit (1858-1947) war Naogaon eine "
            "Subdivision des Distrikts Rajshahi und wurde 1984, nach der Unabhängigkeit "
            "Bangladeschs 1971, zum eigenen Distrikt erhoben. Die Region ist berühmt für "
            "ihre Reisproduktion – Naogaon gilt als 'Reiskammer Bangladeschs' – sowie "
            "für den Kusumba-Moschee aus dem Jahr 1558, ein Meisterwerk der Sultanats-Architektur "
            "Bengalens."
        ),
        "facts": [
            "Bevölkerung ca. 155.000",
            "Somapura Mahavihara UNESCO seit 1985",
            "Größtes buddhistisches Kloster südlich des Himalaya",
            "Pala-Dynastie 8. Jahrhundert",
            "Britische Kolonialzeit 1858-1947",
            "Distrikt seit 1984",
            "Unabhängigkeit Bangladeschs 1971",
            "Kusumba-Moschee von 1558",
        ],
    },
    "noakhali-cities-v2": {
        "desc": (
            "Noakhali liegt am Golf von Bengalen im Südosten Bangladeschs und zählt in "
            "der Hauptstadt Maijdee Court rund 110.000 Einwohner. Der Distrikt wurde 1822 unter "
            "britischer Kolonialherrschaft gegründet (britische Kolonialzeit offiziell "
            "1858-1947); der Name bedeutet 'Neuer Kanal' und verweist auf einen 1660 vom Mogul-"
            "Gouverneur Shaista Khan gegrabenen Kanal gegen Überschwemmungen. Im Oktober 1946 "
            "war Noakhali Schauplatz schwerer hindu-muslimischer Massaker; Mahatma Gandhi reiste "
            "1946-1947 in einem Friedensmarsch durch die Region und blieb dort vier Monate. "
            "Während des Befreiungskriegs 1971 vor der Unabhängigkeit Bangladeschs am "
            "16. Dezember 1971 war die Küstenregion strategisch bedeutsam. Noakhali ist der "
            "anfälligste Distrikt für Wirbelstürme; der Bhola-Zyklon 1970 tötete "
            "hier zehntausende Menschen."
        ),
        "facts": [
            "Bevölkerung Maijdee Court ca. 110.000",
            "Distrikt gegründet 1822",
            "Name bedeutet 'Neuer Kanal'",
            "Noakhali-Massaker Oktober 1946",
            "Gandhi-Friedensmarsch 1946-1947",
            "Britische Kolonialzeit 1858-1947",
            "Unabhängigkeit Bangladeschs 1971",
            "Bhola-Zyklon 1970 zehntausende Tote",
        ],
    },
    "faridpur-cities-v2": {
        "desc": (
            "Faridpur liegt am Padma-Fluss (Hauptarm des Ganges) westlich von Dhaka und zählt "
            "rund 130.000 Einwohner. Die Stadt wurde nach dem Sufi-Heiligen Sheikh Fariduddin "
            "(13. Jahrhundert) benannt, einem Schüler des Khwaja Moinuddin Chishti aus Ajmer. "
            "Während der britischen Kolonialzeit (1858-1947) wurde Faridpur 1815 zum eigenen "
            "Distrikt erhoben (ursprünglich als Dacca-Jalalpur). Nahe Faridpur liegt Tungipara, "
            "der Geburtsort des Staatsgründers Sheikh Mujibur Rahman (1920-1975), der die "
            "Unabhängigkeit Bangladeschs am 26. März 1971 ausrief und am 15. August 1975 "
            "ermordet wurde; sein Mausoleum in Tungipara ist Nationalheiligtum. Nach der "
            "Unabhängigkeit Bangladeschs 1971 wurde der Distrikt 1984 in vier Distrikte "
            "geteilt. Die 2022 eröffnete Padma-Brücke verläuft über den "
            "Faridpur-Distrikt."
        ),
        "facts": [
            "Bevölkerung ca. 130.000",
            "Benannt nach Sheikh Fariduddin (13. Jh.)",
            "Distrikt seit 1815",
            "Britische Kolonialzeit 1858-1947",
            "Tungipara: Geburtsort Sheikh Mujibur Rahman",
            "Unabhängigkeit Bangladeschs am 26. März 1971",
            "Mujib ermordet am 15. August 1975",
            "Padma-Brücke seit 2022 (4,8 km)",
        ],
    },
    "saidpur-cities-v2": {
        "desc": (
            "Saidpur liegt im Nordwesten Bangladeschs im Distrikt Nilphamari und zählt rund "
            "165.000 Einwohner. Die Stadt entwickelte sich während der britischen Kolonialzeit "
            "(1858-1947), als 1870 hier das größte Eisenbahn-Reparaturwerk Britisch-"
            "Indiens östlich von Kalkutta eröffnet wurde – die Saidpur Railway "
            "Workshops sind bis heute der größte Industriebetrieb der Region. Saidpur "
            "wurde 1947 nach der Teilung Indiens zum Hauptzentrum der nicht-bengalischen Bihari-"
            "Muslime, die als 'Stranded Pakistanis' bekannt sind und nach der Unabhängigkeit "
            "Bangladeschs am 16. Dezember 1971 staatenlos wurden; in den Lagern leben bis heute "
            "rund 250.000 Menschen. Saidpur hat den drittgrößten Inlandflughafen "
            "Bangladeschs. Die Stadt ist auch Zentrum der bangladeschischen Strickwarenproduktion "
            "und beheimatet das Bangladesh Hadith Foundation Hospital."
        ),
        "facts": [
            "Bevölkerung ca. 165.000",
            "Eisenbahn-Reparaturwerk seit 1870",
            "Größtes Werk Ostbritisch-Indiens",
            "Britische Kolonialzeit 1858-1947",
            "Bihari-Bevölkerung seit 1947",
            "Unabhängigkeit Bangladeschs 1971",
            "Rund 250.000 staatenlose Bihari",
            "Drittgrößter Inlandflughafen",
        ],
    },
    "narsingdi-cities-v2": {
        "desc": (
            "Narsingdi liegt am Meghna-Fluss nördlich von Dhaka und zählt rund 230.000 "
            "Einwohner. Die Stadt ist Zentrum der bangladeschischen Textilindustrie außerhalb "
            "der Hauptstadt; in Babur-Hut (Madhabdi) liegt der größte traditionelle "
            "Textilmarkt Südasiens, der jeden Donnerstag und Freitag rund 100.000 Händler "
            "anzieht. Bei Wari-Bateshwar wurden 2000-2007 archäologische Funde aus dem 4. "
            "Jahrhundert v. Chr. ausgegraben; sie deuten auf eine alte Hafenstadt am Brahmaputra hin "
            "und sind älter als Mahasthangarh. Während der britischen Kolonialzeit "
            "(1858-1947) war Narsingdi Subdivision des Distrikts Dhaka. Nach der Unabhängigkeit "
            "Bangladeschs 1971 wurde Narsingdi 1984 zum eigenen Distrikt erhoben. Die Region ist "
            "auch für ihre Bananenproduktion und das Lokma-Garn berühmt."
        ),
        "facts": [
            "Bevölkerung ca. 230.000",
            "Babur-Hut: größter Textilmarkt Südasiens",
            "Wari-Bateshwar: archäologische Funde 4. Jh. v. Chr.",
            "Britische Kolonialzeit 1858-1947",
            "Distrikt seit 1984",
            "Unabhängigkeit Bangladeschs 1971",
            "Liegt am Meghna-Fluss",
            "Wichtiges Bananen-Anbaugebiet",
        ],
    },
    "chandpur-cities-v2": {
        "desc": (
            "Chandpur liegt am Zusammenfluss von Padma und Meghna im Zentrum Bangladeschs und "
            "zählt rund 165.000 Einwohner. Die Stadt ist als 'Ilish-Stadt' (Hilsa-Stadt) "
            "bekannt, da hier die meisten Hilsa-Fische Bangladeschs gefangen werden – der "
            "Hilsa ist der Nationalfisch und seit 2017 als geographische Herkunftsangabe Bangladeschs "
            "geschützt. Während der britischen Kolonialzeit (1858-1947) wurde Chandpur "
            "ein wichtiger Hafen und Bahnknotenpunkt mit Eisenbahnanschluss seit 1895. Bei der "
            "Teilung Indiens 1947 fiel die Stadt an Ostpakistan und wurde zum strategischen "
            "Flusshafen. Nach der Unabhängigkeit Bangladeschs 1971 wurde Chandpur 1984 zum "
            "eigenen Distrikt erhoben. Die Region leidet stark unter Flusserosion durch die Padma "
            "und Meghna. Das Drei-Flüsse-Mausoleum (Mol Heads) ist eine Touristenattraktion "
            "am Zusammenfluss."
        ),
        "facts": [
            "Bevölkerung ca. 165.000",
            "'Ilish-Stadt' (Hilsa-Hauptstadt)",
            "Hilsa geographische Herkunft seit 2017",
            "Eisenbahnanschluss seit 1895",
            "Britische Kolonialzeit 1858-1947",
            "Distrikt seit 1984",
            "Unabhängigkeit Bangladeschs 1971",
            "Drei-Flüsse-Mausoleum am Zusammenfluss",
        ],
    },
    "bhola-cities-v2": {
        "desc": (
            "Bhola liegt im Süden Bangladeschs am Zusammenfluss von Meghna und Tetulia und "
            "ist die größte Insel des Landes. Die Stadt Bhola zählt rund 90.000 "
            "Einwohner und ist Verwaltungssitz des Bhola-Distrikts. Die Insel war während der "
            "britischen Kolonialzeit (1858-1947) Teil des Distrikts Bakerganj und wurde 1984 nach "
            "der Unabhängigkeit Bangladeschs 1971 zum eigenen Distrikt erhoben. Am 12. November "
            "1970 traf der Bhola-Zyklon mit Windgeschwindigkeiten von 185 km/h die Insel und "
            "tötete schätzungsweise 300.000 bis 500.000 Menschen – die tödlichste "
            "Naturkatastrophe der modernen Geschichte. Die schlechte Krisenreaktion der "
            "pakistanischen Regierung beschleunigte die Bewegung für die Unabhängigkeit "
            "Bangladeschs am 16. Dezember 1971. Bhola ist heute Zentrum der bangladeschischen "
            "Erdgasförderung."
        ),
        "facts": [
            "Bevölkerung ca. 90.000",
            "Größte Insel Bangladeschs",
            "Bhola-Zyklon am 12. November 1970",
            "300.000-500.000 Tote im Zyklon",
            "Britische Kolonialzeit 1858-1947",
            "Distrikt seit 1984",
            "Unabhängigkeit Bangladeschs am 16. Dezember 1971",
            "Wichtiges Erdgasfördergebiet",
        ],
    },
    "jhenaidah-cities-v2": {
        "desc": (
            "Jhenaidah liegt am Nabaganga-Fluss im Südwesten Bangladeschs und zählt rund "
            "100.000 Einwohner. Die Stadt war zur Mogulzeit Teil des Königreichs Pratapaditya "
            "(1574-1612), eines der Twelve Bhuiyans, der Bengalen gegen die Mogulen verteidigte. "
            "Während der britischen Kolonialzeit (1858-1947) wurde Jhenaidah 1862 als eine "
            "der ersten Bahnstationen Ostbengalens an die Eastern Bengal Railway angeschlossen. "
            "Nach der Unabhängigkeit Bangladeschs 1971 wurde Jhenaidah 1984 zum eigenen "
            "Distrikt erhoben. In Jhenaidah liegt das Grab des bengalischen Volksmusiker Pagla Kanai "
            "(1809-1889) und nahe der Stadt das Schloss Mirpur und der historische Banshishilpa-"
            "Markt. Die Stadt ist berühmt für die Bambushandwerk-Tradition und Bauunternehmer "
            "und beheimatet die Bangladesh Military Academy in der nahen Garnison Bhutia, eine der "
            "wichtigsten Militärakademien des Landes."
        ),
        "facts": [
            "Bevölkerung ca. 100.000",
            "Pratapaditya-Königreich 1574-1612",
            "Eisenbahnanschluss seit 1862",
            "Britische Kolonialzeit 1858-1947",
            "Distrikt seit 1984",
            "Unabhängigkeit Bangladeschs 1971",
            "Grab des Pagla Kanai (1809-1889)",
            "Bangladesh Military Academy in Bhutia",
        ],
    },
}


def to_str_arr(items: list[str]) -> str:
    parts = []
    for it in items:
        esc = it.replace("\\", "\\\\").replace('"', '\\"')
        parts.append(f'"{esc}"')
    return "[" + ", ".join(parts) + "]"


def find_balanced_close(text: str, open_pos: int) -> int:
    """Given the position right AFTER an opening '{', return the position right after the matching '}'."""
    depth = 1
    j = open_pos
    while j < len(text) and depth > 0:
        if text[j] == '{':
            depth += 1
        elif text[j] == '}':
            depth -= 1
        j += 1
    return j  # right after closing brace


def replace_de_in_block(text: str, block_start_after_brace: int, block_end_after_brace: int, new_de_value: str) -> tuple[str, bool]:
    """Replace `de: "..."` (string) or `de: [...]` (array) inside [block_start_after_brace, block_end_after_brace-1)."""
    body = text[block_start_after_brace:block_end_after_brace - 1]
    # Try string form first: de: "..."
    m = re.search(r'(\bde:\s*)"((?:[^"\\]|\\.)*)"', body)
    if m:
        new_body = body[:m.start(2) - 1] + '"' + new_de_value + '"' + body[m.end(2) + 1:]
        # m captures: group1 prefix, group2 inner string. Replace just the quoted portion.
        # Simpler approach: re.sub of the full match.
        new_body = body[:m.start()] + m.group(1) + '"' + new_de_value + '"' + body[m.end():]
        return text[:block_start_after_brace] + new_body + text[block_end_after_brace - 1:], True
    return text, False


def replace_de_array_in_block(text: str, block_start_after_brace: int, block_end_after_brace: int, new_array_str: str) -> tuple[str, bool]:
    body = text[block_start_after_brace:block_end_after_brace - 1]
    # Match de: [ ... ] non-greedy with balanced brackets via simple approach
    m = re.search(r'\bde:\s*\[', body)
    if not m:
        return text, False
    arr_open = m.end()
    depth = 1
    j = arr_open
    while j < len(body) and depth > 0:
        ch = body[j]
        if ch == '[':
            depth += 1
        elif ch == ']':
            depth -= 1
        elif ch == '"':
            # skip string
            j += 1
            while j < len(body) and body[j] != '"':
                if body[j] == '\\':
                    j += 2
                    continue
                j += 1
        j += 1
    # j points right after closing ]
    new_body = body[:m.start()] + 'de: ' + new_array_str + body[j:]
    return text[:block_start_after_brace] + new_body + text[block_end_after_brace - 1:], True


def main():
    src = FILE.read_text(encoding="utf-8")
    poi_pattern = re.compile(r'id:\s*"([^"]+)"')

    patched = 0
    skipped_filled = []
    skipped_no_data = []
    skipped_no_field = []

    # Iterate in REVERSE so positions stay valid after edits
    matches = list(poi_pattern.finditer(src))
    for i in range(len(matches) - 1, -1, -1):
        m = matches[i]
        poi_id = m.group(1)
        block_start = m.start()
        block_end = matches[i + 1].start() if i + 1 < len(matches) else len(src)
        block = src[block_start:block_end]

        # Check if DE is template
        da_m = re.search(r'descriptionAdvanced:\s*\{', block)
        if not da_m:
            skipped_no_field.append(poi_id)
            continue
        da_open_abs = block_start + da_m.end()
        da_close_abs = find_balanced_close(src, da_open_abs)

        da_body = src[da_open_abs:da_close_abs - 1]
        de_str_m = re.search(r'\bde:\s*"((?:[^"\\]|\\.)*)"', da_body)
        if not de_str_m:
            skipped_no_field.append(poi_id + " (no de string)")
            continue
        current_de = de_str_m.group(1)

        if TEMPLATE_MARKER not in current_de:
            skipped_filled.append(poi_id)
            continue

        if poi_id not in DATA:
            skipped_no_data.append(poi_id)
            continue

        data = DATA[poi_id]
        new_desc = data["desc"].replace("\\", "\\\\").replace('"', '\\"')
        new_facts_arr = to_str_arr(data["facts"])

        # 1) Replace de in descriptionAdvanced
        src, ok1 = replace_de_in_block(src, da_open_abs, da_close_abs, new_desc)
        if not ok1:
            skipped_no_field.append(poi_id + " (replace desc failed)")
            continue

        # Re-find factsAdvanced AFTER edit (positions shifted within this block)
        # Recompute block boundaries
        # Find factsAdvanced after the (possibly shifted) descriptionAdvanced close
        # Simpler: re-find factsAdvanced inside the POI by id again
        id_re_local = re.compile(r'id:\s*"' + re.escape(poi_id) + r'"')
        m2 = id_re_local.search(src)
        if not m2:
            continue
        # Find next id position to bound block
        next_m = poi_pattern.search(src, m2.end())
        next_pos = next_m.start() if next_m else len(src)
        # Find factsAdvanced inside [m2.start(), next_pos)
        fa_m = re.search(r'factsAdvanced:\s*\{', src[m2.start():next_pos])
        if not fa_m:
            skipped_no_field.append(poi_id + " (no factsAdvanced)")
            continue
        fa_open_abs = m2.start() + fa_m.end()
        fa_close_abs = find_balanced_close(src, fa_open_abs)

        src, ok2 = replace_de_array_in_block(src, fa_open_abs, fa_close_abs, new_facts_arr)
        if not ok2:
            skipped_no_field.append(poi_id + " (replace facts failed)")
            continue

        patched += 1

    FILE.write_text(src, encoding="utf-8")
    print(f"Patched: {patched}")
    print(f"Skipped (already filled): {len(skipped_filled)}")
    if skipped_filled:
        for s in skipped_filled:
            print("  -", s)
    print(f"Skipped (no DATA): {len(skipped_no_data)}")
    if skipped_no_data:
        for s in skipped_no_data:
            print("  -", s)
    print(f"Skipped (no field): {len(skipped_no_field)}")
    if skipped_no_field:
        for s in skipped_no_field:
            print("  -", s)


if __name__ == "__main__":
    main()
