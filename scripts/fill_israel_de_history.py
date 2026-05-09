#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Fill German (de) descriptionAdvanced + factsAdvanced for Israel history POIs."""
import re
from pathlib import Path

FILE = Path(__file__).resolve().parent.parent / "lib" / "visualLab" / "data" / "poiExtraIsraelHistoryV2.ts"

DATA = {
    "masada-history-v2": {
        "desc": "Masada ist eine antike Festung auf einem isolierten Felsplateau (450 m hoch) am Westufer des Toten Meeres. König Herodes der Große ließ sie zwischen 37 und 31 v. Chr. als luxuriösen Zufluchtsort und Verteidigungsbastion mit Palästen, Lagerräumen und einem ausgeklügelten Zisternensystem ausbauen. Berühmt wurde Masada durch die Belagerung im Jahr 73 n. Chr.: Nach dem Fall Jerusalems hielten sich hier rund 960 jüdische Sikarier-Aufständische unter Eleasar Ben Jair gegen die römische Legio X Fretensis unter Lucius Flavius Silva. Als die römische Belagerungsrampe das Tor erreichte, begingen die Verteidiger laut dem Historiker Flavius Josephus kollektiven Selbstmord. Masada gilt heute als nationales Symbol jüdischen Widerstands und ist seit 2001 UNESCO-Welterbe.",
        "facts": [
            "Erbaut von König Herodes dem Großen zwischen 37 und 31 v. Chr.",
            "Höhe des Felsplateaus etwa 450 Meter über dem Toten Meer.",
            "Belagerung durch die römische Legio X Fretensis im Jahr 73 n. Chr.",
            "Rund 960 jüdische Verteidiger fanden den Tod (laut Josephus).",
            "Die römische Belagerungsrampe ist bis heute erhalten.",
            "2001 zum UNESCO-Welterbe erklärt.",
            "Beherbergte luxuriöse Paläste mit römischen Bädern und Mosaiken.",
            "Symbol jüdischen Widerstands; israelische Soldaten leisten hier Eid."
        ]
    },
    "western-wall-history-v2": {
        "desc": "Die Klagemauer (Kotel) in Jerusalem ist die letzte erhaltene Stützmauer des Tempelbergs aus der Zeit des Zweiten Jüdischen Tempels. Sie wurde um 19 v. Chr. von König Herodes dem Großen im Rahmen der gewaltigen Tempelplattformerweiterung errichtet. Nach der Zerstörung des Tempels durch die Römer unter Titus im Jahr 70 n. Chr. wurde die Mauer zum heiligsten Gebetsort des Judentums. Während der römischen, byzantinischen, frühislamischen und osmanischen Zeit blieb die Mauer zugänglich, wenn auch unter wechselnden Restriktionen. Von 1948 bis 1967 war sie unter jordanischer Kontrolle für Juden gesperrt. Nach dem Sechs-Tage-Krieg 1967 eroberte Israel die Altstadt zurück und Generalstabsoffizier Mordechai Gur meldete: „Der Tempelberg ist in unseren Händen.“",
        "facts": [
            "Errichtet um 19 v. Chr. unter König Herodes dem Großen.",
            "Der Zweite Tempel wurde 70 n. Chr. von den Römern unter Titus zerstört.",
            "Sichtbarer Mauerteil ist 57 m lang und etwa 19 m hoch.",
            "Größter Stein („Western Stone“) wiegt rund 570 Tonnen.",
            "Von 1948 bis 1967 unter jordanischer Kontrolle, Juden untersagt.",
            "Nach dem Sechs-Tage-Krieg 1967 wieder zugänglich.",
            "Über 1 Million handgeschriebene Gebetszettel jährlich in den Ritzen.",
            "Geschlechtertrennung beim Gebet seit der Mischna-Zeit."
        ]
    },
    "tel-megiddo-history-v2": {
        "desc": "Tel Megiddo ist einer der bedeutendsten archäologischen Hügel im Nahen Osten und beherbergt die Überreste von 26 übereinander liegenden Siedlungsschichten vom 7. Jahrtausend v. Chr. bis ins 4. Jahrhundert v. Chr. Die strategische Lage am Karmelpass machte Megiddo zur Schaltstelle der Via Maris zwischen Ägypten und Mesopotamien. Pharao Thutmosis III. errang hier 1457 v. Chr. seinen ersten dokumentierten Sieg gegen eine kanaanitische Koalition. Unter König Salomo wurde Megiddo nach 1. Könige 9,15 zur befestigten Königsstadt mit charakteristischem Sechskammertor ausgebaut. Beeindruckend ist auch das gewaltige unterirdische Wassersystem aus dem 9. Jahrhundert v. Chr. mit einem 36 m tiefen Schacht. Die Offenbarung des Johannes (16,16) verlegte das endzeitliche „Armageddon“ (Har Megiddo) hierher. UNESCO-Welterbe seit 2005.",
        "facts": [
            "26 übereinander liegende Siedlungsschichten von 7000 v. Chr. bis 350 v. Chr.",
            "Pharao Thutmosis III. siegte hier 1457 v. Chr. (erste dokumentierte Schlacht).",
            "König Salomo befestigte die Stadt im 10. Jahrhundert v. Chr.",
            "Wassersystem mit 36 m tiefem Schacht und 70 m langem Tunnel.",
            "Namensgeber für das biblische „Armageddon“ (Offb 16,16).",
            "2005 zum UNESCO-Welterbe erklärt.",
            "Über 30 historische Schlachten in der Megiddo-Ebene gezählt.",
            "Ab 1903 systematisch ausgegraben, seither permanente Forschung."
        ]
    },
    "caesarea-maritima-history-v2": {
        "desc": "Caesarea Maritima wurde zwischen 22 und 10 v. Chr. von König Herodes dem Großen als Hafenstadt zu Ehren des römischen Kaisers Augustus erbaut. Mit dem künstlichen Tiefseehafen Sebastos – einem der größten der antiken Welt – revolutionierte Herodes die Schifffahrt: Pozzolan-Beton aus Italien ermöglichte erstmals den Bau unter Wasser. Ab 6 n. Chr. war Caesarea Hauptstadt der römischen Provinz Judäa und Sitz der Prokuratoren, darunter Pontius Pilatus, dessen Inschrift hier 1961 entdeckt wurde. In der byzantinischen Zeit war Caesarea ein bedeutendes Christen-Zentrum mit der berühmten Bibliothek des Origenes. 640 n. Chr. fiel die Stadt an die Araber, später wechselten Kreuzfahrer und Mamluken die Herrschaft. Sultan Baibars zerstörte sie 1265 vollständig.",
        "facts": [
            "Erbaut zwischen 22 und 10 v. Chr. von Herodes dem Großen.",
            "Hauptstadt der römischen Provinz Judäa ab 6 n. Chr.",
            "Pontius-Pilatus-Inschrift hier 1961 gefunden (einziger archäologischer Beleg).",
            "Künstlicher Hafen Sebastos – größter Tiefseehafen der Antike.",
            "Heimat der berühmten Bibliothek des Kirchenvaters Origenes (3. Jh.).",
            "Aquädukt aus römischer Zeit erstreckt sich über 9 Kilometer.",
            "1265 vom Mamluken-Sultan Baibars zerstört.",
            "Hippodrom für 10.000 Zuschauer und römisches Theater erhalten."
        ]
    },
    "qumran-caves-history-v2": {
        "desc": "Die Höhlen von Qumran am nordwestlichen Ufer des Toten Meeres erlangten 1947 weltweite Berühmtheit, als der Beduinenjunge Mohammed edh-Dhib in Höhle 1 die ersten der späteren „Schriftrollen vom Toten Meer“ entdeckte. Bis 1956 wurden in elf Höhlen rund 900 Manuskripte gefunden, darunter die ältesten bekannten Abschriften hebräischer Bibeltexte (etwa der Jesaja-Rolle, die 1.000 Jahre älter ist als alle vorher bekannten masoretischen Handschriften). Die nahegelegene Siedlung Khirbet Qumran wurde zwischen 134 v. Chr. und 68 n. Chr. von der jüdischen Sekte der Essener bewohnt, die laut der vorherrschenden Theorie die Schriftrollen verfassten und vor dem Vormarsch der römischen Legionen während des Ersten Jüdischen Krieges in den Höhlen versteckten.",
        "facts": [
            "Erste Schriftrollen 1947 vom Beduinen Mohammed edh-Dhib entdeckt.",
            "Bis 1956 wurden 11 Höhlen mit Manuskripten erforscht.",
            "Rund 900 Schriftrollen und Fragmente sichergestellt.",
            "Jesaja-Rolle ist 1.000 Jahre älter als alle vorher bekannten Texte.",
            "Siedlung der Essener-Sekte zwischen 134 v. Chr. und 68 n. Chr.",
            "Versteck vor dem römischen Vormarsch im Ersten Jüdischen Krieg.",
            "Höhle 4 enthielt allein 15.000 Manuskript-Fragmente.",
            "Datierung mittels Radiokarbon und Paläographie 250 v. Chr. – 70 n. Chr."
        ]
    },
    "tower-of-david-history-v2": {
        "desc": "Die Davidszitadelle am Jaffator der Jerusalemer Altstadt ist trotz ihres Namens nicht von König David, sondern größtenteils von König Herodes dem Großen erbaut worden. Herodes errichtete um 24 v. Chr. drei massive Türme – Phasael, Hippicus und Mariamne – zum Schutz seines nahe gelegenen Königspalasts. Nach der Zerstörung Jerusalems im Jahr 70 n. Chr. ließ Titus den Phasael-Turm als Mahnmal stehen. In byzantinischer Zeit wurde der Turm fälschlich mit König David assoziiert, daher der heutige Name. Kreuzfahrer, Mamluken und Osmanen befestigten das Bauwerk weiter; Sultan Süleyman der Prächtige fügte 1535 das markante Minarett hinzu. Während des britischen Mandats (1917-1948) diente die Zitadelle als Kunstgalerie. Heute beherbergt sie das Museum für die Geschichte Jerusalems.",
        "facts": [
            "Drei herodianische Türme um 24 v. Chr. (Phasael, Hippicus, Mariamne).",
            "Phasael-Turm überlebte die Zerstörung Jerusalems 70 n. Chr.",
            "Namensgebung „Davidsturm“ stammt aus byzantinischer Zeit (5. Jh.).",
            "Sultan Süleyman fügte 1535 das markante Minarett hinzu.",
            "Über 2.700 Jahre durchgehende Bautätigkeit nachgewiesen.",
            "Während des britischen Mandats (1917-1948) als Kunstmuseum genutzt.",
            "Heute Sitz des Museums für die Geschichte Jerusalems (seit 1989).",
            "Standort der spektakulären „Night Spectacular“ Lichtshow."
        ]
    },
    "holy-sepulchre-history-v2": {
        "desc": "Die Grabeskirche im Christlichen Viertel der Jerusalemer Altstadt gilt als heiligster Ort des Christentums – Schauplatz von Kreuzigung, Grablegung und Auferstehung Jesu. Kaiser Konstantin der Große ließ sie nach dem Konzil von Nicäa 325 n. Chr. errichten; seine Mutter Helena identifizierte 326 n. Chr. den Ort und entdeckte angeblich das wahre Kreuz. Die ursprüngliche Basilika wurde 614 von den Persern unter Chosrau II. geplündert und 1009 vom Fatimiden-Kalifen Al-Hakim zerstört. Die Kreuzfahrer bauten sie ab 1149 in romanischem Stil wieder auf. Seit dem Status quo von 1853 teilen sich sechs christliche Konfessionen die Verwaltung: Griechisch-Orthodoxe, Lateiner, Armenier, Kopten, Syrer und Äthiopier. Die Schlüssel der Kirche werden seit 1187 von zwei muslimischen Familien verwahrt.",
        "facts": [
            "Erbaut 326 n. Chr. unter Kaiser Konstantin und Kaiserin Helena.",
            "Helena entdeckte hier angeblich das wahre Kreuz Christi.",
            "614 von den persischen Sassaniden unter Chosrau II. geplündert.",
            "1009 vom Fatimiden-Kalifen Al-Hakim zerstört.",
            "Kreuzfahrer bauten 1149 die heutige Hauptstruktur wieder auf.",
            "Sechs christliche Konfessionen teilen sich seit 1853 die Kirche.",
            "Schlüssel seit 1187 von muslimischen Familien (Joudeh und Nuseibeh) verwahrt.",
            "„Immovable Ladder“ über dem Eingang seit mindestens 1728 unverändert."
        ]
    },
    "beit-shean-history-v2": {
        "desc": "Beit Sche'an im Jordantal ist eine der am längsten ununterbrochen besiedelten Stätten Israels (über 6.000 Jahre). In der ägyptischen Zeit (15.-12. Jahrhundert v. Chr.) war es Verwaltungssitz der pharaonischen Provinz Kanaan. Die Bibel erwähnt es als Ort, an dem die Philister die Leichen von König Saul und seinen Söhnen nach der Schlacht am Berg Gilboa (1010 v. Chr.) zur Schau stellten. In der hellenistischen Zeit nannte man die Stadt Skythopolis und sie wurde Hauptstadt der Dekapolis. Während der römisch-byzantinischen Blüte (1.-7. Jh. n. Chr.) wuchs Beit Sche'an auf 30.000-40.000 Einwohner und besaß Theater, Hippodrom, Bäder und gepflasterte Säulenstraßen. Ein verheerendes Erdbeben am 18. Januar 749 n. Chr. zerstörte die Stadt; sie wurde nie wieder zur antiken Größe erbaut.",
        "facts": [
            "Über 6.000 Jahre durchgehende Besiedlung nachgewiesen.",
            "Ägyptischer Verwaltungssitz im 15.-12. Jahrhundert v. Chr.",
            "König Sauls Leichnam hier von Philistern aufgehängt (1010 v. Chr.).",
            "Hauptstadt der hellenistischen Dekapolis als „Skythopolis“.",
            "Bevölkerung in römisch-byzantinischer Zeit auf 30.000-40.000 angewachsen.",
            "Erdbeben vom 18. Januar 749 n. Chr. zerstörte die Stadt.",
            "Theater fasste 7.000 Zuschauer; eines der besterhaltenen Israels.",
            "Cardo-Säulenstraße mit Originalsäulen rekonstruiert."
        ]
    },
    "avdat-history-v2":  {
        "desc": "Avdat (Oboda) im Negev wurde im 3. Jahrhundert v. Chr. von den Nabatäern als Karawanenstation an der berühmten Weihrauchstraße zwischen dem südarabischen Hadramaut und dem mediterranen Hafen Gaza gegründet. Benannt wurde die Stadt nach dem nabatäischen König Obodas II. (30-9 v. Chr.), der hier begraben sein soll und göttliche Verehrung genoss. Nach der römischen Annexion Nabatäas durch Kaiser Trajan 106 n. Chr. wurde Avdat zur Garnisonsstadt der Provinz Arabia Petraea. In byzantinischer Zeit (4.-7. Jahrhundert) erlebte Avdat eine zweite Blüte mit Weinbau auf Terrassen und ausgeklügelten Wasserzisternen, zwei Kirchen und einem Festungsturm. Die persische Eroberung 614 und das Erdbeben von 749 beendeten die Stadt endgültig. Seit 2005 UNESCO-Welterbe als Teil der Weihrauchstraße.",
        "facts": [
            "Im 3. Jahrhundert v. Chr. von den Nabatäern gegründet.",
            "Wichtiger Halt auf der Weihrauchstraße von Petra nach Gaza.",
            "Benannt nach König Obodas II. (30-9 v. Chr.).",
            "106 n. Chr. von Kaiser Trajan in die Provinz Arabia eingegliedert.",
            "Byzantinischer Weinbau auf Terrassen mit ausgeklügeltem Wassersystem.",
            "Persische Eroberung 614 und Erdbeben 749 markierten das Ende.",
            "2005 zum UNESCO-Welterbe als Teil der Weihrauchstraße erklärt.",
            "Akropolis auf einem 65 m hohen Felsvorsprung im Negev."
        ]
    },
    "tel-hazor-history-v2": {
        "desc": "Tel Hazor in Obergaliläa war mit über 80 Hektar die größte Stadt im biblischen Israel und ein bedeutendes kanaanitisches Königreich der Bronzezeit (3. und 2. Jahrtausend v. Chr.). In den Mari-Briefen aus dem 18. Jahrhundert v. Chr. wird Hazor als wichtiger Handelspartner Mesopotamiens genannt. Das Buch Josua (11,10) bezeichnet die Stadt als „das Haupt aller dieser Königreiche“ und berichtet von ihrer Eroberung und Brandzerstörung durch Josua um 1230 v. Chr. – archäologisch durch eine massive Brandschicht bestätigt. König Salomo befestigte Hazor im 10. Jahrhundert v. Chr. mit dem charakteristischen Sechskammertor (1. Könige 9,15). 732 v. Chr. wurde die Stadt vom assyrischen König Tiglat-Pileser III. endgültig zerstört. Seit 2005 UNESCO-Welterbe.",
        "facts": [
            "Größte Stadt im biblischen Israel (über 80 Hektar Fläche).",
            "In den Mari-Archiven (18. Jh. v. Chr.) als Handelsmetropole erwähnt.",
            "In Josua 11,10 als „Haupt aller dieser Königreiche“ bezeichnet.",
            "Brandzerstörung durch Josua um 1230 v. Chr. archäologisch belegt.",
            "Befestigt von König Salomo im 10. Jh. v. Chr. (1. Könige 9,15).",
            "732 v. Chr. von Tiglat-Pileser III. von Assyrien endgültig zerstört.",
            "Seit 2005 UNESCO-Welterbe als Teil der biblischen Tells.",
            "Wassersystem mit 40 m tiefem Schacht aus dem 9. Jh. v. Chr."
        ]
    },
    "akko-old-city-walls-history-v2": {
        "desc": "Die imposanten Stadtmauern von Akko (Akkon, antikes Ptolemais) sind ein Zeugnis von 4.000 Jahren Verteidigungsbaukunst. Bereits in der Bronzezeit befestigt, wurde Akko in hellenistischer und römischer Zeit zum bedeutenden Mittelmeerhafen. Während der Kreuzfahrerzeit (1104-1291) wurde es zur „Hauptstadt des Königreichs Jerusalem“ nach dem Fall der Heiligen Stadt 1187. Akko fiel 1291 nach einer dramatischen Belagerung an die Mamluken unter Sultan al-Aschraf Chalil – ein Ereignis, das das Ende der Kreuzfahrerstaaten markierte. Die heutigen Mauern stammen größtenteils aus der osmanischen Zeit unter dem berüchtigten Statthalter Daher el-Omar (Mitte 18. Jh.) und Ahmad Pasha al-Jazzar, der 1799 erfolgreich Napoleon Bonapartes Belagerung abwehrte – Napoleons einzige Niederlage im Orient. UNESCO-Welterbe seit 2001.",
        "facts": [
            "Hauptstadt des Kreuzfahrer-Königreichs Jerusalem ab 1191.",
            "Fall an die Mamluken am 18. Mai 1291 (Ende der Kreuzfahrerzeit).",
            "Heutige Mauern größtenteils aus osmanischer Zeit (18. Jh.).",
            "1799 erfolgreich gegen Napoleon Bonapartes Belagerung verteidigt.",
            "Ahmad Pasha al-Jazzar leitete die Verteidigung gegen Napoleon.",
            "Mauerdicke an manchen Stellen über 9 Meter.",
            "Über 4.000 Jahre durchgehende Befestigungsgeschichte.",
            "2001 zum UNESCO-Welterbe erklärt (Altstadt von Akko)."
        ]
    },
    "tel-lachish-history-v2": {
        "desc": "Tel Lachisch in der Schefela-Region war nach Jerusalem die zweitwichtigste Stadt des Königreichs Juda. Ursprünglich eine kanaanitische Festung der Bronzezeit, wurde Lachisch unter König Rehabeam (10. Jh. v. Chr.) massiv ausgebaut. Berühmt wurde die Stadt durch die assyrische Belagerung von 701 v. Chr.: König Sanherib eroberte sie als Auftakt seines Feldzugs gegen König Hiskia. Die dramatische Belagerung wurde auf 25 Meter langen Reliefs in Sanheribs Palast in Ninive (heute British Museum) verewigt – eine der ausführlichsten antiken Schlachtdarstellungen. 587 v. Chr. zerstörte Nebukadnezar II. von Babylon Lachisch erneut auf seinem Weg nach Jerusalem; die berühmten „Lachisch-Briefe“ in altertümlicher hebräischer Schrift dokumentieren die letzten verzweifelten Tage. UNESCO-Welterbe seit 2014.",
        "facts": [
            "Nach Jerusalem zweitwichtigste Stadt im Königreich Juda.",
            "701 v. Chr. von Sanherib von Assyrien erobert.",
            "Belagerung auf 25 m langen Ninive-Reliefs verewigt (heute British Museum).",
            "Erste archäologisch dokumentierte Belagerungsrampe (701 v. Chr.).",
            "587 v. Chr. von Nebukadnezar II. von Babylon endgültig zerstört.",
            "„Lachisch-Briefe“ aus 587 v. Chr. dokumentieren die letzten Tage.",
            "Sechskammertor von König Rehabeam (10. Jh. v. Chr.) erhalten.",
            "2014 zum UNESCO-Welterbe als biblischer Tell erklärt."
        ]
    },
    "apollonia-arsuf-history-v2": {
        "desc": "Apollonia (arabisch Arsuf) liegt auf einer 30 m hohen Klippe nördlich von Tel Aviv und wurde im 6. Jahrhundert v. Chr. von den Phöniziern als Reschef-Heiligtum gegründet. Die Hellenisten benannten den Ort nach dem griechischen Gott Apollon. In römischer und byzantinischer Zeit war Apollonia ein wohlhabendes Zentrum der Purpurfärberei aus Murex-Schnecken. 640 n. Chr. wurde die Stadt von den Arabern erobert und in Arsuf umbenannt. Berühmt wurde der Ort durch die Schlacht von Arsuf am 7. September 1191: Richard Löwenherz besiegte hier den ayyubidischen Sultan Saladin im Dritten Kreuzzug – einer der wenigen taktischen Siege der Kreuzfahrer in dieser Periode. Die Kreuzfahrerburg fiel 1265 nach 40-tägiger Belagerung an Sultan Baibars und wurde geschleift.",
        "facts": [
            "Im 6. Jh. v. Chr. von Phöniziern als Reschef-Heiligtum gegründet.",
            "Wichtiges Zentrum der römischen Purpurfärberei (Murex-Schnecken).",
            "640 n. Chr. von Arabern erobert und in Arsuf umbenannt.",
            "Schlacht von Arsuf am 7. September 1191: Richard Löwenherz vs. Saladin.",
            "1265 nach 40-tägiger Belagerung von Sultan Baibars zerstört.",
            "Kreuzfahrerburg (1241) auf 30 m hoher Mittelmeerklippe.",
            "Nationalpark seit 2002 mit gut erhaltenen Mauern.",
            "Strategischer Punkt der Via Maris zwischen Caesarea und Jaffa."
        ]
    },
    "nimrod-fortress-history-v2": {
        "desc": "Die Nimrodburg an den Südhängen des Hermon-Gebirges ist die größte mittelalterliche Festung Israels. Sie wurde nicht – wie der Name suggeriert – vom biblischen König Nimrod, sondern 1228 vom ayyubidischen Prinzen Al-Aziz Uthman, einem Neffen Saladins, erbaut, um die strategische Straße von Damaskus nach Tyrus gegen die Kreuzfahrer des Sechsten Kreuzzugs zu sichern. Die Festung erstreckt sich über 420 Meter Länge und 150 Meter Breite auf einem schmalen Bergrücken in 815 m Höhe. Nach dem Mongoleneinfall 1260 wurde sie unter dem Mamluken-Sultan Baibars massiv ausgebaut. Mit dem Fall des letzten Kreuzfahrerstützpunkts Akko 1291 verlor die Burg ihre militärische Bedeutung. Ein Erdbeben 1759 zerstörte sie weitgehend. Seit 1989 israelischer Nationalpark.",
        "facts": [
            "1228 vom ayyubidischen Prinzen Al-Aziz Uthman erbaut.",
            "Größte mittelalterliche Festung Israels (420 × 150 Meter).",
            "Liegt auf 815 Metern Höhe an den Hängen des Hermon.",
            "Unter Mamluken-Sultan Baibars nach 1260 erweitert.",
            "Verteidigte die strategische Straße Damaskus-Tyrus.",
            "Nach Fall Akkos 1291 militärisch bedeutungslos.",
            "Erdbeben von 1759 zerstörte große Teile.",
            "Seit 1989 israelischer Nationalpark (Mivtzar Nimrod)."
        ]
    },
    "beit-shearim-history-v2": {
        "desc": "Beit Sche'arim in den Bergen Galiläas war im 2.-4. Jahrhundert n. Chr. das geistige Zentrum des nachbiblischen Judentums. Nach der römischen Niederschlagung des Bar-Kochba-Aufstands (135 n. Chr.) verlegte Rabbi Jehuda haNassi, Redaktor der Mischna, den Sitz des Sanhedrins (Hohen Rates) hierher. Bei seinem Tod um 217 n. Chr. wurde er in Beit Sche'arim beigesetzt – was den Ort zur bevorzugten Bestattungsstätte für Juden aus der gesamten Diaspora machte. In den weitläufigen, in den Kalkstein gehauenen Katakomben fanden sich über 300 reich verzierte Sarkophage mit Inschriften in Hebräisch, Aramäisch, Griechisch und Palmyrenisch. Die Stadt wurde 352 n. Chr. während des Gallus-Aufstands gegen den römischen Caesar Constantius Gallus zerstört. UNESCO-Welterbe seit 2015.",
        "facts": [
            "Sitz des Sanhedrin im 2.-4. Jahrhundert n. Chr.",
            "Rabbi Jehuda haNassi (Mischna-Redaktor) hier um 217 n. Chr. begraben.",
            "Über 300 reich verzierte Sarkophage in den Katakomben.",
            "Inschriften in Hebräisch, Aramäisch, Griechisch und Palmyrenisch.",
            "Bevorzugte Bestattungsstätte der jüdischen Diaspora.",
            "352 n. Chr. während des Gallus-Aufstands zerstört.",
            "2015 zum UNESCO-Welterbe erklärt.",
            "Über 30 Katakombenkomplexe systematisch erforscht."
        ]
    },
    "capernaum-history-v2": {
        "desc": "Kapernaum am Nordufer des Sees Genezareth war im 1. Jahrhundert n. Chr. eine prosperierende jüdische Fischerstadt mit 1.500 Einwohnern und römischer Zollstation an der Via Maris. Die Evangelien beschreiben Kapernaum als „eigene Stadt“ Jesu (Matthäus 9,1) – Schauplatz vieler seiner Wunder, darunter die Heilung des Gelähmten und die Berufung der Apostel Petrus, Andreas, Jakobus, Johannes und Matthäus. Die Synagoge des 4./5. Jahrhunderts aus weißem Kalkstein wurde auf den schwarzen Basaltfundamenten der Synagoge errichtet, in der Jesus laut Markus 1,21 lehrte. Direkt daneben fanden Ausgrabungen ab 1968 das vermutete Haus des Apostels Petrus, über dem im 5. Jahrhundert eine oktagonale byzantinische Kirche errichtet wurde. Ein Erdbeben im 7./8. Jahrhundert zerstörte die Stadt, die danach aufgegeben wurde.",
        "facts": [
            "Im 1. Jh. n. Chr. wohlhabende Fischerstadt mit 1.500 Einwohnern.",
            "Römische Zollstation an der Via Maris (Mt 9,9).",
            "Von Jesus als „eigene Stadt“ bezeichnet (Mt 9,1).",
            "Berufungsort der Apostel Petrus, Andreas, Jakobus, Johannes und Matthäus.",
            "Synagoge des 4./5. Jh. auf den Basaltfundamenten aus Jesu Zeit.",
            "Vermutetes Haus des Petrus 1968 freigelegt; oktagonale Kirche darüber.",
            "Im 7./8. Jh. durch Erdbeben zerstört und aufgegeben.",
            "Heute Eigentum der Franziskaner und der Griechisch-Orthodoxen Kirche."
        ]
    },
    "horns-of-hattin-history-v2": {
        "desc": "Die Hörner von Hattin – ein erloschener Vulkan mit zwei markanten Gipfeln in Galiläa – sind Schauplatz einer der entscheidendsten Schlachten des Mittelalters. Am 4. Juli 1187 vernichtete der ayyubidische Sultan Saladin (Salah ad-Din) hier eine zahlenmäßig überlegene Kreuzfahrerarmee unter König Guy von Lusignan, dem Tempelritter-Großmeister Gérard de Ridefort und Raimund III. von Tripolis. Saladin nutzte die Hitze und den Wassermangel der Hochebene aus: Er ließ die Quellen abschneiden und die trockene Vegetation in Brand setzen. Über 18.000 Kreuzfahrer fielen oder wurden gefangengenommen, das Wahre Kreuz ging verloren. Drei Monate später eroberte Saladin Jerusalem zurück (Oktober 1187), was Papst Gregor VIII. zum Aufruf zum Dritten Kreuzzug bewegte. Das Königreich Jerusalem überlebte diese Niederlage nie wieder.",
        "facts": [
            "Schlacht am 4. Juli 1187 zwischen Saladin und den Kreuzfahrern.",
            "Über 18.000 Kreuzfahrer gefallen oder gefangen.",
            "Saladin schnitt die Wasserquellen ab und setzte das Land in Brand.",
            "Tempelritter-Großmeister Gérard de Ridefort gefangengenommen.",
            "König Guy von Lusignan in die Gefangenschaft Saladins geraten.",
            "Verlust des „Wahren Kreuzes“ aus der Grabeskirche.",
            "Drei Monate später (Oktober 1187) Saladins Rückeroberung Jerusalems.",
            "Anlass für Papst Gregors VIII. Aufruf zum Dritten Kreuzzug."
        ]
    },
    "belvoir-fortress-history-v2": {
        "desc": "Die Burg Belvoir („Schöne Aussicht“, hebräisch Kochav HaJarden – „Stern des Jordans“) wurde 1168 vom Johanniterorden (Hospitaliter) auf einer 500 m hohen Hochebene über dem Jordantal errichtet. Sie gilt als das früheste und vollkommenste Beispiel der konzentrischen Burgenarchitektur in der Levante – ein Vorbild für spätere europäische Festungen. Das System aus zwei ineinander verschachtelten Quadrat-Mauerringen mit jeweils eckigen Türmen und tiefem Trockengraben galt als praktisch uneinnehmbar. Nach der katastrophalen Niederlage der Kreuzfahrer bei Hattin 1187 belagerte Saladin Belvoir 18 Monate lang ohne Erfolg im offenen Sturm. Erst 1189 ergaben sich die letzten Verteidiger nach einer erfolgreichen Untergrabung und durften ehrenhaft nach Tyrus abziehen. 1220 ließ der ayyubidische Sultan Al-Muazzam die Burg schleifen, damit sie nicht erneut den Kreuzfahrern in die Hände fiel.",
        "facts": [
            "1168 vom Johanniterorden auf 500 m Höhe errichtet.",
            "Erstes und perfektes Beispiel konzentrischer Burgenarchitektur.",
            "Saladin belagerte 18 Monate erfolglos nach Hattin 1187.",
            "Verteidiger ergaben sich 1189 nach erfolgreicher Untergrabung.",
            "Konnten ehrenhaft nach Tyrus abziehen.",
            "1220 von Sultan Al-Muazzam geschleift.",
            "Von Hochebene 500 m Sicht ins Jordantal nach Osten.",
            "Hebräischer Name Kochav HaJarden („Stern des Jordans“)."
        ]
    },
    "herodium-history-v2": {
        "desc": "Das Herodion, 12 km südlich von Jerusalem, ist ein einzigartiger künstlich aufgeschütteter Hügel mit einer kegelförmigen Palastfestung – das einzige nach seinem Erbauer benannte Bauwerk Herodes' des Großen. Erbaut zwischen 23 und 15 v. Chr., kombinierte Herodes hier seine Vorliebe für Luxus und Verteidigung: römische Bäder, ein Theater für 450 Zuschauer, Mosaiken und Fresken im oberen Palast, dazu monumentale Gärten und ein Wasserreservoir im unteren Komplex. Laut dem Historiker Flavius Josephus wurde Herodes nach seinem Tod 4 v. Chr. mit großem Pomp ins Herodion überführt und beigesetzt – sein Grab blieb jedoch jahrhundertelang unentdeckt. Erst 2007 entdeckte der Archäologe Ehud Netzer nach 35-jähriger Suche das Mausoleum am Berghang. Während des Ersten Jüdischen Krieges (66-72 n. Chr.) und des Bar-Kochba-Aufstands (132-135 n. Chr.) diente das Herodion als Aufständischenfestung.",
        "facts": [
            "Erbaut zwischen 23 und 15 v. Chr. von Herodes dem Großen.",
            "Einziges nach seinem Erbauer benanntes Bauwerk Herodes'.",
            "Künstlich aufgeschütteter Hügel mit kegelförmiger Festung.",
            "Theater für 450 Zuschauer mit aufwendigen Fresken.",
            "Herodes' Grab 2007 von Ehud Netzer nach 35 Jahren Suche entdeckt.",
            "Festung im Ersten Jüdischen Krieg (66-72 n. Chr.) genutzt.",
            "Während des Bar-Kochba-Aufstands (132-135 n. Chr.) erneut Festung.",
            "Tunnelnetzwerk der Bar-Kochba-Aufständischen erhalten."
        ]
    },
    "valley-of-elah-history-v2": {
        "desc": "Das Ela-Tal in der Schefela-Region südwestlich von Jerusalem ist Schauplatz der wohl berühmtesten Schlacht der Bibel: des Zweikampfs zwischen David und Goliath (1. Samuel 17). Um 1000 v. Chr. lagerten sich die Israeliten unter König Saul und die Philister auf den gegenüberliegenden Hängen des Tals. Vierzig Tage lang forderte der philistäische Riese Goliath die Israeliten zum Zweikampf heraus, bis der junge Schafhirte David aus Bethlehem ihn mit seiner Steinschleuder niederstreckte. Das Tal war strategisch von großer Bedeutung als Hauptzugangsroute von der philistäischen Küstenebene in die judäischen Berge. 2007 entdeckten Archäologen in Khirbet Qeijafa am Talrand eine massive Festung des frühen 10. Jahrhunderts v. Chr. mit einem hebräischen Ostrakon (Tonscherbe) – einem der ältesten alphabetischen Schriftzeugnisse Israels.",
        "facts": [
            "Schauplatz des Zweikampfs David gegen Goliath (1. Samuel 17, um 1000 v. Chr.).",
            "Vierzig Tage Stillstand zwischen Israeliten und Philistern.",
            "David nutzte fünf glatte Steine aus dem Bachbett des Tals.",
            "Wichtige antike Route von der Küstenebene in die Judäischen Berge.",
            "Festung Khirbet Qeijafa (frühes 10. Jh. v. Chr.) am Talrand entdeckt.",
            "Eines der ältesten alphabetischen hebräischen Ostraka hier gefunden.",
            "Tal etwa 19 Kilometer südwestlich von Jerusalem.",
            "Seit 2007 systematische Ausgrabungen unter Yosef Garfinkel."
        ]
    },
}


