export type Etat = "correct" | "bon" | "excellent"

export type Telephone = {
  id: string
  marque: string
  modele: string
  etat: Etat
  stockageGo: number
  prix: number
  ecranPouces: number
  batteriePct: number
  couleur: string
  stock: number
  description: string
}
