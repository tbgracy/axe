import { Editor } from "slate";

import { ReactEditor, useSlate } from "slate-react";
import { FormatType } from "../components/Editor";
import { HeadingLevel } from "../components/Toolbar";

function colorText(editor: Editor, color: string) {
  Editor.addMark(editor, "color", color);
  ReactEditor.focus(editor);
}

function getCurrentColor(editor: Editor) {
  const marks = Editor.marks(editor);
  const color = marks?.color ?? "black";
  return color;
}

function toggleMark(editor: Editor, format: FormatType) {
  const isActive = isMarkActive(editor, format);
  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
  ReactEditor.focus(editor);
}

function isMarkActive(editor: Editor, format: FormatType) {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
}

export default function useTextFormat() {
  const editor = useSlate();

  const isBold = isMarkActive(editor, "bold");
  const isItalic = isMarkActive(editor, "italic");
  const isUnderlined = isMarkActive(editor, "underline");
  const currentColor = getCurrentColor(editor);
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

  function handleFontChange(fontFamily: string) {
    console.log(fontFamily)
  }

  function handleColorChange(color: string) {
    colorText(editor, color);
  }

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
    currentColor,
    handleFormatBold,
    handleFormatItalic,
    handleUnderline,
    handleFontChange,
    handleColorChange,
    handleHeadingChange,
  };
}
