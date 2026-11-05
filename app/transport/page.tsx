import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { TransportTabs } from '@/components/transport-tabs'

export const metadata: Metadata = { title: 'Transport' }

export default function TransportPage() {
  return (
    <>
      <PageHero title="Transport" subtitle="Location de voiture, vols intérieurs, trains et bus à travers l’Algérie." />
      <TransportTabs />
    </>
  )
}
