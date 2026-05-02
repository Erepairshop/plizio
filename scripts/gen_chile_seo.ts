
import { POI } from "./poi";

export const generateChileContent = () => {
  const locations = [
    "Puerto de Iquique", "Puerto Coronel", "Puerto Lirquén", "Puerto San Vicente", "Puerto Ventanas",
    "Puerto Angamos", "Puerto de Mejillones", "Puerto Guacolda", "Puerto de Punta Arenas", "Puerto Chacabuco",
    "Puerto de Coquimbo", "Puerto de Arica", "Mina Chuquicamata", "Mina Escondida", "Mina El Teniente",
    "Mina Los Pelambres", "Mina Collahuasi", "Mina Radomiro Tomic", "Refineria Aconcagua", "Refineria Bío Bío",
    "Celulosa Arauco", "Celulosa Valdivia", "Complejo Altonorte", "Fundicion Paipote", "Planta Litio Salar Atacama",
    "Celulosa Laja", "Complejo Quintero-Puchuncaví", "Siderurgica Huachipato", "ASMAR Talcahuano", "Mina Spence"
  ];

  const getDesc = (name: string) => `Explorând ${name}, descoperim un nod esențial în economia statului Chile, vital pentru dezvoltarea regională și infrastructura națională. Această locație reprezintă un punct de referință în geografia K7, oferind elevilor ocazia de a analiza impactul resurselor naturale asupra societății și mediului înconjurător. Analiza activităților industriale din această zonă ne permite să înțelegem mai bine dinamica exporturilor și a tehnologiilor moderne utilizate în producție. Este un studiu de caz excelent pentru a vedea cum geografia și economia se împletesc într-un sistem complex. Prin această incursiune, elevii își consolidează cunoștințele despre rolul strategic al industriei chiliene în context global.`;

  const getFacts = (name: string) => [
    `Un centru industrial strategic situat în Chile, esențial pentru exporturi.`,
    `Analiză detaliată a infrastructurii și impactului său economic local.`,
    `Conectează resursele naturale cu piețele internaționale prin tehnologii avansate.`
  ];

  return locations.map(loc => ({
    name: loc,
    descriptionAdvanced: { ro: getDesc(loc) },
    factsAdvanced: { ro: getFacts(loc) }
  }));
};

console.log(JSON.stringify(generateChileContent(), null, 2));
