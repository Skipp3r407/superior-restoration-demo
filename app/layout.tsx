import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ChatbotWidget } from "@/components/ChatbotWidget";
import { CustomCursor } from "@/components/CustomCursor";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { LeftSideCTA } from "@/components/LeftSideCTA";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { ScrollProgress } from "@/components/ScrollProgress";
import { company, services, socialLinks } from "@/lib/site";

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: company.name,
  url: "https://superiorrestorationsfl.com",
  telephone: company.phone,
  email: company.email,
  image: `https://superiorrestorationsfl.com${company.logo}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "1025 S Semoran Blvd Suite 1071",
    addressLocality: "Winter Park",
    addressRegion: "FL",
    postalCode: "32792",
    addressCountry: "US"
  },
  geo: { "@type": "GeoCoordinates", latitude: 28.5821505, longitude: -81.3062866 },
  hasMap: company.addressMapsHref,
  areaServed: ["Orlando", "Winter Park", "Oviedo", "Kissimmee", "Sanford", "Central Florida"].map((name) => ({ "@type": "Place", name })),
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59"
  },
  sameAs: socialLinks.map((link) => link.href.split("?")[0]),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Restoration services",
    itemListElement: services.map((service) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: service.title } }))
  }
};
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "Superior Restoration Services | Central Florida Water, Fire, Mold & Storm",
    template: "%s | Superior Restoration Services"
  },
  description:
    "Superior Restoration Services provides Central Florida water damage restoration, fire cleanup, mold remediation, storm damage repair, emergency cleanup, and commercial restoration.",
  metadataBase: new URL("https://superiorrestorationsfl.com"),
  alternates: { canonical: "./" },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: company.icon, type: "image/png" }
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }]
  },
  openGraph: {
    images: [
      {
        url: company.logo,
        width: 392,
        height: 92,
        alt: "Superior Restoration Services logo"
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} type="application/ld+json" />
        <CustomCursor />
        <ScrollProgress />
        <InteractiveBackground />
        <Header />
        <LeftSideCTA />
        <main className="pb-40 md:pb-0">{children}</main>
        <Footer />
        <MobileStickyCTA />
        <ChatbotWidget />
      </body>
    </html>
  );
}
