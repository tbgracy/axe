import { Editor } from "@tiptap/react";

export default function useBulletList(editor: Editor) {
    const isBulletList = editor.isActive("bulletList");
  
    function toggleBulletList() {
      editor.chain().focus().toggleBulletList().run();
    }
  
    return { isBulletList, toggleBulletList };
  }