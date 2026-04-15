import { type Lang, SUPPORTED_LANGS } from "@/lib/seo/slugs";

export default function HreflangLinks({
  languages,
  xDefault,
}: {
  languages: Record<Lang, string>;
  xDefault: string;
}) {
  return (
    <>
      {SUPPORTED_LANGS.map((lang) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={languages[lang]} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={xDefault} />
    </>
  );
}
