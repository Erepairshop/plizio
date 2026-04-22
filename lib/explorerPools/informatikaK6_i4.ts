import type { PoolTopicDef } from "./types";

export const INFO_K6_I4_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Informatik Entdecker K6-4",
    t1_title: "Cloud-Speicher", t1_text: "Cloud-Speicher ermöglicht das Speichern von Dateien im Internet, abrufbar überall.", t1_inst: "Ordne die Paare zu:", t1_h1: "Wolke = Cloud-Speicher!", t1_h2: "Überall erreichbar.", t1_q: "Was ist Cloud-Speicher?", t1_qa: "Dateispeicherung im Internet", t1_qb: "Speicherung auf USB", t1_qc: "Lokale Festplatte", t1_qd: "Ein Drucker",
    t1_l1: "Cloud", t1_r1: "Internet-Speicher", t1_l2: "Lokal", t1_r2: "Eigene Festplatte", t1_l3: "Backup", t1_r3: "Sicherheitskopie",
    t2_title: "Google Drive", t2_text: "Google Drive ist ein Cloud-Dienst für Dokumente, Fotos und Videos.", t2_inst: "Fülle die Lücke aus:", t2_h1: "Google Drive gehört zu Google.", t2_h2: "Kostenlos bis 15 GB!", t2_q: "Zu welchem Unternehmen gehört Google Drive?", t2_qa: "Google", t2_qb: "Microsoft", t2_qc: "Apple", t2_qd: "Amazon",
    t2_sent: "Google Drive gehört zu dem Unternehmen ___.", t2_qa2: "Google", t2_qb2: "Microsoft", t2_qc2: "Apple", t2_qd2: "Facebook",
    t3_title: "Dateien teilen", t3_text: "In der Cloud können wir Dateien mit anderen Personen teilen und gemeinsam bearbeiten.", t3_inst: "Sortiere in die Eimer:", t3_h1: "Was kann man in der Cloud teilen?", t3_h2: "Dokumente, Fotos, Videos!", t3_q: "Was kann man in der Cloud mit anderen teilen?", t3_qa: "Dokumente und Dateien", t3_qb: "Nur Passwörter", t3_qc: "Nur Hardware", t3_qd: "Nur Betriebssysteme",
    t3_bl1: "Cloud-fähig", t3_bl2: "Nicht Cloud", t3_i1: "Textdokument", t3_i2: "Physischer USB-Stick", t3_i3: "Foto", t3_i4: "Papierdruck",
    t4_title: "Synchronisierung", t4_text: "Synchronisierung bedeutet, dass Dateien auf allen Geräten immer aktuell sind.", t4_inst: "Bringe die Wörter in Ordnung:", t4_h1: "Sync = überall aktuell.", t4_h2: "PC, Tablet, Handy!", t4_q: "Was bedeutet Synchronisierung?", t4_qa: "Dateien auf allen Geräten aktuell halten", t4_qb: "Dateien löschen", t4_qc: "Dateien drucken", t4_qd: "Internet ausschalten",
    t4_w1: "Synchronisierung", t4_w2: "hält", t4_w3: "Dateien", t4_w4: "auf allen", t4_w5: "Geräten aktuell.", t4_w6: "", t4_w7: "",
    t5_title: "OneDrive", t5_text: "OneDrive ist Microsofts Cloud-Dienst, integriert in Windows.", t5_inst: "Markiere das richtige Wort:", t5_h1: "OneDrive gehört zu Microsoft.", t5_h2: "In Windows eingebaut!", t5_q: "Zu welchem Unternehmen gehört OneDrive?", t5_qa: "Microsoft", t5_qb: "Google", t5_qc: "Apple", t5_qd: "Amazon",
    t5_tk1: "OneDrive", t5_tk2: "ist", t5_tk3: "Microsofts", t5_tk4: "Cloud-Dienst.", t5_tk5: "", t5_tk6: "",
  },
  en: {
    explorer_title: "Informatics Explorer K6-4",
    t1_title: "Cloud Storage", t1_text: "Cloud storage allows saving files on the internet, accessible from anywhere.", t1_inst: "Match the pairs:", t1_h1: "Cloud = internet storage!", t1_h2: "Reachable everywhere.", t1_q: "What is cloud storage?", t1_qa: "File storage on the internet", t1_qb: "Storage on USB", t1_qc: "Local hard drive", t1_qd: "A printer",
    t1_l1: "Cloud", t1_r1: "Internet storage", t1_l2: "Local", t1_r2: "Own hard drive", t1_l3: "Backup", t1_r3: "Safety copy",
    t2_title: "Google Drive", t2_text: "Google Drive is a cloud service for documents, photos and videos.", t2_inst: "Fill in the blank:", t2_h1: "Google Drive belongs to Google.", t2_h2: "Free up to 15 GB!", t2_q: "Which company does Google Drive belong to?", t2_qa: "Google", t2_qb: "Microsoft", t2_qc: "Apple", t2_qd: "Amazon",
    t2_sent: "Google Drive belongs to the company ___.", t2_qa2: "Google", t2_qb2: "Microsoft", t2_qc2: "Apple", t2_qd2: "Facebook",
    t3_title: "Sharing Files", t3_text: "In the cloud we can share files with others and edit them together.", t3_inst: "Sort into buckets:", t3_h1: "What can you share in the cloud?", t3_h2: "Documents, photos, videos!", t3_q: "What can you share with others in the cloud?", t3_qa: "Documents and files", t3_qb: "Only passwords", t3_qc: "Only hardware", t3_qd: "Only operating systems",
    t3_bl1: "Cloud-ready", t3_bl2: "Not cloud", t3_i1: "Text document", t3_i2: "Physical USB stick", t3_i3: "Photo", t3_i4: "Paper printout",
    t4_title: "Synchronization", t4_text: "Synchronization means files are always up to date on all devices.", t4_inst: "Put the words in order:", t4_h1: "Sync = current everywhere.", t4_h2: "PC, tablet, phone!", t4_q: "What does synchronization mean?", t4_qa: "Keep files current on all devices", t4_qb: "Delete files", t4_qc: "Print files", t4_qd: "Turn off internet",
    t4_w1: "Synchronization", t4_w2: "keeps", t4_w3: "files", t4_w4: "current", t4_w5: "on all devices.", t4_w6: "", t4_w7: "",
    t5_title: "OneDrive", t5_text: "OneDrive is Microsoft's cloud service, integrated into Windows.", t5_inst: "Highlight the correct word:", t5_h1: "OneDrive belongs to Microsoft.", t5_h2: "Built into Windows!", t5_q: "Which company does OneDrive belong to?", t5_qa: "Microsoft", t5_qb: "Google", t5_qc: "Apple", t5_qd: "Amazon",
    t5_tk1: "OneDrive", t5_tk2: "is", t5_tk3: "Microsoft's", t5_tk4: "cloud service.", t5_tk5: "", t5_tk6: "",
  },
  hu: {
    explorer_title: "Informatika Felfedező K6-4",
    t1_title: "Felhőtárhely", t1_text: "A felhőtárhely lehetővé teszi fájlok internetes tárolását, így bárhonnan elérhetők.", t1_inst: "Párosítsd össze:", t1_h1: "Felhő = internetes tárolás!", t1_h2: "Mindenhonnan elérhető.", t1_q: "Mi a felhőtárhely?", t1_qa: "Fájlok tárolása az interneten", t1_qb: "Tárolás USB-n", t1_qc: "Helyi merevlemez", t1_qd: "Nyomtató",
    t1_l1: "Felhő", t1_r1: "Internetes tárolás", t1_l2: "Helyi", t1_r2: "Saját merevlemez", t1_l3: "Backup", t1_r3: "Biztonsági másolat",
    t2_title: "Google Drive", t2_text: "A Google Drive dokumentumok, fotók és videók felhőszolgáltatása.", t2_inst: "Töltsd ki a hiányt:", t2_h1: "A Google Drive a Google-höz tartozik.", t2_h2: "Ingyenes 15 GB-ig!", t2_q: "Melyik céghez tartozik a Google Drive?", t2_qa: "Google", t2_qb: "Microsoft", t2_qc: "Apple", t2_qd: "Amazon",
    t2_sent: "A Google Drive a ___ céghez tartozik.", t2_qa2: "Google", t2_qb2: "Microsoft", t2_qc2: "Apple", t2_qd2: "Facebook",
    t3_title: "Fájlok megosztása", t3_text: "A felhőben fájlokat oszthatunk meg másokkal, és együtt szerkeszthetjük őket.", t3_inst: "Válogasd szét:", t3_h1: "Mit lehet a felhőben megosztani?", t3_h2: "Dokumentumok, fotók, videók!", t3_q: "Mit oszthatunk meg másokkal a felhőben?", t3_qa: "Dokumentumokat és fájlokat", t3_qb: "Csak jelszavakat", t3_qc: "Csak hardvert", t3_qd: "Csak operációs rendszereket",
    t3_bl1: "Felhő-képes", t3_bl2: "Nem felhő", t3_i1: "Szöveges dokumentum", t3_i2: "Fizikai USB stick", t3_i3: "Fotó", t3_i4: "Papíros nyomtatvány",
    t4_title: "Szinkronizálás", t4_text: "A szinkronizálás azt jelenti, hogy a fájlok mindig naprakészek minden eszközön.", t4_inst: "Tedd sorrendbe a szavakat:", t4_h1: "Szinkron = mindenhol naprakész.", t4_h2: "PC, tablet, telefon!", t4_q: "Mit jelent a szinkronizálás?", t4_qa: "Fájlokat naprakészen tart minden eszközön", t4_qb: "Fájlokat töröl", t4_qc: "Fájlokat nyomtat", t4_qd: "Internetet kikapcsol",
    t4_w1: "A szinkronizálás", t4_w2: "minden eszközön", t4_w3: "naprakészen", t4_w4: "tartja", t4_w5: "a fájlokat.", t4_w6: "", t4_w7: "",
    t5_title: "OneDrive", t5_text: "A OneDrive a Microsoft felhőszolgáltatása, amely a Windowsba van integrálva.", t5_inst: "Jelöld meg a helyes szót:", t5_h1: "A OneDrive a Microsofthoz tartozik.", t5_h2: "Windowsba beépítve!", t5_q: "Melyik céghez tartozik a OneDrive?", t5_qa: "Microsoft", t5_qb: "Google", t5_qc: "Apple", t5_qd: "Amazon",
    t5_tk1: "A OneDrive", t5_tk2: "a", t5_tk3: "Microsoft", t5_tk4: "felhőszolgáltatása.", t5_tk5: "", t5_tk6: "",
  },
  ro: {
    explorer_title: "Explorator Informatică K6-4",
    t1_title: "Stocare în cloud", t1_text: "Stocarea în cloud permite salvarea fișierelor pe internet, accesibile de oriunde.", t1_inst: "Potrivește perechile:", t1_h1: "Cloud = stocare pe internet!", t1_h2: "Accesibil de oriunde.", t1_q: "Ce este stocarea în cloud?", t1_qa: "Stocarea fișierelor pe internet", t1_qb: "Stocare pe USB", t1_qc: "Hard disk local", t1_qd: "O imprimantă",
    t1_l1: "Cloud", t1_r1: "Stocare internet", t1_l2: "Local", t1_r2: "Propriul hard disk", t1_l3: "Backup", t1_r3: "Copie de siguranță",
    t2_title: "Google Drive", t2_text: "Google Drive este un serviciu cloud pentru documente, fotografii și videoclipuri.", t2_inst: "Completează spațiul liber:", t2_h1: "Google Drive aparține Google.", t2_h2: "Gratuit până la 15 GB!", t2_q: "Cărui companii aparține Google Drive?", t2_qa: "Google", t2_qb: "Microsoft", t2_qc: "Apple", t2_qd: "Amazon",
    t2_sent: "Google Drive aparține companiei ___.", t2_qa2: "Google", t2_qb2: "Microsoft", t2_qc2: "Apple", t2_qd2: "Facebook",
    t3_title: "Partajarea fișierelor", t3_text: "În cloud putem partaja fișiere cu alții și le edita împreună.", t3_inst: "Sortează în găleți:", t3_h1: "Ce poți partaja în cloud?", t3_h2: "Documente, fotografii, videoclipuri!", t3_q: "Ce poți partaja cu alții în cloud?", t3_qa: "Documente și fișiere", t3_qb: "Doar parole", t3_qc: "Doar hardware", t3_qd: "Doar sisteme de operare",
    t3_bl1: "Compatibil cloud", t3_bl2: "Non-cloud", t3_i1: "Document text", t3_i2: "USB fizic", t3_i3: "Fotografie", t3_i4: "Imprimare pe hârtie",
    t4_title: "Sincronizare", t4_text: "Sincronizarea înseamnă că fișierele sunt mereu actualizate pe toate dispozitivele.", t4_inst: "Pune cuvintele în ordine:", t4_h1: "Sync = actualizat peste tot.", t4_h2: "PC, tabletă, telefon!", t4_q: "Ce înseamnă sincronizarea?", t4_qa: "Fișierele sunt actualizate pe toate dispozitivele", t4_qb: "Șterge fișierele", t4_qc: "Tipărește fișierele", t4_qd: "Oprește internetul",
    t4_w1: "Sincronizarea", t4_w2: "menține", t4_w3: "fișierele", t4_w4: "actualizate", t4_w5: "pe toate dispozitivele.", t4_w6: "", t4_w7: "",
    t5_title: "OneDrive", t5_text: "OneDrive este serviciul cloud al Microsoft, integrat în Windows.", t5_inst: "Evidențiază cuvântul corect:", t5_h1: "OneDrive aparține Microsoft.", t5_h2: "Integrat în Windows!", t5_q: "Cărui companii aparține OneDrive?", t5_qa: "Microsoft", t5_qb: "Google", t5_qc: "Apple", t5_qd: "Amazon",
    t5_tk1: "OneDrive", t5_tk2: "este", t5_tk3: "serviciul cloud", t5_tk4: "al Microsoft.", t5_tk5: "", t5_tk6: "",
  }
};

