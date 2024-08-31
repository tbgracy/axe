import { EditorContent, useEditor } from "@tiptap/react";
import Sheet from "../../components/Sheet";
import Header from "../../components/Header";
import Statusbar from "../../components/Statusbar";
import EditorContext from "./context";

import Color from "@tiptap/extension-color";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextStyle from "@tiptap/extension-text-style";
import TextAlign from "@tiptap/extension-text-align";
import FontFamily from "@tiptap/extension-font-family";
import CharacterCount from "@tiptap/extension-character-count";

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

export default function Content({ document }: { document: TextDocument }) {
  const editor = useEditor({ extensions, content: document?.content });
  const wordCount = editor?.storage.characterCount.words();
  return (
    <EditorContext.Provider value={editor}>
      <div className="flex flex-col bg-gray-200 items-center h-[100vh] w-full">
        <Header document={document!} users={[]} />
        <div className="flex-grow overflow-scroll w-full py-4">
          <Sheet document={document!}>
            <EditorContent editor={editor} className="h-[100%]" />
          </Sheet>
        </div>
        <Statusbar currentPage={0} pageCount={0} wordCount={wordCount} />
      </div>
    </EditorContext.Provider>
  );
}
