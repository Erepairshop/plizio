
import type { POI } from "./poi";

export const poiExtraPortugalMixed: POI[] = [
  {
    id: "mountain-pico-ruivo-madeira-extra",
    type: "mountain",
    parent: "PT-30",
    coords: [-16.945, 32.759],
    name: { de: "Pico Ruivo", hu: "Pico Ruivo", ro: "Pico Ruivo", en: "Pico Ruivo" },
    description: {
      de: "Der höchste Gipfel der Insel Madeira mit 1.862 Metern, der atemberaubende Panoramablicke über die Insel und die Wolken bietet.",
      hu: "Madeira szigetének legmagasabb csúcsa, 1862 méterrel, lélegzetelállító panorámát nyújtva a szigetre és a felhőkre.",
      ro: "Cel mai înalt vârf de pe insula Madeira, la 1.862 de metri, oferind vederi panoramice uimitoare asupra insulei și a norilor.",
      en: "The highest peak on Madeira Island at 1,862 meters, offering breathtaking panoramic views above the clouds across the island."
    },
    facts: {
      de: ["Über einen anspruchsvollen Wanderweg vom Pico do Arieiro aus erreichbar.", "An klaren Tagen kann man die Nachbarinsel Porto Santo sehen.", "Die Landschaft ist oft dramatisch, mit Wolken, die die Täler füllen."],
      hu: ["Egy kihívást jelentő túraútvonalon érhető el a Pico do Arieiro-tól.", "Tiszta napokon látható a szomszédos Porto Santo sziget.", "A táj gyakran drámai, a völgyeket kitöltő felhőkkel."],
      ro: ["Accesibil printr-un traseu de drumeție provocator de la Pico do Arieiro.", "În zilele senine, se poate vedea insula vecină Porto Santo.", "Peisajul este adesea dramatic, cu nori umplând văile."],
      en: ["Accessible via a challenging hiking trail from Pico do Arieiro.", "On clear days, you can see the neighboring island of Porto Santo.", "The landscape is often dramatic, with clouds filling the valleys."]
    }
  },
  {
    id: "river-guadiana-river-extra",
    type: "river",
    parent: "PT-07",
    coords: [-7.4, 37.24],
    name: { de: "Fluss Guadiana", hu: "Guadiana folyó", ro: "Râul Guadiana", en: "Guadiana River" },
    description: {
      de: "Einer der Hauptflüsse der Iberischen Halbinsel, der auf einem langen Abschnitt die Grenze zwischen Portugal und Spanien bildet.",
      hu: "Az Ibériai-félsziget egyik fő folyója, amely hosszú szakaszon alkotja a határt Portugália és Spanyolország között.",
      ro: "Unul dintre principalele râuri din Peninsula Iberică, formând granița dintre Portugalia și Spania pe o porțiune lungă.",
      en: "One of the major rivers of the Iberian Peninsula, forming the border between Portugal and Spain for a long stretch."
    },
    facts: {
      de: ["Der Alqueva-Staudamm am Guadiana schuf einen der größten künstlichen Seen Europas.", "Mündet bei Vila Real de Santo António in den Golf von Cádiz.", "Unterstützt eine reiche Tierwelt, einschließlich vieler Vogelarten."],
      hu: ["A Guadianán lévő Alqueva-gát hozta létre Európa egyik legnagyobb mesterséges tavát.", "Vila Real de Santo António-nál ömlik a Cádizi-öbölbe.", "Gazdag vadvilágot tart fenn, beleértve számos madárfajt."],
      ro: ["Barajul Alqueva de pe Guadiana a creat unul dintre cele mai mari lacuri artificiale din Europa.", "Se varsă în Golful Cádiz la Vila Real de Santo António.", "Susține o faună bogată, inclusiv multe specii de păsări."],
      en: ["The Alqueva Dam on the Guadiana created one of Europe's largest artificial lakes.", "Flows into the Gulf of Cádiz at Vila Real de Santo António.", "Supports rich wildlife, including many bird species."]
    }
  },
  {
    id: "nature-ria-de-aveiro-lagoon-extra",
    type: "nature",
    parent: "PT-01",
    coords: [-8.7, 40.6],
    name: { de: "Lagune Ria de Aveiro", hu: "Ria de Aveiro lagúna", ro: "Laguna Ria de Aveiro", en: "Ria de Aveiro Lagoon" },
    description: {
      de: "Ein ausgedehntes Lagunensystem, das für seine Salinen, die bunten Moliceiro-Boote und seine reiche Vogelwelt bekannt ist.",
      hu: "Kiterjedt lagúnarendszer, amely sólepárlóiról, színes moliceiro csónakjairól és gazdag madárvilágáról ismert.",
      ro: "Un sistem lagunar extins, renumit pentru salinele sale, bărcile colorate moliceiro și avifauna bogată.",
      en: "An extensive lagoon system, renowned for its salt pans, colorful moliceiro boats, and rich birdlife."
    },
    facts: {
      de: ["Ein wichtiges Feuchtgebiet für Zugvögel.", "Die traditionelle Salzgewinnung wird noch praktiziert.", "Die Moliceiros wurden einst zur Ernte von Algen (moliço) verwendet."],
      hu: ["Fontos vizes élőhely a vonuló madarak számára.", "A hagyományos sókitermelést még mindig gyakorolják.", "A moliceirokat egykor az alga (moliço) betakarítására használták."],
      ro: ["O zonă umedă importantă pentru păsările migratoare.", "Extracția tradițională a sării este încă practicată.", "Moliceiros erau folosite odată pentru a recolta alge (moliço)."],
      en: ["An important wetland for migratory birds.", "Traditional salt extraction is still practiced.", "The moliceiros were once used to harvest seaweed (moliço)."]
    }
  },
  {
    id: "castle-marvao-castle-extra",
    type: "castle",
    parent: "PT-12",
    coords: [-7.37, 39.39],
    name: { de: "Burg von Marvão", hu: "Marvão vára", ro: "Castelul din Marvão", en: "Marvão Castle" },
    description: {
      de: "Eine spektakuläre mittelalterliche Burg, die auf einem hohen Felssporn thront und einen uneinnehmbaren Blick auf die Ebenen des Alentejo und die spanische Grenze bietet.",
      hu: "Látványos középkori vár egy magas sziklaszirten, amely bevehetetlen kilátást nyújt az Alentejo síkságaira és a spanyol határra.",
      ro: "Un castel medieval spectaculos, cocoțat pe o creastă înaltă, cu vederi inexpugnabile asupra câmpiilor din Alentejo și a graniței cu Spania.",
      en: "A spectacular medieval castle perched on a high crag, with impregnable views over the Alentejo plains and the Spanish border."
    },
    facts: {
      de: ["Das Dorf Marvão liegt innerhalb der Burgmauern.", "Bietet eine der besten Aussichten in ganz Portugal.", "War von strategischer Bedeutung in Konflikten mit Spanien."],
      hu: ["Marvão falu a várfalakon belül fekszik.", "Portugália egyik legjobb kilátását nyújtja.", "Stratégiai jelentőségű volt a Spanyolországgal vívott konfliktusokban."],
      ro: ["Satul Marvão se află în interiorul zidurilor castelului.", "Oferă una dintre cele mai bune priveliști din întreaga Portugalie.", "A fost de importanță strategică în conflictele cu Spania."],
      en: ["The village of Marvão is located within the castle walls.", "Offers one of the best views in all of Portugal.", "Was of strategic importance in conflicts with Spain."]
    }
  },
  {
    id: "historical-roman-temple-of-evora-extra",
    type: "historical",
    parent: "PT-07",
    coords: [-7.907, 38.572],
    name: { de: "Römischer Tempel von Évora", hu: "Évorai római templom", ro: "Templul Roman din Évora", en: "Roman Temple of Évora" },
    description: {
      de: "Der am besten erhaltene römische Tempel auf der Iberischen Halbinsel, ein Zeugnis der Bedeutung Évoras (damals Liberalitas Julia) während der Römerzeit.",
      hu: "Az Ibériai-félsziget legjobb állapotban fennmaradt római temploma, amely Évora (akkoriban Liberalitas Julia) jelentőségét tanúsítja a római korban.",
      ro: "Cel mai bine conservat templu roman din Peninsula Iberică, o mărturie a importanței Évorei (pe atunci Liberalitas Julia) în timpul perioadei romane.",
      en: "The best-preserved Roman temple in the Iberian Peninsula, a testament to Évora's importance (then called Liberalitas Julia) during the Roman era."
    },
    facts: {
      de: ["Wahrscheinlich dem Kaiserkult gewidmet.", "Oft fälschlicherweise als Tempel der Diana bezeichnet.", "Teil des UNESCO-Weltkulturerbes des historischen Zentrums von Évora."],
      hu: ["Valószínűleg a császári kultusznak szentelték.", "Gyakran tévesen Diana-templomnak nevezik.", "Évora történelmi központjának UNESCO Világörökség része."],
      ro: ["Probabil dedicat cultului imperial.", "Adesea numit greșit Templul Dianei.", "Parte a sitului Patrimoniului Mondial UNESCO al centrului istoric din Évora."],
      en: ["Likely dedicated to the imperial cult.", "Often mistakenly called the Temple of Diana.", "Part of the UNESCO World Heritage site of the Historic Centre of Évora."]
    }
  },
  {
    id: "kid-landmark-badoca-safari-park-extra",
    type: "kid-landmark",
    parent: "PT-15",
    coords: [-8.7, 38.1],
    name: { de: "Badoca Safari Park", hu: "Badoca Szafaripark", ro: "Parcul Safari Badoca", en: "Badoca Safari Park" },
    description: {
      de: "Ein Safaripark im Alentejo, in dem Besucher Tiere wie Giraffen, Zebras und Tiger in einer halbfreien Umgebung beobachten können.",
      hu: "Egy szafaripark az Alentejo régióban, ahol a látogatók olyan állatokat figyelhetnek meg, mint a zsiráfok, zebrák és tigrisek, egy félszabad környezetben.",
      ro: "Un parc safari în Alentejo unde vizitatorii pot observa animale precum girafe, zebre și tigri într-un mediu semi-liber.",
      en: "A safari park in Alentejo where visitors can observe animals like giraffes, zebras, and tigers in a semi-free environment."
    },
    facts: {
      de: ["Bietet eine 45-minütige Safaritour mit einem Traktor an.", "Hat auch einen Bereich, der Raubvögeln gewidmet ist.", "Kombiniert Freizeit mit Umweltbildung."],
      hu: ["45 perces szafaritúrát kínál traktorral.", "Van egy ragadozómadaraknak szentelt része is.", "Ötvözi a szabadidőt a környezeti neveléssel."],
      ro: ["Oferă un tur safari de 45 de minute cu tractorul.", "Are și o zonă dedicată păsărilor de pradă.", "Combină agrementul cu educația ecologică."],
      en: ["Offers a 45-minute safari tour on a tractor.", "Also has an area dedicated to birds of prey.", "Combines leisure with environmental education."]
    }
  },
  {
    id: "industry-corticeira-amorim-cork-industry-extra",
    type: "industry",
    parent: "PT-13",
    coords: [-8.5, 41.05],
    name: { de: "Corticeira Amorim Korkindustrie", hu: "Corticeira Amorim parafaipar", ro: "Industria de plută Corticeira Amorim", en: "Corticeira Amorim Cork Industry" },
    description: {
      de: "Der weltgrößte Hersteller von Korkprodukten mit Sitz in Portugal, der alles von Weinkorken bis hin zu Isolier- und Bodenbelägen herstellt.",
      hu: "A világ legnagyobb parafa termékeket gyártó vállalata, amelynek székhelye Portugáliában van, és mindent gyárt a borkurkától a szigetelőanyagokig és padlóburkolatokig.",
      ro: "Cel mai mare producător mondial de produse din plută, cu sediul în Portugalia, care produce de la dopuri de vin la izolații și pardoseli.",
      en: "The world's largest producer of cork products, based in Portugal, manufacturing everything from wine stoppers to insulation and flooring."
    },
    facts: {
      de: ["Ein Familienunternehmen, das im 19. Jahrhundert gegründet wurde.", "Ein Pionier in der Forschung und Entwicklung neuer Kork-Anwendungen.", "Ein globales Symbol für Nachhaltigkeit."],
      hu: ["Családi vállalkozás, amelyet a 19. században alapítottak.", "Úttörő az új parafa-alkalmazások kutatásában és fejlesztésében.", "A fenntarthatóság globális szimbóluma."],
      ro: ["O afacere de familie fondată în secolul al XIX-lea.", "Un pionier în cercetarea și dezvoltarea de noi aplicații pentru plută.", "Un simbol global al sustenabilității."],
      en: ["A family-run business founded in the 19th century.", "A pioneer in research and development for new cork applications.", "A global symbol of sustainability."]
    }
  },
  {
    id: "port-port-of-viana-do-castelo-extra",
    type: "port",
    parent: "PT-16",
    coords: [-8.83, 41.68],
    name: { de: "Hafen von Viana do Castelo", hu: "Viana do Castelo kikötője", ro: "Portul Viana do Castelo", en: "Port of Viana do Castelo" },
    description: {
      de: "Ein historischer Hafen, der für den Kabeljaufang berühmt war und sich heute zu einem Zentrum für Schiffsreparatur und den Bau von Offshore-Windkraftanlagen entwickelt.",
      hu: "Történelmi kikötő, amely a tőkehal-halászatról volt híres, ma a hajójavítás és a tengeri szélerőművek építésének központjává fejlődik.",
      ro: "Un port istoric, renumit pentru pescuitul de cod, care se dezvoltă acum într-un centru pentru reparații navale și construcția de platforme eoliene offshore.",
      en: "A historic port, famous for cod fishing, now developing into a hub for ship repair and offshore wind platform construction."
    },
    facts: {
      de: ["Die Estaleiros Navais de Viana do Castelo (ENVC) waren eine wichtige Schiffswerft.", "Wichtiger Hafen für die Windenergiebranche.", "Beherbergt das Museumsschiff Gil Eannes."],
      hu: ["Az Estaleiros Navais de Viana do Castelo (ENVC) egy fontos hajógyár volt.", "Fontos kikötő a szélenergia-ipar számára.", "Itt található a Gil Eannes múzeumhajó."],
      ro: ["Estaleiros Navais de Viana do Castelo (ENVC) a fost un șantier naval important.", "Port crucial pentru industria energiei eoliene.", "Găzduiește nava-muzeu Gil Eannes."],
      en: ["The Estaleiros Navais de Viana do Castelo (ENVC) was a major shipyard.", "Crucial port for the wind energy industry.", "Home to the Gil Eannes museum ship."]
    }
  },
  {
    id: "agriculture-olive-groves-of-tras-os-montes-extra",
    type: "agriculture",
    parent: "PT-04",
    coords: [-7.0, 41.5],
    name: { de: "Olivenhaine von Trás-os-Montes", hu: "Trás-os-Montes olajfaligetei", ro: "Livezile de măslini din Trás-os-Montes", en: "Olive Groves of Trás-os-Montes" },
    description: {
      de: "Diese Region im Nordosten Portugals ist bekannt für die Herstellung von hochwertigem Olivenöl mit geschützter Ursprungsbezeichnung (g.U.), das aus traditionellen Olivensorten gewonnen wird.",
      hu: "Ez az északkelet-portugáliai régió híres a kiváló minőségű, oltalom alatt álló eredetmegjelöléssel (OEM) ellátott olívaolaj előállításáról, amelyet hagyományos olajbogyófajtákból nyernek.",
      ro: "Această regiune din nord-estul Portugaliei este cunoscută pentru producerea de ulei de măsline de înaltă calitate cu Denumire de Origine Protejată (DOP), obținut din soiuri tradiționale de măsline.",
      en: "This northeastern region of Portugal is known for producing high-quality olive oil with a Protected Designation of Origin (PDO), derived from traditional olive varieties."
    },
    facts: {
      de: ["Das Öl ist bekannt für seinen fruchtigen Geschmack und sein Aroma.", "Viele Olivenhaine sind jahrhundertealt.", "Die Ernte erfolgt oft noch von Hand."],
      hu: ["Az olaj a gyümölcsös ízéről és aromájáról ismert.", "Sok olajfaliget évszázados.", "A betakarítás gyakran még mindig kézzel történik."],
      ro: ["Uleiul este cunoscut pentru gustul și aroma sa fructată.", "Multe livezi de măslini sunt vechi de secole.", "Recoltarea se face adesea manual."],
      en: ["The oil is known for its fruity taste and aroma.", "Many olive groves are centuries old.", "The harvesting is often still done by hand."]
    }
  },
  {
    id: "nature-caldeira-das-sete-cidades-extra",
    type: "nature",
    parent: "PT-20",
    coords: [-25.78, 37.87],
    name: { de: "Caldeira das Sete Cidades", hu: "Caldeira das Sete Cidades", ro: "Caldeira das Sete Cidades", en: "Caldeira das Sete Cidades" },
    description: {
      de: "Ein massiver Vulkankrater auf der Insel São Miguel, der zwei Seen beherbergt - einen grünen und einen blauen -, die durch eine schmale Brücke getrennt sind.",
      hu: "Hatalmas vulkáni kráter São Miguel szigetén, amely két tavat – egy zöldet és egy kéket – foglal magában, amelyeket egy keskeny híd választ el.",
      ro: "Un crater vulcanic masiv pe insula São Miguel, care găzduiește două lacuri - unul verde și unul albastru - separate de un pod îngust.",
      en: "A massive volcanic crater on São Miguel island, hosting two lakes - one green and one blue - separated by a narrow bridge."
    },
    facts: {
      de: ["Eines der 7 Naturwunder Portugals.", "Der Aussichtspunkt Vista do Rei bietet die berühmteste Aussicht.", "Die Seen haben unterschiedliche Farben aufgrund der Reflexion des Lichts von der Vegetation und dem Himmel."],
      hu: ["Portugália 7 természeti csodájának egyike.", "A Vista do Rei kilátó nyújtja a leghíresebb látványt.", "A tavak színe a növényzetről és az égről visszaverődő fény miatt különbözik."],
      ro: ["Una dintre cele 7 Minuni Naturale ale Portugaliei.", "Punctul de belvedere Vista do Rei oferă cea mai faimoasă priveliște.", "Lacurile au culori diferite datorită reflexiei luminii de pe vegetație și cer."],
      en: ["One of the 7 Natural Wonders of Portugal.", "The Vista do Rei viewpoint offers the most famous view.", "The lakes have different colors due to the reflection of light from vegetation and the sky."]
    }
  }
];
