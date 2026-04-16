import type { StarholdState } from "../types";
import type { ConcordState, ConcordRuleDefinition, ConcordStatus } from "./types";
import { pushNotification } from "../notifications/engine";

const EVAL_INTERVAL = 300; // ticks between standing evaluations
const CANDIDATE_THRESHOLD = 40;
const MEMBER_THRESHOLD = 72;
const REVOKE_VIOLATIONS = 5; // total violations before revoked

export const CONCORD_RULE_DEFINITIONS: ConcordRuleDefinition[] = [
  {
    id: "stability_floor",
    label: {
      en: "Stability Protocol",
      hu: "Stabilitási Protokoll",
      de: "Stabilitätsprotokoll",
      ro: "Protocol de Stabilitate",
    },
    check: (s) => s.resources.stability >= 30,
    penaltyPoints: 8,
    bonusPoints: 4,
  },
  {
    id: "module_integrity",
    label: {
      en: "Module Integrity Standard",
      hu: "Modul-integritási Szabvány",
      de: "Modulintegritätsstandard",
      ro: "Standard de Integritate a Modulului",
    },
    check: (s) => {
      const ids = ["reactor", "logistics", "core", "sensor"] as const;
      return ids.every((id) => s.modules[id].integrity >= 25);
    },
    penaltyPoints: 6,
    bonusPoints: 3,
  },
  {
    id: "no_lockdown",
    label: {
      en: "Emergency Lockdown Avoidance",
      hu: "Vészhelyzeti Lezárás Kerülése",
      de: "Notfall-Lockdown Vermeidung",
      ro: "Evitarea Blocajului de Urgență",
    },
    check: (s) => !s.lockdown,
    penaltyPoints: 12,
    bonusPoints: 2,
  },
  {
    id: "entropy_control",
    label: {
      en: "Entropy Containment",
      hu: "Entrópia-korlátozás",
      de: "Entropie-Eindämmung",
      ro: "Limitarea Entropiei",
    },
    check: (s) => s.entropy < 60,
    penaltyPoints: 5,
    bonusPoints: 3,
  },
  {
    id: "morale_threshold",
    label: {
      en: "Crew Morale Maintenance",
      hu: "Legénység Moráljának Fenntartása",
      de: "Aufrechterhaltung der Besatzungsmoral",
      ro: "Menținerea Moralului Echipajului",
    },
    check: (s) => s.resources.morale >= 40,
    penaltyPoints: 4,
    bonusPoints: 2,
  },
];

export const CONCORD_STATUS_META: Record<
  ConcordStatus,
  { label: { en: string; hu: string; de: string; ro: string }; color: string }
> = {
  none: {
    label: { en: "Non-Member", hu: "Nem Tag", de: "Kein Mitglied", ro: "Non-Membru" },
    color: "#6b7280",
  },
  candidate: {
    label: { en: "Candidate", hu: "Jelölt", de: "Kandidat", ro: "Candidat" },
    color: "#f59e0b",
  },
  member: {
    label: { en: "Member", hu: "Tag", de: "Mitglied", ro: "Membru" },
    color: "#10b981",
  },
  revoked: {
    label: { en: "Revoked", hu: "Visszavont", de: "Entzogen", ro: "Revocat" },
    color: "#ef4444",
  },
};

export function createInitialConcordState(): ConcordState {
  return {
    status: "none",
    standing: 0,
    violations: [],
    totalViolations: 0,
    lastEvaluatedTick: 0,
  };
}

export function normalizeConcordState(concord: ConcordState | undefined): ConcordState {
  if (!concord) return createInitialConcordState();
  return {
    status: concord.status ?? "none",
    standing: Math.max(0, Math.min(100, concord.standing ?? 0)),
    violations: concord.violations ?? [],
    totalViolations: concord.totalViolations ?? 0,
    lastEvaluatedTick: concord.lastEvaluatedTick ?? 0,
  };
}

