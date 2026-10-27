type PictoTelephoneProps = {
  className?: string
}

// Pictogramme purement décoratif : l'information (marque, modèle) est déjà
// donnée par le texte à côté, jamais par cette icône seule.
function PictoTelephone({ className }: PictoTelephoneProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      className={className}
    >
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <line x1="10" y1="19" x2="14" y2="19" />
    </svg>
  )
}

export default PictoTelephone
