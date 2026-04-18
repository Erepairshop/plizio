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
      { type: "mcq", question: "Ce a făcut bunicul pentru a repara grădina?", options: ["A construit un gard", "A plantat legume și flori noi", "A chemat medicul veterinar", "A vândut grădina"], correct: 1 },
    ],
  },
  {
    title: "Excursia de trei zile",
    text: "Clasa a patra a organizat o excursie de trei zile în munți. Am mers cu autobuzul prin peisaje frumoase. Nopți le-am petrecut în cabine de piatră. A doua zi am urcat pe un vârf și am văzut vedere minunată peste pădure. Seara am stătut la foc și am cântat cântecuri frumoase. A fost cea mai reușită aventură a anului!",
    questions: [
      { type: "mcq", question: "Cât timp a durat excursia?", options: ["o zi", "două zile", "trei zile"], correct: 2 },
      { type: "mcq", question: "Unde au dormit copiii noaptea?", options: ["La hotel", "Sub cerul liber", "În cabine de piatră", "La pensiune"], correct: 2 },
    ],
  },
  {
    title: "Ziua de naștere surpriză",
    text: "Tata meu avea ziua de naștere și mama a plănuit o surpriză. A invitat bunicii, unchiul și verișorii la o masa de sărbătoare. Mama a gătit o ciorba delicioasă, fripturi suculente și o prăjitură cu ciocolată. După masa, am cântat și am dansa. Tata a zâmbit toată ziua și a spus că e cea mai frumoasă zilă din viața lui.",
    questions: [
      { type: "mcq", question: "Cine a plănuit surpriza?", options: ["tata", "mama", "bunicii"], correct: 1 },
      { type: "mcq", question: "Ce mâncare a gătit mama?", options: ["Pizza și salate", "Ciorbă, fripturi și prăjitură", "Sandvișuri și fructe", "Supă și deserturi"], correct: 1 },
    ],
  },
  {
    title: "Călătoria cu trenul",
    text: "Am mers cu familia la mare cu trenul. Știeam că aburul din locomotivă este puternic și glas trenului este tare. Am privit prin geam la peisaje care se-ntârziau. Am văzut plaje, păduri și case mici. După patru ore, am ajuns la stațiune. Odată la plajă, am aleargă în apă și am dansat în nisip până noaptea.",
    questions: [
      { type: "mcq", question: "Cum au călătorit la mare?", options: ["cu mașina", "cu avionul", "cu trenul"], correct: 2 },
      { type: "mcq", question: "Ce au văzut prin geamul trenului?", options: ["Munți și lacuri", "Plaje, păduri și case mici", "Câmpuri și fabrici", "Doar cerul albastru"], correct: 1 },
    ],
  },
  {
    title: "Marile descoperiri ale Annei",
    text: "Anna era o copilă curioasă care iubea să descopere lucruri noi. Într-un dimineață, a găsit o hartă veche sub paturile bunicii. Harta arăta o comoară ascunsă în gradina. Anna a chemat pe toți prietenii și au început să caute. După ore de groapa, au găsit o cutie cu pietre prețioase și monede vechi. A fost cea mai grozavă aventură!",
    questions: [
      { type: "mcq", question: "Ce a găsit Anna?", options: ["o minge", "o hartă veche", "o carte"], correct: 1 },
      { type: "mcq", question: "Ce arăta harta?", options: ["Un castel vechi", "O comoară ascunsă", "O insulă îndepărtată", "Un tunel secret"], correct: 1 },
    ],
  },
  {
    title: "Ploaia de vară",
    text: "Vara aceasta a fost foarte fierbinte și uscat. Copiii și animalele sufereau de cald. Oamenii spuneau că trebuie să vină ploaia. O noapte, norii negri au apărut pe cer și fulgerele au crăpat norii. A venit o ploaie torențială care a adus ușurare. După ploaie, aerul era proaspăt și iarba era mai verde.",
    questions: [
      { type: "mcq", question: "Ce se întâmplă cu vremea?", options: ["a fost rece", "a fost fierbinte", "a fost cald și uscat"], correct: 2 },
      { type: "mcq", question: "Ce s-a întâmplat înainte de ploaie?", options: ["A strălucit soarele puternic", "Au apărut nori negri pe cer", "A bătut vântul puternic", "S-au deschis toate ferestrele"], correct: 1 },
    ],
  },
  {
    title: "Restaurantul nou",
    text: "Tatăl meu a deschis un restaurant nou în centrul orașului. Meniu era plin de mâncăruri tradiționale și moderne. Prima noapte au venit mulți oameni pentru a tasta mâncarea. Chefii au gătit cu o dedicație extraordinară. Clienții au fost bucuroși și au promis că se vor întoarce. Restaurantul a devenit rapid un loc favorit pentru familia Popescu.",
    questions: [
      { type: "mcq", question: "Ce a deschis tatăl?", options: ["o magazin", "un hotel", "un restaurant"], correct: 2 },
      { type: "mcq", question: "Ce fel de mâncare era pe meniu?", options: ["Numai pizza și paste", "Mâncăruri tradiționale și moderne", "Fructe de mare exclusiv", "Numai salate și supe"], correct: 1 },
    ],
  },
  {
    title: "Competiția de dans",
    text: "Școala a organizat o competiție de dans pentru toți elevii. Fiecare clasă a pregătit o coreografie originală. Clasa mea a dansat o piesă modernă cu costume colorate și efecte de lumini. Am practicat zilnic timp de patru săptămâni. La final, am câștigat premiul întâi. Toată clasa era bucuroasă și mândră!",
    questions: [
      { type: "mcq", question: "Ce competiție a organizat școala?", options: ["de cântat", "de dans", "de sport"], correct: 1 },
      { type: "mcq", question: "Cât timp au practicat pentru competiție?", options: ["Două zile", "O săptămână", "Două săptămâni", "Patru săptămâni"], correct: 3 },
    ],
  },
  {
    title: "Cartea misterioasă",
    text: "Pe drumul spre casă, am găsit o cartea veche ascunsă sub o bancă. Pe copertă scria 'Aventuri in piramidele Egiptului'. Am deschis-o cu curiozitate și am citit primele pagini. Cartea era atât de captivantă încat nu puteam lasa-o. Am citit-o în trei nopți și am visat cu piramidele și faraonii. Cartea a fost cel mai bun tezaur pe care l-am găsit vreodată!",
    questions: [
      { type: "mcq", question: "Unde a găsit cartea?", options: ["la bibliotecă", "sub o bancă", "în casă"], correct: 1 },
      { type: "mcq", question: "Despre ce era cartea?", options: ["Regi și cavaleri medievali", "Piramidele și faraonii Egiptului", "Dragoni și vrăjitori", "Pirați și comori marine"], correct: 1 },
    ],
  },
  {
    title: "Grădina de zarzavaturi",
    text: "Bunica și-a amestecat o grădină de zarzavaturi cu ajutorul nepoților. Am săpat pământul, am plantat semințe și am uda constant. După câteva luni, grădina era plină cu roșii roșii, castraveți verzi și morcovi portocalii. Am ajutat la cules și am mâncat legume proaspete la cina. Fusese cea mai frumoasă lecție despre agricultură!",
    questions: [
      { type: "mcq", question: "Cu cine a făcut grădina?", options: ["tatăl", "bunica", "profesorul"], correct: 1 },
      { type: "mcq", question: "Ce legume au crescut în grădină?", options: ["Mere și pere", "Ceapă și usturoi", "Roșii, castraveți și morcovi", "Dovleci și fasole"], correct: 2 },
    ],
  },
  {
    title: "Concertul simfonic",
    text: "Mama a luat-o la un concert simfonic în sala de concerte. Orchestra a cântat simfonii frumoase de Mozart și Beethoven. Muzica era atât de puternică și frumoasă, încât am încetat respir. Violonistul principal era extraordinar cu sotul lui care cânta pian. După concert, am aplaudat timp de zece minute. Așa mi-a plăcut muzica clasică!",
    questions: [
      { type: "mcq", question: "Unde a fost concertul?", options: ["la casă", "la teatru", "în sala de concerte"], correct: 2 },
      { type: "mcq", question: "Cine au compus simfoniile cântate la concert?", options: ["Bach și Haydn", "Chopin și Liszt", "Mozart și Beethoven", "Vivaldi și Handel"], correct: 2 },
    ],
  },
];

