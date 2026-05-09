
import { guatemalaAllPoi } from './lib/visualLab/data/guatemalaPoi.ts';

guatemalaAllPoi.forEach(poi => {
    const hasDescDe = poi.descriptionAdvanced && poi.descriptionAdvanced.de && poi.descriptionAdvanced.de.length > 0;
    const hasFactsDe = poi.factsAdvanced && poi.factsAdvanced.de && poi.factsAdvanced.de.length > 0;

    if (!hasDescDe || !hasFactsDe) {
        console.log(`MISSING_DE: ${poi.id} (DescDe: ${hasDescDe}, FactsDe: ${hasFactsDe})`);
    }
});