function deriveStatus(standing: number, totalViolations: number, currentStatus: ConcordStatus): ConcordStatus {
  if (totalViolations >= REVOKE_VIOLATIONS) return "revoked";
  if (currentStatus === "revoked" && standing >= MEMBER_THRESHOLD) return "member";
  if (standing >= MEMBER_THRESHOLD) return "member";
  if (standing >= CANDIDATE_THRESHOLD) return "candidate";
  if (currentStatus === "member" && standing < CANDIDATE_THRESHOLD) return "candidate";
  if (currentStatus === "candidate" && standing < 15) return "none";
  return currentStatus;
}

export function tickConcord(state: StarholdState): StarholdState {
  const concord = normalizeConcordState(state.concord);

  if (state.tick - concord.lastEvaluatedTick < EVAL_INTERVAL) {
    return { ...state, concord };
  }

  let nextStanding = concord.standing;
  const newViolations: import("./types").ConcordViolation[] = [];

  for (const rule of CONCORD_RULE_DEFINITIONS) {
    if (rule.check(state)) {
      nextStanding = Math.min(100, nextStanding + rule.bonusPoints);
    } else {
      nextStanding = Math.max(0, nextStanding - rule.penaltyPoints);
      newViolations.push({ ruleId: rule.id, tick: state.tick });
    }
  }

  const newTotalViolations = concord.totalViolations + newViolations.length;
  const recentViolations = [...concord.violations, ...newViolations].slice(-20);
  const nextStatus = deriveStatus(nextStanding, newTotalViolations, concord.status);

  const nextConcord: ConcordState = {
    status: nextStatus,
    standing: nextStanding,
    violations: recentViolations,
    totalViolations: newTotalViolations,
    lastEvaluatedTick: state.tick,
  };

  let nextState: StarholdState = { ...state, concord: nextConcord };

  if (nextStatus !== concord.status) {
    const statusMeta = CONCORD_STATUS_META[nextStatus];
    const title: import("../types").LocalizedString = {
      en: `Concord Status: ${statusMeta.label.en}`,
      hu: `Concord Státusz: ${statusMeta.label.hu}`,
      de: `Concord-Status: ${statusMeta.label.de}`,
      ro: `Status Concord: ${statusMeta.label.ro}`,
    };
    const message: import("../types").LocalizedString =
      nextStatus === "member"
        ? {
            en: "Your station has met all Concord standards and is now a recognized member.",
            hu: "Az állomásod teljesítette a Concord szabványait, és most elismert tag.",
            de: "Ihre Station hat alle Concord-Standards erfüllt und ist jetzt anerkanntes Mitglied.",
            ro: "Stația ta a îndeplinit toate standardele Concord și este acum membră recunoscută.",
          }
        : nextStatus === "candidate"
        ? {
            en: "Your station is now a Concord candidate. Maintain standards to achieve membership.",
            hu: "Az állomásod most Concord-jelölt. Tartsd fenn a szabványokat a tagság eléréséhez.",
            de: "Ihre Station ist jetzt Concord-Kandidat. Halten Sie die Standards ein, um Mitglied zu werden.",
            ro: "Stația ta este acum candidat Concord. Mențineți standardele pentru a obține calitatea de membru.",
          }
        : nextStatus === "revoked"
        ? {
            en: "Concord membership has been revoked due to repeated violations.",
            hu: "A Concord-tagságot ismételt szabályszegések miatt visszavonták.",
            de: "Die Concord-Mitgliedschaft wurde aufgrund wiederholter Verstöße widerrufen.",
            ro: "Calitatea de membru Concord a fost revocată din cauza încălcărilor repetate.",
          }
        : {
            en: "Concord standing has decreased below candidate threshold.",
            hu: "A Concord-státusz a jelölt küszöb alá csökkent.",
            de: "Der Concord-Status ist unter die Kandidatenschwelle gefallen.",
            ro: "Statutul Concord a scăzut sub pragul de candidat.",
          };
    nextState = pushNotification(nextState, "system", title, message, "Shield");
  }

  return nextState;
}
