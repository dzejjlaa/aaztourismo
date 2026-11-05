'use client'

import Image from 'next/image'
import { useState } from 'react'
import { CalendarDays, MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'
import { EVENEMENT_CATEGORIES, evenements, type EvenementCategorie } from '@/lib/data'
import { Reveal } from '@/components/reveal'

export function EvenementsExplorer() {
  const [cat, setCat] = useState<EvenementCategorie | 'Tous'>('Tous')
  const list = evenements.filter((e) => cat === 'Tous' || e.categorie === cat)

  return (
    <div className="mx-auto max-w-6xl px-4 pt-6">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrer les événements">
        {(['Tous', ...EVENEMENT_CATEGORIES] as const).map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={cat === c}
            onClick={() => setCat(c)}
            className={cn(
              'rounded-full border px-4 py-2 text-sm',
              cat === c ? 'border-primary bg-primary/5 font-semibold text-primary' : 'hover:bg-secondary',
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-4 pt-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((e) => (
          <article key={e.id} className="flex flex-col overflow-hidden rounded-lg border bg-card">
            <div className="relative aspect-[16/10]">
              <Image src={e.image} alt={e.nom} fill sizes="(min-width: 1024px) 33vw, 50vw" className="object-cover" />
              <span className="absolute top-3 left-3 rounded-md bg-primary px-2 py-1 text-xs font-semibold text-primary-foreground">
                {e.categorie}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-2 p-4">
              <h2 className="text-lg font-bold">{e.nom}</h2>
              <p className="flex items-center gap-1.5 text-sm text-muted-foreground"><MapPin className="h-4 w-4" aria-hidden="true" />{e.lieu}</p>
              <p className="flex items-center gap-1.5 text-sm font-medium"><CalendarDays className="h-4 w-4" aria-hidden="true" />{e.date}</p>
              <p className="text-sm">{e.description}</p>
              <Reveal label="Plus d'informations" openLabel="Réduire" className="mt-auto pt-2">
                {e.details}
              </Reveal>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
