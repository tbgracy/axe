import { Editor } from "@tiptap/react";

export default function usePrint(editor: Editor) {
    function handlePrint() {
      const html = editor.getHTML();
      const newWindow = window.open();
      newWindow?.document.write(html);
      newWindow?.print();
      newWindow?.close();
    }
    return { handlePrint };
  }