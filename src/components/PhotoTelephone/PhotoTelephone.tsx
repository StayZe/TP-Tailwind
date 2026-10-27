import { useState } from "react"
import images from "../../data/images"
import type { Telephone } from "../../types/telephone"
import PictoTelephone from "../icons/PictoTelephone"

type PhotoTelephoneProps = {
  telephone: Telephone
  className?: string
}

// Affiche la vraie photo si elle existe et charge correctement, sinon le pictogramme
// décoratif de secours (ex. téléphone pas encore photographié, fichier manquant).
function PhotoTelephone({ telephone, className }: PhotoTelephoneProps) {
  const [enErreur, setEnErreur] = useState(false)
  const chemin = images[telephone.id]

  if (!chemin || enErreur) {
    return <PictoTelephone className={className} />
  }

  return (
    <img
      src={chemin}
      alt={`${telephone.marque} ${telephone.modele}`}
      loading="lazy"
      onError={() => setEnErreur(true)}
      className={className}
    />
  )
}

export default PhotoTelephone
