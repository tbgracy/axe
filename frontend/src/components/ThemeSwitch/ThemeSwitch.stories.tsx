import { fn } from "@storybook/test";
import ThemeSwitch from "./ThemeSwitch";

export default {
  title: "ThemeSwitch",
  component: ThemeSwitch,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    mode: "dark",
    onClick: fn(),
  },
};

export const Light = {
  args: {
    mode: "light",
    onClick: fn(),
  },
};
