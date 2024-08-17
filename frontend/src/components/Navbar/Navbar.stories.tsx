import Navbar from "./Navbar";

import { Default as AvatarStory } from "../Avatar/Avatar.stories";
import { fn } from "@storybook/test";

export default {
  title: "Navbar",
  component: Navbar,
};

export const Default = {
  args: {
    user: { ...AvatarStory.args.user },
    themeMode: "dark",
    onGoBack: fn(),
    onGoToHelp: fn(),
    onGoToSessionManager: fn(),
    onGoToSettings: fn(),
    onGoToAbout: fn(),
    onSwitchTheme: fn(),
  },
};
