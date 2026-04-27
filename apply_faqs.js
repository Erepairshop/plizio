
const faqData = {
  "city-ingolstadt-extra": {
    de: [
      { q: "Was ist das bekannteste Unternehmen in Ingolstadt?", a: "Der Automobilhersteller Audi hat hier seinen Hauptsitz und sein Stammwerk." },
      { q: "Welche literarische Figur ist mit Ingolstadt verbunden?", a: "Victor Frankenstein erschafft in Mary Shelleys Roman hier sein berühmtes Monster." },
      { q: "Wann wurde die erste bayerische Landesuniversität hier gegründet?", a: "Sie wurde 1472 eröffnet und war über 300 Jahre lang ein wichtiges Bildungszentrum." },
      { q: "Was besagt das Reinheitsgebot von 1516?", a: "Es wurde in Ingolstadt verkündet und besagt, dass Bier nur aus Wasser, Gerste und Hopfen bestehen darf." }
    ],
    hu: [
      { q: "Melyik a legismertebb vállalat Ingolstadtban?", a: "Az Audi autógyártó itt rendelkezik székhellyel és fő gyárral." },
      { q: "Melyik irodalmi alak kapcsolódik Ingolstadthoz?", a: "Victor Frankenstein Mary Shelley regényében itt alkotja meg híres szörnyetegét." },
      { q: "Mikor alapították itt az első bajor állami egyetemet?", a: "1472-ben nyitották meg, és több mint 300 évig fontos oktatási központ volt." },
      { q: "Mit mond ki az 1516-os tisztasági törvény?", a: "Ingolstadtban hirdették ki, és kimondja, hogy a sör csak vízből, árpából és komlóból állhat." }
    ],
    ro: [
      { q: "Care este cea mai cunoscută companie din Ingolstadt?", a: "Producătorul auto Audi își are sediul central și principala fabrică aici." },
      { q: "Ce personaj literar este legat de Ingolstadt?", a: "Victor Frankenstein creează celebrul său monstru aici, în romanul lui Mary Shelley." },
      { q: "Când a fost fondată prima universitate de stat bavareză aici?", a: "A fost deschisă în 1472 și a fost un centru educațional important timp de peste 300 de ani." },
      { q: "Ce prevede Legea Purității din 1516?", a: "A fost proclamată în Ingolstadt și stabilește că berea trebuie să conțină doar apă, orz și hamei." }
    ],
    en: [
      { q: "What is the most famous company in Ingolstadt?", a: "The car manufacturer Audi has its headquarters and main plant here." },
      { q: "Which literary character is associated with Ingolstadt?", a: "Victor Frankenstein creates his famous monster here in Mary Shelley's novel." },
      { q: "When was the first Bavarian state university founded here?", a: "It opened in 1472 and was an important educational center for over 300 years." },
      { q: "What does the Purity Law of 1516 state?", a: "It was proclaimed in Ingolstadt and states that beer may only consist of water, barley, and hops." }
    ]
  },
  "city-passau-extra": {
    de: [
      { q: "Welche drei Flüsse treffen sich in Passau?", a: "Donau, Inn und Ilz fließen am sogenannten 'Dreiflüsseeck' zusammen." },
      { q: "Was ist das Besondere am Stephansdom?", a: "Er beherbergt die größte Domorgel der Welt mit fast 18.000 Pfeifen." },
      { q: "Warum sind die drei Flüsse gut unterscheidbar?", a: "Sie haben verschiedene Farben: die Donau blaugrün, der Inn hellgrau und die Ilz schwarz." },
      { q: "Welche historische Bedeutung hat Passau für Ungarn?", a: "Königin Gisela, die Frau des heiligen Stephan von Ungarn, ist hier im Kloster Niedernburg begraben." }
    ],
    hu: [
      { q: "Melyik három folyó találkozik Passauban?", a: "A Duna, az Inn és az Ilz folyik össze az úgynevezett 'Háromfolyam-saroknál'." },
      { q: "Mi a különlegessége a Szent István-székesegyháznak?", a: "Itt található a világ legnagyobb orgonája, amely majdnem 18 000 sípból áll." },
      { q: "Miért különíthető el jól a három folyó?", a: "Eltérő színűek: a Duna kékesszöld, az Inn világosszürke, az Ilz pedig fekete." },
      { q: "Milyen történelmi jelentősége van Passaunak Magyarország számára?", a: "Bajor Gizella, Szent István király felesége a helyi Niedernburg-kolostorban nyugszik." }
    ],
    ro: [
      { q: "Care sunt cele trei râuri care se întâlnesc în Passau?", a: "Dunărea, Inn și Ilz converg în așa-numitul 'Colț al celor trei râuri'." },
      { q: "Ce este special la Catedrala Sfântul Ștefan?", a: "Găzduiește cea mai mare orgă de catedrală din lume, cu aproape 18.000 de tuburi." },
      { q: "De ce sunt cele trei râuri ușor de distins?", a: "Au culori diferite: Dunărea este albastru-verzuie, Inn este gri deschis, iar Ilz este negru." },
      { q: "Ce importanță istorică are Passau pentru Ungaria?", a: "Regina Gisela, soția Sfântului Ștefan al Ungariei, este înmormântată aici în mănăstirea Niedernburg." }
    ],
    en: [
      { q: "Which three rivers meet in Passau?", a: "The Danube, Inn, and Ilz flow together at the so-called 'Three Rivers Corner'." },
      { q: "What is special about St. Stephen's Cathedral?", a: "It houses the world's largest cathedral organ with almost 18,000 pipes." },
      { q: "Why are the three rivers easily distinguishable?", a: "They have different colors: the Danube is blue-green, the Inn is light gray, and the Ilz is black." },
      { q: "What historical significance does Passau have for Hungary?", a: "Queen Gisela, the wife of Saint Stephen of Hungary, is buried here in the Niedernburg Abbey." }
    ]
  }
  // ... more to be added by script
};

const fs = require('fs');

function applyFaqs(filePath, faqs) {
    let content = fs.readFileSync(filePath, 'utf8');
    for (const [id, faq] of Object.entries(faqs)) {
        const faqString = ',\n    faq: ' + JSON.stringify(faq, null, 2).replace(/\n/g, '\n    ') + '';
        // Look for the POI object by ID and insert FAQ before the closing brace
        // This is tricky because of nested braces.
        // We look for id: "ID" and then the next closing brace at the same level.
        const idIndex = content.indexOf(`id: "${id}"`);
        if (idIndex !== -1) {
            // Find the end of the object
            // A simple way is to find the next "}," or "}]" that belongs to this object
            // But since we know the structure, we can look for the last field before the closing brace
            // or just before the closing brace.
            
            // Let's find the closing brace of this POI object.
            // In these files, POIs are items in an array: { id: "...", ... },
            let braceCount = 0;
            let insertPos = -1;
            for (let i = idIndex; i < content.length; i++) {
                if (content[i] === '{') braceCount++;
                if (content[i] === '}') {
                    if (braceCount === 0) {
                        insertPos = i;
                        break;
                    }
                    braceCount--;
                }
            }
            if (insertPos !== -1) {
                // Check if faq already exists (shouldn't based on our filter)
                const objectFragment = content.substring(idIndex, insertPos);
                if (!objectFragment.includes('faq:')) {
                    content = content.substring(0, insertPos) + faqString + '\n  ' + content.substring(insertPos);
                }
            }
        }
    }
    fs.writeFileSync(filePath, content);
}
