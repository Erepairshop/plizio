import type { Metadata } from "next";
import PostcardEditor from "@/components/postcard/PostcardEditor";

export const metadata: Metadata = {
  title: "Kostenloser digitaler Postkarten-Designer",
  description:
    "Gestalte eine persönliche Reisepostkarte mit eigenem Foto und Ortsstempel. Kostenlos herunterladen und teilen, ohne Anmeldung.",
  alternates: {
    canonical: "https://plizio.com/postcard/",
    languages: {
      "de-DE": "https://plizio.com/postcard/?lang=de",
      "hu-HU": "https://plizio.com/postcard/?lang=hu",
      "en-GB": "https://plizio.com/postcard/?lang=en",
      "ro-RO": "https://plizio.com/postcard/?lang=ro",
    },
  },
  openGraph: {
    title: "Versende eine persönliche Postkarte von deiner Reise",
    description: "Eigenes Foto, individueller Ortsstempel, kostenloser Download und einfaches Teilen.",
    url: "https://plizio.com/postcard/",
    type: "website",
    locale: "de_DE",
    alternateLocale: ["hu_HU", "en_GB", "ro_RO"],
    images: [{
      url: "https://plizio.com/postcard-social-preview.jpg",
      width: 1200,
      height: 630,
      alt: "Digitaler Plizio Postkarten-Designer",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Versende eine persönliche Postkarte von deiner Reise",
    description: "Gestalte eine persönliche Reisepostkarte und teile sie als Bild oder privaten Link.",
    images: ["https://plizio.com/postcard-social-preview.jpg"],
  },
};

export default function PostcardPage() {
  return <PostcardEditor />;
}
