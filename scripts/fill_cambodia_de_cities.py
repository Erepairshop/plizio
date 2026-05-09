"""Fill descriptionAdvanced.de + factsAdvanced.de for POIs in poiExtraCambodiaCitiesV2.ts

The file currently has no descriptionAdvanced/factsAdvanced fields. This script
inserts them after the existing `facts: { ... }` block for each targeted POI.
"""
from __future__ import annotations
import re
from pathlib import Path

FILE = Path(r"C:\Users\User\plizio-repo\lib\visualLab\data\poiExtraCambodiaCitiesV2.ts")

DATA: dict[str, dict] = {
    "cambodia-phnom-penh-cities-v2": {
        "desc": (
            "Phnom Penh ist seit 1434 die Hauptstadt Kambodschas und liegt am Zusammenfluss von Mekong, "
            "Tonle Sap und Bassac. Die Stadt wurde der Legende nach 1372 von der Witwe Penh am Hügel "
            "Wat Phnom gegründet. Während des französischen Protektorats ab 1863 entstanden breite "
            "Boulevards und der Königspalast (1866). In der Kolonialzeit nannte man Phnom Penh die "
            "'Perle Asiens'. Nach der Eroberung durch die Roten Khmer am 17. April 1975 wurde die "
            "Stadt unter Pol Pot komplett evakuiert und zur Geisterstadt. Erst nach 1979 kehrte das "
            "Leben zurück. Heute leben in der Metropolregion über 2,3 Millionen Menschen."
        ),
        "facts": [
            "Hauptstadt seit 1434 (mit Unterbrechungen)",
            "Bevölkerung Metropolregion ca. 2,3 Millionen",
            "Französisches Protektorat ab 1863",
            "Königspalast erbaut 1866",
            "Evakuierung durch Rote Khmer am 17. April 1975",
            "Tuol-Sleng-Genozidmuseum (S-21)",
            "Zusammenfluss von Mekong, Tonle Sap und Bassac",
            "Silberpagode mit über 5.000 Silberfliesen",
        ],
    },
    "cambodia-battambang-cities-v2": {
        "desc": (
            "Battambang ist die Hauptstadt der gleichnamigen Provinz und mit etwa 250.000 Einwohnern "
            "die zweitgrößte Stadt Kambodschas. Sie liegt am Sangkae-Fluss, rund 290 Kilometer "
            "nordwestlich von Phnom Penh. Die Stadt wurde im 11. Jahrhundert während des Khmer-Reiches "
            "von Angkor (802-1431) gegründet und stand zwischen 1795 und 1907 unter siamesischer "
            "Herrschaft, bevor sie an das französische Protektorat zurückgegeben wurde. Die "
            "Kolonialarchitektur der französischen Periode prägt das Stadtbild bis heute. Während "
            "der Herrschaft der Roten Khmer 1975-1979 wurde die Stadt geräumt und ihre Bewohner in "
            "Arbeitslager verschickt. Heute gilt Battambang als kulturelle Hauptstadt des Landes."
        ),
        "facts": [
            "Zweitgrößte Stadt Kambodschas, ca. 250.000 Einwohner",
            "Gegründet im 11. Jahrhundert (Angkor-Reich)",
            "Siamesische Herrschaft 1795-1907",
            "Rückgabe an Frankreich 1907",
            "Französisches Protektorat ab 1863",
            "290 km nordwestlich von Phnom Penh",
            "Bambuszug ('Norry') als touristische Attraktion",
            "Phare-Ponleu-Selpak-Zirkus seit 1994",
        ],
    },
    "cambodia-siem-reap-cities-v2": {
        "desc": (
            "Siem Reap ist die Hauptstadt der gleichnamigen Provinz und das Tor zum Weltkulturerbe "
            "Angkor Wat. Die Stadt mit rund 230.000 Einwohnern liegt 314 Kilometer nordwestlich von "
            "Phnom Penh. Der Name bedeutet 'Niederlage Siams' und erinnert an die Schlacht von 1431, "
            "in der das Khmer-Reich (802-1431) zerschlagen wurde. Während des französischen "
            "Protektorats ab 1863 begannen die systematischen Ausgrabungen in Angkor durch die École "
            "française d'Extrême-Orient. Unter den Roten Khmer 1975-1979 wurde die Stadt evakuiert. "
            "Seit der UNESCO-Anerkennung Angkors 1992 entwickelte sich Siem Reap zum touristischen "
            "Zentrum mit über 2 Millionen Besuchern jährlich vor der Pandemie."
        ),
        "facts": [
            "Bevölkerung ca. 230.000",
            "Tor zum UNESCO-Weltkulturerbe Angkor (seit 1992)",
            "Name bedeutet 'Niederlage Siams' (1431)",
            "Französische Ausgrabungen ab 1863",
            "Internationaler Flughafen seit 2006",
            "314 km nordwestlich von Phnom Penh",
            "Pre-Pandemie über 2 Millionen Touristen jährlich",
            "Apsara-Tanz als immaterielles UNESCO-Erbe",
        ],
    },
    "cambodia-sihanoukville-cities-v2": {
        "desc": (
            "Sihanoukville (Krong Preah Sihanouk) ist Kambodschas einziger Tiefseehafen und liegt am "
            "Golf von Thailand, 230 Kilometer südwestlich von Phnom Penh. Die Stadt wurde 1955-1960 "
            "vollständig neu erbaut und nach König Norodom Sihanouk benannt, der sie als modernen "
            "Hafen für das unabhängige Kambodscha (Unabhängigkeit von Frankreich 1953) errichten "
            "ließ. Vor dieser Gründung war das Gebiet praktisch unbewohnt. Während der Roten Khmer "
            "1975-1979 wurde die Stadt entvölkert. Seit 2017 erlebte Sihanoukville durch chinesische "
            "Investitionen einen explosiven Bauboom mit über 100 Casinos. Die Bevölkerung liegt bei "
            "etwa 156.000 Einwohnern, vor dem Boom waren es nur 67.000."
        ),
        "facts": [
            "Einziger Tiefseehafen Kambodschas",
            "Bevölkerung ca. 156.000",
            "Gegründet 1955-1960 unter König Sihanouk",
            "Unabhängigkeit Kambodschas von Frankreich 1953",
            "230 km südwestlich von Phnom Penh",
            "Über 100 Casinos seit 2017",
            "Französisches Protektorat 1863-1953",
            "Tor zu den Inseln Koh Rong und Koh Rong Sanloem",
        ],
    },
    "cambodia-poipet-cities-v2": {
        "desc": (
            "Poipet liegt in der Provinz Banteay Meanchey direkt an der thailändischen Grenze, "
            "gegenüber der Stadt Aranyaprathet, und ist mit rund 90.000 Einwohnern der wichtigste "
            "Landgrenzübergang Kambodschas. Die Stadt entwickelte sich nach 1907, als Frankreich im "
            "Rahmen des französischen Protektorats (ab 1863) die Provinzen Battambang und Siem Reap "
            "von Siam zurückerhielt. Während der Herrschaft der Roten Khmer 1975-1979 war Poipet "
            "geschlossen. Nach 1999 wurde die Grenze geöffnet und seit der Legalisierung des "
            "Glücksspiels für Ausländer entstanden hier zahlreiche Casinos. Die Stadt ist Endpunkt "
            "der von den Franzosen gebauten Eisenbahnlinie nach Phnom Penh."
        ),
        "facts": [
            "Bevölkerung ca. 90.000",
            "Wichtigster Landgrenzübergang nach Thailand",
            "Provinzen erst 1907 von Siam zurückgewonnen",
            "Französisches Protektorat ab 1863",
            "Casino-Boom nach 1999",
            "Endpunkt der Westbahn nach Phnom Penh",
            "Geschlossen unter Roten Khmer 1975-1979",
            "Gegenüber Aranyaprathet (Thailand)",
        ],
    },
    "cambodia-ta-khmau-cities-v2": {
        "desc": (
            "Ta Khmau ist die Hauptstadt der Provinz Kandal und liegt nur 11 Kilometer südlich von "
            "Phnom Penh am Bassac-Fluss. Die Stadt mit rund 73.000 Einwohnern bildet den südlichen "
            "Vorort der Hauptstadtregion. Der Name bedeutet auf Khmer 'Schwarzer Großvater' und geht "
            "auf eine lokale Legende zurück. Während des französischen Protektorats ab 1863 wurde "
            "die Region als Reisanbaugebiet entwickelt. Unter den Roten Khmer 1975-1979 wurde Ta "
            "Khmau wie alle Städte evakuiert; das berüchtigte Sicherheitsgefängnis 'M-13' lag in der "
            "Provinz. Seit den 2000er Jahren ist die Stadt durch ihre Nähe zur Hauptstadt zu einem "
            "Industriezentrum mit Textilfabriken und Logistikzentren geworden."
        ),
        "facts": [
            "Hauptstadt der Provinz Kandal",
            "Bevölkerung ca. 73.000",
            "Nur 11 km südlich von Phnom Penh",
            "Name bedeutet 'Schwarzer Großvater'",
            "Französisches Protektorat ab 1863",
            "Evakuiert unter Roten Khmer 1975-1979",
            "Wichtiges Industriezentrum mit Textilfabriken",
            "Liegt am Bassac-Fluss",
        ],
    },
    "cambodia-kampong-cham-cities-v2": {
        "desc": (
            "Kampong Cham ist die Hauptstadt der gleichnamigen Provinz und mit rund 118.000 "
            "Einwohnern die drittgrößte Stadt Kambodschas. Sie liegt am rechten Ufer des Mekong, "
            "124 Kilometer nordöstlich von Phnom Penh. Die Stadt wurde von der Cham-Minderheit "
            "geprägt, die nach dem Untergang von Champa im 15. Jahrhundert hierher floh. Während "
            "des französischen Protektorats ab 1863 wurde Kampong Cham zum Zentrum der "
            "Kautschukindustrie ausgebaut, mit großen Plantagen wie Chup. Unter den Roten Khmer "
            "1975-1979 wurde die Stadt geräumt; viele Cham wurden ermordet. Die japanische Kizuna-Brücke "
            "von 2001 war die erste Mekong-Brücke Kambodschas und ist 1.360 Meter lang."
        ),
        "facts": [
            "Drittgrößte Stadt Kambodschas, ca. 118.000 Einwohner",
            "124 km nordöstlich von Phnom Penh",
            "Zentrum der Cham-Minderheit",
            "Französisches Protektorat ab 1863",
            "Kautschukplantagen ab Kolonialzeit",
            "Kizuna-Brücke (1.360 m) seit 2001",
            "Cham-Verfolgung durch Rote Khmer 1975-1979",
            "Liegt am Mekong",
        ],
    },
    "cambodia-pursat-cities-v2": {
        "desc": (
            "Pursat ist die Hauptstadt der gleichnamigen Provinz und liegt am gleichnamigen Fluss "
            "zwischen dem Tonle-Sap-See und den Kardamom-Bergen, etwa 174 Kilometer nordwestlich von "
            "Phnom Penh. Die Stadt mit rund 58.000 Einwohnern ist seit Jahrhunderten für ihre "
            "Marmorbildhauerei berühmt - der weiße Pursat-Marmor wurde schon zur Zeit des "
            "Khmer-Reiches (802-1431) für Tempelskulpturen verwendet. Während des französischen "
            "Protektorats ab 1863 wurde die Stadt als Verwaltungszentrum ausgebaut. Unter den Roten "
            "Khmer 1975-1979 lag die berüchtigte Zone 'Region 4', in der besonders viele Menschen "
            "starben. Pursat ist auch das wichtigste Anbaugebiet für Pursat-Orangen."
        ),
        "facts": [
            "Hauptstadt der Provinz Pursat",
            "Bevölkerung ca. 58.000",
            "174 km nordwestlich von Phnom Penh",
            "Berühmt für weißen Pursat-Marmor",
            "Marmorbildhauerei seit dem Khmer-Reich",
            "Französisches Protektorat ab 1863",
            "'Region 4' der Roten Khmer 1975-1979",
            "Wichtiges Orangen-Anbaugebiet",
        ],
    },
    "cambodia-kampong-speu-cities-v2": {
        "desc": (
            "Kampong Speu ist die Hauptstadt der gleichnamigen Provinz und liegt 48 Kilometer westlich "
            "von Phnom Penh am Prek-Thnot-Fluss. Die Stadt mit rund 79.000 Einwohnern ist landesweit "
            "berühmt für die Produktion von Palmzucker, der seit 2010 als geschützte "
            "Herkunftsbezeichnung registriert ist. Der Name bedeutet 'Sternfrucht-Hafen'. Während "
            "des französischen Protektorats ab 1863 wurde die Region als landwirtschaftliches "
            "Hinterland Phnom Penhs entwickelt. Unter den Roten Khmer 1975-1979 lag hier die "
            "berüchtigte Zone 'Region 22'; Tausende kamen in den Reisfeldern und Arbeitslagern um. "
            "Heute prägen die Toddy-Palmen und der Kirirom-Nationalpark in 110 Kilometer Entfernung."
        ),
        "facts": [
            "Hauptstadt der Provinz Kampong Speu",
            "Bevölkerung ca. 79.000",
            "48 km westlich von Phnom Penh",
            "Geschützter Palmzucker seit 2010",
            "Name bedeutet 'Sternfrucht-Hafen'",
            "Französisches Protektorat ab 1863",
            "'Region 22' der Roten Khmer 1975-1979",
            "Nähe zum Kirirom-Nationalpark",
        ],
    },
    "cambodia-takeo-cities-v2": {
        "desc": (
            "Takeo ist die Hauptstadt der gleichnamigen Provinz und liegt 77 Kilometer südlich von "
            "Phnom Penh in einer Region, die als Wiege der Khmer-Zivilisation gilt. Die Stadt mit "
            "rund 39.000 Einwohnern liegt nahe den Ruinen von Angkor Borei, das im 1.-6. Jahrhundert "
            "Hauptstadt des Funan-Reiches war, und Phnom Da, einer prä-angkorianischen Tempelanlage "
            "aus dem 6. Jahrhundert. Die Region war Vorläufer des späteren Khmer-Reiches "
            "(802-1431). Während des französischen Protektorats ab 1863 wurde Takeo zum "
            "Verwaltungszentrum. Unter den Roten Khmer 1975-1979 wurde die Stadt evakuiert. Heute "
            "ist sie für die traditionelle Seidenweberei (Hol) berühmt, die seit Jahrhunderten "
            "praktiziert wird."
        ),
        "facts": [
            "Hauptstadt der Provinz Takeo",
            "Bevölkerung ca. 39.000",
            "77 km südlich von Phnom Penh",
            "Nahe Angkor Borei (Funan-Hauptstadt 1.-6. Jh.)",
            "Phnom-Da-Tempel aus dem 6. Jahrhundert",
            "Französisches Protektorat ab 1863",
            "Evakuiert unter Roten Khmer 1975-1979",
            "Berühmt für Hol-Seidenweberei",
        ],
    },
    "cambodia-koh-kong-cities-v2": {
        "desc": (
            "Koh Kong ist die Hauptstadt der gleichnamigen Provinz im Südwesten Kambodschas und "
            "liegt am Kah-Bpow-Fluss nahe der thailändischen Grenze, etwa 270 Kilometer westlich "
            "von Phnom Penh. Die Stadt mit rund 36.000 Einwohnern ist das Tor zu den unberührten "
            "Kardamom-Bergen, einem der größten zusammenhängenden Regenwälder Südostasiens. "
            "Während des französischen Protektorats ab 1863 war Koh Kong abgelegen und kaum "
            "kontrolliert. Die Region war eine der letzten Hochburgen der Roten Khmer (1975-1979) "
            "auch nach 1979 und wurde erst in den späten 1990er Jahren befriedet. Die Koh-Kong-Brücke "
            "über den Fluss Kah Bpow wurde 2002 eröffnet und war mit 1.900 Metern lange Zeit die "
            "längste Brücke Kambodschas."
        ),
        "facts": [
            "Hauptstadt der Provinz Koh Kong",
            "Bevölkerung ca. 36.000",
            "270 km westlich von Phnom Penh",
            "Tor zu den Kardamom-Bergen",
            "Koh-Kong-Brücke (1.900 m) seit 2002",
            "Französisches Protektorat ab 1863",
            "Späte Hochburg der Roten Khmer bis 1990er",
            "Peam-Krasop-Mangrovenschutzgebiet",
        ],
    },
    "cambodia-kep-cities-v2": {
        "desc": (
            "Kep wurde 1908 von französischen Kolonialherren als Seebad 'Kep-sur-Mer' während des "
            "französischen Protektorats (1863-1953) gegründet und entwickelte sich in den 1960er "
            "Jahren unter König Norodom Sihanouk zur mondänsten Strandresidenz Kambodschas. Die "
            "Stadt mit nur rund 41.000 Einwohnern ist Hauptstadt der gleichnamigen Provinz und liegt "
            "am Golf von Thailand, 153 Kilometer südlich von Phnom Penh. Bei der Eroberung durch "
            "die Roten Khmer 1975 wurden die luxuriösen Modernist-Villen systematisch geplündert "
            "und dem Verfall preisgegeben - viele Ruinen sind bis heute erhalten. Berühmt ist Kep "
            "für seinen Krabbenmarkt mit der Lokalspezialität blaue Krabbe in Kampot-Pfeffer."
        ),
        "facts": [
            "Gegründet 1908 als 'Kep-sur-Mer'",
            "Bevölkerung ca. 41.000",
            "Hauptstadt der Provinz Kep",
            "Mondänste Resort-Stadt der 1960er",
            "Französisches Protektorat 1863-1953",
            "Villen geplündert von Roten Khmer 1975",
            "153 km südlich von Phnom Penh",
            "Berühmter Krabbenmarkt",
        ],
    },
    "cambodia-kampot-cities-v2": {
        "desc": (
            "Kampot ist die Hauptstadt der gleichnamigen Provinz am Praek-Tuek-Chhu-Fluss und liegt "
            "148 Kilometer südwestlich von Phnom Penh. Die Stadt mit rund 39.000 Einwohnern war "
            "während des französischen Protektorats (1863-1953) der wichtigste Hafen Kambodschas, "
            "bevor Sihanoukville 1960 ihn ablöste. Die gut erhaltene französische Kolonialarchitektur "
            "im Stadtzentrum stammt aus dieser Zeit. Weltberühmt ist der Kampot-Pfeffer, dessen "
            "Anbau im 13. Jahrhundert begann und der seit 2010 als geschützte geografische Angabe "
            "(GGA/IGP) der EU registriert ist. Unter den Roten Khmer 1975-1979 wurde der Pfefferanbau "
            "fast ausgelöscht; erst nach 2000 wurde er wiederbelebt. Bokor Hill Station auf 1.080 m "
            "ist nahe."
        ),
        "facts": [
            "Hauptstadt der Provinz Kampot",
            "Bevölkerung ca. 39.000",
            "148 km südwestlich von Phnom Penh",
            "Wichtigster Hafen während des Protektorats 1863-1953",
            "Kampot-Pfeffer EU-GGA seit 2010",
            "Pfefferanbau seit dem 13. Jahrhundert",
            "Pfefferanbau fast vernichtet 1975-1979",
            "Bokor-Hill-Station (1.080 m) in der Nähe",
        ],
    },
    "cambodia-pailin-cities-v2": {
        "desc": (
            "Pailin liegt in den Ausläufern der Kardamom-Berge nahe der thailändischen Grenze, 379 "
            "Kilometer nordwestlich von Phnom Penh. Die Stadt mit rund 31.000 Einwohnern war im "
            "19. und 20. Jahrhundert weltberühmt für ihre Saphir- und Rubinminen, die heute "
            "weitgehend erschöpft sind. Während des französischen Protektorats ab 1863 war Pailin "
            "Teil der von Siam kontrollierten Provinz Battambang und kam erst 1907 zu Kambodscha. "
            "Nach dem Sturz des Pol-Pot-Regimes 1979 wurde Pailin zur letzten Hochburg der Roten "
            "Khmer und blieb bis 1996 unter ihrer Kontrolle - finanziert durch Edelsteinhandel und "
            "Holzschmuggel. Erst nach der Kapitulation Ieng Sarys 1996 wurde die Region wieder Teil "
            "des Staates."
        ),
        "facts": [
            "Bevölkerung ca. 31.000",
            "379 km nordwestlich von Phnom Penh",
            "Berühmt für Saphire und Rubine",
            "Erst 1907 zu Kambodscha (Siam zuvor)",
            "Französisches Protektorat ab 1863",
            "Letzte Hochburg der Roten Khmer 1979-1996",
            "Kapitulation von Ieng Sary 1996",
            "Wat Phnom Yat über der Stadt",
        ],
    },
    "cambodia-kratie-cities-v2": {
        "desc": (
            "Kratie ist die Hauptstadt der gleichnamigen Provinz im Nordosten Kambodschas und liegt "
            "am Mekong, 315 Kilometer nordöstlich von Phnom Penh. Die Stadt mit rund 36.000 "
            "Einwohnern hat ihre französische Kolonialarchitektur aus der Zeit des Protektorats "
            "(ab 1863) gut erhalten, da sie weder im Vietnamkrieg noch unter den Roten Khmer "
            "1975-1979 stark zerstört wurde. Berühmt ist Kratie als bester Ort, um die vom Aussterben "
            "bedrohten Irrawaddy-Süßwasserdelfine (Orcaella brevirostris) zu beobachten - bei Kampi, "
            "15 Kilometer nördlich, leben nur noch etwa 90 Tiere im Mekong. Die Insel Koh Trong vor "
            "der Stadt ist über eine Fähre erreichbar und für ihre Pomelo-Plantagen bekannt."
        ),
        "facts": [
            "Hauptstadt der Provinz Kratie",
            "Bevölkerung ca. 36.000",
            "315 km nordöstlich von Phnom Penh",
            "Französisches Protektorat ab 1863",
            "Irrawaddy-Delfine bei Kampi (ca. 90 Tiere)",
            "Liegt am Mekong",
            "Insel Koh Trong mit Pomelo-Plantagen",
            "Erhaltenes Kolonialarchitektur-Ensemble",
        ],
    },
    "cambodia-stung-treng-cities-v2": {
        "desc": (
            "Stung Treng ist die Hauptstadt der gleichnamigen Provinz im Norden Kambodschas und "
            "liegt am Zusammenfluss von Mekong, Sekong und Sesan, etwa 455 Kilometer nordöstlich von "
            "Phnom Penh nahe der laotischen Grenze. Die Stadt mit rund 30.000 Einwohnern war "
            "historisch Teil des Königreichs Champasak (Laos) und kam erst 1904 unter dem "
            "französischen Protektorat (ab 1863) zu Kambodscha. Diese späte Eingliederung erklärt "
            "die starken kulturellen Verbindungen zu Laos. Unter den Roten Khmer 1975-1979 wurde "
            "die abgelegene Region wie alle Städte evakuiert. Heute ist Stung Treng Tor zu den Don-"
            "Sahong-Stromschnellen und den Anlong-Cheuteal-Delfinen, einer kleinen Population von "
            "Irrawaddy-Delfinen direkt an der laotischen Grenze."
        ),
        "facts": [
            "Hauptstadt der Provinz Stung Treng",
            "Bevölkerung ca. 30.000",
            "455 km nordöstlich von Phnom Penh",
            "Erst 1904 zu Kambodscha (Champasak/Laos zuvor)",
            "Französisches Protektorat ab 1863",
            "Zusammenfluss von Mekong, Sekong, Sesan",
            "Anlong-Cheuteal-Delfine an laotischer Grenze",
            "Evakuiert unter Roten Khmer 1975-1979",
        ],
    },
    "cambodia-banlung-cities-v2": {
        "desc": (
            "Banlung ist die Hauptstadt der Provinz Ratanakiri im äußersten Nordosten Kambodschas "
            "und liegt 588 Kilometer von Phnom Penh entfernt nahe den Grenzen zu Laos und Vietnam. "
            "Die Stadt mit rund 25.000 Einwohnern wird wegen des roten Lateritbodens 'Rote Stadt' "
            "genannt. Die Region ist Heimat von 12 indigenen Bergvölkern, darunter die Tampuan, "
            "Jarai und Kreung, die noch heute Animisten-Religionen praktizieren. Während des "
            "französischen Protektorats ab 1863 blieb das Gebiet weitgehend unkontrolliert. Im "
            "Vietnamkrieg lag hier ein Teil des Ho-Chi-Minh-Pfads; die USA bombardierten die Region "
            "1969-1973 schwer. Unter den Roten Khmer 1975-1979 wurden die indigenen Völker zur "
            "Zwangsarbeit verpflichtet. Berühmt ist der vulkanische Kratersee Yeak Laom."
        ),
        "facts": [
            "Hauptstadt der Provinz Ratanakiri",
            "Bevölkerung ca. 25.000",
            "588 km nordöstlich von Phnom Penh",
            "Heimat von 12 indigenen Bergvölkern",
            "Französisches Protektorat ab 1863",
            "US-Bombardierung 1969-1973",
            "Yeak-Laom-Kratersee (vulkanisch)",
            "Roter Lateritboden ('Rote Stadt')",
        ],
    },
    "cambodia-sen-monorom-cities-v2": {
        "desc": (
            "Sen Monorom ist die Hauptstadt der Provinz Mondulkiri und liegt auf 800 Metern Höhe in "
            "den östlichen Hochländern Kambodschas, 370 Kilometer von Phnom Penh entfernt. Die kleine "
            "Stadt mit rund 9.000 Einwohnern hat ein deutlich kühleres Klima als der Rest des Landes "
            "und ist von Kiefernwäldern und sanften Hügeln umgeben. Die Provinz Mondulkiri ist die "
            "größte und am dünnsten besiedelte Kambodschas und Heimat der Bunong (Phnong), eines "
            "indigenen Volkes mit eigener Sprache und Kultur. Während des französischen Protektorats "
            "ab 1863 blieb das Gebiet unerschlossen. Unter den Roten Khmer 1975-1979 wurde die "
            "indigene Bevölkerung verfolgt. Heute ist Sen Monorom Zentrum von ethischen "
            "Elefantenschutzprojekten wie dem Elephant Valley Project."
        ),
        "facts": [
            "Hauptstadt der Provinz Mondulkiri",
            "Bevölkerung ca. 9.000",
            "Auf 800 m Höhe gelegen",
            "370 km östlich von Phnom Penh",
            "Heimat des Bunong-Volkes",
            "Französisches Protektorat ab 1863",
            "Verfolgung indigener Völker 1975-1979",
            "Bou-Sra-Wasserfall in der Nähe",
        ],
    },
    "cambodia-preah-vihear-cities-v2": {
        "desc": (
            "Tbeng Meanchey, offiziell auch 'Preah Vihear-Stadt' genannt, ist die Hauptstadt der "
            "Provinz Preah Vihear im Norden Kambodschas und liegt 295 Kilometer nordöstlich von "
            "Phnom Penh. Die abgelegene Stadt mit rund 25.000 Einwohnern dient als Zugangspunkt zum "
            "UNESCO-Weltkulturerbe Prasat Preah Vihear, einem 11. Jahrhundert auf einer 525-Meter-"
            "Klippe der Dangrek-Berge erbauten Khmer-Tempel direkt an der thailändischen Grenze. "
            "Der Tempel wurde während des Khmer-Reiches (802-1431) errichtet. Während des "
            "französischen Protektorats ab 1863 begann der Streit um die Grenzziehung. 1962 sprach "
            "der Internationale Gerichtshof in Den Haag den Tempel Kambodscha zu, doch erst 2013 "
            "wurde der Streit endgültig beigelegt. Unter den Roten Khmer 1975-1979 verödete die Region."
        ),
        "facts": [
            "Hauptstadt der Provinz Preah Vihear",
            "Offiziell Tbeng Meanchey",
            "Bevölkerung ca. 25.000",
            "295 km nordöstlich von Phnom Penh",
            "Tempel Prasat Preah Vihear UNESCO seit 2008",
            "Tempel aus dem 11. Jahrhundert (Khmer-Reich)",
            "IGH-Urteil 1962 (endgültig 2013)",
            "Französisches Protektorat ab 1863",
        ],
    },
    "cambodia-kampong-thom-cities-v2": {
        "desc": (
            "Kampong Thom ist die Hauptstadt der gleichnamigen Provinz in der Mitte Kambodschas und "
            "liegt am Stueng-Saen-Fluss, 165 Kilometer nördlich von Phnom Penh an der Nationalstraße "
            "6 nach Siem Reap. Die Stadt mit rund 66.000 Einwohnern ist Tor zum Tempelkomplex "
            "Sambor Prei Kuk, der prä-angkorianischen Hauptstadt Isanapura aus dem 7. Jahrhundert "
            "und seit 2017 UNESCO-Weltkulturerbe. Diese Stätte aus dem Chenla-Reich (550-802) ging "
            "dem späteren Khmer-Reich (802-1431) voraus. Während des französischen Protektorats ab "
            "1863 wurde die Stadt Verwaltungszentrum. Unter den Roten Khmer 1975-1979 lag hier eine "
            "der Killing-Fields-Stätten. Der Name bedeutet 'Großer Hafen'. Pol Pot wurde 1925 in "
            "der Provinz Kampong Thom geboren."
        ),
        "facts": [
            "Hauptstadt der Provinz Kampong Thom",
            "Bevölkerung ca. 66.000",
            "165 km nördlich von Phnom Penh",
            "Sambor Prei Kuk UNESCO seit 2017",
            "Isanapura: Chenla-Hauptstadt 7. Jahrhundert",
            "Französisches Protektorat ab 1863",
            "Geburtsprovinz von Pol Pot (1925)",
            "Name bedeutet 'Großer Hafen'",
        ],
    },
    "cambodia-sisophon-cities-v2": {
        "desc": (
            "Sisophon, offiziell Serei Saophoan, ist die Hauptstadt der Provinz Banteay Meanchey und "
            "liegt 359 Kilometer nordwestlich von Phnom Penh am Schnittpunkt der Nationalstraßen 5 "
            "und 6 sowie der Bahnstrecken nach Battambang und Poipet. Die Stadt mit rund 99.000 "
            "Einwohnern war historisch ein wichtiger Knotenpunkt und wurde im 19. Jahrhundert oft "
            "zwischen dem Königreich Siam und den Khmer-Königen umkämpft. Während des französischen "
            "Protektorats ab 1863 war Sisophon zwischen 1867 und 1907 unter siamesischer Verwaltung. "
            "Unter den Roten Khmer 1975-1979 wurde die Stadt zur strategischen Basis und Wohnort "
            "von Hou Yuon. Nahe der Stadt liegt der Tempel Banteay Chhmar aus dem 12. Jahrhundert, "
            "ein Khmer-Reich-Tempel mit den berühmten Avalokiteshvara-Reliefs."
        ),
        "facts": [
            "Hauptstadt der Provinz Banteay Meanchey",
            "Bevölkerung ca. 99.000",
            "359 km nordwestlich von Phnom Penh",
            "Schnittpunkt Nationalstraßen 5 und 6",
            "Siamesische Verwaltung 1867-1907",
            "Französisches Protektorat ab 1863",
            "Banteay-Chhmar-Tempel aus dem 12. Jahrhundert",
            "Strategische Basis der Roten Khmer 1975-1979",
        ],
    },
    "cambodia-prey-veng-cities-v2": {
        "desc": (
            "Prey Veng ist die Hauptstadt der gleichnamigen Provinz östlich des Mekong und liegt "
            "90 Kilometer östlich von Phnom Penh. Die Stadt mit rund 70.000 Einwohnern liegt im "
            "Herzen der reichsten Reisanbauregion Kambodschas - die Provinz produziert über 10% des "
            "nationalen Reises. Der Name bedeutet 'Langer Wald'. Während des französischen "
            "Protektorats ab 1863 wurde die Region durch ein umfangreiches Kanalsystem für die "
            "Bewässerung erschlossen. In der Regenzeit (Juni-November) werden weite Teile der "
            "Provinz vom Tonle-Sap-Hochwasser überschwemmt, was die Reiserträge sichert. Unter den "
            "Roten Khmer 1975-1979 wurde die Stadt evakuiert; in der Provinz wurden zahlreiche "
            "Killing-Fields-Stätten dokumentiert. Heute prägen Kolonialbauten und ein bedeutender "
            "alter Markt das Stadtbild."
        ),
        "facts": [
            "Hauptstadt der Provinz Prey Veng",
            "Bevölkerung ca. 70.000",
            "90 km östlich von Phnom Penh",
            "Über 10% der nationalen Reisproduktion",
            "Name bedeutet 'Langer Wald'",
            "Französisches Protektorat ab 1863",
            "Tonle-Sap-Hochwasser-Überschwemmungen",
            "Killing-Fields-Stätten 1975-1979",
        ],
    },
    "cambodia-svay-rieng-cities-v2": {
        "desc": (
            "Svay Rieng ist die Hauptstadt der gleichnamigen Provinz im 'Papageienschnabel'-Vorsprung "
            "Richtung Vietnam und liegt am Waiko-Fluss, 124 Kilometer östlich von Phnom Penh. Die "
            "Stadt mit rund 24.000 Einwohnern ist die östlichste Provinzhauptstadt des Landes. "
            "Während des Vietnamkriegs (1955-1975) war der 'Parrot's Beak' eine umkämpfte Region, "
            "über die der nordvietnamesische Nachschub lief; die USA bombardierten das Gebiet "
            "1969-1970 schwer. Während des französischen Protektorats ab 1863 wurde die Region als "
            "Kautschukgürtel entwickelt. Unter den Roten Khmer 1975-1979 wurde die Stadt evakuiert. "
            "Im Dezember 1978 startete von hier aus die vietnamesische Invasion, die das "
            "Pol-Pot-Regime stürzte. Heute ist Svay Rieng Tor zur Bavet-Grenze nach Vietnam."
        ),
        "facts": [
            "Hauptstadt der Provinz Svay Rieng",
            "Bevölkerung ca. 24.000",
            "124 km östlich von Phnom Penh",
            "'Papageienschnabel' Richtung Vietnam",
            "US-Bombardierung 1969-1970",
            "Französisches Protektorat ab 1863",
            "Vietnamesische Invasion startete hier Dezember 1978",
            "Liegt am Waiko-Fluss",
        ],
    },
    "cambodia-suong-cities-v2": {
        "desc": (
            "Suong ist die Hauptstadt der 2013 neu geschaffenen Provinz Tboung Khmum und liegt 113 "
            "Kilometer nordöstlich von Phnom Penh an der Nationalstraße 7 zur vietnamesischen Grenze. "
            "Die Stadt mit rund 44.000 Einwohnern wurde Provinzhauptstadt, als die Provinz Kampong "
            "Cham 2013 in zwei Teile gespalten wurde - eine der jüngsten Verwaltungsreformen "
            "Kambodschas. Während des französischen Protektorats ab 1863 wurde die Region zum "
            "Zentrum des kambodschanischen Kautschukanbaus mit der riesigen Chup-Plantage. Unter "
            "den Roten Khmer 1975-1979 wurde die Stadt evakuiert; in der Region lagen mehrere "
            "Arbeitslager. Heute ist Suong neben Kautschuk auch wichtiger Produzent von Maniok, "
            "Cashewnüssen und Pfeffer und entwickelt sich rasant durch Investitionen aus Vietnam und China."
        ),
        "facts": [
            "Hauptstadt der Provinz Tboung Khmum",
            "Bevölkerung ca. 44.000",
            "Provinz erst 2013 gegründet",
            "113 km nordöstlich von Phnom Penh",
            "Französisches Protektorat ab 1863",
            "Chup-Kautschukplantage in der Region",
            "Evakuiert unter Roten Khmer 1975-1979",
            "Wichtige Maniok- und Cashew-Produktion",
        ],
    },
    "cambodia-samraong-cities-v2": {
        "desc": (
            "Samraong ist die Hauptstadt der Provinz Oddar Meanchey im äußersten Norden Kambodschas "
            "und liegt 415 Kilometer von Phnom Penh entfernt nahe der thailändischen Grenze. Die "
            "abgelegene Stadt mit rund 24.000 Einwohnern ist Zugang zum Grenzposten O'Smach. "
            "Während des französischen Protektorats ab 1863 war die Region kaum erschlossen. Unter "
            "den Roten Khmer 1975-1979 lag hier die berüchtigte Zone 'Region 5'. Nach dem Sturz "
            "Pol Pots 1979 zogen sich die Roten Khmer in die dichten Wälder von Oddar Meanchey "
            "zurück und kontrollierten die Region noch bis Mitte der 1990er Jahre - die letzten "
            "Kämpfer kapitulierten erst 1998. Pol Pot starb 1998 in der Provinz nahe Anlong Veng. "
            "Heute ist die Region Aufnahmegebiet für viele Veteranen der Roten Khmer."
        ),
        "facts": [
            "Hauptstadt der Provinz Oddar Meanchey",
            "Bevölkerung ca. 24.000",
            "415 km nordwestlich von Phnom Penh",
            "Grenzposten O'Smach nach Thailand",
            "Französisches Protektorat ab 1863",
            "'Region 5' der Roten Khmer 1975-1979",
            "Letzte Hochburg der Roten Khmer bis 1998",
            "Pol Pot starb 1998 in der Provinz",
        ],
    },
    "cambodia-kampong-chhnang-cities-v2": {
        "desc": (
            "Kampong Chhnang ist die Hauptstadt der gleichnamigen Provinz und liegt am Tonle-Sap-Fluss "
            "kurz vor dessen Mündung in den großen See, 91 Kilometer nördlich von Phnom Penh. Die "
            "Stadt mit rund 80.000 Einwohnern ist seit Jahrhunderten als 'Töpferhafen' bekannt - "
            "der Name bedeutet wörtlich 'Tonkrug-Hafen'. Die traditionellen Cham-Töpferdörfer wie "
            "Andong Russey produzieren handgeformte Tongefäße ohne Töpferscheibe. Während des "
            "französischen Protektorats ab 1863 wurde die Stadt zum Verwaltungszentrum ausgebaut. "
            "Unter den Roten Khmer 1975-1979 wurde hier ein internationaler Flughafen mit chinesischer "
            "Hilfe gebaut, der jedoch nie eröffnet wurde - rund 10.000 Zwangsarbeiter starben beim "
            "Bau. Berühmt sind die schwimmenden Cham-Dörfer Phsar Krom und Chong Kos auf dem "
            "Tonle-Sap-See."
        ),
        "facts": [
            "Hauptstadt der Provinz Kampong Chhnang",
            "Bevölkerung ca. 80.000",
            "91 km nördlich von Phnom Penh",
            "Name bedeutet 'Tonkrug-Hafen'",
            "Cham-Töpferdörfer mit traditioneller Handarbeit",
            "Französisches Protektorat ab 1863",
            "Roter-Khmer-Flughafen (nie eröffnet) ab 1976",
            "Schwimmende Cham-Dörfer am Tonle Sap",
        ],
    },
    "cambodia-bavet-cities-v2": {
        "desc": (
            "Bavet liegt direkt an der Grenze zu Vietnam in der Provinz Svay Rieng, 162 Kilometer "
            "östlich von Phnom Penh am Mekong-Highway AH1, gegenüber der vietnamesischen Stadt Moc "
            "Bai. Die Grenzstadt mit rund 39.000 Einwohnern ist der wichtigste Landgrenzübergang "
            "zu Ho-Chi-Minh-Stadt (das ehemalige Saigon, 80 km entfernt). Während des französischen "
            "Protektorats ab 1863 lag hier nur ein kleiner Posten. Im Vietnamkrieg (1955-1975) lief "
            "über diese Route der nordvietnamesische Nachschub; die Region wurde von US-Bombern "
            "schwer getroffen. Unter den Roten Khmer 1975-1979 war die Grenze geschlossen. Seit den "
            "1990er Jahren entwickelte sich Bavet zu einem Casino-Zentrum für vietnamesische Gäste, "
            "da Glücksspiel in Vietnam verboten ist. Es gibt über 60 Casinos und mehrere "
            "Sonderwirtschaftszonen mit Textilfabriken."
        ),
        "facts": [
            "Bevölkerung ca. 39.000",
            "162 km östlich von Phnom Penh",
            "Wichtigster Landgrenzübergang nach Vietnam",
            "Gegenüber Moc Bai (Vietnam)",
            "Über 60 Casinos für vietnamesische Gäste",
            "Französisches Protektorat ab 1863",
            "US-Bombardierung im Vietnamkrieg",
            "Mehrere Sonderwirtschaftszonen",
        ],
    },
    "cambodia-neak-loeung-cities-v2": {
        "desc": (
            "Neak Loeung ist eine Handelsstadt am Mekong in der Provinz Prey Veng, 62 Kilometer "
            "östlich von Phnom Penh an der Nationalstraße 1 nach Vietnam. Die Stadt mit rund 17.000 "
            "Einwohnern war jahrzehntelang berühmt für ihre Mekong-Fähren, bevor 2015 die japanische "
            "Tsubasa-Brücke eröffnet wurde - mit 2.215 Metern Länge die längste Brücke Kambodschas. "
            "Während des französischen Protektorats ab 1863 wurde Neak Loeung zum wichtigen "
            "Handelsposten am Mekong. Am 6. August 1973 wurde die Stadt durch einen US-amerikanischen "
            "B-52-Bomber versehentlich angegriffen - mindestens 137 Zivilisten starben, einer der "
            "schwersten 'friendly fire'-Vorfälle des Vietnamkriegs in Kambodscha. Unter den Roten "
            "Khmer 1975-1979 wurde die Stadt evakuiert. Heute prägt der Markt für landwirtschaftliche "
            "Produkte das Stadtleben."
        ),
        "facts": [
            "Bevölkerung ca. 17.000",
            "62 km östlich von Phnom Penh",
            "Tsubasa-Brücke (2.215 m) seit 2015",
            "Längste Brücke Kambodschas",
            "US-Bombardierung am 6. August 1973 (137 Tote)",
            "Französisches Protektorat ab 1863",
            "Evakuiert unter Roten Khmer 1975-1979",
            "Wichtiger Mekong-Handelshafen",
        ],
    },
    "cambodia-lumphat-cities-v2": {
        "desc": (
            "Lumphat war bis 1979 die Hauptstadt der Provinz Ratanakiri, bevor diese Funktion nach "
            "Banlung verlagert wurde. Die Stadt am Srepok-Fluss liegt rund 35 Kilometer südöstlich "
            "von Banlung und 567 Kilometer nordöstlich von Phnom Penh. Heute leben hier nur noch "
            "etwa 7.000 Menschen. Während des französischen Protektorats ab 1863 wurde Lumphat als "
            "Verwaltungsposten ausgebaut. Im Vietnamkrieg lief der Ho-Chi-Minh-Pfad teilweise durch "
            "die Region; US-Bomber zerstörten die Stadt 1969-1973 nahezu vollständig - kaum ein "
            "Gebäude blieb stehen. Unter den Roten Khmer 1975-1979 verödete die Region weiter. Die "
            "Provinzhauptstadt-Funktion wurde nach 1979 nach Banlung verlegt. Lumphat ist heute Tor "
            "zum Lumphat Wildlife Sanctuary, einem 2.500 km² großen Schutzgebiet für asiatische "
            "Elefanten und Banteng."
        ),
        "facts": [
            "Ehemalige Hauptstadt der Provinz Ratanakiri (bis 1979)",
            "Bevölkerung ca. 7.000",
            "567 km nordöstlich von Phnom Penh",
            "US-Bombardierung 1969-1973 (fast völlig zerstört)",
            "Französisches Protektorat ab 1863",
            "Lumphat Wildlife Sanctuary (2.500 km²)",
            "Liegt am Srepok-Fluss",
            "Ho-Chi-Minh-Pfad teilweise durch die Region",
        ],
    },
    "cambodia-snuol-cities-v2": {
        "desc": (
            "Snuol ist eine Handelsstadt im Süden der Provinz Kratie an der Nationalstraße 7, 222 "
            "Kilometer nordöstlich von Phnom Penh am Knotenpunkt der Routen nach Mondulkiri und "
            "Vietnam. Die Stadt mit rund 35.000 Einwohnern liegt in einer Region voller Kautschuk- "
            "und Cashew-Plantagen. Während des französischen Protektorats ab 1863 wurde Snuol zum "
            "Zentrum des Kautschukanbaus ausgebaut. Im Mai 1970 fand hier die 'Schlacht von Snuol' "
            "statt - ein wichtiges Gefecht der US-amerikanischen und südvietnamesischen Invasion "
            "Kambodschas, in dem die Stadt schwer beschädigt wurde. Unter den Roten Khmer 1975-1979 "
            "wurde Snuol evakuiert. 1978 wurde hier die 'Kampuchean United Front for National "
            "Salvation' (KUFNS) gegründet, die mit vietnamesischer Hilfe die Roten Khmer 1979 stürzte."
        ),
        "facts": [
            "Bevölkerung ca. 35.000",
            "222 km nordöstlich von Phnom Penh",
            "Schlacht von Snuol Mai 1970",
            "KUFNS-Gründung 1978",
            "Französisches Protektorat ab 1863",
            "Großes Kautschuk- und Cashew-Anbaugebiet",
            "Knotenpunkt zu Mondulkiri und Vietnam",
            "Evakuiert unter Roten Khmer 1975-1979",
        ],
    },
}


