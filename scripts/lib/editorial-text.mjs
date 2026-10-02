const LANGUAGES = new Set(['de', 'hu', 'ro', 'en', 'fr', 'tr', 'hr', 'it', 'es', 'pl', 'nl', 'pt']);
const PARAGRAPHS = ['Morning', 'Midday', 'Afternoon', 'Evening', 'morning', 'midday', 'afternoon', 'evening'];

// Sidecars contain plain prose, nested locale records and named day paragraphs.
// Link records and arbitrary objects are not prose and must never be stringified.
export function editorialText(value, lang, depth = 0) {
  if (depth > 8 || value == null) return '';
  if (typeof value === 'string') return value;
  if (Array.isArray(value)) return value.map(v => editorialText(v, lang, depth + 1)).filter(Boolean).join('\n\n');
  if (typeof value !== 'object') return '';
  if (Object.keys(value).some(key => LANGUAGES.has(key))) {
    for (const locale of [...new Set([lang, 'en', 'de', 'hu', 'ro'])]) {
      const text = editorialText(value[locale], lang, depth + 1);
      if (text) return text;
    }
    return '';
  }
  const parts = PARAGRAPHS.filter(key => Object.hasOwn(value, key));
  if (parts.length) return parts.map(key => editorialText(value[key], lang, depth + 1)).filter(Boolean).join('\n\n');
  return '';
}
