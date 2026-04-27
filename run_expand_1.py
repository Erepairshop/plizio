from expand_poi import expand_poi

data = [
    ("mountain-zengo-extra", 
     "Der Zengő ist mit 682 Metern die höchste Erhebung des Mecsek-Gebirges in Südungarn und ein Symbol der regionalen Naturverbundenheit. Der Berg, dessen Name übersetzt 'der Resonante' oder 'der Dröhnende' bedeutet, ist sagenumwoben und spielt eine zentrale Rolle in der lokalen Folklore. Er ist fast vollständig von dichten Laubwäldern bedeckt, in denen die seltene Banater Pfingstrose blüht – eine botanische Kostbarkeit, die fast ausschließlich hier vorkommt. Auf dem Gipfel thront eine im Jahr 2020 eingeweihte, moderne Aussichtswarte, die Wanderern einen unvergleichlichen Blick über das Baranya-Hügelland bis hinüber nach Kroatien bietet. Geschichtlich ist der Berg auch für die 'Schlacht am Zengő' bekannt, bei der Umweltschützer erfolgreich den Bau einer NATO-Radarstation verhinderten.",
     [
        "Mit 682 Metern ist der Zengő der höchste Gipfel des Mecsek-Gebirges und der gesamten Region Süd-Transdanubien.",
        "Der Berg beherbergt etwa 90 Prozent der weltweiten Population der seltenen Banater Pfingstrose.",
        "Die neue Aussichtswarte wurde 2020 um einen bereits bestehenden geodätischen Turm herum errichtet.",
        "An klaren Tagen reicht die Sicht vom Gipfel bis zum Plattensee und zu den kroatischen Gebirgszügen.",
        "Jedes Jahr am Ostermontag findet eine traditionelle Volkswanderung zum Gipfel statt.",
        "Die Ruinen einer kleinen mittelalterlichen Burg sind noch heute im Gipfelbereich zu finden.",
        "Der Berg besteht geologisch vorwiegend aus Kalkstein und vulkanischen Gesteinen.",
        "Er war Schauplatz einer der erfolgreichsten zivilen Umweltprotestbewegungen Ungarns."
     ]),
    ("mountain-tubes-extra",
     "Der Tubes ist mit 611 Metern einer der beliebtesten Aussichtspunkte des zentralen Mecsek-Gebirges, direkt über der Stadt Pécs gelegen. Er ist bekannt für seine strategische Lage, die ihn schon früh zu einem wichtigen Punkt für die Überwachung der Region machte. Das Highlight des Berges ist die 2001 errichtete János-Aussichtswarte, die nach dem Naturforscher János Hunyadi benannt wurde. Die Vegetation am Tubes ist geprägt von Flaumeichenwäldern und Karstbüschen, die typisch für das submediterrane Klima der Baranya sind. Der Berg ist durch ein dichtes Netz von Wanderwegen erschlossen und dient den Bewohnern von Pécs als wichtiges Naherholungsgebiet für intensive Naturerlebnisse direkt vor der Haustür.",
     [
        "Der Tubes ist mit 611 Metern die zweithöchste Erhebung im zentralen Mecsek.",
        "Die János-Aussichtswarte bietet bei idealem Wetter eine Fernsicht bis zum kroatischen Papuk-Gebirge.",
        "Auf dem Gipfel befindet sich eine wichtige Sendeanlage für den regionalen Funkverkehr.",
        "Das Gebiet um den Tubes ist bekannt für sein besonderes Mikroklima.",
        "Der Berg war ursprünglich als Standort für eine NATO-Radarstation im Gespräch.",
        "Ein Wanderweg verbindet den Tubes direkt mit dem bekannten Fernsehturm auf dem Misina-Gipfel.",
        "Die Flora umfasst seltene Orchideenarten und die geschützte pannonische Nieswurz.",
        "Historisch gesehen war der Berg Teil der mittelalterlichen Verteidigungslinien rund um Pécs."
     ]),
    ("mountain-jakab-hegy-extra",
     "Der Jakab-hegy ist vielleicht der mystischste Ort im Mecsek-Gebirge. Geologisch unterscheidet er sich stark von seiner Umgebung, da er aus rotem Sandstein der Permzeit besteht, was ihm eine charakteristische rötliche Färbung verleiht. Der Berg war bereits in der Eisenzeit besiedelt, wovon die gigantischen Reste einer keltischen Wallburg zeugen, die zu den größten ihrer Art in Mitteleuropa zählt. Im Mittelalter wurde hier das einzige in Ungarn gegründete Mönchsorden, die Pauliner, sesshaft; ihre Klosterruinen sind heute ein beeindruckendes Ziel für Wanderer. Besondere Naturdenkmäler wie die 'Steineren Babas' (Zsongorkő), skurrile Felsformationen am Rande des Plateaus, bieten spektakuläre Ausblicke über das Dráva-Becken.",
     [
        "Die prähistorische Wallburg auf dem Gipfelplateau umfasst eine Fläche von über 50 Hektar.",
        "Das Paulinerkloster wurde 1225 gegründet und war das erste Zentrum dieses ungarischen Ordens.",
        "Geologisch besteht der Berg aus Jakabhegy-Sandstein, der über 250 Millionen Jahre alt ist.",
        "Die Felsformation Zsongorkő bietet den spektakulärsten Aussichtspunkt des gesamten Mecsek-Gebirges.",
        "Der Name 'Jakab-hegy' bezieht sich auf eine Kapelle, die einst dem Apostel Jakobus gewidmet war.",
        "Der Berg beherbergt seltene Flechtenarten, die auf sauren Sandsteinböden gedeihen.",
        "Archäologische Ausgrabungen haben im Bereich der Wallburg Gräberfelder aus der Eisenzeit freigelegt.",
        "Das Plateau des Berges ist ein beliebtes Ziel für Orientierungsläufer."
     ]),
    ("river-fekete-viz-extra",
     "Die Fekete-víz (Schwarzbach) ist ein charakteristischer Wasserlauf der Baranya-Ebene im Süden Ungarns. Sie sammelt das Wasser aus den südlichen Ausläufern des Mecsek und der Villány-Berge und führt es der Drau zu. Historisch war dieser Fluss entscheidend für die Entstehung der Ormánság-Landschaft, einer Region, die über Jahrhunderte durch ihre Sumpf- und Auenlandschaft isoliert war und dadurch eine einzigartige bäuerliche Architektur und Volkskunst bewahrte. Durch großflächige Regulierungen im 19. und 20. Jahrhundert verlor die Fekete-víz zwar einen Teil ihres wilden Charakters, blieb aber als ökologischer Korridor und Entwässerungssystem für die Landwirtschaft von vitaler Bedeutung.",
     [
        "Die Fekete-víz hat eine Gesamtlänge von etwa 45 Kilometern bis zu ihrer Mündung in die Drau.",
        "Der Name leitet sich von der dunklen Farbe des Wassers ab (hoher Huminstoffgehalt).",
        "Der Fluss war maßgeblich an der Gestaltung der Sümpfe der Ormánság-Region beteiligt.",
        "Innerhalb des Einzugsgebiets finden sich seltene Amphibienarten wie der Moorfrosch.",
        "Im Mittelalter dienten die unzugänglichen Uferzonen als natürliche Schutzbarriere.",
        "Heutige wasserbauliche Anlagen regulieren den Abfluss für die Landwirtschaft.",
        "Entlang des Flusses finden sich Reste von alten Erlenbruchwäldern unter Naturschutz.",
        "Für Angler ist der Fluss aufgrund seiner Bestände an Barben und Döbeln interessant."
     ]),
    ("lake-orfui-to-extra",
     "Das Seensystem von Orfű ist ein beeindruckendes Beispiel für gelungene Landschaftsgestaltung und touristische Erschließung im Mecsek-Gebirge. Ursprünglich in den 1960er Jahren durch die Aufstauung von Karstquellen geschaffen, besteht das System heute aus vier funktional getrennten Seen: dem Orfűi-tó, dem Pécsi-tó, dem Herman Ottó-tó und dem Kovácsszénájai-tó. Die idyllische Lage in einem Tal, umgeben von bewaldeten Hügeln, macht Orfű zu einem beliebten Erholungsort. Über die reine Erholung hinaus hat sich der Ort zu einem kulturellen Hotspot entwickelt, vor allem durch das jährlich stattfindende 'Fishing on Orfű'-Festival, das Musikliebhaber aus dem ganzen Land anzieht.",
     [
        "Das Seensystem wurde unter der Leitung des Architekten György Csorba entworfen.",
        "Der Pécsi-tó ist mit rund 72 Hektar der flächenmäßig größte See des Systems.",
        "Der Herman Ottó-tó dient als streng geschütztes Vogelschutzgebiet.",
        "Im Mühlenmuseum von Orfű kann eine funktionierende Schiffsmühle besichtigt werden.",
        "Die Wassertemperatur des Orfűi-tó erreicht im Sommer bis zu 26 Grad Celsius.",
        "Der See wird von kalkreichen Karstquellen mit hoher Wasserqualität gespeist.",
        "Orfű ist ein nationales Zentrum für Segel- und Kajaksport in Südtransdanubien.",
        "Die Wasserläufe sind mit dem berühmten Höhlensystem von Abaliget verbunden."
     ]),
    ("lake-kunfeher-to-extra",
     "Der Kunfehértói-tó ist eine Oase in der sandigen Tiefebene des Komitats Bács-Kiskun. Bekannt für sein charakteristisches, leicht salzhaltiges und alkalisches Wasser, wird dem See seit Generationen eine heilende Wirkung bei Hautbeschwerden und rheumatischen Leiden zugeschrieben. Was diesen See besonders macht, ist sein dichter Waldstrand – riesige alte Eichen und Kiefern bieten natürlichen Schatten bis direkt ans Ufer, was in der oft heißen Puszta-Region eine Seltenheit ist. Die Umgebung hat sich ihren ursprünglichen Charme bewahrt, während moderne Freizeiteinrichtungen den See zu einem idealen Ort für Sommerurlauber machen. Ökologisch ist das Gebiet zudem als Teil des Natura 2000-Netzwerks geschützt.",
     [
        "Das Wasser des Kunfehértói-tó ist reich an Natriumhydrogencarbonat.",
        "Der See ist von einem 120 Hektar großen Waldgebiet aus Stieleichen umgeben.",
        "Historisch entstand der See in einer natürlichen Windmulde in den Sanddünen.",
        "Die Tiefe des Sees liegt durchschnittlich bei etwa 2 Metern.",
        "Ein jährliches Jugendfestival im Sommer hat den Ort überregional bekannt gemacht.",
        "Die Flora der Umgebung umfasst seltene Sanddisteln und geschützte Grasarten.",
        "Rund um den See gibt es ausgedehnte Lauf- und Wanderpfade.",
        "Der Name erinnert an weiße Sandstrände und die historische Ansiedlung der Kumanen."
     ]),
    ("lake-szelidi-to-extra",
     "Der Szelidi-tó bei Dunapataj ist eines der faszinierendsten Gewässer der ungarischen Tiefebene. Als ein vor Jahrtausenden entstandener Altarm der Donau erstreckt er sich heute über eine Länge von fünf Kilometern in einer charakteristischen Bogenform. Der See ist berühmt für sein spezielles Natronwasser, das nicht nur eine seidige Textur hat, sondern auch heilende Eigenschaften bei Nervenleiden und rheumatischen Erkrankungen besitzt. Da der See im Vergleich zu anderen ungarischen Seen relativ tief ist, bietet er auch in heißen Sommern eine angenehme Abkühlung. Das Ufer ist gesäumt von Ferienhäusern und Campingplätzen, die den See zu einem lebendigen Zentrum des Sommertourismus machen.",
     [
        "Mit einer Länge von 5 Kilometern ist er der größte Altarm der Region.",
        "Die maximale Tiefe des Sees erreicht stellenweise bis zu 4 Meter.",
        "Das Wasser enthält hohe Konzentrationen an Magnesium und Natriumcarbonat.",
        "Entlang des Südufers führt ein 2,4 Kilometer langer Lehrpfad durch das Ökosystem.",
        "Der See kann im Sommer Temperaturen von bis zu 28 Grad Celsius erreichen.",
        "Historisch war der See Teil des mäandrierenden Flusssystems der Donau.",
        "Die Fischbestände umfassen Karpfen und Amure, ideal für Sportangler.",
        "In der Nähe befindet sich ein archäologisches Grabungsfeld aus der Awarenzeit."
     ]),
    ("lake-kolon-to-extra",
     "Der Kolon-tó bei Izsák ist eines der wertvollsten Feuchtgebiete Mitteleuropas und ein Juwel des Kiskunság-Nationalparks. Obwohl er als See bezeichnet wird, handelt es sich heute primär um ein ausgedehntes Sumpf- und Schilfgebiet, das durch Verlandungsprozesse entstanden ist. Diese Transformation hat ein einzigartiges Habitat geschaffen, das als UNESCO-Biosphärenreservat streng geschützt ist. Es ist ein Paradies für Ornithologen, da hier seltene Vögel wie die Rohrdommel und verschiedene Reiherarten brüten. Für Besucher wurden Lehrpfade und Aussichtstürme errichtet, die einen tiefen Einblick in das Leben dieser geheimnisvollen Sumpflandschaft ermöglichen, ohne das ökologische Gleichgewicht zu stören.",
     [
        "Das Schutzgebiet des Kolon-tó umfasst eine Fläche von rund 3.000 Hektar.",
        "Im Schilfgürtel befindet sich die größte Reiherkolonie der ungarischen Tiefebene.",
        "Botanisch ist der See für seltene Orchideen wie die Sumpf-Stendelwurz bekannt.",
        "Der See besteht heute aus einem Mosaik aus Kanälen, Teichen und Schilf.",
        "An den Rändern gedeihen seltene Moorbirkenwälder aus der Nacheiszeit.",
        "Eine Vogelberingungsstation wird für internationale Migrationsstudien genutzt.",
        "Das Gebiet dient als natürlicher Wasserspeicher für das regionale Mikroklima.",
        "Der Kolon-tó steht auf der Liste der international bedeutenden Ramsar-Gebiete."
     ]),
    ("forest-bugaci-puszta-extra",
     "Bugac-Puszta ist Inbegriff der ungarischen Steppenlandschaft und ein lebendiges Denkmal der pannonischen Geschichte. Als bedeutendster Teil des Kiskunság-Nationalparks bewahrt dieses Gebiet die jahrhundertealte Tradition der extensiven Tierhaltung und die Kultur der Csikós (Pferdehirten). Die weite Ebene ist geprägt von Sanddünen, alkalischen Böden und riesigen Weiden, auf denen ungarische Graurinder und Racka-Schafe grasen. Besucher können hier atemberaubende Reitvorführungen erleben, die die tiefe Verbindung zwischen Mensch und Pferd demonstrieren. Zudem findet hier regelmäßig der Kurultáj statt – ein großes Treffen der Völker mit nomadischen Wurzeln.",
     [
        "Bugac ist mit über 11.000 Hektar ein Kerngebiet des Kiskunság-Nationalparks.",
        "Das ungarische Graurind wird hier zur Erhaltung der Genetik in großen Herden gezüchtet.",
        "Das Hirtenmuseum zeigt in einem Rundbau das traditionelle Leben in der Puszta.",
        "Besonderes Merkmal sind die Wacholder-Sanddünen mit ihrer einzigartigen Flora.",
        "Reitervorführungen zeigen Manöver wie die berühmte 'Ungarische Post'.",
        "Archäologische Funde belegen die Existenz einer großen mittelalterlichen Klosteranlage.",
        "Das Gebiet ist Teil des UNESCO-Biosphärenreservats für die Großtrappe.",
        "Der Kurultáj gilt als das größte traditionelle Reiternomaden-Festival in Europa."
     ]),
    ("river-csatorna-duna-tisza-extra",
     "Der Donau-Theiß-Kanal ist ein Zeugnis ehrgeiziger wasserbaulicher Träume, die über Jahrhunderte die ungarische Politik bewegten. Ursprünglich geplant, um die beiden Hauptströme Ungarns schiffbar zu verbinden und die Wasserknappheit zu lindern, blieb das Mammutprojekt unvollendet. Heute präsentiert sich der Kanal als System von Wasserläufen, das eine lebensnotwendige Rolle in der regionalen Wasserwirtschaft spielt. Er dient der Bewässerung der oft trockenen Sandböden und reguliert den Wasserhaushalt der Tiefebene. Für die Natur ist der Kanal ein wertvoller Rückzugsort; seine bewachsenen Ufer sind ein Paradies für Fische, Vögel und Erholungsuchende.",
     [
        "Die Idee des Kanals wurde bereits im 18. Jahrhundert unter Maria Theresia diskutiert.",
        "Bisher wurden nur Teilstrecken realisiert, die primär der Landwirtschaft dienen.",
        "Der Kanal spielt eine entscheidende Rolle beim Schutz vor Binnengewässern und Dürre.",
        "Entlang der Ufer haben sich wertvolle Galeriewälder und Schilfzonen gebildet.",
        "Der Kanal wird aufgrund seines Fischreichtums intensiv von Hobbyanglern genutzt.",
        "Wasserbauliche Stationen regeln den Zufluss aus der Donau nach Bedarf.",
        "In einigen Abschnitten ist der europäische Biber wieder heimisch geworden.",
        "Der Kanal ist Teil moderner Klimaanpassungsstrategien für die Tiefebene."
     ])
]

expand_poi("/mnt/c/Users/User/plizio-repo/lib/visualLab/data/poiExtraHu2.ts", data)
print("Successfully expanded POIs 6-15")
