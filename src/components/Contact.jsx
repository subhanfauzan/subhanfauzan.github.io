import { Icon } from './Icon.jsx'
import { Section } from './Section.jsx'
import { profile } from '../data/content.js'

function ContactCard({ href, icon, label, title, external }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="group flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 transition-colors hover:border-gray-400 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:border-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-900"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gray-200 text-gray-600 dark:border-gray-700 dark:text-gray-300">
        <Icon name={icon} className="h-4 w-4" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[11px] font-bold uppercase tracking-[0.22em] text-gray-400 dark:text-gray-500">
          {label}
        </span>
        <span className="block truncate text-sm text-gray-900 dark:text-white">{title}</span>
      </span>
      <Icon
        name={external ? 'arrow-up-right' : 'arrow-right'}
        className="h-4 w-4 text-gray-300 transition-transform group-hover:translate-x-0.5 group-hover:text-gray-600 dark:text-gray-600 dark:group-hover:text-gray-300"
      />
    </a>
  )
}

export function Contact() {
  return (
    <Section id="contact" title="Let's work together.">
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="space-y-4">
          <p className="max-w-xl text-sm leading-relaxed text-gray-500 dark:text-gray-400 sm:text-base">
            I'm open to opportunities in IT support, technical support, and web development, as well as
            freelance projects involving infrastructure, backend features, or website optimization. If you're
            building something new or keeping existing systems running, I'd like to help.
          </p>
          <p className="inline-flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
            <Icon name="pin" className="h-3.5 w-3.5" />
            {profile.location}
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          <ContactCard
            href={`mailto:${profile.email}?subject=Project%20Inquiry`}
            icon="mail"
            label="Email"
            title={profile.email}
          />
          <ContactCard
            href={`https://wa.me/${profile.phone}`}
            icon="whatsapp"
            label="Let's Talk"
            title={profile.phoneDisplay}
            external
          />
          <ContactCard
            href="https://www.linkedin.com/in/subhan-fauzan-301662314/"
            icon="linkedin"
            label="Connect"
            title="LinkedIn Profile"
            external
          />
        </div>
      </div>
    </Section>
  )
}
