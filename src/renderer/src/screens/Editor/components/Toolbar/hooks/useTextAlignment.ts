import { Editor } from "@tiptap/react";

import { TextAlignment } from "../Toolbar";

export default function useTextAlignment(editor: Editor) {
  let currentAlignment = "";
  if (editor.isActive({ textAlign: "center" })) {
    currentAlignment = "center";
  }
  if (editor.isActive({ textAlign: "left" })) {
    currentAlignment = "left";
  }
  if (editor.isActive({ textAlign: "right" })) {
    currentAlignment = "right";
  }
  if (editor.isActive({ textAlign: "justify" })) {
    currentAlignment = "justify";
  }

  function setAlignment(alignment: TextAlignment) {
    editor.chain().focus().setTextAlign(alignment).run();
  }
  return { setAlignment, currentAlignment };
}
