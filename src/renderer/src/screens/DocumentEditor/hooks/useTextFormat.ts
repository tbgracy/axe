import { Editor, Transforms, Element, Text } from "slate";

import { ReactEditor, useSlate } from "slate-react";
import { ElementType, FormatType } from "../components/Editor";
import { HeadingLevel } from "../components/Toolbar";
import { toggleBlock } from "./utils";

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

  function getCurrentHeadingLevel() {
    const [match] = Editor.nodes(editor, {
      match: (n) =>
        Element.isElement(n) &&
        (n.type === "heading-1" ||
          n.type === "heading-2" ||
          n.type === "heading-3" ||
          n.type === "heading-4"),
    });

    if (match) {
      const [node] = match;
      return (node as Element & { type: ElementType }).type || "paragraph";
    }
    return "paragraph";
  }

  const isBold = isMarkActive(editor, "bold");
  const isItalic = isMarkActive(editor, "italic");
  const isUnderlined = isMarkActive(editor, "underline");
  const currentColor = getCurrentColor(editor);

  const currentLevel = getCurrentHeadingLevel();

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
    console.log(fontFamily);
    Transforms.setNodes(
      editor,
      { fontFamily },
      { match: (n) => Text.isText(n), split: true }
    );
  }

  function handleColorChange(color: string) {
    colorText(editor, color);
  }

  function handleHeadingChange(level: HeadingLevel) {
    const format = {
      1: "heading-1",
      2: "heading-2",
      3: "heading-3",
      4: "heading-4",
      paragraph: "paragraph",
    }[level] as ElementType;

    toggleBlock(editor, format);
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
