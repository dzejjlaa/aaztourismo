import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'

const columns = [
  {
    title: 'Découvrir',
    links: [
      { href: '/wilayas', label: 'Les 58 Wilayas' },
      { href: '/circuits', label: 'Circuits Touristiques' },
      { href: '/evenements', label: 'Événements' },
    ],
  },
  {
    title: 'Voyager',
    links: [
      { href: '/hebergement', label: 'Hébergement' },
      { href: '/transport', label: 'Transport' },
      { href: '/contact', label: 'Nous contacter' },
    ],
  },
  {
    title: 'Culture',
    links: [
      { href: '/gastronomie', label: 'Gastronomie' },
      { href: '/artisanat', label: 'Artisanat' },
    ],
  },
]

const socials = ['Facebook', 'Instagram', 'YouTube', 'TikTok']

export function SiteFooter() {
  return (
    <footer className="mt-16 bg-foreground text-background">
      <div className="bg-primary py-10 text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">Économisez du temps, voyagez mieux</h2>
            <p className="text-primary-foreground/80">
              Recevez nos meilleures offres et idées de voyage en Algérie.
            </p>
          </div>
          <Link
            href="/contact?sujet=Newsletter"
            className="w-fit rounded-md bg-accent px-5 py-3 font-semibold text-accent-foreground hover:bg-accent/90"
          >
            {"Je m'abonne"}
          </Link>
        </div>
      </div>
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4">
        <div className="flex flex-col gap-3">
          <p className="text-xl font-extrabold">
            AAZ Tourisme<span className="text-accent">.</span>
          </p>
          <ul className="flex flex-col gap-2 text-sm text-background/80">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              12 Rue Didouche Mourad, Alger Centre, Algérie
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
              <a href="tel:+213210000000" className="hover:underline">
                +213 21 00 00 00
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
              <a href="mailto:contact@aaztourisme.dz" className="hover:underline">
                contact@aaztourisme.dz
              </a>
            </li>
          </ul>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="mb-3 font-semibold">{col.title}</h3>
            <ul className="flex flex-col gap-2 text-sm text-background/80">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-accent hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-background/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-background/70 md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-wrap gap-2" aria-label="Réseaux sociaux">
            {socials.map((s) => (
              <li key={s}>
                <a
                  href="#"
                  className="rounded-full border border-background/25 px-3 py-1 hover:border-accent hover:text-accent"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
          <p>© 2026 AAZ Tourisme Algérie — Réalisé par Chiraz Bitam. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
