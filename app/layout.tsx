import type { Metadata, Viewport } from "next";
import { Amiri, Fraunces, Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { SITE } from "@/lib/site";
import { LocaleProvider } from "@/components/layout/LanguageSwitcher";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import ChatWidget from "@/components/layout/ChatWidget";
import StickyMobileCTA from "@/components/home/StickyMobileCTA";
import { Analytics } from "@/lib/analytics";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/** High-contrast serif display face for headlines (editorial, premium). */
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Online Quran Academy | Learn Quran Online`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "QuranHub is an online Quran academy with live 1-on-1 Quran classes for kids & adults — Noorani Qaida, Tajweed, Hifz, Tafseer & Arabic with qualified male & female tutors. Free 3-day trial, no credit card.",
  keywords: [
    "online quran academy",
    "online quran classes",
    "learn quran online",
    "online quran tutor",
    "quran classes for kids",
    "online quran classes for kids",
    "quran classes for adults",
    "learn quran online for adults",
    "online tajweed classes",
    "tajweed course online",
    "online hifz classes",
    "quran memorization online",
    "noorani qaida online",
    "female quran teacher",
    "female quran teacher online",
    "quran teacher online",
    "online quran school",
    "quran tafseer online",
    "learn arabic online",
    "ijazah program online",
    "quran classes for sisters",
    "online quran academy usa",
    "online quran classes uk",
  ],
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — Online Quran Academy | Learn Quran Online`,
    description:
      "Live 1-on-1 online Quran classes for kids & adults — Noorani Qaida, Tajweed, Hifz & Tafseer with qualified male & female tutors. Free 3-day trial.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "QuranHub — Online Quran Academy: live 1-on-1 Quran classes for kids & adults",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Online Quran Academy | Learn Quran Online`,
    description:
      "Live 1-on-1 online Quran classes for kids & adults. Qualified tutors, free 3-day trial, no credit card.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf6ef" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1f1e" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US" dir="ltr" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${fraunces.variable} ${amiri.variable} bg-sand-50 font-sans text-ink antialiased transition-colors duration-300 dark:bg-night dark:text-sand-100`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <LocaleProvider>
            <a href="#main" className="skip-link">
              Skip to content
            </a>
            <Header />
            <main id="main">{children}</main>
            <Footer />
            <StickyMobileCTA />
            <WhatsAppFloat />
            <ChatWidget />
          </LocaleProvider>
        </ThemeProvider>
        <Analytics />
        <OrganizationJsonLd />
        <WebSiteJsonLd />
      </body>
    </html>
  );
}
