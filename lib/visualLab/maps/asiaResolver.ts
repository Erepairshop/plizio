// AUTO-GENERATED — Azsia orszag resolver
// Per-country svg.ts hianyaban Asia continent map fallback (NEM Germany!),
// de country-specific POIs (poiExtra{Country}*V2.ts) befuzve.
// Regenerate: py _regen_asia_resolver.py
import type { BundeslandPath } from "./deutschland.svg";
import type { CountryMapData } from "./resolver";
import { asiaMap, asiaViewBox, projectCoordsAS } from "./asia.svg";
import { cyprusMap, cyprusViewBox, projectCoordsCY } from "./cyprus.svg";

import { poiExtraChinaCitiesV2 } from "../data/poiExtraChinaCitiesV2";
import { poiExtraChinaEconomicV2 } from "../data/poiExtraChinaEconomicV2";
import { poiExtraChinaHistoryV2 } from "../data/poiExtraChinaHistoryV2";
import { poiExtraChinaLandmarksV2 } from "../data/poiExtraChinaLandmarksV2";
import { poiExtraChinaLifeV2 } from "../data/poiExtraChinaLifeV2";
import { poiExtraChinaNatureV2 } from "../data/poiExtraChinaNatureV2";
import { poiExtraChinaReliefV2 } from "../data/poiExtraChinaReliefV2";
import { poiExtraJapanCitiesV2 } from "../data/poiExtraJapanCitiesV2";
import { poiExtraJapanEconomicV2 } from "../data/poiExtraJapanEconomicV2";
import { poiExtraJapanHistoryV2 } from "../data/poiExtraJapanHistoryV2";
import { poiExtraJapanLandmarksV2 } from "../data/poiExtraJapanLandmarksV2";
import { poiExtraJapanLifeV2 } from "../data/poiExtraJapanLifeV2";
import { poiExtraJapanNatureV2 } from "../data/poiExtraJapanNatureV2";
import { poiExtraJapanReliefV2 } from "../data/poiExtraJapanReliefV2";
import { poiExtraSouthkoreaCitiesV2 } from "../data/poiExtraSouthkoreaCitiesV2";
import { poiExtraSouthkoreaEconomicV2 } from "../data/poiExtraSouthkoreaEconomicV2";
import { poiExtraSouthkoreaHistoryV2 } from "../data/poiExtraSouthkoreaHistoryV2";
import { poiExtraSouthkoreaLandmarksV2 } from "../data/poiExtraSouthkoreaLandmarksV2";
import { poiExtraSouthkoreaLifeV2 } from "../data/poiExtraSouthkoreaLifeV2";
import { poiExtraSouthkoreaNatureV2 } from "../data/poiExtraSouthkoreaNatureV2";
import { poiExtraSouthkoreaReliefV2 } from "../data/poiExtraSouthkoreaReliefV2";
import { poiExtraNorthkoreaCitiesV2 } from "../data/poiExtraNorthkoreaCitiesV2";
import { poiExtraNorthkoreaEconomicV2 } from "../data/poiExtraNorthkoreaEconomicV2";
import { poiExtraNorthkoreaHistoryV2 } from "../data/poiExtraNorthkoreaHistoryV2";
import { poiExtraNorthkoreaLandmarksV2 } from "../data/poiExtraNorthkoreaLandmarksV2";
import { poiExtraNorthkoreaLifeV2 } from "../data/poiExtraNorthkoreaLifeV2";
import { poiExtraNorthkoreaNatureV2 } from "../data/poiExtraNorthkoreaNatureV2";
import { poiExtraNorthkoreaReliefV2 } from "../data/poiExtraNorthkoreaReliefV2";
import { poiExtraMongoliaCitiesV2 } from "../data/poiExtraMongoliaCitiesV2";
import { poiExtraMongoliaEconomicV2 } from "../data/poiExtraMongoliaEconomicV2";
import { poiExtraMongoliaHistoryV2 } from "../data/poiExtraMongoliaHistoryV2";
import { poiExtraMongoliaLandmarksV2 } from "../data/poiExtraMongoliaLandmarksV2";
import { poiExtraMongoliaLifeV2 } from "../data/poiExtraMongoliaLifeV2";
import { poiExtraMongoliaNatureV2 } from "../data/poiExtraMongoliaNatureV2";
import { poiExtraMongoliaReliefV2 } from "../data/poiExtraMongoliaReliefV2";
import { poiExtraVietnamCitiesV2 } from "../data/poiExtraVietnamCitiesV2";
import { poiExtraVietnamEconomicV2 } from "../data/poiExtraVietnamEconomicV2";
import { poiExtraVietnamHistoryV2 } from "../data/poiExtraVietnamHistoryV2";
import { poiExtraVietnamLandmarksV2 } from "../data/poiExtraVietnamLandmarksV2";
import { poiExtraVietnamLifeV2 } from "../data/poiExtraVietnamLifeV2";
import { poiExtraVietnamNatureV2 } from "../data/poiExtraVietnamNatureV2";
import { poiExtraVietnamReliefV2 } from "../data/poiExtraVietnamReliefV2";
import { poiExtraLaosCitiesV2 } from "../data/poiExtraLaosCitiesV2";
import { poiExtraLaosEconomicV2 } from "../data/poiExtraLaosEconomicV2";
import { poiExtraLaosHistoryV2 } from "../data/poiExtraLaosHistoryV2";
import { poiExtraLaosLandmarksV2 } from "../data/poiExtraLaosLandmarksV2";
import { poiExtraLaosLifeV2 } from "../data/poiExtraLaosLifeV2";
import { poiExtraLaosNatureV2 } from "../data/poiExtraLaosNatureV2";
import { poiExtraLaosReliefV2 } from "../data/poiExtraLaosReliefV2";
import { poiExtraCambodiaCitiesV2 } from "../data/poiExtraCambodiaCitiesV2";
import { poiExtraCambodiaEconomicV2 } from "../data/poiExtraCambodiaEconomicV2";
import { poiExtraCambodiaHistoryV2 } from "../data/poiExtraCambodiaHistoryV2";
import { poiExtraCambodiaLandmarksV2 } from "../data/poiExtraCambodiaLandmarksV2";
import { poiExtraCambodiaLifeV2 } from "../data/poiExtraCambodiaLifeV2";
import { poiExtraCambodiaNatureV2 } from "../data/poiExtraCambodiaNatureV2";
import { poiExtraCambodiaReliefV2 } from "../data/poiExtraCambodiaReliefV2";
import { poiExtraThailandCitiesV2 } from "../data/poiExtraThailandCitiesV2";
import { poiExtraThailandEconomicV2 } from "../data/poiExtraThailandEconomicV2";
import { poiExtraThailandHistoryV2 } from "../data/poiExtraThailandHistoryV2";
import { poiExtraThailandLandmarksV2 } from "../data/poiExtraThailandLandmarksV2";
import { poiExtraThailandLifeV2 } from "../data/poiExtraThailandLifeV2";
import { poiExtraThailandNatureV2 } from "../data/poiExtraThailandNatureV2";
import { poiExtraThailandReliefV2 } from "../data/poiExtraThailandReliefV2";
import { poiExtraMyanmarCitiesV2 } from "../data/poiExtraMyanmarCitiesV2";
import { poiExtraMyanmarEconomicV2 } from "../data/poiExtraMyanmarEconomicV2";
import { poiExtraMyanmarHistoryV2 } from "../data/poiExtraMyanmarHistoryV2";
import { poiExtraMyanmarLandmarksV2 } from "../data/poiExtraMyanmarLandmarksV2";
import { poiExtraMyanmarLifeV2 } from "../data/poiExtraMyanmarLifeV2";
import { poiExtraMyanmarNatureV2 } from "../data/poiExtraMyanmarNatureV2";
import { poiExtraMyanmarReliefV2 } from "../data/poiExtraMyanmarReliefV2";
import { poiExtraMalaysiaCitiesV2 } from "../data/poiExtraMalaysiaCitiesV2";
import { poiExtraMalaysiaEconomicV2 } from "../data/poiExtraMalaysiaEconomicV2";
import { poiExtraMalaysiaHistoryV2 } from "../data/poiExtraMalaysiaHistoryV2";
import { poiExtraMalaysiaLandmarksV2 } from "../data/poiExtraMalaysiaLandmarksV2";
import { poiExtraMalaysiaLifeV2 } from "../data/poiExtraMalaysiaLifeV2";
import { poiExtraMalaysiaNatureV2 } from "../data/poiExtraMalaysiaNatureV2";
import { poiExtraMalaysiaReliefV2 } from "../data/poiExtraMalaysiaReliefV2";
import { poiExtraSingaporeCitiesV2 } from "../data/poiExtraSingaporeCitiesV2";
import { poiExtraSingaporeEconomicV2 } from "../data/poiExtraSingaporeEconomicV2";
import { poiExtraSingaporeHistoryV2 } from "../data/poiExtraSingaporeHistoryV2";
import { poiExtraSingaporeLandmarksV2 } from "../data/poiExtraSingaporeLandmarksV2";
import { poiExtraSingaporeLifeV2 } from "../data/poiExtraSingaporeLifeV2";
import { poiExtraSingaporeNatureV2 } from "../data/poiExtraSingaporeNatureV2";
import { poiExtraSingaporeReliefV2 } from "../data/poiExtraSingaporeReliefV2";
import { poiExtraIndonesiaCitiesV2 } from "../data/poiExtraIndonesiaCitiesV2";
import { poiExtraIndonesiaEconomicV2 } from "../data/poiExtraIndonesiaEconomicV2";
import { poiExtraIndonesiaHistoryV2 } from "../data/poiExtraIndonesiaHistoryV2";
import { poiExtraIndonesiaLandmarksV2 } from "../data/poiExtraIndonesiaLandmarksV2";
import { poiExtraIndonesiaLifeV2 } from "../data/poiExtraIndonesiaLifeV2";
import { poiExtraIndonesiaNatureV2 } from "../data/poiExtraIndonesiaNatureV2";
import { poiExtraIndonesiaReliefV2 } from "../data/poiExtraIndonesiaReliefV2";
import { poiExtraPhilippinesCitiesV2 } from "../data/poiExtraPhilippinesCitiesV2";
import { poiExtraPhilippinesEconomicV2 } from "../data/poiExtraPhilippinesEconomicV2";
import { poiExtraPhilippinesHistoryV2 } from "../data/poiExtraPhilippinesHistoryV2";
import { poiExtraPhilippinesLandmarksV2 } from "../data/poiExtraPhilippinesLandmarksV2";
import { poiExtraPhilippinesLifeV2 } from "../data/poiExtraPhilippinesLifeV2";
import { poiExtraPhilippinesNatureV2 } from "../data/poiExtraPhilippinesNatureV2";
import { poiExtraPhilippinesReliefV2 } from "../data/poiExtraPhilippinesReliefV2";
import { poiExtraBruneiCitiesV2 } from "../data/poiExtraBruneiCitiesV2";
import { poiExtraBruneiEconomicV2 } from "../data/poiExtraBruneiEconomicV2";
import { poiExtraBruneiHistoryV2 } from "../data/poiExtraBruneiHistoryV2";
import { poiExtraBruneiLandmarksV2 } from "../data/poiExtraBruneiLandmarksV2";
import { poiExtraBruneiLifeV2 } from "../data/poiExtraBruneiLifeV2";
import { poiExtraBruneiNatureV2 } from "../data/poiExtraBruneiNatureV2";
import { poiExtraBruneiReliefV2 } from "../data/poiExtraBruneiReliefV2";
import { poiExtraIndiaCitiesV2 } from "../data/poiExtraIndiaCitiesV2";
import { poiExtraIndiaEconomicV2 } from "../data/poiExtraIndiaEconomicV2";
import { poiExtraIndiaHistoryV2 } from "../data/poiExtraIndiaHistoryV2";
import { poiExtraIndiaLandmarksV2 } from "../data/poiExtraIndiaLandmarksV2";
import { poiExtraIndiaLifeV2 } from "../data/poiExtraIndiaLifeV2";
import { poiExtraIndiaNatureV2 } from "../data/poiExtraIndiaNatureV2";
import { poiExtraIndiaReliefV2 } from "../data/poiExtraIndiaReliefV2";
import { poiExtraPakistanCitiesV2 } from "../data/poiExtraPakistanCitiesV2";
import { poiExtraPakistanEconomicV2 } from "../data/poiExtraPakistanEconomicV2";
import { poiExtraPakistanHistoryV2 } from "../data/poiExtraPakistanHistoryV2";
import { poiExtraPakistanLandmarksV2 } from "../data/poiExtraPakistanLandmarksV2";
import { poiExtraPakistanLifeV2 } from "../data/poiExtraPakistanLifeV2";
import { poiExtraPakistanNatureV2 } from "../data/poiExtraPakistanNatureV2";
import { poiExtraPakistanReliefV2 } from "../data/poiExtraPakistanReliefV2";
import { poiExtraBangladeshCitiesV2 } from "../data/poiExtraBangladeshCitiesV2";
import { poiExtraBangladeshHistoryV2 } from "../data/poiExtraBangladeshHistoryV2";
import { poiExtraBangladeshLandmarksV2 } from "../data/poiExtraBangladeshLandmarksV2";
import { poiExtraBangladeshLifeV2 } from "../data/poiExtraBangladeshLifeV2";
import { poiExtraBangladeshNatureV2 } from "../data/poiExtraBangladeshNatureV2";
import { poiExtraBangladeshReliefV2 } from "../data/poiExtraBangladeshReliefV2";
import { poiExtraSrilankaCitiesV2 } from "../data/poiExtraSrilankaCitiesV2";
import { poiExtraSrilankaEconomicV2 } from "../data/poiExtraSrilankaEconomicV2";
import { poiExtraSrilankaHistoryV2 } from "../data/poiExtraSrilankaHistoryV2";
import { poiExtraSrilankaLandmarksV2 } from "../data/poiExtraSrilankaLandmarksV2";
import { poiExtraSrilankaLifeV2 } from "../data/poiExtraSrilankaLifeV2";
import { poiExtraSrilankaNatureV2 } from "../data/poiExtraSrilankaNatureV2";
import { poiExtraSrilankaReliefV2 } from "../data/poiExtraSrilankaReliefV2";
import { poiExtraNepalCitiesV2 } from "../data/poiExtraNepalCitiesV2";
import { poiExtraNepalEconomicV2 } from "../data/poiExtraNepalEconomicV2";
import { poiExtraNepalHistoryV2 } from "../data/poiExtraNepalHistoryV2";
import { poiExtraNepalLandmarksV2 } from "../data/poiExtraNepalLandmarksV2";
import { poiExtraNepalLifeV2 } from "../data/poiExtraNepalLifeV2";
import { poiExtraNepalNatureV2 } from "../data/poiExtraNepalNatureV2";
import { poiExtraNepalReliefV2 } from "../data/poiExtraNepalReliefV2";
import { poiExtraBhutanCitiesV2 } from "../data/poiExtraBhutanCitiesV2";
import { poiExtraBhutanEconomicV2 } from "../data/poiExtraBhutanEconomicV2";
import { poiExtraBhutanHistoryV2 } from "../data/poiExtraBhutanHistoryV2";
import { poiExtraBhutanLandmarksV2 } from "../data/poiExtraBhutanLandmarksV2";
import { poiExtraBhutanLifeV2 } from "../data/poiExtraBhutanLifeV2";
import { poiExtraBhutanNatureV2 } from "../data/poiExtraBhutanNatureV2";
import { poiExtraBhutanReliefV2 } from "../data/poiExtraBhutanReliefV2";
import { poiExtraMaldivesCitiesV2 } from "../data/poiExtraMaldivesCitiesV2";
import { poiExtraMaldivesEconomicV2 } from "../data/poiExtraMaldivesEconomicV2";
import { poiExtraMaldivesHistoryV2 } from "../data/poiExtraMaldivesHistoryV2";
import { poiExtraMaldivesLandmarksV2 } from "../data/poiExtraMaldivesLandmarksV2";
import { poiExtraMaldivesNatureV2 } from "../data/poiExtraMaldivesNatureV2";
import { poiExtraMaldivesReliefV2 } from "../data/poiExtraMaldivesReliefV2";
import { poiExtraAfghanistanCitiesV2 } from "../data/poiExtraAfghanistanCitiesV2";
import { poiExtraAfghanistanEconomicV2 } from "../data/poiExtraAfghanistanEconomicV2";
import { poiExtraAfghanistanHistoryV2 } from "../data/poiExtraAfghanistanHistoryV2";
import { poiExtraAfghanistanLandmarksV2 } from "../data/poiExtraAfghanistanLandmarksV2";
import { poiExtraAfghanistanLifeV2 } from "../data/poiExtraAfghanistanLifeV2";
import { poiExtraAfghanistanNatureV2 } from "../data/poiExtraAfghanistanNatureV2";
import { poiExtraAfghanistanReliefV2 } from "../data/poiExtraAfghanistanReliefV2";
import { poiExtraIranCitiesV2 } from "../data/poiExtraIranCitiesV2";
import { poiExtraIranEconomicV2 } from "../data/poiExtraIranEconomicV2";
import { poiExtraIranHistoryV2 } from "../data/poiExtraIranHistoryV2";
import { poiExtraIranLandmarksV2 } from "../data/poiExtraIranLandmarksV2";
import { poiExtraIranLifeV2 } from "../data/poiExtraIranLifeV2";
import { poiExtraIranNatureV2 } from "../data/poiExtraIranNatureV2";
import { poiExtraIranReliefV2 } from "../data/poiExtraIranReliefV2";
import { poiExtraIraqCitiesV2 } from "../data/poiExtraIraqCitiesV2";
import { poiExtraIraqEconomicV2 } from "../data/poiExtraIraqEconomicV2";
import { poiExtraIraqHistoryV2 } from "../data/poiExtraIraqHistoryV2";
import { poiExtraIraqLandmarksV2 } from "../data/poiExtraIraqLandmarksV2";
import { poiExtraIraqLifeV2 } from "../data/poiExtraIraqLifeV2";
import { poiExtraIraqNatureV2 } from "../data/poiExtraIraqNatureV2";
import { poiExtraIraqReliefV2 } from "../data/poiExtraIraqReliefV2";
import { poiExtraSyriaCitiesV2 } from "../data/poiExtraSyriaCitiesV2";
import { poiExtraSyriaEconomicV2 } from "../data/poiExtraSyriaEconomicV2";
import { poiExtraSyriaHistoryV2 } from "../data/poiExtraSyriaHistoryV2";
import { poiExtraSyriaLandmarksV2 } from "../data/poiExtraSyriaLandmarksV2";
import { poiExtraSyriaLifeV2 } from "../data/poiExtraSyriaLifeV2";
import { poiExtraSyriaNatureV2 } from "../data/poiExtraSyriaNatureV2";
import { poiExtraSyriaReliefV2 } from "../data/poiExtraSyriaReliefV2";
import { poiExtraLebanonCitiesV2 } from "../data/poiExtraLebanonCitiesV2";
import { poiExtraLebanonEconomicV2 } from "../data/poiExtraLebanonEconomicV2";
import { poiExtraLebanonHistoryV2 } from "../data/poiExtraLebanonHistoryV2";
import { poiExtraLebanonLandmarksV2 } from "../data/poiExtraLebanonLandmarksV2";
import { poiExtraLebanonLifeV2 } from "../data/poiExtraLebanonLifeV2";
import { poiExtraLebanonReliefV2 } from "../data/poiExtraLebanonReliefV2";
import { poiExtraJordanCitiesV2 } from "../data/poiExtraJordanCitiesV2";
import { poiExtraJordanEconomicV2 } from "../data/poiExtraJordanEconomicV2";
import { poiExtraJordanHistoryV2 } from "../data/poiExtraJordanHistoryV2";
import { poiExtraJordanLandmarksV2 } from "../data/poiExtraJordanLandmarksV2";
import { poiExtraJordanLifeV2 } from "../data/poiExtraJordanLifeV2";
import { poiExtraJordanNatureV2 } from "../data/poiExtraJordanNatureV2";
import { poiExtraJordanReliefV2 } from "../data/poiExtraJordanReliefV2";
import { poiExtraIsraelCitiesV2 } from "../data/poiExtraIsraelCitiesV2";
import { poiExtraIsraelEconomicV2 } from "../data/poiExtraIsraelEconomicV2";
import { poiExtraIsraelHistoryV2 } from "../data/poiExtraIsraelHistoryV2";
import { poiExtraIsraelLandmarksV2 } from "../data/poiExtraIsraelLandmarksV2";
import { poiExtraIsraelLifeV2 } from "../data/poiExtraIsraelLifeV2";
import { poiExtraIsraelNatureV2 } from "../data/poiExtraIsraelNatureV2";
import { poiExtraIsraelReliefV2 } from "../data/poiExtraIsraelReliefV2";
import { poiExtraSaudiarabiaCitiesV2 } from "../data/poiExtraSaudiarabiaCitiesV2";
import { poiExtraSaudiarabiaEconomicV2 } from "../data/poiExtraSaudiarabiaEconomicV2";
import { poiExtraSaudiarabiaHistoryV2 } from "../data/poiExtraSaudiarabiaHistoryV2";
import { poiExtraSaudiarabiaLandmarksV2 } from "../data/poiExtraSaudiarabiaLandmarksV2";
import { poiExtraSaudiarabiaLifeV2 } from "../data/poiExtraSaudiarabiaLifeV2";
import { poiExtraSaudiarabiaNatureV2 } from "../data/poiExtraSaudiarabiaNatureV2";
import { poiExtraSaudiarabiaReliefV2 } from "../data/poiExtraSaudiarabiaReliefV2";
import { poiExtraYemenCitiesV2 } from "../data/poiExtraYemenCitiesV2";
import { poiExtraYemenEconomicV2 } from "../data/poiExtraYemenEconomicV2";
import { poiExtraYemenHistoryV2 } from "../data/poiExtraYemenHistoryV2";
import { poiExtraYemenLandmarksV2 } from "../data/poiExtraYemenLandmarksV2";
import { poiExtraYemenLifeV2 } from "../data/poiExtraYemenLifeV2";
import { poiExtraYemenNatureV2 } from "../data/poiExtraYemenNatureV2";
import { poiExtraYemenReliefV2 } from "../data/poiExtraYemenReliefV2";
import { poiExtraOmanCitiesV2 } from "../data/poiExtraOmanCitiesV2";
import { poiExtraOmanEconomicV2 } from "../data/poiExtraOmanEconomicV2";
import { poiExtraOmanHistoryV2 } from "../data/poiExtraOmanHistoryV2";
import { poiExtraOmanLandmarksV2 } from "../data/poiExtraOmanLandmarksV2";
import { poiExtraOmanLifeV2 } from "../data/poiExtraOmanLifeV2";
import { poiExtraOmanNatureV2 } from "../data/poiExtraOmanNatureV2";
import { poiExtraOmanReliefV2 } from "../data/poiExtraOmanReliefV2";
import { poiExtraUaeCitiesV2 } from "../data/poiExtraUaeCitiesV2";
import { poiExtraUaeEconomicV2 } from "../data/poiExtraUaeEconomicV2";
import { poiExtraUaeHistoryV2 } from "../data/poiExtraUaeHistoryV2";
import { poiExtraUaeLandmarksV2 } from "../data/poiExtraUaeLandmarksV2";
import { poiExtraUaeLifeV2 } from "../data/poiExtraUaeLifeV2";
import { poiExtraUaeNatureV2 } from "../data/poiExtraUaeNatureV2";
import { poiExtraUaeReliefV2 } from "../data/poiExtraUaeReliefV2";
import { poiExtraQatarCitiesV2 } from "../data/poiExtraQatarCitiesV2";
import { poiExtraQatarEconomicV2 } from "../data/poiExtraQatarEconomicV2";
import { poiExtraQatarHistoryV2 } from "../data/poiExtraQatarHistoryV2";
import { poiExtraQatarLandmarksV2 } from "../data/poiExtraQatarLandmarksV2";
import { poiExtraQatarLifeV2 } from "../data/poiExtraQatarLifeV2";
import { poiExtraQatarNatureV2 } from "../data/poiExtraQatarNatureV2";
import { poiExtraQatarReliefV2 } from "../data/poiExtraQatarReliefV2";
import { poiExtraBahrainCitiesV2 } from "../data/poiExtraBahrainCitiesV2";
import { poiExtraBahrainEconomicV2 } from "../data/poiExtraBahrainEconomicV2";
import { poiExtraBahrainHistoryV2 } from "../data/poiExtraBahrainHistoryV2";
import { poiExtraBahrainLandmarksV2 } from "../data/poiExtraBahrainLandmarksV2";
import { poiExtraBahrainLifeV2 } from "../data/poiExtraBahrainLifeV2";
import { poiExtraKuwaitCitiesV2 } from "../data/poiExtraKuwaitCitiesV2";
import { poiExtraKuwaitEconomicV2 } from "../data/poiExtraKuwaitEconomicV2";
import { poiExtraKuwaitHistoryV2 } from "../data/poiExtraKuwaitHistoryV2";
import { poiExtraKuwaitLandmarksV2 } from "../data/poiExtraKuwaitLandmarksV2";
import { poiExtraKuwaitLifeV2 } from "../data/poiExtraKuwaitLifeV2";
import { poiExtraTurkeyCitiesV2 } from "../data/poiExtraTurkeyCitiesV2";
import { poiExtraTurkeyEconomicV2 } from "../data/poiExtraTurkeyEconomicV2";
import { poiExtraTurkeyHistoryV2 } from "../data/poiExtraTurkeyHistoryV2";
import { poiExtraTurkeyLandmarksV2 } from "../data/poiExtraTurkeyLandmarksV2";
import { poiExtraTurkeyLifeV2 } from "../data/poiExtraTurkeyLifeV2";
import { poiExtraTurkeyNatureV2 } from "../data/poiExtraTurkeyNatureV2";
import { poiExtraTurkeyReliefV2 } from "../data/poiExtraTurkeyReliefV2";
import { poiExtraGeorgiaCitiesV2 } from "../data/poiExtraGeorgiaCitiesV2";
import { poiExtraGeorgiaEconomicV2 } from "../data/poiExtraGeorgiaEconomicV2";
import { poiExtraGeorgiaHistoryV2 } from "../data/poiExtraGeorgiaHistoryV2";
import { poiExtraGeorgiaLandmarksV2 } from "../data/poiExtraGeorgiaLandmarksV2";
import { poiExtraGeorgiaLifeV2 } from "../data/poiExtraGeorgiaLifeV2";
import { poiExtraGeorgiaNatureV2 } from "../data/poiExtraGeorgiaNatureV2";
import { poiExtraGeorgiaReliefV2 } from "../data/poiExtraGeorgiaReliefV2";
import { poiExtraArmeniaCitiesV2 } from "../data/poiExtraArmeniaCitiesV2";
import { poiExtraArmeniaEconomicV2 } from "../data/poiExtraArmeniaEconomicV2";
import { poiExtraArmeniaHistoryV2 } from "../data/poiExtraArmeniaHistoryV2";
import { poiExtraArmeniaLandmarksV2 } from "../data/poiExtraArmeniaLandmarksV2";
import { poiExtraArmeniaLifeV2 } from "../data/poiExtraArmeniaLifeV2";
import { poiExtraArmeniaNatureV2 } from "../data/poiExtraArmeniaNatureV2";
import { poiExtraArmeniaReliefV2 } from "../data/poiExtraArmeniaReliefV2";
import { poiExtraAzerbaijanCitiesV2 } from "../data/poiExtraAzerbaijanCitiesV2";
import { poiExtraAzerbaijanEconomicV2 } from "../data/poiExtraAzerbaijanEconomicV2";
import { poiExtraAzerbaijanHistoryV2 } from "../data/poiExtraAzerbaijanHistoryV2";
import { poiExtraAzerbaijanLandmarksV2 } from "../data/poiExtraAzerbaijanLandmarksV2";
import { poiExtraAzerbaijanLifeV2 } from "../data/poiExtraAzerbaijanLifeV2";
import { poiExtraAzerbaijanNatureV2 } from "../data/poiExtraAzerbaijanNatureV2";
import { poiExtraAzerbaijanReliefV2 } from "../data/poiExtraAzerbaijanReliefV2";
import { poiExtraKazakhstanCitiesV2 } from "../data/poiExtraKazakhstanCitiesV2";
import { poiExtraKazakhstanEconomicV2 } from "../data/poiExtraKazakhstanEconomicV2";
import { poiExtraKazakhstanHistoryV2 } from "../data/poiExtraKazakhstanHistoryV2";
import { poiExtraKazakhstanLandmarksV2 } from "../data/poiExtraKazakhstanLandmarksV2";
import { poiExtraKazakhstanLifeV2 } from "../data/poiExtraKazakhstanLifeV2";
import { poiExtraKazakhstanNatureV2 } from "../data/poiExtraKazakhstanNatureV2";
import { poiExtraKazakhstanReliefV2 } from "../data/poiExtraKazakhstanReliefV2";
import { poiExtraUzbekistanCitiesV2 } from "../data/poiExtraUzbekistanCitiesV2";
import { poiExtraUzbekistanEconomicV2 } from "../data/poiExtraUzbekistanEconomicV2";
import { poiExtraUzbekistanHistoryV2 } from "../data/poiExtraUzbekistanHistoryV2";
import { poiExtraUzbekistanLandmarksV2 } from "../data/poiExtraUzbekistanLandmarksV2";
import { poiExtraUzbekistanLifeV2 } from "../data/poiExtraUzbekistanLifeV2";
import { poiExtraUzbekistanNatureV2 } from "../data/poiExtraUzbekistanNatureV2";
import { poiExtraUzbekistanReliefV2 } from "../data/poiExtraUzbekistanReliefV2";
import { poiExtraTurkmenistanCitiesV2 } from "../data/poiExtraTurkmenistanCitiesV2";
import { poiExtraTurkmenistanEconomicV2 } from "../data/poiExtraTurkmenistanEconomicV2";
import { poiExtraTurkmenistanHistoryV2 } from "../data/poiExtraTurkmenistanHistoryV2";
import { poiExtraTurkmenistanLandmarksV2 } from "../data/poiExtraTurkmenistanLandmarksV2";
import { poiExtraTurkmenistanLifeV2 } from "../data/poiExtraTurkmenistanLifeV2";
import { poiExtraTurkmenistanNatureV2 } from "../data/poiExtraTurkmenistanNatureV2";
import { poiExtraTurkmenistanReliefV2 } from "../data/poiExtraTurkmenistanReliefV2";
import { poiExtraKyrgyzstanCitiesV2 } from "../data/poiExtraKyrgyzstanCitiesV2";
import { poiExtraKyrgyzstanEconomicV2 } from "../data/poiExtraKyrgyzstanEconomicV2";
import { poiExtraKyrgyzstanLandmarksV2 } from "../data/poiExtraKyrgyzstanLandmarksV2";
import { poiExtraKyrgyzstanLifeV2 } from "../data/poiExtraKyrgyzstanLifeV2";
import { poiExtraKyrgyzstanNatureV2 } from "../data/poiExtraKyrgyzstanNatureV2";
import { poiExtraKyrgyzstanReliefV2 } from "../data/poiExtraKyrgyzstanReliefV2";
import { poiExtraTajikistanCitiesV2 } from "../data/poiExtraTajikistanCitiesV2";
import { poiExtraTajikistanEconomicV2 } from "../data/poiExtraTajikistanEconomicV2";
import { poiExtraTajikistanHistoryV2 } from "../data/poiExtraTajikistanHistoryV2";
import { poiExtraTajikistanLandmarksV2 } from "../data/poiExtraTajikistanLandmarksV2";
import { poiExtraTajikistanLifeV2 } from "../data/poiExtraTajikistanLifeV2";
import { poiExtraTajikistanNatureV2 } from "../data/poiExtraTajikistanNatureV2";
import { poiExtraTajikistanReliefV2 } from "../data/poiExtraTajikistanReliefV2";
import { poiExtraTaiwanCitiesV2 } from "../data/poiExtraTaiwanCitiesV2";
import { poiExtraTaiwanEconomicV2 } from "../data/poiExtraTaiwanEconomicV2";
import { poiExtraTaiwanHistoryV2 } from "../data/poiExtraTaiwanHistoryV2";
import { poiExtraTaiwanLandmarksV2 } from "../data/poiExtraTaiwanLandmarksV2";
import { poiExtraTaiwanLifeV2 } from "../data/poiExtraTaiwanLifeV2";
import { poiExtraTaiwanNatureV2 } from "../data/poiExtraTaiwanNatureV2";
import { poiExtraTaiwanReliefV2 } from "../data/poiExtraTaiwanReliefV2";
import { poiExtraTimorlesteCitiesV2 } from "../data/poiExtraTimorlesteCitiesV2";
import { poiExtraTimorlesteEconomicV2 } from "../data/poiExtraTimorlesteEconomicV2";
import { poiExtraTimorlesteHistoryV2 } from "../data/poiExtraTimorlesteHistoryV2";
import { poiExtraTimorlesteLandmarksV2 } from "../data/poiExtraTimorlesteLandmarksV2";
import { poiExtraTimorlesteLifeV2 } from "../data/poiExtraTimorlesteLifeV2";
import { poiExtraTimorlesteNatureV2 } from "../data/poiExtraTimorlesteNatureV2";
import { poiExtraTimorlesteReliefV2 } from "../data/poiExtraTimorlesteReliefV2";

