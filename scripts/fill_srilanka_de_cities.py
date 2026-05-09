"""Fill descriptionAdvanced.de + factsAdvanced.de for POIs in poiExtraSriLankaCitiesV2.ts.

Inserts new descriptionAdvanced + factsAdvanced blocks (DE only) into each POI
object after the existing facts block. Skips POIs that already have a
descriptionAdvanced field.
"""
from __future__ import annotations
import re
from pathlib import Path

FILE = Path(r"C:\Users\User\plizio-repo\lib\visualLab\data\poiExtraSriLankaCitiesV2.ts")

DATA: dict[str, dict] = {
    "colombo-cities-v2": {
        "desc": (
            "Colombo ist die kommerzielle Hauptstadt und mit rund 5,6 Millionen Einwohnern in der "
            "Metropolregion die größte Stadt Sri Lankas und liegt am Indischen Ozean an der "
            "Westküste der Insel. Die offizielle Hauptstadt wurde 1982 nach Sri Jayawardenepura "
            "Kotte verlegt, doch Colombo blieb das wirtschaftliche Zentrum. Während der "
            "britischen Kolonialzeit (1815-1948) wurde die Stadt 1815 zur Hauptstadt von "
            "Britisch-Ceylon erhoben und der Hafen massiv ausgebaut. Davor war Colombo "
            "portugiesisch (1505-1658) und niederländisch (1658-1796). Nach dem Ende des "
            "Bürgerkriegs 2009 erlebte die Stadt einen Bauboom mit dem 350 Meter hohen Lotus "
            "Tower (2019) und dem 269 Hektar großen Port City-Projekt."
        ),
        "facts": [
            "Metropolregion mit rund 5,6 Millionen Einwohnern",
            "Britische Kolonialzeit 1815-1948, davor portugiesisch und niederländisch",
            "Offizielle Hauptstadt seit 1982 in Sri Jayawardenepura Kotte",
            "Hafen von Colombo unter den verkehrsreichsten Südasiens",
            "Lotus Tower 350 Meter hoch, 2019 eröffnet",
            "Galle Face Green als 500 Meter lange Strandpromenade",
            "Ende des Bürgerkriegs 2009 löste Bauboom aus",
            "Port City-Großprojekt auf 269 Hektar Landgewinnung",
        ],
    },
    "kandy-cities-v2": {
        "desc": (
            "Kandy liegt auf 500 Metern Höhe in den zentralen Hügeln Sri Lankas und zählt rund "
            "125.000 Einwohner in der Stadt sowie über 400.000 in der Metropolregion. Die "
            "Stadt war von 1469 bis 1815 die Hauptstadt des unabhängigen Königreichs Kandy, "
            "des letzten singhalesischen Königreichs der Insel. Mit dem Vertrag von Kandy 1815 "
            "endete die Monarchie und die britische Kolonialzeit (1815-1948) begann auf ganz "
            "Ceylon. Der Sri Dalada Maligawa, der Tempel des Heiligen Zahnes, beherbergt seit "
            "1592 eine Reliquie Buddhas und ist das wichtigste buddhistische Heiligtum des "
            "Landes. Seit 1988 zählt die historische Stadt zum UNESCO-Weltkulturerbe. Der "
            "Kandy-See wurde 1807 vom letzten König Sri Vikrama Rajasinha künstlich angelegt."
        ),
        "facts": [
            "Hauptstadt des Königreichs Kandy 1469-1815",
            "Höhe 500 Meter, rund 125.000 Einwohner",
            "Tempel des Heiligen Zahnes mit Buddha-Reliquie seit 1592",
            "UNESCO-Weltkulturerbe seit 1988",
            "Kandy-See künstlich 1807 angelegt",
            "Vertrag von Kandy 1815 beendete Monarchie",
            "Britische Kolonialzeit 1815-1948",
            "Esala Perahera als bedeutendste Prozession Sri Lankas",
        ],
    },
    "galle-cities-v2": {
        "desc": (
            "Galle liegt an der Südwestküste Sri Lankas am Indischen Ozean und zählt rund "
            "100.000 Einwohner. Die Stadt wurde 1505 von den Portugiesen gegründet, die hier "
            "ein erstes Fort errichteten. 1640 eroberten die Niederländer Galle und bauten "
            "ab 1663 die heutige, 36 Hektar große Festung mit 14 Bastionen aus Korallen- "
            "und Granitstein. Während der britischen Kolonialzeit (1815-1948) blieb der Hafen "
            "wichtig, verlor jedoch nach 1873 mit dem Ausbau Colombos an Bedeutung. Beim "
            "Tsunami am 26. Dezember 2004 starben in der Region über 4.000 Menschen, doch "
            "die Festungsmauern hielten stand. Seit 1988 zählt die Altstadt zum "
            "UNESCO-Weltkulturerbe und ist die größte erhaltene europäische Festung in Asien."
        ),
        "facts": [
            "Rund 100.000 Einwohner an der Südwestküste",
            "Gegründet 1505 durch die Portugiesen",
            "Niederländische Festung ab 1663 mit 14 Bastionen",
            "Britische Kolonialzeit 1815-1948",
            "Tsunami am 26. Dezember 2004 mit über 4.000 Opfern in der Region",
            "UNESCO-Weltkulturerbe seit 1988",
            "Festung 36 Hektar groß aus Korallen- und Granitstein",
            "Größte europäisch erbaute Festung Asiens",
        ],
    },
    "jaffna-cities-v2": {
        "desc": (
            "Jaffna liegt auf der gleichnamigen Halbinsel im äußersten Norden Sri Lankas und "
            "zählt rund 88.000 Einwohner. Die Stadt war von 1215 bis 1619 Hauptstadt des "
            "tamilischen Königreichs Jaffna, das von den Aryacakravarti-Königen regiert "
            "wurde. 1619 eroberten die Portugiesen die Stadt, 1658 die Niederländer und 1795 "
            "die Briten; die britische Kolonialzeit dauerte von 1815 bis 1948. Während des "
            "Bürgerkriegs zwischen Regierung und LTTE (Liberation Tigers of Tamil Eelam) "
            "von 1983 bis 2009 war Jaffna jahrelang Frontstadt und Hauptzentrum tamilischen "
            "Widerstands. Die Öffentliche Bibliothek wurde 1981 niedergebrannt, dabei gingen "
            "über 97.000 Bücher und Manuskripte verloren; sie wurde 2003 wiedereröffnet. Der "
            "Nallur Kandaswamy Tempel von 1734 ist eines der wichtigsten Hindu-Heiligtümer."
        ),
        "facts": [
            "Rund 88.000 Einwohner auf der Jaffna-Halbinsel",
            "Königreich Jaffna 1215-1619",
            "Portugiesisch ab 1619, niederländisch ab 1658",
            "Britische Kolonialzeit 1815-1948",
            "Bürgerkrieg 1983-2009 zwischen Regierung und LTTE",
            "Bibliothek 1981 niedergebrannt, 97.000 Bücher verloren",
            "Wiedereröffnung der Bibliothek 2003",
            "Nallur Kandaswamy Tempel von 1734",
        ],
    },
    "trincomalee-cities-v2": {
        "desc": (
            "Trincomalee liegt an der Ostküste Sri Lankas und zählt rund 99.000 Einwohner. "
            "Der Naturhafen ist mit 158 Quadratkilometern einer der größten und tiefsten "
            "natürlichen Tiefwasserhäfen der Welt. Die Stadt war Schauplatz wechselnder "
            "Kolonialherrschaft: portugiesisch ab 1624, niederländisch ab 1639, kurz "
            "französisch 1672 und 1782, schließlich britisch ab 1795. Während der "
            "britischen Kolonialzeit (1815-1948) war Trincomalee die wichtigste Marinebasis "
            "Britisch-Ceylons. Im April 1942 griffen japanische Flugzeuge im Indischen "
            "Ozean-Raid den Hafen an. Im Bürgerkrieg 1983-2009 lag die Stadt mehrfach an "
            "der Frontlinie. Der Koneswaram-Tempel auf dem Felsen Swami Rock geht "
            "auf das 5. Jahrhundert zurück und wurde 1622 von den Portugiesen zerstört, "
            "1952 wiederaufgebaut."
        ),
        "facts": [
            "Rund 99.000 Einwohner an der Ostküste",
            "Naturhafen mit 158 Quadratkilometern Fläche",
            "Portugiesisch ab 1624, niederländisch ab 1639",
            "Britische Kolonialzeit 1815-1948 als wichtigste Marinebasis",
            "Japanischer Luftangriff im April 1942",
            "Bürgerkrieg 1983-2009",
            "Koneswaram-Tempel ab dem 5. Jahrhundert",
            "Tempel 1622 zerstört, 1952 wiederaufgebaut",
        ],
    },
    "kurunegala-cities-v2": {
        "desc": (
            "Kurunegala liegt 94 Kilometer nordöstlich von Colombo in der Nordwestprovinz "
            "und zählt rund 99.000 Einwohner. Die Stadt war von 1293 bis 1341 unter den "
            "Königen Bhuvanaikabahu II. und Parakramabahu IV. die Hauptstadt des "
            "singhalesischen Reichs. Sie liegt in einer Ebene auf 116 Metern Höhe, umgeben "
            "von acht riesigen, nach Tieren benannten Felsen, darunter der 325 Meter "
            "hohe Ethagala (Elefantenfelsen). Während der britischen Kolonialzeit "
            "(1815-1948) wurde Kurunegala 1845 zum Verwaltungssitz der North-Western "
            "Province erhoben und durch die Eisenbahn 1894 erschlossen. Die Region ist "
            "Zentrum des sri lankischen Kokosnussanbaus und des Kautschukanbaus; das "
            "Kokosnussdreieck zwischen Kurunegala, Chilaw und Colombo liefert über 70 "
            "Prozent der nationalen Produktion."
        ),
        "facts": [
            "Hauptstadt des Reichs 1293-1341",
            "Rund 99.000 Einwohner, 116 Meter Höhe",
            "Ethagala-Felsen 325 Meter hoch",
            "Britische Kolonialzeit 1815-1948",
            "Verwaltungssitz der North-Western Province seit 1845",
            "Eisenbahnanschluss seit 1894",
            "Über 70% der Kokosnussproduktion aus dem Dreieck",
            "94 Kilometer nordöstlich von Colombo",
        ],
    },
    "anuradhapura-cities-v2": {
        "desc": (
            "Anuradhapura liegt in der Nord-Zentralprovinz Sri Lankas und zählt rund "
            "63.000 Einwohner. Die Stadt war von 377 v. Chr. bis 1017 n. Chr. über 1.400 "
            "Jahre lang die Hauptstadt des singhalesischen Königreichs und damit eine der "
            "am längsten dauerhaft besiedelten Städte Asiens. König Devanampiya Tissa "
            "(reg. 250-210 v. Chr.) machte die Stadt 247 v. Chr. nach der Bekehrung durch "
            "den Mönch Mahinda zum Zentrum des Theravada-Buddhismus. Der Heilige Bodhi-Baum "
            "Jaya Sri Maha Bodhi wurde 288 v. Chr. aus einem Ableger des Bodhi-Baums von "
            "Bodh Gaya gepflanzt und ist mit über 2.300 Jahren der älteste historisch "
            "verbürgte Baum der Welt. Die Stupa Ruwanwelisaya von 140 v. Chr. ist 103 "
            "Meter hoch. 1017 zerstörten die südindischen Cholas die Stadt. Seit 1982 zählt "
            "Anuradhapura zum UNESCO-Weltkulturerbe."
        ),
        "facts": [
            "Hauptstadt 377 v. Chr. bis 1017 n. Chr.",
            "Rund 63.000 Einwohner",
            "Bodhi-Baum 288 v. Chr. gepflanzt, ältester der Welt",
            "Buddhismus seit 247 v. Chr. unter Devanampiya Tissa",
            "Ruwanwelisaya-Stupa 103 Meter hoch, 140 v. Chr.",
            "Zerstörung 1017 durch die Cholas",
            "UNESCO-Weltkulturerbe seit 1982",
            "Britische Kolonialzeit 1815-1948 mit Wiederausgrabung",
        ],
    },
    "badulla-cities-v2": {
        "desc": (
            "Badulla liegt auf 680 Metern Höhe im fruchtbaren Tal des Badulu Oya in der "
            "Uva-Provinz und zählt rund 47.000 Einwohner. Die Stadt blickt auf eine über "
            "2.000-jährige Geschichte zurück und war im 1. Jahrhundert v. Chr. unter König "
            "Walagamba schon besiedelt. Während der britischen Kolonialzeit (1815-1948) "
            "war Badulla Schauplatz der Uva-Wellassa-Rebellion 1817-1818 gegen die Briten, "
            "deren brutale Niederschlagung tausende Tote forderte und die Region "
            "wirtschaftlich ruinierte. Mit der Eröffnung der Hauptbahnstrecke 1924 wurde "
            "Badulla zur Endstation einer der landschaftlich spektakulärsten Eisenbahnstrecken "
            "der Welt mit 46 Tunneln auf der 292 Kilometer langen Strecke ab Colombo. Die "
            "Region produziert hochwertigen Uva-Tee, der ab 1875 in der Pflanzungen "
            "der britischen Kolonialzeit als Ceylon-Tee weltberühmt wurde."
        ),
        "facts": [
            "Höhe 680 Meter, rund 47.000 Einwohner",
            "Bewohnt seit dem 1. Jahrhundert v. Chr.",
            "Uva-Wellassa-Rebellion 1817-1818",
            "Britische Kolonialzeit 1815-1948",
            "Eisenbahnendstation seit 1924",
            "Strecke aus Colombo 292 Kilometer mit 46 Tunneln",
            "Uva-Tee als hochwertiger Ceylon-Tee",
            "Muthiyangana Raja Maha Vihara als heilige Stätte",
        ],
    },
    "ratnapura-cities-v2": {
        "desc": (
            "Ratnapura, übersetzt Stadt der Edelsteine, liegt 101 Kilometer südöstlich "
            "von Colombo in der Sabaragamuwa-Provinz und zählt rund 46.000 Einwohner. Die "
            "Stadt ist seit über 2.000 Jahren das Zentrum der sri lankischen Edelsteinindustrie; "
            "schon König Solomon soll seine Saphire von hier bezogen haben. In den "
            "Schwemmlandvorkommen des Kalu Ganga werden Saphire, Rubine, Katzenaugen, "
            "Topase, Granate und Mondsteine in traditionellen, bis zu 30 Meter tiefen "
            "Handgrabungen gefördert. Während der britischen Kolonialzeit (1815-1948) wurde "
            "der Edelsteinhandel reguliert und das National Museum of Sabaragamuwa "
            "gegründet. Ratnapura ist Ausgangspunkt der heiligen Wanderung zum 2.243 Meter "
            "hohen Adam's Peak (Sri Pada). Die Region erhält rund 4.000 Millimeter "
            "Niederschlag pro Jahr und ist eine der feuchtesten Sri Lankas."
        ),
        "facts": [
            "Rund 46.000 Einwohner, 101 Kilometer von Colombo",
            "Über 2.000 Jahre Edelsteinabbau",
            "Saphire, Rubine, Katzenaugen aus dem Kalu Ganga",
            "Britische Kolonialzeit 1815-1948",
            "Adam's Peak 2.243 Meter hoch",
            "Niederschlag rund 4.000 mm pro Jahr",
            "Handgrabungen bis 30 Meter Tiefe",
            "National Museum of Sabaragamuwa",
        ],
    },
    "dehiwala-mount-lavinia-cities-v2": {
        "desc": (
            "Dehiwala-Mount Lavinia bildet die direkte südliche Vorstadt von Colombo und "
            "zählt rund 220.000 Einwohner; damit ist sie nach Colombo und Negombo die "
            "drittgrößte Stadt Sri Lankas. Die beiden 1969 zur Doppelgemeinde "
            "vereinigten Stadtteile entstanden während der britischen Kolonialzeit "
            "(1815-1948). Mount Lavinia wurde 1806 berühmt, als Gouverneur Sir Thomas "
            "Maitland hier seine Sommerresidenz errichtete; das daraus 1877 entstandene "
            "Mount Lavinia Hotel ist bis heute eines der ältesten Strandhotels Asiens. "
            "Der Zoologische Garten Dehiwala wurde 1936 als einer der ersten zoologischen "
            "Gärten Asiens eröffnet und beherbergt auf 22 Hektar rund 3.000 Tiere. Der "
            "Mount Lavinia Beach gehört zu den meistbesuchten Stränden Sri Lankas und ist "
            "über die Galle Road sowie die Coastal Railway Line direkt mit Colombo verbunden."
        ),
        "facts": [
            "Rund 220.000 Einwohner, drittgrößte Stadt",
            "Doppelgemeinde seit 1969",
            "Britische Kolonialzeit 1815-1948",
            "Gouverneursresidenz seit 1806",
            "Mount Lavinia Hotel ab 1877",
            "Zoologischer Garten 1936 eröffnet",
            "Zoo 22 Hektar groß mit rund 3.000 Tieren",
            "Coastal Railway Line direkt nach Colombo",
        ],
    },
    "moratuwa-cities-v2": {
        "desc": (
            "Moratuwa liegt 18 Kilometer südlich von Colombo am Indischen Ozean zwischen "
            "der Bolgoda-Lagune und der Küste und zählt rund 168.000 Einwohner. Die Stadt "
            "ist seit Jahrhunderten Zentrum des sri lankischen Möbelbaus und der "
            "Holzverarbeitung; bereits in der niederländischen Kolonialzeit (1658-1796) "
            "wurden hier Schiffe gefertigt. Während der britischen Kolonialzeit (1815-1948) "
            "wurde 1972 die Universität von Moratuwa gegründet, die heute als führende "
            "technische Universität Sri Lankas gilt mit über 10.000 Studierenden. Die Stadt "
            "ist auch Heimat zahlreicher Musiker und Komponisten und gilt als kulturelle "
            "Heimat der sri lankischen Geige (Baila-Musik). Die katholische Bevölkerung ist "
            "wegen der portugiesischen Vergangenheit (1505-1658) bis heute überdurchschnittlich "
            "groß. Die Bolgoda-Lagune ist mit 374 Hektar die größte Süßwasserlagune des Landes."
        ),
        "facts": [
            "Rund 168.000 Einwohner, 18 Kilometer südlich Colombos",
            "Zentrum von Möbelbau und Holzhandwerk",
            "Niederländische Kolonialzeit 1658-1796",
            "Britische Kolonialzeit 1815-1948",
            "Universität von Moratuwa seit 1972",
            "Über 10.000 Studierende an der Technischen Universität",
            "Kulturelle Heimat der Baila-Musik",
            "Bolgoda-Lagune 374 Hektar groß",
        ],
    },
    "sri-jayawardenepura-kotte-cities-v2": {
        "desc": (
            "Sri Jayawardenepura Kotte ist seit 1982 die offizielle Hauptstadt Sri Lankas "
            "und liegt als östliche Vorstadt von Colombo im Großraum der Westprovinz. Die "
            "Stadt zählt rund 107.000 Einwohner. Kotte war bereits von 1412 bis 1597 "
            "Hauptstadt des singhalesischen Königreichs Kotte unter König Parakramabahu VI. "
            "(reg. 1411-1466), das damals fast die gesamte Insel beherrschte. 1597 zerstörten "
            "die Portugiesen die Stadt vollständig; sie blieb bis ins 20. Jahrhundert "
            "verfallen. Während der britischen Kolonialzeit (1815-1948) wurde der Ort "
            "wiederbesiedelt. Premierminister J. R. Jayewardene veranlasste 1977 die "
            "Verlegung der Hauptstadt; das Parlamentsgebäude im Diyawanna-See wurde 1982 von "
            "dem japanischen Architekten Kenzo Tange entworfen und am 29. April 1982 eröffnet."
        ),
        "facts": [
            "Offizielle Hauptstadt seit 1982",
            "Rund 107.000 Einwohner",
            "Hauptstadt des Königreichs Kotte 1412-1597",
            "Zerstörung 1597 durch die Portugiesen",
            "Britische Kolonialzeit 1815-1948",
            "Parlamentseröffnung 29. April 1982",
            "Architekt Kenzo Tange",
            "Parlament im Diyawanna-See gelegen",
        ],
    },
    "negombo-cities-v2": {
        "desc": (
            "Negombo liegt 37 Kilometer nördlich von Colombo an der Westküste am Negombo-See "
            "und zählt rund 142.000 Einwohner. Die Stadt nahe dem internationalen Flughafen "
            "Bandaranaike ist das Zentrum des sri lankischen Fischereisektors und seit der "
            "portugiesischen Kolonialzeit (1505-1658) eine überwiegend katholische Stadt; rund "
            "65 Prozent der Einwohner sind katholisch, weshalb Negombo als Klein-Rom "
            "bezeichnet wird. Die Niederländer eroberten die Stadt 1644 und bauten ab 1672 "
            "das heute noch erhaltene Fort sowie das 14 Kilometer lange Hamilton-Kanalsystem "
            "für den Zimt-, Kokosnuss- und Salzhandel. Während der britischen Kolonialzeit "
            "(1815-1948) blieb Negombo wichtiger Hafen. Beim Tsunami am 26. Dezember 2004 "
            "starben hier rund 350 Menschen. Die Anschläge auf die katholische Saint "
            "Sebastian-Kirche am Ostersonntag, 21. April 2019, forderten 113 Tote."
        ),
        "facts": [
            "Rund 142.000 Einwohner",
            "37 Kilometer nördlich Colombos",
            "Portugiesisch ab 1505, Niederländisch ab 1644",
            "Hamilton-Kanal 14 Kilometer lang ab 1672",
            "Britische Kolonialzeit 1815-1948",
            "Rund 65 Prozent Katholiken, Klein-Rom",
            "Tsunami 26. Dezember 2004 mit 350 Toten",
            "Osterterroranschlag 21. April 2019 mit 113 Opfern",
        ],
    },
    "batticaloa-cities-v2": {
        "desc": (
            "Batticaloa liegt an der Ostküste Sri Lankas am Indischen Ozean und an der "
            "großen Batticaloa-Lagune und zählt rund 95.000 Einwohner. Die Stadt ist mehrheitlich "
            "tamilisch und muslimisch geprägt. Die Portugiesen errichteten 1628 das heute "
            "erhaltene Fort, das 1638 von den Niederländern erobert und 1796 an die Briten "
            "übergeben wurde. Während der britischen Kolonialzeit (1815-1948) wurde Batticaloa "
            "Verwaltungssitz der Ostprovinz. Die Lagune ist berühmt für die singenden "
            "Fische, deren Geräusche während des Vollmonds zwischen April und September "
            "schon im 19. Jahrhundert wissenschaftlich beschrieben wurden. Beim Tsunami am 26. "
            "Dezember 2004 starben hier über 2.800 Menschen. Im Bürgerkrieg 1983-2009 wechselte "
            "die Stadt mehrfach zwischen LTTE- und Regierungskontrolle. Die Eastern University "
            "wurde 1981 gegründet."
        ),
        "facts": [
            "Rund 95.000 Einwohner",
            "Portugiesisches Fort von 1628",
            "Niederländisch ab 1638, britisch ab 1796",
            "Britische Kolonialzeit 1815-1948",
            "Verwaltungssitz der Ostprovinz",
            "Singende Fische in der Lagune",
            "Tsunami 26. Dezember 2004 mit 2.800 Opfern",
            "Bürgerkrieg 1983-2009",
        ],
    },
    "gampaha-cities-v2": {
        "desc": (
            "Gampaha liegt 28 Kilometer nordöstlich von Colombo am Attanagalu Oya und ist "
            "Hauptstadt des gleichnamigen Distrikts mit rund 65.000 Einwohnern. Die Region "
            "ist wirtschaftlich eine der dichtesten Sri Lankas und Heimat zahlreicher "
            "Industrien. Während der britischen Kolonialzeit (1815-1948) wurde 1876 in "
            "Henaratgoda Botanical Gardens (heute Royal Botanic Gardens, Henarathgoda) der "
            "erste Kautschukbaum (Hevea brasiliensis) Asiens gepflanzt; der Setzling, einer "
            "von 1.919 von Henry Wickham aus Brasilien geschmuggelten, wurde von Kew "
            "Gardens nach Ceylon gesandt und legte den Grundstein für die asiatische "
            "Kautschukindustrie. Die Eisenbahnstrecke von Colombo nach Kandy passiert seit "
            "1865 Gampaha. Der Distrikt wurde 1978 aus dem Distrikt Colombo herausgelöst. "
            "Heute ist Gampaha durch die Expressway E03 mit Colombo und Katunayake verbunden."
        ),
        "facts": [
            "Rund 65.000 Einwohner, 28 Kilometer nordöstlich Colombos",
            "Erster Kautschukbaum Asiens 1876",
            "Henarathgoda Botanical Gardens",
            "Britische Kolonialzeit 1815-1948",
            "Eisenbahn von Colombo nach Kandy seit 1865",
            "Distrikt seit 1978 eigenständig",
            "Expressway E03 als Anbindung",
            "Grundstein der asiatischen Kautschukindustrie",
        ],
    },
    "matara-cities-v2": {
        "desc": (
            "Matara liegt am Indischen Ozean an der Südküste Sri Lankas, 160 Kilometer "
            "südlich von Colombo, und zählt rund 76.000 Einwohner. Die Stadt war ab 1656 "
            "niederländischer Vorposten und beherbergt mit dem Star Fort von 1763 eines "
            "der bedeutendsten Beispiele niederländischer Militärarchitektur in Asien; das "
            "Sechseck-Fort wurde unter Gouverneur Lubbert Jan van Eck gebaut. Während der "
            "britischen Kolonialzeit (1815-1948) wurde Matara durch die Eisenbahn 1895 "
            "erreicht und entwickelte sich zum Zentrum von Zimt- und Kokosnussanbau. "
            "Beim Tsunami am 26. Dezember 2004 starben in der Region über 2.000 Menschen. "
            "Die heutige Southern Expressway E01 verbindet Matara seit 2014 in zwei Stunden "
            "mit Colombo. Der nahe Dondra Head ist mit dem 1890 erbauten 49 Meter hohen "
            "Leuchtturm der südlichste Punkt Sri Lankas."
        ),
        "facts": [
            "Rund 76.000 Einwohner an der Südküste",
            "Niederländisch ab 1656",
            "Star Fort von 1763 als Sechseck",
            "Britische Kolonialzeit 1815-1948",
            "Eisenbahnanschluss seit 1895",
            "Tsunami 26. Dezember 2004 mit über 2.000 Opfern",
            "Southern Expressway E01 seit 2014",
            "Dondra Head als südlichster Punkt mit Leuchtturm 1890",
        ],
    },
    "nuwara-eliya-cities-v2": {
        "desc": (
            "Nuwara Eliya liegt auf 1.868 Metern Höhe im zentralen Hochland Sri Lankas und "
            "zählt rund 28.000 Einwohner. Damit ist Nuwara Eliya, übersetzt Stadt auf "
            "der Hochebene, die höchstgelegene Stadt der Insel. Die Stadt wurde 1846 "
            "während der britischen Kolonialzeit (1815-1948) von Sir Samuel Baker als "
            "Rückzugsort und Bergstation für britische Beamte mit kühlerem Klima gegründet "
            "und mit Tudor- und georgianischen Villen, Golfclub (1889), Pferderennbahn "
            "und englischem Garten ausgestattet, weshalb sie bis heute Klein-England "
            "genannt wird. Der nahe Pidurutalagala-Berg ist mit 2.524 Metern der höchste "
            "Sri Lankas. Die umliegenden Pflanzungen produzieren ab 1867 unter Wegbereiter "
            "James Taylor den weltberühmten Ceylon-Hochlandtee. Der Lake Gregory wurde 1873 "
            "von Gouverneur Sir William Gregory künstlich angelegt."
        ),
        "facts": [
            "Höhe 1.868 Meter, höchste Stadt Sri Lankas",
            "Rund 28.000 Einwohner",
            "Gegründet 1846 von Sir Samuel Baker",
            "Britische Kolonialzeit 1815-1948",
            "Klein-England wegen Tudor-Villen",
            "Golfclub von 1889",
            "Ceylon-Hochlandtee ab 1867 durch James Taylor",
            "Lake Gregory 1873 angelegt",
        ],
    },
    "kalutara-cities-v2": {
        "desc": (
            "Kalutara liegt 42 Kilometer südlich von Colombo an der Mündung des Kalu Ganga "
            "in den Indischen Ozean und zählt rund 38.000 Einwohner. Die Stadt war im 11. "
            "Jahrhundert Teil des Reichs Kotte und wurde im 16. Jahrhundert portugiesisch, "
            "1655 niederländisch. Die Niederländer errichteten ein Fort und führten den "
            "Kokosnussanbau systematisch ein. Während der britischen Kolonialzeit (1815-1948) "
            "wurde der Ort durch die Eisenbahn 1877 erschlossen. Der weithin sichtbare "
            "Kalutara-Bodhiya-Stupa, eine 50 Meter hohe Dagoba mit innen begehbarem Hohlraum "
            "von Geoffrey Bawa, wurde 1980 fertiggestellt und beherbergt einen Setzling "
            "des Bodhi-Baums von Anuradhapura. Beim Tsunami am 26. Dezember 2004 starben "
            "in der Region rund 270 Menschen. Heute ist Kalutara berühmt für seinen "
            "Mangostan-Anbau und seine Korbflechtkunst."
        ),
        "facts": [
            "Rund 38.000 Einwohner, 42 Kilometer von Colombo",
            "Portugiesisch im 16. Jahrhundert, niederländisch ab 1655",
            "Britische Kolonialzeit 1815-1948",
            "Eisenbahnanschluss seit 1877",
            "Kalutara-Bodhiya 50 Meter hoch, 1980 fertig",
            "Architekt Geoffrey Bawa",
            "Tsunami 26. Dezember 2004 mit 270 Opfern",
            "Berühmt für Mangostan und Korbflechterei",
        ],
    },
    "puttalam-cities-v2": {
        "desc": (
            "Puttalam liegt an der Westküste Sri Lankas an der gleichnamigen Lagune und "
            "zählt rund 45.000 Einwohner. Die Stadt war im Mittelalter Hafen für die "
            "arabische und persische Seefahrt und ist seit Jahrhunderten muslimisch geprägt; "
            "die ersten muslimischen Siedler kamen ab dem 8. Jahrhundert. Der Zimthandel "
            "machte Puttalam wirtschaftlich bedeutend; Portugiesen (ab 1505), Niederländer "
            "(ab 1658) und Briten (ab 1796) kontrollierten den Hafen nacheinander. Während "
            "der britischen Kolonialzeit (1815-1948) wurde der Salzabbau in den Salinen von "
            "Puttalam systematisch ausgebaut; sie liefern bis heute den Großteil des "
            "sri lankischen Speisesalzes. Im Bürgerkrieg 1983-2009 nahm die Stadt rund "
            "75.000 muslimische Vertriebene aus dem Norden auf, die 1990 von der LTTE aus "
            "der Nordprovinz vertrieben worden waren. Der Wilpattu-Nationalpark beginnt "
            "30 Kilometer nördlich."
        ),
        "facts": [
            "Rund 45.000 Einwohner an der Westküste",
            "Muslimische Siedlung seit dem 8. Jahrhundert",
            "Portugiesisch ab 1505, niederländisch ab 1658",
            "Britische Kolonialzeit 1815-1948",
            "Salinen liefern den Großteil des Speisesalzes",
            "75.000 muslimische Vertriebene 1990 aufgenommen",
            "Bürgerkrieg 1983-2009",
            "Wilpattu-Nationalpark in 30 Kilometer Entfernung",
        ],
    },
    "polonnaruwa-cities-v2": {
        "desc": (
            "Polonnaruwa liegt in der Nord-Zentralprovinz Sri Lankas und zählt rund 14.000 "
            "Einwohner. Die Stadt war von 1070 bis 1284 die zweite Hauptstadt des "
            "singhalesischen Königreichs, nachdem die Cholas Anuradhapura 1017 zerstört "
            "hatten. Unter König Parakramabahu I. (reg. 1153-1186) erlebte sie ihre "
            "Blütezeit; er ließ das 25 Quadratkilometer große Bewässerungsbecken Parakrama "
            "Samudra anlegen, ein Meisterwerk antiker Wasserwirtschaft. Die Felsschnitzereien "
            "des Gal Vihara mit dem 14 Meter langen liegenden Buddha sowie die Ruinen "
            "des Königspalastes mit einst sieben Stockwerken zählen zu den Höhepunkten der "
            "antiken Architektur Sri Lankas. 1284 ging die Stadt nach südindischen "
            "Pandya-Invasionen verloren. Während der britischen Kolonialzeit (1815-1948) "
            "begannen ab 1885 die ersten Ausgrabungen. Seit 1982 zählt Polonnaruwa zum "
            "UNESCO-Weltkulturerbe."
        ),
        "facts": [
            "Hauptstadt 1070-1284",
            "Rund 14.000 Einwohner",
            "Parakramabahu I. regierte 1153-1186",
            "Parakrama Samudra 25 Quadratkilometer Wasserfläche",
            "Gal Vihara mit 14 Meter langem Buddha",
            "Britische Kolonialzeit 1815-1948 mit Ausgrabungen ab 1885",
            "UNESCO-Weltkulturerbe seit 1982",
            "Königspalast mit einst sieben Stockwerken",
        ],
    },
    "matale-cities-v2": {
        "desc": (
            "Matale liegt 26 Kilometer nördlich von Kandy auf 360 Metern Höhe in der "
            "Zentralprovinz und zählt rund 41.000 Einwohner. Die Region war Schauplatz der "
            "Matale-Rebellion 1848 gegen die Briten unter Anführer Puran Appu, einer der "
            "wichtigsten Aufstände der britischen Kolonialzeit (1815-1948); die Briten "
            "schlugen die Rebellion blutig nieder und exekutierten Puran Appu am 8. August "
            "1848 in Kandy. Während der britischen Kolonialzeit entwickelte sich Matale "
            "zum Zentrum des Gewürzanbaus, vor allem von Zimt, Kardamom, Pfeffer und "
            "Muskat. Der Aluvihara Rock Cave Temple, 30 Kilometer nördlich, beherbergt seit "
            "29 v. Chr. die ersten schriftlich fixierten Pali-Texte des Theravada-Buddhismus, "
            "die hier auf Palmblätter niedergeschrieben wurden. 1928 wurde der Sri Muthumariamman "
            "Hindu-Tempel im dravidischen Stil mit über 1.000 Skulpturen vollendet."
        ),
        "facts": [
            "Höhe 360 Meter, rund 41.000 Einwohner",
            "Matale-Rebellion 1848 unter Puran Appu",
            "Britische Kolonialzeit 1815-1948",
            "Zentrum für Zimt, Kardamom und Muskat",
            "Aluvihara mit ersten Pali-Texten ab 29 v. Chr.",
            "Sri Muthumariamman Tempel von 1928",
            "Tempel mit über 1.000 Skulpturen",
            "26 Kilometer nördlich von Kandy",
        ],
    },
    "vavuniya-cities-v2": {
        "desc": (
            "Vavuniya liegt im Norden Sri Lankas in der Nordprovinz und zählt rund 39.000 "
            "Einwohner. Die Stadt war jahrzehntelang das Tor zum Norden und die letzte "
            "Stadt unter Regierungskontrolle vor dem LTTE-Gebiet während des Bürgerkriegs "
            "1983-2009. An der Hauptstraße A9 zwischen Kandy und Jaffna gelegen, war Vavuniya "
            "Schauplatz wichtiger militärischer Operationen, darunter die "
            "Operation Riviresa 1995 und die Endphase des Krieges 2009. Während der britischen "
            "Kolonialzeit (1815-1948) wurde der Ort durch die Eisenbahn 1903 erreicht; die "
            "Strecke nach Jaffna wurde 1990 unterbrochen und erst 2014 wieder vollständig "
            "in Betrieb genommen. Die Region ist mehrheitlich tamilisch geprägt mit "
            "muslimischer und singhalesischer Minderheit. Die Manik-Farm-Camps in der Nähe "
            "beherbergten 2009 nach Kriegsende rund 290.000 Vertriebene."
        ),
        "facts": [
            "Rund 39.000 Einwohner",
            "Tor zum Norden während des Bürgerkriegs 1983-2009",
            "An der A9 zwischen Kandy und Jaffna",
            "Britische Kolonialzeit 1815-1948",
            "Eisenbahnanschluss seit 1903",
            "Strecke nach Jaffna 1990 unterbrochen",
            "Wiederaufbau der Bahnstrecke 2014",
            "Manik-Farm-Camp mit 290.000 Vertriebenen 2009",
        ],
    },
    "mannar-cities-v2": {
        "desc": (
            "Mannar liegt auf der gleichnamigen Insel im Nordwesten Sri Lankas, verbunden "
            "durch die 3 Kilometer lange Mannar-Brücke (1914) mit dem Festland, und zählt "
            "rund 21.000 Einwohner. Die Insel ist über die natürliche Untiefe Adam's "
            "Bridge mit Indien verbunden. Die Portugiesen errichteten 1560 ein Fort, das "
            "1658 von den Niederländern übernommen und ausgebaut wurde. Während der "
            "britischen Kolonialzeit (1815-1948) lief der Pilgerverkehr zur indischen "
            "Heiligkeitsstätte Rameswaram über Mannar. Der Affenbrotbaum (Baobab) der "
            "portugiesischen Soldaten gepflanzt im 16. Jahrhundert hat heute einen "
            "Stammumfang von 19,5 Metern und ist der größte in Sri Lanka. Die Region "
            "war im Bürgerkrieg 1983-2009 schwer betroffen; die Bahnstrecke wurde 1990 "
            "unterbrochen und erst 2010 wiedereröffnet. Die Salinen von Mannar liefern "
            "neben Puttalam den Großteil des Speisesalzes."
        ),
        "facts": [
            "Rund 21.000 Einwohner auf der Mannar-Insel",
            "Brücke von 1914 zum Festland",
            "Portugiesisches Fort von 1560",
            "Niederländisch ab 1658",
            "Britische Kolonialzeit 1815-1948",
            "Affenbrotbaum mit 19,5 Meter Stammumfang",
            "Bürgerkrieg 1983-2009 traf Region schwer",
            "Bahnstrecke 1990 unterbrochen, 2010 wiedereröffnet",
        ],
    },
    "chilaw-cities-v2": {
        "desc": (
            "Chilaw liegt 80 Kilometer nördlich von Colombo an der Westküste am Indischen "
            "Ozean und zählt rund 25.000 Einwohner. Die Stadt ist seit der portugiesischen "
            "Kolonialzeit (1505-1658) überwiegend katholisch geprägt; rund 80 Prozent der "
            "Bevölkerung sind Katholiken. Die Niederländer (1658-1796) und später die "
            "britische Kolonialzeit (1815-1948) bauten die Hafeninfrastruktur und den "
            "Kokosnusshandel weiter aus. Chilaw liegt im Herzen des sri lankischen "
            "Kokosnussdreiecks. Der hinduistische Munneswaram-Tempel, 5 Kilometer "
            "östlich der Stadt, gilt als einer der fünf heiligsten Shiva-Tempel Sri "
            "Lankas und wird in den Ramayana erwähnt. Die Stadt ist Endpunkt der 1879 "
            "erbauten Puttalam Line der sri lankischen Eisenbahn aus Colombo. Beim Tsunami "
            "am 26. Dezember 2004 starben in der Region rund 100 Menschen. Die "
            "Fischereiindustrie ist bis heute Hauptarbeitgeber."
        ),
        "facts": [
            "Rund 25.000 Einwohner, 80 Kilometer nördlich Colombos",
            "Rund 80 Prozent Katholiken",
            "Portugiesisch ab 1505, niederländisch ab 1658",
            "Britische Kolonialzeit 1815-1948",
            "Im Kokosnussdreieck gelegen",
            "Munneswaram-Tempel als heiliger Shiva-Tempel",
            "Eisenbahnstrecke aus Colombo seit 1879",
            "Tsunami 26. Dezember 2004 mit rund 100 Opfern",
        ],
    },
    "hambantota-cities-v2": {
        "desc": (
            "Hambantota liegt an der Südostküste Sri Lankas am Indischen Ozean und zählt "
            "rund 11.000 Einwohner. Die Stadt war historisch ein bescheidener Fischerort und "
            "wurde besonders von der portugiesischen (ab 1505), niederländischen (ab 1658) "
            "und britischen (1815-1948) Kolonialzeit geprägt; der Name leitet sich vom "
            "malayischen sampans der javanischen Händler ab. Beim Tsunami am 26. Dezember "
            "2004 starben in der Region rund 4.500 Menschen, ein Drittel der damaligen "
            "Stadtbevölkerung. Nach dem Bürgerkrieg 1983-2009 ließ Präsident Mahinda "
            "Rajapaksa, in der Region geboren, hier Großprojekte realisieren: den "
            "Hambantota International Port (2010, China-Finanzierung 1,4 Mrd. USD, "
            "2017 für 99 Jahre an China verpachtet), den Mattala Rajapaksa International "
            "Airport (2013) und das Magampura-Stadion. Die Region produziert 70 Prozent "
            "des sri lankischen Speisesalzes in den Lewaya-Salinen."
        ),
        "facts": [
            "Rund 11.000 Einwohner an der Südostküste",
            "Portugiesisch ab 1505, niederländisch ab 1658",
            "Britische Kolonialzeit 1815-1948",
            "Tsunami 26. Dezember 2004 mit 4.500 Opfern",
            "Bürgerkrieg 1983-2009",
            "Hafen 2010 für 1,4 Mrd. USD eröffnet",
            "Hafen 2017 für 99 Jahre an China verpachtet",
            "70 Prozent des Speisesalzes aus Lewaya-Salinen",
        ],
    },
    "ampara-cities-v2": {
        "desc": (
            "Ampara liegt im Südosten Sri Lankas in der Ostprovinz und zählt rund "
            "37.000 Einwohner. Die Stadt wurde 1949 als Bauerndorf für das Gal Oya-Projekt "
            "gegründet, dem ersten Großbewässerungsprojekt des unabhängigen Sri Lanka. Der "
            "1950 fertiggestellte Senanayake Samudra-Stausee ist mit 77 Quadratkilometern "
            "der größte des Landes und benannt nach dem ersten Premierminister D. S. "
            "Senanayake; er ermöglichte die Besiedlung trockener Regionen mit singhalesischen "
            "Bauern. Davor stand die Region am Ende der britischen Kolonialzeit (1815-1948) "
            "weitgehend brach. Im Bürgerkrieg 1983-2009 war die Region wegen ihrer "
            "ethnischen Mischung (Singhalesen, Tamilen, Muslime) Schauplatz mehrerer "
            "Massaker, darunter Kalmunai 1990. Beim Tsunami am 26. Dezember 2004 starben "
            "im Distrikt Ampara mit rund 10.000 Toten die meisten Opfer Sri Lankas. Der "
            "Gal Oya-Nationalpark ist Heimat schwimmender Elefanten."
        ),
        "facts": [
            "Rund 37.000 Einwohner",
            "Gegründet 1949 für Gal Oya-Projekt",
            "Senanayake Samudra größter Stausee mit 77 km²",
            "Britische Kolonialzeit 1815-1948",
            "Bürgerkrieg 1983-2009",
            "Tsunami 26. Dezember 2004 mit rund 10.000 Toten im Distrikt",
            "Gal Oya-Nationalpark mit schwimmenden Elefanten",
            "Erstes Großbewässerungsprojekt des unabhängigen Sri Lanka",
        ],
    },
    "kilinochchi-cities-v2": {
        "desc": (
            "Kilinochchi liegt in der Nordprovinz Sri Lankas zwischen Vavuniya und Jaffna "
            "an der A9 und zählt rund 16.000 Einwohner. Die Stadt war von 1990 bis Januar "
            "2009 inoffizielle Hauptstadt des von der LTTE kontrollierten Tamil Eelam und "
            "Sitz der politischen Führung um Velupillai Prabhakaran. Während des Bürgerkriegs "
            "1983-2009 wurde Kilinochchi am 2. Januar 2009 von der sri lankischen Armee "
            "in der Schlacht von Kilinochchi nach 234 Tagen Belagerung zurückerobert; "
            "der Kampf gilt als militärischer Wendepunkt. Vier Monate später, am 18. Mai "
            "2009, endete der Krieg mit dem Tod Prabhakarans. Während der britischen "
            "Kolonialzeit (1815-1948) war der Ort eine kleine Bahnstation der 1905 erbauten "
            "Northern Line. Der wiedererrichtete Kilinochchi-Wassertank, der 2008 von der "
            "abziehenden LTTE gesprengt wurde, dient heute als Kriegsdenkmal."
        ),
        "facts": [
            "Rund 16.000 Einwohner an der A9",
            "LTTE-Hauptstadt 1990-2009",
            "Sitz von Velupillai Prabhakaran",
            "Bürgerkrieg 1983-2009",
            "Schlacht von Kilinochchi am 2. Januar 2009",
            "Kriegsende am 18. Mai 2009",
            "Britische Kolonialzeit 1815-1948",
            "Northern Line der Eisenbahn von 1905",
        ],
    },
    "mullaitivu-cities-v2": {
        "desc": (
            "Mullaitivu liegt an der Nordostküste Sri Lankas in der Nordprovinz und zählt "
            "rund 6.000 Einwohner. Die Hafenstadt war im Bürgerkrieg 1983-2009 strategisches "
            "Zentrum der LTTE-Marine, der Sea Tigers, und Heimat ihrer geheimen U-Boot- "
            "und Schiffswerften. Während der britischen Kolonialzeit (1815-1948) war "
            "Mullaitivu ein bescheidener Fischerei- und Salzhandelsort. In den letzten "
            "Wochen des Bürgerkriegs zwischen Januar und Mai 2009 wurden tausende "
            "Zivilisten in der schmalen Küstenzone bei Mullaitivu eingekesselt; UN-Schätzungen "
            "gehen von 40.000 zivilen Toten aus. Beim Tsunami am 26. Dezember 2004 wurde "
            "die Stadt vollständig zerstört; rund 3.000 Menschen, fast die Hälfte der "
            "damaligen Bevölkerung, kamen ums Leben. Der Wiederaufbau begann nach 2009 nur "
            "schleppend. Die Region ist überwiegend tamilisch geprägt und vom Krieg bis "
            "heute traumatisiert."
        ),
        "facts": [
            "Rund 6.000 Einwohner an der Nordostküste",
            "LTTE-Marinezentrum der Sea Tigers",
            "Britische Kolonialzeit 1815-1948",
            "Bürgerkrieg 1983-2009",
            "UN-Schätzung 40.000 zivile Tote 2009",
            "Tsunami 26. Dezember 2004 mit 3.000 Opfern",
            "Stadt 2004 vollständig zerstört",
            "Wiederaufbau nach 2009 nur schleppend",
        ],
    },
    "kegalle-cities-v2": {
        "desc": (
            "Kegalle liegt 78 Kilometer östlich von Colombo auf 124 Metern Höhe in der "
            "Sabaragamuwa-Provinz und zählt rund 17.000 Einwohner. Die Stadt liegt an der "
            "historischen Hauptstraße zwischen Colombo und Kandy. Während der britischen "
            "Kolonialzeit (1815-1948) wurde sie 1845 zum Verwaltungssitz des Distrikts "
            "Kegalle erhoben. Die Region ist Zentrum des sri lankischen Kautschuk- und "
            "Teeanbaus; auf den Hängen liegen zahlreiche Plantagen aus der Kolonialzeit. "
            "Der nahe Felsen Utuwankanda war 1864-1870 Versteck des Banditen und "
            "Volkshelden Saradiel, der als sri lankischer Robin Hood gilt und am 7. Mai "
            "1864 bei Mawanella von der britischen Polizei erschossen wurde. Der "
            "Pinnawala-Elefantenwaisenhaus, 17 Kilometer nördlich, wurde 1975 gegründet "
            "und beherbergt heute rund 90 Elefanten. Bible Rock (Bathalegala) und Beli "
            "Lena, eine 2.000 Jahre alte Höhle, sind weitere Sehenswürdigkeiten."
        ),
        "facts": [
            "Rund 17.000 Einwohner, 124 Meter Höhe",
            "78 Kilometer östlich Colombos",
            "Britische Kolonialzeit 1815-1948",
            "Verwaltungssitz seit 1845",
            "Saradiel-Versteck am Utuwankanda 1864-1870",
            "Saradiel erschossen am 7. Mai 1864",
            "Pinnawala-Elefantenwaisenhaus seit 1975",
            "Rund 90 Elefanten in Pinnawala",
        ],
    },
    "moneragala-cities-v2": {
        "desc": (
            "Moneragala liegt im Südosten Sri Lankas in der Uva-Provinz auf 130 Metern "
            "Höhe und zählt rund 5.000 Einwohner; der gleichnamige Distrikt ist mit "
            "5.639 Quadratkilometern der zweitgrößte des Landes. Der Name (singhalesisch "
            "Pfauenfelsen) bezieht sich auf den 600 Meter hohen Pfauenfelsen am "
            "Stadtrand. Die Region war während der britischen Kolonialzeit (1815-1948) "
            "Schauplatz der Uva-Wellassa-Rebellion 1817-1818; die anschließende britische "
            "Vergeltung machte das Gebiet jahrzehntelang zur entvölkerten Wildnis. Erst "
            "ab 1950 wurden hier im Rahmen des Mahaweli-Bewässerungsprogramms wieder "
            "Bauern angesiedelt. Der Yala-Nationalpark erstreckt sich bis hierher und "
            "gilt mit der höchsten Leopardendichte der Welt als ein Topziel des "
            "Ökotourismus. Heute ist Zuckerrohranbau der wichtigste Wirtschaftszweig; "
            "die Pelwatte- und Sevanagala-Zuckerfabriken liefern den Großteil des "
            "sri lankischen Zuckers."
        ),
        "facts": [
            "Rund 5.000 Einwohner, 130 Meter Höhe",
            "Distrikt 5.639 Quadratkilometer als zweitgrößter",
            "Pfauenfelsen 600 Meter hoch",
            "Britische Kolonialzeit 1815-1948",
            "Uva-Wellassa-Rebellion 1817-1818",
            "Wiederbesiedlung ab 1950 durch Mahaweli-Programm",
            "Yala-Nationalpark mit höchster Leopardendichte",
            "Pelwatte- und Sevanagala-Zuckerfabriken",
        ],
    },
}


