import { TextDocument } from "../../types";
import EditorScreen from "./Editor";

export default {
  title: "Screens/Editor",
  component: EditorScreen,
};

const document: TextDocument = {
  id: "1",
  title: "Document Title",
  content: "lorem ipsum",
  shared: true,
  size: {
    id: "1",
    name: "A4",
    width: 210,
    height: 297,
  },
};

export const Default = {
  parameters: {
    layout: "fullscreen",
  },
  args: {
    users: [],
    document,
  },
};
