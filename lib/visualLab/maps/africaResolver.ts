// AUTO-GENERATED — Afrika orszag resolver
// Ne szerkeszd kezzel! Futtatsd ujra: npx tsx scripts/generateAfricaMaps.ts
import type { BundeslandPath } from "./deutschland.svg";
import type { CountryMapData } from "./resolver";
import { algeriaMap, algeriaViewBox, projectCoordsDZ } from "./algeria.svg";
import { angolaMap, angolaViewBox, projectCoordsAO } from "./angola.svg";
import { beninMap, beninViewBox, projectCoordsBJ } from "./benin.svg";
import { botswanaMap, botswanaViewBox, projectCoordsBW } from "./botswana.svg";
import { burkinafasoMap, burkinafasoViewBox, projectCoordsBF } from "./burkinafaso.svg";
import { burundiMap, burundiViewBox, projectCoordsBI } from "./burundi.svg";
import { cameroonMap, cameroonViewBox, projectCoordsCM } from "./cameroon.svg";
import { capeverdeMap, capeverdeViewBox, projectCoordsCV } from "./capeverde.svg";
import { centralafricanrepublicMap, centralafricanrepublicViewBox, projectCoordsCF } from "./centralafricanrepublic.svg";
import { chadMap, chadViewBox, projectCoordsTD } from "./chad.svg";
import { comorosMap, comorosViewBox, projectCoordsKM } from "./comoros.svg";
import { congoMap, congoViewBox, projectCoordsCG } from "./congo.svg";
import { drcongoMap, drcongoViewBox, projectCoordsCD } from "./drcongo.svg";
import { djiboutiMap, djiboutiViewBox, projectCoordsDJ } from "./djibouti.svg";
import { egyptMap, egyptViewBox, projectCoordsEG } from "./egypt.svg";
import { equatorialguineaMap, equatorialguineaViewBox, projectCoordsGQ } from "./equatorialguinea.svg";
import { eritreaMap, eritreaViewBox, projectCoordsER } from "./eritrea.svg";
import { eswatiniMap, eswatiniViewBox, projectCoordsSZ } from "./eswatini.svg";
import { ethiopiaMap, ethiopiaViewBox, projectCoordsET } from "./ethiopia.svg";
import { gabonMap, gabonViewBox, projectCoordsGA } from "./gabon.svg";
import { gambiaMap, gambiaViewBox, projectCoordsGM } from "./gambia.svg";
import { ghanaMap, ghanaViewBox, projectCoordsGH } from "./ghana.svg";
import { guineaMap, guineaViewBox, projectCoordsGN } from "./guinea.svg";
import { guineabissauMap, guineabissauViewBox, projectCoordsGW } from "./guineabissau.svg";
import { ivorycoastMap, ivorycoastViewBox, projectCoordsCI } from "./ivorycoast.svg";
import { kenyaMap, kenyaViewBox, projectCoordsKE } from "./kenya.svg";
import { lesothoMap, lesothoViewBox, projectCoordsLS } from "./lesotho.svg";
import { liberiaMap, liberiaViewBox, projectCoordsLR } from "./liberia.svg";
import { libyaMap, libyaViewBox, projectCoordsLY } from "./libya.svg";
import { madagascarMap, madagascarViewBox, projectCoordsMG } from "./madagascar.svg";
import { malawiMap, malawiViewBox, projectCoordsMW } from "./malawi.svg";
import { maliMap, maliViewBox, projectCoordsML } from "./mali.svg";
import { mauritaniaMap, mauritaniaViewBox, projectCoordsMR } from "./mauritania.svg";
import { mauritiusMap, mauritiusViewBox, projectCoordsMU } from "./mauritius.svg";
import { moroccoMap, moroccoViewBox, projectCoordsMA } from "./morocco.svg";
import { mozambiqueMap, mozambiqueViewBox, projectCoordsMZ } from "./mozambique.svg";
import { namibiaMap, namibiaViewBox, projectCoordsNA } from "./namibia.svg";
import { nigerMap, nigerViewBox, projectCoordsNE } from "./niger.svg";
import { nigeriaMap, nigeriaViewBox, projectCoordsNG } from "./nigeria.svg";
import { rwandaMap, rwandaViewBox, projectCoordsRW } from "./rwanda.svg";
import { saotomeMap, saotomeViewBox, projectCoordsST } from "./saotome.svg";
import { senegalMap, senegalViewBox, projectCoordsSN } from "./senegal.svg";
import { seychellesMap, seychellesViewBox, projectCoordsSC } from "./seychelles.svg";
import { sierraleoneMap, sierraleoneViewBox, projectCoordsSL } from "./sierraleone.svg";
import { somaliaMap, somaliaViewBox, projectCoordsSO } from "./somalia.svg";
import { southafricaMap, southafricaViewBox, projectCoordsZA } from "./southafrica.svg";
import { southsudanMap, southsudanViewBox, projectCoordsSS } from "./southsudan.svg";
import { sudanMap, sudanViewBox, projectCoordsSD } from "./sudan.svg";
import { tanzaniaMap, tanzaniaViewBox, projectCoordsTZ } from "./tanzania.svg";
import { togoMap, togoViewBox, projectCoordsTG } from "./togo.svg";
import { tunisiaMap, tunisiaViewBox, projectCoordsTN } from "./tunisia.svg";
import { ugandaMap, ugandaViewBox, projectCoordsUG } from "./uganda.svg";
import { zambiaMap, zambiaViewBox, projectCoordsZM } from "./zambia.svg";
import { zimbabweMap, zimbabweViewBox, projectCoordsZW } from "./zimbabwe.svg";
import { algeriaAllPoi } from "../data/algeriaAllPoi";
import { angolaAllPoi } from "../data/angolaAllPoi";
import { beninAllPoi } from "../data/beninAllPoi";
import { botswanaAllPoi } from "../data/botswanaAllPoi";
import { burkinafasoAllPoi } from "../data/burkinafasoAllPoi";
import { burundiAllPoi } from "../data/burundiAllPoi";
import { cameroonAllPoi } from "../data/cameroonAllPoi";
import { capeverdeAllPoi } from "../data/capeverdeAllPoi";
import { centralafricanrepublicAllPoi } from "../data/centralafricanrepublicAllPoi";
import { chadAllPoi } from "../data/chadAllPoi";
import { comorosAllPoi } from "../data/comorosAllPoi";
import { congoAllPoi } from "../data/congoAllPoi";
import { drcongoAllPoi } from "../data/drcongoAllPoi";
import { djiboutiAllPoi } from "../data/djiboutiAllPoi";
import { egyptAllPoi } from "../data/egyptAllPoi";
import { equatorialguineaAllPoi } from "../data/equatorialguineaAllPoi";
import { eritreaAllPoi } from "../data/eritreaAllPoi";
import { eswatiniAllPoi } from "../data/eswatiniAllPoi";
import { ethiopiaAllPoi } from "../data/ethiopiaAllPoi";
import { gabonAllPoi } from "../data/gabonAllPoi";
import { gambiaAllPoi } from "../data/gambiaAllPoi";
import { ghanaAllPoi } from "../data/ghanaAllPoi";
import { guineaAllPoi } from "../data/guineaAllPoi";
import { guineabissauAllPoi } from "../data/guineabissauAllPoi";
import { ivorycoastAllPoi } from "../data/ivorycoastAllPoi";
import { kenyaAllPoi } from "../data/kenyaAllPoi";
import { lesothoAllPoi } from "../data/lesothoAllPoi";
import { liberiaAllPoi } from "../data/liberiaAllPoi";
import { libyaAllPoi } from "../data/libyaAllPoi";
import { madagascarAllPoi } from "../data/madagascarAllPoi";
import { malawiAllPoi } from "../data/malawiAllPoi";
import { maliAllPoi } from "../data/maliAllPoi";
import { mauritaniaAllPoi } from "../data/mauritaniaAllPoi";
import { mauritiusAllPoi } from "../data/mauritiusAllPoi";
import { moroccoAllPoi } from "../data/moroccoAllPoi";
import { mozambiqueAllPoi } from "../data/mozambiqueAllPoi";
import { namibiaAllPoi } from "../data/namibiaAllPoi";
import { nigerAllPoi } from "../data/nigerAllPoi";
import { nigeriaAllPoi } from "../data/nigeriaAllPoi";
import { rwandaAllPoi } from "../data/rwandaAllPoi";
import { saotomeAllPoi } from "../data/saotomeAllPoi";
import { senegalAllPoi } from "../data/senegalAllPoi";
import { seychellesAllPoi } from "../data/seychellesAllPoi";
import { sierraleoneAllPoi } from "../data/sierraleoneAllPoi";
import { somaliaAllPoi } from "../data/somaliaAllPoi";
import { southafricaAllPoi } from "../data/southafricaAllPoi";
import { southsudanAllPoi } from "../data/southsudanAllPoi";
import { sudanAllPoi } from "../data/sudanAllPoi";
import { tanzaniaAllPoi } from "../data/tanzaniaAllPoi";
import { togoAllPoi } from "../data/togoAllPoi";
import { tunisiaAllPoi } from "../data/tunisiaAllPoi";
import { ugandaAllPoi } from "../data/ugandaAllPoi";
import { zambiaAllPoi } from "../data/zambiaAllPoi";
import { zimbabweAllPoi } from "../data/zimbabweAllPoi";