// ─── CLASA 4 ─── (200-300 cuvinte · structuri complexe, teme diverse)
const PASSAGES_CLASA_4: ReadingPassage[] = [
  {
    title: "Max, prietenul meu cel mai bun",
    text: "Max nu este doar un simplu câine, ci un membru cu drepturi depline al familiei noastre. L-am primit cadou când am împlinit opt ani și de atunci suntem nedespărțiți. Este un Golden Retriever cu o blană aurie și mătăsoasă, care strălucește în lumina soarelui. Ochii lui căprui par să înțeleagă tot ce îi spun, iar coada lui nu se oprește niciodată din dat atunci când mă vede intrând pe poartă. În fiecare după-amiază, după ce îmi termin temele, mergem împreună în parcul din apropiere. Max adoră să alerge după mingea de tenis pe care i-o arunc cât pot de departe. Uneori, se întâlnește cu alți câini și se joacă împreună, dar mereu stă cu ochii pe mine, asigurându-se că nu m-am îndepărtat prea tare. Într-o zi, Max a dat dovadă de o inteligență uimitoare. Eram la bunici, lângă un râu, și mi-am scăpat șapca preferată în apă. Fără să stea pe gânduri, Max a sărit în râu, a înotat contra curentului și a recuperat șapca, aducând-o mândru la mal. Toată lumea l-a lăudat, iar eu i-am oferit o recompensă specială. Seara, Max doarme pe un covoraș lângă patul meu, iar prezența lui mă face să mă simt în siguranță. Este uimitor cum un animal poate oferi atâta iubire necondiționată și loialitate.",
    questions: [
      { type: "mcq", question: "Ce rasă este câinele Max?", options: ["Ciobănesc German", "Golden Retriever", "Labrador", "Beagle"], correct: 1 },
      { type: "mcq", question: "Când l-a primit naratorul pe Max?", options: ["La Crăciun", "Când a împlinit opt ani", "În prima zi de școală", "În vacanța de vară"], correct: 1 },
      { type: "mcq", question: "Ce obiect a recuperat Max din râu?", options: ["O minge", "O șapcă", "Un băț", "O jucărie"], correct: 1 },
      { type: "mcq", question: "Unde doarme Max noaptea?", options: ["În curte", "În bucătărie", "Pe un covoraș lângă patul naratorului", "Pe canapea"], correct: 2 },
      { type: "typing", question: "Cum se numește câinele din poveste?", answer: "Max" },
    ],
  },
  {
    title: "O zi de neuitat în pădurea de munte",
    text: "Sâmbăta trecută, am plecat împreună cu părinții mei într-o drumeție în pădurea de la poalele Munților Făgăraș. Aerul era proaspăt și răcoros, purtând cu el mirosul inconfundabil de rășină și pământ reavăn. Pe măsură ce urcam pe poteca îngustă, foșnetul frunzelor sub picioarele noastre crea o melodie relaxantă. Tata ne-a explicat că pădurea este plină de viață, chiar dacă nu vedem mereu animalele. Ne-am oprit lângă un izvor cu apă cristalină pentru a ne odihni. Apa era atât de rece încât ne-au înghețat degetele când am încercat să bem. În liniștea pădurii, am auzit dintr-odată un ciocănit ritmic. Era o ciocănitoare harnică, care căuta insecte în scoarța unui bătrân stejar. Mai târziu, am avut norocul să zărim o căprioară grațioasă care traversa o poieniță plină de flori sălbatice. S-a oprit pentru o secundă, ne-a privit cu ochii ei mari și negri, apoi a dispărut rapid printre copaci. Mama a făcut multe fotografii pentru a păstra aceste amintiri. La prânz, am mâncat sandvișuri pe o stâncă mare, admirând panorama văii de jos. Această zi în natură m-a învățat cât de important este să protejăm mediul înconjurător și să respectăm liniștea pădurii.",
    questions: [
      { type: "mcq", question: "Unde au mers în drumeție?", options: ["La mare", "În Munții Făgăraș", "În Delta Dunării", "La bunici"], correct: 1 },
      { type: "mcq", question: "Ce sunet au auzit în liniștea pădurii?", options: ["Un lup urlând", "O ciocănitoare", "Un râu curgând", "Vântul puternic"], correct: 1 },
      { type: "mcq", question: "Ce animal au zărit în poieniță?", options: ["Un urs", "O căprioară", "Un iepure", "O vulpe"], correct: 1 },
      { type: "mcq", question: "Unde au mâncat prânzul?", options: ["La un restaurant", "Pe o stâncă mare", "În mașină", "Lângă izvor"], correct: 1 },
      { type: "typing", question: "Ce pasăre căuta insecte în scoarța copacului?", answer: "ciocănitoarea" },
    ],
  },
  {
    title: "Vacanța la bunicii din Maramureș",
    text: "În fiecare vară, abia aștept să merg în vacanță la bunicii mei care locuiesc într-un sat pitoresc din Maramureș. Acolo, timpul pare să curgă mai lent, iar tradițiile sunt păstrate cu sfințenie. Casa bunicilor este veche, construită din lemn, cu o poartă imensă sculptată manual, specifică zonei. Bunicul este un meșter priceput și petrece mult timp în atelierul său, unde transformă bucățile de lemn în obiecte de artă. Bunica, pe de altă parte, este regina bucătăriei. Nimic nu se compară cu mirosul plăcintelor cu brânză proaspăt scoase din cuptor sau cu gustul laptelui proaspăt muls. Diminețile încep devreme la țară. Îl ajut pe bunicul să dea mâncare la găini și să aducă apă pentru văcuța noastră, Florica. După-amiezile sunt dedicate explorării dealurilor din împrejurimi, unde culeg fragi și mure împreună cu copiii din sat. Duminica, toată lumea se îmbracă în costume populare și merge la biserica de lemn din centrul satului. Este un spectacol de culori și broderii lucrate manual. Bunica mi-a promis că anul acesta mă va învăța și pe mine să cos câteva modele tradiționale pe o pânză albă. Această vacanță mă încarcă mereu cu energie și mă face să prețuiesc rădăcinile familiei mele.",
    questions: [
      { type: "mcq", question: "În ce zonă a României locuiesc bunicii?", options: ["Moldova", "Maramureș", "Banat", "Dobrogea"], correct: 1 },
      { type: "mcq", question: "Din ce material este construită casa bunicilor?", options: ["Cărămidă", "Lemn", "Piatră", "Beton"], correct: 1 },
      { type: "mcq", question: "Cum se numește văcuța bunicilor?", options: ["Joiana", "Florica", "Steluța", "Bălana"], correct: 1 },
      { type: "mcq", question: "Ce fac oamenii duminica în sat?", options: ["Merg la târg", "Se îmbracă în costume populare și merg la biserică", "Lucrează la câmp", "Stau acasă"], correct: 1 },
      { type: "typing", question: "Ce fructe culege naratorul de pe dealuri?", answer: "fragi și mure" },
    ],
  },
  {
    title: "Emoțiile primei zile de școală",
    text: "Prima zi de școală a sosit cu un amestec de entuziasm și emoții puternice. Deși sunt deja în clasa a patra, inima îmi bătea cu putere în timp ce îmi pregăteam ghiozdanul nou. Mi-am ales cu grijă hainele, dorind să arăt cât mai bine pentru reîntâlnirea cu colegii și doamna învățătoare. Curtea școlii era plină de copii veseli, părinți emoționați și buchete imense de flori colorate. Muzica răsuna în difuzoare, creând o atmosferă de sărbătoare. Când am văzut-o pe cea mai bună prietenă a mea, Maria, am alergat spre ea și ne-am îmbrățișat cu drag, povestindu-ne pe scurt aventurile din vacanța de vară. Doamna învățătoare ne-a întâmpinat cu un zâmbet cald la intrarea în clasă. Pe bănci ne așteptau manualele noi, cu miros proaspăt de tipar, și câte o mică surpriză dulce. Am vorbit despre planurile noastre pentru acest an școlar și despre cât de important este să fim uniți și să ne ajutăm reciproc. Deși vacanța s-a terminat, sunt fericit să mă întorc la școală, unde mă așteaptă noi provocări și lecții interesante. Știu că acest an va fi unul special, plin de descoperiri și prietenii consolidate.",
    questions: [
      { type: "mcq", question: "În ce clasă este naratorul?", options: ["Clasa a II-a", "Clasa a IV-a", "Clasa a III-a", "Clasa I"], correct: 1 },
      { type: "mcq", question: "Cum se numește cea mai bună prietenă a naratorului?", options: ["Elena", "Maria", "Ioana", "Andreea"], correct: 1 },
      { type: "mcq", question: "Ce se afla pe bănci în prima zi?", options: ["Doar caiete", "Manualele noi și o surpriză dulce", "Jucării", "Nimic"], correct: 1 },
      { type: "mcq", question: "Care era atmosfera în curtea școlii?", options: ["Tristă", "De sărbătoare", "Liniștită", "Agitată"], correct: 1 },
      { type: "typing", question: "Cine i-a întâmpinat pe copii cu un zâmbet la intrarea în clasă?", answer: "doamna învățătoare" },
    ],
  },
  {
    title: "Tradiții de Paște în familia noastră",
    text: "Sărbătoarea Paștelui este una dintre cele mai frumoase perioade din an, plină de lumină și bucurie. Pregătirile încep cu mult timp înainte, dar săptămâna mare este cea mai aglomerată. Mama și bunica se ocupă de curățenia generală, în timp ce eu și tata le ajutăm cu ce putem. Joia Mare este ziua dedicată înroșirii ouălor. Îmi place la nebunie să folosesc coji de ceapă și frunze de leuștean pentru a crea modele naturale pe ouăle fierbinți. Mirosul de cozonac proaspăt copt umple întreaga casă, vestind apropierea sărbătorii. În noaptea de Înviere, mergem cu toții la biserică pentru a lua Lumină. Este un moment solemn, când sute de lumânări se aprind în întuneric, iar oamenii își spun 'Hristos a înviat!'. Duminică dimineața, ne adunăm cu toții în jurul mesei festive. Începem masa prin ciocnirea ouălor roșii, un concurs pe care îl iau foarte în serios. Cel al cărui ou nu se sparge este declarat câștigător. Mâncăm drob, friptură de miel și pască cu brânză dulce. Dincolo de mâncarea delicioasă, Paștele este despre timpul petrecut cu cei dragi și despre recunoștință. Este o tradiție care ne unește și ne amintește de valorile importante ale vieții.",
    questions: [
      { type: "mcq", question: "În ce zi se înroșesc de obicei ouăle?", options: ["Luni", "Joia Mare", "Sâmbătă", "Vineri"], correct: 1 },
      { type: "mcq", question: "Ce folosește naratorul pentru a decora ouăle?", options: ["Vopsea chimică", "Coji de ceapă și frunze de leuștean", "Autocolante", "Markere"], correct: 1 },
      { type: "mcq", question: "Ce spun oamenii în noaptea de Înviere?", options: ["Bună seara!", "Hristos a înviat!", "La mulți ani!", "Sărbători fericite!"], correct: 1 },
      { type: "mcq", question: "Care este desertul tradițional menționat?", options: ["Tort de ciocolată", "Pască cu brânză dulce", "Înghețată", "Clătite"], correct: 1 },
      { type: "typing", question: "Ce activitate distractivă fac membrii familiei la începutul mesei de duminică?", answer: "ciocnitul ouălor" },
    ],
  },
  {
    title: "Ștefan cel Mare, apărătorul Moldovei",
    text: "Ștefan cel Mare a fost unul dintre cei mai importanți și iubiți domnitori ai Moldovei, conducând țara timp de 47 de ani, între 1457 și 1504. Este cunoscut în istorie pentru curajul său incredibil și pentru numeroasele bătălii purtate împotriva Imperiului Otoman, a polonezilor și a maghiarilor, pentru a păstra independența țării sale. Se spune că după fiecare victorie importantă, Ștefan ridica o biserică sau o mănăstire, lăsând în urmă o moștenire culturală și spirituală impresionantă. Printre cele mai faimoase ctitorii ale sale se numără Mănăstirea Putna, unde se află și mormântul său. Ștefan nu era doar un mare războinic, ci și un bun gospodar. El a întărit cetățile Moldovei, precum Cetatea Neamțului sau Cetatea Albă, și a încurajat comerțul și agricultura. Poporul l-a numit 'cel Mare' pentru faptele sale de vitejie și 'Sfânt' pentru evlavia sa. Chiar și marii săi dușmani îi recunoșteau calitățile de lider și strateg. Astăzi, statuile sale pot fi găsite în multe orașe din România și Republica Moldova, amintindu-ne de o perioadă de glorie a istoriei noastre. Povestea lui Ștefan cel Mare ne învață despre dragostea de țară, demnitate și perseverență în fața greutăților.",
    questions: [
      { type: "mcq", question: "Câți ani a condus Ștefan cel Mare Moldova?", options: ["20 de ani", "47 de ani", "10 ani", "35 de ani"], correct: 1 },
      { type: "mcq", question: "Ce obișnuia să facă Ștefan după o victorie?", options: ["Organiza o petrecere", "Ridica o biserică sau o mănăstire", "Pleca în vacanță", "Mărea taxele"], correct: 1 },
      { type: "mcq", question: "Unde se află mormântul lui Ștefan cel Mare?", options: ["La București", "La Mănăstirea Putna", "La Iași", "La Cetatea Neamțului"], correct: 1 },
      { type: "mcq", question: "Ce cetăți a întărit domnitorul?", options: ["Cetatea Neamțului și Cetatea Albă", "Castelul Bran", "Cetatea de Scaun a Sucevei", "Toate cele de mai sus"], correct: 0 },
      { type: "typing", question: "Cum l-a numit poporul pe Ștefan pentru faptele sale de vitejie?", answer: "cel Mare" },
    ],
  },
  {
    title: "O călătorie memorabilă cu trenul spre mare",
    text: "Vacanța de vară a început cu o aventură pe care o așteptam de luni de zile: prima mea călătorie lungă cu trenul spre litoralul Mării Negre. Ne-am trezit dis-de-dimineață, când soarele abia începea să mijească, și am plecat spre Gara de Nord. Gara era un furnicar de oameni cu geamantane mari, toți grăbiți să prindă trenul spre destinațiile lor. Când trenul nostru, 'Săgeata Albastră', a tras la peron, am simțit un fior de emoție. Ne-am ocupat locurile în compartimentul curat și spațios. Imediat ce trenul a pornit, am început să privesc pe fereastră. Peisajul se schimba rapid: de la blocurile înalte ale orașului, la câmpuri nesfârșite de floarea-soarelui care păreau să ne salute cu pălăriile lor galbene. Tata mi-a cumpărat o revistă și câteva gustări de la vagonul restaurant, dar eu eram prea captivat de drum. Am trecut peste podurile impunătoare de la Cernavodă, admirând Dunărea care curgea liniștită dedesubt. După câteva ore, aerul a început să miroasă a sare și a libertate. Când am zărit prima fâșie de albastru la orizont, am știut că am ajuns. Călătoria cu trenul a fost relaxantă și mi-a oferit ocazia să văd frumusețea țării mele într-un mod diferit.",
    questions: [
      { type: "mcq", question: "De unde a plecat trenul?", options: ["Gara de Est", "Gara de Nord", "Gara Centrală", "Aeroport"], correct: 1 },
      { type: "mcq", question: "Cum se numea trenul menționat?", options: ["Orient Express", "Săgeata Albastră", "Trenul Regal", "InterCity"], correct: 1 },
      { type: "mcq", question: "Ce peisaj a admirat naratorul pe fereastră?", options: ["Munți înalți", "Câmpuri de floarea-soarelui", "Păduri dese", "Deșert"], correct: 1 },
      { type: "mcq", question: "Peste ce râu au trecut pe podurile de la Cernavodă?", options: ["Olt", "Dunărea", "Mureș", "Prut"], correct: 1 },
      { type: "typing", question: "Ce a zărit naratorul la orizont, semn că au ajuns la destinație?", answer: "marea" },
    ],
  },
  {
    title: "Spectacolul toamnei în parcul orașului",
    text: "Toamna s-a instalat pe nesimțite în orașul nostru, transformând parcul într-un tablou viu, pictat în nuanțe de arămiu, auriu și roșu aprins. Aerul a devenit mai tăios, iar zilele s-au scurtat, dar frumusețea acestui anotimp este de neegalat. Într-o după-amiază de duminică, am ieșit la plimbare împreună cu sora mea mai mică. Aleile parcului erau acoperite de un covor gros de frunze uscate care foșneau plăcut la fiecare pas. Copiii se jucau veseli, aruncând frunzele în aer și râzând cu gura până la urechi. Am găsit câteva castane lucioase și ghinde pe care le-am adunat într-o punguță pentru proiectul de la școală. Veverițele grăbite alergau de pe un ram pe altul, făcându-și provizii pentru iarna ce va veni. Pe lacul din mijlocul parcului, câteva rațe sălbatice înotau liniștite, ignorând răcoarea apei. Oamenii se plimbau agale, înfofoliți în fulare colorate, bucurându-se de ultimele raze călduțe ale soarelui de octombrie. Deși toamna aduce cu ea ploi și vânt, momentele petrecute în parc ne amintesc de magia schimbării și de bogăția naturii. Este un timp al reflecției și al pregătirii pentru un nou ciclu al vieții.",
    questions: [
      { type: "mcq", question: "Ce culori predomină în parcul toamna?", options: ["Verde și albastru", "Arămiu, auriu și roșu", "Alb și gri", "Negru și mov"], correct: 1 },
      { type: "mcq", question: "Ce au adunat copiii pentru proiectul de la școală?", options: ["Flori uscate", "Castane și ghinde", "Pietre colorate", "Bețe"], correct: 1 },
      { type: "mcq", question: "Ce animale își făceau provizii pentru iarnă?", options: ["Câinii", "Veverițele", "Pisicile", "Păsările"], correct: 1 },
      { type: "mcq", question: "Unde înotau rațele sălbatice?", options: ["În râu", "Pe lacul din mijlocul parcului", "Într-o piscină", "Pe mare"], correct: 1 },
      { type: "typing", question: "Ce lună este menționată în text?", answer: "octombrie" },
    ],
  },
];

