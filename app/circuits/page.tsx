import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CalendarDays, MapPin } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { circuits, formatDZD } from '@/lib/data'

export const metadata: Metadata = { title: 'Circuits Touristiques' }

export default function CircuitsPage() {
  return (
    <>
      <PageHero title="Circuits Touristiques" subtitle="Des séjours organisés pour découvrir l’Algérie autrement." />
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 pt-8">
        {circuits.map((c) => (
          <article key={c.id} className="grid overflow-hidden rounded-lg border bg-card md:grid-cols-[280px_1fr_220px]">
            <div className="relative aspect-[4/3] md:aspect-auto md:h-full">
              <Image src={c.image} alt={c.nom} fill sizes="(min-width: 768px) 280px, 100vw" className="object-cover" />
            </div>
            <div className="flex flex-col gap-2 p-4">
              <h2 className="text-xl font-bold text-primary">{c.nom}</h2>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><CalendarDays className="h-4 w-4" aria-hidden="true" /> {c.duree} jours</span>
                <span className="flex items-center gap-1"><MapPin className="h-4 w-4" aria-hidden="true" /> {c.wilayas.length} wilayas</span>
              </div>
              <p className="text-sm">{c.description}</p>
              <p className="text-xs text-muted-foreground">{c.wilayas.join(' • ')}</p>
              <Reveal label="Détails" openLabel="Masquer les détails" className="mt-2">
                <ol className="list-decimal space-y-1 pl-5">
                  {c.programme.map((p) => <li key={p}>{p}</li>)}
                </ol>
                <p className="mt-2 text-muted-foreground">Inclus : hébergement, petits-déjeuners, transport et guide francophone.</p>
              </Reveal>
            </div>
            <div className="flex flex-col justify-end gap-2 border-t p-4 md:border-t-0 md:border-l md:text-right">
              <p className="text-sm text-muted-foreground">{c.duree} jours, par personne</p>
              <p className="text-2xl font-bold">{formatDZD(c.prix)}</p>
              <Link
                href={`/contact?sujet=${encodeURIComponent(`Réservation circuit : ${c.nom}`)}`}
                className="rounded-md bg-primary py-2.5 text-center font-semibold text-primary-foreground hover:bg-navy-deep"
              >
                Réserver
              </Link>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
