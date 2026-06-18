// @ts-nocheck
import { POI } from "./poi";
import { luxembourgExtraCities } from "./poiExtraLuxembourgCities";
import { luxembourgExtraHistory } from "./poiExtraLuxembourgHistory";
import { luxembourgExtraOther } from "./poiExtraLuxembourgOther";

export const luxembourgAllPoi: POI[] = [
  {
    id: "lu-country",
    type: "country",
    coords: [6.1296, 49.8153],
    name: {
      de: "Luxemburg",
      hu: "Luxemburg",
      ro: "Luxemburg",
      en: "Luxembourg"
    },
    description: {
      de: "Luxemburg ist ein kleines, wohlhabendes Binnenland in Westeuropa, bekannt als Sitz zahlreicher EU-Institutionen und für seine befestigte mittelalterliche Altstadt.",
      hu: "Luxemburg egy kis, gazdag szárazföldi ország Nyugat-Európában, amely számos uniós intézmény székhelyeként és megerősített középkori óvárosáról ismert.",
      ro: "Luxemburg este o țară mică și prosperă, fără ieșire la mare, din Europa de Vest, cunoscută ca sediu al numeroaselor instituții UE și pentru orașul său vechi medieval fortificat.",
      en: "Luxembourg is a small, wealthy landlocked country in Western Europe, known as the seat of numerous EU institutions and for its fortified medieval old town."
    },
    descriptionAdvanced: {
      de: "Luxemburg, offiziell das Großherzogtum Luxemburg, ist ein faszinierendes, kleines Binnenland in Westeuropa, das eine Brücke zwischen der germanischen und der romanischen Kultur schlägt. Es grenzt im Westen und Norden an Belgien, im Osten an Deutschland und im Süden an Frankreich. Trotz seiner geringen Größe spielt Luxemburg eine überproportionale Rolle auf der Weltbühne, sowohl politisch als auch wirtschaftlich. Als eines der Gründungsmitglieder der Europäischen Union beherbergt es zahlreiche EU-Institutionen, darunter den Europäischen Gerichtshof und die Europäische Investitionbank. Die Hauptstadt, Luxemburg-Stadt, ist ein beeindruckendes Beispiel für die Verschmelzung von Geschichte und Moderne, wobei ihre befestigte Altstadt zum UNESCO-Weltkulturerbe gehört. Die Geografie des Landes ist zweigeteilt: Der Norden, das Ösling, ist Teil der Ardennen und besticht durch bewaldete Hügel und tiefe Täler, während das Gutland im Süden durch fruchtbare Ebenen und sanfte Weinberge entlang der Mosel geprägt ist. Luxemburg ist das einzige verbliebene Großherzogtum der Welt, was ihm eine einzigartige monarchische Identität verleiht. Die sprachliche Vielfalt ist bemerkenswert, mit Luxemburgisch als Nationalsprache sowie Französisch und Deutsch als Amtssprachen. Wirtschaftlich gehört das Land zu den wohlhabendsten der Welt, mit einem starken Fokus auf Finanzdienstleistungen, Technologie und Stahlproduktion. Für Reisende bietet Luxemburg eine reiche Palette an Erlebnissen: von Wanderungen durch die felsige Region Müllerthal, auch bekannt als 'Kleine Luxemburger Schweiz', über den Besuch mächtiger mittelalterlicher Burgen wie Vianden bis hin zu Weinverkostungen im malerischen Moseltal. Die luxemburgische Gastronomie spiegelt die Einflüsse der Nachbarländer wider und kombiniert französische Raffinesse mit deutscher Herzhaftigkeit. Ob man die historischen Kasematten erkundet, die moderne Architektur auf dem Kirchberg-Plateau bewundert oder die Ruhe der Ardennen genießt – Luxemburg meglep sokszínűségével és állandóságával. Ez egy olyan ország, amely ápolja hagyományait, ugyanakkor bátran tekint a jövőbe, így Európa felfedezői számára kihagyhatatlan úti cél. A magas életminőség és a nemzetközi légkör a kultúrák olvasztótégelyévé teszi.",
      hu: "Luxemburg, hivatalos nevén a Luxemburgi Nagyhercegség, egy lenyűgöző kis szárazföldi ország Nyugat-Európában, amely hidat képez a germán és a román kultúra között. Nyugaton és északon Belgiummal, keleten Németországgal, délen pedig Franciaországgal határos. Kis mérete ellenére Luxemburg aránytalanul nagy szerepet játszik a világpolitikai és gazdasági porondon. Az Európai Unió egyik alapító tagjaként számos uniós intézménynek ad otthont, közötte az Európai Bíróságnak és az Európai Beruházási Banknak. Fővárosa, Luxemburg város, a történelem és a modernitás ötvözésének lenyűgöző példája, erődített óvárosa pedig az UNESCO Világörökség része. Az ország földrajza két részre oszlik: az északi Oesling régió az Ardennek része, erdős dombokkal és mély völgyekkel, míg a déli Gutland termékeny síkságokkal és a Moselle menti szelíd szőlőültetvényekkel büszkélkedhet. Luxemburg a világ egyetlen fennmaradó nagyhercegsége, ami egyedülálló monarchikus identitást kölcsönöz neki. Nyelvi sokszínűsége figyelemre méltó: a luxemburgi a nemzeti nyelv, míg a francia és a német a hivatalos nyelvek. Gazdaságilag a világ egyik leggazdagabb országa, erős pénzügyi szolgáltatási, technológiai és acélipari fókusszal. Az utazók számára Luxemburg élmények gazdag tárházát kínálja: a sziklás Müllerthal régióban (a 'Kis Luxemburgi Svájcban') tett túráktól kezdve a hatalmas középkori várak, például Vianden meglátogatásán át a festői Moselle-völgyben tartott borkóstolókig. A luxemburgi gasztronómia a szomszédos országok hatásait tükrözi, ötvözve a francia kifinomultságot a német kiadóssággal. Akár a történelmi kazamatákat fedezi fel az ember, akár a Kirchberg-fennsík modern építészetét csodálja, vagy az Ardennek nyugalmát élvezi – Luxemburg meglep sokszínűségével és állandóságával. Ez egy olyan ország, amely ápolja hagyományait, ugyanakkor bátran tekint a jövőbe, így Európa felfedezői számára kihagyhatatlan úti cél. A magas életminőség és a nemzetközi légkör a kultúrák olvasztótégelyévé teszi.",
      ro: "Luxemburg, oficial Marele Ducat de Luxemburg, este o țară mică, fascinantă, fără ieșire la mare, situată în Europa de Vest, care face legătura între culturile germanică și romanică. Se învecinează cu Belgia la vest și nord, cu Germania la est și cu Franța la sud. În ciuda dimensiunilor sale reduse, Luxemburg joacă un rol disproporționat pe scena mondială, atât politic, cât și economic. Ca unul dintre membrii fondatori ai Uniunii Europene, găzduiește numeroase instituții ale UE, inclusiv Curtea de Justiție a Uniunii Europene și Banca Europeană de Investiții. Capitala, orașul Luxemburg, este un exemplu impresionant de fuziune între istorie și modernitate, orașul său vechi fortificat fiind inclus în Patrimoniul Mondial UNESCO. Geografia țării este împărțită în două: nordul, Oesling, face parte din Ardeni și impresionează prin dealuri împădurite și văi adânci, în timp ce Gutland, în sud, este caracterizat de câmpii fertile și podgorii blânde de-a lungul râului Mosela. Luxemburg este singurul mare ducat rămas în lume, ceea ce îi conferă o identitate monarhică unică.",
      en: "Luxembourg, officially the Grand Duchy of Luxembourg, is a captivating small landlocked country in Western Europe that serves as a bridge between Germanic and Romance cultures. Despite its small size, Luxembourg plays a disproportionate role on the world stage, both politically and economically. As one of the founding members of the European Union, it hosts numerous EU institutions. The country's geography is divided into the northern Ardennes (Oesling) and the southern Gutland. Luxembourg is the world's only remaining Grand Duchy, giving it a unique monarchical identity. Exploring Luxembourg offers a mix of ancient castles, modern financial centers, and dense, tranquil forests. This country is a prime example of successful European integration."
    },
    factsAdvanced: {
      de: [
        "Großherzogtum mit konstitutioneller Monarchie",
        "Wichtigster Knotenpunkt für EU-Institutionen",
        "Mehrsprachigkeit ist fester Bestandteil der Kultur",
        "Historisch bedeutsam durch die Festung Luxemburg",
        "Starke Konzentration auf den Bankensektor"
      ],
      hu: [
        "Az egyetlen nagyhercegség a világon.",
        "Két nagy földrajzi régióra oszlik: az északi Oesling és a déli Gutland.",
        "Luxemburg városa 1994 óta az UNESCO Világörökség része.",
        "Az ország az Európai Unió intézményeinek fontos központja.",
        "Gazdag történelemmel és modern pénzügyi központtal rendelkezik."
      ],
      ro: [
        "Singurul mare ducat suveran rămas în lume.",
        "Țara este împărțită în două regiuni geografice majore: Oesling și Gutland.",
        "Centrul istoric al orașului Luxemburg este un sit UNESCO.",
        "Luxemburg găzduiește sedii importante ale UE.",
        "Economia se bazează pe servicii financiare și tehnologie."
      ],
      en: [
        "Luxembourg covers an area of just 2,586 square kilometers.",
        "It is the only remaining sovereign Grand Duchy in the world.",
        "The country has three official languages: Luxembourgish, French, and German.",
        "Nearly half of its population consists of foreign nationals."
      ]
    },
    facts: {
      de: [
        "Einziges Großherzogtum der Welt",
        "Gründungsmitglied der Europäischen Union",
        "Höchstes BIP pro Kopf in der EU",
        "Drei offizielle Sprachen: Luxemburgisch, Französisch, Deutsch",
        "UNESCO-Weltkulturerbe: Altstadt von Luxemburg",
        "Schengener Abkommen wurde hier unterzeichnet",
        "Über 47% der Bevölkerung sind Ausländer",
        "Kostenloser öffentlicher Nahverkehr im ganzen Land",
        "Höchster Punkt: Wilwerdingen (Kneiff) mit 560 Metern",
        "Bedeutender Finanzplatz mit über 150 Banken"
      ],
      hu: [
        "A világ egyetlen nagyhercegsége",
        "Az Európai Unió alapító tagja",
        "Az EU legmagasabb egy főre jutó GDP-je",
        "Három hivatalos nyelv: luxemburgi, francia, német",
        "UNESCO Világörökség: Luxemburg óvárosa",
        "Itt írták alá a schengeni egyezményt",
        "A lakosság több mint 70%-a külföldi",
        "Ingyenes tömegközlekedés az egész országban",
        "Legmagasabb pont: Wilwerdingen (Kneiff), 560 méter",
        "Jelentős pénzügyi központ több mint 150 bankkal"
      ],
      ro: [
        "Singurul mare ducat din lume",
        "Membru fondator al Uniunii Europene",
        "Cel mai mare PIB pe cap de locuitor din UE",
        "Trei limbi oficiale: luxemburgheză, franceză, germană",
        "Patrimoniu Mondial UNESCO: Orașul vechi Luxemburg",
        "Acordul Schengen a fost semnat aici",
        "Peste 47% din populație sunt străini",
        "Transport public gratuit în toată țara",
        "Cel mai înalt punct: Wilwerdingen (Kneiff), 560 metri",
        "Centru financiar major cu peste 150 de bănci"
      ],
      en: [
        "The world's only remaining Grand Duchy",
        "Founding member of the European Union",
        "Highest GDP per capita in the EU",
        "Three official languages: Luxembourgish, French, German",
        "UNESCO World Heritage: Luxembourg's Old Town",
        "The Schengen Agreement was signed here",
        "Over 47% of the population are foreign nationals",
        "Free public transport nationwide",
        "Highest point: Wilwerdingen (Kneiff) at 560 meters",
        "Major financial hub with over 150 banks"
      ]
    }
  },
  ...luxembourgExtraCities,
  ...luxembourgExtraHistory,
  ...luxembourgExtraOther
];

