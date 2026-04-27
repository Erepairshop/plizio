import fs from 'fs';

function updateFile(filePath, updates) {
  let content = fs.readFileSync(filePath, 'utf8');
  for (const [id, data] of Object.entries(updates)) {
    const startIdx = content.indexOf(`id: "${id}"`);
    if (startIdx === -1) continue;
    
    let nextPoiIdx = content.indexOf('  {', startIdx + 10);
    if (nextPoiIdx === -1) nextPoiIdx = content.indexOf('];', startIdx);
    
    let block = content.substring(startIdx, nextPoiIdx);
    
    if (data.desc) {
      block = block.replace(/ro:\s*""/, `ro: "${data.desc}"`);
    }
    
    if (data.facts) {
      const faMatch = block.match(/factsAdvanced:\s*{[\s\S]*?ro:\s*\[\s*\]/);
      if (faMatch) {
        block = block.replace(/ro:\s*\[\s*\]/, `ro: [\n        "${data.facts.join('",\n        "')}"\n      ]`);
      } else if (!block.includes('factsAdvanced:')) {
        block = block.replace(/facts:\s*{[\s\S]*?}\n/, (m) => {
          return m + `    factsAdvanced: {\n      de: [],\n      hu: [],\n      ro: [\n        "${data.facts.join('",\n        "')}"\n      ],\n      en: []\n    },\n`;
        });
      } else {
         // factsAdvanced exists but ro is not empty list (maybe "" or something else)
         block = block.replace(/factsAdvanced:\s*{[\s\S]*?ro:\s*\[[\s\S]*?\]/, (m) => {
            if (m.includes('[]') || m.match(/ro:\s*\[\s*\]/)) {
               return m.replace(/ro:\s*\[\s*\]/, `ro: [\n        "${data.facts.join('",\n        "')}"\n      ]`);
            }
            return m;
         });
      }
    }
    
    content = content.substring(0, startIdx) + block + content.substring(startIdx + block.length);
  }
  fs.writeFileSync(filePath, content);
}

// Final big data object
const hu1 = {
  "city-obuda-extra": { facts: ["Óbuda este cel mai vechi sector al Budapestei, cu rădăcini în epoca romană.", "Numele său înseamnă 'Buda Veche' în limba maghiară.", "Adăpostește amfiteatrul militar și cel civil al vechiului Aquincum.", "Piața Fő tér este centrul istoric, păstrând clădiri baroce superbe.", "În secolul al XIX-lea a fost un important centru al industriei textile.", "Muzeul Kiscelli prezintă istoria orașului într-o fostă mănăstire.", "Insula Hajógyári din Óbuda găzduiește celebrul festival Sziget.", "Este renumit pentru cramele și restaurantele sale cu specific tradițional."] },
  "city-ujpest-extra": { facts: ["Újpest a fost înființat în 1840 și a devenit oraș în 1907.", "Este al IV-lea sector al Budapestei din anul 1950.", "Sectorul a fost inima industriei ușoare maghiare (piele, mobilă, sticlă).", "Echipa de fotbal Újpest FC este una dintre cele mai vechi din țară.", "Primăria sectorului este un monument arhitectural neogotic impresionant.", "Újpest are o faleză pitorească pe malul Dunării.", "Sinagoga din Újpest este o clădire istorică de o frumusețe aparte.", "Piața Újpest este unul dintre cele mai mari centre comerciale locale."] },
  "geschichte-citadella-extra": { facts: ["Citadela a fost construită de austrieci după Revoluția din 1848-1849.", "Se află pe vârful dealului Gellért, la o înălțime de 235 metri.", "Fortăreața avea scopul de a intimida populația Budapestei.", "Statuia Libertății, ridicată în 1947, domină întreg ansamblul.", "În timpul celui de-al Doilea Război Mondial, a servit ca buncăr și punct de observație.", "Oferă cea mai completă panoramă asupra Dunării și a orașului Budapesta.", "Situl face parte din Patrimoniul Mondial UNESCO.", "Interiorul găzduiește expoziții despre istoria fortificației și a orașului."] },
  "city-szentlorinc-extra": { facts: ["Szentlőrinc se află în regiunea Baranya, fiind un hub pentru agricultura locală.", "Este renumit pentru 'Zilele Fermierilor din Szentlőrinc', un târg agricol major.", "Orașul are o istorie lungă, fiind atestat documentar încă din evul mediu.", "Stația de cale ferată este un punct de tranzit important spre Pécs.", "Localitatea dispune de bazine termale apreciate de turiști.", "Szentlőrinc este înconjurat de câmpii fertile și dealuri line.", "Comunitatea păstrează tradiții multiculturale, specifice sudului Ungariei.", "În apropiere se află zona viticolă Villány-Siklós."] },
  "geo-mecsek-extra": { facts: ["Munții Mecsek sunt situați în sudul Ungariei, lângă orașul Pécs.", "Cel mai înalt vârf este Zengő, cu o altitudine de 682 de metri.", "Masivul este bogat în resurse de uraniu și cărbune, exploatate în trecut.", "Parcul Național Dunăre-Drava protejează zone întinse din acest masiv.", "Mecsek este renumit pentru numeroasele sale peșteri, precum Abaliget.", "Flora include specii endemice rari, cum este bujorul de munte.", "Există peste 1.000 de kilometri de trasee marcate pentru drumeție.", "Munții influențează clima orașului Pécs, oferind protecție împotriva vânturilor."] },
  "geschichte-pecsvaradi-var-extra": { facts: ["Cetatea Pécsvárad a fost inițial o mănăstire benedictină fondată de Sfântul Ștefan.", "Aici se află una dintre cele mai vechi capele din Ungaria, datând din secolul XI.", "Cetatea îmbină arhitectura religioasă cu cea militară de apărare.", "Situl este un loc memorial național de o importanță deosebită.", "Grădina cetății găzduiește un castan secular imens, monument al naturii.", "Muzeul prezintă istoria mănăstirii și viața cotidiană a călugărilor.", "Pécsvárad este situat la poalele muntelui Zengő.", "Anual se organizează Festivalul Fetelor de la Pécsvárad, o tradiție folclorică."] },
  "geschichte-mecseknadasdi-templom-extra": { facts: ["Biserica Sfântul Ștefan din Mecseknádasd datează din perioada dinastiei Árpád.", "Este o biserică de mici dimensiuni, construită din piatră de carieră locală.", "Frescele interioare, deși fragmentare, sunt de o valoare istorică rară.", "Mecseknádasd este un sat cu tradiții germane puternice în munții Mecsek.", "Biserica se află pe o colină, oferind o vedere asupra văii pârâului Réka.", "Situl a fost un punct de oprire pe ruta pelerinilor spre Roma.", "Restaurările recente au scos la lumină detalii arhitecturale gotice timpurii.", "Locul emană o liniște profundă, fiind înconjurat de un mic cimitir vechi."] },
  "city-kiskunhalas-extra": { facts: ["Kiskunhalas este faimos în toată lumea pentru dantela de Halas (Halasi csipke).", "Muzeul Dantelei prezintă această artă rafinată, realizată integral manual.", "Orașul este situat în regiunea Kiskunság, pe un sol nisipos propice viței de vie.", "Băile termale din Kiskunhalas oferă ape cu conținut ridicat de iod.", "Moara de vânt Sáfán este un monument istoric păstrat în stare excelentă.", "Kiskunhalas are o comunitate ecvestră activă, cu tradiții vechi.", "Biserica Reformată din centru este o clădire neoclasică impunătoare.", "Orașul este un centru economic important pentru sudul regiunii Dunăre-Tisa."] },
  "city-lajosmizse-extra": { facts: ["Lajosmizse este poarta de intrare în 'puszta' pentru turiștii care vin dinspre nord.", "Este renumit pentru spectacolele sale de echitație și gastronomia tradițională.", "Hanul Tanyacsárda este o destinație celebră pentru turiștii internaționali.", "Localitatea a primit statutul de oraș în anul 1993.", "Lajosmizse găzduiește anual Festivalul Căpșunilor, celebrând producția locală.", "În apropiere se află ariile protejate ale Parcului Național Kiskunság.", "Biserica catolică Sfântul Ludovic este centrul spiritual al comunității.", "Zona este bogată în ferme tradiționale (tanya) care oferă cazare agroturistică."] }
};

const updatesHu2 = {
  "mountain-istallos-ko-extra": {
    desc: "Istállós-kő este unul dintre cele mai înalte vârfuri din munții Bükk, având o înălțime de 959 metri. Este faimos în special pentru peștera aflată sub vârf, unde au fost descoperite urme ale prezenței omului preistoric, inclusiv unelte din piatră și oase de urs de peșteră. Masivul este format în mare parte din calcar, oferind peisaje spectaculoase cu versanți abrupți și platouri verzi. Drumul spre vârf trece prin păduri de fagi seculari și oferă panorame unice asupra regiunii Szilvásvárad. Este o destinație esențială pentru drumeții în Ungaria, combinând frumusețea naturii cu istoria arheologică.",
    facts: ["Este al doilea cel mai înalt vârf din masivul Bükk.", "Peștera Istállós-kő este un sit arheologic de importanță europeană.", "Traseul pleacă de obicei de la faimoasa Cascadă Szalajka.", "Aici au fost găsite cele mai vechi instrumente muzicale din os din regiune.", "Pădurile din jur fac parte din Rezervația Biosferei Bükk.", "Vârful oferă vederi spre munții Tatra în condiții de vizibilitate maximă.", "Geologia locului prezintă numeroase forme de relief carstic.", "Zona este habitat pentru râsul carpatin, o specie rară în Ungaria."]
  },
  "lake-feher-to-szeged-extra": {
    desc: "Lacul Alb (Fehér-tó) de lângă Szeged este cea mai mare zonă cu apă salină din Ungaria și o arie protejată de importanță mondială. Este o componentă vitală a Parcului Național Kiskunság, fiind o stație majoră pe ruta de migrație a păsărilor europene. Sute de mii de păsări, în special macarale și gâște sălbatice, se opresc aici în fiecare toamnă. Lacul este renumit și pentru producția sa piscicolă, crapul de Szeged fiind un brand recunoscut. Vizitatorii pot parcurge trasee educative și pot folosi turnurile de observație pentru a vedea spectacolul naturii fără a deranja fauna.",
    facts: ["Lacul se întinde pe o suprafață de aproximativ 14 kilometri pătrați.", "Peste 280 de specii de păsări au fost observate în perimetrul lacului.", "În fiecare noiembrie, lacul găzduiește 'Ziua Macaralelor', un eveniment ecoturistic.", "Sistemul de heleșteie a fost amenajat la începutul secolului XX.", "Apa are o turbiditate naturală albicioasă, de unde și numele de 'Lacul Alb'.", "Este protejat prin Convenția Ramsar privind zonele umede.", "Canalele lacului colectează apele saline din regiunea înconjurătoare.", "Turnul de belvedere 'Macaraua' oferă o panoramă completă asupra oglinzii apei."]
  }
};

const updatesHu3 = {
  "historical-dunafoldvari-var-extra": {
    desc: "Cetatea din Dunaföldvár, cunoscută și sub numele de Turnul Csonka, este o fortificație emblematică situată pe malul drept al Dunării. Nucleul său este un turn de locuit masiv din secolul al XV-lea, care a supraviețuit multor asedii și perioade de abandon. Poziția sa strategică pe o înălțime deasupra fluviului a făcut din această cetate un punct cheie pentru controlul traficului naval și al trecerilor peste Dunăre. Astăzi, turnul restaurat găzduiește un muzeu local, unde sunt expuse obiecte ce atestă istoria milenară a așezării. Atmosfera istorică este completată de curtea cetății, unde se organizează diverse evenimente culturale și festivaluri în timpul verii.",
    facts: ["Turnul de locuit a fost construit în secolul al XV-lea, sub domnia regelui Sigismund.", "În perioada otomană, turnul a servit drept depozit de cereale și punct de apărare.", "De la ultimul etaj se oferă o vedere spectaculoasă asupra fluviului și a Câmpii Maghiare.", "Clădirea a fost dinamitată parțial de trupele austriece, de unde și denumirea de 'Turnul Csonka' (Trunchiat).", "Ansamblul include și o curte interioară unde se află un teatru în aer liber.", "Turnul are ziduri groase de peste doi metri, construite pentru a rezista loviturilor de tun."]
  }
};

updateFile('lib/visualLab/data/poiExtraHu1.ts', hu1);
updateFile('lib/visualLab/data/poiExtraHu2.ts', updatesHu2);
updateFile('lib/visualLab/data/poiExtraHu3.ts', updatesHu3);

console.log('Update complete.');
