import type { ReactNode } from "react"
import { Link } from "react-router-dom"

type ButtonVariant = "primary" | "secondary"

// Classes Tailwind complètes par variante : jamais construites dynamiquement.
const classesParVariante: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-600 text-white hover:bg-primary-700 disabled:bg-neutral-200 disabled:text-neutral-500",
  secondary:
    "border border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-50 disabled:text-neutral-500 disabled:border-neutral-200",
}

const classesBase =
  "inline-flex min-h-11 cursor-pointer items-center justify-center rounded-md px-4 text-base font-medium transition-colors disabled:cursor-not-allowed"

type ButtonProps = {
  children: ReactNode
  onClick?: () => void
  variant?: ButtonVariant
  type?: "button" | "submit"
  disabled?: boolean
  ariaLabel?: string
}

function Button({
  children,
  onClick,
  variant = "primary",
  type = "button",
  disabled = false,
  ariaLabel,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`${classesBase} ${classesParVariante[variant]}`}
    >
      {children}
    </button>
  )
}

export default Button

type BoutonLienProps = {
  children: ReactNode
  to: string
  variant?: ButtonVariant
}

// Même apparence que Button, mais pour une vraie navigation : une balise <a> (via react-router),
// pas un <button>, pour rester correct au clavier et pour les lecteurs d'écran.
export function BoutonLien({ children, to, variant = "primary" }: BoutonLienProps) {
  return (
    <Link to={to} className={`${classesBase} ${classesParVariante[variant]}`}>
      {children}
    </Link>
  )
}
