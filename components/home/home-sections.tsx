import Image from 'next/image'
import Link from 'next/link'
import { BadgeCheck, Headset, MapPin, Quote, ThumbsUp } from 'lucide-react'
import { Carousel } from '@/components/carousel'
import { HebergementCard } from '@/components/hebergement-card'
import { SectionHeading } from '@/components/page-hero'
import { hebergements, popularWilayaNames, temoignages, wilayas } from '@/lib/data'

const reasons = [
  { icon: BadgeCheck, title: 'Réservez maintenant, payez sur place', text: 'Annulation gratuite sur la plupart des hébergements' },
  { icon: ThumbsUp, title: 'Des milliers d’avis de voyageurs', text: 'Des informations fiables, partagées par la communauté' },
  { icon: MapPin, title: '58 wilayas à explorer', text: 'Du littoral méditerranéen au cœur du Sahara' },
  { icon: Headset, title: 'Service client 7j/7', text: 'Une équipe locale à votre écoute' },
]

export function WhySection() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-10">
      <SectionHeading title="Pourquoi AAZ Tourisme ?" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-lg border bg-card p-5">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="mt-6 font-bold">{title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function PopularWilayas() {
  const list = popularWilayaNames.map((n) => wilayas.find((w) => w.nom === n)!)
  return (
    <section className="mx-auto max-w-6xl px-4 pt-12">
      <SectionHeading title="Wilayas populaires" subtitle="Les choix préférés des voyageurs en Algérie" />
      <div className="grid gap-4 md:grid-cols-12">
        {list.map((w, i) => (
          <Link
            key={w.numero}
            href={`/wilayas/${w.numero}`}
            className={`group relative block overflow-hidden rounded-lg ${
              i < 2 ? 'h-64 md:col-span-6 lg:h-72' : 'h-56 md:col-span-6 lg:col-span-3'
            }`}
          >
            <Image
              src={w.image}
              alt={`Vue de ${w.nom}`}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/50" />
            <div className="absolute top-4 left-4 text-white">
              <p className="flex items-center gap-2 text-2xl font-extrabold">
                {w.nom}
                <span className="rounded bg-white/90 px-1.5 text-xs font-bold text-primary">
                  {String(w.numero).padStart(2, '0')}
                </span>
              </p>
              <p className="text-sm text-white/90">{w.slogan}</p>
            </div>
            <span className="absolute bottom-4 left-4 rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-primary">
              Découvrir
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}

const services = [
  { href: '/circuits', title: 'Circuits touristiques', text: 'Des itinéraires clés en main à travers le pays.', image: '/images/djanet.png' },
  { href: '/hebergement', title: 'Hébergement', text: 'Hôtels, maisons d’hôtes, villas et auberges.', image: '/images/hotel.png' },
  { href: '/transport', title: 'Transport', text: 'Voitures, vols intérieurs, trains et bus.', image: '/images/voiture.png' },
  { href: '/gastronomie', title: 'Gastronomie', text: 'Couscous, chorba, makrout et spécialités régionales.', image: '/images/couscous.png' },
  { href: '/artisanat', title: 'Artisanat', text: 'Tapis, poterie, bijoux et cuivre ciselé.', image: '/images/tapis.png' },
  { href: '/evenements', title: 'Événements', text: 'Festivals de musique, cinéma et culture.', image: '/images/festival.png' },
]

export function ServicesSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-12">
      <SectionHeading title="Nos services" subtitle="Tout ce qu’il faut pour préparer votre voyage" />
      <Carousel label="Nos services">
        {services.map((s) => (
          <article
            key={s.href}
            className="flex w-[78%] shrink-0 snap-start flex-col overflow-hidden rounded-lg border bg-card sm:w-[45%] lg:w-[calc(25%-12px)]"
          >
            <div className="relative aspect-[4/3]">
              <Image src={s.image} alt="" fill sizes="300px" className="object-cover" />
            </div>
            <div className="flex flex-1 flex-col gap-1 p-4">
              <h3 className="font-bold">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.text}</p>
              <Link
                href={s.href}
                className="mt-auto w-fit pt-3 text-sm font-semibold text-primary hover:underline"
              >
                Explorer →
              </Link>
            </div>
          </article>
        ))}
      </Carousel>
    </section>
  )
}

export function LovedHomes() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-12">
      <SectionHeading
        title="Hébergements que les voyageurs adorent"
        action={
          <Link href="/hebergement" className="shrink-0 text-sm font-semibold text-primary hover:underline">
            Découvrir les hébergements
          </Link>
        }
      />
      <Carousel label="Hébergements populaires">
        {hebergements.slice(0, 8).map((h) => (
          <div key={h.id} className="w-[78%] shrink-0 snap-start sm:w-[45%] lg:w-[calc(25%-12px)]">
            <HebergementCard h={h} />
          </div>
        ))}
      </Carousel>
    </section>
  )
}

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-12">
      <SectionHeading title="Ils ont voyagé avec nous" subtitle="Témoignages de nos voyageurs" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {temoignages.map((t) => (
          <figure key={t.nom} className="flex flex-col rounded-lg border bg-card p-5">
            <Quote className="h-6 w-6 text-accent" aria-hidden="true" />
            <blockquote className="mt-3 flex-1 text-sm leading-relaxed">{t.commentaire}</blockquote>
            <figcaption className="mt-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {t.nom
                  .split(' ')
                  .map((p) => p[0])
                  .join('')}
              </span>
              <span>
                <span className="block text-sm font-semibold">{t.nom}</span>
                <span className="block text-xs text-muted-foreground">{t.ville}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
