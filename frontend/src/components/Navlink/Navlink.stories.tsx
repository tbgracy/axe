import Navlink from ".";
import { Settings } from "@mui/icons-material";

export default {
  title: "Navlink",
  component: Navlink,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    icon: <Settings htmlColor="#cdcdcd" />,
    children: "Paramètres",
    target: "/settings",
    current: false,
  },
};

export const Current = {
  args: { ...Default.args, current: true },
};
