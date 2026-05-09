# -*- coding: utf-8 -*-
"""Fill descriptionAdvanced.de + factsAdvanced.de for Vietnam cities (V2).

Replaces the boilerplate DE template (signature: "vom Mekong-Delta über die
Halong-Bucht bis zu den Reisterrassen") with unique prose per POI.
"""
import re
import sys
from pathlib import Path

FILE = Path(r"C:\Users\User\plizio-repo\lib\visualLab\data\poiExtraVietnamCitiesV2.ts")

# Per-POI hand-written DE content. Each value: dict with "desc" (80-150 Wörter)
# and "facts" (6-8 Stichpunkte mit konkreten Zahlen / Jahreszahlen).
DATA = {
    "bac-ninh-cities-v2": {
        "desc": "Bắc Ninh liegt rund 30 km nordöstlich von Hanoi im Delta des Roten Flusses und gilt als Wiege der Lý-Dynastie, die Vietnam von 1009 bis 1225 regierte und das Land Đại Việt nannte. Die heutige Provinzhauptstadt mit etwa 250.000 Einwohnern entwickelte sich nach der Đổi-Mới-Reform von 1986 zum führenden Elektronikstandort des Landes; Samsung errichtete ab 2008 das Werk Yên Phong, das jährlich Smartphones im zweistelligen Milliardenwert exportiert. Während der französischen Kolonialzeit (1887–1954) war Bắc Ninh Eisenbahnknoten an der Linie Hanoi–Lạng Sơn. Trotz Industrialisierung bleibt die Stadt das Herzland des Quan-họ-Wechselgesangs, den die UNESCO 2009 zum immateriellen Welterbe erklärte.",
        "facts": [
            "Wiege der Lý-Dynastie 1009–1225, Vietnams erstes stabiles Königreich",
            "Quan họ Wechselgesang seit 2009 UNESCO-Weltkulturerbe",
            "Samsung-Werk Yên Phong ab 2008, größte Smartphone-Fabrik Südostasiens",
            "Provinzfläche nur 822 km², dichteste Industriezone Vietnams",
            "Dâu-Pagode aus dem 2. Jahrhundert, älteste buddhistische Anlage des Landes",
            "Rund 250.000 Einwohner, etwa 30 km nordöstlich von Hanoi",
            "Đông-Hồ-Holzschnittdruck, traditionelles Volkskunsthandwerk seit dem 16. Jahrhundert",
        ],
    },
    "hai-duong-cities-v2": {
        "desc": "Hải Dương liegt an der Nationalstraße 5 zwischen Hanoi und dem Hafen Hải Phòng und bildet ein wichtiges Glied der Nördlichen Schlüsselwirtschaftszone. Die Provinzhauptstadt mit rund 510.000 Einwohnern (Stadtgebiet) trägt ihren Namen seit 1469, als Kaiser Lê Thánh Tông die Verwaltung neu ordnete. Während des Vietnamkriegs wurden die Brücken über den Thái-Bình-Fluss mehrfach bombardiert. Nach der Đổi-Mới-Politik 1986 zogen Industrieparks wie Đại An und Nam Sách japanische und koreanische Investoren an. Berühmt ist die Stadt für die Süßspeise bánh đậu xanh aus Mungbohnenmehl, die seit dem späten 19. Jahrhundert produziert wird, sowie für die Côn-Sơn–Kiếp-Bạc-Tempelanlage des Volkshelden Trần Hưng Đạo aus dem 13. Jahrhundert.",
        "facts": [
            "Stadtnamen offiziell seit 1469 unter Kaiser Lê Thánh Tông",
            "Etwa 510.000 Einwohner im urbanen Gebiet, Provinz rund 1,9 Mio.",
            "Liegt 57 km östlich von Hanoi an der NH-5 nach Hải Phòng",
            "Bánh đậu xanh als Spezialität seit den 1880er-Jahren",
            "Côn-Sơn–Kiếp-Bạc-Festival jährlich im 8. Mondmonat zu Ehren Trần Hưng Đạos (gestorben 1300)",
            "Industrieparks Đại An und Nam Sách seit Ende der 1990er-Jahre",
            "Provinzfläche 1.668 km² im fruchtbaren Roten-Fluss-Delta",
        ],
    },
    "vinh-yen-cities-v2": {
        "desc": "Vĩnh Yên ist seit 1899 als französische Verwaltungsstadt gegründet worden und wurde 1997 mit der Wiederherstellung der Provinz Vĩnh Phúc deren Hauptstadt. Die Stadt mit etwa 152.000 Einwohnern liegt 55 km nordwestlich von Hanoi am Đầm-Vạc-See und gilt als eines der dynamischsten Wirtschaftszentren Nordvietnams. Honda Vietnam betreibt hier seit 1996 sein erstes Motorrad- und Automobilwerk; Toyota folgte 1995 in der Nachbargemeinde Phúc Yên. Die Provinz Vĩnh Phúc gehört seit den 2000er-Jahren regelmäßig zu den drei steueraufkommensstärksten Provinzen Vietnams. Westlich erhebt sich der Tam-Đảo-Nationalpark (gegründet 1996) mit seiner ehemaligen französischen Bergstation auf 930 Metern Höhe.",
        "facts": [
            "Gegründet 1899 als französischer Verwaltungssitz",
            "Provinzhauptstadt von Vĩnh Phúc seit 1997",
            "Honda Vietnam Werk seit 1996, Toyota seit 1995 in der Region",
            "Etwa 152.000 Einwohner auf 50,8 km² Stadtfläche",
            "55 km nordwestlich von Hanoi an der Autobahn Nội Bài–Lào Cai",
            "Tam-Đảo-Nationalpark seit 1996, frühere französische Bergstation auf 930 m",
            "Đầm-Vạc-See als Erholungsgebiet im Stadtzentrum",
        ],
    },
    "thai-binh-cities-v2": {
        "desc": "Thái Bình liegt zwischen den Mündungsarmen des Roten Flusses und gilt als Vietnams Reiskammer; die gleichnamige Provinz wurde 1890 von der französischen Kolonialverwaltung geschaffen. Die Hauptstadt mit etwa 270.000 Einwohnern war 1930 Schauplatz des Bauernaufstands von Tiền Hải gegen die französische Steuerpolitik. Nach 1986 (Đổi Mới) wandelte sich die Stadt vom rein agrarischen Zentrum zu einem Standort der Textil- und Schiffbauindustrie. Berühmt ist die Keo-Pagode (Chùa Keo), gegründet 1632, mit ihrem 11-stufigen hölzernen Glockenturm – einem Meisterwerk der Lê-Architektur. Das nahe Erdgasfeld Tiền Hải versorgt die Region seit 1981 mit eigener Energie.",
        "facts": [
            "Provinz 1890 von der französischen Kolonialverwaltung geschaffen",
            "Bauernaufstand von Tiền Hải 1930 gegen Kolonialsteuern",
            "Keo-Pagode aus dem Jahr 1632, hölzerner Glockenturm mit 11 Stufen",
            "Erdgasfeld Tiền Hải in Betrieb seit 1981, erste Erdgasförderung Vietnams",
            "Etwa 270.000 Einwohner im Stadtgebiet, Provinz rund 1,86 Mio.",
            "Reisproduktion ca. 1 Million Tonnen pro Jahr",
            "110 km südöstlich von Hanoi, Provinzfläche 1.586 km²",
        ],
    },
    "phu-ly-cities-v2": {
        "desc": "Phủ Lý liegt am Zusammenfluss der Flüsse Đáy, Châu Giang und Nhuệ rund 60 km südlich von Hanoi und ist seit 1997 wieder Hauptstadt der Provinz Hà Nam. Während des Vietnamkriegs wurde die Stadt 1965–1972 mehrfach von US-Bombern getroffen, da hier die Eisenbahn- und Straßenverbindung Hanoi–Ho-Chi-Minh-Stadt verläuft; nahezu jedes Gebäude musste nach 1973 wiederaufgebaut werden. Im Zuge der Đổi-Mới-Politik nach 1986 entstanden Zementwerke und Textilfabriken. Etwa 12 km westlich erhebt sich die 2003 begonnene Tam-Chúc-Pagodenanlage, mit 5.100 Hektar einer der größten buddhistischen Komplexe der Welt; sie war 2019 Gastgeber des UN-Vesak-Festes.",
        "facts": [
            "Provinzhauptstadt von Hà Nam seit der Wiederherstellung der Provinz 1997",
            "Im Vietnamkrieg 1965–1972 mehrfach durch US-Luftangriffe zerstört",
            "Etwa 60 km südlich von Hanoi an der NH-1 und der Eisenbahn",
            "Tam-Chúc-Pagode seit 2003 errichtet, 5.100 ha Anlage, UN-Vesak-Gastgeber 2019",
            "Stadtbevölkerung rund 136.000 Einwohner",
            "Wichtiger Standort der Zementindustrie (Vissai, Bút Sơn)",
            "Zusammenfluss von Đáy, Châu Giang und Nhuệ – Knotenpunkt der Binnenschifffahrt",
        ],
    },
    "ninh-binh-cities-v2": {
        "desc": "Ninh Bình liegt am Südrand des Roten-Fluss-Deltas und wird wegen seiner Karstlandschaft als „trockene Halong-Bucht\" bezeichnet. In der nahen ehemaligen Hauptstadt Hoa Lư residierten von 968 bis 1010 die Đinh- und frühen Lý-Kaiser, bevor König Lý Thái Tổ den Hof nach Thăng Long (Hanoi) verlegte. Die heutige Provinzhauptstadt zählt rund 160.000 Einwohner. Im Vietnamkrieg unterhielten die Truppen der Demokratischen Republik hier wichtige Nachschublinien. Seit 2014 zählt der Tràng-An-Landschaftskomplex zum gemischten UNESCO-Welterbe. Die 2010 geweihte Bái-Đính-Pagode auf 539 Hektar ist die größte Pagodenanlage Vietnams. Beliebt ist auch die Bootsfahrt durch die Höhlen von Tam Cốc–Bích Động.",
        "facts": [
            "Hoa Lư war 968–1010 erste Hauptstadt des unabhängigen Vietnam (Đại Cồ Việt)",
            "Tràng-An-Komplex seit 2014 UNESCO-Welterbe (gemischt, Natur + Kultur)",
            "Bái-Đính-Pagode seit 2010 fertiggestellt, 539 ha, größte Vietnams",
            "Stadtbevölkerung rund 160.000 Einwohner",
            "Cúc-Phương-Nationalpark, gegründet 1962, ältester Nationalpark Vietnams",
            "Provinzfläche 1.387 km², 95 km südlich von Hanoi",
            "Drehort des Films „Kong: Skull Island\" (2017)",
        ],
    },
    "bac-giang-cities-v2": {
        "desc": "Bắc Giang liegt rund 50 km nordöstlich von Hanoi am Fluss Thương und ist seit 1997 Hauptstadt der gleichnamigen Provinz. Die Region war Schauplatz der berühmten Schlacht am Fluss Như Nguyệt 1077, in der General Lý Thường Kiệt eine 300.000 Mann starke Song-Armee zurückschlug. Heute leben in der Stadt etwa 200.000 Menschen. Seit 2010 hat sich die Provinz zum Elektronikzentrum entwickelt; Foxconn, Luxshare und Samsung-Zulieferer beschäftigen über 200.000 Arbeitskräfte in den Industrieparks Vân Trung und Quang Châu. Die Provinz produziert jährlich 180.000–200.000 Tonnen Litschis (vải thiều), vor allem aus dem Bezirk Lục Ngạn, und führt das Land in dieser Frucht an.",
        "facts": [
            "Schlacht am Như-Nguyệt-Fluss 1077 unter General Lý Thường Kiệt",
            "Provinzhauptstadt seit 1997 nach der Trennung von Bắc Ninh",
            "Litschi-Ernte 180.000–200.000 t pro Jahr, Vietnams größter Produzent",
            "Foxconn, Luxshare und Samsung-Zulieferer in Vân Trung und Quang Châu",
            "Etwa 200.000 Einwohner im Stadtgebiet, 50 km nordöstlich von Hanoi",
            "Suối-Mỡ-Heiligtum aus dem 13. Jahrhundert in den Yên-Tử-Bergen",
            "Bổ-Đà-Pagode mit Holzschnitt-Tripitaka aus dem 18. Jahrhundert",
        ],
    },
    "mong-cai-cities-v2": {
        "desc": "Móng Cái liegt am östlichsten Ende Vietnams an der Mündung des Bắc-Luân-Flusses, der die Grenze zur chinesischen Stadt Dongxing bildet. Während der französischen Kolonialzeit (1887–1954) war es Sitz eines Zollpostens, wurde im Chinesisch-Vietnamesischen Krieg 1979 schwer verwüstet und nach 1991 als Sonderwirtschaftszone wieder aufgebaut. Heute leben hier rund 110.000 Einwohner; die Stadt erreichte 2008 den Status einer Provinzstadt. Über die 1957 errichtete und 1994 wiedereröffnete Brücke Hữu Nghị wickelt sich ein bedeutender Anteil des Vietnam-China-Grenzhandels ab. Der 17 km lange Strand von Trà Cổ gilt als längster Sandstrand Vietnams; in der Nähe steht die Trà-Cổ-Kirche von 1880.",
        "facts": [
            "Grenzübergang nach Dongxing, China, über die Bắc-Luân-Brücke (1957/1994)",
            "1979 im Chinesisch-Vietnamesischen Krieg schwer zerstört",
            "Status einer Provinzstadt der Stufe III seit 2008",
            "Strand von Trà Cổ mit 17 km längster Sandstrand Vietnams",
            "Trà-Cổ-Kirche (Sa Vĩ) aus dem Jahr 1880",
            "Etwa 110.000 Einwohner, Provinz Quảng Ninh",
            "Wichtigster Landgrenzhandelsposten zwischen Vietnam und China",
        ],
    },
    "lao-cai-cities-v2": {
        "desc": "Lào Cai liegt am Zusammenfluss von Roter Fluss und Nậm Thi an der Grenze zur chinesischen Provinz Yunnan und ist Hauptstadt der gleichnamigen Provinz. Die französische Kolonialverwaltung baute zwischen 1903 und 1910 die Eisenbahnlinie Hanoi–Lào Cai–Kunming, die heute noch in Betrieb ist. Im Februar 1979 wurde die Stadt während des Chinesisch-Vietnamesischen Krieges fast vollständig zerstört; der Wiederaufbau begann nach Wiedereröffnung der Grenze 1991. Heute zählt das Stadtgebiet rund 130.000 Einwohner. Etwa 38 km südwestlich liegt die ehemalige französische Bergstation Sa Pa auf 1.500 m mit dem 3.143 m hohen Fansipan, dem höchsten Berg Indochinas, der seit 2016 per Seilbahn erreichbar ist.",
        "facts": [
            "Eisenbahn Hanoi–Lào Cai–Kunming, gebaut 1903–1910 unter französischer Verwaltung",
            "1979 im Chinesisch-Vietnamesischen Krieg zerstört, Grenze wieder offen seit 1991",
            "Grenzübergang nach Hekou, Provinz Yunnan, China",
            "Etwa 130.000 Einwohner im Stadtgebiet",
            "Tor zu Sa Pa (1.500 m) und zum Fansipan (3.143 m, höchster Berg Indochinas)",
            "Fansipan-Seilbahn seit 2016 in Betrieb, 6.292 m lang",
            "Provinzfläche 6.364 km², 25 ethnische Minderheiten leben in der Region",
        ],
    },
    "dien-bien-phu-cities-v2": {
        "desc": "Điện Biên Phủ liegt im Hochtal Mường Thanh im äußersten Nordwesten Vietnams, rund 470 km Luftlinie von Hanoi entfernt. Vom 13. März bis 7. Mai 1954 wurde hier die entscheidende Schlacht zwischen der Việt-Minh-Volksarmee unter General Võ Nguyên Giáp und dem französischen Expeditionskorps unter Oberst de Castries ausgetragen; die Niederlage Frankreichs beendete 67 Jahre Kolonialherrschaft und führte zu den Genfer Verträgen vom 21. Juli 1954. 11.721 französische Soldaten gerieten in Gefangenschaft. Heute zählt die Stadt rund 80.000 Einwohner und ist seit 2003 Provinzhauptstadt von Điện Biên. Sehenswürdigkeiten sind das Schlachtfeldmuseum, der Hügel A1 und der Kommandobunker de Castries.",
        "facts": [
            "Entscheidende Schlacht 13. März – 7. Mai 1954, Ende der französischen Kolonialherrschaft",
            "Genfer Verträge vom 21. Juli 1954 nach der Niederlage Frankreichs",
            "11.721 französische Soldaten gerieten in Gefangenschaft",
            "Provinzhauptstadt von Điện Biên seit der Provinzteilung 2003",
            "Etwa 80.000 Einwohner, Hochtal Mường Thanh auf rund 478 m Höhe",
            "Hügel A1 und Bunker de Castries als zentrale Gedenkstätten",
            "Statue „Sieg von Điện Biên Phủ\" 2004 zum 50. Jahrestag enthüllt, 16,6 m hoch",
        ],
    },
    "son-la-cities-v2": {
        "desc": "Sơn La liegt auf einer Hochebene in 600–700 m Höhe in den nordwestlichen Bergen Vietnams und ist Hauptstadt der gleichnamigen Provinz. Während der französischen Kolonialzeit baute die Verwaltung 1908 das berüchtigte Gefängnis Sơn La, in dem zwischen 1930 und 1945 über tausend vietnamesische Revolutionäre interniert wurden, darunter Tô Hiệu, der dort 1944 starb. Heute leben in der Stadt rund 100.000 Menschen, vor allem aus den Volksgruppen Thái, Mường und Kinh. Seit der Đổi-Mới-Politik (1986) ist Sơn La zu Vietnams größtem Anbaugebiet für Arabica-Kaffee und für Milchkühe geworden. Der Wasserkraftwerk-Stausee von Sơn La ging 2012 ans Netz und ist mit 2.400 MW das größte Wasserkraftwerk Südostasiens.",
        "facts": [
            "Gefängnis Sơn La 1908 von der französischen Kolonialverwaltung errichtet",
            "Revolutionär Tô Hiệu starb 1944 im Gefängnis von Sơn La",
            "Wasserkraftwerk Sơn La seit 2012 in Betrieb, 2.400 MW – größtes Südostasiens",
            "Hochebene auf 600–700 m, etwa 100.000 Einwohner",
            "Vietnams größtes Anbaugebiet für Arabica-Kaffee",
            "Provinz beheimatet 12 ethnische Gruppen, vor allem Thái und Mường",
            "Provinzfläche 14.123 km², zweitgrößte Vietnams",
        ],
    },
    "ben-tre-cities-v2": {
        "desc": "Bến Tre liegt im Mekong-Delta auf drei Inseln zwischen den Mündungsarmen des Mekong und gilt als „Land der Kokospalmen\". Die Provinz produziert auf rund 78.000 Hektar Plantagen jährlich etwa 800 Millionen Kokosnüsse – fast 40 % der vietnamesischen Gesamtproduktion. Während des Vietnamkriegs war Bến Tre Schauplatz des Đồng-Khởi-Aufstands vom 17. Januar 1960, mit dem die Volksaufstände im Süden begannen. Die Stadt mit rund 145.000 Einwohnern wurde im Februar 1968 während der Tết-Offensive bei Kämpfen weitgehend zerstört; ein US-Major begründete dies mit dem Satz „Wir mussten die Stadt zerstören, um sie zu retten.\" Heute leben Touristen und Einheimische von Kokosnusssüßigkeiten, Reispapier und Bootsfahrten auf den Kanälen.",
        "facts": [
            "Etwa 800 Mio. Kokosnüsse pro Jahr, ca. 40 % der vietnamesischen Produktion",
            "Đồng-Khởi-Aufstand am 17. Januar 1960, Beginn der südvietnamesischen Volksaufstände",
            "Tết-Offensive Februar 1968: Stadt schwer zerstört",
            "Drei große Mekong-Inseln: An Hóa, Bảo, Minh",
            "Stadtbevölkerung rund 145.000, Provinz etwa 1,3 Mio.",
            "Rạch-Miễu-Brücke seit 2009 verbindet Bến Tre mit Tiền Giang",
            "Kokosnussplantagen auf rund 78.000 Hektar",
        ],
    },
    "tra-vinh-cities-v2": {
        "desc": "Trà Vinh liegt im südöstlichen Mekong-Delta zwischen den Flussarmen Cổ Chiên und Hậu und ist berühmt für seine Khmer-Krom-Kultur: Etwa 30 % der rund 1 Mio. Provinzeinwohner sind ethnische Khmer, das Stadtgebiet zählt rund 156.000 Menschen. Die Provinz beherbergt 143 Khmer-Theravāda-Pagoden, darunter die Âng-Pagode aus dem 10. Jahrhundert mit dem Ao-Bà-Om-Quadratteich. Während der französischen Kolonialzeit (1887–1954) war Trà Vinh ein wichtiger Reishandelsposten. Im Vietnamkrieg blieb das Gebiet weitgehend unter dem Einfluss der Befreiungsfront. Seit 2017 verbindet die 2,5 km lange Cổ-Chiên-Brücke Trà Vinh über Bến Tre mit Ho-Chi-Minh-Stadt. Bedeutendstes Khmer-Fest ist Ok Om Bok mit Drachenbootrennen im Oktober/November.",
        "facts": [
            "Rund 30 % der Provinzbevölkerung sind ethnische Khmer-Krom",
            "143 Khmer-Theravāda-Pagoden in der Provinz",
            "Âng-Pagode aus dem 10. Jahrhundert mit Ao-Bà-Om-Teich",
            "Stadtbevölkerung etwa 156.000 Einwohner",
            "Cổ-Chiên-Brücke seit Mai 2017, 2,5 km lang",
            "Ok-Om-Bok-Mondfest mit Drachenbootrennen im Okt./Nov.",
            "Provinz produziert jährlich rund 1,2 Mio. t Reis",
        ],
    },
    "vinh-long-cities-v2": {
        "desc": "Vĩnh Long liegt am Nordufer des Hậu-Flusses (Bassac) zwischen den Mekong-Hauptarmen Tiền und Hậu, rund 135 km südwestlich von Ho-Chi-Minh-Stadt. Die Stadt wurde 1732 unter Lord Nguyễn Phúc Trú als Long-Hồ-Garnison gegründet und 1832 von Kaiser Minh Mạng zur Provinzhauptstadt erhoben. Während der französischen Kolonialzeit (1862–1954) war sie nach Mỹ Tho und Cần Thơ ein wichtiges Reishandelszentrum. Heute zählt das Stadtgebiet rund 200.000 Einwohner. Berühmt ist die Insel An Bình mit ihren Obstgärten, Bonsai-Plantagen und Homestays, sowie die Văn-Thánh-Miếu, der einzige konfuzianische Literaturtempel im Mekong-Delta, errichtet 1864. Die Mỹ-Thuận-Brücke, 1999–2000 mit australischer Hilfe gebaut, war Vietnams erste Schrägseilbrücke.",
        "facts": [
            "Gegründet 1732 unter Lord Nguyễn Phúc Trú als Long-Hồ-Garnison",
            "Provinzhauptstadt seit 1832 unter Kaiser Minh Mạng",
            "Mỹ-Thuận-Brücke 1999/2000 fertig, Vietnams erste Schrägseilbrücke",
            "Văn-Thánh-Miếu Literaturtempel von 1864",
            "Insel An Bình mit Obstgärten und Homestays",
            "Stadtbevölkerung rund 200.000, Provinz ca. 1 Mio.",
            "Wichtiger Anlegepunkt für Mekong-Flusskreuzfahrten",
        ],
    },
    "cao-lanh-cities-v2": {
        "desc": "Cao Lãnh liegt am Tiền-Flussarm des Mekong und ist seit der Provinzteilung 1976 Hauptstadt von Đồng Tháp. In der Stadt steht die Gedenkstätte für Nguyễn Sinh Sắc (1862–1929), den Vater Hồ Chí Minhs, der hier seine letzten Jahre verbrachte; das Mausoleum wurde 1977 eingeweiht. Während des Vietnamkriegs war die Region wegen der Đồng-Tháp-Mười-Sümpfe ein Rückzugsgebiet der Befreiungsfront. Etwa 50 km nordwestlich liegt der 1985 gegründete Tràm-Chim-Nationalpark, ein 7.313 Hektar großes Feuchtgebiet, das laut Ramsar-Konvention seit 2012 international geschützt ist und Heimat des seltenen Saruskranichs (Antigone antigone) ist. Das Stadtgebiet zählt rund 165.000 Einwohner.",
        "facts": [
            "Provinzhauptstadt von Đồng Tháp seit der Provinzteilung 1976",
            "Mausoleum für Nguyễn Sinh Sắc, Vater Hồ Chí Minhs, eingeweiht 1977",
            "Tràm-Chim-Nationalpark gegründet 1985, Ramsar-Schutzgebiet seit 2012",
            "7.313 ha Feuchtgebiet, Heimat des Saruskranichs",
            "Etwa 165.000 Einwohner",
            "Cao-Lãnh-Brücke seit 2018, 2,01 km lange Schrägseilbrücke über den Tiền",
            "Đồng-Tháp-Mười (Plain of Reeds) im Vietnamkrieg Guerilla-Rückzugsgebiet",
        ],
    },
    "chau-doc-cities-v2": {
        "desc": "Châu Đốc liegt am Hậu-Fluss an der Grenze zu Kambodscha in der Provinz An Giang und wurde 1757 unter dem Nguyễn-Lord Phước Khoát gegründet. Die Stadt mit rund 110.000 Einwohnern ist ein kultureller Schmelztiegel der Kinh, Khmer, Cham und Hoa. Auf dem 230 m hohen heiligen Sam-Berg (Núi Sam) südwestlich der Stadt steht der Tempel der Heiligen Frau Bà Chúa Xứ aus dem frühen 19. Jahrhundert; jährlich pilgern etwa 4 Millionen Menschen zum Vía-Bà-Fest im Mai. Berühmt sind die schwimmenden Fischfarmen auf dem Fluss, in denen jährlich rund 200.000 Tonnen Pangasius produziert werden. Während des Vietnamkriegs war die Region 1978 Schauplatz der vietnamesisch-kambodschanischen Kampfhandlungen vor Vietnams Einmarsch in Kambodscha im Dezember.",
        "facts": [
            "Gegründet 1757 unter dem Nguyễn-Lord Phước Khoát",
            "Bà-Chúa-Xứ-Tempel auf dem Sam-Berg aus dem frühen 19. Jahrhundert",
            "Vía-Bà-Pilgerfest im Mai zieht jährlich ca. 4 Mio. Besucher an",
            "Schwimmende Fischfarmen, ca. 200.000 t Pangasius pro Jahr",
            "Etwa 110.000 Einwohner, multiethnisch (Kinh, Khmer, Cham, Hoa)",
            "Sam-Berg 230 m hoch, sieben Pagoden und Heiligtümer",
            "Grenze zu Kambodscha (Provinz Takeo), Schauplatz der Kämpfe 1978",
        ],
    },
    "ha-tien-cities-v2": {
        "desc": "Hà Tiên liegt am Golf von Thailand an der Grenze zu Kambodscha und blickt auf eine ungewöhnliche Geschichte zurück: 1708 stellte sich der chinesische Flüchtling Mạc Cửu mit dem Hafen unter den Schutz der Nguyễn-Lords; seine Familie regierte als halbautonome „Mạc-Dynastie\" bis 1832, bevor Kaiser Minh Mạng die Stadt direkt verwaltete. Heute zählt das Stadtgebiet rund 100.000 Einwohner. Zu den Wahrzeichen gehören die Höhlenpagode Thạch Động, der Strand Mũi Nai und das Mạc-Familien-Mausoleum. Der internationale Grenzübergang Hà Tiên–Prek Chak nach Kambodscha öffnete 2007. Von Hà Tiên fahren Fähren zur Insel Phú Quốc (45 km westlich) sowie zum Archipel Hải Tặc.",
        "facts": [
            "Gegründet 1708 unter dem chinesischen Auswanderer Mạc Cửu",
            "Mạc-Dynastie regierte halbautonom bis zur Eingliederung 1832",
            "Internationaler Grenzübergang nach Prek Chak (Kambodscha) seit 2007",
            "Etwa 100.000 Einwohner, Provinz Kiên Giang",
            "Thạch-Động-Höhlentempel, Mũi-Nai-Strand, Mạc-Familienmausoleum",
            "Fährhafen nach Phú Quốc, 45 km westlich",
            "Hải-Tặc-Archipel mit 16 Inseln vor der Küste",
        ],
    },
    "bac-lieu-cities-v2": {
        "desc": "Bạc Liêu liegt an der Südküste Vietnams im Mekong-Delta und ist Hauptstadt der gleichnamigen Provinz. Die Stadt mit rund 195.000 Einwohnern wurde während der französischen Kolonialzeit zum Symbol des Reichtums vietnamesischer Großgrundbesitzer; berühmtestes Beispiel ist die 1919 erbaute Villa des „Công tử Bạc Liêu\" Trần Trinh Huy, eines Playboys, der angeblich Banknoten verbrannte, um Tee zu kochen. Bạc Liêu gilt zudem als Wiege des Đờn-ca-tài-tử-Volksgesangs, der 2013 in die UNESCO-Welterbeliste aufgenommen wurde; das Volkslied „Dạ cổ hoài lang\" wurde 1919 hier von Cao Văn Lầu komponiert. Vor der Küste steht der Windpark Bạc Liêu, der 2010–2016 mit 99,2 MW als erster großer Offshore-Windpark Südostasiens gebaut wurde.",
        "facts": [
            "Villa des „Công tử Bạc Liêu\" Trần Trinh Huy aus dem Jahr 1919",
            "Đờn ca tài tử seit 2013 UNESCO-Welterbe",
            "Volkslied „Dạ cổ hoài lang\" 1919 von Cao Văn Lầu komponiert",
            "Offshore-Windpark Bạc Liêu, 99,2 MW, errichtet 2010–2016",
            "Etwa 195.000 Einwohner",
            "Salzfelder von Đông Hải, traditionelle Salzgewinnung seit dem 19. Jahrhundert",
            "Khmer-Pagode Xiêm Cán aus dem Jahr 1887",
        ],
    },
    "kon-tum-cities-v2": {
        "desc": "Kon Tum liegt im nördlichen Zentralhochland auf rund 525 m Höhe am Đắk-Bla-Fluss und ist Hauptstadt der gleichnamigen Provinz. Französische Missionare gründeten hier ab 1851 die Mission im Bahnar-Gebiet; das Wahrzeichen, die Holzkathedrale von Kon Tum, wurde 1913 von französischen Patres im Kolonial-Bahnar-Mischstil errichtet und steht noch heute komplett aus Eisenholz. Die Provinzbevölkerung besteht zu etwa 53 % aus Bahnar, Sedang, Jrai und anderen Bergvölkern. Während des Vietnamkriegs war Kon Tum Frontlinie; 1972 fand hier in der Schlacht von Kontum eine der größten Panzergefechte des Krieges statt. Etwa 80 km nordwestlich liegt das Drei-Länder-Eck Vietnam–Laos–Kambodscha, gekennzeichnet durch einen 2008 errichteten Marker.",
        "facts": [
            "Französische Mission im Bahnar-Gebiet seit 1851",
            "Holzkathedrale von Kon Tum errichtet 1913 aus Eisenholz",
            "Schlacht von Kontum 1972, eine der größten Panzergefechte des Vietnamkriegs",
            "Etwa 53 % der Provinzbevölkerung gehören ethnischen Bergvölkern an (Bahnar, Sedang, Jrai)",
            "Höhe 525 m, am Đắk-Bla-Fluss gelegen",
            "Drei-Länder-Eck VN-LA-KH ca. 80 km nordwestlich, Marker von 2008",
            "Stadtbevölkerung rund 175.000 Einwohner",
        ],
    },
    "gia-nghia-cities-v2": {
        "desc": "Gia Nghĩa liegt auf rund 600 m Höhe im Süd-Zentralhochland und ist seit der Provinzteilung am 1. Januar 2004 Hauptstadt der jungen Provinz Đắk Nông; im Januar 2020 erhielt der Ort offiziell den Status einer Provinzstadt. Mit rund 60.000 Einwohnern ist Gia Nghĩa eine der kleinsten Provinzhauptstädte Vietnams. Die rote Basaltbodenregion ist ideal für Kaffee (Robusta), Pfeffer und Cashewnüsse. Seit den 2010er-Jahren entwickelt sich Đắk Nông zum Bauxit- und Aluminiumzentrum: Die Aluminium-Schmelze Nhân Cơ, betrieben von Vinacomin, ging 2016 in Betrieb. In der Umgebung liegen die Wasserfälle Đắk G'lun, Liêng Nung und Lưu Ly. Der UNESCO-Geopark Đắk Nông wurde 2020 ausgewiesen und umfasst rund 4.760 km² mit Vulkanhöhlen.",
        "facts": [
            "Provinzhauptstadt seit der Provinzteilung am 1. Januar 2004",
            "Status einer Provinzstadt seit Januar 2020",
            "Etwa 60.000 Einwohner – eine der kleinsten Provinzhauptstädte",
            "Aluminium-Schmelze Nhân Cơ in Betrieb seit 2016",
            "UNESCO Global Geopark Đắk Nông seit 2020, ca. 4.760 km²",
            "Höhe ca. 600 m, rote Basaltböden",
            "Vulkanhöhlensystem Krông Nô (1,5 km), längstes Lavahöhlensystem Südostasiens",
        ],
    },
    "bao-loc-cities-v2": {
        "desc": "Bảo Lộc liegt auf rund 800 m Höhe auf dem südlichen Lâm-Đồng-Plateau und gilt als Vietnams Tee- und Seidenhauptstadt. Französische Pflanzer legten ab 1927 hier die ersten Teeplantagen an, der Ort hieß damals B'Lao. Heute werden auf rund 8.000 Hektar Tee und auf weiteren Flächen Robusta- und Arabica-Kaffee angebaut. Die Seidenraupenzucht und Seidenweberei entwickelten sich nach 1975 zu einem der wichtigsten Industriezweige; Bảo Lộc liefert über 70 % der vietnamesischen Maulbeerseide. Die Stadt zählt rund 165.000 Einwohner und erhielt 2010 den Status einer Provinzstadt. Beliebt sind der 60 m hohe Dambri-Wasserfall, das Phật-Quang-Kloster und das milde Klima mit Jahresdurchschnitt von 21–22 °C.",
        "facts": [
            "Französische Teeplantagen seit 1927 unter dem alten Namen B'Lao",
            "Ca. 8.000 ha Teeplantagen, dazu Robusta- und Arabica-Kaffee",
            "Liefert über 70 % der vietnamesischen Maulbeerseide",
            "Status einer Provinzstadt der Stufe III seit 2010",
            "Dambri-Wasserfall mit ca. 60 m Fallhöhe",
            "Höhe ca. 800 m, Jahresdurchschnitt 21–22 °C",
            "Etwa 165.000 Einwohner",
        ],
    },
    "dong-xoai-cities-v2": {
        "desc": "Đồng Xoài liegt etwa 100 km nördlich von Ho-Chi-Minh-Stadt und ist seit 1997 Hauptstadt der Provinz Bình Phước. Vom 9. bis 20. Juni 1965 fand hier eine der frühesten und größten Schlachten des Vietnamkriegs zwischen US-Truppen und der Befreiungsarmee statt – die Schlacht von Đồng Xoài forderte schwere Verluste auf beiden Seiten. Die Region ist heute Vietnams größtes Anbaugebiet für Naturkautschuk und Cashewnüsse: Bình Phước produziert rund 50 % der gesamten vietnamesischen Cashew-Ernte. Đồng Xoài erhielt 2018 offiziell den Status einer Provinzstadt und zählt rund 165.000 Einwohner. Etwa 60 km östlich liegt der 1992 gegründete Cát-Tiên-Nationalpark, ein Schutzgebiet für Java-Nashörner (bis 2010), Elefanten und Gauren.",
        "facts": [
            "Provinzhauptstadt von Bình Phước seit der Provinzteilung 1997",
            "Schlacht von Đồng Xoài 9.–20. Juni 1965 im Vietnamkrieg",
            "Status einer Provinzstadt seit 2018",
            "Bình Phước liefert rund 50 % der vietnamesischen Cashew-Ernte",
            "Größtes Anbaugebiet für Naturkautschuk in Vietnam",
            "Cát-Tiên-Nationalpark seit 1992, ca. 720 km² östlich der Stadt",
            "Etwa 165.000 Einwohner, 100 km nördlich von HCMC",
        ],
    },
    "tay-ninh-cities-v2": {
        "desc": "Tây Ninh liegt rund 100 km nordwestlich von Ho-Chi-Minh-Stadt an der Grenze zu Kambodscha und ist Hauptstadt der gleichnamigen Provinz. Berühmtestes Wahrzeichen ist der Heilige Stuhl der Cao-Đài-Religion, gebaut zwischen 1933 und 1955: ein farbenprächtiger Tempel mit Drachen-Säulen und dem allsehenden Auge Gottes. Die 1926 in Tây Ninh gegründete synkretistische Religion vereinigt Elemente aus Buddhismus, Konfuzianismus, Daoismus, Christentum und Spiritismus und zählt heute rund 4 Millionen Anhänger. Während des Vietnamkriegs lag hier mit dem „Hauptquartier R\" die Zentrale der Befreiungsfront im sogenannten War Zone C; die Tunnel von Củ Chi und die Schlacht in der Cát-Tiên-Region prägten die Region. Der 986 m hohe Schwarze-Jungfrau-Berg (Núi Bà Đen) ist seit 2020 per Seilbahn erschlossen.",
        "facts": [
            "Cao-Đài-Religion 1926 in Tây Ninh gegründet, ca. 4 Mio. Anhänger",
            "Heiliger Stuhl errichtet 1933–1955",
            "Schwarze-Jungfrau-Berg (Núi Bà Đen) 986 m, höchster Berg Südvietnams",
            "Núi-Bà-Đen-Seilbahn seit 2020 in Betrieb",
            "Im Vietnamkrieg „War Zone C\" und Hauptquartier R der NLF",
            "Grenze zu Kambodscha (Provinz Svay Rieng), Grenzübergang Mộc Bài",
            "Stadtbevölkerung rund 130.000, Provinz ca. 1,2 Mio.",
        ],
    },
    "tam-diep-cities-v2": {
        "desc": "Tam Điệp liegt am Tam-Điệp-Pass in der Provinz Ninh Bình, 105 km südlich von Hanoi, an der historisch wichtigen Linie zwischen Nord- und Zentralvietnam. Im Frühjahr 1789 sammelte hier Kaiser Quang Trung (Nguyễn Huệ) seine Truppen, bevor er Hanoi befreite und in der berühmten Schlacht von Ngọc Hồi-Đống Đa eine 290.000 Mann starke Qing-Armee zerschlug. Die heutige Stadt mit rund 105.000 Einwohnern erhielt 2007 den Status einer Provinzstadt. Tam Điệp ist eines der größten Zentren der vietnamesischen Zementindustrie; die Werke The Vissai (Privatkonzern, gegründet 2002) und Tam Điệp (gegründet 1996) gehören mit zusammen über 6 Mio. Tonnen Jahreskapazität zu den größten Vietnams. Ananas (Dứa Đồng Giao) ist eine bekannte Spezialität.",
        "facts": [
            "Kaiser Quang Trung sammelte 1789 hier sein Heer für die Schlacht von Ngọc Hồi-Đống Đa",
            "Status einer Provinzstadt seit 2007",
            "Zementwerke Vissai (2002) und Tam Điệp (1996), zusammen über 6 Mio. t/Jahr",
            "Etwa 105.000 Einwohner",
            "Tam-Điệp-Pass auf historischer Verteidigungslinie Nord–Zentralvietnam",
            "105 km südlich von Hanoi an der NH-1",
            "Đồng-Giao-Ananas als bekannte regionale Spezialität",
        ],
    },
    "lai-chau-cities-v2": {
        "desc": "Lai Châu liegt auf rund 900 m Höhe in einem der entlegensten Bergtäler Nordwestvietnams und wurde erst 2004 nach der Trennung von Điện Biên zur Hauptstadt der gleichnamigen neuen Provinz; 2013 erhielt die Siedlung den Status einer Provinzstadt. Mit etwa 50.000 Einwohnern ist sie eine der kleinsten Provinzhauptstädte des Landes. Die Provinz beherbergt mehr als 20 ethnische Gruppen, darunter Thái, H'Mông, Dao, Khơ Mú und Mảng. Während der französischen Kolonialzeit (1887–1954) gehörte das Gebiet zum Königreich Sip Song Chau Tai unter dem White-Tai-Häuptling Đèo Văn Long. Westlich der Stadt erhebt sich das Hoàng-Liên-Sơn-Gebirge, östlich liegen die berühmten Reisterrassen von Mù Cang Chải. Das Wasserkraftwerk Lai Châu (1.200 MW, ans Netz seit 2016) ist eines der größten Vietnams.",
        "facts": [
            "Provinzhauptstadt seit der Trennung von Điện Biên 2004",
            "Status einer Provinzstadt seit 2013",
            "Etwa 50.000 Einwohner – eine der kleinsten Provinzhauptstädte Vietnams",
            "Wasserkraftwerk Lai Châu 1.200 MW, ans Netz seit 2016",
            "Über 20 ethnische Gruppen in der Provinz",
            "Höhe ca. 900 m im Hoàng-Liên-Sơn-Gebirge",
            "Königreich Sip Song Chau Tai (White Tai) bis 1954 in der Region",
        ],
    },
    "an-khe-cities-v2": {
        "desc": "An Khê liegt auf rund 420 m Höhe am namensgebenden An-Khê-Pass, der das Zentralhochland mit der Küstenebene von Bình Định verbindet, und gehört zur Provinz Gia Lai. Hier begann 1771 der Tây-Sơn-Aufstand der drei Brüder Nguyễn Nhạc, Nguyễn Huệ (später Kaiser Quang Trung) und Nguyễn Lữ, der binnen weniger Jahre die Nguyễn-Lords im Süden und die Trịnh-Lords im Norden stürzte. Während des Vietnamkriegs war der An-Khê-Pass ein strategischer Engpass entlang der NH-19; 1965–1971 unterhielt die 1st Cavalry Division der US-Armee hier die Basis Camp Radcliff. Die heutige Stadt zählt rund 65.000 Einwohner und erhielt 2003 den Status einer Provinzstadt. Wirtschaftlich wichtig sind Zuckerrohranbau und Holzverarbeitung sowie der Verkehr auf der NH-19 nach Pleiku und Quy Nhơn.",
        "facts": [
            "Tây-Sơn-Aufstand 1771 unter den drei Brüdern Nguyễn Nhạc/Huệ/Lữ begann hier",
            "Status einer Provinzstadt der Stufe IV seit 2003",
            "Camp Radcliff der US-1st-Cavalry-Division 1965–1971",
            "An-Khê-Pass auf der NH-19 zwischen Pleiku und Quy Nhơn",
            "Etwa 65.000 Einwohner, Provinz Gia Lai",
            "Höhe ca. 420 m, Übergang Hochland–Küstenebene",
            "Wirtschaft basiert auf Zuckerrohr, Holz und Cashew",
        ],
    },
}


