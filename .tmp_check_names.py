names_to_check = [
    "Puerto de Buenos Aires",
    "Puerto de Rosario",
    "Puerto de Bahía Blanca",
    "Puerto de Quequén",
    "Puerto Almirante Storni",
    "Puerto de Ushuaia",
    "Puerto San Martín",
    "Puerto de Campana",
    "Puerto de Zárate",
    "Puerto de San Nicolás",
    "Vaca Muerta",
    "Loma Campana",
    "Mina Veladero",
    "Mina Cerro Vanguardia",
    "Planta Aluar",
    "Planta Siderar",
    "Planta Toyota Zárate",
    "Planta Ford Pacheco",
    "Planta Volkswagen Pacheco",
    "Fábrica Renault Santa Isabel",
    "Complejo Arcor Arroyito",
    "Refinería La Plata YPF",
    "Refinería Luján de Cuyo",
    "Polo Petroquímico Bahía Blanca",
    "Central Nuclear Atucha",
    "Central Nuclear Embalse",
    "Represa Yacyretá",
    "Represa Salto Grande",
    "Puerto de Comodoro Rivadavia",
    "Ingenio Ledesma",
    "Parque Solar Cauchari"
]
with open('.tmp_ar_names.txt', 'r', encoding='utf-8') as f:
    existing = set(line.strip().lower() for line in f)

for n in names_to_check:
    if n.lower() in existing:
        print("DUPLICATE:", n)
