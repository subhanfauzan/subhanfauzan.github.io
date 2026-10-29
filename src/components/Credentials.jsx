import { Icon } from './Icon.jsx'
import { Section, SectionLabel, Divider } from './Section.jsx'
import { certifications, publications } from '../data/content.js'

export function Credentials() {
  return (
    <Section
      id="certifications"
      title="Certifications"
      action={
        <a
          href="https://www.linkedin.com/in/subhan-fauzan-301662314/"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1 text-sm text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-white"
        >
          <span>LinkedIn</span>
          <Icon name="arrow-right" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </a>
      }
    >
      <div className="space-y-5">
        <div className="space-y-3">
          <SectionLabel>Professional Credential</SectionLabel>
          {certifications.map((item) => (
            <div
              key={item.title}
              className="mt-[6px] grid gap-1 sm:grid-cols-[72px_1fr] sm:items-center sm:gap-4"
            >
              <p className="font-mono text-[11px] uppercase tracking-widest text-gray-400 dark:text-gray-500">
                {item.dates}
              </p>
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white">{item.title}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{item.issuer}</p>
              </div>
            </div>
          ))}
        </div>

        <Divider />

        <div className="space-y-3">
          <SectionLabel>Publication</SectionLabel>
          {publications.map((item) => (
            <div key={item.title} className="grid gap-1 sm:grid-cols-[72px_1fr] sm:gap-4">
              <p className="font-mono text-[11px] uppercase tracking-widest text-gray-400 dark:text-gray-500">
                {item.dates}
              </p>
              <div className="min-w-0">
                <p className="text-sm font-medium leading-6 text-gray-900 dark:text-white">{item.title}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{item.issuer}</p>
                {item.href && (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-2 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-widest text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    <span>View publication</span>
                    <Icon
                      name="arrow-up-right"
                      className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
