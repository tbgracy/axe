import Searchbar from "./Searchbar";

export default {
  title: "Searchbar",
  component: Searchbar,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    onTyping: (text: string) => console.log(text),
  },
};
