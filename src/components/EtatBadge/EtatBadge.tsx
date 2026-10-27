import type { Etat } from "../../types/telephone"
import styles from "./EtatBadge.module.scss"

type EtatBadgeProps = {
  etat: Etat
}

const libelles: Record<Etat, string> = {
  correct: "Correct",
  bon: "Bon",
  excellent: "Excellent",
}

function EtatBadge({ etat }: EtatBadgeProps) {
  return <span className={`${styles.badge} ${styles[etat]}`}>{libelles[etat]}</span>
}

export default EtatBadge
