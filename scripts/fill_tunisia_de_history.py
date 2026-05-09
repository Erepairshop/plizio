# -*- coding: utf-8 -*-
"""Fill descriptionAdvanced.de + factsAdvanced.de for Tunisia history POIs (DE only)."""
import re
import os

FILE = os.path.join(os.path.dirname(__file__), "..", "lib", "visualLab", "data", "poiExtraTunisiaHistoryV2.ts")
FILE = os.path.abspath(FILE)

DATA = {
    "medina-of-sousse-history-v2": {
        "desc": "Die Medina von Sousse, gegründet im 9. Jahrhundert unter den Aghlabiden, gilt als eines der bedeutendsten Beispiele frühislamischer Stadtplanung im westlichen Mittelmeerraum. Ihre wuchtigen Stadtmauern, errichtet ab 859 n. Chr., umschließen ein Labyrinth aus Gassen, Souks und Wohnvierteln. Herzstücke der Altstadt sind der Ribat aus dem Jahr 821, eine wehrhafte Klosterfestung gegen byzantinische Angriffe, sowie die Große Moschee von 851. Während der französischen Protektoratszeit ab 1881 blieb die Medina weitgehend unangetastet. Seit 1988 zählt sie zum UNESCO-Weltkulturerbe und dokumentiert die kulturelle Blüte der Aghlabidendynastie.",
        "facts": [
            "Die Stadtmauern der Medina haben eine Länge von etwa 2,25 Kilometern.",
            "Der Ribat von Sousse wurde 821 n. Chr. unter Ziyadat Allah I. fertiggestellt.",
            "Die Große Moschee von 851 zeigt deutlich byzantinische Bauformen.",
            "Sousse hieß in der Antike Hadrumetum und war zweitwichtigste Stadt nach Karthago.",
            "Die Aghlabidendynastie regierte Ifriqiya von 800 bis 909 n. Chr.",
            "Die Medina wurde 1988 in die UNESCO-Welterbeliste aufgenommen.",
            "Der Wachturm Khalef al-Fata stammt aus dem Jahr 859 n. Chr.",
        ],
    },
    "sbeitla-ruins-history-v2": {
        "desc": "Die Ruinen von Sbeitla, das antike Sufetula, liegen im Zentrum Tunesiens und sind ein außergewöhnliches Zeugnis der römischen Provinz Africa Proconsularis. Gegründet im 1. Jahrhundert n. Chr. unter Kaiser Vespasian, erlebte die Stadt ihre Blüte im 2. und 3. Jahrhundert durch den Olivenölhandel. Berühmt ist Sufetula vor allem für sein einzigartiges Forum mit drei separaten Tempeln für Jupiter, Juno und Minerva, der kapitolinischen Trias. Im Jahr 647 n. Chr. wurde hier Patricius Gregorius, der byzantinische Statthalter, von arabischen Truppen unter Abdallah ibn Sad besiegt – ein Wendepunkt der islamischen Eroberung Nordafrikas.",
        "facts": [
            "Sufetula wurde im 1. Jahrhundert n. Chr. unter den Flaviern gegründet.",
            "Das Kapitol mit drei Einzeltempeln ist in der römischen Welt einzigartig.",
            "Die Schlacht von Sufetula 647 markiert den Beginn der arabischen Eroberung.",
            "Die Stadt besaß im 4. Jahrhundert mindestens fünf christliche Basiliken.",
            "Die Ölpressen von Sbeitla zeugen von einer industriellen Olivenölproduktion.",
            "Der Triumphbogen des Antoninus Pius wurde 139 n. Chr. errichtet.",
            "Patricius Gregorius rief sich 646 zum Gegenkaiser von Konstans II. aus.",
        ],
    },
    "bulla-regia-history-v2": {
        "desc": "Bulla Regia im Norden Tunesiens war ursprünglich eine numidische Königsresidenz und wurde nach dem Sieg Roms über König Jugurtha 105 v. Chr. römisch. Berühmt ist die Stadt für ihre einzigartigen unterirdischen Villen, die die wohlhabenden Bürger im 2. und 3. Jahrhundert n. Chr. bauen ließen, um der drückenden Sommerhitze zu entgehen. Die Häuser besitzen oberirdische und unterirdische Stockwerke, verbunden durch Lichtschächte. Prächtige Mosaike sind in situ erhalten geblieben. Die Stadt war Sitz eines christlichen Bischofs und wurde im 5. Jahrhundert von den Vandalen unter Geiserich erobert. Die Ausgrabungen begannen 1906 unter französischer Verwaltung.",
        "facts": [
            "Bulla Regia war Hauptstadt eines numidischen Teilreichs vor 105 v. Chr.",
            "Die unterirdischen Villen sind weltweit einzigartig in der römischen Architektur.",
            "Das berühmte Haus der Jagd zeigt Mosaike aus dem 3. Jahrhundert n. Chr.",
            "König Jugurtha führte 112–105 v. Chr. Krieg gegen Rom.",
            "Die Stadt erhielt unter Hadrian um 130 n. Chr. den Status einer Kolonie.",
            "Bischof Maximianus von Bulla Regia nahm 411 am Konzil von Karthago teil.",
            "Französische Archäologen begannen 1906 mit systematischen Grabungen.",
        ],
    },
    "thuburbo-majus-history-v2": {
        "desc": "Thuburbo Majus, etwa 60 Kilometer südwestlich von Tunis, war eine bedeutende römische Provinzstadt im fruchtbaren Hinterland Karthagos. Ursprünglich eine punisch-numidische Siedlung, wurde sie unter Augustus 27 v. Chr. mit römischen Veteranen besiedelt und erhielt unter Hadrian 128 n. Chr. den Munizipalstatus. Die Stadt erlebte ihre architektonische Blüte unter Commodus mit dem Bau des Kapitols 168 n. Chr. Das Forum, die Thermen und der Tempel des Mercurius zeugen von Wohlstand durch Getreide- und Olivenanbau. Nach der Vandaleninvasion 439 verfiel die Stadt; die byzantinische Rückeroberung unter Justinian 533 brachte nur kurze Erholung.",
        "facts": [
            "Thuburbo Majus wurde 27 v. Chr. von Augustus als Veteranenkolonie gegründet.",
            "Das Kapitol wurde 168 n. Chr. unter Kaiser Commodus geweiht.",
            "Die Stadt hatte zur Blütezeit etwa 10.000 Einwohner.",
            "Der Tempel des Mercurius stammt aus dem Jahr 211 n. Chr.",
            "Die Sommerthermen waren mit über 2.500 m² ungewöhnlich groß.",
            "Vandalen unter Geiserich plünderten die Stadt 439 n. Chr.",
            "Die Ausgrabungen wurden ab 1912 von Alfred Merlin durchgeführt.",
        ],
    },
    "maktaris-archaeological-history-v2": {
        "desc": "Maktaris, das antike Mactaris, liegt auf einem Hochplateau in 900 Metern Höhe und war ein wichtiger Knotenpunkt im numidisch-römischen Tunesien. Gegründet im 4. Jahrhundert v. Chr. von Numidern, kam die Stadt nach dem Untergang Karthagos 146 v. Chr. unter römischen Einfluss. Unter Kaiser Mark Aurel erhielt sie 180 n. Chr. den Kolonialstatus. Berühmt ist Mactaris für die Inschrift des Mähers von Mactaris, ein einzigartiges sozialgeschichtliches Dokument eines aufgestiegenen Erntehelfers. Das gut erhaltene Bad des Trajan, der Triumphbogen sowie das Schola der Iuvenes belegen den kulturellen Reichtum. Die Stadt verfiel nach der arabischen Eroberung im 7. Jahrhundert.",
        "facts": [
            "Mactaris liegt auf 900 Metern Höhe im tunesischen Hochland.",
            "Der Mähermann-Inschrift stammt aus dem späten 3. Jahrhundert n. Chr.",
            "Kaiser Mark Aurel erhob die Stadt 180 n. Chr. zur Colonia Aelia.",
            "Das Trajansthermen wurden um 100 n. Chr. errichtet.",
            "Numidische Megalithgräber bezeugen die vorrömische Besiedlung.",
            "Die Stadt besaß im 4. Jahrhundert mindestens drei christliche Basiliken.",
            "Französische Ausgrabungen begannen 1944 unter Gilbert Picard.",
        ],
    },
    "oudna-archaeological-history-v2": {
        "desc": "Oudna, das antike Uthina, war eine der ersten römischen Veteranenkolonien in Africa Proconsularis, gegründet 27 v. Chr. unter Augustus für ausgediente Soldaten der 13. Legion. Die Stadt wuchs durch ihre günstige Lage zwischen Karthago und Thuburbo Majus zu einem regionalen Zentrum heran. Das gewaltige Amphitheater fasste 16.000 Zuschauer und gehört zu den größten Nordafrikas. Das Kapitol mit seinen unterirdischen Gewölben sowie die Laberii-Villa mit prächtigen Mosaiken aus dem 2. Jahrhundert sind herausragende Zeugnisse. Nach der byzantinischen Wiedereroberung 533 verfiel die Stadt allmählich und wurde nach 698 endgültig aufgegeben.",
        "facts": [
            "Uthina wurde 27 v. Chr. unter Augustus als Colonia Iulia gegründet.",
            "Das Amphitheater fasste etwa 16.000 Zuschauer.",
            "Die Veteranen stammten aus der Legio XIII Gemina.",
            "Die Mosaike der Laberii-Villa sind heute im Bardo-Museum ausgestellt.",
            "Das Kapitol besitzt drei Cellae mit unterirdischen Kammern.",
            "Die byzantinische Rückeroberung unter Belisar erfolgte 533 n. Chr.",
            "Erste Grabungen leitete Paul Gauckler im Jahr 1893.",
        ],
    },
    "kerkouane-punic-town-history-v2": {
        "desc": "Kerkouane auf der Halbinsel Cap Bon ist die einzige punische Stadt, die niemals von Römern überbaut wurde, und damit ein einzigartiges Fenster in die karthagische Zivilisation. Gegründet im 6. Jahrhundert v. Chr., blühte die Stadt durch Fischverarbeitung, Purpurherstellung und Garumproduktion. Die orthogonale Stadtanlage, die opus signinum-Böden und die berühmten Tanit-Symbole in den Badezimmern zeigen den hohen Lebensstandard. 256 v. Chr. wurde Kerkouane während des Ersten Punischen Krieges von römischen Truppen unter Marcus Atilius Regulus zerstört und nie wieder besiedelt. Die Stadt zählt seit 1985 zum UNESCO-Weltkulturerbe und ist die wichtigste punische Stätte überhaupt.",
        "facts": [
            "Kerkouane ist die einzige nicht überbaute punische Stadt weltweit.",
            "Sie wurde 256 v. Chr. von Marcus Atilius Regulus zerstört.",
            "Die Stadt produzierte Garum für den gesamten Mittelmeerraum.",
            "Fast jedes Haus besaß eine eigene Badewanne mit Tanit-Symbol.",
            "Die UNESCO erklärte Kerkouane 1985 zum Welterbe.",
            "Die orthogonale Stadtplanung folgt einem Schachbrettmuster.",
            "Entdeckt wurde Kerkouane erst 1952 durch Charles Saumagne.",
        ],
    },
    "chemtou-archaeological-history-v2": {
        "desc": "Chemtou, das antike Simitthus, war im römischen Reich berühmt für seinen rosa-gelben Marmor, den sogenannten Marmor Numidicus oder giallo antico. Bereits unter dem numidischen König Massinissa im 2. Jahrhundert v. Chr. wurde der Marmor abgebaut. Nach der Eroberung durch Rom 46 v. Chr. unter Caesar wurden die Steinbrüche kaiserliches Eigentum. Der Marmor schmückte das Pantheon, den Trajansbogen sowie zahlreiche Paläste in Rom. Bis zu 6.000 Strafgefangene und Sklaven schufteten unter brutalen Bedingungen. Die Stadt besaß zudem ein Theater, Thermen und ein numidisches Bergheiligtum. Heute zeigt das Museum vor Ort die einzige erhaltene römische Münzwerkstatt Nordafrikas.",
        "facts": [
            "Der Chemtou-Marmor (giallo antico) war im Römischen Reich der teuerste.",
            "Massinissa ließ ab 160 v. Chr. die Steinbrüche entwickeln.",
            "Caesar verstaatlichte die Brüche nach 46 v. Chr.",
            "Bis zu 6.000 Arbeiter waren gleichzeitig in den Brüchen tätig.",
            "Marmor aus Chemtou findet sich im römischen Pantheon.",
            "Die einzige erhaltene römische Münzwerkstatt Nordafrikas liegt hier.",
            "Das deutsch-tunesische Forschungsprojekt läuft seit 1965.",
        ],
    },
    "matmata-troglodyte-history-v2": {
        "desc": "Matmata im Süden Tunesiens ist berühmt für seine Höhlenwohnungen, die seit Jahrhunderten von der Berberbevölkerung in den weichen Sandstein gegraben werden. Die unterirdischen Behausungen schützen vor extremen Temperaturschwankungen der Sahara und folgen einem zentralen Innenhofprinzip mit umliegenden Wohnräumen. Erste schriftliche Erwähnungen gehen auf das 4. Jahrhundert n. Chr. zurück, doch die Bauweise reicht vermutlich bis in vorrömische Zeit. Während der französischen Protektoratszeit ab 1881 blieb die traditionelle Lebensweise weitgehend erhalten. Internationale Bekanntheit erlangte Matmata 1976, als George Lucas hier den Planeten Tatooine für Star Wars drehte. Das Hotel Sidi Driss diente als Lars-Familienhaus.",
        "facts": [
            "Die Höhlenwohnungen halten konstante Temperaturen um 17 Grad.",
            "Die Berberbevölkerung gräbt die Häuser seit über 700 Jahren.",
            "Star Wars Episode IV wurde 1976 hier gedreht.",
            "Das Hotel Sidi Driss diente als Filmkulisse.",
            "Eine Überschwemmung 1969 zerstörte viele traditionelle Behausungen.",
            "Die zentralen Innenhöfe sind etwa 5–10 Meter tief.",
            "Matmata liegt im Gouvernorat Gabès auf 600 Metern Höhe.",
        ],
    },
    "ribat-of-monastir-history-v2": {
        "desc": "Der Ribat von Monastir ist eine der ältesten und am besten erhaltenen islamischen Festungsanlagen Nordafrikas, gegründet 796 n. Chr. unter dem Abbasiden-Statthalter Harthama ibn Ayan. Als wehrhaftes Kloster diente er zur Verteidigung gegen byzantinische Seeangriffe und zugleich der religiösen Kontemplation. Die Anlage wurde unter den Aghlabiden im 9. Jahrhundert erweitert und unter den Fatimiden im 10. Jahrhundert ausgebaut. Der charakteristische Wachturm Nador erlaubt einen Rundumblick über die Küste. Im 11. Jahrhundert wurde der Ribat zum Zentrum der Sufi-Tradition und beherbergte zahlreiche Heilige. Heute ist er Wallfahrtsort und diente als Drehort für Monty Pythons Film Das Leben des Brian.",
        "facts": [
            "Der Ribat wurde 796 n. Chr. unter Harthama ibn Ayan gegründet.",
            "Der Wachturm Nador wurde 960 unter den Fatimiden errichtet.",
            "Die Anlage diente sowohl militärischen als auch religiösen Zwecken.",
            "Habib Bourguiba, Tunesiens Staatsgründer, wurde 1903 in Monastir geboren.",
            "Monty Pythons Das Leben des Brian wurde 1979 hier gedreht.",
            "Der Ribat hat über 35 separate Räume für die Mönche-Krieger.",
            "Die Stadt heißt nach dem griechischen Wort monasterion (Kloster).",
        ],
    },
    "al-zaytuna-mosque-history-v2": {
        "desc": "Die Zaytuna-Moschee in der Medina von Tunis gilt als die zweitälteste Moschee Nordafrikas und Wiege der islamischen Gelehrsamkeit im Maghreb. Gegründet wurde sie 698 n. Chr. unter dem Umayyaden-Statthalter Hassan ibn al-Numan, ihr heutiger Bau geht auf das Jahr 864 unter dem Aghlabiden-Emir Abu Ibrahim Ahmad zurück. Mit ihren 184 antiken Säulen, die meist aus Karthago stammen, und einem Gebetssaal von 5.000 m² zählt sie zu den größten Moscheen des Maghreb. Die angeschlossene Universität, eine der ältesten islamischen Hochschulen weltweit, bildete Generationen von Gelehrten aus, darunter Ibn Khaldun. Bis 1956 war sie zentrale theologische Lehrstätte Tunesiens.",
        "facts": [
            "Die Zaytuna-Moschee wurde 698 n. Chr. gegründet.",
            "Der heutige Bau stammt aus dem Jahr 864 n. Chr.",
            "184 antike Säulen aus Karthago tragen den Gebetssaal.",
            "Die Universität gilt als eine der ältesten der Welt.",
            "Ibn Khaldun lehrte hier im 14. Jahrhundert.",
            "Das Minarett wurde 1894 nach almohadischem Vorbild errichtet.",
            "Die Moschee hieß ursprünglich nach einem Olivenbaum (zaytuna).",
        ],
    },
    "bardo-national-museum-history-v2": {
        "desc": "Das Bardo-Nationalmuseum in Tunis beherbergt die weltweit größte Sammlung römischer Mosaike und ist eines der bedeutendsten Archäologiemuseen des Mittelmeerraums. Eröffnet 1888 unter französischer Protektoratsverwaltung, residiert es im ehemaligen Palast der Husainiden-Beys aus dem 13. Jahrhundert, der unter Ahmed Bey im 19. Jahrhundert prachtvoll umgebaut wurde. Die Sammlung umfasst Funde aus Karthago, El Djem, Sousse und Dougga, darunter das berühmte Vergil-Mosaik aus dem 3. Jahrhundert n. Chr. und punische Stelen vom Tophet. Am 18. März 2015 verübten Terroristen einen Anschlag mit 22 Toten; das Museum wurde danach umfassend renoviert und 2016 wiedereröffnet.",
        "facts": [
            "Das Bardo-Museum wurde 1888 eröffnet.",
            "Es besitzt die größte Mosaiksammlung der Welt.",
            "Der Palast stammt ursprünglich aus dem 13. Jahrhundert.",
            "Das Vergil-Mosaik ist die einzige bekannte Darstellung des Dichters.",
            "Beim Anschlag am 18. März 2015 starben 22 Menschen.",
            "Die Husainiden-Dynastie regierte Tunesien von 1705 bis 1957.",
            "Die Sammlung umfasst über 8.000 ausgestellte Objekte.",
        ],
    },
    "zaghouan-aqueduct-history-v2": {
        "desc": "Der Aquädukt von Zaghouan ist mit 132 Kilometern Länge eines der längsten Wasserleitungssysteme der römischen Antike und versorgte das antike Karthago von 128 bis 134 n. Chr. unter Kaiser Hadrian mit Frischwasser aus den Quellen des Djebel Zaghouan. Der Bau folgte einer großen Dürre und wurde unter Antoninus Pius vollendet. Das Wasser fasste sich im Quellheiligtum am Berg, einem römischen Nymphäum, das noch heute halbkreisförmig erhalten ist. Über 90 Kilometer Bogenarkaden überspannen die Ebene; die höchsten Bögen erreichen 30 Meter. Die Vandalen zerstörten Teile 439, doch die Byzantiner reparierten das System unter Belisar 534. Die islamische Kappe Tunis nutzte den Aquädukt bis ins 13. Jahrhundert.",
        "facts": [
            "Der Aquädukt ist insgesamt 132 Kilometer lang.",
            "Der Bau dauerte von 128 bis 134 n. Chr. unter Hadrian.",
            "Die höchsten Arkadenbögen messen 30 Meter.",
            "Das Wassertempel-Nymphäum am Djebel Zaghouan ist erhalten.",
            "Vandalen zerstörten Teile 439, Belisar reparierte 534.",
            "Die täglich gelieferte Wassermenge betrug rund 32 Millionen Liter.",
            "Die Hafsiden in Tunis nutzten ihn bis ins 13. Jahrhundert.",
        ],
    },
    "roman-pools-gafsa-history-v2": {
        "desc": "Die römischen Becken von Gafsa, im antiken Capsa, sind zwei mit Quellwasser gespeiste Thermalbecken, die seit der römischen Eroberung 106 v. Chr. unter Marius kontinuierlich genutzt werden. Ursprünglich numidisch, wurde Capsa nach dem Jugurthinischen Krieg geplündert und unter Augustus als Colonia neu gegründet. Die Becken liegen im Stadtzentrum und werden von heißen Schwefelquellen mit etwa 30 Grad gespeist. Im 2. Jahrhundert n. Chr. erhielten sie ihre heutige steinerne Fassung. Lateinische Inschriften zeugen von Restaurierungen unter Septimius Severus 198 n. Chr. Während der arabischen Eroberung 668 wurde Capsa zum Zentrum der Berberregion al-Qasrayn und behielt seine Bäder als Pilgerziel.",
        "facts": [
            "Die Becken werden mit Wasser von rund 30 Grad gespeist.",
            "Marius eroberte Capsa 106 v. Chr. von den Numidern.",
            "Lateinische Inschriften belegen Restaurierungen unter Septimius Severus.",
            "Augustus gründete die römische Kolonie um 30 v. Chr. neu.",
            "Die heutige Steinfassung stammt aus dem 2. Jahrhundert n. Chr.",
            "Capsa fiel 668 n. Chr. an die arabischen Eroberer.",
            "Die Schwefelquellen werden noch heute medizinisch genutzt.",
        ],
    },
    "utica-archaeological-history-v2": {
        "desc": "Utica, gegründet der Tradition nach 1101 v. Chr. von phönizischen Siedlern aus Tyros, ist die älteste phönizische Niederlassung in Nordafrika und damit über zwei Jahrhunderte älter als Karthago. Die Stadt war strategischer Hafen am Ausfluss des Medjerda-Flusses. Im Dritten Punischen Krieg verbündete sich Utica 149 v. Chr. mit Rom gegen Karthago und wurde zur Hauptstadt der römischen Provinz Africa. Berühmt wurde die Stadt durch den Selbstmord Catos des Jüngeren 46 v. Chr. nach der Niederlage der Republikaner gegen Caesar bei Thapsus. Im 2. Jahrhundert n. Chr. erlebte Utica ihre größte Blüte mit prächtigen Villen, deren Mosaike erhalten sind. Die Verlandung des Hafens führte ab dem 7. Jahrhundert zum Niedergang.",
        "facts": [
            "Utica wurde der Tradition nach 1101 v. Chr. gegründet.",
            "Sie ist 264 Jahre älter als Karthago.",
            "Cato der Jüngere beging hier 46 v. Chr. Selbstmord.",
            "Utica war ab 146 v. Chr. Hauptstadt der Provinz Africa.",
            "Der Hafen verlandete durch Sedimente des Medjerda.",
            "Die Vandalen plünderten die Stadt 439 n. Chr.",
            "Die heutige Küste liegt 12 Kilometer vom antiken Hafen entfernt.",
        ],
    },
    "neapolis-nabeul-history-v2": {
        "desc": "Neapolis, das heutige Nabeul auf der Halbinsel Cap Bon, war eine bedeutende Hafenstadt der punischen und römischen Antike. Gegründet im 5. Jahrhundert v. Chr. von griechischen Siedlern aus Sizilien, kam die Stadt unter karthagische Herrschaft und wurde 148 v. Chr. von Rom erobert. Berühmt war Neapolis für seine industrielle Garumproduktion: Über 25 Salzfischbecken aus dem 2. Jahrhundert n. Chr. zeugen von einem riesigen Exportgewerbe. Das Haus der Nymphen mit prächtigen Mosaiken stammt aus dem 4. Jahrhundert. Während des byzantinischen Justinianischen Krieges 533 wurde die Stadt erneut wichtig, verfiel aber nach der arabischen Eroberung 698. Heute ist Nabeul Tunesiens Zentrum für Töpferei und Keramik.",
        "facts": [
            "Neapolis wurde im 5. Jahrhundert v. Chr. gegründet.",
            "Über 25 Salzfischbecken zeugen von Garumproduktion.",
            "Rom eroberte die Stadt 148 v. Chr.",
            "Das Haus der Nymphen besitzt Mosaike aus dem 4. Jahrhundert.",
            "Justinian eroberte die Stadt 533 n. Chr. zurück.",
            "Die arabische Eroberung erfolgte 698 n. Chr.",
            "Nabeul ist heute Zentrum der tunesischen Keramikproduktion.",
        ],
    },
    "pupput-archaeological-history-v2": {
        "desc": "Pupput, an der Küste bei Hammamet gelegen, war in der römischen Antike ein wichtiger Knotenpunkt zwischen Karthago und Hadrumetum. Erste Siedlungsspuren reichen ins 1. Jahrhundert n. Chr. zurück; unter Kaiser Commodus erhielt die Stadt 168 n. Chr. den Munizipalstatus als Colonia Aurelia Commoda. Berühmt sind die ausgedehnten Nekropolen mit über 600 ausgegrabenen Gräbern aus dem 2. bis 4. Jahrhundert. Die christliche Basilika aus dem 5. Jahrhundert zeigt frühchristliche Mosaike mit Donatoreninschriften. Pupput verfiel nach der Vandaleninvasion 439 und wurde unter den Byzantinern teilweise wiederbesiedelt. Die arabische Eroberung im 7. Jahrhundert führte zum endgültigen Niedergang der Stadt.",
        "facts": [
            "Pupput erhielt 168 n. Chr. unter Commodus den Kolonialstatus.",
            "Die Nekropole umfasst über 600 ausgegrabene Gräber.",
            "Die christliche Basilika stammt aus dem 5. Jahrhundert.",
            "Vandalen unter Geiserich plünderten die Stadt 439 n. Chr.",
            "Der antike Name Pupput leitet sich vermutlich vom Punischen ab.",
            "Französische Ausgrabungen begannen 1883.",
            "Die Stadt lag an der Via Hadrumetina zwischen Karthago und Sousse.",
        ],
    },
    "salacta-catacombs-history-v2": {
        "desc": "Die Katakomben von Salacta, dem antiken Sullectum an der tunesischen Ostküste, stammen aus dem 2. bis 4. Jahrhundert n. Chr. und gehören zu den ältesten frühchristlichen Begräbnisanlagen Nordafrikas. Die unterirdischen Galerien erstrecken sich über mehrere Stockwerke und beherbergen tausende Loculi-Gräber. Sullectum war seit dem 1. Jahrhundert n. Chr. römische Hafenstadt und Zentrum der Garumindustrie. Die Christianisierung erfolgte früh: Bischöfe von Sullectum nahmen bereits 256 am Konzil von Karthago unter Cyprian teil. Während der Vandalenherrschaft im 5. Jahrhundert wurden die Katakomben von Donatisten und Arianern weiterbenutzt. Die heutige Anlage Salakta wurde nach der arabischen Eroberung 670 islamisch geprägt.",
        "facts": [
            "Die Katakomben stammen aus dem 2. bis 4. Jahrhundert n. Chr.",
            "Bischöfe von Sullectum nahmen 256 am Konzil von Karthago teil.",
            "Die Anlage erstreckt sich über mehrere unterirdische Stockwerke.",
            "Sullectum war ein bedeutendes Zentrum der Garumproduktion.",
            "Die arabische Eroberung erfolgte um 670 n. Chr.",
            "Cyprian von Karthago leitete das Konzil von 256.",
            "Über 1.500 Loculi-Gräber sind dokumentiert.",
        ],
    },
    "haidra-ammaedara-history-v2": {
        "desc": "Haidra, das antike Ammaedara, war die erste römische Veteranenkolonie Africas und wurde 75 n. Chr. unter Kaiser Vespasian für die Soldaten der Legio III Augusta gegründet. Strategisch an einem Pass zwischen den Hochebenen gelegen, kontrollierte die Stadt die Verbindung zwischen dem Mittelmeer und dem Sahara-Vorland. Bedeutendstes Bauwerk ist der Triumphbogen des Septimius Severus von 195 n. Chr. Die byzantinische Festung aus dem 6. Jahrhundert unter Justinian gehört zu den größten ihrer Art in Nordafrika und umfasst eine Fläche von 200 mal 110 Metern. Ammaedara war Sitz eines bedeutenden christlichen Bischofs und besaß mindestens fünf Basiliken. Nach 698 verlor die Stadt unter arabischer Herrschaft an Bedeutung.",
        "facts": [
            "Ammaedara wurde 75 n. Chr. unter Vespasian gegründet.",
            "Die Veteranen stammten aus der Legio III Augusta.",
            "Der Triumphbogen des Septimius Severus stammt von 195 n. Chr.",
            "Die byzantinische Festung misst 200 mal 110 Meter.",
            "Justinian ließ die Festung im 6. Jahrhundert errichten.",
            "Mindestens fünf christliche Basiliken sind nachgewiesen.",
            "Die arabische Eroberung erfolgte um 698 n. Chr.",
        ],
    },
    "medina-of-sfax-history-v2": {
        "desc": "Die Medina von Sfax, gegründet 849 n. Chr. unter dem Aghlabiden-Emir Ali ibn Salim, ist eine der am besten erhaltenen ummauerten Altstädte des arabischen Maghreb. Ihre über 2 Kilometer langen Stadtmauern sind weitgehend in ihrem ursprünglichen Zustand erhalten, einschließlich der charakteristischen Mauerzinnen und Wachtürme. Die Große Moschee aus dem Jahr 850 zeigt die typische aghlabidische Bauweise. Sfax entwickelte sich im Mittelalter zu einem bedeutenden Zentrum des Olivenölhandels mit Italien und Spanien. Während des Zweiten Weltkriegs wurden Teile der Stadt bei alliierten Bombardements 1943 beschädigt, doch die Medina blieb weitgehend verschont. Heute ist sie zentraler Wirtschaftsfaktor und beherbergt traditionelle Souks für Gold, Stoffe und Gewürze.",
        "facts": [
            "Die Medina wurde 849 n. Chr. unter den Aghlabiden gegründet.",
            "Die Stadtmauern sind über 2 Kilometer lang.",
            "Die Große Moschee stammt aus dem Jahr 850.",
            "Sfax war im Mittelalter Zentrum des Olivenölhandels.",
            "Alliierte Bombardements 1943 beschädigten Teile der Stadt.",
            "Die Mauern besitzen 34 ursprünglich erhaltene Wachtürme.",
            "Die Medina ist auf der UNESCO-Tentativliste.",
        ],
    },
    "musti-archaeological-history-v2": {
        "desc": "Musti, ein numidisches Dorf am Wadi Khaled, wurde nach dem Jugurthinischen Krieg 105 v. Chr. römisch und unter Kaiser Augustus mit Veteranen besiedelt. Die kleine Stadt erhielt unter Mark Aurel um 170 n. Chr. den Munizipalstatus und entwickelte sich zu einem regionalen Marktzentrum. Erhalten sind die punisch-römischen Tempel der Ceres und des Apollo, das Forum mit Triumphbogen sowie eine außergewöhnlich gut erhaltene byzantinische Festung aus dem 6. Jahrhundert. Die christliche Basilika zeugt von einer aktiven christlichen Gemeinde im 4. und 5. Jahrhundert. Nach der arabischen Eroberung im späten 7. Jahrhundert wurde die Stadt aufgegeben. Französische Archäologen führten ab 1908 erste Grabungen durch.",
        "facts": [
            "Musti wurde unter Augustus zur römischen Kolonie ausgebaut.",
            "Mark Aurel erhob die Stadt um 170 n. Chr. zum Municipium.",
            "Die punisch-römischen Tempel zeugen von kultureller Verschmelzung.",
            "Die byzantinische Festung stammt aus dem 6. Jahrhundert.",
            "Die christliche Basilika wurde im 4. Jahrhundert errichtet.",
            "Französische Grabungen begannen 1908.",
            "Die Stadt wurde nach 698 n. Chr. aufgegeben.",
        ],
    },
    "gigthis-archaeological-history-v2": {
        "desc": "Gigthis, an der Küste des Golfs von Bou Grara gelegen, war eine bedeutende phönizisch-punische Hafenstadt, die später unter römische Herrschaft kam. Gegründet im 7. Jahrhundert v. Chr. als Handelsposten, kontrollierte sie den Karawanenhandel mit der Sahara, insbesondere für afrikanische Edelhölzer und Elfenbein. Unter Kaiser Antoninus Pius erhielt Gigthis 138 n. Chr. den Munizipalstatus, nachdem der Bürger Servilius Privatianus zwei Jahrzehnte lang in Rom für die Statuserhöhung gekämpft hatte. Das gut erhaltene Forum, der Tempel des Apollo Liber Pater und die Thermen zeugen vom Wohlstand. Nach den Vandaleninvasionen 439 verfiel die Stadt; die byzantinische Wiedereroberung 533 brachte nur kurzzeitige Erholung. Die arabische Eroberung um 670 beendete die antike Geschichte.",
        "facts": [
            "Gigthis wurde im 7. Jahrhundert v. Chr. gegründet.",
            "Antoninus Pius verlieh 138 n. Chr. den Munizipalstatus.",
            "Servilius Privatianus erkämpfte den Status in Rom.",
            "Die Stadt kontrollierte den transsaharischen Karawanenhandel.",
            "Vandalen plünderten die Stadt 439 n. Chr.",
            "Die byzantinische Rückeroberung erfolgte 533.",
            "Die arabische Eroberung beendete die antike Geschichte um 670.",
        ],
    },
    "medina-tozeur-history-v2": {
        "desc": "Die Medina von Tozeur am Rand der Sahara ist berühmt für ihre einzigartige Backsteinarchitektur, die seit dem 14. Jahrhundert ornamentale Reliefs in den Außenwänden formt. Die Stadt war seit der römischen Antike als Tusuros bekannt und wichtige Karawanenstation auf der Route nach Westafrika. Unter den Hafsiden im 13. und 14. Jahrhundert blühte sie als Zentrum des Goldhandels mit Mali. Die typischen geometrischen Backsteinmuster, oft basierend auf Berber-Symbolen, sind in keiner anderen Region des Maghreb in dieser Dichte zu finden. Während der französischen Protektoratszeit ab 1881 wurden Teile umgebaut. Der berühmte Schriftsteller Ibn Chabbat verfasste hier im 13. Jahrhundert sein wegweisendes Werk über das Bewässerungssystem der Oasen.",
        "facts": [
            "Die Backsteinarchitektur stammt aus dem 14. Jahrhundert.",
            "Tusuros war römische Karawanenstation seit dem 1. Jahrhundert.",
            "Die Hafsiden machten die Stadt zum Goldhandelszentrum.",
            "Ibn Chabbat lebte hier im 13. Jahrhundert.",
            "Die geometrischen Backsteinmuster basieren auf Berber-Symbolen.",
            "Das Oasensystem versorgt über 200.000 Palmen.",
            "Die Medina hat 14 historische Stadttore besessen.",
        ],
    },
    "skifa-el-kahla-history-v2": {
        "desc": "Skifa el Kahla, das Dunkle Tor von Mahdia, ist das einzige erhaltene Stadttor der ehemaligen fatimidischen Hauptstadt und gehört zu den beeindruckendsten militärischen Bauwerken des frühen islamischen Maghreb. Errichtet 916 n. Chr. unter dem Fatimiden-Kalifen Ubaid Allah al-Mahdi, war es der einzige Landzugang zur befestigten Halbinselstadt. Der 44 Meter lange, gewölbte Tunneldurchgang ermöglichte eine effektive Verteidigung gegen Angreifer. Mahdia diente bis 973 als Hauptstadt der Fatimiden, bevor diese nach Kairo umzogen. Im 11. Jahrhundert widerstand die Stadt der Belagerung der normannischen Sizilianer; 1148 wurde sie unter Roger II. von Sizilien jedoch eingenommen. Karl V. zerstörte 1554 große Teile der Befestigung, doch das Tor blieb erhalten.",
        "facts": [
            "Skifa el Kahla wurde 916 n. Chr. unter al-Mahdi errichtet.",
            "Der Tunneldurchgang ist etwa 44 Meter lang.",
            "Mahdia war von 909 bis 973 fatimidische Hauptstadt.",
            "Die Stadt wurde 1148 von Roger II. von Sizilien erobert.",
            "Karl V. zerstörte die Befestigungen 1554 weitgehend.",
            "Die Mauerdicke des Tores erreicht 4,2 Meter.",
            "Das Tor besaß ursprünglich vier hintereinander liegende Schleusen.",
        ],
    },
    "ksar-ouled-soltane-history-v2": {
        "desc": "Ksar Ouled Soltane, im Süden Tunesiens nahe Tataouine, ist einer der spektakulärsten Berber-Speicherbauten Nordafrikas. Die mehrstöckigen Ghorfas, traditionelle Getreidespeicher der Berberbevölkerung, wurden ab dem 15. Jahrhundert errichtet und unter den lokalen Stammesführern bis ins 19. Jahrhundert erweitert. Bis zu vier Stockwerke hoch ragen die Lehmbauten in den Himmel und schützen Getreide, Olivenöl und andere Vorräte vor Hitze und Plünderern. Die zentralen Innenhöfe dienten als Versammlungsorte der Stammesältesten. Während der osmanischen und französischen Herrschaft blieb die Anlage weitgehend in Berberhand. Internationale Bekanntheit erlangte Ksar Ouled Soltane 1999, als George Lucas hier Sklavenviertel auf Tatooine für Star Wars Episode I drehte.",
        "facts": [
            "Die ältesten Ghorfas stammen aus dem 15. Jahrhundert.",
            "Die Anlage besitzt zwei Innenhöfe mit über 400 Speichern.",
            "Die Bauten erreichen bis zu vier Stockwerke Höhe.",
            "Star Wars Episode I drehte 1999 hier Szenen.",
            "Die Berber-Stammesführer erweiterten den Komplex bis ins 19. Jahrhundert.",
            "Die Lehmziegel halten Innentemperaturen unter 25 Grad.",
            "Die Anlage steht auf der UNESCO-Tentativliste seit 2012.",
        ],
    },
}


