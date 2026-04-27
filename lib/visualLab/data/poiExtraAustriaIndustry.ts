
import type { POI } from "./poi";

export const poiExtraAustriaIndustry: POI[] = [
  {
    id: "industry-voestalpine-stahlwelt-extra",
    type: "industry",
    parent: "AT-4",
    coords: [14.333, 48.283],
    name: { de: "voestalpine Stahlwelt", hu: "voestalpine Acélvilág", ro: "voestalpine Lumea Oțelului", en: "voestalpine Steel World" },
    description: {
      de: "Ein Erlebnis- und Ausstellungszentrum in Linz, das die Welt der Stahlerzeugung des internationalen Technologiekonzerns voestalpine präsentiert.",
      hu: "Élmény- és kiállítási központ Linzben, amely bemutatja a nemzetközi technológiai konszern, a voestalpine acélgyártásának világát.",
      ro: "Un centru de experiență și expoziție în Linz, care prezintă lumea producției de oțel a grupului tehnologic internațional voestalpine.",
      en: "An experience and exhibition center in Linz that presents the world of steel production of the international technology group voestalpine."
    },
    facts: {
      de: ["Interaktive Ausstellung über die Herstellung und Anwendung von Stahl.", "Werkstouren ermöglichen einen Blick in das aktive Stahlwerk.", "Einer der größten Industriestandorte Österreichs."],
      hu: ["Interaktív kiállítás az acél gyártásáról és felhasználásáról.", "Üzemlátogatások lehetővé teszik a betekintést a működő acélműbe.", "Ausztria egyik legnagyobb ipari telephelye."],
      ro: ["Expoziție interactivă despre producția și aplicarea oțelului.", "Tururile uzinei permit o privire în oțelăria activă.", "Unul dintre cele mai mari situri industriale din Austria."],
      en: ["Interactive exhibition on the production and application of steel.", "Plant tours allow a glimpse into the active steelworks.", "One of the largest industrial sites in Austria."]
    }
  },
  {
    id: "industry-red-bull-ring-extra",
    type: "industry",
    parent: "AT-6",
    coords: [14.764, 47.220],
    name: { de: "Red Bull Ring", hu: "Red Bull Ring", ro: "Red Bull Ring", en: "Red Bull Ring" },
    description: {
      de: "Eine international bekannte Motorsport-Rennstrecke in Spielberg, Steiermark, die Formel-1- und MotoGP-Rennen ausrichtet.",
      hu: "Nemzetközileg ismert motorsport versenypálya Spielbergben, Stájerországban, amely Forma-1-es és MotoGP-versenyeknek ad otthont.",
      ro: "Un circuit de curse de motorsport de renume internațional în Spielberg, Stiria, care găzduiește curse de Formula 1 și MotoGP.",
      en: "An internationally known motorsport racetrack in Spielberg, Styria, which hosts Formula 1 and MotoGP races."
    },
    facts: {
      de: ["Im Besitz des Energy-Drink-Herstellers Red Bull.", "Bietet Fahrerlebnisse und Rennstreckentrainings für die Öffentlichkeit an.", "Der 'Bulle von Spielberg' ist eine riesige Stahlskulptur."],
      hu: ["A Red Bull energiaital-gyártó tulajdonában van.", "Vezetési élményeket és versenypálya-tréningeket kínál a nagyközönségnek.", "A 'spielbergi bika' egy hatalmas acélszobor."],
      ro: ["Deținut de producătorul de băuturi energizante Red Bull.", "Oferă experiențe de condus și antrenamente pe circuit pentru public.", "'Taurul din Spielberg' este o sculptură gigantică din oțel."],
      en: ["Owned by the energy drink manufacturer Red Bull.", "Offers driving experiences and racetrack training for the public.", "The 'Bull of Spielberg' is a giant steel sculpture."]
    }
  },
  {
    id: "agriculture-südsteirische-weinstrasse-extra",
    type: "agriculture",
    parent: "AT-6",
    coords: [15.53, 46.69],
    name: { de: "Südsteirische Weinstraße", hu: "Dél-Stájer borút", ro: "Drumul Vinului din Stiria de Sud", en: "South Styrian Wine Road" },
    description: {
      de: "Eine der bekanntesten Weinrouten Österreichs, berühmt für ihre malerischen Weinberge, Klapotetz-Windmühlen und exzellenten Sauvignon Blanc.",
      hu: "Ausztria egyik legismertebb borútja, híres festői szőlőültetvényeiről, klapotetz-szélmalmairól és kiváló Sauvignon Blanc borairól.",
      ro: "Unul dintre cele mai cunoscute trasee viticole din Austria, renumit pentru podgoriile sale pitorești, morile de vânt Klapotetz și excelentul Sauvignon Blanc.",
      en: "One of Austria's most famous wine routes, renowned for its picturesque vineyards, Klapotetz windmills, and excellent Sauvignon Blanc."
    },
    facts: {
      de: ["Wird oft als die 'Steirische Toskana' bezeichnet.", "Zahlreiche 'Buschenschänken' bieten lokale Spezialitäten an.", "Beginnt in Ehrenhausen und endet in Leutschach."],
      hu: ["Gyakran 'stájer Toszkánának' is nevezik.", "Számos 'Buschenschank' (helyi borozó) kínál helyi specialitásokat.", "Ehrenhausenben kezdődik és Leutschachban ér véget."],
      ro: ["Adesea denumită 'Toscana Stiriană'.", "Numeroase 'Buschenschänken' (taverne) oferă specialități locale.", "Începe în Ehrenhausen și se termină în Leutschach."],
      en: ["Often referred to as the 'Styrian Tuscany'.", "Numerous 'Buschenschänken' (wine taverns) offer local specialties.", "Starts in Ehrenhausen and ends in Leutschach."]
    }
  },
  {
    id: "industry-swarovski-kristallwelten-extra",
    type: "industry",
    parent: "AT-7",
    coords: [11.89, 47.30],
    name: { de: "Swarovski Kristallwelten", hu: "Swarovski Kristályvilágok", ro: "Lumea de Cristal Swarovski", en: "Swarovski Crystal Worlds" },
    description: {
      de: "Ein Museum und eine Erlebniswelt in Wattens, Tirol, die die Welt des Kristallglasherstellers Swarovski feiert.",
      hu: "Múzeum és élményvilág Wattensben, Tirolban, amely a Swarovski kristályüveg-gyártó világát ünnepli.",
      ro: "Un muzeu și o lume a experiențelor în Wattens, Tirol, care celebrează lumea producătorului de sticlă de cristal Swarovski.",
      en: "A museum and world of experience in Wattens, Tyrol, that celebrates the world of crystal glass manufacturer Swarovski."
    },
    facts: {
      de: ["Der Eingang ist ein riesiger, mit Gras bewachsener Kopf mit funkelnden Augen.", "Beherbergt Wunderkammern, die von verschiedenen Künstlern gestaltet wurden.", "Eine der meistbesuchten Attraktionen Österreichs."],
      hu: ["A bejárat egy hatalmas, fűvel borított fej, csillogó szemekkel.", "Különböző művészek által tervezett csodakamráknak ad otthont.", "Ausztria egyik leglátogatottabb látványossága."],
      ro: ["Intrarea este un cap gigant acoperit cu iarbă, cu ochi scânteietori.", "Găzduiește Camere ale Minunilor create de diverși artiști.", "Una dintre cele mai vizitate atracții din Austria."],
      en: ["The entrance is a giant, grass-covered head with sparkling eyes.", "Houses Chambers of Wonder designed by various artists.", "One of Austria's most visited attractions."]
    }
  },
  {
    id: "industry-zillertal-bier-extra",
    type: "industry",
    parent: "AT-7",
    coords: [11.87, 47.29],
    name: { de: "Zillertal Bier", hu: "Zillertal Sör", ro: "Berea Zillertal", en: "Zillertal Beer" },
    description: {
      de: "Die älteste Privatbrauerei Tirols in Zell am Ziller, die seit über 500 Jahren Bier braut.",
      hu: "Tirol legrégebbi magán sörfőzdéje Zell am Zillerben, amely több mint 500 éve főz sört.",
      ro: "Cea mai veche berărie privată din Tirol, în Zell am Ziller, care produce bere de peste 500 de ani.",
      en: "The oldest private brewery in Tyrol, in Zell am Ziller, which has been brewing beer for over 500 years."
    },
    facts: {
      de: ["Bietet Führungen und Verkostungen im 'BrauKunstHaus' an.", "Verwendet Bergquellwasser aus den Zillertaler Alpen.", "Stellt eine Vielzahl von Bierspezialitäten her."],
      hu: ["Vezetéseket és kóstolókat kínál a 'BrauKunstHaus'-ban.", "A Zillertali-Alpokból származó forrásvizet használ.", "Számos sörkülönlegességet gyárt."],
      ro: ["Oferă tururi ghidate și degustări în 'BrauKunstHaus'.", "Folosește apă de izvor de munte din Alpii Zillertal.", "Produce o varietate de specialități de bere."],
      en: ["Offers guided tours and tastings in the 'BrauKunstHaus'.", "Uses mountain spring water from the Zillertal Alps.", "Produces a variety of beer specialties."]
    }
  },
  {
    id: "agriculture-zotter-schokoladen-manufaktur-extra",
    type: "agriculture",
    parent: "AT-6",
    coords: [15.82, 47.01],
    name: { de: "Zotter Schokoladen Manufaktur", hu: "Zotter Csokoládé Manufaktúra", ro: "Manufactura de ciocolată Zotter", en: "Zotter Chocolate Manufactory" },
    description: {
      de: "Eine bean-to-bar Schokoladenfabrik in Riegersburg, bekannt für ihre kreativen und biologischen Schokoladenkreationen.",
      hu: "Bean-to-bar csokoládégyár Riegersburgban, amely kreatív és bio csokoládéalkotásairól ismert.",
      ro: "O fabrică de ciocolată bean-to-bar în Riegersburg, cunoscută pentru creațiile sale de ciocolată creative și organice.",
      en: "A bean-to-bar chocolate factory in Riegersburg, known for its creative and organic chocolate creations."
    },
    facts: {
      de: ["Besucher können den gesamten Produktionsprozess verfolgen.", "Unzählige Verkostungsstationen im Schoko-Laden-Theater.", "Verwendet ausschließlich fair gehandelte Kakaobohnen."],
      hu: ["A látogatók a teljes gyártási folyamatot nyomon követhetik.", "Számtalan kóstolóállomás a Csoki-Laden-Színházban.", "Kizárólag méltányos kereskedelemből származó kakaóbabot használ."],
      ro: ["Vizitatorii pot urmări întregul proces de producție.", "Nenumărate stații de degustare în Teatrul Magazinului de Ciocolată.", "Folosește exclusiv boabe de cacao din comerț echitabil."],
      en: ["Visitors can follow the entire production process.", "Countless tasting stations in the Choco-Shop-Theatre.", "Uses exclusively fair-trade cocoa beans."]
    }
  },
  {
    id: "industry-kaprun-hochgebirgsstauseen-extra",
    type: "industry",
    parent: "AT-5",
    coords: [12.72, 47.13],
    name: { de: "Kaprun Hochgebirgsstauseen", hu: "Kapruni víztározók", ro: "Lacurile de acumulare Kaprun", en: "Kaprun High-Mountain Reservoirs" },
    description: {
      de: "Zwei beeindruckende Stauseen in den Hohen Tauern, die zur Stromerzeugung genutzt werden und ein beliebtes Ausflugsziel sind.",
      hu: "Két lenyűgöző víztározó a Magas-Tauernben, amelyeket áramtermelésre használnak és népszerű kirándulóhelyek.",
      ro: "Două lacuri de acumulare impresionante în Hohe Tauern, utilizate pentru generarea de energie electrică și o destinație populară pentru excursii.",
      en: "Two impressive reservoirs in the Hohe Tauern mountains, used for electricity generation and a popular excursion destination."
    },
    facts: {
      de: ["Der Lärchwand Schrägaufzug ist der größte offene Schrägaufzug Europas.", "Die Staumauer Mooserboden ist über 100 Meter hoch.", "Symbol des Wiederaufbaus Österreichs nach dem Zweiten Weltkrieg."],
      hu: ["A Lärchwand ferde felvonó Európa legnagyobb nyitott ferde felvonója.", "A Mooserboden gát több mint 100 méter magas.", "Ausztria második világháború utáni újjáépítésének szimbóluma."],
      ro: ["Funicularul Lärchwand este cel mai mare funicular deschis din Europa.", "Barajul Mooserboden are peste 100 de metri înălțime.", "Simbol al reconstrucției Austriei după Al Doilea Război Mondial."],
      en: ["The Lärchwand inclined lift is the largest open inclined lift in Europe.", "The Mooserboden dam is over 100 meters high.", "Symbol of Austria's reconstruction after World War II."]
    }
  },
  {
    id: "agriculture-marillenerlebnisweg-wachau-extra",
    type: "agriculture",
    parent: "AT-3",
    coords: [15.55, 48.38],
    name: { de: "Marillenerlebnisweg", hu: "Sárgabarack élményút", ro: "Traseul experienței caiselor", en: "Apricot Experience Trail" },
    description: {
      de: "Ein Themenweg in der Wachau, der alles über die berühmte Wachauer Marille, eine geschützte Aprikosensorte, verrät.",
      hu: "Tematikus útvonal a Wachauban, amely mindent elárul a híres wachaui sárgabarackról, egy védett barackfajtáról.",
      ro: "Un traseu tematic în Wachau care dezvăluie totul despre faimoasele caise Wachau, un soi protejat de caise.",
      en: "A themed trail in the Wachau that reveals everything about the famous Wachau apricot, a protected apricot variety."
    },
    facts: {
      de: ["Führt durch malerische Marillengärten.", "Interaktive Stationen informieren über Anbau und Verarbeitung.", "Die Marillenblüte im Frühling ist ein besonderes Ereignis."],
      hu: ["Festői sárgabarackos kerteken vezet keresztül.", "Interaktív állomások tájékoztatnak a termesztésről és a feldolgozásról.", "A tavaszi sárgabarack-virágzás különleges esemény."],
      ro: ["Conduce prin livezi pitorești de caiși.", "Stațiile interactive oferă informații despre cultivare și procesare.", "Înflorirea caișilor primăvara este un eveniment special."],
      en: ["Leads through picturesque apricot orchards.", "Interactive stations provide information about cultivation and processing.", "The apricot blossom in spring is a special event."]
    }
  }
];
