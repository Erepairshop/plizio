# -*- coding: utf-8 -*-
"""Fill descriptionAdvanced.de and factsAdvanced.de for Comoros V2 cities POIs.

Two cases handled:
  A) descriptionAdvanced block already exists but lacks de:
     -> insert `de: "..."` as the first key in descriptionAdvanced,
        and `de: [...]` as the first key in factsAdvanced.
  B) No descriptionAdvanced block at all:
     -> insert a new `descriptionAdvanced: { de: "..." },\n    factsAdvanced: { de: [...] },`
        right after the closing `},` of the `description: { ... },` block.

German-only fill. Each entry is hand-written with concrete Comoros facts.
"""
import re
from pathlib import Path

PATH = Path(r"C:\Users\User\plizio-repo\lib\visualLab\data\poiExtraComorosCitiesV2.ts")

# ---------------------------------------------------------------------------
# Hand-written German content. desc = 80-150 word prose; facts = 6-8 entries.
# ---------------------------------------------------------------------------

DATA = {
    # ====== Case A: descriptionAdvanced exists, only de missing ======
    "sima-cities-v2": {
        "desc": "Sima liegt im Westen der Insel Anjouan und gilt als wichtiges Zentrum für den Vanille- und Nelkenanbau, der seit dem späten 19. Jahrhundert die lokale Wirtschaft prägt. Die Stadt hat etwa 4.500 Einwohner und liegt auf rund 250 Meter Höhe in einer hügeligen, fruchtbaren Region. Im Plizio-Lehrplan dient Sima als Beispiel für tropische Plantagenwirtschaft im K7-Geografieunterricht. Die terrassierten Hänge zeigen, wie Bauern den vulkanischen Boden Anjouans nutzen, und die Verarbeitung der Vanille erfolgt in kleinen Familienbetrieben. Sima ist über schmale Bergstraßen mit Mutsamudu verbunden, etwa 15 Kilometer entfernt.",
        "facts": [
            "Etwa 4.500 Einwohner auf 250 Metern Höhe",
            "Vanilleanbau seit den 1880er Jahren etabliert",
            "Etwa 15 Kilometer westlich von Mutsamudu gelegen",
            "Bekannt für hochwertige Bourbon-Vanille",
            "Terrassenfeldbau auf vulkanischem Boden",
            "Klimazone: tropisch-feucht mit zwei Regenzeiten",
            "K7-Beispiel für Plantagenökonomie im Indischen Ozean",
        ],
    },
    "tsembehou-cities-v2": {
        "desc": "Tsembehou liegt im Inneren der Insel Anjouan, in einem fruchtbaren Hochtal auf etwa 400 Meter Höhe. Mit rund 14.000 Einwohnern gehört Tsembehou zu den größeren Gemeinden Anjouans und ist berühmt für die Verarbeitung von Ylang-Ylang, dem charakteristischen Parfüm-Rohstoff der Komoren. Die Region produziert einen erheblichen Teil der weltweiten Ylang-Ylang-Essenz und beliefert die französische Parfümindustrie in Grasse seit über 100 Jahren. Im K8-Wirtschaftsunterricht zeigt Tsembehou, wie ein einziges Agrarprodukt eine ganze Inselökonomie strukturiert. Die Destillation erfolgt in traditionellen Kupferanlagen, oft direkt am Feldrand.",
        "facts": [
            "Etwa 14.000 Einwohner im Hochtal Anjouans",
            "Höhenlage rund 400 Meter über dem Meer",
            "Ylang-Ylang-Verarbeitung seit den 1900er Jahren",
            "Tradition der Kupfer-Destillation am Feldrand",
            "Hauptlieferant der Parfümindustrie in Grasse",
            "Komoren erzeugen rund 80 Prozent des Welt-Ylang-Ylang-Öls",
            "K8-Lehrbeispiel für Monokultur-Ökonomie",
        ],
    },
    "itsandra-cities-v2": {
        "desc": "Itsandra liegt nördlich von Moroni an der Westküste von Grande Comore und gilt als historisches Sultanat aus dem 16. Jahrhundert. Heute ist Itsandra ein Vorort der Hauptstadt mit etwa 6.000 Einwohnern und beliebten Stränden, die als Ausflugsziel der Hauptstadtbewohner dienen. Die alten Stadtmauern und das ehemalige Sultanspalast-Areal zeugen von einer Zeit, als Itsandra einer der mächtigsten Sultanate des Archipels war. Im K7-Geschichtsunterricht steht Itsandra für die vorkoloniale Sultanatsstruktur der Komoren. Die Bucht eignet sich für Fischerei und kleine Frachtboote.",
        "facts": [
            "Sultanat seit dem 16. Jahrhundert dokumentiert",
            "Etwa 6.000 Einwohner in Vorortlage",
            "Rund 5 Kilometer nördlich von Moroni",
            "Historische Stadtmauern teilweise erhalten",
            "Beliebter Strand für Hauptstadtbewohner",
            "Traditionelle Fischerei in der Bucht",
            "Bestandteil des kolonialen Sultanat-Netzwerks",
        ],
    },
    "ntsoudjini-cities-v2": {
        "desc": "Ntsoudjini liegt im Norden von Grande Comore zwischen Itsandra und Mitsamiouli und zählt etwa 5.500 Einwohner. Die Gemeinde gehörte historisch zum Sultanat Itsandra-Bambao und ist heute ein landwirtschaftliches Zentrum für den Anbau von Maniok, Bananen und Kokosnüssen. Die Lavafelder des Karthala enden in der Nähe der Stadt und bilden einen markanten Übergang zwischen Hochland und Küste. Im K6-Sachkundeunterricht zeigt Ntsoudjini, wie vulkanische Böden landwirtschaftlich nutzbar gemacht werden. Die Bewohner sprechen überwiegend Shingazidja, den lokalen Komorisch-Dialekt von Grande Comore.",
        "facts": [
            "Etwa 5.500 Einwohner zwischen Lavafeld und Küste",
            "Historisch zum Sultanat Itsandra-Bambao gehörig",
            "Anbau von Maniok, Bananen und Kokosnüssen",
            "Übergangszone zwischen Karthala-Lava und Meer",
            "Shingazidja als vorherrschende Lokalsprache",
            "Verbunden mit Moroni über die Küstenstraße RN1",
            "Kleinflächige Selbstversorgungs-Landwirtschaft",
        ],
    },
    "koimbani-cities-v2": {
        "desc": "Koimbani liegt im Inneren der Insel Grande Comore am Osthang des Karthala-Vulkans, auf etwa 500 Meter Höhe. Die Gemeinde mit rund 8.000 Einwohnern ist bekannt für ihre traditionellen komorischen Holzhäuser und Hochzeitsfeste, die als Grand Mariage über mehrere Tage gefeiert werden. Im K8-Kulturkundeunterricht steht Koimbani für die zentrale soziale Bedeutung des Grand Mariage in der komorischen Gesellschaft. Die Stadt liegt etwa 25 Kilometer nordöstlich von Moroni und verfügt über fruchtbare Felder, die durch regelmäßige Niederschläge bewässert werden. Lokale Märkte versorgen die umliegenden Bergdörfer.",
        "facts": [
            "Etwa 8.000 Einwohner auf 500 Metern Höhe",
            "Am Osthang des Karthala gelegen",
            "Zentrum für die Grand-Mariage-Tradition",
            "Rund 25 Kilometer nordöstlich von Moroni",
            "Traditionelle Holzhäuser im Stadtbild",
            "Regenreiche Lage mit fruchtbaren Bergfeldern",
            "Wichtiger Marktort für Bergdörfer",
            "Trachten-Schnitzereien als Handwerkstradition",
        ],
    },
    "adda-doueni-cities-v2": {
        "desc": "Adda-Douéni liegt im Süden der Insel Anjouan und besteht aus zwei zusammengewachsenen Dörfern, Adda und Douéni, mit zusammen etwa 7.000 Einwohnern. Die Region ist geprägt von steilen Hängen und tiefen Schluchten, in denen Bananen, Maniok und Gewürznelken angebaut werden. Im K7-Geografieunterricht dient Adda-Douéni als Beispiel für Anbau in extremer Hanglage. Die Bewohner haben über Generationen Terrassenfelder angelegt, die Erosion verhindern und gleichzeitig den Bodenertrag steigern. Die nächste größere Stadt ist Domoni, etwa 8 Kilometer nördlich, mit der Adda-Douéni durch eine Bergstraße verbunden ist.",
        "facts": [
            "Doppeldorf mit etwa 7.000 Einwohnern",
            "Im Süden Anjouans an steilen Hängen",
            "Anbau von Bananen, Maniok und Nelken",
            "Terrassenfeldbau gegen Erosion",
            "Etwa 8 Kilometer südlich von Domoni",
            "Lokale Sprache: Shindzuani-Dialekt",
            "Klima: tropisch-feucht mit Hangregen",
        ],
    },
    "moya-cities-v2": {
        "desc": "Moya liegt an der Südküste von Anjouan und gilt als einer der schönsten Strände der Komoren mit feinem weißem Sand und einer geschützten Bucht. Die Gemeinde zählt rund 9.500 Einwohner und lebt von Fischerei, Tourismus und Kokosanbau. Vor der Küste liegen kleine vorgelagerte Inseln mit Korallenriffen, die als Tauch- und Schnorchelreviere genutzt werden. Im K6-Sachkundeunterricht steht Moya für das Zusammenspiel von Riff, Strand und Inselleben. Die hölzernen Pirogen der lokalen Fischer sind nahezu unverändert seit Jahrhunderten und werden bis heute aus einem einzigen Mangobaumstamm gefertigt.",
        "facts": [
            "Etwa 9.500 Einwohner an der Südküste Anjouans",
            "Bekannt für weißen Sandstrand und Korallenriffe",
            "Vorgelagerte kleine Inseln als Tauchrevier",
            "Traditionelle Pirogen aus Mangoholz",
            "Kokosanbau als zweitwichtigste Einnahmequelle",
            "K6-Beispiel für Riff- und Strandökosystem",
            "Saisonaler Tourismus zwischen Mai und Oktober",
        ],
    },
    "mremani-cities-v2": {
        "desc": "Mrémani liegt im Südosten Anjouans und ist mit etwa 13.000 Einwohnern eine der bevölkerungsreichsten Gemeinden außerhalb der Hauptstadt Mutsamudu. Die Stadt liegt auf rund 280 Meter Höhe in einer hügeligen Region und gilt als Verwaltungs- und Marktzentrum für den südlichen Teil der Insel. Mrémani ist bekannt für Nelken- und Vanilleanbau sowie für lokale Korbflechterei aus Pandanus-Blättern. Im K7-Sozialkundeunterricht zeigt Mrémani, wie regionale Verwaltungssitze in Inselstaaten funktionieren. Die Stadt verfügt über eine weiterführende Schule, einen Wochenmarkt und ein kleines Krankenhaus.",
        "facts": [
            "Etwa 13.000 Einwohner im Südosten Anjouans",
            "Höhenlage rund 280 Meter",
            "Verwaltungssitz für den Südteil der Insel",
            "Korbflechterei aus Pandanus-Blättern",
            "Weiterführende Schule und Krankenhaus vorhanden",
            "Nelken- und Vanilleanbau als Wirtschaftsbasis",
            "Wochenmarkt für umliegende Dörfer",
        ],
    },
    "mirontsi-cities-v2": {
        "desc": "Mirontsi liegt direkt östlich von Mutsamudu an der Nordküste von Anjouan und ist faktisch ein Vorort der Inselhauptstadt mit etwa 11.000 Einwohnern. Die Gemeinde ist bekannt für die nahe gelegene Ylang-Ylang-Destillerie von Bambao, die seit 1907 produziert und zu den ältesten Parfümbetrieben des Indischen Ozeans gehört. Im K8-Industriekundeunterricht steht Mirontsi für die Pionierzeit der Komoren-Parfümindustrie. Die Lage am Hang oberhalb der Hafenstadt erlaubt einen weiten Blick über die Bucht von Mutsamudu. Die Bewohner pendeln häufig zur Arbeit in die Hauptstadt.",
        "facts": [
            "Etwa 11.000 Einwohner östlich von Mutsamudu",
            "Bambao-Destillerie seit 1907 in Betrieb",
            "Älteste Parfümfabrik des Indischen Ozeans",
            "Pendlergemeinde der Inselhauptstadt",
            "Hanglage oberhalb der Bucht von Mutsamudu",
            "Ylang-Ylang als wichtigste Industriebasis",
            "K8-Lehrbeispiel für koloniale Industriegeschichte",
        ],
    },
    "wanani-cities-v2": {
        "desc": "Wanani liegt an der Nordküste der kleinsten Komoren-Insel Mohéli und zählt etwa 2.500 Einwohner. Die Gemeinde lebt von Fischerei und Kokosanbau und ist durch eine Schotterstraße mit der Inselhauptstadt Fomboni verbunden, etwa 8 Kilometer entfernt. Im K5-Sachkundeunterricht wird Wanani als Beispiel für eine traditionelle komorische Fischergemeinde behandelt, in der das Leben weitgehend ohne Strom und mit minimaler Infrastruktur abläuft. Die Korallenriffe vor Wanani gehören zum Mohéli-Meeresnationalpark und beherbergen Schildkröten, Buckelwale und Tausende Rifffische. Lokale Familien betreiben kleine Gästehäuser für Ökotouristen.",
        "facts": [
            "Etwa 2.500 Einwohner an Mohélis Nordküste",
            "Rund 8 Kilometer westlich von Fomboni",
            "Teil des Mohéli-Meeresnationalparks",
            "Brutgebiet für Meeresschildkröten",
            "Buckelwale ziehen zwischen Juli und Oktober vorbei",
            "Traditionelle Pirogen-Fischerei",
            "Kleine Gästehäuser für Ökotourismus",
        ],
    },
    "hoani-cities-v2": {
        "desc": "Hoani liegt an der Nordküste von Mohéli, etwa 4 Kilometer nordwestlich von Fomboni, und zählt rund 3.000 Einwohner. Die Gemeinde ist umgeben von Kokospalmenhainen und liegt an einer Bucht, die für Pirogenfischerei genutzt wird. Im Hinterland erstreckt sich der Mohéli-Nationalpark, der seit 2010 die einzigartige Inselflora schützt, darunter den endemischen Mohéli-Mausmaki, der nur hier vorkommt. Im K6-Sachkundeunterricht steht Hoani für den Zusammenhang zwischen Inselgemeinde und Naturschutz. Die Bewohner arbeiten teils als Parkführer und Fischer und teils als Kokosbauern.",
        "facts": [
            "Etwa 3.000 Einwohner nordwestlich von Fomboni",
            "Angrenzend an den Mohéli-Nationalpark",
            "Endemischer Mohéli-Mausmaki im Hinterland",
            "Nationalpark seit 2010 offiziell anerkannt",
            "Bucht für Pirogen-Fischerei genutzt",
            "Kokospalmen prägen das Landschaftsbild",
            "Parkführer als zusätzliche Einkommensquelle",
        ],
    },
    "djoyezi-cities-v2": {
        "desc": "Djoyezi liegt an der Nordküste Mohélis östlich von Fomboni und ist eine kleine Fischergemeinde mit etwa 2.200 Einwohnern. Die Bucht von Djoyezi ist bekannt für ihren ruhigen, geschützten Ankerplatz, der von lokalen Frachtbooten genutzt wird. Im K5-Sachkundeunterricht zeigt Djoyezi, wie kleine Inselgemeinden ohne große Infrastruktur über das Meer mit der Außenwelt verbunden sind. Die Bewohner ergänzen die Fischerei durch den Anbau von Süßkartoffeln und Bananen auf den steilen Hängen hinter dem Dorf. Eine kleine Moschee aus Korallenstein bildet das Zentrum des Ortes.",
        "facts": [
            "Etwa 2.200 Einwohner an Mohélis Nordküste",
            "Geschützter Naturhafen für lokale Frachtboote",
            "Anbau von Süßkartoffeln und Bananen",
            "Moschee aus Korallenstein als Ortszentrum",
            "Östlich der Inselhauptstadt Fomboni",
            "Pirogen-Fischerei als Haupteinkommen",
            "K5-Beispiel für Inselgemeinden ohne Straßenanbindung",
        ],
    },
    "kangani-cities-v2": {
        "desc": "Kangani liegt an der Südwestküste Mohélis am Eingang zum Mohéli-Meeresnationalpark und zählt etwa 1.800 Einwohner. Die vorgelagerten Inseln Nioumachoua sind ein zentrales Brutgebiet für Meeresschildkröten und Riffvögel und können von Kangani aus mit Pirogen erreicht werden. Im K6-Sachkundeunterricht steht Kangani als Beispiel für Gemeinden, die direkt in einen Naturschutzpark eingebunden sind. Die Fischer von Kangani arbeiten mit Park-Rangern zusammen, um illegale Fischerei zu verhindern. Die kleine Gemeinde lebt von einer Kombination aus traditioneller Subsistenzwirtschaft und Eintrittsgebühren des Nationalparks.",
        "facts": [
            "Etwa 1.800 Einwohner an Mohélis Südwestküste",
            "Eingang zum Mohéli-Meeresnationalpark",
            "Vorgelagerte Nioumachoua-Inseln in Sichtweite",
            "Brutgebiet für Grüne Meeresschildkröten",
            "Zusammenarbeit Fischer und Park-Ranger",
            "Park-Eintrittsgebühren als Einkommensquelle",
            "Traditionelle Subsistenzwirtschaft als Basis",
        ],
    },
    "moimbassa-cities-v2": {
        "desc": "Moimbassa liegt an der Südküste Mohélis und ist eine kleine Gemeinde mit etwa 1.500 Einwohnern, die zum erweiterten Schutzgebiet des Mohéli-Meeresparks gehört. Die Strände von Moimbassa sind bekannte Eiablageplätze für Grüne Meeresschildkröten, die zwischen Oktober und März in großer Zahl an Land kommen. Im K5-Sachkundeunterricht zeigt Moimbassa, wie Schutzgebiete und Dorfgemeinschaften gemeinsam Tierschutz organisieren. Lokale Wächter patrouillieren die Strände nachts, um Eierdiebstahl zu verhindern. Die Bewohner leben überwiegend von Fischerei und kleinflächigem Anbau von Maniok und Reis.",
        "facts": [
            "Etwa 1.500 Einwohner an Mohélis Südküste",
            "Eiablagestrände für Grüne Meeresschildkröten",
            "Hauptbrutsaison Oktober bis März",
            "Lokale Strand-Wächter gegen Eierdiebstahl",
            "Erweiterungszone des Mohéli-Meeresparks",
            "Maniok- und kleinflächiger Reisanbau",
            "K5-Beispiel für Gemeinde-basierten Tierschutz",
        ],
    },
    "mbatse-cities-v2": {
        "desc": "Mbatsé liegt im Süden Mohélis in einer hügeligen Region etwa 6 Kilometer von der Küste entfernt und zählt rund 1.200 Einwohner. Die Gemeinde liegt am Rand des bewaldeten Inselinneren, wo der endemische Mohéli-Flughund in den Mangobäumen lebt. Im K6-Sachkundeunterricht dient Mbatsé als Beispiel für ein traditionelles Bergdorf der Komoren mit weitgehend autarker Selbstversorgung. Die Bewohner bauen Reis, Maniok und Bananen an und halten Zebu-Rinder. Lokale Frauen flechten Matten aus Pandanus-Blättern, die auf den Märkten in Fomboni verkauft werden.",
        "facts": [
            "Etwa 1.200 Einwohner im Inneren Mohélis",
            "Rund 6 Kilometer landeinwärts gelegen",
            "Endemischer Mohéli-Flughund im Wald",
            "Reis-, Maniok- und Bananenanbau",
            "Zebu-Haltung als Eiweißquelle",
            "Pandanus-Mattenflechterei als Frauenhandwerk",
            "Verkauf der Matten auf dem Markt in Fomboni",
        ],
    },
    "itsamia-cities-v2": {
        "desc": "Itsamia liegt an der Ostküste Mohélis und gilt als der wichtigste Schildkrötenstrand der gesamten Komoren mit etwa 5.000 nistenden Grünen Meeresschildkröten pro Jahr. Die Gemeinde mit rund 1.000 Einwohnern hat seit den 1990er Jahren ein eigenes gemeinschaftliches Schutzprogramm aufgebaut, das mit dem Nationalpark kooperiert. Im K7-Sachkundeunterricht steht Itsamia als Modellbeispiel für gemeindebasierten Naturschutz auf einer kleinen tropischen Insel. Wissenschaftler aus Frankreich und Madagaskar besuchen Itsamia regelmäßig zu Markierungsstudien. Ein kleines Dorf-Museum zeigt Schildkrötenpanzer, Eier und die Geschichte des Schutzprojekts.",
        "facts": [
            "Etwa 1.000 Einwohner an Mohélis Ostküste",
            "Rund 5.000 nistende Grüne Schildkröten pro Jahr",
            "Gemeinschaftliches Schutzprogramm seit 1991",
            "Wichtigster Schildkrötenstrand der Komoren",
            "Kooperation mit französischen Forschern",
            "Kleines Dorf-Museum zum Schutzprojekt",
            "K7-Modell für gemeindebasierten Naturschutz",
        ],
    },
    "ouallah-cities-v2": {
        "desc": "Ouallah besteht aus den Schwesterdörfern Ouallah-1 und Ouallah-2 an der Südwestküste Mohélis mit zusammen rund 1.700 Einwohnern. Die geschützte Bucht von Ouallah gehört zum Kerngebiet des Mohéli-Meeresparks und ist Heimat einer großen Population von Buckelwalen, die zwischen Juli und Oktober hier ihre Jungen zur Welt bringen. Im K6-Sachkundeunterricht zeigt Ouallah, wie Wal-Tourismus und Fischerei in einem Schutzgebiet koexistieren können. Lokale Fischer haben ihre Boote zu kleinen Walbeobachtungs-Touren umgewidmet. Die Bucht ist außerdem als Ankergrund für Yacht-Besucher beliebt.",
        "facts": [
            "Doppeldorf mit etwa 1.700 Einwohnern",
            "Buckelwale zwischen Juli und Oktober",
            "Kerngebiet des Mohéli-Meeresparks",
            "Wal-Beobachtung als Einkommensquelle",
            "Geschützte Bucht für Yachtanker",
            "Ehemalige Fischer als Park-Guides",
            "K6-Beispiel für Tourismus-Naturschutz-Symbiose",
        ],
    },
    "bandamadji-cities-v2": {
        "desc": "Bandamadji liegt an der Nordküste von Grande Comore und zählt etwa 4.000 Einwohner. Die Gemeinde lebt von Fischerei und kleinem Tourismus dank der nahe gelegenen Strände von Mitsamiouli. Im Hinterland erstreckt sich der Lavafluss aus dem letzten großen Karthala-Ausbruch von 1977, der bis fast an die Küste reichte. Im K7-Geografieunterricht zeigt Bandamadji, wie eine Gemeinde mit aktiven Vulkanrisiken lebt. Die Bewohner haben Evakuierungsrouten geübt und kennen die historischen Eruptionsdaten. Die Stadt verfügt über eine kleine Moschee und einen Wochenmarkt, der von der gesamten Nordküste besucht wird.",
        "facts": [
            "Etwa 4.000 Einwohner an der Nordküste",
            "Lavafluss von 1977 bis nahe an die Küste",
            "Evakuierungsrouten bei Karthala-Eruptionen geübt",
            "Wochenmarkt für die Nordküste",
            "Fischerei als Haupterwerbszweig",
            "Nahe an den Stränden von Mitsamiouli",
            "K7-Beispiel für Leben mit Vulkanrisiko",
        ],
    },
    "chembenyouba-cities-v2": {
        "desc": "Chembenyouba liegt im Norden von Grande Comore zwischen Mitsamiouli und Mbéni und zählt etwa 3.500 Einwohner. Die Gemeinde liegt auf etwa 100 Meter Höhe und blickt auf die Lavafelder des Karthala, die hier bis ins Meer reichen. Chembenyouba ist bekannt für Kokosanbau und Fischerei, und einige Bewohner arbeiten in den nahegelegenen Tourismusbetrieben von Mitsamiouli. Im K6-Sachkundeunterricht steht Chembenyouba als Beispiel für eine Küstengemeinde, die Landwirtschaft, Fischerei und Tourismus kombiniert. Die historische Moschee aus Korallenkalk stammt aus dem 18. Jahrhundert.",
        "facts": [
            "Etwa 3.500 Einwohner zwischen Mitsamiouli und Mbéni",
            "Höhenlage rund 100 Meter",
            "Historische Moschee aus dem 18. Jahrhundert",
            "Lavafelder reichen hier bis ins Meer",
            "Kokosanbau und Fischerei als Wirtschaftsbasis",
            "Pendler-Beschäftigung im Tourismus",
            "Korallenkalk-Architektur als Bautradition",
        ],
    },
    # ====== Case B: no descriptionAdvanced block at all ======
    "dembeni-cities-v2": {
        "desc": "Dembéni liegt im Südosten von Grande Comore am Fuß des Karthala-Vulkans, etwa 25 Kilometer südlich von Moroni, und zählt rund 7.500 Einwohner. Die fruchtbaren vulkanischen Böden eignen sich hervorragend für Vanille und Nelken, und die Region gehört zu den wichtigsten Gewürzproduzenten des Archipels. Im K7-Geografieunterricht steht Dembéni für tropische Plantagenwirtschaft auf vulkanischem Boden. Die Stadt verfügt über eine weiterführende Schule und eine Gesundheitsstation. Wanderwege führen von Dembéni zum Karthala-Krater, einer der weltweit größten aktiven Calderen mit einem Durchmesser von rund 4 Kilometern.",
        "facts": [
            "Etwa 7.500 Einwohner im Südosten Grande Comores",
            "Rund 25 Kilometer südlich von Moroni",
            "Wanderausgangspunkt zum Karthala-Krater",
            "Karthala-Caldera misst etwa 4 Kilometer Durchmesser",
            "Vanille- und Nelkenanbau auf vulkanischem Boden",
            "Weiterführende Schule und Gesundheitsstation",
            "K7-Lehrbeispiel für Plantagen auf Vulkanboden",
        ],
    },
    "dimani-cities-v2": {
        "desc": "Dimani liegt im Nordosten von Grande Comore und zählt etwa 4.500 Einwohner. Die Gemeinde liegt auf rund 200 Meter Höhe und ist umgeben von dichten Bananenplantagen und Maniokfeldern. Dimani gehört zum Verwaltungsbezirk Hamahamet-Mboinkou und wird von einem Bürgermeister geleitet, der jährlich den Grand-Mariage-Festkalender für die Region koordiniert. Im K8-Sozialkundeunterricht zeigt Dimani, wie traditionelle Hochzeitsökonomie das soziale Leben strukturiert. Eine Hochzeit kann mehrere tausend Euro kosten und wird oft jahrelang vorbereitet. Die Stadt verfügt über drei Moscheen und einen lebhaften Wochenmarkt.",
        "facts": [
            "Etwa 4.500 Einwohner im Nordosten Grande Comores",
            "Höhenlage rund 200 Meter",
            "Drei Moscheen im Stadtgebiet",
            "Verwaltungsbezirk Hamahamet-Mboinkou",
            "Grand-Mariage als zentrales soziales Ereignis",
            "Bananen- und Maniokanbau dominieren",
            "K8-Beispiel für Hochzeitsökonomie",
        ],
    },
    "djoumoichongo-cities-v2": {
        "desc": "Djoumoichongo liegt im Inneren von Grande Comore am Westhang des Karthala-Vulkans auf etwa 600 Meter Höhe und zählt rund 2.800 Einwohner. Die Gemeinde gilt als wichtige Etappe für Karthala-Wanderer und beherbergt einige Bergführer, die mehrtägige Touren zum Krater anbieten. Im K7-Geografieunterricht zeigt Djoumoichongo, wie Höhenlage und Klima auf einer tropischen Vulkaninsel zusammenspielen. Auf 600 Metern ist es deutlich kühler als an der Küste, und die Vegetation wechselt von Kokospalmen zu Bergregenwald. Lokale Bauern bauen Kaffee in kleinen Mengen für den Eigenbedarf an.",
        "facts": [
            "Etwa 2.800 Einwohner am Westhang des Karthala",
            "Höhenlage rund 600 Meter",
            "Etappe für Karthala-Bergwanderer",
            "Bergregenwald statt Küstenpalmen",
            "Kleinflächiger Kaffeeanbau",
            "Mehrtägige Bergtouren als Einkommen",
            "K7-Beispiel für Höhenstufen auf Vulkaninsel",
        ],
    },
    "dzahani-cities-v2": {
        "desc": "Dzahani liegt im Norden von Grande Comore in der Region Hamahame und zählt etwa 5.000 Einwohner. Die Gemeinde wird oft als Dzahani II bezeichnet, um sie von einem zweiten Dorf gleichen Namens im Süden zu unterscheiden. Sie ist bekannt für Maniok- und Bananenanbau sowie für eine traditionelle Töpferei mit roter Vulkanerde. Im K6-Sachkundeunterricht steht Dzahani für die Verbindung zwischen vulkanischem Material und lokalem Handwerk. Die Töpfe werden auf dem Markt in Mbéni verkauft. Die Stadt liegt etwa 8 Kilometer landeinwärts auf rund 300 Meter Höhe.",
        "facts": [
            "Etwa 5.000 Einwohner in der Region Hamahame",
            "Höhenlage rund 300 Meter",
            "Töpferei aus roter Vulkanerde",
            "Verkauf der Töpfe auf dem Markt in Mbéni",
            "Maniok- und Bananenanbau",
            "Etwa 8 Kilometer landeinwärts",
            "K6-Beispiel für vulkanisches Handwerk",
        ],
    },
    "hambou-cities-v2": {
        "desc": "Hambou ist ein Verwaltungsbezirk im Südwesten von Grande Comore mit Hauptort Mitsoudjé und zählt insgesamt etwa 36.000 Einwohner. Die Region erstreckt sich von der Küste bis zu den unteren Hängen des Karthala und umfasst mehrere Dörfer, die durch Kokospalmenhaine miteinander verbunden sind. Im K7-Verwaltungskundeunterricht zeigt Hambou, wie die 17 Verwaltungsbezirke der Komoren die Selbstverwaltung organisieren. Die Bezirksverwaltung kümmert sich um Schulen, Wege und Wasserversorgung. Hambou ist bekannt für Kokosöl-Produktion in kleinen Familienbetrieben und für lokale Fischerei mit traditionellen Pirogen.",
        "facts": [
            "Verwaltungsbezirk mit etwa 36.000 Einwohnern",
            "Hauptort ist Mitsoudjé",
            "Im Südwesten Grande Comores",
            "Kokosöl-Produktion in Familienbetrieben",
            "17 Verwaltungsbezirke landesweit",
            "Pirogen-Fischerei als Tradition",
            "K7-Beispiel für komorische Selbstverwaltung",
        ],
    },
    "mvouni-cities-v2": {
        "desc": "Mvouni liegt am südöstlichen Stadtrand von Moroni und zählt rund 8.000 Einwohner. Die Gemeinde gilt als religiöses Zentrum von Grande Comore und beherbergt mehrere bedeutende Koranschulen, die seit dem 16. Jahrhundert dokumentiert sind. Im K8-Religionskundeunterricht zeigt Mvouni, wie islamische Bildungstradition auf den Komoren über Jahrhunderte weitergegeben wurde. Die Stadt liegt auf etwa 250 Meter Höhe am Hang des Karthala und verfügt über mehrere historische Moscheen. Lokale Bauern bauen Reis, Maniok und Bananen an. Mvouni ist über eine asphaltierte Straße direkt mit Moroni verbunden.",
        "facts": [
            "Etwa 8.000 Einwohner am Stadtrand Moronis",
            "Höhenlage rund 250 Meter am Karthala-Hang",
            "Religiöses Zentrum mit historischen Koranschulen",
            "Bildungstradition seit dem 16. Jahrhundert dokumentiert",
            "Mehrere historische Moscheen",
            "Asphaltstraße zur Hauptstadt Moroni",
            "K8-Beispiel für islamische Bildungstradition",
        ],
    },
    "selea-cities-v2": {
        "desc": "Selea liegt etwa 5 Kilometer südlich von Moroni an der Westküste von Grande Comore und zählt rund 3.500 Einwohner. Die Gemeinde ist bekannt für ihren historischen Friedhof, auf dem mehrere Sultane des 18. und 19. Jahrhunderts beigesetzt wurden. Im K8-Geschichtsunterricht steht Selea für die Sultanats-Begräbnistradition der Komoren. Die kleinen, aus Korallenkalk gemeißelten Grabsteine tragen oft kunstvolle arabische Inschriften. Selea wird heute von Hauptstadtbewohnern als Ausflugsort genutzt, da der Strand gut zugänglich und ruhiger als im Stadtzentrum von Moroni ist. Die Bewohner leben von Fischerei und Kokosanbau.",
        "facts": [
            "Etwa 3.500 Einwohner südlich von Moroni",
            "Historischer Sultans-Friedhof aus dem 18. Jahrhundert",
            "Korallenkalk-Grabsteine mit arabischen Inschriften",
            "Rund 5 Kilometer südlich der Hauptstadt",
            "Beliebter Strand für Hauptstadtbewohner",
            "Fischerei und Kokosanbau als Erwerb",
            "K8-Beispiel für Sultanats-Begräbnistradition",
        ],
    },
    "singani-cities-v2": {
        "desc": "Singani liegt an der Westküste von Grande Comore südlich von Moroni und zählt etwa 6.500 Einwohner. Die Gemeinde liegt direkt am Meer und ist bekannt für ihren historischen Hafen, der seit dem 17. Jahrhundert als Anlegestelle für Dhau-Schiffe aus Sansibar und dem Jemen diente. Im K7-Geschichtsunterricht zeigt Singani die historische Verflechtung der Komoren mit dem Indischen-Ozean-Handel. Heute lebt die Gemeinde von Fischerei und Tourismus, da der Strand zu den besten der Westküste zählt. Die alte Festung aus Korallenkalk steht noch teilweise und ist ein lokales Wahrzeichen.",
        "facts": [
            "Etwa 6.500 Einwohner an der Westküste",
            "Historischer Dhau-Hafen seit dem 17. Jahrhundert",
            "Festung aus Korallenkalk teilweise erhalten",
            "Handelsverbindungen zu Sansibar und Jemen",
            "Strand zählt zu den besten der Westküste",
            "Fischerei und Tourismus als Wirtschaftsbasis",
            "K7-Beispiel für Indischen-Ozean-Handel",
        ],
    },
    "vouvouni-cities-v2": {
        "desc": "Vouvouni liegt etwa 4 Kilometer südöstlich von Moroni am Hang des Karthala und zählt rund 5.000 Einwohner. Die Gemeinde gilt als Vorort der Hauptstadt mit deutlichem Wachstum durch Zuzug. Im K6-Sachkundeunterricht zeigt Vouvouni, wie Hauptstadtnähe und Höhenlage zusammenspielen, denn auf etwa 200 Meter Höhe ist das Klima merklich kühler als im Zentrum Moronis. Die Bewohner pendeln zur Arbeit in die Hauptstadt oder bauen Gemüse für die städtischen Märkte an. Die alte Moschee von Vouvouni stammt aus dem 19. Jahrhundert und ist noch in Nutzung.",
        "facts": [
            "Etwa 5.000 Einwohner als Moroni-Vorort",
            "Höhenlage rund 200 Meter",
            "Etwa 4 Kilometer südöstlich der Hauptstadt",
            "Alte Moschee aus dem 19. Jahrhundert",
            "Pendler-Gemeinde mit Stadtanbindung",
            "Gemüseanbau für die Stadtmärkte",
            "K6-Beispiel für Vorortklima auf Vulkaninsel",
        ],
    },
    "ongojou-cities-v2": {
        "desc": "Ongojou liegt im Inneren der Insel Anjouan auf etwa 350 Meter Höhe und zählt rund 3.200 Einwohner. Die Gemeinde liegt in einem Hochtal mit fruchtbaren Böden und ist bekannt für Bananen-, Reis- und Vanilleanbau. Im K7-Geografieunterricht steht Ongojou für die typische Hochtal-Landwirtschaft Anjouans. Die steilen Hänge der Insel zwingen die Bauern zu Terrassierung, was hier seit Generationen praktiziert wird. Lokale Frauen flechten Pandanus-Hüte, die auf den Märkten in Mutsamudu verkauft werden. Eine Schule mit etwa 300 Schülern versorgt die umliegenden Dörfer.",
        "facts": [
            "Etwa 3.200 Einwohner im Hochtal Anjouans",
            "Höhenlage rund 350 Meter",
            "Bananen-, Reis- und Vanilleanbau",
            "Terrassenfeldbau auf steilen Hängen",
            "Pandanus-Hüte als Handwerkstradition",
            "Schule mit rund 300 Schülern",
            "K7-Beispiel für Hochtal-Landwirtschaft",
        ],
    },
    "pomoni-cities-v2": {
        "desc": "Pomoni liegt an der Südwestküste von Anjouan und zählt etwa 4.000 Einwohner. Die Gemeinde war im 19. Jahrhundert Sitz einer großen Zuckerrohrplantage, die von französischen Kolonialherren betrieben wurde. Reste der alten Zuckerfabrik sind noch sichtbar und gelten als Industriedenkmal. Im K8-Geschichtsunterricht zeigt Pomoni, wie französische Kolonialwirtschaft die Komoren prägte. Heute leben die Bewohner von Fischerei und kleinflächigem Anbau. Die Bucht von Pomoni ist tief und windgeschützt, was sie zu einem beliebten Ankerplatz für vorbeifahrende Yachten macht. Korallenriffe vor der Küste eignen sich zum Tauchen.",
        "facts": [
            "Etwa 4.000 Einwohner an Anjouans Südwestküste",
            "Ehemalige Zuckerrohrplantage des 19. Jahrhunderts",
            "Reste der Zuckerfabrik als Industriedenkmal",
            "Tiefe, windgeschützte Bucht für Yachten",
            "Korallenriffe als Tauchrevier",
            "Fischerei und kleinflächiger Anbau",
            "K8-Beispiel für französische Kolonialwirtschaft",
        ],
    },
    "barakani-cities-v2": {
        "desc": "Barakani liegt zwischen Mutsamudu und Ouani auf Anjouan und zählt etwa 3.800 Einwohner. Die Gemeinde liegt direkt an der Hauptverkehrsstraße der Insel und ist faktisch zu einem Vorort der Hauptstadt zusammengewachsen. Im K6-Sachkundeunterricht zeigt Barakani, wie kleine Gemeinden durch Verkehrsanbindung an größere Städte heranwachsen. Die Bewohner arbeiten überwiegend in Mutsamudu im Hafen, in der Verwaltung oder im Handel. Eine kleine Industriezone mit Werkstätten und Lagerhallen ist in den letzten Jahren entstanden. Die alte Moschee aus dem 18. Jahrhundert ist das historische Zentrum der Gemeinde.",
        "facts": [
            "Etwa 3.800 Einwohner zwischen Mutsamudu und Ouani",
            "Pendler-Vorort der Inselhauptstadt",
            "Alte Moschee aus dem 18. Jahrhundert",
            "Kleine Industriezone mit Werkstätten",
            "An der Hauptverkehrsstraße Anjouans gelegen",
            "Beschäftigung im Hafen Mutsamudu",
            "K6-Beispiel für Vorort-Wachstum",
        ],
    },
    "chindini-cities-v2": {
        "desc": "Chindini liegt an der Südspitze von Grande Comore und gilt als der südlichste Hafen der Insel mit rund 3.000 Einwohnern. Von Chindini aus verkehren regelmäßige Boote nach Mohéli, etwa 40 Kilometer südwestlich. Im K7-Geografieunterricht steht Chindini als Beispiel für die Inter-Insel-Verbindungen der Komoren, die fast ausschließlich per Boot funktionieren, da der Flugverkehr teuer und unzuverlässig ist. Die Bewohner leben von Fischerei und vom Kleinhandel mit Mohéli-Reisenden. Der Strand von Chindini ist unter Einheimischen bekannt für seinen schwarzen Vulkansand. Die kleine Moschee am Hafen stammt aus dem späten 19. Jahrhundert.",
        "facts": [
            "Etwa 3.000 Einwohner an der Südspitze Grande Comores",
            "Südlichster Hafen der Insel",
            "Regelmäßige Boote nach Mohéli",
            "Etwa 40 Kilometer Seeweg nach Mohéli",
            "Schwarzer Vulkansand am Strand",
            "Kleine Moschee aus dem späten 19. Jahrhundert",
            "K7-Beispiel für Inter-Insel-Verbindungen",
        ],
    },
    "itsandzeni-cities-v2": {
        "desc": "Itsandzéni liegt im Norden von Grande Comore und zählt etwa 3.500 Einwohner. Die Gemeinde liegt auf rund 150 Meter Höhe und ist umgeben von Lavafeldern aus historischen Karthala-Eruptionen. Itsandzéni gehört zur Region Mitsamiouli-Mboudé und ist über eine asphaltierte Straße mit der Hauptstadt Moroni verbunden. Im K6-Sachkundeunterricht zeigt Itsandzéni, wie Vulkanlandschaft und Siedlung interagieren. Die Bewohner haben gelernt, in den Lavaspalten Bananen und Maniok zu pflanzen, da sich dort Erde sammelt. Die Stadt verfügt über eine Schule, eine Moschee und einen kleinen Markt.",
        "facts": [
            "Etwa 3.500 Einwohner im Norden Grande Comores",
            "Höhenlage rund 150 Meter",
            "Umgeben von historischen Lavafeldern",
            "Anbau in Lavaspalten für Bananen und Maniok",
            "Region Mitsamiouli-Mboudé",
            "Asphaltstraße bis Moroni",
            "K6-Beispiel für Vulkan-Siedlung",
        ],
    },
    "madiedjou-cities-v2": {
        "desc": "Madiedjou liegt im Norden von Grande Comore und zählt etwa 2.800 Einwohner. Die kleine Bergsiedlung auf rund 250 Meter Höhe ist umgeben von Bananen- und Maniokfeldern und gilt als typisches Beispiel für eine landwirtschaftlich geprägte Inselgemeinde. Im K5-Sachkundeunterricht steht Madiedjou für das einfache Inselleben mit Selbstversorgung. Die Bewohner produzieren überschüssiges Gemüse für den Markt in Koimbani, etwa 6 Kilometer südlich. Die kleine Moschee aus Korallenkalk ist das Zentrum des Dorflebens. Eine Grundschule mit etwa 200 Schülern versorgt auch die umliegenden Weiler.",
        "facts": [
            "Etwa 2.800 Einwohner im Norden Grande Comores",
            "Höhenlage rund 250 Meter",
            "Bananen- und Maniokfelder als Lebensgrundlage",
            "Etwa 6 Kilometer nördlich von Koimbani",
            "Kleine Moschee aus Korallenkalk",
            "Grundschule mit rund 200 Schülern",
            "K5-Beispiel für Selbstversorgung",
        ],
    },
    "moidzaza-cities-v2": {
        "desc": "Moidzaza liegt im Osten von Grande Comore am Hang des Karthala und zählt etwa 2.500 Einwohner. Die Gemeinde liegt auf rund 400 Meter Höhe und gilt als Eingangstor zu den oberen Lavafeldern des Vulkans. Im K7-Geografieunterricht zeigt Moidzaza, wie Höhe und Vulkanaktivität die Vegetation beeinflussen. Auf 400 Metern wachsen noch Bananen, doch Kokospalmen werden seltener und Bergregenwald rückt näher. Lokale Bergführer bieten Tageswanderungen zu den älteren Lavaströmen an. Die Bewohner bauen Maniok, Reis und Bananen an und halten kleine Zebu-Herden auf den steileren Hängen.",
        "facts": [
            "Etwa 2.500 Einwohner am Karthala-Osthang",
            "Höhenlage rund 400 Meter",
            "Eingangstor zu den oberen Lavafeldern",
            "Tageswanderungen zu älteren Lavaströmen",
            "Vegetationswechsel zwischen Banane und Bergregenwald",
            "Kleine Zebu-Herden auf den Hängen",
            "K7-Beispiel für Höhenstufen am Vulkan",
        ],
    },
    "pidjani-cities-v2": {
        "desc": "Pidjani liegt im Südosten von Grande Comore und zählt etwa 3.000 Einwohner. Die Gemeinde liegt auf rund 300 Meter Höhe in einer Region, die für ihre Vanille- und Nelkenplantagen bekannt ist. Im K8-Wirtschaftskundeunterricht zeigt Pidjani, wie kleine Familienbetriebe Gewürze für den Export produzieren. Die Vanille wird von Hand bestäubt, da die natürliche Bestäuberbiene auf den Komoren fehlt. Diese Handarbeit erfordert hohe Geschicklichkeit und ist Hauptgrund für den hohen Vanillepreis. Pidjani verfügt über eine kleine Vanille-Verarbeitungsstation, in der die Schoten getrocknet und sortiert werden.",
        "facts": [
            "Etwa 3.000 Einwohner im Südosten Grande Comores",
            "Höhenlage rund 300 Meter",
            "Vanille- und Nelkenplantagen",
            "Handbestäubung der Vanille seit dem 19. Jahrhundert",
            "Kleine Vanille-Verarbeitungsstation",
            "Familienbetriebe als Standard",
            "K8-Beispiel für Gewürz-Exportwirtschaft",
        ],
    },
    "tsidje-cities-v2": {
        "desc": "Tsidjé liegt am Stadtrand von Moroni in nordöstlicher Richtung und zählt etwa 6.000 Einwohner. Die Gemeinde gehört zum erweiterten Großraum der Hauptstadt und gilt als Wohnort vieler Beamter und Lehrer, die in Moroni arbeiten. Im K6-Sachkundeunterricht zeigt Tsidjé die Suburbanisierung kleiner Inselhauptstädte. Die Stadt ist über eine asphaltierte Straße in etwa 15 Minuten mit dem Zentrum Moronis verbunden. Tsidjé verfügt über eine Mittelschule, mehrere Moscheen und einen täglichen Markt. Die historische Moschee von Tsidjé stammt aus dem 18. Jahrhundert und ist mit Korallensteinschnitzereien verziert.",
        "facts": [
            "Etwa 6.000 Einwohner am Stadtrand Moronis",
            "Wohnort vieler Beamter und Lehrer",
            "Historische Moschee aus dem 18. Jahrhundert",
            "Korallenstein-Schnitzereien an der Moschee",
            "Etwa 15 Minuten Fahrt zum Stadtzentrum",
            "Mittelschule und täglicher Markt",
            "K6-Beispiel für Inselhauptstadt-Suburbanisierung",
        ],
    },
    "bazmini-cities-v2": {
        "desc": "Bazmini liegt im Norden von Anjouan in der Nähe von Ouani und Mutsamudu und zählt etwa 2.800 Einwohner. Die Gemeinde liegt auf rund 100 Meter Höhe und ist über eine asphaltierte Straße mit dem Inselflughafen verbunden, der nur wenige Kilometer entfernt liegt. Im K6-Sachkundeunterricht zeigt Bazmini, wie Flughafennähe das Wachstum kleiner Gemeinden auf einer Insel beeinflusst. Die Bewohner arbeiten teils im Flughafenbetrieb und teils in der Landwirtschaft. Die Region ist für Ylang-Ylang-Anbau bekannt, und einige Felder reichen bis an den Ortsrand. Eine kleine Moschee bildet das Zentrum.",
        "facts": [
            "Etwa 2.800 Einwohner im Norden Anjouans",
            "Höhenlage rund 100 Meter",
            "Wenige Kilometer vom Inselflughafen entfernt",
            "Beschäftigung im Flughafenbetrieb",
            "Ylang-Ylang-Felder am Ortsrand",
            "Kleine Moschee als Ortszentrum",
            "K6-Beispiel für Flughafen-Effekt auf Inselgemeinden",
        ],
    },
    "bambao-cities-v2": {
        "desc": "Bambao liegt im Norden von Anjouan und ist berühmt für die historische Bambao-Plantage, die seit 1907 Ylang-Ylang verarbeitet und als älteste Parfümfabrik des Indischen Ozeans gilt. Die Gemeinde zählt etwa 4.000 Einwohner und liegt direkt an der Küstenstraße zwischen Mutsamudu und Mirontsi. Im K8-Industriekundeunterricht steht Bambao für die koloniale Plantagenwirtschaft Anjouans. Die alten Destillationskessel der Plantage sind teils noch in Betrieb. Bambao versorgt die französische Parfümindustrie in Grasse seit über 110 Jahren mit Essenzen. Die Plantage beschäftigt heute etwa 150 Personen direkt und Hunderte Familien als Zulieferer.",
        "facts": [
            "Etwa 4.000 Einwohner im Norden Anjouans",
            "Bambao-Plantage seit 1907 in Betrieb",
            "Älteste Parfümfabrik des Indischen Ozeans",
            "Belieferung von Grasse seit über 110 Jahren",
            "Etwa 150 direkte Plantagenarbeiter",
            "Alte Destillationskessel teils noch genutzt",
            "K8-Beispiel für koloniale Plantagenwirtschaft",
        ],
    },
    "itsoundzou-cities-v2": {
        "desc": "Itsoundzou liegt im Westen von Grande Comore südlich von Moroni und zählt etwa 4.500 Einwohner. Die Gemeinde liegt direkt am Meer und verfügt über einen kleinen Hafen für lokale Fischerboote. Im K5-Sachkundeunterricht zeigt Itsoundzou das traditionelle Fischerleben der komorischen Westküste. Die Pirogen werden noch immer aus einem einzigen Mangobaumstamm gefertigt und mit Auslegern aus Bambus stabilisiert. Das Hauptfanggebiet liegt etwa 5 Kilometer vor der Küste, wo Thunfische und Makrelen gefangen werden. Die Stadt verfügt über eine Grundschule, eine Moschee aus dem 19. Jahrhundert und einen Wochenmarkt.",
        "facts": [
            "Etwa 4.500 Einwohner an der Westküste Grande Comores",
            "Kleiner Fischerhafen mit lokalen Pirogen",
            "Pirogen aus Mangoholz mit Bambusausleger",
            "Hauptfanggebiet 5 Kilometer vor der Küste",
            "Thunfisch- und Makrelenfang",
            "Moschee aus dem 19. Jahrhundert",
            "K5-Beispiel für traditionelle Fischerei",
        ],
    },
}


