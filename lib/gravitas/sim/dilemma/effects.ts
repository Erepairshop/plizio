import type { DilemmaId, DilemmaImmediateEffect, DilemmaDelayedEffect } from "./types";
import type { FactionId } from "../faction/types";
import type { LocalizedString, StarholdState } from "../types";
import { nextRandom } from "../rng";

export function getDilemmaEffects(dilemmaId: DilemmaId, optionId: string, factionId: FactionId | null, state: StarholdState): {
  immediate: DilemmaImmediateEffect;
  delayed: DilemmaDelayedEffect[];
  journalText: LocalizedString;
  nextRng: number;
} {
  const immediate: DilemmaImmediateEffect = {};
  const delayed: DilemmaDelayedEffect[] = [];
  let journalText: LocalizedString = { en: "", hu: "", de: "", ro: "" };
  let currentRngState = state.globalRngState;

  const day = 24 * 60 * 60 * 1000;

  switch (dilemmaId) {
    case "refugees":
      if (optionId === "A") {
        immediate.resourceChanges = { supply: -50 };
        if (factionId) immediate.reputationChanges = { [factionId]: 10 };
        delayed.push({
          id: "refugee_workers",
          sourceDilemmaId: dilemmaId,
          triggerAt: Date.now() + 3 * day,
          chance: 1.0,
          effect: {}, 
          journalText: { en: "The refugees have integrated. Drone efficiency improved.", hu: "A menekültek beilleszkedtek. A drónok hatékonyabbak.", de: "Die Flüchtlinge haben sich integriert. Drohneneffizienz verbessert.", ro: "Refugiații s-au integrat. Eficiența dronelor a crescut." }
        });
        journalText = { en: "You welcomed the refugees.", hu: "Befogadtad a menekülteket.", de: "Du hast die Flüchtlinge aufgenommen.", ro: "Ai primit refugiații." };
      } else if (optionId === "B") {
        if (factionId) immediate.reputationChanges = { [factionId]: -5 };
        delayed.push({
          id: "refugee_revenge_trigger",
          sourceDilemmaId: dilemmaId,
          triggerAt: Date.now() + 7 * day,
          chance: 0.2,
          effect: {}, 
          journalText: { en: "Rumors say the rejected refugees are planning something.", hu: "Hírek szerint az elutasított menekültek terveznek valamit.", de: "Gerüchte besagen, dass die abgelehnten Flüchtlinge etwas planen.", ro: "Zvonurile spun că refugiații refuzați plănuiesc ceva." },
          triggerDilemmaId: "refugee_revenge",
        });
        journalText = { en: "You turned the refugees away.", hu: "Elutasítottad a menekülteket.", de: "Du hast die Flüchtlinge abgewiesen.", ro: "Ai refuzat refugiații." };
      } else {
        immediate.resourceChanges = { supply: -25 };
        if (factionId) immediate.reputationChanges = { [factionId]: 3 };
        journalText = { en: "You gave supplies but kept the station closed.", hu: "Ellátmányt adtál, de az állomás zárva maradt.", de: "Du hast Vorräte gegeben, aber die Station blieb geschlossen.", ro: "Ai dat provizii dar ai ținut stația închisă." };
      }
      break;

    case "trader_offer":
      if (optionId === "A") {
        immediate.materialChanges = { rift_stone: 80 };
        if (factionId) immediate.reputationChanges = { [factionId]: 5 };
        delayed.push({
          id: "trader_raid",
          sourceDilemmaId: dilemmaId,
          triggerAt: Date.now() + 14 * day,
          chance: 0.3,
          effect: {}, // Logic for raid
          journalText: { en: "The data you sold was used to find your position.", hu: "Az eladott adatokat felhasználták a pozíciód bemérésére.", de: "Die verkauften Daten wurden genutzt, um deine Position zu finden.", ro: "Datele vândute au fost folosite pentru a-ți găsi poziția." }
        });
        journalText = { en: "You accepted the trader's offer.", hu: "Elfogadtad a kereskedő ajánlatát.", de: "Du hast das Angebot des Händlers angenommen.", ro: "Ai acceptat oferta comerciantului." };
      } else if (optionId === "B") {
        if (factionId) immediate.reputationChanges = { [factionId]: -2 };
        journalText = { en: "You declined the trade.", hu: "Elutasítottad az üzletet.", de: "Du hast den Handel abgelehnt.", ro: "Ai refuzat schimbul." };
      } else {
        immediate.materialChanges = { lumen_dust: -120, rift_stone: 80 };
        if (factionId) immediate.reputationChanges = { [factionId]: 8 };
        journalText = { en: "You paid extra to keep your data safe.", hu: "Extrát fizettél az adataid biztonságáért.", de: "Du hast extra bezahlt, um deine Daten sicher zu halten.", ro: "Ai plătit extra pentru a-ți păstra datele în siguranță." };
      }
      break;

    case "spy_offer":
      if (optionId === "A") {
        if (factionId) {
          delayed.push({
            id: "spy_discovery",
            sourceDilemmaId: dilemmaId,
            triggerAt: Date.now() + 2 * day,
            chance: 0.4,
            effect: { reputationChanges: { [factionId]: -10 } },
            journalText: { en: "The spy was caught. Your involvement is known.", hu: "A kémet elkapták. Tudják, hogy közöd volt hozzá.", de: "Der Spion wurde gefasst. Deine Beteiligung ist bekannt.", ro: "Spionul a fost prins. Implicarea ta este cunoscută." }
          });
        }
        journalText = { en: "You accepted the intel.", hu: "Elfogadtad az információkat.", de: "Du hast die Informationen angenommen.", ro: "Ai acceptat informațiile." };
      } else if (optionId === "B") {
        if (factionId) immediate.reputationChanges = { [factionId]: 8 };
        journalText = { en: "You reported the traitor.", hu: "Jelentetted az árulót.", de: "Du hast den Verräter gemeldet.", ro: "Ai raportat trădătorul." };
      } else {
        if (factionId) immediate.reputationChanges = { [factionId]: 4 };
        delayed.push({
          id: "double_play_fail",
          sourceDilemmaId: dilemmaId,
          triggerAt: Date.now() + 3 * day,
          chance: 0.25,
          effect: {}, // Logic for joint raid / massive rep loss
          journalText: { en: "Your double game has failed.", hu: "A kettős játékod elbukott.", de: "Dein Doppelspiel ist gescheitert.", ro: "Jocul tău dublu a eșuat." },
          triggerDilemmaId: "spy_backfire",
        });
        journalText = { en: "You attempted a dangerous double play.", hu: "Veszélyes kettős játékba kezdtél.", de: "Du hast ein gefährliches Doppelspiel versucht.", ro: "Ai încercat un joc dublu periculos." };
      }
      break;

    case "reactor_overload":
      if (optionId === "A") {
        immediate.moduleEffects = [{ moduleId: "reactor", offlineDurationTicks: 30 * 60 }];
        delayed.push({
          id: "reactor_fixed",
          sourceDilemmaId: dilemmaId,
          triggerAt: Date.now() + 30 * 60 * 1000,
          chance: 1.0,
          effect: { moduleEffects: [{ moduleId: "reactor", integrityChange: 30 }] },
          journalText: { en: "Reactor maintenance complete.", hu: "Reaktor karbantartás kész.", de: "Reaktorwartung abgeschlossen.", ro: "Mentenanță reactor finalizată." }
        });
        journalText = { en: "Reactor shutdown for safety.", hu: "Reaktor leállítva a biztonságért.", de: "Reaktor aus Sicherheitsgründen abgeschaltet.", ro: "Reactor oprit pentru siguranță." };
      } else {
        const { value: rFail, nextState: sFail } = nextRandom(currentRngState);
        currentRngState = sFail;
        const fail = rFail < 0.4;
        if (fail) {
          immediate.resourceChanges = { moduleIntegrity_reactor: -40, power: -30 };
          journalText = { en: "Critical failure! The reactor buckled.", hu: "Kritikus hiba! A reaktor megsérült.", de: "Kritischer Fehler! Der Reaktor ist beschädigt.", ro: "Eșec critic! Reactorul a cedat." };
        } else {
          journalText = { en: "The reactor stabilized itself.", hu: "A reaktor magától stabilizálódott.", de: "Der Reaktor hat sich selbst stabilisiert.", ro: "Reactorul s-a stabilizat singur." };
        }
      }
      break;

    case "supply_crisis":
      if (optionId === "A") {
        immediate.resourceChanges = { morale: -15, supply: 20 };
        journalText = { en: "Rationing enforced.", hu: "Adagolás bevezetve.", de: "Rationierung eingeführt.", ro: "Raționalizare impusă." };
      } else if (optionId === "B") {
        immediate.resourceChanges = { supply: 40 };
        immediate.materialChanges = { lumen_dust: -200, verdant_crystals: -100 };
        journalText = { en: "Emergency reserves used.", hu: "Vészhelyzeti tartalékok felhasználva.", de: "Notfallreserven genutzt.", ro: "Rezerve de urgență utilizate." };
      } else {
        immediate.resourceChanges = { morale: -25 };
        const { value: rMutiny, nextState: sMutiny } = nextRandom(currentRngState);
        currentRngState = sMutiny;
        const mutiny = rMutiny < 0.3;
        if (mutiny) {
          immediate.moduleOffline = { moduleId: "random", durationTicks: 120 * 60 };
          journalText = { en: "The crew is revolting!", hu: "A legénység fellázadt!", de: "Die Besatzung meutert!", ro: "Echipajul se revoltă!" };
        } else {
          journalText = { en: "Tensions remain high.", hu: "A feszültség továbbra is nagy.", de: "Spannungen bleiben hoch.", ro: "Tensiunile rămân ridicate." };
        }
      }
      break;

    case "black_market_hack":
      if (optionId === "A") {
        immediate.moduleEffects = [{ moduleId: "logistics", integrityChange: 40 }];
        delayed.push({
          id: "black_market_crash_trigger",
          sourceDilemmaId: dilemmaId,
          triggerAt: Date.now() + 5 * day,
          chance: 0.3,
          effect: {},
          journalText: { en: "The rogue AI code is corrupting other systems.", hu: "A kóbor AI kód megfertőzte a többi rendszert.", de: "Der abtrünnige KI-Code korrumpiert andere Systeme.", ro: "Codul AI rătăcit corupe alte sisteme." },
          triggerDilemmaId: "black_market_crash",
        });
        journalText = { en: "You installed the rogue AI upgrade.", hu: "Telepítetted a kóbor AI frissítést.", de: "Du hast das abtrünnige KI-Upgrade installiert.", ro: "Ai instalat upgrade-ul AI rătăcit." };
      } else {
        immediate.moduleEffects = [{ moduleId: "sensor", offlineDurationTicks: 60 * 60 }];
        immediate.resourceChanges = { activation: 10 };
        journalText = { en: "You quarantined the code for study.", hu: "Karanténba zártad a kódot tanulmányozásra.", de: "Du hast den Code zum Studieren in Quarantäne gestellt.", ro: "Ai carantinat codul pentru studiu." };
      }
      break;

    case "black_market_crash":
      if (optionId === "A") {
        immediate.moduleEffects = [
          { moduleId: "sensor", offlineDurationTicks: 120 * 60 },
          { moduleId: "logistics", offlineDurationTicks: 120 * 60 }
        ];
        journalText = { en: "System rebooted. The infection is purged.", hu: "Rendszer újraindítva. A fertőzés törölve.", de: "System neu gestartet. Die Infektion wurde bereinigt.", ro: "Sistem repornit. Infecția a fost purjată." };
      }
      break;

    default:
      journalText = { en: "Decision recorded.", hu: "Döntés rögzítve.", de: "Entscheidung gespeichert.", ro: "Decizie înregistrată." };
  }

  return { immediate, delayed, journalText, nextRng: currentRngState };
}