def fmt_facts(facts):
    items = ", ".join(f'"{f}"' for f in facts)
    return f'[{items}]'


def main():
    text = FILE.read_text(encoding="utf-8")
    original = text
    filled = 0
    skipped = 0
    not_found = 0

    for poi_id, content in DATA.items():
        # Find the POI block: from `id: "..."` until the closing `}`
        # Pattern: facts: { ... } (closing brace + optional whitespace + closing brace of POI)
        pattern = re.compile(
            r'(\{\s*\n\s*id:\s*"' + re.escape(poi_id) + r'"[\s\S]*?facts:\s*\{[\s\S]*?\n\s*\})(\s*\n\s*\})',
            re.MULTILINE
        )
        m = pattern.search(text)
        if not m:
            print(f"NOT FOUND: {poi_id}")
            not_found += 1
            continue

        block_with_facts = m.group(1)
        block_close = m.group(2)
        full_match = m.group(0)

        # Skip if descriptionAdvanced already exists in this block
        if 'descriptionAdvanced' in block_with_facts:
            print(f"SKIP (descAdv exists): {poi_id}")
            skipped += 1
            continue

        de_desc = content["desc"].replace('\\', '\\\\').replace('"', '\\"')
        de_facts = fmt_facts(content["facts"])

        # Build new advanced sections (de only)
        addition = (
            f',\n    descriptionAdvanced: {{\n'
            f'      de: "{de_desc}"\n'
            f'    }},\n'
            f'    factsAdvanced: {{\n'
            f'      de: {de_facts}\n'
            f'    }}'
        )

        new_full = block_with_facts + addition + block_close
        text = text.replace(full_match, new_full, 1)
        filled += 1
        print(f"FILLED: {poi_id}")

    if text != original:
        FILE.write_text(text, encoding="utf-8")
        print(f"\nDone. Filled={filled}, Skipped={skipped}, NotFound={not_found}")
    else:
        print(f"\nNothing changed. Skipped={skipped}, NotFound={not_found}")


if __name__ == "__main__":
    main()
