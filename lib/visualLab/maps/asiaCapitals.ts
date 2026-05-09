// Capitals of Asian countries (lat/lon) for rendering on AsiaMap.
// Locale names: de/hu/ro/en. Country id matches asiaMap entries.

export interface AsiaCapital {
  countryId: string;
  name: { de: string; hu: string; ro: string; en: string };
  lon: number;
  lat: number;
}

export const ASIA_CAPITALS: AsiaCapital[] = [
  { countryId: "china",        name: { de: "Peking",       hu: "Peking",       ro: "Beijing",      en: "Beijing" },      lon: 116.4074, lat: 39.9042 },
  { countryId: "japan",        name: { de: "Tokio",        hu: "Tokió",        ro: "Tokio",        en: "Tokyo" },        lon: 139.6917, lat: 35.6895 },
  { countryId: "southkorea",   name: { de: "Seoul",        hu: "Szöul",        ro: "Seul",         en: "Seoul" },        lon: 126.9780, lat: 37.5665 },
  { countryId: "northkorea",   name: { de: "Pjöngjang",    hu: "Phenjan",      ro: "Phenian",      en: "Pyongyang" },    lon: 125.7625, lat: 39.0392 },
  { countryId: "mongolia",     name: { de: "Ulaanbaatar",  hu: "Ulánbátor",    ro: "Ulan Bator",   en: "Ulaanbaatar" },  lon: 106.9057, lat: 47.8864 },
  { countryId: "vietnam",      name: { de: "Hanoi",        hu: "Hanoi",        ro: "Hanoi",        en: "Hanoi" },        lon: 105.8342, lat: 21.0278 },
  { countryId: "laos",         name: { de: "Vientiane",    hu: "Vientián",     ro: "Vientiane",    en: "Vientiane" },    lon: 102.6331, lat: 17.9757 },
  { countryId: "cambodia",     name: { de: "Phnom Penh",   hu: "Phnompen",     ro: "Phnom Penh",   en: "Phnom Penh" },   lon: 104.9160, lat: 11.5564 },
  { countryId: "thailand",     name: { de: "Bangkok",      hu: "Bangkok",      ro: "Bangkok",      en: "Bangkok" },      lon: 100.5018, lat: 13.7563 },
  { countryId: "myanmar",      name: { de: "Naypyidaw",    hu: "Najpjidaw",    ro: "Naypyidaw",    en: "Naypyidaw" },    lon: 96.0785,  lat: 19.7633 },
  { countryId: "malaysia",     name: { de: "Kuala Lumpur", hu: "Kuala Lumpur", ro: "Kuala Lumpur", en: "Kuala Lumpur" }, lon: 101.6869, lat: 3.1390 },
  { countryId: "singapore",    name: { de: "Singapur",     hu: "Szingapúr",    ro: "Singapore",    en: "Singapore" },    lon: 103.8198, lat: 1.3521 },
  { countryId: "indonesia",    name: { de: "Jakarta",      hu: "Jakarta",      ro: "Jakarta",      en: "Jakarta" },      lon: 106.8456, lat: -6.2088 },
  { countryId: "philippines",  name: { de: "Manila",       hu: "Manila",       ro: "Manila",       en: "Manila" },       lon: 120.9842, lat: 14.5995 },
  { countryId: "brunei",       name: { de: "Bandar Seri Begawan", hu: "Bandar Seri Begawan", ro: "Bandar Seri Begawan", en: "Bandar Seri Begawan" }, lon: 114.9398, lat: 4.9031 },
  { countryId: "india",        name: { de: "Neu-Delhi",    hu: "Újdelhi",      ro: "New Delhi",    en: "New Delhi" },    lon: 77.2090,  lat: 28.6139 },
  { countryId: "pakistan",     name: { de: "Islamabad",    hu: "Iszlámábád",   ro: "Islamabad",    en: "Islamabad" },    lon: 73.0479,  lat: 33.6844 },
  { countryId: "bangladesh",   name: { de: "Dhaka",        hu: "Dakka",        ro: "Dhaka",        en: "Dhaka" },        lon: 90.4125,  lat: 23.8103 },
  { countryId: "srilanka",     name: { de: "Colombo",      hu: "Colombo",      ro: "Colombo",      en: "Colombo" },      lon: 79.8612,  lat: 6.9271 },
  { countryId: "nepal",        name: { de: "Kathmandu",    hu: "Katmandu",     ro: "Kathmandu",    en: "Kathmandu" },    lon: 85.3240,  lat: 27.7172 },
  { countryId: "bhutan",       name: { de: "Thimphu",      hu: "Thimphu",      ro: "Thimphu",      en: "Thimphu" },      lon: 89.6390,  lat: 27.4728 },
  { countryId: "maldives",     name: { de: "Malé",         hu: "Malé",         ro: "Malé",         en: "Malé" },         lon: 73.5093,  lat: 4.1755 },
  { countryId: "afghanistan",  name: { de: "Kabul",        hu: "Kabul",        ro: "Kabul",        en: "Kabul" },        lon: 69.2075,  lat: 34.5553 },
  { countryId: "iran",         name: { de: "Teheran",      hu: "Teherán",      ro: "Teheran",      en: "Tehran" },       lon: 51.3890,  lat: 35.6892 },
  { countryId: "iraq",         name: { de: "Bagdad",       hu: "Bagdad",       ro: "Bagdad",       en: "Baghdad" },      lon: 44.3661,  lat: 33.3152 },
  { countryId: "syria",        name: { de: "Damaskus",     hu: "Damaszkusz",   ro: "Damasc",       en: "Damascus" },     lon: 36.2765,  lat: 33.5138 },
  { countryId: "lebanon",      name: { de: "Beirut",       hu: "Bejrút",       ro: "Beirut",       en: "Beirut" },       lon: 35.5018,  lat: 33.8938 },
  { countryId: "jordan",       name: { de: "Amman",        hu: "Ammán",        ro: "Amman",        en: "Amman" },        lon: 35.9284,  lat: 31.9454 },
  { countryId: "israel",       name: { de: "Jerusalem",    hu: "Jeruzsálem",   ro: "Ierusalim",    en: "Jerusalem" },    lon: 35.2137,  lat: 31.7683 },
  { countryId: "palestine",    name: { de: "Ramallah",     hu: "Rámalláh",     ro: "Ramallah",     en: "Ramallah" },     lon: 35.2034,  lat: 31.9038 },
  { countryId: "saudiarabia",  name: { de: "Riad",         hu: "Rijád",        ro: "Riad",         en: "Riyadh" },       lon: 46.6753,  lat: 24.7136 },
  { countryId: "yemen",        name: { de: "Sanaa",        hu: "Szanaa",       ro: "Sanaa",        en: "Sanaa" },        lon: 44.2067,  lat: 15.3694 },
  { countryId: "oman",         name: { de: "Maskat",       hu: "Maszkat",      ro: "Mascat",       en: "Muscat" },       lon: 58.5922,  lat: 23.5859 },
  { countryId: "uae",          name: { de: "Abu Dhabi",    hu: "Abu-Dzabi",    ro: "Abu Dhabi",    en: "Abu Dhabi" },    lon: 54.3773,  lat: 24.4539 },
  { countryId: "qatar",        name: { de: "Doha",         hu: "Doha",         ro: "Doha",         en: "Doha" },         lon: 51.5310,  lat: 25.2854 },
  { countryId: "bahrain",      name: { de: "Manama",       hu: "Manáma",       ro: "Manama",       en: "Manama" },       lon: 50.5577,  lat: 26.2285 },
  { countryId: "kuwait",       name: { de: "Kuwait-Stadt", hu: "Kuvaitváros",  ro: "Kuwait",       en: "Kuwait City" },  lon: 47.9774,  lat: 29.3759 },
  { countryId: "turkey",       name: { de: "Ankara",       hu: "Ankara",       ro: "Ankara",       en: "Ankara" },       lon: 32.8597,  lat: 39.9334 },
  { countryId: "cyprus",       name: { de: "Nikosia",      hu: "Nicosia",      ro: "Nicosia",      en: "Nicosia" },      lon: 33.3823,  lat: 35.1856 },
  { countryId: "georgia",      name: { de: "Tiflis",       hu: "Tbiliszi",     ro: "Tbilisi",      en: "Tbilisi" },      lon: 44.7833,  lat: 41.7151 },
  { countryId: "armenia",      name: { de: "Eriwan",       hu: "Jereván",      ro: "Erevan",       en: "Yerevan" },      lon: 44.5152,  lat: 40.1792 },
  { countryId: "azerbaijan",   name: { de: "Baku",         hu: "Baku",         ro: "Baku",         en: "Baku" },         lon: 49.8671,  lat: 40.4093 },
  { countryId: "kazakhstan",   name: { de: "Astana",       hu: "Asztana",      ro: "Astana",       en: "Astana" },       lon: 71.4491,  lat: 51.1694 },
  { countryId: "uzbekistan",   name: { de: "Taschkent",    hu: "Taskent",      ro: "Tașkent",      en: "Tashkent" },     lon: 69.2401,  lat: 41.2995 },
  { countryId: "turkmenistan", name: { de: "Aschgabat",    hu: "Asgabat",      ro: "Așgabat",      en: "Ashgabat" },     lon: 58.3794,  lat: 37.9601 },
  { countryId: "kyrgyzstan",   name: { de: "Bischkek",     hu: "Biskek",       ro: "Bișkek",       en: "Bishkek" },      lon: 74.5698,  lat: 42.8746 },
  { countryId: "tajikistan",   name: { de: "Duschanbe",    hu: "Dusanbe",      ro: "Dușanbe",      en: "Dushanbe" },     lon: 68.7791,  lat: 38.5598 },
  { countryId: "taiwan",       name: { de: "Taipeh",       hu: "Tajpej",       ro: "Taipei",       en: "Taipei" },       lon: 121.5654, lat: 25.0330 },
  { countryId: "timorleste",   name: { de: "Dili",         hu: "Dili",         ro: "Dili",         en: "Dili" },         lon: 125.5603, lat: -8.5569 },
];

export const ASIA_CAPITALS_BY_ID: Record<string, AsiaCapital> = Object.fromEntries(
  ASIA_CAPITALS.map((c) => [c.countryId, c]),
);
