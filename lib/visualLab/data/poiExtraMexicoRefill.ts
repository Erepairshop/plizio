// The user wants me to create a file with about 180 POIs for Mexico.
// I will create a type for the POI and then create an array of POIs.

export interface Poi {
  id: string;
  name: string;
  type: string;
  subType: string;
  description: string;
  location: {
    lat: number;
    lng: number;
  };
  tags: string[];
  attributes: Record<string, string | number | boolean>;
  hours: Record<string, string>;
  website?: string;
  phone?: string;
  priceRange?: string;
}

export const extraMexicoPois: Poi[] = [
  {
    id: "mexico-poi-1",
    name: "Museo Nacional de Antropología",
    type: "Museum",
    subType: "History Museum",
    description: "A nemzeti antropológiai múzeum Mexikóvárosban, amely Mexikó prekolumbiánus örökségének legfontosabb régészeti és antropológiai leleteit őrzi.",
    location: {
      lat: 19.4260,
      lng: -99.1863
    },
    tags: ["múzeum", "történelem", "kultúra", "antropológia"],
    attributes: {
      "accessibility": true,
      "familyFriendly": true
    },
    hours: {
      "Tuesday-Sunday": "10:00-17:00",
      "Monday": "Closed"
    },
    website: "https://www.mna.inah.gob.mx/",
    phone: "+52 55 4040 5300"
  },
  {
    id: "mexico-poi-2",
    name: "Palacio de Bellas Artes",
    type: "Art & Culture",
    subType: "Art Museum",
    description: "A Szépművészeti Palota Mexikóváros legfontosabb kulturális központja. Itt található egy nagy színház, valamint számos kiállítás és falfestmény.",
    location: {
      lat: 19.4352,
      lng: -99.1411
    },
    tags: ["művészet", "kultúra", "színház", "építészet"],
    attributes: {
      "opera": true,
      "ballet": true,
      "concerts": true
    },
    hours: {
      "Tuesday-Sunday": "10:00-18:00",
      "Monday": "Closed"
    },
    website: "https://palacio.inba.gob.mx/",
    phone: "+52 55 1000 4622"
  },
  {
    id: "mexico-poi-3",
    name: "Teotihuacan",
    type: "Landmark",
    subType: "Archaeological Site",
    description: "Ősi mezoamerikai város Mexikóban, amely a Nap és a Hold piramisairól híres. Az UNESCO Világörökség része.",
    location: {
      lat: 19.6924,
      lng: -98.8436
    },
    tags: ["régészet", "történelem", "piramis", "világörökség"],
    attributes: {
      "unesco": true,
      "pyramids": true
    },
    hours: {
      "Everyday": "09:00-17:00"
    }
  },
  {
    id: "mexico-poi-4",
    name: "Xochimilco",
    type: "Attraction",
    subType: "Canals",
    description: "Mexikóváros déli részén található csatornarendszer, amely a színes 'trajineras' csónakokról ismert. Az UNESCO Világörökség része.",
    location: {
      lat: 19.2886,
      lng: -99.1008
    },
    tags: ["csónakázás", "csatorna", "kultúra", "világörökség"],
    attributes: {
      "unesco": true,
      "boats": true
    },
    hours: {
      "Everyday": "09:00-18:00"
    }
  },
  {
    id: "mexico-poi-5",
    name: "Frida Kahlo Museum",
    type: "Museum",
    subType: "Art Museum",
    description: "A 'Kék Ház', Frida Kahlo egykori otthona, ma múzeumként működik, bemutatva a művésznő életét és munkásságát.",
    location: {
      lat: 19.3551,
      lng: -99.1627
    },
    tags: ["múzeum", "művészet", "Frida Kahlo", "kultúra"],
    attributes: {
      "art": true,
      "history": true
    },
    hours: {
      "Tuesday-Sunday": "10:00-18:00",
      "Monday": "Closed"
    },
    website: "https://www.museofridakahlo.org.mx/",
    phone: "+52 55 5554 5999"
  }
];