// ─── CLASA 5 ─── (250-400 cuvinte · structuri complexe, teme diverse)
const PASSAGES_CLASA_5: ReadingPassage[] = [
  {
    title: "Rex, prietenul meu necuvântător",
    text: "Rex nu este doar un simplu animal de companie, ci un membru loial al familiei noastre de mai bine de cinci ani. Este un Ciobănesc German impunător, cu o blană deasă în nuanțe de negru și cafeniu, care îi oferă un aspect nobil. L-am primit când era doar un ghemotoc de blană speriat, dar cu timpul a crescut și a devenit protectorul curții noastre. Inteligența lui Rex mă uimește în fiecare zi; pare să înțeleagă nu doar comenzile vocale, ci și stările mele sufletești. Când sunt trist, vine tiptil lângă mine și își așază capul greu pe genunchii mei, privindu-mă cu ochii lui căprui plini de compasiune. Diminețile noastre încep mereu cu o repriză de joacă în grădină, unde Rex aleargă cu o viteză incredibilă după discul de plastic. Deși este un câine de talie mare, este extrem de blând cu copiii mici din cartier, lăsându-i să-l mângâie fără nicio reținere. Într-o vară, în timpul unei drumeții la munte, Rex ne-a avertizat de prezența unui animal sălbatic în apropiere, lătrând într-un mod specific pe care nu-l mai auzisem până atunci. Datorită vigilenței sale, am reușit să ne îndepărtăm în siguranță. Această legătură specială dintre om și câine mi-a arătat ce înseamnă loialitatea fără limite și responsabilitatea de a îngriji o altă ființă vie.",
    questions: [
      { type: "mcq", question: "Ce rasă este câinele Rex?", options: ["Labrador", "Ciobănesc German", "Golden Retriever", "Rotweiler"], correct: 1 },
      { type: "mcq", question: "Cum reacționează Rex când naratorul este trist?", options: ["Începe să latre", "Fuge în grădină", "Își așază capul pe genunchii lui", "Doarme"], correct: 2 },
      { type: "mcq", question: "Ce s-a întâmplat în timpul drumeției la munte?", options: ["Rex s-a pierdut", "Rex a găsit o comoară", "Rex a avertizat familia de un animal sălbatic", "Rex a înotat într-un lac"], correct: 2 },
      { type: "mcq", question: "De cât timp face Rex parte din familie?", options: ["De un an", "De trei ani", "De mai bine de cinci ani", "De zece ani"], correct: 2 },
      { type: "typing", question: "Ce obiect urmărește Rex în timpul jocului din grădină?", answer: "discul de plastic" },
      { type: "typing", question: "Ce culoare au ochii lui Rex?", answer: "căprui" },
    ],
  },
  {
    title: "O zi de explorare în inima pădurii",
    text: "Pădurea de la marginea satului bunicilor a fost întotdeauna pentru mine un tărâm plin de mister și aventură. Într-o dimineață de sâmbătă, echipat cu un rucsac mic și o busolă veche, am decis să explorez potecile mai puțin umblate. Pe măsură ce înaintam, lumina soarelui se strecura cu greu prin coroanele dese ale stejarilor seculari, creând jocuri de umbre pe covorul de mușchi moale. Aerul era saturat de mirosul proaspăt de rășină și de pământ umed, un parfum pe care nicio metropolă nu-l poate reproduce. La un moment dat, am ajuns într-o poiană ascunsă, unde un pârâu susura vesel printre pietrele șlefuite de timp. M-am așezat pe un trunchi de copac căzut și am rămas nemișcat, ascultând simfonia naturii: ciocănitul ritmic al unei ciocănitori, foșnetul discret al unei șopârle prin frunziș și cântecul cristalin al privighetorilor. Am observat cu uimire o familie de căprioare care a ieșit la adăpat, fără să bănuiască prezența mea. Erau atât de grațioase încât mi-am ținut respirația pentru a nu le speria. Această experiență mi-a reamintit cât de fragil este echilibrul naturii și cât de important este să fim simpli observatori respectuoși în acest univers verde. Pădurea nu este doar o adunare de copaci, ci un organism viu care respiră și ne oferă liniștea de care avem atâta nevoie.",
    questions: [
      { type: "mcq", question: "Cu ce era echipat naratorul pentru explorare?", options: ["Cu o hartă și un GPS", "Cu un rucsac și o busolă veche", "Cu o bicicletă", "Cu o undiță"], correct: 1 },
      { type: "mcq", question: "Ce miros predomina în pădure?", options: ["Miros de flori de câmp", "Miros de rășină și pământ umed", "Miros de fum", "Miros de mare"], correct: 1 },
      { type: "mcq", question: "Ce animale a observat naratorul în poiană?", options: ["O familie de urși", "O familie de căprioare", "O vulpe", "Un mistreț"], correct: 1 },
      { type: "mcq", question: "Unde s-a așezat naratorul pentru a asculta natura?", options: ["Pe o stâncă", "Pe un trunchi de copac căzut", "În iarbă", "Lângă pârâu"], correct: 1 },
      { type: "typing", question: "Ce pasăre scotea un sunet ritmic în pădure?", answer: "ciocănitoarea" },
      { type: "typing", question: "Cum se numea instrumentul folosit pentru orientare?", answer: "busola" },
    ],
  },
  {
    title: "Vacanța la bunicii de la țară",
    text: "Nimic nu se compară cu sentimentul de libertate pe care îl trăiesc în fiecare vară la casa bunicilor mei, situată într-un sat liniștit de la poalele dealurilor. Acolo, viața se desfășoară după un alt ritm, dictat de răsăritul soarelui și de nevoile animalelor din ogradă. Bunicul meu, un om cu palmele bătătorite de muncă dar cu o inimă de aur, mă trezește în fiecare dimineață pentru a merge împreună la cosit. Deși munca este grea, satisfacția de a vedea căpițele de fân ridicându-se mândre sub soarele amiezii este imensă. Între timp, bunica pregătește în bucătăria de vară cele mai gustoase bucate pe care le-am gustat vreodată: plăcinte cu brânză sărată, mămăligă caldă și lapte proaspăt de la văcuța noastră. După-amiezile sunt rezervate scăldatului în râul din apropiere sau explorării livezii pline de meri și pruni. Seara, ne adunăm cu toții pe prispă, sub cerul înstelat, iar bunicul ne povestește întâmplări de demult, din vremea când satul era mult mai populat. Aceste momente petrecute la țară mă învață să prețuiesc simplitatea, munca cinstită și legătura profundă cu pământul. Este locul unde îmi încarc bateriile pentru un nou an școlar și unde mă simt cu adevărat acasă, înconjurat de dragostea necondiționată a bunicilor.",
    questions: [
      { type: "mcq", question: "Unde este situată casa bunicilor?", options: ["La munte", "La mare", "Într-un sat la poalele dealurilor", "În centrul orașului"], correct: 2 },
      { type: "mcq", question: "Ce activitate face naratorul împreună cu bunicul dimineața?", options: ["Merg la pescuit", "Merg la cosit", "Repară gardul", "Culeg fructe"], correct: 1 },
      { type: "mcq", question: "Ce pregătește bunica în bucătăria de vară?", options: ["Pizza", "Plăcinte cu brânză și mămăligă", "Paste", "Supă de pui"], correct: 1 },
      { type: "mcq", question: "Unde se adună familia seara?", options: ["În fața televizorului", "Pe prispă", "În grădină", "La râu"], correct: 1 },
      { type: "typing", question: "Ce fructe se găsesc în livada bunicilor?", answer: "meri și pruni" },
      { type: "typing", question: "Cum se numește locul unde stau bunicii seara să povestească?", answer: "prispa" },
    ],
  },
  {
    title: "Emoțiile primei zile de gimnaziu",
    text: "Trecerea în clasa a cincea a reprezentat pentru mine un prag important, plin de întrebări și o ușoară neliniște. Prima zi de școală nu mai era doar o simplă reîntoarcere, ci începutul unei noi etape: gimnaziul. Curtea școlii părea mai mare, iar noi, bobocii de clasa a cincea, ne priveam cu curiozitate noii profesori. Nu mai aveam o singură învățătoare care să ne ghideze la toate materiile, ci o întreagă echipă de dascăli, fiecare cu stilul său propriu. Dirigintele nostru, un profesor de istorie pasionat, ne-a întâmpinat cu un discurs încurajator, explicându-ne că această etapă ne va ajuta să devenim mai responsabili și mai independenți. Am primit cu entuziasm noul orar, care includea materii noi precum biologia și geografia, discipline care mă fascinau încă din clasele primare. Reîntâlnirea cu vechii colegi a fost plină de bucurie; ne-am împărtășit aventurile din vacanță și am făcut planuri pentru proiectele de grup. Deși volumul de muncă părea mai mare, eram hotărât să demonstrez că pot face față provocărilor. Această primă zi de gimnaziu mi-a oferit încrederea că, prin perseverență și curiozitate, voi reuși să descopăr tainele fiecărei materii și să leg prietenii și mai strânse.",
    questions: [
      { type: "mcq", question: "În ce clasă a trecut naratorul?", options: ["Clasa a IV-a", "Clasa a V-a", "Clasa a VI-a", "Clasa a I-a"], correct: 1 },
      { type: "mcq", question: "Ce materie predă noul diriginte?", options: ["Matematică", "Română", "Istorie", "Biologie"], correct: 2 },
      { type: "mcq", question: "Care sunt materiile noi menționate în text?", options: ["Muzica și desenul", "Biologia și geografia", "Informatica", "Limba engleză"], correct: 1 },
      { type: "mcq", question: "Cum s-a simțit naratorul în prima zi de gimnaziu?", options: ["Plictisit", "Speriat", "Entuziasmat și puțin neliniștit", "Indiferent"], correct: 2 },
      { type: "typing", question: "Cum se numesc elevii care încep o nouă etapă școlară?", answer: "boboci" },
      { type: "typing", question: "Ce document conține programul lecțiilor?", answer: "orarul" },
    ],
  },
  {
    title: "Magia Crăciunului în familie",
    text: "Dintre toate sărbătorile anului, Crăciunul ocupă un loc special în inima mea datorită atmosferei de poveste pe care o creează. Pregătirile încep încă de la începutul lunii decembrie, când orașul se îmbracă în haine de sărbătoare, cu mii de luminițe colorate. În casa noastră, tradiția împodobirii bradului este momentul cel mai așteptat. Ne adunăm cu toții în sufragerie, ascultăm colinde vechi și scoatem cutiile cu globuri de sticlă moștenite de la bunici. Mirosul de cetină proaspătă se împletește cu aroma de scorțișoară și portocale, creând o ambianță caldă și primitoare. Mama petrece ore întregi în bucătărie pregătind sarmale, friptură și cozonaci pufoși, în timp ce eu și tata ne ocupăm de decorarea exteriorului casei. În seara de Ajun, mergem la biserică, iar apoi ne așezăm cu emoție la masă, așteptând sunetul clopoțelului care vestește sosirea Moșului. Dincolo de cadourile frumos ambalate sub brad, Crăciunul este despre bunătate, iertare și recunoștință. Este momentul când ne amintim să fim mai buni unii cu alții și să prețuim timpul petrecut împreună. Această sărbătoare ne unește și ne oferă speranța unui nou început, plin de lumină și bucurie.",
    questions: [
      { type: "mcq", question: "Când încep pregătirile pentru Crăciun?", options: ["În noiembrie", "La începutul lunii decembrie", "În seara de Ajun", "După Revelion"], correct: 1 },
      { type: "mcq", question: "Ce arome sunt menționate ca făcând parte din atmosfera casei?", options: ["Miros de brad și flori", "Miros de cetină, scorțișoară și portocale", "Miros de ciocolată", "Miros de vanilie"], correct: 1 },
      { type: "mcq", question: "Ce mâncăruri tradiționale pregătește mama?", options: ["Pizza și paste", "Sarmale, friptură și cozonaci", "Salate", "Pește"], correct: 1 },
      { type: "mcq", question: "Care este semnificația profundă a Crăciunului conform textului?", options: ["Doar primirea cadourilor", "Bunătatea, iertarea și timpul cu cei dragi", "Mâncarea multă", "Vacanța de iarnă"], correct: 1 },
      { type: "typing", question: "Ce obiecte de sticlă sunt folosite pentru împodobirea bradului?", answer: "globuri" },
      { type: "typing", question: "Cum se numește seara de dinaintea Crăciunului?", answer: "Ajunul" },
    ],
  },
  {
    title: "Decebal, ultimul rege al Daciei",
    text: "Decebal a fost unul dintre cei mai remarcabili conducători din istoria antică a poporului nostru, domnind peste Dacia între anii 87 și 106 d.Hr. El a reușit să unească triburile dacice și să transforme regatul într-o putere militară și economică respectată chiar și de marele Imperiu Roman. Decebal nu a fost doar un strateg militar iscusit, ci și un diplomat abil, reușind pentru o perioadă să mențină pacea prin tratate avantajoase. Totuși, dorința Romei de a stăpâni bogățiile Daciei, în special minele de aur din Munții Apuseni, a dus la două războaie sângeroase împotriva împăratului Traian. Decebal a luptat cu o dârzenie legendară pentru libertatea poporului său, apărând cu prețul vieții cetățile din Munții Orăștiei, inclusiv capitala Sarmizegetusa Regia. Deși în final Dacia a fost cucerită, figura lui Decebal a rămas un simbol al rezistenței și al demnității naționale. Portretul său sculptat în stâncă la Cazanele Dunării este astăzi cea mai înaltă sculptură în piatră din Europa, amintindu-ne de curajul acestui rege care a preferat moartea în locul sclaviei. Povestea lui ne învață despre sacrificiul suprem pentru patrie și despre mândria de a aparține unui neam de luptători.",
    questions: [
      { type: "mcq", question: "Între ce ani a domnit Decebal?", options: ["50-100 d.Hr.", "87-106 d.Hr.", "100-150 d.Hr.", "10-50 d.Hr."], correct: 1 },
      { type: "mcq", question: "Cine a fost împăratul roman care a cucerit Dacia?", options: ["Iulius Cezar", "Augustus", "Traian", "Nero"], correct: 2 },
      { type: "mcq", question: "Ce bogății ale Daciei doreau romanii să stăpânească?", options: ["Grâul", "Sarea", "Minele de aur din Munții Apuseni", "Pădurile"], correct: 2 },
      { type: "mcq", question: "Unde se află cea mai înaltă sculptură în piatră a lui Decebal?", options: ["La București", "La Sarmizegetusa", "La Cazanele Dunării", "În Munții Orăștiei"], correct: 2 },
      { type: "typing", question: "Cum se numea capitala regatului dac?", answer: "Sarmizegetusa Regia" },
      { type: "typing", question: "Ce popor conducea regele Decebal?", answer: "dacii" },
    ],
  },
  {
    title: "O călătorie fascinantă cu trenul prin munți",
    text: "Călătoria cu trenul pe ruta București-Brașov rămâne una dintre experiențele mele preferate, oferind peisaje care îți taie respirația. Imediat ce trenul părăsește câmpia și începe să urce spre Valea Prahovei, atmosfera se schimbă radical. Privind pe fereastra mare a compartimentului, poți observa cum râul Prahova șerpuiește nervos printre stânci, însoțind calea ferată în ascensiunea sa. Munții Bucegi se înalță impunători de o parte, cu vârfurile lor adesea ascunse în nori, în timp ce Munții Baiului strălucesc în soare de cealaltă parte. Trenul trece prin tuneluri întunecate și peste viaducte înalte, oferind perspective spectaculoase asupra stațiunilor montane precum Sinaia sau Bușteni. Îmi place să ascult zgomotul ritmic al roților pe șine, care are un efect aproape hipnotic, permițându-mi să visez cu ochii deschiși la aventurile ce mă așteaptă. La Sinaia, am putut zări pentru o clipă silueta elegantă a Castelului Peleș, strălucind printre brazi. Călătoria cu trenul este mult mai relaxantă decât cea cu mașina, oferindu-ți libertatea de a te mișca și de a admira natura în toată splendoarea ei, fără stresul traficului. Este un mod ecologic și plin de farmec de a descoperi frumusețile României.",
    questions: [
      { type: "mcq", question: "Pe ce rută călătorește naratorul cu trenul?", options: ["București-Constanța", "București-Brașov", "Iași-Cluj", "Timișoara-Arad"], correct: 1 },
      { type: "mcq", question: "Ce râu însoțește calea ferată în ascensiunea spre munte?", options: ["Oltul", "Mureșul", "Prahova", "Siretul"], correct: 2 },
      { type: "mcq", question: "Ce castel celebru poate fi zărit la Sinaia?", options: ["Castelul Bran", "Castelul Peleș", "Castelul Corvinilor", "Cetatea Neamțului"], correct: 1 },
      { type: "mcq", question: "De ce preferă naratorul trenul în locul mașinii?", options: ["Este mai rapid", "Este mai ieftin", "Este mai relaxant și oferă peisaje mai frumoase", "Are mâncare mai bună"], correct: 2 },
      { type: "typing", question: "Cum se numește valea prin care trece trenul spre Brașov?", answer: "Valea Prahovei" },
      { type: "typing", question: "Ce munți se află de o parte a căii ferate, cu vârfurile în nori?", answer: "Bucegi" },
    ],
  },
  {
    title: "Spectacolul toamnei în natură",
    text: "Toamna este, fără îndoială, cel mai melancolic dar și cel mai colorat anotimp, transformând natura într-o veritabilă galerie de artă. Totul începe cu o schimbare subtilă a temperaturii și cu scurtarea vizibilă a zilelor, semn că vara și-a luat rămas bun. Frunzele copacilor, care până mai ieri erau de un verde crud, încep să îmbrace nuanțe incredibile de galben pai, portocaliu aprins și roșu purpuriu. În pădure, covorul de frunze uscate foșnește sub picioare, eliberând un miros specific de pământ reavăn și ciuperci. Este perioada recoltei, când livezile sunt pline de fructe coapte: mere parfumate, pere zemoase și struguri dulci care așteaptă să fie culeși. Păsările călătoare se adună în stoluri mari, pregătindu-se pentru lunga călătorie spre țările calde, umplând cerul cu strigătele lor de adio. Deși ploile devin mai dese și vântul mai tăios, toamna are o frumusețe aparte, invitându-ne la introspecție și la aprecierea bogăției pământului. Este un timp al pregătirii pentru somnul lung al iernii, un ciclu natural necesar pentru regenerarea vieții. Toamna ne învață că fiecare sfârșit poartă în sine sămânța unui nou început și că schimbarea poate fi extrem de frumoasă.",
    questions: [
      { type: "mcq", question: "Ce culori îmbracă frunzele toamna?", options: ["Verde și albastru", "Galben, portocaliu și roșu", "Alb și gri", "Negru"], correct: 1 },
      { type: "mcq", question: "Ce fructe sunt menționate ca fiind specifice recoltei de toamnă?", options: ["Căpșuni și cireșe", "Mere, pere și struguri", "Portocale și banane", "Pepeni"], correct: 1 },
      { type: "mcq", question: "Ce fac păsările călătoare în acest anotimp?", options: ["Își construiesc cuiburi", "Se pregătesc de plecare spre țările calde", "Încep să cânte mai tare", "Dorm"], correct: 1 },
      { type: "mcq", question: "Care este atmosfera generală a toamnei conform textului?", options: ["Veselă și agitată", "Melancolică dar colorată", "Plictisitoare", "Friguroasă și tristă"], correct: 1 },
      { type: "typing", question: "Ce fenomen natural determină scurtarea zilelor?", answer: "toamna" },
      { type: "typing", question: "Cum se numește perioada când se adună fructele și legumele?", answer: "recolta" },
    ],
  },
];

