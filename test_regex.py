import re

block = """  {
    id: "marcovia-cities-v2",
    type: "city",
    parent: "HN-CH",
    coords: [-87.3, 13.2833],
    name: { de: "Marcovia", hu: "Marcovia", ro: "Marcovia", en: "Marcovia" },
    description: { de: "Eine Küstengemeinde, bekannt für ihre Salzproduktion und Garnelenzucht.", hu: "Tengerparti község, amely sótermeléséről és garnélarák-tenyésztéséről ismert.", ro: "O municipalitate de coastă, cunoscută pentru producția de sare și creșterea creveților.", en: "A coastal municipality known for its salt production and shrimp farming." },
    facts: {
      de: ["Salzproduktion", "Garnelenzucht", "Am Golf von Fonseca", "Wichtiger Exporteur"],
      hu: ["Sótermelés", "Garnélarák-tenyésztés", "A Fonseca-öböl partján", "Fontos exportőr"],
      ro: ["Producția de sare", "Creșterea creveților", "La Golful Fonseca", "Exportator important"],
      en: ["Salt production", "Shrimp farming", "On the Gulf of Fonseca", "Important exporter"]
    }
  }"""

m = re.search(r',?\s*\}$', block)
print("Match:", m)
if m:
    print("Matched string:", repr(m.group(0)))
