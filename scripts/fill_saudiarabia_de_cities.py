# -*- coding: utf-8 -*-
"""Fill descriptionAdvanced.de + factsAdvanced.de for POIs in poiExtraSaudiArabiaCitiesV2.ts.

File currently has NO descriptionAdvanced/factsAdvanced for any POI.
Strategy: locate each POI block by id, find the end of `facts: { ... }`, then
insert `descriptionAdvanced: { de: "..." }` and `factsAdvanced: { de: [...] }`
right after the facts object.
"""
from __future__ import annotations
import re
import subprocess
from pathlib import Path

FILE = Path(r"C:\Users\User\plizio-repo\lib\visualLab\data\poiExtraSaudiArabiaCitiesV2.ts")

DATA: dict[str, dict] = {
    "riyadh-cities-v2": {
        "desc": (
            "Riad ist die Hauptstadt des Königreichs Saudi-Arabien und mit über 7,6 Millionen Einwohnern (2022) die größte Stadt der Arabischen Halbinsel. "
            "Die Stadt liegt auf dem zentralen Najd-Plateau auf rund 600 Metern Höhe. "
            "1744 schloss Muhammad ibn Saud im benachbarten Diriyya das Bündnis mit dem Religionsgelehrten Muhammad ibn Abd al-Wahhab, das den Grundstein des saudischen Staates legte. "
            "Am 14. Januar 1902 eroberte der spätere König Abd al-Aziz ibn Saud die Festung al-Masmak in Riad zurück, was als Beginn der Staatsgründung gilt. "
            "Mit der Proklamation des Königreichs Saudi-Arabien am 23. September 1932 wurde Riad offizielle Hauptstadt. "
            "Heute beherbergt die Stadt das 302 Meter hohe Kingdom Centre und das Königliche Diplomatenviertel."
        ),
        "facts": [
            "Hauptstadt seit der Proklamation des Königreichs am 23. September 1932",
            "Über 7,6 Millionen Einwohner im Großraum (2022)",
            "Auf dem Najd-Plateau auf rund 600 Metern Höhe",
            "Rückeroberung der Masmak-Festung am 14. Januar 1902 durch Ibn Saud",
            "Saudisch-wahhabitisches Bündnis 1744 in Diriyya geschlossen",
            "Kingdom Centre 302 Meter hoch, eröffnet 2002",
            "Diriyya (UNESCO-Welterbe seit 2010) liegt im Stadtgebiet",
            "Megaprojekt New Murabba mit 400-Meter-Würfel angekündigt",
        ],
    },
    "jeddah-cities-v2": {
        "desc": (
            "Dschidda liegt am Roten Meer und ist mit rund 4,7 Millionen Einwohnern die zweitgrößte Stadt Saudi-Arabiens sowie wichtigster Hafen des Königreichs. "
            "Die Stadt wurde laut Überlieferung 647 n. Chr. unter Kalif Uthman ibn Affan zum offiziellen Hafen für Pilger nach Mekka bestimmt, das nur rund 80 Kilometer entfernt liegt. "
            "Bis zur Eröffnung des Flughafens King Abdulaziz im Jahr 1981 erreichten praktisch alle Hadsch-Pilger das Land über Dschidda. "
            "Die historische Altstadt al-Balad mit ihren mehrstöckigen Korallenstein-Häusern und vorspringenden Holz-Erkern (Roshan) wurde 2014 zum UNESCO-Weltkulturerbe erklärt. "
            "Vor der Staatsgründung 1932 war Dschidda Hauptstadt des Königreichs Hedschas. "
            "Der 312 Meter hohe King Fahd Springbrunnen sprüht Wasser bis 260 Meter hoch."
        ),
        "facts": [
            "Rund 4,7 Millionen Einwohner, zweitgrößte Stadt des Königreichs",
            "Offizieller Pilgerhafen seit 647 n. Chr. unter Kalif Uthman",
            "Etwa 80 Kilometer westlich von Mekka",
            "Altstadt al-Balad seit 2014 UNESCO-Weltkulturerbe",
            "King Fahd Fountain mit Wasserstrahl bis 260 Meter Höhe",
            "Flughafen King Abdulaziz seit 1981 in Betrieb",
            "Bis 1925 Hauptstadt des Königreichs Hedschas",
            "Jeddah Tower (geplant über 1.000 Meter) im Bau seit 2013",
        ],
    },
    "mecca-cities-v2": {
        "desc": (
            "Mekka in der westsaudischen Hedschas-Region ist die heiligste Stadt des Islams und Geburtsort des Propheten Mohammed im Jahr 570 n. Chr. "
            "Die Stadt zählt rund 2 Millionen Einwohner, schwillt aber zur jährlichen Pilgerfahrt Hadsch im Monat Dhu l-Hiddscha auf 3 bis 4 Millionen Besucher an. "
            "Im Zentrum der Heiligen Moschee al-Masdschid al-Haram steht die etwa 15 Meter hohe würfelförmige Kaaba, die nach islamischer Überlieferung von Abraham und Ismail errichtet wurde. "
            "Mit der Eroberung Mekkas durch Mohammed im Jahr 630 n. Chr. wurde sie zum geistlichen Zentrum des Islams. "
            "Das Königreich Saudi-Arabien (gegründet 1932) trägt im offiziellen Königstitel den Beinamen Hüter der zwei heiligen Stätten. "
            "Der 601 Meter hohe Königliche Uhrenturm Abradsch al-Bait überragt seit 2012 die Heilige Moschee."
        ),
        "facts": [
            "Geburtsstadt des Propheten Mohammed im Jahr 570 n. Chr.",
            "Eroberung Mekkas durch Mohammed im Jahr 630 n. Chr.",
            "Rund 2 Millionen Einwohner, bis 4 Millionen während der Hadsch",
            "Kaaba im Zentrum der Heiligen Moschee al-Masdschid al-Haram",
            "Hadsch-Pilgerfahrt jährlich im Monat Dhu l-Hiddscha",
            "Königlicher Uhrenturm Abradsch al-Bait seit 2012, 601 Meter hoch",
            "Königstitel seit 1986: Hüter der zwei heiligen Stätten",
            "Zutritt für Nicht-Muslime traditionell verboten",
        ],
    },
    "medina-cities-v2": {
        "desc": (
            "Medina (al-Madina al-Munawwara, die erleuchtete Stadt) ist nach Mekka die zweitheiligste Stadt des Islams und liegt rund 340 Kilometer nördlich davon in der Provinz Medina. "
            "Die Stadt zählt etwa 1,5 Millionen Einwohner. "
            "Vor der Hidschra Mohammeds im Jahr 622 n. Chr. trug sie den Namen Yathrib. "
            "Die Hidschra (Auswanderung Mohammeds und seiner Anhänger von Mekka nach Medina) markiert den Beginn der islamischen Zeitrechnung. "
            "Im Zentrum steht die Prophetenmoschee al-Masdschid an-Nabawi, die Mohammed selbst nach seiner Ankunft errichtete und in der er 632 n. Chr. begraben wurde. "
            "Unter osmanischer Herrschaft (1517–1916) wurde die Moschee mehrfach erweitert. "
            "Mit der Eingliederung in das Königreich Saudi-Arabien 1932 unterstand Medina dem Hause Saud."
        ),
        "facts": [
            "Etwa 1,5 Millionen Einwohner",
            "Rund 340 Kilometer nördlich von Mekka",
            "Hidschra Mohammeds nach Yathrib im Jahr 622 n. Chr.",
            "Beginn der islamischen Zeitrechnung mit der Hidschra",
            "Grab des Propheten Mohammed in der Prophetenmoschee seit 632",
            "Osmanische Herrschaft von 1517 bis 1916",
            "Eingliederung in Saudi-Arabien 1932",
            "Zutritt zum Stadtzentrum nur für Muslime",
        ],
    },
    "dammam-cities-v2": {
        "desc": (
            "Dammam ist Hauptstadt der Ostprovinz (asch-Scharqiyya) und mit rund 1,5 Millionen Einwohnern (Großraum 4,5 Millionen) das Verwaltungszentrum der saudischen Erdölregion am Persischen Golf. "
            "Die Stadt verdankt ihren Aufstieg dem ersten kommerziellen Ölfund der Arabischen Halbinsel: Am 4. März 1938 stieß die Bohrung Dammam Nr. 7 in 1.441 Metern Tiefe auf Öl, was den Beginn der saudischen Erdölindustrie markierte. "
            "Das Konzessionsabkommen mit der Standard Oil of California war 1933 unter König Abd al-Aziz ibn Saud unterzeichnet worden. "
            "Aus der Konzession entstand die Aramco, heute Saudi Aramco mit Sitz im benachbarten Dhahran. "
            "Der König-Abdulaziz-Hafen, eröffnet 1949, ist der größte Hafen am Persischen Golf. "
            "Die Stadt bildet mit Dhahran und al-Khobar einen zusammenhängenden Ballungsraum."
        ),
        "facts": [
            "Hauptstadt der Ostprovinz mit rund 1,5 Millionen Einwohnern",
            "Erstes kommerzielles Erdöl in Saudi-Arabien am 4. März 1938 in Dammam Nr. 7",
            "Aramco-Konzession 1933 mit Standard Oil of California",
            "König-Abdulaziz-Hafen seit 1949 größter Hafen am Persischen Golf",
            "Bohrung Dammam Nr. 7 in 1.441 Metern Tiefe fündig",
            "Ballungsraum mit Dhahran und al-Khobar (rund 4,5 Mio. Einwohner)",
            "Zentrum der saudischen Erdölverwaltung",
            "King Fahd International Airport seit 1999"
        ],
    },
    "taif-cities-v2": {
        "desc": (
            "Ta'if liegt im Asir-Gebirge auf rund 1.870 Metern Höhe in der Provinz Mekka, etwa 80 Kilometer südöstlich der heiligen Stadt, und zählt rund 1 Million Einwohner. "
            "Wegen der angenehmen Sommertemperaturen dient Ta'if traditionell als Sommerresidenz der saudischen Königsfamilie und gilt als inoffizielle Sommerhauptstadt des Königreichs. "
            "Bereits in vorislamischer Zeit war Ta'if ein wichtiger Handelsplatz und Wallfahrtsort der arabischen Stämme. "
            "Im Jahr 630 n. Chr. unterwarf sich die Stadt Mohammed nach kurzer Belagerung. "
            "1924 eroberte Ibn Saud Ta'if im Vorfeld der Eingliederung des Hedschas in sein Reich. "
            "Im Mai 1934 wurde hier der Vertrag von Ta'if zwischen Saudi-Arabien und Jemen unterzeichnet. "
            "Berühmt ist die Region für die Damaszener-Rosen und die Herstellung von Rosenwasser."
        ),
        "facts": [
            "Auf rund 1.870 Metern Höhe im Asir-Gebirge",
            "Rund 1 Million Einwohner",
            "Inoffizielle Sommerhauptstadt der Königsfamilie",
            "80 Kilometer südöstlich von Mekka",
            "Vertrag von Ta'if mit Jemen im Mai 1934",
            "Eroberung durch Ibn Saud 1924",
            "Berühmt für Damaszener-Rosen und Rosenwasser",
            "Friedensabkommen für den Libanon 1989 ebenfalls hier unterzeichnet",
        ],
    },
    "tabuk-cities-v2": {
        "desc": (
            "Tabuk ist Hauptstadt der gleichnamigen Provinz im Nordwesten Saudi-Arabiens nahe der jordanischen Grenze und zählt rund 670.000 Einwohner. "
            "Die Stadt liegt auf einem Plateau auf rund 770 Metern Höhe und gehört zu den kühlsten Regionen des Königreichs mit gelegentlichem Schneefall im Winter. "
            "Bereits im Jahr 630 n. Chr. zog Mohammed mit einem Heer nach Tabuk, um die byzantinische Bedrohung abzuwehren; die Tabuk-Expedition (Ghazwat Tabuk) gilt als sein letzter großer Feldzug. "
            "Die Tabuk-Festung im Stadtzentrum wurde 1559 unter Sultan Süleyman I. errichtet und diente als Stützpunkt der Hedschas-Bahn (Eröffnung 1908), die Damaskus über Tabuk mit Medina verband. "
            "Die Provinz beherbergt das saudische Megaprojekt NEOM, das ab 2017 angekündigte 500 Milliarden Dollar teure Smart-City-Vorhaben am Roten Meer."
        ),
        "facts": [
            "Hauptstadt der Provinz Tabuk mit rund 670.000 Einwohnern",
            "Auf einem Plateau auf rund 770 Metern Höhe",
            "Tabuk-Expedition Mohammeds im Jahr 630 n. Chr.",
            "Tabuk-Festung 1559 unter Sultan Süleyman I. errichtet",
            "Hedschas-Bahn seit 1908 mit Bahnhof in Tabuk",
            "Gelegentlicher Schneefall im Winter",
            "NEOM-Megaprojekt seit 2017 in der Provinz angekündigt",
            "500 Milliarden US-Dollar geplantes NEOM-Investitionsvolumen",
        ],
    },
    "buraidah-cities-v2": {
        "desc": (
            "Buraida ist Hauptstadt der Region al-Qasim im Zentrum Saudi-Arabiens und zählt rund 750.000 Einwohner. "
            "Die Stadt liegt auf rund 600 Metern Höhe in der Wüstenebene des Najd, etwa 330 Kilometer nordwestlich von Riad. "
            "Ihr Aufstieg gründet auf der Bewässerungslandwirtschaft und der berühmten Dattelproduktion: Der Dattelmarkt von Buraida (Buraydah Dates Festival) wurde 2017 vom Guinness-Buch als größter Dattelmarkt der Welt bestätigt. "
            "Mit dem Anschluss an das saudische Eisenbahnnetz und die Hauptstraße Riad–Dammam gewann Buraida ab den 1950er Jahren wirtschaftlich an Bedeutung. "
            "Die Region al-Qasim wurde 1906 endgültig in das saudische Reich integriert, als Ibn Saud die rivalisierende Stadt Unaiza und Buraida unter seine Kontrolle brachte. "
            "Heute ist Buraida ein konservatives Zentrum mit traditioneller Lehmarchitektur in den umliegenden Dörfern."
        ),
        "facts": [
            "Hauptstadt der Region al-Qasim mit rund 750.000 Einwohnern",
            "Größter Dattelmarkt der Welt laut Guinness-Buch 2017",
            "Auf rund 600 Metern Höhe im Najd",
            "330 Kilometer nordwestlich von Riad",
            "Eingliederung in das saudische Reich 1906 unter Ibn Saud",
            "Wichtiges Bewässerungsgebiet mit Hunderttausenden Dattelpalmen",
            "Buraydah Dates Festival jährlich im Spätsommer",
            "Konservatives religiöses Zentrum des Königreichs",
        ],
    },
    "khamis-mushait-cities-v2": {
        "desc": (
            "Chamis Muschait liegt im Asir-Gebirge auf rund 2.000 Metern Höhe in der Provinz Asir und zählt rund 630.000 Einwohner. "
            "Die Stadt bildet mit der nahe gelegenen Provinzhauptstadt Abha einen Ballungsraum. "
            "Der Name leitet sich vom traditionellen Donnerstagsmarkt (arabisch chamis) der Stämme der Region ab. "
            "Die Eingliederung in das saudische Königreich erfolgte 1932 mit der Staatsgründung. "
            "Ihre besondere strategische Bedeutung verdankt die Stadt dem König-Khaled-Luftwaffenstützpunkt, einem der wichtigsten Stützpunkte der Royal Saudi Air Force, der 1965 errichtet wurde. "
            "Während des Zweiten Golfkriegs 1990/91 starteten von hier Einsätze der Anti-Irak-Koalition. "
            "Wegen des kühleren Bergklimas mit Sommertemperaturen unter 30 Grad ist Chamis Muschait auch beliebter Sommerausflugsort für Saudis aus den heißen Tieflandregionen."
        ),
        "facts": [
            "Auf rund 2.000 Metern Höhe im Asir-Gebirge",
            "Rund 630.000 Einwohner in der Provinz Asir",
            "Name vom traditionellen Donnerstagsmarkt (chamis)",
            "König-Khaled-Luftwaffenstützpunkt seit 1965",
            "Bedeutender Einsatzort im Zweiten Golfkrieg 1990/91",
            "Eingliederung ins Königreich Saudi-Arabien 1932",
            "Sommertemperaturen unter 30 Grad Celsius",
            "Bildet mit Abha einen zusammenhängenden Ballungsraum",
        ],
    },
    "abha-cities-v2": {
        "desc": (
            "Abha ist Hauptstadt der Provinz Asir im Südwesten Saudi-Arabiens und liegt auf rund 2.270 Metern Höhe in den Sarawat-Bergen, was sie zur höchstgelegenen Großstadt des Königreichs macht. "
            "Die Stadt zählt etwa 366.000 Einwohner. "
            "Wegen der angenehmen Sommertemperaturen um 25 Grad gilt Abha als Sommerausflugsziel für saudische Familien aus den heißen Regionen wie Riad und Dschidda. "
            "Die Region Asir wurde 1922 unter Ibn Saud erobert und 1932 endgültig dem neugegründeten Königreich Saudi-Arabien einverleibt. "
            "Der Asir-Nationalpark, gegründet 1981 als erster Nationalpark des Landes, umfasst 4.500 Quadratkilometer und schützt seltene Arten wie den arabischen Leoparden und Hamadryas-Paviane. "
            "Die traditionellen Qulas-Häuser mit ihren bunten geometrischen Wandmalereien (al-Qatt al-Asiri, UNESCO-Welterbe seit 2017) prägen die Architektur der Region."
        ),
        "facts": [
            "Höchstgelegene Großstadt Saudi-Arabiens auf rund 2.270 Metern",
            "Hauptstadt der Provinz Asir mit etwa 366.000 Einwohnern",
            "Asir-Nationalpark seit 1981, erster Nationalpark des Landes",
            "Nationalpark umfasst 4.500 Quadratkilometer",
            "Al-Qatt al-Asiri-Wandmalerei UNESCO-Welterbe seit 2017",
            "Sommertemperaturen um 25 Grad Celsius",
            "Eroberung durch Ibn Saud 1922",
            "Eingliederung ins Königreich 1932",
        ],
    },
    "al-hofuf-cities-v2": {
        "desc": (
            "Hofuf ist das städtische Zentrum der Oase al-Ahsa in der Ostprovinz Saudi-Arabiens und zählt rund 660.000 Einwohner. "
            "Die al-Ahsa-Oase ist mit über 2,5 Millionen Dattelpalmen die größte Palmenoase der Welt und seit 2018 UNESCO-Welterbe. "
            "Sie wird von rund 280 artesischen Quellen gespeist, die seit Jahrtausenden eine intensive Landwirtschaft ermöglichen. "
            "Die Region war seit der Bronzezeit besiedelt und gehörte später zum karmatischen Staat (899–1077). "
            "1913 eroberte Ibn Saud Hofuf von den Osmanen und gliederte die Region in sein Reich ein, was den Beginn der saudischen Kontrolle über die Ostprovinz markiert. "
            "1938 wurde nahe Hofuf in Dammam das erste saudische Erdöl gefunden. "
            "Die historische Festung Ibrahim aus osmanischer Zeit (1556) und der überdachte Qaisariah-Souq sind bedeutende Denkmäler."
        ),
        "facts": [
            "Rund 660.000 Einwohner im Zentrum der al-Ahsa-Oase",
            "Größte Palmenoase der Welt mit über 2,5 Millionen Dattelpalmen",
            "Al-Ahsa seit 2018 UNESCO-Welterbe",
            "Rund 280 artesische Quellen speisen die Oase",
            "Eroberung durch Ibn Saud 1913 von den Osmanen",
            "Festung Ibrahim seit 1556 aus osmanischer Zeit",
            "Karmatischer Staat in der Region 899 bis 1077",
            "Qaisariah-Souq als historischer überdachter Markt",
        ],
    },
    "al-mubarraz-cities-v2": {
        "desc": (
            "Al-Mubarraz liegt in der Oase al-Ahsa in der Ostprovinz Saudi-Arabiens, nur wenige Kilometer nördlich von Hofuf, und zählt rund 300.000 Einwohner. "
            "Beide Städte bilden zusammen die zweitgrößte Stadtagglomeration der Ostprovinz nach dem Ballungsraum Dammam. "
            "Die Stadt war historisch ein wichtiges Zentrum der schiitischen Bevölkerung der Region und besaß mehrere Lehmburgen, von denen die Schloss-Khuzam-Festung aus dem 19. Jahrhundert teilweise erhalten ist. "
            "Mit der Eroberung der Region durch Ibn Saud im Jahr 1913 wurde al-Mubarraz Teil des wachsenden saudischen Reiches und 1932 des neugegründeten Königreichs. "
            "Die Wirtschaft der Stadt basiert auf der Dattelproduktion in den umliegenden Palmenhainen, der Tierhaltung und zunehmend auf Dienstleistungen für die Erdölindustrie der Ostprovinz. "
            "Die al-Ahsa-Oase wurde 2018 UNESCO-Welterbe."
        ),
        "facts": [
            "Rund 300.000 Einwohner in der al-Ahsa-Oase",
            "Zwillingsstadt von Hofuf in der Ostprovinz",
            "Schloss-Khuzam-Festung aus dem 19. Jahrhundert",
            "Eroberung durch Ibn Saud 1913",
            "Bedeutendes Zentrum schiitischer Bevölkerung",
            "Al-Ahsa-Oase seit 2018 UNESCO-Welterbe",
            "Wirtschaft auf Dattelpalmen und Erdöldienstleistungen",
            "Eingliederung ins Königreich Saudi-Arabien 1932",
        ],
    },
    "hail-cities-v2": {
        "desc": (
            "Ha'il ist Hauptstadt der Provinz Ha'il im Norden Saudi-Arabiens und zählt rund 412.000 Einwohner. "
            "Die Stadt liegt auf rund 1.000 Metern Höhe zwischen den Aja- und Salma-Granitbergen am historischen Pilgerweg von Persien und Mesopotamien nach Mekka. "
            "Im 19. Jahrhundert war Ha'il Hauptstadt des mächtigen Emirats der Raschidi-Dynastie (1836–1921), die zeitweise mit dem rivalisierenden Haus Saud um die Herrschaft über die Arabische Halbinsel kämpfte. "
            "1921 eroberte Ibn Saud die Stadt, was den Untergang der Raschidi und einen entscheidenden Schritt zur Vereinigung Arabiens markierte. "
            "Die A'arif-Festung und der Barzan-Palast erinnern an diese Zeit. "
            "Im Umland von Ha'il liegen die UNESCO-Welterbestätten Dschubba und ar-Rāt, deren Felsbilder bis zu 10.000 Jahre alt sind. "
            "Seit 2008 findet hier jährlich die Rallye Ha'il statt."
        ),
        "facts": [
            "Hauptstadt der Provinz Ha'il mit rund 412.000 Einwohnern",
            "Auf rund 1.000 Metern zwischen Aja- und Salma-Bergen",
            "Hauptstadt des Raschidi-Emirats von 1836 bis 1921",
            "Eroberung durch Ibn Saud 1921",
            "UNESCO-Welterbe Dschubba und ar-Rāt mit bis zu 10.000 Jahre alten Felsbildern",
            "A'arif-Festung und Barzan-Palast als Wahrzeichen",
            "Rallye Ha'il seit 2008 jährlich",
            "Auf historischer Pilgerroute von Persien nach Mekka",
        ],
    },
    "najran-cities-v2": {
        "desc": (
            "Nadschran ist Hauptstadt der gleichnamigen Provinz im Südwesten Saudi-Arabiens an der jemenitischen Grenze und zählt rund 380.000 Einwohner. "
            "Die Stadt liegt im fruchtbaren Wadi Nadschran auf rund 1.300 Metern Höhe. "
            "Das nahe gelegene Al-Ukhdud (auch Raqmat) ist eine bedeutende archäologische Stätte mit Spuren einer Besiedlung seit dem 1. Jahrtausend v. Chr. und wird im Koran (Sure 85) im Zusammenhang mit der Märtyrerschaft der Christen von Nadschran 523 n. Chr. erwähnt, als der jüdische König Dhu Nuwas die christliche Gemeinde verfolgte. "
            "Die Region gehörte historisch zum Jemen und wurde nach dem saudisch-jemenitischen Krieg 1934 mit dem Vertrag von Ta'if dem Königreich Saudi-Arabien zugesprochen. "
            "Die traditionelle Lehmarchitektur mit dem Al-Aan-Palast und turmartigen Familienhäusern (mehrstöckig, bis 7 Etagen) prägt das Stadtbild bis heute."
        ),
        "facts": [
            "Hauptstadt der Provinz Nadschran mit rund 380.000 Einwohnern",
            "Im Wadi Nadschran auf rund 1.300 Metern Höhe",
            "Al-Ukhdud archäologische Stätte mit Bezug zur Sure 85",
            "Christenverfolgung 523 n. Chr. unter Dhu Nuwas",
            "Eingliederung ins Königreich nach Vertrag von Ta'if 1934",
            "Saudisch-jemenitischer Krieg 1934 entschied Zugehörigkeit",
            "Al-Aan-Palast als bedeutendes Lehmgebäude",
            "Turmartige Lehmhäuser mit bis zu sieben Etagen",
        ],
    },
    "al-jubail-cities-v2": {
        "desc": (
            "Al-Dschubail liegt am Persischen Golf in der Ostprovinz Saudi-Arabiens und zählt rund 380.000 Einwohner. "
            "Die ehemals kleine Fischerstadt wurde durch das königliche Dekret vom 21. September 1975 zur planmäßig errichteten Industriestadt erklärt; heute ist Jubail Industrial City eine der größten petrochemischen Industriezonen der Welt. "
            "Die staatliche Royal Commission for Jubail and Yanbu wurde eigens für den Aufbau gegründet. "
            "Die Stadt beherbergt das saudische SABIC-Konglomerat und über 30 Großchemieanlagen. "
            "Mit ihrem Tiefseehafen King Fahd Industrial Port (Kapazität über 80 Millionen Tonnen pro Jahr) ist al-Dschubail der wichtigste Industriehafen am Persischen Golf. "
            "Während des Zweiten Golfkriegs 1991 war die Stadt Hauptquartier der US-Marines. "
            "1986 wurden in einer nahen Bucht christliche Ruinen aus dem 4. Jahrhundert gefunden, die zu den ältesten Kirchen der Arabischen Halbinsel zählen."
        ),
        "facts": [
            "Königliches Dekret zur Industriestadt am 21. September 1975",
            "Rund 380.000 Einwohner in der Ostprovinz",
            "Eine der größten petrochemischen Zonen der Welt",
            "King Fahd Industrial Port mit Kapazität über 80 Millionen Tonnen",
            "Hauptquartier der US-Marines im Zweiten Golfkrieg 1991",
            "Royal Commission for Jubail and Yanbu eigens gegründet 1975",
            "Christliche Ruinen aus dem 4. Jahrhundert 1986 entdeckt",
            "Sitz wichtiger SABIC-Anlagen",
        ],
    },
    "al-kharj-cities-v2": {
        "desc": (
            "Al-Chardsch liegt rund 90 Kilometer südöstlich von Riad in der Provinz Riad und zählt rund 425.000 Einwohner. "
            "Die Region ist seit jahrhunderten ein bedeutendes landwirtschaftliches Zentrum auf dem Najd-Plateau dank tiefer natürlicher Kalksteinbrunnen, der sogenannten Dahl, die natürliches Grundwasser aus großer Tiefe an die Oberfläche bringen. "
            "König Abd al-Aziz ibn Saud (Regierungszeit 1932–1953) ließ in den 1930er und 1940er Jahren in al-Chardsch eine Modellfarm und mehrere Paläste errichten, darunter den noch heute erhaltenen al-Salam-Palast. "
            "Während des Zweiten Weltkriegs unterstützten amerikanische Berater unter dem Programm Lend-Lease den Aufbau der Landwirtschaft. "
            "Heute beherbergt al-Chardsch den größten Milchviehbetrieb des Nahen Ostens, die Almarai-Farm, mit über 100.000 Kühen. "
            "Der Prinz-Sultan-Luftwaffenstützpunkt wurde 1991 zentral für die US-Streitkräfte am Persischen Golf."
        ),
        "facts": [
            "Rund 425.000 Einwohner, 90 Kilometer südöstlich von Riad",
            "Natürliche Dahl-Kalksteinbrunnen aus großer Tiefe",
            "Modellfarm König Abd al-Aziz' in den 1930er und 1940er Jahren",
            "Al-Salam-Palast aus der Zeit des Staatsgründers",
            "Almarai-Farm als größter Milchbetrieb des Nahen Ostens",
            "Über 100.000 Kühe auf der Almarai-Farm",
            "Prinz-Sultan-Luftwaffenstützpunkt seit 1991 für US-Truppen",
            "US-amerikanische Lend-Lease-Hilfe im Zweiten Weltkrieg",
        ],
    },
    "yanbu-cities-v2": {
        "desc": (
            "Yanbu liegt am Roten Meer in der Provinz Medina und zählt mit dem Industriegebiet Yanbu al-Sinaiyya rund 332.000 Einwohner. "
            "Die historische Altstadt Yanbu al-Bahr war seit dem Altertum ein wichtiger Hafen und Versorgungspunkt der Pilgerkarawanen nach Medina. "
            "Lawrence von Arabien (T. E. Lawrence) hatte hier während der arabischen Revolte 1916/17 sein Hauptquartier. "
            "Mit königlichem Dekret vom 21. September 1975 wurde Yanbu, parallel zu al-Dschubail, zur planmäßig errichteten Industriestadt erklärt. "
            "Yanbu ist Endpunkt mehrerer Pipelines aus den östlichen Ölfeldern, darunter der 1.200 Kilometer langen Petroline (East-West-Pipeline), die seit 1981 saudisches Rohöl von Abqaiq nach Yanbu transportiert. "
            "Drei große Raffinerien und mehrere petrochemische Anlagen prägen den Hafen. "
            "Die Korallenriffe vor Yanbu zählen zu den schönsten Tauchgebieten am Roten Meer."
        ),
        "facts": [
            "Rund 332.000 Einwohner am Roten Meer",
            "Königliches Dekret zur Industriestadt am 21. September 1975",
            "Endpunkt der 1.200 km langen Petroline (East-West-Pipeline) seit 1981",
            "Hauptquartier von Lawrence von Arabien 1916/17",
            "Drei große Raffinerien und mehrere petrochemische Anlagen",
            "Historische Altstadt Yanbu al-Bahr als Pilgerhafen",
            "Wichtige Korallenriffe vor der Küste",
            "Alter Versorgungsort der Karawanen nach Medina",
        ],
    },
    "qatif-cities-v2": {
        "desc": (
            "Qatif liegt am Persischen Golf in der Ostprovinz Saudi-Arabiens und ist mit rund 524.000 Einwohnern eines der ältesten kontinuierlich bewohnten Siedlungsgebiete Ostarabiens, mit archäologischen Spuren bis ins 3. Jahrtausend v. Chr. (Dilmun-Kultur). "
            "Die Region war im 9.-11. Jahrhundert Teil des karmatischen Staates und stand später unter portugiesischer (1521–1551) und osmanischer Herrschaft. "
            "1913 eroberte Ibn Saud Qatif von den Osmanen und gliederte die Region in sein Reich ein. "
            "Die mehrheitlich schiitische Bevölkerung pflegt eigene religiöse und kulturelle Traditionen innerhalb des sunnitisch geprägten Königreichs. "
            "Die Wirtschaft basiert auf Dattelpalmen-Hainen, Fischerei mit langer Tradition im Persischen Golf sowie zunehmend auf der nahen Erdölindustrie der Ostprovinz. "
            "Die Qatif-Oase mit über 1 Million Dattelpalmen war jahrhundertelang ein wichtiger Stopp auf den Karawanenrouten."
        ),
        "facts": [
            "Rund 524.000 Einwohner am Persischen Golf",
            "Spuren der Dilmun-Kultur ab dem 3. Jahrtausend v. Chr.",
            "Karmatischer Staat von etwa 899 bis 1077",
            "Portugiesische Herrschaft von 1521 bis 1551",
            "Eroberung durch Ibn Saud 1913",
            "Mehrheitlich schiitische Bevölkerung",
            "Qatif-Oase mit über 1 Million Dattelpalmen",
            "Lange Fischerei-Tradition im Persischen Golf",
        ],
    },
    "arar-cities-v2": {
        "desc": (
            "Arar ist Hauptstadt der Provinz Nördliche Grenzen (al-Hudud asch-Schamaliyya) und zählt rund 192.000 Einwohner. "
            "Die Stadt entstand erst in den 1950er Jahren als Versorgungsstützpunkt entlang der Trans-Arabian Pipeline (TAPLINE), die von 1950 bis 1990 saudisches Rohöl von Qaisuma in der Ostprovinz über 1.214 Kilometer durch Jordanien und Syrien zum libanesischen Mittelmeerhafen Sidon transportierte. "
            "Eine ihrer Pumpstationen Nr. 5 wurde zum Kern der Stadt. "
            "Mit dem Anschluss an die Hauptstraße Riad–Bagdad und der Nähe zur irakischen Grenze (rund 55 Kilometer entfernt) entwickelte sich Arar zum wichtigen Grenzposten. "
            "Während des Zweiten Golfkriegs 1990/91 wurde die Pipeline endgültig stillgelegt. "
            "Heute ist Arar ein beliebtes Frühlingsausflugsziel der Saudis, da die umliegenden Steppenflächen nach den Winterregen für kurze Zeit blühen und zur Tradition des Wüstencampings einladen."
        ),
        "facts": [
            "Hauptstadt der Provinz Nördliche Grenzen mit rund 192.000 Einwohnern",
            "Gegründet in den 1950er Jahren als TAPLINE-Pumpstation Nr. 5",
            "Trans-Arabian Pipeline 1.214 Kilometer lang von Qaisuma nach Sidon",
            "TAPLINE in Betrieb von 1950 bis 1990",
            "Rund 55 Kilometer von der irakischen Grenze entfernt",
            "Beliebtes Frühlingsziel mit blühenden Steppen",
            "Tradition des Wüstencampings nach dem Winterregen",
            "Endgültige Stilllegung der TAPLINE im Zweiten Golfkrieg",
        ],
    },
    "sakakah-cities-v2": {
        "desc": (
            "Sakaka ist Hauptstadt der Region al-Dschauf im Norden Saudi-Arabiens und zählt rund 250.000 Einwohner. "
            "Die Stadt liegt auf rund 580 Metern Höhe in einer fruchtbaren Senke, die seit dem Altertum durch artesische Brunnen bewässert wird. "
            "Die Region al-Dschauf gehört zu den größten Olivenanbaugebieten des Königreichs, mit über 20 Millionen Olivenbäumen. "
            "Das Za'abal-Schloss aus Lehmziegeln auf einem Felshügel überragt die Stadt und stammt vermutlich aus dem 1. Jahrhundert v. Chr. "
            "Die archäologische Stätte Rajajil (auch das Stonehenge von Saudi-Arabien) liegt rund 10 Kilometer südwestlich und besteht aus rund 50 Gruppen aufrecht stehender Sandsteinpfeiler aus dem 4. Jahrtausend v. Chr. "
            "1922 wurde die Region durch das Bündnis mit Ibn Saud Teil des saudischen Reiches und 1932 des neuen Königreichs. "
            "In Sakaka steht außerdem die 2019 in Betrieb genommene 300-MW-Photovoltaikanlage Sakaka."
        ),
        "facts": [
            "Hauptstadt der Region al-Dschauf mit rund 250.000 Einwohnern",
            "Auf rund 580 Metern Höhe in einer fruchtbaren Senke",
            "Über 20 Millionen Olivenbäume in der Region",
            "Za'abal-Schloss vermutlich aus dem 1. Jahrhundert v. Chr.",
            "Rajajil als Stonehenge von Saudi-Arabien aus dem 4. Jahrtausend v. Chr.",
            "Eingliederung ins saudische Reich 1922",
            "Photovoltaikanlage Sakaka mit 300 MW seit 2019",
            "Artesische Brunnen seit dem Altertum",
        ],
    },
    "jizan-cities-v2": {
        "desc": (
            "Dschisan ist Hauptstadt der gleichnamigen Provinz im äußersten Südwesten Saudi-Arabiens am Roten Meer und zählt rund 157.000 Einwohner. "
            "Die Stadt liegt nahe der jemenitischen Grenze und ist Hauptumschlaghafen für die fruchtbare Tihama-Küstenebene, die zu den wichtigsten landwirtschaftlichen Regionen des Königreichs gehört, vor allem für tropische Früchte wie Papayas, Mangos und Bananen. "
            "Die Region wurde nach dem saudisch-jemenitischen Krieg 1934 mit dem Vertrag von Ta'if Saudi-Arabien zugesprochen. "
            "Vor der Küste liegen die Farasan-Inseln, ein 1989 ausgewiesenes Naturschutzgebiet von 700 Quadratkilometern, das die seltene Arabische Gazelle und große Mangrovenwälder schützt. "
            "Mit dem Megaprojekt Dschisan Economic City entsteht seit 2007 eine geplante neue Industriestadt, die Saudi Aramco betreibt. "
            "Die Raffinerie Jazan ging 2018 in Betrieb."
        ),
        "facts": [
            "Hauptstadt der Provinz Dschisan mit rund 157.000 Einwohnern",
            "Am Roten Meer nahe der jemenitischen Grenze",
            "Farasan-Inseln 700 Quadratkilometer Naturschutzgebiet seit 1989",
            "Eingliederung ins Königreich nach Vertrag von Ta'if 1934",
            "Tropischer Anbau von Papaya, Mango und Banane",
            "Schutz der Arabischen Gazelle in den Farasan-Inseln",
            "Jazan Economic City seit 2007 im Aufbau",
            "Raffinerie Jazan seit 2018 in Betrieb",
        ],
    },
    "al-qurayyat-cities-v2": {
        "desc": (
            "Al-Qurayyat liegt im äußersten Nordwesten Saudi-Arabiens in der Region al-Dschauf, nur wenige Kilometer von der jordanischen Grenze entfernt, und zählt rund 147.000 Einwohner. "
            "Die Stadt liegt auf rund 540 Metern Höhe in einer Region mit milderem Klima, das den Olivenanbau begünstigt. "
            "Al-Qurayyat war Drehscheibe der traditionellen Karawanenrouten von Damaskus nach Medina und beherbergt die Festung Kaf aus osmanischer Zeit. "
            "Die Region wurde 1922 durch Ibn Saud erobert und 1932 in das neugegründete Königreich Saudi-Arabien integriert. "
            "Wichtigster Wirtschaftszweig ist heute der Grenzhandel über den Übergang Halat Ammar nach Jordanien sowie die Salzgewinnung aus dem Salzsee Sabkhat al-Qurayyat. "
            "Die Region zählt zu den größten Olivenanbaugebieten Saudi-Arabiens. "
            "Im Stadtgebiet liegt der Bahnhof der historischen Hedschas-Bahn, die von 1908 bis 1916 Damaskus mit Medina verband."
        ),
        "facts": [
            "Rund 147.000 Einwohner an der jordanischen Grenze",
            "Auf rund 540 Metern Höhe in der Region al-Dschauf",
            "Festung Kaf aus osmanischer Zeit",
            "Grenzübergang Halat Ammar nach Jordanien",
            "Salzgewinnung aus dem Sabkhat al-Qurayyat",
            "Eroberung durch Ibn Saud 1922",
            "Hedschas-Bahn-Bahnhof aus den Jahren 1908 bis 1916",
            "Eines der größten Olivenanbaugebiete des Königreichs",
        ],
    },
    "dhahran-cities-v2": {
        "desc": (
            "Dhahran liegt in der Ostprovinz Saudi-Arabiens, Teil des Ballungsraums Dammam–Dhahran–al-Khobar, und zählt rund 152.000 Einwohner. "
            "Die Stadt ist Hauptsitz von Saudi Aramco, dem nach Marktwert wertvollsten Erdölunternehmen der Welt, das 1933 als California Arabian Standard Oil Company gegründet wurde. "
            "Am 4. März 1938 stieß die Bohrung Dammam Nr. 7 nahe Dhahran in 1.441 Metern Tiefe auf das erste kommerzielle Erdöl Saudi-Arabiens. "
            "1980 verstaatlichte Saudi-Arabien Aramco vollständig und benannte sie 1988 in Saudi Aramco um. "
            "Im Dezember 2019 ging das Unternehmen mit einem Börsenwert von rund 2 Billionen Dollar an die Börse von Riad. "
            "Das 2017 eröffnete König-Abdulaziz-Zentrum für Weltkultur (Ithra) ist eines der bedeutendsten Kulturzentren der arabischen Welt. "
            "Auch die King Fahd University of Petroleum and Minerals (gegründet 1963) hat hier ihren Sitz."
        ),
        "facts": [
            "Hauptsitz von Saudi Aramco mit rund 152.000 Einwohnern",
            "Erstes kommerzielles Erdöl Saudi-Arabiens am 4. März 1938",
            "Aramco-Gründung 1933 als California Arabian Standard Oil",
            "Vollständige Verstaatlichung 1980, Umbenennung 1988",
            "Aramco-Börsengang Dezember 2019 mit rund 2 Billionen Dollar Bewertung",
            "Ithra-Kulturzentrum seit 2017 geöffnet",
            "King Fahd University of Petroleum and Minerals seit 1963",
            "Bohrung Dammam Nr. 7 in 1.441 Metern Tiefe fündig",
        ],
    },
    "al-bahah-cities-v2": {
        "desc": (
            "Al-Baha ist Hauptstadt der gleichnamigen kleinsten Provinz Saudi-Arabiens und liegt im Asir-Gebirge auf rund 2.155 Metern Höhe; die Stadt zählt etwa 110.000 Einwohner. "
            "Sie ist umgeben von rund 40 Wäldern, darunter der Raghadan-Forst, was sie zu einem der grünsten Orte des Königreichs macht. "
            "Die Sommertemperaturen liegen selten über 25 Grad Celsius, was al-Baha zu einem beliebten Sommerausflugsziel saudischer Familien macht. "
            "Die Region war historisch von den Stämmen der Ghamid und Zahran besiedelt und wurde 1934 endgültig in das Königreich Saudi-Arabien integriert. "
            "Charakteristisch für die Region sind traditionelle mehrstöckige Steinhäuser mit Schieferdächern. "
            "Das nahe gelegene historische Dorf Dhee Ayn (Marmordorf) aus dem 9. Jahrhundert besteht aus rund 60 Steinhäusern, die auf einem Marmorhügel über einer ganzjährig fließenden Quelle thronen. "
            "Die Provinz beherbergt zudem den Schada-Berg auf 2.250 Metern."
        ),
        "facts": [
            "Hauptstadt der kleinsten Provinz Saudi-Arabiens mit rund 110.000 Einwohnern",
            "Auf rund 2.155 Metern Höhe im Asir-Gebirge",
            "Rund 40 Wälder umgeben die Stadt",
            "Sommertemperaturen selten über 25 Grad Celsius",
            "Eingliederung ins Königreich 1934",
            "Dhee Ayn Marmordorf aus dem 9. Jahrhundert",
            "Rund 60 Steinhäuser auf einem Marmorhügel in Dhee Ayn",
            "Stämme der Ghamid und Zahran historisch ansässig",
        ],
    },
    "tarut-cities-v2": {
        "desc": (
            "Die Insel Tarut liegt in der Bucht von Tarut im Persischen Golf, gegenüber der Stadt Qatif in der Ostprovinz, und ist mit rund 80.000 Einwohnern eines der am dichtesten besiedelten Gebiete Saudi-Arabiens. "
            "Die Insel zählt zu den ältesten dauerhaft bewohnten Orten der Arabischen Halbinsel mit archäologischen Spuren bis ins 5. Jahrtausend v. Chr. (Ubaid-Kultur), als hier ein wichtiger Hafen der Dilmun-Zivilisation lag. "
            "1515 eroberten die Portugiesen unter Manuel Mascarenhas die Insel und errichteten an der Stelle einer älteren Burganlage die heutige Tarut-Festung, die sie bis 1551 hielten, bevor die Osmanen folgten. "
            "1913 wurde Tarut durch Ibn Saud Teil des saudischen Reiches. "
            "Die Insel ist über mehrere Dammwege mit dem Festland verbunden und beherbergt traditionelle schiitische Gemeinden, die ihre eigenen Bräuche pflegen. "
            "Das Vorratsgut Lulu (eine Süßwasserquelle) bewässerte historisch die Palmenhaine."
        ),
        "facts": [
            "Rund 80.000 Einwohner auf der Insel Tarut",
            "Spuren der Ubaid-Kultur ab dem 5. Jahrtausend v. Chr.",
            "Wichtiger Dilmun-Hafen im 3. Jahrtausend v. Chr.",
            "Portugiesische Herrschaft von 1515 bis 1551",
            "Tarut-Festung 1515 von den Portugiesen errichtet",
            "Eingliederung ins saudische Reich durch Ibn Saud 1913",
            "Über mehrere Dammwege mit dem Festland verbunden",
            "Süßwasserquelle Lulu bewässerte historisch die Palmenhaine",
        ],
    },
    "al-khobar-cities-v2": {
        "desc": (
            "Al-Chubar liegt am Persischen Golf in der Ostprovinz Saudi-Arabiens, südlich von Dhahran und Dammam, und zählt rund 626.000 Einwohner. "
            "Bis zum Erdölfund 1938 war al-Chubar ein kleines Fischerdorf, das durch die Aktivitäten der Aramco zur modernen Geschäftsmetropole wuchs. "
            "Mit der Eröffnung des King Fahd Causeway am 25. November 1986 wurde al-Chubar über eine 25 Kilometer lange Brücken- und Dammverbindung mit dem Inselstaat Bahrain verbunden, was die Stadt zum wichtigen Tor zur Golfregion macht. "
            "Die Corniche-Promenade entlang der Bucht zählt zu den beliebtesten Freizeitorten der Ostprovinz. "
            "Während des Zweiten Golfkriegs traf am 25. Februar 1991 eine irakische Scud-Rakete eine US-Kaserne und tötete 28 amerikanische Soldaten. "
            "1996 wurde der amerikanische Wohnkomplex Khobar Towers Ziel eines Anschlags mit 19 Toten."
        ),
        "facts": [
            "Rund 626.000 Einwohner am Persischen Golf",
            "King Fahd Causeway nach Bahrain seit 25. November 1986",
            "25 Kilometer lange Brücken- und Dammverbindung",
            "Wachstum nach dem Erdölfund 1938",
            "Scud-Raketenangriff am 25. Februar 1991 mit 28 toten US-Soldaten",
            "Anschlag auf Khobar Towers 1996 mit 19 Toten",
            "Corniche-Promenade als Hauptfreizeitort",
            "Wichtigstes Tor zur Golfregion über Bahrain",
        ],
    },
    "al-khafji-cities-v2": {
        "desc": (
            "Al-Chafdschi liegt am Persischen Golf an der saudisch-kuwaitischen Grenze in der Ostprovinz und zählt rund 76.000 Einwohner. "
            "Die Stadt entstand 1957/58 mit dem Erdölfund in der saudisch-kuwaitischen Neutralen Zone, einem Sondergebiet, das 1922 mit dem Vertrag von Uqair zwischen Ibn Saud und dem britischen Hochkommissar in Bagdad geschaffen wurde, um die Beweidungsrechte der Stämme zu sichern. "
            "Die Aufteilung der Neutralen Zone wurde 1965 mit Saudi-Arabien und 1969 mit Kuwait vertraglich geregelt. "
            "Während des Zweiten Golfkriegs ereignete sich vom 29. Januar bis 1. Februar 1991 die Schlacht von al-Chafdschi, der erste größere Bodenkampf des Krieges, bei dem irakische Truppen die Stadt besetzten und durch saudisch-katar-amerikanische Streitkräfte zurückgeschlagen wurden. "
            "Heute fördert die Khafji Joint Operations rund 300.000 Barrel Rohöl pro Tag aus dem Wafra-Feld."
        ),
        "facts": [
            "Rund 76.000 Einwohner an der kuwaitischen Grenze",
            "Erdölfund in der Neutralen Zone 1957/58",
            "Vertrag von Uqair 1922 schuf die Neutrale Zone",
            "Aufteilung der Neutralen Zone 1965 (SA) und 1969 (KW)",
            "Schlacht von al-Chafdschi vom 29. Januar bis 1. Februar 1991",
            "Erster größerer Bodenkampf des Zweiten Golfkriegs",
            "Khafji Joint Operations fördern rund 300.000 Barrel Rohöl täglich",
            "Vergleichsweise unberührte Strände am Persischen Golf",
        ],
    },
    "hafar-al-batin-cities-v2": {
        "desc": (
            "Hafar al-Batin liegt im Wadi al-Batin im Nordosten Saudi-Arabiens, rund 90 Kilometer von der irakischen und kuwaitischen Grenze entfernt, und zählt rund 360.000 Einwohner. "
            "Der arabische Name Hafar (Brunnen) und Wadi al-Batin verweisen auf die alten, von Kalif Uthman ibn Affan im 7. Jahrhundert gegrabenen Brunnen, die die Karawanen auf dem Weg von Basra nach Mekka mit Wasser versorgten. "
            "Die Stadt liegt im trockenen Flussbett des Wadi al-Batin, das die historische Grenze zwischen den Stammesgebieten der Mutair und der Ajman markierte. "
            "Mit dem Aufbau der König-Khaled-Militärstadt (KKMC) in den 1980er Jahren, einer der größten Militärstädte Saudi-Arabiens, gewann Hafar al-Batin strategische Bedeutung als Hauptquartier der saudischen Nordregion. "
            "Während des Zweiten Golfkriegs 1990/91 war die Stadt zentraler Sammelpunkt der internationalen Koalitionstruppen, da von hier aus die Bodenoffensive zur Befreiung Kuwaits gestartet wurde."
        ),
        "facts": [
            "Rund 360.000 Einwohner im Wadi al-Batin",
            "Brunnen aus dem 7. Jahrhundert von Kalif Uthman gegraben",
            "Auf der historischen Karawanenroute Basra–Mekka",
            "König-Khaled-Militärstadt (KKMC) seit den 1980er Jahren",
            "Eine der größten Militärstädte Saudi-Arabiens",
            "Sammelpunkt der Koalitionstruppen 1990/91",
            "Etwa 90 Kilometer von der irakisch-kuwaitischen Grenze",
            "Stammesgrenze zwischen Mutair und Ajman",
        ],
    },
    "unayzah-cities-v2": {
        "desc": (
            "Unaiza ist die zweitgrößte Stadt der Region al-Qasim und zählt rund 165.000 Einwohner. "
            "Die Stadt liegt auf rund 720 Metern Höhe im Najd, etwa 30 Kilometer südwestlich von Buraida und rund 350 Kilometer nordwestlich von Riad. "
            "Im 19. Jahrhundert war Unaiza ein wichtiger Stopp der Karawanenrouten und ein bedeutendes Handelszentrum, wodurch ihre Kaufleute weit über die Region hinaus bekannt wurden. "
            "Wegen ihres relativen Wohlstands, ihrer Aufgeschlossenheit für Bildung und ihrer literarischen Tradition wurde sie als Paris von Najd bezeichnet. "
            "Die Eingliederung in das saudische Reich erfolgte 1906 unter Ibn Saud nach dem Sieg über die Raschidi. "
            "Die Region ist berühmt für ihre Datteln (besonders die Sorte Sukkari) und ihre traditionelle Lehmarchitektur, die in dem restaurierten al-Bassam-Haus aus dem 19. Jahrhundert beispielhaft erhalten ist. "
            "Aus Unaiza stammen zahlreiche bekannte saudische Dichter und Religionsgelehrte."
        ),
        "facts": [
            "Rund 165.000 Einwohner, zweitgrößte Stadt al-Qasims",
            "Auf rund 720 Metern Höhe im Najd",
            "Spitzname Paris von Najd wegen literarischer Tradition",
            "Eingliederung ins saudische Reich 1906 unter Ibn Saud",
            "Berühmt für die Dattelsorte Sukkari",
            "Al-Bassam-Haus aus dem 19. Jahrhundert restauriert",
            "Wichtige Karawanenstation im 19. Jahrhundert",
            "30 Kilometer südwestlich von Buraida",
        ],
    },
    "al-majmaah-cities-v2": {
        "desc": (
            "Al-Madschma'a liegt rund 180 Kilometer nordwestlich von Riad in der Provinz Riad und zählt rund 133.000 Einwohner. "
            "Die historische Stadt ist Hauptort der Region Sudair und war im 18. und 19. Jahrhundert eines der wichtigsten Verwaltungszentren der Najd-Region. "
            "Aus al-Madschma'a stammt der bedeutende saudische Religionsgelehrte und Geschichtsschreiber Uthman ibn Bischr (1795–1873), Autor der grundlegenden Chronik Unwan al-Madschd fi Tarich Najd zur Geschichte des ersten saudischen Staates. "
            "Mit der Konsolidierung des saudischen Reiches unter Ibn Saud zu Beginn des 20. Jahrhunderts wurde die Stadt fest in das wachsende Königreich integriert. "
            "Die restaurierte Festung al-Madschma'a aus dem 19. Jahrhundert ist heute Museum. "
            "Die 2009 gegründete Universität al-Madschma'a ist eine der jüngeren staatlichen Universitäten Saudi-Arabiens. "
            "Die Region ist berühmt für ihre Dattelpalmenhaine und das traditionelle Najdi-Handwerk."
        ),
        "facts": [
            "Rund 133.000 Einwohner, 180 Kilometer nordwestlich von Riad",
            "Hauptort der Region Sudair",
            "Geburtsort des Historikers Uthman ibn Bischr (1795 bis 1873)",
            "Festung al-Madschma'a aus dem 19. Jahrhundert als Museum",
            "Universität al-Madschma'a seit 2009",
            "Im 18. und 19. Jahrhundert wichtiges Verwaltungszentrum",
            "Tradition der Najdi-Handwerks",
            "Umgeben von Dattelpalmenhainen",
        ],
    },
}


