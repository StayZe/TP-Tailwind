import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import Accueil from "./screens/Accueil"
import Catalogue from "./screens/Catalogue"
import Reservation from "./screens/Reservation"

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
    </>
  )
}

export default App
