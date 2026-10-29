import { useEffect, useState } from 'react'
import { Icon } from './Icon.jsx'
import { navItems } from '../data/content.js'
import { useActiveSection, useScrolled, useTheme } from '../hooks.js'

const sectionIds = navItems.map((n) => n.id)

export function Header() {
  const { dark, toggle } = useTheme()
  const scrolled = useScrolled()
  const active = useActiveSection(sectionIds)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const scrollTo = (id) => (event) => {
    event.preventDefault()
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-300 ${
        scrolled
          ? 'border-b border-gray-200 bg-white/85 backdrop-blur-md dark:border-gray-800 dark:bg-ink/85'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-4 py-3 sm:px-6">
        <a
          href="#top"
          onClick={scrollTo('top')}
          className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white"
        >
          Subhan<span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-1 sm:flex" aria-label="Navigasi utama">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={scrollTo(item.id)}
              className={`rounded-md px-2.5 py-1.5 text-sm transition-colors ${
                active === item.id
                  ? 'text-gray-900 dark:text-white'
                  : 'text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={toggle}
            aria-label={dark ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'}
            aria-pressed={dark}
            className="rounded-md p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
          >
            <Icon name={dark ? 'sun' : 'moon'} className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Buka menu navigasi"
            aria-expanded={menuOpen}
            className="rounded-md p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white sm:hidden"
          >
            <Icon name={menuOpen ? 'close' : 'menu'} className="h-5 w-5" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          className="border-t border-gray-200 bg-white px-4 py-2 dark:border-gray-800 dark:bg-ink sm:hidden"
          aria-label="Navigasi seluler"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={scrollTo(item.id)}
              className="block rounded-md px-2 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
