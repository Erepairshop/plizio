// Spain Admin-2 province paths per autonomous community
// Placeholder paths generated from approximate bounding boxes.
// Replace with real GeoJSON-derived paths when internet access is available.
//
// Spain: 17 autonomous communities (ccaa), 50 provinces
// ISO 3166-2:ES province codes used as IDs.

export interface SpainProvinceSubregion {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  labelX: number;
  labelY: number;
  path: string;
}

// Per-CCAA province list. Keys match the RegionPath IDs in spain.svg.ts.
export const spainAdmin2Map: Record<string, SpainProvinceSubregion[]> = {

  // ── Andalucía (ES-AN) ─── 8 provinces ─────────────────────────────────────
  "ES-AN": [
    { id: "ES-AL", name: { de: "Almería",   hu: "Almería",   ro: "Almeria",   en: "Almería"   }, labelX: 810, labelY: 1000, path: "M700,900 L960,900 L960,1150 L700,1150 Z" },
    { id: "ES-CA", name: { de: "Cádiz",     hu: "Cádiz",     ro: "Cadiz",     en: "Cádiz"     }, labelX: 140, labelY: 1100, path: "M40,1000 L280,1000 L280,1150 L40,1150 Z" },
    { id: "ES-CO", name: { de: "Córdoba",   hu: "Córdoba",   ro: "Córdoba",   en: "Córdoba"   }, labelX: 420, labelY: 800,  path: "M290,700 L560,700 L560,930 L290,930 Z"  },
    { id: "ES-GR", name: { de: "Granada",   hu: "Granada",   ro: "Granada",   en: "Granada"   }, labelX: 640, labelY: 1000, path: "M570,900 L700,900 L700,1100 L570,1100 Z" },
    { id: "ES-H",  name: { de: "Huelva",    hu: "Huelva",    ro: "Huelva",    en: "Huelva"    }, labelX: 130, labelY: 900,  path: "M40,780 L280,780 L280,1000 L40,1000 Z"  },
    { id: "ES-J",  name: { de: "Jaén",      hu: "Jaén",      ro: "Jaén",      en: "Jaén"      }, labelX: 580, labelY: 780,  path: "M500,680 L700,680 L700,900 L500,900 Z"  },
    { id: "ES-MA", name: { de: "Málaga",    hu: "Málaga",    ro: "Malaga",    en: "Málaga"    }, labelX: 380, labelY: 1050, path: "M280,950 L560,950 L560,1150 L280,1150 Z" },
    { id: "ES-SE", name: { de: "Sevilla",   hu: "Sevilla",   ro: "Sevilla",   en: "Sevilla"   }, labelX: 280, labelY: 870,  path: "M40,780 L500,780 L500,960 L40,960 Z"    },
  ],

  // ── Aragón (ES-AR) ─── 3 provinces ────────────────────────────────────────
  "ES-AR": [
    { id: "ES-HU", name: { de: "Huesca",    hu: "Huesca",    ro: "Huesca",    en: "Huesca"    }, labelX: 500, labelY: 280,  path: "M40,40 L960,40 L960,550 L40,550 Z"      },
    { id: "ES-TE", name: { de: "Teruel",    hu: "Teruel",    ro: "Teruel",    en: "Teruel"    }, labelX: 500, labelY: 900,  path: "M40,800 L960,800 L960,1150 L40,1150 Z"  },
    { id: "ES-Z",  name: { de: "Zaragoza",  hu: "Zaragoza",  ro: "Zaragoza",  en: "Zaragoza"  }, labelX: 500, labelY: 680,  path: "M40,550 L960,550 L960,800 L40,800 Z"    },
  ],

  // ── Asturias (ES-AS) ─── 1 province (single-province region) ──────────────
  "ES-AS": [
    { id: "ES-O",  name: { de: "Asturien",  hu: "Asztúria",  ro: "Asturia",   en: "Asturias"  }, labelX: 500, labelY: 600,  path: "M40,40 L960,40 L960,1150 L40,1150 Z"   },
  ],

  // ── Islas Baleares (ES-IB) ─── 1 province (island group) ─────────────────
  "ES-IB": [
    { id: "ES-PM", name: { de: "Balearen",  hu: "Baleárok",  ro: "Baleare",   en: "Balearic Islands" }, labelX: 500, labelY: 600, path: "M40,40 L960,40 L960,1150 L40,1150 Z" },
  ],

  // ── Islas Canarias (ES-CN) ─── 2 provinces ────────────────────────────────
  "ES-CN": [
    { id: "ES-GC", name: { de: "Las Palmas",       hu: "Las Palmas",       ro: "Las Palmas",       en: "Las Palmas"        }, labelX: 500, labelY: 350,  path: "M40,40 L960,40 L960,700 L40,700 Z"      },
    { id: "ES-TF", name: { de: "Santa Cruz de Tenerife", hu: "Santa Cruz de Tenerife", ro: "Santa Cruz de Tenerife", en: "Santa Cruz de Tenerife" }, labelX: 500, labelY: 900, path: "M40,700 L960,700 L960,1150 L40,1150 Z" },
  ],

  // ── Cantabria (ES-CB) ─── 1 province ──────────────────────────────────────
  "ES-CB": [
    { id: "ES-S",  name: { de: "Kantabrien",hu: "Kantábria",  ro: "Cantabria", en: "Cantabria" }, labelX: 500, labelY: 600,  path: "M40,40 L960,40 L960,1150 L40,1150 Z"   },
  ],

  // ── Castilla-La Mancha (ES-CM) ─── 5 provinces ────────────────────────────
  "ES-CM": [
    { id: "ES-AB", name: { de: "Albacete",  hu: "Albacete",  ro: "Albacete",  en: "Albacete"  }, labelX: 760, labelY: 900,  path: "M600,700 L960,700 L960,1100 L600,1100 Z" },
    { id: "ES-CR", name: { de: "Ciudad Real",hu:"Ciudad Real",ro: "Ciudad Real",en: "Ciudad Real"},labelX: 400, labelY: 850, path: "M40,700 L600,700 L600,1100 L40,1100 Z"  },
    { id: "ES-CU", name: { de: "Cuenca",    hu: "Cuenca",    ro: "Cuenca",    en: "Cuenca"    }, labelX: 730, labelY: 450,  path: "M580,200 L960,200 L960,700 L580,700 Z"  },
    { id: "ES-GU", name: { de: "Guadalajara",hu:"Guadalajara",ro:"Guadalajara",en:"Guadalajara"}, labelX: 500, labelY: 250,  path: "M40,40 L580,40 L580,500 L40,500 Z"      },
    { id: "ES-TO", name: { de: "Toledo",    hu: "Toledo",    ro: "Toledo",    en: "Toledo"    }, labelX: 280, labelY: 650,  path: "M40,500 L600,500 L600,850 L40,850 Z"    },
  ],

  // ── Castilla y León (ES-CL) ─── 9 provinces ───────────────────────────────
  "ES-CL": [
    { id: "ES-AV", name: { de: "Ávila",     hu: "Ávila",     ro: "Avila",     en: "Ávila"     }, labelX: 420, labelY: 820,  path: "M300,700 L560,700 L560,960 L300,960 Z"  },
    { id: "ES-BU", name: { de: "Burgos",    hu: "Burgos",    ro: "Burgos",    en: "Burgos"    }, labelX: 570, labelY: 280,  path: "M420,40 L720,40 L720,560 L420,560 Z"    },
    { id: "ES-LE", name: { de: "León",      hu: "León",      ro: "León",      en: "León"      }, labelX: 220, labelY: 280,  path: "M40,40 L420,40 L420,560 L40,560 Z"      },
    { id: "ES-P",  name: { de: "Palencia",  hu: "Palencia",  ro: "Palencia",  en: "Palencia"  }, labelX: 510, labelY: 500,  path: "M420,200 L590,200 L590,700 L420,700 Z"  },
    { id: "ES-SA", name: { de: "Salamanca", hu: "Salamanca", ro: "Salamanca", en: "Salamanca" }, labelX: 230, labelY: 820,  path: "M40,650 L420,650 L420,1000 L40,1000 Z"  },
    { id: "ES-SG", name: { de: "Segovia",   hu: "Segovia",   ro: "Segovia",   en: "Segovia"   }, labelX: 590, labelY: 760,  path: "M560,650 L800,650 L800,920 L560,920 Z"  },
    { id: "ES-SO", name: { de: "Soria",     hu: "Soria",     ro: "Soria",     en: "Soria"     }, labelX: 760, labelY: 500,  path: "M720,200 L960,200 L960,750 L720,750 Z"  },
    { id: "ES-VA", name: { de: "Valladolid",hu:"Valladolid", ro:"Valladolid", en:"Valladolid" }, labelX: 380, labelY: 560,  path: "M230,400 L560,400 L560,700 L230,700 Z"  },
    { id: "ES-ZA", name: { de: "Zamora",    hu: "Zamora",    ro: "Zamora",    en: "Zamora"    }, labelX: 200, labelY: 580,  path: "M40,400 L310,400 L310,790 L40,790 Z"    },
  ],

  // ── Cataluña (ES-CT) ─── 4 provinces ──────────────────────────────────────
  "ES-CT": [
    { id: "ES-B",  name: { de: "Barcelona", hu: "Barcelona", ro: "Barcelona", en: "Barcelona" }, labelX: 430, labelY: 750,  path: "M40,550 L700,550 L700,960 L40,960 Z"    },
    { id: "ES-GI", name: { de: "Girona",    hu: "Girona",    ro: "Girona",    en: "Girona"    }, labelX: 680, labelY: 280,  path: "M400,40 L960,40 L960,550 L400,550 Z"    },
    { id: "ES-L",  name: { de: "Lleida",    hu: "Lleida",    ro: "Lleida",    en: "Lleida"    }, labelX: 260, labelY: 420,  path: "M40,40 L400,40 L400,820 L40,820 Z"      },
    { id: "ES-T",  name: { de: "Tarragona", hu: "Tarragona", ro: "Tarragona", en: "Tarragona" }, labelX: 600, labelY: 830,  path: "M400,700 L960,700 L960,1150 L400,1150 Z" },
  ],

  // ── Extremadura (ES-EX) ─── 2 provinces ───────────────────────────────────
  "ES-EX": [
    { id: "ES-BA", name: { de: "Badajoz",   hu: "Badajoz",   ro: "Badajoz",   en: "Badajoz"   }, labelX: 500, labelY: 820,  path: "M40,550 L960,550 L960,1150 L40,1150 Z"  },
    { id: "ES-CC", name: { de: "Cáceres",   hu: "Cáceres",   ro: "Cáceres",   en: "Cáceres"   }, labelX: 500, labelY: 280,  path: "M40,40 L960,40 L960,550 L40,550 Z"      },
  ],

  // ── Galicia (ES-GA) ─── 4 provinces ───────────────────────────────────────
  "ES-GA": [
    { id: "ES-C",  name: { de: "A Coruña",  hu: "A Coruña",  ro: "A Coruña",  en: "A Coruña"  }, labelX: 280, labelY: 230,  path: "M40,40 L560,40 L560,600 L40,600 Z"      },
    { id: "ES-LU", name: { de: "Lugo",      hu: "Lugo",      ro: "Lugo",      en: "Lugo"      }, labelX: 680, labelY: 280,  path: "M560,40 L960,40 L960,600 L560,600 Z"    },
    { id: "ES-OR", name: { de: "Ourense",   hu: "Ourense",   ro: "Ourense",   en: "Ourense"   }, labelX: 500, labelY: 870,  path: "M200,600 L800,600 L800,1150 L200,1150 Z" },
    { id: "ES-PO", name: { de: "Pontevedra",hu:"Pontevedra", ro:"Pontevedra", en:"Pontevedra" }, labelX: 180, labelY: 820,  path: "M40,580 L380,580 L380,1150 L40,1150 Z"  },
  ],

  // ── La Rioja (ES-RI) ─── 1 province ───────────────────────────────────────
  "ES-RI": [
    { id: "ES-LO", name: { de: "La Rioja",  hu: "La Rioja",  ro: "La Rioja",  en: "La Rioja"  }, labelX: 500, labelY: 600,  path: "M40,40 L960,40 L960,1150 L40,1150 Z"   },
  ],

  // ── Madrid (ES-MD) ─── 1 province ─────────────────────────────────────────
  "ES-MD": [
    { id: "ES-M",  name: { de: "Madrid",    hu: "Madrid",    ro: "Madrid",    en: "Madrid"    }, labelX: 500, labelY: 600,  path: "M40,40 L960,40 L960,1150 L40,1150 Z"   },
  ],

  // ── Murcia (ES-MU) ─── 1 province ─────────────────────────────────────────
  "ES-MU": [
    { id: "ES-MC", name: { de: "Murcia",    hu: "Murcia",    ro: "Murcia",    en: "Murcia"    }, labelX: 500, labelY: 600,  path: "M40,40 L960,40 L960,1150 L40,1150 Z"   },
  ],

  // ── Navarra (ES-NC) ─── 1 province ────────────────────────────────────────
  "ES-NC": [
    { id: "ES-NA", name: { de: "Navarra",   hu: "Navarra",   ro: "Navarra",   en: "Navarre"   }, labelX: 500, labelY: 600,  path: "M40,40 L960,40 L960,1150 L40,1150 Z"   },
  ],

  // ── País Vasco (ES-PV) ─── 3 provinces ────────────────────────────────────
  "ES-PV": [
    { id: "ES-BI", name: { de: "Biskaya",   hu: "Vizcaya",   ro: "Vizcaya",   en: "Biscay"    }, labelX: 180, labelY: 680,  path: "M40,400 L380,400 L380,960 L40,960 Z"    },
    { id: "ES-SS", name: { de: "Gipuzkoa",  hu: "Gipuzkoa",  ro: "Gipuzkoa",  en: "Gipuzkoa"  }, labelX: 760, labelY: 350,  path: "M540,40 L960,40 L960,700 L540,700 Z"    },
    { id: "ES-VI", name: { de: "Álava",     hu: "Álava",     ro: "Alava",     en: "Álava"     }, labelX: 430, labelY: 820,  path: "M200,650 L720,650 L720,1150 L200,1150 Z" },
  ],

  // ── Valencia (ES-VC) ─── 3 provinces ──────────────────────────────────────
  "ES-VC": [
    { id: "ES-A",  name: { de: "Alicante",  hu: "Alicante",  ro: "Alicante",  en: "Alicante"  }, labelX: 500, labelY: 930,  path: "M40,700 L960,700 L960,1150 L40,1150 Z"  },
    { id: "ES-CS", name: { de: "Castellón", hu: "Castellón", ro: "Castellon", en: "Castellón" }, labelX: 500, labelY: 250,  path: "M40,40 L960,40 L960,480 L40,480 Z"      },
    { id: "ES-V",  name: { de: "Valencia",  hu: "Valencia",  ro: "Valencia",  en: "Valencia"  }, labelX: 500, labelY: 600,  path: "M40,480 L960,480 L960,700 L40,700 Z"    },
  ],
};
