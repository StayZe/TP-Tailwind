type FilterChipProps = {
  label: string
  selected: boolean
  onClick: () => void
  disabled?: boolean
}

// Classes complètes par état, jamais construites dynamiquement.
const classesParEtat = {
  selectionne: "border-primary-600 bg-primary-50 text-primary-700",
  inactif: "border-neutral-200 bg-white text-neutral-900 hover:border-primary-600",
}

function FilterChip({ label, selected, onClick, disabled = false }: FilterChipProps) {
  return (
    <button
      type="button"
      // aria-pressed signale l'état "activé/désactivé" d'un filtre, lu par les lecteurs d'écran.
      aria-pressed={selected}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex min-h-11 items-center justify-center rounded-full border px-4 text-base transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${
        selected ? classesParEtat.selectionne : classesParEtat.inactif
      }`}
    >
      {label}
    </button>
  )
}

export default FilterChip
