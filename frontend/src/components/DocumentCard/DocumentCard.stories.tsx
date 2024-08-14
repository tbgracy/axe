import { fn } from "@storybook/test";
import { TextDocument } from "../../types";
import DocumentCard from "./DocumentCard";

const document: TextDocument = {
  id: "1",
  title: "Document Title",
  content: "Document Content",
  shared: true,
  size: {
    id: "1",
    name: "A4",
    width: 210,
    height: 297,
  },
};

export default {
  title: "DocumentCard",
  component: DocumentCard,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    document,
    onDelete: fn(),
    onOpen: fn(),
    onShare: fn(),
  },
};
