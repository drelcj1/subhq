import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "SubHQ - Nigeria's #1 Digital Payment Platform",
  description:
    "Buy airtime, data, pay bills, and access digital services instantly. Secure payments, best rates, 24/7 support.",
  keywords: "Nigeria, airtime, data, bills, payment, digital services, MTN, Glo, Airtel, 9mobile",
  authors: [{ name: "SubHQ Team" }],
  creator: "SubHQ",
  publisher: "SubHQ",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://subhq.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SubHQ - Nigeria's #1 Digital Payment Platform",
    description:
      "Buy airtime, data, pay bills, and access digital services instantly. Secure payments, best rates, 24/7 support.",
    url: "https://subhq.com",
    siteName: "SubHQ",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SubHQ - Nigeria's #1 Digital Payment Platform",
    description:
      "Buy airtime, data, pay bills, and access digital services instantly. Secure payments, best rates, 24/7 support.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "Next.js",
  applicationName: "SubHQ",
  referrer: "origin-when-cross-origin",
  category: "technology",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
