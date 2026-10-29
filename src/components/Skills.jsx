import { Section } from './Section.jsx'
import { skills } from '../data/content.js'

export function Skills() {
  return (
    <Section id="skills" title="Tech Stack">
      <div className="space-y-9 sm:space-y-10">
        {skills.map((group, index) => (
          <section
            key={group.title}
            className={
              index > 0 ? 'border-t border-dashed border-gray-200 pt-9 dark:border-gray-700 sm:pt-10' : ''
            }
            aria-labelledby={`skill-${index}`}
          >
            <h3 id={`skill-${index}`} className="mb-4 text-base font-semibold text-gray-900 dark:text-white">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-dashed border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-800 shadow-sm transition-colors hover:border-gray-400 dark:border-gray-700 dark:bg-surface-dark dark:text-gray-200 dark:hover:border-gray-500"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
    </Section>
  )
}
