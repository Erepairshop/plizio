// @ts-nocheck
import type { POI } from "./poi";

export const poiExtraSyriaReliefV2: POI[] = [
  {
    id: "syrian-desert-relief-v2",
    type: "desert",
    parent: "SY-DY",
    coords: [38.5, 33.5],
    name: { de: "Syrische Wüste", hu: "Szíriai-sivatag", ro: "Deșertul Sirian", en: "Syrian Desert"},
    description: { de: "Die Syrische Wüste ist eine weite, trockene Steppenlandschaft, die einen großen Teil der Landesfläche bedeckt und von Beduinen bewohnt wird.", hu: "A Szíriai-sivatag egy kiterjedt, száraz sztyeppevidék, amely az ország területének nagy részét lefedi, és beduinok lakják.", ro: "Deșertul Sirian este un peisaj vast de stepă aridă care acoperă o mare parte din suprafața țării și este locuit de beduini.", en: "The Syrian Desert is a vast, arid steppe landscape that covers a large part of the country's land area and is inhabited by Bedouins." },
    facts: {
      de: ["Deckt etwa 500.000 Quadratkilometer ab", "Erstreckt sich über mehrere Länder", "Traditionelle Heimat der Beduinen"],
      hu: ["Mintegy 500 000 négyzetkilométert fed le", "Több országon átível", "A beduinok hagyományos hazája"],
      ro: ["Acoperă aproximativ 500.000 de kilometri pătrați", "Se întinde pe mai multe țări", "Casa tradițională a beduinilor"],
      en: ["Covers about 500,000 square kilometers", "Extends across multiple countries", "Traditional home of the Bedouins"]
    }, image: "/poi-images/syrian-desert-relief-v2.webp"},
  {
    id: "al-jazira-plateau-relief-v2",
    type: "plateau",
    parent: "SY-HA",
    coords: [40.5, 36.5],
    name: { de: "Al-Dschasira-Ebene", hu: "Dzsazíra-fennsík", ro: "Platoul Al-Jazira", en: "Al-Jazira Plateau"},
    image: "/poi-images/al-jazira-plateau-relief-v2.webp",
    description: { de: "Die Al-Dschasira-Ebene im Nordosten Syriens ist eine wichtige landwirtschaftliche Region, die von den Flüssen Euphrat und Tigris geprägt wird.", hu: "Az északkelet-szíriai Dzsazíra-fennsík egy fontos mezőgazdasági régió, amelyet az Eufrátesz és a Tigris folyók határoznak meg.", ro: "Platoul Al-Jazira din nord-estul Siriei este o importantă regiune agricolă modelată de râurile Eufrat și Tigru.", en: "The Al-Jazira Plateau in northeastern Syria is an important agricultural region shaped by the Euphrates and Tigris rivers." },
    facts: {
      de: ["Gilt als Kornkammer Syriens", "Liegt zwischen Euphrat und Tigris", "Sehr fruchtbare Böden"],
      hu: ["Szíria éléskamrájának számít", "Az Eufrátesz és a Tigris között fekszik", "Rendkívül termékeny talaj"],
      ro: ["Considerată grânarul Siriei", "Situată între Eufrat și Tigru", "Soluri foarte fertile"],
      en: ["Considered the breadbasket of Syria", "Located between the Euphrates and Tigris", "Very fertile soils"]
    }
  },
  {
    id: "jabal-abd-al-aziz-relief-v2",
    type: "mountain",
    parent: "SY-HA",
    coords: [40.066667, 36.316667],
    name: { de: "Dschebel Abd al-Aziz", hu: "Dzsebel Abd al-Aziz", ro: "Jabal Abd al-Aziz", en: "Mount Abd al-Aziz"},
    image: "/poi-images/jabal-abd-al-aziz-relief-v2.webp",
    description: { de: "Der Dschebel Abd al-Aziz ist ein markanter Gebirgszug in der Al-Hasakah-Region, der als Naturschutzgebiet dient und bedrohte Tierarten schützt.", hu: "A Dzsebel Abd al-Aziz egy kiemelkedő hegylánc az Al-Haszaka régióban, amely természetvédelmi területként működik és veszélyeztetett állatfajokat véd.", ro: "Jabal Abd al-Aziz este un lanț muntos proeminent în regiunea Al-Hasakah, care servește ca rezervație naturală și protejează speciile de animale pe cale de dispariție.", en: "Mount Abd al-Aziz is a prominent mountain range in the Al-Hasakah region, serving as a nature reserve and protecting endangered animal species." , es: "Jabal Abd al-Aziz es una cadena montañosa distintiva en la región de Al-Hasakah que sirve como reserva natural y protege especies animales amenazadas.", pt: "Jabal Abd al-Aziz é uma cadeia montanhosa distinta na região de Al-Hasakah que serve como reserva natural e protege espécies animais ameaçadas.", fr: "Jabal Abd al-Aziz est une chaîne de montagnes caractéristique de la région d'Al-Hasakah, qui sert de réserve naturelle et protège des espèces animales menacées."},
    facts: {
      de: ["Erreicht Höhen von bis zu 920 Metern", "Ausgewiesenes Naturschutzgebiet", "Wichtiger Lebensraum für Wildtiere"],
      hu: ["Akár 920 méteres magasságot is elér", "Kijelölt természetvédelmi terület", "Fontos élőhely a vadvilág számára"],
      ro: ["Atinge înălțimi de până la 920 de metri", "Rezervație naturală desemnată", "Habitat important pentru fauna sălbatică"],
      en: ["Reaches heights of up to 920 meters", "Designated nature reserve", "Important habitat for wildlife"],
      es: ["Alcanza alturas de hasta 920 metros", "Reserva natural designada", "Importante hábitat para la vida silvestre"],
      pt: ["Atinge alturas de até 920 metros", "Reserva natural designada", "Importante habitat para a vida selvagem"],
      fr: ["Atteint des hauteurs allant jusqu'à 920 mètres", "Réserve naturelle désignée", "Habitat important pour la faune"],
    },
    descriptionAdvanced: {
      de: "Der Jabal Abd al-Aziz ist eine markante Bergkette im Gouvernement al-Hasaka im Nordosten Syriens, die sich etwa 85 Kilometer westlich der Stadt Hasaka erstreckt. Diese Erhebung ragt aus der flachen Al-Dschasira-Ebene empor und erreicht ihre höchste Spitze bei etwa 920 Metern. Geologisch handelt es sich um einen Antiklinalbau, der hauptsächlich aus Sedimentgesteinen der Kreidezeit und des Eozäns besteht. Die Berge spielen eine wichtige Rolle für das lokale Ökosystem, da sie als Wasserscheide fungieren und trotz der trockenen Umgebung eine spezialisierte Flora und Fauna beherbergen. In den 1950er Jahren wurde ein Teil des Gebirges zum Naturschutzgebiet erklärt, um den verbliebenen Baumbestand aus Pistazien und Eichen zu schützen. Historisch diente das Gebirge verschiedenen Kulturen als Zufluchtsort und strategischer Posten, wovon antike Ruinen und die Festung Qal'at Ja'bar in der weiteren Umgebung zeugen. Heute ist Jabal Abd al-Aziz ein wichtiges Forschungsgebiet für Geologen und Botaniker, die sich mit der Anpassung von Pflanzen an semi-aride Bedingungen befassen.",
      hu: "A Dzsebel Abd al-Azíz egy jellegzetes hegylánc al-Haszaka kormányzóságban, Szíria északkeleti részén, amely mintegy 85 kilométerre nyugatra fekszik Haszaka városától. Ez a kiemelkedés az al-Dzsazíra-síkságból emelkedik ki, legmagasabb pontja körülbelül 920 méter. Geológiailag egy antiklinális szerkezet, amely főként kréta és eocén időszaki üledékes kőzetekből épül fel. A hegyek fontos szerepet játszanak a helyi ökoszisztémában, mivel vízválasztóként szolgálnak, és a száraz környezet ellenére speciális flórának és faunának adnak otthont. Az 1950-es években a hegység egy részét természetvédelmi területté nyilvánították, hogy megvédjék a megmaradt pisztácia- és tölgyfaállományt. Történelmileg a hegység különböző kultúrák számára szolgált menedékként és stratégiai pontként, amiről a környéken található ókori romok tanúskodnak. Napjainkban a Dzsebel Abd al-Azíz fontos kutatási terület a geológusok és botanikusok számára, akik a növények félsivatagi körülményekhez való alkalmazkodását vizsgálják.",
      ro: "Jabal Abd al-Aziz este un lanț muntos proeminent din guvernoratul al-Hasaka, situat în nord-estul Siriei, la aproximativ 85 de kilometri vest de orașul Hasaka. Această formațiune se ridică deasupra câmpiei plate Al-Jazira, atingând o altitudine maximă de circa 920 de metri. Din punct de vedere geologic, muntele este o structură anticlinală compusă în principal din roci sedimentare din perioadele cretacică și eocenă. Munții joacă un rol esențial în ecosistemul local, acționând ca o cumpănă a apelor și adăpostind o floră și faună specializată în ciuda mediului arid înconjurător. În anii 1950, o parte a masivului a fost declarată rezervație naturală pentru a proteja resturile de pădure de fistic sălbatic și stejar. Istoric, muntele a servit drept refugiu și post strategic pentru diverse culturi, vestigii antice fiind prezente în regiune. Astăzi, Jabal Abd al-Aziz reprezintă o zonă importantă de studiu pentru geologi și botaniști interesați de adaptarea vegetației la condiții de semideșert.",
      en: "Jabal Abd al-Aziz is a prominent mountain range in the al-Hasaka Governorate of northeastern Syria, situated about 85 kilometers west of the city of Hasaka. This elevation rises sharply from the flat Al-Jazira plains, reaching its highest peak at approximately 920 meters. Geologically, it is an anticlinal structure composed mainly of sedimentary rocks from the Cretaceous and Eocene periods. The mountains play a crucial role in the local ecosystem, acting as a watershed and hosting specialized flora and fauna despite the arid surrounding environment. In the 1950s, a portion of the range was designated as a nature reserve to protect the remaining stands of wild pistachio and oak trees. Historically, the range served as a sanctuary and strategic outpost for various cultures, with ancient ruins scattered across the region. Today, Jabal Abd al-Aziz is an important field of study for geologists and botanists researching plant adaptation to semi-arid conditions.",
      es: "Jabal Abd al-Aziz es una montaña baja en el noreste de Siria, al suroeste de Al-Hasaka. Se extiende unos 100 km en dirección este-oeste y alcanza una altura de 920 m. La montaña consiste en piedra caliza y marga. Es una región de estepa con vegetación escasa, principalmente hierbas y arbustos. En la antigüedad, la montaña era conocida por sus canteras; la piedra se utilizaba para la construcción de Palmira. Hoy, la cría de ganado se practica en pequeña escala. La precipitación anual es de unos 200 mm. La montaña es hábitat de zorros del desierto y gacelas.",
      pt: "Jabal Abd al-Aziz é uma montanha baixa no nordeste da Síria, a sudoeste de Al-Hasaka. Estende-se por cerca de 100 km na direção este-oeste e atinge uma altura de 920 m. A montanha consiste em calcário e marga. É uma região de estepe com vegetação escassa, principalmente ervas e arbustos. Na antiguidade, a montanha era conhecida pelas suas pedreiras; a pedra era utilizada para a construção de Palmira. Hoje, a criação de gado é praticada em pequena escala. A precipitação anual é de cerca de 200 mm. A montanha é habitat de raposas do deserto e gazelas.",
      fr: "Jabal Abd al-Aziz est une montagne basse dans le nord-est de la Syrie, au sud-ouest d'Al-Hasakah. Elle s'étend sur environ 100 km d'est en ouest et atteint une altitude de 920 m. La montagne est composée de calcaire et de marne. C'est une région de steppe avec une végétation clairsemée, principalement composée d'herbes et d'arbustes. Dans l'Antiquité, la montagne était connue pour ses carrières ; la pierre était utilisée pour la construction de Palmyre. Aujourd'hui, l'élevage y est pratiqué à petite échelle. Les précipitations annuelles sont d'environ 200 mm. La montagne est l'habitat de renards du désert et de gazelles.",
    },
    factsAdvanced: {
      de: ["Die höchste Erhebung des Jabal Abd al-Aziz liegt bei ca. 920 Metern.", "Der Name geht auf Abd al-Aziz bin Abd al-Qadir al-Jilani zurück, einen sufischen Gelehrten.", "Das Gebirge erstreckt sich über eine Länge von etwa 85 Kilometern.", "Es ist bekannt für seine Vorkommen an wilden Pistazienbäumen (Pistacia atlantica).", "Die Region erhält nur etwa 250 mm Niederschlag pro Jahr.", "Zahlreiche archäologische Stätten der Halaf-Kultur befinden sich am Fuße der Berge."],
      hu: ["A Dzsebel Abd al-Azíz legmagasabb csúcsa 920 méter körüli.", "Nevét Abd al-Azíz bin Abd al-Kádir al-Dzsíláni szúfi tudósról kapta.", "A hegylánc hossza megközelítőleg 85 kilométer kelet-nyugati irányban.", "Híres vadon élő pisztáciafáiról (Pistacia atlantica).", "Az éves csapadékmennyiség a térségben mindössze 250 mm körül alakul.", "A hegy lábánál számos, a Halaf-kultúrához köthető régészeti lelőhely található."],
      ro: ["Vârful cel mai înalt din Jabal Abd al-Aziz atinge aproximativ 920 de metri.", "Numele muntelui provine de la Abd al-Aziz bin Abd al-Qadir al-Jilani, un învățat sufit.", "Masivul are o lungime de aproximativ 85 de kilometri.", "Zona este cunoscută pentru conservarea arborilor de fistic sălbatic (Pistacia atlantica).", "Nivelul precipitațiilor anuale este redus, fiind de circa 250 mm.", "La poalele muntelui se află numeroase situri arheologice aparținând culturii Halaf."],
      en: ["The highest peak of Jabal Abd al-Aziz is approximately 920 meters above sea level.", "The range is named after Abd al-Aziz bin Abd al-Qadir al-Jilani, a Sufi scholar.", "The mountain range extends for a length of about 85 kilometers.", "It is notable for its remaining stands of wild pistachio trees (Pistacia atlantica).", "The region receives an average of only 250 mm of precipitation annually.", "Numerous archaeological sites from the Halaf culture are located at the base of the mountains."],
      es: ["Longitud: 100 km", "Altura máxima: 920 m", "Consiste en piedra caliza y marga", "Canteras históricas: suministraron a Palmira (siglo III d.C.)", "Precipitación anual: 200 mm", "Hábitat de la gacela persa (Gazella subgutturosa)"],
      pt: ["Comprimento: 100 km", "Altura máxima: 920 m", "Consiste em calcário e marga", "Pedreiras históricas: forneceram Palmira (século III d.C.)", "Precipitação anual: 200 mm", "Habitat da gazela persa (Gazella subgutturosa)"],
      fr: ["Longueur : 100 km", "Hauteur maximale : 920 m", "Composé de calcaire et de marne", "Carrières historiques : ont fourni Palmyre (IIIe siècle apr. J.-C.)", "Précipitations annuelles : 200 mm", "Habitat de la gazelle à goitre (Gazella subgutturosa)"],
    },
  },
  {
    id: "jabal-al-akra-relief-v2", "sights": {
      "de": [
            {
                  "name": "Jabal al Aqra`",
                  "text": "Ein antiker heiliger Berg an der türkisch-syrischen Grenze, auch bekannt als Berg Casius.",
                  "category": "landmark",
                  "coords": [
                        35.969156,
                        35.95203
                  ]
            },
            {
                  "name": "Barlaham Manastırı",
                  "text": "Die Ruinen eines byzantinischen Klosters auf den Hängen des Berges Casius.",
                  "category": "historical",
                  "coords": [
                        35.993215,
                        35.947851
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Kel Dağı",
                  "text": "Ókori szent hegy a török-szír határon, más néven Kasziusz-hegy.",
                  "category": "landmark",
                  "coords": [
                        35.969156,
                        35.95203
                  ]
            },
            {
                  "name": "Barlaham Manastırı",
                  "text": "Egy bizánci kolostor romjai a Kasziusz-hegy lejtőin.",
                  "category": "historical",
                  "coords": [
                        35.993215,
                        35.947851
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Kel Dağı",
                  "text": "Un munte sfânt antic la granița turco-siriană, cunoscut și sub numele de Muntele Casius.",
                  "category": "landmark",
                  "coords": [
                        35.969156,
                        35.95203
                  ]
            },
            {
                  "name": "Barlaham Manastırı",
                  "text": "Ruinele unei mănăstiri bizantine situate pe pantele Muntelui Casius.",
                  "category": "historical",
                  "coords": [
                        35.993215,
                        35.947851
                  ]
            }
      ],
      "en": [
            {
                  "name": "Jabal al Aqra`",
                  "text": "An ancient sacred mountain on the Turkish-Syrian border, also known as Mount Casius.",
                  "category": "landmark",
                  "coords": [
                        35.969156,
                        35.95203
                  ]
            },
            {
                  "name": "Barlum Monastery",
                  "text": "The ruins of a Byzantine monastery located on the slopes of Mount Casius.",
                  "category": "historical",
                  "coords": [
                        35.993215,
                        35.947851
                  ]
            }
      ]
},
    type: "mountain",
    parent: "SY-LA",
    coords: [35.966667, 35.95],
    name: { de: "Dschebel al-Akra", hu: "Dzsebel al-Akra", ro: "Muntele Kel", en: "Mount Casius"},
    description: { de: "Der Dschebel al-Akra, auch bekannt als Berg Casius, ist ein steiler Kalksteinberg nahe der türkischen Grenze, der steil ins Mittelmeer abfällt.", hu: "A Dzsebel al-Akra, más néven Casius-hegy, egy meredek mészkőhegy a török határ közelében, amely meredeken zuhan a Földközi-tengerbe.", ro: "Jabal al-Akra, cunoscut și sub numele de Muntele Casius, este un munte abrupt de calcar, situat lângă granița turcă, care coboară abrupt în Marea Mediterană.", en: "Jabal al-Akra, also known as Mount Casius, is a steep limestone mountain near the Turkish border that drops sharply into the Mediterranean Sea." , es: "Jabal al-Akra, también conocida como Monte Casius, es una empinada montaña de piedra caliza cerca de la frontera turca que cae abruptamente hacia el Mediterráneo.", pt: "Jabal al-Akra, também conhecida como Monte Casius, é uma íngreme montanha de calcário perto da fronteira turca que cai abruptamente em direção ao Mediterrâneo.", fr: "Jabal al-Akra, également connue sous le nom de mont Casius, est une montagne calcaire abrupte près de la frontière turque qui tombe brusquement dans la Méditerranée."},
    facts: {
      de: ["Höhe von 1.709 Metern", "In der Antike als heiliger Berg verehrt", "Liegt direkt an der Küste"],
      hu: ["Magassága 1709 méter", "Az ókorban szent hegyként tisztelték", "Közvetlenül a tengerparton fekszik"],
      ro: ["Înălțime de 1.709 metri", "Venerat ca munte sfânt în antichitate", "Situat direct pe coastă"],
      en: ["Elevation of 1,709 meters", "Revered as a sacred mountain in antiquity", "Located directly on the coast"],
      es: ["Altura de 1.709 metros", "Venerada como montaña sagrada en la antigüedad", "Situada directamente en la costa"],
      pt: ["Altura de 1.709 metros", "Venerada como montanha sagrada na antiguidade", "Situada diretamente na costa"],
      fr: ["Hauteur de 1 709 mètres", "Vénérée comme une montagne sacrée dans l'Antiquité", "Située directement sur la côte"],
    }, image: "/poi-images/jabal-al-akra-relief-v2.webp",
    descriptionAdvanced: {
      de: "Der Jabal al-Aqra, in der Antike als Berg Casius bekannt, ist eine markante Erhebung an der Grenze zwischen Syrien und der Türkei am Mittelmeer. Mit einer Höhe von 1709 Metern ist er der höchste Gipfel der syrischen Küstenregion und dominiert das Landschaftsbild bei Latakia. Geologisch besteht der Berg überwiegend aus Kalkstein und Kalkmergel, die steil zum Meer abfallen. Der Jabal al-Aqra besaß in der Antike eine enorme religiöse Bedeutung; er galt den Kanaanitern als Residenz des Gottes Baal Zaphon und später den Griechen und Römern als Sitz des Zeus Kasios. Jährliche Pilgerfahrten und Opferrituale fanden auf seinem Gipfel statt, von dem aus man bei klarem Wetter bis nach Zypern sehen kann. Die Vegetation ist durch die exponierte Lage und die Feuchtigkeit vom Meer geprägt, wobei dichte Pinienwälder an den Hängen wachsen. Heute ist der Berg aufgrund seiner Grenzlage militärisch von Bedeutung, bleibt aber ein faszinierendes Ziel für historisch interessierte Besucher und Naturbegeisterte, die die Verbindung von Mythologie und Geografie schätzen.",
      hu: "A Dzsebel al-Akra, az ókorban Kasziusz-hegy néven ismert, egy jellegzetes magaslat a szíriai-török határon, a Földközi-tenger partján. 1709 méteres magasságával a szíriai partvidék legmagasabb csúcsa, amely uralja Latakia környékének látképét. Geológiailag a hegy túlnyomórészt mészkőből és márgából áll, amelyek meredeken szakadnak a tengerbe. A Dzsebel al-Akra az ókorban hatalmas vallási jelentőséggel bírt; a kánaániták a viharisten, Baal-Cáfón lakhelyének tekintették, később a görögök és rómaiak pedig Zeusz Kasziusz szentélyeként tisztelték. Évente zarándoklatokat és áldozati rítusokat tartottak a csúcsán, ahonnan tiszta időben egészen Ciprusig el lehet látni. A növényzetet a kitett helyzet és a tenger felől érkező nedvesség határozza meg, a lejtőkön sűrű fenyőerdők nőnek. Napjainkban a hegy határmenti elhelyezkedése miatt katonai szempontból is jelentős, de továbbra is lenyűgöző célpont a történelem és a természet kedvelői számára.",
      ro: "Jabal al-Aqra, cunoscut în antichitate sub numele de Muntele Casius, este o ridicătură proeminentă situată la frontiera dintre Siria și Turcia, pe țărmul Mării Mediterane. Cu o înălțime de 1709 metri, reprezintă cel mai înalt vârf din regiunea de coastă a Siriei, dominând orizontul în apropiere de Latakia. Din punct de vedere geologic, muntele este format preponderent din calcare și marne care coboară abrupt spre mare. Jabal al-Aqra a avut o importanță religioasă imensă în antichitate; canaaniții îl considerau reședința zeului Baal Zaphon, iar mai târziu grecii și romanii l-au venerat ca fiind lăcașul lui Zeus Kasios. Pelerinaje anuale și ritualuri de sacrificiu aveau loc pe culmea sa, de unde, în condiții de vizibilitate optimă, se poate vedea până în Cipru. Vegetația este influențată de expunerea la briza marină și umiditate, pantele fiind acoperite de păduri dense de pini. Astăzi, muntele este un punct strategic militar datorită locației sale frontaliere, dar rămâne o destinație fascinantă pentru cei interesați de mitologie și geografie.",
      en: "Jabal al-Aqra, known in antiquity as Mount Casius, is a prominent mountain located on the border between Syria and Turkey on the Mediterranean coast. Reaching an elevation of 1,709 meters, it is the highest peak in the Syrian coastal region, dominating the landscape near Lattakia. Geologically, the mountain is composed primarily of limestone and marl, with its slopes dropping steeply into the sea. Jabal al-Aqra held immense religious significance in antiquity; it was revered by the Canaanites as the residence of the god Baal Zaphon and was later considered by the Greeks and Romans as the seat of Zeus Kasios. Annual pilgrimages and sacrificial rituals took place on its summit, from which Cyprus can be seen on clear days. The vegetation is shaped by the exposed location and maritime moisture, with dense pine forests covering its flanks. Today, the mountain is of military importance due to its border location, yet it remains a fascinating site for history enthusiasts and nature lovers who appreciate its blend of mythology and geography.",
      es: "Jabal al-Akra (también llamado Monte Casius) es una montaña en la frontera sirio-turca en el noroeste de Siria. Con una altura de 1.727 m, es uno de los picos más altos de la cordillera costera siria. La montaña está compuesta de piedra caliza y dolomita. En la antigüedad, era conocida como Mons Casius y estaba consagrada al dios Zeus. Hay una estación de radar en la cima. La vegetación incluye bosques de pinos en las elevaciones más bajas y praderas alpinas por encima de los 1.500 m. La montaña es una fuente importante de agua para varios arroyos. La precipitación anual es superior a 1.000 mm.",
      pt: "Jabal al-Akra (também chamado Monte Casius) é uma montanha na fronteira sírio-turca no noroeste da Síria. Com uma altura de 1.727 m, é um dos picos mais altos da cordilheira costeira síria. A montanha é composta de calcário e dolomite. Na antiguidade, era conhecida como Mons Casius e era consagrada ao deus Zeus. Existe uma estação de radar no cimo. A vegetação inclui florestas de pinheiros nas elevações mais baixas e prados alpinos acima dos 1.500 m. A montanha é uma fonte importante de água para vários riachos. A precipitação anual é superior a 1.000 mm.",
      fr: "Jabal al-Akra (aussi appelé mont Casius) est une montagne sur la frontière syro-turque dans le nord-ouest de la Syrie. Avec une altitude de 1 727 m, c'est l'un des plus hauts sommets de la chaîne côtière syrienne. La montagne est composée de calcaire et de dolomite. Dans l'Antiquité, elle était connue sous le nom de Mons Casius et était consacrée au dieu Zeus. Il y a une station radar au sommet. La végétation comprend des forêts de pins dans les zones les plus basses et des prairies alpines au-dessus de 1 500 m. La montagne est une source d'eau importante pour plusieurs ruisseaux. Les précipitations annuelles sont supérieures à 1 000 mm.",
    },
    factsAdvanced: {
      de: ["Die absolute Höhe des Gipfels beträgt 1709 Meter über dem Meeresspiegel.", "Der antike Name 'Casius' ist mit dem semitischen Namen 'Zaphon' verwandt.", "Geologisch gehört der Berg zum Gebirgszug des Amanos.", "Vom Gipfel aus beträgt die Distanz zur Insel Zypern nur etwa 100 Kilometer.", "Schneefälle sind auf dem Gipfel in den Wintermonaten keine Seltenheit.", "Historisch wurde der Berg bereits im 2. Jahrtausend v. Chr. in ugaritischen Texten erwähnt."],
      hu: ["A csúcs abszolút magassága 1709 méter a tengerszint felett.", "Az ókori 'Kasziusz' név kapcsolatba hozható a sémi 'Cáfón' névvel.", "Geológiailag a hegy az Amanosz-hegység déli nyúlványának tekinthető.", "A hegycsúcsról tiszta időben látható Ciprus szigete, amely kb. 100 km-re van.", "A téli hónapokban a csúcsot gyakran hó borítja.", "A hegyet már az i. e. 2. évezredben említik az ugariti ékírásos szövegek."],
      ro: ["Altitudinea maximă a vârfului este de 1709 metri deasupra nivelului mării.", "Numele antic 'Casius' este derivat din denumirea semitică 'Zaphon'.", "Din punct de vedere geologic, face parte din sistemul muntos Amanus.", "Distanța în linie dreaptă până la insula Cipru este de aproximativ 100 km.", "Căderile de zăpadă pe vârf sunt frecvente în timpul sezonului rece.", "Muntele este menționat în textele ugaritice încă din mileniul al II-lea î.Hr."],
      en: ["The absolute elevation of the summit is 1,709 meters above sea level.", "The ancient name 'Casius' is linguistically linked to the Semitic 'Zaphon'.", "Geologically, the mountain is part of the Amanus mountain range.", "From the summit, the island of Cyprus is visible at a distance of about 100 km.", "Snowfall is a common occurrence on the peak during the winter months.", "The mountain was mentioned in Ugaritic texts as early as the 2nd millennium BC."],
      es: ["Altura: 1.727 m", "Consiste en piedra caliza y dolomita", "Nombre antiguo: Mons Casius", "Precipitación anual: más de 1.000 mm", "Cima con estación de radar (altura: 1.727 m)", "Fuente de agua para 4 arroyos permanentes"],
      pt: ["Altitude: 1.727 m", "Consiste em calcário e dolomite", "Nome antigo: Mons Casius", "Precipitação anual: mais de 1.000 mm", "Cimo com estação de radar (altitude: 1.727 m)", "Fonte de água para 4 riachos permanentes"],
      fr: ["Altitude : 1 727 m", "Composé de calcaire et de dolomite", "Nom antique : Mons Casius", "Précipitations annuelles : plus de 1 000 mm", "Sommet avec station radar (altitude : 1 727 m)", "Source d'eau pour 4 ruisseaux permanents"],
    },
  },
  {
    id: "al-ghab-plain-relief-v2",
    type: "valley",
    parent: "SY-HM",
    coords: [36.333333, 35.5],
    name: { de: "Al-Ghab-Ebene", hu: "Al-Gáb-síkság", ro: "Câmpia Al-Ghab", en: "Al-Ghab Plain"},
    description: { de: "Die Al-Ghab-Ebene ist ein fruchtbares Grabenbruch-Tal am Fluss Orontes, das in der Mitte des 20. Jahrhunderts entwässert wurde, um Ackerland zu gewinnen.", hu: "Az Al-Gáb-síkság egy termékeny hasadékvölgy az Orontész folyó mentén, amelyet a 20. század közepén csapoltak le termőföld nyerése céljából.", ro: "Câmpia Al-Ghab este o vale de rift fertilă pe râul Orontes, care a fost drenată la mijlocul secolului al XX-lea pentru a crea teren arabil.", en: "The Al-Ghab Plain is a fertile rift valley on the Orontes River that was drained in the mid-20th century to reclaim agricultural land." , es: "La llanura de Al-Ghab es un valle de falla fértil en el río Orontes, que fue drenado a mediados del siglo XX para ganar tierras cultivables.", pt: "A planície de Al-Ghab é um vale de falha fértil no rio Orontes, que foi drenado em meados do século XX para obter terras aráveis.", fr: "La plaine d'Al-Ghab est une vallée de rift fertile sur le fleuve Oronte, asséchée au milieu du XXe siècle pour gagner des terres arables."},
    facts: {
      de: ["Ursprünglich ein großes Sumpfgebiet", "Über 80 Kilometer lang", "Wichtig für die Landwirtschaft"],
      hu: ["Eredetileg egy nagy mocsárvidék volt", "Több mint 80 kilométer hosszú", "Fontos a mezőgazdaság számára"],
      ro: ["Inițial o zonă mare de mlaștină", "Peste 80 de kilometri lungime", "Importantă pentru agricultură"],
      en: ["Originally a large swamp area", "Over 80 kilometers long", "Important for agriculture"],
      es: ["Originalmente un gran humedal", "Más de 80 kilómetros de largo", "Importante para la agricultura"],
      pt: ["Originalmente uma grande zona pantanosa", "Mais de 80 quilómetros de comprimento", "Importante para a agricultura"],
      fr: ["À l'origine une grande zone humide", "Plus de 80 kilomètres de long", "Important pour l'agriculture"],
    }, image: "/poi-images/al-ghab-plain-relief-v2.webp",
    descriptionAdvanced: {
      de: "Die Al-Ghab-Ebene ist eine fruchtbare Senke im Nordwesten Syriens, die sich über eine Länge von etwa 63 Kilometern und eine Breite von 12 Kilometern zwischen dem Alawitengebirge im Westen und dem Zawiya-Gebirge im Osten erstreckt. Geologisch handelt es sich um einen tektonischen Grabenbruch, der vom Orontes-Fluss durchflossen wird. Ursprünglich war das Gebiet ein riesiges Sumpfland, das erst in den 1950er Jahren durch ein großangelegtes staatliches Projekt trockengelegt wurde, um landwirtschaftliche Nutzfläche zu gewinnen. Heute ist die Region ein wichtiges Zentrum für den Anbau von Baumwolle, Weizen und Zuckerrüben. Historisch war die Ebene aufgrund ihrer strategischen Lage und Wasserressourcen seit der Antike besiedelt, wobei die Ruinen von Apameia am östlichen Rand die bedeutendste archäologische Stätte darstellen. Die Senkung des Grundwasserspiegels und die intensive Bewässerung prägen die moderne ökologische Situation der Region maßgeblich.",
      hu: "Az Al-Gáb-alföld egy termékeny süllyedék Északnyugat-Szíriában, amely körülbelül 63 kilométer hosszan és 12 kilométer szélességben terül el az Alavita-hegység és a Závia-hegység között. Geológiailag egy tektonikus árok, amelyen az Orontész folyó halad át. A terület eredetileg hatalmas mocsárvidék volt, amelyet csak az 1950-es években csapoltak le egy nagyszabású állami projekt keretében, hogy mezőgazdasági művelésre alkalmassá tegyék. Napjainkban a régió Szíria egyik legfontosabb éléskamrája, ahol főként gyapotot, búzát és cukorrépát termesztenek. Történelmileg az alföld stratégiai fekvése és vízforrásai miatt már az ókorban is lakott volt, legjelentősebb emléke az alföld keleti szélén található Apameia romvárosa. A terület modern ökológiai egyensúlyát a talajvízszint süllyedése és az intenzív öntözés határozza meg.",
      ro: "Câmpia Al-Ghab este o depresiune fertilă situată în nord-vestul Siriei, întinzându-se pe o lungime de aproximativ 63 de kilometri și o lățime de 12 kilometri între Munții Alauiți la vest și Muntele Zawiya la est. Din punct de vedere geologic, este un graben tectonic traversat de râul Orontes. Inițial, zona a fost o vastă regiune mlăștinoasă, care a fost drenată abia în anii 1950 printr-un proiect statal de anvergură pentru a crea terenuri agricole. Astăzi, regiunea este un centru vital pentru cultivarea bumbacului, grâului și sfeclei de zahăr. Istoric, câmpia a fost locuită încă din antichitate datorită resurselor de apă, ruinele orașului Apamea de pe marginea estică fiind cel mai important sit arheologic din apropiere. Managementul resurselor de apă și irigațiile intensive rămân principalele provocări economice și ecologice ale zonei în prezent.",
      en: "The Al-Ghab Plain is a fertile depression in northwestern Syria, stretching approximately 63 kilometers in length and 12 kilometers in width between the Coastal Mountain Range to the west and Mount Zawiya to the east. Geologically, it is a tectonic graben through which the Orontes River flows. Originally a vast marshland, the area was reclaimed in the 1950s through a major drainage project designed to expand Syria's agricultural capacity. Today, the plain is a primary agricultural hub, producing significant yields of cotton, wheat, and sugar beets. Historically, the region's strategic location and water availability made it a site of settlement since antiquity, with the nearby ruins of Apamea serving as a testament to its past importance. Modern issues involve groundwater depletion and the maintenance of the complex irrigation networks established during the mid-20th century.",
      es: "La llanura de Al-Ghab es una depresión tectónica en el noroeste de Siria que se extiende a lo largo del río Orontes. Tiene unos 80 km de largo y 10-15 km de ancho. La llanura se encuentra a una media de 200 m sobre el nivel del mar. Es una de las zonas agrícolas más fértiles de Siria, conocida por el cultivo de algodón, trigo, remolacha azucarera y hortalizas. El riego se realiza a través del Orontes y el agua subterránea. Antes del drenaje en la década de 1960, la zona era un humedal. La presa de Al-Ghab regula el nivel del agua. La región está densamente poblada con ciudades como Al-Suqaylabiyah.",
      pt: "A planície de Al-Ghab é uma depressão tectónica no noroeste da Síria que se estende ao longo do rio Orontes. Tem cerca de 80 km de comprimento e 10-15 km de largura. A planície situa-se em média a 200 m acima do nível do mar. É uma das zonas agrícolas mais férteis da Síria, conhecida pelo cultivo de algodão, trigo, beterraba sacarina e vegetais. A irrigação é efetuada através do Orontes e águas subterrâneas. Antes da drenagem na década de 1960, a zona era um pântano. A barragem de Al-Ghab regula o nível da água. A região é densamente povoada, com cidades como Al-Suqaylabiyah.",
      fr: "La plaine d'Al-Ghab est une dépression tectonique dans le nord-ouest de la Syrie qui s'étend le long du fleuve Oronte. Elle mesure environ 80 km de long et 10 à 15 km de large. La plaine se situe en moyenne à 200 m au-dessus du niveau de la mer. C'est l'une des zones agricoles les plus fertiles de Syrie, connue pour la culture du coton, du blé, de la betterave sucrière et des légumes. L'irrigation est assurée par l'Oronte et les eaux souterraines. Avant l'assèchement dans les années 1960, la zone était une zone humide. Le barrage d'Al-Ghab régule le niveau de l'eau. La région est densément peuplée, avec des villes comme Al-Suqaylabiyah.",
    },
    factsAdvanced: {
      de: ["Die Ebene liegt auf einer durchschnittlichen Höhe von 170 bis 220 Metern über dem Meeresspiegel.", "Das Entwässerungsprojekt der 1950er Jahre schuf etwa 80.000 Hektar neues Ackerland.", "Der Orontes-Fluss bildet die zentrale Lebensader und Bewässerungsquelle der Region.", "Die antike Stadt Apameia wurde 300 v. Chr. am Rand der Ebene gegründet.", "Die jährliche Niederschlagsmenge variiert zwischen 600 und 800 mm.", "Die Ebene ist von zwei parallelen Gebirgsketten umgeben, die ein Mikroklima begünstigen."],
      hu: ["Az alföld átlagos tengerszint feletti magassága 170 és 220 méter között mozog.", "Az 1950-es évek lecsapolási munkálatai során 80 000 hektár új termőföld jött létre.", "Az Orontész folyó a régió központi víziútja és fő öntözővíz-forrása.", "Az alföld szélén fekvő Apameia városát i. e. 300-ban alapították.", "Az éves csapadékmennyiség a térségben 600 és 800 mm között alakul.", "A területet két párhuzamos hegylánc veszi körül, ami speciális mikroklímát eredményez."],
      ro: ["Câmpia se află la o altitudine medie cuprinsă între 170 și 220 de metri deasupra mării.", "Proiectul de drenaj din anii 1950 a recuperat aproximativ 80.000 de hectare de teren.", "Râul Orontes reprezintă principala sursă de apă pentru sistemele de irigații.", "Orașul antic Apamea a fost fondat în anul 300 î.Hr. pe marginea estică a câmpiei.", "Precipitațiile anuale în regiune variază între 600 și 800 mm.", "Regiunea este încadrată de Munții Alauiți și Muntele Zawiya, formând un culoar natural."],
      en: ["The plain lies at an average elevation of 170 to 220 meters above sea level.", "The 1950s drainage project reclaimed roughly 80,000 hectares of arable land.", "The Orontes River serves as the primary drainage and irrigation source for the plain.", "The ancient city of Apamea was established on the plain's edge in 300 BC.", "Annual precipitation in the region ranges from 600 to 800 mm.", "The plain is bordered by two parallel mountain ranges, creating a distinct microclimate."],
      es: ["Longitud: 80 km", "Ancho: 10-15 km", "Altura: 200 m", "Drenaje en la década de 1960", "Área irrigada: 100.000 hectáreas", "Presa de Al-Ghab: construida en 1968, longitud 2 km"],
      pt: ["Comprimento: 80 km", "Largura: 10-15 km", "Altitude: 200 m", "Drenagem na década de 1960", "Área irrigada: 100.000 hectares", "Barragem de Al-Ghab: construída em 1968, comprimento 2 km"],
      fr: ["Longueur : 80 km", "Largeur : 10-15 km", "Altitude : 200 m", "Assèchement dans les années 1960", "Surface irriguée : 100 000 hectares", "Barrage d'Al-Ghab : construit en 1968, longueur 2 km"],
    },
  },
  {
    id: "kurd-dagh-relief-v2", "sights": {
      "de": [
            {
                  "name": "Hawar Castle",
                  "text": "Die Burg Hawar ist eine Bergfestung in der Region Dagh.",
                  "category": "castle",
                  "coords": [
                        36.774689,
                        36.653183
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Hawar Castle",
                  "text": "Hawar vára egy hegyi erőd a Dagh régióban.",
                  "category": "castle",
                  "coords": [
                        36.774689,
                        36.653183
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Hawar Castle",
                  "text": "Castelul Hawar este o fortăreață pe deal în regiunea Dagh.",
                  "category": "castle",
                  "coords": [
                        36.774689,
                        36.653183
                  ]
            }
      ],
      "en": [
            {
                  "name": "Hawar castle",
                  "text": "Hawar castle is a hilltop fortress in the Dagh region.",
                  "category": "castle",
                  "coords": [
                        36.774689,
                        36.653183
                  ]
            }
      ]
},
    type: "mountain",
    parent: "SY-HL",
    coords: [36.75, 36.666667],
    name: { de: "Kurd Dagh", hu: "Kurd-hegység", ro: "Munții Kurd", en: "Kurd Mountains"},
    description: { de: "Der Kurd Dagh ist ein bergiges Hochland im Nordwesten Syriens, das durch seine dichten Olivenhaine und reiche kulturelle Geschichte geprägt ist.", hu: "A Kurd-hegység egy hegyvidéki terület Északnyugat-Szíriában, amelyet sűrű olajfaligetek és gazdag kulturális történelem jellemez.", ro: "Munții Kurd sunt un ținut muntos în nord-vestul Siriei, caracterizat prin plantații dense de măslini și o bogată istorie culturală.", en: "Kurd Dagh is a mountainous highland in northwestern Syria, characterized by its dense olive groves and rich cultural history." , es: "Kurd Dagh es una meseta montañosa en el noroeste de Siria, caracterizada por sus densos olivares y su rica historia cultural.", pt: "Kurd Dagh é um planalto montanhoso no noroeste da Síria, caracterizado pelos seus densos olivais e rica história cultural.", fr: "Le Kurd Dagh est un haut plateau montagneux dans le nord-ouest de la Syrie, caractérisé par ses denses oliveraies et sa riche histoire culturelle."},
    facts: {
      de: ["Bekannt für den Olivenanbau", "Teil des Taurusgebirges", "Heimat vieler antiker Ruinen"],
      hu: ["Az olajbogyó-termesztésről ismert", "A Torosz-hegység része", "Számos ókori rom otthona"],
      ro: ["Cunoscut pentru cultivarea măslinelor", "Parte a Munților Taurus", "Găzduiește multe ruine antice"],
      en: ["Known for olive cultivation", "Part of the Taurus Mountains", "Home to many ancient ruins"],
      es: ["Conocido por el cultivo del olivo", "Parte de los Montes Tauro", "Hogar de muchas ruinas antiguas"],
      pt: ["Conhecido pelo cultivo da azeitona", "Parte dos Montes Tauro", "Lar de muitas ruínas antigas"],
      fr: ["Connu pour la culture de l'olivier", "Partie des monts Taurus", "Abrite de nombreuses ruines antiques"],
    }, image: "/poi-images/kurd-dagh-relief-v2.webp",
    descriptionAdvanced: {
      de: "Das Kurd-Dagh-Gebirge, auch bekannt als Gebirge der Kurden, ist eine Hochlandsregion im Nordwesten Syriens und im Südosten der Türkei, die vor allem den Distrikt Afrin umfasst. Die Region ist Teil des Taurus-Gebirgssystems und zeichnet sich durch sanfte Hügel und Täler aus, die seit Jahrtausenden für den Olivenanbau genutzt werden. Das Gebirge erreicht Höhen von bis zu 1.269 Metern am Berg Huruz. Geologisch besteht das Massiv überwiegend aus Kalkstein, was zur Bildung zahlreicher Höhlen und Karstphänomene geführt hat. Historisch war die Region ein Rückzugsort für verschiedene Bevölkerungsgruppen und ein wichtiges Zentrum der jesidischen Kultur sowie der kurdischen Identität in Syrien. Wirtschaftlich dominiert neben den Millionen von Olivenbäumen auch der Anbau von Getreide und Obst. In den letzten Jahrzehnten war das Gebiet aufgrund seiner grenznahen Lage und ethnischen Zusammensetzung häufig Schauplatz politischer und militärischer Auseinandersetzungen.",
      hu: "A Kurd-Dagh, vagyis a Kurdok hegysége, Északnyugat-Szíria és Délkelet-Törökország határvidékén elterülő felföld, amely elsősorban az Afrín körzetet foglalja magában. A hegység a Toros-hegységrendszer része, lankás dombjai és völgyei évezredek óta a gyümölcs- és olívatermesztés központjai. Legmagasabb pontja a Huruz-hegy, amely 1269 méterrel magasodik a tengerszint fölé. Geológiailag a masszívum főként mészkőből épül fel, ami számos barlang és karsztforma kialakulását eredményezte. Történelmileg a régió menedéket nyújtott különböző népcsoportoknak, és fontos központja a szíriai kurd identitásnak, valamint a jezidita kultúrának. Gazdaságilag a több millió olajfa mellett a gabonatermesztés is meghatározó. Az elmúlt évtizedekben a terület határ menti fekvése és etnikai összetétele miatt gyakran vált politikai és katonai konfliktusok színterévé.",
      ro: "Munții Kurd-Dagh, cunoscuți și sub numele de Jabal al-Akrad, reprezintă o regiune muntoasă situată în nord-vestul Siriei și sud-estul Turciei, cuprinzând în principal districtul Afrin. Regiunea face parte din sistemul Munților Taurus și se caracterizează prin dealuri ondulate și văi care au fost utilizate pentru cultivarea măslinilor timp de milenii. Altitudinea maximă a masivului atinge 1.269 de metri în vârful Huruz. Geologic, munții sunt compuși preponderent din calcar, ceea ce a dus la formarea a numeroase peșteri și fenomene carstice. Din punct de vedere istoric, regiunea a fost un refugiu pentru diverse grupuri etnice și un centru important al culturii kurde și al comunității yazidi din Siria. Economia locală este dominată de cele peste 18 milioane de măslini, precum și de culturi de cereale și fructe. În ultimele decenii, zona a fost marcată de tensiuni politice și militare din cauza poziției sale strategice la frontieră.",
      en: "Kurd-Dagh, meaning 'Mountain of the Kurds,' is a highland region in northwestern Syria and southeastern Turkey, primarily centered around the Afrin District. Part of the broader Taurus mountain system, the area is characterized by rolling hills and fertile valleys that have been dedicated to olive cultivation for millennia. The highest peak in the range is Mount Huruz, reaching an elevation of 1.269 meters. Geologically, the massif is composed largely of limestone, leading to the formation of numerous caves and karst features. Historically, the region has served as a sanctuary for various populations and remains a vital center for Kurdish identity and the Yazidi community in Syria. Economically, the region is famous for its millions of olive trees, which form the backbone of the local industry alongside cereal and fruit production. In recent decades, its border location and ethnic demographics have made it a focal point of significant political and military developments.",
      es: "Kurd-Dagh (o montaña kurda) es una cadena montañosa en el noroeste de Siria que se extiende a lo largo de la frontera turca. Tiene unos 100 km de longitud y alcanza alturas de hasta 1.000 m. La montaña consiste en caliza y basalto. Es una región de olivares y viñedos; la agricultura es la principal fuente de ingresos. La población es predominantemente kurda. Las precipitaciones anuales oscilan entre 400 y 600 mm. La montaña es conocida por sus manantiales y pequeños ríos que fluyen hacia el Orontes. En la antigüedad era parte del reino Mitanni.",
      pt: "Kurd-Dagh (ou montanha curda) é uma cordilheira no noroeste da Síria que se estende ao longo da fronteira turca. Tem cerca de 100 km de comprimento e atinge alturas de até 1.000 m. A montanha é composta por calcário e basalto. É uma região de olivais e vinhas; a agricultura é a principal fonte de rendimento. A população é predominantemente curda. A precipitação anual varia entre 400 e 600 mm. A montanha é conhecida pelas suas nascentes e pequenos rios que fluem para o Orontes. Na antiguidade, fazia parte do reino de Mitanni.",
      fr: "Le Kurd-Dagh (montagne kurde) est une chaîne de montagnes dans le nord-ouest de la Syrie qui s'étend le long de la frontière turque. Elle mesure environ 100 km de long et atteint des altitudes allant jusqu'à 1 000 m. La montagne est composée de calcaire et de basalte. C'est une région d'oliveraies et de vignobles ; l'agriculture est la principale source de revenus. La population est majoritairement kurde. Les précipitations annuelles varient entre 400 et 600 mm. La montagne est connue pour ses sources et ses petites rivières qui se jettent dans l'Oronte. Dans l'Antiquité, elle faisait partie du royaume de Mitanni.",
    },
    factsAdvanced: {
      de: ["Die höchste Erhebung des Kurd-Dagh ist der Berg Huruz mit 1.269 Metern.", "In der Region Afrin werden schätzungsweise über 18 Millionen Olivenbäume kultiviert.", "Geologisch gehört das Gebirge zu den südlichen Ausläufern des Taurus-Gebirges.", "Der Name 'Kurd-Dagh' tauchte bereits in osmanischen Dokumenten des 17. Jahrhunderts auf.", "Die jährliche Niederschlagsmenge liegt im Durchschnitt bei etwa 500 bis 600 mm.", "Das Gebirge wird im Osten vom Fluss Afrin begrenzt, der das Land bewässert."],
      hu: ["A Kurd-Dagh legmagasabb pontja a Huruz-hegy, amely 1269 méter magas.", "Afrín körzetében becslések szerint több mint 18 millió olajfa található.", "Geológiailag a hegység a Toros-hegység déli nyúlványaihoz tartozik.", "A 'Kurd-Dagh' név már a 17. századi oszmán dokumentumokban is szerepelt.", "Az éves átlagos csapadékmennyiség a térségben 500 és 600 mm között van.", "A hegységet keletről az Afrín-folyó határolja, amely fontos öntözővíz-forrás."],
      ro: ["Cea mai înaltă culme din Kurd-Dagh este muntele Huruz, având 1.269 de metri.", "În regiunea Afrin sunt cultivați aproximativ 18 milioane de arbori de măslin.", "Din punct de vedere geologic, munții aparțin ramificațiilor sudice ale sistemului Taurus.", "Denumirea 'Kurd-Dagh' este atestată în documentele otomane încă din secolul al XVII-lea.", "Precipitațiile medii anuale în zonă sunt estimate la aproximativ 500-600 mm.", "Masivul este mărginit la est de râul Afrin, principalul curs de apă al regiunii."],
      en: ["The highest point of Kurd-Dagh is Mount Huruz, standing at 1.269 meters.", "There are an estimated 18 million olive trees cultivated in the Afrin region.", "Geologically, the mountains are part of the southern spurs of the Taurus range.", "The name 'Kurd-Dagh' has appeared in Ottoman records since the 17th century.", "Average annual rainfall in the region is between 500 and 600 mm.", "The range is bounded to the east by the Afrin River, which supports local agriculture."],
      es: ["Longitud: 100 km", "Altitud máxima: 1.000 m", "Roca: caliza y basalto", "Población: aprox. 70% kurdos", "Precipitación anual: 400–600 mm", "Histórico: parte del reino Mitanni (siglo XV a.C.)"],
      pt: ["Comprimento: 100 km", "Altitude máxima: 1.000 m", "Rocha: calcário e basalto", "População: aprox. 70% curdos", "Precipitação anual: 400–600 mm", "Histórico: parte do reino de Mitanni (século XV a.C.)"],
      fr: ["Longueur : 100 km", "Altitude maximale : 1 000 m", "Roche : calcaire et basalte", "Population : environ 70 % de Kurdes", "Précipitations annuelles : 400–600 mm", "Historique : partie du royaume de Mitanni (XVe siècle av. J.-C.)"],
    },
  },
  {
    id: "jabal-samaan-relief-v2", "sights": {
      "de": [
            {
                  "name": "Refade",
                  "text": "Diese byzantinischen Ruinen in der Nähe von Qalaat Semaan sind für ihre verzierten Türstürze und antiken Wohnhäuser bekannt.",
                  "category": "historical",
                  "coords": [
                        36.804284,
                        36.318216
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Refade",
                  "text": "A Qalaat Semaan közelében található bizánci romok díszes szemöldökfáikról és ősi lakóházaikról ismertek.",
                  "category": "historical",
                  "coords": [
                        36.804284,
                        36.318216
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Refade",
                  "text": "Aceste ruine bizantine de lângă Qalaat Semaan sunt cunoscute pentru buiandrugii decorați și casele antice de locuit.",
                  "category": "historical",
                  "coords": [
                        36.804284,
                        36.318216
                  ]
            }
      ],
      "en": [
            {
                  "name": "Refade",
                  "text": "Located near Qalaat Semaan, these Byzantine ruins are known for their decorated door lintels and ancient residential houses.",
                  "category": "historical",
                  "coords": [
                        36.804284,
                        36.318216
                  ]
            }
      ]
},
    type: "mountain",
    parent: "SY-HL",
    coords: [36.833333, 36.333333],
    name: { de: "Dschebel Samaan", hu: "Simeon-hegy", ro: "Muntele Simeon", en: "Mount Simeon"},
    description: { de: "Der Dschebel Samaan ist ein Kalksteinmassiv, das für die Ruinen des Simeonsklosters und die umliegenden berühmten Toten Städte bekannt ist.", hu: "A Simeon-hegy egy mészkőmasszívum, amely a Szent Simeon-kolostor romjairól és a környező híres Holt városokról ismert.", ro: "Muntele Simeon este un masiv de calcar cunoscut pentru ruinele Mănăstirii Sfântului Simeon și pentru faimoasele Orașe Moarte din jur.", en: "Mount Simeon is a limestone massif known for the ruins of the Church of Saint Simeon Stylites and the surrounding famous Dead Cities." , es: "Jabal Samaan es un macizo de caliza conocido por las ruinas del monasterio de San Simeón y las famosas ciudades muertas circundantes.", pt: "Jabal Samaan é um maciço calcário conhecido pelas ruínas do mosteiro de São Simeão e pelas famosas cidades mortas circundantes.", fr: "Le Jabal Samaan est un massif calcaire connu pour les ruines du monastère Saint-Siméon et les célèbres villes mortes environnantes."},
    facts: {
      de: ["Höchster Punkt erreicht über 800 Meter", "Heimat byzantinischer Ruinenstätten", "Geologisch von Kalkstein geprägt"],
      hu: ["Legmagasabb pontja meghaladja a 800 métert", "Bizánci romok otthona", "Geológiailag a mészkő dominálja"],
      ro: ["Cel mai înalt punct depășește 800 de metri", "Găzduiește ruine bizantine", "Geologic dominat de calcar"],
      en: ["Highest point reaches over 800 meters", "Home to Byzantine ruins", "Geologically dominated by limestone"],
      es: ["El punto más alto alcanza más de 800 metros", "Hogar de ruinas bizantinas", "Geológicamente caracterizado por caliza"],
      pt: ["O ponto mais alto atinge mais de 800 metros", "Lar de ruínas bizantinas", "Geologicamente caracterizado por calcário"],
      fr: ["Le point culminant dépasse 800 mètres", "Abrite des ruines byzantines", "Géologiquement caractérisé par le calcaire"],
    }, image: "/poi-images/jabal-samaan-relief-v2.webp",
    descriptionAdvanced: {
      de: "Der Jabal Samaan, oder Berg Simeon, ist ein Kalksteinmassiv im Nordwesten Syriens, das westlich der Stadt Aleppo liegt. Die Region ist Teil des Belus-Massivs und zeichnet sich durch ein zerklüftetes Plateau aus, das eine durchschnittliche Höhe von 500 bis 600 Metern erreicht. Weltberühmt ist das Gebirge für seine 'Toten Städte', eine Gruppe von etwa 700 verlassenen Siedlungen aus der byzantinischen Zeit, die zum UNESCO-Welterbe gehören. Namensgeber ist der heilige Simeon Stylites, ein christlicher Asket, der im 5. Jahrhundert auf einer Säule lebte; die Ruinen der ihm gewidmeten monumentalen Basilika Qal’at Sim’an sind das bedeutendste Bauwerk der Region. Geologisch ist das Gebiet von Verkarstung geprägt, was den Ackerbau auf kleine, fruchtbare Taschen in den Tälern beschränkt. Trotz der kargen Landschaft war der Jabal Samaan über Jahrhunderte ein blühendes Zentrum des Olivenöl- und Weinhandels im Oströmischen Reich.",
      hu: "A Jabal Samaan, vagyis Simeon-hegy, egy mészkőfelföld Északnyugat-Szíriában, Aleppó városától nyugatra. A terület a Belus-masszívum része, és egy szabdalt fennsíkból áll, amelynek átlagos magassága 500 és 600 méter között van. A hegység világszerte híres a 'Holt városokról', amely egy mintegy 700 bizánci kori elhagyatott településből álló, UNESCO világörökségi helyszín. Nevét Oszlopos Szent Simeonról kapta, aki az 5. században egy oszlop tetején élve mutatta be aszketikus életmódját; a tiszteletére emelt monumentális bazilika, a Qal’at Sim’an, a régió legfontosabb építészeti emléke. Geológiailag a területet az erős karsztosodás jellemzi, ami a mezőgazdaságot a völgyek kisebb, termékeny foltjaira korlátozza. A kopár táj ellenére a Jabal Samaan évszázadokon át a Keletrómai Birodalom egyik virágzó olívaolaj- és borkereskedelmi központja volt.",
      ro: "Jabal Samaan, cunoscut și sub numele de Muntele Simeon, este un masiv calcaros situat în nord-vestul Siriei, la vest de orașul Alep. Regiunea face parte din masivul Belus și se prezintă sub forma unui platou fragmentat, cu o altitudine medie de 500-600 de metri. Munții sunt renumiți la nivel mondial pentru „Orașele Moarte”, un grup de aproximativ 700 de așezări abandonate din epoca bizantină, incluse în Patrimoniul Mondial UNESCO. Muntele poartă numele Sfântului Simeon Stilitul, un ascet creștin care a trăit pe o coloană în secolul al V-lea; ruinele bazilicii monumentale Qal’at Sim’an, dedicate acestuia, constituie cel mai important reper arheologic al zonei. Geologic, regiunea este marcată de fenomene carstice, limitând agricultura la micile porțiuni fertile din văi. În ciuda aspectului arid, Jabal Samaan a fost timp de secole un centru înfloritor al comerțului cu ulei de măsline și vin în cadrul Imperiului Bizantin.",
      en: "Jabal Samaan, or Mount Simeon, is a limestone massif in northwestern Syria located west of the city of Aleppo. Part of the broader Belus Massif, the region consists of a rugged plateau with an average elevation ranging between 500 and 600 meters. The mountains are world-renowned for hosting the 'Dead Cities,' a collection of approximately 700 abandoned Byzantine-era settlements that are recognized as a UNESCO World Heritage site. The range is named after Saint Simeon Stylites, a Christian ascetic who lived atop a pillar here in the 5th century; the ruins of the massive basilica built in his honor, Qal’at Sim’an, remain the most significant architectural landmark in the area. Geologically, the terrain is defined by karstification, which restricts agriculture to small fertile pockets in the valleys. Despite the barren appearance of the rocks, Jabal Samaan thrived for centuries as a major producer of olive oil and wine for the Eastern Roman Empire.",
      es: "Jabal Samaan (o Monte Simeón) es una montaña en el noroeste de Siria, a unos 25 km al noroeste de Alepo. Es conocida por el monasterio de San Simeón (Qal'at Sim'an), un importante centro de peregrinación bizantino del siglo V. La montaña alcanza una altura de 500 m. El monasterio fue construido alrededor de la columna de San Simeón el Estilita. El entorno es árido con matorral mediterráneo. La montaña es un destino turístico popular. La región se dedica a la agricultura, con cultivo de olivo y pistacho. La montaña se compone principalmente de piedra caliza.",
      pt: "Jabal Samaan (ou Monte Simeão) é uma montanha no noroeste da Síria, a cerca de 25 km a noroeste de Alepo. É conhecida pelo mosteiro de São Simeão (Qal'at Sim'an), um importante centro de peregrinação bizantino do século V. A montanha atinge uma altura de 500 m. O mosteiro foi construído em torno da coluna de São Simeão, o Estilita. O ambiente é árido com maquis mediterrâneo. A montanha é um destino turístico popular. A região dedica-se à agricultura, com o cultivo de azeitona e pistache. A montanha é composta principalmente por calcário.",
      fr: "Le Jabal Samaan (ou mont Siméon) est une montagne située dans le nord-ouest de la Syrie, à environ 25 km au nord-ouest d'Alep. Elle est connue pour le monastère Saint-Siméon (Qal'at Sim'an), un important centre de pèlerinage byzantin du Ve siècle. La montagne atteint une hauteur de 500 m. Le monastère a été construit autour de la colonne de Saint-Siméon Stylite. L'environnement est aride avec du maquis méditerranéen. La montagne est une destination touristique populaire. La région est agricole, avec des cultures d'oliviers et de pistachiers. La montagne est principalement composée de calcaire.",
    },
    factsAdvanced: {
      de: ["Die höchste Erhebung des Jabal Samaan erreicht 716 Meter über dem Meeresspiegel.", "Qal’at Sim’an war bei seiner Fertigstellung im Jahr 490 n. Chr. die größte Kirche der Welt.", "Die Region beherbergt einen Teil der 700 'Toten Städte' aus dem 1. bis 7. Jahrhundert.", "Geologisch gehört das Massiv zur nordsyrischen Kalksteinformation.", "Der heilige Simeon verbrachte 37 Jahre auf einer Säule im Zentrum des heutigen Ruinenfeldes.", "Die Olivenölproduktion war im 5. Jahrhundert die Haupteinnahmequelle der Region."],
      hu: ["A Jabal Samaan legmagasabb pontja 716 méterrel található a tengerszint felett.", "A Qal’at Sim’an bazilika 490-es elkészültekor a világ legnagyobb keresztény temploma volt.", "A régióban találhatók az 1. és 7. század között lakott 'Holt városok' maradványai.", "Geológiailag a masszívum az észak-szíriai mészkőformáció része.", "Oszlopos Szent Simeon 37 évet töltött egy oszlop tetején a mai rommező központjában.", "Az 5. században az olívaolaj-termelés volt a térség legfontosabb gazdasági ágazata."],
      ro: ["Cea mai înaltă altitudine din Jabal Samaan atinge 716 metri deasupra mării.", "Qal’at Sim’an era cea mai mare biserică din lume la momentul finalizării sale în anul 490 d.Hr.", "Regiunea găzduiește o parte din cele 700 de 'Orașe Moarte' datând din secolele I-VII.", "Geologic, masivul face parte din formațiunea calcaroasă a Siriei de Nord.", "Sfântul Simeon a petrecut 37 de ani pe o coloană în centrul actualului sit arheologic.", "Producția de ulei de măsline era principala sursă de bogăție a regiunii în secolul al V-lea."],
      en: ["The highest peak of Jabal Samaan reaches 716 meters above sea level.", "Qal’at Sim’an was the largest church in the world when completed in 490 AD.", "The region contains parts of the 700 'Dead Cities' dating from the 1st to 7th centuries.", "Geologically, the massif belongs to the North Syrian Limestone Massif.", "Saint Simeon spent 37 years atop a pillar at the center of the current ruin site.", "Olive oil production was the primary economic driver of the region during the 5th century."],
      es: ["Altitud: 500 m", "Distancia desde Alepo: 25 km", "Monasterio de San Simeón construido en 476 d.C.", "Columna de San Simeón: 18 m de altura (originalmente)", "Visitantes anuales: aprox. 100.000", "Suelo: meteorización de caliza"],
      pt: ["Altitude: 500 m", "Distância de Alepo: 25 km", "Mosteiro de São Simeão construído em 476 d.C.", "Coluna de São Simeão: 18 m de altura (originalmente)", "Visitantes anuais: aprox. 100.000", "Solo: intemperismo de calcário"],
      fr: ["Altitude : 500 m", "Distance d'Alep : 25 km", "Monastère Saint-Siméon construit en 476 apr. J.-C.", "Colonne de Saint-Siméon : 18 m de haut (à l'origine)", "Visiteurs annuels : environ 100 000", "Sol : altération calcaire"],
    },
  },
  {
    id: "hauran-plateau-relief-v2", "sights": {
      "de": [
            {
                  "name": "Khirbat Maysari",
                  "text": "Antike Basaltreste in der rauen, vulkanisch geprägten Landschaft des Hauran-Plateaus.",
                  "category": "historical",
                  "coords": [
                        36.195,
                        32.689167
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Khirbat Maysari",
                  "text": "Antik bazaltmaradványok a Hauran-fennsík zord, vulkanikus táján.",
                  "category": "historical",
                  "coords": [
                        36.195,
                        32.689167
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Khirbat Maysari",
                  "text": "Rămășițe antice de bazalt în peisajul vulcanic accidentat al platoului Hauran.",
                  "category": "historical",
                  "coords": [
                        36.195,
                        32.689167
                  ]
            }
      ],
      "en": [
            {
                  "name": "Khirbat Maysari",
                  "text": "Ancient basalt remains in the rugged volcanic landscape of the Hauran plateau.",
                  "category": "historical",
                  "coords": [
                        36.195,
                        32.689167
                  ]
            }
      ]
},
    type: "plateau",
    parent: "SY-DR",
    coords: [36.166667, 32.75],
    name: { de: "Hauran-Plateau", hu: "Haurán-fennsík", ro: "Platoul Hauran", en: "Hauran Plateau"},
    description: { de: "Das Hauran-Plateau im Süden Syriens ist eine vulkanische Hochebene, die für ihre fruchtbare rote Erde und historische Bedeutung bekannt ist.", hu: "A dél-szíriai Haurán-fennsík egy vulkanikus fennsík, amely termékeny vörös talajáról és történelmi jelentőségéről ismert.", ro: "Platoul Hauran din sudul Siriei este un platou vulcanic cunoscut pentru solul său roșu fertil și importanța istorică.", en: "The Hauran Plateau in southern Syria is a volcanic plateau known for its fertile red soil and historical significance." , es: "El Plateau de Hauran en el sur de Siria es una meseta volcánica conocida por su fértil tierra roja y su importancia histórica.", pt: "O Planalto de Hauran no sul da Síria é um planalto vulcânico conhecido pela sua terra vermelha fértil e importância histórica.", fr: "Le plateau du Hauran dans le sud de la Syrie est un plateau volcanique connu pour sa terre rouge fertile et son importance historique."},
    facts: {
      de: ["Vulkanischen Ursprungs", "Ehemalige römische Provinz", "Reich an Basaltgestein"],
      hu: ["Vulkanikus eredetű", "Egykori római provincia", "Bazaltkőzetekben gazdag"],
      ro: ["De origine vulcanică", "Fostă provincie romană", "Bogat în rocă bazaltică"],
      en: ["Of volcanic origin", "Former Roman province", "Rich in basalt rock"],
      es: ["De origen volcánico", "Antigua provincia romana", "Rico en roca basáltica"],
      pt: ["De origem vulcânica", "Antiga província romana", "Rico em rocha basáltica"],
      fr: ["D'origine volcanique", "Ancienne province romaine", "Riche en roche basaltique"],
    }, image: "/poi-images/hauran-plateau-relief-v2.webp",
    descriptionAdvanced: {
      de: "Das Hauran-Plateau ist eine ausgedehnte vulkanische Ebene im Südwesten Syriens, die sich bis nach Jordanien erstreckt. Geologisch ist die Region durch massives Basaltgestein geprägt, das aus vulkanischen Aktivitäten im Tertiär und Quartär stammt. Dank der Verwitterung dieses Basalts verfügt der Hauran über äußerst fruchtbare Böden, was ihn seit der Antike zur 'Kornkammer' Syriens machte. Das Plateau liegt durchschnittlich auf einer Höhe von 600 bis 900 Metern und wird im Osten durch das Jabal al-Druze-Gebirge begrenzt. Historisch war die Region ein dicht besiedeltes Gebiet des Römischen Reiches, wovon beeindruckende Ruinenstädte wie Bosra zeugen, die fast vollständig aus lokalem schwarzen Basalt errichtet wurden. Auch heute ist der Hauran ein kritisches Agrargebiet für den Anbau von Weizen und Gerste. Das semiaride Klima wird durch winterliche Niederschläge gemildert, die eine intensive landwirtschaftliche Nutzung ohne permanente Flüsse ermöglichen.",
      hu: "A Hauran-fennsík egy kiterjedt vulkanikus síkság Délnyugat-Szíriában, amely egészen Jordániáig nyúlik. Geológiailag a régiót a harmad- és negyedidőszaki vulkáni tevékenységből származó masszív bazaltkőzet jellemzi. A bazalt mállása révén a Hauran rendkívül termékeny talajjal rendelkezik, ami már az ókor óta Szíria 'magtárává' tette a területet. A fennsík átlagosan 600 és 900 méter közötti magasságban fekszik, keleti határát a Dzsebel al-Drúz hegység alkotja. Történelmileg a régió a Római Birodalom sűrűn lakott területe volt, amiről olyan lenyűgöző romvárosok tanúskodnak, mint Boszra, amelyet szinte teljesen helyi fekete bazaltból építettek. Napjainkban is a Hauran Szíria egyik legfontosabb mezőgazdasági térsége, ahol főként búzát és árpát termesztenek. A félsivatagi éghajlatot a téli csapadék teszi elviselhetővé, amely lehetővé teszi az intenzív földművelést állandó folyók hiányában is.",
      ro: "Platoul Hauran este o vastă câmpie vulcanică situată în sud-vestul Siriei, extinzându-se până în Iordania. Din punct de vedere geologic, regiunea este dominată de roci bazaltice masive rezultate din activitatea vulcanică din perioadele terțiară și cuaternară. Datorită eroziunii acestui bazalt, Hauran posedă soluri extrem de fertile, fiind considerat încă din antichitate „grânarul” Siriei. Platoul are o altitudine medie de 600-900 de metri și este delimitat la est de Munții Jabal al-Druze. Istoric, regiunea a fost o zonă dens populată a Imperiului Roman, fapt demonstrat de orașele antice precum Bosra, construite aproape integral din bazalt negru local. Astăzi, Hauran rămâne o zonă agricolă critică pentru cultivarea grâului și orzului. Climatul semiarid este temperat de precipitațiile de iarnă, care permit o agricultură intensivă în absența unor râuri permanente majore.",
      en: "The Hauran Plateau is an expansive volcanic plain in southwestern Syria, extending across the border into northern Jordan. Geologically, the region is defined by massive basalt deposits resulting from volcanic activity during the Tertiary and Quaternary periods. The weathering of this basalt has produced exceptionally fertile soils, earning the Hauran the reputation of being Syria's 'granary' since ancient times. The plateau sits at an average elevation of 600 to 900 meters and is bordered to the east by the Jabal al-Druze mountain range. Historically, the region was a densely populated province of the Roman Empire, evidenced by remarkable archaeological sites like Bosra, which were constructed almost entirely from local black basalt. Today, the Hauran remains a critical agricultural zone for wheat and barley production. Its semi-arid climate is mitigated by winter rainfall, allowing for intensive farming despite the lack of major permanent rivers.",
      es: "El Plateau de Hauran se encuentra en el suroeste de Siria, entre Damasco y la frontera jordana. Es una meseta alta basáltica con una altitud media de 800-1.000 m. La meseta es fértil y conocida por el cultivo de vino y cereales. La ciudad de As-Suwayda es el centro cultural de los drusos. La región tiene numerosas ruinas romanas, incluido Bosra con su teatro romano bien conservado. La precipitación anual es de 300-500 mm. Los suelos son profundos debido a la erosión del basalto. Económicamente importantes son la agricultura y el turismo.",
      pt: "O Planalto de Hauran situa-se no sudoeste da Síria, entre Damasco e a fronteira jordana. É um planalto alto basáltico com uma altitude média de 800-1.000 m. O planalto é fértil e conhecido pelo cultivo de vinho e cereais. A cidade de As-Suwayda é o centro cultural dos drusos. A região tem numerosas ruínas romanas, incluindo Bosra com o seu teatro romano bem preservado. A precipitação anual é de 300-500 mm. Os solos são profundos devido à erosão do basalto. Economicamente importantes são a agricultura e o turismo.",
      fr: "Le plateau du Hauran se situe dans le sud-ouest de la Syrie, entre Damas et la frontière jordanienne. C'est un plateau basaltique d'une altitude moyenne de 800 à 1 000 m. Le plateau est fertile et connu pour sa culture du vin et des céréales. La ville d'As-Suwayda est le centre culturel des druzes. La région compte de nombreuses ruines romaines, dont Bosra avec son théâtre romain bien conservé. Les précipitations annuelles sont de 300 à 500 mm. Les sols sont profonds en raison de l'érosion du basalte. L'agriculture et le tourisme y sont économiquement importants.",
    },
    factsAdvanced: {
      de: ["Das Hauran-Plateau umfasst eine Fläche von über 10.000 Quadratkilometern.", "Geologisch besteht die Oberfläche aus Lavaströmen, die bis zu 1.000 Meter dick sind.", "Die antike Stadt Bosra, ein UNESCO-Welterbe, liegt im Herzen des Hauran.", "Das Plateau lieferte in der römischen Kaiserzeit Getreide für die gesamte Provinz Arabia.", "Der charakteristische schwarze Basalt ist das Hauptbaumaterial der historischen Architektur.", "Die Region erhält im Durchschnitt 250 bis 400 mm Niederschlag pro Jahr."],
      hu: ["A Hauran-fennsík területe meghaladja a 10 000 négyzetkilométert.", "Geológiailag a felszínt helyenként 1000 méter vastagságú lávafolyások alkotják.", "Boszra ókori városa, amely UNESCO világörökség, a Hauran szívében található.", "A római császárkorban a fennsík látta el gabonával Arabia provinciát.", "A jellegzetes fekete bazalt a történelmi építészet elsődleges alapanyaga.", "A régió átlagos éves csapadékmennyisége 250 és 400 mm között mozog."],
      ro: ["Platoul Hauran acoperă o suprafață de peste 10.000 de kilometri pătrați.", "Geologic, suprafața este compusă din straturi de lavă care ating grosimi de 1.000 de metri.", "Orașul antic Bosra, sit UNESCO, este situat în centrul platoului Hauran.", "În epoca romană, platoul furniza grâne pentru întreaga provincie Arabia.", "Bazaltul negru caracteristic este principalul material de construcție istoric din zonă.", "Regiunea primește în medie între 250 și 400 mm de precipitații anual."],
      en: ["The Hauran Plateau covers an area of more than 10,000 square kilometers.", "Geologically, the surface is formed by lava flows that can reach 1,000 meters in thickness.", "The ancient city of Bosra, a UNESCO World Heritage site, is located in the Hauran.", "During the Roman era, the plateau supplied grain to the entire province of Arabia.", "The characteristic black basalt is the primary building material for historical architecture.", "The region receives an average of 250 to 400 mm of rainfall per year."],
      es: ["Altura: 800-1.000 m", "Consiste en basalto", "Teatro romano en Bosra: capacidad para 15.000 espectadores", "Precipitación anual: 300-500 mm", "Centro de población: As-Suwayda (100.000 hab.)", "Viticultura desde la época romana (siglo I d.C.)"],
      pt: ["Altitude: 800-1.000 m", "Consiste em basalto", "Teatro romano em Bosra: capacidade para 15.000 espectadores", "Precipitação anual: 300-500 mm", "Centro populacional: As-Suwayda (100.000 hab.)", "Viticultura desde a época romana (século I d.C.)"],
      fr: ["Altitude : 800-1 000 m", "Composé de basalte", "Théâtre romain à Bosra : capacité de 15 000 spectateurs", "Précipitations annuelles : 300-500 mm", "Centre de population : As-Suwayda (100 000 hab.)", "Viticulture depuis l'époque romaine (Ier siècle apr. J.-C.)"],
    },
  },
  {
    id: "al-safa-relief-v2", "sights": {
      "de": [
            {
                  "name": "Khirbat al Bayda'",
                  "text": "Ruinen aus schwarzem Basalt in der vulkanischen Kraterlandschaft der Al-Safa-Region.",
                  "category": "historical",
                  "coords": [
                        37.294851,
                        33.01521
                  ]
            },
            {
                  "name": "Qasr el-Abyad",
                  "text": "Als „Weißes Schloss“ bekannt, liegen diese Ruinen am Rande des Safa-Vulkanfeldes.",
                  "category": "historical",
                  "coords": [
                        37.291426,
                        33.015559
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Khirbat al Bayda'",
                  "text": "Fekete bazaltból épült romok az Al-Safa régió vulkanikus krátervidékén.",
                  "category": "historical",
                  "coords": [
                        37.294851,
                        33.01521
                  ]
            },
            {
                  "name": "Qasr el-Abyad",
                  "text": "A „Fehér Kastélyként” ismert romok a Safa-vulkáni mező szélén találhatók.",
                  "category": "historical",
                  "coords": [
                        37.291426,
                        33.015559
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Khirbat al Bayda'",
                  "text": "Ruine din bazalt negru situate în peisajul vulcanic al regiunii Al-Safa.",
                  "category": "historical",
                  "coords": [
                        37.294851,
                        33.01521
                  ]
            },
            {
                  "name": "Qasr el-Abyad",
                  "text": "Cunoscute sub numele de „Castelul Alb”, aceste ruine se află la marginea câmpului vulcanic Safa.",
                  "category": "historical",
                  "coords": [
                        37.291426,
                        33.015559
                  ]
            }
      ],
      "en": [
            {
                  "name": "Khirbat al Bayda'",
                  "text": "Basalt ruins of a historical settlement in the volcanic landscape of the Al-Safa region.",
                  "category": "historical",
                  "coords": [
                        37.294851,
                        33.01521
                  ]
            },
            {
                  "name": "Qasr el-Abyad",
                  "text": "Known as the 'White Castle,' these ruins sit on the edge of the Safa volcanic field.",
                  "category": "historical",
                  "coords": [
                        37.291426,
                        33.015559
                  ]
            }
      ]
},
    type: "plateau",
    parent: "SY-SU",
    coords: [37.25, 33.083333],
    name: { de: "Al-Safa", hu: "Al-Szafa", ro: "Al-Safa", en: "Al-Safa"},
    description: { de: "Al-Safa ist ein zerklüftetes vulkanisches Lavafeld südöstlich von Damaskus, das durch seine schwarze, mondähnliche Landschaft besticht.", hu: "Az Al-Szafa egy zord, vulkanikus lávamező Damaszkusztól délkeletre, amely fekete, holdszerű tájával nyűgöz le.", ro: "Al-Safa este un câmp accidentat de lavă vulcanică, situat la sud-est de Damasc, care impresionează prin peisajul său negru, asemănător lunii.", en: "Al-Safa is a rugged volcanic lava field southeast of Damascus, striking for its black, moon-like landscape." , es: "Al-Safa es un campo de lava volcánica accidentado al sureste de Damasco que impresiona por su paisaje negro similar al de la luna.", pt: "Al-Safa é um campo de lava vulcânica acidentado a sudeste de Damasco que impressiona pela sua paisagem negra semelhante à da lua.", fr: "Al-Safa est un champ de lave volcanique accidenté au sud-est de Damas qui impressionne par son paysage noir rappelant celui de la Lune."},
    facts: {
      de: ["Gilt als unwegsames Gelände", "Besteht aus erstarrten Lavaströmen", "Wenig Vegetation vorhanden"],
      hu: ["Járhatatlan terepnek számít", "Megszilárdult lávafolyamokból áll", "Kevés növényzet található itt"],
      ro: ["Considerat teren accidentat", "Alcătuit din fluxuri de lavă solidificată", "Vegetație redusă"],
      en: ["Considered rugged terrain", "Consists of solidified lava flows", "Little vegetation present"],
      es: ["Considerado terreno difícil", "Consiste en flujos de lava solidificados", "Poca vegetación presente"],
      pt: ["Considerado terreno de difícil acesso", "Consiste em fluxos de lava solidificados", "Pouca vegetação presente"],
      fr: ["Considéré comme un terrain difficile", "Composé de coulées de lave solidifiées", "Peu de végétation présente"],
    }, image: "/poi-images/al-safa-relief-v2.webp",
    descriptionAdvanced: {
      de: "Al-Safa ist ein weites, schwarzes Vulkanfeld im Süden Syriens, östlich des Jabal al-Druze-Gebirges gelegen. Es handelt sich um eines der größten Lavafelder der syrisch-arabischen Wüste und ist Teil der größeren Harrat Ash-Shamah-Formation. Die Landschaft wird von erstarrten Lavaströmen, Basaltblöcken und zahlreichen kleinen Vulkankegeln dominiert, die der Region ein beinahe außerirdisches Aussehen verleihen. Geologisch sind die Eruptionen hier vergleichsweise jung; einige Lavaströme stammen aus dem Holozän, wobei historische Berichte sogar Aktivitäten im 19. Jahrhundert vermuten lassen. Aufgrund der extremen Trockenheit und des schroffen Geländes ist das Gebiet fast unbewohnt und diente historisch oft als Rückzugsgebiet für Beduinenstämme oder Rebellen während militärischer Konflikte. Die Region beherbergt zudem Tausende von safaitischen Inschriften, die von antiken Nomaden in den Basalt geritzt wurden und wertvolle Einblicke in die vorislamische Geschichte liefern.",
      hu: "Az Al-Safa egy hatalmas, fekete vulkáni mező Dél-Szíriában, a Dzsebel al-Drúz hegységtől keletre. Ez a szír-arab sivatag egyik legnagyobb lávamezője, és a kiterjedtebb Harrat Ash-Shamah formáció része. A tájat megkövült lávafolyások, bazalttömbök és számos kisebb vulkáni kúp uralja, amelyek szinte földönkívüli megjelenést kölcsönöznek a régiónak. Geológiailag az itt történt kitörések viszonylag fiatalok; egyes lávafolyások a holocén korszakból származnak, sőt történelmi feljegyzések a 19. században is említenek aktivitást. A szélsőséges szárazság és a nehéz terep miatt a terület szinte lakatlan, és történelmileg gyakran szolgált menedékként beduin törzsek vagy lázadó csoportok számára. A régió emellett több ezer szafaita feliratot őriz, amelyeket az ókori nomádok vésték a bazaltba, értékes betekintést nyújtva az iszlám előtti történelembe.",
      ro: "Al-Safa este un vast câmp vulcanic negru situat în sudul Siriei, la est de Munții Jabal al-Druze. Acesta reprezintă unul dintre cele mai mari câmpuri de lavă din deșertul siriano-arab și face parte din formațiunea mai extinsă Harrat Ash-Shamah. Peisajul este dominat de fluxuri de lavă solidificată, blocuri de bazalt și numeroase conuri vulcanice mici, oferind regiunii un aspect aproape extraterestru. Din punct de vedere geologic, erupțiile de aici sunt relativ recente; unele scurgeri de lavă datează din Holocen, iar relatările istorice sugerează chiar activitate în secolul al XIX-lea. Din cauza aridității extreme și a terenului accidentat, zona este aproape nelocuită, servind istoric ca refugiu pentru triburile de beduini sau grupări de rebeli. Regiunea adăpostește, de asemenea, mii de inscripții safaitice, gravate în bazalt de nomazii antici, oferind informații prețioase despre istoria pre-islamică.",
      en: "Al-Safa is a vast, black volcanic field in southern Syria, located to the east of the Jabal al-Druze mountain range. It is one of the largest lava fields in the Syrian-Arabian Desert and forms part of the broader Harrat Ash-Shamah formation. The landscape is dominated by solidified lava flows, basalt boulders, and numerous small volcanic cones, giving the region an almost extraterrestrial appearance. Geologically, the eruptions here are relatively recent; some lava flows date back to the Holocene, with historical accounts even suggesting activity as late as the 19th century. Due to the extreme aridity and rugged terrain, the area is virtually uninhabited and has historically served as a hideout for Bedouin tribes or rebel groups during military conflicts. The region also hosts thousands of Safaitic inscriptions carved into the basalt by ancient nomads, providing invaluable insights into pre-Islamic history and culture.",
      es: "Al-Safa es un campo volcánico en el sur de Siria, a unos 90 km al sureste de Damasco. Consta de numerosos conos volcánicos, campos de lava y mesetas de basalto. La altura varía entre 600 y 1.000 m. Las últimas erupciones volcánicas tuvieron lugar en el Holoceno. El paisaje es árido y seco, con escasa vegetación. El área es utilizada por beduinos para el pastoreo. Al-Safa es conocida por su soledad y como un lugar misterioso. Hay algunos sitios arqueológicos de la época romana y nabatea. Las precipitaciones anuales son inferiores a 150 mm.",
      pt: "Al-Safa é um campo vulcânico no sul da Síria, a cerca de 90 km a sudeste de Damasco. Consiste em numerosos cones vulcânicos, campos de lava e planaltos de basalto. A altitude varia entre 600 e 1.000 m. As últimas erupções vulcânicas ocorreram no Holoceno. A paisagem é árida e seca, com escassa vegetação. A área é utilizada por beduínos para o pastoreio. Al-Safa é conhecida pela sua solidão e como um lugar misterioso. Existem alguns sítios arqueológicos da época romana e nabateia. As precipitações anuais são inferiores a 150 mm.",
      fr: "Al-Safa est un champ volcanique dans le sud de la Syrie, à environ 90 km au sud-est de Damas. Il se compose de nombreux cônes volcaniques, champs de lave et plateaux basaltiques. L'altitude varie entre 600 et 1 000 m. Les dernières éruptions volcaniques ont eu lieu à l'Holocène. Le paysage est aride et sec, avec une végétation clairsemée. La zone est utilisée par les Bédouins pour le pâturage. Al-Safa est connue pour sa solitude et comme un lieu mystérieux. Il existe quelques sites archéologiques datant de l'époque romaine et nabatéenne. Les précipitations annuelles sont inférieures à 150 mm.",
    },
    factsAdvanced: {
      de: ["Das Vulkanfeld Al-Safa umfasst eine Fläche von etwa 220 Quadratkilometern.", "Die Lavaströme stammen teilweise aus Ausbrüchen zwischen 1840 und 1860.", "In der Region wurden über 20.000 safaitische Felsinschriften gefunden.", "Der höchste Vulkankegel im Feld erreicht eine Höhe von etwa 980 Metern.", "Das Gebiet ist Teil des größten basaltischen Plateaus der Welt, der Harrat Ash-Shamah.", "Wegen der porösen Gesteinsstruktur versickert Regenwasser sofort im Boden."],
      hu: ["Az Al-Safa vulkáni mező körülbelül 220 négyzetkilométer területet fed le.", "A lávafolyások egy része az 1840 és 1860 közötti kitörésekből származik.", "A régióban több mint 20 000 szafaita sziklafeliratot találtak a kutatók.", "A mező legmagasabb vulkáni kúpja körülbelül 980 méter magas.", "A terület a világ legnagyobb bazaltfennsíkjának, a Harrat Ash-Shamahnak a része.", "A kőzet porózus szerkezete miatt a csapadékvíz azonnal a föld alá szivárog."],
      ro: ["Câmpul vulcanic Al-Safa acoperă o suprafață de aproximativ 220 de kilometri pătrați.", "Scurgerile de lavă provin parțial din erupții care au avut loc între 1840 și 1860.", "În regiune au fost descoperite peste 20.000 de inscripții safaitice pe stânci.", "Cel mai înalt con vulcanic din câmp atinge o altitudine de circa 980 de metri.", "Zona face parte din Harrat Ash-Shamah, cel mai mare platou bazaltic din lume.", "Datorită structurii poroase a rocii, apa de ploaie se infiltrează imediat în sol."],
      en: ["The Al-Safa volcanic field covers an area of approximately 220 square kilometers.", "Lava flows partly originate from eruptions recorded between 1840 and 1860.", "Over 20,000 Safaitic rock inscriptions have been discovered in the region.", "The highest volcanic cone in the field reaches an elevation of about 980 meters.", "The area is part of Harrat Ash-Shamah, the largest basaltic plateau on Earth.", "Due to the porous nature of the rock, rainwater infiltrates the ground immediately."],
      es: ["Área: aprox. 1.500 km²", "Número de conos volcánicos: más de 50", "Cono más alto: 1.058 m", "Última erupción: hace unos 10.000 años", "Precipitación anual: menos de 150 mm", "Sitios arqueológicos: inscripciones nabateas del siglo II d.C."],
      pt: ["Área: aprox. 1.500 km²", "Número de cones vulcânicos: mais de 50", "Cone mais alto: 1.058 m", "Última erupção: há cerca de 10.000 anos", "Precipitação anual: menos de 150 mm", "Sítios arqueológicos: inscrições nabateias do século II d.C."],
      fr: ["Superficie : env. 1 500 km²", "Nombre de cônes volcaniques : plus de 50", "Cône le plus haut : 1 058 m", "Dernière éruption : il y a environ 10 000 ans", "Précipitations annuelles : moins de 150 mm", "Sites archéologiques : inscriptions nabatéennes du IIe siècle apr. J.-C."],
    },
  },
  {
    id: "al-lajat-relief-v2", "sights": {
      "de": [
            {
                  "name": "Kawm ar Rumman",
                  "text": "Antike Ruinen auf dem zerklüfteten Lavaplateau der Al-Lajat-Region.",
                  "category": "historical",
                  "coords": [
                        36.271496,
                        32.962629
                  ]
            },
            {
                  "name": "Zebire",
                  "text": "Verlassene Steinstrukturen inmitten der schwarzen Basaltfelsen des Leja-Gebiets.",
                  "category": "historical",
                  "coords": [
                        36.301217,
                        32.98687
                  ]
            },
            {
                  "name": "Burj Janin",
                  "text": "Ein historischer Ruinenhügel, der Zeugnis von der frühen Besiedlung dieser kargen Steinwüste ablegt.",
                  "category": "historical",
                  "coords": [
                        36.27223,
                        32.982158
                  ]
            },
            {
                  "name": "Al Khider Masjed",
                  "text": "Eine traditionelle muslimische Moschee, die der lokalen Gemeinschaft in der Al-Lajat-Ebene dient.",
                  "category": "landmark",
                  "coords": [
                        36.341921,
                        32.842989
                  ]
            },
            {
                  "name": "Church of St. George",
                  "text": "Eine historische christliche Kirche, die das religiöse Erbe dieser ländlichen Region bewahrt.",
                  "category": "landmark",
                  "coords": [
                        36.256691,
                        32.873241
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Kawm ar Rumman",
                  "text": "Ókori romok az Al-Ladzsat régió kietlen, vulkanikus bazaltfennsíkján.",
                  "category": "historical",
                  "coords": [
                        36.271496,
                        32.962629
                  ]
            },
            {
                  "name": "Zebire",
                  "text": "Elhagyatott kőépítmények a Leja-vidék fekete bazaltsziklái között.",
                  "category": "historical",
                  "coords": [
                        36.301217,
                        32.98687
                  ]
            },
            {
                  "name": "Burj Janin",
                  "text": "Történelmi romterület, amely e kietlen kősivatag korai benépesüléséről tanúskodik.",
                  "category": "historical",
                  "coords": [
                        36.27223,
                        32.982158
                  ]
            },
            {
                  "name": "Al Khider Masjed",
                  "text": "Hagyományos muszlim mecset, amely az Al-Ladzsat-síkság helyi közösségét szolgálja.",
                  "category": "landmark",
                  "coords": [
                        36.341921,
                        32.842989
                  ]
            },
            {
                  "name": "Church of St. George",
                  "text": "Történelmi keresztény templom, amely a vidéki régió vallási örökségét őrzi.",
                  "category": "landmark",
                  "coords": [
                        36.256691,
                        32.873241
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Kawm ar Rumman",
                  "text": "Ruine antice situate pe platoul vulcanic accidentat din regiunea Al-Lajat.",
                  "category": "historical",
                  "coords": [
                        36.271496,
                        32.962629
                  ]
            },
            {
                  "name": "Zebire",
                  "text": "Structuri de piatră abandonate printre stâncile de bazalt negru din zona Leja.",
                  "category": "historical",
                  "coords": [
                        36.301217,
                        32.98687
                  ]
            },
            {
                  "name": "Burj Janin",
                  "text": "Un sit istoric cu ruine ce atestă popularea timpurie a acestui deșert de piatră.",
                  "category": "historical",
                  "coords": [
                        36.27223,
                        32.982158
                  ]
            },
            {
                  "name": "Al Khider Masjed",
                  "text": "O moschee musulmană tradițională care deservește comunitatea locală din câmpia Al-Lajat.",
                  "category": "landmark",
                  "coords": [
                        36.341921,
                        32.842989
                  ]
            },
            {
                  "name": "Church of St. George",
                  "text": "O biserică creștină istorică ce păstrează moștenirea religioasă a acestei regiuni rurale.",
                  "category": "landmark",
                  "coords": [
                        36.256691,
                        32.873241
                  ]
            }
      ],
      "en": [
            {
                  "name": "Kawm ar Rumman",
                  "text": "Ancient ruins situated on the rugged lava plateau of the Al-Lajat region.",
                  "category": "historical",
                  "coords": [
                        36.271496,
                        32.962629
                  ]
            },
            {
                  "name": "Zebire",
                  "text": "Abandoned stone structures amidst the black basalt rocks of the Leja area.",
                  "category": "historical",
                  "coords": [
                        36.301217,
                        32.98687
                  ]
            },
            {
                  "name": "Burj Janin",
                  "text": "A historic ruin site bearing witness to early settlement in this barren stone desert.",
                  "category": "historical",
                  "coords": [
                        36.27223,
                        32.982158
                  ]
            },
            {
                  "name": "Al Khider Masjed",
                  "text": "A traditional Muslim mosque serving the local community in the Al-Lajat plain.",
                  "category": "landmark",
                  "coords": [
                        36.341921,
                        32.842989
                  ]
            },
            {
                  "name": "Church of St. George",
                  "text": "A historic Christian church preserving the religious heritage of this rural region.",
                  "category": "landmark",
                  "coords": [
                        36.256691,
                        32.873241
                  ]
            }
      ]
},
    type: "plateau",
    parent: "SY-SU",
    coords: [36.333333, 32.916667],
    name: { de: "Al-Ladscha", hu: "Al-Ladzsa", ro: "Al-Lajat", en: "Al-Lajat"},
    description: { de: "Al-Ladscha, auch als Lejah bekannt, ist ein stark zerklüftetes Basaltplateau, das in der Antike als Zufluchtsort für Banditen und Rebellen diente.", hu: "Az Al-Ladzsa egy erősen tagolt bazaltfennsík, amely az ókorban banditák és lázadók menedékhelyéül szolgált.", ro: "Al-Lajat este un platou bazaltic extrem de accidentat care a servit ca refugiu pentru bandiți și rebeli în antichitate.", en: "Al-Lajat, also known as Lejah, is a highly rugged basalt plateau that served as a refuge for bandits and rebels in antiquity." , es: "Al-Lajat, también conocida como Lejah, es una meseta de basalto fuertemente accidentada que sirvió en la antigüedad como refugio para bandidos y rebeldes.", pt: "Al-Lajat, também conhecida como Lejah, é um planalto basáltico fortemente acidentado que serviu na antiguidade como refúgio para bandidos e rebeldes.", fr: "Al-Lajat, également connue sous le nom de Lejah, est un plateau basaltique très accidenté qui servait dans l'Antiquité de refuge aux bandits et aux rebelles."},
    facts: {
      de: ["Schwer zugängliches Gebiet", "Historisch als Trachonitis bekannt", "Geologische Barriere im Süden"],
      hu: ["Nehezen megközelíthető terület", "Történelmileg Trachonitis néven ismert", "Geológiai akadály délen"],
      ro: ["Zonă greu accesibilă", "Cunoscută istoric ca Trachonitis", "Barieră geologică în sud"],
      en: ["Difficult to access area", "Historically known as Trachonitis", "Geological barrier in the south"],
      es: ["Área de difícil acceso", "Históricamente conocida como Trachonitis", "Barrera geológica en el sur"],
      pt: ["Área de difícil acesso", "Historicamente conhecida como Trachonitis", "Barreira geológica no sul"],
      fr: ["Zone difficile d'accès", "Historiquement connue sous le nom de Trachonitis", "Barrière géologique au sud"],
    }, image: "/poi-images/al-lajat-relief-v2.webp",
    descriptionAdvanced: {
      de: "Al-Lajat ist ein einzigartiges vulkanisches Plateau im Südwesten Syriens, das sich nördlich des Jabal al-Druze-Gebirges erstreckt. Geologisch besteht es aus einer erstarrten Lavamasse, die vor etwa 2 bis 5 Millionen Jahren durch Eruptionen entstand und heute eine extrem zerklüftete, scharfkantige Oberfläche aus schwarzem Basalt bildet. Aufgrund dieser unwegsamen Topographie wird Al-Lajat oft als 'Naturfestung' bezeichnet; seit der Antike diente es als uneinnehmbares Versteck für Rebellen und Verfolgte. Trotz der kargen Erscheinung beherbergt das Plateau eine überraschende Artenvielfalt und wurde 2009 zum ersten Biosphärenreservat Syriens ernannt. Historisch ist die Region eng mit den antiken Königreichen der Ituräer und Nabatäer verbunden, wobei Orte wie Shahba von der römischen Architektur in Basalt zeugen. Die Bewohner nutzen kleine fruchtbare Bodentaschen zwischen den Felsen für subsistenzwirtschaftliche Landwirtschaft und Weidehaltung, während Wasser in antiken Zisternen gesammelt wird.",
      hu: "Az Al-Lajat egy egyedülálló vulkanikus fennsík Délnyugat-Szíriában, amely a Dzsebel al-Drúz hegységtől északra terül el. Geológiailag egy megkövült lávatömegből áll, amely körülbelül 2-5 millió évvel ezelőtti kitörések során jött létre, és ma rendkívül szabdalt, éles peremű fekete bazaltfelszínt alkot. Emiatt a járhatatlan domborzat miatt az Al-Lajatot gyakran 'természetes erődnek' nevezik; az ókor óta bevehetetlen búvóhelyként szolgált lázadók és üldözöttek számára. Kopár megjelenése ellenére a fennsík meglepő biológiai sokféleséggel rendelkezik, és 2009-ben Szíria első bioszféra-rezervátumává nyilvánították. Történelmileg a régió szorosan kötődik az itureusok és nabateusok ókori királyságaihoz, Sahba városa pedig a római bazaltépítészet kiváló példája. A lakosok a sziklák közötti kis termékeny foltokat használják mezőgazdasági művelésre és állattartásra, a vizet pedig ókori ciszternákban gyűjtik.",
      ro: "Al-Lajat este un platou vulcanic unic situat în sud-vestul Siriei, întinzându-se la nord de Munții Jabal al-Druze. Geologic, acesta este format dintr-o masă de lavă solidificată, rezultată din erupții care au avut loc acum 2 până la 5 milioane de ani, formând astăzi o suprafață extrem de accidentată de bazalt negru. Din cauza topografiei sale dificile, Al-Lajat este adesea numit o „fortăreață naturală”, servind încă din antichitate ca ascunzătoare inexpugnabilă pentru rebeli și fugari. În ciuda aspectului arid, platoul găzduiește o biodiversitate surprinzătoare și a fost declarat prima Rezervație a Biosferei din Siria în anul 2009. Istoric, regiunea este legată de regatele antice ale itureilor și nabateenilor, orașul Shahba fiind un exemplu remarcabil de arhitectură romană în bazalt. Locuitorii utilizează mici porțiuni fertile între stânci pentru agricultură de subzistență, colectând apa în cisterne antice.",
      en: "Al-Lajat is a unique volcanic plateau in southwestern Syria, stretching north of the Jabal al-Druze mountain range. Geologically, it consists of a solidified mass of lava that erupted between 2 and 5 million years ago, creating an extremely rugged and sharp-edged surface of black basalt. Because of this impassable topography, Al-Lajat is often referred to as a 'natural fortress' and has served as an impregnable hideout for rebels and refugees since ancient times. Despite its barren appearance, the plateau supports surprising biodiversity and was designated as Syria's first Biosphere Reserve in 2009. Historically, the region is closely tied to the ancient kingdoms of the Itureans and Nabataeans, with sites like Shahba showcasing Roman-era basalt architecture. Local residents utilize small fertile pockets between the rocks for subsistence farming and grazing, while relying on ancient cisterns to collect and store precious rainwater.",
      es: "Al-Lajat (también región de Lajat) es un desierto de lava basáltica en el sur de Siria, al sur de Damasco. La región tiene unos 200 km² y está cubierta de bloques de basalto negro rugosos. La altura oscila entre los 600 y los 900 m. Debido al terreno difícil, la región fue históricamente un refugio para minorías, incluidos cristianos y drusos. Hay muchos pueblos ocultos con estructuras de piedra y cuevas. La agricultura es difícil, pero en las depresiones se practica la agricultura de secano. Al-Lajat es conocida por su arquitectura única y su cultura remota. La precipitación anual es de 200-300 mm.",
      pt: "Al-Lajat (também região de Lajat) é um deserto de lava basáltica no sul da Síria, a sul de Damasco. A região tem cerca de 200 km² e está coberta de blocos de basalto negro rugosos. A altitude varia entre 600 e 900 m. Devido ao terreno difícil, a região foi historicamente um refúgio para minorias, incluindo cristãos e drusos. Existem muitas aldeias escondidas com estruturas de pedra e cavernas. A agricultura é difícil, mas nas depressões pratica-se a agricultura de sequeiro. Al-Lajat é conhecida pela sua arquitetura única e cultura remota. A precipitação anual é de 200-300 mm.",
      fr: "Al-Lajat (aussi région du Lajat) est un désert de lave basaltique dans le sud de la Syrie, au sud de Damas. La région s'étend sur environ 200 km² et est couverte de blocs de basalte noir rugueux. L'altitude varie entre 600 et 900 m. En raison du terrain difficile, la région fut historiquement un refuge pour des minorités, dont les chrétiens et les druzes. Il existe de nombreux villages cachés avec des structures en pierre et des grottes. L'agriculture est difficile, mais dans les dépressions, on pratique l'agriculture pluviale. Al-Lajat est connue pour son architecture unique et sa culture isolée. Les précipitations annuelles sont de 200 à 300 mm.",
    },
    factsAdvanced: {
      de: ["Al-Lajat erstreckt sich über eine Fläche von etwa 900 Quadratkilometern.", "Das Plateau wurde 2009 zum UNESCO-Biosphärenreservat erklärt.", "Die durchschnittliche Höhe des Plateaus liegt bei etwa 600 bis 700 Metern.", "Al-Lajat bedeutet im Arabischen so viel wie 'Zufluchtsort'.", "In der Römerzeit wurde das Gebiet als 'Trachonitis' bezeichnet.", "Die Basaltformationen sind teilweise so scharfkantig, dass sie Schuhe zerstören können."],
      hu: ["Az Al-Lajat fennsíkja körülbelül 900 négyzetkilométer területet ölel fel.", "A fennsíkot 2009-ben UNESCO bioszféra-rezervátumnak nyilvánították.", "A fennsík átlagos tengerszint feletti magassága 600 és 700 méter között van.", "Az 'Al-Lajat' szó arabul 'menedékhelyet' vagy 'búvóhelyet' jelent.", "A római korban a területet 'Trachonitis' néven ismerték.", "A bazaltformációk helyenként olyan élesek, hogy képesek tönkretenni a lábbeliket."],
      ro: ["Al-Lajat acoperă o suprafață de aproximativ 900 de kilometri pătrați.", "Platoul a fost declarat Rezervație a Biosferei UNESCO în anul 2009.", "Altitudinea medie a platoului este de aproximativ 600-700 de metri.", "Numele 'Al-Lajat' înseamnă în limba arabă 'refugiu' sau 'loc de ascuns'.", "În perioada romană, teritoriul era cunoscut sub denumirea de 'Trachonitis'.", "Formațiunile de bazalt sunt uneori atât de ascuțite încât pot distruge încălțămintea."],
      en: ["Al-Lajat covers an area of approximately 900 square kilometers.", "The plateau was designated as a UNESCO Biosphere Reserve in 2009.", "The average elevation of the plateau is between 600 and 700 meters.", "In Arabic, 'Al-Lajat' translates roughly to 'place of refuge'.", "During the Roman era, the region was officially known as 'Trachonitis'.", "The basalt formations are sometimes so sharp that they can cut through footwear."],
      es: ["Área: aprox. 200 km²", "Altura: 600-900 m", "Consiste en basalto negro", "Población: mayoritariamente drusos y cristianos", "Precipitación anual: 200-300 mm", "Arquitectura: casas tradicionales de piedra basáltica"],
      pt: ["Área: aprox. 200 km²", "Altitude: 600-900 m", "Consiste em basalto negro", "População: maioritariamente drusos e cristãos", "Precipitação anual: 200-300 mm", "Arquitetura: casas tradicionais de pedra basáltica"],
      fr: ["Superficie : env. 200 km²", "Altitude : 600-900 m", "Composé de basalte noir", "Population : majoritairement druzes et chrétiens", "Précipitations annuelles : 200-300 mm", "Architecture : maisons traditionnelles en pierre basaltique"],
    },
  },
  {
    id: "jabal-abu-rujmayn-relief-v2", "sights": {
      "de": [
            {
                  "name": "Qdeym",
                  "text": "Qdeym ist eine archäologische Stätte, an der antike Ruinen Spuren früher historischer Besiedlung in der Region offenbaren.",
                  "category": "historical",
                  "coords": [
                        38.420575,
                        35.049581
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Qdeym",
                  "text": "Qdeym egy régészeti lelőhely, ahol az ókori romok a terület korai történelmi betelepülésének nyomait tárják fel.",
                  "category": "historical",
                  "coords": [
                        38.420575,
                        35.049581
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Qdeym",
                  "text": "Qdeym este un sit arheologic unde ruinele antice dezvăluie urme ale așezărilor istorice timpurii din zonă.",
                  "category": "historical",
                  "coords": [
                        38.420575,
                        35.049581
                  ]
            }
      ],
      "en": [
            {
                  "name": "Qdeym",
                  "text": "Qdeym is an archaeological site where ancient ruins reveal traces of early historical settlement in the area.",
                  "category": "historical",
                  "coords": [
                        38.420575,
                        35.049581
                  ]
            }
      ]
},
    type: "mountain",
    parent: "SY-HO",
    coords: [38.5, 35.0],
    name: { de: "Dschebel Abu Rudschmain", hu: "Dzsebel Abu Ruzsmajn", ro: "Jabal Abu Rujmayn", en: "Jabal Abu Rujmayn"},
    description: { de: "Der Dschebel Abu Rudschmain ist eine langgestreckte Bergkette inmitten der syrischen Wüste, die wichtige archäologische Stätten birgt.", hu: "A Dzsebel Abu Ruzsmajn egy hosszan elnyúló hegylánc a Szíriai-sivatag közepén, amely fontos régészeti lelőhelyeket rejt.", ro: "Jabal Abu Rujmayn este un lanț muntos alungit în mijlocul Deșertului Sirian, care ascunde situri arheologice importante.", en: "Jabal Abu Rujmayn is an elongated mountain range in the middle of the Syrian Desert, harboring important archaeological sites." , es: "Jabal Abu Rujmayn es una cadena montañosa alargada en medio del desierto sirio que alberga importantes sitios arqueológicos.", pt: "Jabal Abu Rujmayn é uma cadeia montanhosa alongada no meio do deserto sírio que alberga importantes sítios arqueológicos.", fr: "Jabal Abu Rujmayn est une chaîne de montagnes allongée au milieu du désert syrien qui abrite d'importants sites archéologiques."},
    facts: {
      de: ["Nördlich von Palmyra gelegen", "Wüstengebirge", "Erreicht Höhen um 1.100 Meter"],
      hu: ["Palmyrától északra található", "Sivatagi hegység", "Körülbelül 1100 méteres magasságot ér el"],
      ro: ["Situat la nord de Palmyra", "Munte de deșert", "Atinge înălțimi de aproximativ 1.100 de metri"],
      en: ["Located north of Palmyra", "Desert mountain range", "Reaches heights around 1,100 meters"],
      es: ["Ubicado al norte de Palmira", "Montañas del desierto", "Alcanza alturas de alrededor de 1.100 metros"],
      pt: ["Localizado a norte de Palmira", "Montanhas do deserto", "Atinge alturas de cerca de 1.100 metros"],
      fr: ["Situé au nord de Palmyre", "Montagnes du désert", "Atteint des hauteurs d'environ 1 100 mètres"],
    }, image: "/poi-images/jabal-abu-rujmayn-relief-v2.webp",
    descriptionAdvanced: {
      de: "Jabal Abu Rujmayn ist eine markante Gebirgskette in Zentralsyrien, die sich nordöstlich von Palmyra erstreckt. Sie ist Teil der Palmyrenischen Gebirgsketten und bildet eine natürliche Barriere zwischen der syrischen Wüste und den fruchtbareren Gebieten im Norden. Geologisch besteht das Massiv überwiegend aus Kalkstein und Kreidegestein aus der Kreidezeit. Die höchsten Gipfel erreichen Höhen von etwa 1.300 Metern und bieten weite Ausblicke über die umliegenden Steppengebiete. Trotz des trockenen Wüstenklimas gibt es in den Tälern einige artesische Quellen, die seit Jahrtausenden von nomadisierenden Stämmen und für kleine landwirtschaftliche Oasen genutzt werden. Historisch war das Gebirge ein strategischer Beobachtungspunkt für die Karawanenrouten, die Palmyra mit dem Euphrat verbanden. Die Vegetation ist spärlich und besteht hauptsächlich aus trockenheitsresistenten Gräsern und Sträuchern, die als Weideland für Schafe und Ziegen dienen.",
      hu: "A Jabal Abu Rujmayn egy markáns hegylánc Közép-Szíriában, amely Palmürától északkeletre húzódik. A Palmürai-hegység részét képezi, és természetes határt alkot a szír sivatag és az északabbra fekvő termékenyebb területek között. Geológiailag a masszívum főként a kréta időszakból származó mészkőből és krétából épül fel. Legmagasabb csúcsai elérik az 1300 méteres magasságot, ahonnan belátható a környező sztyeppei táj. A száraz sivatagi éghajlat ellenére a völgyekben található néhány artézi forrás, amelyeket évezredek óta használnak a nomád törzsek és a kisebb mezőgazdasági oázisok. Történelmileg a hegység stratégiai figyelőpont volt a Palmürát az Eufrátesszel összekötő karavánutak mentén. A növényzet gyér, főként szárazságtűrő füvekből és bokrokból áll, amelyek a juhok és kecskék legelőjéül szolgálnak.",
      ro: "Jabal Abu Rujmayn este un lanț muntos proeminent din centrul Siriei, situat la nord-est de anticul oraș Palmyra. Acesta face parte din lanțurile muntoase ale Palmyrei și formează o barieră naturală între deșertul sirian și zonele mai fertile din nord. Geologic, masivul este compus în principal din calcar și cretă datând din perioada cretacică. Cele mai înalte vârfuri ating altitudini de aproximativ 1.300 de metri, oferind vederi panoramice asupra zonelor de stepă înconjurătoare. În ciuda climatului deșertic arid, în văi există câteva izvoare arteziene care au fost folosite timp de milenii de către triburile nomade și pentru mici oaze agricole. Istoric, munții au reprezentat un punct strategic de observație pentru rutele caravanelor care legau Palmyra de fluviul Eufrat. Vegetația este rară, constând în principal din ierburi și arbuști rezistenți la secetă, utilizați pentru pășunatul oilor.",
      en: "Jabal Abu Rujmayn is a prominent mountain range in central Syria, extending northeast of the city of Palmyra. It forms part of the Palmyrene mountain chains and acts as a natural barrier between the Syrian Desert and the more fertile plains to the north. Geologically, the massif is composed primarily of limestone and chalk dating back to the Cretaceous period. Its highest peaks reach elevations of approximately 1,300 meters, offering expansive views over the surrounding steppe. Despite the arid desert climate, several artesian springs exist in its valleys, which have supported nomadic tribes and small agricultural oases for millennia. Historically, the range served as a strategic observation point for caravan routes connecting Palmyra to the Euphrates River. The vegetation is sparse, consisting mainly of drought-resistant grasses and shrubs that provide grazing land for traditional sheep and goat herding.",
      es: "Jabal Abu Rujmayn es una colina o montaña baja en el centro de Siria, a unos 100 km al noreste de Palmira. Su altura es de 950 m. El área es parte de la estepa desértica siria. La montaña consiste en piedra caliza cretácica y arenisca. La vegetación es escasa con arbustos del desierto. Cerca hay campos petroleros que contribuyen a la economía. Históricamente, la región era un lugar de paso para caravanas. La montaña no es prominente, pero es conocida localmente por sus cuevas y manantiales. La precipitación anual es inferior a 150 mm. La vida silvestre incluye zorros del desierto y lagartijas.",
      pt: "Jabal Abu Rujmayn é uma colina ou montanha baixa no centro da Síria, a cerca de 100 km a nordeste de Palmira. A sua altura é de 950 m. A área faz parte da estepe desértica síria. A montanha consiste em calcário cretácico e arenito. A vegetação é escassa com arbustos do deserto. Perto existem campos petrolíferos que contribuem para a economia. Historicamente, a região era um local de passagem para caravanas. A montanha não é proeminente, mas é conhecida localmente pelas suas cavernas e nascentes. A precipitação anual é inferior a 150 mm. A vida selvagem inclui raposas do deserto e lagartos.",
      fr: "Jabal Abu Rujmayn est une colline ou montagne basse dans le centre de la Syrie, à environ 100 km au nord-est de Palmyre. Son altitude est de 950 m. La zone fait partie de la steppe désertique syrienne. La montagne est composée de calcaire crétacé et de grès. La végétation est clairsemée avec des arbustes du désert. À proximité se trouvent des champs pétrolifères qui contribuent à l'économie. Historiquement, la région était un lieu de passage pour les caravanes. La montagne n'est pas proéminente, mais est localement connue pour ses grottes et ses sources. Les précipitations annuelles sont inférieures à 150 mm. La faune comprend des renards du désert et des lézards.",
    },
    factsAdvanced: {
      de: ["Die höchste Erhebung des Jabal Abu Rujmayn liegt bei ca. 1.300 Metern.", "Das Gebirge ist eine Fortsetzung der zentralsyrischen Antiklinale.", "Geologisch dominieren Gesteine aus der Oberkreide das Landschaftsbild.", "Die Region ist ein traditionelles Wandergebiet für den Beduinenstamm der Sba'a.", "Niederschläge fallen fast ausschließlich in den Wintermonaten.", "In den Ausläufern des Gebirges wurden archäologische Spuren aus dem Epipaläolithikum gefunden."],
      hu: ["A Jabal Abu Rujmayn legmagasabb pontja körülbelül 1300 méteren található.", "A hegység a közép-szíriai antiklinális (boltozat) folytatása.", "Geológiailag a felső kréta időszak kőzetei dominálják a tájat.", "A régió a Sba'a beduin törzs hagyományos vonulási területe.", "A csapadék szinte kizárólag a téli hónapokban fordul elő.", "A hegység nyúlványainál epipaléolit korszakból származó régészeti leleteket találtak."],
      ro: ["Cea mai înaltă culme a Jabal Abu Rujmayn este de aproximativ 1.300 de metri.", "Munții reprezintă o continuare a anticlinalului din Siria Centrală.", "Geologic, rocile din cretacicul superior domină peisajul montan.", "Regiunea este un teritoriu tradițional de transhumanță pentru tribul beduin Sba'a.", "Precipitațiile sunt extrem de rare și apar aproape exclusiv iarna.", "În poalele munților au fost descoperite urme arheologice din perioada epipaleolitică."],
      en: ["The highest point of Jabal Abu Rujmayn is approximately 1,300 meters above sea level.", "The mountain range is part of the central Syrian anticline system.", "Geologically, the landscape is dominated by Upper Cretaceous rock formations.", "The region is a traditional grazing area for the Sba'a Bedouin tribe.", "Rainfall occurs almost exclusively during the short winter months.", "Archaeological evidence from the Epipaleolithic period has been found in the foothills."],
      es: ["Altura: 950 m", "Consiste en piedra caliza cretácica y arenisca", "Distancia a Palmira: 100 km", "Precipitación anual: menos de 150 mm", "Campos petroleros cercanos: producción 10.000 barriles/día", "Conocida por sus cuevas: longitud hasta 50 m"],
      pt: ["Altitude: 950 m", "Consiste em calcário cretácico e arenito", "Distância a Palmira: 100 km", "Precipitação anual: menos de 150 mm", "Campos petrolíferos próximos: produção 10.000 barris/dia", "Conhecida pelas suas cavernas: comprimento até 50 m"],
      fr: ["Altitude : 950 m", "Composé de calcaire crétacé et de grès", "Distance de Palmyre : 100 km", "Précipitations annuelles : moins de 150 mm", "Champs pétrolifères voisins : production 10 000 barils/jour", "Connue pour ses grottes : longueur jusqu'à 50 m"],
    },
  },
  {
    id: "jabal-al-bilas-relief-v2",
    type: "mountain",
    parent: "SY-HM",
    coords: [37.5, 34.916667],
    name: { de: "Dschebel al-Balaas", hu: "Dzsebel al-Balász", ro: "Jabal al-Bilas", en: "Jabal al-Bilas"},
    description: { de: "Der Dschebel al-Balaas ist ein trockenes Bergland im zentralen Syrien, das von nomadischen Stämmen für die Weidewirtschaft genutzt wird.", hu: "A Dzsebel al-Balász egy száraz hegyvidék Közép-Szíriában, amelyet a nomád törzsek legeltetésre használnak.", ro: "Jabal al-Bilas este un ținut muntos arid în centrul Siriei, folosit de triburile nomade pentru pășunat.", en: "Jabal al-Bilas is an arid mountainous region in central Syria, used by nomadic tribes for grazing." , es: "Jabal al-Bilaas es una región montañosa seca en el centro de Siria, utilizada por tribus nómadas para el pastoreo.", pt: "Jabal al-Bilaas é uma região montanhosa seca no centro da Síria, utilizada por tribos nómadas para o pastoreio.", fr: "Jabal al-Bilaas est une région montagneuse sèche dans le centre de la Syrie, utilisée par des tribus nomades pour le pâturage."},
    facts: {
      de: ["Zentral in Syrien gelegen", "Klima ist arid bis semi-arid", "Wichtiges Weideland"],
      hu: ["Szíria központjában található", "Éghajlata száraz vagy félszáraz", "Fontos legelőterület"],
      ro: ["Situat în centrul Siriei", "Clima este aridă până la semi-aridă", "Pășune importantă"],
      en: ["Located centrally in Syria", "Climate is arid to semi-arid", "Important grazing land"],
      es: ["Situado en el centro de Siria", "El clima es árido a semiárido", "Importante pastizal"],
      pt: ["Situado no centro da Síria", "O clima é árido a semiárido", "Importante pastagem"],
      fr: ["Situé dans le centre de la Syrie", "Le climat est aride à semi-aride", "Zone de pâturage importante"],
    }, image: "/poi-images/jabal-al-bilas-relief-v2.webp",
    descriptionAdvanced: {
      de: "Jabal al-Bilas ist ein Bergmassiv in Zentralsyrien, westlich von Palmyra und östlich der Stadt Hama gelegen. Es ist Teil der Palmyrenischen Gebirgsketten und markiert den Übergang von der zentralsyrischen Steppe zur Wüste. Geologisch ist das Massiv durch eine Kalkstein-Antiklinale geprägt, die während der alpinen Gebirgsbildung gefaltet wurde. Die Region ist historisch bedeutsam für ihre archäologischen Stätten, darunter byzantinische Siedlungsreste und antike Steinbrüche. Das Gebirge erreicht Höhen von bis zu 1.100 Metern. Während der römischen Ära war das Gebiet ein wichtiger Vorposten zur Überwachung der nomadischen Stämme und der Handelswege. Ökologisch ist der Jabal al-Bilas für seine verbliebenen Bestände an Pistacia atlantica (Wildpistazien) bekannt, die ein Überbleibsel der einstigen Waldsteppen-Vegetation Syriens darstellen. Heute dient die Region primär als Weideland, ist jedoch durch Überweidung und Dürre stark gefährdet.",
      hu: "A Jabal al-Bilas egy hegység Közép-Szíriában, Palmürától nyugatra és Hama városától keletre. A Palmürai-hegység része, és a közép-szíriai sztyeppe és a sivatag közötti átmenetet jelöli. Geológiailag a masszívumot egy mészkő antiklinális jellemzi, amely az alpi hegységképződés során gyűrődött fel. A régió történelmileg jelentős régészeti lelőhelyei miatt, beleértve bizánci településmaradványokat és ókori kőbányákat. A hegység csúcsai elérik az 1100 méteres magasságot. A római korban a terület fontos előőrs volt a nomád törzsek és a kereskedelmi utak felügyeletére. Ökológiailag a Jabal al-Bilas a fennmaradt vadpisztácia-állományáról (Pistacia atlantica) nevezetes, amely a korábbi szír erdős-sztyeppe növényzetének utolsó hírmondója. Napjainkban a régió elsősorban legelőként szolgál, de a túllegeltetés és a szárazság komolyan veszélyezteti az ökoszisztémáját.",
      ro: "Jabal al-Bilas este un masiv muntos din centrul Siriei, situat la vest de Palmyra și la est de orașul Hama. Acesta face parte din lanțurile Palmyrene și marchează tranziția de la stepa centrală siriană la deșert. Din punct de vedere geologic, masivul este caracterizat de un anticlinal calcaros format în timpul orogenezei alpine. Regiunea este semnificativă din punct de vedere istoric pentru siturile sale arheologice, inclusiv vestigii ale așezărilor bizantine și cariere antice de piatră. Munții ating înălțimi de până la 1.100 de metri. În epoca romană, zona a fost un punct de pază crucial pentru monitorizarea triburilor nomade și a rutelor comerciale. Ecologic, Jabal al-Bilas este cunoscut pentru exemplarele rămase de fistic sălbatic (Pistacia atlantica), care sunt relicve ale vechii vegetații de stepă împădurită a Siriei. Astăzi, regiunea este utilizată în principal pentru pășunat, dar este grav afectată de suprapășunat și secetă.",
      en: "Jabal al-Bilas is a mountain massif in central Syria, located west of Palmyra and east of the city of Hama. Part of the Palmyrene mountain chains, it marks the transition between the central Syrian steppe and the desert. Geologically, the massif is characterized by a limestone anticline folded during the Alpine orogeny. The region is historically significant for its archaeological sites, including Byzantine settlement remains and ancient stone quarries. The mountains reach elevations of up to 1,100 meters. During the Roman era, the area served as an important outpost for monitoring nomadic tribes and trade routes. Ecologically, Jabal al-Bilas is notable for its remaining stands of wild pistachio (Pistacia atlantica), which represent remnants of Syria's former forest-steppe vegetation. Currently, the region is primarily used for seasonal grazing, though it faces severe threats from overgrazing and prolonged drought conditions.",
      es: "Jabal al-Bilas es una montaña de unos 1562 metros de altura en la cordillera costera siria. Consiste principalmente en calizas jurásicas que surgieron por levantamientos tectónicos. La región está marcada por profundos cañones y formas cársticas. La montaña es parte de la cordillera de Al-Ansariyah y se encuentra al este de Latakia. Su flanco norte desciende abruptamente hacia la llanura costera, mientras que el lado sur se fusiona gradualmente con el interior. La vegetación incluye matorral mediterráneo con robles y pinos. Debido a su altura, la cima recibe ocasionalmente nieve en invierno.",
      pt: "Jabal al-Bilas é uma montanha de cerca de 1562 metros de altura na cordilheira costeira síria. Consiste principalmente em calcários jurássicos que surgiram devido a levantamentos tectónicos. A região é marcada por desfiladeiros profundos e formas cársicas. A montanha faz parte da cordilheira de Al-Ansariyah e situa-se a leste de Latakia. O seu flanco norte desce abruptamente para a planície costeira, enquanto o lado sul se funde gradualmente com o interior. A vegetação inclui maquis mediterrânico com carvalhos e pinheiros. Devido à sua altitude, o cimo recebe ocasionalmente neve no inverno.",
      fr: "Jabal al-Bilas est une montagne d'environ 1 562 mètres d'altitude dans la chaîne côtière syrienne. Elle est principalement composée de calcaires jurassiques formés par des soulèvements tectoniques. La région est marquée par des canyons profonds et des formes karstiques. La montagne fait partie de la chaîne de l'Al-Ansariyah et se trouve à l'est de Lattaquié. Son flanc nord descend abruptement vers la plaine côtière, tandis que le côté sud fusionne progressivement avec l'intérieur des terres. La végétation comprend du maquis méditerranéen avec des chênes et des pins. En raison de son altitude, le sommet reçoit occasionnellement de la neige en hiver.",
    },
    factsAdvanced: {
      de: ["Die höchste Erhebung des Jabal al-Bilas erreicht etwa 1.100 Meter.", "In der Region befindet sich ein staatlich geschütztes Wildpistazien-Reservat.", "Geologisch besteht das Gebirge aus Kalksteinen des Eozäns und der Kreide.", "Archäologen fanden hier Inschriften, die auf römische Militärposten hindeuten.", "Die Region erhält durchschnittlich weniger als 200 mm Niederschlag pro Jahr.", "Das Gebirge war in der Antike eine wichtige Quelle für Baumaterial."],
      hu: ["A Jabal al-Bilas legmagasabb csúcsa körülbelül 1100 méteres.", "A térségben államilag védett vadpisztácia-rezervátum található.", "Geológiailag a hegység eocén és kréta időszaki mészkőből áll.", "A régészek római katonai posztokra utaló feliratokat találtak a területen.", "A régió átlagos éves csapadékmennyisége kevesebb mint 200 mm.", "A hegység az ókorban fontos építőanyag-forrásként szolgált."],
      ro: ["Cea mai înaltă altitudine din Jabal al-Bilas este de circa 1.100 de metri.", "În regiune se află o rezervație de fistic sălbatic protejată de stat.", "Geologic, munții sunt compuși din calcare din eocen și cretacic.", "Arheologii au descoperit aici inscripții care indică prezența unor posturi militare romane.", "Regiunea primește în medie mai puțin de 200 mm de precipitații pe an.", "Masivul a fost o sursă importantă de materiale de construcție în antichitate."],
      en: ["The highest peak of Jabal al-Bilas reaches approximately 1,100 meters.", "The region hosts a state-protected wild pistachio reserve.", "Geologically, the range consists of Eocene and Cretaceous limestone.", "Archaeologists have found inscriptions indicating the presence of Roman military outposts.", "Average annual precipitation in the area is less than 200 mm.", "The mountains were an important source of building stone in antiquity."],
      es: ["Altura: 1562 metros sobre el nivel del mar", "Formación geológica: Caliza jurásica, espesor hasta 800 metros", "Área del macizo: aprox. 200 kilómetros cuadrados", "Pendiente media: 30° en el flanco norte", "Precipitación: hasta 1200 mm al año en las laderas occidentales", "Zona de vegetación: Vegetación mediterránea de hoja dura con Quercus ilex y Pinus brutia"],
      pt: ["Altitude: 1562 metros acima do nível do mar", "Formação geológica: Calcário jurássico, espessura até 800 metros", "Área do maciço: aprox. 200 quilómetros quadrados", "Inclinação média: 30° no flanco norte", "Precipitação: até 1200 mm por ano nas encostas ocidentais", "Zona de vegetação: Vegetação mediterrânica de folha dura com Quercus ilex e Pinus brutia"],
      fr: ["Altitude : 1 562 mètres au-dessus du niveau de la mer", "Formation géologique : Calcaire jurassique, épaisseur jusqu'à 800 mètres", "Superficie du massif : env. 200 kilomètres carrés", "Pente moyenne : 30° sur le flanc nord", "Précipitations : jusqu'à 1 200 mm par an sur les versants occidentaux", "Zone de végétation : Végétation méditerranéenne à feuilles dures avec Quercus ilex et Pinus brutia"],
    },
  },
  {
    id: "rouj-valley-relief-v2", "sights": {
      "de": [
            {
                  "name": "Roman castle ruins",
                  "text": "Diese antiken Ruinen im Rouj-Tal zeugen von ehemaligen römischen Befestigungsanlagen in der Region.",
                  "category": "castle",
                  "coords": [
                        36.455841,
                        35.9912
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Roman castle ruins",
                  "text": "Ezek az antik romok a Rouj-völgyben az egykori római erődítmények emlékét őrzik a régióban.",
                  "category": "castle",
                  "coords": [
                        36.455841,
                        35.9912
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Roman castle ruins",
                  "text": "Aceste ruine antice din Valea Rouj atestă fostele fortificații romane din regiune.",
                  "category": "castle",
                  "coords": [
                        36.455841,
                        35.9912
                  ]
            }
      ],
      "en": [
            {
                  "name": "Roman castle ruins",
                  "text": "These ancient ruins in the Rouj Valley bear witness to former Roman fortifications in the region.",
                  "category": "castle",
                  "coords": [
                        36.455841,
                        35.9912
                  ]
            }
      ]
},
    type: "valley",
    parent: "SY-ID",
    coords: [36.416667, 35.916667],
    name: { de: "Roudsch-Ebene", hu: "Rúdzs-síkság", ro: "Câmpia Rouj", en: "Rouj Basin"},
    description: { de: "Die Roudsch-Ebene ist eine fruchtbare geologische Senke in der Provinz Idlib, die intensiv landwirtschaftlich genutzt wird.", hu: "A Rúdzs-síkság egy termékeny geológiai medence Idlib tartományban, amelyet intenzíven mezőgazdasági célokra használnak.", ro: "Câmpia Rouj este o depresiune geologică fertilă în provincia Idlib, care este utilizată intens în scopuri agricole.", en: "The Rouj Basin is a fertile geological depression in the Idlib province that is intensively used for agriculture." , es: "La llanura de Rouj es una fértil depresión geológica en la provincia de Idlib que se utiliza intensamente para la agricultura.", pt: "A planície de Rouj é uma fértil depressão geológica na província de Idlib que é intensamente utilizada para a agricultura.", fr: "La plaine de Rouj est une dépression géologique fertile dans la province d'Idlib, intensivement utilisée pour l'agriculture."},
    facts: {
      de: ["Westlich der Stadt Idlib", "Sehr fruchtbare Böden", "Dicht besiedeltes Agrargebiet"],
      hu: ["Idlib városától nyugatra található", "Nagyon termékeny talaj", "Sűrűn lakott mezőgazdasági terület"],
      ro: ["La vest de orașul Idlib", "Soluri foarte fertile", "Zonă agricolă dens populată"],
      en: ["West of the city of Idlib", "Very fertile soils", "Densely populated agricultural area"],
      es: ["Al oeste de la ciudad de Idlib", "Suelos muy fértiles", "Región agrícola densamente poblada"],
      pt: ["A oeste da cidade de Idlib", "Solos muito férteis", "Região agrícola densamente povoada"],
      fr: ["À l'ouest de la ville d'Idlib", "Sols très fertiles", "Région agricole densément peuplée"],
    }, image: "/poi-images/rouj-valley-relief-v2.webp",
    descriptionAdvanced: {
      de: "Das Rouj-Becken, auch Rouj-Tal genannt, ist eine endorheische Senke im Gouvernement Idlib im Nordwesten Syriens. Es liegt westlich des Zawiya-Gebirges und östlich des Alawitengebirges, parallel zur größeren Al-Ghab-Ebene. Geologisch handelt es sich um eine tektonische Depression, die ursprünglich von saisonalen Sümpfen und einem flachen See geprägt war. In den 1950er Jahren wurde das Becken durch ein Tunnelprojekt zum Orontes-Fluss trockengelegt, wodurch ca. 15.000 Hektar fruchtbares Ackerland gewonnen wurden. Historisch ist das Tal von großer Bedeutung, da hier zahlreiche Siedlungshügel (Tells) existieren, die bis in das Neolithikum zurückreichen und die frühe Entwicklung des Ackerbaus im Fruchtbaren Halbmond belegen. Heute ist das Rouj-Tal eine intensiv genutzte Agrarzone, in der vor allem Weizen, Baumwolle und Gemüse unter Einsatz moderner Bewässerungsmethoden angebaut werden.",
      hu: "A Rouj-medence, vagy Rouj-völgy, egy lefolyástalan süllyedék Idlib kormányzóságban, Északnyugat-Szíriában. A Závia-hegységtől nyugatra és az Alavita-hegységtől keletre fekszik, párhuzamosan a nagyobb Al-Gáb-alfölddel. Geológiailag egy tektonikus depresszió, amelyet eredetileg szezonális mocsarak és egy sekély tó jellemeztek. Az 1950-es években a medencét egy Orontész-folyóhoz vezető alagút segítségével csapolták le, amivel mintegy 15 000 hektár termékeny mezőgazdasági területet nyertek. Történelmileg a völgy kiemelkedő jelentőségű, mivel számos tell (településhalom) található itt, amelyek egészen az újkőkorszakig nyúlnak vissza, bizonyítva a földművelés korai fejlődését a Termékeny Félhold területén. Ma a Rouj-völgy intenzív mezőgazdasági zóna, ahol főként búzát, gyapotot és zöldségeket termesztenek modern öntözési technológiákkal.",
      ro: "Bazinul Rouj, cunoscut și sub numele de Valea Rouj, este o depresiune endoreică situată în guvernoratul Idlib din nord-vestul Siriei. Se află la vest de Muntele Zawiya și la est de Munții Alauiți, fiind paralelă cu marea Câmpie Al-Ghab. Din punct de vedere geologic, este o depresiune tectonică ce a fost caracterizată inițial de mlaștini sezoniere și un lac puțin adânc. În anii 1950, bazinul a fost drenat printr-un proiect ce a inclus un tunel către râul Orontes, recuperând astfel circa 15.000 de hectare de teren fertil. Istoric, valea este extrem de importantă, găzduind numeroase tell-uri (movile de așezări) care datează din neolitic, atestând dezvoltarea timpurie a agriculturii în Semiluna Fertilă. Astăzi, Valea Rouj este o zonă agricolă intensivă unde se cultivă în principal grâu, bumbac și legume folosind metode moderne de irigare.",
      en: "The Rouj Basin, also known as the Rouj Valley, is an endorheic depression located in the Idlib Governorate of northwestern Syria. It lies west of Mount Zawiya and east of the Coastal Mountain Range, running parallel to the larger Al-Ghab Plain. Geologically, it is a tectonic depression that was originally characterized by seasonal marshes and a shallow lake. In the 1950s, the basin was reclaimed through a drainage project involving a tunnel to the Orontes River, which created approximately 15,000 hectares of fertile farmland. Historically, the valley is of great significance due to the presence of numerous tells (settlement mounds) dating back to the Neolithic period, providing evidence of early agricultural development in the Fertile Crescent. Today, the Rouj Valley is an intensive agricultural zone where wheat, cotton, and various vegetables are grown using modern irrigation techniques.",
      es: "La cuenca de Rouj (o llanura de Ruj) es una depresión fértil en el noroeste de Siria, a unos 30 kilómetros al noroeste de Idlib. Se extiende sobre una superficie de unos 500 kilómetros cuadrados y es drenada por el Nahr al-Abyad (Río Blanco). La llanura es un importante centro agrícola con cultivos de regadío, especialmente algodón, trigo y olivos. El suelo consiste en depósitos aluviales formados por inundaciones durante milenios. La cuenca es de origen tectónico y forma parte de la fosa del norte de Anatolia. En los alrededores hay varios yacimientos arqueológicos de la Edad del Hierro.",
      pt: "A bacia de Rouj (ou planície de Ruj) é uma depressão fértil no noroeste da Síria, a cerca de 30 quilômetros a noroeste de Idlib. Estende-se por uma área de cerca de 500 quilômetros quadrados e é drenada pelo Nahr al-Abyad (Rio Branco). A planície é um importante centro agrícola com agricultura irrigada, especialmente algodão, trigo e azeitona. O solo é composto por depósitos aluviais formados por inundações ao longo de milênios. A bacia é de origem tectônica e faz parte da falha norte da Anatólia. Nos arredores, há vários locais arqueológicos da Idade do Ferro.",
      fr: "Le bassin de Rouj (ou plaine de Ruj) est une dépression fertile dans le nord-ouest de la Syrie, à environ 30 kilomètres au nord-ouest d'Idlib. Il s'étend sur une superficie d'environ 500 kilomètres carrés et est drainé par le Nahr al-Abyad (rivière Blanche). La plaine est un centre agricole important avec des cultures irriguées, notamment le coton, le blé et les olives. Le sol est constitué de dépôts alluviaux formés par des inondations au cours des millénaires. Le bassin est d'origine tectonique et fait partie du fossé nord-anatolien. Aux alentours se trouvent plusieurs sites archéologiques de l'âge du fer.",
    },
    factsAdvanced: {
      de: ["Das Rouj-Becken umfasst eine landwirtschaftliche Fläche von etwa 150 Quadratkilometern.", "Der Drainage-Tunnel zum Orontes ist über 4 Kilometer lang.", "Tell El-Rouj ist einer der wichtigsten neolithischen Ausgrabungsorte der Region.", "Die jährliche Niederschlagsmenge beträgt im Durchschnitt ca. 500 mm.", "Vor der Trockenlegung war das Gebiet berüchtigt für Malaria-Epidemien.", "Geologisch ist das Becken Teil des nordsyrischen Grabensystems."],
      hu: ["A Rouj-medence körülbelül 150 négyzetkilométernyi mezőgazdasági területet foglal magában.", "Az Orontészhez vezető lecsapoló alagút több mint 4 kilométer hosszú.", "Tell El-Rouj a régió egyik legfontosabb újkőkorszaki ásatási helyszíne.", "Az éves átlagos csapadékmennyiség a térségben körülbelül 500 mm.", "A lecsapolás előtt a terület hírhedt volt a maláriajárványokról.", "Geológiailag a medence az észak-szíriai árokrendszer része."],
      ro: ["Bazinul Rouj cuprinde o suprafață agricolă de aproximativ 150 de kilometri pătrați.", "Tunelul de drenaj către Orontes are o lungime de peste 4 kilometri.", "Tell El-Rouj este unul dintre cele mai importante situri neolitice din regiune.", "Precipitațiile anuale medii în zonă sunt de aproximativ 500 mm.", "Înainte de drenaj, zona era cunoscută pentru epidemiile frecvente de malarie.", "Din punct de vedere geologic, bazinul face parte din sistemul de riftsiriene."],
      en: ["The Rouj Basin covers an agricultural area of about 150 square kilometers.", "The drainage tunnel to the Orontes River is over 4 kilometers long.", "Tell El-Rouj is one of the most significant Neolithic excavation sites in the region.", "The average annual rainfall in the valley is approximately 500 mm.", "Before reclamation, the area was notorious for malaria outbreaks due to the marshes.", "Geologically, the basin is a component of the North Syrian rift system."],
      es: ["Superficie: 500 kilómetros cuadrados", "Altitud: 200-400 metros sobre el nivel del mar", "Río principal: Nahr al-Abyad, 60 kilómetros de largo", "Superficie agrícola útil: 80% de la superficie total", "Precipitación anual: 500 mm", "Población en la cuenca: aprox. 250.000"],
      pt: ["Área: 500 quilômetros quadrados", "Altitude: 200-400 metros acima do nível do mar", "Rio principal: Nahr al-Abyad, 60 quilômetros de comprimento", "Área agrícola útil: 80% da área total", "Precipitação anual: 500 mm", "População na bacia: aprox. 250.000"],
      fr: ["Surface : 500 kilomètres carrés", "Altitude : 200-400 mètres au-dessus du niveau de la mer", "Rivière principale : Nahr al-Abyad, 60 kilomètres de long", "Surface agricole utile : 80 % de la surface totale", "Précipitations annuelles : 500 mm", "Population dans le bassin : environ 250 000"],
    },
  },
  {
    id: "qalamoun-mountains-relief-v2", "sights": {
      "de": [
            {
                  "name": "Jabal Ma‘lūlā",
                  "text": "Ein steiler Kalksteinfelsen über dem antiken Dorf Maaloula, in dem noch Aramäisch gesprochen wird.",
                  "category": "natural",
                  "coords": [
                        36.61881,
                        33.89931
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Jabal Ma‘lūlā",
                  "text": "Meredek mészkőszikla az ősi Maaloula falu felett, ahol még beszélik az arámi nyelvet.",
                  "category": "natural",
                  "coords": [
                        36.61881,
                        33.89931
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Jabal Ma‘lūlā",
                  "text": "O stâncă de calcar abruptă deasupra satului antic Maaloula, unde se mai vorbește încă limba aramaică.",
                  "category": "natural",
                  "coords": [
                        36.61881,
                        33.89931
                  ]
            }
      ],
      "en": [
            {
                  "name": "Jabal Ma‘lūlā",
                  "text": "A steep limestone peak overlooking the ancient village of Maaloula, where Aramaic is still spoken.",
                  "category": "natural",
                  "coords": [
                        36.61881,
                        33.89931
                  ]
            }
      ]
},
    type: "mountain",
    parent: "SY-RD",
    coords: [36.666667, 33.916667],
    name: { de: "Qalamun-Berge", hu: "Kalamún-hegység", ro: "Munții Qalamoun", en: "Qalamoun Mountains"},
    description: { de: "Die Qalamun-Berge sind der nordöstliche Ausläufer des Anti-Libanon-Gebirges und eine strategisch wichtige Gebirgsregion in Syrien.", hu: "A Kalamún-hegység az Antilibanon-hegység északkeleti nyúlványa, és stratégiailag fontos hegyvidéki régió Szíriában.", ro: "Munții Qalamoun reprezintă prelungirea nord-estică a lanțului muntos Anti-Liban și o regiune muntoasă de importanță strategică în Siria.", en: "The Qalamoun Mountains are the northeastern extension of the Anti-Lebanon mountain range and a strategically important mountainous region in Syria." , es: "Las montañas Qalamun son la estribación noreste de la cordillera del Antilíbano y una región montañosa estratégicamente importante en Siria.", pt: "As montanhas Qalamun são o contraforte nordeste da cordilheira do Antilíbano e uma região montanhosa estrategicamente importante na Síria.", fr: "Les monts Qalamoun sont le contrefort nord-est de la chaîne de l'Anti-Liban et une région montagneuse stratégiquement importante en Syrie."},
    facts: {
      de: ["Höchste Erhebung über 2.000 Meter", "Verbindet Damaskus mit Zentralsyrien", "Raue winterliche Bedingungen"],
      hu: ["Legmagasabb pontja meghaladja a 2000 métert", "Damaszkuszt köti össze Közép-Szíriával", "Zord téli körülmények"],
      ro: ["Cea mai înaltă altitudine depășește 2.000 de metri", "Leagă Damascul de centrul Siriei", "Condiții de iarnă aspre"],
      en: ["Highest elevation over 2,000 meters", "Connects Damascus with central Syria", "Harsh winter conditions"],
      es: ["Elevación más alta sobre 2.000 metros", "Conecta Damasco con el centro de Siria", "Duras condiciones invernales"],
      pt: ["Elevação mais alta acima de 2.000 metros", "Conecta Damasco ao centro da Síria", "Condições invernais rigorosas"],
      fr: ["Point culminant à plus de 2 000 mètres", "Relie Damas au centre de la Syrie", "Conditions hivernales rudes"],
    }, image: "/poi-images/qalamoun-mountains-relief-v2.webp",
    descriptionAdvanced: {
      de: "Das Qalamoun-Gebirge ist ein imposanter Gebirgszug im Südwesten Syriens, der den nordöstlichen Teil des Anti-Libanon-Gebirges bildet. Die Kette erstreckt sich von den Vororten von Damaskus bis in die Nähe von Homs und erreicht Höhen von über 2.500 Metern. Geologisch besteht das Gebirge aus massiven Kalkstein- und Sedimentformationen, die durch tiefe Schluchten und steile Abhänge geprägt sind. Historisch ist die Region von außergewöhnlicher Bedeutung; hier befinden sich einige der ältesten christlichen Klöster der Welt, darunter Maaloula und Saidnaya. In Maaloula wird bis heute Aramäisch, die Sprache Jesu, gesprochen. Das Gebirge diente aufgrund seiner Unzugänglichkeit seit Jahrhunderten als strategische Festung und Rückzugsgebiet. Wirtschaftlich spielt der Anbau von Kirschen, Aprikosen und Äpfeln in den Hochtälern eine wichtige Rolle, während die Kalksteinbrüche hochwertiges Baumaterial für die syrische Hauptstadt liefern.",
      hu: "A Kalamún-hegység egy impozáns hegylánc Délnyugat-Szíriában, amely az Antilibanon-hegység északkeleti részét alkotja. A láncolat Damaszkusz külvárosaitól egészen Homsz környékéig húzódik, legmagasabb csúcsai meghaladják a 2500 métert. Geológiailag a hegység masszív mészkő- és üledékes formációkból áll, amelyeket mély szurdokok és meredek lejtők tagolnak. Történelmileg a régió rendkívüli jelentőséggel bír; itt találhatók a világ legősibb keresztény kolostorai közül néhány, például Maalúla és Szaidnája. Maalúlában mind a mai napig beszélik az arámi nyelvet, Jézus nyelvét. Nehezen hozzáférhető terepe miatt a hegység évszázadok óta stratégiai erődként és menedékhelyként szolgált. Gazdaságilag a magashegyi völgyekben folyó cseresznye-, kajszibarack- és almatermesztés jelentős, míg a mészkőbányák kiváló építőanyagot szolgáltatnak a szír főváros számára.",
      ro: "Munții Qalamoun reprezintă un lanț muntos impunător din sud-vestul Siriei, formând partea de nord-est a masivului Anti-Liban. Lanțul se întinde de la periferia Damascului până în apropierea orașului Homs, atingând altitudini de peste 2.500 de metri. Geologic, munții sunt compuși din formațiuni masive de calcar și roci sedimentare, fiind marcați de chei adânci și pante abrupte. Istoric, regiunea are o importanță excepțională; aici se află unele dintre cele mai vechi mănăstiri creștine din lume, precum cele din Maaloula și Saidnaya. În Maaloula se vorbește și astăzi aramaica, limba lui Iisus. Datorită inaccesibilității sale, masivul a servit timp de secole ca fortăreață strategică și loc de refugiu. Din punct de vedere economic, cultivarea cireșelor, caiselor și merelor în văile înalte este esențială, în timp ce carierele de calcar furnizează materiale de construcție de calitate pentru capitala siriană.",
      en: "The Qalamoun Mountains are an imposing range in southwestern Syria, forming the northeastern portion of the Anti-Lebanon mountain system. The range extends from the outskirts of Damascus toward the city of Homs, with peaks reaching elevations of over 2,500 meters. Geologically, the mountains consist of massive limestone and sedimentary formations characterized by deep gorges and precipitous slopes. Historically, the region is of extraordinary significance; it is home to some of the oldest Christian monasteries in the world, such as those in Maaloula and Saidnaya. Notably, in Maaloula, Western Aramaic—the language of Jesus—is still spoken by the local population. Due to its rugged terrain, the Qalamoun has served as a strategic stronghold and refuge for centuries. Economically, the high-altitude valleys are famous for producing cherries, apricots, and apples, while limestone quarries provide vital building materials for the Syrian capital.",
      es: "El Qalamun (también montañas Qalamun) es una cadena montañosa de unos 100 kilómetros de largo en Siria y Líbano que se extiende al noreste de Damasco. El pico más alto es Tall al-Khazneh, con unos 2.500 metros. La cordillera consiste en calizas cretácicas y es rica en cuevas y manantiales kársticos. Forma el límite oriental del Antilíbano y separa el valle de la Becá del desierto sirio. En las laderas crecen pinos carrascos y cipreses. Históricamente, la región era conocida por monasterios como Deir Mar Musa. El clima es semiárido con precipitaciones invernales.",
      pt: "O Qalamun (também montanhas Qalamun) é uma cordilheira de cerca de 100 quilômetros de extensão na Síria e no Líbano que se estende a nordeste de Damasco. O pico mais alto é Tall al-Khazneh, com cerca de 2.500 metros. A cordilheira é composta por calcários cretáceos e é rica em cavernas e nascentes cársticas. Forma o limite oriental do Antilíbano e separa o vale do Bekaa do deserto sírio. Nas encostas, crescem pinheiros de Alepo e ciprestes. Historicamente, a região era conhecida por mosteiros como Deir Mar Musa. O clima é semiárido, com precipitação invernal.",
      fr: "Le Qalamoun (aussi appelé monts Qalamoun) est une chaîne de montagnes d'environ 100 kilomètres de long en Syrie et au Liban, s'étendant au nord-est de Damas. Le sommet le plus élevé est le Tall al-Khazneh, culminant à environ 2 500 mètres. La chaîne est composée de calcaires crétacés et est riche en grottes et en sources karstiques. Elle forme la limite orientale de l'Anti-Liban et sépare la plaine de la Bekaa du désert syrien. Sur les pentes poussent des pins d'Alep et des cyprès. Historiquement, la région était connue pour des monastères comme Deir Mar Musa. Le climat est semi-aride avec des précipitations hivernales.",
    },
    factsAdvanced: {
      de: ["Die höchste Erhebung im Qalamoun-Gebirge erreicht 2.629 Meter.", "Maaloula ist einer von drei Orten weltweit, an denen noch Aramäisch gesprochen wird.", "Das Kloster Unserer Lieben Frau von Saidnaya wurde im 6. Jahrhundert gegründet.", "Geologisch gehört das Gebirge zur alpinen Orogenese der Levante.", "Die strategische Autobahn M5 verläuft parallel zum Gebirgszug.", "In den Wintermonaten ist das Gebirge oft von einer dicken Schneedecke bedeckt."],
      hu: ["A Kalamún-hegység legmagasabb pontja 2629 méterrel van a tengerszint felett.", "Maalúla a világ azon három helyének egyike, ahol még beszélik az arámi nyelvet.", "A szaidnájai Miasszonyunk-kolostort a 6. században alapították.", "Geológiailag a hegység a levantei alpi hegységképződés része.", "A stratégiai fontosságú M5-ös autópálya a hegylánccal párhuzamosan halad.", "A téli hónapokban a hegységet gyakran vastag hóréteg borítja."],
      ro: ["Cea mai înaltă altitudine din Munții Qalamoun atinge 2.629 de metri.", "Maaloula este una dintre cele trei localități din lume unde se mai vorbește aramaica.", "Mănăstirea Saidnaya a fost fondată în secolul al VI-lea de împăratul Iustinian.", "Geologic, munții fac parte din sistemul orogenic alpin al Levantului.", "Autostrada strategică M5 șerpuiește paralel cu acest lanț muntos.", "În timpul iernii, culmile munților sunt acoperite de un strat generos de zăpadă."],
      en: ["The highest peak in the Qalamoun Mountains reaches 2,629 meters.", "Maaloula is one of only three places in the world where Western Aramaic is still spoken.", "The Monastery of Our Lady of Saidnaya was founded in the 6th century.", "Geologically, the range is part of the Alpine orogeny in the Levant.", "The strategic M5 highway runs parallel to the Qalamoun range.", "The mountains are frequently covered in thick snow during the winter months."],
      es: ["Longitud: 100 kilómetros", "Pico más alto: Tall al-Khazneh, 2.500 metros", "Era geológica: Cretácico", "Número de cuevas conocidas: más de 200", "Monasterios regionales: 10 monasterios medievales", "Precipitación media: 600 mm en las laderas occidentales"],
      pt: ["Comprimento: 100 quilômetros", "Pico mais alto: Tall al-Khazneh, 2.500 metros", "Era geológica: Cretáceo", "Número de cavernas conhecidas: mais de 200", "Mosteiros regionais: 10 mosteiros medievais", "Precipitação média: 600 mm nas encostas ocidentais"],
      fr: ["Longueur : 100 kilomètres", "Sommet le plus élevé : Tall al-Khazneh, 2 500 mètres", "Ère géologique : Crétacé", "Nombre de grottes connues : plus de 200", "Monastères régionaux : 10 monastères médiévaux", "Précipitations moyennes : 600 mm sur les versants ouest"],
    },
  },
  {
    id: "syrian-coast-relief-v2", "sights": {
      "de": [
            {
                  "name": "Walnut avenue",
                  "text": "Ein baumgesäumter Pfad, der zu den Befestigungsanlagen an der syrischen Küste führt.",
                  "category": "castle",
                  "coords": [
                        35.93641,
                        35.437836
                  ]
            },
            {
                  "name": "Schrein von Scheich Salman Abbas",
                  "text": "Ein muslimisches Küstenheiligtum, das von der lokalen Gemeinschaft als heiliger Ort verehrt wird.",
                  "category": "landmark",
                  "coords": [
                        35.926751,
                        35.446238
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Walnut avenue",
                  "text": "Fákkal szegélyezett ösvény, amely a szíriai partvidék erődítményeihez vezet.",
                  "category": "castle",
                  "coords": [
                        35.93641,
                        35.437836
                  ]
            },
            {
                  "name": "Shrine of Sheikh Salman Abbas",
                  "text": "Partmenti muszlim kegyhely, amelyet a helyi közösség szent helyként tisztel.",
                  "category": "landmark",
                  "coords": [
                        35.926751,
                        35.446238
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Walnut avenue",
                  "text": "O potecă mărginită de copaci care duce spre fortificațiile de pe coasta siriană.",
                  "category": "castle",
                  "coords": [
                        35.93641,
                        35.437836
                  ]
            },
            {
                  "name": "Shrine of Sheikh Salman Abbas",
                  "text": "Un sanctuar musulman de coastă, venerat ca loc sfânt de către comunitatea locală.",
                  "category": "landmark",
                  "coords": [
                        35.926751,
                        35.446238
                  ]
            }
      ],
      "en": [
            {
                  "name": "Walnut avenue",
                  "text": "A tree-lined path or avenue leading towards the fortifications on the Syrian coast.",
                  "category": "castle",
                  "coords": [
                        35.93641,
                        35.437836
                  ]
            },
            {
                  "name": "Shrine of Sheikh Salman Abbas",
                  "text": "A coastal Muslim shrine revered as a holy site by the local Alawite community.",
                  "category": "landmark",
                  "coords": [
                        35.926751,
                        35.446238
                  ]
            }
      ]
},
    type: "coast",
    parent: "SY-LA",
    coords: [35.916667, 35.5],
    name: { de: "Syrische Mittelmeerküste", hu: "Szíriai-tengerpart", ro: "Coasta Siriană", en: "Syrian Coast"},
    image: "/poi-images/syrian-coast-relief-v2.webp",
    description: { de: "Die syrische Mittelmeerküste ist ein schmaler, fruchtbarer Streifen, der durch ein mildes Klima und reiche Landwirtschaft geprägt ist.", hu: "A szíriai Földközi-tenger partvidéke egy keskeny, termékeny sáv, amelyet enyhe éghajlat és gazdag mezőgazdaság jellemez.", ro: "Coasta mediteraneană siriană este o fâșie îngustă și fertilă, caracterizată de un climat blând și o agricultură bogată.", en: "The Syrian Mediterranean coast is a narrow, fertile strip characterized by a mild climate and rich agriculture." , es: "La costa mediterránea siria es una franja estrecha y fértil, caracterizada por un clima suave y una agricultura rica.", pt: "A costa mediterrânea síria é uma faixa estreita e fértil, caracterizada por um clima ameno e uma agricultura rica.", fr: "La côte méditerranéenne syrienne est une bande étroite et fertile, caractérisée par un climat doux et une agriculture riche."},
    facts: {
      de: ["Etwa 180 Kilometer lang", "Mildes mediterranes Klima", "Zentrum des syrischen Tourismus"],
      hu: ["Körülbelül 180 kilométer hosszú", "Enyhe mediterrán éghajlat", "A szíriai turizmus központja"],
      ro: ["Aproximativ 180 de kilometri lungime", "Climă mediteraneană blândă", "Centrul turismului sirian"],
      en: ["About 180 kilometers long", "Mild Mediterranean climate", "Center of Syrian tourism"],
      es: ["Aproximadamente 180 kilómetros de largo", "Clima mediterráneo suave", "Centro del turismo sirio"],
      pt: ["Aproximadamente 180 quilômetros de comprimento", "Clima mediterrâneo ameno", "Centro do turismo sírio"],
      fr: ["Environ 180 kilomètres de long", "Climat méditerranéen doux", "Centre du tourisme syrien"],
    },
    descriptionAdvanced: {
      de: "Die syrische Küste erstreckt sich über etwa 183 Kilometer entlang des östlichen Mittelmeers zwischen dem Libanon im Süden und der Türkei im Norden. Die Region ist durch einen schmalen, aber fruchtbaren Küstenstreifen geprägt, der landeinwärts steil zum nordsyrischen Küstengebirge ansteigt. Historisch war dieses Gebiet ein bedeutendes Zentrum der phönizischen Zivilisation, wobei die Inselstadt Arwad und das antike Amrit als wichtige Handelsknotenpunkte fungierten. Das Klima ist typisch mediterran mit milden, feuchten Wintern und heißen, trockenen Sommern, was den intensiven Anbau von Zitrusfrüchten, Oliven und Tabak ermöglicht. Die wichtigsten urbanen Zentren sind die Hafenstädte Latakia und Tartus, die für die syrische Wirtschaft und den internationalen Seehandel von entscheidender Bedeutung sind. Strategisch bildet der Küstenabschnitt das maritime Tor des Landes und beherbergt zahlreiche archäologische Stätten, die von der jahrtausendealten Besiedlungsgeschichte der Levante zeugen.",
      hu: "A szíriai partvidék körülbelül 183 kilométer hosszan húzódik a Földközi-tenger keleti partján, Libanon és Törökország között. Ez a régió egy keskeny, de rendkívül termékeny síkságból áll, amely a szárazföld belseje felé haladva meredeken emelkedik az Al-Anszarijja-hegység vonulataihoz. Történelmileg a terület a föníciai civilizáció egyik központja volt, olyan jelentős ókori városokkal, mint Arvád szigete vagy Amrit kereskedelmi kikötője. A mediterrán éghajlat enyhe, csapadékos teleket és forró, száraz nyarakat biztosít, ami kedvez a citrusfélék, az olajbogyó és a dohány termesztésének. A térség legfontosabb gazdasági központjai Latakia és Tartúsz kikötővárosai, amelyek Szíria tengeri kereskedelmének gerincét alkotják. A partvidék stratégiai elhelyezkedése és gazdag kulturális öröksége révén évezredek óta a Közel-Kelet egyik legfontosabb kereskedelmi és katonai kapujának számít.",
      ro: "Coasta siriană se întinde pe o lungime de aproximativ 183 de kilometri de-a lungul Mării Mediterane orientale, situată între Liban la sud și Turcia la nord. Această regiune este caracterizată printr-o fâșie de coastă îngustă, dar fertilă, care urcă abrupt spre munții de coastă din interiorul țării. Din punct de vedere istoric, zona a fost un centru vital al civilizației feniciene, orașe precum Arwad și Amrit servind drept noduri comerciale esențiale în antichitate. Climatul este unul mediteranean tipic, cu ierni blânde și umede și veri fierbinți și uscate, favorizând agricultura intensivă de citrice, măsline și tutun. Principalele centre urbane sunt orașele portuare Latakia și Tartus, care joacă un rol crucial în economia națională și în comerțul maritim internațional. Din punct de vedere strategic, litoralul sirian reprezintă poarta maritimă a țării și găzduiește numeroase situri arheologice care atestă o istorie de locuire neîntreruptă de mii de ani.",
      en: "The Syrian coast extends for approximately 183 kilometers along the eastern Mediterranean Sea, positioned between Lebanon to the south and Turkey to the north. This region features a narrow but fertile coastal plain that rises steeply into the Syrian Coastal Mountain Range further inland. Historically, this area was a major hub for the Phoenician civilization, with sites like the island of Arwad and ancient Amrit serving as vital maritime trade centers. The climate is Mediterranean, characterized by mild, wet winters and hot, dry summers, which supports the intensive cultivation of citrus fruits, olives, and tobacco. The most significant urban centers are the port cities of Latakia and Tartus, which are essential for Syria's national economy and international shipping. Strategically, the coastline serves as the country's maritime gateway and contains numerous archaeological remains that reflect thousands of years of Levantine history.",
      es: "La costa siria se extiende unos 180 kilómetros a lo largo del Mediterráneo oriental, desde la frontera turca en el norte hasta la frontera libanesa en el sur. Abarca las gobernaciones de Latakia y Tartus. La línea costera se caracteriza por playas de arena, acantilados y ciudades portuarias. Las ciudades más grandes son Latakia (capital de la gobernación) con unos 700.000 habitantes y Tartus con 200.000. El clima es mediterráneo con inviernos suaves y húmedos y veranos calurosos y secos. La agricultura se centra en los cítricos, el olivo y el tabaco. El puerto de Latakia es el puerto marítimo más importante de Siria.",
      pt: "A costa síria estende-se por cerca de 180 quilômetros ao longo do Mediterrâneo oriental, da fronteira turca no norte até à fronteira libanesa no sul. Abrange as províncias de Latakia e Tartus. A linha costeira caracteriza-se por praias de areia, falésias e cidades portuárias. As maiores cidades são Latakia (capital da província) com cerca de 700.000 habitantes e Tartus com 200.000. O clima é mediterrâneo, com invernos amenos e úmidos e verões quentes e secos. A agricultura centra-se em citrinos, azeitonas e tabaco. O porto de Latakia é o porto marítimo mais importante da Síria.",
      fr: "La côte syrienne s'étend sur environ 180 kilomètres le long de la Méditerranée orientale, de la frontière turque au nord à la frontière libanaise au sud. Elle comprend les gouvernorats de Lattaquié et de Tartous. Le littoral est caractérisé par des plages de sable, des falaises et des villes portuaires. Les plus grandes villes sont Lattaquié (capitale du gouvernorat) avec environ 700 000 habitants et Tartous avec 200 000. Le climat est méditerranéen avec des hivers doux et humides et des étés chauds et secs. L'agriculture se concentre sur les agrumes, les olives et le tabac. Le port de Lattaquié est le plus important port maritime de Syrie.",
    },
    factsAdvanced: {
      de: ["Küstenlänge von 183 km", "Latakia ist der größte Hafen", "Arwad ist die einzige bewohnte Insel", "Anbauzentrum für Tabak und Oliven", "Phönizische Ruinen in Amrit", "Mediterranes Klima"],
      hu: ["183 km hosszú partvonal", "Latakia a legnagyobb kikötőváros", "Arvád az egyetlen lakott sziget", "Fontos dohánytermesztő vidék", "Föníciai emlékek Amritban", "Mediterrán éghajlati öv"],
      ro: ["Lungimea coastei de 183 km", "Latakia este cel mai mare port", "Arwad este singura insulă locuită", "Centru major de producție de tutun", "Ruine feniciene la Amrit", "Climat mediteranean umed"],
      en: ["Coastal length of 183 km", "Latakia is the largest port city", "Arwad is the only inhabited island", "Major tobacco and olive region", "Phoenician ruins at Amrit", "Mediterranean climate zone"],
      es: ["Longitud de la costa: 180 kilómetros", "Ciudad más grande: Latakia, 700.000 habitantes", "Precipitación anual: 800 mm", "Principal puerto de exportación: Latakia, volumen 10 millones de toneladas", "Temperatura media estival: 30°C", "Número de playas: 15 playas accesibles al público"],
      pt: ["Comprimento da costa: 180 quilômetros", "Maior cidade: Latakia, 700.000 habitantes", "Precipitação anual: 800 mm", "Principal porto de exportação: Latakia, volume 10 milhões de toneladas", "Temperatura média de verão: 30°C", "Número de praias: 15 praias acessíveis ao público"],
      fr: ["Longueur de la côte : 180 kilomètres", "Ville principale : Lattaquié, 700 000 habitants", "Précipitations annuelles : 800 mm", "Principal port d'exportation : Lattaquié, volume 10 millions de tonnes", "Température moyenne estivale : 30°C", "Nombre de plages : 15 plages accessibles au public"],
    },
  },
  {
    id: "jabal-al-nabi-yunis-relief-v2", "sights": {
      "de": [
            {
                  "name": "Qal`at Burzay",
                  "text": "Ruinen einer byzantinischen und kreuzritterzeitlichen Festung auf einem strategischen Bergrücken.",
                  "category": "historical",
                  "coords": [
                        36.260871,
                        35.65718
                  ]
            },
            {
                  "name": "Prophet Mattá shrine",
                  "text": "Ein abgelegenes Gebirgsheiligtum, das dem Propheten Matta (Matthäus) gewidmet ist.",
                  "category": "religious",
                  "coords": [
                        36.221075,
                        35.600779
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Qal`at Burzay",
                  "text": "Egy bizánci és keresztes lovagkori erőd romjai egy stratégiai hegygerincen.",
                  "category": "historical",
                  "coords": [
                        36.260871,
                        35.65718
                  ]
            },
            {
                  "name": "Prophet Mattá shrine",
                  "text": "Távoli hegyi kegyhely, amelyet Matta (Máté) prófétának szenteltek.",
                  "category": "religious",
                  "coords": [
                        36.221075,
                        35.600779
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Qal`at Burzay",
                  "text": "Ruinele unei cetăți bizantine și cruciate situate pe o creastă montană strategică.",
                  "category": "historical",
                  "coords": [
                        36.260871,
                        35.65718
                  ]
            },
            {
                  "name": "Prophet Mattá shrine",
                  "text": "Un sanctuar montan izolat dedicat profetului Matta (Matei).",
                  "category": "religious",
                  "coords": [
                        36.221075,
                        35.600779
                  ]
            }
      ],
      "en": [
            {
                  "name": "Qal`at Burzay",
                  "text": "The ruins of a Byzantine and Crusader-era fortress perched on a strategic mountain ridge.",
                  "category": "historical",
                  "coords": [
                        36.260871,
                        35.65718
                  ]
            },
            {
                  "name": "Prophet Mattá shrine",
                  "text": "A remote mountain shrine dedicated to the Prophet Matta (Matthew).",
                  "category": "religious",
                  "coords": [
                        36.221075,
                        35.600779
                  ]
            }
      ]
},
    type: "mountain",
    parent: "SY-LA",
    coords: [36.216667, 35.583333],
    name: { de: "Dschebel al-Nabi Yunis", hu: "Dzsebel an-Nabi Júnisz", ro: "Jabal al-Nabi Yunis", en: "Mount Nabi Yunis"},
    description: { de: "Der Dschebel al-Nabi Yunis ist mit über 1.500 Metern der höchste Gipfel der syrischen Küstengebirgskette und bietet weite Ausblicke.", hu: "A több mint 1500 méter magas Dzsebel an-Nabi Júnisz a szíriai partvidéki hegylánc legmagasabb csúcsa, amely széles kilátást nyújt.", ro: "La peste 1.500 de metri, Jabal al-Nabi Yunis este cel mai înalt vârf din lanțul muntos de coastă sirian și oferă vederi panoramice.", en: "At over 1,500 meters, Mount Nabi Yunis is the highest peak of the Syrian coastal mountain range and offers sweeping views." , es: "Con más de 1.500 metros, Jabal al-Nabi Yunis es el pico más alto de la cordillera costera siria y ofrece vistas panorámicas.", pt: "Com mais de 1.500 metros, Jabal al-Nabi Yunis é o pico mais alto da cordilheira costeira síria e oferece amplas vistas.", fr: "Culminant à plus de 1 500 mètres, le Jabal al-Nabi Yunis est le plus haut sommet de la chaîne côtière syrienne et offre de vastes panoramas."},
    facts: {
      de: ["Höchster Punkt der Ansarija-Berge", "Höhe von 1.562 Metern", "Oft im Winter schneebedeckt"],
      hu: ["Az Ansarija-hegység legmagasabb pontja", "Magassága 1562 méter", "Télen gyakran hó borítja"],
      ro: ["Cel mai înalt punct din Munții Ansariyah", "Înălțime de 1.562 de metri", "Adesea acoperit de zăpadă iarna"],
      en: ["Highest point of the Ansariyah Mountains", "Elevation of 1,562 meters", "Often snow-capped in winter"],
      es: ["Punto más alto de las montañas Ansariyah", "Altitud de 1.562 metros", "A menudo cubierto de nieve en invierno"],
      pt: ["Ponto mais alto das montanhas Ansariyah", "Altitude de 1.562 metros", "Frequentemente coberto de neve no inverno"],
      fr: ["Point culminant des monts Ansariyah", "Altitude de 1 562 mètres", "Souvent enneigé en hiver"],
    }, image: "/poi-images/jabal-al-nabi-yunis-relief-v2.webp",
    descriptionAdvanced: {
      de: "Der Jabal al-Nabi Yunis ist mit einer Höhe von 1.562 Metern der höchste Gipfel des nordsyrischen Küstengebirges, das auch als Jabal an-Nusayriyah bekannt ist. Er befindet sich im Gouvernement Latakia und bietet eine strategische Aussicht sowohl über die Mittelmeerküste im Westen als auch über das Orontes-Tal im Osten. Die Region ist durch dichte Wälder aus Eichen und Kiefern geprägt, die einen scharfen Kontrast zur trockeneren Steppe des syrischen Binnenlandes bilden. Der Name des Berges ehrt den Propheten Jona, dem lokale Überlieferungen eine Verbindung zu diesem Ort zuschreiben. Geologisch besteht das Massiv überwiegend aus Kalkstein, was zur Entstehung zahlreicher Karstquellen führt, die die umliegenden Täler mit Wasser versorgen. Aufgrund seiner Höhe ist der Gipfel im Winter häufig von Schnee bedeckt, während er im Sommer ein kühleres Refugium gegenüber der Hitze der Küstenebenen darstellt.",
      hu: "A Dzsebel al-Nabí Júnisz 1562 méteres magasságával a szíriai partvidéki hegység, más néven az Al-Anszarijja-hegység legmagasabb pontja. Latakia kormányzóságban található, és stratégiai kilátást nyújt nyugat felé a Földközi-tengerre, kelet felé pedig az Orontész-völgyre. A hegyvidéket sűrű tölgy- és fenyőerdők borítják, amelyek éles ellentétben állnak a szíriai belső területek szárazabb sztyeppéivel. A hegy neve Jónás prófétára utal, akinek a helyi hagyományok különleges jelentőséget tulajdonítanak ezen a területen. Geológiailag a hegység főként mészkőből épül fel, ami számos karsztforrás kialakulásához vezetett, amelyek fontos vízbázist jelentenek a környező völgyek számára. Magassága miatt a csúcsot télen gyakran hó borítja, nyáron pedig hűvös menedéket nyújt a tengerparti síkságok hősége elől.",
      ro: "Jabal al-Nabi Yunis este cel mai înalt vârf din lanțul muntos de coastă al Siriei, cunoscut și sub numele de Jabal an-Nusayriyah, având o altitudine de 1.562 de metri. Situat în guvernoratul Latakia, acesta oferă o perspectivă strategică atât asupra coastei mediteraneene la vest, cât și asupra văii Orontes la est. Regiunea este acoperită de păduri dense de stejar și pin, care contrastează puternic cu zonele de stepă mai aride din interiorul Siriei. Numele muntelui îl onorează pe profetul Iona, tradițiile locale atribuind acestui loc o semnificație religioasă deosebită. Din punct de vedere geologic, masivul este compus în principal din calcar, ceea ce a dus la formarea a numeroase izvoare carstice care alimentează văile din jur. Datorită înălțimii sale, vârful este adesea acoperit de zăpadă în timpul iernii, oferind un refugiu răcoros în timpul verilor toride de pe câmpia litorală.",
      en: "Jabal al-Nabi Yunis is the highest peak in the Syrian Coastal Mountain Range, also known as Jabal an-Nusayriyah, reaching an elevation of 1,562 meters. Located in the Latakia Governorate, it provides a strategic vantage point over both the Mediterranean coast to the west and the Orontes Valley to the east. The mountain region is characterized by dense forests of oak and pine, which stand in stark contrast to the drier steppes of the Syrian interior. The mountain's name honors the Prophet Jonah, with local traditions associating the site with his memory. Geologically, the massif is predominantly composed of limestone, leading to the formation of numerous karst springs that supply water to the surrounding valleys. Due to its altitude, the peak is frequently covered in snow during winter, while offering a cooler escape from the coastal heat in the summer months.",
      es: "Jabal al-Nabi Yunis (Monte del Profeta Jonás) es una montaña de unos 1.000 metros en la cordillera costera siria, al norte de Latakia. Lleva el nombre del profeta Jonás, cuya tumba se encontraría en la cima, venerada tanto por musulmanes como por cristianos. La montaña ofrece vistas a la costa y a Latakia. Geológicamente consiste en caliza cretácica y está cubierta de matorral mediterráneo. En la cumbre hay una mezquita y un pequeño santuario. Es un destino para peregrinos y senderistas. El entorno se caracteriza por olivares y campos de tabaco.",
      pt: "Jabal al-Nabi Yunis (Monte do Profeta Jonas) é uma montanha de cerca de 1.000 metros na cordilheira costeira síria, ao norte de Latakia. Recebeu o nome do profeta Jonas, cujo túmulo estaria no cume, venerado tanto por muçulmanos quanto por cristãos. A montanha oferece vistas da costa e de Latakia. Geologicamente composta por calcário cretáceo, está coberta por maquis mediterrâneo. No cume, há uma mesquita e um pequeno santuário. É um destino para peregrinos e caminhantes. Os arredores são caracterizados por olivais e campos de tabaco.",
      fr: "Le Jabal al-Nabi Yunis (mont du prophète Jonas) est une montagne d'environ 1 000 mètres située dans la chaîne côtière syrienne, au nord de Lattaquié. Elle tire son nom du prophète Jonas, dont la tombe se trouverait au sommet, vénérée par les musulmans comme par les chrétiens. La montagne offre une vue sur la côte et la ville de Lattaquié. Géologiquement composée de calcaire crétacé, elle est couverte de maquis méditerranéen. Une mosquée et un petit sanctuaire se trouvent au sommet. La montagne est une destination pour les pèlerins et les randonneurs. Les environs sont marqués par des oliveraies et des champs de tabac.",
    },
    factsAdvanced: {
      de: ["Höchster Berg im Küstengebirge", "Maximale Höhe 1.562 Meter", "Besteht aus Kalkstein", "Gouvernement Latakia", "Regelmäßiger Schneefall im Winter", "Blick auf das Orontes-Tal"],
      hu: ["A partvidéki hegység legmagasabbja", "1562 méteres tengerszint feletti magasság", "Főként mészkő alkotja", "Latakia kormányzóság területén fekszik", "Télen gyakori a hóesés", "Kilátás az Orontész-völgyre"],
      ro: ["Cel mai înalt vârf de coastă", "Altitudine de 1.562 metri", "Geologie predominant calcaroasă", "Situat în guvernoratul Latakia", "Zăpadă frecventă iarna", "Vedere panoramică spre Orontes"],
      en: ["Highest peak of the coastal range", "Elevation of 1,562 meters", "Limestone geological composition", "Located in Latakia Governorate", "Frequent winter snowfall", "Overlooks the Orontes Valley"],
      es: ["Altitud: 1.000 metros sobre el nivel del mar", "Distancia a Latakia: 15 kilómetros al norte", "Número de peregrinos anuales: aprox. 10.000", "Año de construcción de la mezquita en la cima: siglo XII", "Tipo de vegetación: matorral mediterráneo", "Temperatura media anual: 16°C"],
      pt: ["Altitude: 1.000 metros acima do nível do mar", "Distância de Latakia: 15 quilômetros ao norte", "Número de peregrinos anuais: aprox. 10.000", "Ano de construção da mesquita no cume: século XII", "Tipo de vegetação: maquis mediterrâneo", "Temperatura média anual: 16°C"],
      fr: ["Altitude : 1 000 mètres au-dessus du niveau de la mer", "Distance de Lattaquié : 15 kilomètres au nord", "Nombre de pèlerins annuels : environ 10 000", "Date de construction de la mosquée au sommet : XIIe siècle", "Type de végétation : maquis méditerranéen", "Température annuelle moyenne : 16°C"],
    },
  },
  {
    id: "orontes-valley-relief-v2", "sights": {
      "de": [
            {
                  "name": "Maqsam ad Dar",
                  "text": "Ruine einer historischen Windmühle in der Agrarlandschaft des Orontes-Tals.",
                  "category": "landmark",
                  "coords": [
                        36.65,
                        34.833333
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Maqsam ad Dar",
                  "text": "Egy történelmi szélmalom romjai az Orontész-völgy mezőgazdasági táján.",
                  "category": "landmark",
                  "coords": [
                        36.65,
                        34.833333
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Maqsam ad Dar",
                  "text": "Ruina unei mori de vânt istorice în peisajul agricol al văii râului Orontes.",
                  "category": "landmark",
                  "coords": [
                        36.65,
                        34.833333
                  ]
            }
      ],
      "en": [
            {
                  "name": "Maqsam ad Dar",
                  "text": "The ruin of a historical windmill set in the agricultural landscape of the Orontes valley.",
                  "category": "landmark",
                  "coords": [
                        36.65,
                        34.833333
                  ]
            }
      ]
},
    type: "valley",
    parent: "SY-HM",
    coords: [36.666667, 34.916667],
    name: { de: "Orontes-Tal", hu: "Orontész-völgy", ro: "Valea Orontes", en: "Orontes Valley"},
    description: { de: "Das Orontes-Tal durchschneidet den Westen Syriens und bildet seit Jahrtausenden eine wichtige landwirtschaftliche und kulturelle Lebensader.", hu: "Az Orontész-völgy átszeli Nyugat-Szíriát, és évezredek óta fontos mezőgazdasági és kulturális ütőérként szolgál.", ro: "Valea Orontes străbate vestul Siriei și de milenii formează o linie de viață agricolă și culturală esențială.", en: "The Orontes Valley cuts through western Syria and has formed an essential agricultural and cultural lifeline for millennia." , es: "El valle del Orontes atraviesa el oeste de Siria y ha sido una importante arteria agrícola y cultural durante milenios.", pt: "O vale do Orontes atravessa o oeste da Síria e tem sido uma importante artéria agrícola e cultural durante milênios.", fr: "La vallée de l'Oronte traverse l'ouest de la Syrie et constitue une artère agricole et culturelle majeure depuis des millénaires."},
    facts: {
      de: ["Wichtiges Bewässerungsgebiet", "Reichtum an archäologischen Stätten", "Prägt Städte wie Homs und Hama"],
      hu: ["Fontos öntözési terület", "Régészeti lelőhelyekben gazdag", "Olyan városokat határoz meg, mint Homsz és Hamá"],
      ro: ["Zonă importantă de irigare", "Bogată în situri arheologice", "Definește orașe precum Homs și Hama"],
      en: ["Important irrigation area", "Rich in archaeological sites", "Defines cities like Homs and Hama"],
      es: ["Importante zona de riego", "Riqueza en sitios arqueológicos", "Marca ciudades como Homs y Hama"],
      pt: ["Importante zona de irrigação", "Riqueza em sítios arqueológicos", "Marca cidades como Homs e Hama"],
      fr: ["Zone d'irrigation importante", "Richesse en sites archéologiques", "Façonne des villes comme Homs et Hama"],
    }, image: "/poi-images/orontes-valley-relief-v2.webp",
    descriptionAdvanced: {
      de: "Das Orontes-Tal ist ein markanter tektonischer Grabenbruch in der Levante, durch den der Fluss Orontes (Asi) fließt, der ungewöhnlicherweise von Süden nach Norden verläuft. Das Tal erstreckt sich vom Libanon über Syrien bis in die Türkei und bildet eine der fruchtbarsten Agrarregionen des Nahen Ostens. In Syrien weitet sich das Tal in der Ghab-Ebene aus, die nach umfangreichen Entwässerungsprojekten im 20. Jahrhundert zu einem wichtigen Zentrum für den Anbau von Getreide und Baumwolle wurde. Historisch gesehen war das Tal ein Kerngebiet bedeutender antiker Städte wie Hama und Apameia, wobei die berühmten Wasserräder (Norias) von Hama noch heute von der langen Tradition der Bewässerung zeugen. Geologisch ist das Tal Teil des Großen Afrikanischen Grabenbruchs und wird im Westen durch das nordsyrische Küstengebirge begrenzt. Es fungiert seit Jahrtausenden als natürliche Nord-Süd-Verbindung für Handelskarawanen und militärische Expeditionen.",
      hu: "Az Orontész-völgy egy jelentős tektonikus árok a Levantéban, amelyen az Orontész (Aszi) folyó halad át, amely rendhagyó módon délről észak felé folyik. A völgy Libanontól Szírián át egészen Törökországig húzódik, és a Közel-Kelet egyik legtermékenyebb mezőgazdasági területét alkotja. Szíriában a völgy a Ghab-síkságon szélesedik ki, amely a 20. századi nagyszabású mocsárlecsapolási munkálatok után a gabona- és gyapottermesztés központjává vált. Történelmileg a völgy olyan fontos antik városoknak adott otthont, mint Hamá vagy Apameia, ahol a híres hamái vízikerekek (noriák) ma is az öntözés ősi hagyományát hirdetik. Geológiailag a völgy a Nagy-afrikai-árokrendszer része, nyugatról a szíriai partvidéki hegység határolja. Évezredek óta fontos észak-déli irányú útvonalat biztosít a kereskedelmi karavánok és katonai hadjáratok számára.",
      ro: "Valea Orontes este o depresiune tectonică majoră în Levant, traversată de râul Orontes (Asi), care are particularitatea de a curge de la sud la nord. Valea se întinde din Liban, prin Siria, până în Turcia, formând una dintre cele mai fertile regiuni agricole din Orientul Mijlociu. În Siria, valea se lărgește în câmpia Ghab, care, după ample proiecte de drenaj în secolul al XX-lea, a devenit un centru vital pentru cultivarea cerealelor și a bumbacului. Din punct de vedere istoric, valea a fost nucleul unor orașe antice importante precum Hama și Apamea, faimoasele roți hidraulice (norias) din Hama fiind și astăzi martore ale vechii tradiții de irigații. Geologic, valea face parte din sistemul de rift al Marii Văi a Riftului și este mărginită la vest de munții de coastă sirieni. Aceasta a servit timp de milenii ca o rută naturală de transport nord-sud pentru caravanele comerciale și expedițiile militare.",
      en: "The Orontes Valley is a prominent tectonic rift valley in the Levant, traversed by the Orontes River (Asi), which uniquely flows from south to north. The valley stretches from Lebanon through Syria into Turkey, forming one of the most fertile agricultural regions in the Middle East. In Syria, the valley widens into the Ghab Plain, which became a major center for grain and cotton production following extensive drainage projects in the 20th century. Historically, the valley was the heartland of significant ancient cities such as Hama and Apamea, where the famous Norias of Hama still stand as testaments to long-standing irrigation traditions. Geologically, the valley is part of the Great Rift Valley system and is bordered to the west by the Syrian Coastal Mountains. For millennia, it has functioned as a natural north-south corridor for trade caravans and military expeditions.",
      es: "El valle del Orontes (árabe: Nahr al-Asi) se extiende a lo largo de unos 571 kilómetros desde la llanura de la Becá en el Líbano hasta su desembocadura en Turquía cerca de Antioquía. En Siria, el Orontes fluye a través de ciudades importantes como Homs, Hama y Jisr al-Shughur. El valle es una zona agrícola fértil con cultivo de algodón, cereales y cítricos. El río se utiliza intensamente para el riego, especialmente mediante la presa de Homs. La región tiene una rica historia, con yacimientos arqueológicos como Qatna y Ebla. El valle es de origen tectónico y se encuentra en una zona de fosa.",
      pt: "O vale do Orontes (árabe: Nahr al-Asi) estende-se por cerca de 571 quilômetros desde a planície de Bekaa, no Líbano, até à sua foz na Turquia, perto de Antáquia. Na Síria, o Orontes flui através de cidades importantes como Homs, Hama e Jisr al-Shughur. O vale é uma zona agrícola fértil com cultivo de algodão, cereais e citrinos. O rio é intensamente utilizado para irrigação, especialmente através da barragem de Homs. A região tem uma história rica, com locais arqueológicos como Qatna e Ebla. O vale é de origem tectônica e situa-se numa zona de falha.",
      fr: "La vallée de l'Oronte (en arabe Nahr al-Asi) s'étend sur environ 571 kilomètres depuis la plaine de la Bekaa au Liban jusqu'à son embouchure en Turquie, près d'Antakya. En Syrie, l'Oronte traverse des villes importantes comme Homs, Hama et Jisr al-Shughur. La vallée est une zone agricole fertile cultivant le coton, les céréales et les agrumes. La rivière est intensément utilisée pour l'irrigation, notamment grâce au barrage de Homs. La région possède une riche histoire, avec des sites archéologiques tels que Qatna et Ebla. La vallée est d'origine tectonique et se situe dans un fossé d'effondrement.",
    },
    factsAdvanced: {
      de: ["Fluss fließt von Süd nach Nord", "Beherbergt die Ghab-Ebene", "Hama ist eine Schlüsselstadt", "Teil des Großen Grabenbruchs", "Berühmt für die Norias-Wasserräder", "Zentrum für Baumwollanbau"],
      hu: ["A folyó délről északra folyik", "Itt található a Ghab-síkság", "Hamá a völgy kulcsvárosa", "A Nagy-afrikai-árok része", "Híres az ókori vízikerekekről", "A gyapottermesztés központja"],
      ro: ["Râul curge de la sud la nord", "Include câmpia fertilă Ghab", "Orașul cheie este Hama", "Parte a sistemului Riftului African", "Faimoasă pentru roțile norias", "Centru de producție de bumbac"],
      en: ["River flows south to north", "Home to the Ghab Plain", "Key city is Hama", "Part of the Great Rift Valley", "Famous for Norias water wheels", "Center for cotton cultivation"],
      es: ["Longitud total del Orontes: 571 kilómetros", "Longitud en Siria: 250 kilómetros", "Altura de la presa de Homs: 40 metros", "Superficie regada en el valle: 500 kilómetros cuadrados", "Ciudades más importantes: Homs (1,5 millones de habitantes), Hama (1 millón)", "Temperatura media del agua: 18°C"],
      pt: ["Comprimento total do Orontes: 571 quilômetros", "Comprimento na Síria: 250 quilômetros", "Altura da barragem de Homs: 40 metros", "Área irrigada no vale: 500 quilômetros quadrados", "Cidades mais importantes: Homs (1,5 milhão de habitantes), Hama (1 milhão)", "Temperatura média da água: 18°C"],
      fr: ["Longueur totale de l'Oronte : 571 kilomètres", "Longueur en Syrie : 250 kilomètres", "Hauteur du barrage de Homs : 40 mètres", "Surface irriguée dans la vallée : 500 kilomètres carrés", "Villes principales : Homs (1,5 million d'habitants), Hama (1 million)", "Température moyenne de l'eau : 18°C"],
    },
  },
  {
    id: "wadi-barada-relief-v2", "sights": {
      "de": [
            {
                  "name": "Nawawis",
                  "text": "Diese antiken Felsengräber im Barada-Tal zeugen von der frühen Besiedlung dieser wasserreichen Schlucht.",
                  "category": "historical",
                  "coords": [
                        36.066667,
                        33.566667
                  ]
            },
            {
                  "name": "Nabi Habeel Mosque",
                  "text": "Diese Moschee beherbergt ein monumentales, sieben Meter langes Grab, das dem biblischen Abel zugeschrieben wird.",
                  "category": "religious",
                  "coords": [
                        36.106099,
                        33.621262
                  ]
            },
            {
                  "name": "Alruodha",
                  "text": "Ein beliebter Erholungsort im landschaftlich reizvollen Wadi Barada, umgeben von Obstgärten und Bergen.",
                  "category": "landmark",
                  "coords": [
                        36.0401,
                        33.619548
                  ]
            },
            {
                  "name": "Splash",
                  "text": "Ein moderner Wasserpark im Barada-Tal, der Rutschen und Erfrischung in der Nähe des Flusses bietet.",
                  "category": "recreational",
                  "coords": [
                        36.055807,
                        33.600719
                  ]
            },
            {
                  "name": "Hawsh al `Arab",
                  "text": "Ruinen einer alten Siedlung im Barada-Tal, die steinerne Überreste vergangener Kulturen bewahren.",
                  "category": "historical",
                  "coords": [
                        36.049419,
                        33.565634
                  ]
            },
            {
                  "name": "Alehsan mosque",
                  "text": "Eine lokale Moschee im Barada-Tal, die als zentrales Gebetshaus für die umliegenden Dörfer dient.",
                  "category": "landmark",
                  "coords": [
                        36.077267,
                        33.659246
                  ]
            },
            {
                  "name": "Dayr Muqarran",
                  "text": "Dieses christliche Viertel im Barada-Tal bewahrt alte Traditionen in einer überwiegend ländlichen Umgebung.",
                  "category": "landmark",
                  "coords": [
                        36.136111,
                        33.630556
                  ]
            },
            {
                  "name": "Bilal Masjed",
                  "text": "Ein bescheidenes muslimisches Gebetshaus am Ufer des Barada-Flusses, benannt nach Bilal al-Habaschi.",
                  "category": "landmark",
                  "coords": [
                        36.058819,
                        33.537529
                  ]
            }
      ],
      "hu": [
            {
                  "name": "Nawawis",
                  "text": "Ezek az ókori sziklasírok a Barada-völgyben a vízben gazdag szurdok korai benépesüléséről tanúskodnak.",
                  "category": "historical",
                  "coords": [
                        36.066667,
                        33.566667
                  ]
            },
            {
                  "name": "Nabi Habeel Mosque",
                  "text": "Ez a mecset egy monumentális, hét méter hosszú sírnak ad otthont, amelyet a bibliai Ábelnek tulajdonítanak.",
                  "category": "religious",
                  "coords": [
                        36.106099,
                        33.621262
                  ]
            },
            {
                  "name": "Alruodha",
                  "text": "Népszerű üdülőhely a festői Wadi Baradában, gyümölcsösökkel és hegyekkel körülvéve.",
                  "category": "landmark",
                  "coords": [
                        36.0401,
                        33.619548
                  ]
            },
            {
                  "name": "Splash",
                  "text": "Modern vízi park a Barada-völgyben, amely csúszdákat és felfrissülést kínál a folyó közelében.",
                  "category": "recreational",
                  "coords": [
                        36.055807,
                        33.600719
                  ]
            },
            {
                  "name": "Hawsh al `Arab",
                  "text": "Egy régi település romjai a Barada-völgyben, amelyek megőrizték a múltbeli kultúrák kőmaradványait.",
                  "category": "historical",
                  "coords": [
                        36.049419,
                        33.565634
                  ]
            },
            {
                  "name": "Alehsan mosque",
                  "text": "Helyi mecset a Barada-völgyben, amely a környező falvak központi imaházaként szolgál.",
                  "category": "landmark",
                  "coords": [
                        36.077267,
                        33.659246
                  ]
            },
            {
                  "name": "Dayr Muqarran",
                  "text": "Ez a Barada-völgyi keresztény negyed ősi hagyományokat őriz a túlnyomórészt vidéki környezetben.",
                  "category": "landmark",
                  "coords": [
                        36.136111,
                        33.630556
                  ]
            },
            {
                  "name": "Bilal Masjed",
                  "text": "Szerény muszlim imaház a Barada-folyó partján, amelyet Bilal al-Habasiról neveztek el.",
                  "category": "landmark",
                  "coords": [
                        36.058819,
                        33.537529
                  ]
            }
      ],
      "ro": [
            {
                  "name": "Nawawis",
                  "text": "Aceste morminte antice săpate în stâncă din Valea Barada atestă așezarea timpurie în acest defileu bogat în apă.",
                  "category": "historical",
                  "coords": [
                        36.066667,
                        33.566667
                  ]
            },
            {
                  "name": "Nabi Habeel Mosque",
                  "text": "Această moschee adăpostește un mormânt monumental de șapte metri lungime, atribuit lui Abel din Biblie.",
                  "category": "religious",
                  "coords": [
                        36.106099,
                        33.621262
                  ]
            },
            {
                  "name": "Alruodha",
                  "text": "Un loc de recreere popular în pitorescul Wadi Barada, înconjurat de livezi și munți.",
                  "category": "landmark",
                  "coords": [
                        36.0401,
                        33.619548
                  ]
            },
            {
                  "name": "Splash",
                  "text": "Un parc acvatic modern în Valea Barada, oferind tobogane și răcoare în apropierea râului.",
                  "category": "recreational",
                  "coords": [
                        36.055807,
                        33.600719
                  ]
            },
            {
                  "name": "Hawsh al `Arab",
                  "text": "Ruinele unei vechi așezări din Valea Barada, care păstrează rămășițele de piatră ale culturilor trecute.",
                  "category": "historical",
                  "coords": [
                        36.049419,
                        33.565634
                  ]
            },
            {
                  "name": "Alehsan mosque",
                  "text": "Această moschee locală din Valea Barada servește ca lăcaș central de rugăciune pentru satele din jur.",
                  "category": "landmark",
                  "coords": [
                        36.077267,
                        33.659246
                  ]
            },
            {
                  "name": "Dayr Muqarran",
                  "text": "Acest cartier creștin din Valea Barada păstrează vechi tradiții într-un cadru predominant rural.",
                  "category": "landmark",
                  "coords": [
                        36.136111,
                        33.630556
                  ]
            },
            {
                  "name": "Bilal Masjed",
                  "text": "O casă de rugăciune musulmană modestă pe malul râului Barada, numită după Bilal al-Habashi.",
                  "category": "landmark",
                  "coords": [
                        36.058819,
                        33.537529
                  ]
            }
      ],
      "en": [
            {
                  "name": "Nawawis",
                  "text": "These ancient rock-cut tombs in the Barada valley bear witness to early settlement in this water-rich gorge.",
                  "category": "historical",
                  "coords": [
                        36.066667,
                        33.566667
                  ]
            },
            {
                  "name": "Nabi Habeel Mosque",
                  "text": "This mosque houses a monumental seven-meter-long tomb attributed to the biblical Abel.",
                  "category": "religious",
                  "coords": [
                        36.106099,
                        33.621262
                  ]
            },
            {
                  "name": "Alruodha",
                  "text": "A popular recreation spot in the scenic Wadi Barada, surrounded by orchards and mountains.",
                  "category": "landmark",
                  "coords": [
                        36.0401,
                        33.619548
                  ]
            },
            {
                  "name": "Splash",
                  "text": "A modern water park in the Barada valley, offering slides and refreshment near the river.",
                  "category": "recreational",
                  "coords": [
                        36.055807,
                        33.600719
                  ]
            },
            {
                  "name": "Hawsh al `Arab",
                  "text": "Ruins of an ancient settlement in the Barada valley, preserving stone remains of past cultures.",
                  "category": "historical",
                  "coords": [
                        36.049419,
                        33.565634
                  ]
            },
            {
                  "name": "Alehsan mosque",
                  "text": "A local mosque in the Barada valley, serving as a central prayer house for the surrounding villages.",
                  "category": "landmark",
                  "coords": [
                        36.077267,
                        33.659246
                  ]
            },
            {
                  "name": "Dayr Muqarran",
                  "text": "This Christian area in the Barada valley preserves ancient traditions within a predominantly rural setting.",
                  "category": "landmark",
                  "coords": [
                        36.136111,
                        33.630556
                  ]
            },
            {
                  "name": "Bilal Masjed",
                  "text": "A modest Muslim prayer house on the banks of the Barada river, named after Bilal al-Habashi.",
                  "category": "landmark",
                  "coords": [
                        36.058819,
                        33.537529
                  ]
            }
      ]
},
    type: "valley",
    parent: "SY-RD",
    coords: [36.1, 33.616667],
    name: { de: "Wadi Barada", hu: "Vádi Barada", ro: "Wadi Barada", en: "Wadi Barada"},
    description: { de: "Das Wadi Barada ist ein malerisches Gebirgstal, durch das der Fluss Barada fließt, um die Hauptstadt Damaskus mit Wasser zu versorgen.", hu: "A Vádi Barada egy festői hegyi völgy, amelyen a Barada folyó folyik keresztül, hogy ellássa vízzel a fővárost, Damaszkuszt.", ro: "Wadi Barada este o vale montană pitorească prin care curge râul Barada pentru a furniza apă capitalei Damasc.", en: "Wadi Barada is a picturesque mountain valley through which the Barada River flows to supply water to the capital, Damascus." , es: "Wadi Barada es un pintoresco valle montañoso a través del cual fluye el río Barada para abastecer de agua a la capital, Damasco.", pt: "Wadi Barada é um pitoresco vale montanhoso através do qual flui o rio Barada para abastecer de água a capital, Damasco.", fr: "Wadi Barada est une vallée montagneuse pittoresque à travers laquelle coule la rivière Barada pour alimenter en eau la capitale, Damas."},
    facts: {
      de: ["Wichtigste Wasserquelle für Damaskus", "Liegt im Anti-Libanon-Gebirge", "Von steilen Klippen umgeben"],
      hu: ["Damaszkusz legfontosabb vízforrása", "Az Antilibanon-hegységben található", "Meredek sziklák veszik körül"],
      ro: ["Cea mai importantă sursă de apă pentru Damasc", "Situat în Munții Anti-Liban", "Înconjurat de stânci abrupte"],
      en: ["Most important water source for Damascus", "Located in the Anti-Lebanon Mountains", "Surrounded by steep cliffs"],
      es: ["Principal fuente de agua para Damasco", "Situado en la cordillera del Antilíbano", "Rodeado de acantilados escarpados"],
      pt: ["Principal fonte de água para Damasco", "Situado na cordilheira do Antilíbano", "Rodeado por falésias escarpadas"],
      fr: ["Source d'eau principale pour Damas", "Située dans la chaîne de l'Anti-Liban", "Entourée de falaises abruptes"],
    }, image: "/poi-images/wadi-barada-relief-v2.webp",
    descriptionAdvanced: {
      de: "Das Wadi Barada ist ein schmales, flussreiches Tal im Antilibanon-Gebirge nordwestlich von Damaskus, durch das der Fluss Barada fließt. Es ist seit der Antike die Lebensader der syrischen Hauptstadt, da der Fluss die Oase Ghuta bewässert und Damaskus seine Existenz verdankt. Die Quelle Ain al-Fijah im Tal liefert den Großteil des Trinkwassers für die Millionenstadt und ist daher von immenser strategischer Bedeutung. Geologisch ist das Tal tief in das Kalkgestein eingeschnitten und bietet eine spektakuläre Landschaft mit steilen Felswänden und üppiger Vegetation entlang des Flusslaufs. Entlang des Tals verlaufen wichtige Verkehrsverbindungen zwischen Damaskus und der libanesischen Grenze, darunter eine historische Eisenbahnstrecke. Historisch war das Wadi Barada Teil der antiken Region Abilene und beherbergt Ruinen aus römischer und byzantinischer Zeit, die von seiner langjährigen Besiedlung zeugen.",
      hu: "A Vádi Barada egy szűk, vízben gazdag völgy az Antilibanon-hegységben, Damaszkusztól északnyugatra, amelyen a Barada-folyó halad át. Ez a völgy az ókor óta a szíriai főváros életereje, mivel a folyó öntözi a Gúta-oázist, és Damaszkusz léte köszönhető neki. A völgyben található Ajn al-Fidzsah forrás biztosítja a többmilliós nagyváros ivóvizének jelentős részét, ezért stratégiai jelentősége felbecsülhetetlen. Geológiailag a völgy mélyen bevágódik a mészkő kőzetbe, látványos tájat alkotva meredek sziklafalakkal és buja vegetációval a folyó mentén. A völgyben fontos közlekedési útvonalak haladnak Damaszkusz és a libanoni határ között, beleértve egy történelmi vasútvonalat is. Történelmileg a Vádi Barada az ókori Abiléné régió része volt, és számos római, valamint bizánci kori romot őriz.",
      ro: "Wadi Barada este o vale îngustă și bogată în apă, situată în munții Anti-Liban, la nord-vest de Damasc, fiind traversată de râul Barada. Aceasta a fost încă din antichitate artera vitală a capitalei siriene, deoarece râul irigă oaza Ghouta, Damascul datorându-și existența acestui curs de apă. Izvorul Ain al-Fijah, situat în vale, furnizează cea mai mare parte a apei potabile pentru metropolă, având astfel o importanță strategică imensă. Din punct de vedere geologic, valea este săpată adânc în roca calcaroasă, oferind un peisaj spectaculos cu pereți stâncoși abrupți și vegetație luxuriantă de-a lungul râului. Valea găzduiește rute de transport importante între Damasc și granița cu Libanul, inclusiv o cale ferată istorică. Din punct de vedere istoric, Wadi Barada a făcut parte din regiunea antică Abilene și păstrează ruine din perioadele romană și bizantină.",
      en: "Wadi Barada is a narrow, water-rich valley located in the Anti-Lebanon Mountains northwest of Damascus, through which the Barada River flows. It has been the lifeblood of the Syrian capital since antiquity, as the river irrigates the Ghouta oasis and is the reason for the city's location. The Ain al-Fijah spring within the valley provides the majority of the drinking water for the metropolitan area, making it of immense strategic importance. Geologically, the valley is deeply incised into limestone rock, offering a spectacular landscape with steep cliffs and lush vegetation along the riverbank. The valley contains important transport routes connecting Damascus to the Lebanese border, including a historic railway line. Historically, Wadi Barada was part of the ancient region of Abilene and contains ruins from the Roman and Byzantine periods, testifying to its long history of settlement.",
      es: "Wadi Barada es un valle de unos 20 kilómetros de largo al noroeste de Damasco, a través del cual fluye el río Barada. El Barada es el río principal que nutre el oasis de Damasco. El valle es estrecho y está rodeado de escarpadas paredes rocosas. Es conocido por sus históricos molinos de agua y la antigua calzada romana que conducía a Baalbek. Las fuentes del Barada se encuentran en la cordillera del Antilíbano. La región es una zona de recreo popular con restaurantes y piscinas al aire libre. El río está fuertemente regulado y su agua se utiliza para el riego de la llanura de Ghuta. El valle se caracteriza por la vegetación mediterránea y terrazas agrícolas.",
      pt: "Wadi Barada é um vale com cerca de 20 quilômetros de extensão a noroeste de Damasco, através do qual flui o rio Barada. O Barada é o rio principal que nutre o oásis de Damasco. O vale é estreito e rodeado por íngremes paredes rochosas. É conhecido pelos seus históricos moinhos de água e pela antiga estrada romana que conduzia a Baalbek. As fontes do Barada situam-se na cordilheira do Antilíbano. A região é uma zona de lazer popular com restaurantes e piscinas ao ar livre. O rio é fortemente regulado e a sua água é utilizada para a irrigação da planície de Ghuta. O vale é caracterizado por vegetação mediterrânea e terraços agrícolas.",
      fr: "Wadi Barada est une vallée d'environ 20 kilomètres de long au nord-ouest de Damas, à travers laquelle coule la rivière Barada. Le Barada est la rivière principale qui alimente l'oasis de Damas. La vallée est étroite et entourée de parois rocheuses abruptes. Elle est connue pour ses moulins à eau historiques et l'ancienne route romaine qui menait à Baalbek. Les sources du Barada se trouvent dans la chaîne de l'Anti-Liban. La région est une zone de loisirs populaire avec des restaurants et des piscines en plein air. La rivière est fortement régulée et son eau est utilisée pour l'irrigation de la plaine de la Ghouta. La vallée est caractérisée par une végétation méditerranéenne et des terrasses agricoles.",
    },
    factsAdvanced: {
      de: ["Hauptquelle für Damaskus", "Liegt im Antilibanon-Gebirge", "Fluss Barada fließt hindurch", "Standort der Ain al-Fijah Quelle", "Historische Region Abilene", "Wichtige Route zum Libanon"],
      hu: ["Damaszkusz fő ivóvízbázisa", "Az Antilibanon-hegységben fekszik", "A Barada-folyó szeli át", "Ajn al-Fidzsah forrás helyszíne", "Az ókori Abiléné része", "Kulcsfontosságú út Libanon felé"],
      ro: ["Sursă principală de apă pentru Damasc", "Situată în munții Anti-Liban", "Traversată de râul Barada", "Găzduiește izvorul Ain al-Fijah", "Parte a regiunii antice Abilene", "Rută cheie către Liban"],
      en: ["Main water source for Damascus", "Located in the Anti-Lebanon range", "Traversed by the Barada River", "Site of Ain al-Fijah spring", "Part of ancient Abilene region", "Key route to the Lebanese border"],
      es: ["Longitud del valle: 20 kilómetros", "Longitud del río Barada: 84 kilómetros", "Número de molinos de agua históricos: 12", "Diferencia de altura desde el origen hasta la desembocadura: 800 metros", "Consumo de agua para Damasco: 40% del agua del Barada", "Número de restaurantes de verano: más de 50"],
      pt: ["Comprimento do vale: 20 quilômetros", "Comprimento do rio Barada: 84 quilômetros", "Número de moinhos de água históricos: 12", "Diferença de altura desde a origem até à foz: 800 metros", "Consumo de água para Damasco: 40% da água do Barada", "Número de restaurantes de verão: mais de 50"],
      fr: ["Longueur de la vallée : 20 kilomètres", "Longueur de la rivière Barada : 84 kilomètres", "Nombre de moulins à eau historiques : 12", "Dénivelé de la source à l'embouchure : 800 mètres", "Consommation d'eau pour Damas : 40 % de l'eau du Barada", "Nombre de restaurants d'été : plus de 50"],
    },
  },
  {
    id: "jabal-al-shumariyah-relief-v2",
    type: "mountain",
    parent: "SY-HO",
    coords: [37.333333, 34.75],
    name: { de: "Dschebel al-Schumarija", hu: "Dzsebel as-Sumarijja", ro: "Jabal al-Shumariyah", en: "Jabal al-Shumariyah"},
    description: { de: "Der Dschebel al-Schumarija ist ein Gebirgszug im Gouvernement Homs, der den Übergang von fruchtbaren Ebenen zur Wüste markiert.", hu: "A Dzsebel as-Sumarijja egy hegylánc Homsz tartományban, amely a termékeny síkságok és a sivatag közötti átmenetet jelöli.", ro: "Jabal al-Shumariyah este un lanț muntos în guvernoratul Homs care marchează tranziția de la câmpiile fertile la deșert.", en: "Jabal al-Shumariyah is a mountain range in the Homs Governorate that marks the transition from fertile plains to the desert." , es: "Jabal al-Shumariyah es una cadena montañosa en la gobernación de Homs que marca la transición de las llanuras fértiles al desierto.", pt: "Jabal al-Shumariyah é uma cordilheira na província de Homs que marca a transição de planícies férteis para o deserto.", fr: "Le Jabal al-Shumariyah est une chaîne de montagnes dans le gouvernorat de Homs qui marque la transition entre les plaines fertiles et le désert."},
    facts: {
      de: ["Östlich von Homs gelegen", "Trockenes Klima", "Dünn besiedelte Region"],
      hu: ["Homsztól keletre található", "Száraz éghajlat", "Ritkán lakott régió"],
      ro: ["Situat la est de Homs", "Climă aridă", "Regiune slab populată"],
      en: ["Located east of Homs", "Arid climate", "Sparsely populated region"],
      es: ["Situado al este de Homs", "Clima seco", "Región escasamente poblada"],
      pt: ["Localizado a leste de Homs", "Clima seco", "Região escasamente povoada"],
      fr: ["Situé à l'est de Homs", "Climat sec", "Région peu peuplée"],
    }, image: "/poi-images/jabal-al-shumariyah-relief-v2.webp",
    descriptionAdvanced: {
      de: "Der Jabal al-Shumariyah ist ein Mittelgebirgszug in Zentralsyrien, nordöstlich der Stadt Homs gelegen. Er gehört zum syrischen Wüstenhochland und bildet eine Übergangszone zwischen den fruchtbaren Ebenen im Westen und der trockenen Badia-Steppe im Osten. Die Erhebungen erreichen moderate Höhen von bis zu 1.000 Metern und sind durch ein semi-arides Klima geprägt, das nur eine spärliche Vegetation zulässt. Geologisch besteht die Region vor allem aus Sedimentgestein, das reich an Phosphaten ist, was Syrien zu einem bedeutenden Exporteur dieses Rohstoffs macht. Historisch war die Gegend ein Durchgangsgebiet für Beduinenstämme und liegt in der Nähe wichtiger antiker Handelswege, die die Küste mit dem Euphrat-Tal verbanden. In der jüngeren Geschichte erlangte das Gebiet strategische Bedeutung durch seine Lage nahe den Erdgasfeldern und den Transportwegen zwischen Homs und Palmyra.",
      hu: "A Dzsebel al-Sumarijja egy középhegység Közép-Szíriában, Homstól északkeletre. A szíriai sivatagi felföld része, és átmeneti zónát képez a nyugati termékeny síkságok és a keleti száraz Bádija-sztyeppe között. A hegyvonulat mérsékelt magasságokat ér el, legmagasabb pontjai 1000 méter körül alakulnak, éghajlata pedig félsivatagi, ami ritkás vegetációt tesz lehetővé. Geológiailag a régió főként üledékes kőzetekből áll, amelyek foszfátban gazdagok, így Szíria a világ egyik fontos foszfátexportőrévé vált. Történelmileg a terület a beduin törzsek vándorlási útvonala volt, és fontos ókori kereskedelmi utak mentén feküdt, amelyek a tengerpartot kötötték össze az Eufrátesz völgyével. A közelmúltban a térség stratégiai jelentősége megnőtt a földgázmezők közelsége és a Homs és Palmüra közötti szállítási útvonalak ellenőrzése miatt.",
      ro: "Jabal al-Shumariyah este un lanț muntos de înălțime medie situat în centrul Siriei, la nord-est de orașul Homs. Acesta face parte din podișul deșertic sirian și reprezintă o zonă de tranziție între câmpiile fertile din vest și stepa aridă Badia din est. Înălțimile ating altitudini moderate de până la 1.000 de metri și sunt caracterizate de un climat semi-arid, care permite doar o vegetație rară. Din punct de vedere geologic, regiunea este compusă în principal din roci sedimentare bogate în fosfați, ceea ce face din Siria un exportator important al acestei materii prime. Din punct de vedere istoric, zona a fost un loc de trecere pentru triburile de beduini și se află în apropierea unor rute comerciale antice importante care legau coasta de valea Eufratului. În istoria recentă, zona a dobândit o importanță strategică datorită apropierii de câmpurile de gaze naturale și de rutele de transport dintre Homs și Palmyra.",
      en: "Jabal al-Shumariyah is a mountain range of moderate elevation located in central Syria, northeast of the city of Homs. It is part of the Syrian desert highland and serves as a transition zone between the fertile plains to the west and the arid Badia steppe to the east. The peaks reach heights of up to 1,000 meters and are characterized by a semi-arid climate that supports only sparse vegetation. Geologically, the region consists primarily of sedimentary rock rich in phosphates, making Syria a significant exporter of this raw material. Historically, the area was a transit zone for Bedouin tribes and lies near important ancient trade routes connecting the coast with the Euphrates Valley. In recent history, the area has gained strategic significance due to its proximity to natural gas fields and the transportation routes between Homs and Palmyra.",
      es: "Jabal al-Shumariyah es una montaña en la cordillera costera siria con una altitud de unos 1.200 metros. Se encuentra al suroeste de Latakia y forma parte de las montañas Al-Ansariyah. La montaña está densamente boscosa con pinos carrascos y robles. En las laderas inferiores se cultiva el olivo. La región está relativamente poco poblada. La cima ofrece una amplia vista de la costa. En los alrededores hay varios pueblos que viven de la agricultura y el turismo. La montaña es un destino popular para senderistas y amantes de la naturaleza. El clima es mediterráneo con inviernos suaves y veranos cálidos.",
      pt: "Jabal al-Shumariyah é uma montanha na cordilheira costeira síria com uma altitude de cerca de 1.200 metros. Situa-se a sudoeste de Latakia e faz parte das montanhas Al-Ansariyah. A montanha é densamente arborizada com pinheiros de Alepo e carvalhos. Nas encostas inferiores, pratica-se a olivicultura. A região é relativamente pouco povoada. O cume oferece uma ampla vista da costa. Nos arredores, há várias aldeias que vivem da agricultura e do turismo. A montanha é um destino popular para caminhantes e amantes da natureza. O clima é mediterrâneo, com invernos amenos e verões quentes.",
      fr: "Le Jabal al-Shumariyah est une montagne de la chaîne côtière syrienne culminant à environ 1 200 mètres. Elle est située au sud-ouest de Lattaquié et fait partie des monts Ansariyah. La montagne est densément boisée de pins d'Alep et de chênes. Sur les pentes inférieures, on cultive l'olivier. La région est relativement peu peuplée. Le sommet offre une vue étendue sur la côte. Aux alentours, plusieurs villages vivent de l'agriculture et du tourisme. La montagne est une destination prisée des randonneurs et des amoureux de la nature. Le climat est méditerranéen avec des hivers doux et des étés chauds.",
    },
    factsAdvanced: {
      de: ["Liegt nordöstlich von Homs", "Maximale Höhe ca. 1.000 m", "Reich an Phosphatvorkommen", "Semi-arides Wüstenklima", "Teil der syrischen Badia", "Strategische Gasfelder in der Nähe"],
      hu: ["Homstól északkeletre található", "Kb. 1000 méteres magasság", "Gazdag foszfátlelőhelyek", "Félsivatagi éghajlat", "A szíriai Bádija része", "Földgázmezők a közelben"],
      ro: ["Situat la nord-est de Homs", "Altitudine de aprox. 1.000 m", "Bogat în zăcăminte de fosfați", "Climat deșertic semi-arid", "Parte a stepei siriene Badia", "Câmpuri de gaze în apropiere"],
      en: ["Located northeast of Homs", "Max elevation around 1,000 m", "Rich in phosphate deposits", "Semi-arid desert climate", "Part of the Syrian Badia", "Strategic gas fields nearby"],
      es: ["Altitud: 1.200 metros", "Cobertura forestal: 80% de la superficie", "Número de especies de aves: 120", "Población en los pueblos de los alrededores: 5.000", "Rendimiento medio de aceitunas: 2.000 toneladas anuales", "Número de senderos: 4 rutas marcadas"],
      pt: ["Altitude: 1.200 metros", "Cobertura florestal: 80% da área", "Número de espécies de aves: 120", "População nas aldeias circundantes: 5.000", "Rendimento médio de azeitonas: 2.000 toneladas anuais", "Número de trilhas: 4 rotas marcadas"],
      fr: ["Altitude : 1 200 mètres", "Couverture forestière : 80 % de la surface", "Nombre d'espèces d'oiseaux : 120", "Population des villages environnants : 5 000", "Rendement moyen en olives : 2 000 tonnes par an", "Nombre de sentiers de randonnée : 4 itinéraires balisés"],
    },
  },
  {
    id: "jabal-al-shaar-relief-v2",
    type: "mountain",
    parent: "SY-HO",
    coords: [37.833333, 35.166667],
    name: { de: "Dschebel al-Schaar", hu: "Dzsebel as-Saar", ro: "Jabal al-Shaar", en: "Jabal al-Shaar"},
    image: "/poi-images/jabal-al-shaar-relief-v2.webp",
    description: { de: "Der Dschebel al-Schaar ist eine bergige Region im zentralsyrischen Wüstengebiet, die für ihre Erdgas- und Ölvorkommen bekannt ist.", hu: "A Dzsebel as-Saar egy hegyvidéki terület Közép-Szíria sivatagi régiójában, amely földgáz- és olajlelőhelyeiről ismert.", ro: "Jabal al-Shaar este o regiune muntoasă în zona deșertică din centrul Siriei, cunoscută pentru rezervele sale de gaze naturale și petrol.", en: "Jabal al-Shaar is a mountainous region in the central Syrian desert area, known for its natural gas and oil reserves." , es: "Jabal al-Shaar es una región montañosa en el desierto central de Siria, conocida por sus yacimientos de gas natural y petróleo.", pt: "Jabal al-Shaar é uma região montanhosa no deserto central da Síria, conhecida pelos seus depósitos de gás natural e petróleo.", fr: "Le Jabal al-Shaar est une région montagneuse du désert central syrien, connue pour ses gisements de gaz naturel et de pétrole."},
    facts: {
      de: ["Wichtige Gasfelder", "Strategische Bedeutung", "Raue Wüstenumgebung"],
      hu: ["Fontos gázmezők", "Stratégiai jelentőség", "Zord sivatagi környezet"],
      ro: ["Zăcăminte importante de gaze", "Importanță strategică", "Mediu deșertic aspru"],
      en: ["Important gas fields", "Strategic importance", "Harsh desert environment"],
      es: ["Importantes yacimientos de gas", "Importancia estratégica", "Entorno desértico agreste"],
      pt: ["Importantes campos de gás", "Importância estratégica", "Ambiente desértico agreste"],
      fr: ["Gisements de gaz importants", "Importance stratégique", "Environnement désertique rude"],
    },
    descriptionAdvanced: {
      de: "Der Jabal al-Shaar ist ein bedeutendes Gebirgsmassiv im Zentrum Syriens, nordwestlich von Palmyra gelegen. Die Region ist geologisch durch ausgedehnte Kalksteinformationen und bedeutende Lagerstätten von Erdgas und Erdöl geprägt, was sie zu einem der wichtigsten Energieknotenpunkte des Landes macht. Das Gelände ist schroff und erreicht Höhen von etwa 1.200 Metern, wobei das Klima extrem trocken ist und die Landschaft einer kargen Steinwüste gleicht. Historisch diente das Massiv als natürlicher Schutz für die Karawanenstadt Palmyra und kontrollierte die Zugänge zu den fruchtbaren Gebieten von Homs und Hama. Aufgrund seiner strategischen Lage und der wertvollen Ressourcen war der Jabal al-Shaar in den letzten Jahrzehnten Schauplatz zahlreicher Konflikte um die Kontrolle der Energieinfrastruktur. Die Flora ist auf widerstandsfähige Wüstensträucher beschränkt, während die Tierwelt an die extremen Temperaturschwankungen der syrischen Wüste angepasst ist.",
      hu: "A Dzsebel al-Saar egy jelentős hegymasszívum Közép-Szíriában, Palmürától északnyugatra. A régió geológiailag kiterjedt mészkőformációiról és jelentős földgáz-, valamint kőolajlelőhelyeiről ismert, ami az ország egyik legfontosabb energiaközpontjává teszi. A terep egyenetlen, a csúcsok elérik az 1200 méteres magasságot, az éghajlat pedig rendkívül száraz, a táj pedig kopár kősivatagra emlékeztet. Történelmileg a hegység természetes védelmet nyújtott Palmüra karavánvárosának, és ellenőrizte a Homs és Hamá termékeny vidékeire vezető utakat. Stratégiai elhelyezkedése és értékes erőforrásai miatt a Dzsebel al-Saar az elmúlt évtizedekben az energiainfrastruktúra ellenőrzéséért folytatott számos konfliktus színhelye volt. Növényvilága szívós sivatagi cserjékre korlátozódik, állatvilága pedig alkalmazkodott a szíriai sivatag szélsőséges hőmérsékleti ingadozásaihoz.",
      ro: "Jabal al-Shaar este un masiv muntos important în centrul Siriei, situat la nord-vest de Palmyra. Regiunea este caracterizată din punct de vedere geologic prin formațiuni extinse de calcar și zăcăminte semnificative de gaze naturale și petrol, ceea ce o face unul dintre cele mai importante noduri energetice ale țării. Terenul este accidentat și atinge înălțimi de aproximativ 1.200 de metri, clima fiind extrem de aridă, iar peisajul asemănător unui deșert stâncos sterp. Din punct de vedere istoric, masivul a servit drept protecție naturală pentru orașul-caravană Palmyra și a controlat accesul către zonele fertile Homs și Hama. Datorită locației sale strategice și a resurselor valoroase, Jabal al-Shaar a fost scena a numeroase conflicte în ultimele decenii pentru controlul infrastructurii energetice. Flora este limitată la arbuști de deșert rezistenți, în timp ce fauna este adaptată la fluctuațiile extreme de temperatură ale deșertului sirian.",
      en: "Jabal al-Shaar is a significant mountain massif in central Syria, located northwest of Palmyra. The region is geologically defined by extensive limestone formations and significant deposits of natural gas and oil, making it one of the country's most important energy hubs. The terrain is rugged, reaching elevations of around 1,200 meters, with an extremely arid climate and a landscape resembling a barren rocky desert. Historically, the massif served as natural protection for the caravan city of Palmyra and controlled access to the fertile regions of Homs and Hama. Due to its strategic location and valuable resources, Jabal al-Shaar has been the site of numerous conflicts in recent decades over the control of energy infrastructure. The flora is restricted to hardy desert shrubs, while the wildlife is adapted to the extreme temperature fluctuations of the Syrian desert.",
      es: "Jabal al-Shaar es una montaña de unos 900 metros en el centro de Siria, al este de Homs. Se encuentra en la estepa desértica siria y forma parte de las montañas de Palmira. La montaña consiste en caliza cretácica y está muy erosionada. La vegetación es escasa, con arbustos y hierbas dispersos. En los alrededores hay varias ruinas romanas y bizantinas, incluida la antigua Palmira. La montaña no tiene fuente de agua permanente. La región está escasamente poblada, principalmente por beduinos. El clima es árido con veranos calurosos e inviernos fríos.",
      pt: "Jabal al-Shaar é uma montanha de cerca de 900 metros no centro da Síria, a leste de Homs. Situa-se na estepe desértica síria e faz parte das montanhas de Palmira. A montanha é composta por calcário cretáceo e está muito erodida. A vegetação é escassa, com arbustos e ervas dispersos. Nos arredores, há várias ruínas romanas e bizantinas, incluindo a antiga Palmira. A montanha não tem fonte de água permanente. A região é escassamente povoada, principalmente por beduínos. O clima é árido, com verões quentes e invernos frios.",
      fr: "Le Jabal al-Shaar est une montagne d'environ 900 mètres dans le centre de la Syrie, à l'est de Homs. Elle se trouve dans la steppe désertique syrienne et fait partie des monts de Palmyre. La montagne est composée de calcaire crétacé et est fortement érodée. La végétation est clairsemée, avec quelques arbustes et herbes. Aux alentours se trouvent plusieurs ruines romaines et byzantines, dont l'ancienne Palmyre. La montagne ne possède aucune source d'eau permanente. La région est peu peuplée, principalement par des Bédouins. Le climat est aride avec des étés chauds et des hivers froids.",
    },
    factsAdvanced: {
      de: ["Zentrum der syrischen Gasförderung", "Nordwestlich von Palmyra", "Höhe bis zu 1.220 m", "Strategischer Militärposten", "Karges Wüstenplateau", "Reich an Kalkstein"],
      hu: ["A szíriai gázkitermelés központja", "Palmürától északnyugatra", "Akár 1220 m magasság", "Stratégiai katonai jelentőség", "Kopár sivatagi fennsík", "Mészkőben gazdag terület"],
      ro: ["Centru de extracție a gazelor", "Situat la nord-vest de Palmyra", "Altitudine de până la 1.220 m", "Post militar strategic", "Podiș deșertic arid", "Bogat în calcar"],
      en: ["Center of Syrian gas production", "Northwest of Palmyra", "Elevation up to 1,220 m", "Strategic military location", "Barren desert plateau", "Rich in limestone deposits"],
      es: ["Altitud: 900 metros", "Precipitación anual: menos de 200 milímetros", "Distancia a Palmira: 30 kilómetros", "Número de tumbas antiguas: 15", "Temperatura media estival: 38°C", "Densidad de población: 2 habitantes por kilómetro cuadrado"],
      pt: ["Altitude: 900 metros", "Precipitação anual: menos de 200 milímetros", "Distância de Palmira: 30 quilômetros", "Número de túmulos antigos: 15", "Temperatura média de verão: 38°C", "Densidade populacional: 2 habitantes por quilômetro quadrado"],
      fr: ["Altitude : 900 mètres", "Précipitations annuelles : moins de 200 millimètres", "Distance de Palmyre : 30 kilomètres", "Nombre de tombes antiques : 15", "Température moyenne estivale : 38°C", "Densité de population : 2 habitants par kilomètre carré"],
    },
  }
];
