export function Section({ id, title, action, children, className = '' }) {
  return (
    <section id={id} className={`w-full space-y-5 ${className}`} aria-labelledby={`${id}-title`}>
      {title && (
        <div className="flex items-center justify-between gap-4">
          <p
            id={`${id}-title`}
            className="text-2xl font-light tracking-tight text-gray-900 dark:text-white"
          >
            {title}
          </p>
          {action}
        </div>
      )}
      {children}
    </section>
  )
}

export function SectionLabel({ children }) {
  return (
    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-gray-400 dark:text-gray-500">
      {children}
    </p>
  )
}

export function Divider() {
  return <div className="border-t border-dashed border-gray-200 dark:border-gray-700" />
}
