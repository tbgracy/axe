import Header from "./Header";

export default {
  title: "Editor Header",
  component: Header,
};

export const Default = {
  parameters: {
    layout: "padded",
  },
  args: {
    users: [
      {
        id: "1",
        name: "John Doe",
        imageUrl: "/pdp.png",
      },
      {
        id: "2",
        name: "Jane Doe",
        imageUrl: "/pdp.png",
      },
    ],
    document: {
      id: "1",
      title: "Untitled Document",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  },
};
