import { useState, type FormEvent } from "react"
import telephonesJson from "../data/telephones.json"
import type { Telephone } from "../types/telephone"
import Button from "../components/Button/Button"
import Field from "../components/Field/Field"

// Le JSON est élargi en `string` par TypeScript (limite connue des imports JSON) ;
// les valeurs sont garanties correctes par les données elles-mêmes.
const telephones = telephonesJson as Telephone[]

const PRIX_GARANTIE_ETENDUE = 29

const formatteurPrix = new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" })
const formatteurDate = new Intl.DateTimeFormat("fr-FR", { dateStyle: "long" })

function dateEnISO(date: Date): string {
  return date.toISOString().slice(0, 10)
}

// Retrait possible seulement dans les 48h (aujourd'hui et les deux jours suivants).
const dateMin = dateEnISO(new Date())
const dateMax = dateEnISO(new Date(Date.now() + 2 * 24 * 60 * 60 * 1000))

type Erreurs = Partial<
  Record<"telephoneId" | "nom" | "email" | "telephoneClient" | "dateRetrait", string>
>

function Reservation() {
  const [telephoneId, setTelephoneId] = useState("")
  const [garantieEtendue, setGarantieEtendue] = useState(false)
  const [nom, setNom] = useState("")
  const [email, setEmail] = useState("")
  const [telephoneClient, setTelephoneClient] = useState("")
  const [dateRetrait, setDateRetrait] = useState("")
  const [erreurs, setErreurs] = useState<Erreurs>({})
  const [estConfirme, setEstConfirme] = useState(false)

  const telephoneChoisi = telephones.find((telephone) => telephone.id === telephoneId)
  // Prix total DÉRIVÉ à chaque rendu : jamais stocké dans l'état.
  const prixTotal = telephoneChoisi
    ? telephoneChoisi.prix + (garantieEtendue ? PRIX_GARANTIE_ETENDUE : 0)
    : 0

  function valider(): Erreurs {
    const nouvellesErreurs: Erreurs = {}

    if (!telephoneId) {
      nouvellesErreurs.telephoneId = "Choisissez un téléphone avant de valider."
    }
    if (!nom.trim()) {
      nouvellesErreurs.nom = "Merci d'indiquer votre nom."
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nouvellesErreurs.email = "Saisissez une adresse e-mail valide, par exemple nom@exemple.fr."
    }
    if (!/^0[1-9]\d{8}$/.test(telephoneClient.replace(/\s/g, ""))) {
      nouvellesErreurs.telephoneClient = "Saisissez un numéro de téléphone valide à 10 chiffres."
    }
    if (!dateRetrait || dateRetrait < dateMin || dateRetrait > dateMax) {
      nouvellesErreurs.dateRetrait = "Choisissez une date de retrait dans les 48 heures."
    }

    return nouvellesErreurs
  }

  function surEnvoi(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nouvellesErreurs = valider()
    setErreurs(nouvellesErreurs)
    if (Object.keys(nouvellesErreurs).length === 0) {
      setEstConfirme(true)
    }
  }

  if (estConfirme && telephoneChoisi) {
    return (
      <section className="mx-auto max-w-md px-4 py-8">
        <h1 className="text-2xl font-semibold text-neutral-900">Réservation confirmée</h1>
        <p className="mt-4 text-neutral-900">
          Merci {nom}, votre {telephoneChoisi.marque} {telephoneChoisi.modele} vous attend à la
          boutique de Sedan.
        </p>
        <ul className="mt-4 flex flex-col gap-1 text-neutral-900">
          <li>Retrait prévu le {formatteurDate.format(new Date(dateRetrait))}</li>
          <li>Garantie {garantieEtendue ? "24 mois" : "12 mois"}</li>
          <li>Total à régler en boutique : {formatteurPrix.format(prixTotal)}</li>
          <li>Confirmation envoyée à {email}</li>
        </ul>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-md px-4 py-8">
      <h1 className="text-2xl font-semibold text-neutral-900">Réserver un retrait en boutique</h1>

      <form onSubmit={surEnvoi} className="mt-6 flex flex-col gap-4" noValidate>
        <div className="flex flex-col gap-1">
          <label htmlFor="telephone" className="text-base font-medium text-neutral-900">
            Téléphone à retirer
          </label>
          <select
            id="telephone"
            value={telephoneId}
            onChange={(event) => setTelephoneId(event.target.value)}
            aria-invalid={erreurs.telephoneId ? true : undefined}
            aria-describedby={erreurs.telephoneId ? "telephone-erreur" : undefined}
            className={`min-h-11 rounded-md border bg-white px-3 text-base text-neutral-900 ${
              erreurs.telephoneId ? "border-error" : "border-neutral-200"
            }`}
          >
            <option value="">— Choisissez un téléphone —</option>
            {telephones.map((telephone) => (
              <option key={telephone.id} value={telephone.id}>
                {telephone.marque} {telephone.modele} — {formatteurPrix.format(telephone.prix)}
              </option>
            ))}
          </select>
          {erreurs.telephoneId && (
            <p id="telephone-erreur" role="alert" className="text-sm text-error">
              {erreurs.telephoneId}
            </p>
          )}
        </div>

        <label className="flex min-h-11 items-center gap-2 text-base text-neutral-900">
          <input
            type="checkbox"
            checked={garantieEtendue}
            onChange={(event) => setGarantieEtendue(event.target.checked)}
            className="h-5 w-5 accent-primary-600"
          />
          Étendre la garantie à 24 mois (+ {formatteurPrix.format(PRIX_GARANTIE_ETENDUE)})
        </label>

        <Field id="nom" label="Nom" value={nom} onChange={setNom} error={erreurs.nom} required />
        <Field
          id="email"
          label="Adresse e-mail"
          type="email"
          value={email}
          onChange={setEmail}
          error={erreurs.email}
          required
        />
        <Field
          id="telephoneClient"
          label="Téléphone"
          type="tel"
          value={telephoneClient}
          onChange={setTelephoneClient}
          error={erreurs.telephoneClient}
          required
        />
        <Field
          id="dateRetrait"
          label="Date de retrait (sous 48h)"
          type="date"
          value={dateRetrait}
          onChange={setDateRetrait}
          error={erreurs.dateRetrait}
          min={dateMin}
          max={dateMax}
          required
        />

        {telephoneChoisi && (
          <p className="text-lg font-semibold text-neutral-900">
            Total à régler en boutique : {formatteurPrix.format(prixTotal)}
          </p>
        )}

        <Button type="submit">Valider la réservation</Button>
      </form>
    </section>
  )
}

export default Reservation
