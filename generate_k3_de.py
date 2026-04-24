
import json
import os

def generate_tasks(theme_name, mcq_data, typing_words):
    tasks = []
    # MCQs
    for q, opts, correct in mcq_data:
        tasks.append({
            "type": "mcq",
            "question": q,
            "options": opts,
            "correct": correct
        })
    # Typing
    for word in typing_words:
        tasks.append({
            "type": "typing",
            "question": f"Tippe das Wort: {word}",
            "answer": word
        })
    return {"theme": theme_name, "tasks": tasks}

# Data for themes
data = {}

# 1. Das Internet
data["1"] = generate_tasks("Das Internet", [
    ("Was ist das Internet?", ["Ein weltweites Netzwerk von Computern", "Ein kleiner Computer", "Ein Computerspiel", "Ein Drucker"], 0),
    ("Wie nennt man das Surfen im Internet?", ["Browsen", "Fliegen", "Tauchen", "Rennen"], 0),
    ("Was braucht man, um ins Internet zu gehen?", ["Einen Internetanschluss", "Ein Buch", "Einen Bleistift", "Einen Spiegel"], 0),
    ("Was ist ein Browser?", ["Ein Programm, um Webseiten zu sehen", "Ein Spielzeug", "Ein Lied", "Eine Obstsorte"], 0),
    ("Welches Symbol steht oft für das Internet?", ["Eine Weltkugel", "Ein Apfel", "Ein Hund", "Ein Auto"], 0),
    ("Was kann man im Internet machen?", ["Informationen suchen", "Zähne putzen", "Schlafen", "Essen kochen"], 0),
    ("Was ist WLAN?", ["Kabelloses Internet", "Ein Kabel", "Ein Monitor", "Eine Tastatur"], 0),
    ("Was ist eine Webseite?", ["Eine Seite im Internet mit Infos", "Ein Blatt Papier", "Ein Poster", "Ein Fenster"], 0),
    ("Wie heißt die Adresszeile im Browser?", ["URL-Leiste", "Namensschild", "Briefkasten", "Türe"], 0),
    ("Was bedeutet 'online'?", ["Mit dem Internet verbunden", "Computer aus", "Schlafen", "Offline"], 0),
    ("Was ist Google?", ["Eine Suchmaschine", "Ein Browser", "Ein Betriebssystem", "Ein Handy"], 0),
    ("Kann man im Internet lernen?", ["Ja, es gibt viele Lernseiten", "Nein, niemals", "Nur sonntags", "Nur wenn es regnet"], 0),
    ("Was ist eine E-Mail?", ["Eine elektronische Post", "Ein Paket", "Ein Brief aus Papier", "Ein Telefonanruf"], 0),
    ("Was ist ein Router?", ["Ein Gerät für den Internetzugang", "Eine Maus", "Ein Bildschirm", "Ein Lautsprecher"], 0),
    ("Darf man Fremden im Internet alles erzählen?", ["Nein, niemals", "Ja, klar", "Nur meinen Namen", "Nur mein Alter"], 0),
    ("Was ist ein Link?", ["Eine Verbindung zu einer anderen Seite", "Ein Bild", "Ein Text", "Ein Video"], 0),
    ("Wie sieht ein Link oft aus?", ["Blau und unterstrichen", "Rot und fett", "Gelb und klein", "Grün"], 0),
    ("Was ist ein Passwort?", ["Ein geheimes Wort zum Schutz", "Ein Name", "Ein Hobby", "Ein Lied"], 0),
    ("Warum sind Passwörter wichtig?", ["Zum Schutz der Daten", "Damit man sie vergisst", "Zum Spaß", "Weil sie bunt sind"], 0),
    ("Was ist ein Tablet?", ["Ein flacher, tragbarer Computer", "Ein Laptop", "Ein Stand-PC", "Ein Fernseher"], 0),
    ("Was ist ein Smartphone?", ["Ein Handy mit Internet", "Ein Festnetztelefon", "Ein Radio", "Eine Kamera"], 0),
    ("Was ist das WWW?", ["World Wide Web", "World Wild West", "Wir wollen Wissen", "Wasser wird warm"], 0),
    ("Was ist ein Video im Internet?", ["Ein bewegtes Bild mit Ton", "Ein Foto", "Ein Text", "Ein Buch"], 0),
    ("Kann man im Internet Musik hören?", ["Ja, auf vielen Seiten", "Nein", "Nur mit CD", "Nur im Radio"], 0),
    ("Was ist ein Klick?", ["Drücken der Maustaste", "Ein Geräusch", "Ein Bild", "Ein Wort"], 0)
], ["Internet", "Netzwerk", "Online", "Browser", "WLAN", "Router", "Computer", "Webseite", "Link", "Surfen"])

# 2. Webseiten
data["2"] = generate_tasks("Webseiten", [
    ("Was ist die Startseite einer Webseite?", ["Die erste Seite, die man sieht", "Die letzte Seite", "Die Seite mit dem Impressum", "Die Bildergalerie"], 0),
    ("Wie nennt man die Adresse einer Webseite?", ["URL", "Hausnummer", "Name", "Wohnort"], 0),
    ("Was findet man meistens oben auf einer Webseite?", ["Das Menü", "Das Ende", "Nichts", "Werbung"], 0),
    ("Was passiert, wenn man auf einen Link klickt?", ["Man kommt auf eine neue Seite", "Der Computer geht aus", "Das Bild wird größer", "Nichts"], 0),
    ("Was ist ein Logo auf einer Webseite?", ["Ein Bildzeichen der Firma/Seite", "Ein langer Text", "Ein Video", "Ein Lied"], 0),
    ("Wo findet man oft Kontaktinformationen?", ["Im Impressum oder Kontakt", "In den Bildern", "Im Logo", "Nirgendwo"], 0),
    ("Was ist ein Button?", ["Eine Schaltfläche zum Klicken", "Ein Bild", "Ein Text", "Ein Rahmen"], 0),
    ("Was bedeutet 'Scrollen'?", ["Die Seite nach oben oder unten bewegen", "Die Seite schließen", "Ein Bild malen", "Text tippen"], 0),
    ("Welches Tier wird oft mit Webseiten verbunden?", ["Die Spinne (Web)", "Der Hund", "Die Katze", "Der Vogel"], 0),
    ("Was ist eine Suchleiste?", ["Ein Feld zum Suchen von Inhalten", "Ein Bild", "Ein Menü", "Ein Link"], 0),
    ("Können Webseiten Videos enthalten?", ["Ja", "Nein", "Nur bei Regen", "Nur nachts"], 0),
    ("Was ist ein 'Tab'?", ["Ein Registerreiter im Browser", "Ein Button", "Ein Link", "Ein Bild"], 0),
    ("Was ist Text auf einer Webseite?", ["Geschriebene Informationen", "Ein Bild", "Ein Ton", "Ein Film"], 0),
    ("Was ist ein Hyperlink?", ["Ein anderes Wort für Link", "Ein schneller Link", "Ein großer Link", "Ein bunter Link"], 0),
    ("Warum gibt es Bilder auf Webseiten?", ["Damit es schöner aussieht und Infos gibt", "Nur aus Spaß", "Damit sie langsamer lädt", "Weil Platz da war"], 0),
    ("Was ist ein Menü?", ["Eine Liste mit Links zur Navigation", "Ein Essen", "Ein Spiel", "Ein Video"], 0),
    ("Wie kehrt man oft zur Startseite zurück?", ["Klick auf das Logo", "Computer neustarten", "Browser schließen", "Fenster putzen"], 0),
    ("Was ist ein Footer?", ["Der unterste Bereich einer Webseite", "Der oberste Bereich", "Die Mitte", "Ein Bild"], 0),
    ("Was ist ein Header?", ["Der oberste Bereich einer Webseite", "Der unterste Bereich", "Die Mitte", "Ein Link"], 0),
    ("Sind alle Webseiten wahr?", ["Nein, man muss kritisch sein", "Ja, immer", "Meistens", "Nur am Montag"], 0),
    ("Was ist eine Kinderwebseite?", ["Eine Seite extra für Kinder", "Eine Seite für Erwachsene", "Eine Seite für Autos", "Eine Seite für Hunde"], 0),
    ("Was ist das 'Haus'-Symbol?", ["Link zur Startseite", "Link zum Ende", "Beenden", "Drucken"], 0),
    ("Was ist eine Galerie?", ["Eine Sammlung von Bildern", "Ein langer Text", "Ein Video", "Ein Lied"], 0),
    ("Was ist ein Banner?", ["Ein großer grafischer Bereich", "Ein kleiner Punkt", "Ein Wort", "Ein Buchstabe"], 0),
    ("Kann man Webseiten speichern?", ["Ja, als Lesezeichen", "Nein", "Nur im Kopf", "Nur auf Papier"], 0)
], ["Webseite", "Startseite", "Adresse", "Menü", "Button", "Logo", "Inhalt", "Navigation", "Link", "Klicken"])

# 3. E-Mails
data["3"] = generate_tasks("E-Mails", [
    ("Was ist eine E-Mail?", ["Eine digitale Nachricht", "Ein Paket", "Ein Brief aus Papier", "Ein Telefonat"], 0),
    ("Was braucht man, um eine E-Mail zu schicken?", ["Eine E-Mail-Adresse", "Eine Briefmarke", "Einen Umschlag", "Einen Stift"], 0),
    ("Wie sieht eine E-Mail-Adresse aus?", ["name@beispiel.de", "www.name.de", "Name Beispiel", "Hausnummer 5"], 0),
    ("Welches Zeichen ist in jeder E-Mail-Adresse?", ["@", "#", "$", "&"], 0),
    ("Was ist der 'Posteingang'?", ["Dort kommen neue E-Mails an", "Dort löscht man E-Mails", "Dort schreibt man E-Mails", "Dort speichert man Bilder"], 0),
    ("Was bedeutet 'Senden'?", ["Die E-Mail abschicken", "Die E-Mail löschen", "Die E-Mail lesen", "Die E-Mail speichern"], 0),
    ("Was ist der 'Betreff'?", ["Eine kurze Beschreibung der E-Mail", "Der Name des Absenders", "Der Text der E-Mail", "Ein Bild"], 0),
    ("Was ist ein Anhang?", ["Eine Datei, die man mitschickt", "Ein Link", "Ein Wort", "Ein Smiley"], 0),
    ("Was ist ein 'Absender'?", ["Die Person, die die E-Mail schreibt", "Die Person, die sie bekommt", "Der Computer", "Das Internet"], 0),
    ("Was ist ein 'Empfänger'?", ["Die Person, die die E-Mail bekommt", "Die Person, die sie schreibt", "Der Router", "Die Maus"], 0),
    ("Darf man E-Mails von Unbekannten öffnen?", ["Vorsicht, lieber nicht (Virengefahr)", "Ja, immer", "Nur wenn sie bunt sind", "Nur am Wochenende"], 0),
    ("Was ist Spam?", ["Unerwünschte Werbung per E-Mail", "Ein leckeres Essen", "Ein wichtiges Dokument", "Ein schönes Bild"], 0),
    ("Was ist ein Entwurf?", ["Eine E-Mail, die noch nicht fertig ist", "Eine gelöschte E-Mail", "Eine gelesene E-Mail", "Eine alte E-Mail"], 0),
    ("Was bedeutet 'Antworten'?", ["Auf eine erhaltene E-Mail schreiben", "Eine neue E-Mail löschen", "Einen Link klicken", "Den PC ausschalten"], 0),
    ("Was ist 'Weiterleiten'?", ["Eine E-Mail an jemand anderen schicken", "Eine E-Mail löschen", "Eine E-Mail drucken", "Eine E-Mail verstecken"], 0),
    ("Wo findet man gelöschte E-Mails?", ["Im Papierkorb", "Im Posteingang", "Im Entwurf", "Gesendet"], 0),
    ("Was ist ein Passwort bei E-Mails?", ["Schutz für das E-Mail-Konto", "Ein Name", "Ein Bild", "Ein Link"], 0),
    ("Kann man Bilder per E-Mail schicken?", ["Ja, als Anhang", "Nein", "Nur mit der Post", "Nur schwarz-weiß"], 0),
    ("Wie nennt man das @-Zeichen noch?", ["Klammeraffe", "Hund", "Katze", "Maus"], 0),
    ("Was ist CC?", ["Eine Kopie an jemanden schicken", "Computer schließen", "Code cracken", "Cooler Chat"], 0),
    ("Was ist BCC?", ["Blindkopie (andere sehen es nicht)", "Bester Computer Club", "Bilder-Code", "Blauer Chat"], 0),
    ("Sollte man höflich in E-Mails sein?", ["Ja, immer", "Nein", "Nur zu Lehrern", "Nur zu Freunden"], 0),
    ("Was ist eine Signatur?", ["Ein fester Text am Ende der E-Mail", "Ein Bild", "Ein Anhang", "Ein Betreff"], 0),
    ("Kann man E-Mails weltweit verschicken?", ["Ja", "Nein, nur im Haus", "Nur in der Stadt", "Nur im Land"], 0),
    ("Gehen E-Mails schnell?", ["Ja, meistens in Sekunden", "Nein, dauert Tage", "Nur nachts", "Wie die Schneckenpost"], 0)
], ["Email", "Adresse", "Betreff", "Senden", "Anhang", "Eingang", "Nachricht", "Post", "Kontakt", "Passwort"])

