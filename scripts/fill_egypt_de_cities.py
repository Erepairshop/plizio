# -*- coding: utf-8 -*-
"""
Fill DE descriptionAdvanced + factsAdvanced for Egyptian POIs in
lib/visualLab/data/poiExtraEgyptCitiesV2.ts.

Targets only template-filled DE entries (containing
"ist ein bemerkenswertes Element der Geografie") and
factsAdvanced.de that contains "Liegt im Gebiet der Arabischen Republik".
"""
import re
from pathlib import Path

FILE = Path(__file__).resolve().parent.parent / "lib" / "visualLab" / "data" / "poiExtraEgyptCitiesV2.ts"

# Each entry: id -> (description_de, facts_de_list)
# DE: 80-150 Wörter, konkrete Fakten (Jahr, Name, Größe, Bevölkerung).
DATA = {
    "alexandria-cities-v2": (
        "Alexandria ist mit rund 5,4 Millionen Einwohnern die zweitgrößte Stadt Ägyptens und ihr wichtigster Mittelmeerhafen. Gegründet wurde sie 331 v. Chr. von Alexander dem Großen, der den hellenistischen Stadtplan persönlich entwarf. In der Antike war sie Heimat der berühmten Bibliothek mit bis zu 700 000 Schriftrollen sowie des Pharos, des etwa 130 Meter hohen Leuchtturms, der zu den Sieben Weltwundern zählte. Während der britischen Verwaltung von 1882 bis 1952 blieb Alexandria ein kosmopolitisches Handelszentrum. Heute erinnert die 2002 eröffnete Bibliotheca Alexandrina an dieses Erbe; das Stadtgebiet erstreckt sich über mehr als 30 Kilometer Küste.",
        [
            "Zweitgrößte Stadt Ägyptens mit rund 5,4 Millionen Einwohnern.",
            "Gegründet 331 v. Chr. von Alexander dem Großen.",
            "Der antike Pharos-Leuchtturm war etwa 130 Meter hoch.",
            "Die antike Bibliothek umfasste bis zu 700 000 Schriftrollen.",
            "Die Bibliotheca Alexandrina wurde 2002 als modernes Pendant eröffnet.",
            "Während der britischen Verwaltung 1882-1952 ein wichtiger Hafen.",
            "Stadtgebiet zieht sich über 30 Kilometer entlang der Mittelmeerküste.",
        ],
    ),
    "giza-cities-v2": (
        "Gizeh liegt am Westufer des Nils direkt gegenüber von Kairo und hat heute über 9 Millionen Einwohner im Gouvernement. Weltberühmt ist die Stadt durch das Plateau mit den Pyramiden, errichtet während der 4. Dynastie um 2580-2510 v. Chr. Die Cheops-Pyramide ist mit ursprünglich 146,6 Metern Höhe das einzige erhaltene der Sieben Weltwunder. Daneben stehen die Pyramiden des Chephren und Mykerinos sowie die etwa 73 Meter lange Sphinx. 1979 wurde der Komplex von der UNESCO zum Welterbe erklärt. Im neuen Grand Egyptian Museum, eröffnet 2024, werden über 100 000 Artefakte gezeigt.",
        [
            "Die Cheops-Pyramide war ursprünglich 146,6 Meter hoch.",
            "Erbaut in der 4. Dynastie um 2580-2510 v. Chr.",
            "Einziges erhaltenes der Sieben Weltwunder der Antike.",
            "Die Sphinx ist etwa 73 Meter lang und 20 Meter hoch.",
            "1979 zum UNESCO-Welterbe erklärt.",
            "Das Grand Egyptian Museum wurde 2024 eröffnet.",
            "Im Gouvernement leben rund 9 Millionen Menschen.",
        ],
    ),
    "shubra-el-kheima-cities-v2": (
        "Schubra al-Chaima liegt unmittelbar nördlich von Kairo am Ostufer des Nils und ist mit rund 1,1 Millionen Einwohnern eine der größten Industriestädte Ägyptens. Die Stadt wuchs vor allem nach der Industrialisierungspolitik unter Gamal Abdel Nasser ab den 1950er Jahren rasant. Heute prägen Textilfabriken, Chemieanlagen und Maschinenbau das Stadtbild; auch das größte staatliche Elektrizitätsunternehmen unterhält hier Kraftwerke. Die Bevölkerungsdichte gehört zu den höchsten Afrikas. Verwaltungstechnisch gehört Schubra al-Chaima zum Gouvernement al-Qalyubiyya, ist aber eng mit dem Großraum Kairo verflochten und über die Metrolinie 2 angebunden.",
        [
            "Rund 1,1 Millionen Einwohner und eine der dichtesten Städte Afrikas.",
            "Wuchs nach der nasseristischen Industrialisierung ab den 1950er Jahren rasant.",
            "Wichtigstes Textil- und Maschinenbauzentrum im Großraum Kairo.",
            "Beherbergt staatliche Kraftwerke und Chemieanlagen.",
            "Liegt am Ostufer des Nils im Gouvernement al-Qalyubiyya.",
            "An die Kairoer Metrolinie 2 angeschlossen.",
            "Bildet faktisch eine nördliche Erweiterung des Großraums Kairo.",
        ],
    ),
    "port-said-cities-v2": (
        "Port Said wurde 1859 zum Baubeginn des Suezkanals gegründet und benannt nach dem damaligen Khediven Said Pascha. Die Stadt am nördlichen Eingang des Kanals zählt heute rund 750 000 Einwohner. Nach der Eröffnung des Kanals 1869 entwickelte sie sich zu einem der wichtigsten Bunkerhäfen der Welt. Während der Suezkrise 1956, ausgelöst durch Nassers Verstaatlichung des Kanals, war Port Said Schauplatz britisch-französischer und israelischer Militäroperationen. Die hölzernen Balkonhäuser im Zentrum, die typische Architektur des 19. Jahrhunderts widerspiegeln, stehen unter Denkmalschutz. Seit 1976 fungiert die Stadt zudem als Freihandelszone.",
        [
            "Gegründet 1859 zum Baubeginn des Suezkanals.",
            "Benannt nach Khediven Said Pascha.",
            "Rund 750 000 Einwohner.",
            "1956 während der Suezkrise von Nassers Verstaatlichung Schauplatz von Kämpfen.",
            "Seit 1976 Freihandelszone.",
            "Holzbalkon-Architektur des 19. Jahrhunderts unter Denkmalschutz.",
            "Liegt am nördlichen Eingang des Suezkanals zum Mittelmeer.",
        ],
    ),
    "suez-cities-v2": (
        "Sues liegt am südlichen Ende des Suezkanals am Golf von Sues und hat etwa 750 000 Einwohner. Die Stadt war bereits in der Antike als Klysma ein wichtiger Hafenplatz; ihre moderne Bedeutung gewann sie nach der Eröffnung des Suezkanals 1869. 1956, nach Nassers Verstaatlichung des Kanals, wurde Sues Schauplatz von Kämpfen, ebenso 1967 und 1973 während der Kriege gegen Israel. Bis 1975 blieb der Kanal nach den Schäden des Sechstagekriegs gesperrt. Heute prägen die Petrochemie sowie die Raffinerie der ägyptischen Allgemeinen Petroleum-Gesellschaft das wirtschaftliche Profil der Stadt.",
        [
            "Etwa 750 000 Einwohner am Golf von Sues.",
            "Südlicher Endpunkt des 1869 eröffneten Suezkanals.",
            "Schauplatz der Suezkrise 1956 unter Nasser.",
            "Während des Sechstagekriegs 1967 schwer zerstört.",
            "Der Kanal blieb nach 1967 bis 1975 gesperrt.",
            "Wichtigste Raffineriestadt Ägyptens.",
            "Bereits in der Antike als Klysma ein bedeutender Hafen.",
        ],
    ),
    "mansoura-cities-v2": (
        "Al-Mansura liegt im östlichen Nildelta am Damietta-Arm und ist Hauptstadt des Gouvernements ad-Daqahliyya mit rund 580 000 Einwohnern. Gegründet wurde sie 1219 vom Ayyubidensultan al-Kamil. Berühmt wurde die Stadt 1250, als hier der französische König Ludwig IX. während des Sechsten Kreuzzugs in der Schlacht von al-Mansura gefangen genommen wurde. Im Bait-al-Qadi-Haus, in dem der König festgehalten wurde, befindet sich heute ein Museum. Wirtschaftlich ist al-Mansura für Baumwollverarbeitung und Textilien bekannt; die 1972 gegründete Universität al-Mansura zählt über 100 000 Studierende.",
        [
            "Hauptstadt des Gouvernements ad-Daqahliyya mit rund 580 000 Einwohnern.",
            "Gegründet 1219 vom Ayyubidensultan al-Kamil.",
            "Schauplatz der Schlacht 1250, in der Ludwig IX. gefangen genommen wurde.",
            "Bait-al-Qadi-Museum erinnert an die Gefangenschaft des Königs.",
            "Universität al-Mansura wurde 1972 gegründet.",
            "Liegt am Damietta-Arm des Nils im östlichen Delta.",
            "Wichtiges Zentrum für Baumwoll- und Textilverarbeitung.",
        ],
    ),
    "el-mahalla-el-kubra-cities-v2": (
        "Al-Mahalla al-Kubra liegt im zentralen Nildelta im Gouvernement al-Gharbiyya und ist mit etwa 540 000 Einwohnern eine der größten Städte Ägyptens außerhalb der Metropolregionen Kairo und Alexandria. Die Stadt ist seit dem Mittelalter Zentrum der Textilindustrie. Das 1927 gegründete Unternehmen Misr Spinning and Weaving betreibt hier mit über 25 000 Beschäftigten die größte Textilfabrik des Nahen Ostens. Streiks der Mahalla-Arbeiter im April 2008 gelten als Vorläufer der Revolution von 2011. Im Stadtkern stehen Moscheen aus mamlukischer Zeit, darunter die Moschee von Sidi Abdallah aus dem 14. Jahrhundert.",
        [
            "Etwa 540 000 Einwohner im Gouvernement al-Gharbiyya.",
            "Größte Textilfabrik des Nahen Ostens: Misr Spinning and Weaving.",
            "Misr Spinning and Weaving wurde 1927 gegründet.",
            "Über 25 000 Beschäftigte allein im Hauptwerk.",
            "Arbeiterstreiks 2008 gelten als Vorboten der Revolution 2011.",
            "Moschee von Sidi Abdallah aus dem 14. Jahrhundert.",
            "Liegt im Zentrum des Nildeltas.",
        ],
    ),
    "tanta-cities-v2": (
        "Tanta ist Hauptstadt des Gouvernements al-Gharbiyya im Nildelta, etwa 90 Kilometer nördlich von Kairo, und zählt rund 460 000 Einwohner. Die Stadt ist Eisenbahnknotenpunkt zwischen Kairo und Alexandria. Berühmt ist Tanta vor allem als religiöses Zentrum: die Moschee des Sufi-Heiligen Ahmad al-Badawi (gestorben 1276) ist Ziel des Mulid-Festes, zu dem jedes Jahr im Oktober bis zu zwei Millionen Pilger kommen. Wirtschaftlich basiert Tanta auf der Verarbeitung von Baumwolle und Zuckerrohr; die Universität von Tanta wurde 1972 gegründet und ist eine der zehn größten Ägyptens.",
        [
            "Hauptstadt des Gouvernements al-Gharbiyya mit rund 460 000 Einwohnern.",
            "Eisenbahnknoten zwischen Kairo und Alexandria.",
            "Moschee des Sufi-Heiligen Ahmad al-Badawi (gestorben 1276).",
            "Jährliches Mulid-Fest mit bis zu zwei Millionen Pilgern.",
            "Universität Tanta wurde 1972 gegründet.",
            "Verarbeitet Baumwolle und Zuckerrohr aus dem Delta.",
            "Liegt etwa 90 Kilometer nördlich von Kairo.",
        ],
    ),
    "asyut-cities-v2": (
        "Assiut liegt in Mittelägypten am Westufer des Nils, rund 375 Kilometer südlich von Kairo, und ist mit etwa 470 000 Einwohnern die größte Stadt Oberägyptens. Bereits in pharaonischer Zeit war die Region als Gau von Lykopolis bekannt. Heute ist Assiut Hauptstadt des gleichnamigen Gouvernements und Bischofssitz der koptisch-orthodoxen Kirche; rund 30 Prozent der Einwohner sind koptische Christen. Das Assiut-Wehr aus dem Jahr 1902, errichtet unter britischer Verwaltung, regelt die Bewässerung Mittelägyptens. Die Universität Assiut, gegründet 1957, war die erste außerhalb der Metropolen Kairo und Alexandria.",
        [
            "Größte Stadt Oberägyptens mit rund 470 000 Einwohnern.",
            "In pharaonischer Zeit als Lykopolis bekannt.",
            "Bischofssitz der koptisch-orthodoxen Kirche.",
            "Rund 30 Prozent koptische Christen unter den Einwohnern.",
            "Assiut-Wehr von 1902 unter britischer Verwaltung errichtet.",
            "Universität Assiut wurde 1957 als erste außerhalb der Metropolen gegründet.",
            "Liegt rund 375 Kilometer südlich von Kairo.",
        ],
    ),
    "ismailia-cities-v2": (
        "Ismailia liegt am Westufer des Suezkanals auf halbem Weg zwischen Port Said und Sues und hat etwa 400 000 Einwohner. Gegründet wurde die Stadt 1863 von Khediven Ismail Pascha als Verwaltungszentrum für den Kanalbau und nach ihm benannt. Bis 1956 hatte hier die Suezkanal-Gesellschaft, eine britisch-französische Gesellschaft, ihren Sitz. 1952 löste eine Auseinandersetzung zwischen ägyptischer Polizei und britischen Truppen die Ereignisse aus, die kurz darauf zur Revolution führten. Heute ist Ismailia von Gärten, Kolonialvillen und dem Timsah-See geprägt; das Suezkanal-Behördenhauptquartier befindet sich seit 1956 in der Stadt.",
        [
            "Etwa 400 000 Einwohner am Westufer des Suezkanals.",
            "Gegründet 1863 von Khediven Ismail Pascha.",
            "Sitz der Suezkanal-Gesellschaft bis zur Verstaatlichung 1956.",
            "1952 Schauplatz der Auseinandersetzung mit britischen Truppen.",
            "Hauptquartier der Suezkanal-Behörde seit 1956.",
            "Am Timsah-See gelegen, Teil des Kanal-Systems.",
            "Bekannt für Kolonialvillen und Parkanlagen.",
        ],
    ),
    "faiyum-cities-v2": (
        "Al-Fayyum liegt in einer fruchtbaren Senke etwa 100 Kilometer südwestlich von Kairo und hat rund 380 000 Einwohner. Bereits seit dem 4. Jahrtausend v. Chr. besiedelt, war die Stadt unter dem Namen Krokodilopolis Hauptort des Sobek-Kults. Pharao Amenemhet III. ließ im 19. Jahrhundert v. Chr. die Region umfassend bewässern; der Mörissee diente als Wasserspeicher. In hellenistischer Zeit hieß sie Arsinoë. Berühmt sind die in der Region gefundenen Mumienporträts aus dem 1. bis 3. Jahrhundert n. Chr. Heute fließt durch die Stadt der Bahr Yusuf, ein antiker Bewässerungskanal, an dessen Ufer noch traditionelle Wasserräder stehen.",
        [
            "Rund 380 000 Einwohner in einer fruchtbaren Senke der Wüste.",
            "Antiker Name Krokodilopolis, Zentrum des Sobek-Kults.",
            "Pharao Amenemhet III. baute im 19. Jh. v. Chr. die Bewässerung aus.",
            "Hellenistischer Name Arsinoë.",
            "Berühmte Fayum-Mumienporträts aus dem 1.-3. Jahrhundert n. Chr.",
            "Bahr Yusuf-Kanal speist die Oase noch heute.",
            "Traditionelle Wasserräder als Wahrzeichen.",
        ],
    ),
    "zagazig-cities-v2": (
        "Zagazig liegt im östlichen Nildelta etwa 80 Kilometer nordöstlich von Kairo und ist Hauptstadt des Gouvernements asch-Scharqiyya mit rund 380 000 Einwohnern. Die Stadt entstand erst Anfang des 19. Jahrhunderts als Knotenpunkt am Ismailia-Süßwasserkanal. Ganz in der Nähe liegen die Ruinen von Bubastis, der antiken Hauptstadt der 22. Dynastie ab 943 v. Chr., mit dem Tempel der Katzengöttin Bastet. Zagazig ist Geburtsort des nationalistischen Politikers Ahmad Urabi, der 1881-1882 die Urabi-Bewegung gegen britischen Einfluss anführte. Die Universität Zagazig wurde 1974 gegründet und gehört zu den größten Ägyptens.",
        [
            "Hauptstadt des Gouvernements asch-Scharqiyya mit rund 380 000 Einwohnern.",
            "Etwa 80 Kilometer nordöstlich von Kairo am Ismailia-Süßwasserkanal.",
            "Nahe den Ruinen der antiken Hauptstadt Bubastis ab 943 v. Chr.",
            "Tempel der Katzengöttin Bastet in Bubastis.",
            "Geburtsort des Nationalistenführers Ahmad Urabi (1841-1911).",
            "Urabi führte 1881-1882 die Bewegung gegen britischen Einfluss an.",
            "Universität Zagazig wurde 1974 gegründet.",
        ],
    ),
    "damietta-cities-v2": (
        "Damiette liegt am östlichen Mündungsarm des Nils ins Mittelmeer und hat rund 280 000 Einwohner. Im Mittelalter war die Stadt zentraler Hafen Ägyptens und wurde während der Kreuzzüge zum Schauplatz dramatischer Belagerungen: 1219-1221 nahmen Kreuzfahrer die Stadt im Fünften Kreuzzug ein, 1249 erneut Ludwig IX. im Sechsten Kreuzzug. Sultan Baibars ließ den Hafen daraufhin zerstören. Heute ist Damiette für Möbelherstellung weltbekannt; rund 40 Prozent der ägyptischen Möbelproduktion stammen aus der Region. Das 2008 eröffnete LNG-Terminal macht die Stadt zudem zu einem Energiehafen für den Mittelmeerraum.",
        [
            "Rund 280 000 Einwohner an der östlichen Nilmündung.",
            "Im Fünften Kreuzzug 1219-1221 von Kreuzfahrern erobert.",
            "1249 erneut von Ludwig IX. im Sechsten Kreuzzug eingenommen.",
            "Sultan Baibars ließ den Hafen nach den Kreuzzügen zerstören.",
            "Heute Zentrum der ägyptischen Möbelproduktion mit etwa 40 Prozent Anteil.",
            "LNG-Exportterminal seit 2008 in Betrieb.",
            "Liegt am östlichen Mündungsarm des Nils ins Mittelmeer.",
        ],
    ),
    "aswan-cities-v2": (
        "Assuan liegt am Ostufer des Nils am Ersten Katarakt und ist mit etwa 290 000 Einwohnern die südlichste Großstadt Ägyptens. In der Antike unter dem Namen Syene war sie wichtige Garnisonsstadt; bereits Eratosthenes berechnete hier um 240 v. Chr. erstmals den Erdumfang. Berühmt ist die Stadt vor allem für den 1971 unter Präsident Nasser fertiggestellten Hochdamm, der den Nassersee mit 5 250 Quadratkilometern Fläche aufstaut. Der Bau verdrängte rund 100 000 Nubier; die Tempel von Abu Simbel wurden 1964-1968 in einer UNESCO-Aktion versetzt. Assuan ist heute Endpunkt des Nilkreuzfahrttourismus.",
        [
            "Südlichste Großstadt Ägyptens mit etwa 290 000 Einwohnern.",
            "Antiker Name Syene, Garnisonsstadt am Ersten Katarakt.",
            "Eratosthenes berechnete hier um 240 v. Chr. den Erdumfang.",
            "Hochdamm 1971 unter Nasser fertiggestellt.",
            "Nassersee mit 5 250 Quadratkilometern Fläche.",
            "Bau verdrängte rund 100 000 Nubier aus ihren Heimatdörfern.",
            "Abu-Simbel-Tempel wurden 1964-1968 von der UNESCO versetzt.",
        ],
    ),
    "minya-cities-v2": (
        "Al-Minya liegt am Westufer des Nils in Mittelägypten, rund 245 Kilometer südlich von Kairo, und hat etwa 240 000 Einwohner. Wegen ihrer relativ großen koptischen Gemeinde von rund 50 Prozent wird sie auch als 'Braut Oberägyptens' bezeichnet. Nahe der Stadt liegt die antike Hauptstadt Achetaton, gegründet 1346 v. Chr. von Pharao Echnaton, sowie die Felsengräber von Beni Hassan aus der 12. Dynastie. Die 1976 gegründete Universität al-Minya zählt rund 70 000 Studierende. Die Stadt ist Hauptort des gleichnamigen Gouvernements und ein wichtiges Zentrum der Zuckerrohrverarbeitung in Mittelägypten.",
        [
            "Etwa 240 000 Einwohner am Westufer des Nils.",
            "Rund 50 Prozent koptische Christen, daher 'Braut Oberägyptens'.",
            "Nahe Achetaton, der 1346 v. Chr. von Echnaton gegründeten Hauptstadt.",
            "Felsengräber von Beni Hassan aus der 12. Dynastie.",
            "Universität al-Minya wurde 1976 gegründet.",
            "Wichtiges Zentrum der Zuckerrohrverarbeitung.",
            "245 Kilometer südlich von Kairo gelegen.",
        ],
    ),
    "damanhur-cities-v2": (
        "Damanhur liegt im westlichen Nildelta zwischen Alexandria und Tanta und hat rund 270 000 Einwohner. Sie ist Hauptstadt des Gouvernements al-Buhaira. Der Name leitet sich vom altägyptischen Demi-en-Hor ('Stadt des Horus') ab; in griechisch-römischer Zeit hieß sie Hermopolis Parva. Im Mittelalter war Damanhur Zentrum der Baumwollproduktion, eine Funktion, die sie bis heute erfüllt. Die Stadt ist Bahnknoten an der Strecke Alexandria-Kairo und Geburtsort der Sängerin Schadia (1929-2017), einer der bekanntesten Künstlerinnen der ägyptischen Filmgeschichte des 20. Jahrhunderts.",
        [
            "Hauptstadt des Gouvernements al-Buhaira mit rund 270 000 Einwohnern.",
            "Antiker Name Demi-en-Hor, später Hermopolis Parva.",
            "Bahnknoten an der Strecke Alexandria-Kairo.",
            "Bedeutendes Zentrum für Baumwollverarbeitung im westlichen Delta.",
            "Geburtsort der Sängerin und Schauspielerin Schadia (1929-2017).",
            "Liegt zwischen Alexandria und Tanta.",
            "Wurzeln reichen in pharaonische Zeit zurück.",
        ],
    ),
    "beni-suef-cities-v2": (
        "Beni Suef liegt am Westufer des Nils in Mittelägypten, rund 115 Kilometer südlich von Kairo, und ist mit etwa 200 000 Einwohnern Hauptstadt des gleichnamigen Gouvernements. Im Altertum gehörte das Gebiet zum 21. oberägyptischen Gau. Nahe der Stadt liegt die Pyramide von Meidum, errichtet von Pharao Sneferu um 2600 v. Chr. als erste echte Pyramide Ägyptens. Wirtschaftlich ist Beni Suef bekannt für Teppichweberei und Baumwollverarbeitung. Die Universität Beni Suef wurde 2005 gegründet. Die Stadt verfügt über einen wichtigen Eisenbahnanschluss Richtung Oberägypten und liegt nahe der neuen Hauptstadt Wedian.",
        [
            "Etwa 200 000 Einwohner und Hauptstadt des Gouvernements Beni Suef.",
            "Pyramide von Meidum nahebei, um 2600 v. Chr. von Sneferu erbaut.",
            "Galt im Altertum als 21. oberägyptischer Gau.",
            "Universität Beni Suef wurde 2005 gegründet.",
            "Bekannt für Teppichweberei und Baumwollverarbeitung.",
            "Rund 115 Kilometer südlich von Kairo am Westufer des Nils.",
            "Eisenbahnknoten Richtung Oberägypten.",
        ],
    ),
    "hurghada-cities-v2": (
        "Hurghada liegt am Westufer des Roten Meeres und ist mit etwa 250 000 Einwohnern eines der wichtigsten Tourismuszentren Ägyptens. Gegründet wurde der Ort 1909 von der britischen Anglo-Egyptian Oilfields Company als Ölhafen. Bis in die 1980er Jahre blieb Hurghada ein kleines Fischerdorf, doch nach gezielten Investitionen seit Ende der 1980er entstanden hunderte Hotels entlang der rund 40 Kilometer langen Küste. Heute besuchen jährlich über drei Millionen Touristen die Stadt; der Flughafen ist nach Kairo der zweitgrößte des Landes. Die vorgelagerten Riffe gehören zu den artenreichsten Tauchgebieten weltweit.",
        [
            "Etwa 250 000 Einwohner am Westufer des Roten Meeres.",
            "Gegründet 1909 von der Anglo-Egyptian Oilfields Company.",
            "Touristische Entwicklung begann erst Ende der 1980er Jahre.",
            "Über drei Millionen Touristen jährlich.",
            "Zweitgrößter Flughafen Ägyptens nach Kairo.",
            "Korallenriffe zählen zu den artenreichsten weltweit.",
            "Hotelzone erstreckt sich über 40 Kilometer Küste.",
        ],
    ),
    "qena-cities-v2": (
        "Qina liegt am Ostufer des Nils in Oberägypten, rund 600 Kilometer südlich von Kairo, und hat etwa 240 000 Einwohner. Sie ist Hauptstadt des Gouvernements Qina. In pharaonischer Zeit war die Region als Kaine bekannt. Nur 4 Kilometer entfernt liegt der Tempel von Dendera, ein Hauptheiligtum der Göttin Hathor; der heutige Bau wurde unter den Ptolemäern und Römern zwischen 54 v. Chr. und 60 n. Chr. errichtet. Die Stadt ist berühmt für die Herstellung der traditionellen Tonkrüge 'Qulla', die wegen ihrer kühlenden Wirkung in ganz Ägypten verbreitet sind.",
        [
            "Hauptstadt des Gouvernements Qina mit rund 240 000 Einwohnern.",
            "Tempel von Dendera nur 4 Kilometer entfernt.",
            "Hathor-Tempel ptolemäisch-römisch zwischen 54 v. Chr. und 60 n. Chr. erbaut.",
            "Antiker Name Kaine.",
            "Bekannt für die Tonkrüge 'Qulla'.",
            "Etwa 600 Kilometer südlich von Kairo.",
            "Liegt am Ostufer des Nils in Oberägypten.",
        ],
    ),
    "sohag-cities-v2": (
        "Sohag liegt am Westufer des Nils in Oberägypten, rund 470 Kilometer südlich von Kairo, und hat etwa 240 000 Einwohner. Die Stadt ist Hauptort des gleichnamigen Gouvernements. In der Nähe liegen das Weiße Kloster und das Rote Kloster, beide aus dem 5. Jahrhundert und Bauten der frühen koptischen Kirche; Schenute der Große (gestorben um 465) wirkte hier. Ebenfalls nahe befindet sich die antike Stadt Achmim, eines der ältesten Siedlungszentren Ägyptens. Die Universität Sohag wurde 1995 gegründet und ist eine der größten Mittelägyptens. Wirtschaftlich basiert die Region auf Zuckerrohranbau und Textilien.",
        [
            "Etwa 240 000 Einwohner und Hauptstadt des Gouvernements Sohag.",
            "Weißes und Rotes Kloster aus dem 5. Jahrhundert nahebei.",
            "Schenute der Große (gestorben um 465) prägte das koptische Mönchtum hier.",
            "Antike Stadt Achmim direkt gegenüber am Ostufer.",
            "Universität Sohag wurde 1995 gegründet.",
            "Zentrum für Zuckerrohranbau und Textilverarbeitung.",
            "Etwa 470 Kilometer südlich von Kairo.",
        ],
    ),
    "shibin-el-kom-cities-v2": (
        "Schibin al-Kaum liegt im zentralen Nildelta und ist Hauptstadt des Gouvernements al-Munufiyya mit rund 200 000 Einwohnern. Die Stadt ist berühmt als Geburtsregion mehrerer ägyptischer Präsidenten, darunter Anwar as-Sadat (geboren 1918 in Mit Abu al-Kum) und Hosni Mubarak (geboren 1928 in Kafr al-Musailha). Die Universität al-Munufiyya wurde 1976 gegründet und ist Schwerpunkt für Veterinär- und Agrarwissenschaften. Wirtschaftlich basiert Schibin al-Kaum auf Baumwollverarbeitung und Lebensmittelindustrie. Verkehrlich ist die Stadt über die Linie Kairo-Alexandria gut angebunden und liegt im fruchtbarsten Teil des Deltas.",
        [
            "Hauptstadt des Gouvernements al-Munufiyya mit rund 200 000 Einwohnern.",
            "Geburtsregion der Präsidenten Sadat (1918) und Mubarak (1928).",
            "Universität al-Munufiyya wurde 1976 gegründet.",
            "Schwerpunkt Veterinär- und Agrarwissenschaften.",
            "Liegt im zentralen Nildelta.",
            "Wichtiges Zentrum für Baumwoll- und Lebensmittelindustrie.",
            "Verkehrsknoten zwischen Kairo und Alexandria.",
        ],
    ),
    "banha-cities-v2": (
        "Banha ist Hauptstadt des Gouvernements al-Qalyubiyya, etwa 48 Kilometer nördlich von Kairo, und hat rund 170 000 Einwohner. Die Stadt liegt am Damietta-Arm des Nils und ist wichtiger Eisenbahnknoten an der Hauptstrecke Kairo-Alexandria, eröffnet 1856 unter britischer Beteiligung. Im Altertum stand hier die Stadt Athribis, ein Kultzentrum des Gottes Khentechtai; archäologische Reste sind im Stadtgebiet erhalten. Bekannt ist Banha für die Honigproduktion sowie für die Universität Banha, gegründet 2005. Die Stadt liegt zudem am Süßwasserkanal Bahr al-Tawfiqi und ist landwirtschaftlich auf Baumwolle und Gemüse spezialisiert.",
        [
            "Hauptstadt des Gouvernements al-Qalyubiyya mit rund 170 000 Einwohnern.",
            "48 Kilometer nördlich von Kairo am Damietta-Arm.",
            "Eisenbahnknoten an der 1856 eröffneten Strecke Kairo-Alexandria.",
            "Antike Stadt Athribis, Kultzentrum des Khentechtai.",
            "Universität Banha wurde 2005 gegründet.",
            "Bekannt für Honigproduktion.",
            "Liegt am Bahr al-Tawfiqi Süßwasserkanal.",
        ],
    ),
    "arish-cities-v2": (
        "Al-Arisch liegt an der Mittelmeerküste der Sinai-Halbinsel und ist mit rund 170 000 Einwohnern Hauptstadt des Gouvernements Nordsinai. Die Stadt entwickelte sich um eine osmanische Festung aus dem Jahr 1560. Im Ersten Weltkrieg fanden hier 1917 Gefechte zwischen britischen und osmanischen Truppen statt. Während des Sechstagekriegs 1967 wurde al-Arisch von Israel erobert und blieb bis 1979 unter Besatzung; im Frieden von 1979 kam die Stadt zurück zu Ägypten. Die Region ist seit den 2010er Jahren von Konflikten geprägt. Wirtschaftlich basiert al-Arisch auf Fischerei und Dattelanbau.",
        [
            "Hauptstadt des Gouvernements Nordsinai mit rund 170 000 Einwohnern.",
            "Osmanische Festung von 1560 als Ursprung der Stadt.",
            "1917 Schauplatz britisch-osmanischer Gefechte im Ersten Weltkrieg.",
            "Von 1967 bis 1979 unter israelischer Besatzung.",
            "Mit dem Frieden von 1979 zu Ägypten zurückgekehrt.",
            "Liegt an der Mittelmeerküste der Sinai-Halbinsel.",
            "Lebt von Fischerei und Dattelanbau.",
        ],
    ),
    "mallawi-cities-v2": (
        "Mallawi liegt am Westufer des Nils in Mittelägypten zwischen Minya und Asyut und hat rund 130 000 Einwohner. Die Stadt ist bekannt für ihre Nähe zu wichtigen archäologischen Stätten: Das Dorf el-Aschmunein, das antike Hermopolis Magna mit Kultzentrum des Thot, liegt nur etwa 7 Kilometer entfernt. Auch die Felsgräber von Tuna el-Gebel mit den Ibis-Katakomben sind unweit. 2013 wurde das Mallawi-Museum während politischer Unruhen geplündert, später jedoch restauriert und 2016 wiedereröffnet. Wirtschaftlich basiert Mallawi auf Zuckerrohrverarbeitung; eine 1903 errichtete Zuckerfabrik prägt das Stadtbild bis heute.",
        [
            "Rund 130 000 Einwohner zwischen Minya und Asyut.",
            "Hermopolis Magna nur 7 Kilometer entfernt.",
            "Felsgräber von Tuna el-Gebel mit Ibis-Katakomben in der Nähe.",
            "Mallawi-Museum 2013 geplündert, 2016 wiedereröffnet.",
            "Zuckerfabrik aus dem Jahr 1903 prägt das Stadtbild.",
            "Liegt am Westufer des Nils in Mittelägypten.",
            "Wichtiges Zentrum der Zuckerrohrverarbeitung.",
        ],
    ),
    "tenth-of-ramadan-cities-v2": (
        "Die Stadt des 10. Ramadan wurde 1977 von Präsident Anwar as-Sadat gegründet, benannt nach dem Datum des Beginns des Jom-Kippur-Krieges am 6. Oktober 1973, der im islamischen Kalender auf den 10. Ramadan fiel. Sie liegt etwa 55 Kilometer nordöstlich von Kairo entlang der Wüstenstraße nach Ismailia und hat heute rund 200 000 Einwohner. Die Stadt war Teil eines staatlichen Programms zur Entlastung Kairos und zur Industrialisierung; heute befinden sich hier über 1 500 Fabriken, darunter Werke von Suzuki, Bavaria und nationalen Pharma-Konzernen. Sie ist eine der erfolgreichsten 'neuen Städte' Ägyptens.",
        [
            "1977 von Präsident Sadat als 'neue Stadt' gegründet.",
            "Benannt nach dem 10. Ramadan, Beginn des Krieges 1973.",
            "Rund 200 000 Einwohner.",
            "Etwa 55 Kilometer nordöstlich von Kairo.",
            "Über 1 500 Fabriken im Industriegebiet.",
            "Beherbergt Werke u. a. von Suzuki und Bavaria.",
            "Eine der erfolgreichsten 'neuen Städte' Ägyptens.",
        ],
    ),
    "bilbais-cities-v2": (
        "Bilbeis liegt im östlichen Nildelta etwa 55 Kilometer nordöstlich von Kairo und hat rund 130 000 Einwohner. Die Stadt ist eine der ältesten Siedlungen Unterägyptens; in pharaonischer Zeit hieß sie Per-Bastet-Apt. Während der Kreuzzüge 1168 verteidigte hier der Wesir Schawar mit fatimidischen Truppen die Stadt gegen Amalrich I. von Jerusalem; bei der Belagerung wurden Tausende Bewohner getötet, darunter viele koptische Christen. Heute ist Bilbeis ein landwirtschaftliches Zentrum, vor allem für Geflügel- und Eierproduktion. Die Universität Zagazig unterhält hier einen Veterinärcampus, und die Stadt ist Sitz einer ägyptischen Luftwaffenbasis.",
        [
            "Rund 130 000 Einwohner im östlichen Nildelta.",
            "Antiker Name Per-Bastet-Apt.",
            "1168 von Amalrich I. im Kreuzzug belagert und geplündert.",
            "Wesir Schawar verteidigte die Stadt mit fatimidischen Truppen.",
            "Heute Zentrum der ägyptischen Geflügelproduktion.",
            "Sitz einer Luftwaffenbasis und eines Veterinärcampus.",
            "55 Kilometer nordöstlich von Kairo.",
        ],
    ),
    "marsa-matruh-cities-v2": (
        "Marsa Matruh liegt an der Mittelmeerküste rund 290 Kilometer westlich von Alexandria und ist mit etwa 90 000 Einwohnern Hauptstadt des Gouvernements Matruh. Bereits in ptolemäischer Zeit existierte hier der Hafen Paraitonion, in dem Kleopatra VII. nachweislich badete; die 'Cleopatra's Bath' genannte Felsgrotte ist eine bekannte Sehenswürdigkeit. Während des Zweiten Weltkriegs war Marsa Matruh 1940-1942 Stützpunkt der britischen 8. Armee gegen Rommels Afrikakorps; die Schlacht von Marsa Matruh fand am 26.-27. Juni 1942 statt. Heute ist die Stadt ein Sommerziel für ägyptische Familien wegen ihrer türkisblauen Buchten.",
        [
            "Etwa 90 000 Einwohner an der westlichen Mittelmeerküste.",
            "Antiker Hafen Paraitonion, von Kleopatra VII. besucht.",
            "Felsgrotte 'Cleopatra's Bath' als Sehenswürdigkeit.",
            "1940-1942 britischer Stützpunkt im Zweiten Weltkrieg.",
            "Schlacht von Marsa Matruh am 26.-27. Juni 1942.",
            "290 Kilometer westlich von Alexandria.",
            "Beliebtes Sommerziel ägyptischer Familien.",
        ],
    ),
    "idfu-cities-v2": (
        "Edfu liegt am Westufer des Nils zwischen Esna und Assuan und hat rund 60 000 Einwohner. In pharaonischer Zeit war sie Hauptstadt des 2. oberägyptischen Gaus. Berühmt ist die Stadt für den Horus-Tempel, einer der besterhaltenen antiken Tempel Ägyptens. Der heutige Bau wurde unter den Ptolemäern zwischen 237 v. Chr. (Ptolemaios III.) und 57 v. Chr. (Ptolemaios XII.) errichtet, mit einer 36 Meter hohen Pylonenfassade. Bis ins 19. Jahrhundert war der Tempel teils unter Sand und Häusern verschüttet; Auguste Mariette legte ihn ab 1860 frei. Heute besuchen jährlich rund 700 000 Touristen den Tempel.",
        [
            "Rund 60 000 Einwohner zwischen Esna und Assuan.",
            "Horus-Tempel, einer der besterhaltenen Ägyptens.",
            "Errichtet unter den Ptolemäern 237 v. Chr. bis 57 v. Chr.",
            "Pylonenfassade ist 36 Meter hoch.",
            "Auguste Mariette legte den Tempel ab 1860 frei.",
            "Etwa 700 000 Touristen jährlich.",
            "Hauptstadt des 2. oberägyptischen Gaus in pharaonischer Zeit.",
        ],
    ),
    "mit-ghamr-cities-v2": (
        "Mit Ghamr liegt im östlichen Nildelta am Damietta-Arm im Gouvernement ad-Daqahliyya und hat rund 100 000 Einwohner. Die Stadt ist in der Wirtschaftsgeschichte des modernen islamischen Bankwesens bedeutend: Hier eröffnete der Ökonom Ahmad an-Naggar 1963 die Mit-Ghamr-Sparkassen, das erste islamische Bankinstitut der Welt, das ohne Zinsen arbeitete. Das Modell inspirierte später die Gründung der Dubai Islamic Bank 1975. Bis 1967 wurde das Experiment unter Nasser verstaatlicht. Heute ist Mit Ghamr Zentrum der Aluminiumwarenherstellung; rund 80 Prozent der ägyptischen Aluminium-Haushaltswaren stammen aus der Stadt.",
        [
            "Rund 100 000 Einwohner am Damietta-Arm des Nils.",
            "1963 eröffnete Ahmad an-Naggar die erste islamische Bank weltweit.",
            "Mit-Ghamr-Sparkassen arbeiteten zinslos.",
            "Modell inspirierte 1975 die Dubai Islamic Bank.",
            "Experiment 1967 unter Nasser verstaatlicht.",
            "Rund 80 Prozent der ägyptischen Aluminium-Haushaltswaren.",
            "Liegt im Gouvernement ad-Daqahliyya.",
        ],
    ),
    "al-hawamdeya-cities-v2": (
        "Al-Hawamidiyya liegt etwa 18 Kilometer südlich von Kairo am Westufer des Nils im Gouvernement Gizeh und hat rund 110 000 Einwohner. Die Stadt ist seit Anfang des 20. Jahrhunderts Standort der größten Zuckerfabrik Ägyptens, gegründet 1881 unter Khedive Ismail Pascha. Lange wurde sie von der staatlichen Sugar and Integrated Industries Company betrieben; die Anlage verarbeitet jährlich rund 1,1 Millionen Tonnen Zuckerrohr. Auch Spirituosenproduktion (Stella-Bier) hat hier eine lange Tradition. Die Stadt ist über die Eisenbahn Kairo-Aswan und die Autobahn an die Hauptstadt angeschlossen.",
        [
            "Rund 110 000 Einwohner 18 Kilometer südlich von Kairo.",
            "Zuckerfabrik 1881 unter Khedive Ismail gegründet.",
            "Größte Zuckerfabrik Ägyptens.",
            "Verarbeitet jährlich rund 1,1 Millionen Tonnen Zuckerrohr.",
            "Lange Tradition der Stella-Bier-Produktion.",
            "Liegt am Westufer des Nils im Gouvernement Gizeh.",
            "Anschluss an die Bahn Kairo-Aswan.",
        ],
    ),
    "desouk-cities-v2": (
        "Desuk liegt im westlichen Nildelta am Rosetta-Arm des Nils im Gouvernement Kafr asch-Schaich und hat rund 150 000 Einwohner. Berühmt ist die Stadt vor allem als Sitz des Schreins von Ibrahim ad-Dasuqi (1255-1296), eines der vier großen Sufi-Heiligen Ägyptens und Gründer des Dasuqiyya-Ordens. Der heutige Moscheekomplex wurde zwischen 1973 und 1981 unter Anwar as-Sadat erweitert und fasst etwa 25 000 Gläubige. Das Mulid-Fest des Heiligen jeden Oktober zieht hunderttausende Pilger an. Wirtschaftlich ist Desuk Zentrum für Reis- und Baumwollverarbeitung im westlichen Delta.",
        [
            "Rund 150 000 Einwohner am Rosetta-Arm im Delta.",
            "Schrein des Sufi-Heiligen Ibrahim ad-Dasuqi (1255-1296).",
            "Gründer des Dasuqiyya-Ordens, einer der vier großen Sufis Ägyptens.",
            "Moscheekomplex 1973-1981 unter Sadat erweitert.",
            "Fasst etwa 25 000 Gläubige.",
            "Mulid-Fest mit hunderttausenden Pilgern jeden Oktober.",
            "Zentrum für Reis- und Baumwollverarbeitung.",
        ],
    ),
    "qalyub-cities-v2": (
        "Qalyub liegt unmittelbar nördlich von Kairo am Damietta-Arm des Nils und hat rund 120 000 Einwohner. Die Stadt gibt dem Gouvernement al-Qalyubiyya ihren Namen, dessen Hauptstadt jedoch Banha ist. Im Mittelalter war Qalyub Verwaltungszentrum unter den Mamluken. Heute ist die Stadt vor allem für ihren Bahnhof bekannt, einen wichtigen Knoten der Strecke Kairo-Alexandria, sowie für mehrere Industriebetriebe, darunter Glas-, Zement- und Papierfabriken. Im April 2002 stieß hier ein Zug mit einem Trauerzug zusammen, ein Unglück mit 15 Todesopfern, das landesweit Schlagzeilen machte. Eng mit Kairo verflochten.",
        [
            "Rund 120 000 Einwohner direkt nördlich von Kairo.",
            "Gibt dem Gouvernement al-Qalyubiyya seinen Namen.",
            "Im Mittelalter Verwaltungszentrum der Mamluken.",
            "Wichtiger Bahnknoten an der Strecke Kairo-Alexandria.",
            "Industriebetriebe für Glas, Zement und Papier.",
            "Schweres Bahnunglück im April 2002 mit 15 Toten.",
            "Liegt am Damietta-Arm des Nils.",
        ],
    ),
    "abu-kabir-cities-v2": (
        "Abu Kabir liegt im östlichen Nildelta im Gouvernement asch-Scharqiyya und hat rund 100 000 Einwohner. Die Stadt ist berühmt als Geburtsort des Wissenschaftlers Ahmad Zuwail (1946-2016), der 1999 den Nobelpreis für Chemie für seine Arbeiten in der Femtochemie erhielt - der erste arabische Chemienobelpreisträger. Nahe Abu Kabir liegen zudem Reste der antiken Stadt Phakussa. Wirtschaftlich basiert Abu Kabir auf Baumwollanbau, Reisverarbeitung sowie der Geflügelzucht; die Stadt ist Bahnstation an der Linie Kairo-Ismailia und Verwaltungssitz mehrerer Dörfer im Umland. Auch Bildungseinrichtungen prägen das Stadtbild.",
        [
            "Rund 100 000 Einwohner im östlichen Nildelta.",
            "Geburtsort des Chemie-Nobelpreisträgers Ahmad Zuwail (1946-2016).",
            "Zuwail erhielt 1999 den Nobelpreis für Femtochemie.",
            "Erster arabischer Chemienobelpreisträger.",
            "Reste der antiken Stadt Phakussa nahebei.",
            "Bahnstation an der Linie Kairo-Ismailia.",
            "Wirtschaft basiert auf Baumwolle, Reis und Geflügel.",
        ],
    ),
    "kafr-el-sheikh-cities-v2": (
        "Kafr asch-Schaich ist Hauptstadt des gleichnamigen Gouvernements im nördlichen Nildelta und hat rund 160 000 Einwohner. Die Stadt liegt zwischen Rosetta und Damiette nahe dem Burullus-See, einem etwa 460 Quadratkilometer großen Brackwassersee, der zu den wichtigsten Vogelschutzgebieten Ägyptens zählt. In der Stadt liegt der Schrein des Sufi-Heiligen Ahmad al-Badawi-Schülers Ibrahim al-Disuqi. Die Universität Kafr asch-Schaich wurde 2006 ausgegliedert und konzentriert sich auf Landwirtschafts- und Veterinärwissenschaften - passend zur agrarisch geprägten Region, die für Reis- und Baumwollanbau bekannt ist und einen hohen Anteil an der nationalen Reisernte hat.",
        [
            "Rund 160 000 Einwohner und Hauptstadt des Gouvernements.",
            "Burullus-See nahebei mit etwa 460 Quadratkilometern.",
            "Wichtigstes Vogelschutzgebiet Ägyptens.",
            "Universität Kafr asch-Schaich wurde 2006 ausgegliedert.",
            "Schwerpunkt Landwirtschafts- und Veterinärwissenschaften.",
            "Bedeutender Anteil an der nationalen Reisernte.",
            "Liegt zwischen Rosetta und Damiette im nördlichen Delta.",
        ],
    ),
    "girga-cities-v2": (
        "Girga liegt am Westufer des Nils im Gouvernement Sohag und hat rund 130 000 Einwohner. In pharaonischer Zeit lag hier Thinis, die mythische Hauptstadt der ersten beiden ägyptischen Dynastien um 3100 v. Chr., aus der Pharao Menes hervorging. Im Mittelalter war Girga unter den Mamluken eine der wichtigsten Städte Oberägyptens. Die katholische koptische Kirche unterhält hier einen Bischofssitz seit dem 17. Jahrhundert; Franziskaner-Missionare waren in der Region aktiv. Wirtschaftlich basiert Girga auf einer 1869 gegründeten Zuckerfabrik, einer der ältesten Ägyptens, die bis heute Zuckerrohr aus der Region verarbeitet.",
        [
            "Rund 130 000 Einwohner am Westufer des Nils.",
            "Antikes Thinis nahebei, Hauptstadt der 1. und 2. Dynastie um 3100 v. Chr.",
            "Pharao Menes stammte aus dieser Region.",
            "Im Mittelalter wichtigste Stadt Oberägyptens unter den Mamluken.",
            "Bischofssitz der katholischen koptischen Kirche seit dem 17. Jahrhundert.",
            "Zuckerfabrik 1869 gegründet, eine der ältesten Ägyptens.",
            "Liegt im Gouvernement Sohag.",
        ],
    ),
    "akhmim-cities-v2": (
        "Achmim liegt am Ostufer des Nils gegenüber von Sohag und hat rund 110 000 Einwohner. Die Stadt ist eine der ältesten Siedlungen Ägyptens; in pharaonischer Zeit war sie unter dem Namen Ipu Hauptstadt des 9. oberägyptischen Gaus und Kultzentrum des Gottes Min. Berühmt ist die 1981 freigelegte 11 Meter hohe Statue der Königin Meritamun, einer Tochter Ramses' II. Achmim war auch Geburtsort der Dichter Nonnos von Panopolis (5. Jahrhundert) und Schenute, des Begründers des koptischen Klosterwesens (gestorben um 465). Die Stadt ist bis heute Zentrum der Handweberei und für ihre Baumwoll-Tücher berühmt.",
        [
            "Rund 110 000 Einwohner am Ostufer des Nils.",
            "Antiker Name Ipu, Kultzentrum des Gottes Min.",
            "Hauptstadt des 9. oberägyptischen Gaus in pharaonischer Zeit.",
            "11 Meter hohe Meritamun-Statue 1981 freigelegt.",
            "Geburtsort des Dichters Nonnos von Panopolis (5. Jh.).",
            "Schenute, Begründer des koptischen Klosterwesens, wirkte hier.",
            "Bekannt für traditionelle Handweberei.",
        ],
    ),
    "matareya-cities-v2": (
        "Al-Matariyya liegt heute als Stadtteil im Norden Kairos und hat rund 600 000 Einwohner. Bereits in pharaonischer Zeit befand sich hier Heliopolis (ägyptisch Iunu), das wichtigste Sonnenkultzentrum Ägyptens und Sitz des Re-Atum-Tempels. Aus der Stadt stammen einige der ältesten erhaltenen Obelisken, darunter der 20,4 Meter hohe Obelisk Sesostris' I. von 1971 v. Chr., der heute noch in situ steht - der älteste vollständig erhaltene Obelisk weltweit. Christlicher Tradition nach soll auch die Heilige Familie auf ihrer Flucht nach Ägypten in Matariyya unter einer Sykomore gerastet haben.",
        [
            "Stadtteil im Norden Kairos mit rund 600 000 Einwohnern.",
            "Antikes Heliopolis (Iunu), Sonnenkultzentrum.",
            "Obelisk Sesostris' I. von 1971 v. Chr. steht noch in situ.",
            "20,4 Meter hoher Obelisk - ältester vollständig erhaltener weltweit.",
            "Sitz des Re-Atum-Tempels in pharaonischer Zeit.",
            "Christliche Tradition: Rastort der Heiligen Familie.",
            "Marien-Sykomore als Pilgerstätte.",
        ],
    ),
    "qus-cities-v2": (
        "Qus liegt am Ostufer des Nils zwischen Luxor und Qina im Gouvernement Qina und hat rund 80 000 Einwohner. In pharaonischer Zeit war Qus unter dem Namen Gesa Kultzentrum des Gottes Haroëris. Im Mittelalter war Qus eine der bedeutendsten Städte Ägyptens und im 13. Jahrhundert nach Kairo die zweitwichtigste, ein Hauptumschlagplatz des Handels mit dem Roten Meer und Indien. Die Al-Amari-Moschee aus dem Jahr 1145 zählt zu den ältesten erhaltenen Bauten der Stadt. Heute ist Qus Zentrum der Zuckerrohrverarbeitung mit einer Fabrik, die zu den größten Oberägyptens zählt.",
        [
            "Rund 80 000 Einwohner zwischen Luxor und Qina.",
            "Antiker Name Gesa, Kultzentrum des Gottes Haroëris.",
            "Im 13. Jahrhundert zweitwichtigste Stadt Ägyptens.",
            "Hauptumschlagplatz des Handels mit dem Roten Meer und Indien.",
            "Al-Amari-Moschee aus dem Jahr 1145.",
            "Heute Zentrum der Zuckerrohrverarbeitung.",
            "Gehört zum Gouvernement Qina.",
        ],
    ),
    "khanka-cities-v2": (
        "Al-Chanka liegt rund 30 Kilometer nordöstlich von Kairo im Gouvernement al-Qalyubiyya und hat etwa 130 000 Einwohner. Die Stadt entstand im 13. Jahrhundert, als der Mamlukensultan al-Mansur Qalawun hier 1283 eine Karawanserei (chanka) anlegte, woraus auch der Name resultiert. Bekannt wurde die Stadt durch die 1880 gegründete größte psychiatrische Klinik des Nahen Ostens, die bis heute zu den wichtigsten Einrichtungen Ägyptens für psychische Gesundheit zählt. Wirtschaftlich basiert al-Chanka auf Textil- und Lebensmittelindustrie sowie auf der Nähe zur Industriezone der Stadt des 10. Ramadan im benachbarten Gouvernement.",
        [
            "Rund 130 000 Einwohner 30 Kilometer nordöstlich von Kairo.",
            "1283 als Karawanserei (chanka) von Sultan Qalawun gegründet.",
            "Name leitet sich vom Wort 'chanka' ab.",
            "Größte psychiatrische Klinik des Nahen Ostens, gegründet 1880.",
            "Liegt im Gouvernement al-Qalyubiyya.",
            "Textil- und Lebensmittelindustrie prägen die Wirtschaft.",
            "Verkehrsanbindung an die Stadt des 10. Ramadan.",
        ],
    ),
    "abu-tij-cities-v2": (
        "Abu Tig liegt am Westufer des Nils im Gouvernement Asyut, etwa 20 Kilometer südlich der Hauptstadt Asyut, und hat rund 80 000 Einwohner. Die Stadt ist eine der ältesten kontinuierlich besiedelten Orte Mittelägyptens; ihr Name geht auf das koptische Tkoou zurück. Abu Tig hat einen hohen koptisch-christlichen Bevölkerungsanteil und mehrere Klöster im Umland, darunter das Erzengel-Michael-Kloster. Wirtschaftlich basiert die Stadt auf Baumwollanbau und der Verarbeitung von Zuckerrohr; eine 1907 errichtete Zuckerfabrik prägt die Region. Die Stadt ist Bahnstation an der Strecke Kairo-Aswan und liegt am Ibrahimiyya-Bewässerungskanal.",
        [
            "Rund 80 000 Einwohner im Gouvernement Asyut.",
            "Koptischer Name Tkoou als Ursprung des heutigen Namens.",
            "Hoher koptisch-christlicher Bevölkerungsanteil.",
            "Erzengel-Michael-Kloster im Umland.",
            "Zuckerfabrik aus dem Jahr 1907.",
            "Liegt am Ibrahimiyya-Bewässerungskanal.",
            "Bahnstation an der Strecke Kairo-Aswan.",
        ],
    ),
    "rosetta-cities-v2": (
        "Rosette (arabisch Raschid) liegt am westlichen Mündungsarm des Nils ins Mittelmeer, rund 65 Kilometer östlich von Alexandria, und hat etwa 80 000 Einwohner. Die Stadt wurde 870 von dem abbasidischen Statthalter Ibn Tulun gegründet. Weltberühmt wurde sie 1799, als französische Soldaten der Napoleonischen Ägypten-Expedition den Stein von Rosette mit einer dreisprachigen Inschrift fanden, die 1822 dem französischen Sprachforscher Jean-François Champollion die Entzifferung der Hieroglyphen ermöglichte. Im 17. und 18. Jahrhundert war Rosette ein bedeutender Hafen, ehe Alexandria diese Rolle übernahm. Erhalten sind über 20 osmanische Häuser aus dem 17. Jahrhundert.",
        [
            "Etwa 80 000 Einwohner an der westlichen Nilmündung.",
            "Gegründet 870 vom abbasidischen Statthalter Ibn Tulun.",
            "Stein von Rosette 1799 von französischen Soldaten gefunden.",
            "Champollion entzifferte die Hieroglyphen 1822.",
            "Im 17. und 18. Jahrhundert wichtigster Hafen Ägyptens.",
            "Über 20 osmanische Häuser aus dem 17. Jahrhundert erhalten.",
            "65 Kilometer östlich von Alexandria.",
        ],
    ),
    "zifta-cities-v2": (
        "Zifta liegt im zentralen Nildelta am Damietta-Arm des Nils im Gouvernement al-Gharbiyya und hat rund 80 000 Einwohner. Die Stadt erlangte historische Bedeutung 1919, als sie sich während der ägyptischen Revolution gegen die britische Besatzung für rund eine Woche zur unabhängigen 'Republik Zifta' erklärte; angeführt wurde die Aktion von Yusuf al-Gindi. Britische Truppen besetzten die Stadt anschließend wieder. Heute verbindet Zifta mit der Schwesterstadt Mit Ghamr eine Brücke über den Nil. Wirtschaftlich basiert Zifta auf Baumwollanbau und Lebensmittelverarbeitung. Die Stadt ist Sitz mehrerer Reismühlen und Textilbetriebe.",
        [
            "Rund 80 000 Einwohner im zentralen Nildelta.",
            "Erklärte sich 1919 zur 'Republik Zifta' gegen britische Besatzung.",
            "Yusuf al-Gindi führte die kurze Republik an.",
            "Liegt am Damietta-Arm gegenüber Mit Ghamr.",
            "Verbunden mit Mit Ghamr durch eine Nilbrücke.",
            "Baumwollanbau und Reismühlen prägen die Wirtschaft.",
            "Gehört zum Gouvernement al-Gharbiyya.",
        ],
    ),
    "deir-mawas-cities-v2": (
        "Dair Mawas liegt am Westufer des Nils im Gouvernement al-Minya, rund 30 Kilometer südlich von Mallawi, und hat etwa 50 000 Einwohner. Die Stadt liegt direkt gegenüber der archäologischen Stätte Tell el-Amarna, der antiken Hauptstadt Achetaton, die Pharao Echnaton 1346 v. Chr. gründete und mit dem ausschließlichen Aton-Kult verband. Nach Echnatons Tod 1336 v. Chr. wurde die Stadt zerstört; Tausende Tonscherben (Amarna-Briefe) liefern bis heute Einblicke in die internationale Diplomatie der späten Bronzezeit. Dair Mawas selbst hat einen hohen koptischen Bevölkerungsanteil und mehrere alte Kirchen.",
        [
            "Rund 50 000 Einwohner 30 Kilometer südlich von Mallawi.",
            "Direkt gegenüber Tell el-Amarna.",
            "Achetaton 1346 v. Chr. von Echnaton gegründet.",
            "Stadt nach Echnatons Tod 1336 v. Chr. zerstört.",
            "Amarna-Briefe als wichtigste Quellen der Bronzezeit-Diplomatie.",
            "Hoher koptisch-christlicher Bevölkerungsanteil.",
            "Liegt im Gouvernement al-Minya.",
        ],
    ),
    "samalut-cities-v2": (
        "Samalut liegt am Westufer des Nils im Gouvernement al-Minya und hat rund 100 000 Einwohner. Die Stadt ist Ausgangspunkt zur Pilgerstätte Gebel et-Teir, einem Felsen am Ostufer, an dem nach koptischer Tradition die Heilige Familie auf ihrer Flucht nach Ägypten Halt machte; das Kloster der Heiligen Jungfrau wurde dort um 328 von Helena, Mutter Konstantins des Großen, gegründet. 2015 ermordeten Mitglieder des IS in Libyen 21 koptische Wanderarbeiter aus dem Distrikt Samalut; ihnen wurde 2019 in Samalut die Märtyrer-Kirche gewidmet. Wirtschaftlich basiert die Stadt auf Zementproduktion und Landwirtschaft.",
        [
            "Rund 100 000 Einwohner am Westufer des Nils.",
            "Ausgangspunkt zur Pilgerstätte Gebel et-Teir.",
            "Kloster der Heiligen Jungfrau um 328 von Helena gegründet.",
            "Tradition: Halt der Heiligen Familie auf der Flucht nach Ägypten.",
            "21 koptische Wanderarbeiter aus dem Distrikt 2015 vom IS ermordet.",
            "Märtyrer-Kirche 2019 in Samalut errichtet.",
            "Zementproduktion prägt die Wirtschaft.",
        ],
    ),
    "el-quseir-cities-v2": (
        "Al-Qusair liegt an der Küste des Roten Meeres rund 140 Kilometer südlich von Hurghada und hat etwa 50 000 Einwohner. Bereits in ptolemäischer Zeit existierte hier der Hafen Leukos Limen, von dem aus Schiffe nach Indien und Punt fuhren. Im Mittelalter war al-Qusair bis zur Eröffnung des Suezkanals 1869 wichtigster ägyptischer Pilgerhafen für die Hadsch nach Mekka. Die osmanische Festung aus dem 16. Jahrhundert ist erhalten und beherbergt heute ein Museum. Im Zweiten Weltkrieg fanden hier alliierte Konvoi-Operationen statt. Heute ist die Stadt ein ruhiges Tourismusziel mit gut erhaltenem historischem Stadtkern und intaktem Korallenriff.",
        [
            "Etwa 50 000 Einwohner am Roten Meer.",
            "Antiker Hafen Leukos Limen für Indienhandel.",
            "Bis 1869 wichtigster Pilgerhafen für die Hadsch.",
            "Osmanische Festung aus dem 16. Jahrhundert erhalten.",
            "Museum in der Festung untergebracht.",
            "140 Kilometer südlich von Hurghada.",
            "Bekannt für intakte Korallenriffe.",
        ],
    ),
    "safaga-cities-v2": (
        "Safaga liegt an der Küste des Roten Meeres rund 60 Kilometer südlich von Hurghada und hat etwa 45 000 Einwohner. Die Stadt ist wichtiger Phosphat-Exporthafen Ägyptens; jährlich werden hier rund 2 Millionen Tonnen Phosphat aus den Gruben von Abu Tartur verschifft. Safaga ist auch traditioneller Pilgerhafen; jährlich nehmen tausende ägyptische Pilger von hier per Fähre die rund 200 Kilometer nach Dschidda in Saudi-Arabien für die Hadsch. Eine schwere Fährkatastrophe ereignete sich am 3. Februar 2006, als die 'al-Salam Boccaccio 98' sank und über 1 000 Menschen ums Leben kamen. Tourismus ergänzt die Wirtschaft.",
        [
            "Etwa 45 000 Einwohner am Roten Meer.",
            "Wichtigster Phosphat-Exporthafen Ägyptens.",
            "Jährlich rund 2 Millionen Tonnen Phosphatverschiffung.",
            "Pilgerhafen für die Hadsch nach Dschidda.",
            "Fährkatastrophe der 'al-Salam Boccaccio 98' am 3. Februar 2006.",
            "Über 1 000 Tote bei dem Untergang.",
            "60 Kilometer südlich von Hurghada.",
        ],
    ),
    "marsa-alam-cities-v2": (
        "Marsa Alam liegt an der südlichen Küste des Roten Meeres rund 270 Kilometer südlich von Hurghada und hat etwa 10 000 Einwohner. Bis in die 1990er Jahre war der Ort ein abgelegenes Fischerdorf, doch nach der Eröffnung des internationalen Flughafens 2003 entstand hier eines der jüngsten Touristenresorts Ägyptens. Die Region ist berühmt für Tauchgebiete wie Elphinstone Reef, wo Hochsee-Haie und Mantarochen vorkommen, sowie Wadi Gimal, einen 7 450 Quadratkilometer großen Nationalpark mit Mangroven und Beduinensiedlungen. Antike Smaragd-Bergwerke in den Bergen Sikait und Nugrus wurden bereits unter Cleopatra ausgebeutet.",
        [
            "Etwa 10 000 Einwohner an der südlichen Rotmeerküste.",
            "Internationaler Flughafen seit 2003.",
            "Bekannte Tauchgebiete wie Elphinstone Reef.",
            "Wadi-Gimal-Nationalpark umfasst 7 450 Quadratkilometer.",
            "Antike Smaragdminen Sikait und Nugrus.",
            "Smaragd-Bergbau bereits unter Cleopatra.",
            "270 Kilometer südlich von Hurghada.",
        ],
    ),
    "siwa-cities-v2": (
        "Siwa liegt in einer Senke der Westlichen Wüste, rund 50 Kilometer östlich der libyschen Grenze und 18 Meter unter dem Meeresspiegel, mit etwa 33 000 Einwohnern. Die Oase war im Altertum durch das Orakel des Amun berühmt, das Alexander der Große im Jahr 331 v. Chr. besuchte und sich dort zum Sohn Amuns erklären ließ. Die Bewohner sprechen mit Siwi eine eigenständige Berbersprache - die einzige in Ägypten. Aus Lehmsalz errichtete Festung Schali stammt aus dem 13. Jahrhundert. Berühmt sind Siwas Dattelhaine mit über 200 000 Bäumen sowie heiße Quellen wie das 'Bad der Kleopatra'.",
        [
            "Rund 33 000 Einwohner in einer Senke 18 Meter unter dem Meer.",
            "50 Kilometer östlich der libyschen Grenze.",
            "Orakel des Amun im Altertum berühmt.",
            "Alexander der Große besuchte das Orakel 331 v. Chr.",
            "Einzige Berber-Sprache Ägyptens (Siwi).",
            "Festung Schali aus Lehmsalz, 13. Jahrhundert.",
            "Über 200 000 Dattelpalmen prägen die Oase.",
        ],
    ),
    "kharga-cities-v2": (
        "Al-Charga liegt in der Westlichen Wüste etwa 200 Kilometer westlich von Luxor und ist mit rund 70 000 Einwohnern die Hauptstadt des Gouvernements Neues Tal. Die Oase war in der Antike Knotenpunkt der Karawanenroute Darb el-Arba'in, der 1 700 Kilometer langen 'Vierzig-Tage-Straße' nach Darfur, auf der Sklaven und Waren transportiert wurden. Aus persischer Zeit stammt der gut erhaltene Hibis-Tempel von Pharao Darius I. (522-486 v. Chr.). Aus römischer Zeit erhalten ist die Festung Qasr el-Ghueta. Das Land-Reklamationsprojekt 'Neues Tal' sollte ab 1958 unter Nasser die Westliche Wüste landwirtschaftlich nutzbar machen.",
        [
            "Rund 70 000 Einwohner und Hauptstadt des Gouvernements Neues Tal.",
            "200 Kilometer westlich von Luxor.",
            "Knoten der Darb el-Arba'in, der 1 700 Kilometer langen Karawanenroute.",
            "Hibis-Tempel von Darius I. (522-486 v. Chr.).",
            "Römische Festung Qasr el-Ghueta erhalten.",
            "Projekt 'Neues Tal' unter Nasser ab 1958 begonnen.",
            "Karawanenstraße transportierte Sklaven und Waren aus Darfur.",
        ],
    ),
    "dakhla-cities-v2": (
        "Die Oase Dakhla liegt in der Westlichen Wüste rund 350 Kilometer westlich von Luxor im Gouvernement Neues Tal und umfasst mehrere Dörfer mit zusammen etwa 80 000 Einwohnern; das Verwaltungszentrum ist Mut. Bereits seit dem Neolithikum besiedelt, blühte die Oase im Alten Reich um 2 500 v. Chr. Aus römischer Zeit stammen die gut erhaltenen Tempel von Deir el-Hagar (1. Jh.) und Reste einer befestigten Siedlung in Ismant el-Charab (Kellis). Die mittelalterliche Lehmziegel-Stadt al-Qasr aus dem 12. Jahrhundert ist ein architektonisches Juwel. Die Oase ist berühmt für Datteln, Olivenöl und über hundert Quellseen.",
        [
            "Rund 80 000 Einwohner in mehreren Dörfern, Verwaltungssitz Mut.",
            "350 Kilometer westlich von Luxor.",
            "Seit dem Neolithikum besiedelt.",
            "Römische Tempel von Deir el-Hagar aus dem 1. Jahrhundert.",
            "Antike Stadt Kellis (Ismant el-Charab) erhalten.",
            "Mittelalterliche Lehmziegelstadt al-Qasr aus dem 12. Jh.",
            "Über hundert natürliche Quellseen.",
        ],
    ),
    "farafra-cities-v2": (
        "Die Oase Farafra liegt in der Westlichen Wüste rund 170 Kilometer nördlich von Dachla und ist mit etwa 14 000 Einwohnern die kleinste der Oasen Ägyptens. Die Bewohner sind überwiegend Beduinen vom Stamm der Aulad-Ali. Berühmt ist Farafra für die Weiße Wüste (Sahra al-Baida), ein 300 Quadratkilometer großes Naturschutzgebiet aus 2014, das durch bizarre, bis zu 15 Meter hohe Kreidefelsen gekennzeichnet ist; sie entstanden über Millionen Jahre durch Erosion. Auch die Schwarze Wüste mit Vulkangestein liegt in der Region. In der Nähe befinden sich heiße Quellen wie Bir Sitta. Die Oase besitzt eine Tradition der Salzlampen-Herstellung.",
        [
            "Rund 14 000 Einwohner, kleinste Oase Ägyptens.",
            "170 Kilometer nördlich von Dachla.",
            "Bewohner sind überwiegend Aulad-Ali-Beduinen.",
            "Naturschutzgebiet Weiße Wüste seit 2014.",
            "Kreidefelsen bis zu 15 Meter Höhe.",
            "Schwarze Wüste mit Vulkangestein in der Region.",
            "Heiße Quelle Bir Sitta in der Nähe.",
        ],
    ),
    "bawiti-cities-v2": (
        "Bawiti ist Hauptort der Oase Bahariya in der Westlichen Wüste, rund 370 Kilometer südwestlich von Kairo, und hat etwa 30 000 Einwohner. Bekanntheit erlangte die Region 1999 durch die Entdeckung des 'Tals der Goldenen Mumien': In einer Nekropole aus griechisch-römischer Zeit (ca. 332 v. Chr. - 395 n. Chr.) wurden über 250 vergoldete Mumien gefunden, von denen Schätzungen bis zu 10 000 weiteren ausgehen. Die Oase ist auch wichtiger Eisenerz-Lieferant für das Stahlwerk Helwan; die Bahariya-Eisenmine wurde 1973 in Betrieb genommen. Heiße Quellen und der nahe Schwarze Wüste-Nationalpark prägen das touristische Profil.",
        [
            "Hauptort der Oase Bahariya mit etwa 30 000 Einwohnern.",
            "370 Kilometer südwestlich von Kairo.",
            "1999 Entdeckung des 'Tals der Goldenen Mumien'.",
            "Über 250 vergoldete Mumien aus griechisch-römischer Zeit.",
            "Schätzungen gehen von bis zu 10 000 Mumien aus.",
            "Bahariya-Eisenmine seit 1973 in Betrieb.",
            "Liefert Erz für das Stahlwerk Helwan.",
        ],
    ),
    "el-tor-cities-v2": (
        "At-Tur liegt am Westufer der Sinai-Halbinsel am Golf von Sues und ist Hauptstadt des Gouvernements Südsinai mit rund 35 000 Einwohnern. Der Ort wurde im 13. Jahrhundert von den Mamluken befestigt und diente lange als Pilgerhafen für die Hadsch. Im 19. Jahrhundert wurde at-Tur ein wichtiger Quarantänehafen, an dem Pilger nach der Hadsch auf Cholera untersucht wurden; das Quarantäne-Krankenhaus aus osmanischer Zeit ist teilweise erhalten. Während des Sechstagekriegs 1967 von Israel besetzt, kam at-Tur 1982 als Teil des Camp-David-Abkommens zurück zu Ägypten. Heute leben die Einwohner vom Tourismus und der Erdölförderung des Suez-Golfs.",
        [
            "Hauptstadt des Gouvernements Südsinai mit rund 35 000 Einwohnern.",
            "Im 13. Jahrhundert von den Mamluken befestigt.",
            "Im 19. Jahrhundert wichtiger Quarantänehafen für Hadsch-Pilger.",
            "Quarantäne-Krankenhaus aus osmanischer Zeit teils erhalten.",
            "1967-1982 unter israelischer Besatzung.",
            "1982 durch Camp-David-Abkommen zurück zu Ägypten.",
            "Liegt am Westufer des Sinai am Golf von Sues.",
        ],
    ),
    "sharm-el-sheikh-cities-v2": (
        "Scharm asch-Schaich liegt an der Südspitze der Sinai-Halbinsel zwischen dem Golf von Akaba und dem Roten Meer und hat rund 75 000 Einwohner. Bis 1967 ein kleines Fischerdorf, baute Israel den Ort während der Besetzung 1967-1982 zur militärischen Basis und Touristensiedlung 'Ofira' aus. Nach der Rückgabe an Ägypten entwickelte sich Scharm asch-Schaich zu einem der wichtigsten Tourismuszentren des Landes mit über 200 Hotels. Die Stadt ist Schauplatz zahlreicher internationaler Gipfeltreffen, darunter die Klimakonferenz COP27 im November 2022. Im nahen Ras-Mohammed-Nationalpark, gegründet 1983, leben über 1 000 Fischarten an den Korallenriffen.",
        [
            "Rund 75 000 Einwohner an der Südspitze des Sinai.",
            "1967-1982 unter israelischer Besatzung als 'Ofira' ausgebaut.",
            "Über 200 Hotels nach der Rückgabe an Ägypten.",
            "Schauplatz der Klimakonferenz COP27 im November 2022.",
            "Ras-Mohammed-Nationalpark seit 1983.",
            "Über 1 000 Fischarten an den Korallenriffen.",
            "Liegt zwischen Golf von Akaba und Rotem Meer.",
        ],
    ),
    "dahab-cities-v2": (
        "Dahab liegt an der Ostküste der Sinai-Halbinsel am Golf von Akaba, rund 90 Kilometer nördlich von Scharm asch-Schaich, und hat etwa 15 000 Einwohner. Der Name 'Dahab' bedeutet auf Arabisch 'Gold' und bezieht sich auf den goldfarbenen Sandstrand. Ursprünglich Beduinendorf der Muzeina-Stamm, wurde der Ort 1967-1982 von Israel besetzt. Seit den 1980er Jahren entwickelt er sich als alternatives, entspanntes Tourismusziel mit Fokus auf Tauchen und Windsurfen. Berühmt ist das 'Blaue Loch', ein bis zu 130 Meter tiefes Korallenriff-Tauchgebiet, das jedoch zu den gefährlichsten der Welt zählt. 2006 forderten Bombenanschläge in Dahab 23 Tote.",
        [
            "Etwa 15 000 Einwohner an der Ostküste des Sinai.",
            "Name 'Dahab' bedeutet auf Arabisch 'Gold'.",
            "Beduinendorf des Muzeina-Stammes als Ursprung.",
            "1967-1982 unter israelischer Besatzung.",
            "Berühmtes 'Blaues Loch', bis 130 Meter tief.",
            "Bombenanschläge 2006 mit 23 Toten.",
            "Beliebt für Tauchen und Windsurfen.",
        ],
    ),
    "nuweiba-cities-v2": (
        "Nuwaiba liegt an der Ostküste der Sinai-Halbinsel am Golf von Akaba, rund 70 Kilometer nördlich von Dahab, und hat etwa 15 000 Einwohner. Der Ort entstand aus einem Beduinendorf des Tarabin-Stammes. 1967-1982 unter israelischer Besatzung, kam Nuwaiba 1982 zurück zu Ägypten. Heute ist die Stadt vor allem als Fährhafen Richtung Akaba in Jordanien bedeutend - die rund 70 Kilometer lange Verbindung wurde 1985 eröffnet und ist eine wichtige Pilger- und Handelsroute. Daneben dient Nuwaiba dem ruhigen Strandtourismus. Im Hinterland liegt der bekannte Färbe-Canyon (Coloured Canyon), eine 800 Meter lange Sandstein-Schlucht mit bunten Felswänden.",
        [
            "Etwa 15 000 Einwohner am Golf von Akaba.",
            "Aus einem Tarabin-Beduinendorf entstanden.",
            "1967-1982 unter israelischer Besatzung.",
            "Wichtigster Fährhafen Richtung Akaba in Jordanien.",
            "Fährverbindung seit 1985.",
            "Coloured Canyon mit 800 Metern bunter Sandsteinwände.",
            "70 Kilometer nördlich von Dahab.",
        ],
    ),
    "luxor-cities-v2": (
        "Luxor liegt am Ostufer des Nils in Oberägypten, rund 670 Kilometer südlich von Kairo, und hat etwa 510 000 Einwohner. Die Stadt steht auf den Ruinen des antiken Theben, das während des Mittleren und Neuen Reiches (ca. 2055-1069 v. Chr.) Hauptstadt Ägyptens war. Hier befinden sich der Karnak-Tempel mit dem 134 Säulen tragenden Hypostyl-Saal Ramses' II. und der Luxor-Tempel, errichtet unter Amenhotep III. ab 1390 v. Chr. Am Westufer liegen das Tal der Könige mit 64 Pharaonengräbern, darunter das von Tutanchamun (1922 von Howard Carter entdeckt), und der Tempel der Hatschepsut. 1979 UNESCO-Welterbe.",
        [
            "Etwa 510 000 Einwohner am Ostufer des Nils.",
            "Hauptstadt des antiken Theben um 2055-1069 v. Chr.",
            "Karnak-Tempel mit 134-Säulen-Hypostylsaal Ramses' II.",
            "Luxor-Tempel ab 1390 v. Chr. unter Amenhotep III.",
            "Tal der Könige mit 64 Pharaonengräbern.",
            "Grab des Tutanchamun 1922 von Howard Carter entdeckt.",
            "Seit 1979 UNESCO-Welterbe.",
        ],
    ),
    "new-cairo-cities-v2": (
        "Neu-Kairo wurde 2000 als Satellitenstadt östlich der Kairoer Innenstadt gegründet, um den Druck auf die überlastete Hauptstadt zu mindern. Die Stadt liegt rund 25 Kilometer östlich des Stadtzentrums von Kairo und zählt heute über 700 000 Einwohner; geplant sind bis zu 5 Millionen. Sie ist Sitz der American University in Cairo, die 2008 von Tahrir hierher zog, sowie zahlreicher internationaler Schulen und Botschaftserweiterungen. Architektonisch ist Neu-Kairo durch geplante Wohnviertel wie 'Five' und 'Tagamoa al-Khames' geprägt, mit weitläufigen Boulevards und Einkaufszentren. Die neue Verwaltungshauptstadt 'Wedian' liegt 35 Kilometer weiter östlich.",
        [
            "Über 700 000 Einwohner, geplant für bis zu 5 Millionen.",
            "Im Jahr 2000 als Satellitenstadt gegründet.",
            "American University in Cairo zog 2008 hierher.",
            "25 Kilometer östlich des Kairoer Zentrums.",
            "Wohnviertel 'Five' und 'Tagamoa al-Khames' prägen das Stadtbild.",
            "Sitz internationaler Schulen und Botschaften.",
            "Verwaltungshauptstadt Wedian 35 Kilometer östlich.",
        ],
    ),
    "sixth-of-october-cities-v2": (
        "Die Stadt des 6. Oktober wurde 1979 von Präsident Anwar as-Sadat gegründet, benannt nach dem Beginn des Jom-Kippur-Kriegs am 6. Oktober 1973. Sie liegt etwa 32 Kilometer westlich von Kairo im Gouvernement Gizeh und hat heute rund 500 000 Einwohner. Die Stadt war Teil eines staatlichen Programms zur Entlastung Kairos und beherbergt umfangreiche Industrieanlagen, darunter Werke für Pharmazie, Lebensmittel und Automobilbau. Sie ist Sitz des größten Studios der Region, der 'Media Production City', gegründet 1996, sowie mehrerer Privatuniversitäten wie der MSA. Auf dem Gebiet liegt zudem der Sphinx International Airport, eröffnet 2018.",
        [
            "Rund 500 000 Einwohner, 32 Kilometer westlich von Kairo.",
            "1979 von Präsident Sadat gegründet.",
            "Benannt nach dem Beginn des Krieges 1973.",
            "Media Production City seit 1996 als regionales Studio.",
            "Sitz mehrerer Privatuniversitäten wie der MSA.",
            "Sphinx International Airport seit 2018.",
            "Industriewerke für Pharmazie, Lebensmittel und Auto.",
        ],
    ),
}


