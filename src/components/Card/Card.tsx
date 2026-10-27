import type { Telephone } from "../../types/telephone"
import Button from "../Button/Button"
import EtatBadge from "../EtatBadge/EtatBadge"
import PhotoTelephone from "../PhotoTelephone/PhotoTelephone"

type CardProps = {
  telephone: Telephone
  onVoirDetail: () => void
}

const formatteurPrix = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
})

function Card({ telephone, onVoirDetail }: CardProps) {
  const enRupture = telephone.stock === 0

  return (
    <div className="flex flex-col gap-3 rounded-md border border-neutral-200 bg-white p-4">
      <div className="flex h-32 items-center justify-center rounded-md bg-neutral-50">
        <PhotoTelephone
          telephone={telephone}
          className="h-full w-full object-contain p-3 text-primary-600"
        />
      </div>
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-base font-semibold text-neutral-900">
          {telephone.marque} {telephone.modele}
        </h3>
        <EtatBadge etat={telephone.etat} />
      </div>
      <p className="text-sm text-neutral-500">
        {telephone.stockageGo} Go · {telephone.ecranPouces}" · {telephone.batteriePct} % batterie
      </p>
      <p className="text-lg font-semibold text-neutral-900">{formatteurPrix.format(telephone.prix)}</p>
      {enRupture && <p className="text-sm text-error">Rupture de stock</p>}
      <Button onClick={onVoirDetail} disabled={enRupture}>
        Voir le détail
      </Button>
    </div>
  )
}

export default Card
