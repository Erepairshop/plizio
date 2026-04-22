// lib/explorerPools/informatikaK8_i3.ts
import type { PoolTopicDef } from "./types";

export const INFO_K8_I3_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Kryptografie",
    // Topic 1
    t1_title: "Symmetrische Verschlüsselung",
    t1_text: "Bei der symmetrischen Verschlüsselung wird derselbe Schlüssel zum Ver- und Entschlüsseln verwendet. Beide Seiten müssen den Schlüssel kennen.",
    t1_inst: "Ordne die Verschlüsselungsbegriffe zu.",
    t1_h1: "Symmetrisch = ein gemeinsamer Schlüssel",
    t1_h2: "AES ist ein bekanntes symmetrisches Verfahren",
    t1_l1: "Symmetrische Verschlüsselung", t1_r1: "gleicher Schlüssel für Ver- und Entschlüsseln",
    t1_l2: "Klartext", t1_r2: "unverschlüsselte Originalnachricht",
    t1_l3: "Chiffretext", t1_r3: "verschlüsselte, unleserliche Nachricht",
    t1_q: "Was ist das Merkmal der symmetrischen Verschlüsselung?",
    t1_qa: "Gleicher Schlüssel zum Ver- und Entschlüsseln", t1_qb: "Zwei verschiedene Schlüssel werden verwendet", t1_qc: "Kein Schlüssel ist notwendig", t1_qd: "Nur der Empfänger hat einen Schlüssel",
    
    // Topic 2
    t2_title: "Asymmetrische Verschlüsselung",
    t2_text: "Bei asymmetrischer Verschlüsselung gibt es zwei Schlüssel: einen öffentlichen (Public Key) und einen privaten (Private Key). Der Public Key verschlüsselt, der Private Key entschlüsselt.",
    t2_inst: "Fülle die Lücke aus.",
    t2_h1: "Public Key = öffentlich, jeder kann ihn haben",
    t2_h2: "Private Key = geheim, nur der Eigentümer",
    t2_sent: "Der ___ Key verschlüsselt die Nachricht, der Private Key entschlüsselt sie.",
    t2_qa2: "Public", t2_qb2: "Private", t2_qc2: "Secret", t2_qd2: "Master",
    t2_q: "Was verschlüsselt den Text bei asymmetrischer Verschlüsselung?",
    t2_qa: "Der öffentliche Schlüssel (Public Key)", t2_qb: "Der private Schlüssel (Private Key)", t2_qc: "Das Passwort des Benutzers", t2_qd: "Der Dateiname",
    
    // Topic 3
    t3_title: "HTTPS (sichere Verbindung)",
    t3_text: "HTTPS verschlüsselt die Datenübertragung zwischen Browser und Webserver. Das Schloss-Symbol in der Adressleiste zeigt eine sichere Verbindung an.",
    t3_inst: "Sortiere die Wörter in die richtige Reihenfolge.",
    t3_h1: "HTTPS = HTTP + TLS-Verschlüsselung",
    t3_h2: "Das S in HTTPS steht für Secure",
    t3_w1: "HTTPS", t3_w2: "verschlüsselt", t3_w3: "die Verbindung", t3_w4: "zwischen Browser", t3_w5: "und Webserver.",
    t3_q: "Wofür steht das S in HTTPS?",
    t3_qa: "Secure (sicher)", t3_qb: "Speed (schnell)", t3_qc: "Server", t3_qd: "Standard",
    
    // Topic 4
    t4_title: "Digitale Signatur",
    t4_text: "Eine digitale Signatur beweist, wer ein Dokument erstellt hat, und ob es verändert wurde. Sie wird mit dem privaten Schlüssel des Absenders erstellt.",
    t4_inst: "Markiere die Teile, die zur digitalen Signatur gehören.",
    t4_h1: "Privater Schlüssel → erstellt die Signatur",
    t4_h2: "Öffentlicher Schlüssel → prüft die Signatur",
    t4_tk1: "Privater Schlüssel des Absenders", t4_tk2: "Dateiname des Dokuments", t4_tk3: "Hash des Dokuments", t4_tk4: "Schriftgröße", t4_tk5: "Öffentlicher Schlüssel zur Prüfung",
    t4_q: "Mit welchem Schlüssel wird eine digitale Signatur erstellt?",
    t4_qa: "Mit dem privaten Schlüssel des Absenders", t4_qb: "Mit dem öffentlichen Schlüssel des Empfängers", t4_qc: "Mit dem Passwort des Absenders", t4_qd: "Ohne Schlüssel",
    
    // Topic 5
    t5_title: "Kryptografischer Schlüssel",
    t5_text: "Ein kryptografischer Schlüssel ist eine Zeichenkette, die zum Ver- oder Entschlüsseln von Daten verwendet wird. Längere Schlüssel sind sicherer.",
    t5_inst: "Sortiere die Begriffe in die richtige Kategorie.",
    t5_h1: "Symmetrisch: ein Schlüssel für beide Seiten",
    t5_h2: "Asymmetrisch: Public + Private Key",
    t5_bl1: "Symmetrisch", t5_bl2: "Asymmetrisch",
    t5_i1: "ein gemeinsamer Schlüssel", t5_i2: "Public Key + Private Key", t5_i3: "schneller, aber Schlüsselverteilung schwierig", t5_i4: "wird z.B. bei HTTPS genutzt",
    t5_q: "Warum sind längere kryptografische Schlüssel sicherer?",
    t5_qa: "Sie haben mehr Möglichkeiten, sind schwerer zu erraten", t5_qb: "Sie sind kürzer zu tippen", t5_qc: "Sie funktionieren ohne Computer", t5_qd: "Sie müssen nicht gespeichert werden",

    // Topic 6
    t6_title: "Hash-Funktionen",
    t6_text: "Eine Hash-Funktion wandelt Daten beliebiger Länge in eine Zeichenkette fester Länge um. Sie ist eine Einwegfunktion.",
    t6_inst: "Baue den Satz:",
    t6_f1: "Ein Hash", t6_f2: "kann", t6_f3: "nicht", t6_f4: "rückgängig gemacht werden.",
    t6_q: "Was ist eine Eigenschaft von Hash-Funktionen?",
    t6_qa: "Einwegfunktion", t6_qb: "Zweiwegfunktion", t6_qc: "Nur für Bilder", t6_qd: "Braucht zwei Schlüssel",
    
    // Topic 7
    t7_title: "RSA-Algorithmus",
    t7_text: "RSA ist das bekannteste asymmetrische Verschlüsselungsverfahren. Es basiert auf der Schwierigkeit, große Zahlen in Primfaktoren zu zerlegen.",
    t7_inst: "Ordne die Worte:",
    t7_w1: "RSA", t7_w2: "nutzt", t7_w3: "sehr", t7_w4: "große", t7_w5: "Primzahlen.",
    t7_q: "Worauf basiert RSA?",
    t7_qa: "Primfaktorzerlegung", t7_qb: "Addition", t7_qc: "Geometrie", t7_qd: "Hash-Werten",
    
    // Topic 8
    t8_title: "SSL/TLS",
    t8_text: "SSL und der Nachfolger TLS sind Protokolle zur Verschlüsselung von Datenübertragungen im Internet.",
    t8_inst: "Fülle die Lücke:",
    t8_sent: "TLS ist der Nachfolger von ___.",
    t8_qa8: "SSL", t8_qb8: "HTTP", t8_qc8: "FTP", t8_qd8: "RSA",
    t8_q: "Wofür werden SSL und TLS genutzt?",
    t8_qa: "Sichere Datenübertragung", t8_qb: "Bildbearbeitung", t8_qc: "Datenkomprimierung", t8_qd: "Spieleentwicklung",
    
    // Topic 9
    t9_title: "Zertifikate",
    t9_text: "Ein digitales Zertifikat bestätigt die Identität einer Webseite. Es wird von einer Zertifizierungsstelle (CA) ausgestellt.",
    t9_inst: "Verbinde:",
    t9_l1: "Zertifikat", t9_r1: "Ausweis", t9_l2: "CA", t9_r2: "Aussteller", t9_l3: "Identität", t9_r3: "Echtheit",
    t9_q: "Wer stellt Zertifikate aus?",
    t9_qa: "Zertifizierungsstelle (CA)", t9_qb: "Der Benutzer", t9_qc: "Der Browser", t9_qd: "Der Router",
    
    // Topic 10
    t10_title: "VPN",
    t10_text: "Ein VPN (Virtual Private Network) baut einen verschlüsselten Tunnel durch das Internet, um die Privatsphäre zu schützen.",
    t10_inst: "Markiere den wichtigen Begriff:",
    t10_tk1: "Ein VPN", t10_tk2: "baut", t10_tk3: "einen", t10_tk4: "verschlüsselten Tunnel", t10_tk5: "auf.",
    t10_q: "Was macht ein VPN?",
    t10_qa: "Baut einen verschlüsselten Tunnel", t10_qb: "Macht das Internet schneller", t10_qc: "Löscht Viren", t10_qd: "Speichert Passwörter",
    
    // Topic 11
    t11_title: "Steganografie",
    t11_text: "Steganografie verbirgt geheime Informationen in anderen, unauffälligen Daten, zum Beispiel in einem Bild.",
    t11_inst: "Sortiere:",
    t11_bl1: "Sichtbar", t11_bl2: "Versteckt",
    t11_i1: "Das Bild", t11_i2: "Der Text im Bild", t11_i3: "Die Datei", t11_i4: "Das Geheimnis",
    t11_q: "Was ist Steganografie?",
    t11_qa: "Verstecken von Informationen", t11_qb: "Verschlüsseln von Passwörtern", t11_qc: "Löschen von Daten", t11_qd: "Erstellen von Backups",
    
    // Topic 12
    t12_title: "Caesar-Verschlüsselung",
    t12_text: "Eine der ältesten Verschlüsselungen, bei der jeder Buchstabe im Alphabet um eine bestimmte Anzahl von Positionen verschoben wird.",
    t12_inst: "Baue den Satz:",
    t12_f1: "Jeder Buchstabe", t12_f2: "wird", t12_f3: "im Alphabet", t12_f4: "verschoben.",
    t12_q: "Wie funktioniert die Caesar-Verschlüsselung?",
    t12_qa: "Verschiebung im Alphabet", t12_qb: "Primfaktorzerlegung", t12_qc: "Hash-Werte", t12_qd: "Öffentlicher Schlüssel",
    
    // Topic 13
    t13_title: "Ende-zu-Ende-Verschlüsselung",
    t13_text: "Nur Sender und Empfänger können die Nachricht lesen. Nicht einmal der Server dazwischen kann sie entschlüsseln.",
    t13_inst: "Ordne:",
    t13_w1: "Nur", t13_w2: "Sender", t13_w3: "und", t13_w4: "Empfänger", t13_w5: "lesen.",
    t13_q: "Wer kann bei Ende-zu-Ende-Verschlüsselung mitlesen?",
    t13_qa: "Nur Sender und Empfänger", t13_qb: "Jeder im Netzwerk", t13_qc: "Der Server", t13_qd: "Hacker",
    
    // Topic 14
    t14_title: "Passwörter & Salting",
    t14_text: "Salting fügt Passwörtern zufällige Daten hinzu, bevor sie gehasht werden, um Wörterbuchangriffe zu erschweren.",
    t14_inst: "Fülle die Lücke:",
    t14_sent: "Salting macht das Erraten von ___ schwerer.",
    t14_qa14: "Passwörtern", t14_qb14: "Benutzernamen", t14_qc14: "E-Mails", t14_qd14: "Websites",
    t14_q: "Warum nutzt man Salting?",
    t14_qa: "Gegen Wörterbuchangriffe", t14_qb: "Damit es salzig schmeckt", t14_qc: "Um Passwörter zu kürzen", t14_qd: "Um sie lesbar zu machen",
    
    // Topic 15
    t15_title: "Enigma-Maschine",
    t15_text: "Eine berühmte Rotor-Schlüsselmaschine aus dem Zweiten Weltkrieg, deren Code von Alan Turing gebrochen wurde.",
    t15_inst: "Markiere:",
    t15_tk1: "Die", t15_tk2: "Enigma", t15_tk3: "wurde von", t15_tk4: "Alan Turing", t15_tk5: "gebrochen.",
    t15_q: "Wer half entscheidend, die Enigma zu brechen?",
    t15_qa: "Alan Turing", t15_qb: "Albert Einstein", t15_qc: "Isaac Newton", t15_qd: "Bill Gates",
  },
  en: {
    explorer_title: "Cryptography",
    // Topic 1
    t1_title: "Symmetric encryption",
    t1_text: "In symmetric encryption the same key is used to encrypt and decrypt. Both parties must know the key.",
    t1_inst: "Match the encryption terms.",
    t1_h1: "Symmetric = one shared key",
    t1_h2: "AES is a well-known symmetric algorithm",
    t1_l1: "Symmetric encryption", t1_r1: "same key for encrypting and decrypting",
    t1_l2: "Plaintext", t1_r2: "unencrypted original message",
    t1_l3: "Ciphertext", t1_r3: "encrypted, unreadable message",
    t1_q: "What is the characteristic of symmetric encryption?",
    t1_qa: "Same key for encrypting and decrypting", t1_qb: "Two different keys are used", t1_qc: "No key is necessary", t1_qd: "Only the receiver has a key",
    
    // Topic 2
    t2_title: "Asymmetric encryption",
    t2_text: "Asymmetric encryption uses two keys: a public key and a private key. The public key encrypts, the private key decrypts.",
    t2_inst: "Fill in the blank.",
    t2_h1: "Public key = public, anyone can have it",
    t2_h2: "Private key = secret, only the owner has it",
    t2_sent: "The ___ Key encrypts the message, the Private Key decrypts it.",
    t2_qa2: "Public", t2_qb2: "Private", t2_qc2: "Secret", t2_qd2: "Master",
    t2_q: "What encrypts the text in asymmetric encryption?",
    t2_qa: "The public key", t2_qb: "The private key", t2_qc: "The user's password", t2_qd: "The file name",
    
    // Topic 3
    t3_title: "HTTPS (secure connection)",
    t3_text: "HTTPS encrypts data transfer between browser and web server. The padlock symbol in the address bar indicates a secure connection.",
    t3_inst: "Sort the words into the correct order.",
    t3_h1: "HTTPS = HTTP + TLS encryption",
    t3_h2: "The S in HTTPS stands for Secure",
    t3_w1: "HTTPS", t3_w2: "encrypts", t3_w3: "the connection", t3_w4: "between browser", t3_w5: "and web server.",
    t3_q: "What does the S in HTTPS stand for?",
    t3_qa: "Secure", t3_qb: "Speed", t3_qc: "Server", t3_qd: "Standard",
    
    // Topic 4
    t4_title: "Digital signature",
    t4_text: "A digital signature proves who created a document and whether it was altered. It is created with the sender's private key.",
    t4_inst: "Highlight the parts that belong to digital signatures.",
    t4_h1: "Private key → creates the signature",
    t4_h2: "Public key → verifies the signature",
    t4_tk1: "Sender's private key", t4_tk2: "File name of the document", t4_tk3: "Hash of the document", t4_tk4: "Font size", t4_tk5: "Public key for verification",
    t4_q: "Which key is used to create a digital signature?",
    t4_qa: "With the sender's private key", t4_qb: "With the recipient's public key", t4_qc: "With the sender's password", t4_qd: "Without any key",
    
    // Topic 5
    t5_title: "Cryptographic key",
    t5_text: "A cryptographic key is a string used to encrypt or decrypt data. Longer keys are more secure.",
    t5_inst: "Sort the terms into the correct category.",
    t5_h1: "Symmetric: one key for both sides",
    t5_h2: "Asymmetric: Public + Private Key",
    t5_bl1: "Symmetric", t5_bl2: "Asymmetric",
    t5_i1: "one shared key", t5_i2: "Public Key + Private Key", t5_i3: "faster, but key distribution is difficult", t5_i4: "used e.g. in HTTPS",
    t5_q: "Why are longer cryptographic keys more secure?",
    t5_qa: "They have more possibilities, harder to guess", t5_qb: "They are shorter to type", t5_qc: "They work without a computer", t5_qd: "They do not need to be stored",

    // Topic 6
    t6_title: "Hash Functions",
    t6_text: "A hash function converts data of arbitrary length into a fixed-length string. It is a one-way function.",
    t6_inst: "Build the sentence:",
    t6_f1: "A hash", t6_f2: "cannot", t6_f3: "be", t6_f4: "reversed.",
    t6_q: "What is a property of hash functions?",
    t6_qa: "One-way function", t6_qb: "Two-way function", t6_qc: "Only for images", t6_qd: "Needs two keys",
    
    // Topic 7
    t7_title: "RSA Algorithm",
    t7_text: "RSA is the best-known asymmetric encryption method. It relies on the difficulty of factoring large numbers into primes.",
    t7_inst: "Order the words:",
    t7_w1: "RSA", t7_w2: "uses", t7_w3: "very", t7_w4: "large", t7_w5: "primes.",
    t7_q: "What is RSA based on?",
    t7_qa: "Prime factorization", t7_qb: "Addition", t7_qc: "Geometry", t7_qd: "Hash values",
    
    // Topic 8
    t8_title: "SSL/TLS",
    t8_text: "SSL and its successor TLS are protocols for encrypting data transmissions on the internet.",
    t8_inst: "Fill the gap:",
    t8_sent: "TLS is the successor of ___.",
    t8_qa8: "SSL", t8_qb8: "HTTP", t8_qc8: "FTP", t8_qd8: "RSA",
    t8_q: "What are SSL and TLS used for?",
    t8_qa: "Secure data transmission", t8_qb: "Image editing", t8_qc: "Data compression", t8_qd: "Game development",
    
    // Topic 9
    t9_title: "Certificates",
    t9_text: "A digital certificate verifies the identity of a website. It is issued by a Certificate Authority (CA).",
    t9_inst: "Match:",
    t9_l1: "Certificate", t9_r1: "ID", t9_l2: "CA", t9_r2: "Issuer", t9_l3: "Identity", t9_r3: "Authenticity",
    t9_q: "Who issues certificates?",
    t9_qa: "Certificate Authority (CA)", t9_qb: "The user", t9_qc: "The browser", t9_qd: "The router",
    
    // Topic 10
    t10_title: "VPN",
    t10_text: "A VPN (Virtual Private Network) creates an encrypted tunnel through the internet to protect privacy.",
    t10_inst: "Highlight the important term:",
    t10_tk1: "A VPN", t10_tk2: "creates", t10_tk3: "an", t10_tk4: "encrypted tunnel", t10_tk5: "online.",
    t10_q: "What does a VPN do?",
    t10_qa: "Creates an encrypted tunnel", t10_qb: "Makes the internet faster", t10_qc: "Deletes viruses", t10_qd: "Saves passwords",
    
    // Topic 11
    t11_title: "Steganography",
    t11_text: "Steganography hides secret information within other, inconspicuous data, for example in an image.",
    t11_inst: "Sort:",
    t11_bl1: "Visible", t11_bl2: "Hidden",
    t11_i1: "The image", t11_i2: "Text in image", t11_i3: "The file", t11_i4: "The secret",
    t11_q: "What is steganography?",
    t11_qa: "Hiding information", t11_qb: "Encrypting passwords", t11_qc: "Deleting data", t11_qd: "Creating backups",
    
    // Topic 12
    t12_title: "Caesar Cipher",
    t12_text: "One of the oldest encryptions, where each letter in the alphabet is shifted by a certain number of positions.",
    t12_inst: "Build the sentence:",
    t12_f1: "Each letter", t12_f2: "is", t12_f3: "shifted", t12_f4: "in the alphabet.",
    t12_q: "How does the Caesar cipher work?",
    t12_qa: "Shift in the alphabet", t12_qb: "Prime factorization", t12_qc: "Hash values", t12_qd: "Public key",
    
    // Topic 13
    t13_title: "End-to-End Encryption",
    t13_text: "Only sender and receiver can read the message. Not even the server in between can decrypt it.",
    t13_inst: "Order:",
    t13_w1: "Only", t13_w2: "sender", t13_w3: "and", t13_w4: "receiver", t13_w5: "read.",
    t13_q: "Who can read messages with end-to-end encryption?",
    t13_qa: "Only sender and receiver", t13_qb: "Anyone on the network", t13_qc: "The server", t13_qd: "Hackers",
    
    // Topic 14
    t14_title: "Passwords & Salting",
    t14_text: "Salting adds random data to passwords before they are hashed to make dictionary attacks harder.",
    t14_inst: "Fill the gap:",
    t14_sent: "Salting makes guessing ___ harder.",
    t14_qa14: "passwords", t14_qb14: "usernames", t14_qc14: "emails", t14_qd14: "websites",
    t14_q: "Why use salting?",
    t14_qa: "Against dictionary attacks", t14_qb: "To make it taste salty", t14_qc: "To shorten passwords", t14_qd: "To make them readable",
    
    // Topic 15
    t15_title: "Enigma Machine",
    t15_text: "A famous rotor cipher machine from World War II whose code was broken by Alan Turing.",
    t15_inst: "Highlight:",
    t15_tk1: "The", t15_tk2: "Enigma", t15_tk3: "was broken by", t15_tk4: "Alan Turing", t15_tk5: "in WW2.",
    t15_q: "Who helped break the Enigma code?",
    t15_qa: "Alan Turing", t15_qb: "Albert Einstein", t15_qc: "Isaac Newton", t15_qd: "Bill Gates",
  },
  hu: {
    explorer_title: "Kriptográfia",
    // Topic 1
    t1_title: "Szimmetrikus titkosítás",
    t1_text: "A szimmetrikus titkosításban ugyanazt a kulcsot használják a titkosításhoz és a visszafejtéshez. Mindkét félnek ismernie kell a kulcsot.",
    t1_inst: "Párosítsd a titkosítási fogalmakat.",
    t1_h1: "Szimmetrikus = egy közös kulcs",
    t1_h2: "Az AES egy ismert szimmetrikus algoritmus",
    t1_l1: "Szimmetrikus titkosítás", t1_r1: "azonos kulcs titkosításhoz és visszafejtéshez",
    t1_l2: "Egyszerű szöveg", t1_r2: "titkosítatlan eredeti üzenet",
    t1_l3: "Titkosított szöveg", t1_r3: "titkosított, olvashatatlan üzenet",
    t1_q: "Mi a szimmetrikus titkosítás jellemzője?",
    t1_qa: "Azonos kulcs titkosításhoz és visszafejtéshez", t1_qb: "Két különböző kulcsot használnak", t1_qc: "Nincs szükség kulcsra", t1_qd: "Csak a fogadónak van kulcsa",
    
    // Topic 2
    t2_title: "Aszimmetrikus titkosítás",
    t2_text: "Az aszimmetrikus titkosítás két kulcsot használ: egy nyilvános (public key) és egy privát (private key) kulcsot. A nyilvános kulcs titkosít, a privát kulcs visszafejt.",
    t2_inst: "Töltsd ki a hiányzó részt.",
    t2_h1: "Nyilvános kulcs = bárki ismerheti",
    t2_h2: "Privát kulcs = titkos, csak a tulajdonos ismeri",
    t2_sent: "A ___ kulcs titkosítja az üzenetet, a privát kulcs visszafejti.",
    t2_qa2: "nyilvános", t2_qb2: "privát", t2_qc2: "titkos", t2_qd2: "mester",
    t2_q: "Mi titkosítja a szöveget az aszimmetrikus titkosításban?",
    t2_qa: "A nyilvános kulcs (Public Key)", t2_qb: "A privát kulcs (Private Key)", t2_qc: "A felhasználó jelszava", t2_qd: "A fájlnév",
    
    // Topic 3
    t3_title: "HTTPS (biztonságos kapcsolat)",
    t3_text: "A HTTPS titkosítja az adatátvitelt a böngésző és a webszerver között. A lakat ikon a címsorban biztonságos kapcsolatot jelez.",
    t3_inst: "Rendezd a szavakat helyes sorrendbe.",
    t3_h1: "HTTPS = HTTP + TLS titkosítás",
    t3_h2: "A HTTPS-ben az S a Secure-t jelenti",
    t3_w1: "A HTTPS", t3_w2: "titkosítja", t3_w3: "a kapcsolatot", t3_w4: "böngésző és", t3_w5: "webszerver között.",
    t3_q: "Mit jelent a HTTPS-ben az S betű?",
    t3_qa: "Secure (biztonságos)", t3_qb: "Speed (gyors)", t3_qc: "Server", t3_qd: "Standard",
    
    // Topic 4
    t4_title: "Digitális aláírás",
    t4_text: "A digitális aláírás igazolja, ki hozta létre a dokumentumot, és módosítva lett-e. A küldő privát kulcsával jön létre.",
    t4_inst: "Emeld ki a digitális aláíráshoz tartozó részeket.",
    t4_h1: "privát kulcs → aláírást hoz létre",
    t4_h2: "nyilvános kulcs → ellenőrzi az aláírást",
    t4_tk1: "Küldő privát kulcsa", t4_tk2: "Dokumentum fájlneve", t4_tk3: "Dokumentum hash-értéke", t4_tk4: "Betűméret", t4_tk5: "Nyilvános kulcs az ellenőrzéshez",
    t4_q: "Melyik kulccsal hozzák létre a digitális aláírást?",
    t4_qa: "A küldő privát kulcsával", t4_qb: "A fogadó nyilvános kulcsával", t4_qc: "A küldő jelszavával", t4_qd: "Kulcs nélkül",
    
    // Topic 5
    t5_title: "Kriptográfiai kulcs",
    t5_text: "A kriptográfiai kulcs egy karaktersorozat, amelyet adatok titkosításához vagy visszafejtéséhez használnak. A hosszabb kulcsok biztonságosabbak.",
    t5_inst: "Rendezd a fogalmakat a megfelelő kategóriába.",
    t5_h1: "szimmetrikus: egy kulcs mindkét félnek",
    t5_h2: "aszimmetrikus: nyilvános + privát kulcs",
    t5_bl1: "Szimmetrikus", t5_bl2: "Aszimmetrikus",
    t5_i1: "egy közös kulcs", t5_i2: "nyilvános + privát kulcs", t5_i3: "gyorsabb, de a kulcselosztás nehézkes", t5_i4: "pl. HTTPS-ben használják",
    t5_q: "Miért biztonságosabbak a hosszabb kriptográfiai kulcsok?",
    t5_qa: "Több lehetséges értékük van, nehezebb kitalálni", t5_qb: "Gyorsabban begépelhetők", t5_qc: "Számítógép nélkül is működnek", t5_qd: "Nem kell őket tárolni",

    // Topic 6
    t6_title: "Hash-függvények",
    t6_text: "A hash-függvény tetszőleges hosszúságú adatot fix hosszúságú karaktersorozattá alakít. Ez egy egyirányú függvény.",
    t6_inst: "Építs mondatot:",
    t6_f1: "A hash-t", t6_f2: "nem", t6_f3: "lehet", t6_f4: "visszafordítani.",
    t6_q: "Mi a hash-függvények egyik tulajdonsága?",
    t6_qa: "Egyirányú függvény", t6_qb: "Kétirányú függvény", t6_qc: "Csak képekhez jó", t6_qd: "Két kulcs kell hozzá",
    
    // Topic 7
    t7_title: "RSA algoritmus",
    t7_text: "Az RSA a legismertebb aszimmetrikus titkosítási eljárás. Arra épül, hogy nagy számokat nehéz prímtényezőkre bontani.",
    t7_inst: "Rendezd a szavakat:",
    t7_w1: "Az RSA", t7_w2: "nagyon", t7_w3: "nagy", t7_w4: "prímszámokat", t7_w5: "használ.",
    t7_q: "Mire épül az RSA?",
    t7_qa: "Prímtényezős felbontásra", t7_qb: "Összeadásra", t7_qc: "Geometriára", t7_qd: "Hash-értékekre",
    
    // Topic 8
    t8_title: "SSL/TLS",
    t8_text: "Az SSL és utódja, a TLS olyan protokollok, amelyek az internetes adatátvitelt titkosítják.",
    t8_inst: "Pótold:",
    t8_sent: "A TLS az ___ utódja.",
    t8_qa8: "SSL", t8_qb8: "HTTP", t8_qc8: "FTP", t8_qd8: "RSA",
    t8_q: "Mire használják az SSL-t és a TLS-t?",
    t8_qa: "Biztonságos adatátvitelre", t8_qb: "Képszerkesztésre", t8_qc: "Adattömörítésre", t8_qd: "Játékfejlesztésre",
    
    // Topic 9
    t9_title: "Tanúsítványok",
    t9_text: "A digitális tanúsítvány igazolja egy weboldal személyazonosságát. Ezt egy hitelesítésszolgáltató (CA) bocsátja ki.",
    t9_inst: "Párosítsd:",
    t9_l1: "Tanúsítvány", t9_r1: "Igazolvány", t9_l2: "CA", t9_r2: "Kibocsátó", t9_l3: "Azonosság", t9_r3: "Hitelesség",
    t9_q: "Ki bocsát ki tanúsítványokat?",
    t9_qa: "Hitelesítésszolgáltató (CA)", t9_qb: "A felhasználó", t9_qc: "A böngésző", t9_qd: "A router",
    
    // Topic 10
    t10_title: "VPN",
    t10_text: "A VPN (Virtual Private Network) titkosított alagutat hoz létre az interneten a magánélet védelme érdekében.",
    t10_inst: "Emeld ki a fontos kifejezést:",
    t10_tk1: "Létrehoz", t10_tk2: "egy", t10_tk3: "biztonságos", t10_tk4: "titkosított alagutat", t10_tk5: "a VPN.",
    t10_q: "Mit csinál a VPN?",
    t10_qa: "Titkosított alagutat hoz létre", t10_qb: "Gyorsítja az internetet", t10_qc: "Törli a vírusokat", t10_qd: "Menti a jelszavakat",
    
    // Topic 11
    t11_title: "Szteganográfia",
    t11_text: "A szteganográfia titkos információkat rejt el más, feltűnésmentes adatokban, például egy képben.",
    t11_inst: "Válogasd szét:",
    t11_bl1: "Látható", t11_bl2: "Rejtett",
    t11_i1: "A kép", t11_i2: "Szöveg a képben", t11_i3: "A fájl", t11_i4: "A titok",
    t11_q: "Mi a szteganográfia?",
    t11_qa: "Információk elrejtése", t11_qb: "Jelszavak titkosítása", t11_qc: "Adatok törlése", t11_qd: "Biztonsági mentés",
    
    // Topic 12
    t12_title: "Caesar-rejtjel",
    t12_text: "Az egyik legrégebbi titkosítás, ahol az ábécé minden betűjét egy bizonyos számmal eltolják.",
    t12_inst: "Építs mondatot:",
    t12_f1: "Minden betűt", t12_f2: "eltolnak", t12_f3: "az", t12_f4: "ábécében.",
    t12_q: "Hogyan működik a Caesar-rejtjel?",
    t12_qa: "Eltolás az ábécében", t12_qb: "Prímtényezős felbontás", t12_qc: "Hash-értékek", t12_qd: "Nyilvános kulcs",
    
    // Topic 13
    t13_title: "Végpontok közötti titkosítás",
    t13_text: "Csak a küldő és a fogadó tudja elolvasni az üzenetet. Még a köztes szerver sem tudja megfejteni.",
    t13_inst: "Rendezd:",
    t13_w1: "Csak", t13_w2: "a küldő", t13_w3: "és", t13_w4: "a fogadó", t13_w5: "olvashatja.",
    t13_q: "Ki olvashatja el a végpontok közötti titkosítással védett üzenetet?",
    t13_qa: "Csak a küldő és a fogadó", t13_qb: "Bárki a hálózaton", t13_qc: "A szerver", t13_qd: "A hackerek",
    
    // Topic 14
    t14_title: "Jelszavak és Sózás",
    t14_text: "A sózás véletlenszerű adatokat ad a jelszavakhoz hash-elés előtt, hogy megnehezítse a szótártámadásokat.",
    t14_inst: "Pótold:",
    t14_sent: "A sózás megnehezíti a ___ kitalálását.",
    t14_qa14: "jelszavak", t14_qb14: "felhasználónevek", t14_qc14: "e-mailek", t14_qd14: "weboldalak",
    t14_q: "Miért használunk sózást?",
    t14_qa: "Szótártámadások ellen", t14_qb: "Hogy sós legyen", t14_qc: "Jelszavak rövidítésére", t14_qd: "Hogy olvashatók legyenek",
    
    // Topic 15
    t15_title: "Enigma gép",
    t15_text: "Egy híres második világháborús rotoros titkosítógép, amelynek kódját Alan Turing törte fel.",
    t15_inst: "Emeld ki:",
    t15_tk1: "Az", t15_tk2: "Enigma", t15_tk3: "kódját", t15_tk4: "Alan Turing", t15_tk5: "törte fel.",
    t15_q: "Ki segített döntően az Enigma feltörésében?",
    t15_qa: "Alan Turing", t15_qb: "Albert Einstein", t15_qc: "Isaac Newton", t15_qd: "Bill Gates",
  },
  ro: {
    explorer_title: "Criptografie",
    // Topic 1
    t1_title: "Criptare simetrică",
    t1_text: "În criptarea simetrică se folosește aceeași cheie pentru criptare și decriptare. Ambele părți trebuie să cunoască cheia.",
    t1_inst: "Potrivește termenii de criptare.",
    t1_h1: "Simetrică = o cheie comună",
    t1_h2: "AES este un algoritm simetric cunoscut",
    t1_l1: "Criptare simetrică", t1_r1: "aceeași cheie pentru criptare și decriptare",
    t1_l2: "Text simplu", t1_r2: "mesaj original necriptat",
    t1_l3: "Text cifrat", t1_r3: "mesaj criptat, ilizibil",
    t1_q: "Care este caracteristica criptării simetrice?",
    t1_qa: "Aceeași cheie pentru criptare și decriptare", t1_qb: "Se folosesc două chei diferite", t1_qc: "Nu este necesară nicio cheie", t1_qd: "Doar receptorul are o cheie",
    
    // Topic 2
    t2_title: "Criptare asimetrică",
    t2_text: "Criptarea asimetrică folosește două chei: o cheie publică și una privată. Cheia publică criptează, cheia privată decriptează.",
    t2_inst: "Completează spațiul liber.",
    t2_h1: "Cheia publică = publică, oricine o poate avea",
    t2_h2: "Cheia privată = secretă, doar proprietarul o are",
    t2_sent: "Cheia ___ criptează mesajul, cheia privată îl decriptează.",
    t2_qa2: "publică", t2_qb2: "privată", t2_qc2: "secretă", t2_qd2: "master",
    t2_q: "Ce criptează textul în criptarea asimetrică?",
    t2_qa: "Cheia publică (Public Key)", t2_qb: "Cheia privată (Private Key)", t2_qc: "Parola utilizatorului", t2_qd: "Numele fișierului",
    
    // Topic 3
    t3_title: "HTTPS (conexiune securizată)",
    t3_text: "HTTPS criptează transferul de date între browser și serverul web. Simbolul lacătului din bara de adrese indică o conexiune securizată.",
    t3_inst: "Sortează cuvintele în ordinea corectă.",
    t3_h1: "HTTPS = HTTP + criptare TLS",
    t3_h2: "S din HTTPS înseamnă Secure",
    t3_w1: "HTTPS", t3_w2: "criptează", t3_w3: "conexiunea", t3_w4: "între browser", t3_w5: "și serverul web.",
    t3_q: "Ce înseamnă S din HTTPS?",
    t3_qa: "Secure (securizat)", t3_qb: "Speed (viteză)", t3_qc: "Server", t3_qd: "Standard",
    
    // Topic 4
    t4_title: "Semnătură digitală",
    t4_text: "O semnătură digitală dovedește cine a creat un document și dacă a fost modificat. Este creată cu cheia privată a expeditorului.",
    t4_inst: "Evidențiază părțile care aparțin semnăturii digitale.",
    t4_h1: "Cheia privată → creează semnătura",
    t4_h2: "Cheia publică → verifică semnătura",
    t4_tk1: "Cheia privată a expeditorului", t4_tk2: "Numele fișierului documentului", t4_tk3: "Hash-ul documentului", t4_tk4: "Dimensiunea fontului", t4_tk5: "Cheia publică pentru verificare",
    t4_q: "Cu ce cheie se creează o semnătură digitală?",
    t4_qa: "Cu cheia privată a expeditorului", t4_qb: "Cu cheia publică a destinatarului", t4_qc: "Cu parola expeditorului", t4_qd: "Fără nicio cheie",
    
    // Topic 5
    t5_title: "Cheie criptografică",
    t5_text: "O cheie criptografică este un șir de caractere folosit pentru a cripta sau decripta date. Cheile mai lungi sunt mai sigure.",
    t5_inst: "Sortează termenii în categoria corectă.",
    t5_h1: "Simetrică: o cheie pentru ambele părți",
    t5_h2: "Asimetrică: cheie publică + privată",
    t5_bl1: "Simetrică", t5_bl2: "Asimetrică",
    t5_i1: "o cheie comună", t5_i2: "cheie publică + cheie privată", t5_i3: "mai rapid, dar distribuirea cheii este dificilă", t5_i4: "folosit de ex. în HTTPS",
    t5_q: "De ce cheile criptografice mai lungi sunt mai sigure?",
    t5_qa: "Au mai multe posibilități, mai greu de ghicit", t5_qb: "Sunt mai scurte de tastat", t5_qc: "Funcționează fără computer", t5_qd: "Nu trebuie stocate",

    // Topic 6
    t6_title: "Funcții Hash",
    t6_text: "O funcție hash convertește date de orice lungime într-un șir de lungime fixă. Este o funcție unidirecțională.",
    t6_inst: "Construiește fraza:",
    t6_f1: "Un hash", t6_f2: "nu", t6_f3: "poate fi", t6_f4: "inversat.",
    t6_q: "Care este o proprietate a funcțiilor hash?",
    t6_qa: "Funcție unidirecțională", t6_qb: "Funcție bidirecțională", t6_qc: "Doar pentru imagini", t6_qd: "Necesită două chei",
    
    // Topic 7
    t7_title: "Algoritmul RSA",
    t7_text: "RSA este cea mai cunoscută metodă de criptare asimetrică. Se bazează pe dificultatea factorizării numerelor mari în numere prime.",
    t7_inst: "Ordonează cuvintele:",
    t7_w1: "RSA", t7_w2: "folosește", t7_w3: "numere", t7_w4: "prime", t7_w5: "mari.",
    t7_q: "Pe ce se bazează RSA?",
    t7_qa: "Factorizarea numerelor prime", t7_qb: "Adunare", t7_qc: "Geometrie", t7_qd: "Valori hash",
    
    // Topic 8
    t8_title: "SSL/TLS",
    t8_text: "SSL și succesorul său TLS sunt protocoale pentru criptarea transmisiilor de date pe internet.",
    t8_inst: "Completează:",
    t8_sent: "TLS este succesorul ___.",
    t8_qa8: "SSL", t8_qb8: "HTTP", t8_qc8: "FTP", t8_qd8: "RSA",
    t8_q: "Pentru ce sunt folosite SSL și TLS?",
    t8_qa: "Transmisie securizată de date", t8_qb: "Editare foto", t8_qc: "Comprimarea datelor", t8_qd: "Dezvoltare de jocuri",
    
    // Topic 9
    t9_title: "Certificate",
    t9_text: "Un certificat digital verifică identitatea unui site web. Este emis de o Autoritate de Certificare (CA).",
    t9_inst: "Potrivește:",
    t9_l1: "Certificat", t9_r1: "ID", t9_l2: "CA", t9_r2: "Emitent", t9_l3: "Identitate", t9_r3: "Autenticitate",
    t9_q: "Cine emite certificate?",
    t9_qa: "Autoritatea de Certificare (CA)", t9_qb: "Utilizatorul", t9_qc: "Browser-ul", t9_qd: "Router-ul",
    
    // Topic 10
    t10_title: "VPN",
    t10_text: "Un VPN (Virtual Private Network) creează un tunel criptat prin internet pentru a proteja confidențialitatea.",
    t10_inst: "Evidențiază termenul important:",
    t10_tk1: "Se creează", t10_tk2: "astfel", t10_tk3: "un", t10_tk4: "tunel criptat", t10_tk5: "prin VPN.",
    t10_q: "Ce face un VPN?",
    t10_qa: "Creează un tunel criptat", t10_qb: "Face internetul mai rapid", t10_qc: "Șterge virușii", t10_qd: "Salvează parolele",
    
    // Topic 11
    t11_title: "Steganografie",
    t11_text: "Steganografia ascunde informații secrete în alte date neobservabile, de exemplu într-o imagine.",
    t11_inst: "Sortează:",
    t11_bl1: "Vizibil", t11_bl2: "Ascuns",
    t11_i1: "Imaginea", t11_i2: "Text în imagine", t11_i3: "Fișierul", t11_i4: "Secretul",
    t11_q: "Ce este steganografia?",
    t11_qa: "Ascunderea informațiilor", t11_qb: "Criptarea parolelor", t11_qc: "Ștergerea datelor", t11_qd: "Crearea copiilor de rezervă",
    
    // Topic 12
    t12_title: "Cifrul Cezar",
    t12_text: "Una dintre cele mai vechi criptări, unde fiecare literă din alfabet este deplasată cu un anumit număr de poziții.",
    t12_inst: "Construiește fraza:",
    t12_f1: "Fiecare literă", t12_f2: "este", t12_f3: "deplasată", t12_f4: "în alfabet.",
    t12_q: "Cum funcționează cifrul Cezar?",
    t12_qa: "Deplasare în alfabet", t12_qb: "Factorizare primă", t12_qc: "Valori hash", t12_qd: "Cheie publică",
    
    // Topic 13
    t13_title: "Criptare end-to-end",
    t13_text: "Doar expeditorul și destinatarul pot citi mesajul. Nici măcar serverul intermediar nu îl poate decripta.",
    t13_inst: "Ordonează:",
    t13_w1: "Doar", t13_w2: "expeditorul", t13_w3: "și", t13_w4: "destinatarul", t13_w5: "citesc.",
    t13_q: "Cine poate citi cu criptare end-to-end?",
    t13_qa: "Doar expeditorul și destinatarul", t13_qb: "Oricine din rețea", t13_qc: "Serverul", t13_qd: "Hackerii",
    
    // Topic 14
    t14_title: "Parole și Salting",
    t14_text: "Salting adaugă date aleatoare parolelor înainte de a fi transformate în hash, pentru a îngreuna atacurile de dicționar.",
    t14_inst: "Completează:",
    t14_sent: "Salting îngreunează ghicirea ___.",
    t14_qa14: "parolelor", t14_qb14: "numelor de utilizator", t14_qc14: "e-mailurilor", t14_qd14: "site-urilor",
    t14_q: "De ce se folosește salting?",
    t14_qa: "Împotriva atacurilor de dicționar", t14_qb: "Să aibă gust sărat", t14_qc: "Pentru a scurta parolele", t14_qd: "Pentru a le face lizibile",
    
    // Topic 15
    t15_title: "Mașina Enigma",
    t15_text: "O faimoasă mașină de criptare cu rotoare din Al Doilea Război Mondial, al cărei cod a fost spart de Alan Turing.",
    t15_inst: "Evidențiază:",
    t15_tk1: "Codul", t15_tk2: "Enigma", t15_tk3: "a fost spart de", t15_tk4: "Alan Turing", t15_tk5: "în război.",
    t15_q: "Cine a ajutat la spargerea codului Enigma?",
    t15_qa: "Alan Turing", t15_qb: "Albert Einstein", t15_qc: "Isaac Newton", t15_qd: "Bill Gates",
  },
};

