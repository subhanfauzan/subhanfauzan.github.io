import { Icon } from './Icon.jsx'
import { profile } from '../data/content.js'
import { useSpotlight } from '../hooks.js'

const linkStyle =
  'group inline-flex items-center gap-2 rounded-lg bg-ink px-6 py-3 text-base font-medium text-white transition-transform hover:scale-[1.03] dark:bg-white dark:text-black'

const ghostStyle =
  'group inline-flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 text-base font-medium text-gray-800 transition-colors hover:border-gray-500 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-100 dark:hover:border-gray-500 dark:hover:bg-gray-900'

function HighlightCard({ item }) {
  const { ref, onMouseMove } = useSpotlight()

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      className="card-spotlight flex min-h-24 min-w-0 flex-col justify-between rounded-lg border border-gray-200 p-3 transition-colors hover:border-gray-400 dark:border-gray-700 dark:hover:border-gray-500 sm:p-4"
    >
      <p className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-[2rem]">
        {item.value}
      </p>
      <p className="mt-1 text-xs font-medium leading-5 text-gray-500 dark:text-gray-400 sm:text-sm sm:whitespace-nowrap">
        {item.title}
      </p>
    </div>
  )
}

export function Hero() {
  return (
    <section id="top" className="space-y-7" aria-labelledby="hero-title">
      <div className="flex items-center gap-4 sm:gap-6">
        <div className="relative shrink-0">
          <img
            src={profile.photoSquare}
            alt={`Portrait of ${profile.name}`}
            width={160}
            height={160}
            className="h-28 w-28 rounded-full border-2 border-gray-200 object-cover object-center shadow-sm dark:border-gray-500 sm:h-40 sm:w-40"
          />
          <span
            className="absolute bottom-2 right-2 h-4 w-4 rounded-full border-2 border-white bg-emerald-500 dark:border-ink"
            aria-hidden="true"
          />
        </div>

        <div className="flex min-w-0 flex-col justify-center gap-2.5">
          <p className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white md:text-3xl">
            {profile.name}
            <Icon name="badge-check" className="h-6 w-6 text-accent" />
          </p>
          <p className="flex flex-wrap items-center gap-x-2 text-sm leading-5 text-gray-500 dark:text-gray-400 sm:text-base">
            <span>IT Support</span>
            <span aria-hidden="true" className="text-gray-300 dark:text-gray-600">•</span>
            <span>Web Development</span>
            <span aria-hidden="true" className="text-gray-300 dark:text-gray-600">•</span>
            <span>Infrastructure</span>
          </p>
          <p className="flex items-center gap-1.5 text-sm text-gray-400 dark:text-gray-500">
            <Icon name="pin" className="h-3.5 w-3.5" />
            {profile.location}
          </p>
          <div className="flex items-start gap-3 pt-1">
            {profile.socials.map((social) => {
              const isExternal = social.href.startsWith('http')
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  title={social.label}
                  aria-label={social.label}
                  className="text-gray-500 opacity-80 transition-all hover:-translate-y-0.5 hover:text-gray-900 hover:opacity-100 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:text-gray-300 dark:hover:text-white"
                >
                  <Icon name={social.label.toLowerCase()} className="h-5 w-5" />
                </a>
              )
            })}
          </div>
        </div>
      </div>

      <div className="space-y-4 sm:space-y-5">
        <h1
          id="hero-title"
          className="max-w-full text-[1.7rem] font-bold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-[2.05rem] md:text-[2.15rem]"
        >
          I Support, Build & <span className="text-accent">{profile.accent}</span>
        </h1>

        <p className="text-base font-light leading-7 text-gray-500 dark:text-gray-400 sm:text-lg sm:leading-8">
          {profile.summary}
        </p>

        <div className="flex flex-wrap gap-3 pt-2 sm:gap-4">
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className={linkStyle}>
            <span>View Resume</span>
            <Icon name="arrow-right" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href={profile.resume} download className={ghostStyle}>
            <Icon name="download" className="h-4 w-4" />
            <span>Download</span>
          </a>
        </div>

        <div className="grid grid-cols-3 gap-2 pt-4 sm:gap-4 sm:pt-5" aria-label="Career highlights">
          {profile.highlights.map((item) => (
            <HighlightCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
