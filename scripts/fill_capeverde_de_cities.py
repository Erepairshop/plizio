# -*- coding: utf-8 -*-
"""Fill descriptionAdvanced.de + factsAdvanced.de for first 30 POIs in poiExtraCapeVerdeCitiesV2.ts"""
import re
from pathlib import Path

FILE = Path(__file__).resolve().parent.parent / "lib" / "visualLab" / "data" / "poiExtraCapeVerdeCitiesV2.ts"

DATA = {
    "praia-cities-v2": {
        "desc": "Praia liegt an der Südküste der Insel Santiago und ist seit 1858 die Hauptstadt der Republik Kap Verde. Die Stadt erstreckt sich über mehrere markante Plateaus, von denen das historische Plateau (Platô) das koloniale Zentrum bildet. Mit rund 159.000 Einwohnern (2021) ist Praia die größte Stadt des Inselstaates und beherbergt etwa ein Viertel der Bevölkerung Kap Verdes. Hier sitzen das Parlament, der Präsidentenpalast sowie die Universität von Kap Verde. Der Hafen von Praia und der internationale Flughafen Nelson Mandela machen die Stadt zur wichtigsten Drehscheibe des Landes. Die Architektur verbindet portugiesische Kolonialbauten mit moderner afrikanischer Stadtentwicklung.",
        "facts": [
            "Hauptstadt seit 1858, übernahm die Rolle von Cidade Velha",
            "Bevölkerung etwa 159.000 (Zensus 2021)",
            "Liegt auf rund 35 Metern über dem Meeresspiegel auf dem Plateau",
            "Internationaler Flughafen Nelson Mandela seit 2005 in Betrieb",
            "Sitz der Universidade de Cabo Verde, gegründet 2006",
            "Hafenanlage Porto da Praia wickelt Container und Passagiere ab",
            "Durchschnittstemperatur ganzjährig zwischen 22 und 28 Grad Celsius",
        ],
    },
    "assomada-cities-v2": {
        "desc": "Assomada liegt auf rund 500 Metern Höhe im Bergland im Inneren der Insel Santiago und bildet das Zentrum der Gemeinde Santa Catarina. Mit etwa 13.000 Einwohnern ist Assomada die zweitgrößte Stadt Santiagos. Der berühmte Mittwochs- und Samstagsmarkt (Sucupira de Assomada) zieht Händler aus der gesamten Insel an und gilt als einer der lebhaftesten Märkte des Landes. Die Stadt erhielt 2005 offiziell den Status einer Cidade. Im historischen Tabanka-Museum wird die afrikanisch geprägte Folklorekultur gepflegt, die hier besonders lebendig ist. Assomada ist außerdem ein wichtiges Bildungs- und Verwaltungszentrum für das ländliche Kerngebiet Santiagos.",
        "facts": [
            "Liegt auf etwa 500 Metern Höhe im Hochland von Santiago",
            "Erhielt 2005 offiziell den Stadtstatus (Cidade)",
            "Bevölkerung rund 13.000, zweitgrößte Stadt der Insel",
            "Wochenmarkt jeden Mittwoch und Samstag, einer der größten Märkte des Landes",
            "Verwaltungssitz der Gemeinde Santa Catarina",
            "Tabanka-Museum dokumentiert die lokale Volkskultur",
            "Ausgangspunkt zum nahegelegenen Naturpark Serra Malagueta",
        ],
    },
    "pedra-badejo-cities-v2": {
        "desc": "Pedra Badejo liegt an der Ostküste der Insel Santiago, etwa 30 Kilometer nördlich von Praia, und ist seit 2010 der Verwaltungssitz der Gemeinde Santa Cruz. Mit rund 9.000 Einwohnern bildet die Stadt das wirtschaftliche Zentrum der fruchtbaren Ribeira Seca. Die Bucht von Pedra Badejo ist von schwarzen Lavasandstränden gesäumt, an denen täglich farbenfrohe Fischerboote anlanden. Die umliegenden Täler werden intensiv für den Anbau von Bananen, Zuckerrohr und Mais genutzt, was Pedra Badejo zu einem der wichtigsten Agrarmärkte Santiagos macht. In der Nähe befindet sich der Stausee Poilão, der größte Damm Kap Verdes, eingeweiht 2006.",
        "facts": [
            "Sitz der Gemeinde Santa Cruz seit der Verwaltungsreform",
            "Etwa 30 Kilometer nördlich von Praia gelegen",
            "Bevölkerung rund 9.000 Einwohner",
            "Schwarze Lavasandstrände prägen die Küste",
            "In der Nähe liegt der 2006 eröffnete Poilão-Staudamm",
            "Wichtiger Umschlagplatz für Bananen und Zuckerrohr",
            "Anbau von Mais, Bohnen und Maniok in der Ribeira Seca",
        ],
    },
    "tarrafal-cities-v2": {
        "desc": "Tarrafal liegt an der Nordwestspitze der Insel Santiago und ist berühmt für seine geschwungene Bucht mit feinem hellem Sand, der auf Santiago eine Seltenheit darstellt. Die Stadt zählt rund 7.000 Einwohner und ist Hauptort der gleichnamigen Gemeinde. Von 1936 bis 1974 betrieben die portugiesischen Behörden hier das Konzentrationslager Campo da Morte Lenta, in dem politische Gefangene aus Portugal, Angola und Guinea-Bissau interniert wurden. Heute beherbergt das Lager ein Mahnmal und Museum. Tarrafal ist außerdem für seine Kokospalmen, das ruhige türkisfarbene Wasser und den Tauchstandort am ehemaligen Walfänger-Steg bekannt. Die Region produziert Bananen, Mangos und Papayas.",
        "facts": [
            "Bevölkerung etwa 7.000 Einwohner",
            "Konzentrationslager 1936 bis 1974 in Betrieb, heute Gedenkstätte",
            "Helle Sandstrand-Bucht, Seltenheit auf der vulkanischen Insel",
            "Etwa 70 Kilometer nördlich von Praia gelegen",
            "Beliebtes Tauchgebiet mit Sichtweiten bis 25 Meter",
            "Anbaugebiet für Bananen, Mangos und Papayas",
            "Berg Monte Graciosa (642 m) prägt die Kulisse der Bucht",
        ],
    },
    "cidade-velha-cities-v2": {
        "desc": "Cidade Velha, ursprünglich Ribeira Grande de Santiago, wurde 1462 gegründet und ist die älteste europäische Siedlung in den Tropen. Bis 1770 diente die Stadt als Hauptstadt Kap Verdes und war ein zentraler Drehkreuz des transatlantischen Sklavenhandels zwischen Afrika und Amerika. 2009 wurde der historische Kern in das UNESCO-Weltkulturerbe aufgenommen. Die Festung Real de São Filipe von 1593 thront auf einem Hügel über der Stadt und wurde nach Plünderungen, etwa durch Francis Drake im Jahr 1585, errichtet. Die Pelourinho-Säule auf dem Hauptplatz erinnert an die dunkle Sklavenhandel-Vergangenheit. Heute leben rund 1.500 Menschen in der ruhigen Küstenstadt.",
        "facts": [
            "Gegründet 1462, älteste europäische Stadt in den Tropen",
            "Hauptstadt Kap Verdes bis 1770",
            "UNESCO-Weltkulturerbe seit 2009",
            "Forte Real de São Filipe 1593 fertiggestellt",
            "Plünderung durch Francis Drake im Jahr 1585",
            "Pelourinho aus Marmor erinnert an den Sklavenhandel",
            "Bevölkerung heute etwa 1.500 Einwohner",
        ],
    },
    "calheta-de-sao-miguel-cities-v2": {
        "desc": "Calheta de São Miguel liegt an der Nordostküste der Insel Santiago und ist seit 1997 der Hauptort der Gemeinde São Miguel, die aus der Gemeinde Tarrafal ausgegliedert wurde. Die Stadt hat etwa 5.500 Einwohner und lebt vom Fischfang sowie vom Anbau von Mais, Bohnen und Zuckerrohr. Eine Besonderheit ist die kleine Bucht mit schwarzem Sand, von wo aus Fischerboote in den Atlantik auslaufen. Die Region ist auch als Geburtsort des international bekannten kapverdischen Sängers Codé di Dona bekannt, der hier den Funaná-Musikstil prägte. Eine traditionelle Stierhornkerbe (Tabanka) wird jährlich im Juni während der Festa de São João abgehalten.",
        "facts": [
            "Sitz der 1997 gegründeten Gemeinde São Miguel",
            "Bevölkerung rund 5.500 Einwohner",
            "Geburtsort des Funaná-Pioniers Codé di Dona",
            "Schwarzer Lavasandstrand mit aktiver Fischerei",
            "Anbau von Mais, Bohnen, Zuckerrohr und Maniok",
            "Festa de São João als wichtiges Tabanka-Fest im Juni",
            "Etwa 60 Kilometer nördlich der Hauptstadt Praia",
        ],
    },
    "picos-cities-v2": {
        "desc": "Picos, offiziell Achada Igreja, liegt auf rund 600 Metern Höhe im zentralen Bergland Santiagos und ist seit 2005 Hauptort der Gemeinde São Salvador do Mundo, die aus der Gemeinde Santa Catarina ausgegliedert wurde. Die Gemeinde wurde nach der historischen Pfarrei São Salvador do Mundo benannt, die 1671 gegründet wurde und damit zu den ältesten Pfarreien Kap Verdes gehört. Das Gebiet ist durch markante vulkanische Kegel geprägt, von denen sich der Name Picos ableitet. Die etwa 1.800 Einwohner der Stadt leben überwiegend von der traditionellen Berglandwirtschaft, insbesondere vom Mais- und Bohnenanbau auf Terrassenfeldern. Die Pfarrkirche Igreja de São Salvador do Mundo ist ein bedeutendes religiöses Wahrzeichen.",
        "facts": [
            "Hauptort der 2005 gegründeten Gemeinde São Salvador do Mundo",
            "Liegt auf etwa 600 Metern Höhe",
            "Pfarrei São Salvador do Mundo seit 1671 belegt",
            "Bevölkerung etwa 1.800 Einwohner",
            "Vulkanische Kegelberge (Picos) prägen die Landschaft",
            "Traditioneller Maisanbau auf Terrassenfeldern",
            "Etwa 30 Kilometer nördlich von Praia",
        ],
    },
    "joao-teves-cities-v2": {
        "desc": "João Teves liegt auf etwa 350 Metern Höhe im fruchtbaren Tal Ribeira dos Órgãos und ist seit 2005 Hauptort der Gemeinde São Lourenço dos Órgãos. Die Gemeinde wurde durch Verwaltungsreform aus den Gemeinden Santa Catarina und São Domingos ausgegliedert und hat heute etwa 7.000 Einwohner insgesamt, von denen rund 1.000 in João Teves selbst wohnen. Die Region beherbergt seit 1985 das Nationale Forschungszentrum für Landwirtschaft (INIDA) und gilt als grünes Herz Santiagos. Die markanten Felsspitzen der Serra dos Órgãos, die der Region ihren Namen gaben, ragen bis zu 1.087 Meter hoch auf. Hauptanbauprodukte sind Mango, Papaya, Kaffee und Gemüse.",
        "facts": [
            "Hauptort der 2005 gegründeten Gemeinde São Lourenço dos Órgãos",
            "Liegt auf rund 350 Metern Höhe in der Ribeira dos Órgãos",
            "INIDA Forschungszentrum für Landwirtschaft seit 1985 hier ansässig",
            "Serra dos Órgãos mit Gipfeln bis 1.087 Metern",
            "Bevölkerung der Stadt etwa 1.000, der Gemeinde rund 7.000",
            "Mango-, Papaya- und Kaffeeanbau prägen die Wirtschaft",
            "Eine der grünsten Regionen der Insel Santiago",
        ],
    },
    "sao-domingos-cities-v2": {
        "desc": "São Domingos liegt etwa 20 Kilometer nördlich von Praia auf rund 400 Metern Höhe und ist Hauptort der gleichnamigen Gemeinde. Die Gemeinde wurde 1993 gegründet und hat heute rund 13.500 Einwohner. Die Stadt selbst beherbergt etwa 2.500 Menschen und gilt als Zentrum traditioneller kapverdischer Handwerkskunst, insbesondere für Korbflechterei (panaria) und Töpferwaren. In Rui Vaz, einem Ortsteil der Gemeinde, befindet sich die historische Sommerresidenz portugiesischer Gouverneure aus dem 19. Jahrhundert, die heute als kleines Hotel dient. Die fruchtbaren Täler der Region, gespeist durch zuverlässige Quellen, ermöglichen den Anbau von Bananen, Zuckerrohr und Gemüse für den Hauptstadtmarkt.",
        "facts": [
            "Gemeinde 1993 aus Praia und Santa Catarina ausgegliedert",
            "Bevölkerung der Gemeinde etwa 13.500",
            "Stadt selbst zählt rund 2.500 Einwohner",
            "Liegt auf etwa 400 Metern Höhe",
            "Bekannt für Panaria-Korbflechterei und Töpferei",
            "Historische Gouverneurs-Sommerresidenz in Rui Vaz",
            "Zentrum für Bananen- und Zuckerrohranbau auf Santiago",
        ],
    },
    "ribeira-da-barca-cities-v2": {
        "desc": "Ribeira da Barca ist ein Fischerdorf an der Westküste der Insel Santiago, das zur Gemeinde Santa Catarina gehört. Mit etwa 1.500 Einwohnern bildet der Ort den wichtigsten Anlandepunkt für die Fischer der Westküste. Vom Hafen aus starten Bootsausflüge zu den abgelegenen Stränden Aguas Belas, einer halbmondförmigen Bucht aus schwarzem Vulkansand, die nur per Boot erreichbar ist. Die zerklüfteten Steilküsten ringsum erreichen Höhen von über 200 Metern und gelten als geologisch beeindruckend. Eine asphaltierte Straße verbindet seit 2008 das Dorf mit Assomada im Hochland. Hauptfangarten sind Thunfisch, Wahoo und Marlin, die in den tiefen Gewässern vor der Küste gefangen werden.",
        "facts": [
            "Fischerdorf an der Westküste der Insel Santiago",
            "Bevölkerung rund 1.500 Einwohner",
            "Ausgangspunkt für Bootsfahrten zur Bucht Aguas Belas",
            "Steilküsten erreichen über 200 Meter Höhe",
            "Asphaltierte Verbindungsstraße nach Assomada seit 2008",
            "Wichtige Fangarten Thunfisch, Wahoo und Marlin",
            "Gehört zur Gemeinde Santa Catarina",
        ],
    },
    "chao-bom-cities-v2": {
        "desc": "Chão Bom liegt etwa drei Kilometer südlich von Tarrafal und gehört zur gleichnamigen Gemeinde im Norden der Insel Santiago. Mit rund 4.500 Einwohnern ist Chão Bom inzwischen größer als der Hauptort Tarrafal selbst. Hier befand sich von 1936 bis 1974 das berüchtigte portugiesische Konzentrationslager Campo do Tarrafal, in dem politische Gefangene aus Portugal, später auch aus Angola und Guinea-Bissau, unter brutalen Bedingungen interniert wurden. Mindestens 36 Häftlinge starben hier. Heute ist das ehemalige Lager Museum und nationale Gedenkstätte. Chão Bom hat sich seit den 1990er Jahren stark entwickelt, bedingt durch landwirtschaftliche Projekte und Gewerbeansiedlungen entlang der Küstenstraße.",
        "facts": [
            "Etwa drei Kilometer südlich von Tarrafal gelegen",
            "Bevölkerung rund 4.500 Einwohner",
            "Konzentrationslager Campo do Tarrafal 1936 bis 1974 in Betrieb",
            "Mindestens 36 Häftlinge im Lager gestorben",
            "Heute Museum und nationale Gedenkstätte",
            "Schnelles Wachstum seit den 1990er Jahren",
            "Landwirtschaftliche Projekte prägen die Region",
        ],
    },
    "achada-monte-cities-v2": {
        "desc": "Achada Monte liegt im nordöstlichen Hinterland der Insel Santiago in der Gemeinde São Miguel auf etwa 450 Metern Höhe. Die ländliche Siedlung mit rund 800 Einwohnern verteilt sich über mehrere kleine Weiler entlang der Hauptstraße EN1, die Praia mit Tarrafal verbindet. Die Region wird von markanten Bergrücken durchzogen, die Ausblicke bis zur Atlantikküste eröffnen. Traditionelle Subsistenzlandwirtschaft mit Mais, Bohnen und Zuckerrohr prägt den Alltag. In der Trockenzeit zwischen Dezember und Juni leiden die Felder unter dem Wassermangel, weshalb viele Familien zusätzlich Geld aus dem Ausland (remessas) erhalten. Die Region ist Ausgangspunkt für Wanderungen in das Schutzgebiet Serra Malagueta nordöstlich von hier.",
        "facts": [
            "Liegt auf etwa 450 Metern Höhe in der Gemeinde São Miguel",
            "Bevölkerung rund 800 Einwohner",
            "An der Nationalstraße EN1 gelegen",
            "Subsistenzlandwirtschaft mit Mais und Bohnen",
            "Trockenzeit von Dezember bis Juni",
            "Geldüberweisungen aus dem Ausland wichtig",
            "Tor zum Naturpark Serra Malagueta",
        ],
    },
    "porto-rincao-cities-v2": {
        "desc": "Porto Rincão ist ein abgelegenes Fischerdorf an der Westküste der Insel Santiago, das zur Gemeinde Santa Catarina gehört. Der Ort mit etwa 1.200 Einwohnern liegt am Fuß einer steilen Schlucht, die zum Atlantik hinabführt. Bis zur Asphaltierung der Zufahrtsstraße im Jahr 2010 war Porto Rincão nur über holprige Pisten erreichbar, was den traditionellen Charakter des Dorfes bewahrte. Hier wird die kapverdische Musikrichtung Batuko intensiv gepflegt, ein von Frauen gespielter Trommel- und Gesangsstil mit afrikanischen Wurzeln. Die schwarzen Lavasandstrände werden von rauen Atlantikbrechungen gepeitscht, weshalb das Schwimmen gefährlich ist. Hauptfangart der lokalen Fischer ist die Makrele, die direkt am Strand verkauft wird.",
        "facts": [
            "Abgelegenes Fischerdorf an der Westküste Santiagos",
            "Bevölkerung etwa 1.200 Einwohner",
            "Asphaltierte Zufahrtsstraße erst seit 2010",
            "Wichtiges Zentrum der Batuko-Musiktradition",
            "Schwarze Lavasandstrände mit starker Brandung",
            "Hauptfangart der Fischer ist die Makrele",
            "Gehört zur Gemeinde Santa Catarina",
        ],
    },
    "porto-mosquito-cities-v2": {
        "desc": "Porto Mosquito liegt etwa 15 Kilometer westlich von Praia an der Südküste der Insel Santiago in der Gemeinde Ribeira Grande de Santiago. Das Fischerdorf mit rund 1.400 Einwohnern erstreckt sich entlang einer geschützten Bucht, die von markanten vulkanischen Felsformationen gerahmt wird. Hier befindet sich einer der traditionsreichsten Fischereihäfen Santiagos, dessen Holzboote aus Kiefernholz bis heute in lokaler Handarbeit gebaut werden. Die Bucht ist ein wichtiges Fanggebiet für Thunfisch, Schwertfisch und Garoupa. Direkt hinter dem Dorf erhebt sich ein steiles Plateau, von dem aus man einen Blick auf die historische Cidade Velha hat, die nur etwa drei Kilometer westlich liegt.",
        "facts": [
            "Etwa 15 Kilometer westlich von Praia gelegen",
            "Bevölkerung rund 1.400 Einwohner",
            "Gehört zur Gemeinde Ribeira Grande de Santiago",
            "Traditionelle Bootsbau-Handwerkskunst aus Kiefernholz",
            "Wichtiges Fanggebiet für Thunfisch und Schwertfisch",
            "Etwa drei Kilometer von Cidade Velha entfernt",
            "Geschützte Bucht zwischen vulkanischen Felsformationen",
        ],
    },
    "mindelo-cities-v2": {
        "desc": "Mindelo liegt an der Nordwestküste der Insel São Vicente an der natürlichen Hafenbucht Porto Grande, einem versunkenen Vulkankrater. Die Stadt wurde 1838 zur Hauptstadt São Vicentes erhoben, nachdem britische Kohlefirmen den Hafen als wichtigen Versorgungspunkt für Atlantikdampfer entdeckt hatten. Mit rund 70.000 Einwohnern (2021) ist Mindelo die zweitgrößte Stadt Kap Verdes und gilt als kulturelle Hauptstadt des Landes. Hier wurde 1941 die weltberühmte Sängerin Cesária Évora geboren, die mit der Mornastil internationale Bekanntheit erlangte. Der jährliche Karneval von Mindelo, beeinflusst von brasilianischen Traditionen, gilt als der größte Westafrikas. Die koloniale Architektur mit pastellfarbenen Häusern verleiht der Stadt einen einzigartigen Charme.",
        "facts": [
            "Bevölkerung etwa 70.000 Einwohner (Zensus 2021)",
            "Hauptstadt São Vicentes seit 1838",
            "Hafen Porto Grande in einem versunkenen Vulkankrater",
            "Geburtsort von Cesária Évora (geboren 1941)",
            "Karneval gilt als größter Westafrikas",
            "Britische Kohlefirmen prägten den Aufstieg im 19. Jahrhundert",
            "Internationaler Flughafen Cesária Évora 11 Kilometer südlich",
        ],
    },
    "salamansa-cities-v2": {
        "desc": "Salamansa liegt an der Nordküste der Insel São Vicente, etwa acht Kilometer nordöstlich von Mindelo. Das Fischerdorf mit rund 1.000 Einwohnern erstreckt sich entlang einer breiten, sichelförmigen Bucht mit hellem Sand, die vom konstanten Nordostpassat geprägt wird. Diese starken Winde, die zwischen Oktober und Mai bis zu 30 Knoten erreichen, machen Salamansa zu einem beliebten Spot für Wind- und Kitesurfer. Die Fischerei ist nach wie vor die wirtschaftliche Hauptstütze des Dorfes, die kleinen Holzboote starten morgens in die geschützte Bucht. Eine asphaltierte Straße verbindet Salamansa seit den 2000er Jahren mit Mindelo. In der Nähe liegt die Insel Santa Luzia, die unbewohnt ist und als Naturschutzgebiet gilt.",
        "facts": [
            "Etwa acht Kilometer nordöstlich von Mindelo",
            "Bevölkerung rund 1.000 Einwohner",
            "Sichelförmige Bucht mit hellem Sand",
            "Nordostpassat erreicht bis 30 Knoten zwischen Oktober und Mai",
            "Beliebter Wind- und Kitesurf-Spot",
            "Blick auf die unbewohnte Insel Santa Luzia",
            "Asphaltierte Verbindungsstraße seit den 2000er Jahren",
        ],
    },
    "sao-pedro-cities-v2": {
        "desc": "São Pedro liegt an der Südwestküste der Insel São Vicente, etwa zehn Kilometer südlich von Mindelo, direkt am internationalen Flughafen Cesária Évora. Das Dorf mit rund 1.500 Einwohnern erstreckt sich entlang einer langen, hellen Sandbucht, die durch konstanten Nordostpassat zu einem der weltbesten Spots für Speed-Windsurfing wurde. Der Niederländer Hans Kreisel fuhr hier 1990 einen damaligen Geschwindigkeitsweltrekord von über 47 Knoten. Die Bucht ist außerdem Lebensraum für seltene Meeresschildkröten, deren Eier zwischen Juni und Oktober am Strand abgelegt werden. Vom Dorf führt ein Wanderweg zum historischen Leuchtturm Dona Amélia auf der Halbinsel Ponta Machado, der 1885 in Betrieb genommen wurde.",
        "facts": [
            "Etwa zehn Kilometer südlich von Mindelo",
            "Bevölkerung rund 1.500 Einwohner",
            "Speed-Windsurf-Weltrekord 1990 mit über 47 Knoten",
            "Internationaler Flughafen Cesária Évora direkt am Ort",
            "Leuchtturm Dona Amélia seit 1885 in Betrieb",
            "Brutgebiet seltener Meeresschildkröten Juni bis Oktober",
            "Lange helle Sandbucht mit konstantem Nordostpassat",
        ],
    },
    "baia-das-gatas-cities-v2": {
        "desc": "Baía das Gatas liegt an der Nordostküste der Insel São Vicente, rund zehn Kilometer nordöstlich von Mindelo. Die Bucht ist nach den dort einst zahlreichen Katzenhaien (gata) benannt und durch ein natürliches Riff vom offenen Ozean geschützt, was eine kristallklare Lagune mit ruhigem Wasser bildet. Seit 1984 findet hier jährlich das Festival da Baía das Gatas statt, eines der größten Open-Air-Musikfestivals Westafrikas, das im August Tausende Besucher anzieht. Auftritte internationaler kapverdischer Stars prägen das Programm. Das Dorf selbst hat nur etwa 200 ständige Einwohner, beherbergt aber zahlreiche Wochenendhäuser von Mindelo-Bewohnern. Die Lagune ist auch ein beliebter Schnorchel- und Familienschwimmplatz.",
        "facts": [
            "Etwa zehn Kilometer nordöstlich von Mindelo",
            "Festival da Baía das Gatas seit 1984 jährlich im August",
            "Eines der größten Musikfestivals Westafrikas",
            "Natürliche Lagune durch Riffe geschützt",
            "Etwa 200 ständige Einwohner, viele Wochenendhäuser",
            "Name leitet sich von Katzenhaien (gata) ab",
            "Beliebter Schnorchel- und Familienschwimmplatz",
        ],
    },
    "espargos-cities-v2": {
        "desc": "Espargos liegt im Zentrum der Insel Sal und ist seit 1939 die Hauptstadt der gleichnamigen Gemeinde. Der Name stammt vom wilden Spargel (espargos), der hier ursprünglich auf den trockenen Ebenen wuchs. Mit rund 21.000 Einwohnern (2021) ist Espargos der größte Ort der Insel und beherbergt mehr als drei Viertel der Bevölkerung Sals. Direkt am Stadtrand liegt der internationale Flughafen Amílcar Cabral, der 1939 als erster Atlantik-Stützpunkt für Transatlantikflüge eröffnet wurde und heute der zweitgrößte Flughafen Kap Verdes ist. Die Stadt entstand als Versorgungssiedlung für den Flughafen und die nahegelegenen Salinen von Pedra de Lume. Die Wirtschaft lebt heute hauptsächlich vom Tourismus und Verwaltungssektor.",
        "facts": [
            "Bevölkerung etwa 21.000 Einwohner (2021)",
            "Hauptstadt der Gemeinde Sal seit 1939",
            "Internationaler Flughafen Amílcar Cabral seit 1939 in Betrieb",
            "Name leitet sich vom wilden Spargel ab",
            "Beherbergt über drei Viertel der Bevölkerung Sals",
            "Zweitgrößter Flughafen Kap Verdes",
            "Versorgungssiedlung für Flughafen und Pedra de Lume Salinen",
        ],
    },
    "santa-maria-cities-v2": {
        "desc": "Santa Maria liegt an der Südspitze der Insel Sal und ist das touristische Zentrum Kap Verdes. Der Ort wurde 1830 als Salzhandelsstation gegründet und exportierte bis Mitte des 20. Jahrhunderts Meersalz nach Brasilien und Westafrika. Heute leben hier rund 8.000 ständige Einwohner, hinzu kommen Tausende internationale Touristen. Der acht Kilometer lange Sandstrand mit kristallklarem türkisfarbenem Wasser gilt als einer der schönsten Strände Westafrikas. Der historische hölzerne Pier (Pontão), 1835 für die Salzverladung erbaut, ist heute Treffpunkt der Fischer am frühen Morgen. Santa Maria ist Ausgangspunkt für Tauchgänge zu den Wracks Boa Esperança und Santo Antão sowie für Walbeobachtungen zwischen Februar und Mai.",
        "facts": [
            "Gegründet 1830 als Salzhandelsstation",
            "Bevölkerung etwa 8.000 ständige Einwohner",
            "Acht Kilometer langer Sandstrand mit türkisfarbenem Wasser",
            "Historischer Holzpier von 1835 als Treffpunkt der Fischer",
            "Walbeobachtungssaison zwischen Februar und Mai",
            "Tauchspots an den Wracks Boa Esperança und Santo Antão",
            "Tourismuszentrum Kap Verdes mit zahlreichen Hotels",
        ],
    },
    "murdeira-cities-v2": {
        "desc": "Murdeira liegt an der Westküste der Insel Sal, etwa zehn Kilometer südlich von Espargos in einer geschützten halbmondförmigen Bucht. Die kleine Siedlung mit rund 600 Einwohnern besteht überwiegend aus Ferienanlagen und privaten Villen. Die Bucht ist seit 2003 Teil des Meeresreservats Reserva Natural da Baía da Murdeira, das auf einer Fläche von rund 11.000 Hektar Meeresschildkröten, Buckelwale und Riffhaie schützt. Die ruhigen Gewässer und das auf einem flachen Sandboden gewachsene Korallenriff machen die Bucht zu einem hervorragenden Schnorchelgebiet. Vom Strand aus sieht man die markante Felsformation Monte Leão, einen 156 Meter hohen erloschenen Vulkankegel, der wie ein liegender Löwe aussieht und der Bucht ihre charakteristische Kulisse verleiht.",
        "facts": [
            "Etwa zehn Kilometer südlich von Espargos gelegen",
            "Bevölkerung rund 600 Einwohner",
            "Meeresreservat Baía da Murdeira seit 2003 geschützt",
            "Schutzgebiet umfasst etwa 11.000 Hektar",
            "Brutgebiet für Meeresschildkröten und Buckelwale",
            "Monte Leão (156 m) als markante Vulkankegel-Kulisse",
            "Hervorragendes Schnorchelgebiet mit flachem Korallenriff",
        ],
    },
    "palmeira-cities-v2": {
        "desc": "Palmeira liegt an der Westküste der Insel Sal, etwa fünf Kilometer westlich von Espargos. Der Ort mit rund 1.200 Einwohnern beherbergt den Haupthafen Sals, der die Insel mit Treibstoff, Lebensmitteln und Baumaterialien versorgt. Frachter aus Praia und Mindelo legen hier mehrmals wöchentlich an. Die bunten Fischerhäuser entlang der Hafenpromenade und die kleinen Restaurants mit fangfrischem Fisch geben Palmeira einen authentischen Charakter abseits des Massentourismus. Vom Hafen aus starten Tauchausflüge zu den Höhlen Buracona, einem Naturphänomen mit einer kreisrunden Felsöffnung, durch die Sonnenlicht das Wasser blau leuchten lässt (Olho Azul, das blaue Auge). Die Hafenanlage wurde zwischen 2010 und 2013 für 30 Millionen Euro modernisiert.",
        "facts": [
            "Etwa fünf Kilometer westlich von Espargos",
            "Bevölkerung rund 1.200 Einwohner",
            "Haupthafen der Insel Sal",
            "Modernisierung 2010 bis 2013 für 30 Millionen Euro",
            "Ausgangspunkt zu den Buracona-Höhlen",
            "Olho Azul Naturphänomen mit blauem Lichteffekt",
            "Bunte Fischerhäuser entlang der Hafenpromenade",
        ],
    },
    "porto-novo-cities-v2": {
        "desc": "Porto Novo liegt an der Südküste der Insel Santo Antão und ist seit 2005 mit rund 9.000 Einwohnern die größte Stadt der Insel. Der Hafen ist der einzige Anlegepunkt für die Autofähren, die mehrmals täglich in einer einstündigen Fahrt aus Mindelo auf São Vicente kommen. Da der Flughafen von Santo Antão aus Sicherheitsgründen 1999 geschlossen wurde, ist Porto Novo das einzige Eingangstor zur Insel. Die Stadt entstand erst im 19. Jahrhundert als Versorgungspunkt und prägt sich durch ein trockenes, fast wüstenartiges Klima, das im starken Kontrast zu den grünen Bergregionen im Norden der Insel steht. Hauptindustrien sind Fischerei, Salzverarbeitung und der Transport in das Bergland.",
        "facts": [
            "Bevölkerung rund 9.000 Einwohner",
            "Größte Stadt der Insel Santo Antão",
            "Hafen ist einziges Eingangstor zur Insel",
            "Fährverbindung nach Mindelo dauert etwa eine Stunde",
            "Flughafen Santo Antão 1999 aus Sicherheitsgründen geschlossen",
            "Trockenes, wüstenartiges Klima im Süden der Insel",
            "Stadtgründung erst im 19. Jahrhundert",
        ],
    },
    "ribeira-grande-cities-v2": {
        "desc": "Ribeira Grande, oft Povoação genannt, liegt an der Nordküste der Insel Santo Antão am Ausgang des gleichnamigen Tals. Die Stadt mit rund 4.500 Einwohnern ist Hauptort der Gemeinde Ribeira Grande und das wichtigste Verwaltungszentrum des nördlichen Inselteils. Die historische Siedlung entstand bereits im 16. Jahrhundert als Anbauzentrum für Zuckerrohr, das hier zu Grogue, dem traditionellen kapverdischen Schnaps, destilliert wird. Die Stadt erstreckt sich entlang der Küstenstraße in einem engen Tal zwischen steilen Bergen, die Höhen bis zu 1.500 Metern erreichen. Eine markante Kirche aus dem 18. Jahrhundert, die Igreja de Nossa Senhora do Rosário, ist das architektonische Wahrzeichen. Die Region ist berühmt für Wanderwege durch die Täler von Paúl und Ribeira Grande.",
        "facts": [
            "Bevölkerung etwa 4.500 Einwohner",
            "Stadtgründung im 16. Jahrhundert",
            "Anbauzentrum für Zuckerrohr und Grogue-Destillation",
            "Igreja de Nossa Senhora do Rosário aus dem 18. Jahrhundert",
            "Umliegende Berge erreichen bis 1.500 Meter Höhe",
            "Hauptort der Gemeinde Ribeira Grande",
            "Ausgangspunkt für Wanderungen in das Tal Paúl",
        ],
    },
    "ponta-do-sol-cities-v2": {
        "desc": "Ponta do Sol liegt an der Nordwestspitze der Insel Santo Antão, etwa fünf Kilometer westlich von Ribeira Grande. Der malerische Ort mit rund 2.500 Einwohnern erstreckt sich entlang einer kleinen, von Klippen umrahmten Bucht direkt am Atlantik. Die pastellfarbenen Häuser im Kolonialstil, die enge gepflasterte Hauptstraße und der historische Hafen verleihen Ponta do Sol einen besonderen Charme, weshalb der Ort als einer der schönsten Kap Verdes gilt. Hier befand sich von 1962 bis 1999 der einzige Flughafen der Insel, der wegen seiner gefährlichen Lage am Klippenrand nach mehreren Vorfällen geschlossen wurde. Heute dient die ehemalige Landebahn als Ausgangspunkt für Küstenwanderungen nach Fontainhas, einem Bergdorf mit spektakulärer Aussicht.",
        "facts": [
            "Bevölkerung rund 2.500 Einwohner",
            "Etwa fünf Kilometer westlich von Ribeira Grande",
            "Ehemaliger Flughafen Agostinho Neto 1962 bis 1999",
            "Pastellfarbene Häuser im portugiesischen Kolonialstil",
            "Ausgangspunkt für Wanderung nach Fontainhas",
            "Nördlichster Punkt der Insel Santo Antão",
            "Einer der schönsten Orte Kap Verdes",
        ],
    },
    "vila-das-pombas-cities-v2": {
        "desc": "Vila das Pombas liegt an der Nordküste der Insel Santo Antão und ist Hauptort der Gemeinde Paúl. Der Ort mit rund 1.700 Einwohnern erstreckt sich entlang der Mündung des grünen Tals Ribeira do Paúl, das als einer der fruchtbarsten Orte ganz Kap Verdes gilt. Hier wachsen Zuckerrohr, Bananen, Mangos, Yams und Kaffee in üppiger Vegetation, was im starken Gegensatz zur Trockenheit der südlichen Inselseite steht. Die kleinen traditionellen Brennereien (trapiches) destillieren aus Zuckerrohr den Grogue, den hochprozentigen Nationalschnaps Kap Verdes mit über 40 Volumenprozent. Die schmale Uferpromenade mit Kolonialbauten erinnert an die portugiesische Vergangenheit. Das Tal ist Ausgangspunkt für Wanderungen zu Wasserfällen und terrassierten Feldern.",
        "facts": [
            "Bevölkerung rund 1.700 Einwohner",
            "Hauptort der Gemeinde Paúl",
            "Tal Ribeira do Paúl als grünstes Tal Kap Verdes",
            "Anbau von Zuckerrohr, Bananen, Mangos und Kaffee",
            "Traditionelle Trapiches destillieren Grogue",
            "Grogue erreicht über 40 Volumenprozent Alkohol",
            "Uferpromenade mit portugiesischen Kolonialbauten",
        ],
    },
    "coculi-cities-v2": {
        "desc": "Coculi liegt etwa vier Kilometer landeinwärts von Ribeira Grande im Inneren der Insel Santo Antão am Zusammenfluss von zwei tiefen Tälern. Das Dorf mit rund 1.200 Einwohnern ist bekannt für seine fruchtbaren terrassierten Felder, die sich an steilen Berghängen bis auf über 800 Meter Höhe hinaufziehen. Die Pfarrkirche Igreja de Santo Crucifixo, im 19. Jahrhundert erbaut, ist das markante Wahrzeichen des Ortes. Coculi liegt an der historischen Verbindungsstraße, die in den 1960er Jahren in mühevoller Handarbeit aus Kopfsteinpflaster über die Bergpässe nach Porto Novo gebaut wurde. Diese Straße, die heute als Wanderroute dient, gilt als eine der spektakulärsten Bergstraßen Afrikas. Hauptanbauprodukte sind Yams, Maniok, Süßkartoffeln, Mais und Bohnen.",
        "facts": [
            "Bevölkerung rund 1.200 Einwohner",
            "Etwa vier Kilometer landeinwärts von Ribeira Grande",
            "Terrassenfelder bis über 800 Meter Höhe",
            "Igreja de Santo Crucifixo aus dem 19. Jahrhundert",
            "Historische Kopfsteinpflasterstraße aus den 1960er Jahren",
            "Eine der spektakulärsten Bergstraßen Afrikas",
            "Anbau von Yams, Maniok und Süßkartoffeln",
        ],
    },
    "sao-filipe-cities-v2": {
        "desc": "São Filipe liegt an der Westküste der Insel Fogo und ist mit rund 8.300 Einwohnern (2021) die Hauptstadt der gleichnamigen Gemeinde sowie zweitälteste Stadt Kap Verdes. Die Stadtgründung geht auf das 16. Jahrhundert zurück, als portugiesische Siedler hier einen wichtigen Hafen für den Sklavenhandel und Vulkanproduktexport errichteten. Bis heute ist das historische Zentrum geprägt von zweistöckigen Herrenhäusern (sobrados) im portugiesischen Kolonialstil, die zu den schönsten Beispielen kapverdischer Architektur zählen. Die Stadt erhielt 2010 offiziellen Schutz als historisches Erbe Kap Verdes. Direkt vor der Bucht erhebt sich der aktive Vulkan Pico do Fogo (2.829 m) mit dem letzten großen Ausbruch im November 2014 und einer Höhe, die ihn zum höchsten Berg des Landes macht.",
        "facts": [
            "Bevölkerung etwa 8.300 Einwohner (2021)",
            "Zweitälteste Stadt Kap Verdes nach Cidade Velha",
            "Stadtgründung im 16. Jahrhundert",
            "Sobrados im portugiesischen Kolonialstil",
            "Historisches Erbe seit 2010 offiziell geschützt",
            "Pico do Fogo (2.829 m) als höchster Berg des Landes",
            "Letzter großer Ausbruch im November 2014",
        ],
    },
    "mosteiros-cities-v2": {
        "desc": "Mosteiros liegt an der Nordostküste der Insel Fogo und ist Hauptort der gleichnamigen Gemeinde, die 1991 aus der Gemeinde São Filipe ausgegliedert wurde. Die Stadt mit rund 3.500 Einwohnern erstreckt sich entlang einer schwarzen Lavasandbucht am Fuß des aktiven Vulkans Pico do Fogo. Der Name Mosteiros (Klöster) leitet sich von den markanten Lavaformationen ab, die wie Klostertürme aus dem Meer ragen. Die Region ist eines der wichtigsten Anbaugebiete für Kaffee in Kap Verde, der seit dem 18. Jahrhundert auf den vulkanischen Hängen kultiviert wird. Der Café de Fogo, ein Arabica mit ausgeprägt erdigem Aroma durch den vulkanischen Boden, gilt als Spezialität. Auch Wein wird hier auf Lavaböden angebaut. Mosteiros ist Ausgangspunkt für Wanderungen zum Krater Chã das Caldeiras.",
        "facts": [
            "Bevölkerung rund 3.500 Einwohner",
            "Gemeinde Mosteiros 1991 gegründet",
            "Schwarze Lavasandbucht am Fuß des Vulkans",
            "Wichtigstes Kaffeeanbaugebiet Kap Verdes",
            "Café de Fogo als Arabica-Spezialität",
            "Weinanbau auf vulkanischen Böden",
            "Ausgangspunkt zur Caldera Chã das Caldeiras",
        ],
    },
    "cova-figueira-cities-v2": {
        "desc": "Cova Figueira liegt an der Südostküste der Insel Fogo, etwa 20 Kilometer von São Filipe entfernt, und ist Hauptort der Gemeinde Santa Catarina do Fogo, die 2005 aus der Gemeinde São Filipe ausgegliedert wurde. Mit rund 2.000 Einwohnern ist Cova Figueira ein kleines, aber wichtiges Verwaltungszentrum für den südöstlichen Teil der Vulkaninsel. Die umliegende Region ist bekannt für den Anbau von Bohnen, Mais, Süßkartoffeln und Kaffee auf vulkanischen Böden, die durch die regelmäßigen Ascheniederschläge des Pico do Fogo besonders fruchtbar sind. Der Name Figueira (Feigenbaum) verweist auf die einst hier wachsenden Feigenbäume. Die Stadt liegt auf etwa 700 Metern Höhe und bietet Ausblicke auf die zerklüftete Lavalandschaft und das Meer.",
        "facts": [
            "Bevölkerung rund 2.000 Einwohner",
            "Hauptort der Gemeinde Santa Catarina do Fogo",
            "Gemeinde 2005 aus São Filipe ausgegliedert",
            "Liegt auf etwa 700 Metern Höhe",
            "Anbau von Bohnen, Mais, Kaffee und Süßkartoffeln",
            "Etwa 20 Kilometer von São Filipe entfernt",
            "Vulkanasche-Böden als besonders fruchtbar",
        ],
    },
}

