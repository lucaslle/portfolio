import { useState } from 'react'
import type { FormEvent } from 'react'
import { CONTACT_EMAIL, SOCIALS } from '../data/portfolio'
import type { ContactForm } from '../types'
import BlurText from './reactbits/BlurText/BlurText'
import Magnet from './reactbits/Magnet/Magnet'
import SpotlightCard from './reactbits/SpotlightCard/SpotlightCard'
import StarBorder from './reactbits/StarBorder/StarBorder'

const SPOTLIGHT_COLOR = 'rgba(139, 92, 246, 0.28)'

const EMPTY_FORM: ContactForm = { name: '', email: '', msg: '' }

const buildMailto = (form: ContactForm): string => {
  const subject = encodeURIComponent(`Contact portfolio — ${form.name}`)
  const body = encodeURIComponent(`${form.msg}\n\n${form.name} · ${form.email}`)

  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
}

export const Contact = () => {
  const [form, setForm] = useState<ContactForm>(EMPTY_FORM)

  const updateField = (field: keyof ContactForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    window.location.href = buildMailto(form)
  }

  return (
    <section id="contact" className="contact">
      <div className="contact__head">
        <h2 className="section-title">
          <BlurText text="Contact" delay={100} animateBy="letters" direction="top" />
        </h2>
        <p className="section-lead">Une idée en tête ? Écrivez-moi et discutons-en.</p>
      </div>

      <div className="contact__grid">
        <SpotlightCard spotlightColor={SPOTLIGHT_COLOR} className="panel">
          <form className="contact__form" onSubmit={handleSubmit}>
            <label className="field">
              Nom
              <input
                type="text"
                name="name"
                autoComplete="name"
                required
                placeholder="Prénom Nom"
                value={form.name}
                onChange={(event) => updateField('name', event.target.value)}
              />
            </label>

            <label className="field">
              Email
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                placeholder="vous@exemple.fr"
                value={form.email}
                onChange={(event) => updateField('email', event.target.value)}
              />
            </label>

            <label className="field">
              Message
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Parlons de votre projet…"
                value={form.msg}
                onChange={(event) => updateField('msg', event.target.value)}
              />
            </label>

            <StarBorder
              as="button"
              type="submit"
              color="#8b5cf6"
              trailColor="#7dd3fc"
              backgroundColor="#e9dcff"
              textColor="#07040e"
              radius={10}
            >
              Envoyer par e-mail
            </StarBorder>
          </form>
        </SpotlightCard>

        <SpotlightCard spotlightColor={SPOTLIGHT_COLOR} className="panel">
          <h3 className="contact__subtitle">Me retrouver</h3>
          <p className="contact__text">
            Je réponds directement par e-mail, ou retrouvez-moi sur les réseaux.
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
          </p>
        </SpotlightCard>
      </div>
    </section>
  )
}
