'use client'

import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function Carousel({ children, label }: { children: React.ReactNode; label: string }) {
  const ref = useRef<HTMLDivElement>(null)

  const scroll = (dir: 1 | -1) => {
    const el = ref.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' })
  }

  return (
    <div className="relative">
      <div
        ref={ref}
        role="region"
        aria-label={label}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
      >
        {children}
      </div>
      <button
        type="button"
        onClick={() => scroll(-1)}
        aria-label="Précédent"
        className="absolute top-1/3 -left-4 hidden h-10 w-10 items-center justify-center rounded-full border bg-card shadow-md hover:bg-secondary md:flex"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => scroll(1)}
        aria-label="Suivant"
        className="absolute top-1/3 -right-4 hidden h-10 w-10 items-center justify-center rounded-full border bg-card shadow-md hover:bg-secondary md:flex"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  )
}
