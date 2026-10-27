import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Accueil from "./screens/Accueil"
import Catalogue from "./screens/Catalogue"
import Confidentialite from "./screens/Confidentialite"
import MentionsLegales from "./screens/MentionsLegales"
import Reservation from "./screens/Reservation"

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/confidentialite" element={<Confidentialite />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
