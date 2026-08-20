import type { HistoryDiagramFamily, HistoryDiagramId } from "@/components/geschichte-visual/HistoryTestDiagrams";

export type GeschichteVisualLang = "de" | "hu" | "ro" | "en";
export type GeschichteText = Record<GeschichteVisualLang, string>;

const t = (de: string, hu: string, ro: string, en: string): GeschichteText => ({ de, hu, ro, en });

export function geschichteVisualLang(lang?: string): GeschichteVisualLang {
  return lang === "hu" || lang === "ro" || lang === "en" ? lang : "de";
}

type BaseMission = {
  id: HistoryDiagramId;
  family: HistoryDiagramFamily;
  grade: 5 | 6 | 7 | 8;
  title: GeschichteText;
  clue: GeschichteText;
};

export type GeschichteMission = BaseMission & (
  | { mode: "choice"; answer: GeschichteText; distractors: GeschichteText[] }
  | { mode: "order"; stages: GeschichteText[] }
);

const sourceKinds = {
  written: t("schriftliche Primärquelle", "írott elsődleges forrás", "sursă primară scrisă", "written primary source"),
  material: t("Sachquelle", "tárgyi forrás", "sursă materială", "material source"),
  visual: t("Bildquelle", "képi forrás", "sursă vizuală", "visual source"),
  secondary: t("spätere Darstellung", "későbbi feldolgozás", "interpretare ulterioară", "later interpretation"),
};

