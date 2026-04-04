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
    },
    {
      "@type": "Question",
      name: "Do these games cover evolution and ecology?",
      acceptedAnswer: { "@type": "Answer", text: "Our modules cover a wide range of topics, including basic ecology, animal adaptations, and environmental science tailored for young learners." }
    },
    {
      "@type": "Question",
      name: "Can I use these games in a classroom setting?",
      acceptedAnswer: { "@type": "Answer", text: "Absolutely! Many teachers use our interactive biology modules to supplement their lessons and create engaging classroom activities." }
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
        
        <h2>Why Biology needs to be fun</h2>
        <p>Biology is a living science. Memorizing Latin names of plants is rarely enough to ignite passion. Kids need to see the mechanism behind the life – how a plant draws energy from the sun, or how animals adapt to their environment. Games provide this 'aha!' moment that textbooks often lack.</p>
        
        <h2>Key features of our science games</h2>
        <ul>
          <li><strong>Interactive exploration:</strong> Learn about animal classification and plant life through active choices.</li>
          <li><strong>Engaging quests:</strong> Embark on missions that reveal secrets about ecosystems and life cycles.</li>
          <li><strong>Progress monitoring:</strong> Get instant results to track how your knowledge grows from lesson to lesson.</li>
        </ul>
        
        <h2>Learning with Plizio</h2>
        <p>Explore our <Link href="/astro-biologie" style={{color: "#00D4FF"}}>Biology learning planet</Link>, which makes even the most difficult biological topics easy to understand. Supplement your school curriculum with our specialized modules, or challenge yourself with a <Link href="/biologietest" style={{color: "#00D4FF"}}>Biology quiz</Link> to check your current level.</p>
        
        <p>Whether you're a parent supporting your child or a teacher looking for fresh classroom ideas, our resources are here to make science accessible and exciting.</p>

        <div style={{ padding: "20px", background: "#12122A", borderRadius: "12px", borderLeft: "4px solid #B44DFF" }}>
            <strong>Teacher's tip:</strong> Use our biology games as an introduction to a new chapter. It captures attention immediately and gives students a framework to which they can attach the detailed information learned in class.
        </div>
        
        <Link href="/blog/">← Back to Blog</Link>
      </div>
    </main>
  );
}
