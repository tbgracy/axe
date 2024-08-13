import Avatar from "./Avatar";

export default {
  title: "Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    expanded: true,
    user: {
      id: "jflksjdlkjfd",
      username: "tbgracy",
      email: "gtsierenana@gmail.com",
      profilePicturePath: "/pdp.png",
    },
  },
};

export const NoUser = {
  args: {},
};

export const NoPicture = {
  args: {
    ...Default.args,
    user: { ...Default.args.user, profilePicturePath: undefined },
  },
};

export const Collapsed = {
  args: {
    ...Default.args,
    expanded: false,
  },
};
