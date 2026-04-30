
import { POI } from './poi';

export const updateIcelandPois = (pois: POI[]): POI[] => {
  return pois.map(poi => {
    if (!poi.descriptionAdvanced) {
      poi.descriptionAdvanced = { de: "", hu: "", ro: "", en: "" };
    }
    if (!poi.factsAdvanced) {
      poi.factsAdvanced = { de: [], hu: [], ro: [], en: [] };
    }

    if (poi.id === "city-egilsstadir-extra" && !poi.descriptionAdvanced.en) {
      poi.descriptionAdvanced.en = "Egilsstaðir is the commercial and administrative heart of East Iceland, acting as a crucial transport hub for travelers exploring the dramatic eastern fjords. Nestled along the fertile banks of the Lagarfljót River, the town offers a perfect mix of urban convenience and access to untamed nature. Visitors can explore the nearby Hallormsstaðaskógur, Iceland's largest national forest, or take a scenic drive to the towering Hengifoss waterfall. The town also serves as a gateway to the remote and stunning landscapes of the highlands. With its own regional airport, it is easily reachable, making it an ideal base for adventures in the east. Whether you are looking for local culture, outdoor excursions, or just a comfortable place to recharge before traversing the rugged coastlines, Egilsstaðir provides a welcoming environment filled with authentic Icelandic charm and endless exploration opportunities.";
      poi.factsAdvanced.en = [
        "Situated on the banks of the mystical Lagarfljót River.",
        "Home to the largest forest in Iceland, Hallormsstaðaskógur.",
        "Serves as the main transportation and logistics hub for East Iceland.",
        "Features a regional airport for easy access to the area.",
        "Gateway to the Hengifoss waterfall, one of the tallest in Iceland.",
        "An ideal starting point for highland expeditions.",
        "Hosts the annual Ormurinn cycling festival.",
        "Surrounded by varied landscapes ranging from fertile valleys to high plateaus."
      ];
    }
    return poi;
  });
};
