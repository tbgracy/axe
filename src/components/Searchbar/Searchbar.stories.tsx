import { fn } from "@storybook/test";
import Searchbar from "./Searchbar";

export default {
  title: "Searchbar",
  component: Searchbar,
};

export const Default = {
  args: {
    onTyping: fn(),
  },
};
