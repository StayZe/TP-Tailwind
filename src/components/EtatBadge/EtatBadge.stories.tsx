import type { Meta, StoryObj } from "@storybook/react-vite"
import EtatBadge from "./EtatBadge"

const meta: Meta<typeof EtatBadge> = {
  title: "Composants/EtatBadge",
  component: EtatBadge,
}

export default meta

type Story = StoryObj<typeof EtatBadge>

export const Excellent: Story = {
  args: { etat: "excellent" },
}

export const Bon: Story = {
  args: { etat: "bon" },
}

export const Correct: Story = {
  args: { etat: "correct" },
}
