import { useEffect, useState } from 'react'
import { profile } from '../data/content.js'

const COUNTER_KEY = 'subhanfauzan-portfolio'

export function Footer() {
  const [visits, setVisits] = useState(null)

  useEffect(() => {
    if (sessionStorage.getItem('visit-counted')) {
      fetch(`https://api.counterapi.dev/v1/${COUNTER_KEY}/visits`)
        .then((r) => r.json())
        .then((d) => setVisits(d.count))
        .catch(() => {})
      return
    }
    fetch(`https://api.counterapi.dev/v1/${COUNTER_KEY}/visits/up`)
      .then((r) => r.json())
      .then((d) => {
        setVisits(d.count)
        sessionStorage.setItem('visit-counted', '1')
      })
      .catch(() => {})
  }, [])

  return (
    <footer className="flex flex-col items-center justify-between gap-3 border-t border-dashed border-gray-200 pt-6 text-xs text-gray-400 dark:border-gray-700 dark:text-gray-500 sm:flex-row">
      <p>
        © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind CSS.
      </p>
      {visits !== null && (
        <span className="tabular-nums">Kunjungan: {visits.toLocaleString('id-ID')}</span>
      )}
      <a
        href="#top"
        className="transition-colors hover:text-gray-900 dark:hover:text-white"
      >
        Back to top
      </a>
    </footer>
  )
}
