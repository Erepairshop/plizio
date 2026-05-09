#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Fill descriptionAdvanced.de + factsAdvanced.de for Saudi Arabia history POIs."""
import re
from pathlib import Path

FILE = Path(__file__).resolve().parent.parent / "lib" / "visualLab" / "data" / "poiExtraSaudiArabiaHistoryV2.ts"

DATA = {
    "hegra-history-v2": {
        "desc": "Hegra (auch Madā'in Sālih) war die zweitgrößte Stadt des Nabatäerreichs nach Petra und blühte zwischen dem 1. Jahrhundert v. Chr. und dem 1. Jahrhundert n. Chr. an einem zentralen Knotenpunkt der Weihrauchstraße. Die Nabatäer schnitzten über 130 monumentale Felsengräber direkt in die Sandsteinfelsen, mit kunstvollen Fassaden, Inschriften in nabatäischer Schrift und Symbolen. Nach der römischen Annexion 106 n. Chr. unter Kaiser Trajan verlor Hegra an Bedeutung. Im Jahr 2008 wurde die Stätte als erstes UNESCO-Welterbe Saudi-Arabiens anerkannt und ist heute Herzstück der AlUla-Vision des Königreichs.",
        "facts": [
            "Über 130 monumentale Felsengräber aus Sandstein.",
            "Nabatäische Hauptstadt im Süden, Hauptstadt war Petra.",
            "106 n. Chr. von Kaiser Trajan dem Römischen Reich einverleibt.",
            "2008: Erstes UNESCO-Welterbe Saudi-Arabiens.",
            "Lag an der antiken Weihrauchstraße zwischen Südarabien und dem Mittelmeer.",
            "Inschriften in nabatäischer, lateinischer und griechischer Sprache erhalten.",
            "Im Koran als Stätte des Volkes Thamud erwähnt.",
            "Heute Schutzgebiet des Royal Commission for AlUla."
        ]
    },
    "masmak-fortress-history-v2": {
        "desc": "Die Masmak-Festung wurde 1865 unter Emir Abdul Rahman ibn Sulaiman ibn Dabaan erbaut und gilt als Geburtsort des modernen Saudi-Arabiens. Am 15. Januar 1902 stürmte der junge Abdulaziz ibn Saud mit nur 40 Männern die Festung, tötete den Raschidi-Gouverneur Ajlan und eroberte Riad zurück, was den Beginn der Gründung des Königreichs Saudi-Arabien (offiziell 1932) einleitete. Die Speerspitze, die in der Holztür steckenblieb, ist bis heute zu sehen. Heute beherbergt die Festung aus Lehmziegeln und Palmenholz ein Museum, das die Vereinigung des Königreichs dokumentiert.",
        "facts": [
            "1865 unter dem Raschidi-Gouverneur erbaut.",
            "15. Januar 1902: Abdulaziz ibn Saud erobert Riad zurück.",
            "Geburtsort des modernen Königreichs Saudi-Arabien (gegründet 1932).",
            "Die Speerspitze in der Tür ist bis heute sichtbar.",
            "Erbaut aus Lehmziegeln, Palmstämmen und Tamariskenholz.",
            "Vier Wachtürme und ein zentraler Hof.",
            "Seit 1995 als historisches Museum geöffnet.",
            "Liegt im Zentrum des alten Riad neben dem Justizpalast."
        ]
    },
    "at-turaif-diriyah-history-v2": {
        "desc": "At-Turaif in Diriyya wurde im 15. Jahrhundert gegründet und war ab 1744 die erste Hauptstadt des Hauses Saud sowie Geburtsort des Wahhabismus, als Mohammed ibn Saud das berühmte Bündnis mit dem Religionsgelehrten Mohammed ibn Abd al-Wahhab schloss. Diese politisch-religiöse Allianz prägt das Königreich bis heute. Der charakteristische Najdi-Baustil mit geometrischen Lehmziegelmustern entstand in dieser Epoche. 1818 wurde die Stadt von osmanisch-ägyptischen Truppen unter Ibrahim Pascha zerstört. Seit 2010 ist At-Turaif UNESCO-Welterbe und wurde aufwendig restauriert.",
        "facts": [
            "Gegründet im 15. Jahrhundert (um 1446).",
            "1744: Pakt zwischen Mohammed ibn Saud und Mohammed ibn Abd al-Wahhab.",
            "Erste Hauptstadt des Ersten Saudischen Staates.",
            "1818 von Ibrahim Pascha (Osmanisches Reich) zerstört.",
            "Charakteristischer Najdi-Baustil mit Lehmziegeln.",
            "UNESCO-Welterbe seit 2010.",
            "Salwa-Palast war Sitz der königlichen Familie.",
            "Heute Teil des Diriyah Gate Megaprojekts."
        ]
    },
    "al-ula-old-town-history-v2": {
        "desc": "Die Altstadt von Al-Ula liegt in einer fruchtbaren Oase und war über 800 Jahre, vom 12. bis ins 20. Jahrhundert, durchgehend bewohnt. Auf engstem Raum drängen sich rund 900 traditionelle Lehmziegelhäuser, fünf Stadttore und eine zentrale Moschee. Die Stadt war ein wichtiger Versorgungsstopp auf der Hadsch-Pilgerroute von Damaskus nach Mekka und Medina sowie auf der antiken Weihrauchstraße. Ihre strategische Lage in einem schmalen Tal zwischen rotem Sandstein und Dattelpalmen-Hainen machte sie zu einem Schutzort. In den 1980er Jahren zogen die Bewohner in moderne Häuser um.",
        "facts": [
            "Bewohnt vom 12. bis zum 20. Jahrhundert.",
            "Rund 900 Häuser aus Lehmziegeln auf engstem Raum.",
            "Fünf Stadttore, die nachts geschlossen wurden.",
            "Wichtiger Halt auf der Hadsch-Route nach Medina.",
            "Lag an der antiken Weihrauchstraße.",
            "In den 1980er Jahren verlassen.",
            "Aktuell Teil des AlUla-Restaurierungsprojekts.",
            "Berühmt für die Musa-bin-Nusayr-Festung über der Stadt."
        ]
    },
    "quba-mosque-history-v2": {
        "desc": "Die Qubāʾ-Moschee ist die erste in der Geschichte des Islam erbaute Moschee. Sie wurde 622 n. Chr. (Jahr 1 nach der Hidschra) vom Propheten Mohammed höchstpersönlich gegründet, als er von Mekka nach Medina auswanderte und vor dem Stadttor in Quba Halt machte. Mohammed legte selbst die ersten Steine, und der Koran erwähnt die Moschee in Sure 9, Vers 108. Nach prophetischer Überlieferung entspricht ein Gebet in der Quba-Moschee dem Lohn einer kleinen Pilgerfahrt (Umrah). Die heutige Struktur stammt aus den 1980er Jahren und fasst rund 20.000 Gläubige.",
        "facts": [
            "Erste Moschee der islamischen Geschichte (622 n. Chr.).",
            "Gegründet vom Propheten Mohammed selbst.",
            "Im Koran in Sure At-Tawba (9:108) erwähnt.",
            "Ein Gebet hier gilt als Lohn einer Umrah.",
            "Liegt 5 km südlich der Prophetenmoschee in Medina.",
            "Heutige Struktur seit 1986 (Architekt Abdel-Wahed El-Wakil).",
            "Vier Minarette, 56 Kuppeln.",
            "Fasst rund 20.000 Gläubige."
        ]
    },
    "uhud-battlefield-history-v2": {
        "desc": "Das Schlachtfeld von Uhud am Fuße des gleichnamigen Berges nördlich von Medina war Schauplatz der zweiten großen Schlacht des Islam am 23. März 625 n. Chr. (3. Jahr nach der Hidschra). Etwa 700 Muslime unter dem Propheten Mohammed standen rund 3.000 mekkanischen Quraisch unter Abu Sufyan gegenüber. Trotz anfänglichem muslimischen Erfolg führte das Verlassen einer strategischen Position durch Bogenschützen zu einer Niederlage. 70 Gefährten Mohammeds fielen, darunter sein Onkel Hamza ibn Abd al-Muttalib. Mohammed selbst wurde verwundet. Der Mârtyrer-Friedhof am Berg ist heute eine wichtige Pilgerstätte.",
        "facts": [
            "23. März 625 n. Chr. (Schawwal 3 AH).",
            "700 Muslime gegen 3.000 mekkanische Quraisch.",
            "Hamza ibn Abd al-Muttalib (Onkel des Propheten) fiel hier.",
            "70 muslimische Märtyrer, darunter führende Gefährten.",
            "Mohammed wurde im Gesicht verwundet, verlor zwei Zähne.",
            "Verlassen der Position durch Bogenschützen führte zur Niederlage.",
            "Berg Uhud gilt als 'Berg, der uns liebt und den wir lieben'.",
            "Wichtige Pilgerstätte mit Märtyrer-Friedhof."
        ]
    },
    "al-balad-jeddah-history-v2": {
        "desc": "Al-Balad ist das historische Herz von Dschidda und wurde im 7. Jahrhundert unter Kalif Uthman ibn Affan zum offiziellen Hafen für Mekka-Pilger erklärt, was die Stadt bis heute prägt. Die einzigartigen mehrstöckigen Korallenhäuser mit kunstvoll geschnitzten Holzerkern (Roshan) aus Teakholz sind eine Antwort auf das feuchte Rote-Meer-Klima und die internationale Mischung aus Hadsch-Pilgern aus aller Welt. Bis ins 19. Jahrhundert war Al-Balad von einer Stadtmauer umgeben. Berühmtestes Gebäude ist die Naseef-Villa, in der König Abdulaziz 1925 wohnte. Seit 2014 UNESCO-Welterbe.",
        "facts": [
            "Im 7. Jahrhundert unter Kalif Uthman zum Hadsch-Hafen erklärt.",
            "UNESCO-Welterbe seit 2014.",
            "Berühmt für Roshan-Holzerker aus Teakholz.",
            "Korallensteinhäuser von bis zu 7 Stockwerken.",
            "Naseef-Villa beherbergte 1925 König Abdulaziz.",
            "Bis 1947 von einer Stadtmauer umgeben.",
            "Tor zur heiligen Stadt Mekka (80 km östlich).",
            "Multiethnische Bevölkerung durch Pilgerströme."
        ]
    },
    "qatif-castle-history-v2": {
        "desc": "Die Burg von Qatif war eine gewaltige Festung in der gleichnamigen Oase am Persischen Golf, deren Ursprünge bis ins 3. Jahrhundert n. Chr. zurückreichen. Sie umschloss eine ganze Stadt mit Häusern, Moscheen, Märkten und Brunnen innerhalb ihrer dicken Mauern. Über die Jahrhunderte wurde die Festung von Sassaniden, Karmaten, Portugiesen (16. Jahrhundert) und Osmanen besetzt. Die Portugiesen unter Antonio Tenreiro bauten Teile im 16. Jahrhundert um. In den 1980er Jahren wurde die Burg im Rahmen der Stadtmodernisierung weitgehend abgerissen, nur Reste erinnern heute an ihre einstige Bedeutung als Knotenpunkt im Golfhandel.",
        "facts": [
            "Ursprünge im 3. Jahrhundert n. Chr.",
            "Umschloss eine ganze Stadt mit Moscheen und Märkten.",
            "Im 16. Jahrhundert von den Portugiesen umgebaut.",
            "Spätere osmanische Garnison.",
            "Eines der ältesten Bauwerke der östlichen Provinz.",
            "Wichtiger Hafen im Golfhandel mit Indien und Persien.",
            "In den 1980er Jahren weitgehend abgerissen.",
            "Heute nur noch Mauerreste und archäologische Funde."
        ]
    },
    "tarout-castle-history-v2": {
        "desc": "Die Burg Tarut steht auf einem 5.000 Jahre alten Tell auf der Insel Tarut im Persischen Golf, wo bereits in der Bronzezeit die Dilmun- und Phönizische Zivilisationen eine Siedlung gründeten. Die heutige Festungsstruktur wurde im 16. Jahrhundert von den Portugiesen unter Albuquerque erbaut, um den Seehandel zu kontrollieren. Sie übernahmen dabei ältere phönizische und sassanidische Fundamente. Die Burg liegt direkt über einer natürlichen Süßwasserquelle, die als heilig galt. Die Insel Tarut gilt als eine der ältesten kontinuierlich besiedelten Stätten der Arabischen Halbinsel, mit Funden, die bis ins 5. Jahrtausend v. Chr. zurückreichen.",
        "facts": [
            "Heutige Struktur im 16. Jahrhundert von Portugiesen erbaut.",
            "Auf Fundamenten aus dem 5. Jahrtausend v. Chr.",
            "Bronzezeitliche Dilmun-Kultur lebte hier.",
            "Liegt über einer heiligen Süßwasserquelle.",
            "Insel Tarut diente als Handelsknoten zu Mesopotamien.",
            "Fund einer 5.000 Jahre alten Statue (Tarut-Mann) hier.",
            "Älteste durchgehend bewohnte Stätte der Arabischen Halbinsel.",
            "Heute archäologisches Schutzgebiet."
        ]
    },
    "aarif-fort-history-v2": {
        "desc": "Die A'arif-Festung in Ha'il wurde vor etwa 200 Jahren auf einem Felshügel über der Stadt errichtet und diente als militärischer Beobachtungsposten und Verteidigungspunkt der Raschidi-Dynastie, die im 19. Jahrhundert ein Konkurrenzemirat zum Hause Saud bildete. Von hier aus konnten Wachen herannahende Karawanen oder feindliche Truppen über das gesamte Tal beobachten. Eine traditionelle Trommel auf dem Turm verkündete die Gebetszeiten, das Eintreffen von Gästen oder bevorstehende Gefahr. Nach dem Sieg von Abdulaziz ibn Saud über die Raschidis 1921 verlor die Festung ihre militärische Bedeutung und wurde zum historischen Wahrzeichen.",
        "facts": [
            "Erbaut vor etwa 200 Jahren (frühes 19. Jahrhundert).",
            "Auf einem Felshügel über Ha'il gelegen.",
            "Diente der Raschidi-Dynastie als Beobachtungsposten.",
            "Trommel verkündete Gebete und Gefahren.",
            "1921: Eroberung Ha'ils durch Abdulaziz ibn Saud.",
            "Älteste erhaltene Burg in Ha'il.",
            "Aus Lehmziegeln und Stein gebaut.",
            "Heute restauriert und für Besucher geöffnet."
        ]
    },
    "barzan-palace-history-v2": {
        "desc": "Der Barzan-Palast wurde 1808 von Abdullah ibn Ali al-Raschid, dem Gründer der Raschidi-Dynastie, in Ha'il errichtet und galt als eines der prächtigsten Bauwerke Zentralarabiens. Der gewaltige Lehmziegelpalast hatte mehrere Innenhöfe, Empfangshallen für Gäste und Stallungen für hunderte Pferde und Kamele. Er war Sitz der Raschidi-Emire, die im 19. Jahrhundert mit dem Hause Saud um die Vorherrschaft auf der Arabischen Halbinsel kämpften. Nach der Eroberung Ha'ils 1921 durch Abdulaziz ibn Saud wurde der Palast in den 1920er Jahren fast vollständig zerstört. Heute markieren nur Fundamentreste und Fotos seine einstige Größe.",
        "facts": [
            "1808 von Abdullah ibn Ali al-Raschid erbaut.",
            "Sitz der Raschidi-Dynastie.",
            "Mehrere Innenhöfe und Empfangshallen.",
            "Stallungen für hunderte Pferde und Kamele.",
            "Rivalisierte mit dem Hause Saud um die Halbinsel.",
            "1921: Ha'il fällt an Abdulaziz ibn Saud.",
            "In den 1920er Jahren fast vollständig zerstört.",
            "Heute nur Fundamentreste sichtbar."
        ]
    },
    "jubbah-rock-art-history-v2": {
        "desc": "Die Felszeichnungen von Jubbah (Jabal Umm Sinman) zählen zu den bedeutendsten prähistorischen Kunststätten weltweit und reichen bis etwa 5500 v. Chr. zurück, als die Region noch ein fruchtbares Seenland war. Auf den Sandsteinfelsen finden sich tausende eingravierte Bilder von Menschen, Wildrindern, Löwen, Steinböcken, Straußen und Jagdszenen, die das Leben der frühen arabischen Hirten- und Jägervölker dokumentieren. Spätere Inschriften zeigen die Entwicklung der frühen arabischen Schriften (Thamudisch, Nabatäisch). Die Stätte wurde 2015 zum UNESCO-Welterbe erklärt und bietet einen einzigartigen Einblick in die grüne Vergangenheit Arabiens.",
        "facts": [
            "UNESCO-Welterbe seit 2015 (mit Shuwaymis).",
            "Älteste Petroglyphen aus etwa 5500 v. Chr.",
            "Damals fruchtbares Seenland (Holozänes Klimaoptimum).",
            "Darstellungen von Wildrindern, Löwen, Straußen.",
            "Tausende eingravierter Bilder auf Sandsteinfelsen.",
            "Frühe thamudische und nabatäische Inschriften.",
            "Belegt die grüne Vergangenheit Arabiens.",
            "Liegt 90 km nordwestlich von Ha'il."
        ]
    },
    "marid-castle-history-v2": {
        "desc": "Die Burg Marid thront über der antiken Oase von Dumat al-Jandal im äußersten Norden Saudi-Arabiens und wurde erstmals im 1. Jahrhundert v. Chr. erwähnt, als die Königin Zenobia von Palmyra vergeblich versuchte, sie zu erobern. Daher der Name 'Marid' (der Rebellische). Die Festung kontrollierte eine entscheidende Karawanenroute zwischen Mesopotamien, der Levante und Arabien. Ihre charakteristischen konischen Wachtürme und die mächtigen Lehmziegelmauern auf Steinfundament wurden über die Jahrhunderte von Nabatäern, Römern, Byzantinern und Muslimen erweitert. Im Jahr 633 n. Chr. wurde die Region durch Khalid ibn al-Walid islamisiert.",
        "facts": [
            "Erstmals im 1. Jahrhundert v. Chr. erwähnt.",
            "Widerstand gegen Königin Zenobia von Palmyra.",
            "Name 'Marid' bedeutet 'der Rebellische'.",
            "Konische Wachtürme als architektonisches Markenzeichen.",
            "Kontrollierte Karawanenroute zwischen Levante und Arabien.",
            "633 n. Chr.: Eroberung durch Khalid ibn al-Walid.",
            "Lehmziegelmauern auf Steinfundament.",
            "Älteste Schichten reichen bis in nabatäische Zeit."
        ]
    },
    "omar-mosque-dumat-history-v2": {
        "desc": "Die Omar-ibn-al-Chattab-Moschee in Dumat al-Jandal gehört zu den ältesten erhaltenen Moscheen der Arabischen Halbinsel und wurde der Überlieferung nach im Jahr 638 n. Chr. von Kalif Omar ibn al-Chattab persönlich auf seiner Pilgerreise nach Jerusalem gegründet. Das fast 13 Meter hohe quadratische Minarett aus lokalem Stein ist eines der ältesten der islamischen Welt und einzigartig in seiner archaischen Form. Die einfache Bauweise mit dicken Lehmziegelmauern und Palmstamm-Dach reflektiert die frühislamische Architektur vor der Entwicklung des klassischen Moscheebaus. Die Moschee ist bis heute aktiv und dient den Bewohnern der Oase.",
        "facts": [
            "Erbaut 638 n. Chr. (17 AH).",
            "Gegründet vom Kalifen Omar ibn al-Chattab.",
            "Eine der ältesten Moscheen der Arabischen Halbinsel.",
            "Quadratisches Minarett, fast 13 Meter hoch.",
            "Frühislamische Architektur vor klassischem Moscheebau.",
            "Lehmziegelmauern auf Steinfundament.",
            "Liegt direkt neben der Burg Marid.",
            "Bis heute als aktive Moschee genutzt."
        ]
    },
    "al-ukhdud-history-v2": {
        "desc": "Die archäologische Stätte Al-Ukhdud nahe Najran war Hauptstadt des himjaritischen Königreichs ab dem 6. Jahrhundert v. Chr. und ein bedeutender Knoten der Weihrauchstraße zwischen Jemen und der Levante. Die Stadt erlangte tragische Berühmtheit durch das Massaker an christlichen Bürgern im Jahr 523 n. Chr. unter dem jüdischen König Dhu Nuwas, der hunderte Christen in Gräben (arabisch 'al-ukhdud') verbrennen ließ. Dieses Ereignis wird im Koran in Sure 85 (Al-Buruj) ausdrücklich erwähnt. Die Ruinen umfassen Stadtmauern, Häuser und Inschriften in altsüdarabischer Schrift, die das Leben einer multireligiösen Handelsmetropole bezeugen.",
        "facts": [
            "Bewohnt ab dem 6. Jahrhundert v. Chr.",
            "Hauptstadt des himjaritischen Königreichs.",
            "523 n. Chr.: Massaker an Christen unter Dhu Nuwas.",
            "Im Koran in Sure 85 (Al-Buruj) erwähnt.",
            "Wichtiger Halt auf der Weihrauchstraße.",
            "Inschriften in altsüdarabischer Schrift.",
            "Multireligiöse Stadt: Juden, Christen, Polytheisten.",
            "Heute Schutzgebiet der saudischen Antikenbehörde."
        ]
    },
    "al-muazzam-fort-history-v2": {
        "desc": "Die Burg Al-Muazzam wurde 1622 unter Sultan Murad IV. an der historischen syrischen Hadsch-Pilgerroute zwischen Damaskus und Medina errichtet. Sie diente als Schutz für die jährlichen Pilgerkarawanen mit zehntausenden Gläubigen, ihre Wasserquellen und Vorräte vor Beduinenüberfällen. Eine zentrale Zisterne sammelte Regenwasser, und ein osmanischer Kommandant mit etwa 30 Soldaten war dauerhaft stationiert. Die Festung ist Teil eines Netzwerks von 17 osmanischen Hadsch-Forts, die nach der Eroberung der heiligen Stätten 1517 entlang der Pilgerroute gebaut wurden. Mit dem Bau der Hedschasbahn 1908 verlor sie ihre Funktion.",
        "facts": [
            "1622 unter Sultan Murad IV. erbaut.",
            "An der syrischen Hadsch-Pilgerroute.",
            "Schutz vor Beduinenüberfällen.",
            "Große zentrale Zisterne für Pilgerkarawanen.",
            "Garnison von etwa 30 osmanischen Soldaten.",
            "Teil eines Netzwerks von 17 Hadsch-Forts.",
            "Verlor Funktion mit Hedschasbahn ab 1908.",
            "Heute archäologische Stätte in der Wüste Tabuk."
        ]
    },
    "tabuk-castle-history-v2": {
        "desc": "Die Burg von Tabuk wurde 1559 unter Sultan Süleyman dem Prächtigen als osmanischer Wachposten an der syrischen Hadsch-Route nach Medina errichtet. Sie schützte Pilgerkarawanen, die Brunnen von Tabuk und diente als Versorgungsstation. Die zweistöckige Festung mit eigener Moschee, Wachtürmen und Garnisonsräumen liegt an einem historisch bedeutsamen Ort: Bereits 630 n. Chr. führte der Prophet Mohammed die Tabuk-Expedition gegen die Byzantiner an, die als seine letzte Militärkampagne gilt. Die Festung wurde mehrfach restauriert (1064 AH, 1244 AH, 1370 AH) und beherbergt heute ein archäologisches Museum mit Funden aus der Region.",
        "facts": [
            "1559 unter Sultan Süleyman dem Prächtigen erbaut.",
            "An der syrischen Hadsch-Pilgerroute.",
            "Eigene Moschee im Inneren.",
            "Schützte die Brunnen von Tabuk.",
            "630 n. Chr.: Prophet Mohammeds Tabuk-Expedition.",
            "Mehrfach restauriert (1064, 1244, 1370 AH).",
            "Zweistöckige Struktur mit Wachtürmen.",
            "Heute archäologisches Museum."
        ]
    },
    "souq-okaz-history-v2": {
        "desc": "Souq Okaz nahe Taif war im 6. und frühen 7. Jahrhundert n. Chr. der berühmteste Markt im vorislamischen Arabien (Jahiliyya) und ein einzigartiges Kulturzentrum der Arabischen Halbinsel. Während der heiligen Monate trafen sich hier Stämme aus ganz Arabien zum Handel mit Datteln, Vieh, Sklaven und Waffen, vor allem aber zum jährlichen Poesiewettbewerb. Die besten Gedichte (Mu'allaqat, 'die Aufgehängten') sollen mit goldenen Buchstaben auf Stoff gestickt und an der Kaaba aufgehängt worden sein. Hier hörte auch der junge Mohammed berühmte Reden. Der Markt verlor mit dem Aufstieg des Islam nach 630 n. Chr. an Bedeutung. Heute findet jährlich ein Kulturfestival statt.",
        "facts": [
            "Aktiv im 6. und frühen 7. Jahrhundert n. Chr.",
            "Größter Markt im vorislamischen Arabien.",
            "Jährlicher Poesiewettbewerb der Mu'allaqat.",
            "Beste Gedichte angeblich an der Kaaba aufgehängt.",
            "Der junge Mohammed besuchte den Markt.",
            "Treffpunkt aller arabischen Stämme.",
            "Handel mit Datteln, Vieh, Waffen, Sklaven.",
            "Heute Schauplatz des Souq-Okaz-Festivals."
        ]
    },
    "al-rajajil-history-v2": {
        "desc": "Die stehenden Steine von Al Rajajil bei Sakaka stammen aus dem 4. Jahrtausend v. Chr. und gelten als das 'Stonehenge Saudi-Arabiens'. Auf einer Hochfläche stehen 54 Gruppen aufrecht aufgestellter Sandsteinpfeiler, jede aus 2 bis 19 Steinen mit Höhen bis zu 3 Metern. Ihre exakte Funktion ist bis heute Gegenstand archäologischer Forschung: Theorien reichen von astronomischen Beobachtungsstationen über Grabmarkierungen bis zu rituellen Versammlungsorten frühbronzezeitlicher Hirtenkulturen. Einige Steine tragen thamudische Inschriften aus späterer Zeit. Die Stätte ist etwa 6.000 Jahre alt und damit älter als die ägyptischen Pyramiden.",
        "facts": [
            "Datiert auf das 4. Jahrtausend v. Chr.",
            "54 Gruppen mit insgesamt rund 1.000 Steinen.",
            "Höhe einzelner Steine bis 3 Meter.",
            "Älter als die ägyptischen Pyramiden.",
            "Funktion unklar: Astronomie, Grab oder Ritual?",
            "Frühe thamudische Inschriften später hinzugefügt.",
            "Liegt 10 km südlich von Sakaka.",
            "Auch 'Stonehenge Saudi-Arabiens' genannt."
        ]
    },
    "ain-zubaydah-history-v2": {
        "desc": "Ain Zubaydah ist ein bemerkenswertes Aquädukt- und Kanalsystem aus dem 9. Jahrhundert, das von Prinzessin Zubaida bint Ja'far, der Lieblingsfrau des Abbasiden-Kalifen Harun ar-Raschid, finanziert wurde. Während ihrer Hadsch-Pilgerreise um 805 n. Chr. erkannte sie den verheerenden Wassermangel in Mekka und beauftragte einen 38 Kilometer langen unterirdischen Wasserkanal von den Quellen des Wadi Numan bis nach Mekka, der Pilger und Bewohner mit frischem Wasser versorgte. Die Konstruktion gilt als eines der größten Hydrobauwerke des frühen Islam und blieb über tausend Jahre in Betrieb. Sie wird im Volksmund bis heute als 'Quelle der Zubaida' verehrt.",
        "facts": [
            "Erbaut um 805-810 n. Chr. (9. Jahrhundert).",
            "Finanziert von Prinzessin Zubaida bint Ja'far.",
            "Frau des Abbasiden-Kalifen Harun ar-Raschid.",
            "Etwa 38 Kilometer langer unterirdischer Kanal.",
            "Versorgte Mekka und Hadsch-Pilger mit Wasser.",
            "Eines der größten Hydrobauwerke des frühen Islam.",
            "Über 1.000 Jahre in Betrieb.",
            "Bis heute als 'Quelle der Zubaida' verehrt."
        ]
    },
}


