import type { Metadata } from "next";
import PostcardEditor from "@/components/postcard/PostcardEditor";

export const metadata: Metadata = {
  title: "Ingyenes digitális képeslap készítő",
  description:
    "Készíts személyes utazási képeslapot saját fotóval és helybélyegzővel. Letöltés és megosztás regisztráció nélkül.",
  alternates: { canonical: "https://plizio.com/postcard/" },
  openGraph: {
    title: "Küldj személyes képeslapot az utazásodról",
    description: "Saját fotó, egyedi helybélyegző, ingyenes letöltés és megosztás.",
    url: "https://plizio.com/postcard/",
    type: "website",
  },
};

export default function PostcardPage() {
  return <PostcardEditor />;
}
