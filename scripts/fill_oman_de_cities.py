# -*- coding: utf-8 -*-
"""Add descriptionAdvanced.de + factsAdvanced.de to POIs in poiExtraOmanCitiesV2.ts.

The Oman cities file currently has no descriptionAdvanced/factsAdvanced fields at all.
This script inserts both fields (DE only) right after the existing `facts: { ... }` block
and before the closing `}` of each POI object. POIs that already have descriptionAdvanced
are skipped.
"""
from __future__ import annotations
import re
from pathlib import Path

FILE = Path(__file__).resolve().parent.parent / "lib" / "visualLab" / "data" / "poiExtraOmanCitiesV2.ts"

DATA: dict[str, dict] = {
    "muscat-cities-v2": {
        "desc": "Maskat ist seit 1793 ununterbrochen Hauptstadt des Sultanats Oman, das die Al-Bu-Said-Dynastie seit 1744 regiert. Die Hauptstadtregion zählt rund 1,7 Millionen Einwohner und erstreckt sich entlang des Golfs von Oman zwischen den schroffen Hadschar-Bergen und dem Meer. Im 16. und 17. Jahrhundert beherrschten die Portugiesen den Hafen, bis Imam Sultan bin Saif sie 1650 vertrieb. Die Großmoschee Sultan Qabus, eingeweiht 2001, fasst über 20.000 Gläubige. Der traditionelle Souk von Matrah ist eines der ältesten Marktviertel der arabischen Welt. Maskat verbindet weißgetünchte Architektur mit modernen Geschäftsvierteln wie Al Khuwair und Ruwi.",
        "facts": [
            "Hauptstadt seit 1793 unter der Al-Bu-Said-Dynastie",
            "Hauptstadtregion mit rund 1,7 Millionen Einwohnern",
            "Imam Sultan bin Saif vertrieb die Portugiesen 1650",
            "Großmoschee Sultan Qabus, eingeweiht 2001, fasst über 20.000 Gläubige",
            "Forts Al-Dschalali und Al-Mirani aus dem 16. Jahrhundert",
            "Hafen Mina Sultan Qabus seit Jahrhunderten Tor zum Indischen Ozean",
            "Königlicher Palast Al-Alam im Stadtviertel Alt-Maskat",
            "Wichtigste Wirtschafts- und Handelsmetropole Omans",
        ],
    },
    "salalah-cities-v2": {
        "desc": "Salala ist die Hauptstadt der südlichen Provinz Dhofar und mit rund 350.000 Einwohnern die zweitgrößte Stadt Omans. Während des Charif-Monsuns von Juni bis September verwandelt sich die sonst trockene Region in eine grüne Landschaft mit Wasserfällen, was Salala zu einem beliebten Reiseziel aus dem ganzen Sultanat seit 1744 macht. Die Stadt war über Jahrtausende Zentrum des Weihrauch-Handels: Die Boswellia-sacra-Bäume des Hinterlands lieferten den begehrten Olibanum, der bis Rom und China exportiert wurde. Die UNESCO-Welterbestätten Al-Baleed und Sumhuram zeugen vom historischen Reichtum. Sultan Qabus bin Said, Modernisierer Omans, wurde 1940 hier geboren und entwickelte den Hafen Salala zu einem der größten Containerumschlaghäfen der Region.",
        "facts": [
            "Etwa 350.000 Einwohner, zweitgrößte Stadt nach Maskat",
            "Hauptstadt der Provinz Dhofar im Süden des Sultanats",
            "Charif-Monsun von Juni bis September bringt Regen und grüne Hänge",
            "Geburtsort von Sultan Qabus bin Said im Jahr 1940",
            "Zentrum des historischen Weihrauch-Handels mit Boswellia sacra",
            "UNESCO-Welterbe Al-Baleed und Sumhuram als alte Hafenstädte",
            "Hafen Salala zählt zu den größten Containerhäfen am Indischen Ozean",
            "Über 1000 Kilometer von der Hauptstadt Maskat entfernt",
        ],
    },
    "nizwa-cities-v2": {
        "desc": "Nizwa liegt am Fuß des Hadschar-Gebirges und war bis zum 12. Jahrhundert sowie erneut im 17. Jahrhundert Hauptstadt Omans. Die Stadt mit etwa 90.000 Einwohnern in der Region Ad-Dachiliyya gilt als religiöses und kulturelles Herz des Landes. Das markante Wahrzeichen ist der runde Wehrturm der Festung Nizwa, errichtet zwischen 1649 und 1668 unter Imam Sultan bin Saif al-Yarubi nach der Vertreibung der Portugiesen. Mit einem Durchmesser von 36 Metern und einer Höhe von 30 Metern ist er der größte seiner Art in Oman. Der traditionelle Freitagsmarkt für Vieh, Datteln und Silberschmuck ist berühmt im ganzen Sultanat seit 1744. Die ibaditische Theologieschule Nizwas prägt bis heute die religiöse Identität Omans.",
        "facts": [
            "Rund 90.000 Einwohner in der Region Ad-Dachiliyya",
            "Festung Nizwa zwischen 1649 und 1668 errichtet",
            "Wehrturm mit 36 Metern Durchmesser, größter in Oman",
            "Frühere Hauptstadt im 12. und 17. Jahrhundert",
            "Religiöses Zentrum der ibaditischen Glaubensrichtung",
            "Berühmter Freitagsmarkt für Vieh und Silberschmuck",
            "Etwa 165 Kilometer südwestlich von Maskat",
            "Tor zum Hadschar-Gebirge und zur Wüste Wahiba",
        ],
    },
    "sohar-cities-v2": {
        "desc": "Suhar an der Al-Batinah-Küste war im 9. und 10. Jahrhundert eine der reichsten Hafenstädte am Indischen Ozean und gilt als legendäre Heimatstadt des Seefahrers Sindbad. Heute leben rund 200.000 Menschen in der Stadt, die unter Sultan Qabus seit den 1990er Jahren zu einem industriellen Schwerpunkt des Sultanats Oman seit 1744 ausgebaut wurde. Der Tiefseehafen Sohar Port, eröffnet 2002, beherbergt Aluminium-, Stahl- und petrochemische Industrieanlagen sowie eine Freihandelszone. Die weiß getünchte Festung von Suhar aus dem 13. Jahrhundert beherbergt heute ein Museum, das die maritime Vergangenheit der Stadt dokumentiert. Suhar ist über die Küstenautobahn rund 230 Kilometer von Maskat und 120 Kilometer von der Grenze zu den Vereinigten Arabischen Emiraten entfernt.",
        "facts": [
            "Etwa 200.000 Einwohner an der Al-Batinah-Küste",
            "Im 9. und 10. Jahrhundert reichste Hafenstadt der Region",
            "Legendärer Geburtsort des Seefahrers Sindbad",
            "Tiefseehafen Sohar Port seit 2002 in Betrieb",
            "Weiße Festung aus dem 13. Jahrhundert, heute Museum",
            "Aluminium-, Stahl- und petrochemische Industrie",
            "Etwa 230 Kilometer nordwestlich von Maskat",
            "Freihandelszone als Wirtschaftsmotor der Region",
        ],
    },
    "sur-cities-v2": {
        "desc": "Sur liegt an der Ostküste Omans am Eingang zum Golf von Oman und war jahrhundertelang das Zentrum des traditionellen Dau-Schiffbaus. Die Stadt mit rund 80.000 Einwohnern in der Provinz Asch-Scharqiyya-Süd belieferte den indischen Subkontinent, Sansibar und Ostafrika mit hölzernen Handelsschiffen. Im 19. Jahrhundert war Sur eng verbunden mit dem Sultanat von Sansibar, das bis 1856 zum Sultanat Oman seit 1744 gehörte. In der Werft Al-Ayjah werden bis heute traditionelle Daus aus Teakholz nach jahrhundertealten Methoden gebaut. Die zwei weißen Türme der Bilad-Sur-Festung dominieren das Stadtbild. Etwa 60 Kilometer südlich liegt das Schildkrötenreservat Ras al-Dschinz, das eines der wichtigsten Nistgebiete für Suppenschildkröten am Indischen Ozean ist.",
        "facts": [
            "Etwa 80.000 Einwohner in Asch-Scharqiyya-Süd",
            "Jahrhundertealtes Zentrum des Dau-Schiffbaus",
            "Historische Verbindung zum Sultanat Sansibar bis 1856",
            "Traditionelle Werft Al-Ayjah baut Daus aus Teakholz",
            "Bilad-Sur-Festung mit zwei markanten weißen Türmen",
            "Schildkrötenreservat Ras al-Dschinz 60 Kilometer südlich",
            "Nistgebiet für Suppenschildkröten am Indischen Ozean",
            "Etwa 150 Kilometer südöstlich von Maskat",
        ],
    },
    "khasab-cities-v2": {
        "desc": "Chasab ist die Hauptstadt der Exklave Musandam an der Spitze der gleichnamigen Halbinsel, die durch die Vereinigten Arabischen Emirate vom übrigen Sultanat Oman seit 1744 getrennt ist. Die Stadt mit rund 18.000 Einwohnern liegt an der strategisch wichtigen Straße von Hormus, durch die rund ein Drittel des weltweiten Erdöls per Schiff transportiert wird. Wegen der spektakulären Fjordlandschaft mit steilen Kalksteinklippen, die bis zu 2.000 Meter aus dem Meer aufragen, wird Musandam oft das Norwegen Arabiens genannt. Die portugiesische Festung Chasab aus dem frühen 17. Jahrhundert beherrscht den Hafen. Wirtschaftlich war Chasab lange vom Schmuggelhandel mit dem Iran geprägt, der nur 50 Kilometer entfernt liegt. Heute dominieren Tourismus und Fischerei.",
        "facts": [
            "Etwa 18.000 Einwohner in der Exklave Musandam",
            "Hauptstadt der nördlichsten Provinz des Sultanats",
            "Lage an der strategischen Straße von Hormus",
            "Portugiesische Festung aus dem frühen 17. Jahrhundert",
            "Fjordlandschaft mit Klippen bis 2.000 Meter Höhe",
            "Etwa 50 Kilometer Luftlinie zur iranischen Küste",
            "Bekannt als Norwegen Arabiens",
            "Wirtschaft heute geprägt von Tourismus und Fischerei",
        ],
    },
    "ibra-cities-v2": {
        "desc": "Ibra ist eine der ältesten Städte der Region Asch-Scharqiyya-Nord und liegt rund 150 Kilometer südöstlich von Maskat am Rand der Wahiba-Wüste. Die Stadt mit etwa 50.000 Einwohnern war Heimat einflussreicher Händlerfamilien, die mit Sansibar Handel trieben, als die Insel von 1698 bis 1856 zum Sultanat Oman seit 1744 gehörte. Viele Einwohner Ibras kehrten nach 1964 aus Ostafrika zurück und brachten Reichtum sowie afrikanische Einflüsse mit. Wahrzeichen sind die historischen Wachtürme der Stadtteile Al-Mansfah und Al-Kanater sowie der berühmte Frauenmarkt am Mittwochmorgen, auf dem ausschließlich Frauen Stoffe, Schmuck und Gewürze verkaufen. Die alte Lehmziegelarchitektur wird zunehmend restauriert. Ibra dient als Ausgangspunkt für Wüstentouren in die Sanddünen Wahibas.",
        "facts": [
            "Etwa 50.000 Einwohner in Asch-Scharqiyya-Nord",
            "Rund 150 Kilometer südöstlich von Maskat",
            "Historische Verbindungen zur Insel Sansibar bis 1856",
            "Wachtürme in Al-Mansfah und Al-Kanater",
            "Berühmter Frauenmarkt jeden Mittwochmorgen",
            "Ausgangspunkt für Wüstentouren in die Wahiba-Sande",
            "Rückkehr vieler Familien aus Sansibar nach 1964",
            "Bedeutende ibaditische Theologieschule",
        ],
    },
    "ibri-cities-v2": {
        "desc": "Ibri ist die Hauptstadt der Region Ad-Dhahira im Westen Omans und liegt auf einer Höhe von etwa 280 Metern am Rand der Rub al-Chali-Wüste. Die Stadt mit rund 110.000 Einwohnern liegt nahe bedeutender Erdöl- und Gasfelder, die seit den 1960er Jahren das wirtschaftliche Rückgrat des Sultanats Oman seit 1744 bilden. Etwa 40 Kilometer nordwestlich befindet sich die UNESCO-Welterbestätte Bat, die mit ihren Bienenkorb-Grabtürmen aus dem 3. Jahrtausend vor Christus eine der ältesten Siedlungsstätten der Arabischen Halbinsel ist. Die alte Lehmziegelfestung von Ibri aus dem 17. Jahrhundert dominiert das historische Stadtzentrum. Die Lage an der Hauptstraße zwischen Maskat und den Vereinigten Arabischen Emiraten macht Ibri zum wichtigen Verkehrsknotenpunkt.",
        "facts": [
            "Etwa 110.000 Einwohner in der Region Ad-Dhahira",
            "Auf rund 280 Metern Höhe am Rand der Rub al-Chali",
            "Nahe großen Erdöl- und Gasfeldern Omans",
            "UNESCO-Welterbe Bat mit prähistorischen Grabtürmen",
            "Lehmziegelfestung aus dem 17. Jahrhundert",
            "Etwa 280 Kilometer westlich von Maskat",
            "Wichtige Hauptstraße in die Vereinigten Arabischen Emirate",
            "Bienenkorbgräber Bat aus dem 3. Jahrtausend vor Christus",
        ],
    },
    "al-buraimi-cities-v2": {
        "desc": "Al Buraimi ist die Hauptstadt der gleichnamigen Provinz im Norden Omans und bildet mit der emiratischen Nachbarstadt Al Ain eine grenzüberschreitende Oasenregion. Die Stadt mit rund 75.000 Einwohnern liegt auf etwa 280 Metern Höhe in einer der ältesten kontinuierlich bewohnten Siedlungslandschaften der Arabischen Halbinsel, mit archäologischen Funden aus der Bronzezeit (Hafit-Periode, 3200 bis 2700 vor Christus). Bis 2006 war die Grenze zu den Vereinigten Arabischen Emiraten offen, danach errichtete Oman Grenzkontrollen, was Al Buraimi vom emiratischen Hinterland trennte. Die Festung Al-Khandaq aus dem 19. Jahrhundert und die Hisn-al-Hilla-Festung sind die wichtigsten historischen Bauwerke. Die Buraimi-Krise von 1952 bis 1955 zwischen dem Sultanat Oman seit 1744, Saudi-Arabien und Großbritannien um die Oase ist Teil der modernen Geschichte.",
        "facts": [
            "Etwa 75.000 Einwohner in der Provinz Al Buraimi",
            "Bildet mit Al Ain eine grenzüberschreitende Oase",
            "Archäologische Funde aus der Hafit-Periode 3200 v. Chr.",
            "Festung Al-Khandaq aus dem 19. Jahrhundert",
            "Buraimi-Krise von 1952 bis 1955",
            "Grenzkontrollen zu den Emiraten seit 2006",
            "Auf rund 280 Metern Höhe in der Wüste",
            "Eine der ältesten Siedlungen der Arabischen Halbinsel",
        ],
    },
    "rustaq-cities-v2": {
        "desc": "Ruszták liegt am Fuß des Dschebel-Achdar-Gebirges in der Region Süd-Batinah und war von 1624 bis 1744 die Hauptstadt der Yarubi-Dynastie, bevor Ahmad bin Said al-Bu-Said die Al-Bu-Said-Dynastie und damit das moderne Sultanat Oman seit 1744 begründete. Die Stadt mit rund 90.000 Einwohnern besitzt mit der Festung Ruszták eines der eindrucksvollsten Bauwerke des Landes. Die ursprüngliche Anlage stammt aus dem 7. Jahrhundert (vorislamische Zeit) und wurde im 17. Jahrhundert massiv erweitert. Die heißen Quellen von Ain al-Kasfa, etwa 10 Kilometer von der Stadt entfernt, sprudeln mit Schwefelwasser bei rund 45 Grad Celsius und werden seit Jahrhunderten zu Heilzwecken genutzt. Rusztáks fruchtbare Wadis ermöglichen ausgedehnte Dattelpalmenplantagen und Mangoanbau.",
        "facts": [
            "Rund 90.000 Einwohner in der Region Süd-Batinah",
            "Hauptstadt der Yarubi-Dynastie 1624 bis 1744",
            "Festung Ruszták ursprünglich aus dem 7. Jahrhundert",
            "Heiße Schwefelquellen Ain al-Kasfa bei 45 Grad Celsius",
            "Am Fuß des Dschebel-Achdar-Gebirges",
            "Ahmad bin Said begründete 1744 die Al-Bu-Said-Dynastie",
            "Ausgedehnte Dattel- und Mangoplantagen",
            "Etwa 175 Kilometer westlich von Maskat",
        ],
    },
    "haima-cities-v2": {
        "desc": "Haima ist die Hauptstadt der zentralen Provinz Al-Wusta und liegt mitten in der Wüste auf etwa 145 Metern Höhe, rund 600 Kilometer südlich von Maskat. Die kleine Stadt mit etwa 25.000 Einwohnern wurde in den 1980er Jahren systematisch als Verwaltungszentrum der dünn besiedelten Region ausgebaut. Al-Wusta erstreckt sich über fast 80.000 Quadratkilometer, hat aber nur rund 50.000 Einwohner – die niedrigste Bevölkerungsdichte des Sultanats Oman seit 1744. Etwa 100 Kilometer nördlich liegt das Arabian-Oryx-Schutzgebiet, das 1994 als UNESCO-Welterbe ausgewiesen, jedoch 2007 nach Erdölfunden wieder gestrichen wurde. Haima ist ein wichtiger Versorgungsknotenpunkt an der Hauptstraße zwischen Maskat und Salala und für die Erdölfelder der Petroleum Development Oman.",
        "facts": [
            "Etwa 25.000 Einwohner in der Provinz Al-Wusta",
            "Auf rund 145 Metern Höhe in der Wüste",
            "Provinz Al-Wusta umfasst fast 80.000 Quadratkilometer",
            "Niedrigste Bevölkerungsdichte des Sultanats",
            "Arabian-Oryx-Schutzgebiet 100 Kilometer nördlich",
            "Verwaltungssitz seit den 1980er Jahren",
            "Wichtiger Versorgungspunkt zwischen Maskat und Salala",
            "Etwa 600 Kilometer südlich von Maskat",
        ],
    },
    "seeb-cities-v2": {
        "desc": "Sib ist eine der bevölkerungsreichsten Städte der Provinz Maskat mit rund 270.000 Einwohnern und liegt etwa 25 Kilometer westlich des historischen Stadtzentrums. Hier befindet sich der internationale Flughafen Maskat, der 2018 ein neues Großterminal mit einer Kapazität von 20 Millionen Passagieren pro Jahr eröffnete. Im Sib-Vertrag von 1920 wurde der Konflikt zwischen dem Sultanat Maskat und dem Imamat Oman beigelegt – ein wichtiger Schritt in der Geschichte des Sultanats Oman seit 1744. Die Stadt ist Sitz mehrerer königlicher Paläste, darunter Bait al-Baraka, das Privatresidenz des Sultans war. Der lange Strand mit Palmenpromenade ist beliebt bei Einheimischen, und der Fischmarkt im Dorf Sib zählt zu den lebhaftesten Omans.",
        "facts": [
            "Etwa 270.000 Einwohner in der Provinz Maskat",
            "Internationaler Flughafen Maskat seit 2018 neu",
            "Kapazität 20 Millionen Passagiere pro Jahr",
            "Sib-Vertrag von 1920 zwischen Sultanat und Imamat",
            "Königliche Residenz Bait al-Baraka",
            "Etwa 25 Kilometer westlich von Alt-Maskat",
            "Lebhafter Fischmarkt im Dorf Sib",
            "Lange Palmenpromenade am Golf von Oman",
        ],
    },
    "muttrah-cities-v2": {
        "desc": "Matrah ist der historische Hafenstadtteil der Hauptstadtregion Maskat und liegt direkt am Golf von Oman. Mit rund 150.000 Einwohnern verbindet das Viertel die alten Hafenviertel mit modernen Geschäftsbezirken. Der Souk von Matrah, eines der ältesten Marktviertel der arabischen Welt, ist ein Labyrinth schmaler Gassen, in denen seit Jahrhunderten Weihrauch, Silberschmuck, Khanjar-Dolche und Gewürze gehandelt werden. Die Corniche von Matrah, eine drei Kilometer lange Uferpromenade, wurde unter Sultan Qabus in den 1980er Jahren modernisiert. Über dem Hafen thront die portugiesische Festung Matrah aus dem Jahr 1580, errichtet während der portugiesischen Besatzung von 1507 bis 1650 im Sultanat Oman seit 1744. Der Tiefseehafen Mina Sultan Qabus war jahrzehntelang der wichtigste Hafen des Landes.",
        "facts": [
            "Rund 150.000 Einwohner im historischen Hafenviertel",
            "Souk von Matrah eines der ältesten Marktviertel Arabiens",
            "Portugiesische Festung Matrah aus dem Jahr 1580",
            "Drei Kilometer lange Corniche-Promenade",
            "Hafen Mina Sultan Qabus war Hauptumschlagplatz",
            "Portugiesische Besatzung von 1507 bis 1650",
            "Handelszentrum für Weihrauch und Silberschmuck",
            "Khanjar-Dolche als traditionelles Handwerk",
        ],
    },
    "bawshar-cities-v2": {
        "desc": "Bauschar ist eine der bevölkerungsreichsten Wilayats der Provinz Maskat mit rund 230.000 Einwohnern. Das Viertel erstreckt sich von den Ausläufern der Hadschar-Berge bis zur Küste und vereint moderne Wohnsiedlungen, Universitäten und Industrieparks. Die Sultan-Qabus-Universität, gegründet 1986 als erste Universität des Sultanats Oman seit 1744, liegt im benachbarten Al-Khoudh. Bauschar ist berühmt für die Sanddünen von Bauschar, die sich überraschend mitten im Stadtgebiet erheben und ein beliebter Wochenend-Ausflugsort sind. Die Große Sultan-Qabus-Moschee, eingeweiht 2001 und mit einem 70 Meter hohen Hauptminarett ausgestattet, fasst über 20.000 Gläubige und besitzt einen der größten handgewebten Teppiche der Welt mit 4.343 Quadratmetern Fläche.",
        "facts": [
            "Etwa 230.000 Einwohner in der Provinz Maskat",
            "Sultan-Qabus-Universität seit 1986 in der Nähe",
            "Sanddünen von Bauschar mitten im Stadtgebiet",
            "Große Sultan-Qabus-Moschee seit 2001",
            "Hauptminarett 70 Meter hoch",
            "Handgewebter Teppich von 4.343 Quadratmetern",
            "Moschee fasst über 20.000 Gläubige",
            "Mehrere Großeinkaufszentren wie Avenues Mall",
        ],
    },
    "bahla-cities-v2": {
        "desc": "Bahla in der Region Ad-Dachiliyya beherbergt die UNESCO-Welterbestätte Bahla-Festung, die 1987 als erste omanische Stätte in die Liste aufgenommen wurde. Die mächtige Lehmziegelanlage stammt aus dem 12. bis 15. Jahrhundert und wurde von der Stamm der Banu-Nabhan errichtet, die Bahla zu ihrer Hauptstadt machten. Die Stadt mit rund 60.000 Einwohnern ist von einer 13 Kilometer langen Lehmziegelmauer umgeben, die als Sur al-Bahla bekannt ist. Bahla gilt seit Jahrhunderten als Zentrum der Töpferei in Oman: Die rotbraunen Tonkrüge aus Bahla werden nach traditionellen Methoden auf der Töpferscheibe gefertigt. Im omanischen Volksglauben ist Bahla auch als Stadt der Dschinn bekannt, denen viele lokale Legenden gewidmet sind. Etwa 200 Kilometer südwestlich von Maskat in der Sultanat Oman seit 1744 gelegen.",
        "facts": [
            "Rund 60.000 Einwohner in Ad-Dachiliyya",
            "UNESCO-Welterbe seit 1987",
            "Festung aus dem 12. bis 15. Jahrhundert",
            "13 Kilometer lange Lehmziegelmauer Sur al-Bahla",
            "Hauptstadt der Banu-Nabhan-Dynastie",
            "Zentrum der traditionellen Töpferei",
            "Im Volksglauben Stadt der Dschinn",
            "Etwa 200 Kilometer südwestlich von Maskat",
        ],
    },
    "barka-cities-v2": {
        "desc": "Barka liegt an der Al-Batinah-Küste etwa 80 Kilometer nordwestlich von Maskat und ist mit rund 110.000 Einwohnern eine wichtige Hafen- und Marktstadt der Provinz Süd-Batinah. Die Festung Barka aus dem späten 17. Jahrhundert spielte eine entscheidende Rolle in der Geschichte des Sultanats Oman seit 1744: Hier besiegte 1747 Ahmad bin Said al-Bu-Said die persischen Truppen unter Nadir Schah und begründete damit die noch heute herrschende Al-Bu-Said-Dynastie. Die Stadt ist berühmt für ihre traditionellen Bullenkämpfe, die seit Jahrhunderten an Freitagnachmittagen stattfinden – allerdings ohne dass Tiere verletzt werden. Halwa, ein traditionelles süßes Dessert aus Datteln, Safran und Rosenwasser, wird in Barka in besonders hoher Qualität hergestellt. Der lange Sandstrand und das Naseem-Erholungsgebiet ziehen Besucher aus Maskat an.",
        "facts": [
            "Etwa 110.000 Einwohner in Süd-Batinah",
            "Etwa 80 Kilometer nordwestlich von Maskat",
            "Festung Barka aus dem späten 17. Jahrhundert",
            "Sieg über die Perser 1747 durch Ahmad bin Said",
            "Begründung der Al-Bu-Said-Dynastie 1747",
            "Traditionelle Bullenkämpfe ohne Verletzungen",
            "Berühmt für Halwa-Dessert",
            "Naseem-Erholungspark beliebtes Ausflugsziel",
        ],
    },
    "duqm-cities-v2": {
        "desc": "Duqm an der Küste der Provinz Al-Wusta ist die jüngste Großstadt Omans: Bis 2011 war sie ein kleines Fischerdorf mit wenigen Hundert Einwohnern, heute leben hier rund 25.000 Menschen mit prognostiziertem Wachstum auf 100.000 in den nächsten Jahrzehnten. Der Sonderwirtschaftsbereich SEZAD wurde 2011 gegründet und umfasst rund 2.000 Quadratkilometer mit Hafen, Werft, Raffinerie, Flughafen und Touristenzonen. Der Hafen von Duqm ist mit Liegeplätzen für Schiffe bis 600 Meter Länge einer der modernsten am Indischen Ozean. Die Trockendockwerft Oman Drydock, eröffnet 2011, gehört zu den größten der Region. Etwa 20 Kilometer nördlich liegt der Felsengarten von Duqm, eine bizarre, durch Erosion geformte Sandsteinlandschaft. Duqm steht symbolisch für die Diversifizierungsstrategie des Sultanats Oman seit 1744 weg vom Erdöl.",
        "facts": [
            "Etwa 25.000 Einwohner in der Provinz Al-Wusta",
            "Sonderwirtschaftszone SEZAD seit 2011",
            "Wirtschaftszone umfasst rund 2.000 Quadratkilometer",
            "Hafen für Schiffe bis 600 Meter Länge",
            "Oman Drydock seit 2011 in Betrieb",
            "Felsengarten von Duqm aus Sandsteinerosion",
            "Symbol der Diversifizierung weg vom Erdöl",
            "Bis 2011 ein Fischerdorf mit wenigen Bewohnern",
        ],
    },
    "suwayq-cities-v2": {
        "desc": "Suwaiq ist eine Küstenstadt in der Provinz Süd-Batinah mit rund 110.000 Einwohnern und liegt etwa 130 Kilometer nordwestlich von Maskat. Die Stadt ist seit Jahrhunderten ein wichtiges landwirtschaftliches Zentrum der Batinah-Ebene, die als Kornkammer des Sultanats Oman seit 1744 gilt. Auf den fruchtbaren, durch Aflag-Bewässerungssysteme erschlossenen Böden gedeihen Datteln, Bananen, Limetten, Mangos und Gemüse. Die Festung Suwaiq aus dem 18. Jahrhundert mit ihren vier markanten Türmen liegt direkt am Strand und beherbergt heute ein kleines Museum. Der lange Sandstrand erstreckt sich über mehrere Kilometer und ist Brutgebiet für Suppenschildkröten. Die Wirtschaft basiert traditionell auf Fischerei, Landwirtschaft und neuerdings auf Industrieprojekten in der Sohar-Suwaiq-Industriezone.",
        "facts": [
            "Etwa 110.000 Einwohner in Süd-Batinah",
            "Rund 130 Kilometer nordwestlich von Maskat",
            "Festung Suwaiq aus dem 18. Jahrhundert",
            "Vier markante Wachtürme an der Küste",
            "Aflag-Bewässerung der Batinah-Ebene",
            "Anbau von Datteln, Bananen und Limetten",
            "Brutgebiet für Suppenschildkröten",
            "Sohar-Suwaiq-Industriezone seit den 2000er Jahren",
        ],
    },
    "saham-cities-v2": {
        "desc": "Saham ist eine Wilayat in der Provinz Nord-Batinah mit rund 120.000 Einwohnern und liegt rund 200 Kilometer nordwestlich von Maskat an der Küste des Golfs von Oman. Die Stadt verfügt über die Festung Saham aus dem späten 18. Jahrhundert, die unter Sultan Said bin Sultan errichtet wurde. Said bin Sultan, einer der bedeutendsten Herrscher des Sultanats Oman seit 1744, regierte von 1804 bis 1856 und verlegte 1832 die Hauptstadt zeitweise nach Sansibar. Saham ist eine wichtige Fischerei- und Landwirtschaftsstadt: Tiefkühlanlagen verarbeiten den Fang der lokalen Fischerflotte. Die fruchtbare Küstenebene wird mittels Aflag-Bewässerung für den Anbau von Limetten, Datteln und Gemüse genutzt. Der lange Sandstrand und die historische Marine Promenade machen Saham auch zu einem Ziel für Tagesausflügler aus Sohar und Maskat.",
        "facts": [
            "Etwa 120.000 Einwohner in Nord-Batinah",
            "Rund 200 Kilometer nordwestlich von Maskat",
            "Festung Saham aus dem späten 18. Jahrhundert",
            "Said bin Sultan herrschte 1804 bis 1856",
            "Hauptstadtverlegung nach Sansibar 1832",
            "Wichtige Fischerei- und Landwirtschaftsstadt",
            "Aflag-Bewässerung für Limetten und Datteln",
            "Tiefkühlanlagen verarbeiten den Fischfang",
        ],
    },
    "shinas-cities-v2": {
        "desc": "Schinas ist die nördlichste Wilayat der Provinz Nord-Batinah und grenzt direkt an die Vereinigten Arabischen Emirate. Die Stadt mit rund 75.000 Einwohnern liegt etwa 280 Kilometer nordwestlich von Maskat an der Küste des Golfs von Oman. Schinas verfügt über einen der wichtigsten Mangrovenwälder Omans (Khor Liwa und Khor Schinas), die seit 2008 als Schutzgebiet ausgewiesen sind und Brutplatz für zahlreiche Zugvögel. Die Festung Schinas aus dem 19. Jahrhundert wurde restauriert und beherbergt heute ein kleines Museum zur Geschichte der Region. Der Hafen Schinas mit Fährverbindungen zum Iran (Bandar-e Lenge) ist ein wichtiger Knotenpunkt im Handel des Sultanats Oman seit 1744. Wirtschaftlich dominieren Fischerei, Landwirtschaft (Datteln, Limetten) und der grenzüberschreitende Handel mit den Emiraten.",
        "facts": [
            "Etwa 75.000 Einwohner in Nord-Batinah",
            "Nördlichste Wilayat an der Grenze zu den Emiraten",
            "Etwa 280 Kilometer nordwestlich von Maskat",
            "Mangrovenschutzgebiete Khor Liwa und Khor Schinas",
            "Schutzgebiete seit 2008 ausgewiesen",
            "Festung Schinas aus dem 19. Jahrhundert",
            "Fährverbindung zum iranischen Bandar-e Lenge",
            "Brutplatz für Zugvögel im Mangrovenwald",
        ],
    },
    "al-mudhaibi-cities-v2": {
        "desc": "Al Mudaibi ist eine Wilayat im Norden der Region Asch-Scharqiyya-Nord mit rund 75.000 Einwohnern. Die Stadt liegt rund 200 Kilometer südöstlich von Maskat in einer Übergangszone zwischen den Hadschar-Bergen und der Wahiba-Wüste. Al Mudaibi besteht aus mehreren Dörfern und Oasen, von denen Sinau und Samad asch-Schan zu den ältesten zählen. Archäologische Funde belegen Besiedlung seit mehr als 3.000 Jahren. Die Wilayat ist berühmt für ihre ausgedehnten Dattelpalmenplantagen, die durch das jahrhundertealte Aflag-Bewässerungssystem versorgt werden. Mehrere Aflag der Region sind seit 2006 Teil der UNESCO-Welterbestätte „Aflag-Bewässerungssysteme Omans“. Bedeutende historische Festungen und Wachtürme prägen das Landschaftsbild im Sultanat Oman seit 1744 und zeugen von der strategischen Bedeutung der Region.",
        "facts": [
            "Etwa 75.000 Einwohner in Asch-Scharqiyya-Nord",
            "Rund 200 Kilometer südöstlich von Maskat",
            "Übergangszone zwischen Hadschar-Bergen und Wahiba",
            "Archäologische Funde aus über 3.000 Jahren",
            "Ausgedehnte Dattelpalmenplantagen",
            "Aflag-Bewässerungssystem seit 2006 UNESCO-Welterbe",
            "Historische Dörfer Sinau und Samad asch-Schan",
            "Zahlreiche Festungen und Wachtürme",
        ],
    },
    "jalan-bani-bu-ali-cities-v2": {
        "desc": "Dschalan Bani Bu Ali ist eine Wilayat in der Region Asch-Scharqiyya-Süd mit rund 65.000 Einwohnern und liegt etwa 240 Kilometer südöstlich von Maskat. Die Stadt ist berühmt für die Al-Hamouda-Moschee, eine außergewöhnliche Lehmziegelmoschee mit 52 Kuppeln, die im 16. oder 17. Jahrhundert erbaut wurde und zu den architektonischen Schätzen des Sultanats Oman seit 1744 zählt. Die Wilayat verfügt über zahlreiche historische Wachtürme und Festungen, darunter die Festung Bani Bu Ali. Im Jahr 1820 fand hier die berüchtigte Schlacht von Bani Bu Ali zwischen britischen Truppen und lokalen Kämpfern statt, die mit einer schweren Niederlage der Briten endete. Etwa 25 Kilometer südlich liegt das Wahiba-Sandmeer, eines der eindrucksvollsten Wüstengebiete der Arabischen Halbinsel. Die Region grenzt zudem an die unberührten Strände bei Aschm.",
        "facts": [
            "Etwa 65.000 Einwohner in Asch-Scharqiyya-Süd",
            "Rund 240 Kilometer südöstlich von Maskat",
            "Al-Hamouda-Moschee mit 52 Kuppeln",
            "Moschee aus dem 16. oder 17. Jahrhundert",
            "Schlacht von Bani Bu Ali im Jahr 1820",
            "Britische Niederlage gegen lokale Kämpfer",
            "Etwa 25 Kilometer zum Wahiba-Sandmeer",
            "Zahlreiche Wachtürme und Festungen",
        ],
    },
    "qurayyat-cities-v2": {
        "desc": "Kuraját ist eine Küstenwilayat in der Provinz Maskat mit rund 65.000 Einwohnern und liegt etwa 95 Kilometer südöstlich der Hauptstadt am Golf von Oman. Die Stadt war historisch ein bedeutender Hafen und wurde 1507 von dem portugiesischen Eroberer Afonso de Albuquerque geplündert, bevor er nach Maskat weiterzog. Die Festung Kuraját aus dem 19. Jahrhundert mit ihren rosafarbenen Mauern wurde unter Imam Asim ibn Ali errichtet. Der Wadi-Daika-Damm, etwa 25 Kilometer nordwestlich, ist mit 75 Metern Höhe und einer Speicherkapazität von 100 Millionen Kubikmetern der größte Damm des Sultanats Oman seit 1744 und wurde 2012 fertiggestellt. Kuraját ist eine wichtige Fischereistadt: Sardinen werden in der traditionellen Sonnentrocknung haltbar gemacht. Die Strände und der Wadi-Schab in der Nähe sind beliebte Ausflugsziele.",
        "facts": [
            "Etwa 65.000 Einwohner in der Provinz Maskat",
            "Rund 95 Kilometer südöstlich von Maskat",
            "Plünderung 1507 durch Afonso de Albuquerque",
            "Festung Kuraját aus dem 19. Jahrhundert",
            "Wadi-Daika-Damm mit 75 Metern Höhe",
            "Speicherkapazität 100 Millionen Kubikmeter",
            "Damm seit 2012 in Betrieb",
            "Wichtige Fischereistadt für Sardinen",
        ],
    },
    "al-hamra-cities-v2": {
        "desc": "Al Hamra in der Region Ad-Dachiliyya gilt als das am besten erhaltene Beispiel traditioneller omanischer Lehmziegelarchitektur. Die Stadt mit rund 22.000 Einwohnern liegt am Fuß des 3.009 Meter hohen Dschebel Schams, des höchsten Bergs Omans, etwa 220 Kilometer westlich von Maskat. Die historischen Häuser Al Hamras stammen größtenteils aus dem 17. Jahrhundert, einige der ältesten gar aus der Yarubi-Zeit (1624 bis 1744) vor der Gründung der Al-Bu-Said-Dynastie und damit des Sultanats Oman seit 1744. Das Lebensmuseum Bait al-Safah zeigt traditionelle Handwerke wie Brotbacken, Kaffeerösten und Indigofärberei. Etwa 15 Kilometer westlich liegt das Bergdorf Misfah al-Abriyyin, ebenfalls aus Lehmziegeln gebaut, das auf einem steilen Felsvorsprung thront. Al Hamra ist Ausgangspunkt für Wanderungen zum Balcony Walk auf dem Dschebel Schams.",
        "facts": [
            "Etwa 22.000 Einwohner in Ad-Dachiliyya",
            "Am Fuß des 3.009 Meter hohen Dschebel Schams",
            "Lehmziegelhäuser größtenteils aus dem 17. Jahrhundert",
            "Älteste Häuser aus der Yarubi-Zeit 1624 bis 1744",
            "Lebensmuseum Bait al-Safah",
            "Bergdorf Misfah al-Abriyyin in 15 Kilometern",
            "Ausgangspunkt zum Balcony Walk",
            "Etwa 220 Kilometer westlich von Maskat",
        ],
    },
    "taqah-cities-v2": {
        "desc": "Taka ist eine Küstenstadt in der Provinz Dhofar mit rund 25.000 Einwohnern und liegt etwa 35 Kilometer östlich von Salala am Indischen Ozean. Die Stadt war historisch ein bedeutender Hafen für den Weihrauch-Export, der die Region Dhofar seit dem 3. Jahrtausend vor Christus prägt. Die Festung Taka aus dem 19. Jahrhundert wurde unter Sultan Said bin Sultan errichtet und beherbergt heute ein Museum, das die traditionelle Lebensweise der Region und die Geschichte des Sultanats Oman seit 1744 dokumentiert. Etwa 5 Kilometer westlich befindet sich die archäologische Stätte Sumhuram (Khor Rori), eine UNESCO-Welterbestätte aus dem 1. Jahrhundert vor Christus, die Teil der „Land des Weihrauchs“-Welterbestätte ist. Taka ist auch ein wichtiges Zentrum der Sardinenfischerei mit traditionellen Trocknungsanlagen.",
        "facts": [
            "Etwa 25.000 Einwohner in Dhofar",
            "Rund 35 Kilometer östlich von Salala",
            "Festung Taka aus dem 19. Jahrhundert",
            "Erbaut unter Said bin Sultan",
            "UNESCO-Welterbe Sumhuram in 5 Kilometern",
            "Sumhuram aus dem 1. Jahrhundert vor Christus",
            "Historischer Weihrauch-Exporthafen",
            "Zentrum der Sardinenfischerei",
        ],
    },
    "mirbat-cities-v2": {
        "desc": "Mirbat ist eine historische Hafenstadt in der Provinz Dhofar mit rund 14.000 Einwohnern und liegt etwa 75 Kilometer östlich von Salala. Vom 9. bis zum 16. Jahrhundert war Mirbat einer der bedeutendsten Häfen der arabischen Welt für den Export von Weihrauch und Pferden, vor allem nach Indien und China. Marco Polo erwähnt die Stadt im 13. Jahrhundert in seinen Reiseberichten. Das Grabmal des Bin Ali, eines lokalen Heiligen aus dem 13. oder 14. Jahrhundert, ist eine wichtige Pilgerstätte. Am 19. Juli 1972 fand hier während des Dhofar-Aufstands die Schlacht von Mirbat statt, in der eine Handvoll britischer SAS-Soldaten gemeinsam mit Truppen des Sultanats Oman seit 1744 einen Angriff von etwa 250 Aufständischen abwehrten. Die Korallenriffe vor Mirbat zählen zu den schönsten Tauchgebieten Omans.",
        "facts": [
            "Etwa 14.000 Einwohner in Dhofar",
            "Rund 75 Kilometer östlich von Salala",
            "Wichtigster Weihrauch-Exporthafen 9. bis 16. Jahrhundert",
            "Erwähnung bei Marco Polo im 13. Jahrhundert",
            "Grabmal des Bin Ali als Pilgerstätte",
            "Schlacht von Mirbat am 19. Juli 1972",
            "Dhofar-Aufstand und britische SAS-Verteidiger",
            "Korallenriffe als beliebtes Tauchgebiet",
        ],
    },
    "thumrait-cities-v2": {
        "desc": "Tumrajt ist eine Wilayat in der Provinz Dhofar im Süden Omans mit rund 25.000 Einwohnern und liegt etwa 80 Kilometer nördlich von Salala auf der Hochebene Najd. Die Stadt war jahrhundertelang eine wichtige Karawanenstation auf der Weihrauchroute, die Boswellia-sacra-Harz vom Anbaugebiet Wadi Dawkah über die Wüste nach Norden in den Mittelmeerraum transportierte. Wadi Dawkah, etwa 25 Kilometer südlich, ist seit 2000 als UNESCO-Welterbestätte „Land des Weihrauchs“ anerkannt. Tumrajt beherbergt einen wichtigen Luftwaffenstützpunkt der königlichen omanischen Luftstreitkräfte. Während des Dhofar-Aufstands (1965 bis 1976) im Sultanat Oman seit 1744 spielte die Basis eine zentrale Rolle. Die Stadt liegt am Tor zur Rub-al-Chali-Wüste, dem größten Sandwüstengebiet der Welt mit etwa 650.000 Quadratkilometern Fläche.",
        "facts": [
            "Etwa 25.000 Einwohner in Dhofar",
            "Rund 80 Kilometer nördlich von Salala",
            "Karawanenstation auf der Weihrauchroute",
            "Wadi Dawkah seit 2000 UNESCO-Welterbe",
            "Luftwaffenstützpunkt der königlichen Luftstreitkräfte",
            "Zentrale Rolle im Dhofar-Aufstand 1965 bis 1976",
            "Tor zur Rub-al-Chali-Wüste",
            "Wüste umfasst rund 650.000 Quadratkilometer",
        ],
    },
    "dibba-al-baya-cities-v2": {
        "desc": "Dibba al-Baya ist eine Wilayat in der Exklave Musandam an der Spitze der Arabischen Halbinsel mit rund 25.000 Einwohnern auf omanischer Seite. Die Stadt ist administrativ geteilt: Dibba al-Hisn gehört zum Emirat Schardscha, Dibba al-Fudschaira zum Emirat Fudschaira und Dibba al-Baya zum Sultanat Oman seit 1744. Im Jahr 633 fand hier die historische Schlacht von Dibba statt, in der Truppen des Kalifen Abu Bakr unter Ikrima ibn Abi Dschahl die abtrünnigen Stämme Omans während der Ridda-Kriege besiegten und damit die islamische Herrschaft auf der Halbinsel sicherten. Heute ist Dibba al-Baya bekannt für seine spektakuläre Fjordlandschaft, in der Bootstouren auf traditionellen Daus zu unbewohnten Buchten und Korallenriffen führen. Die steilen Kalksteinklippen Musandams ragen bis zu 2.000 Meter aus dem Meer.",
        "facts": [
            "Etwa 25.000 Einwohner auf omanischer Seite",
            "Stadt geteilt zwischen Oman und zwei Emiraten",
            "Schlacht von Dibba im Jahr 633",
            "Sieg während der Ridda-Kriege unter Ikrima",
            "Fjordlandschaft Musandams mit Klippen bis 2.000 Meter",
            "Bootstouren auf traditionellen Daus",
            "Korallenriffe und unbewohnte Buchten",
            "Dibba al-Hisn gehört zu Schardscha",
        ],
    },
    "nakhal-cities-v2": {
        "desc": "Nahal ist eine Wilayat in der Provinz Süd-Batinah mit rund 35.000 Einwohnern und liegt etwa 120 Kilometer westlich von Maskat am Fuß des Dschebel-Achdar-Gebirges. Wahrzeichen der Stadt ist die markant auf einem Felsvorsprung errichtete Nahal-Festung, deren ältester Teil aus vorislamischer Zeit (vor dem 7. Jahrhundert) stammt. Die heutige Anlage wurde im 17. Jahrhundert während der Yarubi-Dynastie erweitert und später unter Imam Said bin Sultan im 19. Jahrhundert erneut umgestaltet. Etwa 5 Kilometer von der Festung entfernt sprudelt die heiße Quelle Ain A'Thawwarah aus den Bergen, deren Wasser ganzjährig 33 bis 40 Grad Celsius warm ist und seit Jahrhunderten zu Heilzwecken genutzt wird. Die fruchtbare Oase mit ausgedehnten Dattelpalmen prägt das Landschaftsbild im Sultanat Oman seit 1744.",
        "facts": [
            "Etwa 35.000 Einwohner in Süd-Batinah",
            "Rund 120 Kilometer westlich von Maskat",
            "Nahal-Festung auf einem Felsvorsprung",
            "Älteste Teile aus vorislamischer Zeit",
            "Erweiterung im 17. Jahrhundert unter den Yarubi",
            "Heiße Quelle Ain A'Thawwarah bei 33 bis 40 Grad Celsius",
            "Quelle 5 Kilometer von der Festung entfernt",
            "Ausgedehnte Dattelpalmenoase",
        ],
    },
    "adam-cities-v2": {
        "desc": "Adam ist eine Wilayat im Süden der Region Ad-Dachiliyya mit rund 12.000 Einwohnern und liegt etwa 220 Kilometer südlich von Maskat am Rand der Wahiba-Wüste auf dem Weg nach Salala. Die Stadt war historisch eine wichtige Karawanenstation an der Verbindungsstraße zwischen Nord- und Süd-Oman und gilt als Stammsitz der Al-Bu-Said-Dynastie, die seit 1744 das Sultanat Oman seit 1744 regiert. Ahmad bin Said al-Bu-Said, der Begründer der Dynastie und Bezwinger der persischen Truppen 1747, stammt ursprünglich aus Adam. Die historische Lehmziegel-Altstadt Hara al-Yaman ist ein gut erhaltenes Beispiel traditioneller omanischer Architektur. Etwa 50 Kilometer südlich beginnt die zentrale Wüstenregion Al-Wusta. Adam ist Ausgangspunkt für Reisen in die Wahiba-Sande und die südlichen Provinzen.",
        "facts": [
            "Etwa 12.000 Einwohner in Ad-Dachiliyya",
            "Rund 220 Kilometer südlich von Maskat",
            "Stammsitz der Al-Bu-Said-Dynastie",
            "Ahmad bin Said al-Bu-Said stammt aus Adam",
            "Al-Bu-Said-Dynastie seit 1744 an der Macht",
            "Lehmziegel-Altstadt Hara al-Yaman",
            "Karawanenstation auf der Salala-Route",
            "Tor zur Wahiba-Wüste und Al-Wusta",
        ],
    },
}


