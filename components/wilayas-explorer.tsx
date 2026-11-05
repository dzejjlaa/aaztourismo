'use client'

import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { cn } from '@/lib/utils'
import { REGIONS, wilayas, type Region } from '@/lib/data'
import { WilayaCard } from '@/components/wilaya-card'

const normalize = (s: string) =>
  s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()

export function WilayasExplorer() {
  const [query, setQuery] = useState('')
  const [region, setRegion] = useState<Region | 'Toutes'>('Toutes')

  const results = useMemo(() => {
    const q = normalize(query.trim())
    return wilayas.filter(
      (w) =>
        (region === 'Toutes' || w.region === region) &&
        (!q || normalize(w.nom).includes(q) || String(w.numero) === q),
    )
  }, [query, region])

  return (
    <div className="mx-auto max-w-6xl px-4">
      <div className="-mt-6 rounded-lg bg-accent p-1 shadow-lg">
        <label className="flex items-center gap-3 rounded-md bg-card px-4 py-3">
          <Search className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
          <span className="sr-only">Rechercher une wilaya</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher une wilaya"
            className="w-full bg-transparent outline-none"
          />
        </label>
      </div>

      <div className="no-scrollbar mt-6 flex gap-2 overflow-x-auto" role="group" aria-label="Filtrer par région">
        {(['Toutes', ...REGIONS] as const).map((r) => (
          <button
            key={r}
            type="button"
            aria-pressed={region === r}
            onClick={() => setRegion(r)}
            className={cn(
              'shrink-0 rounded-full border px-4 py-2 text-sm',
              region === r ? 'border-primary bg-primary/5 font-semibold text-primary' : 'hover:bg-secondary',
            )}
          >
            {r}
          </button>
        ))}
      </div>

      <p className="mt-4 text-sm text-muted-foreground" aria-live="polite">
        {results.length} wilaya{results.length > 1 ? 's' : ''} trouvée{results.length > 1 ? 's' : ''}
      </p>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {results.map((w) => (
          <WilayaCard key={w.numero} w={w} />
        ))}
      </div>
    </div>
  )
}