export const GESCHICHTE_MISSIONS: GeschichteMission[] = [
  {
    id: "ancient-river", family: "timeline", grade: 5,
    title: t("Vom Fluss zur Stadt", "A folyótól a városig", "De la râu la oraș", "From river to city"),
    clue: t("Ordne die Entwicklung einer frühen Hochkultur.", "Rendezd egy korai civilizáció fejlődését.", "Ordonează dezvoltarea unei civilizații timpurii.", "Order the development of an early civilization."),
    mode: "order", stages: [
      t("dauerhafte Siedlung", "állandó település", "așezare permanentă", "permanent settlement"),
      t("Bewässerung", "öntözés", "irigații", "irrigation"),
      t("Nahrungsüberschuss", "élelmiszerfelesleg", "surplus alimentar", "food surplus"),
      t("Stadt und Verwaltung", "város és igazgatás", "oraș și administrație", "city and administration"),
    ],
  },
  {
    id: "greek-polis", family: "timeline", grade: 5,
    title: t("Entscheidung in der Polis", "Döntés a poliszban", "Decizie în polis", "Decision in the polis"),
    clue: t("Ordne einen vereinfachten demokratischen Ablauf.", "Rendezd az egyszerűsített demokratikus folyamatot.", "Ordonează un proces democratic simplificat.", "Order a simplified democratic process."),
    mode: "order", stages: [
      t("Bürger versammeln sich", "a polgárok összegyűlnek", "cetățenii se adună", "citizens assemble"),
      t("Vorschlag", "javaslat", "propunere", "proposal"),
      t("Debatte", "vita", "dezbatere", "debate"),
      t("Abstimmung", "szavazás", "vot", "vote"),
    ],
  },
  {
    id: "clay-tablet", family: "source", grade: 5,
    title: t("Keilschrifttafel", "Ékírásos tábla", "Tăbliță cuneiformă", "Cuneiform tablet"),
    clue: t("Sie entstand in der untersuchten Zeit und trägt Schriftzeichen.", "A vizsgált korban készült, és írásjeleket hordoz.", "A fost creată în epoca studiată și conține semne scrise.", "It was created in the period studied and carries written signs."),
    mode: "choice", answer: sourceKinds.written, distractors: [sourceKinds.material, sourceKinds.visual, sourceKinds.secondary],
  },
  {
    id: "ancient-coin", family: "source", grade: 5,
    title: t("Münze mit Herrscherbild", "Uralkodói érem", "Monedă cu portret de conducător", "Coin with a ruler's portrait"),
    clue: t("Das Objekt verrät etwas über Macht, Handel und Symbole.", "A tárgy a hatalomról, kereskedelemről és jelképekről árulkodik.", "Obiectul oferă informații despre putere, comerț și simboluri.", "The object reveals evidence about power, trade and symbols."),
    mode: "choice", answer: sourceKinds.material, distractors: [sourceKinds.written, sourceKinds.visual, sourceKinds.secondary],
  },
  {
    id: "migration-routes", family: "map", grade: 5,
    title: t("Pfeile über Regionen", "Nyilak térségek között", "Săgeți între regiuni", "Arrows across regions"),
    clue: t("Mehrere Gruppen bewegen sich über längere Zeit in neue Gebiete.", "Több népcsoport hosszabb idő alatt új területekre költözik.", "Mai multe grupuri se deplasează în timp spre teritorii noi.", "Several groups move into new regions over time."),
    mode: "choice", answer: t("Völkerwanderung", "népvándorlás", "migrația popoarelor", "migration of peoples"), distractors: [
      t("Seehandel", "tengeri kereskedelem", "comerț maritim", "sea trade"),
      t("Stadtgründung", "városalapítás", "întemeierea unui oraș", "city foundation"),
      t("Grenzstillstand", "változatlan határ", "frontieră neschimbată", "unchanged border"),
    ],
  },
  {
    id: "irrigation-surplus", family: "cause", grade: 5,
    title: t("Bewässerung verändert das Leben", "Az öntözés átalakítja az életet", "Irigațiile schimbă viața", "Irrigation changes life"),
    clue: t("Ordne Ursache, unmittelbare Wirkung und langfristige Folge.", "Rendezd az okot, a közvetlen hatást és a hosszú távú következményt.", "Ordonează cauza, efectul imediat și consecința pe termen lung.", "Order the cause, immediate effect and long-term consequence."),
    mode: "order", stages: [
      t("Kanäle werden gebaut", "csatornákat építenek", "se construiesc canale", "canals are built"),
      t("Ernten werden sicherer", "biztosabbá válik a termés", "recoltele devin mai sigure", "harvests become more reliable"),
      t("Überschüsse entstehen", "felesleg keletkezik", "apare surplusul", "surpluses develop"),
      t("Berufe und Städte wachsen", "szakmák és városok fejlődnek", "cresc meșteșugurile și orașele", "specialized work and cities grow"),
    ],
  },
  {
    id: "roman-road", family: "timeline", grade: 6,
    title: t("Bau einer Römerstraße", "Római út építése", "Construirea unui drum roman", "Building a Roman road"),
    clue: t("Ordne die Arbeitsschritte vom Gelände bis zur fertigen Straße.", "Rendezd a munkafázisokat a tereptől a kész útig.", "Ordonează etapele de la teren la drumul terminat.", "Order the steps from surveying to the completed road."),
    mode: "order", stages: [
      t("Strecke vermessen", "az útvonal kimérése", "măsurarea traseului", "survey the route"),
      t("Untergrund ausheben", "az alap kiásása", "săparea fundației", "excavate the base"),
      t("Steinschichten legen", "kőrétegek lerakása", "așezarea straturilor de piatră", "lay stone layers"),
      t("Oberfläche und Meilensteine", "burkolat és mérföldkövek", "suprafață și borne miliare", "surface and milestones"),
    ],
  },
  {
    id: "medieval-feudal", family: "timeline", grade: 6,
    title: t("Lehnsbeziehung", "Hűbéri kapcsolat", "Relație feudală", "Feudal relationship"),
    clue: t("Ordne den vereinfachten Ablauf einer Lehnsvergabe.", "Rendezd a hűbéradományozás egyszerűsített menetét.", "Ordonează procesul simplificat al acordării unui feud.", "Order a simplified feudal grant."),
    mode: "order", stages: [
      t("Treueeid", "hűségeskü", "jurământ de credință", "oath of loyalty"),
      t("Land wird verliehen", "földadomány", "acordarea pământului", "land is granted"),
      t("Schutz und Rechte", "védelem és jogok", "protecție și drepturi", "protection and rights"),
      t("Dienst und Abgaben", "szolgálat és adók", "servicii și dări", "service and dues"),
    ],
  },
  {
    id: "medieval-manuscript", family: "source", grade: 6,
    title: t("Handschrift aus einem Kloster", "Kolostori kézirat", "Manuscris monastic", "Monastic manuscript"),
    clue: t("Der Text wurde zur damaligen Zeit von Hand geschrieben.", "A szöveget az adott korban kézzel írták.", "Textul a fost scris de mână în epoca respectivă.", "The text was written by hand during the period studied."),
    mode: "choice", answer: sourceKinds.written, distractors: [sourceKinds.material, sourceKinds.visual, sourceKinds.secondary],
  },
  {
    id: "royal-charter", family: "source", grade: 6,
    title: t("Urkunde mit Siegel", "Pecsétes oklevél", "Document cu sigiliu", "Sealed charter"),
    clue: t("Sie hält ein Recht oder eine Pflicht offiziell fest.", "Hivatalosan rögzít egy jogot vagy kötelezettséget.", "Consemnează oficial un drept sau o obligație.", "It officially records a right or obligation."),
    mode: "choice", answer: sourceKinds.written, distractors: [sourceKinds.material, sourceKinds.visual, sourceKinds.secondary],
  },
  {
    id: "roman-network", family: "map", grade: 6,
    title: t("Straßen führen zu einem Zentrum", "Utak egy központ felé", "Drumuri către un centru", "Roads leading to a centre"),
    clue: t("Das Netz verbindet Verwaltung, Militär und Handel.", "A hálózat összeköti az igazgatást, a hadsereget és a kereskedelmet.", "Rețeaua leagă administrația, armata și comerțul.", "The network connects administration, armies and trade."),
    mode: "choice", answer: t("Reichsweite Verkehrsverbindung", "birodalmi közlekedési hálózat", "rețea de transport imperială", "empire-wide transport network"), distractors: [
      t("zufällige Dorfwege", "véletlenszerű falusi utak", "drumuri sătești întâmplătoare", "random village paths"),
      t("reine Pilgerroute", "csak zarándokút", "rută exclusiv de pelerinaj", "pilgrimage route only"),
      t("geschlossene Seegrenze", "lezárt tengeri határ", "frontieră maritimă închisă", "closed sea frontier"),
    ],
  },
  {
    id: "feudal-protection", family: "cause", grade: 6,
    title: t("Schutz gegen Dienste", "Védelem szolgálatokért", "Protecție în schimbul serviciilor", "Protection in return for services"),
    clue: t("Ordne die gegenseitigen Pflichten.", "Rendezd a kölcsönös kötelezettségeket.", "Ordonează obligațiile reciproce.", "Order the reciprocal obligations."),
    mode: "order", stages: [
      t("Unsicherheit und Angriffe", "bizonytalanság és támadások", "nesiguranță și atacuri", "insecurity and attacks"),
      t("Herr bietet Schutz", "a földesúr védelmet nyújt", "seniorul oferă protecție", "lord offers protection"),
      t("Land wird genutzt", "a földet művelik", "pământul este lucrat", "land is worked"),
      t("Dienste und Abgaben", "szolgálatok és adók", "servicii și dări", "services and dues"),
    ],
  },
  {
    id: "printing-reformation", family: "timeline", grade: 7,
    title: t("Vom Druck zur Debatte", "A nyomtatástól a vitáig", "De la tipar la dezbatere", "From print to debate"),
    clue: t("Ordne, wie neue Ideen schneller öffentlich wurden.", "Rendezd, hogyan váltak gyorsabban nyilvánossá az új eszmék.", "Ordonează modul în care ideile noi au devenit publice mai repede.", "Order how new ideas became public more quickly."),
    mode: "order", stages: [
      t("bewegliche Lettern", "mozgatható betűk", "litere mobile", "movable type"),
      t("günstigere Bücher", "olcsóbb könyvek", "cărți mai ieftine", "cheaper books"),
      t("mehr Leser", "több olvasó", "mai mulți cititori", "more readers"),
      t("schnellere Verbreitung von Ideen", "az eszmék gyorsabb terjedése", "răspândirea mai rapidă a ideilor", "ideas spread faster"),
    ],
  },
  {
    id: "newspaper", family: "source", grade: 7,
    title: t("Zeitungsbericht", "Újságcikk", "Articol de ziar", "Newspaper report"),
    clue: t("Er berichtet zeitnah, kann aber eine politische Perspektive vertreten.", "Közel egykorú beszámoló, de politikai nézőpontot is képviselhet.", "Relatează aproape de momentul evenimentului, dar poate avea o perspectivă politică.", "It reports close to the event but may carry a political viewpoint."),
    mode: "choice", answer: sourceKinds.written, distractors: [sourceKinds.material, sourceKinds.visual, sourceKinds.secondary],
  },
  {
    id: "silk-road", family: "map", grade: 7,
    title: t("Route zwischen Ost und West", "Útvonal Kelet és Nyugat között", "Rută între Est și Vest", "Route between East and West"),
    clue: t("Waren, Wissen und Krankheiten bewegen sich entlang vieler Teilstrecken.", "Áruk, tudás és betegségek sok részútvonalon terjednek.", "Mărfurile, cunoștințele și bolile circulă pe mai multe segmente.", "Goods, knowledge and diseases move along many linked routes."),
    mode: "choice", answer: t("Fernhandel und kultureller Austausch", "távolsági kereskedelem és kulturális csere", "comerț la distanță și schimb cultural", "long-distance trade and cultural exchange"), distractors: [
      t("nur militärischer Rückzug", "csak katonai visszavonulás", "doar retragere militară", "military retreat only"),
      t("eine einzige gepflasterte Straße", "egyetlen kövezett út", "un singur drum pavat", "one paved road"),
      t("vollständige Grenzschließung", "teljes határzár", "închiderea completă a frontierelor", "complete border closure"),
    ],
  },
  {
    id: "ocean-voyages", family: "map", grade: 7,
    title: t("Fahrt über den Atlantik", "Atlanti-óceáni hajóút", "Călătorie peste Atlantic", "Voyage across the Atlantic"),
    clue: t("Die Route verbindet Kontinente und verändert Handel und Herrschaft.", "Az útvonal kontinenseket köt össze, és átalakítja a kereskedelmet és az uralmat.", "Ruta leagă continente și schimbă comerțul și dominația.", "The route links continents and changes trade and power."),
    mode: "choice", answer: t("überseeische Expansion", "tengerentúli terjeszkedés", "expansiune peste mări", "overseas expansion"), distractors: [
      t("Binnenwanderung", "belső vándorlás", "migrație internă", "internal migration"),
      t("mittelalterliche Lehnsvergabe", "középkori hűbéradomány", "acordare feudală medievală", "medieval land grant"),
      t("Eisenbahnverkehr", "vasúti közlekedés", "transport feroviar", "rail transport"),
    ],
  },
  {
    id: "plague-change", family: "cause", grade: 7,
    title: t("Pest und Gesellschaft", "Pestis és társadalom", "Ciuma și societatea", "Plague and society"),
    clue: t("Ordne eine mögliche Wirkungskette, ohne sie als einzige Ursache zu verstehen.", "Rendezz egy lehetséges hatásláncot, de ne tekintsd egyetlen oknak.", "Ordonează un posibil lanț de efecte fără a-l considera singura cauză.", "Order one possible chain of effects without treating it as the only cause."),
    mode: "order", stages: [
      t("starker Bevölkerungsrückgang", "nagy népességcsökkenés", "scădere puternică a populației", "major population decline"),
      t("Arbeitskräfte fehlen", "munkaerőhiány", "lipsă de forță de muncă", "labour becomes scarce"),
      t("Löhne und Verhandlungsmacht steigen", "nőnek a bérek és az alkupozíció", "cresc salariile și puterea de negociere", "wages and bargaining power rise"),
      t("alte Abhängigkeiten geraten unter Druck", "a régi függőségek meggyengülnek", "vechile dependențe sunt contestate", "older dependencies come under pressure"),
    ],
  },
  {
    id: "print-ideas", family: "cause", grade: 7,
    title: t("Druck und Öffentlichkeit", "Nyomtatás és nyilvánosság", "Tipar și spațiu public", "Print and public debate"),
    clue: t("Ordne die Wirkungskette neuer Drucktechnik.", "Rendezd az új nyomdatechnika hatásláncát.", "Ordonează lanțul de efecte al noii tehnologii tipografice.", "Order the chain of effects from new printing technology."),
    mode: "order", stages: [
      t("schnellere Vervielfältigung", "gyorsabb sokszorosítás", "multiplicare mai rapidă", "faster reproduction"),
      t("sinkende Kosten", "csökkenő költségek", "costuri mai mici", "lower costs"),
      t("größeres Publikum", "nagyobb közönség", "public mai larg", "larger audience"),
      t("mehr öffentliche Kontroversen", "több nyilvános vita", "mai multe controverse publice", "more public controversy"),
    ],
  },
  {
    id: "industrial-modern", family: "timeline", grade: 8,
    title: t("Industrialisierung", "Iparosodás", "Industrializare", "Industrialisation"),
    clue: t("Ordne technische, wirtschaftliche und soziale Veränderungen.", "Rendezd a technikai, gazdasági és társadalmi változásokat.", "Ordonează schimbările tehnice, economice și sociale.", "Order technical, economic and social changes."),
    mode: "order", stages: [
      t("neue Kraftmaschinen", "új erőgépek", "noi mașini de forță", "new power machinery"),
      t("Fabrikproduktion", "gyári termelés", "producție în fabrici", "factory production"),
      t("Wachstum der Städte", "a városok növekedése", "creșterea orașelor", "urban growth"),
      t("soziale Reformen", "társadalmi reformok", "reforme sociale", "social reforms"),
    ],
  },
  {
    id: "photograph", family: "source", grade: 8,
    title: t("Historisches Foto", "Történelmi fénykép", "Fotografie istorică", "Historical photograph"),
    clue: t("Es hält einen ausgewählten Augenblick fest; Ausschnitt und Inszenierung müssen geprüft werden.", "Egy kiválasztott pillanatot rögzít; a képkivágást és a beállítást is vizsgálni kell.", "Surprinde un moment selectat; cadrul și punerea în scenă trebuie analizate.", "It records a selected moment; framing and staging still need analysis."),
    mode: "choice", answer: sourceKinds.visual, distractors: [sourceKinds.written, sourceKinds.material, sourceKinds.secondary],
  },
  {
    id: "industrial-rail", family: "map", grade: 8,
    title: t("Wachsende Eisenbahnlinien", "Növekvő vasúthálózat", "Extinderea căilor ferate", "Expanding railways"),
    clue: t("Orte werden schneller verbunden, Märkte und Mobilität verändern sich.", "A helyek gyorsabban kapcsolódnak össze, átalakulnak a piacok és a mobilitás.", "Localitățile sunt conectate mai rapid, iar piețele și mobilitatea se schimbă.", "Places connect faster, changing markets and mobility."),
    mode: "choice", answer: t("Verdichtung von Verkehr und Wirtschaft", "a közlekedés és gazdaság sűrűsödése", "intensificarea transportului și economiei", "intensification of transport and trade"), distractors: [
      t("Auflösung aller Städte", "minden város megszűnése", "dispariția tuturor orașelor", "disappearance of all cities"),
      t("Ende des Warenverkehrs", "az áruszállítás vége", "sfârșitul transportului de mărfuri", "end of goods transport"),
      t("Rückkehr zur Naturalwirtschaft", "visszatérés az önellátáshoz", "revenire la economia naturală", "return to subsistence only"),
    ],
  },
  {
    id: "cold-war-blocs", family: "map", grade: 8,
    title: t("Zwei Machtblöcke", "Két hatalmi tömb", "Două blocuri de putere", "Two power blocs"),
    clue: t("Die Karte zeigt Bündnisse, Einflusszonen und eine stark bewachte Trennlinie.", "A térkép szövetségeket, befolyási övezeteket és erősen őrzött választóvonalat mutat.", "Harta arată alianțe, zone de influență și o linie de separare puternic păzită.", "The map shows alliances, spheres of influence and a heavily guarded divide."),
    mode: "choice", answer: t("Blockbildung im Kalten Krieg", "hidegháborús tömbösödés", "formarea blocurilor în Războiul Rece", "Cold War bloc formation"), distractors: [
      t("antiker Stadtstaat", "ókori városállam", "oraș-stat antic", "ancient city-state"),
      t("mittelalterlicher Fernhandel", "középkori távolsági kereskedelem", "comerț medieval la distanță", "medieval long-distance trade"),
      t("neolithische Landwirtschaft", "újkőkori földművelés", "agricultură neolitică", "Neolithic farming"),
    ],
  },
  {
    id: "factory-urbanization", family: "cause", grade: 8,
    title: t("Fabrik und Großstadt", "Gyár és nagyváros", "Fabrică și mare oraș", "Factory and city"),
    clue: t("Ordne eine typische, aber nicht überall gleiche Entwicklung.", "Rendezz egy jellemző, de nem mindenhol azonos fejlődési sort.", "Ordonează o evoluție tipică, dar nu identică pretutindeni.", "Order a common development that did not occur identically everywhere."),
    mode: "order", stages: [
      t("Fabriken schaffen Arbeitsplätze", "a gyárak munkahelyeket teremtenek", "fabricile creează locuri de muncă", "factories create jobs"),
      t("Menschen ziehen in Städte", "az emberek városokba költöznek", "oamenii se mută la oraș", "people move to cities"),
      t("Wohnraum wird knapp", "lakáshiány alakul ki", "locuințele devin insuficiente", "housing becomes scarce"),
      t("Infrastruktur und Reformdruck wachsen", "nő az infrastruktúra és reform iránti igény", "cresc infrastructura și presiunea pentru reforme", "infrastructure and pressure for reform grow"),
    ],
  },
  {
    id: "alliances-war", family: "cause", grade: 8,
    title: t("Bündnisse und Eskalation", "Szövetségek és eszkaláció", "Alianțe și escaladare", "Alliances and escalation"),
    clue: t("Ordne eine vereinfachte Eskalationskette; ein Krieg hat mehrere Ursachen.", "Rendezz egy egyszerűsített eszkalációs láncot; egy háborúnak több oka van.", "Ordonează un lanț simplificat al escaladării; un război are cauze multiple.", "Order a simplified escalation chain; wars have multiple causes."),
    mode: "order", stages: [
      t("Spannungen zwischen Mächten", "feszültség a nagyhatalmak között", "tensiuni între puteri", "tensions between powers"),
      t("starre Bündnisse", "merev szövetségi rendszerek", "alianțe rigide", "rigid alliances"),
      t("regionaler Auslöser", "regionális kiváltó esemény", "declanșator regional", "regional trigger"),
      t("Kettenreaktion der Mobilmachungen", "mozgósítások láncreakciója", "reacție în lanț a mobilizărilor", "chain reaction of mobilisations"),
    ],
  },
];

