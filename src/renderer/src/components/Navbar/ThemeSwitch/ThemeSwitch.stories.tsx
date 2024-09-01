import { fn } from "@storybook/test";
import ThemeSwitch from "./ThemeSwitch";

export default {
  title: "ThemeSwitch",
  component: ThemeSwitch,
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
