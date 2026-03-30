import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pipe Flow – Logic Puzzle Game | Plizio",
  description: "Rotate pipes, connect the source to the sink, and solve 10 logic levels in your browser.",
  alternates: {
    canonical: "https://plizio.com/pipeflow/",
  },
  openGraph: {
    title: "Pipe Flow – Logic Puzzle Game | Plizio",
    description: "A clean pipe-rotation logic puzzle with 10 levels and a simple source-to-sink flow mechanic.",
    url: "https://plizio.com/pipeflow/",
    siteName: "Plizio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pipe Flow – Logic Puzzle Game | Plizio",
    description: "Rotate pipes and connect the flow across 10 levels.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  name: "Pipe Flow",
  description: "Rotate pipes, connect the source to the sink, and solve 10 browser-based logic levels.",
  url: "https://plizio.com/pipeflow/",
  genre: ["Puzzle", "Logic", "Brain Training"],
  inLanguage: ["en", "de", "hu", "ro"],
  operatingSystem: "Web Browser",
  applicationCategory: "Game",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
