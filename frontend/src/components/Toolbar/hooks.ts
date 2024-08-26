import { Editor } from "@tiptap/react";
import { HeadingLevel, TextAlignment } from "./Toolbar";

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

  function handleHeadingChange(level: HeadingLevel) {
    editor.chain().focus().toggleHeading({ level }).run();
  }

  return {
    handleFormatBold,
    handleFormatItalic,
    handleUnderline,
    handleFontChange,
    handleColorChange,
    handleHeadingChange,
  };
}

export function useBulletList(editor: Editor) {
  return () => {
    editor.chain().focus().toggleBulletList().run();
  };
}

export function useTextAlign(editor: Editor) {
  return (alignment: TextAlignment) => {
    console.log(alignment);
    editor.chain().focus().setTextAlign(alignment).run();
  };
}