def fmt_facts(facts):
    items = ", ".join('"' + f.replace('"', '\\"') + '"' for f in facts)
    return "[" + items + "]"


def main():
    with open(FILE, "r", encoding="utf-8") as f:
        src = f.read()

    updated = 0
    skipped = 0
    for poi_id, payload in DATA.items():
        # Locate the POI block: find `id: "<id>",` then walk to the closing `}` of THIS object.
        id_pattern = 'id: "' + poi_id + '",'
        idx = src.find(id_pattern)
        if idx < 0:
            print(f"NOT FOUND: {poi_id}")
            continue

        # find start of POI object (the `{` before this id)
        # walk backwards to find `{`
        obj_start = src.rfind("{", 0, idx)
        # find matching closing `}` by counting braces
        depth = 0
        i = obj_start
        obj_end = -1
        in_str = False
        str_ch = ""
        while i < len(src):
            c = src[i]
            if in_str:
                if c == "\\":
                    i += 2
                    continue
                if c == str_ch:
                    in_str = False
            else:
                if c == '"' or c == "'":
                    in_str = True
                    str_ch = c
                elif c == "{":
                    depth += 1
                elif c == "}":
                    depth -= 1
                    if depth == 0:
                        obj_end = i
                        break
            i += 1

        if obj_end < 0:
            print(f"BRACE MATCH FAIL: {poi_id}")
            continue

        block = src[obj_start:obj_end + 1]

        if "descriptionAdvanced" in block:
            print(f"SKIP (already filled): {poi_id}")
            skipped += 1
            continue

        # Build new entries to insert before the closing `}`
        desc = payload["desc"].replace('"', '\\"')
        facts_arr = fmt_facts(payload["facts"])

        insert = (
            ',\n    descriptionAdvanced: {\n'
            '      de: "' + desc + '"\n'
            '    },\n'
            '    factsAdvanced: {\n'
            '      de: ' + facts_arr + '\n'
            '    }'
        )

        # The block currently ends like `...}` (last char is the closing brace at obj_end)
        # The character before `}` should be `}` (closing the inner facts object) — sometimes followed by `image: "..."}` pattern
        # Find the last `}` before obj_end and insert after it.
        # Simpler: insert insert_text right before src[obj_end]
        # But we must ensure the previous char isn't a comma already. It will be `}`.
        new_src = src[:obj_end] + insert + "\n  " + src[obj_end:]
        src = new_src
        updated += 1
        print(f"UPDATED: {poi_id}")

    with open(FILE, "w", encoding="utf-8") as f:
        f.write(src)

    print(f"\nDone. Updated: {updated}, Skipped: {skipped}")


if __name__ == "__main__":
    main()
