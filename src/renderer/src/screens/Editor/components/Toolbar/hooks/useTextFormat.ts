import { Editor } from "@tiptap/react";

import { HeadingLevel } from "../Toolbar";

export default function useTextFormat(editor: Editor) {
  const isBold = editor.isActive("bold");
  const isItalic = editor.isActive("italic");
  const isUnderlined = editor.isActive("underline");
  let currentLevel: HeadingLevel;

  if (editor.isActive("heading", { level: 1 })) {
    currentLevel = 1;
  } else if (editor.isActive("heading", { level: 2 })) {
    currentLevel = 2;
  } else if (editor.isActive("heading", { level: 3 })) {
    currentLevel = 3;
  } else if (editor.isActive("heading", { level: 4 })) {
    currentLevel = 4;
  } else {
    currentLevel = "paragraph";
  }

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
    if (level === "paragraph") {
      editor.chain().focus().setParagraph().run();
    } else {
      editor.chain().focus().toggleHeading({ level }).run();
    }
  }

  return {
    isBold,
    isItalic,
    isUnderlined,
    currentLevel,
    handleFormatBold,
    handleFormatItalic,
    handleUnderline,
    handleFontChange,
    handleColorChange,
    handleHeadingChange,
  };
}
