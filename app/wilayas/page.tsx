import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { WilayasExplorer } from '@/components/wilayas-explorer'

export const metadata: Metadata = { title: 'Les 58 Wilayas' }

export default function WilayasPage() {
  return (
    <>
      <PageHero title="Les 58 Wilayas" subtitle="Du littoral au Sahara, trouvez votre prochaine destination." />
      <WilayasExplorer />
    </>
  )
}