// ─── CLASA 6 ─── (300-450 cuvinte · structuri complexe, teme diverse)
const PASSAGES_CLASA_6: ReadingPassage[] = [
  {
    title: "Bruno, tovarășul meu de nădejde",
    text: "Bruno nu este doar un câine, ci un membru cu drepturi depline al familiei noastre, un suflet nobil care ne-a schimbat viața din momentul în care a pășit pragul casei noastre. Este un Golden Retriever cu o blană aurie, densă și mătăsoasă, care strălucește spectaculos sub razele soarelui de amiază. L-am primit cadou când am împlinit zece ani, iar de atunci am devenit de nedespărțit, împărțind împreună nenumărate aventuri și momente de bucurie pură. Ceea ce mă impresionează cel mai mult la Bruno este inteligența sa emoțională ieșită din comun. Pare să posede un al șaselea simț care îi permite să detecteze imediat starea mea de spirit. Dacă mă vede abătut sau obosit după o zi lungă la școală, vine tiptil lângă mine, își așază capul greu pe genunchii mei și mă privește cu ochii lui căprui, mari și plini de o înțelegere mută. În acele momente, simt cum toată tensiunea se risipește, înlocuită de o liniște profundă pe care doar prezența unui prieten loial o poate oferi. Activitățile noastre zilnice sunt variate, dar preferata lui Bruno rămâne, fără îndoială, plimbarea de după-amiază în parcul central. Acolo, el se transformă dintr-un câine calm și ascultător într-un ghem de energie inepuizabilă. Adoră să alerge după discul de plastic pe care i-l arunc, executând uneori sărituri acrobatice impresionante pentru a-l prinde în aer. De asemenea, este extrem de sociabil, interacționând cu entuziasm cu ceilalți câini, dar rămânând mereu vigilent și cu un ochi ațintit asupra mea, asigurându-se că sunt în siguranță. Într-o vară, în timpul unei excursii la munte, Bruno ne-a demonstrat încă o dată devotamentul său. Ne rătăcisem ușor pe o potecă nemarcată, iar ceața începuse să coboare rapid peste versanți. Bruno, simțind neliniștea noastră, a preluat inițiativa și ne-a ghidat cu siguranță înapoi spre drumul principal, folosindu-și simțul olfactiv extrem de dezvoltat. Această experiență mi-a întărit convingerea că legătura dintre un om și câinele său este una sacră, bazată pe încredere reciprocă și iubire necondiționată. Bruno mă învață în fiecare zi ce înseamnă responsabilitatea, răbdarea și, mai presus de toate, prietenia adevărată.",
    questions: [
      { type: "mcq", question: "Ce rasă este câinele Bruno?", options: ["Ciobănesc German", "Golden Retriever", "Labrador", "Beagle"], correct: 1 },
      { type: "mcq", question: "Când l-a primit naratorul pe Bruno?", options: ["La Crăciun", "Când a împlinit zece ani", "În prima zi de școală", "În vacanța de vară"], correct: 1 },
      { type: "mcq", question: "Care este activitatea preferată a lui Bruno în parc?", options: ["Alergatul după minge", "Alergatul după discul de plastic", "Înotul în lac", "Dormitul pe iarbă"], correct: 1 },
      { type: "mcq", question: "Cum a ajutat Bruno familia în timpul excursiei la munte?", options: ["A găsit mâncare", "A alungat un urs", "I-a ghidat înapoi spre drumul principal prin ceață", "A găsit o peșteră"], correct: 2 },
      { type: "typing", question: "Ce culoare are blana lui Bruno?", answer: "aurie" },
      { type: "typing", question: "Ce simț a folosit Bruno pentru a găsi drumul înapoi?", answer: "olfactiv" },
    ],
  },
  {
    title: "Tainele pădurii de smarald",
    text: "Pădurea seculară de la poalele munților a reprezentat întotdeauna pentru mine un sanctuar al liniștii și un laborator viu al biodiversității. Într-o dimineață răcoroasă de sâmbătă, am decis să pornesc într-o expediție solitară pentru a observa mai îndeaproape ritmul vieții sălbatice. Echipat cu un binoclu, un aparat foto și un carnețel de observații, am pășit pe poteca acoperită de un strat gros de mușchi, care amortiza fiecare pas, făcându-mă să mă simt ca un intrus tăcut într-un regat străvechi. Pe măsură ce înaintam spre inima pădurii, lumina soarelui se filtra printre coroanele gigantice ale fagilor și stejarilor, creând coloane de lumină aurie în care dansau particule fine de praf. Aerul era saturat de un amestec amețitor de mirosuri: rășină proaspătă, pământ reavăn și parfumul discret al florilor de umbră. Liniștea nu era una absolută, ci mai degrabă o simfonie complexă de sunete discrete. Am auzit ciocănitul ritmic al unei ciocănitoare negre, care căuta cu perseverență insecte sub scoarța unui copac bătrân, și foșnetul rapid al unei veverițe roșcate care aduna provizii pentru iarnă. M-am oprit lângă un pârâu cristalin care șerpuia printre bolovanii acoperiți de licheni verzi. Acolo, am avut norocul să zăresc o căprioară grațioasă care venise să se adape. Mi-am ținut respirația, admirându-i mișcările elegante și urechile ciulite la cel mai mic zgomot. A fost un moment de conexiune profundă cu natura, o lecție mută despre fragilitatea și frumusețea vieții. Mai târziu, am descoperit o varietate impresionantă de ciuperci colorate și plante rare, pe care le-am documentat cu grijă în carnețelul meu. Explorarea pădurii m-a făcut să înțeleg că acest ecosistem nu este doar o resursă, ci un organism complex care respiră și ne oferă echilibrul necesar supraviețuirii. Fiecare arbore, fiecare insectă și fiecare fir de iarbă are un rol bine definit în marea rețea a vieții.",
    questions: [
      { type: "mcq", question: "Cu ce era echipat naratorul pentru expediție?", options: ["Cu o bicicletă", "Cu binoclu, aparat foto și carnețel", "Cu o undiță", "Cu un cort"], correct: 1 },
      { type: "mcq", question: "Ce tip de copaci sunt menționați în text?", options: ["Brazi și pini", "Fagi și stejari", "Salcii și plopi", "Meri și peri"], correct: 1 },
      { type: "mcq", question: "Ce animal a observat naratorul lângă pârâu?", options: ["Un urs", "O căprioară", "Un lup", "Un mistreț"], correct: 1 },
      { type: "mcq", question: "Care este mesajul principal al textului?", options: ["Pădurea este periculoasă", "Importanța protejării ecosistemului forestier", "Cum să vânezi animale", "Cum să tai lemne"], correct: 1 },
      { type: "typing", question: "Ce pasăre scotea un sunet ritmic în pădure?", answer: "ciocănitoarea" },
      { type: "typing", question: "Ce acoperea bolovanii de lângă pârâu?", answer: "licheni" },
    ],
  },
  {
    title: "Vacanța în ograda bunicilor",
    text: "Pentru mine, vacanța de vară nu este completă fără cele câteva săptămâni petrecute în satul bunicilor mei, un loc unde timpul pare să fi încremenit într-o epocă a simplității și a bunei rânduieli. Casa lor, cu pereți albi și acoperiș de șindrilă, este înconjurată de o grădină imensă, plină de flori multicolore și pomi fructiferi care se apleacă sub greutatea roadelor. Încă de la poartă, sunt întâmpinat de mirosul inconfundabil de fân proaspăt cosit și de aroma plăcintelor cu brânză pe care bunica le pregătește cu atâta dragoste. Bunicul meu este un om al pământului, cu palmele bătătorite de muncă, dar cu o înțelepciune blândă care se citește în ochii săi albaștri. Diminețile încep devreme, odată cu primul cântat al cocoșului. Îl însoțesc adesea la câmp sau în livadă, unde mă învață tainele agriculturii tradiționale. El îmi explică cum să îngrijesc plantele, cum să recunosc semnele vremii și cât de important este să respecți ritmul naturii. Munca este solicitantă, dar satisfacția de a vedea rezultatele efortului tău este imensă, oferindu-mi o perspectivă diferită asupra valorii lucrurilor obținute prin trudă proprie. Bunica, pe de altă parte, este sufletul casei și păstrătoarea tradițiilor culinare. Bucătăria ei este un loc magic unde ingredientele simple din grădină se transformă în adevărate festinuri. Nimic nu se compară cu gustul laptelui proaspăt muls sau cu aroma roșiilor zemoase, culese direct de pe vrej. Seara, ne adunăm cu toții pe prispă, sub cerul înstelat, iar bunicii ne deapănă amintiri din tinerețea lor, povești despre strămoși și despre cum s-a schimbat satul de-a lungul deceniilor. Aceste experiențe la țară mă ajută să mă deconectez de agitația orașului și de ecranele dispozitivelor electronice, permițându-mi să redescopăr bucuria lucrurilor mărunte.",
    questions: [
      { type: "mcq", question: "Cum este acoperișul casei bunicilor?", options: ["De țiglă", "De șindrilă", "De tablă", "De paie"], correct: 1 },
      { type: "mcq", question: "Ce activitate face naratorul împreună cu bunicul dimineața?", options: ["Merg la pescuit", "Îl însoțește la câmp sau în livadă", "Repară mașina", "Dorm până târziu"], correct: 1 },
      { type: "mcq", question: "Cine este considerat sufletul casei în text?", options: ["Bunicul", "Bunica", "Naratorul", "Vecinul"], correct: 1 },
      { type: "mcq", question: "Ce fac bunicii seara pe prispă?", options: ["Se uită la televizor", "Deapănă amintiri și povești despre strămoși", "Citesc ziarul", "Dorm"], correct: 1 },
      { type: "typing", question: "Ce pregătește bunica cu dragoste?", answer: "plăcinte" },
      { type: "typing", question: "Ce culoare au ochii bunicului?", answer: "albaștri" },
    ],
  },
  {
    title: "Emoțiile primei zile de școală",
    text: "Prima zi de școală a sosit cu un amestec intens de nerăbdare și o ușoară neliniște, marcând începutul unui nou capitol în parcursul meu educațional: clasa a șasea. Deși nu mai sunt un „boboc” în gimnaziu, trecerea într-un nou an școlar aduce mereu cu sine provocări inedite și oportunități de dezvoltare. Curtea școlii era inundată de o mare de elevi veseli, părinți emoționați și buchete de flori multicolore, totul desfășurându-se sub acordurile imnului școlii care răsuna festiv în difuzoare. Reîntâlnirea cu colegii a fost momentul cel mai așteptat. Ne-am împărtășit cu entuziasm aventurile din vacanța de vară, am observat cât de mult am crescut unii dintre noi și am făcut planuri pentru proiectele de grup ce vor urma. Atmosfera era una de camaraderie și optimism, semn că legăturile formate în anii precedenți sunt solide. Doamna dirigintă ne-a întâmpinat în sala de clasă cu un zâmbet cald și cu un discurs motivațional despre importanța perseverenței și a curiozității intelectuale în acest an care se anunță a fi unul solicitant. Clasa a șasea aduce cu sine materii noi și profesori diferiți, ceea ce necesită o capacitate de adaptare sporită. Am primit cu interes noul orar, analizând cu atenție disciplinele care mă pasionează, precum istoria și biologia, dar și pe cele care reprezintă o adevărată provocare, cum este matematica. Manualele noi, cu mirosul lor specific de tipar proaspăt, așteptau cuminți pe bănci, promițând să ne dezvăluie taine noi despre lume și univers. Am înțeles că succesul școlar nu depinde doar de inteligență, ci mai ales de organizare, disciplină și dorința constantă de a învăța.",
    questions: [
      { type: "mcq", question: "În ce clasă a trecut naratorul?", options: ["Clasa a cincea", "Clasa a șasea", "Clasa a șaptea", "Clasa a patra"], correct: 1 },
      { type: "mcq", question: "Care a fost momentul cel mai așteptat al primei zile?", options: ["Masa de prânz", "Reîntâlnirea cu colegii", "Primirea manualelor", "Discursul directorului"], correct: 1 },
      { type: "mcq", question: "Ce calități sunt menționate ca fiind necesare pentru succesul școlar?", options: ["Doar norocul", "Organizare, disciplină și dorința de a învăța", "Banii", "Viteza de scriere"], correct: 1 },
      { type: "mcq", question: "Ce materii pasionează în mod deosebit pe narator?", options: ["Sportul și muzica", "Istoria și biologia", "Matematica și fizica", "Desenul"], correct: 1 },
      { type: "typing", question: "Ce răsuna festiv în difuzoarele școlii?", answer: "imnul" },
      { type: "typing", question: "Ce document conține programul zilnic al materiilor?", answer: "orarul" },
    ],
  },
  {
    title: "Datini și obiceiuri de Crăciun",
    text: "Sărbătorile de iarnă reprezintă în România o perioadă magică, în care tradițiile străvechi se împletesc armonios cu bucuria prezentului, creând o atmosferă de poveste ce dăinuie în sufletele noastre mult timp după trecerea gerului. Crăciunul, în special, este marcat de o bogăție de datini care variază de la o regiune la alta, dar care au în comun spiritul generozității și al comuniunii familiale. Pregătirile încep cu mult timp înainte, prin curățenia generală a gospodăriei și prepararea bucatelor tradiționale care vor trona pe masa festivă. Unul dintre cele mai frumoase și așteptate momente este colindatul. În seara de Ajun, grupuri de copii și tineri, îmbrăcați adesea în costume populare autentice, pornesc din casă în casă pentru a vesti Nașterea Domnului. Sunetul clopoțeilor, al buhaiului și vocile cristaline care interpretează colinde vechi, precum „Steaua sus răsare” sau „O, ce veste minunată”, umplu ulițele satelor și holurile blocurilor de o vibrație spirituală aparte. Gazdele îi întâmpină pe colindători cu mere, nuci, colaci proaspeți și, uneori, cu mici sume de bani, în semn de mulțumire pentru urările de sănătate și belșug. În interiorul caselor, bradul de Crăciun, împodobit cu globuri strălucitoare, beteală și luminițe colorate, devine centrul universului familial. Mirosul de cetină se amestecă cu aroma inconfundabilă a cozonacilor proaspăt scoși din cuptor, a sarmalelor care fierb încet în oale de lut și a fripturii de porc condimentate. Masa de Crăciun este un prilej de reîntregire a familiei, unde generații diferite stau împreună, depănând amintiri și bucurându-se de prezența celor dragi.",
    questions: [
      { type: "mcq", question: "Ce vestesc colindătorii în seara de Ajun?", options: ["Venirea iernii", "Nașterea Domnului", "Sfârșitul anului", "Începutul școlii"], correct: 1 },
      { type: "mcq", question: "Cu ce sunt întâmpinați colindătorii de către gazde?", options: ["Cu bomboane și suc", "Cu mere, nuci și colaci", "Cu flori", "Cu jucării"], correct: 1 },
      { type: "mcq", question: "Ce tip de mâncare tradițională este menționată în text?", options: ["Pizza", "Sarmale și cozonaci", "Paste", "Hamburgeri"], correct: 1 },
      { type: "mcq", question: "Care este atmosfera generală a sărbătorilor descrisă în text?", options: ["Agitată și stresantă", "Magică, de poveste și comuniune familială", "Plictisitoare", "Tristă"], correct: 1 },
      { type: "typing", question: "Cum se numește seara de dinaintea Crăciunului?", answer: "Ajunul" },
      { type: "typing", question: "Ce obiecte strălucitoare se pun în brad?", answer: "globuri" },
    ],
  },
  {
    title: "Ștefan cel Mare și Sfânt, apărătorul creștinătății",
    text: "Ștefan cel Mare, domnitorul Moldovei între anii 1457 și 1504, rămâne una dintre cele mai emblematice și respectate figuri din istoria medievală a României. Domnia sa de aproape o jumătate de secol a reprezentat o perioadă de maximă înflorire politică, militară și culturală pentru țară, Ștefan reușind să mențină independența Moldovei într-un context geopolitic extrem de dificil, marcat de expansiunea Imperiului Otoman și de presiunile regatelor vecine, Polonia și Ungaria. Cunoscut ca un strateg militar de excepție, Ștefan a purtat numeroase bătălii, majoritatea victorioase, împotriva unor armate mult mai numeroase. Cea mai faimoasă victorie a sa rămâne cea de la Vaslui (Podul Înalt) din 1475, unde a reușit să înfrângă o armată otomană imensă, fapt ce i-a adus recunoașterea internațională și titlul de „atlet al lui Hristos” acordat de Papa Sixtus al IV-lea. Dincolo de calitățile sale de războinic, Ștefan a fost un mare ctitor de cultură și spiritualitate. Tradiția spune că după fiecare victorie importantă, el ridica o biserică sau o mănăstire, lăsând în urmă o moștenire arhitecturală impresionantă, cunoscută astăzi sub numele de stilul moldovenesc. Mănăstirea Putna, unde se află și mormântul său, rămâne un simbol al evlaviei sale și un loc de pelerinaj pentru românii de pretutindeni. De asemenea, el a întărit sistemul de cetăți al Moldovei, precum Cetatea Neamțului sau Cetatea de Scaun a Sucevei, asigurând protecția populației în fața invaziilor.",
    questions: [
      { type: "mcq", question: "Între ce ani a domnit Ștefan cel Mare?", options: ["1400-1450", "1457-1504", "1500-1550", "1350-1400"], correct: 1 },
      { type: "mcq", question: "Ce titlu i-a acordat Papa Sixtus al IV-lea după victoria de la Vaslui?", options: ["Rege al Moldovei", "Atlet al lui Hristos", "Împărat al Estului", "Cavaler al Ordinului"], correct: 1 },
      { type: "mcq", question: "Unde se află mormântul lui Ștefan cel Mare?", options: ["La București", "La Mănăstirea Putna", "La Iași", "La Suceava"], correct: 1 },
      { type: "mcq", question: "Ce cetăți a întărit domnitorul pentru apărarea țării?", options: ["Cetatea Neamțului și Cetatea de Scaun a Sucevei", "Castelul Bran", "Cetatea Alba Iulia", "Cetatea Devei"], correct: 0 },
      { type: "typing", question: "Cum se numește stilul arhitectural creat în timpul domniei sale?", answer: "moldovenesc" },
      { type: "typing", question: "În ce an a fost canonizat Ștefan cel Mare?", answer: "1992" },
    ],
  },
  {
    title: "Aventura pe șine spre inima munților",
    text: "Călătoria cu trenul pe ruta București-Brașov reprezintă pentru mine una dintre cele mai fascinante experiențe de transport, oferind un spectacol vizual de neegalat și o perspectivă unică asupra diversității reliefului românesc. Totul începe în forfota Gării de Nord, un loc încărcat de istorie și de emoția plecărilor, unde sute de călători se grăbesc spre peroane cu geamantane și speranțe. Odată urcat în vagonul modern și confortabil, simt cum agitația orașului se estompează, lăsând loc unei stări de anticipare plăcută. Imediat ce trenul părăsește câmpia și începe ascensiunea spre Valea Prahovei, peisajul se transformă radical. Privind prin fereastra largă, pot observa cum râul Prahova șerpuiește nervos printre stânci, însoțind calea ferată în efortul său de a cuceri muntele. Munții Bucegi se înalță impunători de o parte, cu vârfurile lor adesea învăluite în nori misterioși, în timp ce Munții Baiului strălucesc sub razele soarelui de cealaltă parte. Trenul trece prin tuneluri întunecate și peste viaducte înalte, oferind perspective amețitoare asupra prăpăstiilor și a pădurilor de conifere care par nesfârșite. Unul dintre momentele mele preferate este oprirea în gara din Sinaia, o bijuterie arhitecturală care amintește de eleganța perioadei regale. De aici, se poate zări pentru o clipă silueta maiestuoasă a Castelului Peleș, strălucind printre brazi ca într-o ilustrație de basm. Pe măsură ce înaintăm spre Predeal, cel mai înalt punct al traseului feroviar, aerul devine mai rece și mai proaspăt, iar zgomotul ritmic al roților pe șine capătă o rezonanță aparte în liniștea înălțimilor.",
    questions: [
      { type: "mcq", question: "De unde începe călătoria cu trenul descrisă în text?", options: ["Gara de Est", "Gara de Nord", "Gara Centrală", "Aeroport"], correct: 1 },
      { type: "mcq", question: "Ce râu însoțește calea ferată pe Valea Prahovei?", options: ["Oltul", "Prahova", "Mureșul", "Siretul"], correct: 1 },
      { type: "mcq", question: "Care este cel mai înalt punct al traseului feroviar menționat?", options: ["Sinaia", "Predeal", "Bușteni", "Azuga"], correct: 1 },
      { type: "mcq", question: "Ce castel poate fi zărit pentru o clipă din tren la Sinaia?", options: ["Castelul Bran", "Castelul Peleș", "Castelul Corvinilor", "Cetatea Neamțului"], correct: 1 },
      { type: "typing", question: "Cum se numește muntele care domină orașul Brașov?", answer: "Tâmpa" },
      { type: "typing", question: "Ce tip de păduri predomină în zona montană?", answer: "conifere" },
    ],
  },
  {
    title: "Metamorfoza naturii de-a lungul anului",
    text: "Succesiunea celor patru anotimpuri reprezintă în România un spectacol grandios al transformării, o simfonie a culorilor și a stărilor sufletești care ne modelează existența și ne conectează profund la ritmul universului. Primăvara este momentul renașterii, când natura se trezește dintr-un somn adânc sub mângâierea razelor calde ale soarelui. Ghioceii străpung stratul subțire de zăpadă, iar copacii înfloresc, umplând aerul de un parfum delicat și de zumzetul albinelor harnice. Vara, în schimb, este anotimpul plenitudinii și al luminii intense. Zilele lungi și călduroase ne invită la explorare, fie că alegem răcoarea pădurilor de munte sau briza sărată a Mării Negre. Câmpurile de grâu auriu ondulează sub adierea vântului, iar livezile sunt pline de fructe zemoase care așteaptă să fie culeși. Toamna aduce cu sine o schimbare de registru, transformând peisajul într-o veritabilă galerie de artă pictată în nuanțe de arămiu, auriu și roșu purpuriu. Aerul devine mai tăios, iar zilele încep să se scurteze, invitându-ne la introspecție și melancolie. Este anotimpul recoltei, când hambarele se umplu de provizii pentru iarnă, iar mirosul de must și de frunze uscate plutește în aer. Iarna instalează peste lume o liniște solemnă, acoperind totul cu o mantie albă și sclipitoare de zăpadă. Natura pare să fi încremenit într-un somn adânc, dar sub stratul de gheață viața continuă să pulseze discret. Este timpul poveștilor la gura sobei, al sărbătorilor pline de lumină și al bucuriei jocurilor în zăpadă. Această succesiune ciclică ne reamintește că viața este o transformare continuă și că fiecare anotimp are rolul său esențial în menținerea echilibrului planetar.",
    questions: [
      { type: "mcq", question: "Ce floare este menționată ca simbol al renașterii primăvara?", options: ["Trandafirul", "Ghiocelul", "Laleaua", "Floarea-soarelui"], correct: 1 },
      { type: "mcq", question: "Care este atmosfera specifică verii conform textului?", options: ["Tristă și rece", "Plenitudine, lumină intensă și vitalitate", "Melancolică", "Întunecată"], correct: 1 },
      { type: "mcq", question: "Ce culori predomină în peisajul de toamnă?", options: ["Verde și albastru", "Arămiu, auriu și roșu purpuriu", "Alb și gri", "Negru"], correct: 1 },
      { type: "mcq", question: "Ce activitate este specifică iernii în viziunea naratorului?", options: ["Mersul la plajă", "Poveștile la gura sobei și jocurile în zăpadă", "Culesul fructelor", "Plantatul florilor"], correct: 1 },
      { type: "typing", question: "Ce insecte zumzăie printre florile de primăvară?", answer: "albinele" },
      { type: "typing", question: "Ce fenomen desenează „flori” pe ferestre în timpul iernii?", answer: "gerul" },
    ],
  },
];