export const INFO_K6_I4_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "☁️", color: "#2196F3" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left:"t1_l1",right:"t1_r1"},{left:"t1_l2",right:"t1_r2"},{left:"t1_l3",right:"t1_r3"}] },
    quiz: { question: "t1_q", choices: ["t1_qa","t1_qb","t1_qc","t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "📂", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "t2_sent", choices: ["t2_qa2","t2_qb2","t2_qc2","t2_qd2"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa","t2_qb","t2_qc","t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "🔗", color: "#9C27B0" },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id:"b1",label:"t3_bl1"},{id:"b2",label:"t3_bl2"}], items: [{text:"t3_i1",bucketId:"b1"},{text:"t3_i2",bucketId:"b2"},{text:"t3_i3",bucketId:"b1"},{text:"t3_i4",bucketId:"b2"}] },
    quiz: { question: "t3_q", choices: ["t3_qa","t3_qb","t3_qc","t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🔄", color: "#FF9800" },
    interactive: { type: "word-order", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1","t4_w2","t4_w3","t4_w4","t4_w5"], correctOrder: [0,1,2,3,4] },
    quiz: { question: "t4_q", choices: ["t4_qa","t4_qb","t4_qc","t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🪟", color: "#0078D4" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["t5_tk1","t5_tk2","t5_tk3","t5_tk4"], correctIndices: [0] },
    quiz: { question: "t5_q", choices: ["t5_qa","t5_qb","t5_qc","t5_qd"], answer: "t5_qa" }
  }
];
