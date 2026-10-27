import type { ReactNode } from "react"

type ButtonVariant = "primary" | "secondary"

type ButtonProps = {
  children: ReactNode
  onClick?: () => void
  variant?: ButtonVariant
  type?: "button" | "submit"
  disabled?: boolean
  ariaLabel?: string
}

// Classes Tailwind complètes par variante : jamais construites dynamiquement.
const classesParVariante: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-600 text-white hover:bg-primary-700 disabled:bg-neutral-200 disabled:text-neutral-500",
  secondary:
    "border border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-50 disabled:text-neutral-500 disabled:border-neutral-200",
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
      className={`inline-flex min-h-11 items-center justify-center rounded-md px-4 text-base font-medium transition-colors disabled:cursor-not-allowed ${classesParVariante[variant]}`}
    >
      {children}
    </button>
  )
}

export default Button