def main():
    text = FILE.read_text(encoding="utf-8")
    filled = 0
    skipped = 0
    for poi_id, content in DATA.items():
        # Find the POI block by id
        pattern = re.compile(
            r'(\{\s*\n?\s*id:\s*"' + re.escape(poi_id) + r'",.*?facts:\s*\{.*?\}\s*\n?\s*\})',
            re.DOTALL
        )
        m = pattern.search(text)
        if not m:
            print(f"NOT FOUND: {poi_id}")
            continue
        block = m.group(1)
        if "descriptionAdvanced" in block:
            print(f"SKIP (already filled): {poi_id}")
            skipped += 1
            continue

        desc = content["desc"].replace('"', '\\"')
        facts_arr = ", ".join('"' + f.replace('"', '\\"') + '"' for f in content["facts"])

        addition = (
            ',\n    descriptionAdvanced: { de: "' + desc + '" }'
            ',\n    factsAdvanced: { de: [' + facts_arr + '] }'
        )

        # Insert before the closing `}` of the POI block.
        # Block ends with `}\n  }` - we want to insert after the inner facts `}` and before outer `}`.
        # The captured block ends at outer `}`. We replace last `}` with addition + `\n  }`.
        new_block = block.rstrip()
        if new_block.endswith("}"):
            new_block = new_block[:-1].rstrip() + addition + "\n  }"
        text = text[:m.start()] + new_block + text[m.end():]
        filled += 1
        print(f"FILLED: {poi_id}")

    FILE.write_text(text, encoding="utf-8")
    print(f"\nDone: {filled} filled, {skipped} skipped, {len(DATA)} total.")


if __name__ == "__main__":
    main()
