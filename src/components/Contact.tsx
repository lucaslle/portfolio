import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { CONTACT_EMAIL } from '../data/portfolio'
import { useTranslation } from '../i18n/useTranslation'
import type { ContactForm, SendingState } from '../types'

const SENT_DELAY = 700
const RESET_DELAY = 3200

const EMPTY_FORM: ContactForm = { name: '', email: '', msg: '' }

export const Contact = () => {
  const { t } = useTranslation()
  const [form, setForm] = useState<ContactForm>(EMPTY_FORM)
  const [sending, setSending] = useState<SendingState>('idle')
  const timeouts = useRef<number[]>([])

  const sendLabels: Record<SendingState, string> = {
    idle: t.contact.send,
    sending: t.contact.sending,
    sent: t.contact.sent,
  }

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
        {t.contact.title}
      </h2>

      <form className="contact__form" onSubmit={handleSubmit} noValidate>
        <label className="field">
          {t.contact.name}
          <input
            type="text"
            placeholder={t.contact.namePlaceholder}
            value={form.name}
            onChange={(event) => updateField('name', event.target.value)}
          />
        </label>

        <label className="field">
          {t.contact.email}
          <input
            type="email"
            placeholder={t.contact.emailPlaceholder}
            value={form.email}
            onChange={(event) => updateField('email', event.target.value)}
          />
        </label>

        <label className="field">
          {t.contact.message}
          <textarea
            rows={4}
            placeholder={t.contact.messagePlaceholder}
            value={form.msg}
            onChange={(event) => updateField('msg', event.target.value)}
          />
        </label>

        <div className="contact__actions">
          <button type="submit" className="btn-send" disabled={sending !== 'idle'}>
            {sendLabels[sending]}
          </button>
          <span className="contact__note" role="status">
            {sending === 'sent' ? t.contact.thanks : ''}
          </span>
        </div>

        <div className="contact__mail">
          {t.contact.emailLabel} · <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </div>
      </form>
    </section>
  )
}
