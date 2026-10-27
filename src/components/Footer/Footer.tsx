import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white px-4 py-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 text-sm text-neutral-500 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Rebond — Sedan</p>
        <nav aria-label="Liens légaux" className="flex gap-4">
          <Link to="/mentions-legales" className="cursor-pointer hover:text-neutral-900">
            Mentions légales
          </Link>
          <Link to="/confidentialite" className="cursor-pointer hover:text-neutral-900">
            Politique de confidentialité
          </Link>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
