import type { LocalizedString } from "../types";

export const EVENTS_TEXT = {
  powerFluctuation: {
    title: { en: "Power fluctuation", hu: "Energia-ingadozás", de: "Energieschwankung", ro: "Fluctuație de energie" },
    body: {
      en: "A surge is running through the outer shell. You can vent it fast or absorb it carefully.",
      hu: "Túlfeszültség fut végig a külső burkolaton. Gyorsan kivezetheted, vagy óvatosan elnyelheted.",
      de: "Ein Stoß läuft durch die Außenhülle. Du kannst ihn schnell ablassen oder vorsichtig absorbieren.",
      ro: "Un vârf de tensiune trece prin carcasa exterioară. Îl poți evacua rapid sau absorbi cu atenție."
    },
    options: {
      vent: { en: "Vent the surge", hu: "Túlfeszültség kivezetése", de: "Stoß ablassen", ro: "Evacuare tensiune" },
      absorb: { en: "Absorb into reserves", hu: "Elnyelés a tartalékba", de: "In Reserven absorbieren", ro: "Absorbire în rezerve" },
    },
    overload: {
      title: { en: "Grid overload", hu: "Hálózati túlterhelés", de: "Netzüberlastung", ro: "Supraîncărcare rețea" },
      body: {
        en: "The reserve grid is swelling. Lock the excess into the core spine or bleed it through the reactor housing.",
        hu: "A tartalék hálózat duzzad. Zárd le a felesleget a mag gerincébe, vagy vezesd át a reaktorházon.",
        de: "Das Reservenetz schwillt an. Sperre den Überschuss in das Kernrückgrat oder leite ihn durch das Reaktorgehäuse ab.",
        ro: "Rețeaua de rezervă se umflă. Blochează excesul în coloana nucleului sau evacuează-l prin carcasa reactorului."
      },
      options: {
        lockCore: { en: "Lock into core spine", hu: "Lezárás a magba", de: "Im Kern fixieren", ro: "Blocare în nucleu" },
        bleedHousing: { en: "Bleed through housing", hu: "Átvezetés a házon", de: "Durch Gehäuse ableiten", ro: "Evacuare prin carcasă" },
      }
    }
  },
  materialBottleneck: {
    title: { en: "Material bottleneck", hu: "Nyersanyag szűkület", de: "Materialengpass", ro: "Blocaj materiale" },
    body: {
      en: "Supply flow is collapsing. You can send a risky drone sweep or strip dormant plating.",
      hu: "Az ellátási lánc összeomlik. Küldhetsz egy kockázatos drónrajt, vagy lefejtheted a szunnyadó burkolatot.",
      de: "Der Versorgungsfluss bricht zusammen. Du kannst einen riskanten Drohneneinsatz schicken oder schlafende Panzerung abstreifen.",
      ro: "Fluxul de aprovizionare se prăbușește. Poți trimite o dronă riscantă sau demonta placarea adormită."
    },
    options: {
      droneSweep: { en: "Launch drone sweep", hu: "Drónraj indítása", de: "Drohneneinsatz starten", ro: "Lansare dronă" },
      stripPlating: { en: "Strip inner plating", hu: "Belső burkolat lefejtése", de: "Innere Panzerung abstreifen", ro: "Demontare placare" },
    }
  },
  signalPulse: {
    title: { en: "Signal pulse", hu: "Jelimpulzus", de: "Signalimpuls", ro: "Puls de semnal" },
    body: {
      en: "Something inside the shell answers. You can synchronize softly or amplify the response.",
      hu: "Valami a testben válaszol. Szinkronizálhatsz lágyan, vagy felerősítheted a választ.",
      de: "Etwas in der Hülle antwortet. Du kannst sanft synchronisieren oder die Antwort verstärken.",
      ro: "Ceva din interiorul corpului răspunde. Poți sincroniza ușor sau amplifica răspunsul."
    },
    options: {
      synchronize: { en: "Synchronize softly", hu: "Lágy szinkronizálás", de: "Sanft synchronisieren", ro: "Sincronizare ușoară" },
      amplify: { en: "Amplify response", hu: "Válasz felerősítése", de: "Antwort verstärken", ro: "Amplificare răspuns" },
    },
    fracture: {
      title: { en: "Echo fracture", hu: "Visszhang-törés", de: "Echofraktur", ro: "Fractură de ecou" },
      body: {
        en: "The shell pushes back with a fragmented echo. Hold resonance steady or break contact and regroup.",
        hu: "A test töredezett visszhanggal válaszol. Tartsd stabilan a rezonanciát, vagy szakítsd meg a kapcsolatot.",
        de: "Die Hülle drückt mit einem fragmentierten Echo zurück. Halte die Resonanz stabil oder brich den Kontakt ab.",
        ro: "Corpul responde cu un ecou fragmentat. Menține rezonanța stabilă sau întrerupe contactul."
      },
      options: {
        holdResonance: { en: "Hold resonance", hu: "Rezonancia tartása", de: "Resonanz halten", ro: "Menținere rezonanță" },
        breakContact: { en: "Break contact", hu: "Kapcsolat bontása", de: "Kontakt abbrechen", ro: "Întrerupere contact" },
      }
    }
  },
  waveRecovery: {
    step1: {
      title: { en: "Afterwave check", hu: "Utóhullám-ellenőrzés", de: "Nachwellen-Check", ro: "Verificare post-val" },
      body: {
        en: "The first wave tore open a single fault line. Which module must be restored first?",
        hu: "Az első hullám egyetlen törésvonalat nyitott meg. Melyik modult kell először helyreállítani?",
        de: "Die erste Welle riss eine einzige Bruchlinie auf. Welches Modul muss zuerst wiederhergestellt werden?",
        ro: "Primul val a rupt o singură linie de avarie. Ce modul trebuie restabilit primul?"
      },
      options: {
        reactor: { en: "Reactor only", hu: "Csak a reaktor", de: "Nur Reaktor", ro: "Doar reactorul" },
        logistics: { en: "Logistics first", hu: "Előbb a logisztika", de: "Zuerst Logistik", ro: "Mai întâi logistica" },
        sensor: { en: "Sensor grid", hu: "Szenzorháló", de: "Sensorfeld", ro: "Rețeaua de senzori" },
      }
    },
    step2: {
      title: { en: "Split recovery", hu: "Megosztott helyreállítás", de: "Geteilte Wiederherstellung", ro: "Recuperare împărțită" },
      body: {
        en: "The second wave fractured the supply path. Which pair should be brought back together?",
        hu: "A második hullám szétvágta az ellátási utat. Melyik két egységet kell újra összehozni?",
        de: "Die zweite Welle zerschnitt den Versorgungsweg. Welches Paar muss wieder zusammengeführt werden?",
        ro: "Al doilea val a fracturat traseul de aprovizionare. Ce pereche trebuie readusă împreună?"
      },
      options: {
        reactorLogistics: { en: "Reactor + logistics", hu: "Reaktor + logisztika", de: "Reaktor + Logistik", ro: "Reactor + logistică" },
        reactorSensor: { en: "Reactor + sensor", hu: "Reaktor + szenzor", de: "Reaktor + Sensor", ro: "Reactor + senzor" },
        logisticsSensor: { en: "Logistics + sensor", hu: "Logisztika + szenzor", de: "Logistik + Sensor", ro: "Logistică + senzor" },
      }
    },
    step3: {
      title: { en: "Triad lock", hu: "Triád zár", de: "Triaden-Sperre", ro: "Blocaj triadă" },
      body: {
        en: "The last wave leaves the stabilizer frame split in four. Which lockout closes the shell without tearing the grid?",
        hu: "Az utolsó hullám négyfelé szedi a stabilizátor keretét. Melyik zárolás zárja le a testet a hálózat szétszakítása nélkül?",
        de: "Die letzte Welle spaltet den Stabilisatorrahmen in vier Teile. Welche Sperre schließt die Hülle, ohne das Netz zu zerreißen?",
        ro: "Ultimul val desparte cadrul stabilizator în patru. Ce blocaj sigilează corpul fără să rupă rețeaua?"
      },
      options: {
        shellLock: { en: "Reactor + logistics + sensor", hu: "Reaktor + logisztika + szenzor", de: "Reaktor + Logistik + Sensor", ro: "Reactor + logistică + senzor" },
        coreSeal: { en: "Reactor + core + sensor", hu: "Reaktor + mag + szenzor", de: "Reaktor + Kern + Sensor", ro: "Reactor + nucleu + senzor" },
        supplySeal: { en: "Logistics + core + reactor", hu: "Logisztika + mag + reaktor", de: "Logistik + Kern + Reaktor", ro: "Logistică + nucleu + reactor" },
        sensorLock: { en: "Sensor + core + logistics", hu: "Szenzor + mag + logisztika", de: "Sensor + Kern + Logistik", ro: "Senzor + nucleu + logistică" },
      }
    }
  },
  avatarPreparation: {
    step1: {
      title: { en: "Avatar imprint", hu: "Avatar-nyom", de: "Avatar-Prägung", ro: "Amprentă avatar" },
      body: {
        en: "The shell is almost ready. What should the first living impulse feel like?",
        hu: "A test majdnem kész. Milyen legyen az első élő impulzus érzése?",
        de: "Die Hülle ist fast bereit. Wie soll sich der erste lebende Impuls anfühlen?",
        ro: "Corpul este aproape pregătit. Cum ar trebui să se simtă primul impuls viu?"
      },
      options: {
        calm: { en: "Quiet and steady", hu: "Csendes és egyenletes", de: "Ruhig und stabil", ro: "Liniștit és stabil" },
        curious: { en: "Alert and curious", hu: "Éber és kíváncsi", de: "Wach und neugierig", ro: "Aproape és curios" },
        protective: { en: "Warm and protective", hu: "Meleg és védelmező", de: "Warm und beschützend", ro: "Cald és protector" },
        bold: { en: "Sharp and fearless", hu: "Határozott és félelem nélküli", de: "Scharf und furchtlos", ro: "Tăios és fără teamă" },
      }
    },
    step2: {
      title: { en: "Temper", hu: "Hőfok", de: "Temperament", ro: "Temperament" },
      body: {
        en: "When pressure rises, what should this avatar lean on first?",
        hu: "Amikor nő a nyomás, mire támaszkodjon először ez az avatar?",
        de: "Wenn der Druck steigt, worauf soll sich dieser Avatar zuerst stützen?",
        ro: "Când crește presiunea, pe ce ar trebui să se bazeze primul acest avatar?"
      },
      options: {
        calm: { en: "Breathing room", hu: "Légzésnyi tér", de: "Atemraum", ro: "Spațiu de respirație" },
        curious: { en: "Signals and patterns", hu: "Jelek és minták", de: "Signale und Muster", ro: "Semnale și tipare" },
        protective: { en: "People and shelter", hu: "Emberek és menedék", de: "Menschen und Schutz", ro: "Oameni și adăpost" },
        bold: { en: "Fast action", hu: "Gyors cselekvés", de: "Schnelles Handeln", ro: "Acțiune rapidă" },
      }
    },
    step3: {
      title: { en: "Identity seal", hu: "Identitás-zár", de: "Identitätssiegel", ro: "Sigiliu identitar" },
      body: {
        en: "Last question. What should remain most visible in the avatar's presence?",
        hu: "Utolsó kérdés. Mi maradjon a leginkább látható az avatar jelenlétében?",
        de: "Letzte Frage. Was soll in der Präsenz des Avatars am stärksten sichtbar bleiben?",
        ro: "Ultima întrebare. Ce ar trebui să rămână cel mai vizibil in prezența avatarului?"
      },
      options: {
        calm: { en: "A calm center", hu: "Nyugodt közép", de: "Ein ruhiger Kern", ro: "Un centru calm" },
        curious: { en: "A searching mind", hu: "Kereső elme", de: "Ein suchender Geist", ro: "O minte căutătoare" },
        protective: { en: "A sheltering hand", hu: "Védelmező kéz", de: "Eine schützende Hand", ro: "O mână protectoare" },
        bold: { en: "A bright edge", hu: "Világos él", de: "Eine leuchtende Kante", ro: "O margine luminoasă" },
      }
    }
  },
  driftLock: {
    title: { en: "Drift lock warning", hu: "Drift-zár figyelmeztetés", de: "Drift-Lock-Warnung", ro: "Avertisment blocaj derivă" },
    body: {
      en: "Too many scars are pulling the station toward a repeating pattern. Break the loop now or let the system fold inward.",
      hu: "Túl sok seb húzza az állomást egy ismétlődő minta felé. Törd meg a hurkot most, vagy hagyd befelé omlani a rendszert.",
      de: "Zu viele Narben ziehen die Station in ein Wiederholungsmuster. Brich die Schleife jetzt ab oder lass das System in sich zusammenfalten.",
      ro: "Prea multe cicatrici trag stația spre un tipar repetitiv. Întrerupe bucla acum sau lasă sistemul să se plieze spre interior."
    },
    options: {
      breakLoop: { en: "Break the loop", hu: "Hurok megtörése", de: "Schleife abbrechen", ro: "Ruperea buclei" },
      foldInward: { en: "Let it fold inward", hu: "Befelé omlás engedése", de: "In sich zusammenfalten lassen", ro: "Pliere spre interior" },
    }
  },
  voidBreach: {
    step1: {
      title: { en: "Void breach", hu: "Void repedés", de: "Void-Bruch", ro: "Breșă Void" },
      body: {
        en: "A fracture in the psychic layer of the core has opened. It leaks cold silence. Seal it with power or attempt to commune?",
        hu: "Repedés nyílt a mag pszichikai rétegén. Hideg csend szivárog belőle. Zárd le energiával, vagy próbálj meg kapcsolatba lépni vele?",
        de: "Ein Bruch in der psychischen Schicht des Kerns hat sich geöffnet. Kalte Stille tritt aus. Mit Energie versiegeln oder kommunizieren?",
        ro: "O fractură în stratul psihic al nucleului s-a deschis. Scurge o tăcere rece. Sigilează-l cu energie sau încearcă să comunici?"
      },
      options: {
        seal: { en: "Seal with power", hu: "Lezárás energiával", de: "Mit Energie versiegeln", ro: "Sigilare cu energie" },
        commune: { en: "Commune with silence", hu: "Kapcsolatfelvétel", de: "Mit Stille kommunizieren", ro: "Comunicare cu tăcerea" },
      }
    },
    step2: {
      title: { en: "The Silence answers", hu: "A Csend válaszol", de: "Die Stille antwortet", ro: "Tăcerea răspunde" },
      body: {
        en: "The breach did not close. It is demanding a sacrifice of material to stabilize or a permanent scar on the reactor to anchor it.",
        hu: "A repedés nem zárult be. Anyagi áldozatot követel a stabilizáláshoz, vagy egy állandó sebet a reaktoron a rögzítéshez.",
        de: "Der Bruch schloss sich nicht. Er fordert ein Materialopfer zur Stabilisierung oder eine Narbe am Reaktor zur Verankerung.",
        ro: "Breșa nu s-a închis. Cere un sacrificiu de materiale pentru stabilizare sau o cicatrice permanentă pe reactor pentru ancorare."
      },
      options: {
        sacrifice: { en: "Sacrifice materials", hu: "Anyagi áldozat", de: "Material opfern", ro: "Sacrificiu materiale" },
        anchor: { en: "Anchor to reactor", hu: "Rögzítés a reaktorhoz", de: "Am Reaktor verankern", ro: "Ancorare la reactor" },
      }
    }
  },
  sensorGhosting: {
    title: { en: "Sensor ghosting", hu: "Szenzor-szellemkép", de: "Sensorgeister", ro: "Imagini fantomă senzori" },
    body: {
      en: "Phantoms are appearing on the long-range grid. They might be real debris or just drift noise. Ignore them or run a deep recalibration?",
      hu: "Fantomjelek jelennek meg a távoli hálón. Lehetnek valódi törmelékek vagy csak zaj. Hagyd figyelmen kívül, vagy indíts mély újrakalibrálást?",
      de: "Phantome erscheinen auf dem Langstreckengitter. Es könnten echte Trümmer oder nur Rauschen sein. Ignorieren oder neu kalibrieren?",
      ro: "Fantome apar pe rețeaua la distanță. Ar putea fi resturi reale sau doar zgomot de derivă. Ignoră-le sau rulează o recalibrare profundă?"
    },
    options: {
      ignore: { en: "Ignore the ghosts", hu: "Fantomok figyelmen kívül hagyása", de: "Geister ignorieren", ro: "Ignorare fantome" },
      recalibrate: { en: "Deep recalibration", hu: "Mély újrakalibrálás", de: "Tiefe Neukalibrierung", ro: "Recalibrare profundă" },
    }
  },
  deepTrek: {
    title: { en: "Deep Trek", hu: "Mély-expedíció", de: "Tiefenexpedition", ro: "Expediție profundă" },
    body: {
      en: "A salvage drone has found a path into a derelict hull nearby. It's a risk to the drone, but the payoff could be huge.",
      hu: "Egy mentődrón utat talált egy közeli elhagyatott hajótestbe. Kockázatos a drón számára, de a nyereség hatalmas lehet.",
      de: "Eine Bergungsdrohne hat einen Weg in ein Wrack in der Nähe gefunden. Es ist riskant, aber der Gewinn könnte groß sein.",
      ro: "O dronă de recuperare a găsit o cale într-o epavă din apropiere. Este un risc pentru dronă, dar câștigul ar putea fi uriaș."
    },
    options: {
      sendDrone: { en: "Send drone deep", hu: "Drón küldése mélyre", de: "Drohne tief schicken", ro: "Trimitere dronă în profunzime" },
      recall: { en: "Recall drone", hu: "Drón visszahívása", de: "Drohne zurückrufen", ro: "Rechemare dronă" },
    }
  },
  entropyCascade: {
    step1: {
      title: { en: "Entropy cascade", hu: "Entrópia-kaszkád", de: "Entropiekaskade", ro: "Cascadă de entropie" },
      body: {
        en: "Structural entropy is reaching critical levels. The station's logic grid is beginning to fragment. Purge the buffer with materials or attempt to isolate the affected modules?",
        hu: "A szerkezeti entrópia kritikus szintet ér el. Az állomás logikai hálózata töredezni kezd. Ürítsd ki a puffert anyagokkal, vagy próbáld izolálni a modulokat?",
        de: "Strukturelle Entropie erreicht kritische Werte. Das Logiknetz beginnt zu fragmentieren. Puffer mit Material leeren oder Module isolieren?",
        ro: "Entropia structurală atinge niveluri critice. Rețeaua logică a stației începe să se fragmenteze. Purjează tamponul sau izolează modulele?"
      },
      options: {
        purgeBuffer: { en: "Purge with materials", hu: "Tisztítás anyaggal", de: "Mit Material leeren", ro: "Purjare cu materiale" },
        isolateModules: { en: "Isolate modules", hu: "Modulok izolálása", de: "Module isolieren", ro: "Izolare module" },
      }
    },
    step2: {
      title: { en: "Isolator failure", hu: "Izolációs hiba", de: "Isolatorfehler", ro: "Eșec izolator" },
      body: {
        en: "The isolation failed to contain the cascade. A random module is being flooded with junk data. Let it burn out or redirect the junk into the core resonance?",
        hu: "Az izoláció nem tudta megállítani a folyamatot. Egy modul elárad szemétadatokkal. Hagyd kiégni, vagy irányítsd át a szemetet a magrezonanciába?",
        de: "Die Isolation schlug fehl. Ein Modul wird mit Datenmüll überflutet. Ausbrennen lassen oder Müll in die Kernresonanz leiten?",
        ro: "Izolarea nu a reușit să conțină cascada. Un modul este inundat cu date inutile. Lasă-l să se ardă sau redirecționează datele în nucleu?"
      },
      options: {
        burnOut: { en: "Allow burnout", hu: "Kiégés engedése", de: "Ausbrennen lassen", ro: "Permite arderea" },
        redirectCore: { en: "Redirect to core", hu: "Átirányítás a maghoz", de: "Zum Kern leiten", ro: "Redirecționare spre nucleu" },
      }
    }
  },
  supplyCascade: {
    step1: {
      title: { en: "Supply cascade", hu: "Ellátási kaszkád", de: "Versorgungskaskade", ro: "Cascadă de aprovizionare" },
      body: {
        en: "A logistics drone has identified a cache in the debris field, but it's guarded by a magnetic storm. Divert power to shields or risk the drones?",
        hu: "Egy logisztikai drón készletet talált a törmelékmezőben, de mágneses vihar védi. Irányíts energiát a pajzsokra, vagy kockáztasd a drónokat?",
        de: "Eine Drohne hat ein Lager im Trümmerfeld gefunden, aber ein Magnetsturm bewacht es. Energie auf Schilde oder Drohnen riskieren?",
        ro: "O dronă logistică a identificat un depozit, dar este păzit de o furtună magnetică. Redirecționează energia spre scuturi sau riscă dronele?"
      },
      options: {
        divertPower: { en: "Divert power to shields", hu: "Energia a pajzsokra", de: "Energie auf Schilde", ro: "Redirecționare spre scuturi" },
        riskDrones: { en: "Risk the drones", hu: "Drónok kockáztatása", de: "Drohnen riskieren", ro: "Riscarea dronelor" },
      }
    },
    step2: {
      title: { en: "Cache recovery", hu: "Készlet kinyerése", de: "Lagerbergung", ro: "Recuperare depozit" },
      body: {
        en: "The drones found the cache. It contains unstable volatile matter. Process it immediately for fuel or stabilize it for structural repairs?",
        hu: "A drónok megtalálták a készletet. Instabil anyagot tartalmaz. Dolgozd fel üzemanyagnak, vagy stabilizáld a szerkezeti javításokhoz?",
        de: "Drohnen fanden das Lager. Es enthält instabile Materie. Sofort als Treibstoff nutzen oder für Reparaturen stabilisieren?",
        ro: "Dronele au găsit depozitul. Conține materie instabilă. Proceseaz-o pentru combustibil sau stabilizeaz-o pentru reparații?"
      },
      options: {
        processFuel: { en: "Process for fuel", hu: "Feldolgozás üzemanyagnak", de: "Als Treibstoff nutzen", ro: "Procesare combustibil" },
        stabilizeStructure: { en: "Stabilize for repairs", hu: "Stabilizálás javításhoz", de: "Für Reparaturen stabilisieren", ro: "Stabilizare pentru reparații" },
      }
    },
    step3: {
      title: { en: "Volatile feedback", hu: "Veszélyes visszacsatolás", de: "Instabiles Feedback", ro: "Feedback volatil" },
      body: {
        en: "The matter is reacting with the station grid. Lock the feedback into the logistics sub-frame or vent it through the sensors?",
        hu: "Az anyag reakcióba lép az állomás hálózatával. Zárd a visszacsatolást a logisztikai keretbe, vagy vezesd ki a szenzorokon át?",
        de: "Die Materie reagiert mit dem Netz. Feedback in die Logistik sperren oder durch Sensoren ablassen?",
        ro: "Materia reacționează cu rețeaua. Blochează feedback-ul în logisitică sau evacuează-l prin senzori?"
      },
      options: {
        lockLogistics: { en: "Lock into logistics", hu: "Lezárás a logisztikába", de: "In Logistik sperren", ro: "Blocare în logistică" },
        ventSensors: { en: "Vent through sensors", hu: "Kivezetés a szenzorokon", de: "Durch Sensoren ablassen", ro: "Evacuare prin senzori" },
      }
    }
  },
  emergencyOverride: {
    step1: {
      title: { en: "EMERGENCY OVERRIDE", hu: "KÉZI FELÜLBÍRÁLÁS", de: "NOTFALL-OVERRIDE", ro: "SUPRASCRIERE DE URGENȚĂ" },
      body: {
        en: "Mainframe locked. Systems are dark. Force the power grid or attempt a cold reboot of the logic buffer?",
        hu: "Főkeret lezárva. A rendszerek sötétek. Erőltesd meg a hálózatot, vagy próbálj meg egy hideg újraindítást a logikai pufferen?",
        de: "Mainframe gesperrt. Systeme dunkel. Stromnetz forzieren oder Kaltstart des Logikpuffers?",
        ro: "Unitatea centrală blocată. Sistemele sunt întunecate. Forțează rețeaua sau încearcă o repornire la rece a tamponului logic?"
      },
      options: {
        forceGrid: { en: "Force grid (+STB)", hu: "Hálózat erőltetése (+STB)", de: "Netz forzieren (+STB)", ro: "Forțare rețea (+STB)" },
        purgeBuffer: { en: "Cold reboot (-PWR)", hu: "Hideg újraindítás (-PWR)", de: "Kaltstart (-PWR)", ro: "Repornire la rece (-PWR)" },
      }
    },
    step2: {
      title: { en: "SYSTEM RECOVERY", hu: "RENDSZER HELYREÁLLÍTÁSA", de: "SYSTEMWIEDERHERSTELLUNG", ro: "RECUPERARE SISTEM" },
      body: {
        en: "The bypass is working, but systems are stuttering. Sacrifice materials to patch the cooling vents, or let the core resonance absorb the entropy surge?",
        hu: "A felülbírálás működik, de a rendszerek akadoznak. Áldozz fel anyagot a hűtőnyílások javítására, vagy hagyd, hogy a magrezonancia nyelje el az entrópiát?",
        de: "Bypass funktioniert, aber Systeme stottern. Material opfern für Kühlung oder Kernresonanz die Entropie schlucken lassen?",
        ro: "Bypass-ul funcționează, dar sistemele sacadează. Sacrifică materiale pentru răcire sau lasă rezonanța nucleului să absoarbă fluxul de entropie?"
      },
      options: {
        patchVents: { en: "Patch vents (-MAT)", hu: "Nyílások javítása (-ANYAG)", de: "Lüftungen flicken (-MAT)", ro: "Reparare orificii (-MAT)" },
        absorbSurge: { en: "Absorb surge (+ENT)", hu: "Entrópia elnyelése (+ENT)", de: "Stoß absorbieren (+ENT)", ro: "Absorbire flux (+ENT)" },
      }
    }
  }
};
