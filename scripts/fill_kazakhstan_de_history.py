#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Fill German (de) descriptionAdvanced + factsAdvanced for Kazakhstan history POIs.

The target file currently has NO descriptionAdvanced/factsAdvanced fields at all.
This script inserts new top-level descriptionAdvanced and factsAdvanced blocks
(de-only) right after the existing `facts: { ... }` field of each POI.
"""
import re
from pathlib import Path

FILE = Path(__file__).resolve().parent.parent / "lib" / "visualLab" / "data" / "poiExtraKazakhstanHistoryV2.ts"

DATA = {
    "kz-yasawi-mausoleum-history-v2": {
        "desc": "Das Mausoleum des Sufi-Heiligen Hodscha Ahmad Jassawi (gestorben 1166) wurde 1389 von Timur (Tamerlan) in der Stadt Turkestan in Auftrag gegeben und blieb bis zu Timurs Tod 1405 unvollendet. Es gilt als eines der bedeutendsten Bauwerke der timuridischen Architektur und diente später als Vorbild für viele Mausoleen Zentralasiens, einschließlich des Taj Mahal. Die Anlage besitzt die größte erhaltene Ziegelkuppel Kasachstans und ist seit 2003 UNESCO-Weltkulturerbe. In der Sowjetzeit ab 1936 wurde das Bauwerk restauriert; nach der Unabhängigkeit 1991 entwickelte es sich zu einem nationalen Identitätssymbol und einem zentralen Pilgerort.",
        "facts": [
            "Bauherr war Timur (Tamerlan), Auftrag 1389.",
            "Hodscha Ahmad Jassawi starb im Jahr 1166.",
            "Bau blieb nach Timurs Tod 1405 unvollendet.",
            "Größte erhaltene Ziegelkuppel Kasachstans (18 Meter Durchmesser).",
            "UNESCO-Weltkulturerbe seit dem Jahr 2003.",
            "Im Russischen Reich ab 1864 unter zaristischer Verwaltung.",
            "Restauriert in der Sowjetzeit ab 1936.",
            "Symbolisches Pilgerzentrum nach der Unabhängigkeit 1991."
        ]
    },
    "kz-otrar-ruins-history-v2": {
        "desc": "Otrar war eine der reichsten Oasenstädte der Seidenstraße und Geburtsort des Philosophen Al-Farabi (um 872-950). Im Jahr 1218 ließ der Statthalter Inalchuq eine Karawane Dschingis Khans plündern, was den Mongolensturm auslöste: 1219-1220 belagerten die mongolischen Truppen Otrar fünf Monate lang und zerstörten die Stadt. Sie wurde unter den Timuriden im 14. Jahrhundert teilweise wiederaufgebaut, verfiel jedoch endgültig im 18. Jahrhundert. Mit dem Beitritt zum Russischen Reich 1731 verlor die Region weiter an Bedeutung. Sowjetische Ausgrabungen ab 1969 und nach der Unabhängigkeit 1991 legten die Stadtmauern, Bäder und das Bewässerungssystem frei.",
        "facts": [
            "Geburtsort des Philosophen Al-Farabi (um 872-950).",
            "Mongoleninvasion durch Dschingis Khan 1219-1220.",
            "Belagerung dauerte fünf Monate.",
            "Statthalter Inalchuq plünderte 1218 die Karawane.",
            "Teilweise wiederaufgebaut unter den Timuriden im 14. Jahrhundert.",
            "Region trat 1731 dem Russischen Reich bei.",
            "Sowjetische Ausgrabungen begannen im Jahr 1969.",
            "Forschung intensiviert nach der Unabhängigkeit 1991."
        ]
    },
    "kz-tamgaly-petroglyphs-history-v2": {
        "desc": "Die Petroglyphen von Tamgaly im Tien-Shan-Vorland enthalten über 5.000 Felszeichnungen, die ältesten datieren auf das 14. bis 13. Jahrhundert v. Chr. (späte Bronzezeit). Die Bilder zeigen Sonnengötter, Jagdszenen und Tierherden. Die Stätte wurde 1957 von der sowjetischen Archäologin Anna Maximova entdeckt und systematisch dokumentiert. Während der Sowjetzeit ab 1936 erlitt die Stätte Schäden durch militärische Übungen. Nach der kasachischen Unabhängigkeit 1991 wurde sie geschützt und 2004 zum UNESCO-Weltkulturerbe erklärt. Die Petroglyphen geben Einblick in die religiösen Vorstellungen der frühen Steppenbewohner, lange vor der Mongolenzeit, der Goldenen Horde und der russischen Kolonisierung 1731.",
        "facts": [
            "Über 5.000 Felszeichnungen aus mehreren Epochen.",
            "Älteste Petroglyphen aus dem 14.-13. Jh. v. Chr.",
            "Entdeckt im Jahr 1957 von Anna Maximova.",
            "Während der Sowjetzeit ab 1936 durch Militärübungen beschädigt.",
            "UNESCO-Weltkulturerbe seit dem Jahr 2004.",
            "Sonnengott-Darstellungen sind das wichtigste Motiv.",
            "Geschützt nach der Unabhängigkeit Kasachstans 1991.",
            "Liegt rund 170 km nordwestlich von Almaty."
        ]
    },
    "kz-aisha-bibi-mausoleum-history-v2": {
        "desc": "Das Mausoleum von Aischa Bibi nahe der Stadt Taras wurde im 11. oder 12. Jahrhundert erbaut, in der Zeit der Karachaniden, lange vor der Mongoleninvasion und der Goldenen Horde. Es ist berühmt für seine einzigartige Terrakotta-Fassade mit über 60 verschiedenen geometrischen und floralen Mustern. Die Legende erzählt von der jungen Aischa, die auf dem Weg zu ihrem Geliebten, dem Karachaniden-Khan Karachan, an einem Schlangenbiss starb. Das Bauwerk verfiel über Jahrhunderte. Nach 1731 (Beitritt zum Russischen Reich) und besonders in der Sowjetzeit ab 1936 begannen Restaurierungen. Die heutige Form wurde 2002, nach der Unabhängigkeit 1991, vollendet.",
        "facts": [
            "Erbaut im 11.-12. Jahrhundert unter den Karachaniden.",
            "Über 60 verschiedene Terrakotta-Mustertypen an der Fassade.",
            "Legende von Aischa und Khan Karachan.",
            "Aischa starb der Sage nach an einem Schlangenbiss.",
            "Sowjetische Restaurierung ab 1936.",
            "Region 1731 Teil des Russischen Reichs.",
            "Heutige Form 2002 vollendet (nach Unabhängigkeit 1991).",
            "Liegt 18 km westlich der Stadt Taras."
        ]
    },
    "kz-jochi-khan-mausoleum-history-v2": {
        "desc": "Das Mausoleum von Dschötschi Khan, dem ältesten Sohn Dschingis Khans, liegt in der Region Ulytau und stammt aus dem 13. Jahrhundert. Dschötschi (gestorben um 1227) war Begründer der Dschötschi-Dynastie, aus der die Goldene Horde hervorging, die das gebiet des heutigen Kasachstan bis ins 15. Jahrhundert beherrschte. Das Bauwerk gilt als wichtigstes Zeugnis der Mongolenzeit auf kasachischem Boden. Nach dem Zerfall der Goldenen Horde und mit dem russischen Vordringen ab 1731 geriet es in Vergessenheit. Sowjetische Archäologen ab 1946 und besonders nach der Unabhängigkeit 1991 erforschten die Anlage. Heute ist sie Teil des Sakralerbes Kasachstans.",
        "facts": [
            "Ruhestätte des ältesten Sohnes von Dschingis Khan.",
            "Dschötschi Khan starb um das Jahr 1227.",
            "Errichtet im 13. Jahrhundert in der Ulytau-Region.",
            "Begründer der Goldenen Horde, die bis ins 15. Jh. herrschte.",
            "Region 1731 unter russische Oberhoheit gestellt.",
            "Sowjetische Ausgrabungen ab 1946.",
            "Klassische islamische Ziegelarchitektur.",
            "Restauriert nach der Unabhängigkeit 1991."
        ]
    },
    "kz-alzhir-memorial-history-v2": {
        "desc": "ALSCHIR (Akmolinski Lager dlja Schon Isménnikow Rodiny) war von 1937 bis 1953 eines der größten Frauenlager des sowjetischen Gulag-Systems. Es lag rund 30 km von Astana entfernt und beherbergte über 18.000 Frauen, darunter Ehefrauen sogenannter \"Volksfeinde\" der stalinistischen Säuberungen. Hunderte Kinder wurden dort geboren oder mit ihren Müttern interniert. Nach Stalins Tod 1953 wurde das Lager geschlossen, das Schicksal der Inhaftierten jedoch lange totgeschwiegen. Erst nach der kasachischen Unabhängigkeit 1991 begann die Aufarbeitung. Präsident Nasarbajew weihte 2007 die heutige Gedenkstätte ein, zehn Jahre nach der Hauptstadtverlegung von Almaty nach Astana 1997.",
        "facts": [
            "ALSCHIR-Lager bestand von 1937 bis 1953.",
            "Über 18.000 Frauen wurden hier inhaftiert.",
            "Teil des stalinistischen Gulag-Systems.",
            "Lag rund 30 km westlich der Hauptstadt Astana.",
            "Nach Stalins Tod 1953 geschlossen.",
            "Aufarbeitung begann nach der Unabhängigkeit 1991.",
            "Gedenkstätte eingeweiht im Jahr 2007.",
            "Astana wurde 1997 zur Hauptstadt erklärt."
        ]
    },
    "kz-issyk-kurgan-history-v2": {
        "desc": "Der Issyk-Kurgan in der Nähe von Almaty wurde 1969 vom sowjetischen Archäologen Kemal Akischew ausgegraben. Im Inneren fand sich das Grab des \"Goldenen Mannes\" – eines etwa 18 Jahre alten Saka-Kriegers aus dem 4. oder 5. Jahrhundert v. Chr., bestattet in einem aus über 4.000 Goldplättchen gefertigten Gewand. Der Fund wurde sofort zur Sensation und nach der Unabhängigkeit 1991 zum nationalen Symbol Kasachstans erhoben. Die Saka-Kultur war Teil des Reiternomadenraums, lange vor Mongolenkrieg und Goldener Horde, dem russischen Vordringen 1731 oder der Sowjetzeit ab 1936. Originale werden in Astana, Kopien in Almaty und Issyk gezeigt.",
        "facts": [
            "Ausgrabung im Jahr 1969 durch Kemal Akischew.",
            "Grab eines Saka-Kriegers aus dem 4.-5. Jh. v. Chr.",
            "Goldgewand aus über 4.000 Goldplättchen.",
            "\"Goldener Mann\" wurde Nationalsymbol nach 1991.",
            "Liegt 50 km östlich von Almaty.",
            "Originalfunde heute in Astana ausgestellt.",
            "Krieger war beim Tod etwa 18 Jahre alt.",
            "Saka-Kultur lange vor der Mongolenzeit (13. Jh.)."
        ]
    },
    "kz-beket-ata-history-v2": {
        "desc": "Die Beket-Ata-Höhlenmoschee auf dem Mangyschlak-Plateau wurde im späten 18. Jahrhundert vom Sufi-Gelehrten Beket Myrsauly (1750-1813) in den Kalkstein gehauen. Beket-Ata war Schüler des Pir Khoja Niyaz und gilt bis heute als spiritueller Führer der westkasachischen Adai-Stämme. Während der russischen Kolonialzeit nach 1731 und besonders in der Sowjetzeit ab 1936 wurden religiöse Praktiken unterdrückt, doch die Pilgerfahrt nach Beket-Ata blieb in der Volksfrömmigkeit lebendig. Nach der Unabhängigkeit 1991 wurde der Ort offiziell rehabilitiert. Die Moschee ist heute eines der wichtigsten Sufi-Heiligtümer Kasachstans und Ziel von tausenden Pilgern jährlich.",
        "facts": [
            "Beket Myrsauly lebte von 1750 bis 1813.",
            "Höhlenmoschee im späten 18. Jahrhundert gehauen.",
            "Direkt in den Kalkstein des Mangyschlak-Plateaus gemeißelt.",
            "Schüler des Sufi-Meisters Pir Khoja Niyaz.",
            "Spiritueller Führer der Adai-Stämme.",
            "Pilgerwesen während der Sowjetzeit ab 1936 unterdrückt.",
            "Offizielle Rehabilitierung nach der Unabhängigkeit 1991.",
            "Tausende Pilger jährlich aus ganz Kasachstan."
        ]
    },
    "kz-sauran-ruins-history-v2": {
        "desc": "Sauran war im 13. und 14. Jahrhundert eine der wichtigsten Festungsstädte der Region und zeitweise Hauptstadt der Weißen Horde, eines östlichen Teilstaats der Goldenen Horde. Die mächtigen Lehmziegelmauern überlebten die Mongoleninvasion des 13. Jahrhunderts und schützten die Stadt bis ins 18. Jahrhundert, als sie infolge politischer Umwälzungen und der russischen Annäherung an die Region (Vertrag von 1731) verlassen wurde. Die Stadt verfügte über ein bemerkenswertes unterirdisches Bewässerungssystem (Kjarisen). Sowjetische Archäologen erforschten Sauran ab den 1940er Jahren; nach der Unabhängigkeit 1991 wurden die Mauern systematisch konserviert.",
        "facts": [
            "Zeitweise Hauptstadt der Weißen Horde im 14. Jh.",
            "Teil des Reiches der Goldenen Horde.",
            "Lehmziegelmauern überstanden die Mongoleninvasion.",
            "Verfügte über ein unterirdisches Bewässerungssystem (Kjarisen).",
            "Im 18. Jh. nach russischem Vertrag von 1731 verlassen.",
            "Sowjetische Ausgrabungen seit den 1940er Jahren.",
            "Liegt 43 km nördlich von Turkestan.",
            "Konservierungsarbeiten nach der Unabhängigkeit 1991."
        ]
    },
    "kz-arystan-bab-history-v2": {
        "desc": "Das Mausoleum des Arystan Bab, des spirituellen Lehrers von Hodscha Ahmad Jassawi, wurde ursprünglich im 12. Jahrhundert errichtet, mehrfach durch Erdbeben zerstört und im 14. Jahrhundert unter Timur (Tamerlan) wiederaufgebaut. Pilger besuchen traditionell zuerst Arystan Bab, bevor sie zum Jassawi-Mausoleum in Turkestan weitergehen. Während der Mongolenzeit, der Goldenen Horde und der russischen Kolonialzeit ab 1731 blieb die Wallfahrt lebendig. Die Sowjetzeit ab 1936 erschwerte religiöse Praxis; nach der Unabhängigkeit 1991 wurde der Ort restauriert und ist heute fester Bestandteil der nationalen Identität Kasachstans.",
        "facts": [
            "Ursprünglich erbaut im 12. Jahrhundert.",
            "Wiederaufbau im 14. Jh. unter Timur (Tamerlan).",
            "Lehrer des Sufi-Heiligen Hodscha Ahmad Jassawi.",
            "Pilger besuchen Arystan Bab zuerst, dann Turkestan.",
            "Mehrfach durch Erdbeben zerstört.",
            "Markante Holzsäulen aus Maulbeerbaum.",
            "Religiöse Praxis in der Sowjetzeit ab 1936 erschwert.",
            "Restauriert nach der Unabhängigkeit 1991."
        ]
    },
    "kz-akyrtas-palace-history-v2": {
        "desc": "Der Palastkomplex Akyrtas in der Region Schambyl wurde vermutlich im 8. Jahrhundert während der arabischen Expansion in Zentralasien begonnen, blieb jedoch unvollendet. Die monumentalen roten Sandsteinblöcke wiegen bis zu 10 Tonnen und zeigen nahöstliche Bauweisen, die in der Steppenregion einzigartig sind. Über die Bauherren wird seit langem spekuliert: arabische Statthalter, sogdische Händler oder lokale Türk-Chane. Während der Mongolenherrschaft, der Goldenen Horde, des Russischen Reichs ab 1731 und der Sowjetzeit ab 1936 lag die Anlage fast vergessen. Die ersten systematischen Ausgrabungen erfolgten 1865, intensiv erforscht wird sie seit der Unabhängigkeit 1991. UNESCO-Weltkulturerbe seit 2014.",
        "facts": [
            "Bauarbeiten begonnen im 8. Jahrhundert.",
            "Monumentale rote Sandsteinblöcke bis 10 Tonnen.",
            "Niemals vollendet, Bauherren bis heute unklar.",
            "Erste systematische Ausgrabungen im Jahr 1865.",
            "Gehört seit 2014 zum UNESCO-Welterbe.",
            "Architektur zeigt nahöstliche Einflüsse.",
            "Region 1731 Teil des Russischen Reichs.",
            "Intensive Forschung seit der Unabhängigkeit 1991."
        ]
    },
    "kz-saraichik-ruins-history-v2": {
        "desc": "Saraichik (\"Kleines Saray\") war im 13. und 14. Jahrhundert die wichtigste Handelsstadt am Unterlauf des Ural und Hauptstadt der Nogai-Horde nach dem Zerfall der Goldenen Horde im 15. Jahrhundert. Hier kreuzten sich Handelsrouten zwischen China, Persien und Russland. Mehrere Khane der Goldenen Horde sind in Saraichik bestattet. Nach Plünderungen durch die Kosaken im 16. Jahrhundert verfiel die Stadt; spätere Erosion durch den Ural zerstörte einen Großteil der Reste. Mit dem russischen Vordringen ab 1731 wurde die Region zaristisch verwaltet. Sowjetische Ausgrabungen ab 1937 und neue Grabungen nach der Unabhängigkeit 1991 förderten Münzen, Keramik und Grabstelen zutage.",
        "facts": [
            "Hauptstadt der Nogai-Horde im 15.-16. Jahrhundert.",
            "Handelszentrum zwischen China, Persien und Russland.",
            "Mehrere Khane der Goldenen Horde hier bestattet.",
            "Im 16. Jh. von den Kosaken zerstört.",
            "Liegt am Unterlauf des Flusses Ural.",
            "Region 1731 Teil des Russischen Reichs.",
            "Sowjetische Ausgrabungen begannen 1937.",
            "Forschung wieder intensiviert nach Unabhängigkeit 1991."
        ]
    },
    "kz-shakpak-ata-history-v2": {
        "desc": "Die Schakpak-Ata-Höhlenmoschee auf der Halbinsel Mangyschlak wurde zwischen dem 9. und 10. Jahrhundert in eine weiße Kreidefelsformation gehauen. Sie ist eines der ältesten Beispiele islamischer Architektur in Kasachstan und gehört zum Sufi-Erbe der Region. Die kreuzförmige Anlage zeigt arabische und türkische Inschriften vom 9. bis ins 19. Jahrhundert. Während der Goldenen Horde war sie ein wichtiger spiritueller Ort. Nach dem russischen Vordringen ab 1731 und besonders in der Sowjetzeit ab 1936 wurden Pilgerfahrten erschwert, blieben jedoch heimlich erhalten. Nach der Unabhängigkeit 1991 wurde die Moschee restauriert und gilt als eines der bedeutendsten Heiligtümer Westkasachstans.",
        "facts": [
            "In den Kreidefels gehauen im 9.-10. Jahrhundert.",
            "Eines der ältesten islamischen Bauwerke Kasachstans.",
            "Kreuzförmiger Grundriss mit vier Räumen.",
            "Arabische und türkische Inschriften aus 1.000 Jahren.",
            "Wichtiger Ort während der Goldenen Horde.",
            "Pilgerwesen in der Sowjetzeit ab 1936 erschwert.",
            "Region 1731 unter russische Oberhoheit gestellt.",
            "Restaurierung nach der Unabhängigkeit 1991."
        ]
    },
    "kz-babadzha-khatun-history-v2": {
        "desc": "Das Mausoleum der Babadscha Chatun nahe Taras stammt aus dem 11. Jahrhundert und ist damit eines der ältesten erhaltenen Mausoleen Kasachstans. Es liegt unmittelbar neben dem Aischa-Bibi-Mausoleum und wird mit der treuen Begleiterin Aischas in Verbindung gebracht. Charakteristisch ist das ungewöhnliche, sechzehn-fach gerippte Zeltdach, das an türkische Steppenjurten erinnert. Das Bauwerk überstand Mongolenherrschaft, Goldene Horde und russische Eroberung ab 1731. In der Sowjetzeit ab 1936 wurde es teilweise restauriert und nach der Unabhängigkeit 1991 vollständig konserviert. Es gilt heute als wichtiges Zeugnis der vor-mongolischen karachanidischen Architektur Zentralasiens.",
        "facts": [
            "Erbaut im 11. Jahrhundert unter den Karachaniden.",
            "Eines der ältesten erhaltenen Mausoleen Kasachstans.",
            "Charakteristisches sechzehnfach geripptes Zeltdach.",
            "Liegt direkt neben dem Aischa-Bibi-Mausoleum.",
            "Babadscha Chatun gilt als Aischas treue Begleiterin.",
            "Region 1731 Teil des Russischen Reichs.",
            "Restaurierung in der Sowjetzeit ab 1936.",
            "Vollständige Konservierung nach Unabhängigkeit 1991."
        ]
    },
    "kz-anyrakay-battlefield-history-v2": {
        "desc": "Auf dem Schlachtfeld von Anyrakay besiegten 1729 die vereinten kasachischen Stämme der Drei Schüsen unter Abulchair Khan und Boghenbai Batyr die mächtigen Dsungaren. Diese Schlacht beendete die Hauptphase der dsungarischen Invasion, die als \"Große Katastrophe\" (Aktaban-Schubyryndy) ab 1723 in die Geschichte einging. Der Sieg festigte die kasachische nationale Einheit, führte aber auch dazu, dass Abulchair Khan 1731 Schutz beim Russischen Reich suchte – Beginn der zweihundertjährigen russisch-sowjetischen Vorherrschaft. Während der Sowjetzeit ab 1936 war das Gedenken eingeschränkt; nach der Unabhängigkeit 1991 und besonders nach der Hauptstadtverlegung nach Astana 1997 wurde der Ort national rehabilitiert.",
        "facts": [
            "Schlacht fand im Jahr 1729 statt.",
            "Vereinte kasachische Stämme besiegten die Dsungaren.",
            "Anführer waren Abulchair Khan und Boghenbai Batyr.",
            "\"Große Katastrophe\" (Aktaban-Schubyryndy) ab 1723.",
            "Abulchair suchte 1731 Schutz beim Russischen Reich.",
            "Wendepunkt in der kasachischen Geschichte.",
            "Gedenken in der Sowjetzeit ab 1936 eingeschränkt.",
            "Nationale Rehabilitierung nach Unabhängigkeit 1991."
        ]
    },
    "kz-karlag-memorial-history-v2": {
        "desc": "Karlag (Karagandinski ITL) war von 1931 bis 1959 eines der größten Lager des sowjetischen Gulag-Systems und umfasste auf seinem Höhepunkt rund 1,7 Millionen Hektar. Über 800.000 Menschen aus über 40 Nationen durchliefen die Lager – politische Gefangene, deportierte Tschetschenen, Krimtataren, Russlanddeutsche und Koreaner. Sie bauten die Bergbau- und Schwerindustrie der Region Karaganda auf. Nach Stalins Tod 1953 wurde das System schrittweise aufgelöst, formell endgültig 1959 geschlossen. Die Aufarbeitung begann erst nach der kasachischen Unabhängigkeit 1991. Das Museum im ehemaligen Hauptgebäude von Doline wurde 2011 eröffnet, vierzehn Jahre nach der Hauptstadtverlegung nach Astana 1997.",
        "facts": [
            "Karlag bestand von 1931 bis 1959.",
            "Eines der größten Lager des sowjetischen Gulag.",
            "Über 800.000 Inhaftierte aus mehr als 40 Nationen.",
            "Umfasste rund 1,7 Millionen Hektar Fläche.",
            "Schloss formell im Jahr 1959, sechs Jahre nach Stalin.",
            "Museum eröffnet im Jahr 2011 in Doline.",
            "Aufarbeitung erst nach der Unabhängigkeit 1991 möglich.",
            "Astana wurde 1997 zur neuen Hauptstadt."
        ]
    },
    "kz-karabura-mausoleum-history-v2": {
        "desc": "Das Mausoleum des Karabura befindet sich in Südkasachstan und ist einem verehrten Sufi-Heiler des 12. Jahrhunderts geweiht, dessen Lebensdaten und Identität in der Volksüberlieferung mit der Karachanidenzeit verbunden sind. Karabura gilt als Schüler oder Zeitgenosse des Hodscha Ahmad Jassawi. Die heutige Bauform stammt aus dem späten Mittelalter und wurde durch Erdbeben und Konflikte mehrfach beschädigt. Während der Mongolenzeit, der Goldenen Horde und der russischen Kolonialzeit nach 1731 blieb der Ort ein Pilgerziel. In der Sowjetzeit ab 1936 wurde die Pilgerfahrt offiziell unterdrückt; nach der Unabhängigkeit 1991 wurde das Mausoleum restauriert und ist erneut ein wichtiger spiritueller Ort.",
        "facts": [
            "Karabura wirkte im 12. Jahrhundert als Sufi-Heiler.",
            "Galt als Zeitgenosse von Hodscha Ahmad Jassawi.",
            "Heutige Bauform stammt aus dem Spätmittelalter.",
            "Mehrfach durch Erdbeben beschädigt.",
            "Pilgerort durch alle Epochen hinweg.",
            "Region 1731 Teil des Russischen Reichs.",
            "Pilgerwesen in der Sowjetzeit ab 1936 unterdrückt.",
            "Restaurierung nach der Unabhängigkeit 1991."
        ]
    },
    "kz-sisem-ata-history-v2": {
        "desc": "Die Nekropole von Sisem-Ata auf der Halbinsel Mangyschlak ist eine der größten und reichsten Totenstädte Kasachstans und stammt aus dem 13. bis 19. Jahrhundert. Sie umfasst tausende kunstvoll behauene Grabstelen (Kulpytas) und Mausoleen der nomadischen Adai- und Turkmenen-Stämme. Die ältesten Gräber gehen auf die Zeit der Goldenen Horde zurück, die jüngsten in das späte Russische Reich. Während der Sowjetzeit ab 1936 wurde die islamische Bestattungstradition der Kasachen teilweise unterbrochen, viele Stelen jedoch erhalten. Erste systematische Forschungen erfolgten in den 1950er Jahren; seit der Unabhängigkeit 1991 ist die Nekropole geschütztes Kulturerbe und gilt als \"Pantheon der Krieger Mangyschlaks\".",
        "facts": [
            "Gräber stammen aus dem 13.-19. Jahrhundert.",
            "Älteste Bestattungen aus der Goldenen Horde-Zeit.",
            "Tausende kunstvoll behauene Kulpytas-Stelen.",
            "Hauptsächlich Adai- und Turkmenen-Stämme.",
            "Region 1731 Teil des Russischen Reichs.",
            "Bestattungstradition in der Sowjetzeit ab 1936 unterbrochen.",
            "Systematische Forschung ab den 1950er Jahren.",
            "Geschütztes Kulturerbe seit der Unabhängigkeit 1991."
        ]
    },
    "kz-sygnak-ruins-history-v2": {
        "desc": "Sygnak war im 12. Jahrhundert Hauptstadt des Kiwtschaken-Stammesbundes und später, nach der Mongoleninvasion, im 14. und 15. Jahrhundert Hauptstadt der Weißen Horde sowie zeitweise des Kasachischen Khanats. Die Stadt prägte eigene Münzen und war ein wichtiges Zentrum der Seidenstraße am Mittellauf des Syrdarja. Nach Konflikten mit den Schaibaniden und dem Aufstieg von Buchara verfiel sie im 16. und 17. Jahrhundert. Mit dem russischen Vordringen ab 1731 verschwand sie aus den Karten. Sowjetische Archäologen ab 1947 und besonders nach der Unabhängigkeit 1991 legten Reste der Zitadelle, Moscheen und Karawansereien frei. Heute liegen die Ruinen größtenteils unter Sanddünen verborgen.",
        "facts": [
            "Hauptstadt der Kiwtschaken im 12. Jahrhundert.",
            "Hauptstadt der Weißen Horde im 14.-15. Jh.",
            "Zeitweise Hauptstadt des Kasachischen Khanats.",
            "Münzprägezentrum der Seidenstraße.",
            "Verfiel im 16.-17. Jh. durch Konflikte mit Buchara.",
            "Region 1731 Teil des Russischen Reichs.",
            "Sowjetische Ausgrabungen begannen 1947.",
            "Forschung intensiviert nach Unabhängigkeit 1991."
        ]
    },
    "kz-abai-shakarim-history-v2": {
        "desc": "Das Mausoleum von Abai und Schäkärim auf dem Schidebai-Hügel im Osten Kasachstans wurde 1995 eingeweiht, vier Jahre nach der Unabhängigkeit 1991. Es ehrt den großen Nationaldichter Abai Qunanbajuly (1845-1904), der die kasachische Schriftsprache modernisierte, und seinen Neffen, den Philosophen Schäkärim Qudaiberdiuly (1858-1931), der 1931 von der sowjetischen Geheimpolizei NKWD ermordet wurde. Während der Sowjetzeit ab 1936 wurde Abai zwar offiziell anerkannt, Schäkärim aber bis 1988 totgeschwiegen. Nach der Unabhängigkeit 1991 und besonders nach der Hauptstadtverlegung nach Astana 1997 wurden beide zu nationalen Identitätsfiguren. Architekten Bek Ibrayev und Saken Narynow.",
        "facts": [
            "Abai Qunanbajuly lebte von 1845 bis 1904.",
            "Schäkärim Qudaiberdiuly lebte von 1858 bis 1931.",
            "Schäkärim wurde 1931 vom NKWD ermordet.",
            "Mausoleum eingeweiht im Jahr 1995.",
            "Schäkärim bis 1988 in der Sowjetunion totgeschwiegen.",
            "Nationaldichter und Philosoph der kasachischen Sprache.",
            "Errichtet vier Jahre nach der Unabhängigkeit 1991.",
            "Architekten Bek Ibrayev und Saken Narynow."
        ]
    },
}


def fmt_facts(facts):
    items = ", ".join('"' + f.replace('"', '\\"') + '"' for f in facts)
    return f"[{items}]"


def main():
    src = FILE.read_text(encoding="utf-8")
    original = src
    updated = 0
    skipped = []

    for poi_id, payload in DATA.items():
        # Find this POI block start
        id_re = re.compile(r'(\{\s*\n\s*id:\s*"' + re.escape(poi_id) + r'")')
        m = id_re.search(src)
        if not m:
            skipped.append(f"{poi_id}: id not found")
            continue
        start = m.start()
        # Find next POI start (or end of array)
        rest = src[m.end():]
        next_id = re.search(r'\n\s*\{\s*\n\s*id:\s*"', rest)
        end = m.end() + (next_id.start() if next_id else len(rest))
        block = src[start:end]

        # Skip if descriptionAdvanced.de already filled
        if re.search(r'descriptionAdvanced\s*:\s*\{[^}]*\bde\s*:\s*"[^"]+"', block):
            skipped.append(f"{poi_id}: de already exists")
            continue

        # Locate the closing of `facts: { ... }` block, insert advanced fields after it.
        # Find `facts: {` then walk braces to find matching close.
        facts_m = re.search(r'\bfacts\s*:\s*\{', block)
        if not facts_m:
            skipped.append(f"{poi_id}: no facts block")
            continue
        i = facts_m.end()
        depth = 1
        while i < len(block) and depth > 0:
            ch = block[i]
            if ch == "{":
                depth += 1
            elif ch == "}":
                depth -= 1
            i += 1
        if depth != 0:
            skipped.append(f"{poi_id}: unbalanced facts braces")
            continue
        facts_close_idx = i  # one past the closing }

        de_desc = payload["desc"].replace("\\", "\\\\").replace('"', '\\"')
        de_facts = fmt_facts(payload["facts"])

        insertion = (
            ",\n"
            f'    descriptionAdvanced: {{ de: "{de_desc}" }},\n'
            f"    factsAdvanced: {{ de: {de_facts} }}"
        )
        new_block = block[:facts_close_idx] + insertion + block[facts_close_idx:]

        src = src[:start] + new_block + src[end:]
        updated += 1

    if src != original:
        FILE.write_text(src, encoding="utf-8")
    print(f"Updated: {updated}/{len(DATA)} POIs")
    if skipped:
        print("Skipped:")
        for s in skipped:
            print(f"  - {s}")


if __name__ == "__main__":
    main()
