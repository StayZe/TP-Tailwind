import { useState } from "react"
import { Link, NavLink } from "react-router-dom"

const liens = [
  { to: "/", label: "Accueil" },
  { to: "/catalogue", label: "Catalogue" },
  { to: "/reservation", label: "Réservation" },
]

const classesLien =
  "inline-flex min-h-11 cursor-pointer items-center rounded-md px-3 text-base font-medium transition-colors"

function classesSelonEtat(estActif: boolean) {
  return estActif
    ? `${classesLien} bg-primary-50 text-primary-700`
    : `${classesLien} text-neutral-900 hover:bg-neutral-50`
}

function Header() {
  const [menuOuvert, setMenuOuvert] = useState(false)

  return (
    <header className="border-b border-neutral-200 bg-white px-4 py-3">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <Link to="/" onClick={() => setMenuOuvert(false)} className="inline-flex min-h-11 items-center">
          <img src="/img/logo.png" alt="Rebond" className="h-8 w-auto" />
        </Link>

        <nav className="hidden sm:flex sm:items-center sm:gap-1" aria-label="Navigation principale">
          {liens.map((lien) => (
            <NavLink key={lien.to} to={lien.to} end className={({ isActive }) => classesSelonEtat(isActive)}>
              {lien.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMenuOuvert((ouvert) => !ouvert)}
          aria-expanded={menuOuvert}
          aria-controls="menu-mobile"
          aria-label={menuOuvert ? "Fermer le menu" : "Ouvrir le menu"}
          className="inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-md sm:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
            className="h-6 w-6 text-neutral-900"
          >
            {menuOuvert ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOuvert && (
        <nav
          id="menu-mobile"
          className="mt-3 flex flex-col gap-1 sm:hidden"
          aria-label="Navigation principale"
        >
          {liens.map((lien) => (
            <NavLink
              key={lien.to}
              to={lien.to}
              end
              onClick={() => setMenuOuvert(false)}
              className={({ isActive }) => `${classesSelonEtat(isActive)} w-full`}
            >
              {lien.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Header
