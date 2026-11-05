'use client'

import { useActionState } from 'react'
import { Send } from 'lucide-react'
import { sendMessage, type ContactState } from '@/app/contact/actions'

const fields = [
  { name: 'nom', label: 'Nom', type: 'text', autoComplete: 'family-name', required: true },
  { name: 'prenom', label: 'Prénom', type: 'text', autoComplete: 'given-name', required: true },
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email', required: true },
  { name: 'telephone', label: 'Téléphone', type: 'tel', autoComplete: 'tel', required: false },
] as const

export function ContactForm({ initialSujet }: { initialSujet: string }) {
  const [state, action, pending] = useActionState<ContactState, FormData>(sendMessage, { status: 'idle' })

  if (state.status === 'success') {
    return (
      <div className="rounded-lg border bg-card p-8" role="status">
        <h2 className="text-2xl font-bold text-primary">Message envoyé</h2>
        <p className="mt-2">{state.message}</p>
      </div>
    )
  }

  const input =
    'mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20'

  return (
    <form action={action} noValidate className="rounded-lg border bg-card p-6">
      <h2 className="text-xl font-bold">Envoyez-nous un message</h2>
      {state.status === 'error' && (
        <p role="alert" className="mt-3 rounded-md bg-destructive/10 p-3 text-sm text-destructive">
          {state.message}
        </p>
      )}
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {fields.map((f) => (
          <div key={f.name}>
            <label htmlFor={f.name} className="text-sm font-medium">
              {f.label} {f.required && <span aria-hidden="true">*</span>}
            </label>
            <input
              id={f.name}
              name={f.name}
              type={f.type}
              autoComplete={f.autoComplete}
              required={f.required}
              aria-invalid={!!state.errors?.[f.name]}
              aria-describedby={state.errors?.[f.name] ? `${f.name}-error` : undefined}
              className={input}
            />
            {state.errors?.[f.name] && (
              <p id={`${f.name}-error`} className="mt-1 text-xs text-destructive">{state.errors[f.name]}</p>
            )}
          </div>
        ))}
        <div className="sm:col-span-2">
          <label htmlFor="sujet" className="text-sm font-medium">Sujet <span aria-hidden="true">*</span></label>
          <input id="sujet" name="sujet" defaultValue={initialSujet} required aria-invalid={!!state.errors?.sujet} className={input} />
          {state.errors?.sujet && <p className="mt-1 text-xs text-destructive">{state.errors.sujet}</p>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="text-sm font-medium">Message <span aria-hidden="true">*</span></label>
          <textarea id="message" name="message" rows={6} required aria-invalid={!!state.errors?.message} className={input} />
          {state.errors?.message && <p className="mt-1 text-xs text-destructive">{state.errors.message}</p>}
        </div>
      </div>
      <button
        type="submit"
        disabled={pending}
        className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-navy-deep disabled:opacity-60"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        {pending ? 'Envoi…' : 'Envoyer'}
      </button>
    </form>
  )
}
