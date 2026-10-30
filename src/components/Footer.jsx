import { profile } from '../data/content.js'

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-3 border-t border-dashed border-gray-200 pt-6 text-xs text-gray-400 dark:border-gray-700 dark:text-gray-500 sm:flex-row">
      <p>
        © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind CSS.
      </p>
      <img
        src="https://api.visitorbadge.io/api/visitors?path=subhanfauzan.github.io&label=Kunjungan&countColor=%23263759&style=flat"
        alt="Jumlah kunjungan"
        loading="lazy"
        height="20"
      />
      <a
        href="#top"
        className="transition-colors hover:text-gray-900 dark:hover:text-white"
      >
        Back to top
      </a>
    </footer>
  )
}
