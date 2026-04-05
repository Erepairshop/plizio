import type { LocalizedString } from "../types";
import type { WarRoomUnitId } from "../warroom/types";
import { WARROOM_UNITS } from "../warroom/units";
import type { ExpeditionFleet, ExpeditionCrewProfile, ExpeditionRouteProfile, ExpeditionDurationType } from "./types";

export function getRouteProfile(durationMode: ExpeditionDurationType): ExpeditionRouteProfile {
  switch (durationMode) {
    case "short": return "safe";
    case "medium": return "balanced";
    case "long": return "risky";
    case "deep_space": return "deep_space";
  }
}

export function getCrewProfile(fleet: ExpeditionFleet): ExpeditionCrewProfile {
  const roles: Record<string, number> = { tank: 0, assault: 0, recon: 0, support: 0 };
  let total = 0;

  for (const [unitId, count] of Object.entries(fleet.units)) {
    if (count <= 0) continue;
    const def = WARROOM_UNITS[unitId as WarRoomUnitId];
    if (def) {
      roles[def.role] += count;
      total += count;
    }
  }

  if (total === 0) return "mixed";

  if (roles.recon / total >= 0.5) return "scout_heavy";
  if (roles.assault / total >= 0.5) return "assault_heavy";
  if (roles.support / total >= 0.5) return "support_heavy";
  if (roles.tank / total >= 0.5) return "tank_heavy";
  
  return "mixed";
}

export function getRouteRiskMultiplier(profile: ExpeditionRouteProfile): number {
  switch (profile) {
    case "safe": return 0.5;
    case "balanced": return 1.0;
    case "risky": return 1.8;
    case "deep_space": return 3.0;
    case "black_route": return 5.0;
  }
}

export function getRouteLootMultiplier(profile: ExpeditionRouteProfile): number {
  switch (profile) {
    case "safe": return 0.5;
    case "balanced": return 1.0;
    case "risky": return 2.0;
    case "deep_space": return 4.0;
    case "black_route": return 8.0;
  }
}

