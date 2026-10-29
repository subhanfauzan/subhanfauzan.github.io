import { useState } from 'react'
import { Icon } from './Icon.jsx'
import { Section, SectionLabel } from './Section.jsx'
import { projects } from '../data/content.js'

const filters = ['All', 'Work', 'Featured Build']

export function Projects() {
  const [active, setActive] = useState('All')
  const visible = projects.filter((project) => active === 'All' || project.category === active)

  return (
    <Section
      id="projects"
      title="Projects"
      action={
        <div className="flex items-center gap-1" role="tablist" aria-label="Filter projects">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={active === filter}
              onClick={() => setActive(filter)}
              className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                active === filter
                  ? 'bg-ink text-white dark:bg-white dark:text-black'
                  : 'border border-gray-300 text-gray-500 hover:text-gray-900 dark:border-gray-700 dark:hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      }
    >
      <div className="space-y-4">
        {visible.map((project) => (
          <article
            key={project.id}
            className="group rounded-xl border border-gray-200 p-5 transition-all hover:-translate-y-0.5 hover:border-gray-400 hover:shadow-[0_12px_30px_-24px_rgba(15,23,42,0.65)] dark:border-gray-700 dark:hover:border-gray-500 dark:hover:shadow-[0_12px_30px_-24px_rgba(255,255,255,0.35)]"
          >
            <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-bold uppercase tracking-[0.22em] text-gray-400 dark:text-gray-500">
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span>{project.tag}</span>
            </div>

            <h3 className="text-base font-semibold text-gray-900 dark:text-white">
              {project.title}
              {project.subtitle && (
                <span className="ml-2 font-light text-gray-500 dark:text-gray-400">{project.subtitle}</span>
              )}
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">{project.description}</p>

            <ul className="mt-3 flex flex-wrap gap-2">
              {project.points.map((point) => (
                <li
                  key={point}
                  className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600 dark:bg-surface-dark dark:text-gray-300"
                >
                  {point}
                </li>
              ))}
            </ul>

            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 transition-colors hover:text-accent dark:text-white"
              >
                {project.cta}
                <Icon
                  name="arrow-up-right"
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            )}
          </article>
        ))}
      </div>
      <SectionLabel>
        {visible.length} of {projects.length} projects
      </SectionLabel>
    </Section>
  )
}
