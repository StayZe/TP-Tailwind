import type { Meta, StoryObj } from "@storybook/react-vite"
import type { Telephone } from "../../types/telephone"
import Card from "./Card"

const telephoneExemple: Telephone = {
  id: "iphone-12-64",
  marque: "Apple",
  modele: "iPhone 12",
  etat: "bon",
  stockageGo: 64,
  prix: 329,
  ecranPouces: 6.1,
  batteriePct: 87,
  couleur: "Noir",
  stock: 4,
  description: "iPhone 12 reconditionné, 64 Go, batterie à 87 % de sa capacité d'origine.",
}

const meta: Meta<typeof Card> = {
  title: "Composants/Card",
  component: Card,
  args: {
    telephone: telephoneExemple,
    onVoirDetail: () => {},
  },
}

export default meta

type Story = StoryObj<typeof Card>

export const Default: Story = {}

export const RuptureDeStock: Story = {
  args: { telephone: { ...telephoneExemple, stock: 0 } },
}

export const NomTresLong: Story = {
  args: {
    telephone: {
      ...telephoneExemple,
      marque: "Samsung",
      modele: "Galaxy S21 Ultra 5G Édition Collector Très Longue",
    },
  },
}
