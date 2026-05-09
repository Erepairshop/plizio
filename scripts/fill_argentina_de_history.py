#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Fill German (de) descriptionAdvanced + factsAdvanced for Argentina history POIs."""
import re
from pathlib import Path

FILE = Path(__file__).resolve().parent.parent / "lib" / "visualLab" / "data" / "poiExtraArgentinaHistoryV2.ts"

DATA = {
    "ar-cueva-de-las-manos-history-v2": {
        "desc": "Die Cueva de las Manos im Pinturas-Schluchten der Provinz Santa Cruz beherbergt eine der ältesten Felskunststätten Südamerikas. Bereits zwischen 11.000 und 7.500 v. Chr. schufen patagonische Jäger-Sammler-Gruppen hier hunderte negativer Handabdrücke, indem sie Mineralpigmente durch Knochenrohre auf die Felswand bliesen. Neben den charakteristischen Händen zeigen die Wände Guanako-Jagdszenen, Rheas und abstrakte geometrische Muster. Die Höhle wurde 1949 wissenschaftlich untersucht und 1999 in das UNESCO-Welterbe aufgenommen. Sie liefert ein einzigartiges Zeugnis der ersten menschlichen Besiedlung Patagoniens, lange bevor die Tehuelche-Kultur und später spanische Konquistadoren im 16. Jahrhundert die Region erreichten.",
        "facts": [
            "Die ältesten Malereien stammen aus der Zeit um 11.000 v. Chr.",
            "Die meisten Handabdrücke zeigen linke Hände (Künstler waren Rechtshänder).",
            "Pigmente wurden durch ein Knochenrohr auf die Felswand geblasen.",
            "1999 zum UNESCO-Welterbe erklärt.",
            "Die Höhle liegt 88 Meter über dem Talboden des Pinturas-Flusses.",
            "Drei Kulturphasen wurden archäologisch unterschieden (bis 1.000 v. Chr.).",
            "Erstmals 1949 vom Forscher Carlos Gradin systematisch dokumentiert.",
            "Die roten Pigmente stammen aus Eisenoxid, schwarze aus Mangan."
        ]
    },
    "ar-nuestra-senora-de-santa-ana-history-v2": {
        "desc": "Die Ruinen von Nuestra Señora de Santa Ana gehören zu den jesuitischen Guaraní-Reduktionen in der Provinz Misiones. 1633 von Pater Pedro de Oñate gegründet, war die Mission ein Modell der Selbstversorgung, in dem spanische Jesuiten und indigene Guaraní gemeinsam lebten und arbeiteten. Die monumentale Kirche aus rotem Sandstein, die Werkstätten und der einzigartige Steinkreuzweg zeugen vom hohen architektonischen und sozialen Niveau. Nach der Vertreibung der Jesuiten 1767 durch König Karl III. verfiel die Mission. Seit 1984 zählt sie zum UNESCO-Welterbe und gilt als Mahnmal jenes außergewöhnlichen kulturellen Experiments im kolonialen Río de la Plata.",
        "facts": [
            "1633 von den Jesuiten unter Pater Pedro de Oñate gegründet.",
            "1984 als Teil der Jesuitenmissionen zum UNESCO-Welterbe erklärt.",
            "Nach der Vertreibung der Jesuiten 1767 verlassen.",
            "Beherbergt einen einzigartigen Kreuzweg (via crucis) aus Stein.",
            "Der Friedhof wurde bis Mitte des 20. Jahrhunderts genutzt.",
            "Verfügte über ein fortschrittliches Bewässerungssystem.",
            "Erbaut aus rotem Sandstein der Region (asperón colorado).",
            "Liegt nur wenige Kilometer vom heutigen Ort Santa Ana entfernt."
        ]
    },
    "ar-nuestra-senora-de-loreto-history-v2": {
        "desc": "Nuestra Señora de Loreto war im 17. und 18. Jahrhundert eine der einflussreichsten Jesuitenmissionen der Region Misiones. 1610 gegründet und 1631 an ihren heutigen Standort verlegt, beherbergte sie die erste Druckerpresse Südamerikas, die ab 1700 Bücher auf Guaraní druckte. Hier wirkte Pater Antonio Ruiz de Montoya, der die Guaraní gegen die Sklavenjäger der Bandeirantes verteidigte und schließlich in der Mission begraben wurde. Die Ruinen umfassen die Fundamente einer riesigen Kirche, einen weitläufigen Hauptplatz und Werkstätten. Nach der Vertreibung der Jesuiten 1767 wurde Loreto aufgegeben. Seit 1984 UNESCO-Welterbe.",
        "facts": [
            "1610 gegründet, 1631 an den heutigen Standort verlegt.",
            "Standort der ersten Druckerpresse im heutigen Argentinien (um 1700).",
            "Grabstätte des einflussreichen Jesuitenpaters Antonio Ruiz de Montoya.",
            "Berühmt für hochwertige Musik- und Choralerziehung der Guaraní.",
            "Teil des UNESCO-Welterbes der Jesuitenmissionen seit 1984.",
            "Enthält Reste einer monumentalen Sonnenuhr.",
            "Nach der Jesuitenvertreibung 1767 vom Regenwald überwuchert.",
            "Folgt einem strengen Rastersystem mit zentralem Hauptplatz."
        ]
    },
    "ar-santa-maria-la-mayor-history-v2": {
        "desc": "Die Ruinen von Santa María la Mayor zeugen vom jesuitischen Wirken im Nordosten Argentiniens. 1626 von Pater Diego de Boroa gegründet, war die Mission Teil des Netzwerks zur Evangelisierung der Guaraní-Bevölkerung. Anders als die touristisch erschlossenen Schwester-Missionen bietet Santa María la Mayor eine ungewöhnlich intime Atmosphäre, in der der Regenwald und die roten Sandsteinmauern eine eindrucksvolle Symbiose eingegangen sind. Nach der Vertreibung der Jesuiten 1767 wurde der Ort verlassen. Die gut erhaltenen Werkstattkomplexe geben Einblick in die wirtschaftliche Organisation der Reduktion. Seit 1984 zählt der Ort zum UNESCO-Welterbe der Jesuitenmissionen der Guaraní.",
        "facts": [
            "1626 von Pater Diego de Boroa gegründet.",
            "1984 zum UNESCO-Welterbe erklärt.",
            "Gut erhaltene Reste der Mission-Werkstätten.",
            "Nahe der heutigen Stadt Santa María in Misiones gelegen.",
            "Nach der Jesuitenvertreibung 1767 aufgegeben.",
            "Hauptsächlich aus rotem Sandstein (asperón) erbaut.",
            "Beherbergt eine wertvolle Sammlung archäologischer Steinfragmente.",
            "Umgeben vom feuchten paranaensischen Regenwald."
        ]
    },
    "ar-casa-historica-de-tucuman-history-v2": {
        "desc": "Die Casa Histórica de la Independencia in San Miguel de Tucumán ist eines der wichtigsten Nationaldenkmäler Argentiniens. In diesem schlichten kolonialen Wohnhaus tagte am 9. Juli 1816 der Kongress von Tucumán und erklärte die Unabhängigkeit der Vereinigten Provinzen des Río de la Plata von der spanischen Krone. Der ursprüngliche Saal der Eidesleistung („Salón de la Jura“) ist erhalten geblieben, während das übrige Gebäude 1943 nach historischen Plänen rekonstruiert wurde. Heute ist es Museum und Schauplatz der jährlichen Nationalfeier am 9. Juli. Die weiß getünchte Fassade mit blauen Türen ist zum Symbol der argentinischen nationalen Identität geworden.",
        "facts": [
            "Am 9. Juli 1816 wurde hier die Unabhängigkeitserklärung unterzeichnet.",
            "Ursprüngliche Eigentümerin war Francisca Bazán de Laguna.",
            "Der „Salón de la Jura“ ist der einzige niemals zerfallene Originalteil.",
            "1943 nach historischen Plänen rekonstruiert.",
            "Charakteristisch sind die weißen Wände und blauen Türen.",
            "Beherbergt den originalen Holztisch der Kongressmitglieder.",
            "Zwei große Bronzereliefs zeigen die Schlüsselszenen von 1816.",
            "Nationaldenkmal mit täglicher Wachablösung."
        ]
    },
    "ar-manzana-jesuitica-history-v2": {
        "desc": "Die Manzana Jesuítica im Herzen der Stadt Córdoba ist ein monumentales Zeugnis des bildungspolitischen und religiösen Erbes der Gesellschaft Jesu in Südamerika. Der Block umfasst die 1613 gegründete Universidad Nacional de Córdoba – die älteste Universität Argentiniens – das Colegio Monserrat, die Jesuitenkirche (1671 vollendet) und die Hauskapelle. Die Bauwerke verbinden europäischen Barock mit lokaler indigener Handwerkskunst. Die Decke der Kirche aus Zedernholz wurde mit Schiffbau-Techniken ohne einen einzigen Nagel errichtet. Gemeinsam mit den fünf Estancias der Umgebung wurde die Manzana 2000 zum UNESCO-Welterbe erklärt und ist bis heute ein lebendiges Zentrum höherer Bildung.",
        "facts": [
            "Die Universidad Nacional de Córdoba wurde hier 1613 gegründet.",
            "Im Jahr 2000 zum UNESCO-Welterbe erklärt.",
            "Die Jesuitenkirche wurde 1671 vollendet.",
            "Die Holzdecke wurde mit Schiffbautechnik ohne Nägel errichtet.",
            "Beherbergt eine historische Bibliothek mit tausenden alten Bänden.",
            "Das Colegio Monserrat ist eines der renommiertesten des Landes.",
            "Im exakten historischen Kern Córdobas gelegen.",
            "Die Hauskapelle besitzt einen kunstvollen Goldblattaltar."
        ]
    },
    "ar-estancia-alta-gracia-history-v2": {
        "desc": "Die Estancia von Alta Gracia ist eine der bedeutendsten ländlichen Komponenten des jesuitischen Erbes in der Provinz Córdoba. Um 1643 gegründet, war sie ein hochentwickeltes landwirtschaftliches und industrielles Zentrum, das den Jesuitenblock in der Stadt Córdoba versorgte. Charakteristisch sind die monumentale Kirche, die später dem Vizekönig Santiago de Liniers als Wohnsitz diente, und der „Tajamar“, ein gewaltiges Rückhaltebecken, das die Mühle der Mission antrieb. Nach der Jesuitenvertreibung 1767 wechselte das Anwesen mehrfach den Besitzer. Heute ist die Estancia UNESCO-Welterbe (seit 2000) und beherbergt ein Museum zur Kolonialgeschichte und zum Leben des letzten Vizekönigs des Río de la Plata.",
        "facts": [
            "Um 1643 von den Jesuiten gegründet.",
            "Teil des UNESCO-Welterbes seit 2000.",
            "Der „Tajamar“-Damm ist der älteste der Provinz Córdoba.",
            "Ehemaliger Wohnsitz von Santiago de Liniers (letzter Vizekönig).",
            "Die Kirche besitzt eine geschwungene Barockfassade mit Glockenturm.",
            "War in der Kolonialzeit Großproduzent von Textilien und Vieh.",
            "Das Museum zeigt Originalmöbel und Jesuitenartefakte.",
            "Liegt im Zentrum der heutigen Stadt Alta Gracia."
        ]
    },
    "ar-estancia-jesus-maria-history-v2": {
        "desc": "Die Estancia von Jesús María im Norden der Provinz Córdoba war in der Jesuitenzeit ein wichtiges Weinbauzentrum. 1618 gegründet, produzierte sie den legendären „Lagrimilla“-Wein, der sogar am spanischen Königshof Karls II. ausgeschenkt wurde. Der Komplex umfasst eine prächtige Barockkirche, einen großen Wohnsitz mit innerem Kreuzgang und die Reste der Weinkeller und Mühlen. Die Architektur spiegelt die rationale Ordnung der Jesuitenmissionen wider. Nach der Vertreibung der Jesuiten 1767 wechselte das Anwesen mehrfach den Besitzer. Seit 2000 UNESCO-Welterbe, beherbergt sie heute das Nationale Jesuitenmuseum mit Sakralkunst, religiösen Artefakten und Zeugnissen des kolonialen Weinbaus.",
        "facts": [
            "1618 von den Jesuiten speziell für den Weinbau gegründet.",
            "Im Jahr 2000 zum UNESCO-Welterbe erklärt.",
            "Heimat des „Lagrimilla“-Weins, des ersten exportierten Weins der Region.",
            "Die Kirchenfassade ist ein Meisterwerk kolonialer Steinmetzkunst.",
            "Vierseitiger Kreuzgang mit massiven Säulen erhalten.",
            "Beherbergt das Nationale Jesuitenmuseum.",
            "Lag am historischen „Camino Real“ nach Oberperu (Potosí).",
            "Die Region ist heute für Salami und Volksfeste bekannt."
        ]
    },
    "ar-estancia-santa-catalina-history-v2": {
        "desc": "Die Estancia von Santa Catalina ist die größte und prächtigste der jesuitischen Landgüter in Córdoba. 1622 gegründet und in einem abgelegenen Bergtal der Sierras Chicas gelegen, war sie ein riesiger Vieh- und Landwirtschaftsbetrieb, der vor allem Maultiere für die Silberminen von Potosí züchtete. Die Kirche mit ihrer imposanten weißen Barockfassade gilt als eines der schönsten Beispiele kolonialer Architektur Argentiniens. Drei innere Höfe, Werkstätten und ein ausgeklügeltes Wassersystem zeugen vom organisatorischen Können der Jesuiten. Anders als andere Estancias blieb Santa Catalina nach der Vertreibung der Jesuiten 1767 in privatem Besitz der Familie Frías. UNESCO-Welterbe seit 2000.",
        "facts": [
            "1622 gegründet, größte der Estancias von Córdoba.",
            "Seit 2000 Teil des UNESCO-Welterbes.",
            "Die Kirche gilt als bedeutendstes Barockbauwerk Argentiniens.",
            "Drei massive Innenhöfe und ein eigener Friedhof.",
            "War wichtiges Zentrum für Maultierzucht (für Potosí-Minen).",
            "Erreichbar über eine malerische Straße durch die Sierras Chicas.",
            "Kircheninnenraum mit Goldblatt und Sakralgemälden geschmückt.",
            "Seit dem 18. Jahrhundert im Besitz der Familie Frías."
        ]
    },
    "ar-estancia-caroya-history-v2": {
        "desc": "Die Estancia von Caroya bei Colonia Caroya war 1616 das erste ländliche Anwesen, das die Jesuiten in der Region Córdoba errichteten. Sie diente als landwirtschaftlicher Stützpunkt und Sommerquartier der Schüler des Colegio Monserrat. Während der Unabhängigkeitskriege ab 1810 wurde sie zur Waffenfabrik umfunktioniert: Hier wurden Schwerter und Säbel für die Nordarmee unter General Belgrano geschmiedet, die später beim Heereszug San Martíns über die Anden 1817 zum Einsatz kamen. Charakteristisch ist der quadratische Grundriss mit zentralem Innenhof und massiven Steinmauern. Heute UNESCO-Welterbe (seit 2000), beherbergt sie ein Museum zur Geschichte der Region und der italienischen Einwanderung.",
        "facts": [
            "1616 gegründet – älteste der Jesuiten-Estancias.",
            "Im Jahr 2000 zum UNESCO-Welterbe erklärt.",
            "Diente während der Unabhängigkeitskriege als Schwertfabrik.",
            "Wichtiges koloniales Mais- und Weizenverarbeitungszentrum.",
            "Quadratischer Grundriss mit großem Innenhof.",
            "Beherbergt ein Museum zur Geschichte der Region.",
            "Liegt im Gebiet der piemontesischen Einwanderung des 19. Jh.",
            "Spielte logistische Rolle für San Martíns Andenarmee 1817."
        ]
    },
    "ar-estancia-la-candelaria-history-v2": {
        "desc": "Die Estancia La Candelaria ist die abgelegenste und höchstgelegene der Jesuiten-Estancias in Córdoba. 1683 in den rauen Bergen der Sierras Grandes auf 1.200 Metern Höhe gegründet, war sie ein spezialisierter Betrieb für die Zucht von Maultieren und Rindern, die in den lukrativen Handel mit den Silberminen von Oberperu gingen. Die Architektur erinnert an einen befestigten Außenposten: dicke Mauern, eine schlichte Kapelle und funktionale Wirtschaftsgebäude bilden einen scharfen Kontrast zur wilden Berglandschaft. Die abgelegene Lage hat den ursprünglichen Charakter weitgehend bewahrt. Seit 2000 ist La Candelaria Teil des UNESCO-Welterbes der jesuitischen Estancias und Manzana von Córdoba.",
        "facts": [
            "1683 in den Sierras Grandes auf 1.200 m Höhe gegründet.",
            "Abgelegenste und höchstgelegene der Córdoba-Estancias.",
            "Im Jahr 2000 zum UNESCO-Welterbe erklärt.",
            "Charakteristische Kapelle mit schlichtem Glockenturm.",
            "Festungsähnlich für Selbstverteidigung und Viehhaltung gebaut.",
            "Wichtiger Maultier-Produzent für die Potosí-Handelsroute.",
            "Ursprüngliches Landgut umfasste über 300.000 Hektar.",
            "Erreichbar über eine anspruchsvolle Bergstraße."
        ]
    },
    "ar-monumento-bandera-history-v2": {
        "desc": "Das Monumento Nacional a la Bandera in Rosario ist das wichtigste patriotische Bauwerk Argentiniens. Es steht am Ufer des Paraná an genau der Stelle, an der General Manuel Belgrano am 27. Februar 1812 zum ersten Mal die argentinische Flagge hisste. Der monumentale neoklassizistisch-rationalistische Komplex aus Andenmarmor wurde 1957 nach 14 Jahren Bauzeit eingeweiht und besteht aus einem 70 Meter hohen Turm, dem zeremoniellen „Civic Courtyard“ und dem „Propylaeum“ mit der Flamme des unbekannten Soldaten. Die Krypta unter dem Turm bewahrt Belgranos sterbliche Überreste. Jährlich am 20. Juni, dem Tag der Flagge, finden hier die wichtigsten nationalen Feierlichkeiten statt.",
        "facts": [
            "Am 20. Juni 1957 nach 14 Jahren Bauzeit eingeweiht.",
            "Entworfen von den Architekten Ángel Guido und Alejandro Bustillo.",
            "Der Turm ist 70 Meter hoch und bietet Panoramablick.",
            "Vollständig aus Andenmarmor und -stein erbaut.",
            "Die Belgrano-Krypta liegt im Sockel des Turms.",
            "Der Civic Courtyard fasst bis zu 30.000 Personen.",
            "Skulpturen der berühmten Künstlerin Lola Mora.",
            "Erinnert an Belgranos erste Hissung der Flagge am 27. Februar 1812."
        ]
    },
    "ar-cayasta-ruins-history-v2": {
        "desc": "Die archäologische Stätte Santa Fe la Vieja in Cayastá bewahrt die Reste der ursprünglichen Stadt Santa Fe, die 1573 von Juan de Garay gegründet wurde. Aufgrund ständiger Überschwemmungen und indigener Angriffe wurde die Siedlung zwischen 1650 und 1660 vollständig an ihren heutigen Standort verlegt und vom Schwemmland des Paraná überdeckt. 1949 entdeckte der Forscher Agustín Zapata Gollán die Ruinen wieder. Heute sind die Fundamente der Hauptkirche, mehrerer Wohnhäuser bedeutender Siedler und der Hauptplatz freigelegt. Die Stätte ist eine der besterhaltenen frühkolonialen Zeugnisse Südamerikas und gewährt einzigartige Einblicke in das erste Jahrhundert spanischer Besiedlung am Río de la Plata.",
        "facts": [
            "Am 15. November 1573 von Juan de Garay gegründet.",
            "Zwischen 1650 und 1660 verlassen und verlegt.",
            "1949 von Agustín Zapata Gollán wiederentdeckt.",
            "Reste der Franziskanerkirche mit Originalbestattungen.",
            "Eine der besterhaltenen frühkolonialen Stätten Amerikas.",
            "80 km nördlich der heutigen Stadt Santa Fe gelegen.",
            "1957 zum nationalen Geschichtsdenkmal erklärt.",
            "Das Museum verwahrt über 30.000 archäologische Objekte."
        ]
    },
    "ar-shincal-quimivil-history-v2": {
        "desc": "El Shincal de Quimivil im Londoner Tal der Provinz Catamarca ist die bedeutendste Inka-Stätte Argentiniens. Im 15. Jahrhundert von den Inka als „neues Cusco“ am südlichen Abschnitt des Qhapaq Ñan (Inka-Straße) errichtet, war es ein wichtiges administratives und zeremonielles Zentrum. Die Anlage umfasst über 100 Steinbauten, darunter einen großen zentralen Platz mit Ushnu-Pyramide für Sonnenrituale, kallankas (rechteckige Versammlungshäuser) und qollqas (Vorratsspeicher) auf den umliegenden Hügeln. Nach der spanischen Eroberung um 1536 wurde Shincal aufgegeben. Seit 2014 ist die Stätte als Teil des Qhapaq-Ñan-Systems UNESCO-Welterbe und gilt als einer der südlichsten Vorposten des Tahuantinsuyu-Reiches.",
        "facts": [
            "Von den Inka zwischen 1470 und 1536 errichtet.",
            "Erstreckt sich über mehr als 23 Hektar.",
            "Der „Ushnu“ ist eine monumentale Stumpfpyramide für Sonnenrituale.",
            "Wichtiger Knotenpunkt am UNESCO-Welterbe Qhapaq Ñan (seit 2014).",
            "Enthält Reste mehrerer kallankas (große Rechteckhallen).",
            "Strategisches Zentrum für Textilproduktion und Lagerhaltung.",
            "War einst Hauptstadt einer Inka-Provinz (wamani).",
            "Liegt nur 5 km vom Ort Londres in Catamarca entfernt."
        ]
    },
    "ar-tastil-ruins-history-v2": {
        "desc": "Die Ruinen von Santa Rosa de Tastil in der Quebrada del Toro der Provinz Salta sind die Reste einer der größten präkolumbischen Städte Argentiniens. Auf 3.200 Metern Höhe gelegen, erreichte die Stadt im 14. Jahrhundert ihre Blütezeit mit über 2.000 Einwohnern und einem komplexen urbanen Gefüge aus Steinhäusern, Straßen und Gemeinschaftsplätzen. Die Bewohner gehörten zur Atacama-Kultur und waren vor allem Lamahirten und Händler, die eine wichtige Karawanenroute zwischen der Puna und den Tälern kontrollierten. Um 1450 wurde Tastil im Zuge der Inka-Eroberung verlassen. Seit 2014 ist die Stätte als Teil des Qhapaq Ñan UNESCO-Welterbe.",
        "facts": [
            "Bewohnt zwischen 1300 und 1450 n. Chr.",
            "Umfasst eine Fläche von etwa 12 Hektar.",
            "Trockensteinmauern (pirca) ohne Mörtel.",
            "Liegt auf 3.200 Metern Höhe.",
            "Teil des UNESCO-Welterbes Qhapaq Ñan (seit 2014).",
            "Tausende Petroglyphen in den umliegenden Bergen.",
            "Das Museum bewahrt eine 600 Jahre alte Mumie.",
            "Liegt an der Route des berühmten „Tren a las Nubes“."
        ]
    },
    "ar-potrero-payogasta-history-v2": {
        "desc": "Potrero de Payogasta ist eine bedeutende Inka-Stätte in den Calchaquí-Tälern der Provinz Salta. Im späten 15. Jahrhundert errichtet, war sie ein zentraler Verwaltungs- und Lagerstandort, der die Inka-Kontrolle über die Region sicherte. Bemerkenswert ist die hervorragend erhaltene Kallanka, eine 30 Meter lange rechteckige Steinhalle, die zu den größten des gesamten Inka-Reichs zählt. Hinzu kommen runde Vorratsspeicher (qollqas) und Wohnbereiche oberhalb des Tals. Die Anlage war ein wichtiger Knotenpunkt am Qhapaq Ñan und ist seit 2014 UNESCO-Welterbe. Die isolierte Lage und die dramatische Bergkulisse machen sie zu einem eindrucksvollen Zeugnis des Inka-Imperiums an seinen südlichsten Grenzen.",
        "facts": [
            "Die 30 Meter lange Kallanka zählt zu den besterhaltenen Argentiniens.",
            "Seit 2014 UNESCO-Welterbe als Teil der Inka-Straße.",
            "Strategischer Blick über das obere Calchaquí-Tal.",
            "Im 15. Jahrhundert aus Adobe und Stein erbaut.",
            "Verfügt über Ritualbereich und astronomische Beobachtungspunkte.",
            "Liegt nahe dem Ort Payogasta auf 2.500 m Höhe.",
            "Wichtiges Zentrum für die Lagerung von Mais und Paprika.",
            "Erhalten in weitgehend unrestauriertem Originalzustand."
        ]
    },
    "ar-posta-yatasto-history-v2": {
        "desc": "Die Posta de Yatasto in der Provinz Salta ist eine historische koloniale Poststation, die in den argentinischen Unabhängigkeitskriegen eine legendäre Rolle spielte. An der „Camino Real“ gelegen, war das schlichte zweistöckige Gebäude ein zentraler Treffpunkt der Revolutionshelden. Im Januar 1814 übergab General Manuel Belgrano hier das Kommando der Nordarmee an General José de San Martín – ein Schlüsselmoment der südamerikanischen Geschichte, der den Weg für die Befreiung Chiles und Perus ebnete. Auch der Gaucho-Anführer Martín Miguel de Güemes verkehrte hier. Heute ist die Posta de Yatasto Nationalmuseum (seit 1942) und bewahrt koloniale Möbel, Dokumente und Erinnerungsstücke aus der Unabhängigkeitsära.",
        "facts": [
            "Ende des 18. Jahrhunderts als Poststation erbaut.",
            "Schauplatz der Kommandoübergabe Belgrano–San Martín 1814.",
            "1942 zum nationalen Geschichtsdenkmal erklärt.",
            "Liegt nahe der Stadt Metán im Süden Saltas.",
            "Charakteristischer Balkon und dicke Adobemauern.",
            "Verfügt über eine kleine Kapelle der Revolutionsführer.",
            "Das umliegende Gut war früher eine bedeutende Viehranch.",
            "Das Museum zeigt Dokumente und Artefakte der Unabhängigkeitszeit."
        ]
    },
    "ar-iglesia-yavi-history-v2": {
        "desc": "Die Kirche San Francisco in Yavi ist ein verborgenes Juwel des kolonialen Barocks, gelegen in einer Oase der Puna von Jujuy. Ende des 17. Jahrhunderts (um 1690) von den Marqueses de Yavi – dem einzigen Adelsgeschlecht im heutigen argentinischen Gebiet – errichtet, ist sie berühmt für ihren atemberaubenden Innenraum. Die Altäre sind vollständig mit Blattgold überzogen, und die Fenster bestehen aus dünnen Onyxplatten („alajita“), die ein mystisches goldenes Licht erzeugen. Im Inneren befindet sich eine herausragende Sammlung von Gemälden der Cusco-Schule aus dem 17. Jahrhundert. Yavi liegt nur wenige Kilometer von der bolivianischen Grenze entfernt und zeugt vom Reichtum und der religiösen Inbrunst der kolonialen Hochanden-Elite.",
        "facts": [
            "Um 1690 in heutiger Form vollendet.",
            "Berühmt für die Onyx-Fenster mit goldenem Lichtfilter.",
            "Drei massive Altäre vollständig in Blattgold gehüllt.",
            "Bedeutende Sammlung von Gemälden der Cusco-Schule des 17. Jh.",
            "Teil des einzigen Marquisats im argentinischen Territorium.",
            "Liegt nur wenige Kilometer von der bolivianischen Grenze.",
            "Empore mit einzigartig bemalter Holzdecke.",
            "Nationales Geschichtsdenkmal und Schatz der argentinischen Puna."
        ]
    },
    "ar-capilla-casabindo-history-v2": {
        "desc": "Die Kapelle von Casabindo, oft als „Kathedrale der Puna“ bezeichnet, ist eine imposante weiß getünchte Kirche in einem entlegenen Dorf der Provinz Jujuy. 1722 auf 3.400 Metern Höhe vollendet, kontrastiert ihre monumentale Größe mit den bescheidenen Adobehütten der Umgebung. Berühmt ist sie für ihre seltenen „Ángeles Arcabuceros“ – kolonialzeitliche Gemälde, die Erzengel als spanische Soldaten mit Musketen zeigen. Jeden 15. August findet hier das einzigartige „Toreo de la Vincha“ statt, der einzige Stierkampf Argentiniens, bei dem der Stier nicht getötet wird, sondern ihm eine Stirnschleife abgenommen wird. Casabindo verkörpert exemplarisch die Synkretismus zwischen katholischem Glauben und alten Andenbräuchen.",
        "facts": [
            "1722 an der Stelle einer älteren Kapelle vollendet.",
            "Massive Dimensionen auf 3.400 m Höhe.",
            "Berühmte Gemälde von Erzengeln mit Musketen (17. Jh.).",
            "Fest „Toreo de la Vincha“ jährlich am 15. August.",
            "Glocken angeblich im 18. Jh. aus Spanien gebracht.",
            "Eines der ältesten und traditionellsten Dörfer der Puna.",
            "Dicke Steinmauern und Lehm-Strohdach.",
            "Schlüsselort für den religiösen Synkretismus der Anden."
        ]
    },
    "ar-fuerte-patagones-history-v2": {
        "desc": "Der historische Kern von Carmen de Patagones rund um die Reste des spanischen Forts ist die älteste Siedlung Patagoniens. 1779 von Francisco de Viedma als Verteidigungsposten am Río Negro gegründet, spielte er 1827 eine heldenhafte Rolle, als die örtlichen Bewohner und eine kleine Garnison eine weit überlegene brasilianische Marineflotte im Cisplatinischen Krieg besiegten. Die erbeuteten kaiserlichen Flaggen werden bis heute in der Pfarrkirche aufbewahrt. Die „Manzana Histórica“ mit ihren steilen Kopfsteinpflasterstraßen, traditionellen Häusern und in den Fels gehauenen „Cuevas Maragatas“ vermittelt die Atmosphäre der Kolonialzeit. Patagones wird oft als „Wiege der patagonischen Geschichte“ bezeichnet.",
        "facts": [
            "Am 22. April 1779 von Francisco de Viedma gegründet.",
            "Schauplatz der Seeschlacht von 1827 gegen Brasilien.",
            "Pfarrkirche bewahrt zwei brasilianische Kaiserflaggen.",
            "Beherbergt die „Cuevas Maragatas“ – in den Fels gehauene Häuser.",
            "Älteste Siedlung Patagoniens auf einem Hügel über dem Fluss.",
            "Bekannt als „Wiege der patagonischen Geschichte“.",
            "Der „Torre del Fuerte“ ist letzter Rest der Verteidigungsmauer.",
            "Verbunden mit Viedma durch eine historische Flussfähre."
        ]
    },
    "ar-palacio-san-jose-history-v2": {
        "desc": "Der Palacio San José in der Provinz Entre Ríos ist eine der prachtvollsten und historisch bedeutendsten Residenzen Argentiniens. Mitte des 19. Jahrhunderts erbaut, war er Hauptwohnsitz und politisches Hauptquartier von General Justo José de Urquiza, dem ersten verfassungsmäßigen Präsidenten des Landes (1854–1860). Der italienisch-renaissancistische Bau besitzt achtzig Räume, zwei massive Türme und einen weitläufigen Park mit künstlichem See für Marinemanöver. Der Palast war für seine Zeit außergewöhnlich modern: Er war das erste Gebäude Argentiniens mit fließendem Wasser. Hier wurde Urquiza am 11. April 1870 ermordet. Heute ist der Palast Nationalmuseum (seit 1935) und bewahrt Originalmöbel, Kunstwerke und persönliche Gegenstände des Generals.",
        "facts": [
            "1858 nach neunjähriger Bauzeit eingeweiht.",
            "General Urquiza wurde hier am 11. April 1870 ermordet.",
            "Kapelle mit Kuppelfresken von Juan Manuel Blanes.",
            "Park mit künstlichem See für Marineübungen.",
            "Charakteristisch sind die zwei 25 m hohen Türme.",
            "Der Spiegelsaal war Schauplatz diplomatischer Empfänge.",
            "1935 zum nationalen Geschichtsdenkmal erklärt.",
            "Liegt nahe der Stadt Concepción del Uruguay."
        ]
    },
    "ar-casa-virrey-liniers-history-v2": {
        "desc": "Die Casa del Virrey Liniers in Alta Gracia, Córdoba, ist ein historisches Kolonialgebäude und ehemaliger Wohnsitz von Santiago de Liniers, dem letzten Vizekönig des Río de la Plata. Sie ist Teil des Komplexes der Estancia Jesuítica de Alta Gracia und spiegelt den Übergang vom Jesuitenbesitz zur privaten Verwaltung wider. Charakteristisch sind die dicken Adobemauern, die traditionellen Ziegeldächer und die Kreuzgänge, die die Atmosphäre des frühen 19. Jahrhunderts bewahren. Liniers, der 1807 das Anwesen erwarb, lebte hier kurz vor seiner Hinrichtung 1810 durch die Revolutionstruppen. Heute ist das Gebäude zentraler Bestandteil des Nationalen Jesuitenmuseums und seit 2000 Teil des UNESCO-Welterbes.",
        "facts": [
            "Ende des 17. Jahrhunderts als Wohnsitz der Jesuitenverwalter erbaut.",
            "Vizekönig Santiago de Liniers erwarb das Gut 1807.",
            "Teil des UNESCO-Welterbes Manzana Jesuítica seit 2000.",
            "Quadratischer Grundriss mit zentralem Innenhof.",
            "Liniers wurde hier 1810 von den Revolutionstruppen verhaftet.",
            "Beherbergt eine reiche Sammlung kolonialer Möbel und Sakralkunst.",
            "Architektur bewahrt ursprüngliche Jesuiten- und Republik-Elemente.",
            "Wichtigste Kulturattraktion der Stadt Alta Gracia."
        ]
    },
    "ar-casa-sarmiento-history-v2": {
        "desc": "Das Geburtshaus von Domingo Faustino Sarmiento in der Stadt San Juan ist eine bescheidene, aber historisch tiefgreifende Stätte. Hier wurde am 15. Februar 1811 jener Mann geboren, der später zum argentinischen Präsidenten (1868–1874) und „Vater der Bildung“ werden sollte. Das Haus aus Adobe mit Schilfdach wurde 1801 von seiner Mutter Paula Albarracín erbaut. Im Innenhof steht der berühmte Feigenbaum, unter dem Paula Stoffe webte, um die Familie zu ernähren. 1910 wurde es als erstes Gebäude Argentiniens zum nationalen Geschichtsdenkmal erklärt. Es überstand das verheerende Erdbeben von 1944 als eines der wenigen Kolonialgebäude San Juans und beherbergt heute Sarmientos Originalbibliothek und persönliche Gegenstände.",
        "facts": [
            "Erstes als Nationaldenkmal eingestuftes Gebäude Argentiniens (1910).",
            "Sarmiento wurde hier am 15. Februar 1811 geboren.",
            "Der historische Feigenbaum im Innenhof existiert noch heute.",
            "1801 von Paula Albarracín erbaut.",
            "Beherbergt den Raum, in dem Sarmiento seine erste Schule gründete.",
            "Museum mit Originalbibliothek und Manuskripten.",
            "Eines der wenigen Kolonialgebäude, die das Erdbeben 1944 überstanden.",
            "Bibliothek dem umfangreichen literarischen Werk Sarmientos gewidmet."
        ]
    },
    "ar-cabildo-salta-history-v2": {
        "desc": "Der Cabildo von Salta ist das besterhaltene koloniale Rathaus Argentiniens und ein imposantes Symbol der spanischen Verwaltung im Norden. An der Plaza 9 de Julio gelegen, beeindruckt das zweistöckige Gebäude (um 1780 vollendet) mit eleganten Arkadengängen, einem Innenhof und einem markanten Uhrturm. Es diente im Lauf seiner Geschichte als Regierungssitz, Gefängnis und gesellschaftlicher Mittelpunkt. Während der Unabhängigkeitskriege ab 1810 trafen hier Generäle wie Belgrano und Güemes wichtige militärische Entscheidungen. Heute beherbergt der Cabildo das Historische Nordmuseum und das Museum für Kolonial- und Schöne Künste mit der wichtigsten Sakralkunstsammlung Nordargentiniens. Seit 1941 nationales Geschichtsdenkmal.",
        "facts": [
            "Aktuelles Gebäude um 1780 vollendet.",
            "Uhrturm einer der wenigen funktionierenden Originalturmuhren der Region.",
            "Wichtigste Kolonialkunstsammlung Nordargentiniens.",
            "1941 zum nationalen Geschichtsdenkmal erklärt.",
            "Arkadengang (recova) mit 14 Bögen im Erdgeschoss.",
            "Belgrano und Güemes hielten sich hier häufig auf.",
            "Saal dem „Éxodo Jujeño“ von 1812 gewidmet.",
            "Turm bietet einzigartige Sicht auf die Plaza 9 de Julio."
        ]
    },
    "ar-convento-san-bernardo-history-v2": {
        "desc": "Das Kloster San Bernardo ist eines der ältesten und schönsten Sakralbauwerke der Stadt Salta. Ursprünglich 1586 als Krankenhaus errichtet, wurde es später Karmeliter-Kloster und schließlich 1846 Sitz der Karmelitinnen der Alten Observanz. Berühmt ist die handgeschnitzte Tür aus Algarrobo-Holz von 1762, ein Meisterwerk indigener Handwerkskunst mit floralen und religiösen Motiven. Die weiß getünchten Mauern und die schlichte Barockfassade liegen am Fuß des San-Bernardo-Hügels. Das Kloster ist bis heute ein aktives Kontemplativkloster der Karmelitinnen. Das Bauwerk hat mehrere Erdbeben überstanden und wurde 1941 zum nationalen Geschichtsdenkmal erklärt. Es symbolisiert den dauerhaften Einfluss der Orden auf die Entwicklung Nordargentiniens.",
        "facts": [
            "1586 gegründet – eines der ältesten Gebäude der Stadt.",
            "Algarrobo-Holztür 1762 von indigenen Künstlern geschnitzt.",
            "1846 in Karmelitinnen-Kloster umgewandelt.",
            "1941 zum nationalen Geschichtsdenkmal erklärt.",
            "Tür mit floralen und religiösen Motiven verziert.",
            "Nur zwei Häuserblocks von der Plaza 9 de Julio entfernt.",
            "Innerer Kreuzgang gilt als einer der ruhigsten Orte Saltas.",
            "Hat mehrere Erdbeben in seiner Geschichte überstanden."
        ]
    },
    "ar-ruinas-tolombon-history-v2": {
        "desc": "Die Ruinen von Tolombón in den Calchaquí-Tälern Saltas sind die Reste einer bedeutenden präkolumbischen Stadt, die als Hauptstadt der Diaguita-Calchaquí diente. An einem strategischen Hang gelegen, umfasste die Stadt komplexe Wohngebiete, landwirtschaftliche Terrassen und Verteidigungsanlagen. Tolombón war ein Zentrum des Widerstands gegen die Inka-Expansion im 15. Jahrhundert und später gegen die spanischen Eroberer während der Calchaquí-Kriege (1630–1665). Nach der endgültigen Niederlage 1665 wurden die Bewohner zwangsdeportiert. Die ausgedehnten Ruinen bieten einen weiten Panoramablick über die Weinberge und Berge des Tals. Sie sind eine Schlüsselstätte zum Verständnis des indigenen Widerstands und der kulturellen Komplexität des präkolumbischen Nordwestens.",
        "facts": [
            "Blütezeit zwischen 1000 und 1500 n. Chr.",
            "Hauptstadt des mächtigen Tolombón-Häuptlingstums.",
            "Strategische Lage zur Kontrolle der Talroute.",
            "Enthält einen Pucará (Festung) auf höherem Gelände.",
            "Eines der wichtigsten Zentren des indigenen Widerstands.",
            "Ruinen erstrecken sich über einen großen Hangbereich.",
            "Archäologen fanden hochentwickelte Bewässerungssysteme.",
            "Schlüsselstätte zum Studium der Santa-María-Kultur."
        ]
    },
    "ar-pucara-aconquija-history-v2": {
        "desc": "Der Pucará de Aconquija ist eine monumentale Inka-Festung in den Hochbergen der Provinz Catamarca. Auf fast 3.000 Metern Höhe gelegen, ist er einer der südlichsten und besterhaltenen Pucarás (Festungen) des Inka-Imperiums. Die Anlage besitzt massive Verteidigungsmauern von über 400 Metern Länge sowie Wohngebiete, Plätze und zeremonielle Plattformen. Die strategische Lage erlaubte es den Inka, Personen- und Warenbewegungen zwischen der Hochebene und den Tälern der Aconquija-Bergkette im 15. Jahrhundert zu kontrollieren. Seit 2014 ist der Pucará als Teil des Qhapaq Ñan UNESCO-Welterbe. Sein Ausmaß bezeugt die Reichweite und organisatorische Macht des Inka-Staates an seinen entferntesten südlichen Grenzen.",
        "facts": [
            "Im 15. Jahrhundert als wichtiger südlicher Militärposten erbaut.",
            "Seit 2014 Teil des UNESCO-Welterbes Qhapaq Ñan.",
            "Verteidigungsmauer ist 430 Meter lang und 3 Meter hoch.",
            "Strategischer Blick über das Campo del Pucará.",
            "Großer zentraler Platz (Ushnu) für Verwaltung und Rituale.",
            "Erbaut in Trockenstein-Technik (pirca).",
            "Erreichbar über eine anspruchsvolle Bergwanderung.",
            "Wichtiges Zentrum für Lama-Karawanen-Kontrolle."
        ]
    },
    "ar-los-menhires-history-v2": {
        "desc": "Das Archäologische Reservat Los Menhires in El Mollar, Tucumán, beherbergt eine einzigartige Sammlung geheimnisvoller Steinmonolithen, die vor über 2.000 Jahren von der Tafí-Kultur geschaffen wurden. Die teils über drei Meter hohen und mehrere Tonnen schweren Steine sind mit menschlichen und tierischen Figuren sowie abstrakten Symbolen verziert. Ursprünglich über das gesamte Tafí-Tal verstreut, wurden sie in einem zentralen Park zusammengeführt, um sie vor Plünderung und landwirtschaftlicher Ausdehnung zu schützen. Ihre Funktion bleibt umstritten – Theorien reichen von astronomischen Markierungen über Grenzsteine bis zu rituellen Ahnen-Totems. Die Tafí-Kultur war eine der ersten sesshaften Gesellschaften der Region (800 v. Chr. – 800 n. Chr.).",
        "facts": [
            "Die Menhire stammen aus der Zeit zwischen 800 v. Chr. und 800 n. Chr.",
            "Über 50 gravierte Steine im Park ausgestellt.",
            "Viele Steine zeigen stilisierte menschliche Gesichter.",
            "Der größte Menhir misst fast 3,5 Meter Höhe.",
            "Tafí-Kultur war eine der ersten sesshaften Gesellschaften der Region.",
            "Pigmentreste zeigen, dass Steine einst bemalt waren.",
            "Liegt im malerischen Valle de Tafí auf 2.000 m Höhe.",
            "Steine bestehen aus lokalem Granit und metamorphem Gestein."
        ]
    },
    "ar-capilla-huerfanos-history-v2": {
        "desc": "Die Capilla de los Huérfanos (Waisenkapelle) ist ein bewegendes historisches Wahrzeichen der Stadt Santa Fe aus der Kolonialzeit. Sie war Teil einer 1793 von Francisco Javier de la Rosa gegründeten Einrichtung zur Betreuung und Erziehung verwaisener Kinder – ein Pionierprojekt sozialer Fürsorge im Vizekönigreich Río de la Plata. Die Kapelle selbst ist ein schlichtes, aber elegantes Beispiel kolonialer Architektur mit dicken Adobemauern und traditioneller Holzdecke. Sie hat die Verlegung der Stadt Santa Fe (1660) und zahlreiche historische Umwälzungen überstanden und spielt seit Jahrhunderten eine wichtige Rolle im Gemeinschaftsleben der Stadt. Heute ist sie ein Symbol von Mitgefühl und sozialer Geschichte und bewahrt das Andenken an Tausende dort betreuter Kinder.",
        "facts": [
            "1793 von Francisco Javier de la Rosa gegründet.",
            "Eine der ältesten karitativen Institutionen Santa Fes.",
            "Schlichte Fassade mit einzelnem Glockenturm.",
            "Wichtiges Zentrum der Grundbildung benachteiligter Kinder.",
            "Beherbergt eine kleine Sammlung kolonialer Sakralkunst.",
            "Architektur spiegelt Strenge und Funktionalität der Epoche.",
            "Liegt im historischen Zentrum der „neuen“ Stadt Santa Fe.",
            "Nationales Geschichtsdenkmal der Sozialgeschichte Argentiniens."
        ]
    },
    "ar-reduccion-yapeyu-history-v2": {
        "desc": "Die Jesuitenreduktion Yapeyú am Ufer des Río Uruguay in der Provinz Corrientes ist eine der historisch bedeutendsten Stätten Argentiniens. Am 4. Februar 1627 von Pater Pedro Romero gegründet, war sie eine der größten und prosperierendsten Missionen der Region, bekannt für ihre außergewöhnliche Herstellung von Musikinstrumenten (besonders Violinen) und ihre hochorganisierte Rinderzucht. Vor allem aber ist Yapeyú der Geburtsort von General José de San Martín, dem „Befreier Argentiniens, Chiles und Perus“, der hier am 25. Februar 1778 zur Welt kam. Heute schützt der granitene „Templete de San Martín“ die Reste seines Geburtshauses. Die Mission wurde während der portugiesisch-brasilianischen Invasionen (1817) zerstört.",
        "facts": [
            "Am 4. Februar 1627 von Pater Pedro Romero gegründet.",
            "General José de San Martín wurde hier am 25. Februar 1778 geboren.",
            "Der „Templete de San Martín“ schützt die Reste des Geburtshauses.",
            "Größte und wohlhabendste Mission der Region.",
            "Berühmt für Schola Cantorum und Geigenbau.",
            "Während der portugiesisch-brasilianischen Invasionen 1817 zerstört.",
            "Museum mit Jesuiten-Artefakten und San-Martín-Erinnerungsstücken.",
            "Strategischer Punkt an der Wasserstraße des Río Uruguay."
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

    for poi_id, content in DATA.items():
        # Find the POI block by id
        pattern = re.compile(
            r'(\{\s*\n\s*id:\s*"' + re.escape(poi_id) + r'"[\s\S]*?image:\s*"[^"]*"\s*\})',
            re.MULTILINE
        )
        m = pattern.search(text)
        if not m:
            print(f"NOT FOUND: {poi_id}")
            continue
        block = m.group(1)

        # Check if descriptionAdvanced.de already exists
        if re.search(r'descriptionAdvanced:\s*\{[^}]*\bde:\s*"', block):
            print(f"SKIP (de exists): {poi_id}")
            skipped += 1
            continue

        new_block = block

        # Insert de into descriptionAdvanced (before en:)
        de_desc = content["desc"].replace('"', '\\"')
        new_block = re.sub(
            r'(descriptionAdvanced:\s*\{\s*\n)(\s*)(en:\s*")',
            lambda mm: f'{mm.group(1)}{mm.group(2)}de: "{de_desc}",\n{mm.group(2)}{mm.group(3)}',
            new_block, count=1
        )

        # Insert de into factsAdvanced (before en:)
        de_facts = fmt_facts(content["facts"])
        new_block = re.sub(
            r'(factsAdvanced:\s*\{\s*\n)(\s*)(en:\s*\[)',
            lambda mm: f'{mm.group(1)}{mm.group(2)}de: {de_facts},\n{mm.group(2)}{mm.group(3)}',
            new_block, count=1
        )

        if new_block == block:
            print(f"NO CHANGE: {poi_id}")
            continue

        text = text.replace(block, new_block, 1)
        filled += 1
        print(f"FILLED: {poi_id}")

    if text != original:
        FILE.write_text(text, encoding="utf-8")
        print(f"\nDone. Filled={filled}, Skipped={skipped}")
    else:
        print("\nNothing changed.")

if __name__ == "__main__":
    main()
