import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { artisanat } from '@/lib/data'

export const metadata: Metadata = { title: 'Artisanat' }

export default function ArtisanatPage() {
  return (
    <>
      <PageHero title="Artisanat algérien" subtitle="Des savoir-faire transmis de génération en génération." />
      <div className="mx-auto grid max-w-6xl gap-4 px-4 pt-8 sm:grid-cols-2 lg:grid-cols-3">
        {artisanat.map((a) => (
          <article key={a.id} className="flex flex-col overflow-hidden rounded-lg border bg-card">
            <div className="relative aspect-[4/3]">
              <Image src={a.image} alt={a.nom} fill sizes="(min-width: 1024px) 33vw, 50vw" className="object-cover" />
            </div>
            <div className="flex flex-1 flex-col gap-2 p-4">
              <p className="text-xs font-medium text-muted-foreground uppercase">{a.region}</p>
              <h2 className="text-lg font-bold">{a.nom}</h2>
              <p className="text-sm">{a.description}</p>
              <Reveal label="En savoir plus" openLabel="Réduire" className="mt-auto pt-2">
                {a.details}
              </Reveal>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
