import { Link, Route, Routes } from "react-router-dom"
import Accueil from "./screens/Accueil"
import Catalogue from "./screens/Catalogue"
import Reservation from "./screens/Reservation"

function App() {
  return (
    <>
      <header className="border-b border-neutral-200 bg-white px-4 py-3">
        <Link
          to="/"
          className="inline-flex min-h-11 items-center text-base font-semibold text-neutral-900"
        >
          Rebond
        </Link>
      </header>

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
    </>
  )
}

export default App
