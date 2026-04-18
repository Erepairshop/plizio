import { SpeedMatchRound } from "../../../../components/astro-games/views/m2/SpeedMatchView";

export const rounds: SpeedMatchRound[] = [
  {
    id: "phys-sm-1",
    taskDescription: {
      en: "Do these match? (Quantity & Unit)",
      de: "Passen diese zusammen? (Größe & Einheit)",
      hu: "Egyeznek? (Mennyiség és mértékegység)",
      ro: "Se potrivesc? (Mărime și Unitate)",
    },
    pairs: [
      {
        id: "p1",
        a: { en: "Force", de: "Kraft", hu: "Erő", ro: "Forță" },
        b: { en: "Newton", de: "Newton", hu: "Newton", ro: "Newton" },
        isMatch: true,
      },
      {
        id: "p2",
        a: { en: "Energy", de: "Energie", hu: "Energia", ro: "Energie" },
        b: { en: "Watt", de: "Watt", hu: "Watt", ro: "Watt" },
        isMatch: false,
      },
      {
        id: "p3",
        a: { en: "Mass", de: "Masse", hu: "Tömeg", ro: "Masă" },
        b: { en: "Kilogram", de: "Kilogramm", hu: "Kilogramm", ro: "Kilogram" },
        isMatch: true,
      },
      {
        id: "p4",
        a: { en: "Power", de: "Leistung", hu: "Teljesítmény", ro: "Putere" },
        b: { en: "Joule", de: "Joule", hu: "Joule", ro: "Joule" },
        isMatch: false,
      },
      {
        id: "p5",
        a: { en: "Electric Current", de: "Elektrischer Strom", hu: "Elektromos áram", ro: "Curent electric" },
        b: { en: "Ampere", de: "Ampere", hu: "Amper", ro: "Amper" },
        isMatch: true,
      }
    ]
  },
  {
    id: "phys-sm-2",
    taskDescription: {
      en: "Do these match? (Concept & Definition)",
      de: "Passen diese zusammen? (Konzept & Definition)",
      hu: "Egyeznek? (Fogalom és meghatározás)",
      ro: "Se potrivesc? (Concept și Definiție)",
    },
    pairs: [
      {
        id: "p1",
        a: { en: "Velocity", de: "Geschwindigkeit", hu: "Sebesség", ro: "Viteză" },
        b: { en: "Speed in a given direction", de: "Schnelligkeit in eine bestimmte Richtung", hu: "Gyorsaság egy adott irányban", ro: "Rapiditate într-o direcție dată" },
        isMatch: true,
      },
      {
        id: "p2",
        a: { en: "Acceleration", de: "Beschleunigung", hu: "Gyorsulás", ro: "Accelerație" },
        b: { en: "Resistance to change", de: "Widerstand gegen Veränderung", hu: "Ellenállás a változással szemben", ro: "Rezistență la schimbare" },
        isMatch: false,
      },
      {
        id: "p3",
        a: { en: "Inertia", de: "Trägheit", hu: "Tehetetlenség", ro: "Inerție" },
        b: { en: "Resistance to change in motion", de: "Widerstand gegen Bewegungsänderung", hu: "Ellenállás a mozgásállapot-változással szemben", ro: "Rezistență la schimbarea mișcării" },
        isMatch: true,
      },
      {
        id: "p4",
        a: { en: "Friction", de: "Reibung", hu: "Súrlódás", ro: "Frecare" },
        b: { en: "Force that increases motion", de: "Kraft, die die Bewegung erhöht", hu: "Erő, amely növeli a mozgást", ro: "Forță care crește mișcarea" },
        isMatch: false,
      }
    ]
  },
  {
    id: "phys-sm-3",
    taskDescription: {
      en: "Do these match? (Tool & Measurement)",
      de: "Passen diese zusammen? (Werkzeug & Messung)",
      hu: "Egyeznek? (Eszköz és mérés)",
      ro: "Se potrivesc? (Instrument și Măsurătoare)",
    },
    pairs: [
      {
        id: "p1",
        a: { en: "Thermometer", de: "Thermometer", hu: "Hőmérő", ro: "Termometru" },
        b: { en: "Temperature", de: "Temperatur", hu: "Hőmérséklet", ro: "Temperatură" },
        isMatch: true,
      },
      {
        id: "p2",
        a: { en: "Voltmeter", de: "Voltmeter", hu: "Voltmérő", ro: "Voltmetru" },
        b: { en: "Electric Current", de: "Elektrischer Strom", hu: "Elektromos áram", ro: "Curent electric" },
        isMatch: false,
      },
      {
        id: "p3",
        a: { en: "Barometer", de: "Barometer", hu: "Barométer", ro: "Barometru" },
        b: { en: "Atmospheric Pressure", de: "Luftdruck", hu: "Légnyomás", ro: "Presiune atmosferică" },
        isMatch: true,
      },
      {
        id: "p4",
        a: { en: "Stopwatch", de: "Stoppuhr", hu: "Stopper", ro: "Cronometru" },
        b: { en: "Mass", de: "Masse", hu: "Tömeg", ro: "Masă" },
        isMatch: false,
      }
    ]
  }
];