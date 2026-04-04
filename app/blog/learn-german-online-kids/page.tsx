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
    },
    {
      "@type": "Question",
      name: "How much time should a child spend learning German online?",
      acceptedAnswer: { "@type": "Answer", text: "Even 10-15 minutes a day is highly effective if done consistently. Short, frequent sessions lead to better retention." }
    },
    {
      "@type": "Question",
      name: "Can I track my child's progress?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, our interactive tools provide instant feedback, helping you and your child see exactly where improvements are needed." }
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
        
        <h2>Why is German important for kids?</h2>
        <p>German is a core language in Europe and opens doors to a vast cultural history and economic opportunities. Learning it at a young age allows children to internalize language structures intuitively, which is much harder to do later in life.</p>
        
        <h2>Making German fun and interactive</h2>
        <p>Gone are the days when learning meant rote memorization from dusty textbooks. Our interactive platform focuses on:</p>
        <ul>
          <li><strong>Gamification:</strong> Fun games make learning feel like play.</li>
          <li><strong>Instant feedback:</strong> Correcting mistakes in real-time helps children learn from errors rather than being discouraged.</li>
          <li><strong>Structured modules:</strong> Consistent progress tracking ensures that children tackle topics according to their grade level (1-8).</li>
        </ul>
        
        <h2>The Plizio approach</h2>
        <p>Start practicing today with <Link href="/astrodeutsch" style={{color: "#00D4FF"}}>AstroDeutsch</Link>. Our platform adapts to your child's learning pace. If you are preparing for an exam or just want to brush up on basics, our <Link href="/deutschtest" style={{color: "#00D4FF"}}>German proficiency tests</Link> provide the perfect challenge.</p>
        
        <p>Whether you're just starting out or want to perfect grammar and vocabulary, consistency is the key. Use our interactive resources to turn study time into your child's favorite part of the day.</p>
        
        <div style={{ padding: "20px", background: "#12122A", borderRadius: "12px", borderLeft: "4px solid #B44DFF" }}>
            <strong>Quick tip:</strong> Try to listen to German children's music or watch shows together. When you combine digital learning with audio-visual input, you create a holistic learning environment.
        </div>

        <Link href="/blog/">← Back to Blog</Link>
      </div>
    </main>
  );
}
