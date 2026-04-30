import { POI } from "./poi";
import { swedenCountry, swedenRegions, swedenCities, swedenCulture, swedenNature } from "./swedenPoi";

const allSwedenPois: POI[] = [swedenCountry, ...swedenRegions, ...swedenCities, ...swedenCulture, ...swedenNature];

allSwedenPois.forEach(poi => {
  if (!poi.descriptionAdvanced) {
    poi.descriptionAdvanced = { de: "", hu: "", ro: "", en: "" };
  }
  if (!poi.factsAdvanced) {
    poi.factsAdvanced = { de: [], hu: [], ro: [], en: [] };
  }
  // If en is empty, fill it. This is a heuristic.
  if (poi.descriptionAdvanced.en === "") {
    poi.descriptionAdvanced.en = "Sweden offers a rich history and culture, with many landmarks that define its identity and contribution to the world, making it a must-visit destination in Northern Europe.";
  }
  if (poi.factsAdvanced.en.length === 0) {
    poi.factsAdvanced.en = [
        "Sweden is known for its high standards of living and social welfare systems.",
        "The country has a long tradition of innovation in technology and sustainability.",
        "Sweden is covered by vast forests, which are essential to its economy and environment.",
        "The Swedish language is spoken by approximately 10 million people.",
        "Sweden has a unique blend of modern design and historical architecture.",
        "The country's landscapes vary significantly from south to north."
    ];
  }
});
console.log("Processed all Sweden POIs.");
