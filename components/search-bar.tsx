'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { BedDouble, CalendarDays, ChevronDown, Minus, Plus, User } from 'lucide-react'

type Props = {
  initialDestination?: string
  initialArrivee?: string
  initialDepart?: string
  onSearch?: (values: { destination: string; arrivee: string; depart: string }) => void
  showOccupancy?: boolean
}

export function SearchBar({
  initialDestination = '',
  initialArrivee = '',
  initialDepart = '',
  onSearch,
  showOccupancy = true,
}: Props) {
  const router = useRouter()
  const [destination, setDestination] = useState(initialDestination)
  const [arrivee, setArrivee] = useState(initialArrivee)
  const [depart, setDepart] = useState(initialDepart)
  const [occOpen, setOccOpen] = useState(false)
  const [occ, setOcc] = useState({ adultes: 2, enfants: 0, chambres: 1 })

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSearch) {
      onSearch({ destination, arrivee, depart })
      return
    }
    const params = new URLSearchParams()
    if (destination) params.set('destination', destination)
    if (arrivee) params.set('arrivee', arrivee)
    if (depart) params.set('depart', depart)
    router.push(`/hebergement?${params.toString()}`)
  }

  const change = (key: keyof typeof occ, delta: number) =>
    setOcc((o) => ({ ...o, [key]: Math.max(key === 'enfants' ? 0 : 1, o[key] + delta) }))

  return (
    <form
      onSubmit={submit}
      role="search"
      className="flex flex-col gap-1 rounded-lg bg-accent p-1 shadow-lg lg:flex-row"
    >
      <label className="flex flex-1 items-center gap-3 rounded-md bg-card px-4 py-2.5">
        <BedDouble className="h-6 w-6 shrink-0 text-muted-foreground" aria-hidden="true" />
        <span className="flex flex-1 flex-col">
          <span className="text-xs text-muted-foreground">Destination</span>
          <input
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Où allez-vous ?"
            className="w-full bg-transparent text-sm font-medium outline-none placeholder:text-foreground/70"
          />
        </span>
      </label>

      <div className="flex items-center gap-3 rounded-md bg-card px-4 py-2.5 lg:w-80">
        <CalendarDays className="h-6 w-6 shrink-0 text-muted-foreground" aria-hidden="true" />
        <label className="flex flex-1 flex-col">
          <span className="text-xs text-muted-foreground">Date d’arrivée</span>
          <input
            type="date"
            value={arrivee}
            onChange={(e) => setArrivee(e.target.value)}
            className="bg-transparent text-sm font-medium outline-none"
          />
        </label>
        <span aria-hidden="true">—</span>
        <label className="flex flex-1 flex-col">
          <span className="text-xs text-muted-foreground">Date de départ</span>
          <input
            type="date"
            value={depart}
            min={arrivee || undefined}
            onChange={(e) => setDepart(e.target.value)}
            className="bg-transparent text-sm font-medium outline-none"
          />
        </label>
      </div>

      {showOccupancy && (
        <div className="relative lg:w-72">
          <button
            type="button"
            aria-expanded={occOpen}
            onClick={() => setOccOpen((o) => !o)}
            className="flex h-full w-full items-center gap-3 rounded-md bg-card px-4 py-2.5 text-left"
          >
            <User className="h-6 w-6 shrink-0 text-muted-foreground" aria-hidden="true" />
            <span className="flex flex-1 flex-col">
              <span className="text-xs text-muted-foreground">Voyageurs</span>
              <span className="text-sm font-medium">
                {occ.adultes} adultes · {occ.enfants} enfants · {occ.chambres} chambre
                {occ.chambres > 1 ? 's' : ''}
              </span>
            </span>
            <ChevronDown className="h-4 w-4" aria-hidden="true" />
          </button>
          {occOpen && (
            <div className="absolute top-full right-0 left-0 z-20 mt-2 rounded-md border bg-card p-4 shadow-xl">
              {(
                [
                  ['adultes', 'Adultes'],
                  ['enfants', 'Enfants'],
                  ['chambres', 'Chambres'],
                ] as const
              ).map(([key, label]) => (
                <div key={key} className="flex items-center justify-between py-2">
                  <span className="text-sm font-medium">{label}</span>
                  <div className="flex items-center gap-3 rounded-md border px-2 py-1">
                    <button type="button" aria-label={`Retirer ${label}`} onClick={() => change(key, -1)} className="p-1 text-primary">
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-5 text-center text-sm">{occ[key]}</span>
                    <button type="button" aria-label={`Ajouter ${label}`} onClick={() => change(key, 1)} className="p-1 text-primary">
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={() => setOccOpen(false)}
                className="mt-2 w-full rounded-md border border-primary py-2 text-sm font-semibold text-primary"
              >
                OK
              </button>
            </div>
          )}
        </div>
      )}

      <button
        type="submit"
        className="rounded-md bg-primary px-8 py-3 text-lg font-semibold text-primary-foreground hover:bg-navy-deep"
      >
        Rechercher
      </button>
    </form>
  )
}
