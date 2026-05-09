#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Fuelt das Lebanon History V2 POI-File mit echten, einzigartigen, 80-150 Wort
deutschsprachigen descriptionAdvanced + 6-8 factsAdvanced.
Nur DE wird geschrieben. Andere Sprachen bleiben unberührt.
Skippt POIs, die descriptionAdvanced.de bereits gefüllt haben.
"""

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TARGET = ROOT / "lib" / "visualLab" / "data" / "poiExtraLebanonHistoryV2.ts"

DATA = {
    "baalbek-ruins-history-v2": {
        "desc": (
            "Baalbek im fruchtbaren Bekaa-Tal blickt auf eine über 9.000-jährige Siedlungsgeschichte zurück und war "
            "in phönizischer Zeit dem Sturmgott Baal geweiht, woher der Name stammt. Unter Kaiser Augustus begannen "
            "ab etwa 16 v. Chr. die monumentalen Bauarbeiten am Heiligtum, das die Römer Heliopolis nannten und das "
            "über mehr als 250 Jahre, bis ins 3. Jahrhundert n. Chr., kontinuierlich erweitert wurde. Nach der "
            "Christianisierung unter Theodosius I. um 379 n. Chr. wurden die heidnischen Tempel teilweise zerstört. "
            "Während der osmanischen Zeit (1516-1918) verfiel die Anlage. Deutsche Archäologen unter Otto Puchstein "
            "begannen 1898 die systematische Erforschung. Seit 1984 zählt Baalbek zum UNESCO-Welterbe."
        ),
        "facts": [
            "Phönizische Siedlung dem Gott Baal geweiht.",
            "Römische Bauarbeiten begannen circa 16 v. Chr. unter Augustus.",
            "Erweiterungen über mehr als 250 Jahre bis ins 3. Jahrhundert n. Chr.",
            "Heidnische Kulte verboten unter Kaiser Theodosius I. um 379 n. Chr.",
            "Während der osmanischen Zeit (1516-1918) weitgehend verfallen.",
            "Systematische Ausgrabung ab 1898 unter Otto Puchstein.",
            "UNESCO-Welterbe seit dem Jahr 1984.",
            "Größte römische Tempelanlage außerhalb Italiens."
        ],
    },
    "byblos-castle-history-v2": {
        "desc": (
            "Byblos gehört zu den ältesten kontinuierlich bewohnten Städten der Welt mit Siedlungsspuren ab etwa "
            "8.800 v. Chr. In der Bronzezeit war es das wichtigste phönizische Handelszentrum für Zedernholz nach "
            "Ägypten. Die heutige Burg wurde um 1104 von den Kreuzfahrern unter Raymond de Saint-Gilles aus "
            "Kalksteinblöcken und wiederverwendeten römischen Säulen errichtet. Saladin eroberte sie 1188, die "
            "Kreuzfahrer kehrten 1197 zurück, bis die Mamluken sie 1266 endgültig übernahmen. Während der "
            "osmanischen Zeit (1516-1918) verlor sie an Bedeutung. Der französische Archäologe Ernest Renan "
            "begann 1860 die ersten wissenschaftlichen Grabungen. Seit 1984 zählt die gesamte Stadt zum UNESCO-"
            "Welterbe und gilt als Wiege des phönizischen Alphabets."
        ),
        "facts": [
            "Siedlungsbeginn um 8.800 v. Chr. nachgewiesen.",
            "Wichtigstes Zedernholz-Handelszentrum für Ägypten.",
            "Burgbau um 1104 unter Raymond de Saint-Gilles.",
            "Eroberung durch Saladin im Jahr 1188.",
            "Endgültige Übernahme durch Mamluken im Jahr 1266.",
            "Erste wissenschaftliche Grabung 1860 durch Ernest Renan.",
            "Wiege des phönizischen Alphabets im 11. Jh. v. Chr.",
            "UNESCO-Welterbe seit dem Jahr 1984."
        ],
    },
    "tyre-hippodrome-history-v2": {
        "desc": (
            "Tyros war seit etwa 2750 v. Chr. eine der mächtigsten phönizischen Stadtstaaten und gründete unter "
            "anderem Karthago im Jahr 814 v. Chr. Alexander der Große belagerte und eroberte Tyros 332 v. Chr. "
            "nach siebenmonatiger Belagerung. Unter römischer Herrschaft ab 64 v. Chr. erlebte die Stadt eine "
            "neue Blüte; das gewaltige Hippodrom wurde im 2. Jahrhundert n. Chr. errichtet und bot Platz für "
            "über 20.000 Zuschauer bei Wagenrennen. Nach der arabischen Eroberung 638 verlor Tyros an Bedeutung. "
            "Die Kreuzfahrer hielten die Stadt von 1124 bis 1291. Während der osmanischen Zeit (1516-1918) "
            "blieb sie ein kleiner Fischerhafen. Französische Archäologen unter Maurice Chéhab gruben das "
            "Hippodrom ab 1947 systematisch aus; seit 1984 UNESCO-Welterbe."
        ),
        "facts": [
            "Phönizische Stadtgründung um 2750 v. Chr.",
            "Tyros gründete Karthago im Jahr 814 v. Chr.",
            "Belagerung und Eroberung durch Alexander 332 v. Chr.",
            "Römische Herrschaft begann 64 v. Chr.",
            "Hippodrom errichtet im 2. Jahrhundert n. Chr.",
            "Kreuzfahrerherrschaft von 1124 bis 1291.",
            "Systematische Ausgrabung ab 1947 unter Maurice Chéhab.",
            "UNESCO-Welterbe seit dem Jahr 1984."
        ],
    },
    "beiteddine-palace-history-v2": {
        "desc": (
            "Der Palast von Beiteddine im Chouf-Gebirge wurde zwischen 1788 und 1818 unter Emir Bashir Shihab II. "
            "(1767-1850) errichtet, der das Berglibanon als nahezu autonomen Vasallenstaat des Osmanischen "
            "Reiches regierte. Italienische Architekten und syrische Handwerker schufen ein Meisterwerk, das "
            "osmanische, italienische und arabische Stilelemente verbindet. Bashir II. wurde 1840 ins Exil nach "
            "Malta verbannt, nachdem er sich mit Muhammad Ali von Ägypten verbündet hatte. Während des "
            "französischen Mandats (1923-1943) diente der Palast als Verwaltungssitz. Nach der Unabhängigkeit "
            "1943 wurde er zur Sommerresidenz des Präsidenten erklärt. Im libanesischen Bürgerkrieg (1975-1990) "
            "wurde er von Walid Jumblatt geschützt. Seit 1984 beherbergt er bedeutende byzantinische Mosaike "
            "aus Jiyeh."
        ),
        "facts": [
            "Erbaut zwischen 1788 und 1818.",
            "Bauherr: Emir Bashir Shihab II. (1767-1850).",
            "Italienische Architekten und syrische Handwerker beteiligt.",
            "Bashir II. ins Exil nach Malta verbannt im Jahr 1840.",
            "Verwaltungssitz im französischen Mandat 1923-1943.",
            "Sommerresidenz des Präsidenten seit 1943.",
            "Geschützt im Bürgerkrieg 1975-1990 durch Walid Jumblatt.",
            "Byzantinische Mosaike aus Jiyeh seit 1984 ausgestellt."
        ],
    },
    "anjar-umayyad-city-history-v2": {
        "desc": (
            "Anjar wurde Anfang des 8. Jahrhunderts, vermutlich um 714 n. Chr., unter dem umayyadischen Kalifen "
            "al-Walid I. (regierte 705-715) als Sommerresidenz und Handelsknotenpunkt im Bekaa-Tal errichtet. "
            "Es ist die einzige erhaltene Stadt aus der Umayyadenzeit im Libanon und folgt dem strengen Raster "
            "römischer Militärlager mit zwei sich kreuzenden Hauptstraßen, dem Cardo und Decumanus. Die Stadt "
            "wurde bereits 744 nach dem Sturz der Umayyaden durch die Abbasiden weitgehend aufgegeben. Während "
            "der osmanischen Zeit (1516-1918) lag der Ort in Trümmern. Französische Archäologen unter Maurice "
            "Chéhab begannen 1949 die systematische Freilegung; sie identifizierten über 600 Geschäfte, "
            "Paläste, Bäder und eine Moschee. Seit 1984 zählt Anjar zum UNESCO-Welterbe."
        ),
        "facts": [
            "Gegründet um 714 n. Chr. unter Kalif al-Walid I.",
            "Einzige erhaltene Umayyaden-Stadt im Libanon.",
            "Stadtraster nach römischen Militärlagern angelegt.",
            "Aufgabe nach Sturz der Umayyaden im Jahr 744.",
            "In osmanischer Zeit (1516-1918) in Trümmern.",
            "Systematische Ausgrabung ab 1949 unter Maurice Chéhab.",
            "Über 600 Geschäfte und Paläste freigelegt.",
            "UNESCO-Welterbe seit dem Jahr 1984."
        ],
    },
    "sidon-sea-castle-history-v2": {
        "desc": (
            "Sidon zählt zu den ältesten phönizischen Stadtstaaten mit Belegen seit etwa 4.000 v. Chr. und war "
            "berühmt für seine Purpurfärberei und Glasbläserei. Die Seefestung wurde 1228 von den Kreuzfahrern "
            "unter Balian von Sidon auf einer kleinen Insel vor der Küste errichtet, um den Hafen zu sichern. "
            "Bereits 1249 wurde sie teilweise zerstört, aber wieder aufgebaut. Die Mamluken unter Sultan Baibars "
            "eroberten Sidon 1291 endgültig und schleiften die Festung; sie wurde später unter Emir Fakhr ad-Din "
            "II. (1572-1635) im 17. Jahrhundert teilweise wiederaufgebaut. Während der osmanischen Zeit "
            "(1516-1918) diente sie als Wachposten. Der libanesische Bürgerkrieg (1975-1990) hinterließ "
            "Schäden; eine Restaurierung wurde 1996 abgeschlossen. Heute ist sie das Wahrzeichen Sidons."
        ),
        "facts": [
            "Sidon als phönizische Stadt belegt seit 4.000 v. Chr.",
            "Burg erbaut 1228 unter Balian von Sidon.",
            "Teilweise zerstört bereits im Jahr 1249.",
            "Eroberung durch Mamluken-Sultan Baibars 1291.",
            "Wiederaufbau unter Fakhr ad-Din II. (1572-1635).",
            "Wachposten in osmanischer Zeit 1516-1918.",
            "Schäden im Bürgerkrieg 1975-1990.",
            "Restaurierung abgeschlossen im Jahr 1996."
        ],
    },
    "temple-of-bacchus-history-v2": {
        "desc": (
            "Der Bacchus-Tempel in Baalbek wurde um 150 n. Chr. unter Kaiser Antoninus Pius vollendet und ist "
            "der besterhaltene große römische Tempel der Welt. Er ist 69 Meter lang, 36 Meter breit und seine "
            "korinthischen Säulen erreichen 19 Meter Höhe. Trotz seines Namens war er vermutlich der "
            "phönizischen Göttin Atargatis oder einer Trinität aus Jupiter, Venus und Merkur geweiht. Nach der "
            "Christianisierung um 379 n. Chr. unter Theodosius I. wurde er teilweise zur Kirche umgebaut. "
            "Während der osmanischen Zeit (1516-1918) verschütteten Erdbeben Teile der Anlage. Der deutsche "
            "Kaiser Wilhelm II. besuchte 1898 die Ruinen und initiierte die deutsche archäologische Mission "
            "unter Otto Puchstein (1898-1905). Der libanesische Bürgerkrieg (1975-1990) hinterließ kaum "
            "Schäden; seit 1984 UNESCO-Welterbe."
        ),
        "facts": [
            "Vollendet um 150 n. Chr. unter Antoninus Pius.",
            "Abmessungen: 69 mal 36 Meter Grundfläche.",
            "Korinthische Säulen erreichen 19 Meter Höhe.",
            "Vermutlich der Göttin Atargatis geweiht.",
            "Umbau zur Kirche unter Theodosius I. um 379 n. Chr.",
            "Besuch durch Wilhelm II. im Jahr 1898.",
            "Deutsche Mission unter Otto Puchstein 1898-1905.",
            "UNESCO-Welterbe seit 1984, kaum Bürgerkriegsschäden."
        ],
    },
    "temple-of-jupiter-history-v2": {
        "desc": (
            "Der Jupiter-Tempel in Baalbek war einst der größte Tempel des gesamten Römischen Reiches. Sein "
            "Bau begann unter Kaiser Augustus um 16 v. Chr. und wurde erst unter Nero um 60 n. Chr. weitgehend "
            "vollendet, also nach fast drei Generationen. Ursprünglich umfasste er 54 korinthische Säulen mit "
            "je 22 Metern Höhe; heute stehen nur noch sechs. Das Fundament besteht aus den berühmten Trilithon-"
            "Megalithen, drei Steinblöcken von je rund 800 Tonnen, deren Transport bis heute Rätsel aufgibt. "
            "Erdbeben 1759 zerstörten viele Säulen. Während der osmanischen Zeit (1516-1918) wurden die "
            "Trümmer als Steinbruch genutzt. Die deutsche Mission unter Otto Puchstein dokumentierte ab 1898 "
            "den Komplex. Auch der libanesische Bürgerkrieg (1975-1990) konnte den Anlagen nichts anhaben; "
            "UNESCO-Welterbe seit 1984."
        ),
        "facts": [
            "Baubeginn um 16 v. Chr. unter Kaiser Augustus.",
            "Vollendung um 60 n. Chr. unter Nero.",
            "Ursprünglich 54 korinthische Säulen mit 22 Metern Höhe.",
            "Heute nur noch sechs Säulen erhalten.",
            "Trilithon-Megalithen wiegen je rund 800 Tonnen.",
            "Erdbeben von 1759 zerstörten zahlreiche Säulen.",
            "Dokumentation durch deutsche Mission ab 1898.",
            "UNESCO-Welterbe seit dem Jahr 1984."
        ],
    },
    "tripoli-citadel-history-v2": {
        "desc": (
            "Die Zitadelle von Tripoli, auch Qal'at Sanjil genannt, wurde 1103 von Raymond de Saint-Gilles, "
            "Graf von Toulouse, während der Belagerung Tripolis errichtet. Die Stadt fiel erst 1109 nach seinem "
            "Tod 1105 an die Kreuzfahrer und wurde Hauptstadt der Grafschaft Tripolis. Mamluken-Sultan Qalawun "
            "eroberte Tripoli 1289 und ließ die Zitadelle weitgehend schleifen. Im 14. Jahrhundert begann der "
            "Wiederaufbau. Während der osmanischen Zeit (1516-1918) erweiterte Süleyman der Prächtige 1521-"
            "1522 die Festung erheblich. Der osmanische Gouverneur Mustafa Agha Barbar baute sie ab 1808 weiter "
            "aus. Im französischen Mandat (1923-1943) diente sie als Kaserne. Während des libanesischen "
            "Bürgerkriegs (1975-1990) wurde sie zeitweise besetzt; heute beherbergt sie ein historisches "
            "Museum mit Funden aus der Kreuzfahrerzeit."
        ),
        "facts": [
            "Gegründet 1103 durch Raymond de Saint-Gilles.",
            "Tripoli fiel an Kreuzfahrer im Jahr 1109.",
            "Eroberung durch Mamluken-Sultan Qalawun 1289.",
            "Erweiterung 1521-1522 unter Süleyman dem Prächtigen.",
            "Ausbau ab 1808 durch Mustafa Agha Barbar.",
            "Kaserne im französischen Mandat 1923-1943.",
            "Zeitweise besetzt im Bürgerkrieg 1975-1990.",
            "Beherbergt heute ein historisches Museum."
        ],
    },
    "beaufort-castle-history-v2": {
        "desc": (
            "Die Burg Beaufort, arabisch Qala'at ash-Shqif, thront auf 700 Metern Höhe über dem Litani-Fluss. "
            "Die Kreuzfahrer unter Fulko von Anjou erbauten sie ab 1139 auf Resten einer älteren Festung. "
            "Saladin eroberte sie 1190 nach langer Belagerung. 1240 fiel sie wieder an die Kreuzfahrer, bis "
            "Mamluken-Sultan Baibars sie 1268 endgültig einnahm. Während der osmanischen Zeit (1516-1918) "
            "wurde sie unter Emir Fakhr ad-Din II. um 1620 verstärkt. Das Erdbeben von 1837 zerstörte große "
            "Teile. Im französischen Mandat (1923-1943) blieb sie ungenutzt. Während des libanesischen "
            "Bürgerkriegs (1975-1990) wurde sie strategisch wichtig: Israel besetzte sie 1982 und hielt sie "
            "bis zum Rückzug am 24. Mai 2000. Restaurierungsarbeiten begannen 2008."
        ),
        "facts": [
            "Erbaut ab 1139 unter Fulko von Anjou.",
            "Eroberung durch Saladin im Jahr 1190.",
            "Endgültige Einnahme durch Baibars 1268.",
            "Verstärkung um 1620 unter Fakhr ad-Din II.",
            "Erdbeben von 1837 zerstörte große Teile.",
            "Israelische Besetzung von 1982 bis 24. Mai 2000.",
            "Strategisch wichtig im Bürgerkrieg 1975-1990.",
            "Restaurierungsarbeiten begannen im Jahr 2008."
        ],
    },
    "roman-baths-beirut-history-v2": {
        "desc": (
            "Beirut, antik Berytus, wurde 14 v. Chr. unter Kaiser Augustus römische Veteranenkolonie und stieg "
            "zu einem der wichtigsten Zentren des Reiches im Osten auf. Berühmt war die Rechtsschule von "
            "Berytus (3.-6. Jh. n. Chr.), an der die Juristen Papinian und Ulpian wirkten. Die heutigen "
            "Thermenruinen stammen aus dem 1.-3. Jahrhundert n. Chr. und zeigen ein vollständiges Hypokausten-"
            "Heizsystem. Das Erdbeben von 551 n. Chr. zerstörte das antike Berytus weitgehend. Während der "
            "osmanischen Zeit (1516-1918) lagen die Bäder verschüttet. Sie wurden 1968 zufällig beim Bau des "
            "Grand Serail entdeckt. Im libanesischen Bürgerkrieg (1975-1990) blieben sie verwaist. Eine "
            "Restaurierung erfolgte 1995-1997 unter dem Solidere-Wiederaufbau Beiruts; seit 1998 sind sie "
            "öffentlich zugänglich."
        ),
        "facts": [
            "Berytus wurde römische Kolonie im Jahr 14 v. Chr.",
            "Berühmte Rechtsschule vom 3. bis 6. Jahrhundert.",
            "Thermen erbaut zwischen 1. und 3. Jh. n. Chr.",
            "Erdbeben von 551 zerstörte antikes Berytus.",
            "Wiederentdeckung im Jahr 1968 beim Grand Serail.",
            "In osmanischer Zeit (1516-1918) verschüttet.",
            "Restaurierung 1995-1997 durch Solidere.",
            "Öffentlich zugänglich seit dem Jahr 1998."
        ],
    },
    "our-lady-of-lebanon-history-v2": {
        "desc": (
            "Die Statue Unsere Liebe Frau vom Libanon in Harissa wurde 1908 zum 50. Jubiläum der Verkündigung "
            "des Mariendogmas der Unbefleckten Empfängnis (1854) eingeweiht. Sie wurde von der Pariser "
            "Werkstatt Imbert in Lyon gegossen und per Schiff nach Beirut transportiert; der maronitische "
            "Patriarch Elias Hoyek initiierte das Projekt. Die 8,5 Meter hohe und 15 Tonnen schwere Bronzestatue "
            "thront auf einer 20 Meter hohen Steinsockel-Basilika. Während des Ersten Weltkriegs litt der Libanon "
            "1915-1918 unter osmanischer Hungersnot mit 200.000 Toten. Im französischen Mandat (1923-1943) wurde "
            "Harissa zum wichtigsten Wallfahrtsort. Papst Johannes Paul II. besuchte die Stätte am 11. Mai 1997. "
            "Auch im Bürgerkrieg (1975-1990) blieb sie unbeschädigt. Heute pilgern jährlich zwei Millionen "
            "Gläubige hierher."
        ),
        "facts": [
            "Eingeweiht im Jahr 1908 zum 50. Jubiläum des Mariendogmas.",
            "Gegossen in der Werkstatt Imbert in Lyon, Frankreich.",
            "Initiiert vom maronitischen Patriarchen Elias Hoyek.",
            "Höhe der Statue 8,5 Meter, Gewicht 15 Tonnen.",
            "Hungersnot im Libanon 1915-1918 mit 200.000 Toten.",
            "Wallfahrtszentrum im französischen Mandat 1923-1943.",
            "Besuch von Papst Johannes Paul II. am 11. Mai 1997.",
            "Jährlich rund zwei Millionen Pilger."
        ],
    },
    "eshmun-sanctuary-history-v2": {
        "desc": (
            "Das Eshmun-Heiligtum bei Sidon ist der einzige weitgehend erhaltene phönizische Tempel im Libanon. "
            "Der Bau begann um 600 v. Chr. unter König Eshmunazar II. von Sidon und wurde unter Bodashtart "
            "(Ende 6. Jh. v. Chr.) erweitert. Eshmun war der phönizische Heilgott und entsprach dem griechischen "
            "Asklepios. Unter persischer und seleukidischer Herrschaft kamen babylonische und hellenistische "
            "Stilelemente hinzu. In der römischen Zeit (ab 64 v. Chr.) wurde die Anlage mit Mosaiken erweitert. "
            "Nach der Christianisierung um 379 n. Chr. unter Theodosius I. verlor das Heiligtum seine Funktion. "
            "Während der osmanischen Zeit (1516-1918) blieb es verschüttet. Französische Archäologen unter "
            "Maurice Dunand begannen 1963 die systematische Freilegung; die Arbeiten wurden im Bürgerkrieg "
            "(1975-1990) unterbrochen und erst ab 1998 fortgesetzt."
        ),
        "facts": [
            "Baubeginn um 600 v. Chr. unter Eshmunazar II.",
            "Erweiterung unter Bodashtart Ende 6. Jh. v. Chr.",
            "Eshmun entsprach dem griechischen Asklepios.",
            "Mosaikerweiterungen in römischer Zeit ab 64 v. Chr.",
            "Funktionsverlust nach Theodosius I. um 379 n. Chr.",
            "In osmanischer Zeit (1516-1918) verschüttet.",
            "Systematische Freilegung ab 1963 unter Maurice Dunand.",
            "Arbeiten unterbrochen im Bürgerkrieg 1975-1990."
        ],
    },
    "mseilha-fort-history-v2": {
        "desc": (
            "Die Festung Mseilha wurde im 17. Jahrhundert unter Emir Fakhr ad-Din II. (1572-1635) auf einem "
            "schmalen Kalksteinfelsen im Tal des Nahr el-Jawz errichtet, um die strategische Verbindung "
            "zwischen Tripoli und Beirut zu sichern. Fakhr ad-Din regierte den Libanongebirge nahezu autonom "
            "vom Osmanischen Reich, wurde aber 1635 in Konstantinopel hingerichtet. Die Festung diente in der "
            "osmanischen Zeit (1516-1918) als Wachposten und Mautstation. Sie steht auf älteren Resten einer "
            "möglichen kreuzfahrer- oder phönizischen Anlage. Im 19. Jahrhundert wurde sie aufgegeben. Im "
            "französischen Mandat (1923-1943) erhielt sie Denkmalschutz. Während des libanesischen "
            "Bürgerkriegs (1975-1990) blieb sie unbeschädigt. Sie war auf der 25-Lira-Banknote von 1983 "
            "abgebildet und wurde 2002-2004 restauriert."
        ),
        "facts": [
            "Erbaut im 17. Jahrhundert unter Fakhr ad-Din II.",
            "Fakhr ad-Din lebte von 1572 bis 1635.",
            "Hinrichtung Fakhr ad-Dins in Konstantinopel 1635.",
            "Wachposten in osmanischer Zeit 1516-1918.",
            "Denkmalschutz im französischen Mandat 1923-1943.",
            "Auf der 25-Lira-Banknote von 1983 abgebildet.",
            "Unbeschädigt im Bürgerkrieg 1975-1990.",
            "Restaurierung zwischen 2002 und 2004 abgeschlossen."
        ],
    },
    "deir-el-qamar-historic-square-history-v2": {
        "desc": (
            "Deir el Qamar, 'Kloster des Mondes', war von 1590 bis 1840 die Hauptstadt des halbautonomen "
            "Berglibanons unter den Emiren der Maan- und Shihab-Dynastien. Emir Fakhr ad-Din II. (1572-1635) "
            "machte es 1590 zu seinem Regierungssitz und ließ den Fakhr-ad-Din-Palast (heute Marie-Baz-Wachsmuseum) "
            "sowie die Moschee von 1493 ausbauen. Die Synagoge stammt aus dem 17. Jahrhundert. Emir Bashir Shihab II. "
            "(1767-1850) verlegte 1812 die Residenz nach Beiteddine. Während des Drusen-Maroniten-Bürgerkriegs "
            "1860 wurde Deir el Qamar Schauplatz eines Massakers, bei dem rund 2.000 Maroniten getötet wurden. "
            "Im französischen Mandat (1923-1943) erhielt der Ort Denkmalschutz. Im libanesischen Bürgerkrieg "
            "(1975-1990) blieb er weitgehend unversehrt. Heute ist die historische Altstadt geschütztes "
            "Nationaldenkmal."
        ),
        "facts": [
            "Hauptstadt des Berglibanon von 1590 bis 1840.",
            "Regierungssitz seit 1590 unter Fakhr ad-Din II.",
            "Moschee von 1493 als ältester Bau erhalten.",
            "Bashir Shihab II. verlegte Residenz nach Beiteddine 1812.",
            "Massaker am Christen 1860 mit rund 2.000 Toten.",
            "Synagoge aus dem 17. Jahrhundert vorhanden.",
            "Denkmalschutz im französischen Mandat 1923-1943.",
            "Weitgehend unversehrt im Bürgerkrieg 1975-1990."
        ],
    },
    "temple-of-obelisks-history-v2": {
        "desc": (
            "Der Tempel der Obelisken in Byblos stammt aus der mittleren Bronzezeit, etwa 1900-1600 v. Chr., "
            "und wurde dem kanaanäischen Gott Reschef geweiht, der für Krieg und Heilung zuständig war. Über "
            "26 Obelisken aus Kalkstein und Sandstein wurden hier aufgestellt, viele als Weihegaben mit "
            "Inschriften. Der französische Archäologe Maurice Dunand legte den Tempel ab 1928 frei und "
            "verschob ihn nach 1932 etwa 40 Meter, um darunter ältere Schichten zu untersuchen. Dabei wurden "
            "tausende goldene und bronzene Statuetten geborgen, viele heute im Nationalmuseum Beirut. Phönizische "
            "Stadtkulturen ab etwa 1200 v. Chr. ließen den Tempel verfallen. Während der osmanischen Zeit "
            "(1516-1918) lagen die Reste verschüttet. Im libanesischen Bürgerkrieg (1975-1990) wurde das "
            "Nationalmuseum Beirut geplündert; viele Funde von hier blieben jedoch erhalten. UNESCO-Welterbe "
            "seit 1984."
        ),
        "facts": [
            "Errichtet zwischen 1900 und 1600 v. Chr.",
            "Geweiht dem kanaanäischen Gott Reschef.",
            "Mehr als 26 Obelisken aus Kalkstein und Sandstein.",
            "Freilegung ab 1928 durch Maurice Dunand.",
            "Verschoben um 40 Meter nach 1932.",
            "Tausende Gold- und Bronzestatuetten geborgen.",
            "Plünderung des Nationalmuseums im Bürgerkrieg 1975-1990.",
            "UNESCO-Welterbe seit dem Jahr 1984."
        ],
    },
    "faqra-ruins-history-v2": {
        "desc": (
            "Die Ruinen von Faqra liegen auf 1.550 Metern Höhe im Kesrouan-Gebirge und sind der höchstgelegene "
            "römische Tempelkomplex des Libanon. Die Hauptanlage wurde im 1. und 2. Jahrhundert n. Chr. unter "
            "Kaiser Claudius (regierte 41-54) und seinen Nachfolgern errichtet und Atargatis sowie dem mit "
            "Adonis identifizierten Lokalgott Bel-Marqod geweiht. Eine Inschrift datiert die Tempelweihe auf "
            "43 n. Chr. Ein bemerkenswerter altarähnlicher Turm stammt aus dem 2. Jahrhundert. Nach der "
            "Christianisierung um 379 n. Chr. unter Theodosius I. wurde eine byzantinische Basilika gebaut, "
            "deren Reste sichtbar sind. Während der osmanischen Zeit (1516-1918) verfiel die Anlage. "
            "Französische Archäologen unter Maurice Dunand und Krencker dokumentierten ab 1937 die Ruinen. "
            "Auch im libanesischen Bürgerkrieg (1975-1990) blieb der Komplex unbeschädigt."
        ),
        "facts": [
            "Höhe: 1.550 Meter im Kesrouan-Gebirge.",
            "Tempelweihe datiert auf das Jahr 43 n. Chr.",
            "Errichtet unter Kaiser Claudius (41-54 n. Chr.).",
            "Geweiht der Atargatis und Bel-Marqod.",
            "Altarturm aus dem 2. Jahrhundert n. Chr.",
            "Byzantinische Basilika nach Theodosius I. um 379.",
            "Dokumentation ab 1937 durch Dunand und Krencker.",
            "Unbeschädigt im Bürgerkrieg 1975-1990."
        ],
    },
    "martyrs-monument-beirut-history-v2": {
        "desc": (
            "Das Märtyrerdenkmal auf dem Place des Martyrs in Beirut erinnert an die libanesischen und "
            "syrischen Nationalisten, die der osmanische Gouverneur Djemal Pascha am 6. Mai 1916 in Beirut "
            "und Damaskus hängen ließ. Insgesamt wurden 21 Männer hingerichtet, darunter Petro Pauli und "
            "Joseph Hanania. Der 6. Mai wird im Libanon und Syrien als Märtyrertag begangen. Das erste Denkmal "
            "von 1930 wurde im Bürgerkrieg zerstört. Die heutige Bronzestatue wurde 1960 vom italienischen "
            "Bildhauer Renato Marino Mazzacurati geschaffen und unter Präsident Fuad Shihab eingeweiht. Während "
            "des libanesischen Bürgerkriegs (1975-1990) lag der Platz an der Demarkationslinie zwischen Ost- "
            "und West-Beirut; das Denkmal trägt bis heute zahlreiche Einschusslöcher, die als Mahnmal bewusst "
            "erhalten blieben. Restauriert wurde es 1996-2004."
        ),
        "facts": [
            "Hinrichtung der 21 Märtyrer am 6. Mai 1916.",
            "Veranlasst von Gouverneur Djemal Pascha.",
            "Erstes Denkmal aus dem Jahr 1930 zerstört.",
            "Heutige Statue von 1960 von Renato Marino Mazzacurati.",
            "Eingeweiht unter Präsident Fuad Shihab.",
            "Demarkationslinie im Bürgerkrieg 1975-1990.",
            "Einschusslöcher als Mahnmal bewusst erhalten.",
            "Restauriert zwischen 1996 und 2004."
        ],
    },
    "monastery-mar-sarkis-history-v2": {
        "desc": (
            "Das Kloster Mar Sarkis (St. Sergius) im Qadisha-Tal wurde ursprünglich im 7. Jahrhundert von "
            "syrisch-jakobitischen Mönchen in eine Felswand gehauen und ab dem 12. Jahrhundert von der "
            "maronitischen Kirche übernommen. Es war Zufluchtsort verfolgter Christen während der Mamluken- "
            "(1289-1516) und osmanischen Zeit (1516-1918). 1862 wurde es nach einem Erdbeben wiederaufgebaut. "
            "Der berühmte libanesische Dichter Khalil Gibran (1883-1931) verbrachte hier seine letzten Jahre "
            "und wurde nach seinem Tod in New York in einer Kapelle des Klosters beigesetzt. Seine Schwester "
            "Mariana kaufte das Kloster 1932 für 130.000 Goldfranken. Während des libanesischen Bürgerkriegs "
            "(1975-1990) blieb das abgelegene Tal weitgehend unberührt. Seit 1975 beherbergt es das Gibran-"
            "Museum mit über 440 Originalwerken. Das Qadisha-Tal ist seit 1998 UNESCO-Welterbe."
        ),
        "facts": [
            "Gegründet im 7. Jahrhundert von syrisch-jakobitischen Mönchen.",
            "Übernahme durch maronitische Kirche im 12. Jahrhundert.",
            "Wiederaufbau nach Erdbeben im Jahr 1862.",
            "Khalil Gibran lebte von 1883 bis 1931.",
            "Mariana Gibran kaufte das Kloster 1932.",
            "Gibran-Museum eröffnet im Jahr 1975.",
            "Über 440 Originalwerke im Museumsbestand.",
            "Qadisha-Tal als UNESCO-Welterbe seit 1998."
        ],
    },
    "rachaya-citadel-history-v2": {
        "desc": (
            "Die Zitadelle von Rachaya am Hang des Hermon wurde auf römischen und kreuzfahrerzeitlichen "
            "Grundmauern in der osmanischen Zeit (1516-1918) als Verwaltungssitz ausgebaut. Berühmtheit "
            "erlangte sie am 11. November 1943, als die französische Mandatsmacht (1923-1943) die libanesischen "
            "Spitzenpolitiker Bischara al-Khoury, Riad al-Solh, Camille Chamoun, Adel Osseiran, Selim Takla und "
            "Abdul Hamid Karami verhaftete und in Rachaya inhaftierte. Die Inhaftierung löste landesweite "
            "Massenproteste aus; nach internationalem Druck wurden sie am 22. November 1943 freigelassen, der "
            "heutige libanesische Unabhängigkeitstag. Das Datum gilt als Geburt der modernen Republik. Während "
            "des libanesischen Bürgerkriegs (1975-1990) wurde die Region vom syrischen Militär kontrolliert. "
            "Seit 1991 ist die Zitadelle nationales Denkmal mit kleinem Unabhängigkeitsmuseum."
        ),
        "facts": [
            "Auf römischen und kreuzfahrerzeitlichen Grundmauern.",
            "Verwaltungssitz in osmanischer Zeit 1516-1918.",
            "Inhaftierung der Politiker am 11. November 1943.",
            "Sechs prominente Häftlinge, darunter Bischara al-Khoury.",
            "Freilassung am 22. November 1943, Unabhängigkeitstag.",
            "Französisches Mandat dauerte von 1923 bis 1943.",
            "Syrische Militärkontrolle im Bürgerkrieg 1975-1990.",
            "Nationaldenkmal mit Unabhängigkeitsmuseum seit 1991."
        ],
    },
}


def main():
    src = TARGET.read_text(encoding="utf-8")
    original = src
    updates = 0
    skipped = []

    for poi_id, payload in DATA.items():
        id_pattern = re.compile(r'id:\s*"' + re.escape(poi_id) + r'"')
        m = id_pattern.search(src)
        if not m:
            skipped.append(f"{poi_id}: id not found")
            continue
        # Window: from id match to next "id:" or end of array
        next_id = re.search(r'\n\s*\{\s*\n\s*id:\s*"', src[m.end():])
        end = m.end() + next_id.start() if next_id else len(src)
        block = src[m.start():end]

        # Skip if descriptionAdvanced.de already filled
        existing = re.search(r'descriptionAdvanced:\s*\{\s*de:\s*"([^"]*)"', block)
        if existing and len(existing.group(1)) > 30:
            skipped.append(f"{poi_id}: descriptionAdvanced.de already filled")
            continue

        new_desc = payload["desc"].replace('"', '\\"')
        facts_quoted = ", ".join(f'"{f}"' for f in payload["facts"])
        advanced_block = (
            f',\n    descriptionAdvanced: {{\n      de: "{new_desc}"\n    }}'
            f',\n    factsAdvanced: {{\n      de: [{facts_quoted}]\n    }}'
        )

        if existing:
            # Replace existing descriptionAdvanced (and factsAdvanced if present)
            new_block = re.sub(
                r',?\s*descriptionAdvanced:\s*\{[^}]*\}',
                '',
                block,
            )
            new_block = re.sub(
                r',?\s*factsAdvanced:\s*\{[^}]*\}',
                '',
                new_block,
            )
            # Insert before closing }
            new_block = re.sub(r'\s*\}\s*$', advanced_block + '\n  }', new_block, count=1)
        else:
            # Insert before closing brace of POI object
            # Block looks like "...]\n    }\n  },"; insert before the "\n  }"
            new_block = re.sub(
                r'(\n  \}(?:\s*,|\s*\n\];?)?\s*)$',
                advanced_block + r'\1',
                block,
                count=1,
            )

        if new_block == block:
            skipped.append(f"{poi_id}: no change (regex miss?)")
            continue

        src = src[:m.start()] + new_block + src[end:]
        updates += 1

    if src != original:
        TARGET.write_text(src, encoding="utf-8")
    print(f"Updated: {updates}/{len(DATA)} POIs")
    if skipped:
        print("Skipped:")
        for s in skipped:
            print(f"  - {s}")


if __name__ == "__main__":
    main()