def fmt_facts(facts: list[str]) -> str:
    items = []
    for f in facts:
        esc = f.replace("\\", "\\\\").replace('"', '\\"')
        items.append(f'"{esc}"')
    return "[" + ", ".join(items) + "]"


def main() -> None:
    text = FILE.read_text(encoding="utf-8")
    original = text
    filled = 0
    skipped = 0
    not_found = []

    for poi_id, content in DATA.items():
        # Match the whole POI block: from `id: "<poi_id>"` (with the leading `{` on previous line)
        # up to the closing `}` of that block. We use a non-greedy match anchored at `facts: { ... }`
        # with balanced detection by scanning forward.
        id_re = re.compile(r'\{\s*\n\s*id:\s*"' + re.escape(poi_id) + r'"')
        m = id_re.search(text)
        if not m:
            not_found.append(poi_id)
            continue

        # find start of this POI block (the `{` matched)
        block_start = m.start()
        # walk to find matching closing brace
        depth = 0
        i = block_start
        while i < len(text):
            ch = text[i]
            if ch == '{':
                depth += 1
            elif ch == '}':
                depth -= 1
                if depth == 0:
                    break
            i += 1
        if depth != 0:
            not_found.append(poi_id + " (unbalanced)")
            continue
        block_end = i  # index of closing `}`
        block = text[block_start:block_end + 1]

        if "descriptionAdvanced" in block:
            skipped += 1
            print(f"SKIP (already filled): {poi_id}")
            continue

        # Locate the closing `}` of the `facts: { ... }` object inside the block.
        facts_re = re.compile(r'facts:\s*\{')
        fm = facts_re.search(block)
        if not fm:
            not_found.append(poi_id + " (no facts:)")
            continue
        # walk to closing brace of facts object
        depth_f = 0
        j = fm.start()
        # find first '{'
        while j < len(block) and block[j] != '{':
            j += 1
        # j now at facts '{'
        while j < len(block):
            ch = block[j]
            if ch == '{':
                depth_f += 1
            elif ch == '}':
                depth_f -= 1
                if depth_f == 0:
                    break
            j += 1
        if depth_f != 0:
            not_found.append(poi_id + " (facts unbalanced)")
            continue
        facts_close_idx = j  # index of closing `}` of facts object inside block

        # Compose the insertion. We add a `,` after facts close, then descriptionAdvanced and factsAdvanced.
        de_desc = content["desc"].replace("\\", "\\\\").replace('"', '\\"')
        de_facts = fmt_facts(content["facts"])
        indent = "    "  # POI inner property indent
        insertion = (
            ",\n"
            f'{indent}descriptionAdvanced: {{ de: "{de_desc}" }},\n'
            f'{indent}factsAdvanced: {{ de: {de_facts} }}'
        )
        new_block = block[:facts_close_idx + 1] + insertion + block[facts_close_idx + 1:]
        text = text[:block_start] + new_block + text[block_end + 1:]
        filled += 1
        print(f"FILLED: {poi_id}")

    if text != original:
        FILE.write_text(text, encoding="utf-8")
        print(f"\nDone. Filled={filled}, Skipped={skipped}, NotFound={len(not_found)}")
        if not_found:
            for nf in not_found:
                print(f"  NOT FOUND: {nf}")
    else:
        print("Nothing changed.")


if __name__ == "__main__":
    main()
