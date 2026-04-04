import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Learn German Online: Free Interactive Lessons for Kids (Grade 1-8) | PLIZIO Blog",
  description: "Learn German online with fun, free interactive lessons! Effective practice for kids of all levels (Grade 1-8). Start your language journey now.",
  alternates: { canonical: "https://plizio.com/blog/learn-german-online-kids/" },
  openGraph: {
    title: "Learn German Online: Free Interactive Lessons for Kids (Grade 1-8) | PLIZIO Blog",
    description: "Learn German online with fun, free interactive lessons! Effective practice for kids of all levels (Grade 1-8). Start your language journey now.",
    url: "https://plizio.com/blog/learn-german-online-kids/",
    images: [{ url: "/og/blog-learn-german-online-kids.png", width: 1200, height: 630 }],
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
      name: "Is it easy for kids to learn German online?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, interactive games and structured lessons make German accessible and fun for children at any level." }
    },
    {
      "@type": "Question",
      name: "Are these German lessons free?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, we provide free interactive practice exercises to help children improve their German skills." }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://plizio.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://plizio.com/blog/" },
    { "@type": "ListItem", position: 3, name: "Learn German Online for Kids", item: "https://plizio.com/blog/learn-german-online-kids/" }
  ]
};

export default function LearnGermanOnlinePage() {
  return (
    <main style={{ background: "#0A0A1A", color: "white", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 16px 64px" }}>
        <h1>Learn German Online: Free Interactive Lessons for Kids</h1>
        <p>Learning a new language is a great adventure. For kids, German is both challenging and rewarding. Our online platform makes grammar and vocabulary simple.</p>
        
        <h2>Why practice German online?</h2>
        <ul>
          <li>Fun games make learning feel like play.</li>
          <li>Instant feedback helps correct mistakes.</li>
          <li>Practice at your own pace, anywhere.</li>
        </ul>
        
        <p>Start practicing today with <Link href="/astrodeutsch" style={{color: "#00D4FF"}}>AstroDeutsch</Link> or take our <Link href="/deutschtest" style={{color: "#00D4FF"}}>German proficiency test</Link>.</p>
        
        <Link href="/blog/">← Back to Blog</Link>
      </div>
    </main>
  );
}
