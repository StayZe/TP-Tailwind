import { useState } from "react"
import telephonesJson from "../data/telephones.json"
import Button from "../components/Button/Button"
import Card from "../components/Card/Card"
import EtatBadge from "../components/EtatBadge/EtatBadge"
import Modal from "../components/Modal/Modal"
import PhotoTelephone from "../components/PhotoTelephone/PhotoTelephone"
import type { Telephone } from "../types/telephone"

// Le JSON est élargi en `string` par TypeScript (limite connue des imports JSON) ;
// les valeurs sont garanties correctes par les données elles-mêmes.
const telephones = telephonesJson as Telephone[]

const formatteurPrix = new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" })

type CatalogueProps = {
  onReserver: (telephoneId: string) => void
}

function Catalogue({ onReserver }: CatalogueProps) {
  const [telephoneSelectionne, setTelephoneSelectionne] = useState<Telephone | null>(null)

  return (
    <section className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="text-2xl font-semibold text-neutral-900">Nos téléphones reconditionnés</h1>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {telephones.map((telephone) => (
          <Card
            key={telephone.id}
            telephone={telephone}
            onVoirDetail={() => setTelephoneSelectionne(telephone)}
          />
        ))}
      </div>

      {telephoneSelectionne && (
        <Modal
          titre={`${telephoneSelectionne.marque} ${telephoneSelectionne.modele}`}
          onFermer={() => setTelephoneSelectionne(null)}
        >
          <div className="flex flex-col gap-3">
            <div className="flex h-48 items-center justify-center rounded-md bg-neutral-50">
              <PhotoTelephone
                telephone={telephoneSelectionne}
                className="h-full w-full object-contain p-4 text-primary-600"
              />
            </div>
            <EtatBadge etat={telephoneSelectionne.etat} />
            <p className="text-lg font-semibold text-neutral-900">
              {formatteurPrix.format(telephoneSelectionne.prix)}
            </p>
            <ul className="flex flex-col gap-1 text-base text-neutral-900">
              <li>{telephoneSelectionne.stockageGo} Go de stockage</li>
              <li>Écran {telephoneSelectionne.ecranPouces} pouces</li>
              <li>Batterie à {telephoneSelectionne.batteriePct} % de sa capacité</li>
              <li>Coloris {telephoneSelectionne.couleur}</li>
            </ul>
            <p className="text-neutral-900">{telephoneSelectionne.description}</p>
            <p className="text-sm text-neutral-500">
              {telephoneSelectionne.stock > 0
                ? `${telephoneSelectionne.stock} en stock à l'atelier de Sedan`
                : "Actuellement en rupture de stock"}
            </p>
            <Button
              onClick={() => onReserver(telephoneSelectionne.id)}
              disabled={telephoneSelectionne.stock === 0}
            >
              Réserver ce téléphone
            </Button>
          </div>
        </Modal>
      )}
    </section>
  )
}

export default Catalogue
