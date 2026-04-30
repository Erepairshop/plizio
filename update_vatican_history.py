import re

file_path = "/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraVaticanHistory.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

updates = {
    "va-landmark-st-peters-square": {
        "descriptionAdvanced": "Der Petersplatz ist weit mehr als nur ein Vorplatz; er ist ein architektonisches Meisterwerk von Gian Lorenzo Bernini, das die Besucher des Vatikans mit weit geöffneten Armen empfängt. Die ellipsenförmige Gestaltung, eingerahmt von 284 massiven dorischen Säulen in vier Reihen, schafft eine monumentale Bühne für päpstliche Segnungen und weltweite Zusammenkünfte. In der Mitte ragt der vatikanische Obelisk empor, der von zwei prächtigen Brunnen flankiert wird, die harmonisch in das symmetrische Gesamtbild integriert sind. Bernini nutzte geschickt die optische Täuschung, um den Platz noch weitläufiger erscheinen zu lassen. Für Pilger und Touristen bietet dieser Ort eine unvergleichliche Atmosphäre der Erhabenheit, besonders wenn die Sonne hinter den Kolonnaden untergeht. Jedes Detail, von den 140 Heiligenstatuen auf der Balustrade bis zum Pflaster aus 'Sanpietrini'-Steinen, erzählt von der tiefen Geschichte und der spirituellen Bedeutung dieses zentralen Ortes der katholischen Christenheit.",
        "factsAdvanced": [
            "Der Platz wurde zwischen 1656 und 1667 erbaut.",
            "Die Kolonnaden bestehen aus insgesamt 284 Säulen und 88 Pfeilern.",
            "Auf der Balustrade thronen 140 Heiligenstatuen, jede etwa 3,2 Meter hoch.",
            "Der zentrale ägyptische Obelisk hat eine Höhe von 25,5 Metern.",
            "Der Platz ist 320 Meter tief und an seiner breitesten Stelle 240 Meter weit.",
            "Bei Großveranstaltungen bietet er Platz für bis zu 300.000 Menschen.",
            "Die zwei Brunnen wurden von Maderno (1613) und Bernini (1675) entworfen."
        ]
    },
    "va-historical-st-peters-basilica": {
        "descriptionAdvanced": "Die Petersbasilika steht als monumentales Symbol des Christentums über dem Grab des Apostels Petrus und ist ein Triumphzug der Renaissance- und Barockarchitektur. Über 120 Jahre dauerte der Bau dieses gigantischen Gotteshauses, an dem Genies wie Michelangelo, Bramante und Raffael ihr Vermächtnis hinterließen. Die gewaltige Kuppel, die den römischen Horizont dominiert, bietet im Inneren eine atemberaubende Pracht aus Gold, Mosaiken und Marmor. Besucher werden von der schieren Größe und der spirituellen Aura überwältigt, während sie Meisterwerke wie Michelangelos Pietà oder Berninis Baldachin bestaunen. Jede Kapelle und jeder Altar in dieser Kirche ist ein Kunstwerk für sich und zeugt von der jahrhundertelangen Patronage der Päpste. Die Basilika ist nicht nur ein Museum der Superlative, sondern das lebendige Herz der katholischen Kirche, in dem täglich die Liturgie gefeiert wird und Millionen von Menschen Trost und Inspiration finden.",
        "factsAdvanced": [
            "Die Grundsteinlegung der heutigen Basilika erfolgte am 18. April 1506.",
            "Die Kirche hat eine beeindruckende Gesamtlänge von 211,5 Metern.",
            "Die Kuppel erreicht eine maximale Höhe von 136,57 Metern.",
            "Das Kirchenschiff bietet eine Fläche von etwa 15.160 Quadratmetern.",
            "Es gibt 45 Altäre und 11 Kapellen innerhalb der Basilika.",
            "In der Kirche können gleichzeitig etwa 20.000 Gläubige Gottesdienst feiern.",
            "Der Bau wurde nach 120 Jahren im Jahr 1626 offiziell geweiht."
        ]
    },
    "va-landmark-sistine-chapel": {
        "descriptionAdvanced": "Die Sixtinische Kapelle ist das wohl berühmteste Juwel der Vatikanischen Museen und ein Ort von unschätzbarem religiösem und künstlerischem Wert. Bekannt als Schauplatz des Konklaves, in dem die Päpste gewählt werden, zieht sie Besucher vor allem durch die monumentalen Fresken Michelangelos in ihren Bann. Die Deckenmalereien mit der 'Erschaffung Adams' und das gewaltige 'Jüngste Gericht' an der Altarwand markieren einen Wendepunkt in der Kunstgeschichte und zeigen die menschliche Anatomie und göttliche Dramatik in nie zuvor gesehener Intensität. Doch auch die Seitenwände, gestaltet von Meistern wie Botticelli und Perugino, erzählen die biblischen Geschichten von Moses und Christus mit feinster Präzision. Die Kapelle ist ein Ort, an dem Kunst zur Theologie wird und die Stille der Bewunderung nur durch das andächtige Flüstern der Besucher unterbrochen wird. Ein Besuch hier ist eine Reise zum Gipfel der menschlichen Schöpfungskraft.",
        "factsAdvanced": [
            "Die Kapelle wurde zwischen 1473 und 1481 unter Papst Sixtus IV. erbaut.",
            "Die Deckenfresken wurden von Michelangelo in nur vier Jahren (1508-1512) gemalt.",
            "Das 'Jüngste Gericht' umfasst eine Fläche von über 160 Quadratmetern.",
            "Die Kapelle hat die gleichen Maße wie der Tempel Salomos (40,9 x 13,4 Meter).",
            "Insgesamt bedecken über 1.100 Quadratmeter Fresken die Wände und die Decke.",
            "Seit 1878 findet hier ausnahmslos jedes päpstliche Konklave statt.",
            "Die Höhe der Kapelle beträgt exakt 20,7 Meter bis zum Scheitel des Gewölbes."
        ]
    },
    "va-historical-vatican-museums": {
        "descriptionAdvanced": "Die Vatikanischen Museen beherbergen eine der bedeutendsten Kunstsammlungen der Welt, die über Jahrhunderte von den Päpsten zusammengetragen wurde. Auf einer Strecke von sieben Kilometern erstrecken sich unzählige Galerien, die von antiken ägyptischen Artefakten bis hin zu zeitgenössischer religiöser Kunst reichen. Besucher wandern durch prächtige Korridore wie die Galerie der Landkarten oder die Galerie der Kandelaber, bevor sie die berühmten Stanzen des Raffael und schließlich die Sixtinische Kapelle erreichen. Jedes Exponat, ob die Laokoon-Gruppe oder der Belvedere-Torso, erzählt eine Geschichte von kulturellem Austausch, religiöser Hingabe und künstlerischer Perfektion. Die Museen sind nicht nur eine Schatzkammer der Vergangenheit, sondern auch ein lebendiges Zentrum der Forschung und Restaurierung. Die schiere Vielfalt und Qualität der Werke machen es unmöglich, alles bei einem einzigen Besuch zu erfassen, was die Museen zu einem Ort macht, zu dem man immer wieder zurückkehren möchte.",
        "factsAdvanced": [
            "Die Museen wurden offiziell im Jahr 1506 durch Papst Julius II. begründet.",
            "Der gesamte Museumskomplex umfasst etwa 54 verschiedene Galerien.",
            "Die jährliche Besucherzahl liegt bei über 6 Millionen Menschen.",
            "Die Gesamtlänge der für Besucher zugänglichen Wege beträgt rund 7 Kilometer.",
            "Die Sammlung umfasst insgesamt mehr als 70.000 katalogisierte Objekte.",
            "Nur etwa 20.000 dieser Objekte sind dauerhaft für die Öffentlichkeit ausgestellt.",
            "Es gibt eine eigene Restaurierungswerkstatt mit spezialisierten Abteilungen."
        ]
    },
    "va-landmark-raphael-rooms": {
        "descriptionAdvanced": "Die Stanzen des Raffael im Apostolischen Palast stellen den absoluten Höhepunkt der Hochrenaissance dar und waren einst die privaten Gemächer von Papst Julius II. Raffael und seine Schüler schufen hier zwischen 1508 und 1524 Freskenzyklen von unvergleichlicher Harmonie und philosophischer Tiefe. Das berühmteste Werk, 'Die Schule von Athen', vereint die großen Denker der Antike in einer perfekten architektonischen Perspektive und gilt als Manifest des humanistischen Denkens. Jeder Raum – die Stanza della Segnatura, di Eliodoro, dell'Incendio di Borgo und di Costantino – widmet sich unterschiedlichen theologischen und historischen Themen, die die Macht und das Ideal des Papsttums verherrlichen. Die leuchtenden Farben und die meisterhafte Darstellung der menschlichen Figur zeigen Raffaels Genie, das in direkter Konkurrenz zu Michelangelo stand. Diese Räume bieten einen intimen Einblick in die Pracht des päpstlichen Hofes und die kulturelle Blütezeit Roms zu Beginn des 16. Jahrhunderts.",
        "factsAdvanced": [
            "Die Arbeiten an den vier Räumen begannen im Jahr 1508.",
            "Raffael verstarb 1520, woraufhin seine Schüler die Arbeiten bis 1524 beendeten.",
            "In der 'Schule von Athen' sind über 50 Philosophen und Wissenschaftler dargestellt.",
            "Die Räume befinden sich direkt über den Borgia-Gemächern.",
            "Papst Julius II. wählte diese Räume, um den Vorgänger Alexander VI. zu meiden.",
            "Die Fresken bedecken eine Gesamtfläche von mehreren hundert Quadratmetern.",
            "Raffael malte sich selbst als Randfigur in der 'Schule von Athen' (ganz rechts)."
        ]
    },
    "va-historical-vatican-gardens": {
        "descriptionAdvanced": "Die Vatikanischen Gärten sind eine verborgene Oase der Stille, die mehr als die Hälfte des vatikanischen Staatsgebiets einnimmt und nur im Rahmen spezieller Führungen zugänglich ist. Seit dem 13. Jahrhundert dienen sie den Päpsten als Ort der Erholung, des Gebets und der Meditation. Die Parklandschaft ist geprägt von einer faszinierenden Mischung aus verschiedenen Gartenstilen, von streng geometrischen italienischen Beeten bis hin zu naturnah gestalteten englischen Parks. Überall im Garten verstreut finden sich historische Monumente, prächtige Brunnen wie der Adlerbrunnen und zahlreiche Marienstatuen aus aller Welt. Die botanische Vielfalt ist beeindruckend und umfasst seltene exotische Pflanzen ebenso wie mediterrane Klassiker. Besonders bemerkenswert sind die Reste der Leoninischen Mauer, die einst zum Schutz des Vatikans errichtet wurden. In dieser grünen Lunge des Vatikans scheint die Zeit stillzustehen, fernab vom Trubel der angrenzenden Museen und des Petersdoms.",
        "factsAdvanced": [
            "Die Gärten erstrecken sich über eine Fläche von etwa 23 Hektar.",
            "Die erste schriftliche Erwähnung der Gärten datiert aus dem Jahr 1279.",
            "Im Garten befinden sich über 100 Brunnen und 15 kleine Denkmäler.",
            "Ein Teil der Gärten liegt auf dem 60 Meter hohen Vatikanischen Hügel.",
            "Die Gärten beherbergen den vatikanischen Hubschrauberlandeplatz.",
            "Besucher können die Gärten nur in Gruppen von maximal 25 Personen besichtigen.",
            "Es gibt eine eigene Gärtnerei, die für den Blumenschmuck im Petersdom sorgt."
        ]
    },
    "va-landmark-apostolic-palace": {
        "descriptionAdvanced": "Der Apostolische Palast, auch Papstpalast genannt, ist das administrative und zeremonielle Zentrum des Heiligen Stuhls. Dieser weitläufige Gebäudekomplex umfasst die päpstlichen Privatgemächer, bedeutende Kapellen wie die Sixtinische und Pauline Kapelle sowie die Vatikanischen Museen und die Bibliothek. Die Architektur des Palastes ist das Ergebnis jahrhundertelanger Erweiterungen durch verschiedene Päpste, was zu einer faszinierenden Mischung aus Festungsbau und prächtiger Residenz führte. Hier befinden sich die berühmten Stanzen des Raffael und die prunkvollen Säle, in denen offizielle Staatsgäste empfangen werden. Obwohl Papst Franziskus sich entschied, im Gästehaus Santa Marta zu wohnen, bleibt der Palast der Ort, an dem jeden Sonntag das Angelus-Gebet aus dem Fenster des Arbeitszimmers gesprochen wird. Hinter den dicken Mauern des Palastes wird die tägliche Politik der Weltkirche gestaltet und die unschätzbaren kulturellen Schätze des Vatikans bewahrt.",
        "factsAdvanced": [
            "Der Palast beherbergt insgesamt über 1.000 verschiedene Räume.",
            "Die heutige Struktur nahm ab dem Jahr 1589 unter Papst Sixtus V. Gestalt an.",
            "Innerhalb des Palastes gibt es 20 verschiedene Höfe.",
            "Die berühmte Scala Regia von Bernini dient als zeremonieller Haupteingang.",
            "Der Palast wird von der Päpstlichen Schweizergarde rund um die Uhr bewacht.",
            "Es gibt eine eigene Druckerei und eine Münzanstalt innerhalb des Komplexes.",
            "Der Palast ist mit dem Petersdom durch mehrere Geheimgänge verbunden."
        ]
    },
    "va-historical-vatican-necropolis": {
        "descriptionAdvanced": "Tief unter den Fundamenten des Petersdoms verbirgt sich die Vatikanische Nekropole, eine antike Totenstadt, die Einblicke in die frühen Tage des Christentums gewährt. Bei Ausgrabungen im 20. Jahrhundert wurden hier römische Mausoleen und Gräber entdeckt, die entlang einer antiken Straße angeordnet sind. Der bedeutendste Fund ist jedoch das Grab, das nach jahrzehntelanger Forschung dem Apostel Petrus zugeschrieben wurde. Die feuchte, unterirdische Luft und die engen Gänge schaffen eine andächtige Atmosphäre, während Besucher die detaillierten Inschriften und Mosaike an den Grabwänden betrachten. Es ist ein Ort der Stille, der die physische Verbindung zwischen der antiken Welt und der heutigen Basilika verdeutlicht. Da der Zugang streng limitiert ist, bleibt ein Besuch der Nekropole ein exklusives Erlebnis, das die spirituelle Tiefe und die archäologische Bedeutung des Vatikans auf einzigartige Weise verbindet.",
        "factsAdvanced": [
            "Die Nekropole liegt etwa 5 bis 12 Meter unter dem heutigen Niveau der Basilika.",
            "Die Ausgrabungen begannen im Jahr 1940 auf Anordnung von Papst Pius XII.",
            "In der Nekropole befinden sich etwa 22 gut erhaltene römische Mausoleen.",
            "Der Ort darf täglich von maximal 250 Personen in kleinen Gruppen besucht werden.",
            "Das Petrusgrab wurde unter einem Denkmal aus dem 2. Jahrhundert (Tropaion) gefunden.",
            "Die Inschrift 'Petros eni' (Petrus ist hier) wurde an einer der Mauern entdeckt.",
            "Die Temperatur in den Ausgrabungen wird konstant auf etwa 20 Grad gehalten."
        ]
    },
    "va-landmark-gallery-of-maps": {
        "descriptionAdvanced": "Die Galerie der Landkarten ist ein 120 Meter langer Prachtkorridor innerhalb der Vatikanischen Museen, der Besucher durch seine goldene Decke und die monumentalen Wandmalereien in Staunen versetzt. Papst Gregor XIII. gab dieses ehrgeizige Projekt Ende des 16. Jahrhunderts in Auftrag, um eine topografische Gesamtschau Italiens zu schaffen. Der Geograf Ignazio Danti entwarf die Karten, die die Apenninhalbinsel mit erstaunlicher Genauigkeit darstellen, einschließlich bedeutender Städte, Landschaften und historischer Schlachten. Die Decke ist mit 80 Fresken geschmückt, die religiöse Ereignisse an den jeweiligen Orten der Karten darstellen. Während man durch den langen Saal schreitet, fühlt es sich an, als würde man ganz Italien durchqueren, von den Alpen bis nach Sizilien. Die Galerie ist nicht nur ein kartografisches Meisterwerk, sondern auch ein Zeugnis für den päpstlichen Anspruch auf die geistige und weltliche Führung in Italien während der Gegenreformation.",
        "factsAdvanced": [
            "Die Galerie hat eine beeindruckende Länge von exakt 120 Metern und ist 6 Meter breit.",
            "Die 40 großen Karten wurden zwischen 1580 und 1583 fertiggestellt.",
            "Die Decke wird von über 80 verschiedenen Fresken geschmückt.",
            "Italien wird in der Galerie symbolisch durch den Apennin geteilt dargestellt.",
            "Jede Karte ist etwa 4 Meter hoch und fast 5 Meter breit.",
            "In den Karten sind über 2.000 verschiedene Ortsnamen verzeichnet.",
            "Die Restaurierung der gesamten Galerie dauerte vier Jahre und wurde 2016 beendet."
        ]
    },
    "va-historical-vatican-library": {
        "descriptionAdvanced": "Die Vatikanische Apostolische Bibliothek ist eine der bedeutendsten Gedächtnisinstitutionen der Menschheit und beherbergt unschätzbare Schätze aus zwei Jahrtausenden Kulturgeschichte. Gegründet im 15. Jahrhundert, dient sie als Archiv des Wissens für Theologie, Philosophie, Wissenschaft und Geschichte. Zu den wertvollsten Stücken gehört der Codex Vaticanus, eine der ältesten erhaltenen Handschriften der Bibel, sowie Tausende von Inkunabeln und antiken Manuskripten. Die prunkvollen Säle, wie der Sixtinische Saal, sind mit kunstvollen Fresken geschmückt, die die Geschichte des Buches und die großen Gelehrten ehren. Obwohl die Bibliothek primär Wissenschaftlern vorbehalten ist, können Besucher Teile der Sammlung in den Museen bewundern. Sie ist ein Ort der Forschung, der Digitalisierung und der Bewahrung, der sicherstellt, dass das Erbe der Vergangenheit für künftige Generationen erhalten bleibt. Die Bibliothek verkörpert das Ideal der Kirche als Förderin von Bildung und Wissen durch alle Epochen hindurch.",
        "factsAdvanced": [
            "Die Bibliothek wurde offiziell am 15. Juni 1475 durch Papst Sixtus IV. gegründet.",
            "Der Bestand umfasst über 1,1 Millionen gedruckte Bücher und 75.000 Manuskripte.",
            "In der Sammlung befinden sich etwa 8.500 Wiegendrucke (Inkunabeln).",
            "Die Bibliothek besitzt eine der weltweit größten Münz- und Medaillensammlungen (300.000 Stück).",
            "Jährlich werden Tausende von Seiten für das Langzeit-Digitalisierungsprojekt gescannt.",
            "Die Regale der Bibliothek erstrecken sich über eine Gesamtlänge von rund 42 Kilometern.",
            "Der Codex Vaticanus aus dem 4. Jahrhundert ist das wertvollste Stück der Sammlung."
        ]
    },
    "va-historical-vatican-apostolic-archive": {
        "descriptionAdvanced": "Das Vatikanische Apostolische Archiv, früher unter dem mysteriösen Namen 'Geheimarchiv' bekannt, ist das zentrale Gedächtnis des Heiligen Stuhls und eine der wichtigsten Quellen für Historiker weltweit. Es bewahrt alle Akten, Briefe und Dokumente auf, die das Papsttum seit dem 8. Jahrhundert produziert oder erhalten hat. Die Bestände reichen von der päpstlichen Bulle zur Exkommunikation Martin Luthers bis hin zu Briefen von Abraham Lincoln und Dokumenten zum Zweiten Weltkrieg. Hinter den dicken Mauern lagern kilometerlange Regale voller Geschichte, die Aufschluss über die diplomatischen Beziehungen des Vatikans zu fast allen Nationen der Erde geben. Im Jahr 2019 änderte Papst Franziskus den Namen, um die Offenheit und die rein wissenschaftliche Bedeutung des Archivs zu betonen. Für Forscher ist es eine unerschöpfliche Quelle, deren Erschließung noch Generationen von Historikern beschäftigen wird. Es ist ein Ort, an dem die großen Entscheidungen der Weltgeschichte in Pergament und Tinte greifbar werden.",
        "factsAdvanced": [
            "Die Regale des Archivs erstrecken sich über eine Gesamtlänge von 85 Kilometern.",
            "Die ältesten kontinuierlich erhaltenen Dokumente stammen aus dem 8. Jahrhundert.",
            "Das Archiv wurde im Jahr 1612 durch Papst Paul V. als eigenständige Einheit gegründet.",
            "Jährlich erhalten etwa 1.200 qualifizierte Wissenschaftler Zugang zum Archiv.",
            "Es gibt einen unterirdischen Bunker (den 'Bunker') mit zwei Etagen für sensible Akten.",
            "Der Index des Archivs besteht aus über 35.000 Bänden.",
            "Wichtige Dokumente wie die Akten des Prozesses gegen Galileo Galilei lagern hier."
        ]
    },
    "va-landmark-pinecone-courtyard": {
        "descriptionAdvanced": "Der Pinienhof, benannt nach der monumentalen Bronzepinie aus dem antiken Rom, ist einer der weitläufigsten und hellsten Außenbereiche des Vatikanischen Museumskomplexes. Die fast vier Meter hohe Pinie, die einst einen Brunnen in der Nähe des Pantheons zierte, steht heute imposant in einer riesigen Nische, die an das antike Erbe Roms erinnert. Im Zentrum des Hofes kontrastiert die moderne, goldglänzende Skulptur 'Sfera con Sfera' von Arnaldo Pomodoro mit der klassischen Architektur. Der Hof bietet Besuchern einen Moment des Durchatmens zwischen den dichten Kunstgalerien und gewährt einen weiten Blick auf die vatikanischen Gebäude. Die symmetrische Gestaltung und die Kombination aus antiken Relikten und zeitgenössischer Kunst machen den Platz zu einem beliebten Fotomotiv. Es ist ein Ort, an dem sich die Kontinuität der Geschichte im Vatikan – von der Antike über die Renaissance bis zur Moderne – unter freiem Himmel eindrucksvoll manifestiert.",
        "factsAdvanced": [
            "Die antike Bronzepinie ist exakt 3,98 Meter hoch.",
            "Die Pinie stammt ursprünglich aus dem 1. Jahrhundert n. Chr.",
            "Die Skulptur 'Sfera con Sfera' (1990) hat einen Durchmesser von 4 Metern.",
            "Der Hof wurde im frühen 16. Jahrhundert von Donato Bramante entworfen.",
            "Zwei ägyptische Löwen aus Basalt schmücken den Sockel der Pinie.",
            "Der Hof verbindet den Palast des Belvedere mit dem Apostolischen Palast.",
            "Die große Nische wurde von Pirro Ligorio im Jahr 1565 vollendet."
        ]
    },
    "va-landmark-passetto-di-borgo": {
        "descriptionAdvanced": "Das Passetto di Borgo ist ein faszinierendes Relikt der vatikanischen Verteidigungsgeschichte: ein etwa 800 Meter langer, erhöhter Geheimgang, der den Vatikanpalast direkt mit der Engelsburg verbindet. Ursprünglich im 13. Jahrhundert auf der alten Stadtmauer errichtet, diente er den Päpsten in Zeiten größter Gefahr als sicherer Fluchtweg. Berühmt wurde er vor allem durch Papst Clemens VII., der während des 'Sacco di Roma' im Jahr 1527 über diesen Gang vor den plündernden Truppen Karls V. floh. Heute ist das Passetto ein beeindruckendes architektonisches Zeugnis mittelalterlicher Wehrtechnik und bietet von oben einen einzigartigen Blick auf das Viertel Borgo. Obwohl es meist für die Öffentlichkeit geschlossen ist, kann man es bei speziellen Führungen oder im Rahmen kultureller Veranstaltungen besichtigen. Der Gang symbolisiert die wechselvolle und oft gefährliche Geschichte des Papsttums, in der Spiritualität und physisches Überleben eng miteinander verknüpft waren.",
        "factsAdvanced": [
            "Der Gang hat eine Gesamtlänge von rund 800 Metern.",
            "Er wurde im Jahr 1277 unter Papst Nikolaus III. fertiggestellt.",
            "Die Mauern des Ganges sind an einigen Stellen bis zu 2 Meter dick.",
            "Der Gang verläuft auf einer durchschnittlichen Höhe von etwa 10 Metern über dem Boden.",
            "Im Jahr 1527 rettete er das Leben von Papst Clemens VII.",
            "Der Weg endet direkt in den päpstlichen Gemächern der Engelsburg.",
            "Das Passetto ist Teil der Leoninischen Mauer, die den Vatikan umschließt."
        ]
    },
    "va-historical-swiss-guard-barracks": {
        "descriptionAdvanced": "Die Kaserne der Päpstlichen Schweizergarde ist das Zuhause der kleinsten und wohl fotogensten Armee der Welt. Gelegen am Rande der Vatikanstadt, dient dieser Komplex als Unterkunft, Trainingsstätte und Verwaltungszentrum für die Gardisten. Hier werden die jungen Männer nicht nur in moderner Sicherheitstechnik ausgebildet, sondern pflegen auch die jahrhundertealten Traditionen ihres Korps. Die Kaserne beherbergt eine eigene Kapelle, eine Bibliothek und sogar eine private Kantine, in der die Gardisten nach ihrem Dienst zusammenkommen. Die Geschichte der Garde, die 1506 von Papst Julius II. gegründet wurde, ist in jedem Winkel präsent. Ein besonderes Highlight für Besucher ist der Blick auf die Rüstkammer, in der die historischen Helme und Hellebarden aufbewahrt werden. Die Kaserne ist ein geschlossener Bereich, der jedoch das Rückgrat der Sicherheit des Papstes bildet und den besonderen Status des Vatikans als souveräner Staat mit eigenem Militär unterstreicht.",
        "factsAdvanced": [
            "Die Schweizergarde wurde offiziell am 22. Januar 1506 gegründet.",
            "Die Kaserne beherbergt derzeit etwa 135 aktive Gardisten.",
            "Die Ausbildung umfasst modernes Waffentraining bei der Schweizer Polizei.",
            "Gardisten müssen zwischen 19 und 30 Jahre alt und mindestens 1,74 m groß sein.",
            "In der Kaserne befindet sich eine private Kapelle für den heiligen Martin.",
            "Die Kaserne liegt in unmittelbarer Nähe des Eingangs Porta Sant'Anna.",
            "In der Rüstkammer werden über 100 historische Rüstungen gepflegt."
        ]
    },
    "va-historical-teutonic-cemetery": {
        "descriptionAdvanced": "Der Campo Santo Teutonico ist ein verborgener Friedhof neben dem Petersdom und gilt als deutsches Exterritorium innerhalb oder unmittelbar angrenzend an den Vatikan. Er ist der älteste deutsche Friedhof in Rom und dient als letzte Ruhestätte für bedeutende Persönlichkeiten aus dem deutschsprachigen Raum, die dem Heiligen Stuhl dienten. Die idyllische Gartenanlage mit ihren Zypressen und gepflegten Gräbern bietet eine Atmosphäre tiefer Ruhe, fernab der Touristenströme. Zum Komplex gehören auch eine Kirche und ein Priesterkolleg. Der Zugang ist traditionell Bürgern der ehemaligen deutschsprachigen Gebiete des Heiligen Römischen Reiches gestattet, die am Tor bei der Schweizergarde um Einlass bitten können. Dieser Ort ist ein lebendiges Symbol für die jahrhundertelange Verbindung zwischen den deutschsprachigen Ländern und dem Papsttum. Jedes Grabstein erzählt eine Geschichte von Gelehrten, Geistlichen und Künstlern, die Rom zu ihrer Heimat machten.",
        "factsAdvanced": [
            "Der Friedhof wurde bereits im 8. Jahrhundert unter Karl dem Großen erwähnt.",
            "Das Areal umfasst etwa 2.000 Quadratmeter Fläche.",
            "Die angrenzende Kirche Santa Maria della Pietà stammt aus dem 15. Jahrhundert.",
            "Es ist der einzige Friedhof innerhalb der Mauern des Vatikans.",
            "Das deutsche Kolleg am Campo Santo wurde 1876 gegründet.",
            "Nur Personen aus deutschsprachigen Diözesen dürfen hier bestattet werden.",
            "Der Friedhof beherbergt Gräber von über 1.000 Jahren Geschichte."
        ]
    },
    "va-landmark-dome-of-st-peters": {
        "descriptionAdvanced": "Die Kuppel des Petersdoms, ein geniales Spätwerk Michelangelos, ist die höchste Kuppel der Welt und das unverkennbare Wahrzeichen der Ewigen Stadt. Ihr Aufstieg ist eine Reise durch die Baugeschichte: Von der Dachterrasse aus führt der Weg durch schmale, geneigte Gänge direkt zwischen die innere und äußere Schale der Kuppel. Oben angekommen, bietet die Laterne einen atemberaubenden 360-Grad-Panoramablick über den Petersplatz, die Vatikanischen Gärten und ganz Rom bis hin zu den Albaner Bergen. Im Inneren der Kuppel können Besucher von einer schmalen Galerie aus die riesigen Mosaike bewundern und tief in das Kirchenschiff hinabblicken, was die gewaltigen Dimensionen der Basilika erst richtig verdeutlicht. Die mathematische Präzision und die ästhetische Schönheit dieses Bauwerks inspirierten Architekten weltweit, vom Kapitol in Washington bis zur St. Paul’s Cathedral in London. Ein Aufstieg zur Kuppel ist für jeden Rombesucher ein unvergesslicher Höhepunkt.",
        "factsAdvanced": [
            "Die Gesamthöhe der Kuppel beträgt bis zur Spitze 136,57 Meter.",
            "Der Innendurchmesser der Kuppel misst stolze 42,34 Meter.",
            "Besucher müssen insgesamt 551 Stufen erklimmen (oder 320 ab dem Lift).",
            "Die Kuppel wurde nach Michelangelos Tod 1590 von Giacomo della Porta vollendet.",
            "Das Gewicht der gesamten Kuppelkonstruktion wird auf 14.000 Tonnen geschätzt.",
            "Die Inschrift am unteren Rand der Kuppel ist fast 2 Meter hoch.",
            "Insgesamt 16 massive Rippen stützen die äußere Schale der Kuppel."
        ]
    },
    "va-historical-pieta-michelangelo": {
        "descriptionAdvanced": "Michelangelos Pietà ist zweifellos eines der bewegendsten und technisch vollkommensten Kunstwerke der Weltgeschichte. In den Jahren 1498 bis 1499 aus einem einzigen Block Carrara-Marmor geschaffen, stellt sie die trauernde Maria mit dem Leichnam Jesu auf ihrem Schoß dar. Die unglaubliche Feinheit der Bearbeitung lässt den kalten Stein wie weiche Haut und fließenden Stoff erscheinen. Besonders bemerkenswert ist das junge Antlitz Marias, das Reinheit und Akzeptanz des Schicksals ausstrahlt, im Gegensatz zur erschöpften, aber friedlichen Gestalt Christi. Es ist das einzige Werk, das Michelangelo je signiert hat, da er erzürnt war, als man es einem anderen Künstler zuschrieb. Heute ist die Statue hinter einer schützenden Glaswand im Petersdom zu bewundern, nachdem sie 1972 bei einem Attentat beschädigt wurde. Die Pietà zieht täglich Tausende in ihren Bann und bleibt ein zeitloses Symbol für mütterlichen Schmerz und göttliche Erlösung.",
        "factsAdvanced": [
            "Michelangelo war erst 24 Jahre alt, als er das Werk vollendete.",
            "Die Statue ist 174 cm hoch und an der Basis 195 cm breit.",
            "Das Werk wurde in weniger als zwei Jahren (1498-1499) geschaffen.",
            "Nach einem Attentat 1972 wurde die Statue in über 500 Fragmente zerlegt und restauriert.",
            "Die Signatur befindet sich auf dem Band, das über Marias Brust verläuft.",
            "Der Marmorblock stammte aus den berühmten Steinbrüchen von Carrara.",
            "Ursprünglich war die Pietà für das Grabmal von Kardinal Jean de Bilhères gedacht."
        ]
    },
    "va-landmark-baldacchino-bernini": {
        "descriptionAdvanced": "Berninis Baldachin über dem Hochaltar des Petersdoms ist ein Meisterwerk des römischen Barock und ein triumphales Beispiel für die Verbindung von Architektur und Skulptur. Mit einer Höhe von fast 30 Metern ragt diese monumentale Bronzestruktur direkt über dem Grab des Heiligen Petrus empor und markiert das spirituelle Zentrum der Christenheit. Die vier gewundenen Salomonischen Säulen, verziert mit goldenen Weinreben und Bienen (dem Symbol der Familie Barberini), ziehen den Blick unweigerlich nach oben zur gewaltigen Kuppel. Bernini nutzte eine enorme Menge an Bronze, die teilweise aus dem antiken Pantheon entnommen wurde, was damals für große Kontroversen sorgte. Der Baldachin wirkt trotz seiner gewaltigen Masse erstaunlich leicht und scheint fast wie ein textiler Baldachin im Wind zu wehen. Er dient als prunkvoller Rahmen für die päpstliche Liturgie und verdeutlicht den Gläubigen die historische und spirituelle Kontinuität des Petrusamtes.",
        "factsAdvanced": [
            "Der Baldachin erreicht eine Gesamthöhe von 28,74 Metern.",
            "Für den Guss wurden etwa 6.300 Kilogramm Bronze verwendet.",
            "Die Bauzeit unter Gian Lorenzo Bernini betrug neun Jahre (1624-1633).",
            "Die vier Säulen sind jeweils etwa 11 Meter hoch.",
            "Die Bronze stammte teilweise vom Dachgebälk der Vorhalle des Pantheons.",
            "Die goldenen Bienen sind die Wappentiere von Papst Urban VIII. (Barberini).",
            "Der Baldachin steht exakt über der Confessio und dem Petrusgrab."
        ]
    },
    "va-historical-cathedra-petri": {
        "descriptionAdvanced": "Die Cathedra Petri, der 'Thron des Heiligen Petrus', ist ein prächtiges Reliquiar in der Apsis des Petersdoms und ein Hauptwerk von Gian Lorenzo Bernini. Es umschließt einen antiken Holzstuhl, der traditionell als der Thron des ersten Apostels Petrus gilt. Bernini schuf eine theatralische Inszenierung: Vier monumentale Bronzestatuen der Kirchenväter scheinen den Thron mühelos zu tragen, während darüber eine Wolke aus Engeln und Strahlen in das goldene Licht des Heilig-Geist-Fensters mündet. Das Ensemble symbolisiert die Unfehlbarkeit und die göttliche Inspiration des Papsttums. Besonders bei Sonnenuntergang, wenn das Licht durch das Alabasterfenster mit der Taube bricht, entfaltet die Cathedra eine mystische Wirkung, die den gesamten Kirchenraum erfüllt. Es ist ein kraftvolles Manifest des Barock, das die theologische Botschaft der Nachfolge Petri in eine visuelle Ekstase übersetzt und den Besucher tief beeindruckt.",
        "factsAdvanced": [
            "Das Monument wurde zwischen 1657 und 1666 von Bernini geschaffen.",
            "Die Figuren der vier Kirchenväter sind jeweils etwa 5 Meter hoch.",
            "Das zentrale Alabasterfenster mit der Heilig-Geist-Taube hat eine Spannweite von 1,5 Metern.",
            "Der gesamte Aufbau besteht aus vergoldeter Bronze, Stuck und Glas.",
            "In der Mitte befindet sich ein antiker Holzstuhl aus dem 9. Jahrhundert.",
            "Das Denkmal wiegt insgesamt mehrere Tonnen vergoldeter Bronze.",
            "Es befindet sich exakt in der Hauptachse der Basilika, hinter dem Baldachin."
        ]
    },
    "va-historical-vatican-grottoes": {
        "descriptionAdvanced": "Die Vatikanischen Grotten sind eine unterirdische Welt voller Geschichte und Frömmigkeit, die sich zwischen dem Boden der heutigen Petersbasilika und der antiken konstantinischen Kirche erstreckt. In diesem weiten Kryptenbereich befinden sich die Ruhestätten zahlreicher Päpste aus verschiedenen Jahrhunderten, von der Renaissance bis in die Neuzeit. Besucher wandern durch schlichte Gänge, vorbei an kunstvollen Sarkophagen und kleinen Kapellen, die den Verstorbenen gewidmet sind. Das Herzstück ist die Kapelle in der Nähe des Petrusgrabes, die als spiritueller Fokuspunkt der gesamten Anlage dient. Die Grotten bieten eine kühle, andächtige Atmosphäre, in der die Kontinuität des Papsttums physisch greifbar wird. Neben päpstlichen Gräbern finden sich hier auch die Ruhestätten einiger Monarchen und bedeutender Geistlicher. Ein Rundgang durch die Grotten ist eine stille Begegnung mit den Männern, die die Geschicke der Kirche über zwei Jahrtausende gelenkt haben, und bildet den Abschluss vieler Besuche im Petersdom.",
        "factsAdvanced": [
            "In den Grotten sind derzeit 91 Päpste bestattet.",
            "Die Grotten liegen etwa 3 Meter unter dem Boden der Basilika.",
            "Das Areal umfasst zahlreiche Kapellen, darunter die Klementinische Kapelle.",
            "Auch Kaiser Otto II. und Königin Christina von Schweden ruhen hier.",
            "Die Grotten entsprechen dem Grundriss der alten Basilika aus dem 4. Jahrhundert.",
            "Der Zugang zu den Grotten ist für Besucher der Basilika kostenlos.",
            "Die Gräber sind chronologisch und nach Bedeutung in verschiedenen Sektoren angeordnet."
        ]
    },
    "va-historical-pio-clementino-museum": {
        "descriptionAdvanced": "Das Museo Pio-Clementino ist das Herzstück der Vatikanischen Museen für klassische Archäologie und beherbergt einige der berühmtesten Skulpturen der Menschheitsgeschichte. Gegründet im 18. Jahrhundert von den Päpsten Clemens XIV. und Pius VI., wurde es geschaffen, um die bedeutendsten Funde der griechischen und römischen Antike würdig zu präsentieren. Der Rundgang führt durch prächtige Säle wie die Sala Rotonda, die dem Pantheon nachempfunden ist, und die Galerie der Statuen. Hier können Besucher Meisterwerke wie die Laokoon-Gruppe, den Apollo von Belvedere und den Belvedere-Torso aus nächster Nähe bewundern. Die Architektur der Museumsräume selbst, mit ihren Mosaikböden und prunkvollen Kuppeln, unterstreicht die Erhabenheit der ausgestellten Kunst. Das Museum ist nicht nur eine Sammlung von Statuen, sondern eine Schule des Sehens, die den Grundstein für das europäische Verständnis von Ästhetik und klassischer Schönheit gelegt hat.",
        "factsAdvanced": [
            "Das Museum wurde zwischen 1770 und 1784 offiziell eingerichtet.",
            "Es umfasst insgesamt 14 Ausstellungsräume und Höfe.",
            "Die Sala Rotonda hat einen Durchmesser von 21,60 Metern.",
            "In der Sala Rotonda befindet sich ein riesiges Mosaik aus dem 3. Jahrhundert.",
            "Das Museum beherbergt über 1.000 bedeutende antike Skulpturen.",
            "Das zentrale Porphyrbecken in der Sala Rotonda hat einen Umfang von 13 Metern.",
            "Die Architektur wurde maßgeblich von Michelangelo Simonetti gestaltet."
        ]
    },
    "va-historical-laocoon-and-his-sons": {
        "descriptionAdvanced": "Die Laokoon-Gruppe ist eines der bedeutendsten Bildwerke der antiken Kunst und ein Schlüsselobjekt der Vatikanischen Museen. Die Marmorskulptur stellt den trojanischen Priester Laokoon und seine beiden Söhne dar, die von zwei gewaltigen Seeschlangen angegriffen werden – eine Strafe der Götter für Laokoons Warnung vor dem Trojanischen Pferd. Die Darstellung des extremen physischen und emotionalen Leids, ausgedrückt durch die gespannten Muskeln und den schmerzvollen Gesichtsausdruck, faszinierte Künstler seit ihrer Wiederentdeckung im Jahr 1506. Michelangelo selbst nannte das Werk ein 'Wunder der Kunst'. Die Skulptur markiert den Beginn der päpstlichen Sammlungen und prägte die Ästhetik der Renaissance und des Barock maßgeblich. Ein Besuch im Octagon-Hof, wo die Gruppe in einer Nische präsentiert wird, ermöglicht es, die Dynamik und die handwerkliche Perfektion dieses hellenistischen Meisterwerks in einer einzigartigen historischen Atmosphäre zu erleben.",
        "factsAdvanced": [
            "Die Skulptur wurde am 14. Januar 1506 auf dem Esquilin in Rom wiederentdeckt.",
            "Sie wird den rhodischen Bildhauern Agesandros, Athenodoros und Polydoros zugeschrieben.",
            "Die Marmorgruppe ist etwa 2,08 Meter hoch.",
            "Papst Julius II. erwarb das Werk unmittelbar nach seiner Entdeckung.",
            "Das Werk stammt vermutlich aus der Zeit zwischen 40 und 30 v. Chr.",
            "Der fehlende rechte Arm des Laokoon wurde erst 1905 wiedergefunden.",
            "Die Skulptur besteht aus mehreren eng zusammengefügten Marmorblöcken."
        ]
    },
    "va-historical-apollo-belvedere": {
        "descriptionAdvanced": "Der Apollo von Belvedere gilt seit seiner Wiederentdeckung als Inbegriff klassischer männlicher Schönheit und als Idealbild der antiken Kunst. Die lebensgroße Marmorstatue zeigt den griechischen Gott Apollo, wie er gerade einen Pfeil abgeschossen hat und seinem Ziel mit souveräner Gelassenheit nachblickt. Die Eleganz seiner Haltung, die fließenden Formen seines Mantels und das makellose Gesicht machten ihn zum Vorbild für Generationen von Künstlern und Ästheten, besonders während des Klassizismus. Johann Joachim Winckelmann feierte die Statue als das höchste Ideal der Kunst. Im Octagon-Hof des Pio-Clementino-Museums platziert, wirkt Apollo fast so, als würde er über den Dingen stehen, ein göttlicher Moment, der in weißem Marmor für die Ewigkeit festgehalten wurde. Trotz der Tatsache, dass es sich um eine römische Kopie eines griechischen Originals handelt, bleibt seine künstlerische Ausstrahlung ungebrochen und zieht Besucher aus aller Welt in seinen Bann.",
        "factsAdvanced": [
            "Die Statue wurde im späten 15. Jahrhundert in der Nähe von Rom entdeckt.",
            "Sie ist 2,24 Meter hoch und aus weißem Marmor gefertigt.",
            "Es handelt sich um eine römische Kopie eines griechischen Bronzeoriginals aus dem 4. Jh. v. Chr.",
            "Seit 1503 befindet sich die Statue in den päpstlichen Sammlungen.",
            "Das Werk wurde von Papst Julius II. in den Belvedere-Hof gebracht.",
            "Im 18. Jahrhundert galt sie als das bedeutendste Kunstwerk der Welt.",
            "Die Statue wurde 1798 von Napoleon nach Paris verschleppt und 1815 zurückgegeben."
        ]
    },
    "va-landmark-belvedere-courtyard": {
        "descriptionAdvanced": "Der Belvedere-Hof, entworfen von Donato Bramante für Papst Julius II., ist eines der ehrgeizigsten architektonischen Projekte der Renaissance. Er wurde geschaffen, um den alten Vatikanpalast mit der Villa Belvedere zu verbinden und dabei den Vatikanischen Hügel durch ein System von Terrassen und Treppen zu erschließen. Ursprünglich war der Hof als ein riesiger, zusammenhängender Außenraum für Feste, Turniere und Theateraufführungen konzipiert. Die monumentale Architektur mit ihren Arkaden und der großen Nische am Ende setzte neue Maßstäbe für die Gartenkunst und Palastarchitektur in ganz Europa. Im Laufe der Jahrhunderte wurde der Hof durch Querflügel der Bibliothek und der Museen unterteilt, was seinen Charakter veränderte, aber seine Größe noch immer erahnen lässt. Heute beherbergt er wichtige Teile der Vatikanischen Museen und bleibt ein beeindruckendes Zeugnis für den Wunsch der Päpste, Kunst, Natur und Architektur in einer harmonischen, weitläufigen Ordnung zu vereinen.",
        "factsAdvanced": [
            "Die Planung durch Donato Bramante begann im Jahr 1504.",
            "Der ursprüngliche Entwurf sah eine Gesamtlänge von rund 300 Metern vor.",
            "Der Höhenunterschied zwischen den Ebenen betrug etwa 20 Meter.",
            "Der Hof wurde später durch den Bibliotheksflügel von Sixtus V. (1587) geteilt.",
            "Hier wurde im Jahr 1514 der Elefant Hanno, ein Geschenk an den Papst, untergebracht.",
            "Die Architektur diente als Vorbild für die Gärten von Versailles und Fontainebleau.",
            "Heute sind der Pinienhof und der Bibliotheksgarten Teile des ursprünglichen Areals."
        ]
    },
    "va-historical-casina-pio-iv": {
        "descriptionAdvanced": "Die Casina Pio IV, versteckt in den Vatikanischen Gärten, ist ein Juwel der manieristischen Architektur und eines der entzückendsten Gebäude im Vatikan. Ursprünglich als sommerliches Refugium für Papst Paul IV. begonnen und unter Pius IV. von Pirro Ligorio vollendet, besticht die Villa durch ihre überbordende Dekoration aus Stuck, Fresken und Mosaiken. Die Anlage besteht aus zwei Pavillons, die durch einen elliptischen Hof mit kunstvollen Brunnen verbunden sind. Die Architektur zelebriert die Harmonie zwischen Mensch und Natur und diente den Päpsten als Ort für philosophische Gespräche und Entspannung. Seit den 1920er Jahren ist die Casina der Sitz der Päpstlichen Akademie der Wissenschaften, was sie zu einem bedeutenden Zentrum des Dialogs zwischen Glauben und Vernunft macht. Die ruhige Lage inmitten der Gärten und die exquisite künstlerische Gestaltung machen dieses 'Gartenhaus' zu einem der charmantesten und geistigsten Orte innerhalb der vatikanischen Mauern.",
        "factsAdvanced": [
            "Der Bau wurde im Jahr 1558 unter Papst Paul IV. begonnen.",
            "Die Villa wurde im Jahr 1561 von Pirro Ligorio fertiggestellt.",
            "Seit 1922 ist sie Sitz der Päpstlichen Akademie der Wissenschaften.",
            "Die Dekoration umfasst über 50 verschiedene mythologische und biblische Fresken.",
            "In den Sälen finden regelmäßig internationale Nobelpreisträger-Konferenzen statt.",
            "Der elliptische Innenhof gilt als einer der schönsten Plätze des Manierismus.",
            "Das Gebäude wurde zwischen 2000 und 2003 umfassend restauriert."
        ]
    },
    "va-landmark-torre-san-giovanni": {
        "descriptionAdvanced": "Der Johannesturm (Torre San Giovanni) ist ein markanter Rundturm in der westlichsten Ecke der Vatikanstadt, der auf den Ruinen der alten Leoninischen Mauer aus dem 9. Jahrhundert errichtet wurde. Er liegt malerisch auf dem Gipfel des Vatikanischen Hügels inmitten der Gärten. Nach einer umfassenden Restaurierung durch Papst Johannes XXIII. diente der Turm als päpstliches Appartement und Rückzugsort für Momente der Stille und Arbeit. In der jüngeren Geschichte wurde der Turm auch als exklusive Residenz für hohe Gäste des Papstes genutzt, darunter Patriarch Athenagoras. Die strategische Lage bietet einen der weitesten und spektakulärsten Ausblicke über den Vatikan und Rom. Der Turm symbolisiert die Beständigkeit der päpstlichen Verteidigungsanlagen, die sich im Laufe der Jahrhunderte in Orte der Gastfreundschaft und Spiritualität verwandelt haben. Umgeben von Pinien und gepflegten Wegen, ist er ein ruhiger Wächter über den kleinsten Staat der Welt.",
        "factsAdvanced": [
            "Der Turm steht auf Fundamenten der Leoninischen Mauer aus dem Jahr 852.",
            "Er wurde unter Papst Johannes XXIII. (1958-1963) umfassend renoviert.",
            "Der Turm hat einen Durchmesser von etwa 15 Metern.",
            "Er verfügt über mehrere Etagen mit Arbeits- und Schlafräumen für päpstliche Gäste.",
            "Papst Benedikt XVI. empfing hier im Jahr 2008 den US-Präsidenten George W. Bush.",
            "Die Terrasse bietet einen Panoramablick auf die Peterskuppel aus nächster Nähe.",
            "Der Turm ist von dichten mediterranen Gärten und alten Festungswällen umgeben."
        ]
    },
    "va-historical-pinacoteca-vaticana": {
        "descriptionAdvanced": "Die Vatikanische Pinakothek ist die Gemäldegalerie des Papstes und beherbergt eine erlesene Auswahl an Meisterwerken der europäischen Malerei vom Mittelalter bis zum 19. Jahrhundert. Eröffnet in ihrem heutigen Gebäude im Jahr 1932, bietet sie eine chronologische Reise durch die Kunstgeschichte in 18 spezialisierten Sälen. Besucher können hier ikonische Werke wie Raffaels 'Verklärung', Caravaggios 'Grablegung Christi' und bedeutende Arbeiten von Leonardo da Vinci und Giotto bewundern. Die Architektur des Gebäudes wurde speziell für die optimale Beleuchtung und Präsentation der Gemälde entworfen, was die intensive Farbigkeit und die feinen Details der Werke besonders zur Geltung bringt. Die Pinakothek ist im Vergleich zu den anderen Teilen der Museen oft etwas ruhiger und ermöglicht eine tiefgehende Auseinandersetzung mit der Entwicklung sakraler und weltlicher Malerei. Sie ist ein Muss für jeden Kunstliebhaber, der die Geniestreiche der italienischen Malerei an einem Ort versammelt sehen möchte.",
        "factsAdvanced": [
            "Die Pinakothek wurde in ihrem jetzigen Gebäude am 27. Oktober 1932 eingeweiht.",
            "Die Sammlung umfasst etwa 460 ausgewählte Gemälde.",
            "Das Gebäude wurde vom Architekten Luca Beltrami im Auftrag von Pius XI. entworfen.",
            "Saal VIII ist ausschließlich den Werken von Raffael gewidmet.",
            "Das älteste Werk der Sammlung stammt aus dem 12. Jahrhundert.",
            "Leonardo da Vincis unvollendeter 'Heiliger Hieronymus' ist eines der Highlights.",
            "Die Ausstellungsfläche erstreckt sich über zwei Etagen mit 18 Sälen."
        ]
    },
    "va-historical-gregorian-etruscan-museum": {
        "descriptionAdvanced": "Das Gregorianisch-Etruskische Museum in den Vatikanischen Museen ist eine der weltweit bedeutendsten Sammlungen, die sich dem rätselhaften Volk der Etrusker widmet. Gegründet von Papst Gregor XVI. im 19. Jahrhundert, präsentiert es eine Fülle von Objekten, die bei Ausgrabungen in den antiken Städten Etruriens entdeckt wurden. Die Ausstellung reicht von prächtigem Goldschmuck und fein verzierter Keramik bis hin zu monumentalen Sarkophagen und Bronzestatuen. Besonders beeindruckend sind die Funde aus dem Regolini-Galassi-Grab, die den Reichtum und die hochentwickelte Kultur dieses Volkes vor der römischen Vorherrschaft verdeutlichen. Die Räume selbst, teilweise im Palast von Innozenz VIII. gelegen, bieten eine stimmungsvolle Kulisse für diese archäologischen Schätze. Für Geschichtsinteressierte bietet das Museum eine faszinierende Reise zu den Ursprüngen der italienischen Zivilisation und zeigt den tiefen Einfluss der etruskischen Kunst auf die spätere römische Welt.",
        "factsAdvanced": [
            "Das Museum wurde am 2. Februar 1837 offiziell eröffnet.",
            "Es umfasst insgesamt 22 Ausstellungsräume.",
            "Die Sammlung beherbergt den berühmten 'Mars von Todi', eine Bronzestatue aus dem 5. Jh. v. Chr.",
            "Ein Großteil der Funde stammt aus den Nekropolen von Cerveteri und Vulci.",
            "Das Museum zeigt eine einzigartige Sammlung griechischer Vasen, die in etruskischen Gräbern gefunden wurden.",
            "Die Goldschmuck-Sammlung umfasst Stücke mit feinster Granulationstechnik.",
            "Es befindet sich in den oberen Etagen des Belvedere-Palastes."
        ]
    },
    "va-historical-gregorian-egyptian-museum": {
        "descriptionAdvanced": "Das Gregorianisch-Ägyptische Museum entführt Besucher in die faszinierende Welt der Pharaonen und zeigt die tiefe Faszination Roms für die ägyptische Kultur. Papst Gregor XVI. gründete das Museum im Jahr 1839, um die zahlreichen ägyptischen Artefakte zu präsentieren, die seit der Antike nach Rom gebracht worden waren. Die Sammlung umfasst beeindruckende Hieroglyphen-Inschriften, geheimnisvolle Mumien, reich verzierte Sarkophage und monumentale Statuen ägyptischer Gottheiten. Ein besonderes Highlight sind die Funde aus der Villa Adriana in Tivoli, die zeigen, wie römische Kaiser ägyptische Kunststile imitierten. Die neun Ausstellungsräume sind thematisch geordnet und bieten Einblicke in den Totenkult, das tägliche Leben und die religiösen Vorstellungen am Nil. Das Museum verbindet auf einzigartige Weise die Geschichte Ägyptens mit der römischen Rezeptionsgeschichte und bleibt ein Ort des Staunens über eine der ältesten Hochkulturen der Menschheit.",
        "factsAdvanced": [
            "Das Museum wurde am 22. Januar 1839 eingeweiht.",
            "Die Sammlung ist in 9 große Säle unterteilt.",
            "Ein bedeutendes Exponat ist die Statue der Königin Tuja aus dem 13. Jh. v. Chr.",
            "Das Museum beherbergt eine bedeutende Sammlung von Papyri in Hieratisch und Demotisch.",
            "Viele der Statuen wurden bereits in der Antike für römische Tempel (z.B. der Isis) importiert.",
            "Es gibt eine spezielle Abteilung für mesopotamische und syrische Funde.",
            "Das Museum befindet sich im sogenannten 'Pia-Hof' der Vatikanischen Museen."
        ]
    },
    "va-landmark-vatican-railway-station": {
        "descriptionAdvanced": "Der Bahnhof der Vatikanstadt ist ein monumentales Zeugnis der staatlichen Souveränität, die der Vatikan durch die Lateranverträge von 1929 erlangte. Das elegante Empfangsgebäude, verkleidet mit weißem Travertin-Marmor, wurde vom Architekten Giuseppe Momo entworfen und wirkt eher wie ein kleiner Palast als ein Funktionsbau. Obwohl die Gleisstrecke die kürzeste der Welt ist, symbolisiert der Bahnhof die Verbindung des Vatikans mit dem internationalen Verkehrsnetz. Die Gleise führen durch ein massives Eisentor in der vatikanischen Mauer direkt zum italienischen Bahnhof Roma San Pietro. Während der Bahnhof früher vor allem für den Gütertransport und seltene päpstliche Reisen genutzt wurde, dient er heute auch als Ausgangspunkt für spezielle Touristenzüge, die Besucher in die päpstlichen Villen von Castel Gandolfo bringen. Der Bahnhof ist ein faszinierendes Beispiel für die moderne Infrastruktur innerhalb der historischen Mauern des kleinsten Staates der Welt.",
        "factsAdvanced": [
            "Die gesamte Gleislänge innerhalb des Vatikans beträgt etwa 300 Meter.",
            "Der Bahnhof wurde im Jahr 1934 offiziell in Betrieb genommen.",
            "Das eiserne Grenztor wiegt 38,5 Tonnen und wird hydraulisch betrieben.",
            "Das Empfangsgebäude ist mit wertvollem italienischem Marmor ausgestattet.",
            "Papst Johannes XXIII. war 1962 der erste Papst, der die Bahn für eine Reise nutzte.",
            "Es ist der einzige Bahnhof des Staates Vatikanstadt.",
            "Ein Teil des Gebäudes wird heute als Duty-Free-Shop für Vatikan-Angestellte genutzt."
        ]
    },
    "va-landmark-porta-sant-anna": {
        "descriptionAdvanced": "Das St.-Anna-Tor (Porta Sant'Anna) ist einer der belebtesten und wichtigsten Zugänge zur Vatikanstadt für den täglichen Verkehr. Gelegen an der Grenze zu Rom, dient es als Haupteingang für Angestellte, Lieferanten und Bewohner des Vatikans. Benannt nach der angrenzenden päpstlichen Pfarrkirche Sant'Anna dei Palafrenieri, wird das Tor streng von der Schweizergarde bewacht, deren bunte Uniformen hier ein gewohntes Bild für Passanten sind. Hinter dem Tor beginnt eine geschäftige Welt mit der vatikanischen Apotheke, dem Supermarkt und verschiedenen Verwaltungsgebäuden. Architekturgeschichtlich ist das Tor eher schlicht gehalten, doch seine Bedeutung als Nahtstelle zwischen dem souveränen Territorium des Vatikans und der Stadt Rom ist immens. Für Besucher bietet der Blick durch das Tor einen authentischen Einblick in das alltägliche Leben und die Sicherheitsprotokolle des Kirchenstaates, fernab der großen Touristenströme auf dem Petersplatz.",
        "factsAdvanced": [
            "Das Tor ist der am meisten genutzte Eingang für Fahrzeuge in den Vatikan.",
            "Die Bewachung erfolgt rund um die Uhr durch die Päpstliche Schweizergarde.",
            "Direkt hinter dem Tor befindet sich die vatikanische Apotheke (gegr. 1874).",
            "Der Name leitet sich von der Kirche Sant'Anna ab, die 1565 erbaut wurde.",
            "Das Tor befindet sich in der Via di Porta Angelica auf der italienischen Seite.",
            "Nur Personen mit einem speziellen Ausweis (Permesso) dürfen das Tor passieren.",
            "Es markiert die Grenze zwischen dem römischen Viertel Borgo und der Vatikanstadt."
        ]
    },
    "va-historical-belvedere-torso": {
        "descriptionAdvanced": "Der Belvedere-Torso ist eines der einflussreichsten Fragmente der antiken Kunst und ein Herzstück der Vatikanischen Museen. Die kraftvolle Marmorskulptur eines sitzenden Mannes, die nur als Torso ohne Kopf und Gliedmaßen erhalten ist, faszinierte die Künstler der Renaissance durch ihre gewaltige Muskulatur und die dynamische Verdrehung des Körpers. Besonders Michelangelo war von dem Werk so tief beeindruckt, dass er es als seinen 'Lehrmeister' bezeichnete und sich weigerte, es zu restaurieren. Man findet den Einfluss des Torsos in vielen seiner Figuren in der Sixtinischen Kapelle wieder. Die Skulptur stellt vermutlich den griechischen Helden Ajax dar, der über seinen Selbstmord nachdenkt, oder Herkules in einer Ruhepause. Im Saal der Musen präsentiert, wirkt das Fragment trotz seiner Unvollständigkeit monumentaler als viele ganze Statuen und bleibt ein zeitloses Symbol für die Kraft und die Melancholie der klassischen Antike.",
        "factsAdvanced": [
            "Der Torso stammt aus dem 1. Jahrhundert v. Chr.",
            "Er ist vom athenischen Bildhauer Apollonios, Sohn des Nestor, signiert.",
            "Das Werk wurde im frühen 15. Jahrhundert in Rom wiederentdeckt.",
            "Michelangelo studierte den Torso jahrzehntelang und weigerte sich, ihn zu ergänzen.",
            "Die Skulptur ist aus Marmor gefertigt und 1,59 Meter hoch.",
            "Seit 1530 befindet sich der Torso dauerhaft in den päpstlichen Sammlungen.",
            "Der Einfluss des Torsos ist in der Figur des Christus im 'Jüngsten Gericht' deutlich sichtbar."
        ]
    },
    "va-landmark-gallery-of-the-candelabra": {
        "descriptionAdvanced": "Die Galerie der Kandelaber ist ein prachtvoller, 80 Meter langer Korridor in den Vatikanischen Museen, der nach den monumentalen antiken Marmorkandelabern benannt ist, die den Raum in sechs Abschnitte unterteilen. Ursprünglich eine offene Loggia, wurde der Gang Ende des 18. Jahrhunderts unter Papst Pius VI. geschlossen und in eine prächtige Galerie umgewandelt. Besucher wandern unter einer meisterhaft bemalten Decke aus dem 19. Jahrhundert, während sie eine Vielzahl römischer Statuen, Sarkophage und kunstvoller Mosaike bewundern. Die Kombination aus klassischer Bildhauerei und der farbenfrohen Dekoration des Bodens und der Decke schafft ein harmonisches Gesamtkunstwerk. Die Galerie dient als eleganter Übergangsbereich, der die Besucher auf die weiteren Höhepunkte wie die Galerie der Landkarten vorbereitet. Jeder Abschnitt der Galerie ist durch Säulen aus kostbarem Marmor und Alabaster markiert, was den Reichtum und die ästhetische Raffinesse der päpstlichen Sammlungen unterstreicht.",
        "factsAdvanced": [
            "Die Galerie wurde im Jahr 1761 als geschlossener Raum konzipiert.",
            "Sie ist in 6 Sektionen unterteilt, die durch Bögen getrennt sind.",
            "Die monumentalen Kandelaber stammen aus dem 2. Jahrhundert n. Chr.",
            "Die Deckenfresken wurden von Ludwig Seitz zwischen 1883 und 1887 gemalt.",
            "In der Galerie befindet sich eine berühmte Statue eines 'Fischers' aus der Antike.",
            "Der Boden ist mit wertvollen antiken Mosaiken aus römischen Villen verziert.",
            "Die Galerie hat eine Gesamtlänge von rund 80 Metern."
        ]
    },
    "va-landmark-gallery-of-tapestries": {
        "descriptionAdvanced": "Die Galerie der Wandteppiche (Galleria degli Arazzi) ist ein beeindruckender Saal in den Vatikanischen Museen, dessen Wände von monumentalen Textilkunstwerken geschmückt sind. Die Galerie beherbergt zwei bedeutende Zyklen: Die flämischen Wandteppiche aus dem 16. Jahrhundert, die Szenen aus dem Leben Christi darstellen, und die römischen Teppiche aus dem 17. Jahrhundert, die das Leben von Papst Urban VIII. verherrlichen. Besonders faszinierend ist die technische Meisterschaft der flämischen Weber, die Licht und Schatten sowie räumliche Tiefe allein durch die Verwebung von Wolle, Seide und Goldfäden erzeugten. Ein Highlight ist der Teppich der 'Auferstehung', bei dem die Augen Christi dem Betrachter scheinbar folgen, egal von wo aus man ihn betrachtet. Die gedimmte Beleuchtung in der Galerie schützt die empfindlichen Farben der Textilien und schafft eine geheimnisvolle, andächtige Atmosphäre. Die Galerie ist ein Zeugnis für den unermesslichen Luxus und den künstlerischen Anspruch der päpstlichen Höfe.",
        "factsAdvanced": [
            "Die flämischen Wandteppiche wurden in Brüssel in der Werkstatt von Pieter van Aelst gewebt.",
            "Die Entwürfe für den Zyklus 'Leben Christi' stammen von Schülern Raffaels.",
            "Die Teppiche wurden erstmals im Jahr 1531 in der Sixtinischen Kapelle ausgestellt.",
            "Einige der Teppiche sind über 5 Meter hoch und fast 9 Meter breit.",
            "Die römischen Wandteppiche aus dem 17. Jahrhundert stammen aus der Barberini-Manufaktur.",
            "Die Galerie wurde im Jahr 1838 für das Publikum geöffnet.",
            "Die Teppiche bestehen aus einer Mischung von Wolle, Seide sowie Gold- und Silberfäden."
        ]
    },
    "va-historical-niccoline-chapel": {
        "descriptionAdvanced": "Die Niccoline-Kapelle ist ein verstecktes Juwel im Herzen des Apostolischen Palastes und bekannt für ihre exquisiten Fresken von Fra Angelico. Benannt nach Papst Nikolaus V., der den Auftrag gab, diente sie als seine Privatkapelle. Die Malereien aus der Mitte des 15. Jahrhunderts stellen Szenen aus dem Leben des Heiligen Stephanus und des Heiligen Laurentius dar und markieren einen Höhepunkt der frührenaissancistischen Kunst. Fra Angelico kombinierte hier spirituelle Tiefe mit einer neuen, realistischen Raumdarstellung und leuchtenden Farben, die durch die Verwendung von echtem Gold und Lapislazuli noch heute strahlen. Da die Kapelle nicht Teil der standardmäßigen Massenführungen ist, bewahrt sie eine intime und andächtige Atmosphäre. Sie ist ein Ort, an dem die Frömmigkeit des Malermönchs und die Gelehrsamkeit des Papstes in vollkommener künstlerischer Harmonie verschmelzen. Ein Besuch dieser Kapelle ist eine seltene Gelegenheit, die Feinheit der Renaissance-Malerei fernab der großen Säle zu erleben.",
        "factsAdvanced": [
            "Die Kapelle wurde zwischen 1447 und 1449 von Fra Angelico ausgemalt.",
            "Sie befindet sich in einem der ältesten Teile des Apostolischen Palastes, dem Turm von Innozenz III.",
            "Die Fresken sind in zwei Zyklen unterteilt (oberes und unteres Register).",
            "Papst Nikolaus V. nutzte die Kapelle für sein tägliches Gebet.",
            "Die Decke zeigt die vier Evangelisten auf blauem, mit Sternen übersätem Grund.",
            "Die Kapelle ist sehr klein (ca. 6,6 x 4 Meter), was ihre Exklusivität betont.",
            "Für die blauen Farben wurde kostbares Lapislazuli-Pigment verwendet."
        ]
    },
    "va-historical-borgia-apartment": {
        "descriptionAdvanced": "Das Borgia-Appartement im Apostolischen Palast ist untrennbar mit der schillernden und oft umstrittenen Herrschaft von Papst Alexander VI. (Rodrigo Borgia) verbunden. Pinturicchio und seine Werkstatt schufen hier am Ende des 15. Jahrhunderts eine prachtvolle Suite von sechs Räumen, die mit komplexen Fresken geschmückt sind. Die Malereien verbinden christliche Themen mit ägyptischer Mythologie und persönlichen Symbolen der Borgia-Familie, wie dem Stier. Besonders berühmt ist der 'Saal der Heiligen', in dem Lucrezia Borgia als Vorbild für die Heilige Katharina von Alexandrien gedient haben soll. Nach dem Tod Alexanders wurden die Räume von seinen Nachfolgern jahrhundertelang gemieden und erst im 19. Jahrhundert wieder der Öffentlichkeit zugänglich gemacht. Heute beherbergen diese prunkvollen Säle einen großen Teil der Vatikanischen Sammlung moderner religiöser Kunst, was einen spannenden Dialog zwischen der Renaissance-Pracht und zeitgenössischen Werken von Künstlern wie Klee oder Chagall ermöglicht.",
        "factsAdvanced": [
            "Die Räume wurden zwischen 1492 und 1494 von Pinturicchio ausgemalt.",
            "Das Appartement besteht aus insgesamt 6 repräsentativen Räumen.",
            "Papst Alexander VI. starb in diesen Räumen im Jahr 1503.",
            "Die Wappen der Borgia (der rote Stier) sind überall in den Dekorationen zu finden.",
            "Nach 1503 blieben die Räume für fast 400 Jahre verschlossen.",
            "Seit 1973 ist hier die Sammlung moderner religiöser Kunst untergebracht.",
            "Die Fresken zeigen eine einzigartige Mischung aus christlicher und orientalischer Ikonografie."
        ]
    },
    "va-historical-collection-of-modern-religious-art": {
        "descriptionAdvanced": "Die Sammlung moderner religiöser Kunst im Vatikan ist ein faszinierendes Zeugnis für den Wunsch der Kirche, den Dialog mit der zeitgenössischen Welt aufrechtzuerhalten. Eröffnet von Papst Paul VI. im Jahr 1973, umfasst die Sammlung über 800 Werke von weltberühmten Künstlern des 19. und 20. Jahrhunderts. In den historischen Räumen der Borgia-Gemächer und angrenzenden Galerien finden sich Arbeiten von van Gogh, Chagall, Dalí, Picasso und Henry Moore. Diese Werke zeigen, wie moderne Künstler religiöse Themen, existenzielle Fragen und spirituelle Suche interpretieren. Die Vielfalt der Stile – vom Expressionismus bis zum Surrealismus – bietet einen spannenden Kontrast zur klassischen Kunst des Vatikans. Die Sammlung beweist, dass religiöse Kunst nicht statisch ist, sondern sich ständig weiterentwickelt und neue Ausdrucksformen findet. Für Besucher bietet sie eine willkommene Abwechslung und zeigt eine oft unbekannte, moderne Seite des Heiligen Stuhls, die zur Reflexion über Glaube und Moderne anregt.",
        "factsAdvanced": [
            "Die Sammlung wurde am 23. Juni 1973 offiziell eingeweiht.",
            "Sie umfasst heute mehr als 800 Werke von rund 250 Künstlern.",
            "Die Exponate sind auf über 50 Räume in den Vatikanischen Museen verteilt.",
            "Zu den Highlights gehört eine Version von Rodins 'Der Denker'.",
            "Die Sammlung entstand größtenteils aus Schenkungen von Künstlern und Sammlern.",
            "Auch Werke von deutschen Künstlern wie Otto Dix und Max Beckmann sind vertreten.",
            "Papst Paul VI. hielt zur Eröffnung eine berühmte Rede an die Künstler."
        ]
    },
    "va-landmark-governorate-palace": {
        "descriptionAdvanced": "Der Palast des Governatorats ist das administrative Zentrum der Vatikanstadt und Sitz der Exekutivgewalt des kleinen Staates. Majestätisch in den Vatikanischen Gärten gelegen, blickt das imposante Gebäude aus weißem Travertin direkt auf die Rückseite des Petersdoms. Hier werden die täglichen Angelegenheiten verwaltet, die einen Staat am Laufen halten – von der Gendarmerie über die Feuerwehr bis hin zu den Post- und Gesundheitsdiensten. Der Palast wurde in den 1930er Jahren nach der Gründung des souveränen Staates durch die Lateranverträge errichtet und strahlt mit seiner strengen, aber eleganten Architektur Ordnung und Beständigkeit aus. Vor dem Gebäude erstreckt sich ein weitläufiger Vorplatz mit einem prachtvollen Blumenbeet, das oft das Wappen des amtierenden Papstes zeigt. Obwohl der Palast für normale Touristen nicht zugänglich ist, ist er ein unverzichtbarer Bestandteil der vatikanischen Infrastruktur und ein Symbol für die weltliche Verwaltung der geistlichen Zentrale.",
        "factsAdvanced": [
            "Der Palast wurde zwischen 1927 und 1931 erbaut.",
            "Der Entwurf stammt vom Architekten Giuseppe Momo.",
            "Im Gebäude befindet sich auch die Kapelle Santa Maria Regina della Famiglia.",
            "Der Palast ist Sitz der Päpstlichen Kommission für den Staat Vatikanstadt.",
            "In unmittelbarer Nähe befindet sich der Bahnhof der Vatikanstadt.",
            "Das Gebäude ist etwa 100 Meter lang und besteht aus drei Flügeln.",
            "Die Fassade ist komplett mit edlem Travertin-Marmor verkleidet."
        ]
    },
    "va-historical-domus-sanctae-marthae": {
        "descriptionAdvanced": "Das Gästehaus Santa Marta (Domus Sanctae Marthae) erlangte weltweite Bekanntheit, als Papst Franziskus es nach seiner Wahl im Jahr 2013 zu seinem ständigen Wohnsitz erklärte. Im Gegensatz zu seinen Vorgängern, die im luxuriösen Apostolischen Palast lebten, bevorzugte Franziskus die bescheidenere und gemeinschaftliche Atmosphäre dieses modernen Gebäudes. Ursprünglich von Papst Johannes Paul II. erbaut, dient das Haus primär als Unterkunft für Kardinäle während eines Konklaves, um ihnen Privatsphäre und Komfort zu bieten. Im Alltag beherbergt es Geistliche, die im Staatssekretariat oder anderen vatikanischen Behörden arbeiten. Das Gebäude verfügt über eine eigene Kapelle, in der der Papst jeden Morgen seine berühmten Frühreisen hält, sowie über einen gemeinsamen Speisesaal. Santa Marta symbolisiert den neuen Stil des Papsttums – nahbar, gemeinschaftsorientiert und weniger formal. Gelegen in der Nähe des Petersdoms, ist es ein lebendiger Ort der Begegnung innerhalb der vatikanischen Mauern.",
        "factsAdvanced": [
            "Das Gebäude wurde im Jahr 1996 fertiggestellt.",
            "Es verfügt über insgesamt 106 Suiten und 22 Einzelzimmer.",
            "Das Haus hat fünf Etagen und eine eigene Kapelle im Erdgeschoss.",
            "Die Kosten für den Bau beliefen sich auf etwa 20 Millionen US-Dollar.",
            "Während eines Konklaves ist das Haus durch elektronische Störsender komplett isoliert.",
            "Papst Franziskus bewohnt die Suite Nummer 201.",
            "Das Gästehaus steht unter der Leitung der Genossenschaft 'Figlie della Carità'."
        ]
    },
    "va-historical-ethiopian-college": {
        "descriptionAdvanced": "Das Äthiopische Kolleg ist eine einzigartige Institution innerhalb der Vatikanischen Gärten und das einzige nationale Kolleg, das sich physisch auf dem Territorium der Vatikanstadt befindet. Seit Jahrhunderten dient es als Studienhaus und Seminar für Priester und Ordensleute aus Äthiopien und Eritrea. Die Geschichte des Kollegs reicht bis in das 15. Jahrhundert zurück, als Papst Sixtus IV. den äthiopischen Pilgern die Kirche Santo Stefano zugestallte. Das heutige Gebäude wurde in den 1930er Jahren errichtet und ist ein Ort des interkulturellen und interreligiösen Dialogs. Die Bewohner pflegen ihre alten liturgischen Traditionen in der Ge'ez-Sprache und bilden eine Brücke zwischen dem Heiligen Stuhl und den christlichen Gemeinschaften am Horn von Afrika. Inmitten der grünen Ruhe der Gärten gelegen, ist das Kolleg ein Symbol für die Universalität der katholischen Kirche und ihre langen historischen Verbindungen zum afrikanischen Kontinent.",
        "factsAdvanced": [
            "Das heutige Kollegsgebäude wurde im Jahr 1930 eingeweiht.",
            "Die Ursprünge der äthiopischen Präsenz im Vatikan datieren auf das Jahr 1481.",
            "Es ist das einzige nationale Kolleg direkt innerhalb der vatikanischen Mauern.",
            "Das Kolleg bietet Platz für etwa 30 Studenten und Priester.",
            "In der Kapelle wird die Liturgie im äthiopischen Ritus (Ge'ez) gefeiert.",
            "Das Gebäude wurde vom Architekten Giuseppe Momo entworfen.",
            "In der Nähe befindet sich die antike Kirche Santo Stefano degli Abissini."
        ]
    },
    "va-landmark-vatican-obelisk": {
        "descriptionAdvanced": "Der Vatikanische Obelisk im Zentrum des Petersplatzes ist ein stummer Zeuge der Jahrtausende und das einzige antike Monument in Rom, das seit der Kaiserzeit nie umgestürzt ist. Ursprünglich von einem unbekannten Pharao in Ägypten errichtet, wurde er von Kaiser Caligula im Jahr 37 n. Chr. nach Rom gebracht, um den Zirkus des Nero zu schmücken. Es wird angenommen, dass dieser Obelisk der letzte Anblick für den Heiligen Petrus vor seinem Martyrium war. Im Jahr 1586 vollbrachte der Architekt Domenico Fontana unter Papst Sixtus V. die technische Meisterleistung, den 327 Tonnen schweren Koloss an seinen heutigen Standort zu versetzen. Heute dient er als riesiger Zeiger einer Sonnenuhr auf dem Pflaster des Petersplatzes. Gekrönt von einem Kreuz, das laut Legende Reliquien des Wahren Kreuzes enthält, symbolisiert der Obelisk den Triumph des Christentums über das antike Heidentum und bleibt ein unverrückbarer Fixpunkt im Herzen des Vatikans.",
        "factsAdvanced": [
            "Der Obelisk ist 25,5 Meter hoch (mit Sockel und Kreuz 41 Meter).",
            "Er wiegt stolze 327 Tonnen und besteht aus rotem Granit.",
            "Für den Transport 1586 waren 900 Männer und 75 Pferde nötig.",
            "Der Obelisk stammt aus Heliopolis und ist über 3.000 Jahre alt.",
            "Er besitzt im Gegensatz zu anderen Obelisken in Rom keine Hieroglyphen.",
            "Die Bronze-Kugel an der Spitze wurde 1586 durch ein Kreuz ersetzt.",
            "Auf dem Pflaster des Platzes ist er Teil einer astronomischen Meridiansonnenuhr."
        ]
    },
    "va-historical-mater-ecclesiae-monastery": {
        "descriptionAdvanced": "Das Kloster Mater Ecclesiae, idyllisch in den Vatikanischen Gärten gelegen, wurde 1994 von Papst Johannes Paul II. als Ort des kontemplativen Gebets für Nonnen gegründet. Weltweite Aufmerksamkeit erlangte das schlichte vierstöckige Gebäude jedoch erst im Jahr 2013, als es zur Residenz für den emeritierten Papst Benedikt XVI. nach seinem historischen Rücktritt wurde. Fast zehn Jahre lang lebte Benedikt hier in klösterlicher Abgeschiedenheit, widmete sich dem Studium, dem Gebet und empfing gelegentlich Besucher. Das Kloster verfügt über eine eigene Kapelle und einen kleinen Garten, in dem der emeritierte Papst oft spazieren ging. Nach seinem Tod im Jahr 2022 kehrte das Gebäude zu seiner ursprünglichen Bestimmung als Rückzugsort für Ordensschwestern zurück. Mater Ecclesiae bleibt ein Symbol für eine beispiellose Ära in der Kirchengeschichte, in der zwei Päpste – einer amtierend, einer emeritiert – gleichzeitig innerhalb der vatikanischen Mauern lebten.",
        "factsAdvanced": [
            "Das Kloster wurde am 13. Mai 1994 offiziell eingeweiht.",
            "Das Gebäude umfasst vier Etagen mit insgesamt 12 Zimmern.",
            "Papst Benedikt XVI. lebte hier vom 2. Mai 2013 bis zu seinem Tod am 31. Dezember 2022.",
            "Das Kloster beherbergte abwechselnd Nonnen verschiedener Orden (z.B. Klarissen, Benediktinerinnen).",
            "Zum Kloster gehört ein kleiner Gemüsegarten, der von den Schwestern bewirtschaftet wird.",
            "Das Gebäude befindet sich auf dem Vatikanischen Hügel in der Nähe des Aquädukts.",
            "Papst Franziskus besuchte Benedikt XVI. hier regelmäßig vor wichtigen Kirchenfesten."
        ]
    },
    "va-historical-tomb-of-st-peter": {
        "descriptionAdvanced": "Das Grab des Heiligen Petrus ist das fundamentale Fundament, auf dem der gesamte Vatikan buchstäblich und spirituell errichtet wurde. Gelegen tief unter dem Hochaltar der Petersbasilika, in der sogenannten Confessio, markiert dieser Ort die Grabstätte des Apostels, der nach christlicher Überlieferung im Zirkus des Nero den Märtyrertod starb. Die archäologischen Ausgrabungen unter Papst Pius XII. bestätigten die Existenz eines einfachen Grabes aus dem 1. Jahrhundert, das bereits im 2. Jahrhundert mit einer kleinen Kapelle (dem Tropaion des Gaius) geehrt wurde. Die Entdeckung von Knochenfragmenten, die in ein purpurnes Tuch mit Goldfäden gehüllt waren, bestärkte die Identifizierung des Grabes. Heute können Pilger bei speziellen Führungen durch die Nekropole bis fast an die Grabnische vordringen. Dieser Ort ist der Grund, warum die Basilika genau hier steht, und bildet das unerschütterliche Zentrum der päpstlichen Autorität und der katholischen Identität.",
        "factsAdvanced": [
            "Das Grab wurde in den 1940er Jahren archäologisch zweifelsfrei lokalisiert.",
            "Es befindet sich exakt vertikal unter dem Bernini-Baldachin und der Kuppel.",
            "Die berühmte 'Rote Mauer' schützt die unmittelbare Umgebung des Grabes.",
            "Eine Inschrift 'Petros eni' (Petrus ist hier) wurde an der Fundstelle entdeckt.",
            "Die Reliquien sind in 19 kleinen Plexiglasbehältern untergebracht.",
            "Kaiser Konstantin errichtete die erste Basilika im Jahr 324 direkt über diesem Grab.",
            "Besucher können das Grab nur im Rahmen der 'Scavi'-Touren (max. 250 Personen/Tag) sehen."
        ]
    },
    "va-historical-school-of-athens-raphael": {
        "descriptionAdvanced": "Raffaels 'Schule von Athen' ist das ultimative Meisterwerk der Hochrenaissance und ein strahlendes Manifest des menschlichen Wissens und der Philosophie. Gemalt zwischen 1509 und 1511 im Auftrag von Papst Julius II. für die Stanza della Segnatura, versammelt das Fresko die größten Denker der Antike unter einer prachtvollen, perspektivisch perfekten Gewölbehalle. Im Zentrum stehen Platon, der nach oben auf die Welt der Ideen zeigt, und Aristoteles, der seine Hand flach über die Erde hält, um die Empirie zu betonen. Raffael verlieh vielen Philosophen die Gesichtszüge seiner Zeitgenossen: Platon ähnelt Leonardo da Vinci, während der einsam im Vordergrund grübelnde Heraklit das Porträt von Michelangelo ist. Das Werk symbolisiert die harmonische Vereinigung von antiker Philosophie und christlichem Glauben. Die Klarheit der Komposition, die leuchtenden Farben und die intellektuelle Tiefe machen dieses Bild zu einem der am meisten studierten und bewunderten Kunstwerke der Welt.",
        "factsAdvanced": [
            "Das Fresko hat eine Breite von etwa 7,70 Metern an der Basis.",
            "Es wurde in der Rekordzeit von etwa zwei Jahren (1509-1511) fertiggestellt.",
            "Insgesamt sind 58 verschiedene Personen auf dem Bild dargestellt.",
            "Raffael malte sich selbst am rechten Rand des Freskos (neben Sodoma).",
            "Die Architektur im Bild ist stark von Bramantes Entwürfen für den neuen Petersdom inspiriert.",
            "Das Werk befindet sich in der Stanza della Segnatura, dem ehemaligen Arbeitszimmer des Papstes.",
            "Im 18. Jahrhundert wurde das Fresko als das 'perfekteste Gemälde der Welt' bezeichnet."
        ]
    },
    "va-historical-vatican-pharmacy": {
        "descriptionAdvanced": "Die Vatikanische Apotheke (Farmacia Vaticana) ist nicht nur die einzige Apotheke des Stadtstaates, sondern gilt auch als eine der verkehrsreichsten und bestsortierten Apotheken der Welt. Gegründet im Jahr 1874 vom Orden der Barmherzigen Brüder, bietet sie hinter dem St.-Anna-Tor ein enormes Spektrum an Medikamenten an, die oft in Italien nicht verfügbar sind. Ihre Beliebtheit verdankt sie der Tatsache, dass sie internationale Präparate steuerfrei führt, was sie für Bewohner des Vatikans und Inhaber eines ärztlichen Rezepts gleichermaßen attraktiv macht. Die Apotheke ist ein Musterbeispiel für Effizienz: Trotz Tausender Kunden täglich ist der Service schnell und hochprofessionell. Neben modernen Arzneimitteln führt sie auch eine exklusive Linie vatikanischer Kosmetik- und Naturprodukte. Für den Zugang ist ein kurzes Passieren der Schweizergarde erforderlich, was dem Apothekenbesuch eine ganz besondere, fast hoheitliche Atmosphäre verleiht.",
        "factsAdvanced": [
            "Die Apotheke bedient täglich durchschnittlich 2.000 Kunden.",
            "Das Sortiment umfasst über 42.000 verschiedene pharmazeutische Produkte.",
            "Sie wurde im Jahr 1874 von Bruder Eusebius Ludvig Fronmen gegründet.",
            "Die Verkaufsfläche beträgt rund 500 Quadratmeter.",
            "Etwa 50 Mitarbeiter, darunter 10 Ordensbrüder, sind hier tätig.",
            "Medikamente aus über 50 Ländern sind hier permanent vorrätig.",
            "Der Zugang ist nur mit einem gültigen Rezept und einem Ausweis möglich."
        ]
    },
    "va-historical-vatican-post-office": {
        "descriptionAdvanced": "Die Poste Vaticane ist legendär für ihre Zuverlässigkeit und Effizienz und gilt unter Philatelisten als eine der begehrtesten Postverwaltungen der Welt. Seit der Gründung des Staates im Jahr 1929 gibt der Vatikan eigene Briefmarken heraus, die für ihre künstlerische Qualität und ihre religiösen Motive bekannt sind. Viele Römer ziehen es vor, ihre wichtige Post direkt im Vatikan aufzugeben, da der vatikanische Postdienst den Ruf hat, schneller als der italienische zu sein. Es gibt mehrere Postämter auf dem Staatsgebiet, darunter eines direkt auf dem Petersplatz in einem mobilen Container und eines in der Nähe der Museen. Die gelben Briefkästen des Vatikans sind über das ganze Territorium verteilt. Für Touristen ist das Versenden einer Postkarte mit vatikanischem Stempel ein absolutes Muss. Die Post ist nicht nur ein Kommunikationsmittel, sondern auch eine wichtige Einnahmequelle und ein Symbol für die eigenständige Verwaltung des kleinsten Staates der Welt.",
        "factsAdvanced": [
            "Die Vatikanische Post wurde am 11. Februar 1929 offiziell gegründet.",
            "Jährlich werden über 2 Millionen Briefe und 6 Millionen Postkarten versandt.",
            "Der Staat ist Mitglied des Weltpostvereins (UPU).",
            "Die ersten Briefmarken wurden am 1. August 1929 herausgegeben.",
            "Es gibt insgesamt vier öffentliche Postämter innerhalb der Vatikanstadt.",
            "Vatikanische Briefmarken sind nur gültig, wenn sie in vatikanische Briefkästen eingeworfen werden.",
            "Die Post gibt jährlich etwa 12 bis 15 verschiedene Briefmarkensätze heraus."
        ]
    },
    "va-landmark-sala-clementina": {
        "descriptionAdvanced": "Die Sala Clementina im Apostolischen Palast ist einer der prächtigsten und geschichtsträchtigsten Säle des Vatikans. Erbaut von Papst Clemens VIII. am Ende des 16. Jahrhunderts, dient der Saal als monumentales Vorzimmer zu den päpstlichen Gemächern und als Ort für feierliche Audienzen und Zeremonien. Die Wände sind komplett mit beeindruckenden Fresken im Stil der Quadraturmalerei bedeckt, die architektonische Tiefe vortäuschen und Szenen aus dem Leben des Heiligen Clemens darstellen. Besonders bemerkenswert ist die Deckenmalerei, die die Verherrlichung des Heiligen zeigt. Der Saal ist auch der Ort, an dem der verstorbene Papst traditionell aufgebahrt wird, bevor er öffentlich im Petersdom zur Schau gestellt wird. Die Sala Clementina strahlt eine majestätische Würde aus und verbindet barocke Prachtentfaltung mit der feierlichen Protokollführung des Heiligen Stuhls. Jedes Detail, vom Marmorboden bis zur vergoldeten Decke, zeugt von der spirituellen und weltlichen Macht des Papsttums.",
        "factsAdvanced": [
            "Der Saal wurde im Auftrag von Papst Clemens VIII. (1592-1605) errichtet.",
            "Die Fresken wurden maßgeblich von Giovanni und Cherubino Alberti gestaltet.",
            "Der Saal befindet sich in der zweiten Etage des Apostolischen Palastes.",
            "Er dient als Treffpunkt für das Kardinalskollegium nach dem Tod eines Papstes.",
            "Die Bodenmosaike zeigen das Wappen von Papst Clemens VIII.",
            "Der Saal wird auch für die Neujahrsansprachen an das diplomatische Korps genutzt.",
            "Die Deckenfresken wurden zwischen 1596 und 1602 fertiggestellt."
        ]
    },
    "va-historical-last-judgment-michelangelo": {
        "descriptionAdvanced": "Michelangelos 'Jüngstes Gericht' an der Altarwand der Sixtinischen Kapelle ist ein monumentales Drama der Menschheitsgeschichte und eines der kraftvollsten Kunstwerke aller Zeiten. Über 300 muskulöse Figuren bevölkern das riesige Fresko, das die Wiederkunft Christi und das endgültige Urteil über die Seelen darstellt. In der Mitte thront ein dynamischer, fast zorniger Christus, umgeben von Heiligen und Engeln, während unten die Toten aus ihren Gräbern steigen und die Verdammten in den Abgrund stürzen. Michelangelo malte dieses Werk zwischen 1536 und 1541, mehr als 20 Jahre nach der Fertigstellung der Decke. Die Darstellung der nackten Körper sorgte damals für einen gewaltigen Skandal und führte dazu, dass viele Figuren später mit 'Hosen' übermalt wurden. Das Werk reflektiert die spirituelle Krise Michelangelos und die Unruhen der Reformationszeit. Die schiere Wucht der Komposition und die psychologische Tiefe der Figuren lassen keinen Betrachter unberührt.",
        "factsAdvanced": [
            "Das Fresko bedeckt eine Fläche von etwa 13,7 x 12 Metern (über 160 qm).",
            "Michelangelo arbeitete allein für fünf Jahre (1536-1541) an diesem Werk.",
            "Es sind insgesamt etwa 390 Personen in verschiedenen Stadien des Urteils dargestellt.",
            "Michelangelo versteckte sein Selbstbildnis auf der abgezogenen Haut des Hl. Bartholomäus.",
            "Die blauen Hintergründe wurden mit extrem teurem Lapislazuli gemalt.",
            "Im Jahr 1564 ordnete das Konzil von Trient die Übermalung der Schamteile an (durch Daniele da Volterra).",
            "Das Werk wurde zwischen 1980 und 1994 umfassend restauriert."
        ]
    },
    "va-historical-creation-of-adam-michelangelo": {
        "descriptionAdvanced": "Die 'Erschaffung Adams' ist zweifellos das bekannteste Fresko Michelangelos an der Decke der Sixtinischen Kapelle und eine der ikonischsten Darstellungen der gesamten Kunstgeschichte. Der Moment, in dem Gottvater mit ausgestrecktem Finger dem ersten Menschen Adam den Funken des Lebens einhaucht, ist von unübertroffener spiritueller und künstlerischer Kraft. Die fast berührenden Finger bilden das Zentrum einer Komposition, die göttliche Energie und menschliche Sehnsucht perfekt verkörpert. Adam, dargestellt als vollkommener Jüngling, scheint direkt aus der Erde zu erwachen, während Gott in einer dynamischen Wolke aus Engeln auf ihn zuschwebt. Michelangelo revolutionierte hier die Darstellung Gottes, indem er ihn als kraftvollen, weisen Greis zeigte. Dieses Bild ist weit mehr als eine Illustration der Genesis; es ist ein Manifest der Renaissance über die Würde des Menschen und seine unmittelbare Verbindung zum Schöpfer. Die Klarheit der Linien und die skulpturale Qualität der Figuren zeigen Michelangelos Genie in seiner reinsten Form.",
        "factsAdvanced": [
            "Das Fresko ist eines von neun zentralen Panels der Decke, die Szenen der Genesis zeigen.",
            "Es wurde etwa um das Jahr 1511 fertiggestellt.",
            "Die Finger Gottes und Adams berühren sich auf dem Bild tatsächlich nicht (etwa 2 cm Abstand).",
            "Die rote Wolke um Gott ähnelt in ihrer Form verblüffend einem menschlichen Gehirn.",
            "Michelangelo malte die gesamte Decke im Stehen, nicht im Liegen, wie oft behauptet wird.",
            "Das Panel ist etwa 2,80 Meter hoch und 5,70 Meter breit.",
            "Während der Restaurierung in den 1980ern wurden die ursprünglichen, leuchtenden Farben wiederentdeckt."
        ]
    },
    "va-landmark-lourdes-grotto": {
        "descriptionAdvanced": "Die Lourdes-Grotte in den Vatikanischen Gärten ist ein Ort tiefster Marienverehrung und ein stilles Refugium inmitten der päpstlichen Parkanlage. Sie ist eine exakte Nachbildung der Grotte von Massabielle in Frankreich, wo die Jungfrau Maria dem Hirtenmädchen Bernadette Soubirous erschien. Die Grotte wurde Ende des 19. Jahrhunderts als Zeichen der Dankbarkeit für Papst Leo XIII. errichtet und ist heute ein Ort, an dem Päpste und Vatikanmitarbeiter oft zum Gebet verweilen. Besonders stimmungsvoll ist die Statue der Unbefleckten Empfängnis in einer hohen Felsnische und der davor stehende Altar, an dem regelmäßig Gottesdienste unter freiem Himmel gefeiert werden. Die natürliche Vegetation der Gärten umrahmt die Grotte und verstärkt die friedliche, kontemplative Atmosphäre. Jedes Jahr im Mai finden hier feierliche Rosenkranzgebete statt. Für Besucher der Gärten ist die Grotte oft einer der emotionalsten Haltepunkte, der die spirituelle Verbundenheit zwischen dem Heiligen Stuhl und den weltweiten Wallfahrtsorten versinnbildlicht.",
        "factsAdvanced": [
            "Die Grotte wurde im Jahr 1902 unter Papst Leo XIII. offiziell eingeweiht.",
            "Die Steine der Nachbildung stammen teilweise direkt aus dem französischen Lourdes.",
            "Sie war ein Geschenk des französischen Volkes an den Papst zum 50. Jubiläum seiner Priesterweihe.",
            "An der Grotte befindet sich der Original-Altar aus dem Heiligtum von Lourdes (ein Geschenk).",
            "Papst Johannes Paul II. und Benedikt XVI. besuchten die Grotte regelmäßig.",
            "Die Struktur ist etwa 15 Meter breit und 8 Meter hoch.",
            "Die Grotte befindet sich am westlichen Rand der Gärten, nahe der Leoninischen Mauer."
        ]
    }
}

for poi_id, data in updates.items():
    # Find the POI object by id
    pattern = r'id:\s*[\'"]' + poi_id + r'[\'"].*?facts:\s*\{.*?\}'
    match = re.search(pattern, content, re.DOTALL)
    if match:
        old_poi = match.group(0)
        # Create new fields string
        description_advanced = ',\n    descriptionAdvanced: {\n      de: "' + data["descriptionAdvanced"] + '",\n      hu: "",\n      ro: "",\n      en: ""\n    }'
        facts_list = ',\n      '.join(['"' + f + '"' for f in data["factsAdvanced"]])
        facts_advanced = ',\n    factsAdvanced: {\n      de: [\n        ' + facts_list + '\n      ],\n      hu: [],\n      ro: [],\n      en: []\n    }'
        
        # Insert after facts
        new_poi = old_poi + description_advanced + facts_advanced
        content = content.replace(old_poi, new_poi)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)
