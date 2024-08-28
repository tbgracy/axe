import { Editor } from "@tiptap/react";
import { createContext } from "react";

const EditorContext = createContext<Editor | null>(null);

export default EditorContext;
