const WORDS = {
  pl: { Sights: "Atrakcje", Map: "Mapa", Weather: "Pogoda", News: "Wiadomo\u015bci", History: "Historia", Castle: "Zamek", Photos: "Zdj\u0119cia", Hiking: "W\u0119dr\u00f3wki", Elevation: "Wysoko\u015b\u0107", Beaches: "Pla\u017ce", Course: "Bieg rzeki", Visit: "Zwiedzanie", Nature: "Przyroda", Events: "Wydarzenia" },
  nl: { Sights: "Bezienswaardigheden", Map: "Kaart", Weather: "Weer", News: "Nieuws", History: "Geschiedenis", Castle: "Kasteel", Photos: "Foto's", Hiking: "Wandelen", Elevation: "Hoogte", Beaches: "Stranden", Course: "Rivierloop", Visit: "Bezoek", Nature: "Natuur", Events: "Evenementen" },
  pt: { Sights: "Atra\u00e7\u00f5es", Map: "Mapa", Weather: "Tempo", News: "Not\u00edcias", History: "Hist\u00f3ria", Castle: "Castelo", Photos: "Fotografias", Hiking: "Caminhadas", Elevation: "Altitude", Beaches: "Praias", Course: "Curso do rio", Visit: "Visita", Nature: "Natureza", Events: "Eventos" },
};
const BUCKETS = {
  city: ["Sights", "Map", "Weather", "News", "History"],
  castle: ["Castle", "History", "Map", "Photos", "Weather"],
  mountain: ["Hiking", "Map", "Weather", "Photos", "Elevation"],
  lake: ["Beaches", "Map", "Weather", "Sights", "Photos"],
  river: ["Map", "Course", "Sights", "Weather", "Photos"],
  historical: ["History", "Map", "Sights", "Photos", "Visit"],
  landmark: ["Sights", "Map", "Photos", "History", "Weather"],
  nature: ["Map", "Weather", "Hiking", "Photos", "Nature"],
};
export function nativeTitleKeywords(bucket, lang) {
  const words = WORDS[lang];
  if (!words) return undefined;
  return (BUCKETS[bucket] || BUCKETS.landmark).map((word) => words[word]);
}
export function nativeTitleFeature(feature, lang) {
  return WORDS[lang]?.[{ sights: "Sights", weather: "Weather", news: "News", events: "Events" }[feature]];
}
