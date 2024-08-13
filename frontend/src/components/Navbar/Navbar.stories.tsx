import Navbar from "./Navbar";

import { Default as AvatarStory } from "../Avatar/Avatar.stories";

export default {
  title: "Navbar",
  component: Navbar,
};

export const Default = {
  args: {
    user: { ...AvatarStory.args.user },
  },
};
