'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Heart } from 'lucide-react'
import { cn } from '@/lib/utils'
import { formatDZD, noteLabel, type Hebergement } from '@/lib/data'

export function RatingBadge({ note, avis }: { note: number; avis: number }) {
  return (
    <div className="flex items-center gap-2">
      <span className="rounded-md rounded-bl-none bg-primary px-1.5 py-1 text-sm font-bold text-primary-foreground">
        {note.toFixed(1)}
      </span>
      <span className="text-sm leading-tight">
        {noteLabel(note)}
        <span className="block text-xs text-muted-foreground">{avis} commentaires</span>
      </span>
    </div>
  )
}

export function FavoriteButton({ name }: { name: string }) {
  const [fav, setFav] = useState(false)
  return (
    <button
      type="button"
      aria-pressed={fav}
      aria-label={fav ? `Retirer ${name} des favoris` : `Ajouter ${name} aux favoris`}
      onClick={() => setFav((f) => !f)}
      className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-card shadow"
    >
      <Heart className={cn('h-5 w-5', fav ? 'fill-[#d21034] text-[#d21034]' : 'text-foreground')} />
    </button>
  )
}

export function HebergementCard({ h, detailed = false }: { h: Hebergement; detailed?: boolean }) {
  const [open, setOpen] = useState(false)

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border bg-card shadow-sm">
      <div className="relative aspect-[5/4]">
        <Image src={h.image} alt={h.nom} fill sizes="(min-width: 1024px) 25vw, 80vw" className="object-cover" />
        <FavoriteButton name={h.nom} />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-3">
        <div>
          <p className="text-xs font-medium text-muted-foreground uppercase">{h.type}</p>
          <h3 className="font-bold">{h.nom}</h3>
          <p className="text-sm text-muted-foreground">{h.ville}, Algérie</p>
        </div>
        <RatingBadge note={h.note} avis={h.avis} />
        {detailed && (
          <>
            <p className="text-sm">{h.description}</p>
            <ul className="flex flex-wrap gap-1.5" aria-label="Équipements">
              {h.equipements.map((e) => (
                <li key={e} className="rounded-full bg-secondary px-2 py-0.5 text-xs">
                  {e}
                </li>
              ))}
            </ul>
          </>
        )}
        <p className="mt-auto pt-2 text-right text-sm text-muted-foreground">
          À partir de <span className="text-lg font-bold text-foreground">{formatDZD(h.prix)}</span>
          <span className="block text-xs">par nuit</span>
        </p>
        {detailed && (
          <>
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className="rounded-md bg-primary py-2 text-sm font-semibold text-primary-foreground hover:bg-navy-deep"
            >
              {open ? 'Masquer les détails' : 'Voir les détails'}
            </button>
            {open && (
              <div className="rounded-md bg-secondary p-3 text-sm">
                <p>
                  Arrivée à partir de 14h00, départ avant 12h00. Annulation gratuite jusqu’à 48h avant l’arrivée.
                  Paiement sur place.
                </p>
                <a
                  href={`/contact?sujet=${encodeURIComponent(`Réservation : ${h.nom}`)}`}
                  className="mt-2 inline-block font-semibold text-primary underline"
                >
                  Demander une réservation
                </a>
              </div>
            )}
          </>
        )}
      </div>
    </article>
  )
}