// ─── CLASA 7 ─── (400-600 cuvinte · structuri complexe, teme diverse)
const PASSAGES_CLASA_7: ReadingPassage[] = [
  {
    title: "Max, prietenul meu cel mai bun",
    text: "Max nu este doar un simplu animal de companie, ci un membru cu drepturi depline al familiei noastre de mai bine de șase ani. Este un Ciobănesc German impunător, cu o blană deasă în nuanțe de negru și cafeniu, care îi oferă un aspect nobil și protector. L-am primit când era doar un ghemotoc de blană speriat, dar cu timpul a crescut și a devenit paznicul neobosit al curții noastre. Inteligența lui Max mă uimește în fiecare zi; pare să înțeleagă nu doar comenzile vocale, ci și cele mai subtile stări sufletești ale celor din jur. Când sunt trist sau îngrijorat din cauza examenelor, vine tiptil lângă mine și își așază capul greu pe genunchii mei, privindu-mă cu ochii lui căprui plini de o compasiune mută, dar profundă. Diminețile noastre încep mereu cu o repriză de joacă în grădină, unde Max aleargă cu o viteză incredibilă după discul de plastic sau după mingea de tenis. Deși este un câine de talie mare, este extrem de blând cu copiii mici din cartier, lăsându-i să-l mângâie fără nicio reținere, demonstrând un calm olimpian. Într-o vară, în timpul unei drumeții solicitante la munte, Max ne-a avertizat de prezența unui animal sălbatic în apropiere, lătrând într-un mod specific, scurt și autoritar, pe care nu-l mai auzisem până atunci. Datorită vigilenței sale, am reușit să ne îndepărtăm în siguranță înainte ca situația să devină periculoasă. Această legătură specială dintre om și câine mi-a arătat ce înseamnă loialitatea fără limite și responsabilitatea imensă de a îngriji o altă ființă vie. Max m-a învățat că prietenia nu are nevoie de cuvinte pentru a fi exprimată, ci de gesturi simple, prezență constantă și o devotare care trece dincolo de barierele speciilor. În fiecare seară, când se așază la picioarele patului meu, simt o liniște profundă, știind că am alături cel mai fidel tovarăș de drum.",
    questions: [
      { type: "mcq", question: "Ce rasă este câinele Max?", options: ["Labrador", "Ciobănesc German", "Golden Retriever", "Rotweiler"], correct: 1 },
      { type: "mcq", question: "Cum reacționează Max când naratorul este trist?", options: ["Începe să latre", "Fuge în grădină", "Își așază capul pe genunchii lui", "Doarme"], correct: 2 },
      { type: "mcq", question: "Ce s-a întâmplat în timpul drumeției la munte?", options: ["Max s-a pierdut", "Max a găsit o comoară", "Max a avertizat familia de un animal sălbatic", "Max a înotat într-un lac"], correct: 2 },
      { type: "mcq", question: "De cât timp face Max parte din familie?", options: ["De un an", "De trei ani", "De mai bine de șase ani", "De zece ani"], correct: 2 },
      { type: "mcq", question: "Care este trăsătura principală a lui Max în relația cu copiii?", options: ["Agresivitatea", "Indiferența", "Blândețea extremă", "Frica"], correct: 2 },
      { type: "typing", question: "Ce obiect urmărește Max în timpul jocului din grădină?", answer: "discul de plastic" },
      { type: "typing", question: "Ce culoare au ochii lui Max?", answer: "căprui" },
    ],
  },
  {
    title: "O zi de explorare în inima pădurii",
    text: "Pădurea seculară de la marginea satului bunicilor a reprezentat întotdeauna pentru mine un tărâm plin de mister, un sanctuar al liniștii unde timpul pare să curgă după alte legi. Într-o dimineață răcoroasă de sâmbătă, echipat cu un rucsac bine dotat, o busolă veche moștenită de la bunicul și un carnețel de observații, am decis să explorez potecile mai puțin umblate ale acestui univers verde. Pe măsură ce înaintam, lumina soarelui se strecura cu greu prin coroanele gigantice ale stejarilor și fagilor seculari, creând jocuri de umbre și lumini pe covorul de mușchi moale și reavăn. Aerul era saturat de mirosul proaspăt de rășină, de pământ umed și de parfumul discret al florilor sălbatice de umbră, un amestec olfactiv pe care nicio metropolă modernă nu-l poate reproduce. La un moment dat, am ajuns într-o poiană ascunsă, unde un pârâu cristalin susura vesel printre pietrele șlefuite de milenii. M-am așezat pe un trunchi de copac căzut, acoperit de licheni, și am rămas nemișcat, transformându-mă într-un simplu observator al simfoniei naturii. Am ascultat cu atenție ciocănitul ritmic al unei ciocănitoare negre, foșnetul discret al unei șopârle prin frunzișul uscat și cântecul cristalin al privighetorilor ce răsuna din desișuri. Momentul culminant a fost când am observat o familie de căprioare care a ieșit la adăpat, fără să bănuiască prezența mea tăcută. Erau atât de grațioase în mișcări încât mi-am ținut respirația minute în șir, temându-mă că cel mai mic zgomot ar putea rupe vraja. Această experiență mi-a reamintit cât de fragil este echilibrul ecosistemelor noastre și cât de important este să fim vizitatori respectuoși în acest regat al sălbăticiei. Pădurea nu este doar o resursă naturală, ci un organism viu, complex, care respiră și ne oferă liniștea și oxigenul necesar supraviețuirii noastre fizice și spirituale.",
    questions: [
      { type: "mcq", question: "Cu ce era echipat naratorul pentru explorare?", options: ["Cu o hartă digitală", "Cu un rucsac, o busolă veche și un carnețel", "Cu o bicicletă de munte", "Cu o undiță"], correct: 1 },
      { type: "mcq", question: "Ce tip de copaci sunt menționați ca fiind seculari?", options: ["Brazi și pini", "Stejari și fagi", "Salcii și plopi", "Meri și peri"], correct: 1 },
      { type: "mcq", question: "Ce animale a observat naratorul în poiană?", options: ["O familie de urși", "O familie de căprioare", "O vulpe solitară", "Un mistreț"], correct: 1 },
      { type: "mcq", question: "Unde s-a așezat naratorul pentru a observa natura?", options: ["Pe o stâncă înaltă", "Pe un trunchi de copac căzut", "Direct pe iarbă", "Lângă pârâu"], correct: 1 },
      { type: "mcq", question: "Care este sentimentul principal transmis de text?", options: ["Frica de necunoscut", "Respectul și admirația față de natură", "Plictiseala", "Dorința de a vâna"], correct: 1 },
      { type: "typing", question: "Ce pasăre scotea un sunet ritmic în pădure?", answer: "ciocănitoarea" },
      { type: "typing", question: "Cum se numește instrumentul folosit pentru orientare?", answer: "busola" },
    ],
  },
  {
    title: "Vacanța în satul bunicilor",
    text: "Nimic nu se compară cu sentimentul de libertate absolută pe care îl trăiesc în fiecare vară la casa bunicilor mei, situată într-un sat pitoresc, cuibărit la poalele dealurilor subcarpatice. Acolo, viața se desfășoară după un alt ritm, unul ancestral, dictat de răsăritul soarelui și de nevoile stringente ale animalelor din ogradă. Bunicul meu, un om cu palmele bătătorite de decenii de muncă cinstită, dar cu o înțelepciune blândă ce i se citește în privire, mă trezește în fiecare dimineață, înainte ca arșița să pună stăpânire pe ulițe, pentru a merge împreună la cosit. Deși munca fizică este solicitantă, satisfacția de a vedea căpițele de fân ridicându-se mândre sub soarele amiezii este imensă, oferindu-mi o lecție despre valoarea trudei. Între timp, bunica, sufletul neobosit al casei, pregătește în bucătăria de vară cele mai gustoase bucate tradiționale: plăcinte cu brânză sărată, mămăligă aburindă și lapte proaspăt, muls chiar în acea dimineață. După-amiezile sunt rezervate explorării livezii imense, pline de meri, pruni și peri încărcați de rod, sau scăldatului în râul răcoros ce traversează marginea satului. Seara, când răcoarea începe să se lase, ne adunăm cu toții pe prispă, sub un cer înstelat cum rar poți vedea la oraș. Bunicul ne deapănă amintiri din tinerețea lui, povești despre strămoși și despre cum s-a transformat comunitatea de-a lungul deceniilor. Aceste momente petrecute la țară mă învață să prețuiesc simplitatea, respectul față de pământ și legăturile profunde de familie. Este locul unde îmi regăsesc echilibrul interior și unde înțeleg că fericirea nu depinde de tehnologie, ci de conexiunea autentică cu natura și cu cei dragi. Fiecare plecare spre oraș este însoțită de o ușoară melancolie, dar și de promisiunea că mă voi întoarce mereu la rădăcinile mele.",
    questions: [
      { type: "mcq", question: "Unde este situată casa bunicilor?", options: ["La munte, la mare altitudine", "La mare", "Într-un sat la poalele dealurilor", "În centrul unei metropole"], correct: 2 },
      { type: "mcq", question: "Ce activitate face naratorul împreună cu bunicul dimineața?", options: ["Merg la pescuit pe lac", "Merg la cosit fânul", "Repară gardul grădinii", "Culeg fructe din livadă"], correct: 1 },
      { type: "mcq", question: "Ce pregătește bunica în bucătăria de vară?", options: ["Pizza și paste italienești", "Plăcinte cu brânză și mămăligă", "Hamburgeri", "Supă de fructe de mare"], correct: 1 },
      { type: "mcq", question: "Unde se adună familia seara pentru a povesti?", options: ["În fața televizorului", "Pe prispă, sub cerul înstelat", "În grădina de legume", "La râul din marginea satului"], correct: 1 },
      { type: "mcq", question: "Ce învață naratorul din experiența la țară?", options: ["Să folosească tehnologia mai bine", "Să prețuiască simplitatea și munca", "Să devină un sportiv mai bun", "Să gătească mâncare modernă"], correct: 1 },
      { type: "typing", question: "Ce fructe se găsesc în livada bunicilor?", answer: "meri, pruni și peri" },
      { type: "typing", question: "Cum se numește locul unde stau bunicii seara să povestească?", answer: "prispa" },
    ],
  },
  {
    title: "Noi orizonturi în clasa a șaptea",
    text: "Trecerea în clasa a șaptea a reprezentat pentru mine un prag psihologic important, marcând mijlocul perioadei de gimnaziu și aducând cu sine o maturizare vizibilă a responsabilităților școlare. Prima zi de școală nu a mai fost doar o simplă reîntâlnire festivă, ci începutul unui an decisiv, în care materiile devin mai complexe și cerințele profesorilor mai ridicate. Curtea școlii era inundată de o mare de elevi, dar noi, cei de clasa a șaptea, ne simțeam deja veterani ai coridoarelor, privindu-i cu o ușoară nostalgie pe bobocii de clasa a cincea. Reîntâlnirea cu colegii a fost plină de efervescență; am observat cu uimire cât de mult s-au schimbat unii dintre noi peste vară, nu doar fizic, ci și în interese și preocupări. Dirigintele nostru, un profesor de matematică riguros dar corect, ne-a întâmpinat cu un discurs pragmatic despre importanța constanței în învățare, avertizându-ne că acest an pune bazele pentru examenele viitoare. Am primit cu un amestec de curiozitate și teamă noul orar, care includea discipline noi și provocatoare, precum fizica și chimia, materii care promiteau să ne dezvăluie legile fundamentale ale universului. Laboratoarele școlii, cu eprubetele și instrumentele lor misterioase, au devenit brusc puncte de atracție majoră. Deși volumul de muncă se anunța a fi unul considerabil, simțeam o dorință reală de a explora aceste noi domenii ale cunoașterii. Prima zi de școală mi-a oferit nu doar manuale noi, cu mirosul lor inconfundabil de tipar, ci și încrederea că, prin organizare și perseverență, voi reuși să fac față tuturor provocărilor academice și să leg prietenii și mai strânse cu cei din jurul meu.",
    questions: [
      { type: "mcq", question: "În ce clasă a trecut naratorul?", options: ["Clasa a VI-a", "Clasa a VII-a", "Clasa a VIII-a", "Clasa a V-a"], correct: 1 },
      { type: "mcq", question: "Ce materie predă dirigintele clasei?", options: ["Limba română", "Istorie", "Matematică", "Geografie"], correct: 2 },
      { type: "mcq", question: "Care sunt materiile noi menționate în text?", options: ["Muzica și desenul", "Fizica și chimia", "Informatica și biologia", "Limba engleză și franceză"], correct: 1 },
      { type: "mcq", question: "Cum se simțeau elevii de clasa a șaptea față de cei de a cincea?", options: ["Speriați", "Indiferenți", "Ca niște veterani, cu nostalgie", "Invidioși"], correct: 2 },
      { type: "mcq", question: "Ce locuri din școală au devenit puncte de atracție?", options: ["Sala de sport", "Cantina", "Laboratoarele", "Biblioteca"], correct: 2 },
      { type: "typing", question: "Cum se numesc elevii care încep clasa a cincea?", answer: "boboci" },
      { type: "typing", question: "Ce document conține programul zilnic al lecțiilor?", answer: "orarul" },
    ],
  },
  {
    title: "Crăciunul în Maramureș",
    text: "Dintre toate sărbătorile anului, Crăciunul petrecut în Maramureș rămâne pentru mine experiența supremă a spiritualității și a tradiției românești autentice. Acolo, iarna nu este doar un anotimp, ci un decor de basm, cu troiene înalte și păduri de brazi îmbrăcate în mantii grele de zăpadă. Pregătirile încep cu mult timp înainte, dar atmosfera devine cu adevărat magică în Ajun. Mirosul de cetină proaspătă se împletește în casele de lemn cu aroma inconfundabilă a cozonacilor pufoși, a sarmalelor ce fierb încet în oale de lut și a fripturii condimentate. Momentul cel mai așteptat este colindatul. Grupuri de tineri îmbrăcați în costume populare superbe, cu sumane groase și căciuli de astrahan, pornesc prin zăpada scârțâitoare pentru a vesti Nașterea Domnului. Sunetul clopoțeilor și vocile lor puternice, ce interpretează colinde vechi de secole, creează o vibrație ce pare să unească pământul cu cerul. Gazdele îi primesc cu brațele deschise, oferindu-le colaci împletiți, mere roșii și nuci, într-un ritual al ospitalității ce nu s-a schimbat de generații. În interiorul caselor, bradul împodobit cu globuri și beteală strălucește lângă icoanele vechi, iar familia se adună în jurul mesei festive, mulțumind pentru anul ce a trecut. Dincolo de cadourile materiale, Crăciunul în Maramureș este despre bunătate, despre iertare și despre păstrarea nealterată a identității noastre culturale. Este o lecție vie despre cum tradiția poate oferi sens și căldură într-o lume tot mai grăbită. Această sărbătoare mă încarcă mereu cu o energie pozitivă și îmi reamintește că cele mai prețioase lucruri în viață sunt cele care nu pot fi cumpărate: dragostea celor dragi și pacea sufletească.",
    questions: [
      { type: "mcq", question: "În ce regiune a României este plasată acțiunea?", options: ["Banat", "Moldova", "Maramureș", "Dobrogea"], correct: 2 },
      { type: "mcq", question: "Ce arome sunt menționate ca făcând parte din atmosfera casei?", options: ["Miros de brad și flori de primăvară", "Miros de cetină, cozonaci și sarmale", "Miros de ciocolată și vanilie", "Miros de mare și sare"], correct: 1 },
      { type: "mcq", question: "Cum sunt îmbrăcați colindătorii?", options: ["În haine moderne de iarnă", "În costume populare cu sumane și căciuli de astrahan", "În costume de carnaval", "În uniforme școlare"], correct: 1 },
      { type: "mcq", question: "Ce primesc colindătorii de la gazde?", options: ["Bani și dulciuri moderne", "Colaci, mere și nuci", "Jucării", "Cărți de povești"], correct: 1 },
      { type: "mcq", question: "Care este semnificația profundă a Crăciunului conform textului?", options: ["Doar primirea cadourilor scumpe", "Bunătatea, iertarea și păstrarea tradițiilor", "Mâncarea din abundență", "Vacanța de la școală"], correct: 1 },
      { type: "typing", question: "Cum se numește seara de dinaintea Crăciunului?", answer: "Ajunul" },
      { type: "typing", question: "În ce fel de vase fierb sarmalele pentru a fi mai gustoase?", answer: "oale de lut" },
    ],
  },
  {
    title: "Ion Creangă și amintirile copilăriei",
    text: "Ion Creangă rămâne, fără îndoială, cel mai mare povestitor al literaturii române, un maestru al limbajului popular care a reușit să transforme experiențele sale de viață în literatură universală. Capodopera sa, 'Amintiri din copilărie', nu este doar o simplă relatare a anilor petrecuți în satul natal, Humulești, ci o evocare magistrală a vârstei de aur a omului. Prin personajul Nică, Creangă ne introduce într-o lume plină de farmec, unde peripețiile se succed cu o viteză uimitoare: de la furatul cireșelor de la mătușa Mărioara, până la pățania cu pupăza din tei sau scăldatul în râul Ozana. Stilul său este inconfundabil, presărat cu zicători, proverbe și regionalisme moldovenești care dau textului o savoare unică. Creangă nu doar povestește, ci creează un univers în care natura și omul trăiesc într-o armonie perfectă, iar umorul este instrumentul principal prin care sunt depășite micile drame ale copilăriei. Dincolo de aspectul ludic, opera sa reflectă valorile morale ale satului românesc tradițional: respectul față de părinți, importanța învățăturii și legătura indisolubilă cu locurile natale. Nică reprezintă copilul universal, cu toate năzbâtiile, temerile și bucuriile sale, făcând ca lectura 'Amintirilor' să fie o experiență fascinantă pentru cititorii de toate vârstele. Ion Creangă a reușit performanța de a scrie o operă care, deși profund ancorată în realitatea locală a Moldovei de secol XIX, vorbește despre teme general umane, rămânând la fel de actuală și astăzi. Studiul operei sale în clasa a șaptea ne ajută să înțelegem bogăția limbii române și să prețuim moștenirea culturală lăsată de acest 'Homer al nostru', așa cum a fost numit de criticii literari.",
    questions: [
      { type: "mcq", question: "Care este satul natal al lui Ion Creangă?", options: ["Ipotești", "Humulești", "Mircești", "Lancrăm"], correct: 1 },
      { type: "mcq", question: "Cum se numește personajul principal din 'Amintiri din copilărie'?", options: ["Ionel", "Nică", "Goe", "Dănilă Prepeleac"], correct: 1 },
      { type: "mcq", question: "Ce râu trece prin apropierea satului Humulești?", options: ["Siret", "Prut", "Ozana", "Mureș"], correct: 2 },
      { type: "mcq", question: "Care este trăsătura principală a stilului lui Creangă?", options: ["Limbajul academic și rece", "Umorul și folosirea proverbelor populare", "Tristețea profundă", "Absența dialogului"], correct: 1 },
      { type: "mcq", question: "Ce pasăre apare într-una dintre cele mai faimoase pățanii ale lui Nică?", options: ["O rândunică", "O barză", "O pupăză", "Un vultur"], correct: 2 },
      { type: "typing", question: "Cum se numește mătușa de la care Nică a furat cireșe?", answer: "Mărioara" },
      { type: "typing", question: "În ce secol a trăit și a scris Ion Creangă?", answer: "secolul XIX" },
    ],
  },
  {
    title: "Expresul de munte: O călătorie spre Brașov",
    text: "Călătoria cu trenul pe ruta București-Brașov reprezintă pentru mine una dintre cele mai fascinante experiențe de transport, oferind un spectacol vizual de neegalat asupra diversității reliefului românesc. Totul începe în forfota Gării de Nord, un loc încărcat de istorie și de emoția plecărilor, unde sute de călători se grăbesc spre peroane. Odată urcat în vagonul modern, simt cum agitația metropolei se estompează, lăsând loc unei stări de anticipare plăcută. Imediat ce trenul părăsește câmpia și începe ascensiunea spre Valea Prahovei, peisajul se transformă radical sub ochii mei. Privind prin fereastra largă, pot observa cum râul Prahova șerpuiește nervos printre stânci, însoțind calea ferată în efortul său de a cuceri muntele. Munții Bucegi se înalță impunători de o parte, cu vârfurile lor adesea învăluite în nori misterioși, în timp ce Munții Baiului strălucesc sub razele soarelui de cealaltă parte. Trenul trece prin tuneluri întunecate și peste viaducte înalte, oferind perspective amețitoare asupra prăpăstiilor și a pădurilor de conifere care par nesfârșite. Unul dintre momentele mele preferate este oprirea în gara din Sinaia, o bijuterie arhitecturală care amintește de eleganța perioadei regale. De aici, se poate zări pentru o clipă silueta maiestuoasă a Castelului Peleș, strălucind printre brazi ca într-o ilustrație de basm. Pe măsură ce înaintăm spre Predeal, cel mai înalt punct al traseului feroviar, aerul devine mai rece și mai proaspăt, iar zgomotul ritmic al roților pe șine capătă o rezonanță aparte în liniștea înălțimilor. Călătoria cu trenul este mult mai relaxantă decât cea cu mașina, oferindu-ți libertatea de a admira natura în toată splendoarea ei, fără stresul traficului, și rămâne un mod ecologic și plin de farmec de a descoperi frumusețile țării.",
    questions: [
      { type: "mcq", question: "De unde începe călătoria cu trenul descrisă în text?", options: ["Gara de Est", "Gara de Nord", "Gara Centrală", "Aeroport"], correct: 1 },
      { type: "mcq", question: "Ce râu însoțește calea ferată pe Valea Prahovei?", options: ["Oltul", "Prahova", "Mureșul", "Siretul"], correct: 1 },
      { type: "mcq", question: "Care este cel mai înalt punct al traseului feroviar menționat?", options: ["Sinaia", "Predeal", "Bușteni", "Azuga"], correct: 1 },
      { type: "mcq", question: "Ce castel poate fi zărit din tren la Sinaia?", options: ["Castelul Bran", "Castelul Peleș", "Castelul Corvinilor", "Cetatea Neamțului"], correct: 1 },
      { type: "mcq", question: "De ce preferă naratorul trenul în locul mașinii?", options: ["Este mai rapid", "Este mai ieftin", "Este mai relaxant și ecologic", "Are mâncare mai bună"], correct: 2 },
      { type: "typing", question: "Cum se numește muntele care domină orașul Brașov?", answer: "Tâmpa" },
      { type: "typing", question: "Ce tip de păduri predomină în zona montană înaltă?", answer: "conifere" },
    ],
  },
  {
    title: "Simfonia toamnei în natură",
    text: "Toamna este, fără îndoială, cel mai melancolic dar și cel mai colorat anotimp, transformând natura într-o veritabilă galerie de artă în aer liber. Totul începe cu o schimbare subtilă a temperaturii și cu scurtarea vizibilă a zilelor, semn că vara și-a luat rămas bun. Frunzele copacilor, care până mai ieri erau de un verde crud, încep să îmbrace nuanțe incredibile de galben pai, portocaliu aprins și roșu purpuriu, creând un contrast spectaculos cu cerul adesea plumburiu. În pădure, covorul de frunze uscate foșnește sub picioare la fiecare pas, eliberând un miros specific de pământ reavăn și ciuperci, un parfum inconfundabil al acestui anotimp. Este perioada recoltei, când livezile sunt pline de fructe coapte: mere parfumate, pere zemoase și struguri dulci care așteaptă să fie culeși pentru a fi transformați în must. Păsările călătoare se adună în stoluri mari, desenând forme geometrice pe cerul vast, pregătindu-se pentru lunga și dificila călătorie spre țările calde. Deși ploile devin mai dese și vântul mai tăios, toamna are o frumusețe aparte, invitându-ne la introspecție și la aprecierea bogăției pământului. Este un timp al pregătirii pentru somnul lung al iernii, un ciclu natural necesar pentru regenerarea vieții în anul ce va veni. Toamna ne învață că fiecare sfârșit poartă în sine sămânța unui nou început și că schimbarea, deși uneori tristă, poate fi extrem de frumoasă și necesară. Lumina soarelui, mai palidă și mai blândă, mângâie peisajul arămiu, oferind momente de o liniște profundă înainte de instalarea primului îngheț. Pentru mine, toamna rămâne anotimpul reflecției, al culorilor calde și al recunoștinței pentru darurile generoase ale naturii.",
    questions: [
      { type: "mcq", question: "Ce culori îmbracă frunzele copacilor toamna?", options: ["Verde și albastru", "Galben, portocaliu și roșu purpuriu", "Alb și gri", "Negru și mov"], correct: 1 },
      { type: "mcq", question: "Ce fructe sunt menționate ca fiind specifice recoltei de toamnă?", options: ["Căpșuni și cireșe", "Mere, pere și struguri", "Portocale și lămâi", "Pepeni verzi"], correct: 1 },
      { type: "mcq", question: "Ce fac păsările călătoare în acest anotimp?", options: ["Își construiesc cuiburi noi", "Se pregătesc de plecare spre țările calde", "Încep să cânte mai tare", "Dorm pe tot parcursul zilei"], correct: 1 },
      { type: "mcq", question: "Care este atmosfera generală a toamnei conform textului?", options: ["Veselă și agitată", "Melancolică dar colorată și plină de bogăție", "Plictisitoare și monotonă", "Friguroasă și lipsită de viață"], correct: 1 },
      { type: "mcq", question: "Ce ne învață toamna conform autorului?", options: ["Că trebuie să stăm doar în casă", "Că schimbarea poate fi frumoasă și necesară", "Că natura moare definitiv", "Că nu mai există speranță"], correct: 1 },
      { type: "typing", question: "Cum se numește perioada când se adună fructele și legumele?", answer: "recolta" },
      { type: "typing", question: "Ce băutură dulce se face din struguri proaspăt storși?", answer: "must" },
    ],
  },
];

// ─── CLASA 8: TODO Texte vor fi adăugate mai târziu

const ROMANIAN_PASSAGES_BY_CLASA: Record<number, ReadingPassage[]> = {
  1: PASSAGES_CLASA_1,
  2: PASSAGES_CLASA_2,
  3: PASSAGES_CLASA_3,
  4: PASSAGES_CLASA_4,
  5: PASSAGES_CLASA_5,
  6: PASSAGES_CLASA_6,
  7: PASSAGES_CLASA_7,
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
