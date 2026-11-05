import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { EvenementsExplorer } from '@/components/evenements-explorer'

export const metadata: Metadata = { title: 'Événements' }

export default function EvenementsPage() {
  return (
    <>
      <PageHero title="Événements culturels" subtitle="Festivals de musique, cinéma, littérature et traditions." />
      <EvenementsExplorer />
    </>
  )
}
