import re
block = """
    descriptionAdvanced: {
      de: "Das malerische Städtchen Vianden liegt im Nordosten Luxemburgs an der Grenze zu Deutschland im idyllischen Our-Tal. Berühmt ist Vianden vor allem für seine imposante mittelalterliche Burg, die majestätisch über der Stadt thront und zu den bedeutendsten historischen Denkmälern Europas zählt. Die engen, gepflasterten Gassen und die historische Stadtmauer versetzen Besucher in eine längst vergangene Zeit. Sogar der französische Schriftsteller Victor Hugo verbrachte hier mehrfach seine Zeit, um sich inspirieren zu lassen. Ein perfektes Beispiel für die Epoche des Mittelalters im Fach Geschichte K6.",
      hu: "",
      ro: "",
      en: ""
    }"""
def replace_desc_en(m):
    inner = m.group(0)
    if re.search(r'(?:en|"en"):\s*"[^"]*"', inner):
        return re.sub(r'(?:en|"en"):\s*"[^"]*"', f'en: "REPLACED"', inner)
    else:
        return inner + "NOT FOUND"
print(re.sub(r'(?:descriptionAdvanced|"descriptionAdvanced"):\s*\{[\s\S]*?\}', replace_desc_en, block, count=1))