# 4. Videoanrufe (Zoom)
data["4"] = generate_tasks("Videoanrufe (Zoom)", [
    ("Was ist Zoom?", ["Ein Programm für Videoanrufe", "Ein Spiel", "Ein Browser", "Ein Schreibprogramm"], 0),
    ("Was braucht man für einen Videoanruf?", ["Kamera und Mikrofon", "Einen Drucker", "Einen Scanner", "Einen Hammer"], 0),
    ("Was bedeutet 'Mute' (Stummschalten)?", ["Das Mikrofon ausmachen", "Die Kamera ausmachen", "Den PC ausschalten", "Das Licht ausmachen"], 0),
    ("Wie sieht das Kamerasymbol aus?", ["Wie eine Videokamera", "Wie ein Telefon", "Wie ein Buch", "Wie ein Haus"], 0),
    ("Was ist der 'Chat' in Zoom?", ["Ein Feld zum Schreiben von Textnachrichten", "Ein Bild", "Ein Video", "Ein Ton"], 0),
    ("Was bedeutet 'Bildschirm teilen'?", ["Anderen zeigen, was auf meinem Monitor ist", "Den Monitor zerbrechen", "Zwei Monitore kaufen", "Ein Foto machen"], 0),
    ("Wie tritt man einem Meeting bei?", ["Mit einem Link oder einer ID", "Mit einem Brief", "Mit Klopfen", "Mit Singen"], 0),
    ("Was ist ein 'Meeting'?", ["Ein Treffen im Videoanruf", "Ein Essen", "Ein Schlafplatz", "Ein Auto"], 0),
    ("Was ist ein virtueller Hintergrund?", ["Ein künstliches Bild hinter mir", "Eine echte Wand", "Ein Fenster", "Ein Spiegel"], 0),
    ("Was ist die 'Hand heben'-Funktion?", ["Zeigen, dass man etwas sagen möchte", "Sport machen", "Winken", "Tschüss sagen"], 0),
    ("Was sieht man in der 'Galerie-Ansicht'?", ["Viele Teilnehmer gleichzeitig", "Nur den Sprecher", "Nur sich selbst", "Nichts"], 0),
    ("Was sieht man in der 'Sprecher-Ansicht'?", ["Die Person, die gerade redet", "Alle Personen", "Nur den Chat", "Nur den Hintergrund"], 0),
    ("Warum ist ein Mikrofon wichtig?", ["Damit andere mich hören können", "Damit ich Musik hören kann", "Zum Tippen", "Zum Malen"], 0),
    ("Warum ist die Kamera wichtig?", ["Damit andere mich sehen können", "Damit ich fernsehen kann", "Zum Drucken", "Zum Speichern"], 0),
    ("Was bedeutet 'Leave' (Verlassen)?", ["Das Meeting beenden", "Das Meeting starten", "Den Chat öffnen", "Das Bild ändern"], 0),
    ("Darf man im Videoanruf höflich sein?", ["Ja, ausreden lassen", "Nein, alle durcheinander", "Einfach schreien", "Nichts sagen"], 0),
    ("Was ist ein Warteraum?", ["Dort wartet man, bis der Host einen reinlässt", "Ein Zimmer im Haus", "Ein Bahnhof", "Ein Spiel"], 0),
    ("Wer ist der 'Host'?", ["Der Organisator des Meetings", "Ein Gast", "Der Computer", "Das Internet"], 0),
    ("Kann man in Zoom Emojis benutzen?", ["Ja, für Reaktionen", "Nein", "Nur im Chat", "Nur bei Regen"], 0),
    ("Was passiert bei einer schlechten Internetverbindung?", ["Das Bild ruckelt oder bricht ab", "Der PC explodiert", "Das Licht geht aus", "Die Maus ist weg"], 0),
    ("Wie schaltet man die Kamera an?", ["Klick auf 'Video starten'", "Klick auf 'Audio'", "Klick auf 'Chat'", "PC schütteln"], 0),
    ("Was ist ein Breakout-Room?", ["Ein kleiner Nebenraum für Gruppen", "Ein Schlafzimmer", "Ein Pausenraum", "Ein Ausgang"], 0),
    ("Muss man sich für ein Meeting schick anziehen?", ["Ordentlich ist gut, wie in der Schule", "Nur im Pyjama", "Nur im Kostüm", "Egal"], 0),
    ("Was ist die ID?", ["Eine Nummer für das Meeting", "Mein Name", "Mein Alter", "Mein Passwort"], 0),
    ("Kann man Zoom auf dem Tablet nutzen?", ["Ja", "Nein", "Nur am Montag", "Nur mit Kabel"], 0)
], ["Videoanruf", "Kamera", "Mikrofon", "Meeting", "Teilnehmer", "Sprechen", "Hören", "Online", "Bildschirm", "Verbindung"])

# 5. Online-Lernen
data["5"] = generate_tasks("Online-Lernen", [
    ("Was ist Online-Lernen?", ["Lernen mit dem Computer und Internet", "Lernen im Wald", "Lernen im Schlaf", "Lernen ohne Lehrer"], 0),
    ("Was ist eine Lernplattform?", ["Eine Webseite zum Lernen", "Ein Spielplatz", "Ein Bahnhof", "Ein Flugzeug"], 0),
    ("Wo findet man oft Aufgaben?", ["Auf der Lernplattform", "Im Kühlschrank", "Unter dem Bett", "Im Garten"], 0),
    ("Was ist ein Quiz?", ["Ein kleiner Test mit Fragen", "Ein langer Text", "Ein Bild", "Ein Lied"], 0),
    ("Kann man online Videos zum Lernen schauen?", ["Ja, Erklärvideos helfen", "Nein, verboten", "Nur heimlich", "Nur sonntags"], 0),
    ("Wie gibt man Aufgaben oft ab?", ["Hochladen auf die Plattform", "Mit der Post schicken", "In den Müll werfen", "Gar nicht"], 0),
    ("Was ist ein Tutorial?", ["Eine Video-Anleitung", "Ein Spiel", "Ein Lied", "Ein Buch"], 0),
    ("Ist Konzentration beim Online-Lernen wichtig?", ["Ja, sehr wichtig", "Nein, man kann spielen", "Nur ein bisschen", "Egal"], 0),
    ("Braucht man beim Online-Lernen Pausen?", ["Ja, für die Augen und den Kopf", "Nein, nie", "Nur zum Schlafen", "Nur wenn der PC leer ist"], 0),
    ("Was ist ein digitales Buch?", ["Ein E-Book zum Lesen am PC", "Ein Buch aus Papier", "Ein Heft", "Ein Poster"], 0),
    ("Kann man online mit Lehrern sprechen?", ["Ja, im Video-Chat oder per Mail", "Nein", "Nur mit Brieftaube", "Nur im Traum"], 0),
    ("Was ist eine App?", ["Ein Programm auf dem Tablet/Handy", "Ein Apfel", "Ein Lied", "Ein Tier"], 0),
    ("Was ist Feedback?", ["Eine Rückmeldung zur Arbeit", "Ein Essen", "Ein Geräusch", "Ein Bild"], 0),
    ("Warum ist ein ruhiger Platz wichtig?", ["Damit man besser lernen kann", "Damit man schlafen kann", "Zum Fernsehen", "Zum Spielen"], 0),
    ("Was ist eine Mediathek?", ["Eine Sammlung von Videos und Filmen", "Eine Bibliothek", "Ein Kino", "Ein Laden"], 0),
    ("Kann man online in Gruppen arbeiten?", ["Ja, mit digitalen Werkzeugen", "Nein, unmöglich", "Nur alleine", "Nur draußen"], 0),
    ("Was ist ein Podcast?", ["Eine Audio-Sendung zum Hören", "Ein Film", "Ein Bild", "Ein Text"], 0),
    ("Ist das Internet immer sicher zum Lernen?", ["Man sollte nur bekannte Seiten nutzen", "Ja, immer", "Nein, nie", "Nur für Erwachsene"], 0),
    ("Was ist Interaktivität?", ["Mitmachen und Klicken am PC", "Nur Zuschauen", "Schlafen", "Nichts tun"], 0),
    ("Was ist ein Benutzerkonto?", ["Eigener Zugang mit Name und Passwort", "Ein Bankkonto", "Ein Sparbuch", "Ein Pass"], 0),
    ("Warum sollte man den Bildschirm nicht zu nah haben?", ["Um die Augen zu schonen", "Damit man mehr sieht", "Weil es verboten ist", "Weil der PC warm ist"], 0),
    ("Was ist ein Link zum Lernvideo?", ["Eine Verbindung zum Video", "Ein Bild", "Ein Text", "Ein Ton"], 0),
    ("Kann man online Sprachen lernen?", ["Ja, es gibt viele Apps", "Nein", "Nur im Land", "Nur mit CD"], 0),
    ("Was ist ein Download beim Lernen?", ["Arbeitsblätter auf den PC laden", "Den PC ausschalten", "Ein Bild malen", "Ein Lied singen"], 0),
    ("Muss man online pünktlich sein?", ["Ja, bei Live-Stunden", "Nein", "Wann man will", "Nur am Abend"], 0)
], ["Lernen", "Aufgabe", "Plattform", "Video", "Erklärung", "Online", "Schule", "Wissen", "Üben", "Lehrer"])

# (The script continues for themes 6-25 in the same manner...)
# I'll add the remaining themes logic here but condensed to ensure it fits.

