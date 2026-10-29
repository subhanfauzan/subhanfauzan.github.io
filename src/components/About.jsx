import { useState } from 'react'
import { Icon } from './Icon.jsx'
import { profile } from '../data/content.js'
import { useSpotlight } from '../hooks.js'

export function About() {
  const [showSquare, setShowSquare] = useState(false)
  const { ref, onMouseMove } = useSpotlight()

  return (
    <section
      ref={ref}
      onMouseMove={onMouseMove}
      id="about"
      className="card-spotlight rounded-2xl border border-gray-200 p-5 dark:border-gray-700 sm:p-7"
      aria-labelledby="about-title"
    >
      <div className="space-y-6">
        <div className="flex items-center gap-4 sm:gap-6">
          <button
            type="button"
            onClick={() => setShowSquare((v) => !v)}
            aria-label="Ganti foto profil"
            className="h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-gray-200 bg-gray-100 shadow-sm transition-colors hover:border-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:border-gray-500 dark:bg-surface-dark sm:h-32 sm:w-32"
          >
            <img
              src={showSquare ? profile.photo : profile.photoSquare}
              alt={`Foto ${profile.name}`}
              className={`h-full w-full object-cover object-center transition-transform duration-500 ${
                showSquare ? 'scale-100' : 'scale-105'
              }`}
            />
          </button>

          <div className="min-w-0 flex-1">
            <h2
              id="about-title"
              className="flex items-center gap-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-2xl"
            >
              {profile.name}
              <Icon name="badge-check" className="h-5 w-5 text-accent" />
            </h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{profile.role}</p>
            <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
              <Icon name="pin" className="h-3.5 w-3.5" />
              {profile.location}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm leading-7 text-gray-500 dark:text-gray-400 sm:text-base">
            Dengan latar belakang pendidikan di bidang Teknik Informatika, perjalanan karier saya berfokus
            pada bidang teknologi dan informasi. Pengetahuan dan keterampilan yang saya peroleh selama
            pendidikan menjadi dasar yang kuat untuk mendukung karier saya di industri teknologi.
          </p>
          <p className="text-sm leading-7 text-gray-500 dark:text-gray-400 sm:text-base">
            Meskipun memiliki fokus di bidang IT, saya terbuka untuk mempelajari bidang lain karena mampu
            mempelajari konsep baru dengan cepat, beradaptasi dengan berbagai lingkungan kerja, serta
            memberikan kontribusi secara optimal dalam setiap peran yang saya jalankan.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {['Troubleshooting', 'Networking', 'Backend', 'API Integration', 'ISO 20000'].map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-lg border border-dashed border-gray-300 px-2.5 py-1 text-xs text-gray-600 dark:border-gray-600 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
