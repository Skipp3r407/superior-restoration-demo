import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ChatbotWidget } from "@/components/ChatbotWidget";
import { CustomCursor } from "@/components/CustomCursor";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { LeftSideCTA } from "@/components/LeftSideCTA";
import { LoadingScreen } from "@/components/LoadingScreen";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { ScrollProgress } from "@/components/ScrollProgress";
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
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "192x192", type: "image/png" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  },
  openGraph: {
    images: [
      {
        url: "/brand/superior-main-logo.png",
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
        <LoadingScreen />
        <CustomCursor />
        <ScrollProgress />
        <InteractiveBackground />
        <Header />
        <LeftSideCTA />
        <main className="pb-24 md:pb-0">{children}</main>
        <Footer />
        <MobileStickyCTA />
        <ChatbotWidget />
      </body>
    </html>
  );
}
