// Server-rendered crawlable site map. The homepage (app/page.tsx) returns null
// during SSR (`typeof window === "undefined"` guard) and navigates via
// router.push onClick → the static HTML has ZERO internal <a href> links, so
// Googlebot can't discover routes or flow PageRank from the strongest page.
// This footer lives in layout.tsx (a server component, OUTSIDE the page's null
// return) → real <a href> to every main route land in every page's static HTML.
// Plain <a> (not next/Link) to guarantee they're in the pre-rendered markup.

type Link = { href: string; label: string };
type Group = { title: string; links: Link[] };

const GROUPS: Group[] = [
  {
    title: "Maps & Destinations",
    links: [
      { href: "/destinations", label: "All Destinations (Countries)" },
      { href: "/learn", label: "Interactive Maps & Learning" },
      { href: "/europe-map", label: "Europe Map" },
      { href: "/asia-map", label: "Asia Map" },
      { href: "/africa-map", label: "Africa Map" },
      { href: "/northamerica-map", label: "North America Map" },
      { href: "/southamerica-map", label: "South America Map" },
      { href: "/oceania-map", label: "Oceania Map" },
      { href: "/world", label: "World Map" },
      { href: "/world-globe", label: "3D Globe" },
      { href: "/de/", label: "Reiseziele (Deutsch)" },
      { href: "/en/", label: "Destinations (English)" },
      { href: "/hu/", label: "Úti célok (Magyar)" },
      { href: "/ro/", label: "Destinații (Română)" },
      { href: "/blog", label: "Blog" },
    ],
  },
  {
    title: "Learn",
    links: [
      { href: "/astromath", label: "Math" },
      { href: "/astro-geographie", label: "Geography" },
      { href: "/astro-geschichte", label: "History" },
      { href: "/astro-biologie", label: "Biology" },
      { href: "/astro-physik", label: "Physics" },
      { href: "/astrokemia", label: "Chemistry" },
      { href: "/astro-sachkunde", label: "General Knowledge" },
      { href: "/astrodeutsch", label: "German" },
      { href: "/astroenglish", label: "English" },
      { href: "/astromagyar", label: "Hungarian" },
      { href: "/astroromana", label: "Romanian" },
      { href: "/codekids", label: "Code Kids" },
      { href: "/astrinformatika", label: "Informatics" },
      { href: "/astro-ai", label: "AI" },
      { href: "/educational-games", label: "Educational Games" },
      { href: "/brain-games", label: "Brain Games" },
      { href: "/visual-lab", label: "Visual Lab" },
    ],
  },
  {
    title: "Games",
    links: [
      { href: "/milliomos", label: "Quiz Millionaire" },
      { href: "/quickpick", label: "Quick Pick" },
      { href: "/reflexrush", label: "Reflex Rush" },
      { href: "/memoryflash", label: "Memory Flash" },
      { href: "/spotdiff", label: "Spot the Difference" },
      { href: "/numberrush", label: "Number Rush" },
      { href: "/wordscramble", label: "Word Scramble" },
      { href: "/wordhunt", label: "Word Hunt" },
      { href: "/sequencerush", label: "Sequence Rush" },
      { href: "/kodex", label: "Kodex" },
    ],
  },
  {
    title: "About",
    links: [
      { href: "/about", label: "About" },
      { href: "/data-sources", label: "Data Sources" },
      { href: "/contact", label: "Contact" },
      { href: "/faq", label: "FAQ" },
      { href: "/parents", label: "For Parents" },
      { href: "/teachers", label: "For Teachers" },
      { href: "/collection", label: "Collection" },
      { href: "/stickers", label: "Stickers" },
      { href: "/privacy", label: "Privacy" },
      { href: "/impressum", label: "Impressum" },
    ],
  },
];

export default function SiteFooterNav() {
  return (
    <footer className="plizio-site-footer border-t border-white/10 bg-bg/80 px-4 py-8 text-sm" aria-label="Site map">
      <nav className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3 md:grid-cols-5">
        {GROUPS.map((g) => (
          <div key={g.title}>
            <h2 className="mb-2 text-xs font-bold uppercase tracking-wide text-white/60">{g.title}</h2>
            <ul className="space-y-1">
              {g.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/70 hover:text-white transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
      <p className="mx-auto mt-6 max-w-6xl text-xs text-white/60">© Plizio — interactive maps, city day plans and free learning.</p>
    </footer>
  );
}
