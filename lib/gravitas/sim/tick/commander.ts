import type { StarholdState, LocalizedString } from "../types";
import { evaluateProfile, getProfileEffects, PROFILE_DEFS } from "../commander/evaluate";
import { pushJournal } from "../shared";
import { pushArchiveEvent } from "../archive/manager";

export function tickCommanderProfile(state: StarholdState): StarholdState {
  if (state.tick - state.commander.metrics.lastEvaluatedAtTick < 86400) {
    return state;
  }

  const nextProfileId = evaluateProfile(state.commander.metrics, state.moduleLevels);
  let nextState = state;

  if (nextProfileId !== state.commander.currentProfile) {
    const profileDef = PROFILE_DEFS[nextProfileId];
    const changeAlert: LocalizedString = {
      en: `Commander profile updated: ${profileDef.name.en}`,
      hu: `Parancsnoki profil frissítve: ${profileDef.name.hu}`,
      de: `Kommandantenprofil aktualisiert: ${profileDef.name.de}`,
      ro: `Profil comandant actualizat: ${profileDef.name.ro}`,
    };

    nextState = {
      ...state,
      commander: {
        ...state.commander,
        currentProfile: nextProfileId,
        effects: getProfileEffects(nextProfileId),
      },
      alert: changeAlert,
      journal: pushJournal(state, changeAlert),
    };

    nextState = pushArchiveEvent(nextState, {
      category: "unlock",
      severity: "info",
      importance: 4,
      title: { en: "Commander Profile Updated", hu: "Parancsnoki Profil Frissítve", de: "Kommandantenprofil aktualisiert", ro: "Profil Comandant Actualizat" },
      summary: changeAlert,
      details: {
        targetId: nextProfileId,
      }
    });
  }

  return {
    ...nextState,
    commander: {
      ...nextState.commander,
      metrics: {
        ...nextState.commander.metrics,
        lastEvaluatedAtTick: state.tick,
      }
    }
  };
}