export function generateExpeditionLesson(
  route: ExpeditionRouteProfile, 
  crew: ExpeditionCrewProfile, 
  wasRecalled: boolean, 
  hadLosses: boolean
): LocalizedString {
  if (wasRecalled) {
    return {
      en: "Emergency recall prevented further disasters, but much of the salvage was abandoned.",
      hu: "A vészhelyzeti visszahívás megelőzte a további katasztrófákat, de sok zsákmányt hátrahagytunk.",
      de: "Der Notrückruf verhinderte weitere Katastrophen, aber viel Bergungsgut wurde zurückgelassen.",
      ro: "Rechemarea de urgență a prevenit alte dezastre, dar multă pradă a fost abandonată."
    };
  }

  if (route === "black_route") {
    if (hadLosses) {
      return {
        en: "The Black Route claims its due. Immense wealth comes with inevitable blood.",
        hu: "A Fekete Útvonal követeli a jussát. A hatalmas vagyon elkerülhetetlen véráldozattal jár.",
        de: "Die Schwarze Route fordert ihren Tribut. Immenser Reichtum geht mit unvermeidlichem Blut einher.",
        ro: "Ruta Neagră își cere prețul. Bogăția imensă vine cu sânge inevitabil."
      };
    }
    return {
      en: "A flawless run through the Black Route! A historic achievement for the fleet.",
      hu: "Hibátlan menet a Fekete Útvonalon! Történelmi teljesítmény a flottától.",
      de: "Ein makelloser Durchlauf auf der Schwarzen Route! Eine historische Leistung der Flotte.",
      ro: "O cursă impecabilă pe Ruta Neagră! O realizare istorică pentru flotă."
    };
  }

  if (route === "safe") {
    if (crew === "scout_heavy") {
      return {
        en: "The safe route combined with heavy recon yielded steady intel without trouble.",
        hu: "A biztonságos útvonal és a sok felderítő gond nélkül, stabil adatokat hozott.",
        de: "Die sichere Route kombiniert mit viel Aufklärung brachte ohne Probleme stetig Daten.",
        ro: "Traseul sigur combinat cu multă recunoaștere a oferit date constante fără probleme."
      };
    }
    return {
      en: "A cautious approach meant limited rewards, but ensured everyone returned safely.",
      hu: "Az óvatos megközelítés korlátozott zsákmányt jelentett, de mindenki épségben visszatért.",
      de: "Ein vorsichtiger Ansatz bedeutete begrenzte Belohnungen, stellte aber sicher, dass alle sicher zurückkehrten.",
      ro: "O abordare precaută a însemnat recompense limitate, dar a asigurat întoarcerea în siguranță a tuturor."
    };
  }

  if (route === "deep_space") {
    if (hadLosses) {
      return {
        en: "Deep space is unforgiving. The rare discoveries came at a high cost.",
        hu: "A mélyűr kegyetlen. A ritka felfedezésekért nagy árat fizettünk.",
        de: "Der Tiefenraum ist unerbittlich. Die seltenen Entdeckungen kamen zu einem hohen Preis.",
        ro: "Spațiul îndepărtat este neiertător. Descoperirile rare au venit cu un cost ridicat."
      };
    }
    return {
      en: "Surviving the deep void without losses is a testament to the fleet's discipline.",
      hu: "Túlélni a mélyűrt veszteségek nélkül a flotta fegyelmének bizonyítéka.",
      de: "Das Überleben im tiefen Nichts ohne Verluste ist ein Beweis für die Disziplin der Flotte.",
      ro: "Supraviețuirea în vidul adânc fără pierderi este o dovadă a disciplinei flotei."
    };
  }

  if (hadLosses && crew === "assault_heavy") {
    return {
      en: "The aggressive posture led to direct confrontations and inevitable casualties.",
      hu: "Az agresszív fellépés közvetlen összetűzésekhez és elkerülhetetlen veszteségekhez vezetett.",
      de: "Die aggressive Haltung führte zu direkten Konfrontationen und unvermeidlichen Verlusten.",
      ro: "Atitudinea agresivă a dus la confruntări directe și pierderi inevitabile."
    };
  }

  if (!hadLosses && crew === "support_heavy") {
    return {
      en: "Strong support logistics kept the fleet operational through tough encounters.",
      hu: "Az erős támogató logisztika működőképesen tartotta a flottát a nehéz találkozások során is.",
      de: "Starke Unterstützungslogistik hielt die Flotte durch schwere Begegnungen einsatzbereit.",
      ro: "Logistica puternică de suport a menținut flota operațională prin confruntări dificile."
    };
  }

  if (!hadLosses && crew === "tank_heavy") {
    return {
      en: "Heavy shielding absorbed incoming damage. A solid, if slow, expedition.",
      hu: "A nehéz páncélzat elnyelte a bejövő sebzéseket. Stabil, de lassú expedíció.",
      de: "Schwere Schilde absorbierten den eingehenden Schaden. Eine solide, wenn auch langsame Expedition.",
      ro: "Scuturile grele au absorbit daunele primite. O expediție solidă, chiar dacă lentă."
    };
  }

  if (route === "risky") {
    return {
      en: "The risk paid off. Pushing boundaries yields better salvage opportunities.",
      hu: "A kockázat kifizetődött. A határok feszegetése jobb mentési lehetőségeket kínál.",
      de: "Das Risiko zahlte sich aus. Grenzen zu überschreiten bringt bessere Bergungschancen.",
      ro: "Riscul a meritat. Depășirea limitelor oferă oportunități mai bune de recuperare."
    };
  }

  return {
    en: "A standard patrol. The fleet handled minor encounters effectively.",
    hu: "Szabványos őrjárat. A flotta hatékonyan kezelte a kisebb találkozásokat.",
    de: "Eine Standardpatrouille. Die Flotte ging effektiv mit kleineren Begegnungen um.",
    ro: "O patrulă standard. Flota s-a descurcat eficient cu întâlnirile minore."
  };
}