def to_str_arr(items: list[str]) -> str:
    parts = []
    for it in items:
        esc = it.replace("\\", "\\\\").replace('"', '\\"')
        parts.append(f'"{esc}"')
    return "[" + ", ".join(parts) + "]"


def find_empty_de(text: str) -> list[str]:
    """Return list of POI ids whose descriptionAdvanced.de is missing/empty."""
    poi_pattern = re.compile(r'id:\s*"([^"]+)"')
    matches = list(poi_pattern.finditer(text))
    empty = []
    for i, m in enumerate(matches):
        poi_id = m.group(1)
        start = m.start()
        end = matches[i + 1].start() if i + 1 < len(matches) else len(text)
        block = text[start:end]
        da = re.search(r'descriptionAdvanced:\s*\{', block)
        if not da:
            empty.append(poi_id)
            continue
        body_start = da.end()
        depth = 1
        j = body_start
        while j < len(block) and depth > 0:
            if block[j] == '{':
                depth += 1
            elif block[j] == '}':
                depth -= 1
            j += 1
        body = block[body_start:j - 1]
        de_match = re.search(r'\bde:\s*"([^"]*)"', body)
        if not de_match or not de_match.group(1).strip():
            empty.append(poi_id)
    return empty


def main():
    src = FILE.read_text(encoding="utf-8")
    empty_before = find_empty_de(src)
    print(f"Empty descriptionAdvanced.de before: {len(empty_before)}")

    target_ids = [pid for pid in empty_before if pid in DATA][:30]
    print(f"Target POIs (in DATA): {len(target_ids)}")

    patched = 0
    skipped = []
    for poi_id in target_ids:
        data = DATA[poi_id]
        desc_de = data["desc"].replace("\\", "\\\\").replace('"', '\\"')
        facts_arr = to_str_arr(data["facts"])

        # Match the POI's facts: { ... } block then capture trailing whitespace and closing `}` of POI
        # Pattern targets the closing of the POI object: `    }\n  },` or end-of-array.
        # We insert descriptionAdvanced + factsAdvanced after the facts block.
        pattern = re.compile(
            r'(\{\s*\n\s*id:\s*"' + re.escape(poi_id) + r'",.*?facts:\s*\{[^{}]*\{[^{}]*\}[^{}]*\}[^{}]*\}\s*)(\n\s*\})',
            re.DOTALL,
        )
        # Simpler: match facts: { ... balanced ... }, then capture next "  }" of POI close.
        # But facts is a flat object without nested braces; let's use a custom finder.

        # Find the POI block and locate end of facts: { ... }
        id_re = re.compile(r'id:\s*"' + re.escape(poi_id) + r'"')
        m = id_re.search(src)
        if not m:
            skipped.append(poi_id + " (id not found)")
            continue
        # Find facts: { after this id
        facts_m = re.search(r'facts:\s*\{', src[m.end():])
        if not facts_m:
            skipped.append(poi_id + " (no facts block)")
            continue
        facts_open = m.end() + facts_m.end()  # position right after `{`
        depth = 1
        j = facts_open
        while j < len(src) and depth > 0:
            if src[j] == '{':
                depth += 1
            elif src[j] == '}':
                depth -= 1
            j += 1
        # j points right after closing `}` of facts
        facts_end = j  # position right after the `}`

        # Build insertion
        adv = (
            ',\n    descriptionAdvanced: { de: "' + desc_de + '" }'
            + ',\n    factsAdvanced: { de: ' + facts_arr + ' }'
        )
        src = src[:facts_end] + adv + src[facts_end:]
        patched += 1

    FILE.write_text(src, encoding="utf-8")
    empty_after = find_empty_de(src)
    print(f"Patched {patched} POIs")
    print(f"Empty descriptionAdvanced.de after: {len(empty_after)}")
    if skipped:
        print("Skipped:")
        for s in skipped:
            print(" -", s)


if __name__ == "__main__":
    main()
