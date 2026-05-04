// Capitals of African countries (lat/lon) for rendering on AfricaMap.
// Locale names: native + en/de/hu/ro fallback. Country id matches africaMap entries.

export interface AfricaCapital {
  countryId: string;
  name: { de: string; hu: string; ro: string; en: string };
  lon: number;
  lat: number;
}

export const AFRICA_CAPITALS: AfricaCapital[] = [
  { countryId: "algeria",                  name: { de: "Algier", hu: "Algír", ro: "Alger", en: "Algiers" },                              lon: 3.0588,   lat: 36.7538 },
  { countryId: "angola",                   name: { de: "Luanda", hu: "Luanda", ro: "Luanda", en: "Luanda" },                            lon: 13.2343,  lat: -8.8383 },
  { countryId: "benin",                    name: { de: "Porto-Novo", hu: "Porto-Novo", ro: "Porto-Novo", en: "Porto-Novo" },             lon: 2.6323,   lat: 6.4969 },
  { countryId: "botswana",                 name: { de: "Gaborone", hu: "Gaborone", ro: "Gaborone", en: "Gaborone" },                     lon: 25.9231,  lat: -24.6282 },
  { countryId: "burkinafaso",              name: { de: "Ouagadougou", hu: "Ouagadougou", ro: "Ouagadougou", en: "Ouagadougou" },         lon: -1.5197,  lat: 12.3714 },
  { countryId: "burundi",                  name: { de: "Gitega", hu: "Gitega", ro: "Gitega", en: "Gitega" },                             lon: 29.9189,  lat: -3.4271 },
  { countryId: "cameroon",                 name: { de: "Jaunde", hu: "Yaoundé", ro: "Yaoundé", en: "Yaoundé" },                          lon: 11.5021,  lat: 3.8480 },
  { countryId: "capeverde",                name: { de: "Praia", hu: "Praia", ro: "Praia", en: "Praia" },                                 lon: -23.5125, lat: 14.9177 },
  { countryId: "centralafricanrepublic",   name: { de: "Bangui", hu: "Bangui", ro: "Bangui", en: "Bangui" },                             lon: 18.5582,  lat: 4.3947 },
  { countryId: "chad",                     name: { de: "N'Djamena", hu: "N’Djamena", ro: "N’Djamena", en: "N'Djamena" },                 lon: 15.0444,  lat: 12.1348 },
  { countryId: "comoros",                  name: { de: "Moroni", hu: "Moroni", ro: "Moroni", en: "Moroni" },                             lon: 43.2566,  lat: -11.7172 },
  { countryId: "congo",                    name: { de: "Brazzaville", hu: "Brazzaville", ro: "Brazzaville", en: "Brazzaville" },         lon: 15.2429,  lat: -4.2634 },
  { countryId: "drcongo",                  name: { de: "Kinshasa", hu: "Kinshasa", ro: "Kinshasa", en: "Kinshasa" },                     lon: 15.2663,  lat: -4.4419 },
  { countryId: "djibouti",                 name: { de: "Dschibuti", hu: "Dzsibuti", ro: "Djibouti", en: "Djibouti" },                    lon: 43.1456,  lat: 11.5886 },
  { countryId: "egypt",                    name: { de: "Kairo", hu: "Kairó", ro: "Cairo", en: "Cairo" },                                 lon: 31.2357,  lat: 30.0444 },
  { countryId: "equatorialguinea",         name: { de: "Malabo", hu: "Malabo", ro: "Malabo", en: "Malabo" },                             lon: 8.7832,   lat: 3.7504 },
  { countryId: "eritrea",                  name: { de: "Asmara", hu: "Aszmara", ro: "Asmara", en: "Asmara" },                            lon: 38.9251,  lat: 15.3229 },
  { countryId: "eswatini",                 name: { de: "Mbabane", hu: "Mbabane", ro: "Mbabane", en: "Mbabane" },                         lon: 31.1367,  lat: -26.3054 },
  { countryId: "ethiopia",                 name: { de: "Addis Abeba", hu: "Addisz-Abeba", ro: "Addis Abeba", en: "Addis Ababa" },        lon: 38.7578,  lat: 9.0192 },
  { countryId: "gabon",                    name: { de: "Libreville", hu: "Libreville", ro: "Libreville", en: "Libreville" },             lon: 9.4536,   lat: 0.3924 },
  { countryId: "gambia",                   name: { de: "Banjul", hu: "Banjul", ro: "Banjul", en: "Banjul" },                             lon: -16.5775, lat: 13.4549 },
  { countryId: "ghana",                    name: { de: "Accra", hu: "Akkra", ro: "Accra", en: "Accra" },                                 lon: -0.1870,  lat: 5.6037 },
  { countryId: "guinea",                   name: { de: "Conakry", hu: "Conakry", ro: "Conakry", en: "Conakry" },                         lon: -13.7122, lat: 9.6412 },
  { countryId: "guineabissau",             name: { de: "Bissau", hu: "Bissau", ro: "Bissau", en: "Bissau" },                             lon: -15.5984, lat: 11.8636 },
  { countryId: "ivorycoast",               name: { de: "Yamoussoukro", hu: "Yamoussoukro", ro: "Yamoussoukro", en: "Yamoussoukro" },     lon: -5.2767,  lat: 6.8276 },
  { countryId: "kenya",                    name: { de: "Nairobi", hu: "Nairobi", ro: "Nairobi", en: "Nairobi" },                         lon: 36.8219,  lat: -1.2921 },
  { countryId: "lesotho",                  name: { de: "Maseru", hu: "Maseru", ro: "Maseru", en: "Maseru" },                             lon: 27.4869,  lat: -29.3151 },
  { countryId: "liberia",                  name: { de: "Monrovia", hu: "Monrovia", ro: "Monrovia", en: "Monrovia" },                     lon: -10.7969, lat: 6.3007 },
  { countryId: "libya",                    name: { de: "Tripolis", hu: "Tripoli", ro: "Tripoli", en: "Tripoli" },                        lon: 13.1913,  lat: 32.8872 },
  { countryId: "madagascar",               name: { de: "Antananarivo", hu: "Antananarivo", ro: "Antananarivo", en: "Antananarivo" },     lon: 47.5079,  lat: -18.8792 },
  { countryId: "malawi",                   name: { de: "Lilongwe", hu: "Lilongwe", ro: "Lilongwe", en: "Lilongwe" },                     lon: 33.7741,  lat: -13.9626 },
  { countryId: "mali",                     name: { de: "Bamako", hu: "Bamako", ro: "Bamako", en: "Bamako" },                             lon: -8.0029,  lat: 12.6392 },
  { countryId: "mauritania",               name: { de: "Nouakchott", hu: "Nouakchott", ro: "Nouakchott", en: "Nouakchott" },             lon: -15.9785, lat: 18.0735 },
  { countryId: "mauritius",                name: { de: "Port Louis", hu: "Port Louis", ro: "Port Louis", en: "Port Louis" },             lon: 57.5074,  lat: -20.1640 },
  { countryId: "morocco",                  name: { de: "Rabat", hu: "Rabat", ro: "Rabat", en: "Rabat" },                                 lon: -6.8417,  lat: 34.0209 },
  { countryId: "mozambique",               name: { de: "Maputo", hu: "Maputo", ro: "Maputo", en: "Maputo" },                             lon: 32.5732,  lat: -25.9692 },
  { countryId: "namibia",                  name: { de: "Windhuk", hu: "Windhoek", ro: "Windhoek", en: "Windhoek" },                      lon: 17.0832,  lat: -22.5609 },
  { countryId: "niger",                    name: { de: "Niamey", hu: "Niamey", ro: "Niamey", en: "Niamey" },                             lon: 2.1098,   lat: 13.5117 },
  { countryId: "nigeria",                  name: { de: "Abuja", hu: "Abuja", ro: "Abuja", en: "Abuja" },                                 lon: 7.4951,   lat: 9.0765 },
  { countryId: "rwanda",                   name: { de: "Kigali", hu: "Kigali", ro: "Kigali", en: "Kigali" },                             lon: 30.0588,  lat: -1.9706 },
  { countryId: "saotomeprincipe",          name: { de: "São Tomé", hu: "São Tomé", ro: "São Tomé", en: "São Tomé" },                     lon: 6.7273,   lat: 0.3365 },
  { countryId: "senegal",                  name: { de: "Dakar", hu: "Dakar", ro: "Dakar", en: "Dakar" },                                 lon: -17.4677, lat: 14.7167 },
  { countryId: "seychelles",               name: { de: "Victoria", hu: "Victoria", ro: "Victoria", en: "Victoria" },                     lon: 55.4513,  lat: -4.6191 },
  { countryId: "sierraleone",              name: { de: "Freetown", hu: "Freetown", ro: "Freetown", en: "Freetown" },                     lon: -13.2317, lat: 8.4657 },
  { countryId: "somalia",                  name: { de: "Mogadischu", hu: "Mogadishu", ro: "Mogadishu", en: "Mogadishu" },                lon: 45.3182,  lat: 2.0469 },
  { countryId: "southafrica",              name: { de: "Pretoria", hu: "Pretoria", ro: "Pretoria", en: "Pretoria" },                     lon: 28.1881,  lat: -25.7461 },
  { countryId: "southsudan",               name: { de: "Juba", hu: "Juba", ro: "Juba", en: "Juba" },                                     lon: 31.5825,  lat: 4.8594 },
  { countryId: "sudan",                    name: { de: "Khartum", hu: "Kartúm", ro: "Khartoum", en: "Khartoum" },                        lon: 32.5599,  lat: 15.5007 },
  { countryId: "tanzania",                 name: { de: "Dodoma", hu: "Dodoma", ro: "Dodoma", en: "Dodoma" },                             lon: 35.7517,  lat: -6.1630 },
  { countryId: "togo",                     name: { de: "Lomé", hu: "Lomé", ro: "Lomé", en: "Lomé" },                                     lon: 1.2255,   lat: 6.1725 },
  { countryId: "tunisia",                  name: { de: "Tunis", hu: "Tunisz", ro: "Tunis", en: "Tunis" },                                lon: 10.1815,  lat: 36.8065 },
  { countryId: "uganda",                   name: { de: "Kampala", hu: "Kampala", ro: "Kampala", en: "Kampala" },                         lon: 32.5825,  lat: 0.3476 },
  { countryId: "zambia",                   name: { de: "Lusaka", hu: "Lusaka", ro: "Lusaka", en: "Lusaka" },                             lon: 28.3228,  lat: -15.3875 },
  { countryId: "zimbabwe",                 name: { de: "Harare", hu: "Harare", ro: "Harare", en: "Harare" },                             lon: 31.0335,  lat: -17.8252 },
];

export const AFRICA_CAPITALS_BY_ID: Record<string, AfricaCapital> = Object.fromEntries(
  AFRICA_CAPITALS.map((c) => [c.countryId, c]),
);
