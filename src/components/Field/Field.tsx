import type { ChangeEvent } from "react"

type FieldProps = {
  id: string
  label: string
  value: string
  onChange: (valeur: string) => void
  type?: "text" | "email" | "tel" | "date"
  error?: string
  required?: boolean
  placeholder?: string
  disabled?: boolean
  autoComplete?: string
  // Pour type="date" : bornes natives (ex. limiter le retrait aux 48h à venir).
  min?: string
  max?: string
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  error,
  required = false,
  placeholder,
  disabled = false,
  autoComplete,
  min,
  max,
}: FieldProps) {
  const idErreur = `${id}-erreur`

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-base font-medium text-neutral-900">
        {label}
        {required && " *"}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete={autoComplete}
        min={min}
        max={max}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? idErreur : undefined}
        onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
        className={`min-h-11 rounded-md border bg-white px-3 text-base text-neutral-900 disabled:bg-neutral-50 disabled:text-neutral-500 ${
          error ? "border-error" : "border-neutral-200"
        }`}
      />
      {/* role="alert" : le message d'erreur est annoncé dès son apparition. */}
      {error && (
        <p id={idErreur} role="alert" className="text-sm text-error">
          {error}
        </p>
      )}
    </div>
  )
}

export default Field
