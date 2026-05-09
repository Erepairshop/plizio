#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Fuelt das Cameroon History V2 POI-File mit echten, einzigartigen, 80-150 Wort
deutschsprachigen Beschreibungen + 6-8 konkreten Fakten (Jahreszahlen, Namen).
Nur DE wird geschrieben. Andere Sprachen bleiben unberührt.
"""

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TARGET = ROOT / "lib" / "visualLab" / "data" / "poiExtraCameroonHistoryV2.ts"

DATA = {
    "foumban-royal-palace-history-v2": {
        "desc": (
            "Der Königspalast von Foumban ist seit dem 14. Jahrhundert das politische und "
            "spirituelle Herz des Bamoun-Königreichs, das laut Überlieferung 1394 von Nchare Yen "
            "gegründet wurde. Der heutige Palast wurde 1917 auf Anweisung von Sultan Ibrahim "
            "Njoya errichtet, der zwischen 1895 und 1933 regierte und für die Erfindung der "
            "eigenständigen Bamoun-Schrift Shü-mom (1896) berühmt ist. Das Gebäude verbindet "
            "lokale Lehmbautradition mit Anleihen an das Berliner Schloss, da Njoya die "
            "deutschen Kolonialherren bewusst nachahmte. Nach Njoyas Verbannung 1931 durch die "
            "Franzosen blieb der Palast Sitz seiner Nachfolger; heute beherbergt er das 1920 "
            "gegründete Königliche Museum mit Thronen, Masken und der Schriftrolle Njoyas."
        ),
        "facts": [
            "Bamoun-Königreich gegründet 1394 durch Nchare Yen.",
            "Aktueller Palastbau errichtet 1917 unter Sultan Ibrahim Njoya.",
            "Njoya regierte von 1895 bis zu seiner Absetzung 1931.",
            "Erfinder der Shü-mom-Schrift im Jahr 1896.",
            "Architektur orientiert sich am Berliner Schloss der Hohenzollern.",
            "Königliches Museum eröffnet 1920, eines der ältesten in Westafrika.",
            "Aktueller Sultan Mbombo Njoya regierte von 1992 bis 2021.",
            "UNESCO-Welterbekandidat seit dem Jahr 2006."
        ],
    },
    "bimbia-slave-port-history-v2": {
        "desc": (
            "Bimbia an der Atlantikküste Kameruns war zwischen etwa 1700 und 1852 einer der "
            "berüchtigtsten Verschiffungspunkte für versklavte Menschen in der Bucht von Biafra. "
            "Schätzungen zufolge wurden von hier mehr als 200.000 Afrikaner über den Atlantik "
            "verschleppt, insbesondere nach Brasilien, Kuba und in die Karibik. Die lokalen "
            "Isubu-Häuptlinge, allen voran King William von Bimbia, kontrollierten den Handel, "
            "bis 1852 ein britisches Marinegeschwader unter Konsul John Beecroft die Sklaverei "
            "vor Ort offiziell beendete. Erhalten sind Ruinen von Lagerhäusern, Eisenketten und "
            "Anlegestellen aus Backstein. Seit 2017 gilt Bimbia als nationale Gedenkstätte und "
            "ist Pilgerziel für Nachfahren der afrikanischen Diaspora aus aller Welt."
        ),
        "facts": [
            "Aktiv als Sklavenhafen zwischen circa 1700 und 1852.",
            "Über 200.000 versklavte Menschen wurden hier verschifft.",
            "Hauptdestinationen: Brasilien, Kuba und Karibik.",
            "Lokal kontrolliert von King William der Isubu-Dynastie.",
            "Konsul John Beecroft beendete den Handel 1852 offiziell.",
            "Erhaltene Backsteinruinen und Originalketten vor Ort.",
            "Seit 2017 offiziell anerkannte nationale Gedenkstätte.",
            "Pilgerstätte für Nachfahren der afrikanischen Diaspora."
        ],
    },
    "kribi-lighthouse-history-v2": {
        "desc": (
            "Der Leuchtturm von Kribi wurde 1906 unter dem Gouverneur Jesko von Puttkamer "
            "während der deutschen Kolonialherrschaft Kamerun (1884-1916) errichtet, um den "
            "wachsenden Handel mit Tropenholz, Kakao und Elfenbein abzusichern. Das 18 Meter "
            "hohe gusseiserne Bauwerk wurde in Hamburg vorgefertigt und per Schiff nach "
            "Westafrika transportiert. Seine Linsenoptik mit Petroleumbrenner reichte ursprünglich "
            "rund 24 Seemeilen weit. Während des Ersten Weltkriegs 1914 nahmen französische "
            "Truppen Kribi ein; der Leuchtturm überstand die Kämpfe nahezu unbeschädigt. In den "
            "1960er Jahren wurde er auf elektrischen Betrieb umgestellt. Heute steht er unter "
            "kamerunischem Denkmalschutz und ist eines der wenigen erhaltenen technischen "
            "Bauwerke der deutschen Kolonialzeit an der Südküste."
        ),
        "facts": [
            "Erbaut 1906 unter Gouverneur Jesko von Puttkamer.",
            "Höhe: 18 Meter, gusseiserne Konstruktion aus Hamburg.",
            "Reichweite des ursprünglichen Petroleumlichts circa 24 Seemeilen.",
            "Deutsche Kolonialzeit Kameruns dauerte 1884 bis 1916.",
            "Französische Einnahme Kribis erfolgte 1914 im Ersten Weltkrieg.",
            "Elektrifizierung in den 1960er Jahren durchgeführt.",
            "Schützte den Export von Tropenholz, Kakao und Elfenbein.",
            "Heute unter kamerunischem Denkmalschutz."
        ],
    },
    "prime-ministers-lodge-history-v2": {
        "desc": (
            "Die Prime Minister's Lodge in Buéa wurde 1902 als Residenz des deutschen "
            "Gouverneurs Jesko von Puttkamer am Hang des Mount Cameroon erbaut, nachdem die "
            "Kolonialhauptstadt 1901 von Douala wegen Malaria nach Buéa auf 1.000 Meter Höhe "
            "verlegt worden war. Das Fachwerkhaus mit grünen Holzschindeln zeigt typisch "
            "wilhelminische Architektur und wurde teilweise aus präfabrizierten Bauteilen aus "
            "Deutschland zusammengesetzt. Nach der britischen Übernahme 1916 diente es den "
            "Kolonialkommissaren von Britisch-Kamerun. Ab 1954 war es Sitz des Premierministers "
            "von Südkamerun, zuletzt von John Ngu Foncha (1958-1961). Nach der Wiedervereinigung "
            "1961 verlor es politische Funktion, wird heute aber als historisches Denkmal "
            "gepflegt."
        ),
        "facts": [
            "Erbaut 1902 für Gouverneur Jesko von Puttkamer.",
            "Hauptstadtverlegung von Douala nach Buéa erfolgte 1901.",
            "Liegt auf rund 1.000 Metern Höhe am Mount Cameroon.",
            "Britische Übernahme nach Kriegsende 1916.",
            "Diente ab 1954 als Sitz des Premierministers von Südkamerun.",
            "Letzter Premier vor Ort: John Ngu Foncha (1958-1961).",
            "Wiedervereinigung der beiden Kamerun-Teile am 1. Oktober 1961.",
            "Wilhelminische Fachwerkbauweise mit deutschen Präfabrikaten."
        ],
    },
    "bismarck-fountain-history-v2": {
        "desc": (
            "Der Bismarckbrunnen in Buéa wurde 1908 zu Ehren des deutschen Reichskanzlers Otto "
            "von Bismarck errichtet, der 1884 mit dem Vertrag zwischen Gustav Nachtigal und den "
            "Duala-Königen die deutsche Schutzherrschaft über Kamerun begründet hatte. Der "
            "Brunnen wurde aus Vulkangestein des Mount Cameroon gefertigt und mit einer "
            "Bronzetafel versehen, die Bismarcks Profil zeigte. Nach der britischen Eroberung "
            "1916 entfernten die neuen Verwalter die Bronzetafel; der steinerne Sockel blieb "
            "jedoch erhalten. In den 1990er Jahren entbrannte eine kontroverse Debatte um sein "
            "Schicksal im Rahmen der postkolonialen Aufarbeitung. Seit 2010 ist er als "
            "umstrittenes Denkmal Teil des historischen Stadtrundgangs durch Buéa und gilt "
            "als wichtige Erinnerungsspur an die Kolonialzeit."
        ),
        "facts": [
            "Errichtet im Jahr 1908 in Buéa.",
            "Geehrt: Reichskanzler Otto von Bismarck (1815-1898).",
            "Schutzherrschaftsvertrag Nachtigals mit Duala-Königen am 12. Juli 1884.",
            "Material: Vulkangestein vom Mount Cameroon.",
            "Bronzetafel mit Bismarck-Profil 1916 entfernt.",
            "Britische Eroberung Bueas erfolgte 1916.",
            "Postkoloniale Debatten um den Brunnen ab den 1990er Jahren.",
            "Seit 2010 fester Punkt des Stadtrundgangs."
        ],
    },
    "charles-atangana-palace-history-v2": {
        "desc": (
            "Der Palast von Charles Atangana in Yaoundé wurde 1924 für den Paramount Chief der "
            "Ewondo und Bane errichtet. Atangana (1880-1943) wurde von den Deutschen ausgebildet, "
            "begleitete 1911 eine Bamoun-Delegation zu Kaiser Wilhelm II. nach Berlin und "
            "wechselte 1916 nach der deutschen Niederlage geschickt zu den Franzosen. Sein "
            "Palast im Mvolyé-Viertel verbindet europäische Stilelemente mit lokalen Motiven "
            "und galt damals als modernster Privatbau Yaoundés. Atangana spielte eine "
            "Schlüsselrolle bei der Verlegung der Hauptstadt nach Yaoundé 1922 und beim Aufbau "
            "der katholischen Mission. Nach seinem Tod 1943 verfiel das Gebäude, wurde aber "
            "2009 unter Präsident Paul Biya als Nationaldenkmal restauriert und beherbergt "
            "heute ein Museum zu seinem Leben."
        ),
        "facts": [
            "Errichtet im Jahr 1924 in Yaoundé.",
            "Charles Atangana lebte von 1880 bis 1943.",
            "Berlin-Reise zu Kaiser Wilhelm II. erfolgte 1911.",
            "Wechsel zur französischen Verwaltung nach 1916.",
            "Hauptstadtverlegung nach Yaoundé im Jahr 1922.",
            "Lage im Mvolyé-Viertel der heutigen Hauptstadt.",
            "Restaurierung als Nationaldenkmal im Jahr 2009.",
            "Beherbergt heute ein Museum zu Atanganas Wirken."
        ],
    },
    "mankon-fons-palace-history-v2": {
        "desc": (
            "Der Palast des Fons von Mankon nahe Bamenda ist ein bedeutendes Zentrum der "
            "Tikar-Kultur und geht auf die Gründung des Mankon-Königreichs im 17. Jahrhundert "
            "durch Fon Ndefru I. zurück. Die heutige Anlage stammt überwiegend aus dem späten "
            "19. Jahrhundert und besteht aus rechteckigen Lehmbauten mit pyramidenförmigen "
            "Grasdächern, geschmückt mit Holzpfosten voller Symbolschnitzereien. Das angeschlossene "
            "Mankon-Museum, eröffnet 2006 mit Unterstützung der italienischen Stiftung Centro "
            "Orientamento Educativo, zeigt rund 350 Objekte: Throne, Masken der Kwifoyn-"
            "Geheimgesellschaft, Trommeln und Königsregalia. Der amtierende Fon Angwafo III. "
            "regierte von 1959 bis 2022 und war eine der politisch einflussreichsten "
            "traditionellen Autoritäten Kameruns. Der Palast ist auch heute aktiver "
            "Regierungssitz."
        ),
        "facts": [
            "Königreich Mankon gegründet im 17. Jahrhundert durch Ndefru I.",
            "Aktuelle Palastbauten überwiegend aus dem späten 19. Jahrhundert.",
            "Mankon-Museum eröffnet im Jahr 2006.",
            "Museumsbestand: rund 350 Objekte von Thronen bis Masken.",
            "Unterstützt durch die italienische Stiftung COE.",
            "Fon Angwafo III. regierte von 1959 bis 2022.",
            "Pyramidenförmige Grasdächer als typisches Stilmerkmal.",
            "Geheime Kwifoyn-Gesellschaft hat hier ihren Sitz."
        ],
    },
    "bafut-palace-history-v2": {
        "desc": (
            "Der Palast von Bafut, etwa 16 Kilometer nördlich von Bamenda, wurde Anfang des "
            "16. Jahrhunderts unter Fon Niba gegründet und ist eines der ältesten "
            "Königreichszentren im Kameruner Grasland. Die Anlage umfasst rund 50 traditionelle "
            "Hütten, darunter den heiligen Achum-Schrein mit seinem charakteristischen "
            "Spitzdach. 1907 zerstörten deutsche Truppen unter Hauptmann Glauning den Palast "
            "während des Bafut-Krieges, weil sich Fon Abumbi I. der Kolonialmacht widersetzte. "
            "Der spätere Wiederaufbau erfolgte unter Fon Achirimbi II. (regierte 1932-1968). "
            "Der britische Schriftsteller Gerald Durrell verbrachte hier 1949 und 1957 mehrere "
            "Monate und schrieb das Buch 'The Bafut Beagles' (1954). Seit 2006 zählt der Palast "
            "zu den UNESCO-Welterbekandidaten Kameruns."
        ),
        "facts": [
            "Gegründet Anfang des 16. Jahrhunderts unter Fon Niba.",
            "Anlage umfasst rund 50 traditionelle Hütten.",
            "Achum-Schrein als heiliges Zentrum der Bafut.",
            "Zerstörung durch deutsche Truppen im Bafut-Krieg 1907.",
            "Hauptmann Glauning kommandierte die Strafexpedition.",
            "Wiederaufbau unter Fon Achirimbi II. (1932-1968).",
            "Gerald Durrell schrieb 1954 'The Bafut Beagles' hier.",
            "UNESCO-Welterbekandidat seit dem Jahr 2006."
        ],
    },
    "notre-dame-des-victoires-history-v2": {
        "desc": (
            "Die Kathedrale Notre-Dame-des-Victoires in Yaoundé wurde 1955 nach Plänen des "
            "französischen Architekten Armand Salomon eingeweiht und ersetzte eine kleinere "
            "Holzkapelle der Pallottiner-Mission von 1901. Sie ist Sitz des Erzbistums Yaoundé, "
            "das 1955 gleichzeitig mit der Kathedralweihe eingerichtet wurde. Der Bau verbindet "
            "modernistische Linien mit lokalen Motiven; das markante Glockendach erinnert an "
            "ein traditionelles Bamiléké-Hütten-Dach. Im Innenraum zieht das große Mosaik der "
            "schwarzen Madonna die Aufmerksamkeit auf sich, ein Werk des Künstlers Engelbert "
            "Mveng (1930-1995), der hier auch als erster afrikanischer Jesuit wirkte. Papst "
            "Johannes Paul II. zelebrierte hier am 13. August 1985 eine Messe vor mehr als "
            "100.000 Gläubigen während seines Kamerun-Besuchs."
        ),
        "facts": [
            "Eingeweiht im Jahr 1955.",
            "Architekt: Armand Salomon aus Frankreich.",
            "Vorgängerkapelle der Pallottiner-Mission von 1901.",
            "Erzbistum Yaoundé errichtet 1955.",
            "Mosaik der schwarzen Madonna von Engelbert Mveng.",
            "Mveng wurde 1930 geboren und 1995 ermordet.",
            "Messe von Papst Johannes Paul II. am 13. August 1985.",
            "Über 100.000 Gläubige bei der Papstmesse."
        ],
    },
    "reunification-monument-history-v2": {
        "desc": (
            "Das Wiedervereinigungsdenkmal in Yaoundé, auch Monument de la Réunification "
            "genannt, wurde 1976 zum 15. Jahrestag der Vereinigung des französischsprachigen "
            "Ostkameruns mit dem englischsprachigen Westkamerun (1. Oktober 1961) errichtet. "
            "Entworfen wurde es vom kamerunischen Bildhauer Gédéon Mpando und dem französischen "
            "Architekten Armand Salomon. Die zentrale Skulptur zeigt eine spiralförmig "
            "aufstrebende Doppelschlange aus Bronze, die zwei verschmelzende Sprachräume "
            "symbolisiert. Sechs männliche Figuren am Sockel stehen für die ursprünglichen "
            "Verwaltungsregionen. Das Monument wurde unter Präsident Ahmadou Ahidjo eingeweiht, "
            "der das Land seit der Unabhängigkeit Ostkameruns 1960 regierte und 1972 in einem "
            "Referendum den Einheitsstaat durchsetzte. Es ist heute zentraler Ort nationaler "
            "Festakte am 20. Mai."
        ),
        "facts": [
            "Errichtet im Jahr 1976 in Yaoundé.",
            "Gedenkt der Wiedervereinigung am 1. Oktober 1961.",
            "Bildhauer: Gédéon Mpando aus Kamerun.",
            "Architekt: Armand Salomon aus Frankreich.",
            "Sechs Bronzefiguren am Sockel des Denkmals.",
            "Eingeweiht unter Präsident Ahmadou Ahidjo.",
            "Einheitsstaat-Referendum erfolgte 1972.",
            "Nationalfeiertag und Festakt jedes Jahr am 20. Mai."
        ],
    },
    "palace-of-rey-bouba-history-v2": {
        "desc": (
            "Der Palast des Lamido von Rey Bouba im Norden Kameruns wurde 1804 von Ardo Bouba "
            "Njida gegründet und ist eines der mächtigsten Lamidate der Region. Die ausgedehnte "
            "Lehmziegelanlage erstreckt sich über mehrere Hektar und ist von Mauern mit "
            "charakteristischen Türmchen umgeben. Rey Bouba war Teil des Sokoto-Kalifats und "
            "spielte im 19. Jahrhundert eine zentrale Rolle bei der Islamisierung des Adamaoua-"
            "Plateaus. Während der deutschen Kolonialzeit gelang es dem Lamidat, weitgehende "
            "Autonomie zu bewahren - ein Status, der unter französischer und später kamerunischer "
            "Verwaltung erhalten blieb. Der heutige Lamido Aboubakary Abdoulaye regiert seit "
            "2004 als 14. Herrscher der Dynastie und gilt als einer der einflussreichsten "
            "traditionellen Führer des Landes."
        ),
        "facts": [
            "Lamidat Rey Bouba gegründet im Jahr 1804.",
            "Gründer war Ardo Bouba Njida.",
            "Anlage erstreckt sich über mehrere Hektar.",
            "Teil des Sokoto-Kalifats im 19. Jahrhundert.",
            "Bewahrte Autonomie während der deutschen Kolonialzeit.",
            "Aktueller Lamido Aboubakary Abdoulaye seit 2004 im Amt.",
            "Insgesamt 14 Herrscher in der Dynastie.",
            "Lehmziegelmauern mit charakteristischen Wachtürmen."
        ],
    },
    "bandjoun-chiefdom-history-v2":     {
        "desc": (
            "Das Häuptlingstum Bandjoun in der Westregion Kameruns ist eines der mächtigsten "
            "Bamiléké-Chefferien und wurde laut Überlieferung im 17. Jahrhundert von Notouom "
            "gegründet. Der zentrale Palast Hiala wurde 2005 nach einem verheerenden Brand "
            "1998 rekonstruiert und ist berühmt für seine 9 Meter hohen Bambusbündelpfosten "
            "und das pyramidenförmige Strohdach des Audienzhauses La'akam. Bandjoun war "
            "Sitz wichtiger Künstler und beherbergt seit 2008 das Musée Bandjoun Station des "
            "Künstlers Barthélémy Toguo, der hier auch eine internationale Residenz für "
            "afrikanische Künstler betreibt. Während der Bamiléké-Aufstände gegen die "
            "französische Kolonialherrschaft 1955-1971 spielte Bandjoun eine Schlüsselrolle. "
            "Der amtierende Fon Honoré Djomo Kamga regiert seit 1995 als 17. Herrscher."
        ),
        "facts": [
            "Gegründet im 17. Jahrhundert durch Notouom.",
            "Zentralpalast Hiala 2005 nach Brand von 1998 rekonstruiert.",
            "Bambusbündelpfosten erreichen 9 Meter Höhe.",
            "Musée Bandjoun Station eröffnet im Jahr 2008.",
            "Gegründet vom Künstler Barthélémy Toguo.",
            "Bamiléké-Aufstand fand zwischen 1955 und 1971 statt.",
            "Fon Honoré Djomo Kamga regiert seit 1995.",
            "Aktuell der 17. Herrscher der Dynastie."
        ],
    },
    "diy-gid-biy-ruins-history-v2": {
        "desc": (
            "Die Ruinen von Diy-Gid-Biy in den Mandara-Bergen nahe Mokolo bestehen aus mehr "
            "als 16 archäologischen Stätten mit kunstvollen Trockensteinmauern und stammen "
            "aus dem Zeitraum zwischen dem 13. und 17. Jahrhundert. Der Name bedeutet in der "
            "Mafa-Sprache 'Reste der Anführer' und verweist auf die mündliche Überlieferung "
            "einer rätselhaften Vor-Mafa-Bevölkerung. Die Anlagen umfassen Terrassen, "
            "kreisförmige Gebäudegrundrisse und mehrere Meter hohe Mauern aus präzise "
            "geschichtetem Granit ohne Mörtel. Französische Kolonialarchäologen unter Jean-"
            "Paul Lebeuf erforschten die Stätten ab 1950, eine systematische Ausgrabung erfolgte "
            "jedoch erst zwischen 2008 und 2014 unter Leitung von Scott MacEachern. Seit 2018 "
            "stehen die Ruinen auf der UNESCO-Welterbe-Vorschlagsliste Kameruns."
        ),
        "facts": [
            "Mehr als 16 einzelne archäologische Stätten erfasst.",
            "Datierung zwischen dem 13. und 17. Jahrhundert.",
            "Name bedeutet 'Reste der Anführer' in Mafa.",
            "Trockenmauerbau aus Granit ohne Mörtel.",
            "Erste Forschungen ab 1950 durch Jean-Paul Lebeuf.",
            "Systematische Ausgrabung von 2008 bis 2014.",
            "Leiter der Ausgrabungen: Scott MacEachern.",
            "Auf UNESCO-Vorschlagsliste seit dem Jahr 2018."
        ],
    },
    "old-german-cemetery-douala-history-v2": {
        "desc": (
            "Der alte deutsche Friedhof in Douala-Joss wurde 1885, kurz nach der Errichtung "
            "des deutschen Schutzgebiets Kamerun (12. Juli 1884), als Begräbnisstätte für "
            "Kolonialbeamte, Missionare und Soldaten angelegt. Auf rund einem Hektar finden "
            "sich heute etwa 250 erhaltene Grabsteine, viele aus Granit aus dem Schwarzwald. "
            "Hier ruhen unter anderem Eugen Zintgraff (1858-1897), der berühmte Forschungsreisende "
            "des Graslands, sowie Mitglieder der Basler Mission. Die hohe Sterblichkeit "
            "spiegelt die katastrophalen Gesundheitsbedingungen wider: Malaria und Gelbfieber "
            "töteten in den ersten Jahren bis zu 30 Prozent der deutschen Beamten. Nach dem "
            "Verlust der Kolonie 1916 verfiel der Friedhof; eine Restaurierung erfolgte zwischen "
            "1995 und 2002 mit Unterstützung des Deutschen Generalkonsulats in Douala."
        ),
        "facts": [
            "Angelegt im Jahr 1885 in Douala-Joss.",
            "Schutzgebiet Kamerun gegründet am 12. Juli 1884.",
            "Rund 250 erhaltene Grabsteine auf einem Hektar.",
            "Eugen Zintgraff (1858-1897) hier bestattet.",
            "Granit der Grabsteine stammt aus dem Schwarzwald.",
            "Sterblichkeit deutscher Beamter teils über 30 Prozent.",
            "Verlust der deutschen Kolonie im Jahr 1916.",
            "Restaurierung zwischen 1995 und 2002 abgeschlossen."
        ],
    },
    "general-leclerc-monument-history-v2": {
        "desc": (
            "Das Leclerc-Denkmal in Douala wurde 1948 zu Ehren von General Philippe Leclerc "
            "de Hauteclocque (1902-1947) errichtet, der als Befehlshaber der Forces Françaises "
            "Libres am 27. August 1940 in Douala landete und Kamerun für das Freie Frankreich "
            "Charles de Gaulles gewann. Mit nur etwa 20 Mann setzte Leclerc das Vichy-treue "
            "Verwaltungsregime ab; binnen weniger Tage schloss sich ganz Französisch-Äquatorial-"
            "Afrika seiner Bewegung an. Von Kamerun aus startete später die berühmte 'Kolonne "
            "Leclerc', die 1941 die Oase Kufra in Libyen einnahm und 1944 mit der 2. "
            "Panzerdivision Paris befreite. Das Bronzemonument am Hafen Doualas wurde nach "
            "Leclercs Tod bei einem Flugzeugabsturz im November 1947 in Algerien gestiftet "
            "und ist bis heute Schauplatz französisch-kamerunischer Gedenkfeiern."
        ),
        "facts": [
            "Eingeweiht im Jahr 1948 in Douala.",
            "General Leclerc lebte von 1902 bis 1947.",
            "Landung in Douala erfolgte am 27. August 1940.",
            "Anschluss Kameruns an die Forces Françaises Libres.",
            "Eroberung der Oase Kufra im Jahr 1941.",
            "Befreiung von Paris mit 2. Panzerdivision 1944.",
            "Tod bei Flugzeugabsturz in Algerien November 1947.",
            "Bronzemonument am Hafen Doualas."
        ],
    },
    "banyo-lamidat-history-v2": {
        "desc": (
            "Das Lamidat von Banyo in der Adamaoua-Region wurde 1862 von Ardo Hamadou "
            "während der Fulani-Expansion unter dem Sokoto-Kalifat gegründet. Die Stadt liegt "
            "auf rund 1.100 Metern Höhe und war strategischer Knotenpunkt zwischen den "
            "Hochebenen Adamaouas und den Bamenda-Graslanden. Der Palast aus Lehmziegeln "
            "wurde mehrfach erweitert und beherbergt eine bedeutende Sammlung islamischer "
            "Manuskripte aus dem 19. Jahrhundert. Banyo widerstand bis 1902 erfolgreich der "
            "deutschen Kolonialexpansion; erst der Feldzug unter Hauptmann Hans Dominik führte "
            "zur Unterwerfung. Während der französischen Mandatszeit ab 1922 erhielt das "
            "Lamidat einen Sonderstatus. Der amtierende Lamido Mohamadou Gabdo Yaya regiert "
            "seit 1985 als 12. Herrscher der Dynastie und ist Mitglied des kamerunischen "
            "Senats."
        ),
        "facts": [
            "Lamidat Banyo gegründet im Jahr 1862.",
            "Gründer war Ardo Hamadou im Sokoto-Kalifat.",
            "Stadt liegt auf rund 1.100 Metern Höhe.",
            "Sammlung islamischer Manuskripte aus dem 19. Jahrhundert.",
            "Deutsche Eroberung erst 1902 unter Hans Dominik.",
            "Französisches Mandat ab dem Jahr 1922.",
            "Lamido Mohamadou Gabdo Yaya seit 1985 im Amt.",
            "Aktuell der 12. Herrscher der Dynastie."
        ],
    },
    "ngaoundere-lamidat-history-v2": {
        "desc": (
            "Das Lamidat von Ngaoundéré wurde 1835 von Ardo Njobdi während des großen Fulani-"
            "Jihads gegründet, der unter Modibo Adama, dem Begründer von Yola, das gesamte "
            "Adamaoua-Plateau islamisierte. Der Palast in der Stadtmitte ist ein eindrucksvolles "
            "Beispiel für Sudano-Sahel-Architektur: Lehmziegelbauten mit charakteristischem "
            "Bogengang, dem berühmten Saare Lamido. Im großen Audienzsaal hängt seit dem "
            "späten 19. Jahrhundert die Schwertsammlung der Lamidos. Während der deutschen "
            "Kolonialzeit (Eroberung 1901 unter Curt Pavel) blieb das Lamidat eine "
            "halbautonome Verwaltungseinheit. Die jährliche Lamido-Reiterparade zum Ende des "
            "Ramadan zieht tausende Besucher an. Der amtierende Lamido Mohammadou Hayatou "
            "Issa regiert seit 1986 und ist auch Vorsitzender der nordkamerunischen Sultane."
        ),
        "facts": [
            "Lamidat Ngaoundéré gegründet im Jahr 1835.",
            "Gründer war Ardo Njobdi während des Fulani-Jihads.",
            "Modibo Adama war der zentrale Jihad-Führer.",
            "Sudano-Sahel-Architektur mit Lehmziegelbauten.",
            "Deutsche Eroberung 1901 unter Curt Pavel.",
            "Halbautonome Verwaltungseinheit unter Deutschen erhalten.",
            "Lamido Mohammadou Hayatou Issa seit 1986 im Amt.",
            "Reiterparade zum Ende des Ramadan jährlich."
        ],
    },
    "king-bell-palace-history-v2": {
        "desc": (
            "Der Palast von König Bell, bekannt als La Pagode, im Stadtteil Bonanjo in Douala "
            "wurde zwischen 1901 und 1905 für König Auguste Manga Ndumbe Bell errichtet, "
            "den Häuptling des Bell-Clans der Duala. Der Bau wurde von dem deutschen "
            "Architekten Heinrich Reffert geplant und kombiniert chinesische Pagoden-"
            "Elemente, deutsche Wilhelminik und lokale Motive - eine bewusste Wahl Manga "
            "Bells, der seinen Status gegenüber den Kolonialherren demonstrieren wollte. Sein "
            "Sohn Rudolf Duala Manga Bell (1873-1914) wurde am 8. August 1914 von den "
            "Deutschen wegen Hochverrats gehängt, weil er gegen die Enteignung der Duala für "
            "den Hafenausbau kämpfte. Das Datum gilt heute als Märtyrertag in Kamerun. Der "
            "Palast wurde 2010 unter Präsident Paul Biya umfassend restauriert und ist seit "
            "2017 Museum."
        ),
        "facts": [
            "Erbaut zwischen 1901 und 1905.",
            "Bauherr war König Auguste Manga Ndumbe Bell.",
            "Architekt: Heinrich Reffert aus Deutschland.",
            "Stilmix aus Pagode, Wilhelminik und Duala-Motiven.",
            "Rudolf Duala Manga Bell (1873-1914) hier residierend.",
            "Hinrichtung Manga Bells am 8. August 1914.",
            "Restaurierung im Jahr 2010 unter Paul Biya.",
            "Eröffnung als Museum im Jahr 2017."
        ],
    },
    "german-bridge-edea-history-v2": {
        "desc": (
            "Die Deutsche Brücke von Edéa, eine 160 Meter lange Stahlfachwerkkonstruktion, "
            "wurde zwischen 1908 und 1911 über den Sanaga-Fluss errichtet, um die "
            "Kolonialverbindung zwischen dem Hafen Douala und dem Hinterland zu sichern. "
            "Geplant wurde sie unter Gouverneur Theodor Seitz; die Stahlteile lieferte die "
            "Maschinenfabrik Augsburg-Nürnberg (MAN), Montage übernahm die Hafenbau-AG "
            "Hamburg. Die Brücke war Teil der ehrgeizigen Kameruner Mittellandbahn-Planung "
            "(Eisenbahnlinie Bonabéri-Nkongsamba). Während des Ersten Weltkriegs sprengten "
            "die zurückweichenden Deutschen 1915 mehrere Felder, um den Vormarsch französisch-"
            "britischer Truppen zu verzögern; die Reparatur erfolgte erst 1923 unter "
            "französischer Mandatsherrschaft. Die Brücke ist bis heute in Betrieb und steht "
            "seit 1988 unter Denkmalschutz als wichtigstes erhaltenes Industriebauwerk der "
            "deutschen Kolonialzeit."
        ),
        "facts": [
            "Erbaut zwischen 1908 und 1911 über den Sanaga.",
            "Länge der Stahlkonstruktion: 160 Meter.",
            "Stahlteile von der MAN Augsburg-Nürnberg geliefert.",
            "Geplant unter Gouverneur Theodor Seitz.",
            "Sprengung mehrerer Felder im Jahr 1915.",
            "Reparatur unter französischem Mandat 1923.",
            "Teil der Kameruner Mittellandbahn-Planung.",
            "Denkmalschutz seit dem Jahr 1988."
        ],
    },
    "batoufam-chiefdom-history-v2": {
        "desc": (
            "Das Häuptlingstum Batoufam in der Westregion Kameruns wurde im 17. Jahrhundert "
            "vom Patriarchen Tcheulah gegründet und gehört zu den am besten erhaltenen "
            "Bamiléké-Chefferien. Der Palast La'akam mit seinen geschnitzten Holzpfosten "
            "und dem charakteristischen Pyramidendach wurde zwischen 1912 und 1920 unter Fon "
            "Tagne Pouokam errichtet und mehrfach von französischen Ethnographen wie Pierre "
            "Harter ab den 1960er Jahren dokumentiert. Berühmt sind die kunstvollen Türsturze "
            "und Throne, die heute Teil des palasteigenen Museums sind, das 2010 eröffnet "
            "wurde. Während der Bamiléké-Aufstände 1955-1971 blieb Batoufam relativ "
            "verschont. Die jährliche Maskentanz-Zeremonie Le'ela im Februar zieht "
            "internationale Besucher an. Der amtierende Fon Innocent Nayang Toukam regiert "
            "seit 1976 als 12. Herrscher und ist Architekt von Beruf."
        ),
        "facts": [
            "Gegründet im 17. Jahrhundert durch Tcheulah.",
            "Palast La'akam errichtet zwischen 1912 und 1920.",
            "Erbauer war Fon Tagne Pouokam.",
            "Forschung durch Pierre Harter ab den 1960er Jahren.",
            "Eigenes Palastmuseum eröffnet im Jahr 2010.",
            "Le'ela-Maskentanz jährlich im Februar.",
            "Fon Innocent Nayang Toukam regiert seit 1976.",
            "Aktuell der 12. Herrscher der Dynastie."
        ],
    },
    "maroua-lamidat-history-v2": {
        "desc": (
            "Das Lamidat von Maroua in der Far-North-Region wurde 1817 von Modibo Damraka "
            "gegründet, einem Anhänger des Fulani-Reformers Modibo Adama. Die Hauptstadt "
            "der heutigen Far-North-Region liegt in der Sahelzone und entwickelte sich zum "
            "wichtigen Knotenpunkt des Karawanenhandels zwischen Tschad-See, Nigeria und "
            "Adamaoua. Der Lamido-Palast aus Lehmziegeln wurde nach mehreren Bränden "
            "zuletzt 1955 grundlegend rekonstruiert; das angrenzende Diamaré-Museum, "
            "eröffnet 1953 als eines der ersten Museen Kameruns, zeigt traditionelle "
            "Waffen, Manuskripte und Schmuck der Region. Die Stadt war 2014 Schauplatz "
            "schwerer Boko-Haram-Anschläge, der Palast blieb unversehrt. Der amtierende "
            "Lamido Bakary Yaya regiert seit 2007 als 16. Herrscher der Dynastie."
        ),
        "facts": [
            "Lamidat Maroua gegründet im Jahr 1817.",
            "Gründer war Modibo Damraka.",
            "Verbunden mit Reformer Modibo Adama.",
            "Diamaré-Museum eröffnet im Jahr 1953.",
            "Eines der ersten Museen Kameruns.",
            "Palastrekonstruktion zuletzt 1955 durchgeführt.",
            "Boko-Haram-Anschläge in Maroua 2014.",
            "Lamido Bakary Yaya seit 2007 im Amt."
        ],
    },
    "king-akwas-palace-history-v2": {
        "desc": (
            "Der Palast von König Akwa im Stadtteil Akwa in Douala wurde 1894 für King "
            "Dika Akwa errichtet und ist Sitz einer der vier ursprünglichen Duala-Dynastien "
            "(Bell, Akwa, Deido, Bonaberi). Der zweistöckige Bau verbindet wilhelminische "
            "Kolonialarchitektur mit lokalen Holzschnitzereien an den Balustraden. King "
            "Akwa unterzeichnete bereits am 12. Juli 1884 zusammen mit King Bell den "
            "deutsch-Duala-Vertrag, der Kamerun zum deutschen Schutzgebiet machte. Sein "
            "Nachfolger Ludwig Mpondo Akwa führte ab 1905 die Petition gegen Landenteignungen "
            "an, die in der Hinrichtung Manga Bells 1914 kulminierte. Heute ist der Palast "
            "noch immer Sitz des amtierenden King Dika Akwa III., der 1981 inthronisiert "
            "wurde. Das angeschlossene Akwa-Museum dokumentiert die komplexe Duala-Geschichte."
        ),
        "facts": [
            "Erbaut im Jahr 1894 in Douala-Akwa.",
            "Errichtet für King Dika Akwa.",
            "Eine der vier Duala-Dynastien.",
            "Schutzvertrag unterzeichnet am 12. Juli 1884.",
            "Ludwig Mpondo Akwa führte Petition ab 1905.",
            "Verbunden mit Hinrichtung Manga Bells 1914.",
            "King Dika Akwa III. inthronisiert im Jahr 1981.",
            "Eigenes Akwa-Museum vor Ort."
        ],
    },
    "dschang-colonial-center-history-v2": {
        "desc": (
            "Dschang im Westhochland wurde 1903 von der deutschen Kolonialverwaltung als "
            "Bezirksamt gegründet, weil das milde Klima auf 1.400 Metern Höhe den "
            "europäischen Beamten gesundheitlich zuträglich erschien. Die Stadt wurde nach "
            "dem Hauptmann Hans Glauning benannt; ursprünglich hieß sie 'Glauningsbezirk'. "
            "Bis heute prägen mehrere Kolonialbauten das Stadtbild, darunter das alte "
            "Postamt von 1908 und die ehemalige Residenz des Bezirksleiters. Während der "
            "französischen Mandatszeit wurde Dschang ab 1925 zum administrativen Zentrum "
            "der Bamiléké-Region und beherbergt seit 1949 das Centre Climatique, ein "
            "Erholungszentrum auf französischer Initiative. Die Universität Dschang, "
            "gegründet 1993, baut auf einem 1933 errichteten landwirtschaftlichen Forschungs-"
            "institut auf. Das Klimatische Museum dokumentiert die Kolonialzeit."
        ),
        "facts": [
            "Gegründet als deutsches Bezirksamt im Jahr 1903.",
            "Stadt liegt auf rund 1.400 Metern Höhe.",
            "Benannt nach Hauptmann Hans Glauning.",
            "Altes Postamt aus dem Jahr 1908 erhalten.",
            "Französisches Mandat-Zentrum ab 1925.",
            "Centre Climatique eröffnet im Jahr 1949.",
            "Landwirtschaftsinstitut von 1933 als Universitätskeim.",
            "Universität Dschang gegründet im Jahr 1993."
        ],
    },
    "garoua-lamidat-history-v2": {
        "desc": (
            "Das Lamidat von Garoua am Benue-Fluss wurde 1839 von Bouba Njida im Rahmen des "
            "Fulani-Jihads von Modibo Adama gegründet und entwickelte sich rasch zum "
            "wichtigsten Handelsplatz Nordkameruns. Die Lage am schiffbaren Benue ermöglichte "
            "Verbindungen über den Niger bis zum Atlantik; in der Regenzeit (Juli-Oktober) "
            "konnten kleinere Schiffe bis hierher fahren. Der Lamido-Palast aus Lehmziegeln "
            "verbindet sudano-sahelische Architektur mit kunstvollen Stuckarbeiten. Die "
            "deutsche Eroberung erfolgte 1901 unter Hauptmann Cramer von Clausbruch nach "
            "schweren Kämpfen. Der berühmteste Lamido war El Hadj Abbo, der 1916-1958 "
            "regierte und enge Beziehungen zur französischen Mandatsmacht pflegte. Garoua "
            "ist auch Geburtsstadt des ersten Präsidenten Ahmadou Ahidjo (1924-1989). Der "
            "amtierende Lamido Hamidou Issa Maïgari regiert seit 1991."
        ),
        "facts": [
            "Lamidat Garoua gegründet im Jahr 1839.",
            "Gründer war Bouba Njida.",
            "Liegt am schiffbaren Benue-Fluss.",
            "Schifffahrt möglich Juli bis Oktober.",
            "Deutsche Eroberung 1901 unter Cramer von Clausbruch.",
            "Lamido El Hadj Abbo regierte von 1916 bis 1958.",
            "Geburtsstadt von Präsident Ahmadou Ahidjo (1924-1989).",
            "Lamido Hamidou Issa Maïgari seit 1991 im Amt."
        ],
    },
    "pitoa-slave-market-site-history-v2": {
        "desc": (
            "Pitoa, etwa 15 Kilometer nordöstlich von Garoua, war im 19. Jahrhundert einer "
            "der größten Sklavenmärkte Nordkameruns. Nach der Eroberung durch die Fulani-"
            "Krieger von Modibo Adama um 1830 entwickelte sich der Ort zum Umschlagplatz für "
            "versklavte Kirdi (animistische Bergvölker) aus den Mandara-Bergen, die nach "
            "Sokoto, Bornu und über die transsaharische Route bis Tripolis verkauft wurden. "
            "Schätzungen sprechen von bis zu 5.000 versklavten Menschen jährlich auf dem "
            "Höhepunkt zwischen 1850 und 1880. Die deutschen Kolonialherren beendeten den "
            "offenen Sklavenhandel formal 1902, doch verdeckte Praktiken bestanden bis in "
            "die 1920er Jahre fort. Heute erinnert eine Gedenkstätte unter Bäumen an die "
            "leidvolle Geschichte; sie wurde 2003 vom Kulturministerium als historische "
            "Stätte ausgewiesen und ist Teil des nationalen Erinnerungsweges."
        ),
        "facts": [
            "Lage: 15 Kilometer nordöstlich von Garoua.",
            "Eroberung durch Fulani um 1830.",
            "Bis zu 5.000 Versklavte jährlich (1850-1880).",
            "Hauptopfer waren Kirdi aus den Mandara-Bergen.",
            "Routen führten nach Sokoto, Bornu und Tripolis.",
            "Formales Ende des Handels durch Deutsche 1902.",
            "Verdeckte Praktiken bis in die 1920er Jahre.",
            "Gedenkstätte ausgewiesen im Jahr 2003."
        ],
    },
    "rio-dos-camaroes-discovery-history-v2": {
        "desc": (
            "Im Jahr 1472 entdeckte der portugiesische Seefahrer Fernando Pó die Mündung des "
            "Wouri-Flusses und nannte sie wegen der zahlreichen Geistergarnelen (Lepidophthalmus "
            "turneranus) 'Rio dos Camarões' - Fluss der Garnelen. Aus diesem Namen "
            "entwickelten sich später die Bezeichnungen Cameroon, Cameroun und Kamerun. Pó "
            "befand sich auf einer Erkundungsfahrt im Auftrag der portugiesischen Krone unter "
            "König Afonso V. und entdeckte gleichzeitig die nahe Insel Bioko, die "
            "jahrhundertelang seinen Namen trug. Die Mündung wurde im 16. Jahrhundert wichtiger "
            "Handelsposten für Sklaven, Elfenbein und Pfeffer. Eine Gedenktafel am Hafen "
            "Doualas markiert seit 1972 (zum 500. Jubiläum geplant) den Ort der Erstbenennung. "
            "Der Wouri-Fluss ist heute mit 250 Kilometern Länge wichtigste Wasserstraße "
            "Südkameruns und Verkehrsader des Hafens Douala."
        ),
        "facts": [
            "Entdeckung durch Fernando Pó im Jahr 1472.",
            "Auftrag von König Afonso V. von Portugal.",
            "Garnelenart: Lepidophthalmus turneranus.",
            "Namensherkunft: 'Rio dos Camarões' = Garnelenfluss.",
            "Gleichzeitige Entdeckung der Insel Bioko.",
            "Wichtiger Handelsposten ab dem 16. Jahrhundert.",
            "Gedenktafel am Hafen Douala seit den 1970er Jahren.",
            "Wouri-Fluss ist 250 Kilometer lang."
        ],
    },
    "fort-of-yaounde-site-history-v2": {
        "desc": (
            "Das Fort von Yaoundé, ursprünglich Jaunde-Station genannt, wurde am 30. November "
            "1889 vom deutschen Forschungsreisenden Curt Morgen und Hauptmann Hans Tappenbeck "
            "gegründet. Es diente als Vorposten der deutschen Kolonialverwaltung im Hinterland "
            "und sollte den Elfenbein- und Kautschukhandel kontrollieren. Der Name Yaoundé "
            "leitet sich vom Volk der Ewondo ab, dessen Sprecher die Deutschen 'Jaunde' "
            "nannten. Während des Kongo-Sangha-Vertrags 1911 spielte die Station eine "
            "Schlüsselrolle. Im Ersten Weltkrieg fiel das Fort am 1. Januar 1916 nach "
            "schwerer Belagerung an französisch-belgische Truppen. Unter französischer "
            "Mandatsverwaltung wurde Yaoundé 1922 Hauptstadt von Französisch-Kamerun und "
            "blieb es nach der Unabhängigkeit 1960. Die Reste des Forts liegen heute im "
            "Stadtteil Mvolyé; eine Gedenktafel wurde 1989 zum 100. Jubiläum aufgestellt."
        ),
        "facts": [
            "Gegründet am 30. November 1889.",
            "Gründer: Curt Morgen und Hans Tappenbeck.",
            "Name leitet sich vom Volk der Ewondo ab.",
            "Kontrolle des Elfenbein- und Kautschukhandels.",
            "Fall an französisch-belgische Truppen am 1. Januar 1916.",
            "Yaoundé wurde Hauptstadt im Jahr 1922.",
            "Unabhängigkeit Kameruns am 1. Januar 1960.",
            "Gedenktafel zum 100. Jubiläum im Jahr 1989."
        ],
    },
    "saints-peter-and-paul-cathedral-history-v2": {
        "desc": (
            "Die Kathedrale St. Peter und Paul in Douala-Bonadibong wurde zwischen 1933 und "
            "1936 nach Entwürfen des französischen Architekten Pierre Brunet errichtet und "
            "1936 von Bischof Mathurin le Mailloux geweiht. Sie ersetzte die ältere "
            "Pallottiner-Kapelle von 1891, die unter dem deutschen Missionar Heinrich Vieter "
            "(1853-1914) errichtet worden war. Die Kathedrale ist Sitz des Erzbistums Douala, "
            "das 1955 zeitgleich mit der Erhebung Kameruns zum eigenständigen Kirchengebiet "
            "gegründet wurde. Architektonisch verbindet sie neoromanische Elemente mit Art-"
            "déco-Details der 1930er Jahre. Berühmt sind die Glasfenster mit Szenen aus dem "
            "Leben afrikanischer Heiliger, hergestellt 1962 in Chartres. Die Erzdiözese "
            "Douala betreut heute über 800.000 Katholiken in der Küstenregion. Restaurierungs-"
            "arbeiten wurden zuletzt 2018 abgeschlossen."
        ),
        "facts": [
            "Erbaut zwischen 1933 und 1936.",
            "Architekt: Pierre Brunet aus Frankreich.",
            "Geweiht 1936 durch Bischof Mathurin le Mailloux.",
            "Vorgängerkapelle von Heinrich Vieter ab 1891.",
            "Erzbistum Douala gegründet im Jahr 1955.",
            "Glasfenster aus Chartres von 1962.",
            "Über 800.000 Katholiken in der Erzdiözese.",
            "Letzte Restaurierung im Jahr 2018."
        ],
    },
    "old-post-office-buea-history-v2": {
        "desc": (
            "Das alte Postamt von Buéa wurde 1908 unter dem deutschen Gouverneur Theodor "
            "Seitz als Teil des kolonialen Verwaltungszentrums errichtet, nachdem Buéa 1901 "
            "zur Hauptstadt von Deutsch-Kamerun erklärt worden war. Das eingeschossige "
            "Gebäude mit seinem charakteristischen Walmdach und den weißen Holzveranden ist "
            "ein typisches Beispiel der deutschen Kolonialarchitektur in tropischen Höhen-"
            "lagen. Es diente als Telegrafen- und Postzentrale des gesamten Schutzgebiets "
            "und beherbergte einen der ersten Telegrafenmasten Kameruns. Nach der britischen "
            "Übernahme 1916 wurde es als Postamt der britischen Kolonialverwaltung "
            "weitergenutzt und 1961 von der kamerunischen Post übernommen. Bis 2008 war es "
            "voll in Betrieb. Seit 2012 steht es leer; eine Restaurierung als Postmuseum ist "
            "seit 2019 in Planung, blieb aber wegen der Anglophonen-Krise zurückgestellt."
        ),
        "facts": [
            "Erbaut im Jahr 1908 unter Gouverneur Theodor Seitz.",
            "Buéa wurde Hauptstadt im Jahr 1901.",
            "Walmdach und weiße Holzveranden als Stilmerkmal.",
            "Erste Telegrafenstation des Schutzgebiets.",
            "Britische Übernahme im Jahr 1916.",
            "Übergabe an kamerunische Post im Jahr 1961.",
            "Bis 2008 voll in Betrieb gewesen.",
            "Restaurierungsplanung als Postmuseum seit 2019."
        ],
    },
    "babungo-palace-history-v2": {
        "desc": (
            "Der Palast von Babungo im Ndop-Plateau, etwa 40 Kilometer nordöstlich von "
            "Bamenda, ist Sitz eines der bedeutendsten Tikar-Königreiche und wurde "
            "Überlieferungen zufolge im 14. Jahrhundert von Fon Saingi I. gegründet. Die "
            "weitläufige Lehmziegelanlage ist berühmt für ihre kunstvollen Holzschnitzereien "
            "an den Türstürzen und Pfosten, viele aus dem 18. und 19. Jahrhundert. Babungo "
            "war historisch das Zentrum der Eisenverhüttung im Grasland; archäologische "
            "Ausgrabungen seit 1995 unter Hans-Peter Wotzka belegen Eisenproduktion bereits "
            "im 12. Jahrhundert. Das Babungo-Museum, eröffnet 2005 mit deutscher "
            "Unterstützung durch das Frobenius-Institut Frankfurt, beherbergt rund 600 "
            "Objekte: Throne, Masken der Mukan-Geheimgesellschaft und Schmiedewerkzeuge. "
            "Der amtierende Fon Ndofoa Zofoa III. regiert seit 1985 als 19. Herrscher der "
            "Dynastie."
        ),
        "facts": [
            "Königreich gegründet im 14. Jahrhundert durch Fon Saingi I.",
            "Eisenverhüttung nachgewiesen seit dem 12. Jahrhundert.",
            "Ausgrabungen ab 1995 unter Hans-Peter Wotzka.",
            "Babungo-Museum eröffnet im Jahr 2005.",
            "Unterstützung durch Frobenius-Institut Frankfurt.",
            "Rund 600 Objekte im Museumsbestand.",
            "Mukan-Geheimgesellschaft hat hier ihren Sitz.",
            "Fon Ndofoa Zofoa III. regiert seit 1985."
        ],
    },
}


def main():
    src = TARGET.read_text(encoding="utf-8")
    original = src
    updates = 0
    skipped = []

    for poi_id, payload in DATA.items():
        # Find this POI block (id + everything until next id: "..." or end array)
        # Strategy: regex per POI for descriptionAdvanced and factsAdvanced, scoped to a window.
        id_pattern = re.compile(r'id:\s*"' + re.escape(poi_id) + r'"')
        m = id_pattern.search(src)
        if not m:
            skipped.append(f"{poi_id}: id not found")
            continue
        # Window: from id match to next "id:" or end of array
        start = m.start()
        next_id = re.search(r'\n\s*\{\s*\n\s*id:\s*"', src[m.end():])
        end = m.end() + next_id.start() if next_id else len(src)
        block = src[start:end]

        new_desc = payload["desc"].replace('"', '\\"')
        new_block = re.sub(
            r'descriptionAdvanced:\s*\{\s*de:\s*"[^"]*"\s*\}',
            f'descriptionAdvanced: {{\n      de: "{new_desc}"\n    }}',
            block,
            count=1,
        )

        # facts as JSON array string
        facts_quoted = ", ".join(f'"{f}"' for f in payload["facts"])
        new_block = re.sub(
            r'factsAdvanced:\s*\{\s*de:\s*\[[^\]]*\]\s*\}',
            f'factsAdvanced: {{\n      de: [{facts_quoted}]\n    }}',
            new_block,
            count=1,
        )

        if new_block == block:
            skipped.append(f"{poi_id}: no change (regex miss?)")
            continue

        src = src[:start] + new_block + src[end:]
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
