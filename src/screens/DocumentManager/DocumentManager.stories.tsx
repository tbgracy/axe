import { Meta, StoryObj } from "@storybook/react";
import DocumentManager from "./DocumentManager";

const meta: Meta<typeof DocumentManager> = {
  title: "Screens/DocumentManager",
  component: DocumentManager,
};

export default meta;

type Story = StoryObj<typeof DocumentManager>;

export const Default: Story = {
  parameters: {
    layout: "fullscreen",
  },
};
