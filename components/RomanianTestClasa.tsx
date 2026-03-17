import Link from "next/link";

// ─── GRADE DATA ────────────────────────────────────────────────────────────────
const GRADE_DATA: Record<number, {
  age: string;
  topics: { icon: string; label: string }[];
  intro: string;
  deepDive: string[];
  faqs: { q: string; a: string }[];
}> = {
  1: {
    age: "6–7",
    topics: [
      { icon: "🔤", label: "Alfabetul" },
      { icon: "🔡", label: "Silabe și sunete" },
      { icon: "📝", label: "Grupuri de litere" },
      { icon: "💬", label: "Cuvântul și propoziția" },
      { icon: "✏️", label: "Ortografie de bază" },
      { icon: "📖", label: "Lectură inițială" },
    ],
    intro: "Cu testul nostru gratuit de limba română pentru clasa 1, elevii de 6–7 ani exersează alfabetul, silabele, sunetele și primele propoziții. Testul de română pentru clasa 1 este ideal pentru debutul școlar – direct în browser, fără cont, fără instalare.",
    deepDive: [
      "În clasa 1, centrul activității de limba română este învățarea alfabetului și a corespondenței dintre sunete și litere. Elevii descoperă literele mari și mici, exersează despărțirea cuvintelor în silabe și încep să citească și să scrie cuvinte simple. Testul nostru online însoțește acest parcurs de învățare într-un mod ludic și gratuit.",
      "Citirea cuvintelor simple și a propozițiilor scurte este un obiectiv central al clasei 1. Copiii își dezvoltă treptat înțelegerea textului și învață să identifice informații dintr-un text cu cuvinte cunoscute. Testul de română clasa 1 online poate fi folosit oricând pentru a verifica progresul lecturii.",
      "Grupurile de litere – ce, ci, ge, gi, che, chi, ghe, ghi – reprezintă o provocare importantă pentru elevii de clasa 1. Ortografia de bază, scrierea cu majusculă la începutul propoziției și folosirea semnelor de punctuație elementare (punct, semnul întrebării) sunt exersate sistematic în testul nostru.",
      "Părinții și cadrele didactice pot folosi gratuit testul de română clasa 1 oricând, fie pentru exersare acasă, fie pentru verificarea nivelului de cunoștințe. Toate exercițiile sunt adaptate programei școlare a clasei 1 și pot fi repetate de câte ori este nevoie – fără descărcare, fără cont.",
    ],
    faqs: [
      { q: "Ce se învață la Limba Română în clasa 1?", a: "În clasa 1, copiii învață literele alfabetului, asocierea sunet–literă, despărțirea cuvintelor în silabe, citirea și scrierea cuvintelor simple, formarea propozițiilor și primele reguli de ortografie (majuscula la început de propoziție, grupurile de litere ce, ci, ge, gi, che, chi, ghe, ghi)." },
      { q: "Este gratuit testul de română pentru clasa 1?", a: "Da, testul este complet gratuit. Nu este necesară nicio înregistrare sau instalare." },
      { q: "Cât durează un test de română pentru clasa 1?", a: "Un test durează aproximativ 5–10 minute, în funcție de numărul de exerciții. Copiii pot relua testul oricând pentru a-și îmbunătăți rezultatul." },
      { q: "Pentru ce vârstă este potrivit testul?", a: "Testul se adresează elevilor de clasa 1, cu vârsta de 6–7 ani. Poate fi folosit și ca recapitulare pentru elevii de clasa a 2-a care doresc să consolideze cunoștințele de bază." },
      { q: "Ce teme sunt evaluate?", a: "Sunt evaluate: alfabetul și literele, silabe și sunete, grupurile de litere (ce, ci, ge, gi, che, chi, ghe, ghi), scrierea corectă a cuvintelor simple, formarea propozițiilor și lectura inițială." },
      { q: "Poate copilul meu să dea testul de mai multe ori?", a: "Da, testul poate fi repetat de câte ori este necesar, fără nicio restricție." },
    ],
  },
  2: {
    age: "7–8",
    topics: [
      { icon: "🏷️", label: "Părți de vorbire" },
      { icon: "✅", label: "Ortografie avansată" },
      { icon: "💬", label: "Propoziția" },
      { icon: "📖", label: "Textul narativ" },
      { icon: "📚", label: "Vocabular" },
      { icon: "✍️", label: "Comunicare scrisă" },
    ],
    intro: "Testul gratuit de limba română pentru clasa a 2-a ajută elevii de 7–8 ani să exerseze părțile de vorbire, ortografia, propoziția și textul narativ. Testul de română clasa 2 este ideal pentru consolidarea cunoștințelor din primul ciclu – direct în browser, fără cont.",
    deepDive: [
      "În clasa a 2-a, elevii sunt introduși sistematic în studiul limbii române: ei învață să recunoască substantivul, verbul și adjectivul în contexte simple și să formuleze propoziții corecte. Testul nostru de română clasa 2 verifică aceste noțiuni de bază și pregătește elevii pentru clasele următoare.",
      "Ortografia avansată este un punct central al clasei a 2-a: elevii exersează scrierea corectă a cuvintelor cu â și î, cu s și ș, cu t și ț, precum și folosirea corectă a apostrofului și a cratimei. Testul online de română pentru clasa 2 oferă exerciții variate și adaptate programei școlare.",
      "Înțelegerea textului narativ simplu este un obiectiv important în clasa a 2-a. Elevii citesc texte scurte, identifică personajele și momentele principale ale acțiunii și formulează răspunsuri la întrebări legate de text. Testul nostru include exerciții de lectură și comprehensiune adaptate vârstei.",
      "Părinții și cadrele didactice pot folosi gratuit testul de română clasa 2 pentru pregătirea lucrărilor de control sau pentru verificarea progresului. Toate exercițiile respectă programa școlară și pot fi reluate oricând, fără necesitatea unui cont sau a unei descărcări.",
    ],
    faqs: [
      { q: "Ce se învață la Limba Română în clasa a 2-a?", a: "În clasa a 2-a, elevii aprofundează citirea și scrierea, învatăparțile de vorbire de bază (substantiv, verb, adjectiv), regulile de ortografie (â/î, s/ș, t/ț, apostroful, cratima), formarea propozițiilor și înțelegerea textelor narative simple." },
      { q: "Este gratuit testul de română pentru clasa a 2-a?", a: "Da, complet gratuit. Nu este nevoie de cont sau descărcare." },
      { q: "Cât durează un test de română pentru clasa a 2-a?", a: "Un test durează 5–10 minute. Poate fi repetat oricând pentru a consolida cunoștințele sau a remedia lacunele." },
      { q: "Pentru ce vârstă este potrivit testul?", a: "Testul se adresează elevilor de clasa a 2-a, cu vârsta de 7–8 ani. Este util și ca recapitulare pentru elevii de clasa a 3-a." },
      { q: "Ce teme sunt evaluate?", a: "Sunt evaluate: substantivul, verbul și adjectivul, ortografia (â/î, s/ș, t/ț), propoziția simplă și dezvoltată, vocabularul de bază și înțelegerea textului narativ." },
      { q: "Pot repeta testul de mai multe ori?", a: "Da, testul poate fi reluat oricând, fără restricții." },
    ],
  },
  3: {
    age: "8–9",
    topics: [
      { icon: "🏷️", label: "Substantivul (gen, număr, caz)" },
      { icon: "⏳", label: "Verbul (conjugare)" },
      { icon: "🌿", label: "Adjectivul" },
      { icon: "💬", label: "Propoziția dezvoltată" },
      { icon: "✍️", label: "Compunere" },
      { icon: "📖", label: "Lectură și comprehensiune" },
    ],
    intro: "Testul gratuit de limba română pentru clasa a 3-a ajută elevii de 8–9 ani să exerseze substantivul, verbul, adjectivul și propoziția dezvoltată. Testul de română clasa 3 este perfect pentru pregătirea lucrărilor de control – direct în browser, fără cont, fără instalare.",
    deepDive: [
      "În clasa a 3-a, noțiunile de gramatică se aprofundează semnificativ: elevii învață categoriile gramaticale ale substantivului (gen, număr, caz) și ale adjectivului (acordul cu substantivul). Testul nostru de română clasa 3 verifică aceste concepte printr-un sistem de exerciții interactive și gratuite.",
      "Verbul este un alt subiect central al clasei a 3-a: elevii învatăconjugarea verbelor la prezent, trecut și viitor, identifică persoana și numărul și recunosc verbul predicat în propoziție. Cu testul de română online pentru clasa 3, aceste forme verbale pot fi exersate ori de câte ori este nevoie.",
      "Propoziția dezvoltată și compunerea sunt obiective esențiale în clasa a 3-a. Elevii învață să construiască propoziții corecte din punct de vedere gramatical, să recunoasscăsubiectul și predicatul și să redacteze texte scurte cu structură logică. Testul nostru include și exerciții de scriere creativă adaptate vârstei.",
      "Cadrele didactice și părinții pot utiliza gratuit testul de română clasa 3 oricând, atât pentru pregătirea evaluărilor, cât și pentru consolidarea zilnică a cunoștințelor. Exercițiile sunt aliniate la programa școlară și pot fi repetate fără limită – fără descărcare, fără cont.",
    ],
    faqs: [
      { q: "Ce se învață la Limba Română în clasa a 3-a?", a: "În clasa a 3-a, elevii studiază categoriile gramaticale ale substantivului (gen, număr, caz), conjugarea verbului (prezent, trecut, viitor), acordul adjectivului cu substantivul, propoziția simplă și dezvoltată (subiect, predicat), compunerea de texte scurte și lectura cu înțelegere." },
      { q: "Este gratuit testul de română pentru clasa a 3-a?", a: "Da, complet gratuit și fără cont." },
      { q: "Cât durează testul de română pentru clasa a 3-a?", a: "Un test durează 5–10 minute. Elevii pot repeta testul oricând pentru a-și consolida cunoștințele." },
      { q: "Pentru ce vârstă este recomandat testul?", a: "Testul este destinat elevilor de clasa a 3-a (8–9 ani). Este util și ca pregătire pentru clasa a 4-a sau după vacanța de vară." },
      { q: "Ce teme sunt testate?", a: "Sunt evaluate: categoriile substantivului (gen, număr, caz), conjugarea verbului, acordul adjectivului, propoziția (subiect, predicat, complement), ortografia și înțelegerea textului narativ." },
      { q: "Pot repeta testul de mai multe ori?", a: "Da, poate fi reluat de oricâte ori este nevoie." },
    ],
  },
  4: {
    age: "9–10",
    topics: [
      { icon: "🔗", label: "Gramatică avansată" },
      { icon: "🔍", label: "Analiză gramaticală" },
      { icon: "✍️", label: "Compunere narativă și descriptivă" },
      { icon: "✅", label: "Ortografie și punctuație" },
      { icon: "📚", label: "Vocabular bogat" },
      { icon: "📖", label: "Lectură și interpretare" },
    ],
    intro: "Testul gratuit de limba română pentru clasa a 4-a ajută elevii de 9–10 ani să exerseze gramatica avansată, analiza gramaticală, compunerea și ortografia. Testul de română clasa 4 este ideal pentru pregătirea evaluărilor naționale și a tranziției spre gimnaziu – direct în browser, fără cont.",
    deepDive: [
      "În clasa a 4-a, gramatica limbii române se aprofundează considerabil: elevii consolidează cunoștințele despre substantiv, adjectiv, verb, pronume și articol, și încep analiza gramaticală a propozițiilor. Testul nostru de română clasa 4 pregătește elevii pentru evaluarea de la finalul ciclului primar.",
      "Analiza gramaticală și cea sintactică sunt competențe esențiale în clasa a 4-a. Elevii învață să identifice părțile de propoziție (subiect, predicat, atribut, complement) și să realizeze analiza morfologică a cuvintelor. Cu testul online de română pentru clasa 4, aceste abilități sunt exersate sistematic.",
      "Compunerea narativă și descriptivă ocupă un loc important în programa clasei a 4-a. Elevii scriu texte cu introducere, cuprins și încheiere, folosesc figuri de stil simple și construiesc dialoguri. Testul nostru include exerciții de exprimare scrisă adaptate cerințelor programei școlare.",
      "Cadrele didactice și părinții pot folosi gratuit testul de română clasa 4 pentru pregătirea lucrărilor de control sau a evaluărilor naționale. Toate exercițiile respectă programa școlară și pot fi repetate de oricâte ori, fără cont și fără descărcare.",
    ],
    faqs: [
      { q: "Ce se învață la Limba Română în clasa a 4-a?", a: "În clasa a 4-a, elevii studiază gramatica avansată (substantiv, adjectiv, verb, pronume, articol), analiza morfologică și sintactică, compunerea narativă și descriptivă, ortografia și punctuația, precum și lectura cu înțelegere a textelor literare și nonliterare." },
      { q: "Este gratuit testul de română pentru clasa a 4-a?", a: "Da, complet gratuit și fără cont." },
      { q: "Cât durează testul de română pentru clasa a 4-a?", a: "Un test durează 5–10 minute. Este ideal pentru pregătirea continuă a evaluărilor sau a examenului de final de ciclu primar." },
      { q: "Pentru ce vârstă este recomandat testul?", a: "Testul este destinat elevilor de clasa a 4-a (9–10 ani). Este foarte util ca pregătire pentru evaluarea de la finalul ciclului primar și pentru tranziția la gimnaziu." },
      { q: "Ce teme sunt testate?", a: "Sunt evaluate: analiza morfologică și sintactică, compunerea narativă și descriptivă, ortografia și punctuația, vocabularul și sinonimele, antonimele, câmpurile semantice, lectura și înțelegerea textelor." },
      { q: "Pot repeta testul de mai multe ori?", a: "Da, fără nicio restricție." },
    ],
  },
  5: {
    age: "10–11",
    topics: [
      { icon: "🏷️", label: "Morfologie" },
      { icon: "🔡", label: "Fonetică" },
      { icon: "📚", label: "Lexic și vocabular" },
      { icon: "📖", label: "Textul narativ literar" },
      { icon: "🔗", label: "Sintaxă de bază" },
      { icon: "✍️", label: "Compunere" },
    ],
    intro: "Testul gratuit de limba română pentru clasa a 5-a ajută elevii de 10–11 ani să exerseze morfologia, fonetica, lexicul și analiza textului narativ. Testul de română clasa 5 este ideal pentru debutul la gimnaziu – direct în browser, fără cont, fără instalare.",
    deepDive: [
      "Clasa a 5-a marchează trecerea la gimnaziu, unde studiul limbii române devine mai sistematic și mai aprofundat. Morfologia este reluată și extinsă: elevii studiază în detaliu substantivul, articolul, adjectivul, pronumele, numeralul și verbul. Testul nostru de română clasa 5 acoperă toate aceste noțiuni de bază ale morfologiei.",
      "Fonetica este introdusă ca disciplină distinctă în clasa a 5-a: elevii învață despre vocale, consoane, diftongi, triftongi și hiat, despre silabă și despărțirea corectă a cuvintelor în silabe. Cu testul de română online pentru clasa 5, aceste cunoștințe fonologice sunt verificate și consolidate.",
      "Textul narativ literar este studiat în profunzime în clasa a 5-a: elevii identifică modurile de expunere (narațiunea, descrierea, dialogul), analizează subiectul operei literare, momentele subiectului și caracterizează personajele. Testul nostru include exerciții de lectură și interpretare adaptate nivelului clasei a 5-a.",
      "Cadrele didactice și părinții pot folosi gratuit testul de română clasa 5 pentru pregătirea tezelor sau pentru verificarea cunoștințelor acumulate. Toate exercițiile sunt aliniate la programa școlară în vigoare și pot fi repetate fără limită – fără descărcare, fără cont.",
    ],
    faqs: [
      { q: "Ce se învață la Limba Română în clasa a 5-a?", a: "În clasa a 5-a, elevii studiază morfologia (substantiv, articol, adjectiv, pronume, numeral, verb), fonetica (vocale, consoane, diftongi, triftongi, hiat, silaba), lexicul (sinonime, antonime, paronime, omonime), textul narativ literar (moduri de expunere, momentele subiectului, personaje) și bazele sintaxei propoziției." },
      { q: "Este gratuit testul de română pentru clasa a 5-a?", a: "Da, complet gratuit. Nu este necesară nicio înregistrare." },
      { q: "Cât durează testul de română pentru clasa a 5-a?", a: "Un test durează 5–10 minute și poate fi repetat oricând pentru a consolida cunoștințele sau a pregăti o teză." },
      { q: "Pentru ce vârstă este recomandat testul?", a: "Testul este destinat elevilor de clasa a 5-a (10–11 ani). Este util și pentru elevii de clasa a 6-a care doresc să recapituleze morfologia și fonetica." },
      { q: "Ce teme sunt evaluate?", a: "Sunt evaluate: morfologia (clasele morfologice de bază), fonetica (vocale, consoane, silaba, despărțirea în silabe), lexicul (sinonime, antonime, paronime), textul narativ (moduri de expunere, personaje, momente ale subiectului) și sintaxa propoziției simple." },
      { q: "Pot repeta testul de mai multe ori?", a: "Da, testul poate fi reluat de oricâte ori este nevoie." },
    ],
  },
  6: {
    age: "11–12",
    topics: [
      { icon: "🏷️", label: "Morfologie avansată" },
      { icon: "🔗", label: "Sintaxă" },
      { icon: "📖", label: "Textul descriptiv literar" },
      { icon: "🎭", label: "Stilistică" },
      { icon: "✍️", label: "Compunere argumentativă" },
      { icon: "💬", label: "Figuri de stil" },
    ],
    intro: "Testul gratuit de limba română pentru clasa a 6-a ajută elevii de 11–12 ani să exerseze morfologia avansată, sintaxa, textul descriptiv și figurile de stil. Testul de română clasa 6 pregătește ideal pentru teze și lucrări de control – direct în browser, fără cont.",
    deepDive: [
      "În clasa a 6-a, morfologia este aprofundată: elevii consolidează cunoștințele despre toate clasele morfologice studiate și încep să lucreze cu adverbul, prepoziția, conjuncția și interjiecția. Analiza morfologică completă devine o cerință frecventă la evaluări, iar testul nostru de română clasa 6 pregătește elevii pentru aceasta.",
      "Sintaxa frazei este introdusă sistematic în clasa a 6-a: elevii învaț să identifice propozițiile principale și subordonate, să recunoască raporturile de coordonare și subordonare. Testul online de română pentru clasa 6 include exerciții variate de analiză sintactică, adaptate nivelului de dificultate al clasei.",
      "Textul descriptiv literar – descrierea de natură (pastelul), portretul literar – este studiat în profunzime în clasa a 6-a. Elevii descoperă figurile de stil (epitetul, comparația, metafora, personificarea, repetiția) și analizează efectul lor expresiv. Testul nostru include exerciții de identificare și analiză a figurilor de stil.",
      "Compunerea argumentativă este introdusă progresiv în clasa a 6-a. Elevii învată să formuleze o opinie, să o susțintă cu argumente și exemple și să construiască un text coeziv. Cadrele didactice și părinții pot folosi gratuit testul de română clasa 6 oricând, fără cont și fără descărcare.",
    ],
    faqs: [
      { q: "Ce se învață la Limba Română în clasa a 6-a?", a: "În clasa a 6-a, elevii studiază morfologia avansată (adverb, prepoziție, conjuncție, interjecție), sintaxa frazei (propoziția principală și subordonată, coordonare și subordonare), textul descriptiv literar (pastelul, portretul), figurile de stil (epitet, comparație, metaforă, personificare) și compunerea argumentativă." },
      { q: "Este gratuit testul de română pentru clasa a 6-a?", a: "Da, complet gratuit și fără cont." },
      { q: "Cât durează testul de română pentru clasa a 6-a?", a: "Un test durează 5–10 minute și poate fi repetat oricând pentru a se pregăti pentru o teză sau lucrare de control." },
      { q: "Pentru ce vârstă este recomandat testul?", a: "Testul este destinat elevilor de clasa a 6-a (11–12 ani). Este util și pentru elevii de clasa a 7-a care doresc să recapituleze morfologia și sintaxa." },
      { q: "Ce teme sunt evaluate?", a: "Sunt evaluate: morfologia completă, sintaxa frazei (coordonare, subordonare), figurile de stil (epitet, comparație, metaforă, personificare, repetiție), textul descriptiv și compunerea argumentativă de bază." },
      { q: "Pot repeta testul de mai multe ori?", a: "Da, fără nicio restricție." },
    ],
  },
  7: {
    age: "12–13",
    topics: [
      { icon: "🔗", label: "Sintaxă avansată" },
      { icon: "📖", label: "Textul narativ și descriptiv" },
      { icon: "🎭", label: "Stilistică avansată" },
      { icon: "💫", label: "Figuri de stil" },
      { icon: "📝", label: "Comentariu literar" },
      { icon: "✍️", label: "Compunere elaborată" },
    ],
    intro: "Testul gratuit de limba română pentru clasa a 7-a ajută elevii de 12–13 ani să exerseze sintaxa avansată, figurile de stil, comentariul literar și compunerea. Testul de română clasa 7 este ideal pentru pregătirea tezelor semestriale – direct în browser, fără cont, fără instalare.",
    deepDive: [
      "Sintaxa avansată a frazei reprezintă un subiect central al clasei a 7-a: elevii aprofundează cunoștințele despre propoziția subordonată (subiectivă, predicativă, atributivă, completivă directă și indirectă, circumstanțiale) și exersează analiza sintactică complexă. Testul nostru de română clasa 7 verifică aceste structuri sintactice printr-un sistem interactiv de exerciții.",
      "Figurile de stil sunt studiate aprofundat în clasa a 7-a: alăturipede epitet, comparație și metaforă, elevii învaț hiperbola, litota, ironia, antiteza și anadiploza. Identificarea și interpretarea figurilor de stil în texte literare este o competență evaluată frecvent, iar testul nostru oferă exerciții diverse în acest sens.",
      "Comentariul literar este introdus sistematic în clasa a 7-a. Elevii exersează structurarea unui comentariu (prezentarea temei, analiza mijloacelor de expresie, concluzie) și redactează texte argumentative despre operele literare studiate. Testul nostru include exerciții de comprehensiune și interpretare a textelor.",
      "Cadrele didactice și părinții pot folosi gratuit testul de română clasa 7 oricând, pentru pregătirea tezelor sau recapitularea sistematică. Toate exercițiile sunt aliniate la programa școlară în vigoare și pot fi reluate fără limită, fără cont și fără descărcare.",
    ],
    faqs: [
      { q: "Ce se învață la Limba Română în clasa a 7-a?", a: "În clasa a 7-a, elevii studiază sintaxa avansată a frazei (propoziții subordonate de toate tipurile), figurile de stil (hiperbolă, litotan, ironie, antiteză, anadiplosă), comentariul literar, textul narativ și descriptiv în profunzime, stilistica și compunerea elaborată." },
      { q: "Este gratuit testul de română pentru clasa a 7-a?", a: "Da, complet gratuit și fără cont." },
      { q: "Cât durează testul de română pentru clasa a 7-a?", a: "Un test durează 5–10 minute. Elevii de clasa a 7-a îl pot folosi pentru pregătirea sistematică a tezelor sau pentru recapitularea înainte de evaluări." },
      { q: "Pentru ce vârstă este recomandat testul?", a: "Testul este destinat elevilor de clasa a 7-a (12–13 ani). Este util și pentru elevii de clasa a 8-a care doresc să recapituleze sintaxa și figurile de stil." },
      { q: "Ce teme sunt evaluate?", a: "Sunt evaluate: sintaxa frazei (toate tipurile de propoziții subordonate), figurile de stil avansate (hiperbolă, litotă, ironie, antiteză), comentariul literar, textul narativ și descriptiv (moduri de expunere, perspectivă narativă, caracterizarea personajelor) și compunerea elaborată." },
      { q: "Pot repeta testul de mai multe ori?", a: "Da, testul poate fi reluat de oricâte ori este nevoie." },
    ],
  },
  8: {
    age: "13–14",
    topics: [
      { icon: "🔗", label: "Sintaxă completă" },
      { icon: "🏷️", label: "Morfologie completă" },
      { icon: "💫", label: "Figuri de stil" },
      { icon: "📝", label: "Comentariu literar" },
      { icon: "📖", label: "Texte literare și nonliterare" },
      { icon: "🎓", label: "Pregătire Evaluare Națională" },
    ],
    intro: "Testul gratuit de limba română pentru clasa a 8-a ajută elevii de 13–14 ani să se pregătească pentru Evaluarea Națională – sintaxă, morfologie, figuri de stil, comentariu literar și texte nonliterare. Testul de română clasa 8 acoperă toată materia examenului – direct în browser, fără cont.",
    deepDive: [
      "Clasa a 8-a este marcată de pregătirea pentru Evaluarea Națională la Limba Română. Toată materia de morfologie și sintaxă studiată pe parcursul gimnaziului este recapitulată și consolidată: elevii exersează analiza morfologică a tuturor claselor de cuvinte și analiza sintactică a propozițiilor și frazelor complexe. Testul nostru de română clasa 8 reproduce structura cerințelor de la evaluare.",
      "Figurile de stil și mijloacele de expresie artistică sunt evaluate intensiv în clasa a 8-a. Elevii identifică și comentează epitetul, comparația, metafora, personificarea, hiperbola, inversiunea, repetiția și alte procedee stilistice în texte din literatura română. Testul online de română pentru clasa 8 oferă exerciții variate de analiză stilistică.",
      "Comentariul literar și eseul structurat sunt competențe esențiale pentru Evaluarea Națională. Elevii din clasa a 8-a exersează redactarea unui comentariu complet: prezentarea temei și a viziunii, analiza mijloacelor artistice, exemplificarea din text și concluzia. Testul nostru include exerciții de structurare a comentariului literar.",
      "Textele nonliterare – articolul, interviul, știrea, textul informativ – sunt evaluate la Evaluarea Națională, alături de textele literare. Cadrele didactice și părinții pot folosi gratuit testul de română clasa 8 oricând, pentru recapitulare sistematică sau pregătire intensivă, fără cont și fără descărcare.",
    ],
    faqs: [
      { q: "Ce se învață la Limba Română în clasa a 8-a?", a: "În clasa a 8-a se recapitulează toată materia de gimnaziu: morfologia completă (toate clasele morfologice), sintaxa frazei (toate tipurile de subordonate), figurile de stil, comentariul literar, textele nonliterare (articol, interviu, știre) și eseul structurat. Obiectivul principal este pregătirea pentru Evaluarea Națională." },
      { q: "Este gratuit testul de română pentru clasa a 8-a?", a: "Da, complet gratuit și fără cont." },
      { q: "Cât durează testul de română pentru clasa a 8-a?", a: "Un test durează 5–10 minute. Este ideal pentru pregătirea zilnică înaintea Evaluării Naționale sau pentru verificarea lacunelor." },
      { q: "Pentru ce vârstă este recomandat testul?", a: "Testul este destinat elevilor de clasa a 8-a (13–14 ani), în special celor care se pregătesc pentru Evaluarea Națională la Limba Română." },
      { q: "Ce teme sunt evaluate?", a: "Sunt evaluate: morfologia completă, sintaxa frazei, figurile de stil, comentariul literar, textele nonliterare, ortografia și punctuația – toate subiectele din programa Evaluării Naționale." },
      { q: "Pot repeta testul de mai multe ori?", a: "Da, fără nicio restricție – ideal pentru pregătirea intensivă." },
    ],
  },
};

