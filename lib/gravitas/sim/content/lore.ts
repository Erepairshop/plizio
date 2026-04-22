import type { LocalizedString } from "../types";

export const LORE_TEXT = {
  stationName: { en: "Starhold Nexus", hu: "Csillagkapu Nexus", de: "Sternenfeste Nexus", ro: "Nexusul Stelar" },
  intro: {
    en: "You wake in a damaged station drifting at the edge of known space. Systems are failing. Something sleeps in the core.",
    hu: "Egy sérült állomáson térsz magadhoz az ismert tér szélén. A rendszerek hibásak. Valami alszik a magkamrában.",
    de: "Du erwachst in einer beschädigten Station am Rand des bekannten Raums. Systeme versagen. Etwas schläft im Kern.",
    ro: "Te trezești într-o stație avariată la marginea spațiului cunoscut. Sistemele cedează. Ceva doarme în nucleu.",
  },
  phaseDescriptions: {
    boot: { en: "Emergency protocols active. Stabilize systems to survive.", hu: "Vészprotokollok aktívak. Stabilizáld a rendszereket.", de: "Notfallprotokolle aktiv. Systeme stabilisieren.", ro: "Protocoale de urgență active. Stabilizează sistemele." },
    activation: { en: "The core chamber resonates. Something is awakening.", hu: "A magkamra rezonál. Valami ébredezik.", de: "Die Kernkammer resoniert. Etwas erwacht.", ro: "Camera nucleului rezonează. Ceva se trezește." },
    awakened: { en: "The avatar breathes. The station is now the first layer of a wider world.", hu: "Az avatár lélegzik. Az állomás most egy tágabb világ első rétege.", de: "Der Avatar atmet. Die Station ist jetzt die erste Schicht einer größeren Welt.", ro: "Avatarul respiră. Stația este acum primul strat al unei lumi mai largi." },
  },
  voidWhispers: [
    { en: "...the void remembers...", hu: "...az űr emlékszik...", de: "...die Leere erinnert sich...", ro: "...vidul își amintește..." },
    { en: "...patterns in the static...", hu: "...minták a zajban...", de: "...Muster im Rauschen...", ro: "...tipare în static..." },
    { en: "...not alone...", hu: "...nem vagy egyedül...", de: "...nicht allein...", ro: "...nu ești singur..." },
    { en: "...the shell listens...", hu: "...a burok figyel...", de: "...die Hülle lauscht...", ro: "...învelișul ascultă..." },
    { en: "...echoes of what was...", hu: "...visszhangok a múltból...", de: "...Echos von dem was war...", ro: "...ecouri ale trecutului..." },
  ],
  worldTurns: [
    { en: "The station held its breath for a moment.", hu: "Az állomás egy pillanatra visszatartotta a lélegzetét.", de: "Die Station hielt für einen Moment den Atem an.", ro: "Stația și-a ținut respirația o clipă." },
    { en: "Something shifted in the hidden layer.", hu: "Valami elmozdult a rejtett rétegben.", de: "Etwas verschob sich in der verborgenen Schicht.", ro: "Ceva s-a mutat în stratul ascuns." },
    { en: "The shell learned a new rhythm.", hu: "A test új ritmust tanult.", de: "Die Hülle lernte einen neuen Rhythmus.", ro: "Corpul a învățat un ritm nou." },
    { en: "A wider pattern moved behind the station walls.", hu: "Egy tágabb minta mozdult meg az állomás falai mögött.", de: "Ein breiteres Muster bewegte sich hinter den Stationwänden.", ro: "Un tipar mai larg s-a mișcat în spatele pereților stației." },
  ],
};

export const MODULE_TEXT = {
  reactor: {
    name: { en: "Reactor", hu: "Reaktor", de: "Reaktor", ro: "Reactor" },
    role: {
      en: "Keeps the station breathing and smooths out dangerous power spikes.",
      hu: "Életben tartja az állomást és kisimítja a veszélyes energialökéseket.",
      de: "Hält die Station am Leben und dämpft gefährliche Energiespitzen.",
      ro: "Ține stația în viață și amortizează vârfurile periculoase de energie.",
    }
  },
  logistics: {
    name: { en: "Logistics", hu: "Logisztika", de: "Logistik", ro: "Logistică" },
    role: {
      en: "Pulls salvage in from the outer hull and reopens dormant supply routes.",
      hu: "Begyűjti a külső roncsmezőből a nyersanyagot és újranyitja az ellátási útvonalakat.",
      de: "Zieht Bergungsgut aus der Außenhülle und öffnet Versorgungslinien erneut.",
      ro: "Aduce materiale din carcasa exterioară și redeschide rutele de aprovizionare.",
    }
  },
  core: {
    name: { en: "Core Chamber", hu: "Magkamra", de: "Kernkammer", ro: "Camera nucleului" },
    role: {
      en: "Holds the dormant shell and becomes the center of the awakening ritual.",
      hu: "Itt nyugszik a szunnyadó test, és ez lesz az ébredés központja.",
      de: "Hier ruht die schlafende Hülle, und hier beginnt das Erwachen.",
      ro: "Aici se află corpul adormit și tot aici începe trezirea.",
    }
  },
  sensor: {
    name: { en: "Sensor Node", hu: "Szenzormodul", de: "Sensorenknoten", ro: "Nodul senzor" },
    role: {
      en: "Reads distortion, signal drift and faint activity beyond the hull.",
      hu: "A torzulásokat, jeleltolódásokat és a burkon túli halvány aktivitást figyeli.",
      de: "Erfasst Verzerrungen, Signaldrift und schwache Aktivität außerhalb der Hülle.",
      ro: "Citește distorsiuni, deviații de semnal și activitate slabă dincolo de carcasă.",
    }
  }
};

export const VICTORY_TEXT = {
  stationLostTitle: { en: "STATION LOST", hu: "ÁLLOMÁS ELVESZETT", de: "STATION VERLOREN", ro: "STAȚIE PIERDUTĂ" },
  stationLostBody: {
    en: "Your station drifted into the void. Every lesson carries forward.",
    hu: "Az állomásod elsodródott a semmibe. Minden lecke a jövőt szolgálja.",
    de: "Deine Station trieb in die Leere. Jede Lektion trägt Früchte.",
    ro: "Stația ta a rătăcit în vid. Fiecare lecție contează."
  },
  firstLoopTitle: { en: "PHASE II OPENED", hu: "II. FÁZIS MEGNYÍLT", de: "PHASE II GEÖFFNET", ro: "FAZA II DESCHISĂ" },
  tryAgain: { en: "Try Again", hu: "Újrapróbálás", de: "Nochmal versuchen", ro: "Încearcă din nou" },
  continuePlaying: { en: "Enter the wider world", hu: "Belépés a tágabb világba", de: "In die weitere Welt", ro: "Intră în lumea largă" },
};