def fmt_facts_de(facts):
    items = ", ".join('"' + f.replace('"', '\\"') + '"' for f in facts)
    return "[" + items + "]"


def fmt_desc_de(desc):
    return '"' + desc.replace('"', '\\"') + '"'


def patch_case_a(text, pid, desc, facts):
    """descriptionAdvanced exists, lacks de. Insert de: as first key in both blocks."""
    # Find the POI block bounds.
    id_re = re.compile(r'id:\s*"' + re.escape(pid) + r'"')
    m = id_re.search(text)
    if not m:
        raise ValueError(f"id not found: {pid}")
    # Block ranges: from this id to the next "    id:" or end of array.
    next_id = re.search(r'\n  \{\s*\n    id:\s*"', text[m.end():])
    block_end = m.end() + next_id.start() if next_id else len(text)
    block = text[m.start():block_end]

    # Inject de in descriptionAdvanced
    da_re = re.compile(r"(descriptionAdvanced:\s*\{\s*)(\n)")
    new_block, n1 = da_re.subn(
        r'\1de: ' + fmt_desc_de(desc) + r',\2',
        block, count=1)
    if n1 == 0:
        raise ValueError(f"descriptionAdvanced block not patched for {pid}")
    # Inject de in factsAdvanced
    fa_re = re.compile(r"(factsAdvanced:\s*\{\s*)")
    new_block, n2 = fa_re.subn(
        r'\1de: ' + fmt_facts_de(facts) + r', ',
        new_block, count=1)
    if n2 == 0:
        raise ValueError(f"factsAdvanced block not patched for {pid}")
    return text[:m.start()] + new_block + text[block_end:]