def main() -> int:
    text = FILE.read_text(encoding="utf-8")
    original = text
    src_lines = text.split("\n")

    # Find each POI block: start at "id: \"<id>\"" and span until next "id: \"" or
    # closing bracket. Within each block we have at most one templated DE line for
    # description (matching the boilerplate signature) and one templated DE line
    # for facts (matching "Liegt im Gebiet der Sozialistischen Republik Vietnam").

    # Build line index of POI starts
    id_re = re.compile(r"^\s*id:\s*\"([^\"]+)\"")
    starts = []  # (line_idx, id)
    for i, line in enumerate(src_lines):
        m = id_re.match(line)
        if m:
            starts.append((i, m.group(1)))

    # Append sentinel
    starts_sentinel = starts + [(len(src_lines), None)]

    desc_template_marker = "vom Mekong-Delta über die Halong-Bucht"
    facts_template_marker = "Liegt im Gebiet der Sozialistischen Republik Vietnam"

    desc_re = re.compile(r"^(\s*)de:\s*\".*\",?\s*$")
    facts_re = re.compile(r"^(\s*)de:\s*\[.*\],?\s*$")

    desc_replaced = 0
    facts_replaced = 0
    skipped = []

    for k in range(len(starts_sentinel) - 1):
        line_i, poi_id = starts_sentinel[k]
        line_end = starts_sentinel[k + 1][0]

        if poi_id not in DATA:
            continue
        entry = DATA[poi_id]

        # Find the "descriptionAdvanced: {" then within it the de: "..."
        # And find "factsAdvanced: {" then within it the de: [...]
        in_desc_block = False
        in_facts_block = False
        desc_done = False
        facts_done = False
        for j in range(line_i, line_end):
            line = src_lines[j]
            stripped = line.strip()
            if stripped.startswith("descriptionAdvanced:"):
                in_desc_block = True
                in_facts_block = False
                continue
            if stripped.startswith("factsAdvanced:"):
                in_facts_block = True
                in_desc_block = False
                continue
            if stripped.startswith("}"):
                in_desc_block = False
                in_facts_block = False
                continue

            if in_desc_block and not desc_done:
                if desc_template_marker in line:
                    m = desc_re.match(line)
                    if m:
                        indent = m.group(1)
                        # Preserve trailing comma if present
                        trailing_comma = "," if line.rstrip().endswith(",") else ""
                        new_de = entry["desc"].replace("\\", "\\\\").replace('"', '\\"')
                        src_lines[j] = f'{indent}de: "{new_de}"{trailing_comma}'
                        desc_replaced += 1
                        desc_done = True

            if in_facts_block and not facts_done:
                if facts_template_marker in line:
                    m = facts_re.match(line)
                    if m:
                        indent = m.group(1)
                        trailing_comma = "," if line.rstrip().endswith(",") else ""
                        items = entry["facts"]
                        json_items = ", ".join(
                            '"' + it.replace("\\", "\\\\").replace('"', '\\"') + '"'
                            for it in items
                        )
                        src_lines[j] = f"{indent}de: [{json_items}]{trailing_comma}"
                        facts_replaced += 1
                        facts_done = True

        if not desc_done:
            skipped.append((poi_id, "desc"))
        if not facts_done:
            skipped.append((poi_id, "facts"))

    new_text = "\n".join(src_lines)
    if new_text != original:
        FILE.write_text(new_text, encoding="utf-8")

    print(f"desc replaced: {desc_replaced}")
    print(f"facts replaced: {facts_replaced}")
    if skipped:
        print("skipped:")
        for s in skipped:
            print(" ", s)
    return 0


if __name__ == "__main__":
    sys.exit(main())