export const ASIA_ISO_TO_SLUG: Record<string, string> = {
  CN: "china",
  JP: "japan",
  KR: "southkorea",
  KP: "northkorea",
  MN: "mongolia",
  VN: "vietnam",
  LA: "laos",
  KH: "cambodia",
  TH: "thailand",
  MM: "myanmar",
  MY: "malaysia",
  SG: "singapore",
  ID: "indonesia",
  PH: "philippines",
  BN: "brunei",
  IN: "india",
  PK: "pakistan",
  BD: "bangladesh",
  LK: "srilanka",
  NP: "nepal",
  BT: "bhutan",
  MV: "maldives",
  AF: "afghanistan",
  IR: "iran",
  IQ: "iraq",
  SY: "syria",
  LB: "lebanon",
  JO: "jordan",
  IL: "israel",
  PS: "palestine",
  SA: "saudiarabia",
  YE: "yemen",
  OM: "oman",
  AE: "uae",
  QA: "qatar",
  BH: "bahrain",
  KW: "kuwait",
  TR: "turkey",
  CY: "cyprus",
  GE: "georgia",
  AM: "armenia",
  AZ: "azerbaijan",
  KZ: "kazakhstan",
  UZ: "uzbekistan",
  TM: "turkmenistan",
  KG: "kyrgyzstan",
  TJ: "tajikistan",
  TW: "taiwan",
  TL: "timorleste",
};