def main():
    text = FILE.read_text(encoding="utf-8")
    original = text
    filled_desc = 0
    filled_facts = 0
    skipped = []

    for poi_id, (desc_de, facts_de) in DATA.items():
        # Locate POI block: from `id: "<id>"` until next `id: "..."` or end
        id_pattern = re.compile(r'(    id: "' + re.escape(poi_id) + r'",)')
        m = id_pattern.search(text)
        if not m:
            skipped.append(f"{poi_id}: id not found")
            continue
        start = m.start()
        # find next id or end-of-array
        next_m = re.search(r'    id: "[a-z0-9-]+"', text[m.end():])
        end = m.end() + next_m.start() if next_m else len(text)
        block = text[start:end]

        new_block = block
        # Replace descriptionAdvanced.de line if it has the template marker
        desc_re = re.compile(r'(      de: ")[^"\\]*(?:\\.[^"\\]*)*ist ein bemerkenswertes Element der Geografie[^"\\]*(?:\\.[^"\\]*)*(",)')
        if desc_re.search(new_block):
            new_block = desc_re.sub(lambda mm: mm.group(1) + desc_de + mm.group(2), new_block, count=1)
            filled_desc += 1
        else:
            skipped.append(f"{poi_id}: descriptionAdvanced.de no template marker")

        # Replace factsAdvanced.de line if it has boilerplate marker
        facts_re = re.compile(r'(      de: \[)[^\]]*"Liegt im Gebiet der Arabischen Republik[^\]]*(\],)')
        if facts_re.search(new_block):
            facts_str = ", ".join(f'"{f}"' for f in facts_de)
            new_block = facts_re.sub(lambda mm: mm.group(1) + facts_str + mm.group(2), new_block, count=1)
            filled_facts += 1
        else:
            skipped.append(f"{poi_id}: factsAdvanced.de no boilerplate marker")

        text = text[:start] + new_block + text[end:]

    if text != original:
        FILE.write_text(text, encoding="utf-8")
        print(f"Wrote {FILE}")
    else:
        print("No changes.")
    print(f"descriptionAdvanced.de filled: {filled_desc}")
    print(f"factsAdvanced.de filled: {filled_facts}")
    if skipped:
        print(f"Skipped/notes ({len(skipped)}):")
        for s in skipped:
            print("  -", s)


if __name__ == "__main__":
    main()