def patch_case_b(text, pid, desc, facts):
    """No descriptionAdvanced block. Insert after closing of description block.

    Pattern: locate the POI block, find the description: { ... }, end and inject
    descriptionAdvanced and factsAdvanced fields right after.
    """
    id_re = re.compile(r'id:\s*"' + re.escape(pid) + r'"')
    m = id_re.search(text)
    if not m:
        raise ValueError(f"id not found: {pid}")
    next_id = re.search(r'\n  \{\s*\n    id:\s*"', text[m.end():])
    block_end = m.end() + next_id.start() if next_id else len(text)
    block = text[m.start():block_end]

    # Find description: { ... } end (the closing "    },\n" right after en: line)
    # Robust: find "description: {" then walk to matching closing "}".
    desc_open = re.search(r"description:\s*\{", block)
    if not desc_open:
        raise ValueError(f"description block not found for {pid}")
    depth = 0
    i = desc_open.end() - 1  # at the "{"
    while i < len(block):
        ch = block[i]
        if ch == "{":
            depth += 1
        elif ch == "}":
            depth -= 1
            if depth == 0:
                close = i + 1
                break
        i += 1
    else:
        raise ValueError(f"description close not found for {pid}")
    # Insert AFTER the comma following the closing brace.
    after = close
    while after < len(block) and block[after] in " ,\n":
        after += 1
        if block[after - 1] == ",":
            break
    insert_pos_in_block = after
    # Build snippet: maintain 4-space indent like other fields
    snippet = (
        '\n    descriptionAdvanced: { de: ' + fmt_desc_de(desc) + ' },'
        + '\n    factsAdvanced: { de: ' + fmt_facts_de(facts) + ' },'
    )
    new_block = block[:insert_pos_in_block] + snippet + block[insert_pos_in_block:]
    return text[:m.start()] + new_block + text[block_end:]


# IDs that already have descriptionAdvanced (Case A) — same as scan output:
CASE_A_IDS = {
    "sima-cities-v2", "tsembehou-cities-v2", "itsandra-cities-v2",
    "ntsoudjini-cities-v2", "koimbani-cities-v2", "adda-doueni-cities-v2",
    "moya-cities-v2", "mremani-cities-v2", "mirontsi-cities-v2",
    "wanani-cities-v2", "hoani-cities-v2", "djoyezi-cities-v2",
    "kangani-cities-v2", "moimbassa-cities-v2", "mbatse-cities-v2",
    "itsamia-cities-v2", "ouallah-cities-v2", "bandamadji-cities-v2",
    "chembenyouba-cities-v2",
}


def main():
    text = PATH.read_text(encoding="utf-8")
    a_count = 0
    b_count = 0
    for pid, content in DATA.items():
        if pid in CASE_A_IDS:
            text = patch_case_a(text, pid, content["desc"], content["facts"])
            a_count += 1
        else:
            text = patch_case_b(text, pid, content["desc"], content["facts"])
            b_count += 1
    PATH.write_text(text, encoding="utf-8")
    print(f"Patched: case A {a_count}, case B {b_count}")


if __name__ == "__main__":
    main()
