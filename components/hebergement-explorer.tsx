'use client'

import { useMemo, useState } from 'react'
import { SearchBar } from '@/components/search-bar'
import { HebergementCard } from '@/components/hebergement-card'
import {
  EQUIPEMENTS,
  HEBERGEMENT_TYPES,
  hebergements,
  type Equipement,
  type HebergementType,
} from '@/lib/data'

const normalize = (s: string) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()

export function HebergementExplorer({
  initialDestination,
  initialArrivee,
  initialDepart,
}: {
  initialDestination: string
  initialArrivee: string
  initialDepart: string
}) {
  const [destination, setDestination] = useState(initialDestination)
  const [types, setTypes] = useState<HebergementType[]>([])
  const [equip, setEquip] = useState<Equipement[]>([])
  const [min, setMin] = useState('')
  const [max, setMax] = useState('')

  const toggle = <T,>(list: T[], v: T) => (list.includes(v) ? list.filter((x) => x !== v) : [...list, v])

  const results = useMemo(() => {
    const q = normalize(destination.trim())
    return hebergements.filter(
      (h) =>
        (!q || normalize(h.ville).includes(q) || normalize(h.nom).includes(q)) &&
        (types.length === 0 || types.includes(h.type)) &&
        equip.every((e) => h.equipements.includes(e)) &&
        (!min || h.prix >= Number(min)) &&
        (!max || h.prix <= Number(max)),
    )
  }, [destination, types, equip, min, max])

  const reset = () => {
    setTypes([])
    setEquip([])
    setMin('')
    setMax('')
  }

  return (
    <div className="mx-auto max-w-6xl px-4">
      <div className="-mt-1 pt-2">
        <SearchBar
          showOccupancy={false}
          initialDestination={initialDestination}
          initialArrivee={initialArrivee}
          initialDepart={initialDepart}
          onSearch={({ destination: d }) => setDestination(d)}
        />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[260px_1fr]">
        <aside className="h-fit rounded-lg border bg-card" aria-label="Filtres">
          <div className="flex items-center justify-between border-b p-4">
            <h2 className="font-bold">Filtrer par</h2>
            <button type="button" onClick={reset} className="text-sm text-primary hover:underline">
              Réinitialiser
            </button>
          </div>
          <fieldset className="border-b p-4">
            <legend className="mb-2 text-sm font-semibold">Type d’hébergement</legend>
            {HEBERGEMENT_TYPES.map((t) => (
              <label key={t} className="flex items-center gap-2 py-1 text-sm">
                <input type="checkbox" checked={types.includes(t)} onChange={() => setTypes((l) => toggle(l, t))} className="h-4 w-4 accent-primary" />
                {t}
              </label>
            ))}
          </fieldset>
          <fieldset className="border-b p-4">
            <legend className="mb-2 text-sm font-semibold">Prix par nuit (DA)</legend>
            <div className="flex gap-2">
              <label className="flex-1 text-xs text-muted-foreground">
                Min
                <input type="number" min={0} value={min} onChange={(e) => setMin(e.target.value)} placeholder="Tous" className="mt-1 w-full rounded-md border bg-background px-2 py-1.5 text-sm text-foreground" />
              </label>
              <label className="flex-1 text-xs text-muted-foreground">
                Max
                <input type="number" min={0} value={max} onChange={(e) => setMax(e.target.value)} placeholder="Tous" className="mt-1 w-full rounded-md border bg-background px-2 py-1.5 text-sm text-foreground" />
              </label>
            </div>
          </fieldset>
          <fieldset className="p-4">
            <legend className="mb-2 text-sm font-semibold">Équipements</legend>
            {EQUIPEMENTS.map((e) => (
              <label key={e} className="flex items-center gap-2 py-1 text-sm">
                <input type="checkbox" checked={equip.includes(e)} onChange={() => setEquip((l) => toggle(l, e))} className="h-4 w-4 accent-primary" />
                {e}
              </label>
            ))}
          </fieldset>
        </aside>

        <section aria-live="polite">
          <h2 className="mb-4 text-xl font-bold">
            {destination ? `${destination} : ` : ''}
            {results.length} établissement{results.length > 1 ? 's' : ''} trouvé{results.length > 1 ? 's' : ''}
          </h2>
          {results.length === 0 ? (
            <p className="rounded-lg border bg-card p-6 text-muted-foreground">
              Aucun hébergement ne correspond à vos critères. Essayez d’élargir votre recherche.
            </p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {results.map((h) => <HebergementCard key={h.id} h={h} detailed />)}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
