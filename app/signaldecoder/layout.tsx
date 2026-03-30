import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signal Decoder | Plizio",
  description: "Master pattern recognition and logical sequences. Decode mysterious signals in this futuristic brain training game.",
  alternates: {
    canonical: "https://plizio.com/signaldecoder/",
  },
  openGraph: {
    title: "Signal Decoder | Plizio",
    description: "Crack the code and decode patterns in Signal Decoder.",
    url: "https://plizio.com/signaldecoder/",
    siteName: "Plizio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Signal Decoder | Plizio",
    description: "Can you decode the futuristic signals?",
  },
};

export default function SignalDecoderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
