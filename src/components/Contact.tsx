import { useState } from 'react'
import type { FormEvent } from 'react'
import { CONTACT_EMAIL, CV_URL, SOCIALS } from '../data/portfolio'
import { useTranslation } from '../i18n/useTranslation'
import { withAlpha } from '../theme/palette'
import { useTheme } from '../theme/useTheme'
import type { ContactForm } from '../types'
import BlurText from './reactbits/BlurText/BlurText'
import Magnet from './reactbits/Magnet/Magnet'
import SpotlightCard from './reactbits/SpotlightCard/SpotlightCard'
import StarBorder from './reactbits/StarBorder/StarBorder'

const EMPTY_FORM: ContactForm = { name: '', email: '', msg: '' }

type SendStatus = 'idle' | 'sending' | 'sent' | 'error'

// shortcut: FormSubmit needs a one-time activation click in the inbox on the first send, then swap for a backend if volume grows.
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`

export const Contact = () => {
  const { t } = useTranslation()
  const { palette } = useTheme()
  const spotlightColor = withAlpha(palette.violet, 0.28)
  const [form, setForm] = useState<ContactForm>(EMPTY_FORM)
  const [status, setStatus] = useState<SendStatus>('idle')

  const updateField = (field: keyof ContactForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `${t.contact.mailSubject} — ${form.name}`,
          _replyto: form.email,
          name: form.name,
          email: form.email,
          message: form.msg,
        }),
      })
      if (!response.ok) throw new Error(String(response.status))

      setForm(EMPTY_FORM)
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="contact__head">
        <h2 className="section-title">
          <BlurText text={t.nav.contact} delay={100} animateBy="letters" direction="top" />
        </h2>
        <p className="section-lead">{t.contact.lead}</p>
      </div>

      <div className="contact__grid">
        <SpotlightCard spotlightColor={spotlightColor} className="panel">
          <form className="contact__form" onSubmit={handleSubmit}>
            <label className="field">
              {t.contact.name}
              <input
                type="text"
                name="name"
                autoComplete="name"
                required
                placeholder={t.contact.namePlaceholder}
                value={form.name}
                onChange={(event) => updateField('name', event.target.value)}
              />
            </label>

            <label className="field">
              {t.contact.email}
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                placeholder={t.contact.emailPlaceholder}
                value={form.email}
                onChange={(event) => updateField('email', event.target.value)}
              />
            </label>

            <label className="field">
              {t.contact.message}
              <textarea
                name="message"
                rows={5}
                required
                placeholder={t.contact.messagePlaceholder}
                value={form.msg}
                onChange={(event) => updateField('msg', event.target.value)}
              />
            </label>

            <StarBorder
              as="button"
              type="submit"
              color={palette.violet}
              trailColor={palette.cyan}
              backgroundColor={palette.ice}
              textColor={palette.ink}
              radius={10}
            >
              {status === 'sending' ? t.contact.sending : t.contact.send}
            </StarBorder>

            {(status === 'sent' || status === 'error') && (
              <p className="contact__status" role="status">
                {status === 'sent' ? t.contact.sent : t.contact.error}
              </p>
            )}
          </form>
        </SpotlightCard>

        <SpotlightCard spotlightColor={spotlightColor} className="panel">
          <h3 className="contact__subtitle">{t.contact.findMe}</h3>
          <p className="contact__text">
            {t.contact.findMeText}
          </p>

          <ul className="socials">
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <Magnet magnetStrength={4} padding={40}>
                  <a className="social" href={social.href} target="_blank" rel="noreferrer">
                    <span className="social__tag">{social.tag}</span>
                    <span className="social__text">
                      <span className="social__label">{social.label}</span>
                      <span className="social__handle">{social.handle}</span>
                    </span>
                    <span className="social__arrow" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                </Magnet>
              </li>
            ))}
          </ul>

          <p className="contact__mail">
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            {' · '}
            <a href={CV_URL} download>
              {t.cv}
            </a>
          </p>
        </SpotlightCard>
      </div>
    </section>
  )
}
