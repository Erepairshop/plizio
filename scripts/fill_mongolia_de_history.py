#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Fill German (de) descriptionAdvanced + factsAdvanced for Mongolia history POIs.

Inserts new top-level descriptionAdvanced and factsAdvanced blocks (de-only)
right after the existing `facts: { ... }` field of each POI in
poiExtraMongoliaHistoryV2.ts.
"""
import re
from pathlib import Path

FILE = Path(__file__).resolve().parent.parent / "lib" / "visualLab" / "data" / "poiExtraMongoliaHistoryV2.ts"

DATA = {
    "mn-erdene-zuu-history-v2": {
        "desc": "Das Erdene Dsuu Kloster wurde 1585 unter Abtai Sain Khan auf den Trümmern der einstigen Reichshauptstadt Karakorum errichtet, die nach Dschingis Khans Reichsgründung 1206 und der Yuan-Dynastie 1271 verfallen war. Es gilt als das älteste erhaltene buddhistische Kloster der Mongolei und Symbol der zweiten Welle des tibetischen Buddhismus, die im 16. Jahrhundert über die Steppe schwappte. Die berühmte Außenmauer mit 108 weißen Stupas wurde im Laufe des 17. und 18. Jahrhunderts unter mandschurischer Qing-Oberhoheit ergänzt. Die stalinistischen Säuberungen 1937 trafen das Kloster schwer, doch nach der Demokratisierung 1990 wurde es wiederbelebt und ist heute Teil des UNESCO-Welterbes Orchon-Tal.",
        "facts": [
            "Erbaut im Jahr 1585 unter Abtai Sain Khan.",
            "Steine stammen aus den Ruinen Karakorums (gegründet 1220).",
            "Außenmauer mit exakt 108 weißen Stupas.",
            "Gehört zum UNESCO-Welterbe Orchon-Tal seit 2004.",
            "Schwer beschädigt während der stalinistischen Säuberungen 1937.",
            "Wiederbelebung nach der Demokratisierung 1990.",
            "Eines der drei Hauptzentren des mongolischen Buddhismus.",
            "Funktioniert heute als Museum und aktives Kloster."
        ]
    },
    "mn-karakorum-history-v2": {
        "desc": "Karakorum wurde um 1220 von Dschingis Khan als militärisches Hauptlager gegründet und 1235 von seinem Sohn Ögedei Khan zur offiziellen Hauptstadt des Mongolischen Reiches ausgebaut. Unter Möngke Khan empfing die Stadt Gesandte aus Europa, Persien und China und beherbergte den legendären silbernen Brunnenbaum des französischen Goldschmieds Wilhelm von Rubruk. Mit der Verlagerung der Macht nach Khanbaliq (Peking) durch Kublai Khan bei der Gründung der Yuan-Dynastie 1271 verlor Karakorum an Bedeutung. Im 14. Jahrhundert wurde die Stadt von den Truppen der Ming-Dynastie nach dem Sturz der Yuan zerstört. Die mandschurische Eroberung 1691 und die Sowjet-Einfluss-Phase ab 1921 ließen den Ort vergessen, bis nach der Demokratisierung 1990 die archäologische Forschung intensiviert wurde.",
        "facts": [
            "Gegründet um 1220 von Dschingis Khan.",
            "Hauptstadt des Mongolischen Reiches ab 1235 unter Ögedei.",
            "Wilhelm von Rubruk besuchte die Stadt 1254.",
            "Verlor Bedeutung mit Gründung der Yuan-Dynastie 1271.",
            "Zerstört von Ming-Truppen im späten 14. Jahrhundert.",
            "Berühmt für den silbernen Brunnenbaum von Möngke Khan.",
            "Zwei steinerne Schildkröten markieren die Stadtgrenzen.",
            "Intensive Forschung nach der Demokratisierung 1990."
        ]
    },
    "mn-zaisan-history-v2": {
        "desc": "Die Daisan-Gedenkstätte südlich von Ulaanbaatar wurde 1971 von den Sowjets zum Gedenken an die gefallenen sowjetischen und mongolischen Soldaten des Zweiten Weltkriegs und der Schlacht am Chalchin Gol 1939 errichtet. Sie ist ein Schlüsseldenkmal der mongolisch-sowjetischen Allianz, die mit der Gründung der Mongolischen Volksrepublik 1924 unter Sowjet-Einfluss seit 1921 begann. Das gewaltige Ringmosaik zeigt Szenen der Befreiung Berlins, der Niederlage Japans und der Freundschaft zwischen den Völkern. Nach der Demokratisierung 1990 und dem Abzug sowjetischer Truppen blieb das Denkmal als historisches Zeugnis der kommunistischen Ära erhalten. Heute ist die mit über 600 Stufen erreichbare Anhöhe der bekannteste Aussichtspunkt der Hauptstadt.",
        "facts": [
            "Errichtet im Jahr 1971 zum Gedenken an WK II.",
            "Ehrt sowjetische und mongolische Gefallene seit 1939.",
            "Sowjet-Einfluss in der Mongolei seit 1921.",
            "Mongolische Volksrepublik gegründet 1924.",
            "Über 600 Treppenstufen führen zur Spitze.",
            "Mosaik zeigt Niederlage Nazideutschlands und Japans.",
            "Sowjetischer Panzer am Fuß der Anhöhe.",
            "Erhalten geblieben nach der Demokratisierung 1990."
        ]
    },
    "mn-amarbayasgalant-history-v2": {
        "desc": "Das Amarbajasgalant-Kloster wurde zwischen 1727 und 1736 auf Befehl des mandschurischen Kaisers Yongzheng der Qing-Dynastie als Mausoleum für Zanabazar erbaut, den ersten Bogd Gegen und großen Kunstschöpfer der Mongolei. Die Anlage entstand nach der Mandschu-Eroberung 1691, durch die die Chalcha-Mongolen unter die Herrschaft der Qing-Dynastie kamen. Architektonisch verbindet das Kloster chinesische, tibetische und mongolische Stilelemente. Während der stalinistischen Säuberungen 1937 wurden 10 der 28 Tempel zerstört, doch das Kerngelände überlebte. Nach der Demokratisierung 1990 begann eine umfassende Restaurierung mit UNESCO-Unterstützung. Heute ist Amarbajasgalant nach Erdene Dsuu das zweitwichtigste historische Kloster des Landes.",
        "facts": [
            "Errichtet zwischen 1727 und 1736.",
            "Auftraggeber Kaiser Yongzheng der Qing-Dynastie.",
            "Mandschu-Eroberung der Chalcha-Mongolei 1691.",
            "Mausoleum für Zanabazar (1635-1723).",
            "Name bedeutet 'Kloster der friedvollen Glückseligkeit'.",
            "10 von 28 Tempeln zerstört in den Säuberungen 1937.",
            "UNESCO-Restaurierung nach Demokratisierung 1990.",
            "Im Iven-Tal in Nord-Mongolei gelegen."
        ]
    },
    "mn-gandantegchinlen-history-v2": {
        "desc": "Das Gandantegtschinlen-Kloster wurde 1838 vom fünften Jebtsundamba Khutuktu in der damals kleinen Siedlung Urga (heute Ulaanbaatar) gegründet, in der späten Phase der mandschurischen Qing-Herrschaft. Mit der mongolischen Unabhängigkeitserklärung 1911 unter dem achten Bogd Khan und der späteren Volksrevolution 1921 wurde es zum geistlichen Zentrum des Landes. Während der stalinistischen Säuberungen 1937 unter Khorloogiin Choibalsan wurden über 700 Klöster zerstört und tausende Mönche ermordet; Gandan war die einzige Anlage, die ab 1944 als Schaufenster für ausländische Gäste teilweise geöffnet blieb. Die 26 Meter hohe Migjid-Janraisig-Statue wurde 1938 von Sowjet-Truppen eingeschmolzen und nach der Demokratisierung 1990 mit Spenden 1996 neu errichtet.",
        "facts": [
            "Gegründet 1838 vom fünften Jebtsundamba Khutuktu.",
            "Einzige funktionsfähige Klosteranlage ab 1944.",
            "Originalstatue 1938 von Sowjet-Truppen eingeschmolzen.",
            "Heutige 26-Meter-Statue 1996 wieder errichtet.",
            "Über 700 Klöster zerstört in den Säuberungen 1937.",
            "Mongolische Unabhängigkeitserklärung 1911.",
            "Volksrevolution 1921 unter Sowjet-Einfluss.",
            "Vollständige Wiederbelebung nach Demokratisierung 1990."
        ]
    },
    "mn-genghis-khan-statue-history-v2": {
        "desc": "Das 40 Meter hohe Dschingis-Khan-Reiterstandbild in Tsonjin Boldog wurde 2008 zum 800-jährigen Jubiläum der Reichsgründung Dschingis Khans 1206 eingeweiht. Es ist die größte Reiterstatue der Welt und steht der Legende nach an dem Ort, an dem der junge Temüdschin als Kind eine goldene Peitsche fand. Während der mandschurischen Qing-Herrschaft nach 1691 und besonders unter Sowjet-Einfluss seit 1921 war die Verehrung Dschingis Khans verboten, da das Regime in ihm einen feudalen Imperialisten sah. Nach der Demokratisierung 1990 erlebte sein Andenken eine massive Renaissance: Banknoten, Wodkamarken und schließlich diese gewaltige Skulptur entstanden. Im Sockel befindet sich ein Museum zur Geschichte der Mongolen vom Hunnenreich über die Yuan-Dynastie 1271 bis heute.",
        "facts": [
            "Eingeweiht 2008 zum 800. Jubiläum der Reichsgründung 1206.",
            "Größte Reiterstatue der Welt mit 40 Metern Höhe.",
            "Aus 250 Tonnen rostfreiem Edelstahl gefertigt.",
            "Verehrung Dschingis Khans unter Sowjet-Einfluss verboten.",
            "Renaissance nach der Demokratisierung 1990.",
            "Aussichtsdeck auf dem Pferdekopf des Reiters.",
            "Im Sockel Museum von der Hunnenzeit bis Yuan-Dynastie.",
            "Errichtet auf privater Initiative für 4,1 Mio. USD."
        ]
    },
    "mn-choijin-lama-history-v2": {
        "desc": "Der Tschoidschin-Lama-Tempel wurde zwischen 1904 und 1908 in Urga (Ulaanbaatar) für Luvsanhaidav errichtet, den Staatsorakel-Lama und jüngeren Bruder des achten Bogd Khan. Der Bau fiel in die Spätphase der mandschurischen Qing-Herrschaft und in die Vorbereitungszeit der mongolischen Unabhängigkeitserklärung von 1911. Nach der Volksrevolution 1921 und dem Beginn des Sowjet-Einflusses wurden religiöse Praktiken unterdrückt, doch der Tempel überlebte die stalinistischen Säuberungen 1937 nur deshalb, weil er 1942 in ein Antireligionsmuseum umgewandelt wurde. Diese ironische Rettung bewahrte einzigartige Tsam-Tanzmasken, Thangka-Malereien und Skulpturen des Bildhauer-Heiligen Zanabazar. Nach der Demokratisierung 1990 wurde er offiziell zum Kunstmuseum.",
        "facts": [
            "Erbaut zwischen 1904 und 1908.",
            "Geweiht dem Staatsorakel-Lama Luvsanhaidav.",
            "Bruder des achten Bogd Khan, der ab 1911 herrschte.",
            "Mongolische Unabhängigkeit erklärt im Jahr 1911.",
            "Volksrevolution 1921 unter sowjetischer Anleitung.",
            "1942 zum Antireligionsmuseum umgewandelt.",
            "Bewahrte einzigartige Tsam-Tanzmasken vor 1937.",
            "Offizielles Kunstmuseum nach Demokratisierung 1990."
        ]
    },
    "mn-khoshoo-tsaidam-history-v2": {
        "desc": "Die Chöschöö-Tsaidam-Denkmäler im Orchon-Tal sind die ältesten erhaltenen Schriftzeugnisse einer Türksprache und stammen aus den Jahren 732 und 735 n. Chr., aus der Zeit des Zweiten Türk-Khaganats (682-744). Sie wurden zu Ehren des Prinzen Kül Tegin und seines Bruders, des Khagans Bilge, errichtet, die das Reich nach 716 stabilisierten. Die Stelen tragen Inschriften in alttürkischer Runenschrift und chinesischer Schrift. Sie wurden 1889 vom russischen Forscher Nikolai Jadrintsew wiederentdeckt, 1893 vom dänischen Linguisten Vilhelm Thomsen entziffert. Lange vor der Reichsgründung Dschingis Khans 1206, der Yuan-Dynastie 1271, der Mandschu-Eroberung 1691, dem Sowjet-Einfluss ab 1921 und der Demokratisierung 1990 prägten diese Türken die Steppenkultur Zentralasiens.",
        "facts": [
            "Stelen aus den Jahren 732 und 735 n. Chr.",
            "Errichtet im Zweiten Türk-Khaganat (682-744).",
            "Geweiht Kül Tegin und Khagan Bilge.",
            "Älteste Schriftzeugnisse einer Türksprache.",
            "Inschriften in alttürkischen Runen und Chinesisch.",
            "Wiederentdeckt 1889 durch Nikolai Jadrintsew.",
            "Entziffert 1893 von Vilhelm Thomsen.",
            "Teil des UNESCO-Welterbes Orchon-Tal."
        ]
    },
    "mn-manzushir-history-v2": {
        "desc": "Das Mandschuschir-Kloster wurde 1733 in den Bergen des Bogd Khan Uul gegründet, kurz nach der Mandschu-Eroberung von 1691, die die Chalcha-Mongolen unter Qing-Herrschaft brachte. In seiner Blütezeit im 19. Jahrhundert beherbergte es über 20 Tempel und 300 Mönche. Während der stalinistischen Säuberungen 1937 unter Khorloogiin Choibalsan, ausgelöst durch den Einfluss Sowjets seit 1921 und die Mongolische Volksrepublik 1924, wurde das Kloster fast vollständig zerstört, viele Mönche erschossen oder deportiert. Übrig blieben Grundmauern und ein bronzener Kessel von 1726, der 2 Tonnen wiegt. Nach der Demokratisierung 1990 wurde ein kleines Museum errichtet, das die Tragödie der buddhistischen Säuberungen dokumentiert. Bogd Khan Uul gilt als einer der ältesten Schutzgebiete der Welt seit 1778.",
        "facts": [
            "Gegründet 1733 nach Mandschu-Eroberung 1691.",
            "In Blütezeit über 20 Tempel und 300 Mönche.",
            "Zerstört in stalinistischen Säuberungen 1937.",
            "Mönche erschossen oder in Gulags deportiert.",
            "Bronzekessel von 1726 (2 Tonnen) erhalten.",
            "Bogd Khan Uul Naturschutzgebiet seit 1778.",
            "Museum eröffnet nach Demokratisierung 1990.",
            "Säuberungen ausgelöst durch Sowjet-Einfluss ab 1921."
        ]
    },
    "mn-ongi-history-v2": {
        "desc": "Das Ongiin-Chiid in der Wüste Gobi wurde 1660 als Doppelkomplex zu beiden Seiten des Ongi-Flusses gegründet, in einer Zeit politischer Umbrüche zwischen dem Zerfall der Yuan-Dynastie nach 1368 und der Mandschu-Eroberung 1691. Im 19. Jahrhundert war es eines der größten buddhistischen Zentren der Mongolei mit über 30 Tempeln und tausenden Mönchen. 1939 wurde es während der stalinistischen Säuberungen unter Marschall Khorloogiin Choibalsan vollständig zerstört, über 200 hochrangige Lamas wurden ermordet. Diese Welle von Repressionen war direkte Folge der Mongolischen Volksrevolution 1921 und des wachsenden Sowjet-Einflusses. Nach der Demokratisierung 1990 begannen einige überlebende Mönche und ihre Schüler mit dem schrittweisen Wiederaufbau eines kleinen Tempels.",
        "facts": [
            "Gegründet im Jahr 1660 als Doppelkomplex.",
            "Lag auf beiden Seiten des Ongi-Flusses.",
            "Im 19. Jahrhundert über 30 Tempel.",
            "Vollständig zerstört im Jahr 1939.",
            "Über 200 Lamas ermordet während der Säuberungen.",
            "Choibalsan war damals Marschall der Mongolei.",
            "Repressionen folgten Volksrevolution 1921.",
            "Wiederaufbau ab Demokratisierung 1990."
        ]
    },
    "mn-baldan-bereeven-history-v2": {
        "desc": "Das Baldan-Brijun-Kloster in der Khentii-Provinz wurde ab 1777 in den bewaldeten Bergen des Burkhan-Khaldun-Massivs erbaut, der heiligen Region, in der Dschingis Khan 1162 geboren wurde und nach seinem Tod 1227 vermutlich begraben liegt. Unter mandschurischer Qing-Herrschaft (seit der Eroberung 1691) entwickelte es sich zu einem der drei größten Klöster der Mongolei mit etwa 8.000 Mönchen. Die stalinistischen Säuberungen 1937 unter Choibalsan, ausgelöst durch die Volksrevolution 1921 und den Sowjet-Einfluss, brannten den Komplex nieder, die Mönche wurden erschossen oder in Sibirien interniert. Erst nach der Demokratisierung 1990 begann ein langsames internationales Restaurierungsprojekt, das die mit buddhistischen Felsgravuren bedeckten umliegenden Klippen schützt.",
        "facts": [
            "Hauptbau begonnen im Jahr 1777.",
            "In der Burkhan-Khaldun-Region (Geburtsort Dschingis Khans 1162).",
            "Eines der drei größten Klöster der Mongolei.",
            "Bis zu 8.000 Mönche in der Blütezeit.",
            "Niedergebrannt in den Säuberungen 1937.",
            "Säuberungen unter Marschall Choibalsan.",
            "Buddhistische Felsgravuren in den umliegenden Klippen.",
            "Internationales Restaurierungsprojekt seit 1990."
        ]
    },
    "mn-khamariin-khiid-history-v2": {
        "desc": "Das Chamariin-Chiid in der Wüste Gobi wurde 1820 vom exzentrischen fünften Noyon Khutugtu, Dichter und Sufi-Mystiker Danzanravjaa (1803-1856), gegründet. Er war eine der schillerndsten Figuren der mongolischen Geistesgeschichte des 19. Jahrhunderts unter Mandschu-Qing-Herrschaft, gründete die erste öffentliche Schule und das erste Theater der Mongolei und schrieb Theaterstücke in mongolischer und tibetischer Sprache. Die Mongolen verehren den Ort als 'Tor nach Sambhala', dem mythischen reinen Land des Buddhismus. 1938 wurde das Kloster während der stalinistischen Säuberungen, die durch Sowjet-Einfluss seit 1921 und die Mongolische Volksrepublik 1924 ausgelöst wurden, vollständig zerstört. Nach der Demokratisierung 1990 bauten überlebende Schüler aus dem Gedächtnis das Kloster detailgetreu wieder auf.",
        "facts": [
            "Gegründet im Jahr 1820 von Danzanravjaa.",
            "Danzanravjaa lebte von 1803 bis 1856.",
            "Erste öffentliche Schule der Mongolei.",
            "Erstes mongolisches Theater entstand hier.",
            "Verehrt als 'Tor nach Sambhala'.",
            "Vollständig zerstört im Jahr 1938.",
            "Säuberungen ausgelöst durch Sowjet-Einfluss seit 1921.",
            "Wiederaufbau aus dem Gedächtnis nach 1990."
        ]
    },
    "mn-khalkh-gol-history-v2": {
        "desc": "Die Schlacht am Chalchin Gol von Mai bis September 1939 war ein Wendepunkt des Zweiten Weltkriegs in Asien. Sowjetische und mongolische Truppen unter dem damals noch unbekannten Generalleutnant Georgi Schukow vernichteten die japanische 6. Armee an der mandschurisch-mongolischen Grenze. Diese Schlacht überzeugte das japanische Kaiserreich, statt einer Nordexpansion gegen die UdSSR den Pazifikkrieg gegen die USA zu eröffnen. Die mongolische Beteiligung war Folge der Mongolischen Volksrepublik von 1924 unter Sowjet-Einfluss seit 1921. Schukow wurde durch diesen Sieg berühmt und führte später die Sowjetarmee bei der Schlacht um Berlin 1945. Auf dem unberührten Steppenschlachtfeld liegen bis heute Schützengräben und Panzerwracks. Nach der Demokratisierung 1990 wurden gemeinsame mongolisch-russische Gedenkveranstaltungen institutionalisiert.",
        "facts": [
            "Schlacht dauerte von Mai bis September 1939.",
            "Sowjetisch-mongolische Allianz seit Volksrepublik 1924.",
            "Befehlshaber Georgi Schukow (später Held von Berlin).",
            "Vernichtung der japanischen 6. Armee.",
            "Verhinderte japanischen Angriff auf die UdSSR.",
            "Lenkte Japan in den Pazifikkrieg gegen die USA.",
            "Schützengräben und Panzerwracks bis heute sichtbar.",
            "Gedenken institutionalisiert nach Demokratisierung 1990."
        ]
    },
    "mn-bogd-khan-palace-history-v2": {
        "desc": "Das Bogd-Khan-Palastmuseum diente von 1903 bis 1924 als Winterresidenz des achten Jebtsundamba Khutuktu, des letzten theokratischen Herrschers der Mongolei. Bogd Khan war 1911 nach dem Zerfall der mandschurischen Qing-Dynastie zum Großkhan der unabhängigen Mongolei ausgerufen worden, regierte das Land aber unter chinesischer und später russischer Einflussnahme. Nach der Volksrevolution 1921, die mit sowjetischer Unterstützung den Boden für die Mongolische Volksrepublik 1924 bereitete, starb der Bogd Khan; die Theokratie wurde abgeschafft. Sein Sommerpalast wurde während der stalinistischen Säuberungen 1937 zerstört, doch der Winterpalast überlebte als Museum. Nach der Demokratisierung 1990 wurde er restauriert und zeigt heute persönliche Gegenstände des Khans, einschließlich seines Leopardenfell-Zeltes.",
        "facts": [
            "Erbaut zwischen 1893 und 1903.",
            "Bogd Khan zum Großkhan ausgerufen 1911.",
            "Nach Zerfall der mandschurischen Qing-Dynastie unabhängig.",
            "Bogd Khan starb 1924 nach Volksrevolution 1921.",
            "Sommerpalast 1937 zerstört, Winterpalast überlebte.",
            "Mongolische Volksrepublik gegründet 1924.",
            "Sechs reich verzierte Tempel auf dem Gelände.",
            "Restauriert nach Demokratisierung 1990."
        ]
    },
    "mn-tovkhon-history-v2": {
        "desc": "Das Töwchön-Kloster auf einem Berggipfel des Khangai-Gebirges wurde 1654 vom 14-jährigen Zanabazar (1635-1723) gegründet, dem ersten Bogd Gegen und Urenkel Dschingis Khans. Hier zog er sich zur Meditation zurück und entwickelte 1686 die Sojombo-Schrift, deren Hauptsymbol noch heute auf der mongolischen Nationalflagge prangt. Zanabazar war zugleich der bedeutendste Bildhauer und Maler der mongolischen Kunstgeschichte und prägte die geistliche Verbindung zur tibetischen Gelug-Schule. Trotz Mandschu-Eroberung 1691 und späteren politischen Wirren blieb das Kloster aktiv. Während der stalinistischen Säuberungen 1937, ausgelöst durch Sowjet-Einfluss seit 1921, wurde es schwer beschädigt, doch durch seine abgelegene Lage entgingen einige Holzbauten der Zerstörung. Seit der Demokratisierung 1990 wieder aktiv und seit 2004 Teil des UNESCO-Welterbes Orchon-Tal.",
        "facts": [
            "Gegründet im Jahr 1654 vom jungen Zanabazar.",
            "Zanabazar lebte von 1635 bis 1723.",
            "Sojombo-Schrift hier 1686 entwickelt.",
            "Sojombo-Symbol auf der Nationalflagge.",
            "Zanabazar war Urenkel Dschingis Khans.",
            "Beschädigt in stalinistischen Säuberungen 1937.",
            "Abgeschiedenheit rettete Holzbauten.",
            "UNESCO-Welterbe seit 2004."
        ]
    },
    "mn-sangiin-kherem-history-v2": {
        "desc": "Die Festung Sangiin Kherem wurde 1762 von der mandschurischen Qing-Dynastie nach der Mandschu-Eroberung der Chalcha-Mongolei 1691 in Chowd errichtet, um die westmongolischen Gebiete und die Grenze zum dsungarischen Khanat zu sichern. Die ursprünglich vier Meter dicken Lehmziegelmauern bildeten einen quadratischen Komplex mit Garnisonen, Verwaltungsgebäuden und Tempeln. Mit der mongolischen Unabhängigkeitserklärung 1911 nach dem Zerfall der Qing-Dynastie kam es 1912 zu einer Belagerung der mandschurischen Garnison durch mongolische Truppen unter Magsarjav und Dambiidsantsan, die zur Befreiung Chowds führte. Nach der Volksrevolution 1921 und dem Sowjet-Einfluss verfiel die Festung; in der Mongolischen Volksrepublik nach 1924 wurde sie als Symbol der mandschurischen Fremdherrschaft nicht restauriert. Heute sind nur noch erodierte Lehmwälle sichtbar.",
        "facts": [
            "Erbaut im Jahr 1762 von der Qing-Dynastie.",
            "Mandschu-Eroberung der Chalcha-Mongolei 1691.",
            "Ursprünglich vier Meter dicke Lehmmauern.",
            "Befreiung 1912 nach Unabhängigkeitserklärung 1911.",
            "Anführer Magsarjav und Dambiidsantsan.",
            "Verfall ab der Volksrevolution 1921.",
            "In Volksrepublik ab 1924 nicht restauriert.",
            "Heute nur erodierte Lehmwälle erhalten."
        ]
    },
    "mn-uushigiin-uvur-history-v2": {
        "desc": "Die Hirschsteine von Uuschigiin Uwur in der Provinz Chöwsgöl gehören mit ihren etwa 3.000 Jahren (spätes 2. Jahrtausend v. Chr.) zu den ältesten Monumenten der Mongolei, lange vor dem Aufstieg der Hunnen, dem türkischen Khaganat des 7. Jahrhunderts und der Reichsgründung Dschingis Khans 1206. Die 14 stehenden Megalithen sind mit fliegenden, stilisierten Hirschen verziert, die schamanistische Reisen ins Jenseits symbolisieren. Sie markieren wahrscheinlich Begräbnisstätten bronzezeitlicher Häuptlinge und sind Teil der eurasischen 'Hirschstein-Kuhulturen'-Tradition. Während der mandschurischen Qing-Herrschaft nach 1691 und im Sowjet-Einfluss seit 1921 wurden sie wenig erforscht. Nach der Demokratisierung 1990 begannen internationale archäologische Projekte, und 2023 wurde der Komplex als 'Hirschstein-Monumente und damit verbundene Stätten' in die UNESCO-Welterbeliste aufgenommen.",
        "facts": [
            "Etwa 3.000 Jahre alt (spätes 2. Jt. v. Chr.).",
            "14 stehende Megalithen am Komplex.",
            "Stilisierte Hirsche symbolisieren Schamanenreisen.",
            "Markieren bronzezeitliche Begräbnisstätten.",
            "Ein Stein zeigt seltenes menschliches Antlitz.",
            "Internationale Forschung erst nach 1990.",
            "UNESCO-Welterbe seit dem Jahr 2023.",
            "Älter als Hunnen, Türk-Reich und Dschingis Khan 1206."
        ]
    },
    "mn-altai-petroglyphs-history-v2": {
        "desc": "Die Petroglyphen des mongolischen Altai dokumentieren über 12.000 Jahre menschliche Kulturgeschichte in der äußersten Westmongolei und gehören zu den umfangreichsten prähistorischen Felskunst-Galerien der Welt. Die ältesten Bilder aus dem späten Pleistozän zeigen Mammuts und Wollnashörner, Tiere, die im Holozän ausstarben. Spätere Bronzezeit-Darstellungen zeigen Reiter, Streitwagen und domestizierte Pferde, die Vorläufer der späteren Steppenkulturen waren – der Skythen, Hunnen, Türken und schließlich der Mongolen Dschingis Khans nach 1206. Während der Yuan-Dynastie 1271, der Mandschu-Eroberung 1691 und des Sowjet-Einflusses seit 1921 blieben die Felsbilder weitgehend unbeachtet. Nach der Demokratisierung 1990 begann eine systematische Forschung, und 2011 wurden sie als UNESCO-Welterbe geschützt.",
        "facts": [
            "Dokumentieren über 12.000 Jahre Kulturgeschichte.",
            "Älteste Zeichnungen zeigen Mammuts und Nashörner.",
            "Drei Haupttäler im äußersten Westen der Mongolei.",
            "Bronzezeit-Bilder zeigen Pferde und Streitwagen.",
            "Zeigen Übergang von Jägern zu Nomaden.",
            "Vorläufer der Skythen-, Hunnen- und Türk-Kulturen.",
            "UNESCO-Welterbe seit dem Jahr 2011.",
            "Systematische Forschung ab Demokratisierung 1990."
        ]
    },
    "mn-demchig-history-v2": {
        "desc": "Das Demtschig-Kloster in der Provinz Ömnö-Gobi wurde im 19. Jahrhundert vom Sufi-Dichter Danzanravjaa (1803-1856), dem fünften Noyon Khutugtu, auf einem natürlichen roten Granitplateau gegründet. Er entwarf die ungewöhnliche, lotosförmige Architektur mit 16 separaten Gebäuden symbolisch für die buddhistische Lotus-Mandala-Geometrie. Während der mandschurischen Qing-Herrschaft seit 1691 war es ein wichtiger Ort der Volksfrömmigkeit. Während der stalinistischen Säuberungen 1938, ausgelöst durch die Volksrevolution 1921 und den Sowjet-Einfluss in der Mongolischen Volksrepublik (1924), wurde der Komplex von Choibalsans Truppen vollständig zerstört, viele Mönche ermordet. Nach der Demokratisierung 1990 wurde die zentrale Stupa mit Hilfe lokaler Spender wieder aufgebaut, der größere Komplex bleibt eine Ruine in der Wüste.",
        "facts": [
            "Gegründet im 19. Jahrhundert von Danzanravjaa.",
            "Auf natürlichem roten Granitplateau errichtet.",
            "Lotosförmige Architektur mit 16 Gebäuden.",
            "Wichtiger Ort der Gobi-Volksfrömmigkeit.",
            "Vollständig zerstört im Jahr 1938.",
            "Säuberungen unter Marschall Choibalsan.",
            "Volksrevolution 1921 leitete Repressionen ein.",
            "Zentrale Stupa wiederaufgebaut nach 1990."
        ]
    },
    "mn-tsogt-taij-history-v2": {
        "desc": "Die Burg Tsogtyn Tsagaan Baishing wurde 1601 von Tsogt Taidsch (1581-1637) erbaut, einem Nachfahren Dschingis Khans über die Linie Dayan Khans und einer der letzten unabhängigen mongolischen Adligen vor der Mandschu-Eroberung 1691. Tsogt Taidsch war zugleich Krieger und Lyriker; sein in Felsen gemeißeltes Gedicht von 1621 ist das älteste erhaltene Beispiel klassischer mongolischer Poesie. Er kämpfte Seite an Seite mit Ligdan Khan, dem letzten Großkhan der nordmongolischen Chahar, gegen die Mandschus. Nach der Niederlage seines Sohnes Arsalan im Jahr 1637 zerfiel die Burg. Während der Yuan-erinnernden Mandschu-Qing-Periode, der Volksrevolution 1921 und des Sowjet-Einflusses verfiel sie weiter; nach der Demokratisierung 1990 wurde sie als Nationalsymbol mongolischer Unabhängigkeit anerkannt.",
        "facts": [
            "Erbaut im Jahr 1601 von Tsogt Taidsch.",
            "Tsogt Taidsch lebte von 1581 bis 1637.",
            "Nachfahre Dschingis Khans über Dayan Khan.",
            "Berühmtestes Gedicht in Fels gemeißelt 1621.",
            "Verbündeter Ligdan Khans gegen die Mandschus.",
            "Zerfall nach Niederlage seines Sohnes 1637.",
            "Mandschu-Eroberung der Chalcha-Mongolei 1691.",
            "Nationalsymbol nach Demokratisierung 1990."
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
        id_re = re.compile(r'(\{\s*\n\s*id:\s*"' + re.escape(poi_id) + r'")')
        m = id_re.search(src)
        if not m:
            skipped.append(f"{poi_id}: id not found")
            continue
        start = m.start()
        rest = src[m.end():]
        next_id = re.search(r'\n\s*\{\s*\n\s*id:\s*"', rest)
        end = m.end() + (next_id.start() if next_id else len(rest))
        block = src[start:end]

        if re.search(r'descriptionAdvanced\s*:\s*\{[^}]*\bde\s*:\s*"[^"]+"', block):
            skipped.append(f"{poi_id}: de already exists")
            continue

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
        facts_close_idx = i

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
