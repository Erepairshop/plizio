import type { Metadata } from "next";
import PostcardEditor from "@/components/postcard/PostcardEditor";

export const metadata: Metadata = {
  title: "Kostenloser digitaler Postkarten-Designer",
  description:
    "Gestalte eine persönliche Reisepostkarte mit eigenem Foto und Ortsstempel. Kostenlos herunterladen und teilen, ohne Anmeldung.",
  alternates: { canonical: "https://plizio.com/postcard/" },
  openGraph: {
    title: "Versende eine persönliche Postkarte von deiner Reise",
    description: "Eigenes Foto, individueller Ortsstempel, kostenloser Download und einfaches Teilen.",
    url: "https://plizio.com/postcard/",
    type: "website",
  },
};

export default function PostcardPage() {
  return <PostcardEditor />;
}