def add_remaining_themes():
    # 6. Vergleich digitaler Geräte
    data["6"] = generate_tasks("Vergleich digitaler Geräte", [
        ("Was ist ein Desktop-PC?", ["Ein Computer für den Schreibtisch", "Ein kleiner Taschencomputer", "Ein Handy", "Eine Uhr"], 0),
        ("Was ist ein Laptop?", ["Ein tragbarer Computer", "Ein Kühlschrank", "Ein Fernseher", "Ein Drucker"], 0),
        ("Was ist der Vorteil eines Tablets?", ["Leicht und tragbar mit Touch", "Hat immer eine Maus", "Ist sehr schwer", "Hat keinen Bildschirm"], 0),
        ("Welches Gerät ist am kleinsten?", ["Smartphone", "Laptop", "Desktop-PC", "Monitor"], 0),
        ("Welches Gerät braucht meistens Strom aus der Dose?", ["Desktop-PC", "Tablet", "Handy", "Laptop"], 0),
        ("Womit schreibt man am Desktop-PC?", ["Tastatur", "Maus", "Monitor", "Drucker"], 0),
        ("Was ist ein Touchscreen?", ["Ein Bildschirm, den man berührt", "Ein Bildschirm mit Tasten", "Ein dunkler Bildschirm", "Ein Fenster"], 0),
        ("Was ist eine Maus?", ["Ein Eingabegerät zum Zeigen", "Ein Tier im Computer", "Ein Lautsprecher", "Ein Kabel"], 0),
        ("Welches Gerät hat einen Akku?", ["Laptop", "Drucker", "Scanner", "Monitor"], 0),
        ("Was ist ein Monitor?", ["Der Bildschirm des Computers", "Die Tastatur", "Die Maus", "Der Drucker"], 0),
        ("Was macht ein Drucker?", ["Bilder/Text auf Papier bringen", "Musik spielen", "Licht machen", "Kaffee kochen"], 0),
        ("Was ist eine Webcam?", ["Eine Kamera am Computer", "Ein Netz", "Ein Spielzeug", "Ein Lautsprecher"], 0),
        ("Wozu dienen Lautsprecher?", ["Um Ton zu hören", "Um Bilder zu sehen", "Zum Tippen", "Zum Speichern"], 0),
        ("Was ist ein USB-Stick?", ["Ein kleiner Speicher für Daten", "Ein Kleber", "Ein Stift", "Ein Kabel"], 0),
        ("Was ist ein Kopfhörer?", ["Gerät zum Musikhören am Ohr", "Eine Mütze", "Ein Brille", "Ein Schal"], 0),
        ("Was ist ein Scanner?", ["Digitalisiert Bilder/Texte", "Druckt Papier", "Spielt Musik", "Macht Licht"], 0),
        ("Welches Gerät ist am besten zum Spielen unterwegs?", ["Handheld-Konsole/Smartphone", "Desktop-PC", "Drucker", "Fernseher"], 0),
        ("Was ist Hardware?", ["Alle Teile, die man anfassen kann", "Programme", "Lieder", "Gedanken"], 0),
        ("Was ist Software?", ["Programme auf dem Computer", "Das Gehäuse", "Die Tastatur", "Das Kabel"], 0),
        ("Wofür steht 'PC'?", ["Personal Computer", "Prima Computer", "Papier Computer", "Pause Computer"], 0),
        ("Was ist ein Mikrofon?", ["Nimmt Ton auf", "Spielt Ton ab", "Zeigt Bilder", "Druckt Texte"], 0),
        ("Welches Gerät hat oft eine fest verbaute Tastatur?", ["Laptop", "Tablet", "Smartphone", "Drucker"], 0),
        ("Was ist ein Trackpad?", ["Maus-Ersatz beim Laptop", "Ein Rennauto", "Ein Papier", "Ein Stift"], 0),
        ("Welches Gerät nutzt man oft zum Telefonieren?", ["Smartphone", "Drucker", "Scanner", "Monitor"], 0),
        ("Was schützt den Computer vor Überhitzung?", ["Lüfter", "Decke", "Wasser", "Sonne"], 0)
    ], ["Computer", "Laptop", "Tablet", "Handy", "Monitor", "Tastatur", "Maus", "Drucker", "Hardware", "Gerät"])

    # 7. Browser-Tabs
    data["7"] = generate_tasks("Browser-Tabs", [
        ("Was ist ein Tab im Browser?", ["Ein Registerreiter für Webseiten", "Ein Button zum Schließen", "Ein Bild", "Ein Lied"], 0),
        ("Wozu sind Tabs gut?", ["Mehrere Webseiten gleichzeitig öffnen", "Computer ausschalten", "Musik lauter machen", "Spiele löschen"], 0),
        ("Wie öffnet man einen neuen Tab?", ["Klick auf das Plus-Symbol", "Klick auf das X", "Browser schließen", "PC schütteln"], 0),
        ("Wie schließt man einen Tab?", ["Klick auf das X im Tab", "Klick auf das Logo", "PC ausschalten", "Monitor putzen"], 0),
        ("Kann man Tabs verschieben?", ["Ja, durch Ziehen mit der Maus", "Nein", "Nur am Sonntag", "Nur mit Kleber"], 0),
        ("Was passiert, wenn man auf einen Tab klickt?", ["Man sieht die Webseite dieses Tabs", "Der Tab wird gelöscht", "Der Browser schließt", "Ein Video startet"], 0),
        ("Was ist ein 'Fenster' im Vergleich zu einem Tab?", ["Ein Fenster kann viele Tabs enthalten", "Es ist das Gleiche", "Ein Fenster ist kleiner", "Ein Fenster ist grün"], 0),
        ("Warum sollte man nicht zu viele Tabs offen haben?", ["Der Computer kann langsam werden", "Es sieht schön aus", "Die Maus geht kaputt", "Das Internet wird leer"], 0),
        ("Kann man Tabs wiederherstellen?", ["Ja, oft über den Verlauf", "Nein, nie", "Nur mit Zauberei", "Nur am Montag"], 0),
        ("Was ist die URL-Leiste?", ["Dort steht die Adresse der Seite", "Dort sind die Tabs", "Dort ist das Menü", "Dort sind Bilder"], 0),
        ("Wie nennt man das Wechseln zwischen Tabs?", ["Navigieren", "Fliegen", "Hüpfen", "Rennen"], 0),
        ("Was bedeutet das Haus-Symbol?", ["Zur Startseite gehen", "Tab schließen", "Neuen Tab öffnen", "Drucken"], 0),
        ("Was bedeutet der Pfeil nach links?", ["Eine Seite zurück gehen", "Eine Seite vor gehen", "Seite neu laden", "Browser schließen"], 0),
        ("Was bedeutet der Pfeil nach rechts?", ["Eine Seite vor gehen", "Eine Seite zurück gehen", "Seite löschen", "Favoriten öffnen"], 0),
        ("Was bedeutet der kreisförmige Pfeil?", ["Seite neu laden", "Seite schließen", "Seite drucken", "Seite speichern"], 0),
        ("Kann man Tabs gruppieren?", ["Ja, in modernen Browsern", "Nein", "Nur mit Schere", "Nur im Traum"], 0),
        ("Wo befinden sich Tabs meistens?", ["Ganz oben im Browserfenster", "Ganz unten", "Links an der Seite", "In der Mitte"], 0),
        ("Was ist ein Favicon?", ["Ein kleines Bildchen im Tab", "Ein großer Text", "Ein Video", "Ein Link"], 0),
        ("Kann man einen Tab stummschalten?", ["Ja, wenn dort Ton spielt", "Nein", "Nur mit Kopfhörern", "Nur nachts"], 0),
        ("Was ist der 'Inkognito-Modus'?", ["Surfen ohne Verlauf zu speichern", "Ein Spiel", "Ein bunter Browser", "Ein neuer PC"], 0),
        ("Wie speichert man eine Seite aus einem Tab?", ["Als Lesezeichen (Stern)", "Als Foto", "Gar nicht", "Auf Papier"], 0),
        ("Was passiert beim Schließen des Browsers?", ["Alle Tabs werden geschlossen", "Nur ein Tab schließt", "Der PC geht aus", "Nichts"], 0),
        ("Kann man Tabs anpinnen?", ["Ja, damit sie immer da sind", "Nein", "Nur mit Nadeln", "Nur im Wald"], 0),
        ("Was ist die Tab-Vorschau?", ["Ein kleines Bild der Seite", "Ein Text", "Ein Ton", "Ein Video"], 0),
        ("Welches Programm nutzt Tabs?", ["Webbrowser", "Taschenrechner", "Notizblock", "Paint"], 0)
    ], ["Browser", "Register", "Fenster", "Öffnen", "Schließen", "Wechseln", "Internet", "Surfen", "Symbol", "Navigation"])

    # 8. Favoriten
    data["8"] = generate_tasks("Favoriten", [
        ("Was sind Favoriten im Browser?", ["Gespeicherte Links zu Webseiten", "Lieblingslieder", "Beste Freunde", "Schöne Bilder"], 0),
        ("Wie nennt man Favoriten noch?", ["Lesezeichen", "Sticker", "Notizen", "Briefe"], 0),
        ("Welches Symbol steht oft für Favoriten?", ["Ein Stern", "Ein Herz", "Ein Auto", "Ein Baum"], 0),
        ("Warum nutzt man Favoriten?", ["Um Seiten schnell wiederzufinden", "Um den PC zu dekorieren", "Um Platz zu löschen", "Aus Langeweile"], 0),
        ("Wo findet man die Favoriten?", ["In der Favoritenleiste oder Menü", "Unter der Tastatur", "Im Papierkorb", "Auf dem Desktop"], 0),
        ("Wie fügt man eine Seite zu den Favoriten hinzu?", ["Auf den Stern klicken", "Den PC ausschalten", "Laut rufen", "Ein Foto machen"], 0),
        ("Kann man Favoriten sortieren?", ["Ja, in Ordnern", "Nein", "Nur nach Farbe", "Nur nach Größe"], 0),
        ("Was ist eine Favoritenleiste?", ["Eine Leiste unter der URL-Zeile", "Ein Regal", "Ein Spiel", "Ein Video"], 0),
        ("Kann man Favoriten löschen?", ["Ja, wenn man sie nicht mehr braucht", "Nein, niemals", "Nur am Freitag", "Nur mit Wasser"], 0),
        ("Was passiert, wenn man auf einen Favoriten klickt?", ["Die gespeicherte Seite öffnet sich", "Das Internet geht aus", "Ein Bild wird gemalt", "Nichts"], 0),
        ("Kann man Favoriten benennen?", ["Ja, man kann den Namen ändern", "Nein", "Nur mit Zahlen", "Nur mit Buchstaben"], 0),
        ("Wo werden Favoriten gespeichert?", ["Im Webbrowser", "Auf Papier", "Im Monitor", "In der Maus"], 0),
        ("Sind Favoriten auf jedem Computer gleich?", ["Nein, nur wenn man sich anmeldet", "Ja, immer", "Nur bei gleichem Strom", "Nur bei Regen"], 0),
        ("Kann man Favoriten-Ordner erstellen?", ["Ja, zur besseren Übersicht", "Nein", "Nur zwei Stück", "Nur für Bilder"], 0),
        ("Was ist das Lesezeichen-Menü?", ["Eine Liste aller Favoriten", "Ein Kochbuch", "Ein Spielmenü", "Ein Video"], 0),
        ("Hilft ein Favorit beim Lernen?", ["Ja, für oft genutzte Lernseiten", "Nein", "Nur beim Schlafen", "Nur sonntags"], 0),
        ("Kann man Favoriten exportieren?", ["Ja, um sie auf anderen PCs zu nutzen", "Nein", "Nur mit dem Drucker", "Nur mit dem Handy"], 0),
        ("Was ist ein Lesezeichen-Manager?", ["Ein Programmteil zum Verwalten", "Ein echter Mensch", "Ein Buch", "Ein Roboter"], 0),
        ("Wie sieht ein Lesezeichen-Ordner aus?", ["Wie ein gelber Ordner", "Wie ein Kreis", "Wie ein Stern", "Wie ein Link"], 0),
        ("Kann man eine Seite mehrfach speichern?", ["Ja", "Nein", "Nur dreimal", "Nur im Traum"], 0),
        ("Was ist die 'Lesezeichen-Symbolleiste'?", ["Ein anderer Name für Favoritenleiste", "Ein Werkzeugkasten", "Ein Bild", "Ein Text"], 0),
        ("Kann man Favoriten mit der Tastatur öffnen?", ["Ja, oft mit Tastenkürzeln", "Nein", "Nur mit der Maus", "Nur mit Sprache"], 0),
        ("Was ist ein 'Tag' bei Favoriten?", ["Ein Schlagwort zur Suche", "Ein Wochentag", "Ein Bild", "Ein Ton"], 0),
        ("Was bedeutet 'Lesezeichen hinzufügen'?", ["Seite in Favoriten speichern", "Seite löschen", "Seite drucken", "Seite beenden"], 0),
        ("Ist ein Favorit ein echtes Buchzeichen?", ["Nein, es ist digital", "Ja", "Nur wenn man es druckt", "Nur im Märchen"], 0)
    ], ["Favoriten", "Lesezeichen", "Speichern", "Stern", "Ordner", "Browser", "Link", "Schnell", "Suche", "Verwalten"])

    # 9. Bildersuche
    data["9"] = generate_tasks("Bildersuche", [
        ("Wo kann man im Internet nach Bildern suchen?", ["In einer Suchmaschine (z.B. Google Bilder)", "Im Taschenrechner", "In Paint", "Im Papierkorb"], 0),
        ("Was gibt man ein, um ein Bild zu finden?", ["Suchbegriffe (Keywords)", "Seinen Namen", "Ein Lied", "Nichts"], 0),
        ("Wie nennt man die kleinen Vorschaubilder?", ["Thumbnails", "Riesenbilder", "Pixel", "Punkte"], 0),
        ("Was passiert, wenn man auf ein Vorschaubild klickt?", ["Es wird meistens größer angezeigt", "Es wird gelöscht", "Der PC geht aus", "Es wird gedruckt"], 0),
        ("Darf man jedes Bild aus dem Internet einfach benutzen?", ["Nein, man muss das Urheberrecht beachten", "Ja, alles ist frei", "Nur wenn es schön ist", "Nur für die Schule"], 0),
        ("Was bedeutet 'Urheberrecht'?", ["Der Ersteller bestimmt über sein Werk", "Jeder darf alles machen", "Recht auf Internet", "Recht auf Bilder"], 0),
        ("Wie findet man nur große Bilder?", ["Über Suchfilter (Größe)", "Durch Raten", "Den Monitor schütteln", "Länger warten"], 0),
        ("Was kann man bei der Bildersuche noch filtern?", ["Farbe, Typ, Zeit", "Gewicht", "Temperatur", "Geruch"], 0),
        ("Was ist ein ClipArt?", ["Eine einfache Zeichnung/Grafik", "Ein echtes Foto", "Ein langer Film", "Ein Lied"], 0),
        ("Was ist ein GIF?", ["Ein bewegtes Bild", "Ein Ton", "Ein Text", "Ein Spiel"], 0),
        ("Wie speichert man ein Bild auf dem PC?", ["Rechtsklick -> Bild speichern unter", "Ausschneiden mit der Schere", "Draufschlagen", "Anschauen"], 0),
        ("Wo werden gespeicherte Bilder oft abgelegt?", ["Im Ordner 'Bilder' oder 'Downloads'", "Auf dem Dachboden", "Im Papierkorb", "Im Browser"], 0),
        ("Was ist eine Bild-URL?", ["Die Internetadresse eines Bildes", "Der Name des Fotografen", "Die Farbe des Bildes", "Die Größe"], 0),
        ("Wie findet man Bilder von Tieren?", ["Suchwort 'Tiere' eingeben", "Lied singen", "Hund streicheln", "Warten"], 0),
        ("Kann man nach ähnlichen Bildern suchen?", ["Ja, mit der 'Suche anhand von Bildern'", "Nein", "Nur durch Glück", "Nur nachts"], 0),
        ("Was ist ein Pixel?", ["Ein kleiner Bildpunkt", "Ein großes Bild", "Ein Computer", "Ein Kabel"], 0),
        ("Was bedeutet 'hochauflösend'?", ["Das Bild ist sehr scharf und klar", "Das Bild ist unscharf", "Das Bild ist klein", "Das Bild ist alt"], 0),
        ("Was ist ein Wasserzeichen?", ["Ein Schutz-Schriftzug im Bild", "Ein Wassertropfen", "Ein blauer Rahmen", "Ein nasses Bild"], 0),
        ("Warum sind manche Bilder unscharf?", ["Kleine Datei oder schlechte Qualität", "Weil sie alt sind", "Weil sie nass sind", "Wegen der Farbe"], 0),
        ("Kann man Bilder direkt in ein Dokument kopieren?", ["Ja, Kopieren und Einfügen", "Nein", "Nur mit dem Drucker", "Nur mit der Post"], 0),
        ("Was ist die Google Bildersuche?", ["Ein spezieller Bereich zum Finden von Bildern", "Ein Spiel", "Ein Browser", "Ein Buch"], 0),
        ("Was ist ein Portrait?", ["Ein Bild von einer Person (Gesicht)", "Ein Bild von einem Auto", "Ein Bild vom Wald", "Ein Bild vom Weltraum"], 0),
        ("Was ist eine Landschaftsaufnahme?", ["Ein Bild von der Natur/Umgebung", "Ein Bild vom Essen", "Ein Bild von einer Maus", "Ein Bild von Text"], 0),
        ("Wie nennt man das Format für Fotos oft?", ["JPG oder JPEG", "TXT", "MP3", "EXE"], 0),
        ("Sind alle Bilder im Internet echt?", ["Nein, sie können bearbeitet sein", "Ja, immer", "Meistens", "Nur am Montag"], 0)
    ], ["Bildersuche", "Foto", "Grafik", "Speichern", "Urheberrecht", "Pixel", "Suchen", "Filter", "Größe", "Qualität"])

    # 10. Sicherer Download
    data["10"] = generate_tasks("Sicherer Download", [
        ("Was bedeutet 'Download'?", ["Etwas aus dem Internet auf den PC laden", "Etwas ins Internet schicken", "Den PC ausschalten", "Ein Bild malen"], 0),
        ("Was ist eine 'Download-Quelle'?", ["Die Webseite, von der man lädt", "Ein Brunnen", "Ein Kabel", "Ein Monitor"], 0),
        ("Was ist eine vertrauenswürdige Seite?", ["Eine bekannte und sichere Webseite", "Eine Seite mit viel Werbung", "Eine Seite ohne Namen", "Jede Seite"], 0),
        ("Sollte man Programme ohne Erlaubnis der Eltern laden?", ["Nein, niemals", "Ja, klar", "Nur kleine Programme", "Nur Spiele"], 0),
        ("Was ist ein Computervirus?", ["Ein schädliches Programm", "Ein echter Schnupfen", "Ein kleiner Käfer", "Ein bunter Fisch"], 0),
        ("Wie schützt man sich vor Viren?", ["Mit einem Antiviren-Programm", "Mit Händewaschen", "Mit einer Maske", "Mit dem Ausschalten"], 0),
        ("Was ist eine Dateiendung?", ["Die Buchstaben am Ende (z.B. .exe, .pdf)", "Der Name der Datei", "Die Größe", "Die Farbe"], 0),
        ("Welche Dateiendung kann gefährlich sein?", [".exe (aus unbekannter Quelle)", ".txt", ".jpg", ".mp3"], 0),
        ("Was passiert, wenn man auf 'Download' klickt?", ["Die Datei wird übertragen", "Der PC geht kaputt", "Das Internet ist weg", "Nichts"], 0),
        ("Was ist ein Fortschrittsbalken?", ["Zeigt an, wie lange der Download dauert", "Ein Spiel", "Ein Lineal", "Ein Video"], 0),
        ("Wo findet man heruntergeladene Dateien?", ["Im Ordner 'Downloads'", "Auf dem Desktop", "Im Papierkorb", "Im Kühlschrank"], 0),
        ("Was ist eine Installationsdatei?", ["Ein Programm zum Einrichten von Software", "Ein Bild", "Ein Text", "Ein Video"], 0),
        ("Warum ist Werbung mit 'Jetzt downloaden' oft gefährlich?", ["Es könnte Fake oder Schadsoftware sein", "Es ist immer ein Geschenk", "Es ist lustig", "Es ist bunt"], 0),
        ("Sollte man Apps nur aus offiziellen Stores laden?", ["Ja (z.B. App Store, Play Store)", "Nein, egal woher", "Nur von Freunden", "Nur von YouTube"], 0),
        ("Was bedeutet 'Abbrechen'?", ["Den Download stoppen", "Den Download starten", "Den PC löschen", "Den Monitor putzen"], 0),
        ("Darf man Musik einfach so kostenlos downloaden?", ["Nur von legalen Seiten", "Ja, immer", "Nein, nie", "Nur nachts"], 0),
        ("Was ist eine PDF-Datei?", ["Ein festes Dokumentenformat", "Ein Spiel", "Ein Video", "Ein Ton"], 0),
        ("Was ist eine ZIP-Datei?", ["Mehrere Dateien verpackt in eine", "Ein schneller Download", "Ein Bild", "Ein Lied"], 0),
        ("Warum braucht man Speicherplatz für Downloads?", ["Weil die Datei Platz auf der Festplatte braucht", "Weil sie sonst wegfliegt", "Braucht man nicht", "Wegen der Farbe"], 0),
        ("Was ist Schadsoftware (Malware)?", ["Programme, die dem PC schaden", "Gute Programme", "Spiele", "Malprogramme"], 0),
        ("Sollte man bei Warnmeldungen den Download stoppen?", ["Ja, vorsichtshalber", "Nein, ignorieren", "PC schütteln", "Laut schreien"], 0),
        ("Was ist eine Lizenz?", ["Die Erlaubnis, etwas zu nutzen", "Ein Führerschein", "Ein Ausweis", "Ein Bild"], 0),
        ("Kann ein Download den PC langsam machen?", ["Ja, wenn viele gleichzeitig laufen", "Nein", "Nur bei Regen", "Nur am Montag"], 0),
        ("Was ist ein Update?", ["Eine neuere, verbesserte Version", "Ein alter Fehler", "Ein Bild", "Ein Ton"], 0),
        ("Sollte man Downloads prüfen?", ["Ja, mit einem Virenscanner", "Nein", "Nur anschauen", "Nur riechen"], 0)
    ], ["Download", "Sicherheit", "Virus", "Quelle", "Datei", "Speichern", "Programm", "Gefahr", "Schutz", "Prüfen"])

    # 11. Cloud-Speicher
    data["11"] = generate_tasks("Cloud-Speicher", [
        ("Was ist eine Cloud?", ["Ein Speicherplatz im Internet", "Eine echte Wolke", "Ein Spiel", "Ein Browser"], 0),
        ("Was bedeutet 'Cloud' auf Deutsch?", ["Wolke", "Sonne", "Regen", "Wind"], 0),
        ("Warum nutzt man Cloud-Speicher?", ["Um von überall auf Daten zuzugreifen", "Damit der PC schwerer wird", "Zum Spaß", "Weil es blau ist"], 0),
        ("Nenne ein Beispiel für eine Cloud.", ["Google Drive oder OneDrive", "Amazon", "Netflix", "WhatsApp"], 0),
        ("Was braucht man für die Cloud?", ["Einen Account und Internet", "Einen Regenschirm", "Einen Drucker", "Ein Buch"], 0),
        ("Wo liegen die Daten in einer Cloud?", ["Auf entfernten Servern", "Im eigenen Monitor", "In der Tastatur", "In der Maus"], 0),
        ("Kann man Dateien in der Cloud teilen?", ["Ja, mit anderen Personen", "Nein, verboten", "Nur mit dem Lehrer", "Nur mit dem Hund"], 0),
        ("Was bedeutet 'Synchronisieren'?", ["Daten auf allen Geräten gleich halten", "Daten löschen", "Daten bemalen", "Daten verstecken"], 0),
        ("Ist die Cloud unendlich groß?", ["Nein, der Speicherplatz ist oft begrenzt", "Ja, immer", "Nur wenn es regnet", "Nur für Kinder"], 0),
        ("Was ist ein 'Upload' zur Cloud?", ["Dateien vom PC in die Cloud schicken", "Dateien löschen", "Dateien drucken", "Dateien lesen"], 0),
        ("Kann man in der Cloud gemeinsam arbeiten?", ["Ja, gleichzeitig an einem Dokument", "Nein", "Nur nacheinander", "Nur am Montag"], 0),
        ("Was passiert, wenn man kein Internet hat?", ["Man kann meist nicht auf die Cloud zugreifen", "Alles wird gelöscht", "Der PC geht aus", "Nichts"], 0),
        ("Was ist ein Passwort für die Cloud?", ["Schutz für den Zugang", "Ein Name", "Ein Bild", "Ein Link"], 0),
        ("Sind Cloud-Daten sicher?", ["Meistens, aber man braucht ein gutes Passwort", "Ja, absolut", "Nein, nie", "Nur am Tag"], 0),
        ("Was ist Google Drive?", ["Ein Cloud-Speicher von Google", "Ein Auto", "Ein Spiel", "Ein Film"], 0),
        ("Was ist iCloud?", ["Ein Cloud-Speicher von Apple", "Ein Eis", "Ein Spiel", "Ein Buch"], 0),
        ("Was ist Dropbox?", ["Ein bekannter Cloud-Anbieter", "Ein Briefkasten", "Ein Paket", "Ein Spiel"], 0),
        ("Kann man Fotos in der Cloud speichern?", ["Ja, sehr oft", "Nein", "Nur Texte", "Nur Musik"], 0),
        ("Was bedeutet 'Freigeben'?", ["Anderen erlauben, die Datei zu sehen", "Die Datei löschen", "Die Datei beenden", "Die Datei drucken"], 0),
        ("Kostet Cloud-Speicher immer Geld?", ["Oft ist ein Teil kostenlos", "Ja, immer viel", "Nein, immer gratis", "Nur sonntags"], 0),
        ("Kann man Ordner in der Cloud erstellen?", ["Ja, zur Organisation", "Nein", "Nur einen", "Nur für Musik"], 0),
        ("Was ist ein Link zur Cloud-Datei?", ["Ein Zugriffsweg für andere", "Ein Bild", "Ein Text", "Ein Ton"], 0),
        ("Kann man Cloud-Apps auf dem Handy nutzen?", ["Ja", "Nein", "Nur mit Kabel", "Nur am Abend"], 0),
        ("Was ist ein Server?", ["Ein leistungsstarker Computer für Daten", "Ein Kellner", "Ein Spiel", "Ein Monitor"], 0),
        ("Warum ist die Cloud praktisch für die Schule?", ["Man hat seine Aufgaben überall dabei", "Man muss nicht lernen", "Man bekommt bessere Noten", "Man kann spielen"], 0)
    ], ["Cloud", "Speicher", "Internet", "Upload", "Daten", "Teilen", "Konto", "Passwort", "Sicherung", "Online"])

    # 12. Google Dokumente
    data["12"] = generate_tasks("Google Dokumente", [
        ("Was ist Google Dokumente?", ["Ein Schreibprogramm im Internet", "Ein Malprogramm", "Ein Spiel", "Ein Browser"], 0),
        ("Wo werden Google Dokumente gespeichert?", ["Automatisch in der Cloud (Drive)", "Auf einer Diskette", "Nur auf Papier", "Gar nicht"], 0),
        ("Was kann man mit Google Dokumenten machen?", ["Texte schreiben und formatieren", "Musik komponieren", "Videos schneiden", "Essen bestellen"], 0),
        ("Kann man mit anderen gleichzeitig schreiben?", ["Ja, das ist ein Hauptvorteil", "Nein, immer nur einer", "Nur mit Erlaubnis der Polizei", "Nur nachts"], 0),
        ("Wie nennt man den blinkenden Strich beim Schreiben?", ["Cursor", "Punkt", "Stift", "Maus"], 0),
        ("Wie macht man Text 'fett'?", ["Klick auf das 'B' oder 'F' Symbol", "PC schütteln", "Laut rufen", "Text löschen"], 0),
        ("Wie macht man Text 'kursiv'?", ["Klick auf das 'I' oder 'K' Symbol", "Text drehen", "Monitor schräg halten", "Nichts"], 0),
        ("Wie unterstreicht man Text?", ["Klick auf das 'U' Symbol", "Mit einem Lineal am Monitor", "Mit einem Stift", "Gar nicht"], 0),
        ("Was ist die Schriftart?", ["Das Aussehen der Buchstaben", "Die Farbe der Tinte", "Die Größe des Papiers", "Der Name des Autors"], 0),
        ("Kann man Bilder in ein Dokument einfügen?", ["Ja, über 'Einfügen'", "Nein", "Nur mit Kleber", "Nur schwarze Bilder"], 0),
        ("Was bedeutet 'Linksbündig'?", ["Der Text beginnt am linken Rand", "Der Text ist links weg", "Der Text ist blau", "Der Text ist klein"], 0),
        ("Was bedeutet 'Zentriert'?", ["Der Text ist in der Mitte", "Der Text ist oben", "Der Text ist unten", "Der Text ist weg"], 0),
        ("Wie ändert man die Schriftfarbe?", ["Über das 'A' mit dem Farbbalken", "Den Monitor anmalen", "Gar nicht", "Tastatur wechseln"], 0),
        ("Was ist die Schriftgröße?", ["Wie groß die Buchstaben sind", "Wie lang der Text ist", "Wie viele Seiten es sind", "Wie schwer der PC ist"], 0),
        ("Was ist ein Zeilenumbruch?", ["Wenn der Text in der nächsten Zeile weitergeht", "Wenn der PC kaputt ist", "Wenn man eine Pause macht", "Wenn man löscht"], 0),
        ("Wie löscht man Text?", ["Mit der Backspace- oder Entf-Taste", "Mit dem Radiergummi am Monitor", "Mit Wasser", "Gar nicht"], 0),
        ("Was ist die 'Rückgängig'-Funktion?", ["Den letzten Schritt löschen/umkehren", "Den PC ausschalten", "Zurück laufen", "Singen"], 0),
        ("Wie sieht das Symbol für 'Rückgängig' aus?", ["Ein gebogener Pfeil nach links", "Ein gerader Pfeil", "Ein Kreuz", "Ein Stern"], 0),
        ("Was ist eine Aufzählung?", ["Eine Liste mit Punkten oder Zahlen", "Ein Rechenbeispiel", "Ein Bild", "Ein Ton"], 0),
        ("Kann man Dokumente ausdrucken?", ["Ja", "Nein", "Nur mit dem Handy", "Nur am Montag"], 0),
        ("Was bedeutet 'Teilen' bei einem Dokument?", ["Anderen Zugriff geben", "Das Dokument zerreißen", "Zwei Dokumente machen", "Text halbieren"], 0),
        ("Was ist ein Kommentar?", ["Eine Anmerkung an der Seite", "Ein lauter Ruf", "Ein Bild", "Ein Link"], 0),
        ("Wie heißt das Dateiformat oft?", [".docx oder Google Doc", ".mp3", ".jpg", ".exe"], 0),
        ("Muss man 'Speichern' klicken?", ["Nein, es speichert meist automatisch", "Ja, jede Sekunde", "Nur beim Beenden", "Nur am Ende"], 0),
        ("Was ist eine Überschrift?", ["Ein wichtiger Text am Anfang eines Teils", "Ein Hut", "Ein Bild", "Ein Name"], 0)
    ], ["Dokument", "Schreiben", "Text", "Speichern", "Teilen", "Schrift", "Format", "Cursor", "Einfügen", "Cloud"])

    # 13. Tabellen-Grundlagen
    data["13"] = generate_tasks("Tabellen-Grundlagen", [
        ("Was ist ein Tabellenprogramm?", ["Z.B. Google Tabellen oder Excel", "Paint", "Browser", "YouTube"], 0),
        ("Woraus besteht eine Tabelle?", ["Zeilen und Spalten", "Nur Kreisen", "Nur Text", "Nur Bildern"], 0),
        ("Wie nennt man ein einzelnes Kästchen?", ["Zelle", "Box", "Punkt", "Haus"], 0),
        ("Wie werden Spalten meistens benannt?", ["Mit Buchstaben (A, B, C...)", "Mit Zahlen", "Mit Namen", "Mit Farben"], 0),
        ("Wie werden Zeilen meistens benannt?", ["Mit Zahlen (1, 2, 3...)", "Mit Buchstaben", "Mit Tiernamen", "Gar nicht"], 0),
        ("Was ist eine Zelle wie 'A1'?", ["Die Zelle in Spalte A und Zeile 1", "Ein Spiel", "Ein Code", "Ein Fehler"], 0),
        ("Was kann man in eine Zelle schreiben?", ["Texte, Zahlen, Formeln", "Nur Musik", "Nur Filme", "Nichts"], 0),
        ("Was ist eine Formel?", ["Eine Rechenvorschrift (z.B. Summe)", "Ein Zauberspruch", "Ein Name", "Ein Bild"], 0),
        ("Mit welchem Zeichen beginnen Formeln oft?", ["=", "+", "#", "!"], 0),
        ("Kann man mit Tabellen rechnen?", ["Ja, sehr gut", "Nein", "Nur mit dem Kopf", "Nur bei Regen"], 0),
        ("Wofür sind Tabellen gut?", ["Listen, Pläne, Rechnungen", "Nur zum Malen", "Nur zum Schlafen", "Zum Fernsehen"], 0),
        ("Wie ändert man die Breite einer Spalte?", ["An der Linie oben ziehen", "PC schütteln", "Neu tippen", "Gar nicht"], 0),
        ("Kann man Zellen einfärben?", ["Ja, zur besseren Übersicht", "Nein", "Nur schwarz", "Nur weiß"], 0),
        ("Was ist ein Diagramm?", ["Eine bildliche Darstellung von Zahlen", "Ein Foto", "Ein langer Text", "Ein Video"], 0),
        ("Was ist die Summe?", ["Das Ergebnis einer Plus-Rechnung", "Ein Minus", "Ein Mal", "Ein Geteilt"], 0),
        ("Kann man Tabellen auch teilen?", ["Ja, wie Dokumente", "Nein", "Nur auf Papier", "Nur per Post"], 0),
        ("Wie fügt man eine Zeile ein?", ["Rechtsklick -> Zeile einfügen", "Tastatur drücken", "Monitor drehen", "Löschen"], 0),
        ("Was ist 'Sortieren'?", ["Daten nach ABC oder Größe ordnen", "Daten löschen", "Daten verstecken", "Daten bemalen"], 0),
        ("Was bedeutet 'Filtern'?", ["Nur bestimmte Daten anzeigen", "Daten löschen", "Daten waschen", "Daten drucken"], 0),
        ("Was ist ein Arbeitsblatt?", ["Eine einzelne Seite in der Tabelle", "Ein echtes Blatt Papier", "Ein Buch", "Ein Heft"], 0),
        ("Kann man Tabellen ausdrucken?", ["Ja", "Nein", "Nur mit dem Handy", "Nur am Freitag"], 0),
        ("Was ist eine Tabelle noch?", ["Eine Gliederung von Informationen", "Ein Stuhl", "Ein Fenster", "Ein Auto"], 0),
        ("Wie speichert man eine Tabelle?", ["Meistens automatisch in der Cloud", "Auf CD", "Gar nicht", "Auf Papier"], 0),
        ("Kann man Bilder in Tabellen einfügen?", ["Ja", "Nein", "Nur Texte", "Nur Zahlen"], 0),
        ("Sind Tabellen nur für Mathe?", ["Nein, auch für Listen und Pläne", "Ja", "Nur für Lehrer", "Nur für Forscher"], 0)
    ], ["Tabelle", "Zelle", "Spalte", "Zeile", "Rechnen", "Zahlen", "Liste", "Formel", "Ordnen", "Gitter"])

    # 14. Präsentationen
    data["14"] = generate_tasks("Präsentationen", [
        ("Was ist ein Präsentationsprogramm?", ["Z.B. Google Präsentationen oder PowerPoint", "Schreibprogramm", "Spiel", "Browser"], 0),
        ("Woraus besteht eine Präsentation?", ["Aus Folien", "Aus Seiten", "Aus Blättern", "Aus Rollen"], 0),
        ("Was ist eine 'Folie'?", ["Eine einzelne Seite der Präsentation", "Eine Plastikfolie", "Ein Bild", "Ein Text"], 0),
        ("Was gehört oft auf die erste Folie?", ["Titel und Name", "Das Ende", "Ein langes Video", "Gar nichts"], 0),
        ("Was ist der Zweck einer Präsentation?", ["Informationen anschaulich zeigen", "Nur zum Spielen", "Zum Schlafen", "Zum Musik hören"], 0),
        ("Kann man Bilder auf Folien einfügen?", ["Ja, das macht es besser", "Nein", "Nur mit Kleber", "Nur schwarze Bilder"], 0),
        ("Was ist ein Textfeld?", ["Ein Bereich, in den man schreibt", "Ein Feld im Wald", "Ein Buchstabe", "Ein Bild"], 0),
        ("Was ist ein Übergang?", ["Ein Effekt beim Wechsel der Folien", "Eine Brücke", "Ein Weg", "Ein Tunnel"], 0),
        ("Was ist eine Animation?", ["Bewegung von Objekten auf einer Folie", "Ein echter Film", "Ein Standbild", "Ein Ton"], 0),
        ("Wie startet man die Präsentation?", ["Klick auf 'Präsentieren' oder 'Start'", "PC schütteln", "Licht ausmachen", "Fenster öffnen"], 0),
        ("Sollte viel Text auf einer Folie stehen?", ["Nein, lieber kurz und knapp", "Ja, so viel wie möglich", "Nur Zahlen", "Gar kein Text"], 0),
        ("Was ist ein Design/Thema?", ["Das Aussehen der ganzen Präsentation", "Ein Lied", "Ein Name", "Ein Spiel"], 0),
        ("Kann man Videos in Präsentationen einbauen?", ["Ja", "Nein", "Nur bei Regen", "Nur nachts"], 0),
        ("Wie wechselt man zur nächsten Folie?", ["Klicken oder Pfeiltasten", "PC ausschalten", "Laut rufen", "Warten"], 0),
        ("Was ist ein Laserpointer (digital)?", ["Ein Lichtpunkt zum Zeigen", "Ein echtes Messer", "Ein Stift", "Ein Radiergummi"], 0),
        ("Warum sind Farben wichtig?", ["Damit man alles gut lesen kann", "Nur damit es bunt ist", "Farben sind egal", "Nur für Bilder"], 0),
        ("Kann man Präsentationen gemeinsam bearbeiten?", ["Ja, in der Cloud", "Nein", "Nur nacheinander", "Nur am Montag"], 0),
        ("Was ist eine Zusammenfassung?", ["Die wichtigsten Punkte am Ende", "Der Anfang", "Ein Bild", "Ein Ton"], 0),
        ("Darf man bei einer Präsentation sprechen?", ["Ja, man erklärt die Folien", "Nein, leise sein", "Nur flüstern", "Nur singen"], 0),
        ("Was ist ein Layout?", ["Die Anordnung von Text und Bildern", "Ein Name", "Ein Spiel", "Ein Video"], 0),
        ("Wie löscht man eine Folie?", ["Rechtsklick -> Löschen", "PC ausschalten", "Monitor putzen", "Singen"], 0),
        ("Was ist der 'Präsentationsmodus'?", ["Vollbildanzeige der Folien", "Ein Spielmodus", "Schlafmodus", "Musikmodus"], 0),
        ("Kann man Formen (Kreise, Pfeile) einfügen?", ["Ja", "Nein", "Nur Vierecke", "Nur Kreuze"], 0),
        ("Was ist Hintergrundmusik?", ["Musik, die leise im Hintergrund läuft", "Ein lautes Konzert", "Ein Film", "Ein Gespräch"], 0),
        ("Wie speichert man eine Präsentation?", ["Meistens automatisch online", "Auf Papier", "Gar nicht", "Auf CD"], 0)
    ], ["Präsentation", "Folie", "Titel", "Inhalt", "Bild", "Design", "Vortrag", "Zeigen", "Effekt", "Thema"])

    # 15. Textformatierung
    data["15"] = generate_tasks("Textformatierung", [
        ("Was bedeutet Textformatierung?", ["Das Aussehen des Textes ändern", "Text löschen", "Text drucken", "Text lesen"], 0),
        ("Wie macht man Text dicker?", ["Fett (B oder F)", "Kursiv", "Unterstrichen", "Farbig"], 0),
        ("Was bewirkt 'Kursiv'?", ["Der Text wird schräg", "Der Text wird fett", "Der Text wird gelöscht", "Der Text wird groß"], 0),
        ("Wofür ist 'Unterstreichen' gut?", ["Um wichtige Worte zu betonen", "Damit es schöner aussieht", "Zum Durchstreichen", "Gar nicht"], 0),
        ("Was ist eine Schriftart?", ["Z.B. Arial oder Comic Sans", "Ein Buchstabe", "Ein Wort", "Ein Satz"], 0),
        ("Wie ändert man die Schriftgröße?", ["Über die Zahl im Menü", "PC schütteln", "Lauter sprechen", "Größer schreiben"], 0),
        ("Welche Farbe kann Text haben?", ["Jede beliebige Farbe", "Nur schwarz", "Nur blau", "Nur rot"], 0),
        ("Was ist ein Absatz?", ["Ein Textblock nach einem Enter-Druck", "Ein Satz", "Ein Wort", "Ein Buchstabe"], 0),
        ("Was bedeutet 'Blocksatz'?", ["Der Text ist links und rechts bündig", "Der Text ist weg", "Der Text ist rund", "Der Text ist groß"], 0),
        ("Wie macht man eine Liste mit Punkten?", ["Aufzählungszeichen nutzen", "Punkte malen", "Nichts tun", "Singen"], 0),
        ("Wie macht man eine Liste mit Nummern?", ["Nummerierung nutzen", "Zahlen tippen", "Warten", "Bilder einfügen"], 0),
        ("Was ist die 'Hintergrundfarbe' von Text?", ["Die Farbe hinter den Buchstaben", "Die Farbe der Tinte", "Die Farbe des PCs", "Die Farbe des Tisches"], 0),
        ("Kann man Text durchstreichen?", ["Ja, gibt es als Option", "Nein", "Nur mit dem Stift", "Nur am Montag"], 0),
        ("Was ist KAPITÄLCHEN?", ["Kleine Großbuchstaben", "Große Autos", "Kleine Bilder", "Lustige Lieder"], 0),
        ("Wie kopiert man Text?", ["Strg + C (oder Kopieren)", "Strg + V", "Strg + X", "Strg + Z"], 0),
        ("Wie fügt man kopierten Text ein?", ["Strg + V (oder Einfügen)", "Strg + C", "Strg + S", "Strg + P"], 0),
        ("Wie schneidet man Text aus?", ["Strg + X (oder Ausschneiden)", "Mit einer Schere", "PC schütteln", "Text löschen"], 0),
        ("Was bedeutet 'Großschreibung'?", ["Buchstaben groß schreiben", "Große Bilder", "Große Tasten", "Große Monitore"], 0),
        ("Wie schreibt man einen einzelnen Großbuchstaben?", ["Shift-Taste gedrückt halten", "Caps Lock", "Gar nicht", "Fest drücken"], 0),
        ("Was ist Caps Lock?", ["Feststelltaste für dauerhaft groß", "PC sperren", "Licht an", "Tür zu"], 0),
        ("Wie macht man eine Leerzeile?", ["Zweimal Enter drücken", "PC ausschalten", "Warten", "Leertaste drücken"], 0),
        ("Was ist der Zeilenabstand?", ["Der Platz zwischen den Zeilen", "Der Platz zwischen Wörtern", "Der Platz zum Rand", "Der Platz zum Tisch"], 0),
        ("Wie markiert man Text mit der Maus?", ["Klicken und drüberziehen", "Draufschlagen", "Anschauen", "Daneben klicken"], 0),
        ("Was passiert, wenn man markierten Text löscht?", ["Er verschwindet ganz", "Er wird fett", "Er wird bunt", "Nichts"], 0),
        ("Warum formatiert man Texte?", ["Damit sie besser lesbar und schöner sind", "Nur zum Zeitvertreib", "Weil es der PC will", "Damit sie länger werden"], 0)
    ], ["Format", "Schrift", "Farbe", "Größe", "Fett", "Kursiv", "Absatz", "Liste", "Kopieren", "Einfügen"])

    # 16. Präzises Zeichnen
    data["16"] = generate_tasks("Präzises Zeichnen", [
        ("Was ist ein digitales Zeichenprogramm?", ["Z.B. Paint, Tux Paint oder Google Zeichnungen", "Browser", "YouTube", "Word"], 0),
        ("Wie zeichnet man eine gerade Linie?", ["Mit dem Linien-Werkzeug", "Mit der freien Hand", "Mit dem Radiergummi", "Mit dem Eimer"], 0),
        ("Wie macht man einen perfekten Kreis?", ["Kreis-Werkzeug + Shift-Taste", "Freihand malen", "Mit der Maus wackeln", "PC schütteln"], 0),
        ("Was macht das 'Füllwerkzeug' (Eimer)?", ["Füllt eine Fläche mit Farbe", "Löscht alles", "Macht Löcher", "Spielt Musik"], 0),
        ("Was ist der 'Radiergummi' am PC?", ["Löscht Teile der Zeichnung", "Macht alles bunt", "Zeichnet Linien", "Speichert das Bild"], 0),
        ("Wie nennt man das Gitter zur Hilfe?", ["Raster", "Netz", "Zaun", "Käfig"], 0),
        ("Was bedeutet 'Zoom' beim Zeichnen?", ["Das Bild vergrößern für Details", "Schneller zeichnen", "Farben ändern", "Bild löschen"], 0),
        ("Was ist die 'Pipette'?", ["Farbe aus dem Bild aufnehmen", "Wasser spritzen", "Bild sauber machen", "Löcher bohren"], 0),
        ("Wie zeichnet man ein Rechteck?", ["Mit dem Rechteck-Werkzeug", "Mit fünf Linien", "Mit dem Kreis", "Gar nicht"], 0),
        ("Kann man Text in ein Bild schreiben?", ["Ja, mit dem Text-Werkzeug", "Nein", "Nur mit dem Drucker", "Nur mit der Hand"], 0),
        ("Was sind 'Ebenen' beim Zeichnen?", ["Bilder übereinander legen", "Stockwerke im Haus", "Berge", "Schichten im Kuchen"], 0),
        ("Wie macht man einen Schritt rückgängig?", ["Strg + Z", "PC ausschalten", "Monitor putzen", "Neu malen"], 0),
        ("Was ist die 'Pinseldicke'?", ["Wie breit der Strich ist", "Wie lang der Pinsel ist", "Die Farbe", "Der Name"], 0),
        ("Wie speichert man seine Zeichnung?", ["Datei -> Speichern", "PC ausschalten", "Fenster schließen", "Anschauen"], 0),
        ("Was ist ein 'Vektor'?", ["Ein Bild aus Linien und Kurven", "Ein Pixel", "Ein Punkt", "Ein Foto"], 0),
        ("Was ist ein 'Pixelbild'?", ["Ein Bild aus vielen kleinen Punkten", "Ein Film", "Ein Ton", "Ein Buch"], 0),
        ("Wie kopiert man ein Teil der Zeichnung?", ["Auswählen -> Kopieren -> Einfügen", "Ausschneiden mit der Schere", "Draufschlagen", "Anschauen"], 0),
        ("Was bedeutet 'Gruppieren'?", ["Mehrere Teile zusammenfügen", "Teile löschen", "Teile bemalen", "Teile verstecken"], 0),
        ("Was ist ein 'Farbverlauf'?", ["Fließender Übergang von Farben", "Ein Farbeimer", "Ein bunter Stift", "Ein Klecks"], 0),
        ("Wie dreht man ein Objekt?", ["Über den Drehpunkt oder Menü", "Monitor drehen", "PC schütteln", "Gar nicht"], 0),
        ("Was bedeutet 'Spiegeln'?", ["Das Bild umdrehen (links/rechts)", "Ein echtes Spiegelbild", "Bild löschen", "Bild drucken"], 0),
        ("Was ist eine Palette?", ["Die Auswahl an Farben", "Ein Holzbrett", "Ein Lager", "Ein Werkzeug"], 0),
        ("Kann man Fotos in ein Zeichenprogramm laden?", ["Ja", "Nein", "Nur Zeichnungen", "Nur Texte"], 0),
        ("Was ist die 'Spraydose'?", ["Ein Werkzeug für gesprenkelte Farbe", "Eine echte Dose", "Ein Geruch", "Ein Geräusch"], 0),
        ("Warum braucht man beim Zeichnen eine Maus?", ["Zum präzisen Bewegen des Stifts", "Zum Käse essen", "Zum Tippen", "Zum Hören"], 0)
    ], ["Zeichnen", "Linie", "Kreis", "Farbe", "Pinsel", "Radierer", "Füllen", "Form", "Bild", "Kunst"])

    # 17. Bildbearbeitung
    data["17"] = generate_tasks("Bildbearbeitung", [
        ("Was ist Bildbearbeitung?", ["Fotos am Computer verändern", "Bilder malen", "Bilder löschen", "Bilder drucken"], 0),
        ("Was bedeutet 'Zuschneiden'?", ["Teile des Bildes wegschneiden", "Das Bild zerschneiden", "Das Bild bekleben", "Das Bild vergrößern"], 0),
        ("Was ist ein 'Filter' bei Fotos?", ["Ein Effekt, der das Aussehen ändert", "Ein Kaffeefilter", "Ein Sieb", "Ein Tuch"], 0),
        ("Wie ändert man die Helligkeit?", ["Über die Belichtungseinstellung", "Licht im Zimmer anmachen", "Monitor putzen", "Augen schließen"], 0),
        ("Was bedeutet 'Kontrast'?", ["Unterschied zwischen hell und dunkel", "Ein bunter Rand", "Ein scharfes Bild", "Ein Name"], 0),
        ("Was ist 'Sättigung'?", ["Wie kräftig die Farben sind", "Ob das Bild satt ist", "Die Größe des Bildes", "Die Schärfe"], 0),
        ("Wie nennt man das Entfernen von 'roten Augen'?", ["Rote-Augen-Korrektur", "Augen zu", "Sonnenbrille", "Löschen"], 0),
        ("Was ist 'Retuschieren'?", ["Kleine Fehler im Bild ausbessern", "Das Bild neu malen", "Das Bild löschen", "Das Bild verstecken"], 0),
        ("Kann man die Größe eines Bildes ändern?", ["Ja, skalieren oder Größe ändern", "Nein, niemals", "Nur mit der Schere", "Nur mit dem Drucker"], 0),
        ("Was bedeutet 'Schärfen'?", ["Details im Bild deutlicher machen", "Mit einem Messer schneiden", "Ein Bleistift spitzen", "Lauter machen"], 0),
        ("Was ist eine Collage?", ["Viele Bilder zu einem neuen zusammenfügen", "Ein einzelnes Foto", "Ein Film", "Ein Lied"], 0),
        ("Kann man Text auf ein Foto schreiben?", ["Ja, zur Beschriftung", "Nein", "Nur mit dem Stift", "Nur auf Papier"], 0),
        ("Was ist ein 'Sticker' in Apps?", ["Ein kleines fertiges Bild zum Aufkleben", "Ein echter Aufkleber", "Ein Link", "Ein Ton"], 0),
        ("Was bedeutet 'Schwarz-Weiß'?", ["Alle Farben entfernen", "Nur schwarz malen", "Nur weiß malen", "Ein neues Bild"], 0),
        ("Was ist Sepia?", ["Ein bräunlicher Alt-Foto-Effekt", "Ein Fisch", "Eine Farbe", "Ein Spiel"], 0),
        ("Was passiert beim 'Speichern unter'?", ["Das Original bleibt erhalten, Kopie neu", "Das Bild wird gelöscht", "Der PC geht aus", "Nichts"], 0),
        ("Was ist ein Fotobearbeitungsprogramm?", ["Z.B. GIMP, Photoshop oder Handy-Apps", "Browser", "Word", "Excel"], 0),
        ("Kann man Hintergründe austauschen?", ["Ja, mit Profi-Programmen", "Nein", "Nur mit dem Vorhang", "Nur im Traum"], 0),
        ("Was ist die Auflösung eines Fotos?", ["Anzahl der Pixel (Schärfe)", "Der Name des Bildes", "Die Farbe", "Das Datum"], 0),
        ("Was ist ein Selfie?", ["Ein Foto von sich selbst", "Ein Foto vom Hund", "Ein Foto vom Essen", "Ein Foto vom Wald"], 0),
        ("Warum sollte man Bilder bearbeiten?", ["Um sie schöner zu machen oder zu korrigieren", "Damit sie schlechter aussehen", "Weil es der PC will", "Um sie zu verstecken"], 0),
        ("Darf man fremde Gesichter ungefragt verändern?", ["Nein, man muss höflich sein (Recht am Bild)", "Ja, immer", "Nur bei Freunden", "Nur in der Schule"], 0),
        ("Was ist eine Fotogalerie?", ["Eine Sammlung von Fotos", "Ein Museum", "Ein Laden", "Ein Buch"], 0),
        ("Was ist ein Rahmen?", ["Eine Verzierung um das Bild", "Ein Fenster", "Eine Tür", "Ein Haus"], 0),
        ("Wie schickt man ein bearbeitetes Bild?", ["Per E-Mail, Cloud oder Messenger", "Mit der Post", "Mit dem Flugzeug", "Gar nicht"], 0)
    ], ["Foto", "Effekt", "Filter", "Schneiden", "Farbe", "Hell", "Dunkel", "Größe", "Speichern", "Korrektur"])

    # 18. Einführung in Algorithmen
    data["18"] = generate_tasks("Einführung in Algorithmen", [
        ("Was ist ein Algorithmus?", ["Eine genaue Schritt-für-Schritt-Anleitung", "Ein kompliziertes Rätsel", "Ein Computerbauteil", "Ein Tier"], 0),
        ("Wo findet man Algorithmen im Alltag?", ["Beim Backrezept oder Zähneputzen", "Nur im Computer", "Nirgendwo", "Im Wald"], 0),
        ("Warum brauchen Computer Algorithmen?", ["Weil sie Befehle genau brauchen", "Damit sie schlafen können", "Zum Spaß", "Weil sie Hunger haben"], 0),
        ("Was ist ein wichtiger Teil eines Algorithmus?", ["Die richtige Reihenfolge", "Schöne Farben", "Laute Musik", "Viele Bilder"], 0),
        ("Was passiert, wenn ein Schritt fehlt?", ["Der Algorithmus funktioniert nicht richtig", "Es ist egal", "Der PC wird schneller", "Nichts"], 0),
        ("Ist ein Kochrezept ein Algorithmus?", ["Ja", "Nein", "Nur wenn man kocht", "Nur im Internet"], 0),
        ("Was ist eine 'Schleife'?", ["Ein Teil, der sich wiederholt", "Ein Knoten im Schuh", "Ein Kreis", "Ein Ende"], 0),
        ("Was ist eine 'Bedingung'?", ["Eine Entscheidung (Wenn..., dann...)", "Ein Gesetz", "Ein Wetter", "Ein Spiel"], 0),
        ("Was ist Programmieren?", ["Algorithmen für den Computer schreiben", "Texte tippen", "Spielen", "Bilder malen"], 0),
        ("Wie nennt man einen Fehler im Algorithmus?", ["Bug (Käfer)", "Vogel", "Hund", "Katze"], 0),
        ("Was ist ein Flussdiagramm?", ["Eine Zeichnung eines Algorithmus", "Ein Fluss in den Bergen", "Ein Bild vom Meer", "Ein Spiel"], 0),
        ("Was bedeutet 'Start' im Algorithmus?", ["Der Beginn der Anleitung", "Das Ende", "Eine Pause", "Ein Bild"], 0),
        ("Was bedeutet 'Stopp'?", ["Das Ende der Anleitung", "Der Anfang", "Ein Link", "Ein Ton"], 0),
        ("Kann ein Mensch wie ein Roboter Algorithmen folgen?", ["Ja, wenn die Schritte klar sind", "Nein, niemals", "Nur beim Sport", "Nur im Schlaf"], 0),
        ("Was ist Logik?", ["Richtiges und folgerichtiges Denken", "Ein Gefühl", "Ein Bild", "Ein Lied"], 0),
        ("Was ist eine Eingabe?", ["Informationen, die man gibt", "Das Ergebnis", "Ein Bild", "Ein Ton"], 0),
        ("Was ist eine Ausgabe?", ["Das Ergebnis des Algorithmus", "Der Anfang", "Ein Knopf", "Ein Kabel"], 0),
        ("Sind Algorithmen immer schlau?", ["Nur so schlau wie der Ersteller", "Ja, immer", "Nein, nie", "Nur am Montag"], 0),
        ("Was ist Sortieren als Algorithmus?", ["Dinge in eine Reihenfolge bringen", "Dinge wegwerfen", "Dinge bemalen", "Dinge verstecken"], 0),
        ("Was ist Suchen als Algorithmus?", ["Etwas Bestimmtes finden", "Etwas verlieren", "Etwas bauen", "Etwas singen"], 0),
        ("Was ist Zerlegung?", ["Ein großes Problem in kleine Teile teilen", "Etwas kaputt machen", "Etwas essen", "Etwas schlafen"], 0),
        ("Kann man Algorithmen auf Papier schreiben?", ["Ja", "Nein", "Nur im Computer", "Nur mit Strom"], 0),
        ("Was ist ein Befehl?", ["Eine einzelne Anweisung", "Eine Bitte", "Ein Wunsch", "Ein Lied"], 0),
        ("Was ist eine Variable?", ["Ein Platzhalter für Informationen", "Ein fester Wert", "Ein Bild", "Ein Ton"], 0),
        ("Warum sind klare Anweisungen wichtig?", ["Damit es keine Missverständnisse gibt", "Damit es lustiger ist", "Egal", "Weil es schön aussieht"], 0)
    ], ["Algorithmus", "Anleitung", "Schritt", "Regel", "Folge", "Logik", "Befehl", "Plan", "Lösung", "Denken"])

    # 19. Scratch projekte
    data["19"] = generate_tasks("Scratch-Projekte", [
        ("Was ist Scratch?", ["Eine Programmiersprache für Kinder", "Ein Musikprogramm", "Ein Browser", "Ein Spiel"], 0),
        ("Wie programmiert man in Scratch?", ["Mit bunten Blöcken", "Mit viel Text schreiben", "Gar nicht", "Nur mit der Maus malen"], 0),
        ("Was ist eine 'Figur' (Sprite)?", ["Ein Objekt oder Charakter im Projekt", "Ein Hintergrund", "Ein Ton", "Ein Programm"], 0),
        ("Was ist die 'Bühne'?", ["Der Bereich, in dem alles passiert", "Der Keller", "Der Bildschirmrand", "Ein Fenster"], 0),
        ("Wie startet man ein Projekt meistens?", ["Klick auf die grüne Flagge", "Klick auf das rote Stoppschild", "PC schütteln", "Laut rufen"], 0),
        ("Wie stoppt man ein Projekt?", ["Klick auf das rote Stoppschild", "Klick auf die grüne Flagge", "Monitor ausschalten", "Weglaufen"], 0),
        ("Was ist ein Block?", ["Ein einzelner Programmbefehl", "Ein Stein", "Ein Bild", "Ein Wort"], 0),
        ("Wo findet man die Blöcke?", ["In der Block-Palette", "Im Rucksack", "Unter der Bühne", "In der Hilfe"], 0),
        ("Was ist ein Skript?", ["Eine Kette von zusammengefügten Blöcken", "Ein Buch", "Ein Film", "Ein Lied"], 0),
        ("Welche Farbe haben 'Bewegungs'-Blöcke?", ["Blau", "Gelb", "Grün", "Rot"], 0),
        ("Welche Farbe haben 'Aussehens'-Blöcke?", ["Lila", "Blau", "Orange", "Grau"], 0),
        ("Kann man eigene Figuren zeichnen?", ["Ja, im Kostüm-Editor", "Nein", "Nur fertige nutzen", "Nur Fotos"], 0),
        ("Was ist ein Kostüm?", ["Ein anderes Aussehen einer Figur", "Kleidung für Kinder", "Ein Lied", "Ein Hintergrund"], 0),
        ("Was ist ein Hintergrund?", ["Das Bild auf der Bühne", "Die Farbe der Blöcke", "Der Name des Projekts", "Die Musik"], 0),
        ("Wie lässt man eine Figur sprechen?", ["Mit dem 'Sage...'-Block", "Mit dem Mikrofon", "Gar nicht", "Singen"], 0),
        ("Kann man Töne in Scratch abspielen?", ["Ja, über die Klang-Blöcke", "Nein", "Nur mit dem Radio", "Nur wenn man klatscht"], 0),
        ("Was ist das 'Rucksack'-Feature?", ["Teile in andere Projekte mitnehmen", "Ein echter Rucksack", "Ein Speicherplatz", "Ein Müllkorb"], 0),
        ("Kann man Projekte speichern?", ["Ja, online oder auf dem PC", "Nein", "Nur im Kopf", "Nur auf Papier"], 0),
        ("Was ist die Scratch-Community?", ["Andere Kinder, die Projekte teilen", "Ein Verein für Sport", "Ein Wald", "Ein Laden"], 0),
        ("Was bedeutet 'Remixen'?", ["Ein Projekt von anderen kopieren und ändern", "Ein Lied mischen", "Ein Bild malen", "Ein Spiel löschen"], 0),
        ("Wie heißt das Katzen-Maskottchen?", ["Scratch-Katze", "Miau", "Kitty", "Leo"], 0),
        ("Was ist ein Ereignis-Block?", ["Startet ein Skript (z.B. bei Klick)", "Ein Bild", "Ein Ton", "Ein Ende"], 0),
        ("Wo zieht man die Blöcke hin?", ["In den Skriptbereich", "Auf die Bühne", "In den Papierkorb", "Aus dem Fenster"], 0),
        ("Kann man in Scratch Spiele bauen?", ["Ja, sehr viele verschiedene", "Nein, nur Bilder", "Nur Hausaufgaben", "Nur Videos"], 0),
        ("Was ist ein 'Koordinatensystem' in Scratch?", ["X- und Y-Position der Figur", "Ein Kompass", "Eine Landkarte", "Ein Spiel"], 0)
    ], ["Scratch", "Programm", "Block", "Figur", "Skript", "Bühne", "Flagge", "Start", "Kostüm", "Projekt"])

    # 20. Schleifen in Scratch
    data["20"] = generate_tasks("Schleifen in Scratch", [
        ("Was ist eine Schleife in Scratch?", ["Ein Block, der Befehle wiederholt", "Ein Knoten", "Ein Kreis", "Ein Ende"], 0),
        ("Wie heißt der Block für ewige Wiederholung?", ["Wiederhole fortlaufend", "Wiederhole 10 mal", "Wiederhole bis", "Stoppe"], 0),
        ("Was macht 'Wiederhole 10 mal'?", ["Befehle genau 10 mal ausführen", "Immer weiter machen", "Nichts tun", "Einmal machen"], 0),
        ("Warum nutzt man Schleifen?", ["Um Arbeit zu sparen und Code kürzer zu machen", "Damit es schöner aussieht", "Damit es langsamer geht", "Nur aus Spaß"], 0),
        ("Was passiert, wenn eine Schleife leer ist?", ["Nichts wird wiederholt", "Der PC explodiert", "Das Projekt startet", "Ein Ton erklingt"], 0),
        ("Kann man eine Schleife in eine Schleife legen?", ["Ja (Verschachtelung)", "Nein", "Nur sonntags", "Nur zwei Stück"], 0),
        ("Welche Farbe haben Steuerungs-Blöcke (Schleifen)?", ["Orange", "Blau", "Grün", "Rot"], 0),
        ("Was bedeutet 'Wiederhole bis...'?", ["Wiederholen, bis etwas wahr ist", "Immer wiederholen", "Gar nicht wiederholen", "Sofort stoppen"], 0),
        ("Wie lässt man eine Figur im Kreis laufen?", ["Bewegen und Drehen in einer Schleife", "Nur Bewegen", "Nur Drehen", "Nichts tun"], 0),
        ("Wie macht man ein Blink-Licht?", ["Farbe ändern und Warten in Schleife", "Einmal Farbe ändern", "Licht ausschalten", "Singen"], 0),
        ("Was ist der 'Warte'-Block?", ["Pausiert das Skript kurz", "Beendet alles", "Macht Musik", "Macht Licht"], 0),
        ("Kann man eine Schleife stoppen?", ["Ja, z.B. mit dem 'Stoppe'-Block", "Nein, nie", "Nur PC ausschalten", "Nur mit Wasser"], 0),
        ("Was passiert bei einer Endlosschleife?", ["Es hört niemals auf", "Es hört sofort auf", "Nach 10 mal ist Schluss", "Nach 100 mal ist Schluss"], 0),
        ("Wofür ist 'Wiederhole fortlaufend' gut?", ["Für Spiel-Hintergrundmusik oder Steuerung", "Nur für den Anfang", "Nur für das Ende", "Nur für Fehler"], 0),
        ("Kann man die Zahl bei 'Wiederhole 10 mal' ändern?", ["Ja, jede Zahl ist möglich", "Nein, immer 10", "Nur bis 20", "Nur bis 100"], 0),
        ("Was passiert nach der Schleife?", ["Das Skript darunter geht weiter", "Alles ist zu Ende", "Alles wird gelöscht", "Nichts"], 0),
        ("Wie nennt man Schleifen noch?", ["Iterationen", "Kreise", "Runden", "Wiederholer"], 0),
        ("Kann eine Schleife Töne wiederholen?", ["Ja", "Nein", "Nur Bilder", "Nur Texte"], 0),
        ("Wo findet man die Schleifen-Blöcke?", ["Bei der Steuerung", "Bei der Bewegung", "Beim Aussehen", "Beim Klang"], 0),
        ("Wie sehen Schleifen-Blöcke aus?", ["Wie ein C-Maul, das andere umschließt", "Wie ein Kreis", "Wie ein Strich", "Wie ein Punkt"], 0),
        ("Kann man eine Schleife mit einer Taste stoppen?", ["Ja, mit Programmierung", "Nein", "Nur mit der Maus", "Nur mit Rufen"], 0),
        ("Ist 'Wiederhole 1 mal' sinnvoll?", ["Meistens nicht, einmal reicht so", "Ja, sehr", "Immer", "Nie"], 0),
        ("Was passiert, wenn man in der Schleife 'Warte' vergisst?", ["Alles passiert sehr schnell", "Alles passiert langsam", "Nichts passiert", "Der PC geht aus"], 0),
        ("Kann eine Schleife die Position ändern?", ["Ja, wenn Bewegungsblöcke drin sind", "Nein", "Nur die Farbe", "Nur die Größe"], 0),
        ("Wie viele Schleifen darf ein Projekt haben?", ["Beliebig viele", "Nur eine", "Nur zwei", "Maximal zehn"], 0)
    ], ["Schleife", "Wiederholen", "Fortlaufend", "Zahl", "Steuerung", "Block", "Endlos", "Warten", "Skript", "Mal"])

    # 21. Feltétel és esemény (Bedingungen und Ereignisse)
    data["21"] = generate_tasks("Bedingungen und Ereignisse", [
        ("Was ist ein Ereignis in Scratch?", ["Etwas, das ein Skript startet (z.B. Klick)", "Ein Fest", "Ein Bild", "Ein Ton"], 0),
        ("Welcher Block startet alles?", ["Wenn grüne Flagge angeklickt", "Wenn Stopp", "Wenn Ende", "Wenn Pause"], 0),
        ("Was ist eine Bedingung?", ["Eine Falls-Abfrage (Wenn..., dann...)", "Ein Gesetz", "Ein Wetter", "Ein Spiel"], 0),
        ("Wie heißt der Bedingungs-Block?", ["Falls ..., dann", "Immer wenn", "Vielleicht", "Niemals"], 0),
        ("Was ist ein 'Fühler'-Block?", ["Prüft Dinge (z.B. Berührung)", "Ein Finger", "Ein Ohr", "Eine Nase"], 0),
        ("Welche Farbe haben Fühler-Blöcke?", ["Hellblau", "Dunkelblau", "Grün", "Orange"], 0),
        ("Beispiel für ein Ereignis?", ["Taste Leertaste gedrückt", "Bild gemalt", "PC an", "Licht aus"], 0),
        ("Was macht 'Falls ..., dann, sonst'?", ["Entscheidung zwischen zwei Wegen", "Nur einen Weg", "Alles löschen", "Nichts tun"], 0),
        ("Wie prüft man, ob eine Figur die Maus berührt?", ["Fühler-Block 'Wird Mauszeiger berührt?'", "Anschauen", "Maus schütteln", "Laut rufen"], 0),
        ("Was ist eine Variable in Bedingungen?", ["Z.B. Punkte > 10", "Ein Name", "Ein Bild", "Ein Lied"], 0),
        ("Welche Form haben Bedingungen (Fühler)?", ["Sechseckig (Rautenform)", "Rund", "Viereckig", "Sternförmig"], 0),
        ("Was passiert, wenn die Bedingung nicht wahr ist?", ["Der 'Dann'-Teil wird übersprungen", "Der PC geht aus", "Alles wird gelöscht", "Nichts"], 0),
        ("Kann man prüfen, ob eine Farbe berührt wird?", ["Ja, mit dem entsprechenden Fühler", "Nein", "Nur Formen", "Nur Ränder"], 0),
        ("Was ist ein 'Nachricht senden'-Block?", ["Ein Skript an eine andere Figur schicken", "Eine E-Mail", "Eine SMS", "Ein Brief"], 0),
        ("Was macht 'Wenn ich ... empfange'?", ["Startet ein Skript bei einer Nachricht", "Löscht alles", "Beendet alles", "Sperrt alles"], 0),
        ("Kann man mehrere Bedingungen kombinieren?", ["Ja, mit 'und' / 'oder'", "Nein", "Nur zwei", "Nur drei"], 0),
        ("Was ist der 'nicht'-Block?", ["Kehrt eine Bedingung um", "Löscht eine Bedingung", "Macht sie bunter", "Macht sie größer"], 0),
        ("Was bedeutet 'Wird Rand berührt?'", ["Prüft, ob Figur am Bildschirmrand ist", "Prüft das Wetter", "Prüft den Tisch", "Prüft die Maus"], 0),
        ("Wozu sind Bedingungen in Spielen gut?", ["Für Punkte, Leben, Gewinnen/Verlieren", "Nur für die Musik", "Nur für das Design", "Gar nicht"], 0),
        ("Welcher Block startet beim Anklicken der Figur?", ["Wenn diese Figur angeklickt wird", "Wenn Flagge", "Wenn Taste", "Wenn Ton"], 0),
        ("Können Bedingungen in Schleifen sein?", ["Ja, sehr oft", "Nein, niemals", "Nur sonntags", "Nur zwei"], 0),
        ("Was ist ein Vergleichsoperator?", ["> (größer), < (kleiner), = (gleich)", "ABC", "Rot Blau Grün", "1 2 3"], 0),
        ("Wo findet man die grünen Vergleichs-Blöcke?", ["Operatoren", "Fühler", "Bewegung", "Aussehen"], 0),
        ("Kann ein Ereignis einen Ton starten?", ["Ja", "Nein", "Nur Bilder", "Nur Texte"], 0),
        ("Was passiert, wenn 'Falls' in 'Fortlaufend' ist?", ["Es wird immer wieder geprüft", "Es wird nur einmal geprüft", "Nichts passiert", "Der PC wird langsam"], 0)
    ], ["Ereignis", "Bedingung", "Falls", "Dann", "Sonst", "Fühler", "Start", "Taste", "Klick", "Wahr"])

    # 22. Ingenieurdenken
    data["22"] = generate_tasks("Ingenieurdenken", [
        ("Was macht ein Ingenieur?", ["Probleme lösen und Dinge planen/bauen", "Nur Schlafen", "Nur Essen", "Nur Fernsehen"], 0),
        ("Was ist der erste Schritt beim Ingenieurdenken?", ["Das Problem verstehen/fragen", "Sofort bauen", "Alles wegwerfen", "Nichts tun"], 0),
        ("Was ist ein Prototyp?", ["Ein erstes Testmodell", "Ein fertiges Auto", "Ein altes kaputtes Teil", "Ein Bild"], 0),
        ("Warum sind Fehler wichtig?", ["Man lernt daraus und verbessert Dinge", "Sie sind schlimm", "Sie kosten Zeit", "Man sollte aufgeben"], 0),
        ("Was bedeutet 'Testen'?", ["Prüfen, ob die Lösung funktioniert", "Essen probieren", "Schlafen", "Spielen"], 0),
        ("Was ist 'Verbessern' (Optimieren)?", ["Dinge noch besser machen", "Dinge schlechter machen", "Dinge löschen", "Dinge anmalen"], 0),
        ("Was ist ein Design-Prozess?", ["Ein Weg von der Idee zur Lösung", "Ein schönes Bild", "Ein Kleidungsstück", "Ein Film"], 0),
        ("Warum braucht man einen Plan?", ["Damit man weiß, was man tun muss", "Damit man mehr Zeit braucht", "Pläne sind unnötig", "Nur für Lehrer"], 0),
        ("Was bedeutet 'Zusammenarbeit'?", ["Gemeinsam an einer Lösung arbeiten", "Alleine arbeiten", "Gar nicht arbeiten", "Streiten"], 0),
        ("Was ist Brainstorming?", ["Viele Ideen sammeln", "Regen im Kopf", "Kopfschmerzen", "Ein Gewitter"], 0),
        ("Was ist eine Skizze?", ["Eine einfache Zeichnung einer Idee", "Ein fertiges Bild", "Ein langer Text", "Ein Ton"], 0),
        ("Was bedeutet 'Kreativität'?", ["Neue und originelle Ideen haben", "Sachen kopieren", "Nichts tun", "Alles gleich machen"], 0),
        ("Was ist ein Material?", ["Stoffe, aus denen man baut (Holz, Metall, Plastik)", "Ein Name", "Ein Gefühl", "Ein Lied"], 0),
        ("Warum muss man stabil bauen?", ["Damit es nicht zusammenbricht", "Damit es schwer ist", "Damit es bunt ist", "Egal"], 0),
        ("Was ist eine Funktion?", ["Was ein Ding tun soll", "Ein Fest", "Ein Bild", "Ein Ton"], 0),
        ("Was ist eine Anforderung?", ["Was das Ding können MUSS", "Ein Wunsch", "Eine Bitte", "Ein Lied"], 0),
        ("Was ist eine Einschränkung?", ["Dinge, die man beachten muss (z.B. Zeit, Geld)", "Ein Verbot", "Eine Mauer", "Ein Ende"], 0),
        ("Kann man Ingenieurdenken auch beim Programmieren nutzen?", ["Ja, beim Planen und Fehler suchen", "Nein", "Nur beim Bauen", "Nur am Montag"], 0),
        ("Was ist ein Feedback beim Bauen?", ["Meinungen von anderen zur Verbesserung", "Ein lautes Geräusch", "Ein Essen", "Ein Bild"], 0),
        ("Was bedeutet 'Nachhaltigkeit'?", ["Umweltfreundlich und langlebig bauen", "Dinge schnell wegwerfen", "Viel Müll machen", "Egal"], 0),
        ("Was ist ein Roboter?", ["Eine programmierbare Maschine", "Ein lebendiges Tier", "Ein Mensch aus Metall", "Ein Spielzeugauto"], 0),
        ("Was ist eine Brücke?", ["Ein Bauwerk über ein Hindernis", "Ein Weg", "Ein Haus", "Ein Turm"], 0),
        ("Was ist Statik?", ["Die Lehre vom Gleichgewicht/Stabilität", "Ein Radio", "Ein Bild", "Ein Ton"], 0),
        ("Was ist Effizienz?", ["Etwas mit wenig Aufwand gut erledigen", "Viel Zeit verschwenden", "Nichts tun", "Laut sein"], 0),
        ("Warum sollte man seine Arbeit dokumentieren?", ["Um anderen zu zeigen, wie es geht", "Zum Spaß", "Weil es verboten ist", "Um sie zu verstecken"], 0)
    ], ["Plan", "Bauen", "Testen", "Lösung", "Idee", "Fehler", "Modell", "Schritt", "Denken", "Projekt"])

    # 23. Digitale Identität
    data["23"] = generate_tasks("Digitale Identität", [
        ("Was ist eine digitale Identität?", ["Spuren, die man im Internet hinterlässt", "Ein echter Ausweis", "Ein Foto", "Ein Name"], 0),
        ("Was gehört zu deinen persönlichen Daten?", ["Name, Adresse, Telefonnummer", "Lieblingsfarbe", "Hobby", "Essen"], 0),
        ("Sollte man seine Adresse jedem im Internet sagen?", ["Nein, das ist privat", "Ja, klar", "Nur wenn man gefragt wird", "Nur auf Facebook"], 0),
        ("Was ist ein Avatar?", ["Eine künstliche Figur als Stellvertreter", "Ein echter Mensch", "Ein Tier", "Ein Baum"], 0),
        ("Was ist ein Benutzername?", ["Ein Name für ein Konto (oft ein Pseudonym)", "Der echte Vorname", "Die Hausnummer", "Das Passwort"], 0),
        ("Warum sind starke Passwörter wichtig?", ["Um das Konto vor Fremden zu schützen", "Damit man sie vergisst", "Weil sie schön aussehen", "Gar nicht"], 0),
        ("Was ist ein 'digitaler Fußabdruck'?", ["Alles, was man online macht und speichert", "Ein echter Abdruck im Matsch", "Ein Schuh", "Ein Bild"], 0),
        ("Darf man Fotos von anderen ungefragt posten?", ["Nein, man braucht die Erlaubnis", "Ja, immer", "Nur wenn sie lustig sind", "Nur bei Freunden"], 0),
        ("Was bedeutet 'privat' im Internet?", ["Nur für ausgewählte Personen sichtbar", "Für alle sichtbar", "Gelöscht", "Versteckt"], 0),
        ("Was bedeutet 'öffentlich'?", ["Für jeden im Internet sichtbar", "Nur für mich", "Nur für Freunde", "Sicher"], 0),
        ("Kann man Dinge im Internet für immer löschen?", ["Oft ist es schwierig, das Internet vergisst nie", "Ja, ganz einfach", "Nein, niemals", "Nur mit Wasser"], 0),
        ("Was ist Cybermobbing?", ["Anderen online absichtlich wehtun oder beleidigen", "Ein Spiel", "Ein Sport", "Ein Chat"], 0),
        ("Was sollte man tun, wenn man online geärgert wird?", ["Erwachsenen/Eltern erzählen", "Zurückärgern", "Nichts tun", "PC wegwerfen"], 0),
        ("Darf man Fremden im Chat Treffen versprechen?", ["Nein, niemals alleine!", "Ja, klar", "Nur im Park", "Nur am Tag"], 0),
        ("Was ist ein Profil?", ["Eine Seite mit Infos über einen Nutzer", "Ein Gesicht von der Seite", "Ein Reifen", "Ein Buch"], 0),
        ("Ist dein Passwort geheim?", ["Ja, nur für mich (und evtl. Eltern)", "Nein, jeder darf es wissen", "Nur für Freunde", "Nur für Lehrer"], 0),
        ("Was ist ein Pseudonym?", ["Ein ausgedachter Name", "Ein echter Name", "Ein Nachname", "Ein Bild"], 0),
        ("Sollte man Webcams abdecken, wenn man sie nicht nutzt?", ["Ja, zur Sicherheit", "Nein, egal", "Nur wenn sie bunt ist", "Nur nachts"], 0),
        ("Was ist Netiquette?", ["Höfliche Regeln für das Internet", "Ein Netz", "Ein Spiel", "Ein Video"], 0),
        ("Warum sollte man im Internet höflich sein?", ["Weil am anderen Ende auch Menschen sitzen", "Gar nicht nötig", "Nur wenn man Lust hat", "Nur zu Lehrern"], 0),
        ("Was sind Cookies (im Browser)?", ["Kleine Dateien, die Infos speichern", "Leckere Kekse", "Große Programme", "Viren"], 0),
        ("Darf man im Internet lügen?", ["Man sollte ehrlich und vorsichtig sein", "Ja, immer", "Nur beim Alter", "Nur beim Namen"], 0),
        ("Was ist ein 'Shitstorm'?", ["Viele negative Kommentare auf einmal", "Ein Gewitter", "Schlechtes Wetter", "Ein Spiel"], 0),
        ("Kann das Internet Auswirkungen auf das echte Leben haben?", ["Ja, definitiv", "Nein, gar nicht", "Nur ein bisschen", "Nur für Erwachsene"], 0),
        ("Was ist Selbstschutz im Internet?", ["Vorsichtig mit Daten und Kontakten sein", "Eine Rüstung", "Ein Schild", "Ein Helm"], 0)
    ], ["Identität", "Privat", "Daten", "Passwort", "Schutz", "Avatar", "Profil", "Sicherheit", "Spuren", "Online"])

    # 24. Online-Suche
    data["24"] = generate_tasks("Online-Suche", [
        ("Was ist eine Suchmaschine?", ["Ein Programm zum Finden von Webseiten", "Ein Motor im Auto", "Ein Browser", "Ein Spiel"], 0),
        ("Wie heißt die bekannteste Suchmaschine?", ["Google", "Facebook", "Amazon", "Netflix"], 0),
        ("Was ist eine Suchmaschine für Kinder?", ["Z.B. Frag Finn oder Blinde Kuh", "Google", "YouTube", "TikTok"], 0),
        ("Was ist ein Suchbegriff?", ["Ein Wort, das man in die Suche tippt", "Ein Name", "Ein Passwort", "Ein Link"], 0),
        ("Was passiert, wenn man nach 'Hund' sucht?", ["Man bekommt Ergebnisse über Hunde", "Ein Hund erscheint", "Der PC bellt", "Nichts"], 0),
        ("Wie findet man genauere Ergebnisse?", ["Mehrere Begriffe eingeben (z.B. kleiner Hund)", "Lauter tippen", "Schneller klicken", "Warten"], 0),
        ("Was sind die 'Suchergebnisse'?", ["Eine Liste mit Links zu Webseiten", "Bilder", "Lieder", "Spiele"], 0),
        ("Was ist eine Anzeige in der Suche?", ["Bezahlte Werbung oben oder unten", "Ein Bild", "Ein wichtiger Text", "Ein Fehler"], 0),
        ("Sind die ersten Ergebnisse immer die besten?", ["Nicht unbedingt, oft ist es Werbung", "Ja, immer", "Meistens", "Nur am Montag"], 0),
        ("Was bedeutet 'Scrollen' in den Ergebnissen?", ["Nach unten fahren für mehr Links", "Die Seite schließen", "Ein Bild malen", "Text löschen"], 0),
        ("Kann man nach Videos suchen?", ["Ja, oft gibt es einen Video-Reiter", "Nein", "Nur Bilder", "Nur Texte"], 0),
        ("Was ist die Autovervollständigung?", ["Vorschläge beim Tippen der Suche", "PC geht von alleine an", "Text wird gelöscht", "PC schreibt Briefe"], 0),
        ("Was bedeutet 'keine Ergebnisse gefunden'?", ["Man muss andere Suchwörter probieren", "Das Internet ist kaputt", "Der PC ist aus", "Feierabend"], 0),
        ("Kann man nach Karten oder Orten suchen?", ["Ja, z.B. Google Maps", "Nein", "Nur mit dem Kompass", "Nur im Wald"], 0),
        ("Was ist eine 'erweiterte Suche'?", ["Suche mit speziellen Filtern", "Eine schnelle Suche", "Eine bunte Suche", "Eine laute Suche"], 0),
        ("Darf man alles glauben, was man findet?", ["Nein, man muss Informationen prüfen", "Ja, das Internet lügt nicht", "Meistens schon", "Nur Lehrern"], 0),
        ("Wie vergleicht man Informationen?", ["Auf mehreren Webseiten nachsehen", "Nur eine Seite lesen", "Den Nachbarn fragen", "Raten"], 0),
        ("Was ist ein Browser-Verlauf?", ["Liste der besuchten Webseiten", "Ein Film", "Ein Buch", "Ein Weg"], 0),
        ("Kann man die Suche mit der Stimme nutzen?", ["Ja, Sprachsuche", "Nein", "Nur durch Klatschen", "Nur durch Pfeifen"], 0),
        ("Was ist Wikipedia?", ["Ein Online-Lexikon", "Ein Spiel", "Ein Shop", "Ein Video-Portal"], 0),
        ("Was ist eine URL?", ["Die Adresse einer Webseite", "Ein Name", "Ein Bild", "Ein Ton"], 0),
        ("Was bedeutet 'Suchen und Finden'?", ["Ein Ziel der Internetnutzung", "Ein Spiel", "Ein Versteck", "Ein Lied"], 0),
        ("Kann man nach Nachrichten suchen?", ["Ja, es gibt News-Bereiche", "Nein", "Nur in der Zeitung", "Nur im Radio"], 0),
        ("Was ist ein Schlagwort?", ["Ein besonders wichtiges Wort der Suche", "Ein böses Wort", "Ein langes Wort", "Ein Bild"], 0),
        ("Warum ist Suchen eine wichtige Fähigkeit?", ["Damit man schnell die richtigen Infos findet", "Damit man Zeit verschwendet", "Ist nicht wichtig", "Nur für Erwachsene"], 0)
    ], ["Suchen", "Finden", "Begriff", "Ergebnis", "Internet", "Maschine", "Filter", "Wissen", "Prüfen", "Link"])

    # 25. Projektmunka K3 (Projektarbeit K3)
    data["25"] = generate_tasks("Projektarbeit K3", [
        ("Was ist ein Projekt in der Schule?", ["Ein Thema über längere Zeit bearbeiten", "Eine kurze Pause", "Ein Test", "Ein Spiel"], 0),
        ("Was ist der erste Schritt bei einem IT-Projekt?", ["Thema wählen und Plan machen", "Sofort abgeben", "Nichts tun", "Spielen"], 0),
        ("Wo findet man Informationen für ein Projekt?", ["Internet, Bücher, Interviews", "Im Müll", "Im Schlaf", "Nirgendwo"], 0),
        ("Wie nennt man die Quellenangabe?", ["Sagen, woher die Infos kommen", "Einen Namen erfinden", "Geheim halten", "Bilder malen"], 0),
        ("Was kann das Ergebnis eines IT-Projekts sein?", ["Eine Präsentation, Webseite oder Scratch-Spiel", "Ein Kuchen", "Ein sauberer Tisch", "Ein Lied"], 0),
        ("Warum ist Teamarbeit oft gut?", ["Man kann sich gegenseitig helfen", "Man muss weniger tun", "Man kann streiten", "Einer macht alles"], 0),
        ("Was ist eine Deadline?", ["Der Termin, bis wann alles fertig sein muss", "Eine gefährliche Linie", "Ein Ende", "Ein Spiel"], 0),
        ("Was gehört zu einer guten Präsentation?", ["Bilder, wenig Text, freies Sprechen", "Viel Text zum Vorlesen", "Keine Bilder", "Leise sein"], 0),
        ("Was macht man bei der Planung?", ["Aufgaben verteilen und Zeit einteilen", "Schlafen", "Sofort bauen", "Essen"], 0),
        ("Wie speichert man Projektdateien sicher?", ["In der Cloud und auf einem Stick", "Gar nicht", "Auf Papier", "Im Papierkorb"], 0),
        ("Was ist eine Gliederung?", ["Die Struktur des Projekts/Vortrags", "Ein Körperteil", "Ein Spiel", "Ein Bild"], 0),
        ("Was bedeutet 'Präsentieren'?", ["Anderen seine Arbeit zeigen und erklären", "Sich verstecken", "Leise sein", "Weglaufen"], 0),
        ("Sollte man Bilder im Projekt beschriften?", ["Ja, damit jeder weiß, was es ist", "Nein", "Nur wenn sie bunt sind", "Nur bei Fehlern"], 0),
        ("Was ist ein Fazit?", ["Das Ergebnis oder die Meinung am Ende", "Der Anfang", "Ein Bild", "Ein Ton"], 0),
        ("Darf man bei anderen abschreiben?", ["Nein, man muss es selbst machen", "Ja, immer", "Nur ein bisschen", "Nur wenn es schwer ist"], 0),
        ("Was ist eine Reflexion?", ["Überlegen, was gut lief und was nicht", "Ein Spiegelbild", "Ein Lichtstrahl", "Ein Spiel"], 0),
        ("Wie bekommt man Feedback?", ["Andere fragen, wie sie es finden", "Gar nicht", "Durch Raten", "Durch Schreien"], 0),
        ("Was ist ein Layout im Projekt?", ["Die Gestaltung der Seiten/Folien", "Ein Name", "Ein Spiel", "Ein Video"], 0),
        ("Warum ist IT hilfreich für Projekte?", ["Man kann toll gestalten und suchen", "Damit es länger dauert", "Ist es nicht", "Nur zum Spielen"], 0),
        ("Was ist ein Handout?", ["Ein Blatt mit Infos für die Zuhörer", "Eine helfende Hand", "Ein Geschenk", "Ein Spiel"], 0),
        ("Wie bereitet man sich auf Fragen vor?", ["Sich gut im Thema auskennen", "Sagen 'Ich weiß es nicht'", "Weglaufen", "Nichts sagen"], 0),
        ("Was ist Motivation?", ["Lust und Freude am Thema haben", "Langeweile", "Angst", "Müdigkeit"], 0),
        ("Kann man ein Projekt auch digital abgeben?", ["Ja, oft per E-Mail oder Plattform", "Nein, nur Papier", "Nur per Post", "Gar nicht"], 0),
        ("Was ist eine Mindmap?", ["Eine Karte mit gesammelten Ideen", "Ein Hut", "Ein Spiel", "Ein Bild"], 0),
        ("Was ist das Ziel von Projektarbeit?", ["Selbstständiges Lernen und Erstellen", "Nur eine Note", "Zeitvertreib", "Schlafen"], 0)
    ], ["Projekt", "Plan", "Arbeit", "Team", "Thema", "Präsentation", "Wissen", "Quelle", "Ergebnis", "Ziel"])

add_remaining_themes()

# Write to file
file_path = "C:\\Users\\User\\plizio-repo\\codekids_k3_de.json"
try:
    with open(file_path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"File successfully written to {file_path}")
except Exception as e:
    # Fallback to current directory
    with open("codekids_k3_de.json", "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"Could not write to {file_path}, wrote to current directory instead. Error: {e}")
