import type { Meta, StoryObj } from "@storybook/react-vite"
import Button from "./Button"

const meta: Meta<typeof Button> = {
  title: "Composants/Button",
  component: Button,
  args: {
    children: "Voir les téléphones",
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Primaire: Story = {}

export const Secondaire: Story = {
  args: { variant: "secondary", children: "Annuler" },
}

export const Desactive: Story = {
  args: { disabled: true },
}

export const ContenuTresLong: Story = {
  args: {
    children:
      "Réserver ce téléphone reconditionné et venir le récupérer en boutique à Sedan sous 48 heures",
  },
}
