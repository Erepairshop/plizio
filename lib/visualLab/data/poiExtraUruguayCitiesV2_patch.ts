// @ts-nocheck
import { POI } from "./poi";

// Helper functions for Uruguay specific content
const getUruguayCitiesData = (id: string) => {
  switch (id) {
    case "montevideo-cities-v2":
      return {
        huDesc: "Montevideo, Uruguay fővárosa, a Río de la Plata torkolatánál elterülő vibráló metropolisz, amely az ország szíve. A város különleges hangulatát a gyarmati korból megmaradt épületek és a modern felhőkarcolók izgalmas ötvözete adja. A Ciudad Vieja, azaz az óváros szűk utcái számos történelmi kávézónak és kulturális intézménynek adnak otthont. A város élete szorosan kötődik a vízhez, a híres Rambla sétány pedig több kilométer hosszan kanyarog a tengerparton. A helyiek büszkék nyitott és befogadó kultúrájukra, ami a minden évben megrendezésre kerülő karneválokon is megmutatkozik.",
        huFacts: ["Alapítva: 1724-ben spanyol erődítményként.", "A Rambla a világ egyik leghosszabb folyamatos tengerparti sétánya.", "A városban található a híres Mercado del Puerto, az uruguayi gasztronómia fellegvára."]
      };
    case "ciudad-de-la-costa-cities-v2":
      return {
        huDesc: "Ciudad de la Costa egy dinamikusan fejlődő üdülőváros Montevideo közelében, amely az ország egyik legnépesebb központja. A város hosszú, homokos partjairól és nyugodt, családias légköréről ismert, így a fővárosiak kedvelt rekreációs övezete. Az elmúlt évtizedekben jelentős infrastrukturális fejlődésen ment keresztül, mára már modern szolgáltatásokkal és kényelmes lakónegyedekkel rendelkezik. Bár alapvetően lakóövezet, a nyári szezonban az idegenforgalom is fellendül a környéken. A város közelsége a nemzetközi repülőtérhez stratégiai fontosságot kölcsönöz neki a régióban.",
        huFacts: ["Népesség: Több mint 110 000 lakosával Uruguay egyik legnagyobb városa.", "Elhelyezkedés: A Carrasco nemzetközi repülőtér közvetlen közelében fekszik.", "Jelleg: Hosszú, összefüggő tengerparti településszerkezet."]
      };
    case "las-piedras-cities-v2":
      return {
        huDesc: "Las Piedras a szőlőtermesztés és a történelmi emlékezet központja, Canelones megye meghatározó városa. A település neve összefonódott az 1811-es las piedrasi csatával, amely döntő fontosságú volt az uruguayi függetlenségi mozgalom számára. A környező tájat szőlőültetvények jellemzik, a város pedig az ország egyik legfontosabb borászati régiójának kapuja. A helyi közösség erős gyökerekkel rendelkezik, amit a számtalan kulturális rendezvény és a megőrzött történelmi emlékhelyek is bizonyítanak. A város fejlődése szorosan követte Montevideo növekedését, ma pedig a térség ipari és kereskedelmi központja.",
        huFacts: ["Történelem: Az 1811-es las piedrasi csata helyszíne.", "Gazdaság: Uruguay borászati központjainak egyike.", "Földrajz: A fővárostól északra, stratégiai közlekedési csomópontban fekszik."]
      };
    default:
      return {
        huDesc: "Ez a város Uruguay gazdag kulturális és földrajzi örökségének egyik fontos állomása. A környék a mezőgazdasági termelés és a regionális kereskedelem szempontjából is kiemelt szerepet tölt be az ország életében. A lakosság hagyománytisztelete és a modern kihívásokhoz való alkalmazkodóképessége teszi a települést egyedülállóvá. Az itt élők számára fontos a közösségi élet és a helyi értékek megőrzése. A látogatók számára betekintést nyújt az igazi uruguayi életérzésbe, távol a nagyvárosok zajától.",
        huFacts: ["Régió: Canelones megye gazdasági vérkeringésének része.", "Kultúra: Hagyományos uruguayi életmódot tükröző közösség.", "Gazdaság: Fontos szerepet tölt be a helyi kereskedelemben."]
      };
  }
};