export const ASIA_SLUG_TO_ISO: Record<string, string> = Object.fromEntries(
  Object.entries(ASIA_ISO_TO_SLUG).map(([iso, slug]) => [slug, iso]),
);

export function getAsiaCountryMap(countryId: string): CountryMapData | null {
  const iso = ASIA_SLUG_TO_ISO[countryId];
  if (!iso) return null;
  switch (countryId) {
    case "china":
      return {
        countryId: "CN",
        map: asiaMap as unknown as BundeslandPath[],
        viewBox: asiaViewBox,
        projectCoords: projectCoordsAS,
        pois: [
          ...poiExtraChinaCitiesV2,
          ...poiExtraChinaEconomicV2,
          ...poiExtraChinaHistoryV2,
          ...poiExtraChinaLandmarksV2,
          ...poiExtraChinaLifeV2,
          ...poiExtraChinaNatureV2,
          ...poiExtraChinaReliefV2
        ],
        subregions: [],
      };
    case "japan":
      return {
        countryId: "JP",
        map: asiaMap as unknown as BundeslandPath[],
        viewBox: asiaViewBox,
        projectCoords: projectCoordsAS,
        pois: [
          ...poiExtraJapanCitiesV2,
          ...poiExtraJapanEconomicV2,
          ...poiExtraJapanHistoryV2,
          ...poiExtraJapanLandmarksV2,
          ...poiExtraJapanLifeV2,
          ...poiExtraJapanNatureV2,
          ...poiExtraJapanReliefV2
        ],
        subregions: [],
      };
    case "southkorea":
      return {
        countryId: "KR",
        map: asiaMap as unknown as BundeslandPath[],
        viewBox: asiaViewBox,
        projectCoords: projectCoordsAS,
        pois: [
          ...poiExtraSouthkoreaCitiesV2,
          ...poiExtraSouthkoreaEconomicV2,
          ...poiExtraSouthkoreaHistoryV2,
          ...poiExtraSouthkoreaLandmarksV2,
          ...poiExtraSouthkoreaLifeV2,
          ...poiExtraSouthkoreaNatureV2,
          ...poiExtraSouthkoreaReliefV2
        ],
        subregions: [],
      };
    case "northkorea":
      return {
        countryId: "KP",
        map: asiaMap as unknown as BundeslandPath[],
        viewBox: asiaViewBox,
        projectCoords: projectCoordsAS,
        pois: [
          ...poiExtraNorthkoreaCitiesV2,
          ...poiExtraNorthkoreaEconomicV2,
          ...poiExtraNorthkoreaHistoryV2,
          ...poiExtraNorthkoreaLandmarksV2,
          ...poiExtraNorthkoreaLifeV2,
          ...poiExtraNorthkoreaNatureV2,
          ...poiExtraNorthkoreaReliefV2
        ],
        subregions: [],
      };
    case "mongolia":
      return {
        countryId: "MN",
        map: asiaMap as unknown as BundeslandPath[],
        viewBox: asiaViewBox,
        projectCoords: projectCoordsAS,
        pois: [
          ...poiExtraMongoliaCitiesV2,
          ...poiExtraMongoliaEconomicV2,
          ...poiExtraMongoliaHistoryV2,
          ...poiExtraMongoliaLandmarksV2,
          ...poiExtraMongoliaLifeV2,
          ...poiExtraMongoliaNatureV2,
          ...poiExtraMongoliaReliefV2
        ],
        subregions: [],
      };
    case "vietnam":
      return {
        countryId: "VN",
        map: asiaMap as unknown as BundeslandPath[],
        viewBox: asiaViewBox,
        projectCoords: projectCoordsAS,
        pois: [
          ...poiExtraVietnamCitiesV2,
          ...poiExtraVietnamEconomicV2,
          ...poiExtraVietnamHistoryV2,
          ...poiExtraVietnamLandmarksV2,
          ...poiExtraVietnamLifeV2,
          ...poiExtraVietnamNatureV2,
          ...poiExtraVietnamReliefV2
        ],
        subregions: [],
      };
    case "laos":
      return {
        countryId: "LA",
        map: asiaMap as unknown as BundeslandPath[],
        viewBox: asiaViewBox,
        projectCoords: projectCoordsAS,
        pois: [
          ...poiExtraLaosCitiesV2,
          ...poiExtraLaosEconomicV2,
          ...poiExtraLaosHistoryV2,
          ...poiExtraLaosLandmarksV2,
          ...poiExtraLaosLifeV2,
          ...poiExtraLaosNatureV2,
          ...poiExtraLaosReliefV2
        ],
        subregions: [],
      };
    case "cambodia":
      return {
        countryId: "KH",
        map: asiaMap as unknown as BundeslandPath[],
        viewBox: asiaViewBox,
        projectCoords: projectCoordsAS,
        pois: [
          ...poiExtraCambodiaCitiesV2,
          ...poiExtraCambodiaEconomicV2,
          ...poiExtraCambodiaHistoryV2,
          ...poiExtraCambodiaLandmarksV2,
          ...poiExtraCambodiaLifeV2,
          ...poiExtraCambodiaNatureV2,
          ...poiExtraCambodiaReliefV2
        ],
        subregions: [],
      };
    case "thailand":
      return {
        countryId: "TH",
        map: asiaMap as unknown as BundeslandPath[],
        viewBox: asiaViewBox,
        projectCoords: projectCoordsAS,
        pois: [
          ...poiExtraThailandCitiesV2,
          ...poiExtraThailandEconomicV2,
          ...poiExtraThailandHistoryV2,
          ...poiExtraThailandLandmarksV2,
          ...poiExtraThailandLifeV2,
          ...poiExtraThailandNatureV2,
          ...poiExtraThailandReliefV2
        ],
        subregions: [],
      };
    case "myanmar":
      return {
        countryId: "MM",
        map: asiaMap as unknown as BundeslandPath[],
        viewBox: asiaViewBox,
        projectCoords: projectCoordsAS,
        pois: [
          ...poiExtraMyanmarCitiesV2,
          ...poiExtraMyanmarEconomicV2,
          ...poiExtraMyanmarHistoryV2,
          ...poiExtraMyanmarLandmarksV2,
          ...poiExtraMyanmarLifeV2,
          ...poiExtraMyanmarNatureV2,
          ...poiExtraMyanmarReliefV2
        ],
        subregions: [],
      };
    case "malaysia":
      return {
        countryId: "MY",
        map: asiaMap as unknown as BundeslandPath[],
        viewBox: asiaViewBox,
        projectCoords: projectCoordsAS,
        pois: [
          ...poiExtraMalaysiaCitiesV2,
          ...poiExtraMalaysiaEconomicV2,
          ...poiExtraMalaysiaHistoryV2,
          ...poiExtraMalaysiaLandmarksV2,
          ...poiExtraMalaysiaLifeV2,
          ...poiExtraMalaysiaNatureV2,
          ...poiExtraMalaysiaReliefV2
        ],
        subregions: [],
      };
    case "singapore":
      return {
        countryId: "SG",
        map: asiaMap as unknown as BundeslandPath[],
        viewBox: asiaViewBox,
        projectCoords: projectCoordsAS,
        pois: [
          ...poiExtraSingaporeCitiesV2,
          ...poiExtraSingaporeEconomicV2,
          ...poiExtraSingaporeHistoryV2,
          ...poiExtraSingaporeLandmarksV2,
          ...poiExtraSingaporeLifeV2,
          ...poiExtraSingaporeNatureV2,
          ...poiExtraSingaporeReliefV2
        ],
        subregions: [],
      };
    case "indonesia":
      return {
        countryId: "ID",
        map: asiaMap as unknown as BundeslandPath[],
        viewBox: asiaViewBox,
        projectCoords: projectCoordsAS,
        pois: [
          ...poiExtraIndonesiaCitiesV2,
          ...poiExtraIndonesiaEconomicV2,
          ...poiExtraIndonesiaHistoryV2,
          ...poiExtraIndonesiaLandmarksV2,
          ...poiExtraIndonesiaLifeV2,
          ...poiExtraIndonesiaNatureV2,
          ...poiExtraIndonesiaReliefV2
        ],
        subregions: [],
      };
    case "philippines":
      return {
        countryId: "PH",
        map: asiaMap as unknown as BundeslandPath[],
        viewBox: asiaViewBox,
        projectCoords: projectCoordsAS,
        pois: [
          ...poiExtraPhilippinesCitiesV2,
          ...poiExtraPhilippinesEconomicV2,
          ...poiExtraPhilippinesHistoryV2,
          ...poiExtraPhilippinesLandmarksV2,
          ...poiExtraPhilippinesLifeV2,
          ...poiExtraPhilippinesNatureV2,
          ...poiExtraPhilippinesReliefV2
        ],
        subregions: [],
      };
    case "brunei":
      return {
        countryId: "BN",
        map: asiaMap as unknown as BundeslandPath[],
        viewBox: asiaViewBox,
        projectCoords: projectCoordsAS,
        pois: [
          ...poiExtraBruneiCitiesV2,
          ...poiExtraBruneiEconomicV2,
          ...poiExtraBruneiHistoryV2,
          ...poiExtraBruneiLandmarksV2,
          ...poiExtraBruneiLifeV2,
          ...poiExtraBruneiNatureV2,
          ...poiExtraBruneiReliefV2
        ],
        subregions: [],
      };
    case "india":
      return {
        countryId: "IN",
        map: asiaMap as unknown as BundeslandPath[],
        viewBox: asiaViewBox,
        projectCoords: projectCoordsAS,
        pois: [
          ...poiExtraIndiaCitiesV2,
          ...poiExtraIndiaEconomicV2,
          ...poiExtraIndiaHistoryV2,
          ...poiExtraIndiaLandmarksV2,
          ...poiExtraIndiaLifeV2,
          ...poiExtraIndiaNatureV2,
          ...poiExtraIndiaReliefV2
        ],
        subregions: [],
      };
    case "pakistan":
      return {
        countryId: "PK",
        map: asiaMap as unknown as BundeslandPath[],
        viewBox: asiaViewBox,
        projectCoords: projectCoordsAS,
        pois: [
          ...poiExtraPakistanCitiesV2,
          ...poiExtraPakistanEconomicV2,
          ...poiExtraPakistanHistoryV2,
          ...poiExtraPakistanLandmarksV2,
          ...poiExtraPakistanLifeV2,
          ...poiExtraPakistanNatureV2,
          ...poiExtraPakistanReliefV2
        ],
        subregions: [],
      };
    case "bangladesh":
      return {
        countryId: "BD",
        map: asiaMap as unknown as BundeslandPath[],
        viewBox: asiaViewBox,
        projectCoords: projectCoordsAS,
        pois: [
          ...poiExtraBangladeshCitiesV2,
          ...poiExtraBangladeshHistoryV2,
          ...poiExtraBangladeshLandmarksV2,
          ...poiExtraBangladeshLifeV2,
          ...poiExtraBangladeshNatureV2,
          ...poiExtraBangladeshReliefV2
        ],
        subregions: [],
      };
    case "srilanka":
      return {
        countryId: "LK",
        map: asiaMap as unknown as BundeslandPath[],
        viewBox: asiaViewBox,
        projectCoords: projectCoordsAS,
        pois: [
          ...poiExtraSrilankaCitiesV2,
          ...poiExtraSrilankaEconomicV2,
          ...poiExtraSrilankaHistoryV2,
          ...poiExtraSrilankaLandmarksV2,
          ...poiExtraSrilankaLifeV2,
          ...poiExtraSrilankaNatureV2,
          ...poiExtraSrilankaReliefV2
        ],
        subregions: [],
      };
    case "nepal":
      return {
        countryId: "NP",
        map: asiaMap as unknown as BundeslandPath[],
        viewBox: asiaViewBox,
        projectCoords: projectCoordsAS,
        pois: [
          ...poiExtraNepalCitiesV2,
          ...poiExtraNepalEconomicV2,
          ...poiExtraNepalHistoryV2,
          ...poiExtraNepalLandmarksV2,
          ...poiExtraNepalLifeV2,
          ...poiExtraNepalNatureV2,
          ...poiExtraNepalReliefV2
        ],
        subregions: [],
      };
    case "bhutan":
      return {
        countryId: "BT",
        map: asiaMap as unknown as BundeslandPath[],
        viewBox: asiaViewBox,
        projectCoords: projectCoordsAS,
        pois: [
          ...poiExtraBhutanCitiesV2,
          ...poiExtraBhutanEconomicV2,
          ...poiExtraBhutanHistoryV2,
          ...poiExtraBhutanLandmarksV2,
          ...poiExtraBhutanLifeV2,
          ...poiExtraBhutanNatureV2,
          ...poiExtraBhutanReliefV2
        ],
        subregions: [],
      };
    case "maldives":
      return {
        countryId: "MV",
        map: asiaMap as unknown as BundeslandPath[],
        viewBox: asiaViewBox,
        projectCoords: projectCoordsAS,
        pois: [
          ...poiExtraMaldivesCitiesV2,
          ...poiExtraMaldivesEconomicV2,
          ...poiExtraMaldivesHistoryV2,
          ...poiExtraMaldivesLandmarksV2,
          ...poiExtraMaldivesNatureV2,
          ...poiExtraMaldivesReliefV2
        ],
        subregions: [],
      };
    case "afghanistan":
      return {
        countryId: "AF",
        map: asiaMap as unknown as BundeslandPath[],
        viewBox: asiaViewBox,
        projectCoords: projectCoordsAS,
        pois: [
          ...poiExtraAfghanistanCitiesV2,
          ...poiExtraAfghanistanEconomicV2,
          ...poiExtraAfghanistanHistoryV2,
          ...poiExtraAfghanistanLandmarksV2,
          ...poiExtraAfghanistanLifeV2,
          ...poiExtraAfghanistanNatureV2,
          ...poiExtraAfghanistanReliefV2
        ],
        subregions: [],
      };
    case "iran":
      return {
        countryId: "IR",
        map: asiaMap as unknown as BundeslandPath[],
        viewBox: asiaViewBox,
        projectCoords: projectCoordsAS,
        pois: [
          ...poiExtraIranCitiesV2,
          ...poiExtraIranEconomicV2,
          ...poiExtraIranHistoryV2,
          ...poiExtraIranLandmarksV2,
          ...poiExtraIranLifeV2,
          ...poiExtraIranNatureV2,
          ...poiExtraIranReliefV2
        ],
        subregions: [],
      };
    case "iraq":
      return {
        countryId: "IQ",
        map: asiaMap as unknown as BundeslandPath[],
        viewBox: asiaViewBox,
        projectCoords: projectCoordsAS,
        pois: [
          ...poiExtraIraqCitiesV2,
          ...poiExtraIraqEconomicV2,
          ...poiExtraIraqHistoryV2,
          ...poiExtraIraqLandmarksV2,
          ...poiExtraIraqLifeV2,
          ...poiExtraIraqNatureV2,
          ...poiExtraIraqReliefV2
        ],
        subregions: [],
      };
    case "syria":
      return {
        countryId: "SY",
        map: asiaMap as unknown as BundeslandPath[],
        viewBox: asiaViewBox,
        projectCoords: projectCoordsAS,
        pois: [
          ...poiExtraSyriaCitiesV2,
          ...poiExtraSyriaEconomicV2,
          ...poiExtraSyriaHistoryV2,
          ...poiExtraSyriaLandmarksV2,
          ...poiExtraSyriaLifeV2,
          ...poiExtraSyriaNatureV2,
          ...poiExtraSyriaReliefV2
        ],
        subregions: [],
      };
    case "lebanon":
      return {
        countryId: "LB",
        map: asiaMap as unknown as BundeslandPath[],
        viewBox: asiaViewBox,
        projectCoords: projectCoordsAS,
        pois: [
          ...poiExtraLebanonCitiesV2,
          ...poiExtraLebanonEconomicV2,
          ...poiExtraLebanonHistoryV2,
          ...poiExtraLebanonLandmarksV2,
          ...poiExtraLebanonLifeV2,
          ...poiExtraLebanonReliefV2
        ],
        subregions: [],
      };
    case "jordan":
      return {
        countryId: "JO",
        map: asiaMap as unknown as BundeslandPath[],
        viewBox: asiaViewBox,
        projectCoords: projectCoordsAS,
        pois: [
          ...poiExtraJordanCitiesV2,
          ...poiExtraJordanEconomicV2,
          ...poiExtraJordanHistoryV2,
          ...poiExtraJordanLandmarksV2,
          ...poiExtraJordanLifeV2,
          ...poiExtraJordanNatureV2,
          ...poiExtraJordanReliefV2
        ],
        subregions: [],
      };
    case "israel":
      return {
        countryId: "IL",
        map: asiaMap as unknown as BundeslandPath[],
        viewBox: asiaViewBox,
        projectCoords: projectCoordsAS,
        pois: [
          ...poiExtraIsraelCitiesV2,
          ...poiExtraIsraelEconomicV2,
          ...poiExtraIsraelHistoryV2,
          ...poiExtraIsraelLandmarksV2,
          ...poiExtraIsraelLifeV2,
          ...poiExtraIsraelNatureV2,
          ...poiExtraIsraelReliefV2
        ],
        subregions: [],
      };
    case "palestine":
      return {
        countryId: "PS",
        map: asiaMap as unknown as BundeslandPath[],
        viewBox: asiaViewBox,
        projectCoords: projectCoordsAS,
        pois: [],
        subregions: [],
      };
    case "saudiarabia":
      return {
        countryId: "SA",
        map: asiaMap as unknown as BundeslandPath[],
        viewBox: asiaViewBox,
        projectCoords: projectCoordsAS,
        pois: [
          ...poiExtraSaudiarabiaCitiesV2,
          ...poiExtraSaudiarabiaEconomicV2,
          ...poiExtraSaudiarabiaHistoryV2,
          ...poiExtraSaudiarabiaLandmarksV2,
          ...poiExtraSaudiarabiaLifeV2,
          ...poiExtraSaudiarabiaNatureV2,
          ...poiExtraSaudiarabiaReliefV2
        ],
        subregions: [],
      };
    case "yemen":
      return {
        countryId: "YE",
        map: asiaMap as unknown as BundeslandPath[],
        viewBox: asiaViewBox,
        projectCoords: projectCoordsAS,
        pois: [
          ...poiExtraYemenCitiesV2,
          ...poiExtraYemenEconomicV2,
          ...poiExtraYemenHistoryV2,
          ...poiExtraYemenLandmarksV2,
          ...poiExtraYemenLifeV2,
          ...poiExtraYemenNatureV2,
          ...poiExtraYemenReliefV2
        ],
        subregions: [],
      };
    case "oman":
      return {
        countryId: "OM",
        map: asiaMap as unknown as BundeslandPath[],
        viewBox: asiaViewBox,
        projectCoords: projectCoordsAS,
        pois: [
          ...poiExtraOmanCitiesV2,
          ...poiExtraOmanEconomicV2,
          ...poiExtraOmanHistoryV2,
          ...poiExtraOmanLandmarksV2,
          ...poiExtraOmanLifeV2,
          ...poiExtraOmanNatureV2,
          ...poiExtraOmanReliefV2
        ],
        subregions: [],
      };
    case "uae":
      return {
        countryId: "AE",
        map: asiaMap as unknown as BundeslandPath[],
        viewBox: asiaViewBox,
        projectCoords: projectCoordsAS,
        pois: [
          ...poiExtraUaeCitiesV2,
          ...poiExtraUaeEconomicV2,
          ...poiExtraUaeHistoryV2,
          ...poiExtraUaeLandmarksV2,
          ...poiExtraUaeLifeV2,
          ...poiExtraUaeNatureV2,
          ...poiExtraUaeReliefV2
        ],
        subregions: [],
      };
    case "qatar":
      return {
        countryId: "QA",
        map: asiaMap as unknown as BundeslandPath[],
        viewBox: asiaViewBox,
        projectCoords: projectCoordsAS,
        pois: [
          ...poiExtraQatarCitiesV2,
          ...poiExtraQatarEconomicV2,
          ...poiExtraQatarHistoryV2,
          ...poiExtraQatarLandmarksV2,
          ...poiExtraQatarLifeV2,
          ...poiExtraQatarNatureV2,
          ...poiExtraQatarReliefV2
        ],
        subregions: [],
      };
    case "bahrain":
      return {
        countryId: "BH",
        map: asiaMap as unknown as BundeslandPath[],
        viewBox: asiaViewBox,
        projectCoords: projectCoordsAS,
        pois: [
          ...poiExtraBahrainCitiesV2,
          ...poiExtraBahrainEconomicV2,
          ...poiExtraBahrainHistoryV2,
          ...poiExtraBahrainLandmarksV2,
          ...poiExtraBahrainLifeV2
        ],
        subregions: [],
      };
    case "kuwait":
      return {
        countryId: "KW",
        map: asiaMap as unknown as BundeslandPath[],
        viewBox: asiaViewBox,
        projectCoords: projectCoordsAS,
        pois: [
          ...poiExtraKuwaitCitiesV2,
          ...poiExtraKuwaitEconomicV2,
          ...poiExtraKuwaitHistoryV2,
          ...poiExtraKuwaitLandmarksV2,
          ...poiExtraKuwaitLifeV2
        ],
        subregions: [],
      };
    case "turkey":
      return {
        countryId: "TR",
        map: asiaMap as unknown as BundeslandPath[],
        viewBox: asiaViewBox,
        projectCoords: projectCoordsAS,
        pois: [
          ...poiExtraTurkeyCitiesV2,
          ...poiExtraTurkeyEconomicV2,
          ...poiExtraTurkeyHistoryV2,
          ...poiExtraTurkeyLandmarksV2,
          ...poiExtraTurkeyLifeV2,
          ...poiExtraTurkeyNatureV2,
          ...poiExtraTurkeyReliefV2
        ],
        subregions: [],
      };
    case "cyprus":
      return {
        countryId: "CY",
        map: cyprusMap as unknown as BundeslandPath[],
        viewBox: cyprusViewBox,
        projectCoords: projectCoordsCY,
        pois: [],
        subregions: [],
      };
    case "georgia":
      return {
        countryId: "GE",
        map: asiaMap as unknown as BundeslandPath[],
        viewBox: asiaViewBox,
        projectCoords: projectCoordsAS,
        pois: [
          ...poiExtraGeorgiaCitiesV2,
          ...poiExtraGeorgiaEconomicV2,
          ...poiExtraGeorgiaHistoryV2,
          ...poiExtraGeorgiaLandmarksV2,
          ...poiExtraGeorgiaLifeV2,
          ...poiExtraGeorgiaNatureV2,
          ...poiExtraGeorgiaReliefV2
        ],
        subregions: [],
      };
    case "armenia":
      return {
        countryId: "AM",
        map: asiaMap as unknown as BundeslandPath[],
        viewBox: asiaViewBox,
        projectCoords: projectCoordsAS,
        pois: [
          ...poiExtraArmeniaCitiesV2,
          ...poiExtraArmeniaEconomicV2,
          ...poiExtraArmeniaHistoryV2,
          ...poiExtraArmeniaLandmarksV2,
          ...poiExtraArmeniaLifeV2,
          ...poiExtraArmeniaNatureV2,
          ...poiExtraArmeniaReliefV2
        ],
        subregions: [],
      };
    case "azerbaijan":
      return {
        countryId: "AZ",
        map: asiaMap as unknown as BundeslandPath[],
        viewBox: asiaViewBox,
        projectCoords: projectCoordsAS,
        pois: [
          ...poiExtraAzerbaijanCitiesV2,
          ...poiExtraAzerbaijanEconomicV2,
          ...poiExtraAzerbaijanHistoryV2,
          ...poiExtraAzerbaijanLandmarksV2,
          ...poiExtraAzerbaijanLifeV2,
          ...poiExtraAzerbaijanNatureV2,
          ...poiExtraAzerbaijanReliefV2
        ],
        subregions: [],
      };
    case "kazakhstan":
      return {
        countryId: "KZ",
        map: asiaMap as unknown as BundeslandPath[],
        viewBox: asiaViewBox,
        projectCoords: projectCoordsAS,
        pois: [
          ...poiExtraKazakhstanCitiesV2,
          ...poiExtraKazakhstanEconomicV2,
          ...poiExtraKazakhstanHistoryV2,
          ...poiExtraKazakhstanLandmarksV2,
          ...poiExtraKazakhstanLifeV2,
          ...poiExtraKazakhstanNatureV2,
          ...poiExtraKazakhstanReliefV2
        ],
        subregions: [],
      };
    case "uzbekistan":
      return {
        countryId: "UZ",
        map: asiaMap as unknown as BundeslandPath[],
        viewBox: asiaViewBox,
        projectCoords: projectCoordsAS,
        pois: [
          ...poiExtraUzbekistanCitiesV2,
          ...poiExtraUzbekistanEconomicV2,
          ...poiExtraUzbekistanHistoryV2,
          ...poiExtraUzbekistanLandmarksV2,
          ...poiExtraUzbekistanLifeV2,
          ...poiExtraUzbekistanNatureV2,
          ...poiExtraUzbekistanReliefV2
        ],
        subregions: [],
      };
    case "turkmenistan":
      return {
        countryId: "TM",
        map: asiaMap as unknown as BundeslandPath[],
        viewBox: asiaViewBox,
        projectCoords: projectCoordsAS,
        pois: [
          ...poiExtraTurkmenistanCitiesV2,
          ...poiExtraTurkmenistanEconomicV2,
          ...poiExtraTurkmenistanHistoryV2,
          ...poiExtraTurkmenistanLandmarksV2,
          ...poiExtraTurkmenistanLifeV2,
          ...poiExtraTurkmenistanNatureV2,
          ...poiExtraTurkmenistanReliefV2
        ],
        subregions: [],
      };
    case "kyrgyzstan":
      return {
        countryId: "KG",
        map: asiaMap as unknown as BundeslandPath[],
        viewBox: asiaViewBox,
        projectCoords: projectCoordsAS,
        pois: [
          ...poiExtraKyrgyzstanCitiesV2,
          ...poiExtraKyrgyzstanEconomicV2,
          ...poiExtraKyrgyzstanLandmarksV2,
          ...poiExtraKyrgyzstanLifeV2,
          ...poiExtraKyrgyzstanNatureV2,
          ...poiExtraKyrgyzstanReliefV2
        ],
        subregions: [],
      };
    case "tajikistan":
      return {
        countryId: "TJ",
        map: asiaMap as unknown as BundeslandPath[],
        viewBox: asiaViewBox,
        projectCoords: projectCoordsAS,
        pois: [
          ...poiExtraTajikistanCitiesV2,
          ...poiExtraTajikistanEconomicV2,
          ...poiExtraTajikistanHistoryV2,
          ...poiExtraTajikistanLandmarksV2,
          ...poiExtraTajikistanLifeV2,
          ...poiExtraTajikistanNatureV2,
          ...poiExtraTajikistanReliefV2
        ],
        subregions: [],
      };
    case "taiwan":
      return {
        countryId: "TW",
        map: asiaMap as unknown as BundeslandPath[],
        viewBox: asiaViewBox,
        projectCoords: projectCoordsAS,
        pois: [
          ...poiExtraTaiwanCitiesV2,
          ...poiExtraTaiwanEconomicV2,
          ...poiExtraTaiwanHistoryV2,
          ...poiExtraTaiwanLandmarksV2,
          ...poiExtraTaiwanLifeV2,
          ...poiExtraTaiwanNatureV2,
          ...poiExtraTaiwanReliefV2
        ],
        subregions: [],
      };
    case "timorleste":
      return {
        countryId: "TL",
        map: asiaMap as unknown as BundeslandPath[],
        viewBox: asiaViewBox,
        projectCoords: projectCoordsAS,
        pois: [
          ...poiExtraTimorlesteCitiesV2,
          ...poiExtraTimorlesteEconomicV2,
          ...poiExtraTimorlesteHistoryV2,
          ...poiExtraTimorlesteLandmarksV2,
          ...poiExtraTimorlesteLifeV2,
          ...poiExtraTimorlesteNatureV2,
          ...poiExtraTimorlesteReliefV2
        ],
        subregions: [],
      };
    default:
      return null;
  }
}
