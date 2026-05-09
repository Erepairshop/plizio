#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Fill descriptionAdvanced.de + factsAdvanced.de for POIs in poiExtraMongoliaCitiesV2.ts (DE only)."""
import re
from pathlib import Path

FILE = Path(__file__).resolve().parent.parent / "lib" / "visualLab" / "data" / "poiExtraMongoliaCitiesV2.ts"

DATA = {
    "mn-ulaanbaatar-cities-v2": {
        "desc": "Ulaanbaatar, gegründet 1639 als Wanderkloster Örgöö, wurde 1924 zur Hauptstadt der Mongolischen Volksrepublik umbenannt und bedeutet wörtlich Roter Held nach dem Revolutionär Sükhbaatar. Mit rund 1,6 Millionen Einwohnern leben hier etwa 46 Prozent der mongolischen Bevölkerung auf einer Höhe von 1.350 Metern im Tuul-Tal. Die Stadt gilt mit einer Jahresdurchschnittstemperatur von minus 0,4 Grad als kälteste Hauptstadt der Welt. Im Süden erhebt sich der heilige Berg Bogd Khan Uul (2.257 m), der bereits 1778 als erstes Naturschutzgebiet der Welt unter Schutz gestellt wurde. Der zentrale Sükhbaatar-Platz, das Gandan-Kloster und die ger-Distrikte am Stadtrand prägen das Stadtbild.",
        "facts": [
            "Gegründet 1639 als nomadisches Kloster Örgöö",
            "Bevölkerung rund 1,6 Millionen, etwa 46 Prozent der Mongolei",
            "Liegt auf 1.350 Metern Höhe im Tal des Tuul-Flusses",
            "Jahresdurchschnitt minus 0,4 Grad, kälteste Hauptstadt weltweit",
            "1924 nach dem Revolutionär Sükhbaatar umbenannt",
            "Bogd Khan Uul (2.257 m) seit 1778 unter Naturschutz",
            "Gandan-Kloster mit 26,5 Meter hoher Migjid-Janraisig-Statue",
            "Internationaler Flughafen Chinggis Khaan seit 2021 in Betrieb",
        ],
    },
    "mn-erdenet-cities-v2": {
        "desc": "Erdenet wurde 1974 als Plansiedlung im Rahmen eines sowjetisch-mongolischen Joint Ventures auf 1.300 Metern Höhe in der Provinz Orkhon gegründet. Die Stadt verdankt ihre Existenz dem Erdenet Mining Corporation, das eine der weltweit größten Kupfer-Molybdän-Tagebauminen betreibt und jährlich rund 530.000 Tonnen Kupferkonzentrat produziert. Mit rund 100.000 Einwohnern ist Erdenet die zweitgrößte Stadt der Mongolei. Bis 2016 hielt Russland einen Anteil von 49 Prozent am Bergbauunternehmen, der dann an die mongolische Regierung verkauft wurde. Die Lagerstätte enthält geschätzte 1,2 Milliarden Tonnen Erzreserven und liefert etwa ein Viertel der mongolischen Exporteinnahmen. Die Stadt verfügt über breite Boulevards, sowjetische Plattenbauten und ein eigenes Wärmekraftwerk.",
        "facts": [
            "Gegründet 1974 als sowjetisch-mongolische Plansiedlung",
            "Bevölkerung etwa 100.000, zweitgrößte Stadt der Mongolei",
            "Liegt auf 1.300 Metern Höhe in der Provinz Orkhon",
            "Eine der größten Kupfer-Molybdän-Minen der Welt",
            "Jahresproduktion rund 530.000 Tonnen Kupferkonzentrat",
            "Russischer 49-Prozent-Anteil 2016 an die Mongolei verkauft",
            "Erzreserven werden auf 1,2 Milliarden Tonnen geschätzt",
            "Liefert rund 25 Prozent der mongolischen Exporteinnahmen",
        ],
    },
    "mn-darkhan-cities-v2": {
        "desc": "Darkhan wurde 1961 als geplante sozialistische Industriestadt mit massiver Hilfe der Sowjetunion, der DDR, Bulgariens, Ungarns, Polens und der Tschechoslowakei gegründet. Der Name bedeutet auf Mongolisch Schmied und verweist auf die geplante Schwerindustrie. Mit rund 75.000 Einwohnern auf 700 Metern Höhe in der Provinz Darkhan-Uul ist sie die drittgrößte Stadt der Mongolei. Die Stadt liegt etwa 220 Kilometer nördlich von Ulaanbaatar an der Transmongolischen Eisenbahn und verbindet das Land mit Russland. Hier befinden sich ein Stahlwerk, eine Zementfabrik und das Kharaa-Kraftwerk. In Darkhan steht das berühmte Kharagiin-Kloster, in das die Statue des heiligen Megjid Janraisig nach den stalinistischen Säuberungen 1937 gerettet wurde.",
        "facts": [
            "Gegründet 1961 als sozialistische Industriestadt",
            "Bevölkerung etwa 75.000, drittgrößte Stadt der Mongolei",
            "Liegt 220 Kilometer nördlich von Ulaanbaatar",
            "Erbaut mit Hilfe der UdSSR, DDR, Polens und der CSSR",
            "Name bedeutet auf Mongolisch Schmied",
            "Kharaa-Kraftwerk versorgt Nordmongolei mit Strom",
            "Stahlwerk und Zementfabrik prägen die Industrie",
            "Kharagiin-Kloster bewahrt Statuen aus der Säuberung 1937",
        ],
    },
    "mn-choibalsan-cities-v2": {
        "desc": "Choibalsan, benannt nach dem stalinistischen Diktator Khorloogiin Choibalsan (1895 bis 1952), liegt auf 750 Metern Höhe am Ufer des Cherlen-Flusses in der Provinz Dornod. Die Stadt mit rund 38.000 Einwohnern ist das wirtschaftliche Zentrum der östlichen Mongolei und etwa 655 Kilometer von Ulaanbaatar entfernt. Bis 1991 unterhielt die Sowjetunion hier einen großen Militärstützpunkt mit über 6.000 Soldaten und einem Militärflugplatz, der heute als ziviler Flughafen Choibalsan dient. Während des Zweiten Weltkriegs war Choibalsan Aufmarschgebiet sowjetisch-mongolischer Truppen für die Schlacht von Khalkhin Gol 1939 gegen Japan. Heute lebt die Stadt von Viehzucht, Fleischverarbeitung und einer Wollwaschanlage. Eine Bahnverbindung führt nach Russland.",
        "facts": [
            "Bevölkerung rund 38.000 Einwohner",
            "Liegt 655 Kilometer östlich von Ulaanbaatar",
            "Benannt nach Diktator Choibalsan (1895 bis 1952)",
            "Sowjetischer Militärstützpunkt bis 1991 mit 6.000 Soldaten",
            "Aufmarschgebiet vor der Schlacht von Khalkhin Gol 1939",
            "Auf 750 Metern Höhe am Cherlen-Fluss",
            "Bahnverbindung nach Russland und Fleischindustrie",
            "Hauptstadt der Provinz Dornod",
        ],
    },
    "mn-moron-cities-v2": {
        "desc": "Mörön (auf Mongolisch Fluss) liegt auf 1.283 Metern Höhe in einer fruchtbaren Senke am Delgermörön-Fluss und ist seit 1933 Hauptstadt der Provinz Khövsgöl. Die Stadt mit rund 38.000 Einwohnern dient als wichtigster Ausgangspunkt für den 100 Kilometer nördlich gelegenen Khövsgöl-See, der mit 2.760 Quadratkilometern Fläche und bis zu 262 Metern Tiefe das größte Süßwasserreservoir der Mongolei darstellt und etwa 70 Prozent des Süßwassers des Landes enthält. Mörön besitzt einen kleinen Flughafen mit täglichen Verbindungen nach Ulaanbaatar. Etwa 20 Kilometer westlich der Stadt liegt das Uushgiin-Övör-Heiligtum mit 14 Hirschsteinen aus der Bronzezeit (1300 bis 700 v. Chr.). Die Region ist bekannt für die Tsaatan, die letzten Rentierhirten Asiens.",
        "facts": [
            "Bevölkerung rund 38.000 Einwohner",
            "Auf 1.283 Metern Höhe am Delgermörön-Fluss",
            "Hauptstadt der Provinz Khövsgöl seit 1933",
            "100 Kilometer südlich des Khövsgöl-Sees",
            "Khövsgöl-See enthält 70 Prozent des Süßwassers der Mongolei",
            "Bronzezeitliche Hirschsteine bei Uushgiin Övör",
            "Region der Tsaatan, letzten Rentierhirten Asiens",
            "Flughafen mit täglicher Verbindung nach Ulaanbaatar",
        ],
    },
    "mn-khovd-cities-v2": {
        "desc": "Khovd liegt auf 1.405 Metern Höhe am Buyant-Fluss am Fuß der Altai-Berge und wurde 1685 von den Mandschu als Festung Khovd gegründet, was die Stadt zu einer der ältesten der Mongolei macht. Mit rund 30.000 Einwohnern ist Khovd Hauptstadt der gleichnamigen Provinz im Westen des Landes und 1.580 Kilometer von Ulaanbaatar entfernt. Die Stadt ist besonders multiethnisch und beherbergt 17 verschiedene mongolische und turksprachige Volksgruppen, darunter Kasachen, Khalkha, Dörwöd, Torguud und Uriankhai. Khovd wurde 1912 von den mongolischen Truppen unter Magsarjav von der chinesischen Garnison erobert und gilt als symbolischer Ort der mongolischen Unabhängigkeit. Die Universität wurde 1979 gegründet. Eine Besonderheit ist der Wassermelonenanbau in der nahegelegenen Buyant-Oase.",
        "facts": [
            "Gegründet 1685 als Mandschu-Festung",
            "Bevölkerung rund 30.000 Einwohner",
            "Auf 1.405 Metern Höhe am Buyant-Fluss",
            "17 verschiedene Volksgruppen leben in der Provinz",
            "1912 von Magsarjav von der Qing-Dynastie erobert",
            "Universität von Khovd seit 1979",
            "Bekannt für Wassermelonenanbau in der Buyant-Oase",
            "1.580 Kilometer westlich von Ulaanbaatar",
        ],
    },
    "mn-olgii-cities-v2": {
        "desc": "Ölgii liegt auf 1.710 Metern Höhe am Khovd-Fluss in den Altai-Bergen und ist seit 1940 Hauptstadt der Provinz Bayan-Ölgii, der einzigen mehrheitlich kasachischen Provinz der Mongolei. Mit rund 30.000 Einwohnern ist die Stadt das kulturelle Zentrum der etwa 100.000 ethnischen Kasachen in der Mongolei, die rund 90 Prozent der Provinzbevölkerung ausmachen und überwiegend Sunniten sind. Eine der größten Moscheen des Landes prägt die Stadtmitte. Weltberühmt ist Ölgii für die jahrhundertealte Tradition der Steinadlerjagd (berkutchi), bei der trainierte Steinadler zur Jagd auf Füchse und Wölfe eingesetzt werden. Das jährliche Adlerjagd-Festival im Oktober zieht tausende Touristen an. Im Sommer findet außerdem das Naadam mit kasachischer Variante statt. Der Tavan-Bogd-Nationalpark mit dem höchsten Berg der Mongolei (Khüiten Peak, 4.374 m) liegt nahe.",
        "facts": [
            "Bevölkerung rund 30.000, davon 90 Prozent Kasachen",
            "Auf 1.710 Metern Höhe in den Altai-Bergen",
            "Hauptstadt der Provinz Bayan-Ölgii seit 1940",
            "Kulturzentrum für rund 100.000 mongolische Kasachen",
            "Tradition der Steinadlerjagd (berkutchi) seit Jahrhunderten",
            "Adlerjagd-Festival jährlich im Oktober",
            "Eine der größten Moscheen der Mongolei",
            "Nahe dem Khüiten Peak (4.374 m), höchster Berg der Mongolei",
        ],
    },
    "mn-ulaangom-cities-v2": {
        "desc": "Ulaangom (rotes Land) liegt auf 939 Metern Höhe im Großen Seenbecken am Südufer des Uvs Nuur und ist seit 1925 Hauptstadt der Provinz Uvs. Die Stadt mit rund 27.000 Einwohnern liegt etwa 1.336 Kilometer westlich von Ulaanbaatar und nur 30 Kilometer von der russischen Grenze entfernt. Der nahegelegene Uvs Nuur, mit 3.350 Quadratkilometern Fläche der größte See der Mongolei, ist seit 2003 UNESCO-Welterbe und wegen seines hohen Salzgehalts (18,4 Promille) für viele Tiere unzugänglich. Das Klima von Ulaangom gilt als eines der extremsten der Welt mit einer Temperaturspanne von minus 50 bis plus 40 Grad. Die Region ist Heimat der Dörwöd, einer westmongolischen Volksgruppe. Ulaangom wurde 1757 als Kloster der Sangiin-Linie gegründet und entwickelte sich zur Verwaltungsstadt.",
        "facts": [
            "Bevölkerung rund 27.000 Einwohner",
            "Auf 939 Metern Höhe im Großen Seenbecken",
            "Hauptstadt der Provinz Uvs seit 1925",
            "30 Kilometer vom Uvs Nuur, größter See der Mongolei",
            "Uvs Nuur seit 2003 UNESCO-Welterbe",
            "Temperaturspanne von minus 50 bis plus 40 Grad",
            "Heimat der Dörwöd-Volksgruppe",
            "Ursprung als Kloster der Sangiin-Linie 1757",
        ],
    },
    "mn-arvaikheer-cities-v2": {
        "desc": "Arvaikheer liegt auf 1.913 Metern Höhe in der Steppe der Provinz Övörkhangai und ist seit 1942 deren Hauptstadt. Der Name bedeutet Gerstebraunes Pferd, abgeleitet von einem legendären lokalen Rennpferd. Die Stadt mit rund 26.000 Einwohnern liegt etwa 430 Kilometer südwestlich von Ulaanbaatar und dient als wichtiges Tor zur historischen Orchon-Tal-Region, einem UNESCO-Welterbe seit 2004. Etwa 138 Kilometer nordwestlich befinden sich die Ruinen von Karakorum, der Hauptstadt des Mongolischen Reiches unter Ögedei Khan ab 1235, und das berühmte Erdene Zuu-Kloster von 1585, das älteste buddhistische Kloster der Mongolei. Arvaikheer ist berühmt für seine Pferdezucht und das jährliche Naadam-Fest im Juli, bei dem traditionelle Pferderennen, Bogenschießen und Ringkampf abgehalten werden. Eine asphaltierte Straße verbindet die Stadt seit 2014 direkt mit Ulaanbaatar.",
        "facts": [
            "Bevölkerung rund 26.000 Einwohner",
            "Auf 1.913 Metern Höhe in der Steppe",
            "Hauptstadt der Provinz Övörkhangai seit 1942",
            "Name bedeutet Gerstebraunes Pferd nach Rennpferd",
            "138 Kilometer von den Karakorum-Ruinen entfernt",
            "Nahe dem Erdene Zuu-Kloster von 1585",
            "Orchon-Tal seit 2004 UNESCO-Welterbe",
            "Asphaltierte Straße nach Ulaanbaatar seit 2014",
        ],
    },
    "mn-tsetserleg-cities-v2": {
        "desc": "Tsetserleg (Garten) liegt auf 1.691 Metern Höhe an einem südlichen Hang des Khangai-Gebirges und ist seit 1923 Hauptstadt der Provinz Arkhangai. Die Stadt mit rund 21.000 Einwohnern gilt als eine der grünsten und schönsten Provinzhauptstädte der Mongolei. Über der Stadt erhebt sich der heilige Berg Bulgan, an dessen Fuß sich das 1586 gegründete Zayain-Kloster befindet, in dem heute das Provinzialmuseum Arkhangai mit über 5.000 Exponaten zur lokalen Geschichte und Kultur untergebracht ist. Das Kloster überstand die Säuberungen der 1930er Jahre, weil es als Lager genutzt wurde. Etwa 28 Kilometer westlich liegt die heiße Quelle von Tsenkher mit Temperaturen bis 86 Grad. Der nahegelegene Tariat-Vulkan und der Krater-See Khorgo sind beliebte touristische Ziele. Tsetserleg wurde 1631 als Klostersiedlung gegründet.",
        "facts": [
            "Bevölkerung rund 21.000 Einwohner",
            "Auf 1.691 Metern Höhe am Khangai-Gebirge",
            "Hauptstadt der Provinz Arkhangai seit 1923",
            "Zayain-Kloster seit 1586 mit über 5.000 Museumsexponaten",
            "Kloster überstand die Säuberungen der 1930er als Lager",
            "Heiße Quelle Tsenkher mit 86 Grad 28 Kilometer entfernt",
            "Nahe dem Khorgo-Krater und Tariat-Vulkan",
            "Stadtgründung 1631 als Klostersiedlung",
        ],
    },
    "mn-sukhbaatar-cities-v2": {
        "desc": "Sükhbaatar wurde 1940 am Zusammenfluss der Flüsse Orkhon und Selenge gegründet und ist nach dem mongolischen Revolutionshelden Damdiny Sükhbaatar (1893 bis 1923) benannt. Die Stadt mit rund 22.000 Einwohnern auf 626 Metern Höhe ist Hauptstadt der Provinz Selenge und der wichtigste Eisenbahn-Grenzbahnhof an der Transmongolischen Eisenbahn nach Russland. Etwa 312 Kilometer von Ulaanbaatar entfernt, liegt die Stadt nur 24 Kilometer von der russischen Grenzstadt Naushki entfernt. Die Selenge ist mit 1.024 Kilometern der längste Fluss der Mongolei und mündet in den russischen Baikalsee. Sükhbaatar war im 20. Jahrhundert wichtiges Tor für die sowjetische Wirtschaftshilfe an die Mongolei. Heute werden hier Holz, Mineralien und Konsumgüter umgeschlagen. Eine Brücke über die Selenge entstand 1939.",
        "facts": [
            "Gegründet 1940 als Eisenbahn-Grenzstadt",
            "Bevölkerung rund 22.000 Einwohner",
            "Auf 626 Metern Höhe am Selenge-Fluss",
            "Hauptstadt der Provinz Selenge",
            "Benannt nach dem Revolutionshelden Sükhbaatar (1893-1923)",
            "24 Kilometer von der russischen Grenze entfernt",
            "Selenge mit 1.024 Kilometern längster Fluss der Mongolei",
            "Wichtigster Bahn-Grenzübergang nach Russland",
        ],
    },
    "mn-dalanzadgad-cities-v2": {
        "desc": "Dalanzadgad (siebzig Brunnen) liegt auf 1.470 Metern Höhe am Nordrand der Wüste Gobi und ist seit 1942 Hauptstadt der Provinz Ömnögovi (Süd-Gobi). Die Stadt mit rund 25.000 Einwohnern dient als Tor zur Wüste Gobi und Ausgangspunkt für Expeditionen zum Gurvansaikhan-Nationalpark, der 1993 eingerichtet wurde und 27.000 Quadratkilometer umfasst. Hier befinden sich die singenden Sanddünen Khongoryn Els (180 Kilometer lang, bis 300 Meter hoch), die Eisschlucht Yolyn Am, die selbst im Sommer Eis enthält, sowie die berühmten Bayanzag-Klippen, an denen Roy Chapman Andrews 1922 die ersten Dinosauriereier der Welt entdeckte. Etwa 553 Kilometer südlich von Ulaanbaatar gelegen, ist Dalanzadgad seit 2014 mit einer asphaltierten Straße angebunden. Der lokale Flughafen verbindet zweimal wöchentlich mit der Hauptstadt.",
        "facts": [
            "Bevölkerung rund 25.000 Einwohner",
            "Auf 1.470 Metern Höhe am Nordrand der Gobi",
            "Hauptstadt der Provinz Ömnögovi seit 1942",
            "Name bedeutet siebzig Brunnen",
            "Tor zum Gurvansaikhan-Nationalpark (27.000 km²)",
            "Khongoryn Els: singende Dünen, 180 km lang, 300 m hoch",
            "Bayanzag-Klippen: Erste Dinosauriereier 1922 entdeckt",
            "Asphaltierte Straße nach Ulaanbaatar seit 2014",
        ],
    },
    "mn-sainshand-cities-v2": {
        "desc": "Sainshand (gute Wasserstelle) liegt auf 938 Metern Höhe in der Wüste Gobi und ist seit 1942 Hauptstadt der Provinz Dornogovi (Ost-Gobi). Mit rund 25.000 Einwohnern ist die Stadt ein wichtiger Knotenpunkt der Transmongolischen Eisenbahn auf halbem Weg zwischen Ulaanbaatar (463 km) und der chinesischen Grenze. Etwa 50 Kilometer südöstlich befindet sich das Khamariin-Kloster, das 1820 vom mongolischen Mystiker und Dichter Danzanravjaa (1803 bis 1856) gegründet wurde und nach den stalinistischen Säuberungen 1937 zerstört, ab den 1990er Jahren jedoch wiederaufgebaut wurde. Das Kloster gilt als spirituelles Energiezentrum und beherbergt das Shambala-Energiezentrum. Sainshand ist umgeben von trockener Wüstenlandschaft mit Saxaul-Wäldern und reich an Dinosaurierfossilien. Die Region produziert seit 2017 Uran und Kohle.",
        "facts": [
            "Bevölkerung rund 25.000 Einwohner",
            "Auf 938 Metern Höhe in der Ost-Gobi",
            "Hauptstadt der Provinz Dornogovi seit 1942",
            "Auf halbem Weg an der Transmongolischen Bahn",
            "Khamariin-Kloster 1820 von Danzanravjaa gegründet",
            "Shambala-Energiezentrum spirituelle Pilgerstätte",
            "Reich an Dinosaurierfossilien und Saxaul-Wäldern",
            "Uran- und Kohleabbau seit 2017",
        ],
    },
    "mn-zuunmod-cities-v2": {
        "desc": "Zuunmod (hundert Bäume) liegt auf 1.529 Metern Höhe nur 43 Kilometer südlich von Ulaanbaatar am Südhang des Bogd Khan Uul und ist seit 1942 Hauptstadt der Provinz Töv (Mitte). Die Stadt mit rund 17.000 Einwohnern bietet einen ruhigen Kontrast zur Hauptstadt und ist über eine asphaltierte Bergstraße erreichbar. Etwa 5 Kilometer westlich liegt das Manzushir-Kloster, das 1733 gegründet wurde, einst über 20 Tempel und 300 Mönche beherbergte und 1937 während der stalinistischen Säuberungen vollständig zerstört wurde. Heute steht ein einzelner restaurierter Tempel mit Museum. Der heilige Bogd Khan Uul (2.257 m) ist seit 1778 unter Naturschutz, gilt damit als ältestes Naturschutzgebiet der Welt und ist Heimat von Rotwild, Wölfen und Steinmardern. Zuunmod ist Zentrum landwirtschaftlicher Forschung mit der staatlichen Versuchsstation für Weizen- und Gemüseanbau.",
        "facts": [
            "Bevölkerung rund 17.000 Einwohner",
            "Auf 1.529 Metern Höhe südlich des Bogd Khan Uul",
            "Hauptstadt der Provinz Töv seit 1942",
            "Nur 43 Kilometer südlich von Ulaanbaatar",
            "Name bedeutet hundert Bäume",
            "Manzushir-Kloster 1733 gegründet, 1937 zerstört",
            "Bogd Khan Uul (2.257 m) seit 1778 Naturschutzgebiet",
            "Zentrum landwirtschaftlicher Forschung für Weizen",
        ],
    },
    "mn-uliastai-cities-v2": {
        "desc": "Uliastai liegt auf 1.760 Metern Höhe im Khangai-Gebirge am Bogdyn-Gol-Fluss und gehört mit Khovd zu den ältesten Städten der Mongolei. Die Stadt wurde 1733 von der Qing-Dynastie als wichtigste Mandschu-Garnison im Westen mit dem Namen Jiangjun yamen gegründet, um die nordwestlichen Reichsteile zu kontrollieren. Heute ist Uliastai mit rund 17.000 Einwohnern Hauptstadt der Provinz Zavkhan und liegt 984 Kilometer westlich von Ulaanbaatar. Während der Qing-Zeit waren hier permanent rund 3.000 Mandschu-Soldaten und chinesische Beamte stationiert. Die Stadt erlebte 1911 einen blutigen Aufstand gegen die Mandschu, der die Unabhängigkeit der Äußeren Mongolei einleitete. Heute prägen sowjetische Plattenbauten und ein orthodoxer Stadtkern das Bild. Die Winter sind extrem hart mit Temperaturen bis minus 45 Grad.",
        "facts": [
            "Gegründet 1733 als Mandschu-Garnison Jiangjun yamen",
            "Bevölkerung rund 17.000 Einwohner",
            "Auf 1.760 Metern Höhe im Khangai-Gebirge",
            "Hauptstadt der Provinz Zavkhan",
            "Während Qing-Zeit 3.000 Mandschu-Soldaten stationiert",
            "Aufstand 1911 leitete mongolische Unabhängigkeit ein",
            "984 Kilometer westlich von Ulaanbaatar",
            "Wintertemperaturen unter minus 45 Grad",
        ],
    },
    "mn-altai-cities-v2": {
        "desc": "Altai, früher Yesönbulag (neun Quellen), liegt auf 2.181 Metern Höhe am Nordrand der Gobi-Altai-Kette und ist eine der höchstgelegenen Städte der Mongolei. Seit 1940 ist sie Hauptstadt der Provinz Govi-Altai mit rund 18.000 Einwohnern und liegt 1.001 Kilometer südwestlich von Ulaanbaatar. Die Region zählt zu den abgelegensten und ärmsten Gebieten der Mongolei mit extrem trockenem Kontinentalklima und Niederschlägen unter 100 Millimetern pro Jahr. Im Süden erstreckt sich die Großgobi-A-Schutzzone, ein 4,4 Millionen Hektar großes Reservat, das Heimat der letzten wildlebenden Baktrischen Kamele (etwa 600 Tiere) und der Gobibären (Mazaalai) ist, von denen weltweit nur noch rund 40 Exemplare existieren. Die Stadt überstand 2002 ein schweres Erdbeben der Stärke 7,5 mit nur geringen Schäden.",
        "facts": [
            "Auf 2.181 Metern Höhe in den Gobi-Altai-Bergen",
            "Bevölkerung rund 18.000 Einwohner",
            "Hauptstadt der Provinz Govi-Altai seit 1940",
            "Früherer Name Yesönbulag (neun Quellen)",
            "Niederschläge unter 100 Millimeter pro Jahr",
            "Großgobi-A-Reservat mit 4,4 Millionen Hektar",
            "Heimat von rund 40 Gobibären (Mazaalai)",
            "Erdbeben der Stärke 7,5 im Jahr 2002 überstanden",
        ],
    },
    "mn-baruun-urt-cities-v2": {
        "desc": "Baruun-Urt (westlicher Wald) liegt auf 981 Metern Höhe in der östlichen Steppe der Mongolei und ist seit 1942 Hauptstadt der Provinz Sükhbaatar. Die Stadt mit rund 16.000 Einwohnern liegt 555 Kilometer südöstlich von Ulaanbaatar in einer der wichtigsten Steppenlandschaften des Landes. Hier ziehen mongolische Gazellen (Procapra gutturosa) in Herden von bis zu 30.000 Tieren über die unberührten Ebenen, eine der größten verbliebenen Migrationen der Welt. Etwa 18 Kilometer westlich liegt die Tsagaan-Tolgoi-Mine, eine der größten Zinkminen Asiens, die 2007 mit chinesischem Kapital eröffnet wurde und jährlich rund 95.000 Tonnen Zinkkonzentrat produziert. Die Region ist berühmt für ihre Pferdezucht und stellt zahlreiche Champions für das Naadam-Fest. Eine asphaltierte Straße erreicht die Stadt seit 2018.",
        "facts": [
            "Bevölkerung rund 16.000 Einwohner",
            "Auf 981 Metern Höhe in der östlichen Steppe",
            "Hauptstadt der Provinz Sükhbaatar seit 1942",
            "Mongolische Gazellen wandern in Herden bis 30.000 Tiere",
            "Tsagaan-Tolgoi-Zinkmine seit 2007 in Betrieb",
            "Jahresproduktion 95.000 Tonnen Zinkkonzentrat",
            "Berühmt für Naadam-Champion-Pferde",
            "Asphaltierte Straße aus Ulaanbaatar seit 2018",
        ],
    },
    "mn-mandalgovi-cities-v2": {
        "desc": "Mandalgovi (Gobi-Mandala) liegt auf 1.393 Metern Höhe im Übergangsbereich zwischen Steppe und Wüste Gobi und ist seit 1942 Hauptstadt der Provinz Dundgovi (Mittel-Gobi). Die Stadt mit rund 14.000 Einwohnern liegt 260 Kilometer südlich von Ulaanbaatar an der Hauptstraße zur Gobi und wurde 1942 künstlich als Verwaltungszentrum gegründet, da hier zuvor keine permanente Siedlung existierte. Die Stadt ist berühmt für ihren auffälligen weißen Sükhbaatar-Reiterstandbild und das Provinzialmuseum mit Dinosaurierfossilien aus der Kreidezeit. In der Umgebung befinden sich die berühmten Felsformationen von Baga Gazriin Chuluu (Granitberg, 1.751 m hoch), in denen sich Steinhöhlen mit buddhistischen Schnitzereien aus dem 17. Jahrhundert verbergen. Das Klima ist kontinental mit nur 130 Millimeter Jahresniederschlag und extremen Temperaturschwankungen.",
        "facts": [
            "Bevölkerung rund 14.000 Einwohner",
            "Auf 1.393 Metern Höhe in der Mittel-Gobi",
            "Hauptstadt der Provinz Dundgovi seit 1942",
            "1942 künstlich als Verwaltungszentrum gegründet",
            "260 Kilometer südlich von Ulaanbaatar",
            "Felsformationen Baga Gazriin Chuluu (1.751 m)",
            "Buddhistische Schnitzereien aus dem 17. Jahrhundert",
            "Jahresniederschlag nur 130 Millimeter",
        ],
    },
    "mn-bayankhongor-cities-v2": {
        "desc": "Bayankhongor (reicher Khongor) liegt auf 1.859 Metern Höhe am Tüin-Fluss und ist seit 1942 Hauptstadt der gleichnamigen Provinz. Die Stadt mit rund 27.000 Einwohnern liegt 630 Kilometer westlich von Ulaanbaatar und bildet eine ökologische Klammer zwischen den schneebedeckten Khangai-Gebirgsgipfeln (Otgontenger, 4.008 m) im Norden und der Wüste Gobi im Süden. Die Provinz beherbergt die berühmten Höhlenmalereien von Tsagaan Agui (Weiße Höhle), die zu den ältesten der Welt zählen und vor 33.000 bis 47.000 Jahren entstanden. Etwa 100 Kilometer südlich liegt das Heiße-Quellen-Gebiet von Shargaljuut mit über 100 Quellen und Temperaturen bis 92 Grad, das therapeutisch genutzt wird. Die Region ist reich an Dinosaurierfossilien, insbesondere Tarbosaurus bataar. Hauptwirtschaft sind Viehzucht und Goldgewinnung an den Flüssen.",
        "facts": [
            "Bevölkerung rund 27.000 Einwohner",
            "Auf 1.859 Metern Höhe am Tüin-Fluss",
            "Hauptstadt der Provinz Bayankhongor seit 1942",
            "Tsagaan-Agui-Höhlenmalereien 33.000 bis 47.000 Jahre alt",
            "Otgontenger-Gipfel (4.008 m) im Norden",
            "Heiße Quellen Shargaljuut bis 92 Grad",
            "Über 100 Thermalquellen für Therapie",
            "Dinosaurierfossilien von Tarbosaurus bataar",
        ],
    },
    "mn-bulgan-cities-v2": {
        "desc": "Bulgan (Zobel) liegt auf 1.208 Metern Höhe in einer fruchtbaren Waldsteppe am Achuut-Fluss und ist seit 1938 Hauptstadt der gleichnamigen Provinz. Die Stadt mit rund 13.000 Einwohnern wirkt mit ihren russisch-mongolischen Holzhäusern und gepflegten Gärten wie ein kleines Bilderbuch und unterscheidet sich vom typischen Steppenstadtbild. Etwa 320 Kilometer nordwestlich von Ulaanbaatar gelegen, ist Bulgan berühmt als Heimat von Jügderdemidiin Gürragchaa, dem ersten mongolischen Kosmonauten, der vom 22. März bis 30. März 1981 mit Sojus 39 zur sowjetischen Raumstation Saljut 6 flog und damit der erste Asiate im All wurde, der nicht aus China oder Vietnam stammte. Die Region ist Mongoliens wichtigstes Getreideanbaugebiet mit etwa 250.000 Hektar Weizenfeldern. In den umliegenden Lärchenwäldern leben Wölfe, Wildschweine und Rotwild.",
        "facts": [
            "Bevölkerung rund 13.000 Einwohner",
            "Auf 1.208 Metern Höhe in der Waldsteppe",
            "Hauptstadt der Provinz Bulgan seit 1938",
            "Heimat von Gürragchaa, erstem mongolischen Kosmonauten",
            "Gürragchaa flog 1981 mit Sojus 39 zur Saljut 6",
            "Mongoliens wichtigstes Weizenanbaugebiet",
            "Rund 250.000 Hektar Getreideanbau",
            "Russisch-mongolische Holzarchitektur prägt die Stadt",
        ],
    },
    "mn-choir-cities-v2": {
        "desc": "Choir liegt auf 1.281 Metern Höhe an der Transmongolischen Eisenbahn und ist seit 1994 Hauptstadt der kleinsten Provinz der Mongolei, Govisümber. Mit rund 9.000 Einwohnern ist Choir die kleinste Provinzhauptstadt des Landes. Die Stadt entstand in den 1970er Jahren als bedeutender sowjetischer Militärstützpunkt, an dem zur Spitzenzeit über 18.000 sowjetische Soldaten stationiert waren, sowie eine Flugbasis mit MiG-21-Geschwadern. Nach dem Abzug der sowjetischen Truppen 1992 brach die Bevölkerung von 30.000 auf unter 10.000 ein, viele Wohnblocks stehen seitdem leer. Wahrzeichen ist das Kosmonauten-Denkmal für Gürragchaa, eine 7,2 Meter hohe Stele aus den 1980er Jahren. Der Bahnhof Choir besitzt einen der längsten Bahnsteige der Welt mit 320 Metern Länge. Etwa 240 Kilometer südöstlich von Ulaanbaatar.",
        "facts": [
            "Bevölkerung rund 9.000 Einwohner",
            "Auf 1.281 Metern Höhe an der Transmongolischen Bahn",
            "Hauptstadt der kleinsten Provinz Govisümber seit 1994",
            "Sowjetischer Militärstützpunkt mit 18.000 Soldaten bis 1992",
            "Bevölkerung sank nach Truppenabzug von 30.000 auf 10.000",
            "Kosmonauten-Denkmal Gürragchaa, 7,2 Meter hoch",
            "Bahnsteig Choir mit 320 Metern besonders lang",
            "240 Kilometer südöstlich von Ulaanbaatar",
        ],
    },
    "mn-ondorkhaan-cities-v2": {
        "desc": "Öndörkhaan (hoher Khan), seit 2013 offiziell Chinggis City genannt, liegt auf 1.027 Metern Höhe am Kherlen-Fluss in den östlichen Khentii-Bergen und ist Hauptstadt der Provinz Khentii, der traditionellen Geburtsregion Dschingis Khans. Die Stadt mit rund 19.000 Einwohnern liegt 331 Kilometer östlich von Ulaanbaatar. Etwa 100 Kilometer nordwestlich befindet sich Deluun Boldog, der vermutete Geburtsort Dschingis Khans (geboren um 1162) am Onon-Fluss. In der Umgebung erstreckt sich der heilige Burkhan Khaldun (2.362 m), in dessen Nähe Dschingis Khan 1227 begraben wurde, dessen genauer Standort jedoch bis heute unbekannt ist. Öndörkhaan erlangte traurige Berühmtheit durch den Flugzeugabsturz vom 13. September 1971, bei dem der chinesische Marschall Lin Biao bei einem Fluchtversuch gegen Mao Zedong ums Leben kam.",
        "facts": [
            "Bevölkerung rund 19.000 Einwohner",
            "Auf 1.027 Metern Höhe am Kherlen-Fluss",
            "Hauptstadt der Provinz Khentii",
            "Seit 2013 offiziell Chinggis City benannt",
            "100 km vom Geburtsort Dschingis Khans entfernt",
            "Burkhan Khaldun (2.362 m), Grabregion Dschingis Khans 1227",
            "Lin-Biao-Flugzeugabsturz 13. September 1971",
            "331 Kilometer östlich von Ulaanbaatar",
        ],
    },
    "mn-zuunkharaa-cities-v2": {
        "desc": "Zuunkharaa liegt auf 880 Metern Höhe im fruchtbaren Tal des Kharaa-Flusses an der Transmongolischen Eisenbahn, etwa 175 Kilometer nördlich von Ulaanbaatar in der Provinz Selenge. Die Stadt mit rund 16.000 Einwohnern entstand in den 1940er Jahren als Eisenbahnerstadt und Holzverarbeitungszentrum. Die umliegenden Lärchen- und Kiefernwälder versorgten lange Zeit den gesamten mongolischen Holzbedarf. Zuunkharaa beherbergt die größte Wodka-Brennerei der Mongolei, die seit 1970 die staatliche Marke Genghis Khan Vodka produziert, die international mit zahlreichen Auszeichnungen versehen wurde. Die jährliche Produktion liegt bei etwa 4 Millionen Litern. Die Region ist außerdem ein wichtiges Anbaugebiet für Weizen, Gerste und Sonnenblumen. Im Sommer ist das Tal grün und üppig, im Winter sinken die Temperaturen auf bis zu minus 35 Grad.",
        "facts": [
            "Bevölkerung rund 16.000 Einwohner",
            "Auf 880 Metern Höhe im Kharaa-Tal",
            "175 Kilometer nördlich von Ulaanbaatar",
            "Größte Wodka-Brennerei der Mongolei seit 1970",
            "Genghis Khan Vodka international ausgezeichnet",
            "Jahresproduktion rund 4 Millionen Liter Wodka",
            "Wichtiges Anbaugebiet für Weizen und Sonnenblumen",
            "Eisenbahnerstadt seit den 1940er Jahren",
        ],
    },
    "mn-kharkhorin-cities-v2": {
        "desc": "Kharkhorin liegt auf 1.512 Metern Höhe am Orchon-Fluss im Herzen des historischen Orchon-Tals und steht direkt auf den Ruinen von Karakorum, der Hauptstadt des Mongolischen Weltreiches. Karakorum wurde 1220 von Dschingis Khan gegründet und 1235 von seinem Sohn Ögedei Khan ausgebaut, war jedoch nur bis 1264 Hauptstadt, als Kublai Khan den Sitz nach Khanbaliq (heute Peking) verlegte. 1380 wurde die Stadt von chinesischen Ming-Truppen vollständig zerstört. Die heutige Stadt mit rund 9.000 Einwohnern grenzt an das berühmte Erdene Zuu-Kloster, das 1585 vom Khalkha-Fürsten Abtai Sain Khan aus den Steinen Karakorums gebaut wurde und das älteste erhaltene buddhistische Kloster der Mongolei ist. Das Kloster überstand die Säuberungen 1937 und wurde 2004 mit dem Orchon-Tal UNESCO-Welterbe.",
        "facts": [
            "Bevölkerung rund 9.000 Einwohner",
            "Auf 1.512 Metern Höhe am Orchon-Fluss",
            "Steht auf den Ruinen Karakorums (gegründet 1220)",
            "Karakorum Hauptstadt des Mongolenreichs 1235 bis 1264",
            "Stadt 1380 von Ming-Truppen zerstört",
            "Erdene Zuu-Kloster seit 1585 erhalten",
            "Erdene Zuu aus Karakorum-Steinen gebaut",
            "UNESCO-Welterbe Orchon-Tal seit 2004",
        ],
    },
    "mn-bor-ondor-cities-v2": {
        "desc": "Bor-Öndör (brauner Hügel) liegt auf 1.180 Metern Höhe in der östlichen Steppe und ist eine reine Bergbaustadt im Khentii-Aimag. Die Siedlung wurde 1981 mit sowjetischer Hilfe gegründet, nachdem in der Nähe das gigantische Flussspat-Vorkommen Bor-Öndör entdeckt wurde, das zu den weltweit größten gehört. Die Mongolrostsvetmet-Gesellschaft, ein mongolisch-russisches Joint Venture seit 1973, betreibt hier eine Mine mit jährlicher Produktion von rund 600.000 Tonnen Flussspat-Konzentrat, was etwa 35 Prozent der mongolischen Flussspat-Produktion ausmacht. Die Stadt zählt rund 7.000 Einwohner, die fast ausschließlich vom Bergbau leben, und liegt 350 Kilometer südöstlich von Ulaanbaatar. Eine eigene Eisenbahnverbindung wurde 1986 fertiggestellt, um das Konzentrat über die Transmongolische Bahn nach Russland und China zu exportieren.",
        "facts": [
            "Gegründet 1981 als sowjetische Bergbausiedlung",
            "Bevölkerung rund 7.000 Einwohner",
            "Auf 1.180 Metern Höhe in der östlichen Steppe",
            "Eines der größten Flussspat-Vorkommen der Welt",
            "Jahresproduktion 600.000 Tonnen Flussspat-Konzentrat",
            "Mongolrostsvetmet-Joint-Venture seit 1973",
            "Eigene Eisenbahnverbindung seit 1986",
            "Etwa 35 Prozent der mongolischen Flussspat-Produktion",
        ],
    },
    "mn-sharyn-gol-cities-v2": {
        "desc": "Sharyngol (gelbes Tal) liegt auf 850 Metern Höhe im Sharyngol-Tal etwa 30 Kilometer östlich von Darkhan in der Provinz Darkhan-Uul. Die Stadt mit rund 8.000 Einwohnern wurde 1965 als sowjetische Plansiedlung für den Kohleabbau errichtet und hatte zur Spitzenzeit in den 1980er Jahren rund 15.000 Einwohner. Die Sharyngol-Tagebaumine ist mit jährlich 2,3 Millionen Tonnen Braunkohle eine der größten der Mongolei und versorgt die Wärmekraftwerke von Darkhan und Erdenet sowie Privathaushalte im Norden des Landes. Die Kohle hat einen niedrigen Heizwert von rund 3.500 kcal/kg, ist aber günstig zu fördern. Nach dem Zerfall der Sowjetunion 1990 verlor die Stadt rund die Hälfte ihrer Bevölkerung. Heute leidet Sharyngol unter Umweltproblemen durch Kohlestaub und Bodenkontamination.",
        "facts": [
            "Gegründet 1965 als sowjetische Bergbausiedlung",
            "Bevölkerung rund 8.000, 1980er noch 15.000",
            "Auf 850 Metern Höhe im Sharyngol-Tal",
            "30 Kilometer östlich von Darkhan",
            "Eine der größten Braunkohle-Tagebauminen der Mongolei",
            "Jahresproduktion 2,3 Millionen Tonnen Kohle",
            "Heizwert der Kohle rund 3.500 kcal/kg",
            "Bevölkerungsrückgang nach 1990 um etwa die Hälfte",
        ],
    },
    "mn-nalaikh-cities-v2": {
        "desc": "Nalaikh ist seit 1992 einer der neun Stadtbezirke von Ulaanbaatar und liegt auf 1.300 Metern Höhe etwa 35 Kilometer südöstlich des Stadtzentrums. Mit rund 33.000 Einwohnern war Nalaikh seit 1922 das wichtigste Kohlebergwerk für Ulaanbaatar und die einzige Versorgungsquelle der Hauptstadt mit Kohle bis in die 1990er Jahre. 1990 brach ein Schacht des staatlichen Bergwerks ein, 21 Bergarbeiter starben, und die Mine wurde stillgelegt. Seitdem betreiben Tausende Einwohner gefährlichen illegalen Kleinbergbau (ninjas) in selbst gegrabenen Schächten ohne Sicherheitsstandards, jährlich sterben rund 30 bis 50 Menschen bei Unfällen. Etwa 5 Kilometer entfernt steht das 40 Meter hohe Dschingis-Khan-Reiterstandbild von 2008, das größte Reiterstandbild der Welt. Nalaikh hat eine bedeutende kasachische Minderheit von rund 17 Prozent.",
        "facts": [
            "Bevölkerung rund 33.000 Einwohner",
            "Stadtbezirk von Ulaanbaatar seit 1992",
            "35 Kilometer südöstlich des Stadtzentrums",
            "Kohlemine seit 1922, Schachteinsturz 1990 mit 21 Toten",
            "Ninjas: gefährlicher illegaler Kleinbergbau",
            "Jährlich 30 bis 50 Tote bei Bergbau-Unfällen",
            "40 Meter hohes Dschingis-Khan-Reiterstandbild von 2008",
            "Kasachische Minderheit rund 17 Prozent",
        ],
    },
    "mn-tosontsengel-cities-v2": {
        "desc": "Tosontsengel liegt auf 1.724 Metern Höhe im Idermörön-Tal in den nördlichen Khangai-Bergen in der Provinz Zavkhan und gehört zu den kältesten ständig bewohnten Orten der Erde. Die Stadt mit rund 12.000 Einwohnern verzeichnete am 1. Januar 1973 einen Tiefstwert von minus 53,7 Grad Celsius, einen der niedrigsten je gemessenen Werte in einer mongolischen Siedlung. Im Sommer können die Temperaturen jedoch auf über 30 Grad steigen, was eine extreme Spanne von rund 85 Grad ergibt. Die Region ist von ausgedehnten Sibirischen Lärchenwäldern umgeben, die bis 60 Prozent der Provinz bedecken. Holzverarbeitung und Sägewerke sind die wichtigsten Wirtschaftszweige neben Viehzucht. Tosontsengel beherbergt einen kleinen Flughafen mit Saisonverbindungen nach Ulaanbaatar. Permafrost prägt den Untergrund.",
        "facts": [
            "Bevölkerung rund 12.000 Einwohner",
            "Auf 1.724 Metern Höhe im Idermörön-Tal",
            "Tiefstwert minus 53,7 Grad am 1. Januar 1973",
            "Eine der kältesten Siedlungen der Erde",
            "Temperaturspanne von rund 85 Grad zwischen Sommer und Winter",
            "Sibirische Lärchenwälder bedecken bis 60 Prozent der Provinz",
            "Holzverarbeitung und Sägewerke als Hauptindustrie",
            "Permafrost prägt den Untergrund der Region",
        ],
    },
    "mn-khutul-cities-v2": {
        "desc": "Khutul liegt auf 850 Metern Höhe im Tal des Eg-Flusses in der Provinz Selenge, etwa 240 Kilometer nördlich von Ulaanbaatar an der Hauptstraße A0301 zwischen Darkhan und Erdenet. Die Stadt mit rund 7.500 Einwohnern wurde 1982 als sowjetische Plansiedlung für die Zementindustrie errichtet und hat ihre Existenz dem reichen Vorkommen an Kalkstein in der unmittelbaren Umgebung zu verdanken. Das Khutul-Zementwerk, gebaut mit Hilfe der Tschechoslowakei und 1985 in Betrieb genommen, ist mit einer Jahreskapazität von rund 1 Million Tonnen Zement das größte der Mongolei und versorgt rund 70 Prozent des nationalen Bedarfs. 2010 wurde das Werk modernisiert und die Produktion verdoppelt. Die Stadt liegt strategisch günstig an der Bahnstrecke nach Erdenet und Darkhan.",
        "facts": [
            "Bevölkerung rund 7.500 Einwohner",
            "Auf 850 Metern Höhe im Eg-Tal",
            "Gegründet 1982 als sowjetische Industriesiedlung",
            "Größtes Zementwerk der Mongolei seit 1985",
            "Erbaut mit Hilfe der Tschechoslowakei",
            "Jahreskapazität rund 1 Million Tonnen Zement",
            "Versorgt 70 Prozent des nationalen Bedarfs",
            "240 Kilometer nördlich von Ulaanbaatar",
        ],
    },
    "mn-zamyn-uud-cities-v2": {
        "desc": "Zamyn-Üüd (Tor des Weges) liegt auf 968 Metern Höhe in der Wüste Gobi direkt an der chinesischen Grenze und ist seit 1955 der wichtigste Eisenbahn-Grenzübergang zwischen der Mongolei und China. Gegenüber liegt die chinesische Stadt Erlianhot in der Inneren Mongolei. Die Stadt mit rund 14.000 Einwohnern liegt 715 Kilometer südöstlich von Ulaanbaatar. Da die mongolische Eisenbahn die russische Breitspur (1.520 mm) und die chinesische die internationale Normalspur (1.435 mm) verwendet, müssen alle Waggons hier auf andere Drehgestelle umgesetzt werden, ein Vorgang, der etwa drei bis vier Stunden pro Zug dauert. Jährlich passieren rund 400.000 Tonnen Fracht und etwa 100.000 Reisende die Grenze. Seit 2014 besitzt die Stadt eine Freihandelszone mit zollfreien Geschäften und Hotels für Geschäftsreisende.",
        "facts": [
            "Bevölkerung rund 14.000 Einwohner",
            "Auf 968 Metern Höhe an der chinesischen Grenze",
            "Wichtigster Bahn-Grenzübergang seit 1955",
            "Spurwechsel von 1.520 mm auf 1.435 mm",
            "Spurwechsel dauert drei bis vier Stunden pro Zug",
            "Jährlich rund 400.000 Tonnen Fracht",
            "Freihandelszone seit 2014",
            "715 Kilometer südöstlich von Ulaanbaatar",
        ],
    },
}

