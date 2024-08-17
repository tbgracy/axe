import { fn } from "@storybook/test";

import { Add } from "@mui/icons-material";
import Button from ".";

export default {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
};

export const Primary = {
  args: {
    primary: false,
    children: "Créer un document",
    icon: <Add htmlColor="white" />,
    onClick: fn(),
  },
};

export const WithoutIcon = {
  args: { ...Primary.args, icon: undefined },
};
