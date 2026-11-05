import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: {
    default: 'AAZ Tourisme Algérie — Découvrez les 58 wilayas',
    template: '%s | AAZ Tourisme Algérie',
  },
  description:
    "Plateforme touristique pour découvrir l'Algérie : 58 wilayas, circuits, hébergements, transport, gastronomie, artisanat et événements.",
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#0b2a63',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="flex min-h-screen flex-col antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
