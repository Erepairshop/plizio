// @ts-nocheck
import type { POI } from "./poi";

export const franceCitiesExtra: POI[] = [
  // All batches combined - Final
  {
    id: "palace-versailles-gardens",
    type: "landmark",
    parent: "FR-IDF",
    coords: [2.1230, 48.8053],
    name: { de: "Gärten von Versailles", hu: "Versailles-i kertek", ro: "Grădinile Versailles", en: "Versailles Gardens" },
    image: "/geo-images/france/palace-versailles-gardens.webp",
    description: {
      de: "Die Gärten von Versailles sind ein Meisterwerk der französischen Gartenkunst. Geometrische Beete, Brunnen und lange Sichtachsen formen ein streng komponiertes Landschaftsbild.",
      hu: "A Versailles-i kertek a francia kertművészet remekművei. Geometrikus ágyások, szökőkutak és hosszú tengelyek alkotják a szigorúan komponált tájat.",
      ro: "Grădinile Versailles sunt o capodoperă a artei franceze a grădinilor. Parterele geometrice, fântânile și axele lungi creează un peisaj strict compus.",
      en: "The Gardens of Versailles are a masterpiece of French garden design. Geometric flowerbeds, fountains, and long sightlines create a tightly composed landscape."
    },
    descriptionAdvanced: {
      de: "Die Gärten von Versailles sind das ultimative Meisterwerk der klassischen französischen Gartenbaukunst (Jardin à la française) und ein wesentlicher Bestandteil der absolutistischen Machtdemonstration König Ludwigs XIV. Entworfen von dem brillanten Landschaftsarchitekten André Le Nôtre, stellen diese riesigen Gärten den radikalen Sieg der Ordnung, Symmetrie und Vernunft über die wilde, unkontrollierte Natur dar. Ausgehend von der monumentalen Rückseite des Palastes erstrecken sich geometrisch perfekt geschnittene Buchsbaumhecken, riesige Parterres und endlos wirkende, schnurgerade Perspektiven bis zum Horizont, zentriert um den gigantischen Canal de Grand. Die wahre Magie der Gärten liegt jedoch in den unzähligen Bosketten – geheimen kleinen Hainen –, die mit marmornen und bronzenen Skulpturen sowie einigen der komplexesten und prächtigsten Brunnenanlagen Europas geschmückt sind. Diese Wasserspiele waren damals ein ingenieurtechnisches Wunder und wurden genutzt, um die königliche Gesellschaft bei extravaganten Festen zu unterhalten und zu blenden.",
      hu: "A versailles-i kertek a klasszikus francia barokk kertépítészet (jardin à la française) csúcsát képviselik, amelyeket André Le Nôtre tervezett XIV. Lajos számára. A közel 800 hektáron elterülő park mérnöki precizitással kialakított geometrikus parterre-ekből (virágágyásokból), kilométeres, nyílegyenes sétányokból és hatalmas vízmedencékből áll. A kertek a Napkirály hatalmát szimbolizálták a természet felett; a mocsaras terület lecsapolása és a hatalmas szökőkutak vízellátása korának legnagyobb mérnöki kihívása volt. Biológia K8 - tájépítészet és hidrológiai mérnöki munkák.",
      ro: "Grădinile de la Versailles, concepute de legendarul peisagist André Le Nôtre, reprezintă capodopera absolută a stilului francez de grădină formală. Acestea se întind pe sute de hectare și au fost proiectate pentru a impresiona prin simetrie perfectă, ordine riguroasă și o varietate extraordinară de elemente decorative. Grădinile servesc drept dovadă a puterii absolute a Regelui Soare asupra naturii. Biologie K8 - arhitectură peisagistică și inginerie hidrologică.",
      en: "The Gardens of Versailles, conceived by the legendary landscaper André Le Nôtre, are the absolute masterpiece of the formal French garden style. Spanning hundreds of hectares, they were designed to impress through symmetry, order, and an extraordinary variety of decorative elements. The gardens stand as a testament to the power of the Sun King. Biology K8 - landscape architecture and hydrological engineering."
    },
    facts: {
      de: ["Die Anlage wurde von André Le Nôtre gestaltet.", "Sie ist fast so berühmt wie das Schloss selbst."],
      hu: ["A kertet André Le Nôtre tervezte.", "Szinte olyan híres, mint maga a kastély."],
      ro: ["Grădinile au fost proiectate de André Le Nôtre.", "Sunt aproape la fel de celebre ca palatul însuși."],
      en: ["The gardens were designed by André Le Nôtre.", "They are almost as famous as the palace itself."]
    },
    factsAdvanced: {
      de: [
        "Die Arbeiten an den Gärten nahmen 40 Jahre in Anspruch, und zehntausende Soldaten und Arbeiter wurden zeitweise eingesetzt, um die Erde zu bewegen.",
        "Die Brunnen der Gärten verbrauchten zur Zeit Ludwigs XIV. mehr Wasser als die gesamte Stadt Paris.",
        "Der 'Grand Canal', der in Form eines Kreuzes angelegt ist, ist über 1,6 Kilometer lang und diente dem König für simulierte Seeschlachten und venezianische Gondelfahrten.",
        "Die Orangerie von Versailles beherbergt über 1.000 Bäume, von denen einige Granatapfel- und Orangenbäume mehr als 200 Jahre alt sind."
      ],
      hu: [
        "A kertekben található szökőkutakhoz a Szajnából próbáltak vizet vezetni a gigantikus Marly-gépezet segítségével.",
        "A nyári hónapokban a 'Nagy Vizek Játéka' (Les Grandes Eaux) alkalmával az összes szökőkutat egyszerre üzemeltetik barokk zene kíséretében.",
        "A kertben a fák ezreit a geometriai tökéletesség érdekében a mai napig szigorúan kocka vagy gömb alakúra nyírják.",
        "A birtokon található a Nagy Csatorna (Grand Canal), amelyen XIV. Lajos kicsinyített velencei gondolákkal hajókázott."
      ],
      ro: [
        "Lucrările la grădini au durat 40 de ani, fiind implicați zeci de mii de soldați și muncitori.",
        "Fântânile grădinilor consumau, pe vremea lui Ludovic al XIV-lea, mai multă apă decât întregul oraș Paris.",
        "Marele Canal, construit în formă de cruce, are peste 1,6 kilometri lungime și era folosit pentru simulări de bătălii navale.",
        "Orangeria de la Versailles adăpostește peste 1.000 de arbori, unii fiind lămâi și portocali de peste 200 de ani."
      ],
      en: [
        "Construction spanned over 40 years under the direct supervision of André Le Nôtre.",
        "The original hydraulic system powering the fountains remains functional to this day.",
        "The gardens encompass a vast area exceeding 800 hectares.",
        "Annual plantings feature hundreds of thousands of seasonal trees and flowers."
      ]
    }
  },
  {
    id: "sainte-chapelle",
    type: "historical",
    parent: "FR-IDF",
    coords: [2.3450, 48.8554],
    name: { de: "Sainte-Chapelle", hu: "Sainte-Chapelle", ro: "Sainte-Chapelle", en: "Sainte-Chapelle" },
    image: "/geo-images/france/sainte-chapelle.webp",
    description: {
      de: "Die Sainte-Chapelle auf der Île de la Cité ist ein Juwel der gotischen Architektur. Besonders berühmt ist sie für ihre riesigen Glasfenster, die den Innenraum in farbiges Licht tauchen.",
      hu: "A Île de la Cité-n álló Sainte-Chapelle a gótikus építészet ékköve. Különösen híres hatalmas üvegablakairól, amelyek színes fénybe borítják a belső teret.",
      ro: "Sainte-Chapelle de pe Île de la Cité este o bijuterie a arhitecturii gotice. Este renumită mai ales pentru ferestrele sale uriașe de vitralii, care inundă interiorul cu lumină colorată.",
      en: "Sainte-Chapelle on the Île de la Cité is a jewel of Gothic architecture. It is especially famous for its giant stained-glass windows that flood the interior with colored light."
    },
    descriptionAdvanced: {
      de: "Die Sainte-Chapelle, versteckt auf der Île de la Cité im Herzen von Paris, ist ein leuchtendes Wunderwerk der hochgotischen 'Rayonnant'-Architektur und wird oft als ein begehbarer Schrein aus Licht und Farbe beschrieben. Sie wurde im 13. Jahrhundert in Rekordzeit auf Befehl von König Ludwig IX. (dem Heiligen Ludwig) erbaut. Ihr einziger Zweck war es, die kostbarsten Reliquien der Christenheit, vor allem die angebliche Dornenkrone Christi, aufzubewahren, die der König zu enormen Kosten in Konstantinopel erworben hatte. Das architektonische Meisterstück der Kapelle liegt in ihrem radikalen Verzicht auf tragende Steinwände im Obergeschoss; stattdessen wird der hohe Raum fast vollständig von riesigen, 15 Meter hohen Buntglasfenstern umschlossen. Wenn das Sonnenlicht durch die 1.113 kunstvollen Glaspaneele fällt, die in tiefem Rot und strahlendem Blau biblische Geschichten erzählen, taucht es das gesamte Innere in eine ätherische, fast überirdische Atmosphäre, die jeden Besucher zutiefst berührt.",
      hu: "A Sainte-Chapelle egy lélegzetelállító gótikus kápolna Párizs szívében, a Cité-szigeten, a volt királyi palota (Conciergerie) udvarán. IX. (Szent) Lajos építtette a 13. században azzal a céllal, hogy itt őrizzék a Konstantinápolyból felbecsülhetetlen áron megvásárolt Krisztus Töviskoronáját és más szent relikviákat. A kápolna a 'Rayonnant' gótika mesterműve, amelynek felső szintjén a falakat szinte teljes egészében 15 méter magas, lenyűgöző színes ólomüveg ablakok helyettesítik. Amikor a napfény átsüt az üvegen, a tér belseje szó szerint egy hatalmas, fénylő ékszerdobozzá válik. Történelem K6 - gótikus építészet és szent relikviák.",
      ro: "Sainte-Chapelle este o bijuterie a arhitecturii gotice radiante, situată în inima Parisului, pe Île de la Cité. Construită în secolul al XIII-lea, la comanda regelui Ludovic al IX-lea, capela a fost concepută special pentru a găzdui relicve sacre prețioase, precum faimoasa Coroană de Spini. Ceea ce o face cu adevărat unică sunt ferestrele sale spectaculoase, care ocupă aproape întregul perete superior. Istorie K6 - arhitectură gotică și relicve sacre.",
      en: "Sainte-Chapelle is a jewel of radiant Gothic architecture, situated in the heart of Paris on the Île de la Cité. Built in the 13th century on the orders of King Louis IX, it was specifically designed to house precious sacred relics, including the famous Crown of Thorns. What makes it unique are the expansive stained-glass windows that occupy almost the entire upper wall space. History K6 - Gothic architecture and sacred relics."
    },
    facts: {
      de: ["Die Kapelle wurde im 13. Jahrhundert erbaut.", "Ihre Glasfenster gehören zu den schönsten Europas."],
      hu: ["A kápolnát a 13. században építették.", "Ólomüveg ablakai Európa legszebbjai közé tartoznak."],
      ro: ["Capela a fost construită în secolul al XIII-lea.", "Vitraliile sale sunt printre cele mai frumoase din Europa."],
      en: ["The chapel was built in the 13th century.", "Its stained-glass windows are among the finest in Europe."]
    },
    factsAdvanced: {
      de: [
        "König Ludwig IX. bezahlte für den Erwerb der Dornenkrone fast dreimal so viel Geld wie für den gesamten Bau der Sainte-Chapelle selbst.",
        "Etwa zwei Drittel der atemberaubenden Buntglasfenster in der Kapelle sind noch die Originale aus dem 13. Jahrhundert.",
        "Die Kapelle besteht aus einer niedrigen Unterkapelle, die ursprünglich für die Dienerschaft gedacht war, und einer lichtdurchfluteten Oberkapelle für den König und seinen Hofstaat.",
        "Während der Französischen Revolution wurde die Kapelle beschädigt und diente kurzzeitig profan als administratives Archiv, wodurch die Fenster glücklicherweise vor der Zerstörung gerettet wurden."
      ],
      hu: [
        "A Töviskorona megvásárlása háromszor annyiba került a királynak, mint maga a kápolna felépítése.",
        "Az épület több mint ezer különböző bibliai jelenetet ábrázoló ólomüveg panelt tartalmaz.",
        "Az ablakok üvegeinek mintegy 70 százaléka még mindig az eredeti, 13. századi üveg.",
        "A francia forradalom alatt a kápolnát megrongálták, és egy ideig lisztraktárként használták."
      ],
      ro: [
        "Regele Ludovic al IX-lea a plătit pentru Coroana de Spini aproape de trei ori mai mult decât a costat construcția capelei în sine.",
        "Aproximativ două treimi din vitraliile uluitoare sunt încă cele originale din secolul al XIII-lea.",
        "Capela are un nivel inferior pentru servitori și o capelă superioară plină de lumină pentru rege și curtea sa.",
        "În timpul Revoluției Franceze, capela a fost avariată și a servit pentru scurt timp ca arhivă administrativă."
      ],
      en: [
        "Completed in a record seven years, the chapel was consecrated in 1248.",
        "The 15 giant windows cover a total stained-glass surface area exceeding 600 square meters.",
        "Over two-thirds of the stained glass in the upper chapel consists of original 13th-century works.",
        "The chapel was originally built to serve as the personal reliquary for the King of France."
      ]
    }
  },
];
