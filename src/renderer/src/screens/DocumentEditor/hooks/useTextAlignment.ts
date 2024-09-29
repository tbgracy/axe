import { useSlate } from "slate-react";
import { Editor, Element, Transforms } from "slate";
import { TextAlignment } from "../components/Toolbar";

export default function useTextAlignment() {
  const editor = useSlate();

  function getCurrentAlignment(): TextAlignment {
    const [match] = Editor.nodes(editor, {
      match: (n) => Element.isElement(n) && n.type === "paragraph",
    });

    if (match) {
      const [node] = match;
      return (node as Element & { align?: TextAlignment }).align || "left";
    }

    return "left";
  }

  const currentAlignment = getCurrentAlignment();

  function setAlignment(alignment: TextAlignment) {
    Transforms.setNodes(
      editor,
      { align: alignment },
      { match: (n) => Element.isElement(n) }
    );
  }

  return { setAlignment, currentAlignment };
}
