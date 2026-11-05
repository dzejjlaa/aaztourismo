'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Bus, Car, Check, Cog, Fuel, Plane, Snowflake, TrainFront, Users, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { bus, formatDZD, trains, vehicules, vols, type Trajet } from '@/lib/data'

const tabs = [
  { id: 'voiture', label: 'Location voiture', icon: Car },
  { id: 'vols', label: 'Vols intérieurs', icon: Plane },
  { id: 'trains', label: 'Trains', icon: TrainFront },
  { id: 'bus', label: 'Bus', icon: Bus },
] as const

type TabId = (typeof tabs)[number]['id']

const reserveHref = (label: string) => `/contact?sujet=${encodeURIComponent(`Réservation transport : ${label}`)}`

function TrajetList({ items }: { items: Trajet[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((t) => (
        <li key={t.id} className="flex flex-col gap-3 rounded-lg border bg-card p-4 sm:flex-row sm:items-center">
          <div className="flex-1">
            <p className="text-lg font-bold">
              {t.depart} <span className="text-muted-foreground">→</span> {t.arrivee}
            </p>
            <p className="text-sm text-muted-foreground">
              {t.compagnie} · Durée {t.duree} · {t.frequence}
            </p>
          </div>
          <p className="text-xl font-bold">{formatDZD(t.prix)}</p>
          <Link
            href={reserveHref(`${t.depart} → ${t.arrivee} (${t.compagnie})`)}
            className="rounded-md bg-primary px-4 py-2 text-center text-sm font-semibold text-primary-foreground hover:bg-navy-deep"
          >
            Réserver maintenant
          </Link>
        </li>
      ))}
    </ul>
  )
}

export function TransportTabs() {
  const [tab, setTab] = useState<TabId>('voiture')

  return (
    <div className="mx-auto max-w-6xl px-4 pt-6">
      <div role="tablist" aria-label="Moyens de transport" className="no-scrollbar flex gap-2 overflow-x-auto border-b">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            role="tab"
            id={`tab-${id}`}
            aria-selected={tab === id}
            aria-controls={`panel-${id}`}
            onClick={() => setTab(id)}
            className={cn(
              '-mb-px flex shrink-0 items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium',
              tab === id ? 'border-primary text-primary' : 'border-transparent hover:text-primary',
            )}
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
            {label}
          </button>
        ))}
      </div>

      <div role="tabpanel" id={`panel-${tab}`} aria-labelledby={`tab-${tab}`} className="pt-6">
        {tab === 'voiture' && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {vehicules.map((v) => (
              <article key={v.id} className="flex flex-col overflow-hidden rounded-lg border bg-card">
                <div className="relative aspect-[4/3]">
                  <Image src={v.image} alt={v.modele} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-4">
                  <p className="text-xs font-medium text-muted-foreground uppercase">{v.categorie}</p>
                  <h3 className="font-bold">{v.modele}</h3>
                  <ul className="grid grid-cols-2 gap-1.5 text-sm">
                    <li className="flex items-center gap-1.5"><Users className="h-4 w-4" aria-hidden="true" />{v.places} places</li>
                    <li className="flex items-center gap-1.5"><Fuel className="h-4 w-4" aria-hidden="true" />{v.carburant}</li>
                    <li className="flex items-center gap-1.5"><Cog className="h-4 w-4" aria-hidden="true" />{v.transmission}</li>
                    <li className="flex items-center gap-1.5">
                      <Snowflake className="h-4 w-4" aria-hidden="true" />
                      Clim
                      {v.climatisation ? <Check className="h-4 w-4 text-primary" aria-label="oui" /> : <X className="h-4 w-4" aria-label="non" />}
                    </li>
                  </ul>
                  <p className="mt-auto pt-2 text-right">
                    <span className="text-xl font-bold">{formatDZD(v.prix)}</span>
                    <span className="text-sm text-muted-foreground"> / jour</span>
                  </p>
                  <Link
                    href={reserveHref(v.modele)}
                    className="rounded-md bg-primary py-2 text-center text-sm font-semibold text-primary-foreground hover:bg-navy-deep"
                  >
                    Réserver maintenant
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
        {tab === 'vols' && <TrajetList items={vols} />}
        {tab === 'trains' && <TrajetList items={trains} />}
        {tab === 'bus' && <TrajetList items={bus} />}
      </div>
    </div>
  )
}