/**
 * getAfricaCountryMap — visszaadja az adott afrika-i orszag terkep adatait.
 * @param countryId - Az orszag slug (pl. "egypt", "nigeria")
 */
export function getAfricaCountryMap(countryId: string): CountryMapData | null {
  switch (countryId) {
    case "algeria":
      return {
        countryId: "DZ",
        map: algeriaMap as unknown as BundeslandPath[],
        viewBox: algeriaViewBox,
        projectCoords: projectCoordsDZ,
        pois: algeriaAllPoi,
        subregions: [],
      };
    case "angola":
      return {
        countryId: "AO",
        map: angolaMap as unknown as BundeslandPath[],
        viewBox: angolaViewBox,
        projectCoords: projectCoordsAO,
        pois: angolaAllPoi,
        subregions: [],
      };
    case "benin":
      return {
        countryId: "BJ",
        map: beninMap as unknown as BundeslandPath[],
        viewBox: beninViewBox,
        projectCoords: projectCoordsBJ,
        pois: beninAllPoi,
        subregions: [],
      };
    case "botswana":
      return {
        countryId: "BW",
        map: botswanaMap as unknown as BundeslandPath[],
        viewBox: botswanaViewBox,
        projectCoords: projectCoordsBW,
        pois: botswanaAllPoi,
        subregions: [],
      };
    case "burkinafaso":
      return {
        countryId: "BF",
        map: burkinafasoMap as unknown as BundeslandPath[],
        viewBox: burkinafasoViewBox,
        projectCoords: projectCoordsBF,
        pois: burkinafasoAllPoi,
        subregions: [],
      };
    case "burundi":
      return {
        countryId: "BI",
        map: burundiMap as unknown as BundeslandPath[],
        viewBox: burundiViewBox,
        projectCoords: projectCoordsBI,
        pois: burundiAllPoi,
        subregions: [],
      };
    case "cameroon":
      return {
        countryId: "CM",
        map: cameroonMap as unknown as BundeslandPath[],
        viewBox: cameroonViewBox,
        projectCoords: projectCoordsCM,
        pois: cameroonAllPoi,
        subregions: [],
      };
    case "capeverde":
      return {
        countryId: "CV",
        map: capeverdeMap as unknown as BundeslandPath[],
        viewBox: capeverdeViewBox,
        projectCoords: projectCoordsCV,
        pois: capeverdeAllPoi,
        subregions: [],
      };
    case "centralafricanrepublic":
      return {
        countryId: "CF",
        map: centralafricanrepublicMap as unknown as BundeslandPath[],
        viewBox: centralafricanrepublicViewBox,
        projectCoords: projectCoordsCF,
        pois: centralafricanrepublicAllPoi,
        subregions: [],
      };
    case "chad":
      return {
        countryId: "TD",
        map: chadMap as unknown as BundeslandPath[],
        viewBox: chadViewBox,
        projectCoords: projectCoordsTD,
        pois: chadAllPoi,
        subregions: [],
      };
    case "comoros":
      return {
        countryId: "KM",
        map: comorosMap as unknown as BundeslandPath[],
        viewBox: comorosViewBox,
        projectCoords: projectCoordsKM,
        pois: comorosAllPoi,
        subregions: [],
      };
    case "congo":
      return {
        countryId: "CG",
        map: congoMap as unknown as BundeslandPath[],
        viewBox: congoViewBox,
        projectCoords: projectCoordsCG,
        pois: congoAllPoi,
        subregions: [],
      };
    case "drcongo":
      return {
        countryId: "CD",
        map: drcongoMap as unknown as BundeslandPath[],
        viewBox: drcongoViewBox,
        projectCoords: projectCoordsCD,
        pois: drcongoAllPoi,
        subregions: [],
      };
    case "djibouti":
      return {
        countryId: "DJ",
        map: djiboutiMap as unknown as BundeslandPath[],
        viewBox: djiboutiViewBox,
        projectCoords: projectCoordsDJ,
        pois: djiboutiAllPoi,
        subregions: [],
      };
    case "egypt":
      return {
        countryId: "EG",
        map: egyptMap as unknown as BundeslandPath[],
        viewBox: egyptViewBox,
        projectCoords: projectCoordsEG,
        pois: egyptAllPoi,
        subregions: [],
      };
    case "equatorialguinea":
      return {
        countryId: "GQ",
        map: equatorialguineaMap as unknown as BundeslandPath[],
        viewBox: equatorialguineaViewBox,
        projectCoords: projectCoordsGQ,
        pois: equatorialguineaAllPoi,
        subregions: [],
      };
    case "eritrea":
      return {
        countryId: "ER",
        map: eritreaMap as unknown as BundeslandPath[],
        viewBox: eritreaViewBox,
        projectCoords: projectCoordsER,
        pois: eritreaAllPoi,
        subregions: [],
      };
    case "eswatini":
      return {
        countryId: "SZ",
        map: eswatiniMap as unknown as BundeslandPath[],
        viewBox: eswatiniViewBox,
        projectCoords: projectCoordsSZ,
        pois: eswatiniAllPoi,
        subregions: [],
      };
    case "ethiopia":
      return {
        countryId: "ET",
        map: ethiopiaMap as unknown as BundeslandPath[],
        viewBox: ethiopiaViewBox,
        projectCoords: projectCoordsET,
        pois: ethiopiaAllPoi,
        subregions: [],
      };
    case "gabon":
      return {
        countryId: "GA",
        map: gabonMap as unknown as BundeslandPath[],
        viewBox: gabonViewBox,
        projectCoords: projectCoordsGA,
        pois: gabonAllPoi,
        subregions: [],
      };
    case "gambia":
      return {
        countryId: "GM",
        map: gambiaMap as unknown as BundeslandPath[],
        viewBox: gambiaViewBox,
        projectCoords: projectCoordsGM,
        pois: gambiaAllPoi,
        subregions: [],
      };
    case "ghana":
      return {
        countryId: "GH",
        map: ghanaMap as unknown as BundeslandPath[],
        viewBox: ghanaViewBox,
        projectCoords: projectCoordsGH,
        pois: ghanaAllPoi,
        subregions: [],
      };
    case "guinea":
      return {
        countryId: "GN",
        map: guineaMap as unknown as BundeslandPath[],
        viewBox: guineaViewBox,
        projectCoords: projectCoordsGN,
        pois: guineaAllPoi,
        subregions: [],
      };
    case "guineabissau":
      return {
        countryId: "GW",
        map: guineabissauMap as unknown as BundeslandPath[],
        viewBox: guineabissauViewBox,
        projectCoords: projectCoordsGW,
        pois: guineabissauAllPoi,
        subregions: [],
      };
    case "ivorycoast":
      return {
        countryId: "CI",
        map: ivorycoastMap as unknown as BundeslandPath[],
        viewBox: ivorycoastViewBox,
        projectCoords: projectCoordsCI,
        pois: ivorycoastAllPoi,
        subregions: [],
      };
    case "kenya":
      return {
        countryId: "KE",
        map: kenyaMap as unknown as BundeslandPath[],
        viewBox: kenyaViewBox,
        projectCoords: projectCoordsKE,
        pois: kenyaAllPoi,
        subregions: [],
      };
    case "lesotho":
      return {
        countryId: "LS",
        map: lesothoMap as unknown as BundeslandPath[],
        viewBox: lesothoViewBox,
        projectCoords: projectCoordsLS,
        pois: lesothoAllPoi,
        subregions: [],
      };
    case "liberia":
      return {
        countryId: "LR",
        map: liberiaMap as unknown as BundeslandPath[],
        viewBox: liberiaViewBox,
        projectCoords: projectCoordsLR,
        pois: liberiaAllPoi,
        subregions: [],
      };
    case "libya":
      return {
        countryId: "LY",
        map: libyaMap as unknown as BundeslandPath[],
        viewBox: libyaViewBox,
        projectCoords: projectCoordsLY,
        pois: libyaAllPoi,
        subregions: [],
      };
    case "madagascar":
      return {
        countryId: "MG",
        map: madagascarMap as unknown as BundeslandPath[],
        viewBox: madagascarViewBox,
        projectCoords: projectCoordsMG,
        pois: madagascarAllPoi,
        subregions: [],
      };
    case "malawi":
      return {
        countryId: "MW",
        map: malawiMap as unknown as BundeslandPath[],
        viewBox: malawiViewBox,
        projectCoords: projectCoordsMW,
        pois: malawiAllPoi,
        subregions: [],
      };
    case "mali":
      return {
        countryId: "ML",
        map: maliMap as unknown as BundeslandPath[],
        viewBox: maliViewBox,
        projectCoords: projectCoordsML,
        pois: maliAllPoi,
        subregions: [],
      };
    case "mauritania":
      return {
        countryId: "MR",
        map: mauritaniaMap as unknown as BundeslandPath[],
        viewBox: mauritaniaViewBox,
        projectCoords: projectCoordsMR,
        pois: mauritaniaAllPoi,
        subregions: [],
      };
    case "mauritius":
      return {
        countryId: "MU",
        map: mauritiusMap as unknown as BundeslandPath[],
        viewBox: mauritiusViewBox,
        projectCoords: projectCoordsMU,
        pois: mauritiusAllPoi,
        subregions: [],
      };
    case "morocco":
      return {
        countryId: "MA",
        map: moroccoMap as unknown as BundeslandPath[],
        viewBox: moroccoViewBox,
        projectCoords: projectCoordsMA,
        pois: moroccoAllPoi,
        subregions: [],
      };
    case "mozambique":
      return {
        countryId: "MZ",
        map: mozambiqueMap as unknown as BundeslandPath[],
        viewBox: mozambiqueViewBox,
        projectCoords: projectCoordsMZ,
        pois: mozambiqueAllPoi,
        subregions: [],
      };
    case "namibia":
      return {
        countryId: "NA",
        map: namibiaMap as unknown as BundeslandPath[],
        viewBox: namibiaViewBox,
        projectCoords: projectCoordsNA,
        pois: namibiaAllPoi,
        subregions: [],
      };
    case "niger":
      return {
        countryId: "NE",
        map: nigerMap as unknown as BundeslandPath[],
        viewBox: nigerViewBox,
        projectCoords: projectCoordsNE,
        pois: nigerAllPoi,
        subregions: [],
      };
    case "nigeria":
      return {
        countryId: "NG",
        map: nigeriaMap as unknown as BundeslandPath[],
        viewBox: nigeriaViewBox,
        projectCoords: projectCoordsNG,
        pois: nigeriaAllPoi,
        subregions: [],
      };
    case "rwanda":
      return {
        countryId: "RW",
        map: rwandaMap as unknown as BundeslandPath[],
        viewBox: rwandaViewBox,
        projectCoords: projectCoordsRW,
        pois: rwandaAllPoi,
        subregions: [],
      };
    case "saotome":
      return {
        countryId: "ST",
        map: saotomeMap as unknown as BundeslandPath[],
        viewBox: saotomeViewBox,
        projectCoords: projectCoordsST,
        pois: saotomeAllPoi,
        subregions: [],
      };
    case "senegal":
      return {
        countryId: "SN",
        map: senegalMap as unknown as BundeslandPath[],
        viewBox: senegalViewBox,
        projectCoords: projectCoordsSN,
        pois: senegalAllPoi,
        subregions: [],
      };
    case "seychelles":
      return {
        countryId: "SC",
        map: seychellesMap as unknown as BundeslandPath[],
        viewBox: seychellesViewBox,
        projectCoords: projectCoordsSC,
        pois: seychellesAllPoi,
        subregions: [],
      };
    case "sierraleone":
      return {
        countryId: "SL",
        map: sierraleoneMap as unknown as BundeslandPath[],
        viewBox: sierraleoneViewBox,
        projectCoords: projectCoordsSL,
        pois: sierraleoneAllPoi,
        subregions: [],
      };
    case "somalia":
      return {
        countryId: "SO",
        map: somaliaMap as unknown as BundeslandPath[],
        viewBox: somaliaViewBox,
        projectCoords: projectCoordsSO,
        pois: somaliaAllPoi,
        subregions: [],
      };
    case "southafrica":
      return {
        countryId: "ZA",
        map: southafricaMap as unknown as BundeslandPath[],
        viewBox: southafricaViewBox,
        projectCoords: projectCoordsZA,
        pois: southafricaAllPoi,
        subregions: [],
      };
    case "southsudan":
      return {
        countryId: "SS",
        map: southsudanMap as unknown as BundeslandPath[],
        viewBox: southsudanViewBox,
        projectCoords: projectCoordsSS,
        pois: southsudanAllPoi,
        subregions: [],
      };
    case "sudan":
      return {
        countryId: "SD",
        map: sudanMap as unknown as BundeslandPath[],
        viewBox: sudanViewBox,
        projectCoords: projectCoordsSD,
        pois: sudanAllPoi,
        subregions: [],
      };
    case "tanzania":
      return {
        countryId: "TZ",
        map: tanzaniaMap as unknown as BundeslandPath[],
        viewBox: tanzaniaViewBox,
        projectCoords: projectCoordsTZ,
        pois: tanzaniaAllPoi,
        subregions: [],
      };
    case "togo":
      return {
        countryId: "TG",
        map: togoMap as unknown as BundeslandPath[],
        viewBox: togoViewBox,
        projectCoords: projectCoordsTG,
        pois: togoAllPoi,
        subregions: [],
      };
    case "tunisia":
      return {
        countryId: "TN",
        map: tunisiaMap as unknown as BundeslandPath[],
        viewBox: tunisiaViewBox,
        projectCoords: projectCoordsTN,
        pois: tunisiaAllPoi,
        subregions: [],
      };
    case "uganda":
      return {
        countryId: "UG",
        map: ugandaMap as unknown as BundeslandPath[],
        viewBox: ugandaViewBox,
        projectCoords: projectCoordsUG,
        pois: ugandaAllPoi,
        subregions: [],
      };
    case "zambia":
      return {
        countryId: "ZM",
        map: zambiaMap as unknown as BundeslandPath[],
        viewBox: zambiaViewBox,
        projectCoords: projectCoordsZM,
        pois: zambiaAllPoi,
        subregions: [],
      };
    case "zimbabwe":
      return {
        countryId: "ZW",
        map: zimbabweMap as unknown as BundeslandPath[],
        viewBox: zimbabweViewBox,
        projectCoords: projectCoordsZW,
        pois: zimbabweAllPoi,
        subregions: [],
      };
    default:
      return null;
  }
}
