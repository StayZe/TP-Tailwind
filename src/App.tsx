import { useState } from "react"
import Accueil from "./screens/Accueil"
import Catalogue from "./screens/Catalogue"
import Reservation from "./screens/Reservation"

type Vue = "accueil" | "catalogue" | "reservation"

function App() {
  const [vue, setVue] = useState<Vue>("accueil")
  // Téléphone choisi dans le Catalogue, transmis à l'écran de Réservation.
  const [telephonePreselectionne, setTelephonePreselectionne] = useState<string>()

  function allerReserver(telephoneId: string) {
    setTelephonePreselectionne(telephoneId)
    setVue("reservation")
  }

  return (
    <>
      <header className="border-b border-neutral-200 bg-white px-4 py-3">
        <button
          type="button"
          onClick={() => setVue("accueil")}
          className="inline-flex min-h-11 items-center text-base font-semibold text-neutral-900"
        >
          Rebond
        </button>
      </header>

      {vue === "accueil" && <Accueil onVoirTelephones={() => setVue("catalogue")} />}
      {vue === "catalogue" && <Catalogue onReserver={allerReserver} />}
      {vue === "reservation" && (
        <Reservation
          telephoneIdInitial={telephonePreselectionne}
          onRetourAccueil={() => setVue("accueil")}
        />
      )}
    </>
  )
}

export default App