export const INFO_K8_I3_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🔐", color: "#1A237E" },
    interactive: {
      type: "match-pairs",
      instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2",
      pairs: [
        { left: "t1_l1", right: "t1_r1" },
        { left: "t1_l2", right: "t1_r2" },
        { left: "t1_l3", right: "t1_r3" },
      ],
    },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🗝️", color: "#B71C1C" },
    interactive: {
      type: "gap-fill",
      instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2",
      sentence: "t2_sent",
      choices: ["t2_qa2", "t2_qb2", "t2_qc2", "t2_qd2"],
      correctIndex: 0,
    },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "🔒", color: "#1B5E20" },
    interactive: {
      type: "word-order",
      instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2",
      words: ["t3_w1", "t3_w2", "t3_w3", "t3_w4", "t3_w5"],
      correctOrder: [0, 1, 2, 3, 4],
    },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "✍️", color: "#E65100" },
    interactive: {
      type: "highlight-text",
      instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2",
      tokens: ["t4_tk1", "t4_tk2", "t4_tk3", "t4_tk4", "t4_tk5"],
      correctIndices: [0, 2, 4],
    },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🔑", color: "#4A148C" },
    interactive: {
      type: "drag-to-bucket",
      instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2",
      buckets: [
        { id: "sym", label: "t5_bl1" },
        { id: "asym", label: "t5_bl2" },
      ],
      items: [
        { text: "t5_i1", bucketId: "sym" },
        { text: "t5_i2", bucketId: "asym" },
        { text: "t5_i3", bucketId: "sym" },
        { text: "t5_i4", bucketId: "asym" },
      ],
    },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "#️⃣", color: "#00838F" },
    interactive: { type: "sentence-build", instruction: "t6_inst", fragments: ["t6_f1", "t6_f2", "t6_f3", "t6_f4"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🧮", color: "#00695C" },
    interactive: { type: "word-order", instruction: "t7_inst", words: ["t7_w1", "t7_w2", "t7_w3", "t7_w4", "t7_w5"], correctOrder: [0, 1, 2, 3, 4] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🛡️", color: "#2E7D32" },
    interactive: { type: "gap-fill", instruction: "t8_inst", sentence: "t8_sent", choices: ["t8_qa8", "t8_qb8", "t8_qc8", "t8_qd8"], correctIndex: 0 },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "📜", color: "#F9A825" },
    interactive: { type: "match-pairs", instruction: "t9_inst", pairs: [{ left: "t9_l1", right: "t9_r1" }, { left: "t9_l2", right: "t9_r2" }, { left: "t9_l3", right: "t9_r3" }] },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🚇", color: "#1565C0" },
    interactive: { type: "highlight-text", instruction: "t10_inst", tokens: ["t10_tk1", "t10_tk2", "t10_tk3", "t10_tk4", "t10_tk5"], correctIndices: [3] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" }
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "simple-icon", icon: "🖼️", color: "#6A1B9A" },
    interactive: { type: "drag-to-bucket", instruction: "t11_inst", buckets: [{ id: "b1", label: "t11_bl1" }, { id: "b2", label: "t11_bl2" }], items: [{ text: "t11_i1", bucketId: "b1" }, { text: "t11_i2", bucketId: "b2" }, { text: "t11_i3", bucketId: "b1" }, { text: "t11_i4", bucketId: "b2" }] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" }
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "simple-icon", icon: "🏛️", color: "#D84315" },
    interactive: { type: "sentence-build", instruction: "t12_inst", fragments: ["t12_f1", "t12_f2", "t12_f3", "t12_f4"] },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" }
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "simple-icon", icon: "↔️", color: "#37474F" },
    interactive: { type: "word-order", instruction: "t13_inst", words: ["t13_w1", "t13_w2", "t13_w3", "t13_w4", "t13_w5"], correctOrder: [0, 1, 2, 3, 4] },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" }
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "simple-icon", icon: "🧂", color: "#827717" },
    interactive: { type: "gap-fill", instruction: "t14_inst", sentence: "t14_sent", choices: ["t14_qa14", "t14_qb14", "t14_qc14", "t14_qd14"], correctIndex: 0 },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" }
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "simple-icon", icon: "⚙️", color: "#4E342E" },
    interactive: { type: "highlight-text", instruction: "t15_inst", tokens: ["t15_tk1", "t15_tk2", "t15_tk3", "t15_tk4", "t15_tk5"], correctIndices: [3] },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" }
  }
];
