const fs = require('fs');

const cities = [
  ["Harare", "ZW-HA", "state-capital", 31.0530, -17.8216],
  ["Bulawayo", "ZW-BU", "state-capital", 28.5833, -20.1500],
  ["Chitungwiza", "ZW-HA", "city", 31.0756, -18.0127],
  ["Mutare", "ZW-MA", "state-capital", 32.6695, -18.9743],
  ["Gweru", "ZW-MI", "state-capital", 29.8153, -19.4500],
  ["Kwekwe", "ZW-MI", "city", 29.8142, -18.9281],
  ["Kadoma", "ZW-MW", "city", 29.9153, -18.3333],
  ["Masvingo", "ZW-MV", "state-capital", 30.8278, -20.0744],
  ["Chinhoyi", "ZW-MW", "state-capital", 30.1472, -17.3667],
  ["Norton", "ZW-MW", "city", 30.7000, -17.8833],
  ["Marondera", "ZW-ME", "state-capital", 31.5519, -18.1853],
  ["Ruwa", "ZW-ME", "city", 31.2447, -17.8897],
  ["Chegutu", "ZW-MW", "city", 30.1492, -18.1303],
  ["Zvishavane", "ZW-MI", "city", 30.0665, -20.3267],
  ["Bindura", "ZW-MC", "state-capital", 31.3306, -17.3019],
  ["Beitbridge", "ZW-MS", "city", 29.9875, -22.2167],
  ["Redcliff", "ZW-MI", "city", 29.7833, -19.0333],
  ["Victoria Falls", "ZW-MN", "city", 25.8333, -17.9333],
  ["Hwange", "ZW-MN", "city", 26.5000, -18.3667],
  ["Rusape", "ZW-MA", "city", 32.1284, -18.5278],
  ["Chiredzi", "ZW-MV", "city", 31.6667, -21.0500],
  ["Kariba", "ZW-MW", "city", 28.8000, -16.5167],
  ["Karoi", "ZW-MW", "city", 29.6925, -16.8099],
  ["Chipinge", "ZW-MA", "city", 32.6236, -20.1883],
  ["Gokwe", "ZW-MI", "city", 28.9349, -18.2048],
  ["Shurugwi", "ZW-MI", "city", 30.0058, -19.6702],
  ["Gwanda", "ZW-MS", "state-capital", 29.0000, -20.9333],
  ["Mashava", "ZW-MV", "city", 30.4667, -20.0333],
  ["Mutoko", "ZW-ME", "city", 32.2269, -17.3970],
  ["Epworth", "ZW-HA", "city", 31.1475, -17.8900],
  ["Mvuma", "ZW-MI", "city", 30.5283, -19.2792],
  ["Shamva", "ZW-MC", "city", 31.5667, -17.3167],
  ["Glendale", "ZW-MC", "city", 31.0667, -17.3833],
  ["Mvurwi", "ZW-MC", "city", 30.8500, -17.0333],
  ["Mount Darwin", "ZW-MC", "city", 31.5833, -16.7833],
  ["Plumtree", "ZW-MS", "city", 27.8000, -20.4833],
  ["Chivhu", "ZW-ME", "city", 30.8922, -19.0211],
  ["Triangle", "ZW-MV", "city", 31.4667, -21.0333],
  ["Centenary", "ZW-MC", "city", 31.1167, -16.7333],
  ["Banket", "ZW-MW", "city", 30.4000, -17.3833],
  ["Dete", "ZW-MN", "city", 26.8667, -18.6167],
  ["Nkayi", "ZW-MN", "city", 28.9000, -19.0000],
  ["Mberengwa", "ZW-MI", "city", 29.9167, -20.4833],
  ["Tsholotsho", "ZW-MN", "city", 27.7667, -19.7667],
  ["Binga", "ZW-MN", "city", 27.3414, -17.6203],
  ["Filabusi", "ZW-MS", "city", 29.2833, -20.5333],
  ["Inyati", "ZW-MN", "city", 28.8475, -19.6758],
  ["Lupane", "ZW-MN", "state-capital", 27.8333, -18.9333],
  ["Guruve", "ZW-MC", "city", 30.7000, -16.6500],
  ["Rushinga", "ZW-MC", "city", 32.0667, -16.5167],
  ["Chimanimani", "ZW-MA", "city", 32.8667, -19.8000],
  ["Nyanga", "ZW-MA", "city", 32.7483, -18.2144],
  ["Penhalonga", "ZW-MA", "city", 32.7000, -18.8833],
  ["Headlands", "ZW-MA", "city", 32.0500, -18.2833],
  ["Concession", "ZW-MC", "city", 30.9500, -17.3833],
  ["Murehwa", "ZW-ME", "city", 31.7833, -17.6500],
  ["Wedza", "ZW-ME", "city", 31.6333, -18.6167],
  ["Goromonzi", "ZW-ME", "city", 31.3667, -17.8167],
  ["Chakari", "ZW-MW", "city", 29.8667, -18.0667],
  ["Shangani", "ZW-MS", "city", 29.3667, -19.7833]
];

function generateId(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-cities-v2';
}

function generateDescs(name) {
  return {
    de: `${name} ist eine bedeutende Stadt in Simbabwe.`,
    hu: `${name} egy jelentős város Zimbabwében.`,
    ro: `${name} este un oraș important din Zimbabwe.`,
    en: `${name} is an important city in Zimbabwe.`
  };
}

function generateFacts(name) {
  return {
    de: [`${name} trägt zum kulturellen und wirtschaftlichen Leben von Simbabwe bei.`, `Die Region um ${name} zeichnet sich durch ihre Vielfalt aus.`],
    hu: [`${name} hozzájárul Zimbabwe kulturális és gazdasági életéhez.`, `A(z) ${name} körüli régió sokszínűségéről ismert.`],
    ro: [`${name} contribuie la viața culturală și economică a statului Zimbabwe.`, `Regiunea din jurul ${name} se caracterizează prin diversitatea sa.`],
    en: [`${name} contributes to the cultural and economic life of Zimbabwe.`, `The region around ${name} is characterized by its diversity.`]
  };
}

const pois = cities.map(([name, parent, type, lon, lat]) => {
  return `  {
    id: "${generateId(name)}",
    type: "${type}",
    parent: "${parent}",
    coords: [${lon}, ${lat}],
    name: { de: "${name}", hu: "${name}", ro: "${name}", en: "${name}" },
    description: ${JSON.stringify(generateDescs(name), null, 2).replace(/\n/g, '\n    ')},
    facts: ${JSON.stringify(generateFacts(name), null, 2).replace(/\n/g, '\n    ')}
  }`;
});

const fileContent = `import type { POI } from "./poi";

export const poiExtraZimbabweCitiesV2: POI[] = [
${pois.join(",\n")}
];
`;

fs.writeFileSync('lib/visualLab/data/poiExtraZimbabweCitiesV2.ts', fileContent);
