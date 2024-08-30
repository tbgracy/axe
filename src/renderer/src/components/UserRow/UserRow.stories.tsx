import UserRow from "./UserRow";

export default {
  title: "User Row",
  component: UserRow,
};

const users: User[] = [
  {
    id: "2",
    username: "Jane Doe",
    email: "jane@gmail.com",
  },
  {
    id: "1",
    username: "John Doe",
    email: "john@gmail.com",
    profilePicturePath: "/pdp.png",
  },
  {
    id: "3",
    username: "Johnny Deep",
    email: "johnny@gmail.com",
  },
];

export const Default = {
  args: {
    users,
  },
};
