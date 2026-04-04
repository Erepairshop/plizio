import type { DilemmaId, DilemmaImmediateEffect, DilemmaDelayedEffect } from "./types";
import type { FactionId } from "../faction/types";
import type { LocalizedString } from "../types";

export function getDilemmaEffects(dilemmaId: DilemmaId, optionId: string, factionId: FactionId | null): {
  immediate: DilemmaImmediateEffect;
  delayed: DilemmaDelayedEffect[];
  journalText: LocalizedString;
} {
  const immediate: DilemmaImmediateEffect = {};
  const delayed: DilemmaDelayedEffect[] = [];
  let journalText: LocalizedString = { en: "", hu: "", de: "", ro: "" };

  const day = 24 * 60 * 60 * 1000;

  switch (dilemmaId) {
    case "refugees":
      if (optionId === "A") {
        immediate.resourceChanges = { supply: -50 };
        if (factionId) immediate.reputationChanges = { [factionId]: 10 };
        delayed.push({
          id: "refugee_workers",
          triggerAt: Date.now() + 3 * day,
          chance: 1.0,
          effect: {}, // Logic handled in engine for permanent boost if needed or just resource
          journalText: { en: "The refugees have integrated. Drone efficiency improved.", hu: "A menekültek beilleszkedtek. A drónok hatékonyabbak.", de: "Die Flüchtlinge haben sich integriert. Drohneneffizienz verbessert.", ro: "Refugiații s-au integrat. Eficiența dronelor a crescut." }
        });
        journalText = { en: "You welcomed the refugees.", hu: "Befogadtad a menekülteket.", de: "Du hast die Flüchtlinge aufgenommen.", ro: "Ai primit refugiații." };
      } else if (optionId === "B") {
        if (factionId) immediate.reputationChanges = { [factionId]: -5 };
        delayed.push({
          id: "refugee_revenge_trigger",
          triggerAt: Date.now() + 7 * day,
          chance: 0.2,
          effect: {}, // Triggers raid dilemma
          journalText: { en: "Rumors say the rejected refugees are planning something.", hu: "Hírek szerint az elutasított menekültek terveznek valamit.", de: "Gerüchte besagen, dass die abgelehnten Flüchtlinge etwas planen.", ro: "Zvonurile spun că refugiații refuzați plănuiesc ceva." }
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
          triggerAt: Date.now() + 3 * day,
          chance: 0.25,
          effect: {}, // Logic for joint raid / massive rep loss
          journalText: { en: "Your double game has failed.", hu: "A kettős játékod elbukott.", de: "Dein Doppelspiel ist gescheitert.", ro: "Jocul tău dublu a eșuat." }
        });
        journalText = { en: "You attempted a dangerous double play.", hu: "Veszélyes kettős játékba kezdtél.", de: "Du hast ein gefährliches Doppelspiel versucht.", ro: "Ai încercat un joc dublu periculos." };
      }
      break;

    case "reactor_overload":
      if (optionId === "A") {
        immediate.moduleOffline = { moduleId: "reactor", durationTicks: 30 * 60 }; // 30 mins
        delayed.push({
          id: "reactor_fixed",
          triggerAt: Date.now() + 30 * 60 * 1000,
          chance: 1.0,
          effect: { resourceChanges: { moduleIntegrity_reactor: 30 } }, // mapped in engine
          journalText: { en: "Reactor maintenance complete.", hu: "Reaktor karbantartás kész.", de: "Reaktorwartung abgeschlossen.", ro: "Mentenanță reactor finalizată." }
        });
        journalText = { en: "Reactor shutdown for safety.", hu: "Reaktor leállítva a biztonságért.", de: "Reaktor aus Sicherheitsgründen abgeschaltet.", ro: "Reactor oprit pentru siguranță." };
      } else {
        const fail = Math.random() < 0.4;
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
        const mutiny = Math.random() < 0.3;
        if (mutiny) {
          immediate.moduleOffline = { moduleId: "random", durationTicks: 120 * 60 };
          journalText = { en: "The crew is revolting!", hu: "A legénység fellázadt!", de: "Die Besatzung meutert!", ro: "Echipajul se revoltă!" };
        } else {
          journalText = { en: "Tensions remain high.", hu: "A feszültség továbbra is nagy.", de: "Spannungen bleiben hoch.", ro: "Tensiunile rămân ridicate." };
        }
      }
      break;

    default:
      journalText = { en: "Decision recorded.", hu: "Döntés rögzítve.", de: "Entscheidung gespeichert.", ro: "Decizie înregistrată." };
  }

  return { immediate, delayed, journalText };
}
