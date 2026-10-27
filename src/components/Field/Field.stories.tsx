import { useState, type ComponentProps } from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import Field from "./Field"

const meta: Meta<typeof Field> = {
  title: "Composants/Field",
  component: Field,
  args: {
    id: "email",
    label: "Adresse e-mail",
    type: "email",
    value: "",
  },
}

export default meta

type Story = StoryObj<typeof Field>

// Wrapper avec état local pour pouvoir réellement taper dans le champ côté Storybook.
function ChampInteractif(props: ComponentProps<typeof Field>) {
  const [valeur, setValeur] = useState(props.value)
  return <Field {...props} value={valeur} onChange={setValeur} />
}

export const Vide: Story = {
  render: (args) => <ChampInteractif {...args} />,
}

export const Rempli: Story = {
  render: (args) => <ChampInteractif {...args} />,
  args: { value: "monique.martin@exemple.fr" },
}

export const Erreur: Story = {
  render: (args) => <ChampInteractif {...args} />,
  args: { value: "monique.martin", error: "Veuillez saisir une adresse e-mail valide, par exemple nom@exemple.fr" },
}

export const Desactive: Story = {
  render: (args) => <ChampInteractif {...args} />,
  args: { value: "monique.martin@exemple.fr", disabled: true },
}
