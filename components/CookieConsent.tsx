"use client";
import Script from "next/script";

const GA_ID = "G-BR2WCCRFG0";

export default function CookieConsent() {
  return (
    <>
      <Script
        id="ga-bootstrap"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { anonymize_ip: true });
          `,
        }}
      />
      <Script
        id="ga-loader"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
    </>
  );
}
