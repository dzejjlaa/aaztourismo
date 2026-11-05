import Link from 'next/link'
import { SearchBar } from '@/components/search-bar'
import { LovedHomes, PopularWilayas, ServicesSection, Testimonials, WhySection } from '@/components/home/home-sections'

export default function HomePage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 pt-14 pb-20 md:pt-20 md:pb-24">
          <h1 className="text-balance text-4xl font-extrabold md:text-6xl">
            {"Découvrez les Merveilles de l'Algérie"}
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/90 md:text-2xl">
            Explorez les 58 wilayas et leurs trésors cachés.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/wilayas"
              className="rounded-md bg-white px-5 py-3 font-semibold text-primary hover:bg-secondary"
            >
              Explorer les Wilayas
            </Link>
            <Link
              href="/circuits"
              className="rounded-md border border-white px-5 py-3 font-semibold hover:bg-white/10"
            >
              Circuits Touristiques
            </Link>
          </div>
        </div>
      </section>
      <div className="mx-auto -mt-8 max-w-6xl px-4">
        <SearchBar />
      </div>
      <WhySection />
      <PopularWilayas />
      <ServicesSection />
      <LovedHomes />
      <Testimonials />
    </>
  )
}
