import Statusbar from "./Statusbar";

export default {
  title: "Status bar",
  component: Statusbar,
};

export const Default = {
  parameters: {
    layout: "padded",
  },
  args: {
    currentPage: 2,
    pageCount: 21,
    wordCount: 234,
  },
};
