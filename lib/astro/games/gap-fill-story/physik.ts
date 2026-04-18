import { GapFillStoryRound } from "../../../../components/astro-games/views/m3/GapFillStoryView";

export const rounds: GapFillStoryRound[] = [
  {
    id: "gfs-phys-1",
    taskDescription: {
      en: "Fill in the blanks to complete the story about forces.",
      de: "Fülle die Lücken aus, um die Geschichte über Kräfte zu vervollständigen.",
      hu: "Egészítsd ki a hiányzó szavakat az erőkről szóló történetben.",
      ro: "Completează spațiile libere pentru a termina povestea despre forțe."
    },
    story: {
      en: "Sir Isaac Newton formulated the laws of {{0}}. He explained that objects with mass attract each other due to a force called {{1}}. A heavier object has more {{2}} than a lighter one, making it harder to push. If you slide a block on the floor, it eventually stops because of {{3}}.",
      de: "Sir Isaac Newton formulierte die Gesetze der {{0}}. Er erklärte, dass Objekte mit Masse sich durch eine Kraft namens {{1}} anziehen. Ein schwereres Objekt hat mehr {{2}} als ein leichteres, wodurch es schwerer zu schieben ist. Wenn man einen Block über den Boden schiebt, bleibt er schließlich wegen der {{3}} stehen.",
      hu: "Sir Isaac Newton megfogalmazta a {{0}} törvényeit. Elmagyarázta, hogy a tömeggel rendelkező testek a {{1}} nevű erő miatt vonzzák egymást. Egy nehezebb tárgynak nagyobb a {{2}}, mint egy könnyebbnek, így nehezebb eltolni. Ha egy tömböt csúsztatsz a padlón, az végül megáll a {{3}} miatt.",
      ro: "Sir Isaac Newton a formulat legile de {{0}}. El a explicat că obiectele cu masă se atrag reciproc datorită unei forțe numite {{1}}. Un obiect mai greu are mai multă {{2}} decât unul mai ușor, făcându-l mai greu de împins. Dacă aluneci un bloc pe podea, acesta se oprește în cele din urmă din cauza {{3}}."
    },
    blanks: [
      {
        index: 0,
        correctOptionId: "motion",
        options: [
          { id: "motion", label: { en: "motion", de: "Bewegung", hu: "mozgás", ro: "mișcare" } },
          { id: "chemistry", label: { en: "chemistry", de: "Chemie", hu: "kémia", ro: "chimie" } }
        ]
      },
      {
        index: 1,
        correctOptionId: "gravity",
        options: [
          { id: "gravity", label: { en: "gravity", de: "Schwerkraft", hu: "gravitáció", ro: "gravitație" } },
          { id: "magnetism", label: { en: "magnetism", de: "Magnetismus", hu: "mágnesesség", ro: "magnetism" } }
        ]
      },
      {
        index: 2,
        correctOptionId: "inertia",
        options: [
          { id: "inertia", label: { en: "inertia", de: "Trägheit", hu: "tehetetlensége", ro: "inerție" } },
          { id: "speed", label: { en: "speed", de: "Geschwindigkeit", hu: "sebessége", ro: "viteză" } }
        ]
      },
      {
        index: 3,
        correctOptionId: "friction",
        options: [
          { id: "friction", label: { en: "friction", de: "Reibung", hu: "súrlódás", ro: "frecare" } },
          { id: "heat", label: { en: "heat", de: "Hitze", hu: "hő", ro: "căldură" } }
        ]
      }
    ]
  },
  {
    id: "gfs-phys-2",
    taskDescription: {
      en: "Fill in the blanks to complete the story about electricity.",
      de: "Fülle die Lücken aus, um die Geschichte über Elektrizität zu vervollständigen.",
      hu: "Egészítsd ki a hiányzó szavakat az elektromosságról szóló történetben.",
      ro: "Completează spațiile libere pentru a termina povestea despre electricitate."
    },
    story: {
      en: "A battery provides the {{0}} needed to push electrons through a wire. Materials like copper are good {{1}}, allowing electricity to flow. Rubber and plastic are {{2}} because they stop the flow. When the switch is turned on, it creates a {{3}} circuit.",
      de: "Eine Batterie liefert die {{0}}, die benötigt wird, um Elektronen durch einen Draht zu schieben. Materialien wie Kupfer sind gute {{1}}, durch die Strom fließen kann. Gummi und Plastik sind {{2}}, weil sie den Fluss stoppen. Wenn der Schalter eingeschaltet wird, entsteht ein {{3}} Stromkreis.",
      hu: "Egy akkumulátor biztosítja azt a {{0}}, amely az elektronok dróton keresztüli tolásához szükséges. Az olyan anyagok, mint a réz, jó {{1}}, lehetővé teszik az áram áramlását. A gumi és a műanyag {{2}}, mert megállítják az áramlást. Amikor a kapcsolót bekapcsolják, {{3}} áramkör jön létre.",
      ro: "O baterie furnizează {{0}} necesară pentru a împinge electronii printr-un fir. Materiale precum cuprul sunt buni {{1}}, permițând electricității să curgă. Cauciucul și plasticul sunt {{2}} deoarece opresc fluxul. Când întrerupătorul este pornit, creează un circuit {{3}}."
    },
    blanks: [
      {
        index: 0,
        correctOptionId: "energy",
        options: [
          { id: "energy", label: { en: "energy", de: "Energie", hu: "energiát", ro: "energie" } },
          { id: "water", label: { en: "water", de: "Wasser", hu: "vizet", ro: "apă" } }
        ]
      },
      {
        index: 1,
        correctOptionId: "conductors",
        options: [
          { id: "conductors", label: { en: "conductors", de: "Leiter", hu: "vezetők", ro: "conductori" } },
          { id: "magnets", label: { en: "magnets", de: "Magnete", hu: "mágnesek", ro: "magneți" } }
        ]
      },
      {
        index: 2,
        correctOptionId: "insulators",
        options: [
          { id: "insulators", label: { en: "insulators", de: "Isolatoren", hu: "szigetelők", ro: "izolatori" } },
          { id: "metals", label: { en: "metals", de: "Metalle", hu: "fémek", ro: "metale" } }
        ]
      },
      {
        index: 3,
        correctOptionId: "closed",
        options: [
          { id: "closed", label: { en: "closed", de: "geschlossener", hu: "zárt", ro: "închis" } },
          { id: "open", label: { en: "open", de: "offener", hu: "nyitott", ro: "deschis" } }
        ]
      }
    ]
  }
];