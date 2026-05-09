# -*- coding: utf-8 -*-
"""Fill descriptionAdvanced.de + factsAdvanced.de for POIs in poiExtraJordanCitiesV2.ts.

Insert descriptionAdvanced and factsAdvanced after the existing facts: { ... } block.
Skip POIs that already have a non-empty descriptionAdvanced.de.
"""
from __future__ import annotations
import re
from pathlib import Path

FILE = Path(r"C:\Users\User\plizio-repo\lib\visualLab\data\poiExtraJordanCitiesV2.ts")

DATA: dict[str, dict] = {
    "amman-cities-v2": {
        "desc": (
            "Amman ist die Hauptstadt Jordaniens und mit rund 4,5 Millionen Einwohnern in der Metropolregion die mit Abstand größte Stadt des Landes. "
            "In der Antike trug die Siedlung den ammonitischen Namen Rabbat Ammon und wurde im 3. Jahrhundert v. Chr. unter Ptolemaios II. Philadelphus in Philadelphia umbenannt. "
            "Sie war eine der zehn Städte der römischen Dekapolis und beherbergt bis heute ein gut erhaltenes römisches Theater von rund 165 n. Chr. mit 6.000 Plätzen sowie die Zitadelle (Jabal al-Qalʿa) mit dem Herkulestempel. "
            "Während des britischen Mandats (1921–1946) wählte Emir Abdullah I. Amman 1921 zur Hauptstadt des Emirats Transjordanien, ab 1946 dann des Königreichs Jordanien. "
            "Die Stadt erstreckt sich heute über 19 Hügel und ist wirtschaftliches sowie politisches Zentrum des Landes."
        ),
        "facts": [
            "Etwa 4,5 Millionen Einwohner in der Metropolregion",
            "Antiker Name Rabbat Ammon, später Philadelphia ab dem 3. Jahrhundert v. Chr.",
            "Mitglied der römischen Dekapolis",
            "Römisches Theater aus dem Jahr 165 n. Chr. mit 6.000 Plätzen",
            "Zitadelle mit Herkulestempel auf dem Jabal al-Qalʿa",
            "Hauptstadt des Emirats Transjordanien seit 1921",
            "Britisches Mandat 1921 bis 1946",
            "Stadt erstreckt sich über 19 Hügel (Jabal)",
        ],
    },
    "zarqa-cities-v2": {
        "desc": (
            "Zarqa ist mit rund 1,4 Millionen Einwohnern die zweitgrößte Stadt Jordaniens und liegt rund 25 Kilometer nordöstlich von Amman am gleichnamigen Fluss. "
            "Der Name bedeutet auf Arabisch die Blaue und bezieht sich auf den Zarqa-Fluss, einen Nebenfluss des Jordan. "
            "Die moderne Stadt wurde 1902 von tschetschenischen Flüchtlingen gegründet, die vor der russischen Eroberung des Kaukasus geflohen waren und sich unter osmanischem Schutz ansiedelten. "
            "Während des britischen Mandats (1921–1946) errichtete die Arabische Legion unter Glubb Pascha hier ihr Hauptquartier, was die Entwicklung beschleunigte. "
            "Heute ist Zarqa das wichtigste Industriezentrum des Landes mit der größten Erdölraffinerie Jordaniens, eröffnet 1961 und mit einer Kapazität von rund 100.000 Barrel pro Tag. "
            "Ein erheblicher Teil der Einwohner sind palästinensische Flüchtlinge oder deren Nachkommen."
        ),
        "facts": [
            "Etwa 1,4 Millionen Einwohner, zweitgrößte Stadt Jordaniens",
            "25 Kilometer nordöstlich von Amman",
            "Gegründet 1902 von tschetschenischen Flüchtlingen",
            "Hauptquartier der Arabischen Legion im britischen Mandat 1921 bis 1946",
            "Größte Erdölraffinerie Jordaniens, eröffnet 1961",
            "Raffineriekapazität rund 100.000 Barrel pro Tag",
            "Bedeutender Anteil palästinensischer Flüchtlinge",
            "Name bedeutet die Blaue auf Arabisch",
        ],
    },
    "irbid-cities-v2": {
        "desc": (
            "Irbid ist mit rund 600.000 Einwohnern die drittgrößte Stadt Jordaniens und liegt rund 85 Kilometer nördlich von Amman im fruchtbaren Hochland nahe der syrischen Grenze. "
            "In der Antike trug die Siedlung den Namen Arbila oder Arabella und gehörte zur Dekapolis, der Zehnstadtevereinigung im Osten des Römischen Reiches. "
            "Archäologische Funde belegen eine Besiedlung seit der Bronzezeit um 3000 v. Chr. "
            "Die Stadt ist heute das wichtigste Bildungszentrum Jordaniens: Die Yarmouk-Universität wurde 1976 gegründet und zählt rund 40.000 Studierende, dazu kommen die Jordan University of Science and Technology von 1986 und mehrere private Hochschulen. "
            "Während des britischen Mandats (1921–1946) wurde Irbid zum Verwaltungssitz im Norden ausgebaut. "
            "Die umliegende Region ist berühmt für Olivenanbau und Weizenproduktion."
        ),
        "facts": [
            "Etwa 600.000 Einwohner, drittgrößte Stadt Jordaniens",
            "85 Kilometer nördlich von Amman",
            "Antiker Name Arbila beziehungsweise Arabella in der Dekapolis",
            "Besiedlung seit der Bronzezeit um 3000 v. Chr.",
            "Yarmouk-Universität gegründet 1976 mit rund 40.000 Studierenden",
            "Jordan University of Science and Technology seit 1986",
            "Britisches Mandat 1921 bis 1946",
            "Wichtige Region für Olivenanbau und Weizen",
        ],
    },
    "aqaba-cities-v2": {
        "desc": (
            "Aqaba ist mit rund 150.000 Einwohnern die einzige Hafenstadt Jordaniens und liegt am Golf von Aqaba am Roten Meer, rund 330 Kilometer südlich von Amman. "
            "Die Region war bereits im 4. Jahrtausend v. Chr. besiedelt; die antike Siedlung Aila wurde von Edomitern, Nabatäern und Römern bewohnt und war ein wichtiger Handelsknoten an der Weihrauchstraße. "
            "Die Mamluken-Festung von Aqaba wurde im frühen 16. Jahrhundert (um 1510–1517) erbaut und unter den Osmanen erweitert. "
            "Während des Ersten Weltkriegs eroberten arabische Truppen unter Scherif Hussein und mit Unterstützung von T. E. Lawrence (Lawrence von Arabien) Aqaba am 6. Juli 1917 von den Osmanen. "
            "Während des britischen Mandats (1921–1946) wurde Aqaba zum strategischen Hafen ausgebaut. "
            "Seit 2001 ist die Stadt eine Sonderwirtschaftszone (ASEZA) mit Steuervergünstigungen, was Tourismus und Logistik stark fördert."
        ),
        "facts": [
            "Etwa 150.000 Einwohner, einziger Seehafen Jordaniens",
            "330 Kilometer südlich von Amman am Roten Meer",
            "Antike Siedlung Aila an der Weihrauchstraße",
            "Mamluken-Festung erbaut um 1510 bis 1517",
            "Eroberung durch arabische Truppen am 6. Juli 1917",
            "Britisches Mandat 1921 bis 1946",
            "Sonderwirtschaftszone ASEZA seit 2001",
            "Beliebtes Tauchziel mit Korallenriffen",
        ],
    },
    "russeifa-cities-v2": {
        "desc": (
            "Russeifa liegt zwischen Amman und Zarqa und zählt mit rund 500.000 Einwohnern als viertgrößte Stadt Jordaniens. "
            "Die Stadt wuchs aus einem kleinen Dorf rasant ab den 1950er Jahren, nachdem 1935 große Phosphatvorkommen entdeckt wurden und der Phosphatabbau begann. "
            "Die Jordan Phosphate Mines Company (JPMC), gegründet 1949 unter dem haschemitischen Königreich, betrieb in Russeifa jahrzehntelang den Hauptförderstandort, bis die Mine 1985 wegen Erschöpfung weitgehend geschlossen wurde. "
            "Während des britischen Mandats (1921–1946) gehörte das Gebiet zum Emirat Transjordanien. "
            "Nach dem arabisch-israelischen Krieg von 1948 und dem Sechstagekrieg 1967 ließen sich zahlreiche palästinensische Flüchtlinge hier nieder, was zu einem explosionsartigen Bevölkerungswachstum führte. "
            "Heute ist Russeifa Teil der Metropolregion Amman-Zarqa und stark städtisch verdichtet."
        ),
        "facts": [
            "Etwa 500.000 Einwohner, viertgrößte Stadt Jordaniens",
            "Phosphatvorkommen entdeckt 1935",
            "Jordan Phosphate Mines Company seit 1949",
            "Hauptförderstandort bis zur Schließung 1985",
            "Britisches Mandat 1921 bis 1946",
            "Starker Zuzug palästinensischer Flüchtlinge ab 1948",
            "Teil der Metropolregion Amman-Zarqa",
            "Zarqa-Fluss durchquert das Stadtgebiet",
        ],
    },
    "madaba-cities-v2": {
        "desc": (
            "Madaba liegt rund 30 Kilometer südwestlich von Amman auf 770 Metern Höhe und zählt etwa 70.000 Einwohner, von denen rund ein Drittel griechisch-orthodoxe oder katholische Christen sind. "
            "Die Stadt wird in der Bibel als moabitische Siedlung Medeba erwähnt (4. Buch Mose 21,30) und gehört damit zu den ältesten Städten des Landes. "
            "Berühmt ist Madaba vor allem für die Mosaikkarte des Heiligen Landes aus dem 6. Jahrhundert, die im Boden der griechisch-orthodoxen St.-Georgs-Kirche erhalten ist und 157 Ortsnamen mit griechischer Beschriftung zeigt; sie ist die älteste bekannte Karte Palästinas. "
            "Während der byzantinischen Zeit (4. bis 7. Jahrhundert) blühten zahlreiche Kirchen mit Mosaikböden, was Madaba den Beinamen Stadt der Mosaike einbrachte. "
            "Während des britischen Mandats (1921–1946) gehörte sie zum Emirat Transjordanien. "
            "Der biblische Berg Nebo, von dem aus Moses das Gelobte Land sah, liegt nur 9 Kilometer entfernt."
        ),
        "facts": [
            "Etwa 70.000 Einwohner auf 770 Metern Höhe",
            "30 Kilometer südwestlich von Amman",
            "Biblische Erwähnung als Medeba im 4. Buch Mose 21,30",
            "Mosaikkarte des Heiligen Landes aus dem 6. Jahrhundert",
            "157 Ortsnamen auf der Karte in St.-Georgs-Kirche",
            "Byzantinische Blütezeit 4. bis 7. Jahrhundert",
            "Berg Nebo nur 9 Kilometer entfernt",
            "Britisches Mandat 1921 bis 1946",
        ],
    },
    "ar-ramtha-cities-v2": {
        "desc": (
            "Ar-Ramtha liegt im Norden Jordaniens unmittelbar an der syrischen Grenze, rund 90 Kilometer nördlich von Amman, und zählt etwa 130.000 Einwohner. "
            "Die Stadt war historisch ein wichtiger Karawanenort an der Route von Damaskus nach Mekka und liegt bis heute am Grenzübergang Jaber-Nasib, dem wichtigsten Übergang zwischen Jordanien und Syrien. "
            "Der lokale Dialekt zeigt durch die Nähe starke Ähnlichkeiten mit dem südsyrischen Hauran-Arabisch. "
            "Während des britischen Mandats (1921–1946) und insbesondere im Zweiten Weltkrieg war Ar-Ramtha strategischer Posten an der Grenze des Emirats Transjordanien. "
            "Die Jordan University of Science and Technology (JUST), gegründet 1986 zwischen Ar-Ramtha und Irbid, ist eine der wichtigsten technischen Hochschulen des Nahen Ostens mit über 25.000 Studierenden. "
            "Während des syrischen Bürgerkriegs ab 2011 nahm die Stadt zehntausende Flüchtlinge auf."
        ),
        "facts": [
            "Etwa 130.000 Einwohner an der syrischen Grenze",
            "90 Kilometer nördlich von Amman",
            "Grenzübergang Jaber-Nasib wichtigster Übergang nach Syrien",
            "Historische Karawanenroute Damaskus-Mekka",
            "Jordan University of Science and Technology seit 1986",
            "Über 25.000 Studierende an der JUST",
            "Britisches Mandat 1921 bis 1946",
            "Aufnahme syrischer Flüchtlinge seit 2011",
        ],
    },
    "mafraq-cities-v2": {
        "desc": (
            "Mafraq liegt rund 80 Kilometer nordöstlich von Amman in der jordanischen Wüstensteppe und zählt etwa 100.000 Einwohner. "
            "Der Name bedeutet Kreuzung auf Arabisch und bezieht sich auf die Lage am Schnittpunkt der Straßen nach Syrien, Irak und Saudi-Arabien sowie an der historischen Hedschasbahn von 1908. "
            "Während des britischen Mandats (1921–1946) wurde der Ort als Bahnstation und Militärposten ausgebaut. "
            "Die Luftwaffenbasis King Hussein, ursprünglich als RAF Mafraq 1934 von der Royal Air Force angelegt, ist bis heute der wichtigste Militärflugplatz im Norden Jordaniens. "
            "Rund 12 Kilometer östlich liegt das 2012 eröffnete Zaatari-Flüchtlingslager, in dem zeitweise über 80.000 syrische Flüchtlinge lebten und das damit zu einem der größten Flüchtlingslager der Welt zählte. "
            "Die Al al-Bayt-Universität in Mafraq wurde 1992 gegründet."
        ),
        "facts": [
            "Etwa 100.000 Einwohner in der Wüstensteppe",
            "80 Kilometer nordöstlich von Amman",
            "Name bedeutet Kreuzung auf Arabisch",
            "Hedschasbahn-Station seit 1908",
            "Luftwaffenbasis King Hussein, ursprünglich RAF Mafraq seit 1934",
            "Britisches Mandat 1921 bis 1946",
            "Zaatari-Flüchtlingslager seit 2012, zeitweise 80.000 Flüchtlinge",
            "Al al-Bayt-Universität gegründet 1992",
        ],
    },
    "maan-cities-v2": {
        "desc": (
            "Ma'an liegt rund 220 Kilometer südlich von Amman auf 1.070 Metern Höhe in der südjordanischen Wüste und zählt etwa 50.000 Einwohner. "
            "Die Stadt war über Jahrhunderte ein wichtiger Stopp auf der Pilgerroute (Darb al-Hadsch) von Damaskus nach Mekka und beherbergt einen historischen Bahnhof der Hedschasbahn von 1904, der für die Pilger der osmanischen Zeit eine zentrale Rolle spielte. "
            "Im Oktober 1916 erklärte Scherif Hussein von Mekka in Ma'an die arabische Revolte gegen die Osmanen, und die Stadt wurde 1917 von arabischen Truppen erobert. "
            "Von 1920 bis 1925 war Ma'an kurzzeitig Hauptstadt des kurzlebigen Königreichs Hidschas-Ma'an unter Scherif Hussein. "
            "Während des britischen Mandats (1921–1946) wurde sie ins Emirat Transjordanien eingegliedert. "
            "Die Al-Hussein Bin Talal Universität wurde 1999 gegründet. "
            "Petra liegt nur 35 Kilometer westlich."
        ),
        "facts": [
            "Etwa 50.000 Einwohner auf 1.070 Metern Höhe",
            "220 Kilometer südlich von Amman",
            "Historischer Hedschasbahnhof seit 1904",
            "Wichtige Station auf der Pilgerroute nach Mekka",
            "Kurzzeitig Hauptstadt des Königreichs Hidschas-Ma'an 1920 bis 1925",
            "Britisches Mandat 1921 bis 1946",
            "Al-Hussein Bin Talal Universität seit 1999",
            "Petra nur 35 Kilometer westlich",
        ],
    },
    "jerash-cities-v2": {
        "desc": (
            "Jerash liegt rund 50 Kilometer nördlich von Amman auf 600 Metern Höhe und zählt etwa 50.000 Einwohner. "
            "Die antike Stadt Gerasa war eine der zehn Städte der römischen Dekapolis und gilt als eine der besterhaltenen römischen Provinzstädte des Nahen Ostens. "
            "Die wichtigsten Bauwerke entstanden im 1. und 2. Jahrhundert n. Chr.: der Hadriansbogen wurde 129 n. Chr. zum Besuch Kaiser Hadrians errichtet, das ovale Forum mit 56 ionischen Säulen ist einzigartig in der römischen Welt, der Artemistempel stammt aus dem späten 2. Jahrhundert. "
            "Ein verheerendes Erdbeben im Januar 749 zerstörte die Stadt weitgehend, woraufhin sie verlassen wurde. "
            "1806 wurde Gerasa vom deutschen Forschungsreisenden Ulrich Jasper Seetzen wiederentdeckt. "
            "Während des britischen Mandats (1921–1946) begannen systematische Ausgrabungen. "
            "Das jährliche Jerash Festival of Culture and Arts findet seit 1981 statt."
        ),
        "facts": [
            "Etwa 50.000 Einwohner, 50 Kilometer nördlich von Amman",
            "Antike Stadt Gerasa der römischen Dekapolis",
            "Hadriansbogen erbaut 129 n. Chr.",
            "Ovales Forum mit 56 ionischen Säulen",
            "Artemistempel aus dem späten 2. Jahrhundert",
            "Erdbeben im Januar 749 zerstörte die Stadt",
            "Wiederentdeckung durch Ulrich Jasper Seetzen 1806",
            "Jerash Festival seit 1981",
        ],
    },
    "karak-cities-v2": {
        "desc": (
            "Al-Karak liegt rund 140 Kilometer südlich von Amman auf 950 Metern Höhe auf einem Felsplateau und zählt etwa 35.000 Einwohner. "
            "Die Stadt ist berühmt für ihre Kreuzritterburg, eine der größten und mächtigsten Festungen der Levante. "
            "Die Burg wurde ab 1142 unter Pagan dem Mundschenk, einem Vasallen des Königs Fulko von Jerusalem, errichtet und galt als Schlüsselposten an der Pilgerroute nach Mekka. "
            "Reginald von Châtillon nutzte sie ab 1176 als Basis für Überfälle auf muslimische Karawanen, was Sultan Saladin zu mehrfachen Belagerungen veranlasste; nach der Schlacht bei Hattin 1187 fiel Karak schließlich 1188 nach achtmonatiger Belagerung. "
            "Die Mamluken erweiterten die Festung im 13. Jahrhundert. "
            "Im biblischen Kontext gilt Karak als Hauptstadt der Moabiter und wird in der Bibel als Kir-Moab erwähnt. "
            "Während des britischen Mandats (1921–1946) wurde Karak Verwaltungssitz."
        ),
        "facts": [
            "Etwa 35.000 Einwohner auf 950 Metern Höhe",
            "140 Kilometer südlich von Amman",
            "Kreuzritterburg ab 1142 unter Pagan dem Mundschenk",
            "Reginald von Châtillon ab 1176 als Burgherr",
            "Belagerung durch Saladin nach Hattin 1187",
            "Eroberung durch Saladin 1188 nach achtmonatiger Belagerung",
            "Mamlukische Erweiterungen im 13. Jahrhundert",
            "Britisches Mandat 1921 bis 1946",
        ],
    },
    "tafilah-cities-v2": {
        "desc": (
            "Tafilah liegt rund 180 Kilometer südlich von Amman auf 950 Metern Höhe in den Bergen Südjordaniens und zählt etwa 30.000 Einwohner. "
            "Die Stadt war bereits in biblischer Zeit als edomitische Siedlung Tophel besiedelt und wird im 5. Buch Mose 1,1 erwähnt. "
            "Am 25. Januar 1918 fand hier während der Arabischen Revolte die Schlacht von Tafilah statt: Arabische Truppen unter Scherif Said und mit Unterstützung von T. E. Lawrence sowie Auda Abu Tayi besiegten eine osmanische Streitmacht und zerstörten zwei Bataillone, was als bedeutender Sieg der Revolte gilt. "
            "Die Region ist bekannt für ihre Olivenhaine und das Biosphärenreservat Dana, das 1989 von der Royal Society for the Conservation of Nature eingerichtet wurde und mit 308 Quadratkilometern das größte Naturreservat Jordaniens ist. "
            "Während des britischen Mandats (1921–1946) wurde Tafilah ins Emirat Transjordanien eingegliedert. "
            "Die Tafila Technical University wurde 2005 gegründet."
        ),
        "facts": [
            "Etwa 30.000 Einwohner auf 950 Metern Höhe",
            "180 Kilometer südlich von Amman",
            "Biblische Erwähnung als Tophel im 5. Buch Mose 1,1",
            "Schlacht von Tafilah am 25. Januar 1918",
            "Sieg unter T. E. Lawrence und Scherif Said",
            "Biosphärenreservat Dana seit 1989, 308 Quadratkilometer",
            "Britisches Mandat 1921 bis 1946",
            "Tafila Technical University gegründet 2005",
        ],
    },
    "ajloun-cities-v2": {
        "desc": (
            "Ajloun liegt rund 75 Kilometer nordwestlich von Amman auf 750 Metern Höhe in den bewaldeten Bergen Nordjordaniens und zählt etwa 15.000 Einwohner. "
            "Die Stadt ist berühmt für die Burg Qalʿat ar-Rabad, die 1184 von Izz ad-Din Usama, einem Neffen des Sultans Saladin, auf dem Berg Auf errichtet wurde. "
            "Sie diente dem ayyubidischen Reich als militärischer Vorposten gegen die Kreuzritter und kontrollierte die Eisenminen sowie die Verbindung zwischen Damaskus und Ägypten. "
            "Im 13. Jahrhundert wurde die Burg von den Mamluken erweitert; 1260 wurde sie kurzzeitig von Mongolen unter Hülegü eingenommen, dann jedoch zurückerobert. "
            "Erdbeben in den Jahren 1837 und 1927 verursachten erhebliche Schäden. "
            "Während des britischen Mandats (1921–1946) wurde die Region wirtschaftlich gefördert. "
            "Das Ajloun Forest Reserve, 1987 von der RSCN gegründet, schützt 13 Quadratkilometer Eichen- und Pistazienwald und beherbergt seit 2009 ein wiedereingeführtes Persisches Damwild."
        ),
        "facts": [
            "Etwa 15.000 Einwohner auf 750 Metern Höhe",
            "75 Kilometer nordwestlich von Amman",
            "Burg Qalʿat ar-Rabad erbaut 1184 unter Izz ad-Din Usama",
            "Errichtet als ayyubidischer Vorposten gegen die Kreuzritter",
            "Mongolische Besetzung 1260 unter Hülegü",
            "Erdbebenschäden 1837 und 1927",
            "Britisches Mandat 1921 bis 1946",
            "Ajloun Forest Reserve seit 1987, 13 Quadratkilometer",
        ],
    },
    "as-salt-cities-v2": {
        "desc": (
            "As-Salt liegt rund 30 Kilometer nordwestlich von Amman auf 850 Metern Höhe und zählt etwa 90.000 Einwohner. "
            "Die Stadt war bis zur Wahl Ammans 1921 als Hauptstadt des Emirats Transjordanien das wichtigste Verwaltungs- und Handelszentrum der Region und galt im späten 19. Jahrhundert als bedeutendste Stadt zwischen Jerusalem und Damaskus. "
            "Während der osmanischen Reformen ab 1867 zog As-Salt zahlreiche Händler und Gelehrte aus Nablus und Damaskus an, die typische gelbe Sandstein-Häuser im sogenannten Salti-Stil errichteten. "
            "Über 1.000 historische Gebäude aus dem späten 19. und frühen 20. Jahrhundert sind erhalten, darunter das Abu Jaber Museum von 1892. "
            "Die Stadt ist seit jeher für das friedliche Zusammenleben von Muslimen und Christen bekannt; rund ein Viertel der Bevölkerung ist christlich. "
            "Während des britischen Mandats (1921–1946) verlor As-Salt seine politische Bedeutung an Amman. "
            "2021 wurde die Altstadt zum UNESCO-Weltkulturerbe erklärt."
        ),
        "facts": [
            "Etwa 90.000 Einwohner auf 850 Metern Höhe",
            "30 Kilometer nordwestlich von Amman",
            "Wichtigstes Zentrum vor der Wahl Ammans 1921 zur Hauptstadt",
            "Über 1.000 historische Salti-Stil-Häuser",
            "Abu Jaber Museum von 1892",
            "Rund 25 Prozent christliche Bevölkerung",
            "Britisches Mandat 1921 bis 1946",
            "UNESCO-Weltkulturerbe seit 2021",
        ],
    },
    "sahab-cities-v2": {
        "desc": (
            "Sahab liegt rund 12 Kilometer südöstlich von Amman und zählt etwa 170.000 Einwohner, was sie zur größten Industrievorstadt der Hauptstadt macht. "
            "Archäologische Ausgrabungen der Universität Jordanien seit 1972 unter Moawiyah Ibrahim haben Siedlungsschichten von der Spätbronzezeit (um 1500 v. Chr.) bis in die Eisenzeit freigelegt, einschließlich ammonitischer Gräber und Inschriften. "
            "Die King Abdullah II Industrial City, 1984 gegründet und auf 250 Hektar erweitert, ist die größte Industriezone Jordaniens und beherbergt über 400 Fabriken in den Bereichen Textil, Pharma, Lebensmittelverarbeitung und Maschinenbau. "
            "Sie beschäftigt rund 16.000 Arbeiter, darunter viele Migranten aus Asien. "
            "Während des britischen Mandats (1921–1946) war Sahab ein kleines Beduinendorf. "
            "Der größte islamische Friedhof Jordaniens, der Sahab-Friedhof, wurde in den 1980er Jahren angelegt, weil die Friedhöfe in Amman erschöpft waren."
        ),
        "facts": [
            "Etwa 170.000 Einwohner, 12 Kilometer südöstlich von Amman",
            "Archäologische Ausgrabungen seit 1972",
            "Spätbronzezeitliche Siedlung um 1500 v. Chr.",
            "King Abdullah II Industrial City seit 1984, 250 Hektar",
            "Über 400 Fabriken mit rund 16.000 Arbeitern",
            "Britisches Mandat 1921 bis 1946",
            "Größter islamischer Friedhof Jordaniens seit den 1980er Jahren",
            "Größte Industrievorstadt Ammans",
        ],
    },
    "ain-basha-cities-v2": {
        "desc": (
            "Ain Basha liegt rund 12 Kilometer nordwestlich von Amman im Gouvernement Balqa und zählt mit der umliegenden Region etwa 110.000 Einwohner. "
            "Der Name bedeutet Quelle des Paschas auf Arabisch und geht auf eine osmanische Wasserquelle zurück, die unter einem lokalen osmanischen Verwalter (Pascha) im 19. Jahrhundert gefasst wurde. "
            "Während des britischen Mandats (1921–1946) gehörte das Gebiet zum Emirat Transjordanien und war landwirtschaftlich geprägt. "
            "Direkt benachbart liegt das Baqʿa-Flüchtlingslager, das 1968 nach dem Sechstagekrieg von 1967 für rund 26.000 palästinensische Flüchtlinge eingerichtet wurde und heute mit über 100.000 registrierten Bewohnern eines der größten Palästinenserlager Jordaniens ist. "
            "Die Stadt liegt an der Hauptstraße zwischen Amman und Jerash und hat sich seit den 1990er Jahren zu einer wachsenden Vorortregion mit Pendlern nach Amman entwickelt. "
            "Die fruchtbaren Böden ermöglichen weiterhin Olivenanbau und Gemüseproduktion."
        ),
        "facts": [
            "Etwa 110.000 Einwohner mit Umland",
            "12 Kilometer nordwestlich von Amman",
            "Name bedeutet Quelle des Paschas",
            "Osmanische Quelle aus dem 19. Jahrhundert",
            "Britisches Mandat 1921 bis 1946",
            "Baqʿa-Flüchtlingslager benachbart, eingerichtet 1968",
            "Über 100.000 registrierte palästinensische Flüchtlinge im Lager",
            "Hauptstraße zwischen Amman und Jerash",
        ],
    },
    "al-jiza-cities-v2": {
        "desc": (
            "Al-Jiza liegt rund 30 Kilometer südlich von Amman in einer wüstenähnlichen Steppenregion und zählt mit dem Umland etwa 50.000 Einwohner. "
            "Die Region ist vor allem als Standort des Queen Alia International Airport bekannt, der 1983 zu Ehren der 1977 bei einem Hubschrauberabsturz verunglückten Königin Alia eröffnet wurde und heute mit über 9 Millionen Passagieren pro Jahr der größte Flughafen Jordaniens ist. "
            "Das 2013 fertiggestellte neue Terminal des französischen Architekten Norman Foster gilt als Architekturmeisterwerk. "
            "In der osmanischen Zeit war Al-Jiza eine wichtige Station auf der Pilgerroute (Darb al-Hadsch) nach Mekka und beherbergt eine historische Wasserzisterne aus römisch-byzantinischer Zeit, die Birka Zizya, mit einem Fassungsvermögen von rund 30.000 Kubikmetern. "
            "Während des britischen Mandats (1921–1946) wurde der Flughafen Marka in der Nähe als Royal Air Force Stützpunkt genutzt, später ersetzt durch den modernen Flughafen Al-Jiza."
        ),
        "facts": [
            "Etwa 50.000 Einwohner, 30 Kilometer südlich von Amman",
            "Queen Alia International Airport eröffnet 1983",
            "Über 9 Millionen Passagiere pro Jahr",
            "Neues Terminal von Norman Foster 2013 fertiggestellt",
            "Historische Pilgerroute Darb al-Hadsch nach Mekka",
            "Römisch-byzantinische Zisterne Birka Zizya",
            "Zisternenkapazität rund 30.000 Kubikmeter",
            "Britisches Mandat 1921 bis 1946",
        ],
    },
    "ghor-es-safi-cities-v2": {
        "desc": (
            "Ghor es-Safi liegt am südöstlichen Ende des Toten Meeres rund 360 Meter unter dem Meeresspiegel und zählt etwa 25.000 Einwohner. "
            "Die Region wird mit der biblischen Stadt Zoar (Zughar) identifiziert, die in der Bibel als Zufluchtsort des Lot bei der Zerstörung von Sodom und Gomorrha erwähnt wird (1. Buch Mose 19,22-23). "
            "In byzantinischer Zeit blühte hier eine bedeutende Siedlung mit Kirchen und Klöstern, deren Mosaikböden bei Ausgrabungen seit 1986 freigelegt wurden. "
            "Das Lowest Point Museum, 2012 mit finnischer Unterstützung eröffnet, dokumentiert die Geschichte und Archäologie des Gebiets. "
            "Die Arab Potash Company, gegründet 1956 unter dem haschemitischen Königreich, betreibt seit den 1980er Jahren am Toten Meer eine der größten Kaliproduktionsanlagen weltweit mit jährlich rund 2,5 Millionen Tonnen. "
            "Während des britischen Mandats (1921–1946) gehörte das Gebiet zum Emirat Transjordanien. "
            "Im Winter ist die Region wegen ihres warmen Klimas das wichtigste Anbaugebiet für Tomaten in Jordanien."
        ),
        "facts": [
            "Etwa 25.000 Einwohner, 360 Meter unter dem Meeresspiegel",
            "Identifiziert mit dem biblischen Zoar (1. Mose 19,22-23)",
            "Byzantinische Siedlung mit Mosaikkirchen",
            "Archäologische Ausgrabungen seit 1986",
            "Lowest Point Museum eröffnet 2012",
            "Arab Potash Company seit 1956",
            "Jährlich rund 2,5 Millionen Tonnen Kalisalz",
            "Britisches Mandat 1921 bis 1946",
        ],
    },
    "al-husn-cities-v2": {
        "desc": (
            "Al-Husn liegt rund 8 Kilometer südlich von Irbid auf einem markanten Tell (künstlicher Siedlungshügel) und zählt etwa 25.000 Einwohner. "
            "Der Name bedeutet die Festung auf Arabisch und verweist auf die strategische Lage. "
            "Archäologische Funde belegen eine Besiedlung seit der Frühbronzezeit um 3000 v. Chr.; in römisch-byzantinischer Zeit war der Ort als Capitolias Teil der Dekapolis-Region. "
            "Die Kirche St. Georg in Al-Husn, ursprünglich aus byzantinischer Zeit (5.–6. Jahrhundert), gilt als eine der ältesten Kirchen Jordaniens; der heutige Bau stammt aus der späten osmanischen Zeit. "
            "Die Stadt ist für das traditionelle Zusammenleben von griechisch-orthodoxen Christen, die rund ein Drittel der Bevölkerung stellen, und sunnitischen Muslimen bekannt. "
            "Während des britischen Mandats (1921–1946) wurde die Region landwirtschaftlich gefördert. "
            "Die Husn-Universität (Al-Balqaʿ Applied University Husn College), gegründet 1981, bildet Lehrer aus."
        ),
        "facts": [
            "Etwa 25.000 Einwohner, 8 Kilometer südlich von Irbid",
            "Name bedeutet die Festung auf Arabisch",
            "Besiedlung seit der Frühbronzezeit um 3000 v. Chr.",
            "Antiker Name Capitolias in der Dekapolis-Region",
            "Byzantinische Kirche St. Georg aus dem 5. bis 6. Jahrhundert",
            "Etwa ein Drittel griechisch-orthodoxe Christen",
            "Britisches Mandat 1921 bis 1946",
            "Husn College der Al-Balqaʿ Universität seit 1981",
        ],
    },
    "kufranja-cities-v2": {
        "desc": (
            "Kufranja liegt rund 70 Kilometer nordwestlich von Amman auf 700 Metern Höhe im Ajloun-Gebirge und zählt mit den umliegenden Dörfern etwa 25.000 Einwohner. "
            "Der Name geht möglicherweise auf das aramäische Wort für Dorf der Franken zurück und verweist auf eine Kreuzritter-Präsenz in der Region. "
            "Das Wadi Kufranja, ein perennierendes Tal mit Quellen, die ganzjährig Wasser führen, ist eines der grünsten Täler Jordaniens und durchzieht die Stadt. "
            "Der Kufranja-Damm, 2014 fertiggestellt mit einer Kapazität von 7,8 Millionen Kubikmetern, dient der Bewässerung des nordjordanischen Talgebiets. "
            "Die Region ist für ihre Olivenhaine berühmt, die im 19. Jahrhundert systematisch von tscherkessischen und arabischen Siedlern angelegt wurden; das Olivenöl aus Ajloun zählt zu den hochwertigsten Jordaniens. "
            "Während des britischen Mandats (1921–1946) wurde die Region wirtschaftlich gefördert."
        ),
        "facts": [
            "Etwa 25.000 Einwohner auf 700 Metern Höhe",
            "70 Kilometer nordwestlich von Amman",
            "Name möglicherweise von Dorf der Franken",
            "Wadi Kufranja mit ganzjährigen Quellen",
            "Kufranja-Damm 2014 fertiggestellt",
            "Stauseekapazität 7,8 Millionen Kubikmeter",
            "Olivenhaine im 19. Jahrhundert angelegt",
            "Britisches Mandat 1921 bis 1946",
        ],
    },
    "fuheis-cities-v2": {
        "desc": (
            "Fuheis liegt rund 18 Kilometer nordwestlich von Amman auf 800 Metern Höhe in einer Hügellandschaft und zählt etwa 22.000 Einwohner, von denen rund 90 Prozent christlich sind, hauptsächlich melkitisch-katholisch und römisch-katholisch. "
            "Die Stadt zählt damit zu den größten christlichen Siedlungen Jordaniens. "
            "Die katholische Kirche St. George, 1860 erbaut und 1986 erneuert, ist Wahrzeichen des Ortes. "
            "Während der osmanischen Zeit (1516–1918) genossen die Christen von Fuheis besonderen Schutz; viele Familien stammen aus Karak und siedelten im 18. Jahrhundert nach Konflikten mit Beduinenstämmen hierher. "
            "Während des britischen Mandats (1921–1946) entwickelte sich die Stadt wirtschaftlich. "
            "Die Lafarge-Zementfabrik (ehemals Jordan Cement Factory), 1951 gegründet, war jahrzehntelang der wichtigste Arbeitgeber, wurde aber 2018 aufgrund von Umweltproblemen geschlossen. "
            "Das jährliche Fuheis Festival feiert seit 1992 Kultur und Kunst."
        ),
        "facts": [
            "Etwa 22.000 Einwohner auf 800 Metern Höhe",
            "18 Kilometer nordwestlich von Amman",
            "Rund 90 Prozent christliche Bevölkerung",
            "Kirche St. George von 1860, erneuert 1986",
            "Christliche Migration aus Karak im 18. Jahrhundert",
            "Britisches Mandat 1921 bis 1946",
            "Lafarge-Zementfabrik 1951 bis 2018",
            "Fuheis Festival seit 1992",
        ],
    },
    "ash-shunah-ash-shamaliyah-cities-v2": {
        "desc": (
            "Ash-Shunah ash-Shamaliyah, auch Nördliche Shuna genannt, liegt im nördlichen Jordantal auf rund 250 Metern unter dem Meeresspiegel, etwa 90 Kilometer nordwestlich von Amman, und zählt etwa 30.000 Einwohner. "
            "Die Stadt liegt nur wenige Kilometer von der israelischen Grenze und vom See Genezareth entfernt. "
            "Der Hauptort ist Schmaliyah und wird oft mit dem biblischen Pella (Tabaqat Fahl) in Verbindung gebracht, einer der antiken Dekapolis-Städte. "
            "Hier soll auch das Grab des Prophetengefährten Muʿadh ibn Jabal liegen, der laut islamischer Tradition 639 n. Chr. an der Pest von Amwas starb und ein bedeutendes Pilgerziel ist. "
            "Während des britischen Mandats (1921–1946) gehörte das Gebiet zum Emirat Transjordanien. "
            "Die intensive Bewässerungslandwirtschaft, ermöglicht durch den King Abdullah Canal von 1961, machte die Region zum wichtigsten Anbaugebiet für Zitrusfrüchte, Bananen und Wintergemüse Jordaniens. "
            "Im Sommer steigen die Temperaturen oft über 45 Grad Celsius."
        ),
        "facts": [
            "Etwa 30.000 Einwohner, 250 Meter unter dem Meeresspiegel",
            "90 Kilometer nordwestlich von Amman",
            "Nahe der israelischen Grenze und dem See Genezareth",
            "Verbindung mit dem antiken Pella der Dekapolis",
            "Grab des Prophetengefährten Muʿadh ibn Jabal",
            "King Abdullah Canal seit 1961",
            "Wichtigstes Anbaugebiet für Zitrus und Bananen",
            "Britisches Mandat 1921 bis 1946",
        ],
    },
    "al-mazar-al-janubi-cities-v2": {
        "desc": (
            "Al-Mazar al-Janubi (der südliche Schrein) liegt rund 15 Kilometer südlich von Karak auf 1.150 Metern Höhe und zählt etwa 18.000 Einwohner. "
            "Die Stadt ist einer der wichtigsten Pilgerorte Jordaniens, denn hier fand am 8. September 629 die historische Schlacht von Muʾtah statt: 3.000 muslimische Krieger unter Zaid ibn Haritha kämpften gegen ein viel größeres byzantinisches und gassanidisches Heer. "
            "Im Verlauf der Schlacht fielen drei muslimische Heerführer, darunter Zaid, Jaʿfar ibn Abi Talib (der Bruder Alis und ein Cousin Mohammeds) und Abdullah ibn Rawaha; Khalid ibn al-Walid übernahm das Kommando und rettete die Truppen. "
            "Die Gräber dieser drei Märtyrer befinden sich in eindrucksvollen Mausoleen, die im 14. Jahrhundert von den Mamluken errichtet wurden, im 20. Jahrhundert mehrfach erweitert und Pilgerziele aus der gesamten islamischen Welt sind. "
            "Während des britischen Mandats (1921–1946) gehörte die Stadt zum Emirat Transjordanien."
        ),
        "facts": [
            "Etwa 18.000 Einwohner auf 1.150 Metern Höhe",
            "15 Kilometer südlich von Karak",
            "Schlacht von Muʾtah am 8. September 629",
            "Tod von Zaid ibn Haritha und Jaʿfar ibn Abi Talib",
            "Khalid ibn al-Walid übernahm das Kommando",
            "Mamlukische Mausoleen aus dem 14. Jahrhundert",
            "Bedeutender islamischer Pilgerort",
            "Britisches Mandat 1921 bis 1946",
        ],
    },
    "deir-abi-saeed-cities-v2": {
        "desc": (
            "Deir Abi Saeed liegt rund 25 Kilometer westlich von Irbid auf 525 Metern Höhe im Distrikt Kourah und zählt etwa 17.000 Einwohner. "
            "Der Name bedeutet Kloster des Abi Saeed und verweist auf eine byzantinische Klostervergangenheit aus dem 5. bis 6. Jahrhundert. "
            "Die Region Kourah ist eine der grünsten Jordaniens, mit dichten Eichenwäldern und ausgedehnten Olivenhainen, die zu den ältesten Olivenanbaugebieten der Levante zählen; einige Olivenbäume sind über 1.000 Jahre alt. "
            "In der Nähe liegt der archäologische Hügel Tell Abu al-Kharaz, der seit 1989 von schwedischen Archäologen unter Peter M. Fischer ausgegraben wird; die Funde reichen von der Frühbronzezeit (3200 v. Chr.) bis in die islamische Zeit. "
            "Während des britischen Mandats (1921–1946) wurde die Region wirtschaftlich entwickelt. "
            "Das Olivenöl aus Kourah erhält regelmäßig internationale Auszeichnungen für Qualität."
        ),
        "facts": [
            "Etwa 17.000 Einwohner auf 525 Metern Höhe",
            "25 Kilometer westlich von Irbid",
            "Name bedeutet Kloster des Abi Saeed",
            "Byzantinische Klostervergangenheit 5. bis 6. Jahrhundert",
            "Über 1.000 Jahre alte Olivenbäume",
            "Tell Abu al-Kharaz seit 1989 ausgegraben",
            "Funde seit der Frühbronzezeit um 3200 v. Chr.",
            "Britisches Mandat 1921 bis 1946",
        ],
    },
    "al-muwaqqar-cities-v2": {
        "desc": (
            "Al-Muwaqqar liegt rund 25 Kilometer östlich von Amman in einer wüstenähnlichen Steppe und zählt mit dem Umland etwa 30.000 Einwohner. "
            "Der Ort war ein bedeutender umayyadischer Wüstenpalast (Qasr al-Muwaqqar), der zwischen 720 und 750 n. Chr. unter Kalif Yazid II. (regierte 720–724) und seinem Sohn al-Walid II. errichtet wurde. "
            "Der Palast besaß eine ausgeklügelte Zisterne mit kunstvollen Inschriften, deren Steinplatten heute im Jordan Archaeological Museum auf der Zitadelle von Amman ausgestellt sind. "
            "Die Ruinen sind heute weitgehend zerstört, aber Reste der Säulen und Wasseranlagen sind noch sichtbar. "
            "Während des britischen Mandats (1921–1946) war das Gebiet kaum besiedelt und beduinisch geprägt. "
            "Erst in den 1980er Jahren begann eine systematische Ansiedlung durch sesshaft gewordene Beduinenstämme. "
            "Die Region ist heute Standort mehrerer Solarkraftwerke, die zur Energieversorgung Jordaniens beitragen."
        ),
        "facts": [
            "Etwa 30.000 Einwohner, 25 Kilometer östlich von Amman",
            "Umayyadischer Palast Qasr al-Muwaqqar 720 bis 750 n. Chr.",
            "Erbaut unter Kalif Yazid II. und al-Walid II.",
            "Inschriften-Steinplatten im Archäologischen Museum Amman",
            "Britisches Mandat 1921 bis 1946",
            "Sesshaftwerdung von Beduinenstämmen seit den 1980er Jahren",
            "Standort mehrerer moderner Solarkraftwerke",
            "Übergang zur jordanischen Wüste",
        ],
    },
    "mahis-cities-v2": {
        "desc": (
            "Mahis liegt rund 18 Kilometer nordwestlich von Amman auf 850 Metern Höhe in den Hügeln über dem Jordantal und zählt etwa 12.000 Einwohner. "
            "Die Stadt grenzt unmittelbar an Fuheis und hat eine ähnlich gemischte christlich-muslimische Bevölkerung. "
            "Mahis ist berühmt für den Schrein von al-Khidr (auf dem Berg Mar Elias), der sowohl von Christen als auch Muslimen verehrt wird; al-Khidr wird im Islam mit dem Propheten Elias und im Christentum mit St. Georg gleichgesetzt. "
            "Der Berg Mar Elias gilt als Geburtsort des Propheten Elias und wurde 2000 von Papst Johannes Paul II. besucht. "
            "Bei Ausgrabungen seit 1999 wurden zwei byzantinische Kirchen aus dem 6. Jahrhundert mit gut erhaltenen Mosaikböden freigelegt. "
            "Während des britischen Mandats (1921–1946) wurde die Region wirtschaftlich gefördert. "
            "Die Region ist berühmt für ihre Granatäpfel und Feigen, die unter anderem in Beiruts Märkten verkauft werden."
        ),
        "facts": [
            "Etwa 12.000 Einwohner auf 850 Metern Höhe",
            "18 Kilometer nordwestlich von Amman",
            "Schrein des al-Khidr auf dem Berg Mar Elias",
            "Geburtsort des Propheten Elias",
            "Besuch von Papst Johannes Paul II. im Jahr 2000",
            "Byzantinische Kirchen aus dem 6. Jahrhundert mit Mosaiken",
            "Britisches Mandat 1921 bis 1946",
            "Berühmt für Granatäpfel und Feigen",
        ],
    },
    "al-hashimiyah-cities-v2": {
        "desc": (
            "Al-Hashimiyah liegt rund 30 Kilometer nordöstlich von Amman im Gouvernement Zarqa und zählt mit den umliegenden Vorstädten etwa 90.000 Einwohner. "
            "Die Stadt entstand erst in den 1970er Jahren als Planstadt und wurde nach der haschemitischen Königsdynastie benannt, die das Land seit 1921 regiert. "
            "Während des britischen Mandats (1921–1946) war das Gebiet weitgehend unbewohnt. "
            "Die Hashemite University, gegründet 1991 und 1995 eröffnet, ist eine der wichtigsten staatlichen Universitäten Jordaniens mit rund 26.000 Studierenden auf einem 6 Quadratkilometer großen Campus. "
            "Das thermische Kraftwerk King Hussein, eröffnet 1973 und mehrfach erweitert, hat eine Gesamtkapazität von rund 600 Megawatt und versorgt einen Großteil des nordjordanischen Stromnetzes. "
            "Die Stadt liegt direkt an der internationalen Schnellstraße zwischen Amman, Zarqa und der syrischen Grenze; trotz Industrialisierung sind viele Einwohner Pendler nach Amman."
        ),
        "facts": [
            "Etwa 90.000 Einwohner mit Umland",
            "30 Kilometer nordöstlich von Amman",
            "Planstadt aus den 1970er Jahren",
            "Benannt nach der haschemitischen Dynastie",
            "Hashemite University gegründet 1991, eröffnet 1995",
            "Rund 26.000 Studierende an der Universität",
            "Thermisches Kraftwerk King Hussein seit 1973, rund 600 Megawatt",
            "Britisches Mandat 1921 bis 1946",
        ],
    },
    "busaira-cities-v2": {
        "desc": (
            "Busaira liegt rund 195 Kilometer südlich von Amman auf einem markanten Bergrücken auf 1.230 Metern Höhe im Gouvernement Tafilah und zählt etwa 12.000 Einwohner. "
            "Die archäologische Stätte gilt als das antike Bozra (Bosra), die Hauptstadt des biblischen Königreichs Edom in der Eisenzeit, die in der Bibel mehrfach erwähnt wird (1. Buch Mose 36,33 und Jesaja 34,6). "
            "Britische Ausgrabungen unter Crystal-Margaret Bennett von 1971 bis 1980 legten massive Festungsmauern, einen Königspalast und einen großen Tempel aus dem 7. bis 6. Jahrhundert v. Chr. frei. "
            "Die Edomiter kontrollierten von hier aus die wichtige Handelsroute der Königsstraße (Via Regia) zwischen Damaskus und dem Roten Meer. "
            "Nach der babylonischen Eroberung um 552 v. Chr. unter Nabonid verlor die Stadt an Bedeutung. "
            "Während des britischen Mandats (1921–1946) war Busaira ein kleines Beduinendorf. "
            "Das Dana-Biosphärenreservat liegt nur 8 Kilometer westlich."
        ),
        "facts": [
            "Etwa 12.000 Einwohner auf 1.230 Metern Höhe",
            "195 Kilometer südlich von Amman",
            "Antikes Bozra, Hauptstadt des biblischen Königreichs Edom",
            "Erwähnt in 1. Mose 36,33 und Jesaja 34,6",
            "Britische Ausgrabungen 1971 bis 1980 unter Crystal-Margaret Bennett",
            "Festungen und Tempel aus dem 7. bis 6. Jahrhundert v. Chr.",
            "Babylonische Eroberung um 552 v. Chr. unter Nabonid",
            "Britisches Mandat 1921 bis 1946",
        ],
    },
    "al-mashareq-cities-v2": {
        "desc": (
            "Al-Mashareq (die östlichen Gebiete) ist ein Verwaltungsbezirk im westlichen Gouvernement Irbid mit dem Verwaltungssitz auf rund 350 Metern Höhe und zählt mit allen zugehörigen Dörfern etwa 35.000 Einwohner. "
            "Der Bezirk wurde 1995 als eigene Verwaltungseinheit (Liwa) eingerichtet, um die ländliche Region zwischen Irbid und dem Jordantal besser zu verwalten. "
            "Die Region liegt am Übergang vom nordjordanischen Hochland zum fruchtbaren Jordantal und profitiert von milden Wintern, in denen Zitrusfrüchte und Frühgemüse angebaut werden. "
            "Bedeutende Hauptdörfer sind Kufr Asad, Kufr Awan und Sammu. "
            "Während der byzantinischen Zeit blühten in der Region zahlreiche kleine Klöster und Dörfer. "
            "Während des britischen Mandats (1921–1946) wurde die Region landwirtschaftlich entwickelt. "
            "Die Bevölkerung lebt überwiegend von Olivenanbau, Geflügelzucht und Pendelarbeit nach Irbid; viele Familien haben Verwandte in der Diaspora, vor allem in den USA und am Persischen Golf."
        ),
        "facts": [
            "Etwa 35.000 Einwohner mit zugehörigen Dörfern",
            "Verwaltungsbezirk im Gouvernement Irbid",
            "Verwaltungseinheit eingerichtet 1995",
            "Übergang vom Hochland zum Jordantal",
            "Hauptdörfer Kufr Asad, Kufr Awan und Sammu",
            "Byzantinische Klöster und Dörfer",
            "Britisches Mandat 1921 bis 1946",
            "Olivenanbau und Geflügelzucht prägen die Wirtschaft",
        ],
    },
    "azraq-cities-v2": {
        "desc": (
            "Azraq (das Blaue) liegt rund 100 Kilometer östlich von Amman in der Wüste auf 510 Metern Höhe und zählt etwa 12.000 Einwohner, davon viele Tschetschenen und Drusen. "
            "Die Stadt war über Jahrtausende eine wichtige Oase an der Kreuzung der Karawanenrouten zwischen Arabien, Syrien und Irak. "
            "Das Schloss Qasr al-Azraq, ursprünglich von den Römern um 200 n. Chr. errichtet und im 13. Jahrhundert von den Ayyubiden mit schwarzen Basaltsteinen erweitert, diente T. E. Lawrence (Lawrence von Arabien) im Winter 1917/18 als Hauptquartier während der Arabischen Revolte. "
            "Das Azraq-Feuchtgebiet, einst eine 12 Quadratkilometer große Oase mit zwei dauerhaften Quellen, war Rastplatz für Millionen von Zugvögeln; durch übermäßige Wasserentnahme für Amman ab den 1960er Jahren trocknete es 1992 fast vollständig aus. "
            "Seit 1994 versucht die Royal Society for the Conservation of Nature, das Reservat (1977 gegründet) durch Wasserzufuhr wiederherzustellen. "
            "Während des britischen Mandats (1921–1946) war Azraq strategischer Wüstenposten."
        ),
        "facts": [
            "Etwa 12.000 Einwohner auf 510 Metern Höhe",
            "100 Kilometer östlich von Amman in der Wüste",
            "Qasr al-Azraq aus römischer Zeit um 200 n. Chr.",
            "Ayyubidischer Ausbau im 13. Jahrhundert",
            "T. E. Lawrence im Winter 1917/18 stationiert",
            "Azraq-Feuchtgebiet seit 1977 Naturschutzgebiet",
            "Austrocknung 1992 durch Wasserentnahme",
            "Britisches Mandat 1921 bis 1946",
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

    target = [pid for pid in needs if pid in DATA]
    print(f"Will fill: {len(target)}")

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