src = FILE.read_text(encoding="utf-8")

def to_str_arr(items):
    parts = []
    for it in items:
        esc = it.replace("\\", "\\\\").replace('"', '\\"')
        parts.append(f'"{esc}"')
    return "[" + ", ".join(parts) + "]"

# Insert descriptionAdvanced + factsAdvanced before image: "/poi-images/{id}-cities-v2.webp"
# Pattern: facts: { ... }, image: "/poi-images/{id}.webp"
patched = 0
for poi_id, data in DATA.items():
    desc_de = data["desc"].replace("\\", "\\\\").replace('"', '\\"')
    facts_arr = to_str_arr(data["facts"])

    # Find the POI block by id and insert before "image:"
    pattern = re.compile(
        r'(\{id: "' + re.escape(poi_id) + r'",.*?facts: \{.*?\]\}, )(image: ")',
        re.DOTALL
    )
    def repl(m):
        prefix = m.group(1)
        img = m.group(2)
        # Build advanced blocks (only DE)
        adv = (
            'descriptionAdvanced: {de: "' + desc_de + '"}, '
            'factsAdvanced: {de: ' + facts_arr + '}, '
        )
        return prefix + adv + img
    new_src, n = pattern.subn(repl, src)
    if n != 1:
        print(f"WARN: {poi_id} not patched (n={n})")
    else:
        src = new_src
        patched += 1

FILE.write_text(src, encoding="utf-8")
print(f"Patched {patched}/{len(DATA)} POIs in {FILE}")
