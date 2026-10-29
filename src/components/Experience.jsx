import { Section, Divider } from './Section.jsx'
import { experience } from '../data/content.js'

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-7">
        {experience.map((item, index) => (
          <li key={`${item.company}-${index}`} className="relative pl-6">
            <span
              className="absolute left-0 top-2 h-2.5 w-2.5 -translate-x-[3px] rounded-full border-2 border-white bg-accent ring-2 ring-accent/20 dark:border-ink"
              aria-hidden="true"
            />
            {index !== experience.length - 1 && (
              <span
                className="absolute left-0 top-6 h-[calc(100%-1rem)] w-px bg-gray-200 dark:bg-gray-700"
                aria-hidden="true"
              />
            )}
            <p className="font-mono text-[11px] uppercase tracking-widest text-gray-400 dark:text-gray-500">
              {item.dates}
            </p>
            <p className="mt-1 text-base font-semibold text-gray-900 dark:text-white">{item.title}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {item.company} — <span className="text-gray-400 dark:text-gray-500">{item.location}</span>
            </p>
            <ul className="mt-2 space-y-1.5">
              {item.description.map((line) => (
                <li
                  key={line}
                  className="flex gap-2 text-sm leading-6 text-gray-500 dark:text-gray-400"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-300 dark:bg-gray-600" aria-hidden="true" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
      <Divider />
    </Section>
  )
}
