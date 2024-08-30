import { fn } from "@storybook/test";
import DocumentCard from "./DocumentCard";

const document: TextDocument = {
  id: "1",
  title: "Document Title",
  content: "Document Content",
  shared: true,
  width: 210,
  height: 297,
};

export default {
  title: "DocumentCard",
  component: DocumentCard,
};

export const Default = {
  args: {
    document,
    onDelete: fn(),
    onOpen: fn(),
    onShare: fn(),
  },
};
