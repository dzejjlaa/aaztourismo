import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { HebergementCard } from '@/components/hebergement-card'
import { SectionHeading } from '@/components/page-hero'
import { circuits, formatDZD, getWilaya, hebergements, wilayaDescription, wilayas } from '@/lib/data'

export function generateStaticParams() {
  return wilayas.map((w) => ({ numero: String(w.numero) }))
}

export async function generateMetadata({ params }: { params: Promise<{ numero: string }> }): Promise<Metadata> {
  const w = getWilaya(Number((await params).numero))
  return { title: w ? `${w.nom} — ${w.slogan}` : 'Wilaya' }
}

export default async function WilayaPage({ params }: { params: Promise<{ numero: string }> }) {
  const w = getWilaya(Number((await params).numero))
  if (!w) notFound()

  const stays = hebergements.filter((h) => h.ville === w.nom)
  const tours = circuits.filter((c) => c.wilayas.includes(w.nom))
  const nearby = wilayas.filter((x) => x.region === w.region && x.numero !== w.numero).slice(0, 6)

  return (
    <>
      <section className="relative h-80 md:h-96">
        <Image src={w.image} alt={`Paysage de ${w.nom}`} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-4 pb-8 text-white">
          <nav aria-label="Fil d'Ariane" className="mb-2 text-sm text-white/80">
            <Link href="/" className="hover:underline">Accueil</Link> ›{' '}
            <Link href="/wilayas" className="hover:underline">Wilayas</Link> › {w.nom}
          </nav>
          <p className="w-fit rounded bg-accent px-2 py-0.5 text-sm font-bold text-accent-foreground">
            Wilaya n°{String(w.numero).padStart(2, '0')} · {w.region}
          </p>
          <h1 className="mt-2 text-4xl font-extrabold md:text-5xl">{w.nom}</h1>
          <p className="text-lg text-white/90">{w.slogan}</p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 pt-10">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold">À propos de {w.nom}</h2>
            <p className="mt-3 leading-relaxed">{wilayaDescription(w)}</p>
          </div>
          <aside className="rounded-lg border bg-card p-5">
            <h2 className="font-bold">Préparer votre séjour</h2>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              <li><Link className="text-primary hover:underline" href={`/hebergement?destination=${encodeURIComponent(w.nom)}`}>Trouver un hébergement</Link></li>
              <li><Link className="text-primary hover:underline" href="/transport">Comment s’y rendre</Link></li>
              <li><Link className="text-primary hover:underline" href="/gastronomie">Goûter la cuisine locale</Link></li>
            </ul>
          </aside>
        </div>

        {tours.length > 0 && (
          <section className="pt-10">
            <SectionHeading title="Circuits passant par cette wilaya" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {tours.map((c) => (
                <Link key={c.id} href="/circuits" className="flex gap-3 rounded-lg border bg-card p-3 hover:shadow">
                  <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-md">
                    <Image src={c.image} alt="" fill sizes="96px" className="object-cover" />
                  </div>
                  <div>
                    <p className="font-bold">{c.nom}</p>
                    <p className="text-sm text-muted-foreground">{c.duree} jours · {formatDZD(c.prix)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {stays.length > 0 && (
          <section className="pt-10">
            <SectionHeading title={`Hébergements à ${w.nom}`} />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stays.map((h) => <HebergementCard key={h.id} h={h} />)}
            </div>
          </section>
        )}

        <section className="pt-10">
          <SectionHeading title={`Autres wilayas — ${w.region}`} />
          <ul className="flex flex-wrap gap-2">
            {nearby.map((x) => (
              <li key={x.numero}>
                <Link href={`/wilayas/${x.numero}`} className="block rounded-full border bg-card px-4 py-2 text-sm hover:border-primary hover:text-primary">
                  {String(x.numero).padStart(2, '0')} · {x.nom}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  )
}
