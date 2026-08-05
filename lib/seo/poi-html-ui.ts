import { POI_HTML_UI_CATALOGS } from "./poi-html-ui.generated";

type Variables = Readonly<Record<string, string | number>>;

export function poiHtmlUiText(lang: string, key: string, fallback: string, variables: Variables = {}): string {
  const template = POI_HTML_UI_CATALOGS[lang]?.[key] ?? fallback;
  return template.replace(/\{([A-Za-z][A-Za-z0-9_]*)\}/g, (token, name: string) =>
    Object.prototype.hasOwnProperty.call(variables, name) ? String(variables[name]) : token
  );
}

export function poiHtmlUiSection<T extends Record<string, unknown>>(lang: string, section: string, fallback: T): T {
  const translated = { ...fallback };
  for (const [key, value] of Object.entries(fallback)) {
    if (typeof value === "string") {
      (translated as Record<string, unknown>)[key] = poiHtmlUiText(lang, `${section}.${key}`, value);
    }
  }
  return translated;
}
