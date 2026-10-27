import type { Meta, StoryObj } from "@storybook/react-vite"
import FilterChip from "./FilterChip"

const meta: Meta<typeof FilterChip> = {
  title: "Composants/FilterChip",
  component: FilterChip,
  args: {
    label: "Excellent",
    selected: false,
    onClick: () => {},
  },
}

export default meta

type Story = StoryObj<typeof FilterChip>

export const Inactif: Story = {}

export const Selectionne: Story = {
  args: { selected: true },
}

export const Desactive: Story = {
  args: { disabled: true },
}

export const LibelleTresLong: Story = {
  args: { label: "Stockage minimum 256 Go et prix maximum 300 €" },
}
