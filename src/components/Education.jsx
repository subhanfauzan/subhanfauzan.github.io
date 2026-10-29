import { Section, SectionLabel } from './Section.jsx'
import { education } from '../data/content.js'

export function Education() {
  return (
    <Section
      id="education"
      title="Education"
      action={<SectionLabel>Surabaya, Indonesia</SectionLabel>}
    >
      <div className="space-y-6">
        {education.map((item) => (
          <div key={item.dates} className="sm:grid sm:grid-cols-[150px_1fr] sm:gap-6">
            <p className="font-mono text-[11px] uppercase tracking-widest text-gray-400 dark:text-gray-500">
              {item.dates}
            </p>
            <div>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">{item.title}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">{item.institution}</p>
              <p className="text-xs text-gray-400 dark:text-gray-500">{item.campus}</p>
              {item.note && (
                <p className="mt-1 text-xs leading-6 text-gray-500 dark:text-gray-400">{item.note}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
