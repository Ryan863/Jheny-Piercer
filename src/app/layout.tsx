import type { Metadata } from "next";
import "./globals.css";
import { ADDRESS_TEXT, FORMATTED_PHONE } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL("https://jhenypiercer.com.br"),
  title: "Jheny Piercer | Body Piercing & Joalheria de Alto Padrão em Rondonópolis",
  description:
    "Body Piercer profissional premiada 6x com mais de 20 certificações em Rondonópolis - MT. Perfurações seguras em titânio cirúrgico ASTM F-136, laserterapia cicatricial, microdermal e lobuloplastia sem corte.",
  keywords: [
    "body piercer rondonopolis",
    "jheny piercer",
    "piercing orelha rondonopolis",
    "joalheria titanio astm f-136",
    "lobuloplastia sem corte rondonopolis",
    "laserterapia piercing cicatrizacao",
    "microdermal rondonopolis",
    "body piercing de luxo",
    "biosseguranca hospitalar piercing",
  ],
  authors: [{ name: "Jheny Piercer" }],
  creator: "Jheny Piercer",
  openGraph: {
    title: "Jheny Piercer | Body Piercing & Joalheria de Alto Padrão",
    description:
      "A arte do body piercing com elegância, precisão e biossegurança. 6x Premiada em Rondonópolis - MT. Agende pelo WhatsApp.",
    url: "https://jhenypiercer.com.br",
    siteName: "Jheny Piercer Studio",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/jheny-hero.png",
        width: 1200,
        height: 630,
        alt: "Jheny Piercer - Body Piercing de Alto Padrão em Rondonópolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jheny Piercer | Body Piercing & Joalheria de Alto Padrão",
    description:
      "A arte do body piercing com elegância, precisão e biossegurança. 6x Premiada em Rondonópolis - MT.",
    images: ["/images/jheny-hero.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: "Jheny Piercer - Body Piercing & Joalheria de Alto Padrão",
    image: "https://jhenypiercer.com.br/images/jheny-hero.png",
    telephone: "+556699162937",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Alcides Rodrigues Junior, 1075 - QD 37, LT 1075",
      addressLocality: "Rondonópolis",
      addressRegion: "MT",
      postalCode: "78715-702",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -16.4674,
      longitude: -54.6366,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "48",
    },
  };

  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#060607] text-[#ebe7df] antialiased">
        {children}
      </body>
    </html>
  );
}
