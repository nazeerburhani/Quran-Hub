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
    default: `${SITE.name} — Learn Quran Online with Certified Tutors`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Live one-on-one online Quran classes for kids and adults. Noorani Qaida, Tajweed, Hifz, Tafseer and more with certified male and female tutors. Free 3-day trial, no credit card.",
  keywords: [
    "online quran academy",
    "online quran classes",
    "learn quran online",
    "online quran tutor",
    "quran classes for kids",
    "online tajweed classes",
    "online hifz classes",
    "noorani qaida online",
    "female quran teacher",
  ],
  alternates: {
    canonical: SITE.url,
    languages: {
      en: SITE.url,
      ur: `${SITE.url}/ur`,
      ar: `${SITE.url}/ar`,
    },
  },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — Learn Quran Online with Certified Tutors`,
    description:
      "Live one-on-one online Quran classes for kids and adults with certified male and female tutors. Free 3-day trial.",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: SITE.name }],
  },
  twitter: {
    card: "summary",
    title: `${SITE.name} — Learn Quran Online`,
    description:
      "Live one-on-one online Quran classes for kids and adults. Free 3-day trial, no credit card.",
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
    <html lang="en" dir="ltr" suppressHydrationWarning>
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