// ─── COMPONENT ─────────────────────────────────────────────────────────────────
export default function RomanianTestClasa({ grade }: { grade: number }) {
  const data = GRADE_DATA[grade];
  if (!data) return null;

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Acasă", item: "https://plizio.com/" },
      { "@type": "ListItem", position: 2, name: "Test Limba Română", item: "https://plizio.com/teste-romana/" },
      { "@type": "ListItem", position: 3, name: `Test Limba Română Clasa ${grade}`, item: `https://plizio.com/teste-romana/clasa-${grade}/` },
    ],
  };

  return (
    <main className="min-h-screen" style={{ background: "#0A0A1A", color: "white" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

      <div className="max-w-3xl mx-auto px-4 py-8">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-white/40 mb-6 flex-wrap">
          <a href="/" className="hover:text-white/70 transition-colors">Acasă</a>
          <span>›</span>
          <a href="/teste-romana/" className="hover:text-white/70 transition-colors">Test Limba Română</a>
          <span>›</span>
          <span className="text-white/70">Clasa {grade}</span>
        </nav>

        {/* Hero */}
        <div className="mb-10">
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
            style={{ background: "rgba(59,130,246,0.1)", color: "#3B82F6", border: "1px solid rgba(59,130,246,0.25)" }}
          >
            Clasa {grade} · Vârsta {data.age} · Gratuit · Fără cont
          </div>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            Test Limba Română Clasa {grade} –{" "}
            <span style={{ color: "#00FF88" }}>Exersează online gratuit</span>
          </h1>
          <p className="text-white/65 text-base leading-relaxed mb-5">{data.intro}</p>
          <a
            href="/romaniantest"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-black text-black text-sm"
            style={{ background: "linear-gradient(135deg, #3B82F6, #00FF88)" }}
          >
            ▶ Începe testul
          </a>
        </div>

        {/* Topics */}
        <section className="mb-10">
          <h2 className="text-2xl font-black mb-4" style={{ color: "#3B82F6" }}>
            Teme în Limba Română Clasa {grade}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {data.topics.map((t, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-2xl"
                style={{ background: "#12122A", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <span className="text-2xl flex-shrink-0">{t.icon}</span>
                <span className="text-white/80 text-xs font-semibold leading-tight">{t.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Deep Dive */}
        <section className="mb-10">
          <h2 className="text-2xl font-black mb-4" style={{ color: "#EF4444" }}>
            Limba Română Clasa {grade} – În detaliu
          </h2>
          <div className="space-y-4 text-white/65 text-sm leading-relaxed">
            {data.deepDive.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>

        {/* CTA mid */}
        <div
          className="flex flex-col sm:flex-row items-center gap-4 p-5 rounded-2xl mb-10"
          style={{ background: "rgba(59,130,246,0.05)", border: "1px solid rgba(59,130,246,0.15)" }}
        >
          <div className="flex-1">
            <p className="font-black text-white text-base mb-1">Ești pregătit pentru test?</p>
            <p className="text-white/50 text-xs">Alege clasa direct în joc – gratuit, fără înregistrare.</p>
          </div>
          <a
            href="/romaniantest"
            className="flex-shrink-0 px-6 py-3 rounded-2xl font-black text-black text-sm"
            style={{ background: "linear-gradient(135deg, #3B82F6, #00FF88)" }}
          >
            ▶ Începe acum
          </a>
        </div>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-black mb-4" style={{ color: "#EAB308" }}>
            Întrebări frecvente – Test Limba Română Clasa {grade}
          </h2>
          <div className="space-y-3">
            {data.faqs.map((faq, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl"
                style={{ background: "#12122A", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <p className="font-bold text-white text-sm mb-1">{faq.q}</p>
                <p className="text-white/60 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Other grades */}
        <section className="mb-10">
          <h2 className="text-xl font-black mb-4 text-white/80">Alte clase</h2>
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8].filter((g) => g !== grade).map((g) => (
              <a
                key={g}
                href={`/teste-romana/clasa-${g}/`}
                className="px-4 py-2 rounded-xl text-sm font-bold transition-all hover:opacity-80"
                style={{ background: "rgba(59,130,246,0.1)", color: "#3B82F6", border: "1px solid rgba(59,130,246,0.25)" }}
              >
                Clasa {g}
              </a>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div
          className="text-center py-6 rounded-2xl"
          style={{ background: "rgba(0,255,136,0.04)", border: "1px solid rgba(0,255,136,0.12)" }}
        >
          <p className="text-white/60 text-sm mb-3">Începe testul de limba română pentru clasa {grade} acum!</p>
          <a
            href="/romaniantest"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-black text-black text-base"
            style={{ background: "linear-gradient(135deg, #00FF88, #3B82F6)" }}
          >
            🚀 Începe testul de Română
          </a>
          <p className="text-white/25 text-xs mt-3">Gratuit · Fără cont · Clasa {grade} · Disponibil imediat</p>
        </div>

      </div>
    </main>
  );
}
