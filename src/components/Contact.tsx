import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { CONTACT_EMAIL } from '../data/portfolio'
import type { ContactForm, SendingState } from '../types'

const SENT_DELAY = 700
const RESET_DELAY = 3200

const EMPTY_FORM: ContactForm = { name: '', email: '', msg: '' }

const SEND_LABELS: Record<SendingState, string> = {
  idle: 'Send',
  sending: 'Envoi…',
  sent: 'Envoyé ✓',
}

export const Contact = () => {
  const [form, setForm] = useState<ContactForm>(EMPTY_FORM)
  const [sending, setSending] = useState<SendingState>('idle')
  const timeouts = useRef<number[]>([])

  useEffect(() => {
    const pending = timeouts.current

    return () => pending.forEach((id) => window.clearTimeout(id))
  }, [])

  const updateField = (field: keyof ContactForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (sending !== 'idle') return

    setSending('sending')
    timeouts.current.push(window.setTimeout(() => setSending('sent'), SENT_DELAY))
    timeouts.current.push(
      window.setTimeout(() => {
        setSending('idle')
        setForm(EMPTY_FORM)
      }, RESET_DELAY),
    )
  }

  return (
    <section id="contact" className="panel contact">
      <h2 className="section-title" style={{ marginBottom: 20 }}>
        Contact
      </h2>

      <form className="contact__form" onSubmit={handleSubmit} noValidate>
        <label className="field">
          Name
          <input
            type="text"
            placeholder="Prénom Nom"
            value={form.name}
            onChange={(event) => updateField('name', event.target.value)}
          />
        </label>

        <label className="field">
          Email
          <input
            type="email"
            placeholder="you@studio.dev"
            value={form.email}
            onChange={(event) => updateField('email', event.target.value)}
          />
        </label>

        <label className="field">
          Message
          <textarea
            rows={4}
            placeholder="Parlons de votre projet…"
            value={form.msg}
            onChange={(event) => updateField('msg', event.target.value)}
          />
        </label>

        <div className="contact__actions">
          <button type="submit" className="btn-send" disabled={sending !== 'idle'}>
            {SEND_LABELS[sending]}
          </button>
          <span className="contact__note" role="status">
            {sending === 'sent' ? 'Merci ! Réponse sous 24h.' : ''}
          </span>
        </div>

        <div className="contact__mail">
          Email · <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </div>
      </form>
    </section>
  )
}
