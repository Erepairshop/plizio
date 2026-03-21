// ─── ROMANIAN READING PASSAGES (Test de lectură) — Clasa I–VIII ───────────
// Texte de lectură pentru clasele 1–8, cu întrebări MCQ și de scriere

import type { ReadingPassage } from "./languageTestTypes";

const PASSAGES_CLASA_1: ReadingPassage[] = [
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

// ─── CLASA 2 ─── (4-5 propoziții · acțiune, personaje, cauzalitate simplă)
const PASSAGES_CLASA_2: ReadingPassage[] = [
  {
    title: "Ziua de tranzitie",
    text: "După ploaie, soarele strălucea iar în parc. Copii ajungeau să se joace pe iarba ud. Ionuț și prietenii lui alergau și râdeau cu bucurie. Ei jucau cu mingea într-un meci plin de veselie. Seara, toți plecau acasă obosiți dar fericiți.",
    questions: [
      { type: "mcq", question: "Ce s-a întâmplat înainte ca soarele să strălucească?", options: ["A nins", "A plouat", "A bătut vântul"], correct: 1 },
      { type: "mcq", question: "Unde se jucau copiii?", options: ["la școală", "în parc", "în casă"], correct: 1 },
      { type: "mcq", question: "Cum se simțeau copiii seara?", options: ["triști", "supărați", "obosiți dar fericiți"], correct: 2 },
    ],
  },
  {
    title: "Noul prieten al Mariei",
    text: "Maria era noua la școală și se simțea singură. În pauza de prânz, o fată cu codite roșii s-a așezat lângă ea. Se numea Andrada și i-a zâmbit frumos. Maria zâmbii și i-a spus povestea ei. Ele au devenit prietene bune și acum se joacă zi de zi împreună.",
    questions: [
      { type: "mcq", question: "De ce se simțea Maria singură?", options: ["era bolnavă", "era nouă la școală", "nu avea jucării"], correct: 1 },
      { type: "mcq", question: "Cine s-a așezat lângă Maria?", options: ["o doamnă", "Andrada", "fratele ei"], correct: 1 },
      { type: "mcq", question: "Ce sunt acum Maria și Andrada?", options: ["colege", "prietene", "rivale"], correct: 1 },
    ],
  },
  {
    title: "Aventura în pădure",
    text: "Vlad și tata lui au plecat într-o excursie în pădure. Vedeau copaci înalți și flori colorate. Brusc, au auzit un sunet ciudat și s-au oprit. Era doar un păsăruț micu care cânta. Vlad a descoperit un cuib frumos în crengura unui copac. Le-a mulțumit păsărului și tatei pentru ziua frumoasă.",
    questions: [
      { type: "mcq", question: "Cu cine a plecat Vlad în pădure?", options: ["cu mama", "cu tatăl", "cu prietenul"], correct: 1 },
      { type: "mcq", question: "Ce a auzit Vlad?", options: ["o mașină", "un cântec de păsăruț", "o ploaie"], correct: 1 },
      { type: "mcq", question: "Ce a descoperit Vlad în crengură?", options: ["o minge", "o frunză", "un cuib"], correct: 2 },
    ],
  },
  {
    title: "Ploaia în city",
    text: "Ploaia a început ieri seara și continua în plină forță. Străzile erau umede și gri. Copiii nu puteau să se joace afară. Dar Cristian a găsit o idee bună: jucau cu lego-uri pe covor. Fratele lui David l-a ajutat să construiască un castel frumos. Amândoi au fost fericiți toată ziua.",
    questions: [
      { type: "mcq", question: "Cum era vremea?", options: ["frumoasă", "înnorat", "ploios"], correct: 2 },
      { type: "mcq", question: "De ce nu puteau copiii să se joace afară?", options: ["era prea cald", "ploua", "era prea frig"], correct: 1 },
      { type: "mcq", question: "Ce au construit copiii?", options: ["o casă", "o minge", "un castel"], correct: 2 },
    ],
  },
  {
    title: "Cumpărăturile în piață",
    text: "Mama și Sofia au mers în piață pentru a cumpăra legume. Erau clementine portocalii, roșii coapte și broccoli verde. Sofia alegea cu grijă ce să ia. Ea plăcea legumele și fructele proaspete. În drum spre casă, au întâlnit o vecină bătrână. Mama i-a dat vechinei o punguță cu roșii.",
    questions: [
      { type: "mcq", question: "Cu cine a mers Sofia în piață?", options: ["cu tatăl", "cu mama", "cu bunica"], correct: 1 },
      { type: "mcq", question: "Ce feluri de mâncare au văzut?", options: ["carne", "legume și fructe", "pâine"], correct: 1 },
      { type: "mcq", question: "Ce a dat mama vechinei?", options: ["bani", "o punguță cu roșii", "o minge"], correct: 1 },
    ],
  },
  {
    title: "Ziua animalelor de companie",
    text: "La grădina publică, era o zi dedicată animalelor de companie. Copii și părinți veneau cu câini și pisici. Alex a adus câinele lui, Nero, care era negru și pufos. Nero a jucat cu alți câini și s-a bucurat mult. La finale, au fost premii pentru cel mai drăguț și cel mai curajos animal.",
    questions: [
      { type: "mcq", question: "Unde era ziua animalelor?", options: ["la casă", "în parc", "la grădina publică"], correct: 2 },
      { type: "mcq", question: "Cum se numea câinele lui Alex?", options: ["Rex", "Nero", "Ţapuț"], correct: 1 },
      { type: "mcq", question: "Ce au fost acordate la final?", options: ["grame", "premii", "bani"], correct: 1 },
    ],
  },
  {
    title: "Lucruri noi în bibliotecă",
    text: "Biblioteca școlii a primit cărți noi și frumoase. Dacă sunt desenate cu culori vii și poveștile-s interesante. Petru și Lena au cerut lor pentru împrumut. Ei au citit povestea unui moșneag și a unui moișicer. Cartea a fost atât de frumoasă înât au vrut să o citească din nou.",
    questions: [
      { type: "mcq", question: "Cine a primit cărți noi?", options: ["casa", "biblioteca", "grădina"], correct: 1 },
      { type: "mcq", question: "Ce a făcut Petru și Lena?", options: ["au tras poza", "au citit o carte", "au jucat"], correct: 1 },
      { type: "mcq", question: "Despre cine era povestea?", options: ["un moș și o babe", "un moșneag și un moișicer", "doi prieteni"], correct: 1 },
    ],
  },
  {
    title: "Concertul din clasă",
    text: "Mihai și Rares au pregătit o surpriză pentru clasă. Ei au cântat o piesă frumoasă cu o vioară și o chitară. Întreaga clasă i-a ascultat cu atenție. După cântec, toți au aplaudat tare. Profesorul le-a zis că sunt talentați și i-a încurajat să participe la competiția de muzică.",
    questions: [
      { type: "mcq", question: "Cine au pregătit o surpriză?", options: ["fetele", "Mihai și Rares", "profesorul"], correct: 1 },
      { type: "mcq", question: "Cu ce instrumente au cântat?", options: ["pian și flaut", "vioară și chitară", "trompetă și toba"], correct: 1 },
      { type: "mcq", question: "La ce i-a încurajat profesorul?", options: ["la sport", "la pictat", "la muzică"], correct: 2 },
    ],
  },
  {
    title: "Atelierul de meșteșuguri",
    text: "La atelierul meșteșugurilor, copii învățau să facă lucruri frumoase. Anca a învățat să țese pe o mic-torn. Gabriel a pus săpun colorat. Toți au lucrat cu pasiune și grijă. Lucrurile lor au fost expuse pe masă. Părinții au venit și i-au admirat pe copii pentru creativitate.",
    questions: [
      { type: "mcq", question: "Ce au învățat copii la atelier?", options: ["a cânta", "a meșteri", "a construi"], correct: 1 },
      { type: "mcq", question: "Ce a învățat Anca?", options: ["a țese", "a vopsi", "a uda"], correct: 0 },
      { type: "mcq", question: "Cine a venit să vadă lucrurile?", options: ["profesori", "părinți", "directorii"], correct: 1 },
    ],
  },
  {
    title: "Noul vecin",
    text: "Familia Popescu s-a mutat în casa de lângă noi. Aveau un fiu pe nume Ionuț, ceva mai mare decât mine. Lui Ionuț îi plăceau jocurile și cartea. Am invitat pe Ionuț să se joace cu noi în curte. Acum noi trei ne jucam în fiecare zi și avem o prietenie frumoasă.",
    questions: [
      { type: "mcq", question: "Ce s-a întâmplat?", options: ["a plecat o familie", "s-a mutat o familie", "a venit o familie"], correct: 1 },
      { type: "mcq", question: "Cum se numea fiul?", options: ["Dumitru", "Ionuț", "Adrian"], correct: 1 },
      { type: "mcq", question: "Ce fac noi trei acum?", options: ["studiază", "se joaca", "cântă"], correct: 1 },
    ],
  },
  {
    title: "Sărbătoarea școlii",
    text: "În luna mai, școala noastră a organizat o sărbătoare mare. Copii au pregătit dansuri și cântecuri frumoase. Părinții au venit și au adus dulcuri și sucuri pentru toți. Pe scenă, fiecare clasă a arătat talentele ei. La final, am mâncat și am dansat toată ziua. A fost cea mai frumoasă zi din an!",
    questions: [
      { type: "mcq", question: "Când a fost sărbătoarea?", options: ["martie", "martie", "mai"], correct: 2 },
      { type: "mcq", question: "Ce au pregătit copii?", options: ["jucării", "dansuri și cântecuri", "mâncare"], correct: 1 },
      { type: "mcq", question: "Ce au adus părinții?", options: ["flori", "dulcuri și sucuri", "prezente"], correct: 1 },
    ],
  },
];

// ─── CLASA 3 ─── (6-7 propoziții · complex detalii, descrieri, aventuri)
const PASSAGES_CLASA_3: ReadingPassage[] = [
  {
    title: "Calamitățile din grădină",
    text: "Bunicul meu avea o grădină frumoasă plină cu flori și legume. De curând, un maidanez prost a intrat în grădină și a distrus o mulțime de plantații. Bunicul era supărat, dar a decis să repare totul. A plantato legume noi și flori colorate. Peste o lună, grădina era din nou frumoasă și plin de viață.",
    questions: [
      { type: "mcq", question: "Ce se întâmplă în grădină?", options: ["a crescut o gândac", "un câine a distrus totul", "ploua prea mult"], correct: 1 },
      { type: "typing", question: "Ce a făcut bunicul pentru a repara?", answer: ["a plantat legume și flori", "a replantat"] },
    ],
  },
  {
    title: "Excursia de trei zile",
    text: "Clasa a patra a organizat o excursie de trei zile în munți. Am mers cu autobuzul prin peisaje frumoase. Nopți le-am petrecut în cabine de piatră. A doua zi am urcat pe un vârf și am văzut vedere minunată peste pădure. Seara am stătut la foc și am cântat cântecuri frumoase. A fost cea mai reușită aventură a anului!",
    questions: [
      { type: "mcq", question: "Cât timp a durat excursia?", options: ["o zi", "două zile", "trei zile"], correct: 2 },
      { type: "typing", question: "Unde au dormit copiii?", answer: ["în cabine de piatră", "cabine"] },
    ],
  },
  {
    title: "Ziua de naștere surpriză",
    text: "Tata meu avea ziua de naștere și mama a plănuit o surpriză. A invitat bunicii, unchiul și verișorii la o masa de sărbătoare. Mama a gătit o ciorba delicioasă, fripturi suculente și o prăjitură cu ciocolată. După masa, am cântat și am dansa. Tata a zâmbit toată ziua și a spus că e cea mai frumoasă zilă din viața lui.",
    questions: [
      { type: "mcq", question: "Cine a plănuit surpriza?", options: ["tata", "mama", "bunicii"], correct: 1 },
      { type: "typing", question: "Ce a gătit mama?", answer: ["ciorba, fripturi și prăjitură", "ciorba și prăjitură"] },
    ],
  },
  {
    title: "Călătoria cu trenul",
    text: "Am mers cu familia la mare cu trenul. Știeam că aburul din locomotivă este puternic și glas trenului este tare. Am privit prin geam la peisaje care se-ntârziau. Am văzut plaje, păduri și case mici. După patru ore, am ajuns la stațiune. Odată la plajă, am aleargă în apă și am dansat în nisip până noaptea.",
    questions: [
      { type: "mcq", question: "Cum au călătorit la mare?", options: ["cu mașina", "cu avionul", "cu trenul"], correct: 2 },
      { type: "typing", question: "Ce au văzut prin geamul trenului?", answer: ["plaje, păduri și case", "peisaje"] },
    ],
  },
  {
    title: "Marile descoperiri ale Annei",
    text: "Anna era o copilă curioasă care iubea să descopere lucruri noi. Într-un dimineață, a găsit o hartă veche sub paturile bunicii. Harta arăta o comoară ascunsă în gradina. Anna a chemat pe toți prietenii și au început să caute. După ore de groapa, au găsit o cutie cu pietre prețioase și monede vechi. A fost cea mai grozavă aventură!",
    questions: [
      { type: "mcq", question: "Ce a găsit Anna?", options: ["o minge", "o hartă veche", "o carte"], correct: 1 },
      { type: "typing", question: "Ce era pe hartă?", answer: ["o comoară", "comoară ascunsă"] },
    ],
  },
  {
    title: "Ploaia de vară",
    text: "Vara aceasta a fost foarte fierbinte și uscat. Copiii și animalele sufereau de cald. Oamenii spuneau că trebuie să vină ploaia. O noapte, norii negri au apărut pe cer și fulgerele au crăpat norii. A venit o ploaie torențială care a adus ușurare. După ploaie, aerul era proaspăt și iarba era mai verde.",
    questions: [
      { type: "mcq", question: "Ce se întâmplă cu vremea?", options: ["a fost rece", "a fost fierbinte", "a fost cald și uscat"], correct: 2 },
      { type: "typing", question: "Ce s-a întâmplat înainte de ploaie?", answer: ["au apărut nori negri", "fulgerul, nori"] },
    ],
  },
  {
    title: "Restaurantul nou",
    text: "Tatăl meu a deschis un restaurant nou în centrul orașului. Meniu era plin de mâncăruri tradiționale și moderne. Prima noapte au venit mulți oameni pentru a tasta mâncarea. Chefii au gătit cu o dedicație extraordinară. Clienții au fost bucuroși și au promis că se vor întoarce. Restaurantul a devenit rapid un loc favorit pentru familia Popescu.",
    questions: [
      { type: "mcq", question: "Ce a deschis tatăl?", options: ["o magazin", "un hotel", "un restaurant"], correct: 2 },
      { type: "typing", question: "Ce era pe meniu?", answer: ["mâncăruri tradiționale și moderne", "mâncăruri"] },
    ],
  },
  {
    title: "Competiția de dans",
    text: "Școala a organizat o competiție de dans pentru toți elevii. Fiecare clasă a pregătit o coreografie originală. Clasa mea a dansat o piesă modernă cu costume colorate și efecte de lumini. Am practicat zilnic timp de patru săptămâni. La final, am câștigat premiul întâi. Toată clasa era bucuroasă și mândră!",
    questions: [
      { type: "mcq", question: "Ce competiție a organizat școala?", options: ["de cântat", "de dans", "de sport"], correct: 1 },
      { type: "typing", question: "Cât timp au practicat?", answer: ["patru săptămâni", "o lună"] },
    ],
  },
  {
    title: "Cartea misterioasă",
    text: "Pe drumul spre casă, am găsit o cartea veche ascunsă sub o bancă. Pe copertă scria 'Aventuri in piramidele Egiptului'. Am deschis-o cu curiozitate și am citit primele pagini. Cartea era atât de captivantă încat nu puteam lasa-o. Am citit-o în trei nopți și am visat cu piramidele și faraonii. Cartea a fost cel mai bun tezaur pe care l-am găsit vreodată!",
    questions: [
      { type: "mcq", question: "Unde a găsit cartea?", options: ["la bibliotecă", "sub o bancă", "în casă"], correct: 1 },
      { type: "typing", question: "Cine era în cartea?", answer: ["piramidele și faraonii", "faraonii"] },
    ],
  },
  {
    title: "Grădina de zarzavaturi",
    text: "Bunica și-a amestecat o grădină de zarzavaturi cu ajutorul nepoților. Am săpat pământul, am plantat semințe și am uda constant. După câteva luni, grădina era plină cu roșii roșii, castraveți verzi și morcovi portocalii. Am ajutat la cules și am mâncat legume proaspete la cina. Fusese cea mai frumoasă lecție despre agricultură!",
    questions: [
      { type: "mcq", question: "Cu cine a făcut grădina?", options: ["tatăl", "bunica", "profesorul"], correct: 1 },
      { type: "typing", question: "Ce legume au crescut?", answer: ["roșii, castraveți și morcovi", "legume"] },
    ],
  },
  {
    title: "Concertul simfonic",
    text: "Mama a luat-o la un concert simfonic în sala de concerte. Orchestra a cântat simfonii frumoase de Mozart și Beethoven. Muzica era atât de puternică și frumoasă, încât am încetat respir. Violonistul principal era extraordinar cu sotul lui care cânta pian. După concert, am aplaudat timp de zece minute. Așa mi-a plăcut muzica clasică!",
    questions: [
      { type: "mcq", question: "Unde a fost concertul?", options: ["la casă", "la teatru", "în sala de concerte"], correct: 2 },
      { type: "typing", question: "Cine au compus simfoniile?", answer: ["Mozart și Beethoven", "Mozart"] },
    ],
  },
];

// ─── CLASA 4–8: TODO Texte vor fi adăugate mai târziu

const ROMANIAN_PASSAGES_BY_CLASA: Record<number, ReadingPassage[]> = {
  1: PASSAGES_CLASA_1,
  2: PASSAGES_CLASA_2,
  3: PASSAGES_CLASA_3,
  4: [],
  5: [],
  6: [],
  7: [],
  8: [],
};

/** Get a random reading passage for the given grade */
export function getRandomRomanianPassage(grade: number): ReadingPassage | null {
  const passages = ROMANIAN_PASSAGES_BY_CLASA[grade];
  if (!passages || passages.length === 0) return null;
  const idx = Math.floor(Math.random() * passages.length);
  return passages[idx];
}

/** Get all passages for a given grade */
export function getAllRomanianPassages(grade: number): ReadingPassage[] {
  return ROMANIAN_PASSAGES_BY_CLASA[grade] || [];
}
