import Navlink from ".";
import { Settings } from "@mui/icons-material";
import { fn } from "@storybook/test";

export default {
  title: "Navlink",
  component: Navlink,
};

export const Default = {
  args: {
    icon: <Settings htmlColor="#cdcdcd" />,
    children: "Paramètres",
    onClick: fn(),
    current: false,
  },
};

export const Current = {
  args: { ...Default.args, current: true },
};
