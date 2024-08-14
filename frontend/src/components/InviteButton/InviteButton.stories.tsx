import { fn } from "@storybook/test";
import InviteButton from "./InviteButton";

export default {
  title: "Invite Button",
  component: InviteButton,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    onClick: fn(),
  },
};
