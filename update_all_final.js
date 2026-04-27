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
      block = block.replace(/descriptionAdvanced:\s*{[\s\S]*?ro:\s*""/, (m) => m.replace(/ro:\s*""/, `ro: "${data.desc}"`));
    }
    
    if (data.facts) {
      const faMatch = block.match(/factsAdvanced:\s*{[\s\S]*?ro:\s*\[\s*\]/);
      if (faMatch) {
        block = block.replace(/factsAdvanced:\s*{[\s\S]*?ro:\s*\[\s*\]/, (m) => m.replace(/ro:\s*\[\s*\]/, `ro: [\n        "${data.facts.join('",\n        "')}"\n      ]`));
      } else {
        // Find facts block and append factsAdvanced after it
        block = block.replace(/facts:\s*{[\s\S]*?}\n/, (m) => {
          return m + `    factsAdvanced: {\n      de: [],\n      hu: [],\n      ro: [\n        "${data.facts.join('",\n        "')}"\n      ],\n      en: []\n    },\n`;
        });
      }
    }
    
    content = content.substring(0, startIdx) + block + content.substring(startIdx + block.length);
  }
  fs.writeFileSync(filePath, content);
}

// I will now generate a large set of updates for Hu2 and Hu3
const updatesHu2 = {
  "mountain-zengo-extra": {
    desc: "Muntele Zengő este cel mai înalt vârf din munții Mecsek, situat în sudul Ungariei, având o înălțime de 682 de metri. Numele său înseamnă 'cel care răsună', legenda spunând că muntele scoate sunete ciudate atunci când vântul bate prin văile sale. Regiunea este faimoasă pentru flora sa rară, fiind singurul loc din lume unde crește bujorul bănățean sălbatic (Paeonia officinalis banatica). De pe turnul de belvedere de pe vârf, vizitatorii pot admira o panoramă superbă care se întinde până în Croația și spre câmpia Dunării. Muntele a fost și locul unor proteste ecologiste majore la începutul anilor 2000, localnicii reușind să oprească construcția unui radar militar pentru a proteja natura.",
    facts: ["Zengő este cel mai înalt punct din regiunea Transdanubia de Sud.", "Turnul de belvedere actual a fost inaugurat în 2020, înlocuind o structură veche.", "Bujorul bănățean înflorește de obicei la mijlocul lunii mai, atrăgând mulți turiști.", "Pe munte se află și ruinele unei cetăți medievale, parțial acoperite de vegetație.", "Altitudinea exactă este de 682 de metri deasupra nivelului mării.", "În zilele senine, de pe vârf se poate vedea muntele Papuk din Croația.", "Traseele de drumeție pornesc din localitățile pitorești Pécsvárad sau Hosszúhetény.", "Muntele face parte din Aria de Protecție Peisagistică Mecsek Estic."]
  },
  "lake-kunfeher-to-extra": {
    desc: "Lacul Sărat din Kunfehértó este o destinație de vacanță populară în județul Bács-Kiskun, renumit pentru apele sale cu proprietăți curative. Situat într-un cadru natural liniștit, înconjurat de păduri de pini și stejari, lacul oferă o plajă cu nisip fin și numeroase facilități pentru camping și sporturi nautice. Apa lacului este bogată în minerale, fiind apreciată pentru tratarea afecțiunilor musculare și pentru relaxare generală. Stațiunea s-a dezvoltat masiv în ultimele decenii, devenind un loc preferat pentru familiile din regiune și pentru tinerii care participă la festivalurile de vară organizate pe malul apei. Kunfehértó reprezintă o oază de răcoare în mijlocul câmpiei aride a Kiskunság-ului.",
    facts: ["Lacul are o suprafață de aproximativ 4 hectare, fiind ideal pentru înot.", "Temperatura apei în timpul verii atinge frecvent 25-27 de grade Celsius.", "Zona este renumită pentru festivalul anual 'Zilele Berii', care atrage mii de vizitatori.", "Împrejurimile lacului sunt protejate, adăpostind specii rare de plante de nisip.", "Campingul de lângă lac este unul dintre cele mai bine dotate din sudul Ungariei.", "Pădurea adiacentă oferă trasee pentru plimbări și ciclism în umbra arborilor.", "Numele localității Kunfehértó face referire la populația cumană și la solul alb nisipos.", "Există terenuri de volei pe plajă și puncte de închiriere pentru bărci și hidrobiciclete."]
  },
  "river-harmas-koros-extra": {
    desc: "Crișul Triplu (Hármas-Körös) este unul dintre cele mai pitorești râuri din estul Ungariei, format prin confluența Crișului Dublu și a Crișului Repede. Râul șerpuiește prin județele Békés și Jász-Nagykun-Szolnok, având o luncă bogată în brațe moarte și păduri inundabile de o frumusețe sălbatică. Este o destinație de top pentru pescuit, fiind renumit pentru diversitatea speciilor de pești și pentru liniștea malurilor sale. Ecluzele și sistemele de irigații de pe cursul său sunt monumente ale ingineriei hidrotehnice maghiare. O plimbare cu barca pe Crișul Triplu oferă ocazia de a observa barze negre, vidre și o vegetație luxuriantă care amintește de peisajele de odinioară ale câmpiei.",
    facts: ["Crișul Triplu se varsă în Tisa în apropierea orașului Csongrád.", "Lungimea totală a cursului său este de aproximativ 91 de kilometri.", "Digurile de protecție împotriva inundațiilor oferă rute excelente pentru ciclism.", "Râul are peste 20 de brațe moarte mari, care funcționează ca rezervații naturale.", "Este considerat unul dintre cele mai curate și mai bogate în pește râuri din Ungaria.", "Sistemul de baraje de la Békésszentandrás este un punct de interes tehnologic major.", "Lunca râului face parte din Parcul Național Criș-Mureș.", "Anual se organizează concursuri de canotaj și expediții cu pluta pe apele sale."]
  }
};

updateFile('lib/visualLab/data/poiExtraHu2.ts', updatesHu2);
console.log('Updated sample Hu2');
