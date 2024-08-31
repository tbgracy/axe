import Color from "@tiptap/extension-color";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextStyle from "@tiptap/extension-text-style";
import TextAlign from "@tiptap/extension-text-align";
import FontFamily from "@tiptap/extension-font-family";
import { EditorContent, useEditor } from "@tiptap/react";
import CharacterCount from "@tiptap/extension-character-count";

import Sheet from "../../components/Sheet";
import Header from "../../components/Header";
import Statusbar from "../../components/Statusbar";

import EditorContext from "./context";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingAnimation from "@renderer/components/LoadingAnimation";

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
  const { documentId } = useParams();
  const [document, setDocument] = useState<TextDocument | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      window.electron.ipcRenderer
        .invoke("open-document", documentId)
        .then((result: Result<TextDocument>) => {
          setIsLoading(!isLoading);
          if (result.success) {
            setDocument(result.data);
          }
        });
    }
  }, [isLoading]);

  const editor = useEditor({ extensions });
  const wordCount = editor?.storage.characterCount.words();

  if (isLoading) {
    return <LoadingAnimation />;
  }

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
