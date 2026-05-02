import type { POI } from "./poi";

export const poiExtraMozambiqueReliefV2: POI[] = [
  {
    id: "serra-gorongosa-relief-v2",
    type: "mountain",
    parent: "MZ-SO",
    coords: [34.56, -18.48],
    name: { de: "Serra da Gorongosa", hu: "Gorongosa-hegység", ro: "Munții Gorongosa", en: "Gorongosa Mountains" },
    description: { de: "Ein bedeutendes Bergmassiv mit einer Höhe von über 1800 Metern.", hu: "Jelentős, 1800 méternél magasabb hegység.", ro: "Un masiv muntos important cu o altitudine de peste 1800 de metri.", en: "A significant mountain massif with an elevation of over 1800 meters." },
    facts: {
      de: ["Höchster Punkt ist der Gogogo.", "Reiche endemische Flora."],
      hu: ["A legmagasabb pontja a Gogogo.", "Gazdag endemikus növényvilág."],
      ro: ["Cel mai înalt punct este Gogogo.", "Floră endemică bogată."],
      en: ["Highest point is Gogogo.", "Rich endemic flora."]
    }
  },
  {
    id: "lebombo-berge-relief-v2",
    type: "mountain",
    parent: "MZ-MP",
    coords: [32.00, -26.00],
    name: { de: "Lebombo-Berge", hu: "Lebombo-hegység", ro: "Munții Lebombo", en: "Lebombo Mountains" },
    description: { de: "Eine lange, schmale Gebirgskette im Grenzgebiet zu Südafrika.", hu: "Hosszú, keskeny hegység a Dél-afrikai határ mentén.", ro: "Un lanț muntos lung și îngust la granița cu Africa de Sud.", en: "A long, narrow mountain range along the border with South Africa." },
    facts: {
      de: ["Erstrecken sich über 800 km.", "Vulkanisches Gestein."],
      hu: ["Több mint 800 km hosszan nyúlnak el.", "Vulkáni kőzet."],
      ro: ["Se întind pe mai mult de 800 km.", "Rocă vulcanică."],
      en: ["Extend over 800 km.", "Volcanic rock."]
    }
  },
  {
    id: "zungu-plateau-relief-v2",
    type: "relief",
    parent: "MZ-NI",
    coords: [36.50, -13.00],
    name: { de: "Zungu-Plateau", hu: "Zungu-fennsík", ro: "Podișul Zungu", en: "Zungu Plateau" },
    description: { de: "Ein ausgedehntes Hochplateau im Norden von Mosambik.", hu: "Kiterjedt magas fennsík Mozambik északi részén.", ro: "Un podiș înalt extins în nordul Mozambicului.", en: "An extensive high plateau in northern Mozambique." },
    facts: {
      de: ["Präsentiert hügelige Landschaften.", "Wichtige Wasserscheide."],
      hu: ["Dombvidéki tájak jellemzik.", "Fontos vízválasztó."],
      ro: ["Prezintă peisaje deluroase.", "Importantă cumpănă de ape."],
      en: ["Features hilly landscapes.", "Important watershed."]
    }
  },
  {
    id: "manica-hochland-relief-v2",
    type: "relief",
    parent: "MZ-MA",
    coords: [33.00, -19.00],
    name: { de: "Manica-Hochland", hu: "Manica-felföld", ro: "Podișul Manica", en: "Manica Highlands" },
    description: { de: "Eine hügelige Bergregion an der Grenze zu Simbabwe.", hu: "Dombos hegyvidék a Zimbabwei határ mentén.", ro: "Regiune muntoasă deluroasă la granița cu Zimbabwe.", en: "Hilly mountain region along the Zimbabwe border." },
    facts: {
      de: ["Günstiges Klima für Landwirtschaft.", "Hohe Niederschlagsmengen."],
      hu: ["Kedvező éghajlat a mezőgazdaságnak.", "Magas csapadékmennyiség."],
      ro: ["Climă favorabilă pentru agricultură.", "Precipitații ridicate."],
      en: ["Favorable climate for agriculture.", "High rainfall."]
    }
  },
  {
    id: "zambesi-delta-relief-v2",
    type: "relief",
    parent: "MZ-ZA",
    coords: [36.00, -18.50],
    name: { de: "Sambesi-Delta", hu: "Zambézi-delta", ro: "Delta Zambezi", en: "Zambezi Delta" },
    description: { de: "Ein riesiges Feuchtgebiet an der Mündung des Sambesi.", hu: "Hatalmas vizes élőhely a Zambézi torkolatánál.", ro: "O zonă umedă imensă la gura de vărsare a Zambezi.", en: "A massive wetland area at the mouth of the Zambezi." },
    facts: {
      de: ["Sehr fruchtbarer Boden.", "Wichtiger Lebensraum für Vögel."],
      hu: ["Nagyon termékeny talaj.", "Fontos élőhely madarak számára."],
      ro: ["Sol foarte fertil.", "Habitat important pentru păsări."],
      en: ["Very fertile soil.", "Important habitat for birds."]
    }
  },
  {
    id: "cabo-delgado-kuesten-relief-v2",
    type: "relief",
    parent: "MZ-CD",
    coords: [40.30, -12.00],
    name: { de: "Cabo Delgado Küste", hu: "Cabo Delgado-partvidék", ro: "Coasta Cabo Delgado", en: "Cabo Delgado Coast" },
    description: { de: "Ein flaches Küstengebiet mit vorgelagerten Inseln.", hu: "Lapos partvidék szigetekkel.", ro: "Zonă de coastă joasă cu insule în larg.", en: "Low-lying coastal area with offshore islands." },
    facts: {
      de: ["Sandige Strände.", "Korallenformationen."],
      hu: ["Homokos strandok.", "Korallképződmények."],
      ro: ["Plaje cu nisip.", "Formațiuni de corali."],
      en: ["Sandy beaches.", "Coral formations."]
    }
  },
  {
    id: "tite-tiefland-relief-v2",
    type: "relief",
    parent: "MZ-TE",
    coords: [33.50, -15.50],
    name: { de: "Tete-Tiefland", hu: "Tete-alföld", ro: "Câmpia Tete", en: "Tete Lowland" },
    description: { de: "Ein trockenes Becken entlang des Sambesi.", hu: "Száraz medence a Zambézi mentén.", ro: "Bazin arid de-a lungul Zambezi.", en: "An arid basin along the Zambezi." },
    facts: {
      de: ["Heißes Klima.", "Savannenvegetation."],
      hu: ["Forró éghajlat.", "Szavannai növényzet."],
      ro: ["Climă caldă.", "Vegetație de savană."],
      en: ["Hot climate.", "Savanna vegetation."]
    }
  },
  {
    id: "gaza-ebene-relief-v2",
    type: "relief",
    parent: "MZ-GA",
    coords: [33.00, -24.00],
    name: { de: "Gaza-Ebene", hu: "Gaza-síkság", ro: "Câmpia Gaza", en: "Gaza Plain" },
    description: { de: "Ein weites Flachland im südlichen Mosambik.", hu: "Széles síkság Mozambik déli részén.", ro: "O câmpie întinsă în sudul Mozambicului.", en: "A vast flatland in southern Mozambique." },
    facts: {
      de: ["Überwiegend sandig.", "Landwirtschaftlich genutzt."],
      hu: ["Jórészt homokos.", "Mezőgazdaságilag hasznosított."],
      ro: ["În mare parte nisipoasă.", "Utilizată agricol."],
      en: ["Mostly sandy.", "Used for agriculture."]
    }
  },
  {
    id: "niassa-waldgebiet-relief-v2",
    type: "forest",
    parent: "MZ-NI",
    coords: [37.00, -12.50],
    name: { de: "Niassa-Waldgebiet", hu: "Niassa-erdőség", ro: "Pădurile Niassa", en: "Niassa Forest" },
    description: { de: "Große Miombo-Waldflächen im Norden.", hu: "Nagy Miombo-erdők északon.", ro: "Păduri mari de Miombo în nord.", en: "Large Miombo forest areas in the north." },
    facts: {
      de: ["Typische Miombo-Vegetation.", "Heimat für viele Großtiere."],
      hu: ["Tipikus Miombo-növényzet.", "Sok nagyvad otthona."],
      ro: ["Vegetație tipică de Miombo.", "Acasă pentru multe animale mari."],
      en: ["Typical Miombo vegetation.", "Home to many large animals."]
    }
  },
  {
    id: "nampula-hollan-relief-v2",
    type: "relief",
    parent: "MZ-NA",
    coords: [39.00, -15.00],
    name: { de: "Nampula-Hochland", hu: "Nampula-felföld", ro: "Podișul Nampula", en: "Nampula Plateau" },
    description: { de: "Ein hügeliges Plateau im Nordosten.", hu: "Dombos fennsík északkeleten.", ro: "Podiș deluros în nord-est.", en: "A hilly plateau in the northeast." },
    facts: {
      de: ["Fruchtbare Region.", "Granitfelsen."],
      hu: ["Termékeny régió.", "Gránitsziklák."],
      ro: ["Regiune fertilă.", "Roci de granit."],
      en: ["Fertile region.", "Granite rocks."]
    }
  },
  {
    id: "mount-namuli-relief-v2",
    type: "mountain",
    parent: "MZ-ZA",
    coords: [37.05, -15.42],
    name: { de: "Mount Namuli", hu: "Namuli-hegy", ro: "Muntele Namuli", en: "Mount Namuli" },
    description: { de: "Der zweithöchste Berg Mosambiks.", hu: "Mozambik második legmagasabb hegye.", ro: "Al doilea cel mai înalt munte din Mozambic.", en: "The second-highest mountain in Mozambique." },
    facts: {
      de: ["Höhe ca. 2419 m.", "Wichtiger Hotspot für Biodiversität."],
      hu: ["Magassága kb. 2419 m.", "Fontos biodiverzitási központ."],
      ro: ["Altitudine aprox. 2419 m.", "Punct fierbinte important pentru biodiversitate."],
      en: ["Elevation approx. 2419 m.", "Important biodiversity hotspot."]
    }
  },
  {
    id: "mount-binga-relief-v2",
    type: "mountain",
    parent: "MZ-MA",
    coords: [32.76, -19.98],
    name: { de: "Mount Binga", hu: "Binga-hegy", ro: "Muntele Binga", en: "Mount Binga" },
    description: { de: "Der höchste Berg Mosambiks an der Grenze zu Simbabwe.", hu: "Mozambik legmagasabb hegye a Zimbabwei határnál.", ro: "Cel mai înalt munte din Mozambic la granița cu Zimbabwe.", en: "The highest mountain in Mozambique on the Zimbabwe border." },
    facts: {
      de: ["Höhe 2436 m.", "Beliebt bei Bergsteigern."],
      hu: ["Magassága 2436 m.", "Népszerű a hegymászók körében."],
      ro: ["Altitudine 2436 m.", "Popular printre alpiniști."],
      en: ["Elevation 2436 m.", "Popular with mountaineers."]
    }
  },
  {
    id: "zambezia-kuesten-relief-v2",
    type: "relief",
    parent: "MZ-ZA",
    coords: [37.50, -17.50],
    name: { de: "Zambezia-Küste", hu: "Zambézia-partvidék", ro: "Coasta Zambezia", en: "Zambezia Coast" },
    description: { de: "Ein flaches, feuchtes Küstengebiet.", hu: "Lapos, nedves partvidék.", ro: "Zonă de coastă joasă și umedă.", en: "A flat, humid coastal region." },
    facts: {
      de: ["Viele Mangrovenwälder.", "Reiche Fischgründe."],
      hu: ["Sok mangrove-erdő.", "Gazdag halászterületek."],
      ro: ["Multe păduri de mangrove.", "Zone de pescuit bogate."],
      en: ["Many mangrove forests.", "Rich fishing grounds."]
    }
  },
  {
    id: "chimoio-plateau-relief-v2",
    type: "relief",
    parent: "MZ-MA",
    coords: [33.50, -19.10],
    name: { de: "Chimoio-Plateau", hu: "Chimoio-fennsík", ro: "Podișul Chimoio", en: "Chimoio Plateau" },
    description: { de: "Ein mäßig hohes Plateau im Zentrum.", hu: "Mérsékelten magas fennsík középen.", ro: "Podiș moderat de înalt în centru.", en: "A moderately high plateau in the center." },
    facts: {
      de: ["Kühlere Temperaturen.", "Geeignet für Obstbau."],
      hu: ["Hűvösebb hőmérséklet.", "Alkalmas gyümölcstermesztésre."],
      ro: ["Temperaturi mai răcoroase.", "Potrivit pentru pomicultură."],
      en: ["Cooler temperatures.", "Suitable for fruit growing."]
    }
  },
  {
    id: "pemba-bucht-relief-v2",
    type: "relief",
    parent: "MZ-CD",
    coords: [40.50, -12.90],
    name: { de: "Pemba-Bucht", hu: "Pemba-öböl", ro: "Golful Pemba", en: "Pemba Bay" },
    description: { de: "Eine tiefe, geschützte Bucht im Norden.", hu: "Mély, védett öböl északon.", ro: "Un golf adânc și protejat în nord.", en: "A deep, sheltered bay in the north." },
    facts: {
      de: ["Idealer Naturhafen.", "Klares Wasser."],
      hu: ["Ideális természetes kikötő.", "Tiszta víz."],
      ro: ["Port natural ideal.", "Apă clară."],
      en: ["Ideal natural harbor.", "Clear water."]
    }
  },
  {
    id: "lupata-massiv-relief-v2",
    type: "mountain",
    parent: "MZ-TE",
    coords: [33.70, -17.50],
    name: { de: "Lupata-Massiv", hu: "Lupata-hegység", ro: "Masivul Lupata", en: "Lupata Massif" },
    description: { de: "Ein felsiges Massiv nahe dem Sambesi.", hu: "Sziklás hegyvonulat a Zambézi közelében.", ro: "Masiv stâncos lângă Zambezi.", en: "A rocky massif near the Zambezi." },
    facts: {
      de: ["Schroffe Felsen.", "Schluchtenbildung."],
      hu: ["Zord sziklák.", "Szurdokvölgyek."],
      ro: ["Stânci abrupte.", "Formare de chei."],
      en: ["Craggy rocks.", "Gorge formation."]
    }
  },
  {
    id: "morrumbala-berg-relief-v2",
    type: "mountain",
    parent: "MZ-ZA",
    coords: [35.50, -17.30],
    name: { de: "Morrumbala-Berg", hu: "Morrumbala-hegy", ro: "Muntele Morrumbala", en: "Mount Morrumbala" },
    description: { de: "Ein isolierter Inselberg in der Sambezia-Ebene.", hu: "Elszigetelt szigethegy a Zambézi-alföldön.", ro: "Munte izolat în câmpia Zambezia.", en: "An isolated inselberg in the Zambezia plain." },
    facts: {
      de: ["Markantes Wahrzeichen.", "Dichte Vegetation am Gipfel."],
      hu: ["Jellegzetes tájékozódási pont.", "Sűrű növényzet a csúcson."],
      ro: ["Punct de reper marcat.", "Vegetație densă pe vârf."],
      en: ["Striking landmark.", "Dense vegetation at the peak."]
    }
  },
  {
    id: "tite-hochland-relief-v2",
    type: "relief",
    parent: "MZ-TE",
    coords: [34.00, -14.50],
    name: { de: "Tete-Hochland", hu: "Tete-felföld", ro: "Podișul Tete", en: "Tete Highlands" },
    description: { de: "Ein bergiges Gebiet im Nordwesten von Tete.", hu: "Hegyvidéki terület Tete északnyugati részén.", ro: "Zonă muntoasă în nord-vestul provinciei Tete.", en: "A mountainous area in the northwest of Tete." },
    facts: {
      de: ["Trockene Bergwälder.", "Felsige Böden."],
      hu: ["Száraz hegyi erdők.", "Sziklás talaj."],
      ro: ["Păduri montane uscate.", "Soluri stâncoase."],
      en: ["Dry mountain forests.", "Rocky soils."]
    }
  },
  {
    id: "incomati-tal-relief-v2",
    type: "relief",
    parent: "MZ-MP",
    coords: [32.50, -25.20],
    name: { de: "Incomati-Tal", hu: "Incomati-völgy", ro: "Valea Incomati", en: "Incomati Valley" },
    description: { de: "Ein fruchtbares Tal in der Provinz Maputo.", hu: "Termékeny völgy Maputo tartományban.", ro: "Vale fertilă în provincia Maputo.", en: "A fertile valley in the Maputo province." },
    facts: {
      de: ["Wichtiges Anbaugebiet.", "Flusslandschaft."],
      hu: ["Fontos mezőgazdasági terület.", "Folyóvölgyi táj."],
      ro: ["Zonă agricolă importantă.", "Peisaj fluvial."],
      en: ["Important agricultural area.", "River landscape."]
    }
  },
  {
    id: "bazaruto-duenen-relief-v2",
    type: "relief",
    parent: "MZ-IN",
    coords: [35.40, -21.70],
    name: { de: "Bazaruto-Dünen", hu: "Bazaruto-dűnék", ro: "Dunele Bazaruto", en: "Bazaruto Dunes" },
    description: { de: "Hohe Sanddünen auf der Insel Bazaruto.", hu: "Magas homokdűnék a Bazaruto-szigeten.", ro: "Dune înalte de nisip pe insula Bazaruto.", en: "High sand dunes on Bazaruto Island." },
    facts: {
      de: ["Feiner weißer Sand.", "Wandernde Dünen."],
      hu: ["Finom fehér homok.", "Vándorló dűnék."],
      ro: ["Nisip alb fin.", "Dune migratoare."],
      en: ["Fine white sand.", "Shifting dunes."]
    }
  },
  {
    id: "limpopo-delta-relief-v2",
    type: "relief",
    parent: "MZ-GA",
    coords: [33.70, -25.10],
    name: { de: "Limpopo-Delta", hu: "Limpopo-delta", ro: "Delta Limpopo", en: "Limpopo Delta" },
    description: { de: "Die Mündungsregion des Limpopo-Flusses.", hu: "A Limpopo folyó torkolati régiója.", ro: "Regiunea de vărsare a fluviului Limpopo.", en: "The delta region of the Limpopo River." },
    facts: {
      de: ["Schlammige Böden.", "Reich an Sedimenten."],
      hu: ["Iszapos talaj.", "Üledékben gazdag."],
      ro: ["Soluri mâloase.", "Bogată în sedimente."],
      en: ["Muddy soils.", "Rich in sediments."]
    }
  },
  {
    id: "gile-massiv-relief-v2",
    type: "mountain",
    parent: "MZ-ZA",
    coords: [37.50, -16.20],
    name: { de: "Gilé-Massiv", hu: "Gilé-hegység", ro: "Masivul Gilé", en: "Gilé Massif" },
    description: { de: "Ein hügeliges Massiv in der Gilé-Region.", hu: "Dombos hegység a Gilé régióban.", ro: "Masiv deluros în regiunea Gilé.", en: "A hilly massif in the Gilé region." },
    facts: {
      de: ["Bewaldete Hänge.", "Granitfelsen."],
      hu: ["Erdős lejtők.", "Gránitsziklák."],
      ro: ["Versanți împăduriți.", "Roci de granit."],
      en: ["Forested slopes.", "Granite rocks."]
    }
  },
  {
    id: "cahora-bassa-schlucht-relief-v2",
    type: "relief",
    parent: "MZ-TE",
    coords: [32.70, -15.60],
    name: { de: "Cahora-Bassa-Schlucht", hu: "Cahora Bassa-szurdok", ro: "Cheile Cahora Bassa", en: "Cahora Bassa Gorge" },
    description: { de: "Eine spektakuläre Schlucht am Sambesi.", hu: "Látványos szurdok a Zambézi folyón.", ro: "Un defileu spectaculos pe Zambezi.", en: "A spectacular gorge on the Zambezi." },
    facts: {
      de: ["Sehr steile Wände.", "Enge Flussführung."],
      hu: ["Nagyon meredek falak.", "Szűk folyómeder."],
      ro: ["Pereți foarte abrupți.", "Curs îngust al râului."],
      en: ["Very steep walls.", "Narrow river course."]
    }
  },
  {
    id: "niassa-hochland-relief-v2",
    type: "relief",
    parent: "MZ-NI",
    coords: [35.50, -12.50],
    name: { de: "Niassa-Hochland", hu: "Niassa-felföld", ro: "Podișul Niassa", en: "Niassa Highlands" },
    description: { de: "Ein Hochplateau nahe dem Malawisee.", hu: "Magas fennsík a Malawi-tó közelében.", ro: "Podiș înalt lângă Lacul Malawi.", en: "A high plateau near Lake Malawi." },
    facts: {
      de: ["Kühles Bergklima.", "Tolle Fernsicht."],
      hu: ["Hűvös hegyi éghajlat.", "Remek kilátás."],
      ro: ["Climă montană răcoroasă.", "Vedere panoramică excelentă."],
      en: ["Cool mountain climate.", "Great long-distance view."]
    }
  },
  {
    id: "mossuril-kuesten-relief-v2",
    type: "relief",
    parent: "MZ-NA",
    coords: [40.70, -14.90],
    name: { de: "Mossuril-Küste", hu: "Mossuril-partvidék", ro: "Coasta Mossuril", en: "Mossuril Coast" },
    description: { de: "Ein Abschnitt der Küste mit Lagunen.", hu: "Partszakasz lagúnákkal.", ro: "O porțiune de coastă cu lagune.", en: "A section of the coast with lagoons." },
    facts: {
      de: ["Sandige Buchten.", "Ruhiges Meer."],
      hu: ["Homokos öblök.", "Csendes tenger."],
      ro: ["Golfuri nisipoase.", "Mare liniștită."],
      en: ["Sandy bays.", "Calm sea."]
    }
  }
];
