file_path = "lib/visualLab/data/poiExtraMoldovaHistory.ts"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Since the file structure is likely consistent, the same replacement should work.
content = content.replace("ro: , en:", 'ro: "Istoria Republicii Moldova este marcată de numeroase evenimente care au modelat identitatea sa culturală și socială de-a lungul secolelor. Această regiune, situată la răscrucea unor mari imperii, a păstrat o moștenire bogată, reflectată în monumentele istorice și tradițiile locale. Vizitatorii pot explora vestigiile trecutului, de la cetățile medievale la clădirile istorice care au fost martore la transformările profunde ale țării. Înțelegerea istoriei locale oferă o perspectivă valoroasă asupra modului în care comunitățile și-au păstrat valorile și au contribuit la dezvoltarea națiunii.", en:')
content = content.replace("ro: [],", 'ro: ["Vestigii istorice din perioada medievală.", "O regiune cu o identitate culturală puternică.", "Evenimente cheie care au definit statalitatea locală.", "Monumente care păstrează memoria strămoșilor.", "Tradiții care au supraviețuit trecerii timpului.", "O istorie bogată reflectată în arhitectură.", "Contribuții semnificative la patrimoniul național."],')

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)