src = FILE.read_text(encoding="utf-8")

def to_str_arr(items):
    parts = []
    for it in items:
        esc = it.replace("\\", "\\\\").replace('"', '\\"')
        parts.append('        "' + esc + '"')
    return "[\n" + ",\n".join(parts) + "\n      ]"

patched = 0
missing = []
for poi_id, data in DATA.items():
    desc_esc = data["desc"].replace("\\", "\\\\").replace('"', '\\"')
    facts_arr = to_str_arr(data["facts"])

    # Match the POI block from id to facts: { ... } closing brace, then the comma+closing brace of POI
    # Pattern: id: "X-cities-v2", ... facts: { ... \n    }\n  },
    # We want to insert advanced blocks AFTER facts: { ... } closing and BEFORE the "  }," that closes the POI.
    pattern = re.compile(
        r'(\{\s*\n\s*id:\s*"' + re.escape(poi_id) + r'",.*?facts:\s*\{[^{}]*?(?:\{[^{}]*?\}[^{}]*?)*\})(\s*\n\s*\},)',
        re.DOTALL
    )
    def repl(m):
        prefix = m.group(1)
        suffix = m.group(2)
        adv = ',\n    descriptionAdvanced: {\n      de: "' + desc_esc + '"\n    },\n    factsAdvanced: {\n      de: ' + facts_arr + '\n    }'
        return prefix + adv + suffix
    new_src, n = pattern.subn(repl, src)
    if n != 1:
        missing.append((poi_id, n))
    else:
        src = new_src
        patched += 1

FILE.write_text(src, encoding="utf-8")
print(f"Patched {patched}/{len(DATA)} POIs in {FILE.name}")
if missing:
    print("MISSING:", missing)
