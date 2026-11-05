'use client'

import { useId, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Reveal({
  label,
  openLabel = 'Masquer',
  children,
  className,
}: {
  label: string
  openLabel?: string
  children: React.ReactNode
  className?: string
}) {
  const [open, setOpen] = useState(false)
  const id = useId()

  return (
    <div className={className}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-1 rounded-md border border-primary px-4 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground"
      >
        {open ? openLabel : label}
        <ChevronDown className={cn('h-4 w-4 transition-transform', open && 'rotate-180')} aria-hidden="true" />
      </button>
      <div id={id} hidden={!open} className="mt-3 rounded-md bg-secondary p-4 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  )
}
