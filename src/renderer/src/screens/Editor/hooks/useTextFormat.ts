import { Editor } from "slate";

import { ReactEditor, useSlate } from "slate-react";
import { FormatType } from "../components/Content";
import { HeadingLevel } from "../components/Toolbar";

const toggleMark = (editor: Editor, format: FormatType) => {
  const isActive = isMarkActive(editor, format);
  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
  ReactEditor.focus(editor);
};

const isMarkActive = (editor: Editor, format: FormatType) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

export default function useTextFormat() {
  const editor = useSlate();

  const isBold = isMarkActive(editor, "bold");
  const isItalic = isMarkActive(editor, "italic");
  const isUnderlined = isMarkActive(editor, "underline");
  let currentLevel: HeadingLevel;

  currentLevel = "paragraph";

  function handleFormatBold() {
    toggleMark(editor, "bold");
  }

  function handleFormatItalic() {
    toggleMark(editor, "italic");
  }

  function handleUnderline() {
    toggleMark(editor, "underline");
  }

  function handleFontChange(fontFamily: string) {}

  function handleColorChange(color: string) {}

  function handleHeadingChange(level: HeadingLevel) {
    if (level === "paragraph") {
    } else {
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
