import { EditorContent, useEditor } from "@tiptap/react";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import CharacterCount from "@tiptap/extension-character-count";
import TextAlign from "@tiptap/extension-text-align";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import FontFamily from "@tiptap/extension-font-family";

import Header from "../../components/Header";
import Sheet from "../../components/Sheet";
import Statusbar from "../../components/Statusbar";

import EditorContext from "./context";
import { TextDocument, User } from "../../types";

const extensions = [
  StarterKit,
  Underline,
  FontFamily,
  TextStyle,
  Color,
  CharacterCount,
  TextAlign.configure({
    types: ["heading", "paragraph"],
  }),
];

export default function EditorScreen() {
  const users: User[] = [];
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

  const editor = useEditor({ extensions });
  const wordCount = editor?.storage.characterCount.words();

  return (
    <EditorContext.Provider value={editor}>
      <div className="flex flex-col bg-gray-200 items-center h-[100vh] w-full">
        <Header document={document} users={users} />
        <div className="flex-grow overflow-scroll w-full py-4">
          <Sheet document={document}>
            <EditorContent editor={editor} className="h-[100%]" />
          </Sheet>
        </div>
        <Statusbar currentPage={0} pageCount={0} wordCount={wordCount} />
      </div>
    </EditorContext.Provider>
  );
}
