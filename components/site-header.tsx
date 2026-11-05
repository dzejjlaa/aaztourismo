'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  BedDouble,
  CalendarDays,
  Car,
  CircleHelp,
  Gem,
  House,
  Mail,
  MapPin,
  Route,
  UtensilsCrossed,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/', label: 'Accueil', icon: House },
  { href: '/wilayas', label: 'Les 58 Wilayas', icon: MapPin },
  { href: '/circuits', label: 'Circuits Touristiques', icon: Route },
  { href: '/hebergement', label: 'Hébergement', icon: BedDouble },
  { href: '/transport', label: 'Transport', icon: Car },
  { href: '/gastronomie', label: 'Gastronomie', icon: UtensilsCrossed },
  { href: '/artisanat', label: 'Artisanat', icon: Gem },
  { href: '/evenements', label: 'Événements', icon: CalendarDays },
  { href: '/contact', label: 'Contact', icon: Mail },
]

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="text-2xl font-extrabold tracking-tight">
          AAZ Tourisme<span className="text-accent">.</span>
        </Link>
        <div className="flex items-center gap-1 sm:gap-3">
          <span className="hidden rounded-md px-3 py-2 text-sm font-semibold hover:bg-white/10 sm:inline-block">
            DZD
          </span>
          <span
            className="hidden h-6 w-6 overflow-hidden rounded-full border border-white/40 sm:flex"
            role="img"
            aria-label="Langue : Français (Algérie)"
          >
            <span className="h-full w-1/2 bg-[#006233]" />
            <span className="relative h-full w-1/2 bg-white">
              <span className="absolute top-1/2 -left-1 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#d21034]" />
            </span>
          </span>
          <Link
            href="/contact"
            aria-label="Aide"
            className="hidden rounded-md p-2 hover:bg-white/10 sm:inline-flex"
          >
            <CircleHelp className="h-5 w-5" />
          </Link>
          <Link
            href="/contact?sujet=Proposer%20un%20%C3%A9tablissement"
            className="hidden rounded-md px-3 py-2 text-sm font-semibold hover:bg-white/10 lg:inline-block"
          >
            Proposer votre établissement
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-white bg-white px-3 py-1.5 text-sm font-semibold text-primary hover:bg-secondary"
          >
            {"S'inscrire"}
          </Link>
          <Link
            href="/contact"
            className="hidden rounded-md border border-white bg-white px-3 py-1.5 text-sm font-semibold text-primary hover:bg-secondary sm:inline-block"
          >
            Se connecter
          </Link>
        </div>
      </div>
      <nav aria-label="Navigation principale" className="mx-auto max-w-6xl px-4 pb-3">
        <ul className="no-scrollbar flex gap-1 overflow-x-auto">
          {navItems.map(({ href, label, icon: Icon }) => {
            const active = href === '/' ? pathname === '/' : pathname.startsWith(href)
            return (
              <li key={href} className="shrink-0">
                <Link
                  href={href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm whitespace-nowrap transition-colors',
                    active ? 'border-white bg-white/10' : 'border-transparent hover:bg-white/10',
                  )}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