def find_block_ranges(text: str) -> list[tuple[str, int, int]]:
    poi_pattern = re.compile(r'id:\s*"([^"]+)"')
    matches = list(poi_pattern.finditer(text))
    ranges = []
    for m in matches:
        poi_id = m.group(1)
        start = text.rfind("{", 0, m.start())
        depth = 0
        j = start
        while j < len(text):
            if text[j] == "{":
                depth += 1
            elif text[j] == "}":
                depth -= 1
                if depth == 0:
                    break
            j += 1
        end = j
        ranges.append((poi_id, start, end))
    return ranges


def find_facts_close(block: str) -> int:
    m = re.search(r'\bfacts\s*:\s*\{', block)
    if not m:
        return -1
    j = m.end()
    depth = 1
    while j < len(block) and depth > 0:
        if block[j] == "{":
            depth += 1
        elif block[j] == "}":
            depth -= 1
        j += 1
    return j


def list_to_ts_array(items: list[str]) -> str:
    parts = []
    for it in items:
        esc = it.replace("\\", "\\\\").replace('"', '\\"')
        parts.append(f'"{esc}"')
    return "[" + ", ".join(parts) + "]"


def main() -> None:
    src = FILE.read_text(encoding="utf-8")
    ranges = find_block_ranges(src)
    print(f"Found {len(ranges)} POI blocks")

    needs: list[str] = []
    for poi_id, s, e in ranges:
        block = src[s : e + 1]
        da = re.search(r'descriptionAdvanced\s*:\s*\{', block)
        if not da:
            needs.append(poi_id)
            continue
        body_start = da.end()
        depth = 1
        j = body_start
        while j < len(block) and depth > 0:
            if block[j] == "{":
                depth += 1
            elif block[j] == "}":
                depth -= 1
            j += 1
        body = block[body_start : j - 1]
        de_m = re.search(r'\bde\s*:\s*"([^"]*)"', body)
        if not de_m or not de_m.group(1).strip():
            needs.append(poi_id)
    print(f"Need filling: {len(needs)}")

    target = [pid for pid in needs if pid in DATA][:30]
    print(f"Will fill: {len(target)}")
    missing = [pid for pid in needs if pid not in DATA]
    if missing:
        print(f"No DATA for: {missing}")

    new_src = src
    filled = 0
    for poi_id, s, e in reversed(ranges):
        if poi_id not in target:
            continue
        entry = DATA[poi_id]
        block = new_src[s : e + 1]
        fc = find_facts_close(block)
        if fc < 0:
            print(f"WARN: no facts in {poi_id}")
            continue
        desc_de = entry["desc"].replace("\\", "\\\\").replace('"', '\\"')
        facts_arr = list_to_ts_array(entry["facts"])
        insertion = (
            ',\n    descriptionAdvanced: {\n      de: "'
            + desc_de
            + '"\n    },\n    factsAdvanced: {\n      de: '
            + facts_arr
            + "\n    }"
        )
        new_block = block[:fc] + insertion + block[fc:]
        new_src = new_src[:s] + new_block + new_src[e + 1 :]
        filled += 1
        print(f"  + {poi_id}")

    FILE.write_text(new_src, encoding="utf-8")
    print(f"\nFilled {filled}/{len(target)} POIs in {FILE.name}")


if __name__ == "__main__":
    main()
