'use client'

import Image from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { plats, type Plat } from '@/lib/data'
import { Reveal } from '@/components/reveal'

const categories = ['Plats principaux', 'Pâtisseries', 'Par région'] as const
type Cat = (typeof categories)[number]

function PlatCard({ p }: { p: Plat }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border bg-card">
      <div className="relative aspect-[4/3]">
        <Image src={p.image} alt={p.nom} fill sizes="(min-width: 1024px) 33vw, 50vw" className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-lg font-bold">{p.nom}</h3>
          <span className="rounded-full bg-secondary px-2 py-0.5 text-xs">{p.region}</span>
        </div>
        <p className="text-sm text-muted-foreground">{p.description}</p>
        <Reveal label="Découvrir la recette" openLabel="Masquer la recette" className="mt-auto pt-2">
          <ol className="list-decimal space-y-1 pl-5">
            {p.recette.map((s) => <li key={s}>{s}</li>)}
          </ol>
        </Reveal>
      </div>
    </article>
  )
}

export function GastronomieExplorer() {
  const [cat, setCat] = useState<Cat>('Plats principaux')
  const regions = Array.from(new Set(plats.map((p) => p.region)))

  return (
    <div className="mx-auto max-w-6xl px-4 pt-6">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Catégories">
        {categories.map((c) => (
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

      {cat === 'Par région' ? (
        <div className="flex flex-col gap-10 pt-6">
          {regions.map((r) => (
            <section key={r}>
              <h2 className="mb-4 text-2xl font-bold">{r}</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {plats.filter((p) => p.region === r).map((p) => <PlatCard key={p.id} p={p} />)}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="grid gap-4 pt-6 sm:grid-cols-2 lg:grid-cols-3">
          {plats.filter((p) => p.categorie === cat).map((p) => <PlatCard key={p.id} p={p} />)}
        </div>
      )}
    </div>
  )
}
