import StructuredData from "@/components/seo/StructuredData";

export interface BreadcrumbItem {
  name: string;
  href: string;
}

export default function Breadcrumb({
  items,
}: {
  items: BreadcrumbItem[];
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://plizio.com${item.href}`,
    })),
  };

  return (
    <>
      <nav aria-label="Breadcrumb" className="text-sm text-white/45">
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 ? <span className="text-white/25">/</span> : null}
              <a href={item.href} className="hover:text-cyan-300 transition">
                {item.name}
              </a>
            </li>
          ))}
        </ol>
      </nav>
      <StructuredData data={jsonLd} />
    </>
  );
}
