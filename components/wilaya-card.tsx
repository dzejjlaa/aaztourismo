import Image from 'next/image'
import Link from 'next/link'
import type { Wilaya } from '@/lib/data'

export function WilayaCard({ w }: { w: Wilaya }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border bg-card shadow-sm">
      <div className="relative aspect-[4/3]">
        <Image src={w.image} alt={`Paysage de ${w.nom}`} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
        <span className="absolute top-2 left-2 rounded-md bg-primary px-2 py-1 text-xs font-bold text-primary-foreground">
          {String(w.numero).padStart(2, '0')}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-1 p-3">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-bold">{w.nom}</h3>
          <span className="rounded-full bg-secondary px-2 py-0.5 text-xs">{w.region}</span>
        </div>
        <p className="text-sm text-muted-foreground">{w.slogan}</p>
        <Link
          href={`/wilayas/${w.numero}`}
          className="mt-auto w-fit pt-2 text-sm font-semibold text-primary hover:underline"
        >
          Découvrir →
        </Link>
      </div>
    </article>
  )
}
