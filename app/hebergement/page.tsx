import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { HebergementExplorer } from '@/components/hebergement-explorer'

export const metadata: Metadata = { title: 'Hébergement' }

export default async function HebergementPage({
  searchParams,
}: {
  searchParams: Promise<{ destination?: string; arrivee?: string; depart?: string }>
}) {
  const sp = await searchParams
  return (
    <>
      <PageHero title="Trouvez votre hébergement" subtitle="Hôtels, maisons d’hôtes, appartements, villas et auberges." className="pb-6" />
      <HebergementExplorer
        key={`${sp.destination ?? ''}-${sp.arrivee ?? ''}-${sp.depart ?? ''}`}
        initialDestination={sp.destination ?? ''}
        initialArrivee={sp.arrivee ?? ''}
        initialDepart={sp.depart ?? ''}
      />
    </>
  )
}
