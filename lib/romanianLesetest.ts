// ─── ROMANIAN READING PASSAGES (Test de lectură) — Clasa I ─────────────────
// 20 passages with 3 questions each, age-appropriate for 6-7 year olds

import type { ReadingPassage } from "./languageTestTypes";

const PASSAGES: ReadingPassage[] = [
  // 1. Animals — pet dog
  {
    title: "Ana și Puf",
    text: "Ana are un câine mic pe nume Puf. Puf are blana albă și ochi negri. În fiecare zi, Ana îl duce pe Puf la plimbare în parc. Lui Puf îi place să alerge și să se joace cu mingea.",
    questions: [
      { type: "mcq", question: "Cum se numește câinele Anei?", options: ["Puf", "Rex", "Leu", "Miau"], correct: 0 },
      { type: "mcq", question: "Ce culoare are blana câinelui?", options: ["Albă", "Neagră", "Maro", "Galbenă"], correct: 0 },
      { type: "mcq", question: "Unde îl duce Ana pe Puf în fiecare zi?", options: ["În parc", "La școală", "La magazin", "La râu"], correct: 0 },
    ],
  },

  // 2. School life
  {
    title: "Ion la școală",
    text: "Ion merge la școală în fiecare dimineață. El are un ghiozdan roșu cu cărți și creioane colorate. Doamna învățătoare îi spune bună dimineața. Lui Ion îi place cel mai mult ora de desen.",
    questions: [
      { type: "mcq", question: "Ce culoare are ghiozdanul lui Ion?", options: ["Roșu", "Albastru", "Verde", "Galben"], correct: 0 },
      { type: "mcq", question: "Cine îi spune bună dimineața lui Ion?", options: ["Doamna învățătoare", "Mama", "Directorul", "Colegul"], correct: 0 },
      { type: "mcq", question: "Ce oră îi place cel mai mult lui Ion?", options: ["Ora de desen", "Ora de matematică", "Ora de sport", "Ora de muzică"], correct: 0 },
    ],
  },

  // 3. Family
  {
    title: "Familia Mariei",
    text: "Maria are o familie mare. Ea trăiește cu mama, tata și bunica. Bunica face cele mai bune prăjituri. Duminica, toată familia se adună la masă împreună.",
    questions: [
      { type: "mcq", question: "Cu cine trăiește Maria?", options: ["Cu mama, tata și bunica", "Cu frații ei", "Cu prietenii ei", "Singură"], correct: 0 },
      { type: "mcq", question: "Cine face cele mai bune prăjituri?", options: ["Bunica", "Mama", "Maria", "Tata"], correct: 0 },
      { type: "mcq", question: "Când se adună toată familia la masă?", options: ["Duminica", "Luni", "Sâmbăta", "Vinerea"], correct: 0 },
    ],
  },

  // 4. Seasons — Winter
  {
    title: "Omul de zăpadă",
    text: "Afară ninge și totul este alb. Andrei și Luca ies în curtea casei. Ei fac un om de zăpadă mare și rotund. Omul de zăpadă are un morcov în loc de nas și un fular galben.",
    questions: [
      { type: "mcq", question: "Ce fac Andrei și Luca în curte?", options: ["Fac un om de zăpadă", "Se urcă în copac", "Culeg flori", "Sapă grădina"], correct: 0 },
      { type: "mcq", question: "Ce are omul de zăpadă în loc de nas?", options: ["Un morcov", "O pietricică", "Un băț", "O nucă"], correct: 0 },
      { type: "mcq", question: "Ce culoare are fularul omului de zăpadă?", options: ["Galben", "Roșu", "Albastru", "Verde"], correct: 0 },
    ],
  },

  // 5. Food / Cooking
  {
    title: "Supa bunicii",
    text: "Elena ajută mama să facă supă. Ea spală morcovii și cartofii. Mama taie legumele și le pune în oală. Supa fierbe încet și miroase foarte bine. Seara, toată familia mănâncă supă caldă.",
    questions: [
      { type: "mcq", question: "Ce face Elena împreună cu mama?", options: ["Supă", "Prăjitură", "Salată", "Sucuri"], correct: 0 },
      { type: "mcq", question: "Ce spală Elena?", options: ["Morcovii și cartofii", "Fructele", "Farfuriile", "Paharele"], correct: 0 },
      { type: "mcq", question: "Când mănâncă familia supa?", options: ["Seara", "Dimineața", "La prânz", "Noaptea"], correct: 0 },
    ],
  },

  // 6. Playground / Sports
  {
    title: "Jocul cu mingea",
    text: "Mihai și Sofia se joacă în curtea școlii. Mihai dă cu mingea spre poartă. Sofia prinde mingea și aleargă repede. Ei se joacă împreună și râd mult. La sfârșit, sunt amândoi obosiți și fericiți.",
    questions: [
      { type: "mcq", question: "Unde se joacă Mihai și Sofia?", options: ["În curtea școlii", "În parc", "Acasă", "La piscină"], correct: 0 },
      { type: "mcq", question: "Ce face Sofia cu mingea?", options: ["O prinde și aleargă", "O aruncă departe", "O pierde", "O ascunde"], correct: 0 },
      { type: "mcq", question: "Cum se simt ei la sfârșit?", options: ["Obosiți și fericiți", "Triști și flămânzi", "Speriați și reci", "Supărați și înfometați"], correct: 0 },
    ],
  },

  // 7. Birthday
  {
    title: "Ziua de naștere",
    text: "Azi este ziua de naștere a Dariei. Ea împlinește șapte ani. Prietenii vin cu cadouri colorate și baloane. Mama aduce un tort mare cu lumânări. Daria suflă în lumânări și toți aplaudă.",
    questions: [
      { type: "mcq", question: "Câți ani împlinește Daria?", options: ["Șapte ani", "Șase ani", "Opt ani", "Cinci ani"], correct: 0 },
      { type: "mcq", question: "Ce aduc prietenii Dariei?", options: ["Cadouri și baloane", "Flori și cărți", "Tort și sucuri", "Jucării și bomboane"], correct: 0 },
      { type: "mcq", question: "Ce face Daria cu lumânările?", options: ["Suflă în ele", "Le aprinde", "Le sparge", "Le culege"], correct: 0 },
    ],
  },

  // 8. Nature — Forest
  {
    title: "Tudor în pădure",
    text: "Tudor merge cu tatăl lui în pădure. Ei văd copaci înalți și flori galbene. Un iepure mic sare prin iarbă și dispare repede. Tudor găsește o ghindă maro pe jos. El o pune în buzunar ca amintire.",
    questions: [
      { type: "mcq", question: "Cu cine merge Tudor în pădure?", options: ["Cu tatăl lui", "Cu mama lui", "Cu bunicul", "Cu colegii"], correct: 0 },
      { type: "mcq", question: "Ce animal văd ei în pădure?", options: ["Un iepure", "O vulpe", "Un urs", "O pasăre"], correct: 0 },
      { type: "mcq", question: "Ce găsește Tudor pe jos?", options: ["O ghindă", "O piatră", "O floare", "Un bețișor"], correct: 0 },
    ],
  },

  // 9. Friendship / Helping
  {
    title: "Ioana și Ema",
    text: "Ioana vede că prietena ei Ema plânge în curtea școlii. Ema și-a pierdut creionul preferat. Ioana îi dă Emei un creion nou, albastru. Ema zâmbește și o îmbrățișează pe Ioana. Ele devin cele mai bune prietene.",
    questions: [
      { type: "mcq", question: "De ce plânge Ema?", options: ["Și-a pierdut creionul", "A căzut și s-a lovit", "Nu știe lecția", "A uitat ghiozdanul acasă"], correct: 0 },
      { type: "mcq", question: "Ce îi dă Ioana Emei?", options: ["Un creion nou albastru", "O carte", "O radieră", "O bomboană"], correct: 0 },
      { type: "mcq", question: "Cum se termină povestea?", options: ["Ele devin cele mai bune prietene", "Ema pleacă acasă supărată", "Ioana uită de Ema", "Ele se ceartă"], correct: 0 },
    ],
  },

  // 10. Daily routine — Morning
  {
    title: "Dimineața lui Radu",
    text: "În fiecare dimineață, Radu se trezește la șapte. El se spală pe față și pe dinți. Apoi îmbracă uniforma lui albastră. Mama îi pregătește un pahar cu lapte și o chiflă. Radu mănâncă repede și pleacă la școală.",
    questions: [
      { type: "mcq", question: "La ce oră se trezește Radu?", options: ["La șapte", "La șase", "La opt", "La nouă"], correct: 0 },
      { type: "mcq", question: "Ce culoare are uniforma lui Radu?", options: ["Albastră", "Roșie", "Verde", "Neagră"], correct: 0 },
      { type: "mcq", question: "Ce îi pregătește mama lui Radu de mâncare?", options: ["Lapte și o chiflă", "Supă și pâine", "Iaurt și fructe", "Ouă și suc"], correct: 0 },
    ],
  },

  // 11. Farm animals
  {
    title: "La fermă",
    text: "Bunicul lui Alex are o fermă la țară. Pe fermă trăiesc vaci, oi și găini. Dimineața, Alex ajută bunicul să dea mâncare animalelor. Vacile mugesc și găinile cotcodăcesc. Alex iubește mult să petreacă timp la fermă.",
    questions: [
      { type: "mcq", question: "Unde are bunicul lui Alex o fermă?", options: ["La țară", "La oraș", "La munte", "La mare"], correct: 0 },
      { type: "mcq", question: "Ce face Alex dimineața la fermă?", options: ["Dă mâncare animalelor", "Se joacă cu câinele", "Doarme", "Citește o carte"], correct: 0 },
      { type: "mcq", question: "Ce animale trăiesc pe fermă?", options: ["Vaci, oi și găini", "Cai, porci și rațe", "Pisici, câini și iepuri", "Capre, măgari și gâște"], correct: 0 },
    ],
  },

  // 12. Seasons — Spring / Garden
  {
    title: "Grădina primăverii",
    text: "A venit primăvara și soarele strălucește. Ana și mama ei plantează flori în grădină. Ele sapă pământul și pun semințele cu grijă. Ploaia caldă ajută florile să crească. În curând, grădina va fi plină de culori.",
    questions: [
      { type: "mcq", question: "Ce anotimp a venit?", options: ["Primăvara", "Vara", "Toamna", "Iarna"], correct: 0 },
      { type: "mcq", question: "Ce plantează Ana și mama ei?", options: ["Flori", "Legume", "Copaci", "Iarbă"], correct: 0 },
      { type: "mcq", question: "Ce ajută florile să crească?", options: ["Ploaia caldă", "Vântul rece", "Zăpada", "Norii negri"], correct: 0 },
    ],
  },

  // 13. Transport / Travel
  {
    title: "Cu trenul la mare",
    text: "Vlad merge cu familia lui în vacanță la mare. Ei călătoresc cu trenul timp de două ore. Vlad privește pe geam și vede câmpuri verzi și sate mici. La mare, el vede pentru prima dată valuri mari. Vlad este foarte fericit.",
    questions: [
      { type: "mcq", question: "Unde merge Vlad cu familia lui?", options: ["La mare", "La munte", "La bunici", "La parc"], correct: 0 },
      { type: "mcq", question: "Cu ce călătoresc ei?", options: ["Cu trenul", "Cu mașina", "Cu avionul", "Cu autobuzul"], correct: 0 },
      { type: "mcq", question: "Cât timp durează călătoria cu trenul?", options: ["Două ore", "O oră", "Trei ore", "O zi întreagă"], correct: 0 },
    ],
  },

  // 14. Fairy tale — simple
  {
    title: "Ema și puiul de pasăre",
    text: "A fost odată o fetiță pe nume Ema. Ea trăia cu bunica ei într-o căsuță la marginea pădurii. Într-o zi, Ema culege flori frumoase pentru bunica bolnavă. Pe drum, ea găsește un pui de pasăre căzut din cuib. Ema îl duce acasă și îl îngrijește cu drag.",
    questions: [
      { type: "mcq", question: "Cu cine trăia Ema?", options: ["Cu bunica ei", "Cu părinții ei", "Singură", "Cu frații ei"], correct: 0 },
      { type: "mcq", question: "De ce culege Ema flori?", options: ["Pentru bunica bolnavă", "Pentru a le vinde", "De dragul lor", "Pentru doamna învățătoare"], correct: 0 },
      { type: "mcq", question: "Ce găsește Ema pe drum?", options: ["Un pui de pasăre", "O pisică", "Un iepuraș", "O floare rară"], correct: 0 },
    ],
  },

  // 15. Evening routine
  {
    title: "Povestea de seară",
    text: "Seara, Luca face baie și se îmbracă în pijama. Mama îi citește o poveste despre un dragon prietenos. Luca ascultă cu atenție și pune multe întrebări. La final, el adoarme zâmbind. Visează la dragoni și la castele înalte.",
    questions: [
      { type: "mcq", question: "Ce face Luca seara înainte de culcare?", options: ["Face baie și se îmbracă în pijama", "Mănâncă și se uită la televizor", "Se joacă și citește singur", "Iese afară și aleargă"], correct: 0 },
      { type: "mcq", question: "Ce îi citește mama lui Luca?", options: ["O poveste despre un dragon", "O carte cu poezii", "O poveste cu iepuri", "O carte cu numere"], correct: 0 },
      { type: "mcq", question: "La ce visează Luca?", options: ["La dragoni și castele", "La școală și prieteni", "La plajă și mare", "La jucăriile lui"], correct: 0 },
    ],
  },

  // 16. Wild animals — Zoo
  {
    title: "La grădina zoologică",
    text: "Mihai vizitează grădina zoologică cu clasa lui. Ei văd un leu mare cu coamă portocalie. Leul rage tare și unii copii se sperie. Mihai nu se sperie, el privește cu curaj. Îi place cel mai mult elefantul cu trompa lungă.",
    questions: [
      { type: "mcq", question: "Unde merge Mihai cu clasa?", options: ["La grădina zoologică", "La pădure", "La fermă", "La muzeu"], correct: 0 },
      { type: "mcq", question: "Ce culoare are coama leului?", options: ["Portocalie", "Neagră", "Albă", "Maro"], correct: 0 },
      { type: "mcq", question: "Ce animal îi place cel mai mult lui Mihai?", options: ["Elefantul", "Leul", "Zebra", "Girafa"], correct: 0 },
    ],
  },

  // 17. Seasons — Autumn
  {
    title: "Frunzele toamnei",
    text: "Toamna, frunzele copacilor devin roșii, galbene și portocalii. Sofia și Radu adună frunze frumoase din parc. Ei fac un buchet mare de frunze colorate. Acasă, Sofia lipește frunzele pe o coală albă. Ea face un tablou frumos pe care îl dăruiește mamei.",
    questions: [
      { type: "mcq", question: "Ce culori au frunzele toamna?", options: ["Roșii, galbene și portocalii", "Verzi și albastre", "Albe și roz", "Negre și mov"], correct: 0 },
      { type: "mcq", question: "Ce fac Sofia și Radu cu frunzele?", options: ["Fac un buchet mare", "Le aruncă în apă", "Le ard", "Le pun în ghivece"], correct: 0 },
      { type: "mcq", question: "Cui îi dăruiește Sofia tabloul?", options: ["Mamei", "Doamnei învățătoare", "Prietenei ei", "Bunicii"], correct: 0 },
    ],
  },

  // 18. Helping at home
  {
    title: "Ion spală mașina",
    text: "Ion vrea să îl ajute pe tata să spele mașina. El aduce o găleată cu apă și un burete moale. Tata îl lasă pe Ion să spele roțile. Ion muncește serios și este mândru de el. La final, mașina strălucește în soare.",
    questions: [
      { type: "mcq", question: "Ce vrea să facă Ion?", options: ["Să ajute la spălat mașina", "Să conducă mașina", "Să repare mașina", "Să picteze mașina"], correct: 0 },
      { type: "mcq", question: "Ce spală Ion mai exact?", options: ["Roțile", "Geamurile", "Portierele", "Capota"], correct: 0 },
      { type: "mcq", question: "Cum se simte Ion după ce termină?", options: ["Mândru de el", "Supărat și obosit", "Trist că s-a murdarit", "Speriat de tata"], correct: 0 },
    ],
  },

  // 19. Food — Fruit at market
  {
    title: "La piață cu bunica",
    text: "Maria merge cu bunica la piață. Ei cumpără mere roșii, pere galbene și struguri mov. Bunica plătește la tejghea și primește restul. Acasă, Maria spală fructele frumos. Ea pune fructele într-un bol mare pe masă.",
    questions: [
      { type: "mcq", question: "Cu cine merge Maria la piață?", options: ["Cu bunica", "Cu mama", "Cu tata", "Cu prietena ei"], correct: 0 },
      { type: "mcq", question: "Ce fructe cumpără ele?", options: ["Mere, pere și struguri", "Banane, portocale și piersici", "Căpșuni, cireșe și prune", "Kiwi, mango și ananas"], correct: 0 },
      { type: "mcq", question: "Ce face Maria cu fructele acasă?", options: ["Le spală și le pune în bol", "Le mănâncă imediat", "Le ascunde în frigider", "Le dă câinelui"], correct: 0 },
    ],
  },

  // 20. Fairy tale — prince and frog
  {
    title: "Prințul și broasca",
    text: "A fost odată un prinț tânăr pe nume Andrei. El trăia într-un castel lângă un lac albastru. Într-o zi, el găsește o broască verde care vorbea. Broasca îi spune că este o prințesă fermecată. Andrei o ajută pe broască să devină din nou om.",
    questions: [
      { type: "mcq", question: "Cum se numea prințul din poveste?", options: ["Andrei", "Tudor", "Mihai", "Vlad"], correct: 0 },
      { type: "mcq", question: "Unde trăia prințul?", options: ["Într-un castel lângă un lac", "Într-o căsuță în pădure", "Într-un sat la câmpie", "Pe un munte înalt"], correct: 0 },
      { type: "mcq", question: "Cine era de fapt broasca verde?", options: ["O prințesă fermecată", "Un vrăjitor rău", "O zână bună", "Un animal obișnuit"], correct: 0 },
    ],
  },
];

/** Get a random reading passage for the given grade */
export function getRandomRomanianPassage(grade: number): ReadingPassage | null {
  if (grade !== 1) return null; // Only Clasa I for now
  const idx = Math.floor(Math.random() * PASSAGES.length);
  return PASSAGES[idx];
}

/** Get all passages (for testing) */
export function getAllRomanianPassages(): ReadingPassage[] {
  return PASSAGES;
}
