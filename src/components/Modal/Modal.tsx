import { useEffect, useRef, type ReactNode } from "react"
import Button from "../Button/Button"

type ModalProps = {
  titre: string
  onFermer: () => void
  children: ReactNode
}

// Une seule modal peut être ouverte à la fois dans l'application : id fixe, pas de collision.
const ID_TITRE = "modal-titre"

function Modal({ titre, onFermer, children }: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const elementActifAvant = document.activeElement as HTMLElement | null
    const elementsFocusables = dialogRef.current?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    )
    elementsFocusables?.[0]?.focus()

    function surTouche(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onFermer()
        return
      }
      if (event.key !== "Tab" || !elementsFocusables || elementsFocusables.length === 0) return

      const premier = elementsFocusables[0]
      const dernier = elementsFocusables[elementsFocusables.length - 1]

      // Piège le focus à l'intérieur de la modal : boucle du dernier au premier élément et inversement.
      if (event.shiftKey && document.activeElement === premier) {
        event.preventDefault()
        dernier.focus()
      } else if (!event.shiftKey && document.activeElement === dernier) {
        event.preventDefault()
        premier.focus()
      }
    }

    document.addEventListener("keydown", surTouche)
    return () => {
      document.removeEventListener("keydown", surTouche)
      elementActifAvant?.focus()
    }
  }, [onFermer])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-900/50 p-4">
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={ID_TITRE}
        className="max-h-full w-full max-w-md overflow-y-auto rounded-md border border-neutral-200 bg-white p-6"
      >
        <div className="flex items-start justify-between gap-4">
          <h2 id={ID_TITRE} className="text-lg font-semibold text-neutral-900">
            {titre}
          </h2>
          <Button variant="secondary" onClick={onFermer}>
            Fermer
          </Button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  )
}

export default Modal
