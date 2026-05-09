#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Fill descriptionAdvanced.de + factsAdvanced.de for Thailand cities POIs
with concrete factual German content (no template).
"""
import re
import json
from pathlib import Path

FILE = Path(__file__).resolve().parent.parent / "lib" / "visualLab" / "data" / "poiExtraThailandCitiesV2.ts"

DATA = {
    "bangkok-cities-v2": {
        "desc": "Bangkok, auf Thai Krung Thep Mahanakhon, ist seit 1782 die Hauptstadt des Königreichs Thailand und wurde von König Rama I. nach dem Fall Ayutthayas am Ostufer des Chao Phraya gegründet. Die Metropolregion zählt rund 10,7 Millionen Einwohner und bildet das wirtschaftliche Herz des Landes. Bekannte Wahrzeichen sind der Große Palast, der Wat Phra Kaeo mit dem Smaragd-Buddha sowie der Wat Pho mit dem 46 Meter langen liegenden Buddha. Bangkok ist als einzige südostasiatische Hauptstadt nie eine europäische Kolonie gewesen und vereint Tempel, Khlongs und moderne Wolkenkratzer.",
        "facts": [
            "Gegründet 1782 von König Rama I. der Chakri-Dynastie.",
            "Der zeremonielle Name Krung Thep Mahanakhon ist mit 168 Buchstaben einer der längsten Ortsnamen der Welt.",
            "Die Metropolregion hat etwa 10,7 Millionen Einwohner.",
            "Wat Pho beherbergt den 46 Meter langen vergoldeten liegenden Buddha.",
            "Der Chao Phraya durchquert die Stadt und prägt das Khlong-Kanalnetz.",
            "Thailand war als einziges südostasiatisches Land nie europäische Kolonie.",
            "Der internationale Flughafen Suvarnabhumi gehört zu den verkehrsreichsten Asiens.",
            "Sitz des thailändischen Königs und der Regierung des Königreichs Siam, heute Thailand."
        ],
    },
    "chiang-mai-cities-v2": {
        "desc": "Chiang Mai wurde 1296 von König Mangrai als Hauptstadt des Lan-Na-Königreichs gegründet und liegt rund 700 Kilometer nördlich von Bangkok am Fluss Ping. Die von einer quadratischen Stadtmauer und Wassergraben umgebene Altstadt beherbergt mehr als 300 buddhistische Tempel, darunter Wat Phra Singh und Wat Chedi Luang aus dem 14. Jahrhundert. Mit etwa 130.000 Einwohnern in der Kernstadt und 1,2 Millionen in der Provinz ist sie das kulturelle Zentrum Nordthailands. Der nahegelegene Doi Suthep mit seinem goldenen Tempel überragt die Stadt auf 1.676 Metern Höhe.",
        "facts": [
            "Gegründet 1296 von König Mangrai als Hauptstadt von Lan Na.",
            "Die quadratische Altstadt misst etwa 1,5 mal 1,5 Kilometer.",
            "Über 300 Wat-Tempel innerhalb und außerhalb der Mauern.",
            "Wat Chedi Luang stammt aus dem Jahr 1391.",
            "Der Doi Suthep ragt 1.676 Meter über die Stadt.",
            "Bekannt für das jährliche Loi-Krathong- und Yi-Peng-Lichterfest.",
            "Liegt im Lan-Na-Kulturraum mit eigenem Dialekt und Schrift.",
            "Wurde 1939 zusammen mit Siam in Thailand umbenannt."
        ],
    },
    "phuket-city-cities-v2": {
        "desc": "Phuket-Stadt ist die Hauptstadt der gleichnamigen Insel an der Andamanenküste Südthailands und zählt rund 80.000 Einwohner. Die Insel Phuket selbst misst 543 Quadratkilometer und ist damit Thailands größte Insel. Im 19. Jahrhundert wurde die Stadt durch chinesische Zinnminen-Arbeiter geprägt, was die heute denkmalgeschützte sino-portugiesische Altstadt mit ihren bunten Shophouses entlang der Thalang Road erklärt. Phuket war Teil des Königreichs Siam und nie europäische Kolonie. Die Provinz erlebte am 26. Dezember 2004 schwere Schäden durch den Indischen-Ozean-Tsunami.",
        "facts": [
            "Hauptstadt der Insel Phuket mit etwa 80.000 Einwohnern.",
            "Die Insel ist mit 543 Quadratkilometern Thailands größte.",
            "Sino-portugiesische Architektur stammt aus dem 19. Jahrhundert.",
            "Der frühere Reichtum gründete auf Zinnminen.",
            "Liegt an der Andamanenküste, etwa 862 Kilometer südlich Bangkoks.",
            "Wurde 2004 vom Tsunami im Indischen Ozean schwer getroffen.",
            "Über die Sarasin-Brücke mit dem Festland verbunden.",
            "Veranstaltet jährlich das vegetarische Festival im Oktober."
        ],
    },
    "pattaya-cities-v2": {
        "desc": "Pattaya liegt etwa 150 Kilometer südöstlich von Bangkok an der Ostküste des Golfs von Thailand in der Provinz Chonburi. Aus einem Fischerdorf entwickelte sich der Ort ab 1959 zum Tourismuszentrum, als US-Soldaten während des Vietnamkriegs die Bucht als Erholungsgebiet nutzten. Heute hat Pattaya City rund 120.000 registrierte Einwohner, die tatsächliche Bevölkerung wird auf eine Million geschätzt. Die 4 Kilometer lange Pattaya Beach Road, der Sanctuary of Truth-Holzbau und die Koh Larn-Insel sind bekannte Wahrzeichen. Pattaya gehört zum thailändischen Königreich, war nie europäische Kolonie.",
        "facts": [
            "Liegt 150 Kilometer südöstlich von Bangkok in der Provinz Chonburi.",
            "Wuchs ab 1959 durch US-Militär-Erholungstourismus.",
            "Pattaya Beach ist etwa 4 Kilometer lang.",
            "Der Sanctuary of Truth ist ein 105 Meter hoher Holztempel.",
            "Registrierte Bevölkerung etwa 120.000.",
            "Insel Koh Larn liegt 7,5 Kilometer vor der Küste.",
            "Hat eigene Stadtverwaltung als Pattaya City seit 1978.",
            "Veranstaltet das jährliche Pattaya International Music Festival."
        ],
    },
    "nonthaburi-cities-v2": {
        "desc": "Nonthaburi liegt direkt nördlich von Bangkok am Westufer des Chao Phraya und bildet eine durchgehende Agglomeration mit der Hauptstadt. Mit rund 270.000 Einwohnern in der Stadt und 1,2 Millionen in der Provinz ist Nonthaburi nach Bangkok die zweitgrößte Stadt Thailands. Die Provinz wurde 1549 während der Ayutthaya-Periode unter König Maha Chakkraphat gegründet. Bekannt ist die Stadt für ihre traditionellen Durianplantagen auf der Flussinsel Ko Kret, wo eine Mon-Minderheit bis heute Tonkeramik herstellt. Das Provinzrathaus von 1910 gilt als bemerkenswertes Holzgebäude.",
        "facts": [
            "Etwa 270.000 Einwohner, zweitgrößte Stadt Thailands.",
            "Provinz 1549 unter König Maha Chakkraphat gegründet.",
            "Liegt am Chao Phraya direkt nördlich Bangkoks.",
            "Mon-Minderheit auf Ko Kret stellt Töpferwaren her.",
            "Berühmt für Nonthaburi-Durianplantagen.",
            "Das alte Rathaus aus Teakholz stammt aus dem Jahr 1910.",
            "Über die Purple-Line-Metrolinie an Bangkok angebunden.",
            "Teil des Bangkok Metropolitan Region Verbundes."
        ],
    },
    "udon-thani-cities-v2": {
        "desc": "Udon Thani ist mit rund 400.000 Einwohnern in der Agglomeration die größte Stadt im Nordosten Thailands, der Region Isaan. Die heutige Stadt wurde 1893 von Prinz Prachak Sinlapakhom als Militärposten gegründet, um der französischen Expansion am Mekong zu begegnen. Während des Vietnamkriegs zwischen 1964 und 1976 betrieb die US-Luftwaffe hier eine wichtige Basis. In der Nähe liegt das UNESCO-Welterbe Ban Chiang, eine bronzezeitliche Siedlung, deren Funde bis 3600 vor Christus datieren. Auch der Rote Lotussee Nong Han mit seiner morgendlichen Blüte gehört zu den Sehenswürdigkeiten.",
        "facts": [
            "Größte Stadt im Isaan, etwa 400.000 Einwohner Agglomeration.",
            "Gegründet 1893 von Prinz Prachak Sinlapakhom.",
            "US-Luftwaffenbasis 1964 bis 1976 während des Vietnamkriegs.",
            "Ban Chiang in der Provinz ist UNESCO-Welterbe.",
            "Funde aus Ban Chiang reichen bis 3600 vor Christus.",
            "Der Rote Lotussee Nong Han blüht von Dezember bis Februar.",
            "Liegt 564 Kilometer nordöstlich Bangkoks.",
            "Wichtiger Eisenbahnknoten Richtung Nong Khai und Laos."
        ],
    },
    "nakhon-ratchasima-cities-v2": {
        "desc": "Nakhon Ratchasima, kurz Korat, ist das Tor zum Khorat-Plateau und mit etwa 175.000 Einwohnern in der Stadtgemeinde sowie 2,6 Millionen in der Provinz die größte Provinz Thailands nach Fläche. Die Stadt wurde 1656 unter König Narai von Ayutthaya als Festung gegen das Khmer-Reich gegründet. Berühmt ist das Standbild der Heldin Thao Suranari, die 1826 die Stadt gegen laotische Truppen verteidigte. Im nahen Phimai Historical Park steht ein Khmer-Tempel aus dem 11. Jahrhundert, ein Vorläufer von Angkor Wat. Korat ist nie europäische Kolonie gewesen.",
        "facts": [
            "Größte Provinz Thailands mit 20.494 Quadratkilometern.",
            "Stadt gegründet 1656 unter König Narai von Ayutthaya.",
            "Etwa 175.000 Einwohner in der Stadtgemeinde.",
            "Die Heldin Thao Suranari verteidigte die Stadt 1826.",
            "Phimai-Tempel aus dem 11. Jahrhundert in der Provinz.",
            "Tor zum Khorat-Plateau auf 187 Metern Höhe.",
            "Wichtiger Eisenbahnknoten der Nordostlinie.",
            "Spitzname Korat geht auf Khmer-Sprachwurzeln zurück."
        ],
    },
    "hat-yai-cities-v2": {
        "desc": "Hat Yai ist mit rund 160.000 Einwohnern die größte Stadt der Provinz Songkhla und das Wirtschaftszentrum Südthailands, etwa 50 Kilometer von der malaysischen Grenze entfernt. Die Stadt entstand erst 1909 als Eisenbahnknotenpunkt der Linie Bangkok-Butterworth und wuchs dadurch rasant. Mit großem chinesischstämmigen Bevölkerungsanteil und vielen muslimischen Bewohnern aus Yala und Pattani bildet Hat Yai einen multikulturellen Schmelztiegel. Bekannt ist der 19,9 Meter hohe Stehende Buddha im Hat-Yai-Park sowie die zahlreichen Märkte. Hat Yai blieb als Teil Siams nie europäische Kolonie.",
        "facts": [
            "Größte Stadt Südthailands mit etwa 160.000 Einwohnern.",
            "Entstand 1909 als Eisenbahnknotenpunkt.",
            "Liegt 50 Kilometer nördlich der malaysischen Grenze.",
            "Multikulturelles Zentrum mit thailändisch-chinesisch-muslimischer Bevölkerung.",
            "19,9 Meter hoher Stehender Buddha im Hat-Yai-Park.",
            "Wirtschaftszentrum mit Verbindungen nach Kuala Lumpur und Penang.",
            "Endpunkt der südlichen Eisenbahnlinie aus Bangkok.",
            "Provinz Songkhla, etwa 950 Kilometer südlich Bangkoks."
        ],
    },
    "ayutthaya-cities-v2": {
        "desc": "Ayutthaya wurde 1351 von König U-Thong gegründet und war bis 1767 die Hauptstadt des gleichnamigen siamesischen Königreichs. Auf einer Insel zwischen Chao Phraya, Pa Sak und Lopburi gelegen, beherbergte die Stadt im 17. Jahrhundert mit rund einer Million Einwohnern eine der größten Metropolen der Welt. 1767 wurde Ayutthaya von burmesischen Truppen zerstört, woraufhin die Hauptstadt nach Bangkok verlegt wurde. Die Tempelruinen von Wat Mahathat, Wat Phra Si Sanphet und Wat Chaiwatthanaram zählen seit 1991 zum UNESCO-Welterbe. Der berühmte Buddha-Kopf in Banyan-Wurzeln ist ein Wahrzeichen.",
        "facts": [
            "Gegründet 1351 von König U-Thong, Hauptstadt bis 1767.",
            "Im 17. Jahrhundert eine Millionenstadt, Weltmetropole.",
            "1767 von burmesischen Truppen zerstört.",
            "UNESCO-Welterbe seit 1991.",
            "Liegt auf einer Insel zwischen drei Flüssen.",
            "Wat Phra Si Sanphet war der königliche Tempel.",
            "Buddha-Kopf in Banyan-Wurzeln in Wat Mahathat.",
            "Etwa 80 Kilometer nördlich Bangkoks am Chao Phraya."
        ],
    },
    "khon-kaen-cities-v2": {
        "desc": "Khon Kaen liegt im Herzen des Isaan-Plateaus, rund 450 Kilometer nordöstlich von Bangkok, und ist mit etwa 115.000 Einwohnern in der Stadt und 1,8 Millionen in der Provinz das wirtschaftliche und akademische Zentrum Nordostthailands. Die heutige Stadt wurde 1797 gegründet. Die 1964 gegründete Khon-Kaen-Universität ist die wichtigste Hochschule der Region. Das Wahrzeichen Phra Mahathat Kaen Nakhon ist eine neunstöckige Pagode am See Bueng Kaen Nakhon. In der Provinz wurden zahlreiche Dinosaurierfunde gemacht, das Phu-Wiang-Nationalpark-Museum zeigt Skelette von Phuwiangosaurus aus der Kreidezeit.",
        "facts": [
            "Etwa 115.000 Einwohner in der Kernstadt, 1,8 Millionen Provinz.",
            "Stadt 1797 gegründet, liegt auf 187 Metern Höhe.",
            "Khon-Kaen-Universität gegründet 1964.",
            "Phra Mahathat Kaen Nakhon ist neun Stockwerke hoch.",
            "Dinosaurier-Funde aus der Kreidezeit in der Provinz.",
            "Phuwiangosaurus wurde nach Phu Wiang benannt.",
            "Wirtschaftszentrum für Reis, Zuckerrohr und Maniok.",
            "450 Kilometer nordöstlich Bangkoks im Isaan."
        ],
    },
    "surat-thani-cities-v2": {
        "desc": "Surat Thani, der Name bedeutet Stadt der guten Menschen, liegt an der Ostküste der südthailändischen Halbinsel an der Mündung des Tapi-Flusses in den Golf von Thailand. Die Stadt zählt etwa 130.000 Einwohner und ist Hauptstadt der gleichnamigen Provinz, die auch die Inseln Ko Samui, Ko Pha-ngan und Ko Tao umfasst. Die Region war im 8. bis 13. Jahrhundert Teil des Srivijaya-Reiches, dessen Spuren in Chaiya zu finden sind. Der Wat-Phra-Borommathat-Chaiya-Tempel stammt aus dem 13. Jahrhundert. Surat Thani war Teil Siams und nie europäische Kolonie.",
        "facts": [
            "Name bedeutet Stadt der guten Menschen auf Sanskrit-Pali.",
            "Etwa 130.000 Einwohner an der Mündung des Tapi.",
            "Provinz umfasst Ko Samui, Ko Pha-ngan und Ko Tao.",
            "Im 8. Jahrhundert Teil des Srivijaya-Reiches.",
            "Wat Phra Borommathat in Chaiya stammt aus dem 13. Jahrhundert.",
            "Wichtiger Fährhafen für die Inselgruppe Samui-Pha-ngan.",
            "651 Kilometer südlich Bangkoks auf der Halbinsel Malakka.",
            "Bekannt für die Affenausbildung zum Kokosnussernten."
        ],
    },
    "chiang-rai-cities-v2": {
        "desc": "Chiang Rai wurde 1262 von König Mangrai gegründet und war damit die erste Hauptstadt des Lan-Na-Königreichs, bevor sie 1296 nach Chiang Mai verlegt wurde. Die nördlichste Provinzhauptstadt Thailands liegt am Mae Kok auf 580 Metern Höhe und hat rund 70.000 Einwohner. Die Provinz grenzt an Myanmar und Laos und bildet einen Teil des Goldenen Dreiecks am Zusammenfluss von Mekong und Ruak. Berühmt sind der weiße Tempel Wat Rong Khun von Künstler Chalermchai Kositpipat aus 1997 sowie der Schwarze Tempel Baan Dam. Chiang Rai war Teil Siams und nie Kolonie.",
        "facts": [
            "Gegründet 1262 von König Mangrai, älter als Chiang Mai.",
            "Erste Hauptstadt des Lan-Na-Königreichs bis 1296.",
            "Nördlichste Provinzhauptstadt Thailands.",
            "Etwa 70.000 Einwohner auf 580 Metern Höhe.",
            "Wat Rong Khun, der Weiße Tempel, eröffnet 1997.",
            "Goldenes Dreieck am Mekong und Ruak.",
            "Grenzt an Myanmar und Laos.",
            "Heimat mehrerer Bergvölker wie Akha und Lahu."
        ],
    },
    "rayong-cities-v2": {
        "desc": "Rayong liegt rund 180 Kilometer südöstlich von Bangkok an der Ostküste des Golfs von Thailand und ist Hauptstadt der gleichnamigen Provinz mit etwa 60.000 Einwohnern in der Kernstadt. Die Provinz ist Teil des Eastern Economic Corridors und beherbergt mit Map Ta Phut einen der größten petrochemischen Industriekomplexe Südostasiens. Bekannt ist die Region für ihre Obstplantagen mit Durian, Rambutan und Mangostan. Vor der Küste liegt die Insel Ko Samet im Khao-Laem-Ya-Nationalpark. Der Dichter Sunthorn Phu, geboren 1786 in Rayong, gilt als bedeutendster Klassiker der thailändischen Literatur.",
        "facts": [
            "Etwa 60.000 Einwohner an der Ostküste des Golfs.",
            "Map Ta Phut, größter Petrochemiekomplex Südostasiens.",
            "Sunthorn Phu wurde 1786 in Rayong geboren.",
            "Bekannt für Durian, Rambutan und Mangostan.",
            "Insel Ko Samet im Khao-Laem-Ya-Nationalpark.",
            "Teil des Eastern Economic Corridors seit 2017.",
            "180 Kilometer südöstlich Bangkoks.",
            "Provinz ist mit 3.552 Quadratkilometern relativ klein."
        ],
    },
    "ubon-ratchathani-cities-v2": {
        "desc": "Ubon Ratchathani, der Name bedeutet königliche Lotosstadt, liegt im Osten des Isaan an der Mündung von Mun und Chi, rund 615 Kilometer nordöstlich Bangkoks. Die Stadt wurde 1792 gegründet und zählt heute etwa 80.000 Einwohner. Sie ist berühmt für das jährliche Kerzenfestival Ende Juli, bei dem riesige geschnitzte Bienenwachsskulpturen durch die Straßen getragen werden. Die Provinz grenzt an Laos und Kambodscha und beherbergt den Pha-Taem-Nationalpark mit prähistorischen Felsmalereien aus der Zeit um 3000 vor Christus sowie Wasserfälle wie Sam Pan Bok am Mekong.",
        "facts": [
            "Name bedeutet königliche Lotosstadt.",
            "Gegründet 1792, etwa 80.000 Einwohner.",
            "Kerzenfestival jährlich Ende Juli.",
            "Felsmalereien im Pha-Taem-Nationalpark, 3000 vor Christus.",
            "Liegt an der Mündung von Mun und Chi.",
            "Grenzt an Laos und Kambodscha.",
            "Sam Pan Bok wird Grand Canyon Thailands genannt.",
            "615 Kilometer nordöstlich Bangkoks im Isaan."
        ],
    },
    "nakhon-sawan-cities-v2": {
        "desc": "Nakhon Sawan, übersetzt himmlische Stadt, liegt strategisch am Zusammenfluss der vier Flüsse Ping, Wang, Yom und Nan, aus denen hier der Chao Phraya entsteht. Die Stadt zählt rund 90.000 Einwohner und ist Verkehrsknotenpunkt zwischen Zentral- und Nordthailand, etwa 240 Kilometer nördlich Bangkoks. Bedeutung erlangte Nakhon Sawan im 19. Jahrhundert als Handelsplatz für Teakholz aus dem Norden. Die thailändisch-chinesische Bevölkerung feiert hier das größte chinesische Neujahrsfest des Landes mit einer berühmten Drachen- und Löwentanzparade, die seit über 100 Jahren stattfindet.",
        "facts": [
            "Name bedeutet himmlische Stadt.",
            "Etwa 90.000 Einwohner am Zusammenfluss von vier Flüssen.",
            "Hier entsteht der Chao Phraya aus Ping, Wang, Yom und Nan.",
            "Größtes chinesisches Neujahrsfest Thailands.",
            "Drachen- und Löwentanzparade seit über 100 Jahren.",
            "Im 19. Jahrhundert wichtiger Teakholz-Handelsplatz.",
            "240 Kilometer nördlich Bangkoks.",
            "Bueng-Boraphet-See ist der größte Süßwassersee der Region."
        ],
    },
    "nakhon-si-thammarat-cities-v2": {
        "desc": "Nakhon Si Thammarat, in der Antike als Ligor bekannt, war im 8. bis 13. Jahrhundert ein wichtiges Zentrum des Srivijaya- und Tambralinga-Reiches und einer der ältesten Orte der südthailändischen Halbinsel. Die heutige Stadt mit rund 105.000 Einwohnern liegt 780 Kilometer südlich Bangkoks am Golf von Thailand. Wahrzeichen ist Wat Phra Mahathat Woramahawihan mit seiner 78 Meter hohen, vergoldeten Sri-Lanka-Stupa aus dem 13. Jahrhundert, die als heiligste buddhistische Stätte Südthailands gilt. Die Provinz war historisch Bindeglied zwischen indischer und siamesischer Kultur.",
        "facts": [
            "Antiker Name Ligor, Zentrum des Tambralinga-Reiches.",
            "Etwa 105.000 Einwohner, 780 Kilometer südlich Bangkoks.",
            "Wat Phra Mahathat mit 78 Meter hoher Stupa.",
            "Stupa aus dem 13. Jahrhundert im Sri-Lanka-Stil.",
            "Heiligste buddhistische Stätte Südthailands.",
            "Im 8. Jahrhundert Teil des Srivijaya-Reiches.",
            "Bekannt für Schattenspiel-Theater Nang Talung.",
            "Ältestes Niello-Silberhandwerk Thailands."
        ],
    },
    "phitsanulok-cities-v2": {
        "desc": "Phitsanulok liegt am Nan-Fluss in Nordthailand und blickt auf eine über 600-jährige Geschichte zurück. Im 14. und 15. Jahrhundert war die Stadt zeitweise Hauptstadt des Sukhothai-Reiches, und König Naresuan, der spätere Befreier Ayutthayas von burmesischer Herrschaft, wurde 1555 hier geboren. Die Stadt mit rund 80.000 Einwohnern beherbergt im Wat Phra Si Rattana Mahathat den 1357 gegossenen Phra Buddha Chinnarat, der als schönste Buddha-Statue Thailands gilt. Phitsanulok liegt 377 Kilometer nördlich Bangkoks und ist Tor zum Sukhothai-Geschichtspark.",
        "facts": [
            "Über 600 Jahre alte Geschichte am Nan-Fluss.",
            "König Naresuan wurde 1555 hier geboren.",
            "Phra Buddha Chinnarat aus dem Jahr 1357.",
            "Etwa 80.000 Einwohner, 377 Kilometer nördlich Bangkoks.",
            "Im 14. Jahrhundert zeitweise Hauptstadt von Sukhothai.",
            "Tor zum UNESCO-Welterbe Sukhothai-Geschichtspark.",
            "Wat Phra Si Rattana Mahathat ist Hauptpilgerort.",
            "Naresuan-Universität gegründet 1990."
        ],
    },
    "kanchanaburi-cities-v2": {
        "desc": "Kanchanaburi liegt rund 130 Kilometer westlich von Bangkok am Zusammenfluss von Khwae Yai und Khwae Noi, aus denen der Mae Klong entsteht. Die Stadt mit etwa 30.000 Einwohnern ist weltweit bekannt durch die Brücke am Kwai, Teil der von 1942 bis 1943 unter japanischer Besatzung gebauten Thailand-Burma-Eisenbahn, der sogenannten Todeseisenbahn. Etwa 13.000 alliierte Kriegsgefangene und über 100.000 asiatische Zwangsarbeiter starben beim Bau. Der Erawan-Wasserfall mit sieben Stufen im Erawan-Nationalpark sowie der Khmer-Tempel Prasat Mueang Sing aus dem 13. Jahrhundert sind weitere Wahrzeichen.",
        "facts": [
            "Brücke am Kwai aus dem Zweiten Weltkrieg.",
            "Thailand-Burma-Eisenbahn 1942 bis 1943 erbaut.",
            "Etwa 13.000 alliierte Kriegsgefangene starben.",
            "Erawan-Wasserfall hat sieben Stufen.",
            "Prasat Mueang Sing ist Khmer-Tempel des 13. Jahrhunderts.",
            "Etwa 30.000 Einwohner, 130 Kilometer westlich Bangkoks.",
            "Drittgrößte Provinz Thailands nach Fläche.",
            "Hellfire Pass ist Gedenkort an der Burma-Grenze."
        ],
    },
    "songkhla-cities-v2": {
        "desc": "Songkhla liegt an der Ostküste Südthailands an einem schmalen Streifen zwischen Songkhla-See und dem Golf von Thailand. Die Stadt zählt rund 75.000 Einwohner und blickt auf eine 400-jährige Geschichte als Handelsplatz zurück, an dem chinesische, malaiische und thailändische Kulturen aufeinandertrafen. Die Altstadt mit ihren chinesisch-portugiesischen Shophouses gilt als gut erhaltenes Ensemble. Wahrzeichen sind die Meerjungfrau-Statue am Samila-Strand, der Khao-Tang-Kuan-Aussichtsberg und der Songkhla-See, der mit 1.040 Quadratkilometern größte Binnensee Thailands. Die Stadt war nie europäische Kolonie.",
        "facts": [
            "Etwa 75.000 Einwohner an Songkhla-See und Golf.",
            "400-jährige Handelsgeschichte mit chinesischem Einfluss.",
            "Songkhla-See ist mit 1.040 Quadratkilometern Thailands größter Binnensee.",
            "Meerjungfrau-Statue Wahrzeichen am Samila-Strand.",
            "Khao Tang Kuan ist Aussichtsberg über der Stadt.",
            "Altstadt mit chinesisch-portugiesischen Shophouses.",
            "Liegt 950 Kilometer südlich Bangkoks.",
            "Die Provinz grenzt an Hat Yai im Westen."
        ],
    },
    "chonburi-cities-v2": {
        "desc": "Chonburi ist Hauptstadt der gleichnamigen Provinz an der Ostküste des Golfs von Thailand und liegt rund 80 Kilometer südöstlich Bangkoks. Die Stadt mit etwa 220.000 Einwohnern in der Agglomeration ist Teil des Eastern Economic Corridors und industrielles Zentrum mit dem Tiefseehafen Laem Chabang, einem der größten Container-Häfen Südostasiens. Bekannt ist Chonburi für die jährlichen Büffelrennen Ende Oktober, die seit über 140 Jahren stattfinden und auf eine Tradition aus der Reisernte zurückgehen. Die Provinz umfasst auch Pattaya und die Insel Ko Sichang, einst königliche Sommerresidenz unter König Chulalongkorn.",
        "facts": [
            "Etwa 220.000 Einwohner in der Agglomeration.",
            "80 Kilometer südöstlich Bangkoks.",
            "Tiefseehafen Laem Chabang, einer der größten Asiens.",
            "Büffelrennen jährlich Ende Oktober seit 140 Jahren.",
            "Teil des Eastern Economic Corridors.",
            "Insel Ko Sichang war Sommerresidenz König Chulalongkorns.",
            "Provinz umfasst auch Pattaya.",
            "Wichtiger Industriestandort mit Automobilfabriken."
        ],
    },
    "trang-cities-v2": {
        "desc": "Trang liegt an der Andamanenküste Südthailands rund 850 Kilometer südlich Bangkoks und zählt etwa 60.000 Einwohner. Die Provinz ist berühmt für ihre Inselgruppen mit Ko Mook, Ko Kradan und Ko Libong sowie für die Emerald Cave, eine durch eine 80 Meter lange Höhle erreichbare verborgene Lagune. Trang gilt als Ursprung des Kautschukanbaus in Thailand, eingeführt um 1899 durch den damaligen Gouverneur Phraya Ratsadanupradit aus Britisch-Malaya. Die Stadt ist auch bekannt für ihr chinesisch geprägtes Frühstück mit gebratenem Schweinefleisch Mu Yang Trang sowie Dim Sum.",
        "facts": [
            "Etwa 60.000 Einwohner an der Andamanenküste.",
            "Kautschukanbau in Thailand begann 1899 in Trang.",
            "Emerald Cave erreichbar durch 80 Meter lange Höhle.",
            "Ko Mook, Ko Kradan und Ko Libong vor der Küste.",
            "Berühmt für Mu Yang Trang, gebratenes Schweinefleisch.",
            "850 Kilometer südlich Bangkoks.",
            "Wichtiger Eisenbahnknoten der Südlinie.",
            "Provinz hat Mangrovenwälder und Korallenriffe."
        ],
    },
    "lampang-cities-v2": {
        "desc": "Lampang liegt in Nordthailand am Fluss Wang, rund 600 Kilometer nördlich Bangkoks, und blickt auf eine 1.300-jährige Geschichte zurück. Die Stadt wurde im 7. Jahrhundert als Khelang Nakhon im Hariphunchai-Königreich gegründet und war später Teil des Lan-Na-Reiches. Heute zählt Lampang etwa 55.000 Einwohner und ist die einzige thailändische Stadt, in der noch Pferdekutschen als Touristentransport eingesetzt werden, eine Tradition seit 1916. Wat Phra That Lampang Luang aus dem 13. Jahrhundert mit seinem Lan-Na-Stil-Tempel und das Thai Elephant Conservation Center sind bekannte Sehenswürdigkeiten.",
        "facts": [
            "Etwa 55.000 Einwohner am Wang-Fluss.",
            "Im 7. Jahrhundert als Khelang Nakhon gegründet.",
            "Einzige Stadt Thailands mit Pferdekutschen-Tradition seit 1916.",
            "Wat Phra That Lampang Luang aus dem 13. Jahrhundert.",
            "Thai Elephant Conservation Center in der Provinz.",
            "600 Kilometer nördlich Bangkoks.",
            "Teil des historischen Lan-Na-Königreichs.",
            "Bekannt für blaue Hähne als Stadtsymbol."
        ],
    },
    "samut-prakan-cities-v2": {
        "desc": "Samut Prakan liegt unmittelbar südlich Bangkoks an der Mündung des Chao Phraya in den Golf von Thailand und bildet einen Teil der Hauptstadtagglomeration. Die Stadt zählt rund 390.000 Einwohner. 1822 wurde hier unter König Rama II. die Festung Phra Chulachomklao erbaut, deren Kanonen heute Museum sind. Samut Prakan beherbergt mit Mueang Boran auf 130 Hektar Fläche das größte Freilichtmuseum der Welt mit über 120 Repliken thailändischer Tempel und Bauwerke. Auch der Erawan-Museum-Tempel mit dem 29 Meter hohen dreiköpfigen Kupferelefanten ist ein Wahrzeichen.",
        "facts": [
            "Etwa 390.000 Einwohner in der Bangkok-Agglomeration.",
            "An der Mündung des Chao Phraya in den Golf.",
            "Mueang Boran ist mit 130 Hektar größtes Freilichtmuseum der Welt.",
            "Über 120 Repliken thailändischer Bauwerke.",
            "Festung Phra Chulachomklao 1822 unter Rama II. erbaut.",
            "Erawan-Museum mit 29 Meter hohem Elefanten.",
            "Direkt südlich Bangkoks, Teil der BMR.",
            "Wichtiger Industrie- und Hafenstandort."
        ],
    },
    "sakon-nakhon-cities-v2": {
        "desc": "Sakon Nakhon liegt im Isaan, rund 650 Kilometer nordöstlich Bangkoks, am westlichen Ufer des Nong-Han-Sees, dem zweitgrößten natürlichen See Thailands mit 123 Quadratkilometern Fläche. Die Stadt mit etwa 55.000 Einwohnern hat khmerische Wurzeln, die bis ins 11. Jahrhundert zurückreichen. Wat Phra That Choeng Chum mit seiner 24 Meter hohen weißen Stupa ist Wahrzeichen, und der berühmte Waldmönch Ajahn Mun Bhuridatta lebte hier ab 1893 und prägte die thailändische Waldmeditationstradition. Sakon Nakhon ist Zentrum der Phu-Tai-Volksgruppe mit eigener Webtradition aus Indigo-gefärbter Baumwolle.",
        "facts": [
            "Etwa 55.000 Einwohner am Nong-Han-See.",
            "Nong Han ist mit 123 Quadratkilometern zweitgrößter See Thailands.",
            "Khmer-Wurzeln bis ins 11. Jahrhundert.",
            "Wat Phra That Choeng Chum mit 24 Meter hoher Stupa.",
            "Ajahn Mun Bhuridatta begründete hier die Waldmeditation.",
            "Indigo-Baumwoll-Webtradition der Phu-Tai-Volksgruppe.",
            "650 Kilometer nordöstlich Bangkoks.",
            "Berühmt für Wachskerzen-Festival am Ende der Regenzeit."
        ],
    },
    "lopburi-cities-v2": {
        "desc": "Lopburi liegt rund 150 Kilometer nördlich Bangkoks und ist eine der ältesten kontinuierlich bewohnten Städte Thailands mit über 1.300 Jahren Geschichte. Im 7. bis 11. Jahrhundert war Lopburi als Lavo Hauptstadt eines Mon-Königreichs, später Khmer-Provinz, und im 17. Jahrhundert unter König Narai zweite Hauptstadt von Ayutthaya. Der französische Architekt Tachard entwarf 1685 den Phra Narai Ratchaniwet-Palast. Lopburi mit etwa 60.000 Einwohnern ist heute weltweit bekannt für seine frei in der Stadt lebenden Makaken-Affen und das jährliche Affenbankett am letzten Sonntag im November.",
        "facts": [
            "Über 1.300 Jahre kontinuierlich bewohnt.",
            "Hauptstadt des Mon-Königreichs Lavo im 7. Jahrhundert.",
            "Zweite Hauptstadt Ayutthayas unter König Narai 1665.",
            "Phra Narai Ratchaniwet-Palast 1685 erbaut.",
            "Etwa 60.000 Einwohner, 150 Kilometer nördlich Bangkoks.",
            "Berühmt für freilebende Makaken-Affen.",
            "Jährliches Affenbankett im November.",
            "Khmer-Tempel Phra Prang Sam Yot stammt aus dem 13. Jahrhundert."
        ],
    },
    "nong-khai-cities-v2": {
        "desc": "Nong Khai liegt direkt am Mekong gegenüber der laotischen Hauptstadt Vientiane und ist mit rund 50.000 Einwohnern Hauptstadt der gleichnamigen Provinz. Die Stadt wurde 1827 nach Konflikten mit Vientiane gegründet und ist seit 1994 durch die Thai-Lao Friendship Bridge mit Laos verbunden, der ersten Brücke über den Mekong. Wahrzeichen ist der Sala Kaew Ku-Skulpturengarten von Bunleua Sulilat aus 1978 mit über 100 riesigen hindu-buddhistischen Betonfiguren, darunter eine 25 Meter hohe Buddha-Statue. Das jährliche Naga-Feuerball-Phänomen am Ende der buddhistischen Fastenzeit ist ein berühmtes Mysterium am Mekong.",
        "facts": [
            "Etwa 50.000 Einwohner direkt am Mekong.",
            "Gegenüber der laotischen Hauptstadt Vientiane.",
            "Thai-Lao Friendship Bridge eröffnet 1994.",
            "Erste Brücke über den Mekong.",
            "Sala Kaew Ku Skulpturengarten von 1978.",
            "Über 100 riesige hindu-buddhistische Betonfiguren.",
            "Naga-Feuerball-Phänomen jährlich im Oktober.",
            "Stadt 1827 nach Konflikten mit Vientiane gegründet."
        ],
    },
    "hua-hin-cities-v2": {
        "desc": "Hua Hin liegt am Westufer des Golfs von Thailand in der Provinz Prachuap Khiri Khan, rund 200 Kilometer südwestlich Bangkoks. Die Stadt mit etwa 60.000 Einwohnern wurde durch König Prajadhipok bekannt, der 1926 hier den Sommerpalast Klai Kangwon, übersetzt fern von Sorgen, errichten ließ. Der Palast wird bis heute von der königlichen Familie genutzt. Hua Hin gilt als Thailands erstes Seebad, der 1911 erbaute Bahnhof im viktorianisch-thailändischen Mischstil mit königlichem Wartesaal ist eines der schönsten Bahnhofsgebäude Asiens. Der 5 Kilometer lange Hauptstrand und der Khao-Sam-Roi-Yot-Nationalpark gehören zu den Sehenswürdigkeiten.",
        "facts": [
            "Etwa 60.000 Einwohner am Golf von Thailand.",
            "Sommerpalast Klai Kangwon 1926 von König Prajadhipok erbaut.",
            "Klai Kangwon bedeutet fern von Sorgen.",
            "Bahnhof von 1911 mit königlichem Wartesaal.",
            "Thailands erstes Seebad, 5 Kilometer Hauptstrand.",
            "Khao Sam Roi Yot Nationalpark in der Nähe.",
            "200 Kilometer südwestlich Bangkoks.",
            "Bis heute von der königlichen Familie genutzt."
        ],
    },
    "krabi-cities-v2": {
        "desc": "Krabi-Stadt liegt an der Mündung des Krabi-Flusses an der Andamanenküste Südthailands und zählt etwa 30.000 Einwohner. Die Provinz Krabi ist weltweit bekannt für ihre Karst-Landschaft mit über 130 Inseln, darunter Ko Phi Phi, Ko Lanta und der Strand Railay mit seinen 200 Meter hohen Kalksteinklippen. Archäologische Funde in der Höhle Tham Lod Tai belegen Besiedlung seit über 27.000 Jahren. Die Provinz lebt heute hauptsächlich vom Tourismus, von Kautschuk- und Palmölplantagen sowie vom Fischfang. Vor Ao Nang liegen Tigerhöhlen-Tempel Wat Tham Suea mit einer 309-Stufen-Treppe zum Aussichtspunkt.",
        "facts": [
            "Etwa 30.000 Einwohner an der Andamanenküste.",
            "Provinz mit über 130 Inseln, darunter Ko Phi Phi.",
            "Railay-Klippen sind 200 Meter hoch.",
            "Besiedlung seit über 27.000 Jahren nachgewiesen.",
            "Wat Tham Suea hat 309-Stufen-Aussichtsweg.",
            "Lebt von Tourismus, Kautschuk und Palmöl.",
            "780 Kilometer südlich Bangkoks.",
            "Karst-Landschaft mit Mangrovenwäldern."
        ],
    },
    "tak-cities-v2": {
        "desc": "Tak liegt im westlichen Nordthailand am Ping-Fluss, rund 420 Kilometer nördlich Bangkoks, und ist Hauptstadt der gleichnamigen Provinz mit etwa 20.000 Einwohnern in der Kernstadt. Tak war Geburtsort von König Taksin dem Großen, der 1768 nach dem Fall Ayutthayas das Königreich Thonburi gründete und Siam wieder vereinte. Die Provinz grenzt mit 540 Kilometern an Myanmar und beherbergt den Bhumibol-Staudamm, mit 154 Metern den höchsten Damm Thailands, fertiggestellt 1964. Mae Sot an der burmesischen Grenze ist wichtiger Handelsposten und beherbergt einen großen Anteil burmesischer Migranten.",
        "facts": [
            "Etwa 20.000 Einwohner am Ping-Fluss.",
            "Geburtsort von König Taksin dem Großen 1734.",
            "Provinz grenzt 540 Kilometer an Myanmar.",
            "Bhumibol-Staudamm fertiggestellt 1964.",
            "Bhumibol-Damm ist mit 154 Metern Thailands höchster.",
            "Mae Sot ist Grenzhandelsposten zu Myanmar.",
            "420 Kilometer nördlich Bangkoks.",
            "Königreich Thonburi 1768 von Taksin gegründet."
        ],
    },
    "ratchaburi-cities-v2": {
        "desc": "Ratchaburi, übersetzt Königsstadt, liegt am Mae Klong rund 100 Kilometer westlich Bangkoks und blickt auf eine über 1.000-jährige Geschichte zurück. Die Stadt wurde im 11. Jahrhundert als Khmer-Provinz gegründet, später unter Sukhothai- und Ayutthaya-Herrschaft fortgeführt und zählt heute etwa 40.000 Einwohner. Berühmt ist Ratchaburi für seine traditionellen Drachentopf-Töpferwaren mit aufgemalten Drachenmotiven, eine über 100 Jahre alte chinesisch-thailändische Handwerkskunst. Der schwimmende Markt Damnoen Saduak liegt in der Provinz und wurde 1866 unter König Rama IV. als Kanal angelegt. Auch der Khao-Bin-Höhlentempel zählt zu den Sehenswürdigkeiten.",
        "facts": [
            "Name bedeutet Königsstadt auf Sanskrit.",
            "Im 11. Jahrhundert als Khmer-Provinz gegründet.",
            "Etwa 40.000 Einwohner am Mae Klong.",
            "Berühmt für Drachentopf-Töpferei seit über 100 Jahren.",
            "Schwimmender Markt Damnoen Saduak 1866 angelegt.",
            "Damnoen-Saduak-Kanal unter Rama IV. erbaut.",
            "100 Kilometer westlich Bangkoks.",
            "Khao-Bin-Höhle ist 300 Meter langer Tropfsteintempel."
        ],
    },
}


def to_ts_string(s: str) -> str:
    """Escape a Python string for a TS double-quoted string literal."""
    return s.replace("\\", "\\\\").replace('"', '\\"')


def to_ts_array(items):
    parts = ['"' + to_ts_string(x) + '"' for x in items]
    return "[" + ", ".join(parts) + "]"


def main():
    text = FILE.read_text(encoding="utf-8")
    original = text
    replaced_desc = 0
    replaced_facts = 0
    skipped = []

    for poi_id, content in DATA.items():
        # Locate the POI block: from `id: "<id>"` to the closing `}, image:` of that POI
        id_pattern = re.compile(r'id:\s*"' + re.escape(poi_id) + r'"')
        m = id_pattern.search(text)
        if not m:
            skipped.append(f"{poi_id}: id not found")
            continue
        block_start = m.start()
        # find next `id:` or end
        next_id = id_pattern.search(text, m.end())
        # Find `id:` of the next POI
        next_any = re.search(r'\n  \{\n    id:\s*"', text[m.end():])
        block_end = m.end() + next_any.start() if next_any else len(text)
        block = text[block_start:block_end]

        # Replace descriptionAdvanced.de — find descriptionAdvanced block, then de: within it
        da_match = re.search(r'descriptionAdvanced:\s*\{', block)
        if not da_match:
            skipped.append(f"{poi_id}: descriptionAdvanced block not found")
            continue
        # find matching closing brace
        depth = 1
        i = da_match.end()
        while i < len(block) and depth > 0:
            if block[i] == '{':
                depth += 1
            elif block[i] == '}':
                depth -= 1
            i += 1
        da_block = block[da_match.end():i-1]
        # Replace de: "..." within da_block
        de_pat = re.compile(r'(de:\s*)"((?:[^"\\]|\\.)*)"')
        new_desc_literal = '"' + to_ts_string(content["desc"]) + '"'
        new_da_block, n1 = de_pat.subn(lambda mm: mm.group(1) + new_desc_literal, da_block, count=1)
        if n1:
            new_block = block[:da_match.end()] + new_da_block + block[i-1:]
        else:
            new_block = block
        if n1 == 0:
            skipped.append(f"{poi_id}: descriptionAdvanced.de not matched")
            continue
        replaced_desc += 1

        # Replace factsAdvanced.de — find factsAdvanced block, then de: [...] within it
        fa_match = re.search(r'factsAdvanced:\s*\{', new_block)
        if not fa_match:
            skipped.append(f"{poi_id}: factsAdvanced block not found")
            new_block2 = new_block
        else:
            depth = 1
            j = fa_match.end()
            while j < len(new_block) and depth > 0:
                if new_block[j] == '{':
                    depth += 1
                elif new_block[j] == '}':
                    depth -= 1
                j += 1
            fa_block = new_block[fa_match.end():j-1]
            de_arr_pat = re.compile(r'(de:\s*)\[[^\]]*\]', re.DOTALL)
            new_facts_literal = to_ts_array(content["facts"])
            new_fa_block, n2 = de_arr_pat.subn(lambda mm: mm.group(1) + new_facts_literal, fa_block, count=1)
            if n2 == 0:
                skipped.append(f"{poi_id}: factsAdvanced.de not matched")
                new_block2 = new_block
            else:
                replaced_facts += 1
                new_block2 = new_block[:fa_match.end()] + new_fa_block + new_block[j-1:]

        text = text[:block_start] + new_block2 + text[block_end:]

    if text != original:
        FILE.write_text(text, encoding="utf-8")

    print(json.dumps({
        "file": str(FILE),
        "descriptions_replaced": replaced_desc,
        "facts_replaced": replaced_facts,
        "skipped": skipped,
    }, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
