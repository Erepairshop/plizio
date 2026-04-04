import type { LocalizedString } from "../types";

export type FactionId = "korgath" | "velari" | "drex" | "synthoid" | "noma";

export interface Faction {
  id: FactionId;
  name: LocalizedString;
  /** Description that the player sees — they infer the style from this */
  description: LocalizedString;
  /** Short combat style description */
  combatStyle: LocalizedString;
  /** Hidden combat profile — NOT displayed as numbers! */
  profile: {
    firepower: number; // 0-100
    barrier: number; // 0-100
    tactics: number; // 0-100
    inspiration: number; // 0-100
    intel: number; // 0-100
    energy: number; // 0-100
  };
}

export const GALAXY_FACTIONS: Record<FactionId, Faction> = {
  korgath: {
    id: "korgath",
    name: { hu: "Korgath", en: "Korgath", de: "Korgath", ro: "Korgath" },
    description: {
      hu: "A Korgath kalózok a galaxys legfélelmetesebb portyázói. Brutális, közvetlen támadással nyomulnak előre, nem ismernek félelmet — de fegyelemről és stratégiáról sem hallottak.",
      en: "The Korgath pirates are the galaxy's most fearsome raiders. They push forward with brutal, direct attacks, knowing no fear — but they've never heard of discipline or strategy.",
      de: "Die Korgath-Piraten sind die furchterregendsten Plünderer der Galaxie. Sie stürmen mit brutalen, direkten Angriffen voran und kennen keine Furcht – von Disziplin oder Strategie haben sie jedoch noch nie gehört.",
      ro: "Pirații Korgath sunt cei mai de temut prădători ai galaxiei. Înaintează cu atacuri brutale și directe, nu cunosc frica — dar n-au auzit niciodată de disciplină sau strategie.",
    },
    combatStyle: {
      hu: "Agresszív roham, improvizált fegyverek, nincs visszavonulás",
      en: "Aggressive assault, improvised weapons, no retreat",
      de: "Aggressiver Ansturm, improvisierte Waffen, kein Rückzug",
      ro: "Asalt agresiv, arme improvizate, fără retragere",
    },
    profile: {
      firepower: 85,
      barrier: 20,
      tactics: 40,
      inspiration: 25,
      intel: 10,
      energy: 35,
    },
  },
  velari: {
    id: "velari",
    name: { hu: "Velari", en: "Velari", de: "Velari", ro: "Velari" },
    description: {
      hu: "A Velari egy fejlett technológiai civilizáció. Precíz energiafegyverekkel és fejlett pajzsokkal harcolnak. Minden lépésüket kiszámolják — de ha a terv felbomlik, nehezen alkalmazkodnak.",
      en: "The Velari are an advanced technological civilization. They fight with precise energy weapons and advanced shields. They calculate every move — but if the plan falls apart, they struggle to adapt.",
      de: "Die Velari sind eine fortschrittliche technologische Zivilisation. Sie kämpfen mit präzisen Energiewaffen und hochentwickelten Schilden. Sie berechnen jeden Schritt – doch wenn der Plan scheitert, fällt ihnen die Anpassung schwer.",
      ro: "Velari este o civilizație tehnologică avansată. Luptă cu arme energetice precise și scuturi avansate. Își calculează fiecare mișcare — dar dacă planul se destramă, se adaptează greu.",
    },
    combatStyle: {
      hu: "Távolsági energia-harc, fejlett védelmi rendszerek, kiszámolt manőverek",
      en: "Long-range energy combat, advanced defensive systems, calculated maneuvers",
      de: "Fernkampf mit Energie, fortschrittliche Verteidigungssysteme, berechnete Manöver",
      ro: "Luptă energetică la distanță, sisteme defensive avansate, manevre calculate",
    },
    profile: {
      firepower: 45,
      barrier: 60,
      tactics: 55,
      inspiration: 40,
      intel: 80,
      energy: 75,
    },
  },
  drex: {
    id: "drex",
    name: { hu: "Drex", en: "Drex", de: "Drex", ro: "Drex" },
    description: {
      hu: "A Drex raj egyetlen gondolattal vezérelt milliónyi egységből áll. Egyenként gyengék, de a nyomasztó létszám és megállíthatatlan kitartásuk letör minden ellenállást.",
      en: "The Drex swarm consists of millions of units guided by a single thought. Individually weak, their overwhelming numbers and unstoppable persistence break all resistance.",
      de: "Der Drex-Schwarm besteht aus Millionen von Einheiten, die von einem einzigen Gedanken gesteuert werden. Einzeln schwach, bricht ihre überwältigende Zahl und unaufhaltsame Ausdauer jeden Widerstand.",
      ro: "Roiul Drex este format din milioane de unități ghidate de un singur gând. Slabe individual, numărul lor copleșitor și persistența de neoprit înfrâng orice rezistență.",
    },
    combatStyle: {
      hu: "Tömeges rajzás, folyamatos nyomás, egyéni egységek gyengék de végtelenek",
      en: "Massive swarming, continuous pressure, individual units are weak but endless",
      de: "Massives Schwärmen, kontinuierlicher Druck, Einzeleinheiten sind schwach aber endlos",
      ro: "Roi masiv, presiune continuă, unitățile individuale sunt slabe dar nesfârșite",
    },
    profile: {
      firepower: 55,
      barrier: 35,
      tactics: 25,
      inspiration: 70,
      intel: 15,
      energy: 20,
    },
  },
  synthoid: {
    id: "synthoid",
    name: { hu: "Synthoid", en: "Synthoid", de: "Synthoid", ro: "Synthoid" },
    description: {
      hu: "A Synthoid-ok teljesen gépesített haderő. Nincs érzelem, nincs pánik — csupán logika. Minden csatából tanulnak és alkalmazkodnak. Gyengeségük: a kiszámíthatatlanságot nem tudják modellezni.",
      en: "The Synthoids are a completely mechanized force. No emotion, no panic — only logic. They learn and adapt from every battle. Their weakness: they cannot model unpredictability.",
      de: "Die Synthoids sind eine vollständig mechanisierte Streitmacht. Keine Emotionen, keine Panik – nur Logik. Sie lernen und passen sich jedem Kampf an. Ihre Schwäche: Unvorhersehbarkeit können sie nicht modellieren.",
      ro: "Synthoids sunt o forță complet mecanizată. Fără emoții, fără panică — doar logică. Învață și se adaptează din fiecare bătălie. Slăbiciunea lor: nu pot modela imprevizibilitatea.",
    },
    combatStyle: {
      hu: "Adaptív taktika, erős védelem, tanuló algoritmus — de kreativitásra nem képesek",
      en: "Adaptive tactics, strong defense, learning algorithm — but incapable of creativity",
      de: "Adaptive Taktik, starke Verteidigung, lernender Algorithmus – aber unfähig zu Kreativität",
      ro: "Tactici adaptive, apărare puternică, algoritm de învățare — dar incapabili de creativitate",
    },
    profile: {
      firepower: 60,
      barrier: 70,
      tactics: 80,
      inspiration: 10,
      intel: 65,
      energy: 60,
    },
  },
  noma: {
    id: "noma",
    name: { hu: "Noma", en: "Noma", de: "Noma", ro: "Noma" },
    description: {
      hu: "A Noma nomádok a galaxys legkiszámíthatatlanabb harcosai. Sosem ott vannak ahol várod, sosem azt csinálják amit gondolnád. Direkt ütközetben sebezhetők, de ritkán kényszeríthetők bele.",
      en: "The Noma nomads are the galaxy's most unpredictable warriors. They are never where you expect them to be, and never do what you would think. Vulnerable in direct combat, but rarely forced into it.",
      de: "Die Noma-Nomaden sind die unberechenbarsten Krieger der Galaxie. Sie sind nie dort, wo man sie erwartet, und tun nie das, was man denkt. Im direkten Gefecht verwundbar, lassen sie sich jedoch selten darauf ein.",
      ro: "Nomazii Noma sunt cei mai imprevizibili războinici ai galaxiei. Nu sunt niciodată unde te aștepți și nu fac niciodată ce ai crede. Vulnerabili în luptă directă, dar rareori pot fi forțați să o facă.",
    },
    combatStyle: {
      hu: "Gerillataktika, eltűnés és megjelenés, csapdák, soha nem frontális harc",
      en: "Guerrilla tactics, vanishing and appearing, traps, never frontal combat",
      de: "Guerillataktik, Verschwinden und Erscheinen, Fallen, niemals Frontalkampf",
      ro: "Tactici de gherilă, dispariții și apariții, capcane, niciodată luptă frontală",
    },
    profile: {
      firepower: 50,
      barrier: 30,
      tactics: 70,
      inspiration: 55,
      intel: 45,
      energy: 40,
    },
  },
};
