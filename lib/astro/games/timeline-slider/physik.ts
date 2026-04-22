import { TimelineSliderRound } from "../../../../components/astro-games/views/m3/TimelineSliderView";

export const rounds: TimelineSliderRound[] = [
  {
    id: "phys-ts-1",
    axes: {
      x: { label: { en: "Year", de: "Jahr", hu: "Év", ro: "An" }, rangeMin: 1500, rangeMax: 2000 }
    },
    events: [
      { id: "e1", title: { en: "Galileo's Telescope", de: "Galileis Teleskop", hu: "Galilei távcsöve", ro: "Telescopul lui Galileo" }, correctX: 1609, yearTolerancePct: 5 },
      { id: "e2", title: { en: "Newton's Principia", de: "Newtons Principia", hu: "Newton Principiája", ro: "Principia lui Newton" }, correctX: 1687, yearTolerancePct: 5 },
      { id: "e3", title: { en: "First Battery (Volta)", de: "Erste Batterie (Volta)", hu: "Az első elem (Volta)", ro: "Prima baterie (Volta)" }, correctX: 1800, yearTolerancePct: 5 },
      { id: "e4", title: { en: "Einstein's Relativity", de: "Einsteins Relativitätstheorie", hu: "Einstein relativitáselmélete", ro: "Relativitatea lui Einstein" }, correctX: 1905, yearTolerancePct: 5 }
    ]
  },
  {
    id: "phys-ts-2",
    axes: {
      x: { label: { en: "Temperature (Celsius)", de: "Temperatur (Celsius)", hu: "Hőmérséklet (Celsius)", ro: "Temperatură (Celsius)" }, rangeMin: -300, rangeMax: 6000 }
    },
    events: [
      { id: "e1", title: { en: "Absolute Zero", de: "Absoluter Nullpunkt", hu: "Abszolút nulla fok", ro: "Zero absolut" }, correctX: -273, yearTolerancePct: 5 },
      { id: "e2", title: { en: "Water Freezes", de: "Wasser gefriert", hu: "A víz megfagy", ro: "Apa îngheață" }, correctX: 0, yearTolerancePct: 5 },
      { id: "e3", title: { en: "Water Boils", de: "Wasser kocht", hu: "A víz forr", ro: "Apa fierbe" }, correctX: 100, yearTolerancePct: 5 },
      { id: "e4", title: { en: "Surface of the Sun", de: "Sonnenoberfläche", hu: "A Nap felszíne", ro: "Suprafața Soarelui" }, correctX: 5500, yearTolerancePct: 10 }
    ]
  },
  {
    id: "phys-ts-3",
    axes: {
      x: { label: { en: "Speed (km/h)", de: "Geschwindigkeit (km/h)", hu: "Sebesség (km/h)", ro: "Viteză (km/h)" }, rangeMin: 0, rangeMax: 1300 }
    },
    events: [
      { id: "e1", title: { en: "Human Walking", de: "Menschliches Gehen", hu: "Emberi séta", ro: "Mersul uman" }, correctX: 5, yearTolerancePct: 5 },
      { id: "e2", title: { en: "Cheetah Sprinting", de: "Gepard im Sprint", hu: "Gepárd sprintelése", ro: "Ghepard alergând" }, correctX: 100, yearTolerancePct: 10 },
      { id: "e3", title: { en: "Commercial Airplane", de: "Verkehrsflugzeug", hu: "Kereskedelmi repülőgép", ro: "Avion comercial" }, correctX: 900, yearTolerancePct: 10 },
      { id: "e4", title: { en: "Speed of Sound", de: "Schallgeschwindigkeit", hu: "Hangsebesség", ro: "Viteza sunetului" }, correctX: 1235, yearTolerancePct: 5 }
    ]
  }
];