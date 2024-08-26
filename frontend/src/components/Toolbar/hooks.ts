import { Editor } from "@tiptap/react";

export function usePrint() {
  function handlePrint() {}
  return { handlePrint };
}

export function useDocumentTools() {}

export function useTextFormat(editor: Editor) {
  function handleFormatBold() {
    editor.chain().focus().toggleBold().run();
  }

  function handleFormatItalic() {
    editor.chain().focus().toggleItalic().run();
  }

  function handleUnderline() {
    editor.chain().focus().toggleUnderline().run();
  }

  function handleFontChange(fontFamily: string) {
    editor.chain().focus().setFontFamily(fontFamily).run();
  }

  function handleColorChange(color: string) {
    editor.chain().focus().setColor(color).run();
  }

  return {
    handleFormatBold,
    handleFormatItalic,
    handleUnderline,
    handleFontChange,
    handleColorChange,
  };
}
