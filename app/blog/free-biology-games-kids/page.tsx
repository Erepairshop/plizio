import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Biology Games for Kids: Learn Science the Fun Way | PLIZIO Blog",
  description: "Explore free biology games for kids! Learn fascinating facts about animals, plants, and ecosystems. Interactive science practice for all ages.",
  alternates: { canonical: "https://plizio.com/blog/free-biology-games-kids/" },
  openGraph: {
    title: "Free Biology Games for Kids: Learn Science the Fun Way | PLIZIO Blog",
    description: "Explore free biology games for kids! Learn fascinating facts about animals, plants, and ecosystems. Interactive science practice for all ages.",
    url: "https://plizio.com/blog/free-biology-games-kids/",
    images: [{ url: "/og/blog-free-biology-games-kids.png", width: 1200, height: 630 }],
    locale: "en_GB",
    type: "article",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why use games to teach biology?",
      acceptedAnswer: { "@type": "Answer", text: "Games turn complex biological concepts into engaging challenges, helping children retain information more effectively through active participation." }
    },
    {
      "@type": "Question",
      name: "Are these biology games suitable for primary school?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, our games are designed to be age-appropriate and curriculum-aligned for primary and middle school students." }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://plizio.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://plizio.com/blog/" },
    { "@type": "ListItem", position: 3, name: "Free Biology Games", item: "https://plizio.com/blog/free-biology-games-kids/" }
  ]
};

export default function FreeBiologyGamesPage() {
  return (
    <main style={{ background: "#0A0A1A", color: "white", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 16px 64px" }}>
        <h1>Free Biology Games for Kids: Learn Science the Fun Way</h1>
        <p>Science is everywhere! From tiny cells to complex ecosystems, biology helps us understand our world. Making it fun is the best way to spark a lifelong interest.</p>
        
        <h2>Discover biology through play</h2>
        <ul>
          <li>Interactive learning about animals and plants.</li>
          <li>Engaging quests about ecosystems.</li>
          <li>Instant results to track progress.</li>
        </ul>
        
        <p>Explore our <Link href="/astro-biologie" style={{color: "#00D4FF"}}>Biology learning planet</Link> or take a <Link href="/biologietest" style={{color: "#00D4FF"}}>Biology quiz</Link>.</p>
        
        <Link href="/blog/">← Back to Blog</Link>
      </div>
    </main>
  );
}
