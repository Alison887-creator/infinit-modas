import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Infinit Modas | Moda feminina e acessórios em Santa Rosa – RS",
  description:
    "Infinit Modas: roupas femininas e acessórios com as tendências da estação, atendimento personalizado e novidades sempre. Desde 2016 no Centro de Santa Rosa – RS. Fale com a gente no WhatsApp.",
  keywords: [
    "Infinit Modas",
    "loja de roupas Santa Rosa",
    "moda feminina Santa Rosa RS",
    "acessórios femininos",
    "boutique Santa Rosa",
  ],
  openGraph: {
    title: "Infinit Modas | Moda feminina em Santa Rosa – RS",
    description: "Moda e tendências desde 2016. Roupas femininas e acessórios no Centro de Santa Rosa.",
    locale: "pt_BR",
    type: "website",
    siteName: "Infinit Modas",
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f2ec",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: site.name,
  description: "Loja de roupas femininas e acessórios em Santa Rosa – RS.",
  telephone: site.phones.map((p) => `+${p.wa}`),
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    addressCountry: "BR",
  },
  sameAs: [site.instagramUrl, site.threadsUrl, site.facebookUrl],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${cormorant.variable} ${manrope.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
