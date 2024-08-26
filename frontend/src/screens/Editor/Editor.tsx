import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import FontFamily from "@tiptap/extension-font-family";

import Header from "../../components/Header";
import Sheet from "../../components/Sheet";
import Statusbar from "../../components/Statusbar";

import { TextDocument, User } from "../../types";
import EditorContext from "./context";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import CharacterCount from "@tiptap/extension-character-count";
import FontSize from "tiptap-extension-font-size";

type EditorScreenProps = {
  document: TextDocument;
  users: User[];
};

const extensions = [
  StarterKit,
  Underline,
  FontFamily,
  TextStyle,
  Color,
  CharacterCount,
  FontSize,
];

export default function EditorScreen({ document, users }: EditorScreenProps) {
  const editor = useEditor({ extensions });
  const wordCount = editor?.storage.characterCount.words();

  return (
    <div className="flex flex-col bg-gray-200 items-center h-[100vh] w-full">
      <EditorContext.Provider value={editor}>
        <Header document={document} users={users} />
        <div className="flex-grow overflow-scroll w-full py-4">
          <Sheet document={document}>
            <EditorContent editor={editor} className="h-[100%]" />
          </Sheet>
        </div>
        <Statusbar currentPage={0} pageCount={0} wordCount={wordCount} />
      </EditorContext.Provider>
    </div>
  );
}
