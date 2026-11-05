import { cn } from '@/lib/utils'

export function PageHero({
  title,
  subtitle,
  className,
}: {
  title: string
  subtitle?: string
  className?: string
}) {
  return (
    <section className={cn('bg-primary text-primary-foreground', className)}>
      <div className="mx-auto max-w-6xl px-4 pt-10 pb-12">
        <h1 className="text-balance text-4xl font-extrabold md:text-5xl">{title}</h1>
        {subtitle && <p className="mt-3 text-lg text-primary-foreground/85 md:text-xl">{subtitle}</p>}
      </div>
    </section>
  )
}

export function SectionHeading({
  title,
  subtitle,
  action,
}: {
  title: string
  subtitle?: string
  action?: React.ReactNode
}) {
  return (
    <div className="mb-4 flex items-end justify-between gap-4">
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
        {subtitle && <p className="mt-1 text-muted-foreground">{subtitle}</p>}
      </div>
      {action}
    </div>
  )
}
