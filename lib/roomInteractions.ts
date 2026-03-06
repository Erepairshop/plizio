"use client";

// Bútor interakciók definíciója
// Minden bútor típushoz tartoznak interakciós lehetőségek

import type { AvatarCompanionProps } from "@/components/AvatarCompanion";

export type InteractionMood = AvatarCompanionProps["mood"];

export interface FurnitureInteraction {
  id: string;
  icon: string;
  nameKey: string;       // fordítási kulcs
  mood: InteractionMood; // avatar mood az interakció közben
  duration: number;      // ms — meddig tart az interakció
  reaction?: "wave" | "dance" | "spin" | "happy" | "laughing"; // jumpTrigger reaction
}

// Bútor ID → interakciók
export const FURNITURE_INTERACTIONS: Record<string, FurnitureInteraction[]> = {
  bed_basic: [
    { id: "sleep", icon: "😴", nameKey: "sleep", mood: "idle", duration: 3000 },
    { id: "sit", icon: "🪑", nameKey: "sit", mood: "idle", duration: 2000 },
  ],
  bed_double: [
    { id: "sleep", icon: "😴", nameKey: "sleep", mood: "idle", duration: 3000 },
    { id: "rest", icon: "😌", nameKey: "rest", mood: "happy", duration: 2500 },
  ],
  couch: [
    { id: "sit", icon: "🪑", nameKey: "sit", mood: "idle", duration: 2000 },
    { id: "relax", icon: "😌", nameKey: "relax", mood: "happy", duration: 3000 },
  ],
  tv_stand: [
    { id: "watch", icon: "📺", nameKey: "watchTv", mood: "focused", duration: 4000 },
    { id: "dance", icon: "💃", nameKey: "dance", mood: "happy", duration: 2000, reaction: "dance" },
  ],
  bookshelf: [
    { id: "read", icon: "📖", nameKey: "read", mood: "focused", duration: 3000 },
  ],
  desk: [
    { id: "work", icon: "💻", nameKey: "work", mood: "focused", duration: 3000 },
    { id: "write", icon: "✏️", nameKey: "write", mood: "focused", duration: 2500 },
  ],
  lamp_floor: [
    { id: "toggle", icon: "💡", nameKey: "toggle", mood: "surprised", duration: 1000, reaction: "happy" },
  ],
  plant_big: [
    { id: "water", icon: "💧", nameKey: "water", mood: "happy", duration: 2000 },
  ],
  fridge: [
    { id: "eat", icon: "🍽️", nameKey: "eat", mood: "happy", duration: 2000, reaction: "happy" },
    { id: "drink", icon: "🥤", nameKey: "drink", mood: "happy", duration: 1500 },
  ],
  stove: [
    { id: "cook", icon: "🍳", nameKey: "cook", mood: "focused", duration: 3000 },
  ],
  kitchen_table: [
    { id: "eat", icon: "🍽️", nameKey: "eat", mood: "happy", duration: 2500, reaction: "happy" },
  ],
  bathtub: [
    { id: "bath", icon: "🛁", nameKey: "bath", mood: "happy", duration: 4000 },
  ],
  sink: [
    { id: "wash", icon: "🧼", nameKey: "wash", mood: "idle", duration: 1500 },
  ],
  fireplace: [
    { id: "warm", icon: "🔥", nameKey: "warm", mood: "happy", duration: 3000 },
  ],
  aquarium: [
    { id: "watch_fish", icon: "🐠", nameKey: "watchFish", mood: "happy", duration: 3000 },
  ],
  coffee_table: [
    { id: "sit", icon: "☕", nameKey: "coffee", mood: "happy", duration: 2000 },
  ],
  fountain: [
    { id: "splash", icon: "💦", nameKey: "splash", mood: "laughing", duration: 2000, reaction: "laughing" },
  ],
  tree: [
    { id: "climb", icon: "🌳", nameKey: "climb", mood: "surprised", duration: 2000, reaction: "spin" },
  ],
  bench: [
    { id: "sit", icon: "🪑", nameKey: "sit", mood: "idle", duration: 2000 },
  ],
  wardrobe: [
    { id: "dress", icon: "👔", nameKey: "dress", mood: "happy", duration: 2000, reaction: "spin" },
  ],
  nightstand: [
    { id: "check_phone", icon: "📱", nameKey: "checkPhone", mood: "focused", duration: 2000 },
  ],
};

// Interakció nevek fordítása
export const INTERACTION_NAMES: Record<string, Record<string, string>> = {
  en: {
    sleep: "Sleep",
    sit: "Sit down",
    rest: "Rest",
    relax: "Relax",
    watchTv: "Watch TV",
    dance: "Dance",
    read: "Read",
    work: "Work",
    write: "Write",
    toggle: "Toggle",
    water: "Water plant",
    eat: "Eat",
    drink: "Drink",
    cook: "Cook",
    bath: "Take a bath",
    wash: "Wash hands",
    warm: "Warm up",
    watchFish: "Watch fish",
    coffee: "Have coffee",
    splash: "Splash!",
    climb: "Climb",
    dress: "Get dressed",
    checkPhone: "Check phone",
  },
  hu: {
    sleep: "Alvás",
    sit: "Leülés",
    rest: "Pihenés",
    relax: "Lazítás",
    watchTv: "TV nézés",
    dance: "Tánc",
    read: "Olvasás",
    work: "Munka",
    write: "Írás",
    toggle: "Kapcsolás",
    water: "Locsolás",
    eat: "Evés",
    drink: "Ivás",
    cook: "Főzés",
    bath: "Fürdés",
    wash: "Kézmosás",
    warm: "Melegedés",
    watchFish: "Halak nézése",
    coffee: "Kávézás",
    splash: "Pancsolás!",
    climb: "Mászás",
    dress: "Öltözés",
    checkPhone: "Telefon",
  },
  de: {
    sleep: "Schlafen",
    sit: "Hinsetzen",
    rest: "Ausruhen",
    relax: "Entspannen",
    watchTv: "TV schauen",
    dance: "Tanzen",
    read: "Lesen",
    work: "Arbeiten",
    write: "Schreiben",
    toggle: "Schalten",
    water: "Gießen",
    eat: "Essen",
    drink: "Trinken",
    cook: "Kochen",
    bath: "Baden",
    wash: "Hände waschen",
    warm: "Aufwärmen",
    watchFish: "Fische beobachten",
    coffee: "Kaffee trinken",
    splash: "Planschen!",
    climb: "Klettern",
    dress: "Anziehen",
    checkPhone: "Handy checken",
  },
  ro: {
    sleep: "Dormit",
    sit: "Stai jos",
    rest: "Odihnă",
    relax: "Relaxare",
    watchTv: "Uită-te la TV",
    dance: "Dans",
    read: "Citit",
    work: "Muncă",
    write: "Scris",
    toggle: "Comută",
    water: "Udă planta",
    eat: "Mâncare",
    drink: "Băutură",
    cook: "Gătit",
    bath: "Baie",
    wash: "Spălat pe mâini",
    warm: "Încălzire",
    watchFish: "Privește peștii",
    coffee: "Cafea",
    splash: "Stropește!",
    climb: "Cățărare",
    dress: "Îmbracă-te",
    checkPhone: "Verifică telefonul",
  },
};

export function getInteractionsForFurniture(furnitureId: string): FurnitureInteraction[] {
  return FURNITURE_INTERACTIONS[furnitureId] || [];
}