export const GESCHICHTE_VISUAL_UI = {
  de: { label: "Historische Spurensuche", correct: "Richtig!", solution: "Lösung", order: "Deine Reihenfolge", tap: "Tippe die Schritte in der richtigen Reihenfolge an", reset: "Neu ordnen" },
  hu: { label: "Történelmi nyomozás", correct: "Helyes!", solution: "Megoldás", order: "A sorrended", tap: "Koppints a lépésekre a helyes sorrendben", reset: "Újrakezdés" },
  ro: { label: "Investigație istorică", correct: "Corect!", solution: "Soluție", order: "Ordinea ta", tap: "Atinge etapele în ordinea corectă", reset: "Reordonează" },
  en: { label: "Historical investigation", correct: "Correct!", solution: "Solution", order: "Your sequence", tap: "Tap the steps in the correct order", reset: "Start again" },
} satisfies Record<GeschichteVisualLang, Record<string, string>>;

export type LocalizedGeschichteMission =
  | {
      id: HistoryDiagramId;
      family: HistoryDiagramFamily;
      mode: "choice";
      title: string;
      clue: string;
      answer: string;
      options: string[];
    }
  | {
      id: HistoryDiagramId;
      family: HistoryDiagramFamily;
      mode: "order";
      title: string;
      clue: string;
      stages: string[];
    };

export function localizedGeschichteMissions(grade: number, lang?: string): LocalizedGeschichteMission[] {
  const activeLang = geschichteVisualLang(lang);
  return GESCHICHTE_MISSIONS.filter(mission => mission.grade === grade).map(mission => {
    if (mission.mode === "choice") {
      return {
        id: mission.id,
        family: mission.family,
        mode: "choice" as const,
        title: mission.title[activeLang],
        clue: mission.clue[activeLang],
        answer: mission.answer[activeLang],
        options: [mission.answer, ...mission.distractors].map(value => value[activeLang]),
      };
    }
    return {
      id: mission.id,
      family: mission.family,
      mode: "order" as const,
      title: mission.title[activeLang],
      clue: mission.clue[activeLang],
      stages: mission.stages.map(value => value[activeLang]),
    };
  });
}
