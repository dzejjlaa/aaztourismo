import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { GastronomieExplorer } from '@/components/gastronomie-explorer'

export const metadata: Metadata = { title: 'Gastronomie' }

export default function GastronomiePage() {
  return (
    <>
      <PageHero title="Gastronomie algérienne" subtitle="Plats de tradition, pâtisseries et saveurs de chaque région." />
      <GastronomieExplorer />
    </>
  )
}
