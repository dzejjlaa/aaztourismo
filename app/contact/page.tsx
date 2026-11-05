import type { Metadata } from 'next'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = { title: 'Contact' }

const infos = [
  { icon: MapPin, label: 'Adresse', value: '12 Rue Didouche Mourad, Alger Centre, Algérie' },
  { icon: Phone, label: 'Téléphone', value: '+213 21 00 00 00' },
  { icon: Mail, label: 'Email', value: 'contact@aaztourisme.dz' },
  { icon: Clock, label: 'Horaires', value: 'Dim – Jeu : 8h30 – 17h00 · Sam : 9h00 – 13h00' },
]

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ sujet?: string }> }) {
  const { sujet } = await searchParams
  return (
    <>
      <PageHero title="Contactez-nous" subtitle="Une question, une réservation ? Notre équipe vous répond sous 24h." />
      <div className="mx-auto grid max-w-6xl gap-8 px-4 pt-8 lg:grid-cols-[1fr_380px]">
        <ContactForm initialSujet={sujet ?? ''} />
        <aside className="flex flex-col gap-4">
          <ul className="flex flex-col gap-4 rounded-lg border bg-card p-5">
            {infos.map(({ icon: Icon, label, value }) => (
              <li key={label} className="flex gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-semibold">{label}</span>
                  <span className="block text-sm text-muted-foreground">{value}</span>
                </span>
              </li>
            ))}
          </ul>
          <iframe
            title="Carte Google Maps — AAZ Tourisme, Alger"
            src="https://www.google.com/maps?q=Rue+Didouche+Mourad+Alger&output=embed"
            className="h-72 w-full rounded-lg border"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </aside>
      </div>
    </>
  )
}