def to_str_array_multiline(items: list[str], indent: str = "        ") -> str:
    parts = []
    for it in items:
        esc = it.replace("\\", "\\\\").replace('"', '\\"')
        parts.append(f'{indent}"{esc}"')
    return "[\n" + ",\n".join(parts) + "\n" + indent[:-2] + "]"


def main():
    src = FILE.read_text(encoding="utf-8")

    # We will iterate POIs in REVERSE order so insertions don't invalidate
    # earlier match offsets.
    id_pattern = re.compile(r'^(\s*)id:\s*"([^"]+)",', re.MULTILINE)
    matches = list(id_pattern.finditer(src))

    patched = 0
    skipped_filled = []
    skipped_no_data = []
    skipped_other = []

    for i in range(len(matches) - 1, -1, -1):
        m = matches[i]
        poi_id = m.group(2)
        block_start = m.start()
        block_end = matches[i + 1].start() if i + 1 < len(matches) else len(src)
        block = src[block_start:block_end]

        if 'descriptionAdvanced' in block:
            skipped_filled.append(poi_id)
            continue

        if poi_id not in DATA:
            skipped_no_data.append(poi_id)
            continue

        # Find facts: { ... } closing brace within block.
        # Pattern: facts followed by balanced braces.
        facts_idx = block.find('facts: {')
        if facts_idx < 0:
            skipped_other.append(f"{poi_id} (no facts block)")
            continue

        # Find balanced closing brace of facts block.
        # Start scanning from the '{' after 'facts:'.
        brace_pos = block.index('{', facts_idx)
        depth = 0
        j = brace_pos
        while j < len(block):
            ch = block[j]
            if ch == '{':
                depth += 1
            elif ch == '}':
                depth -= 1
                if depth == 0:
                    break
            j += 1
        if depth != 0:
            skipped_other.append(f"{poi_id} (unbalanced facts)")
            continue
        facts_close_in_block = j  # index of closing '}' of facts

        # Build advanced blocks. Use 4-space base indent (matches file style).
        data = DATA[poi_id]
        desc_de = data["desc"].replace("\\", "\\\\").replace('"', '\\"')
        facts_arr_str = to_str_array_multiline(data["facts"], indent="        ")

        insertion = (
            ",\n"
            "    descriptionAdvanced: {\n"
            f'      de: "{desc_de}"\n'
            "    },\n"
            "    factsAdvanced: {\n"
            f"      de: {facts_arr_str}\n"
            "    }"
        )

        # Insert AFTER the closing '}' of the facts block (which is followed
        # in the source by '\n  }' that closes the POI). We insert a comma
        # plus the new fields right after the facts close-brace.
        abs_insert = block_start + facts_close_in_block + 1  # after '}'
        src = src[:abs_insert] + insertion + src[abs_insert:]
        patched += 1

    FILE.write_text(src, encoding="utf-8")
    print(f"Patched: {patched}")
    print(f"Skipped (already filled): {len(skipped_filled)}")
    for s in skipped_filled:
        print("  -", s)
    print(f"Skipped (no DATA): {len(skipped_no_data)}")
    for s in skipped_no_data:
        print("  -", s)
    print(f"Skipped (other): {len(skipped_other)}")
    for s in skipped_other:
        print("  -", s)


if __name__ == "__main__":
    main()
