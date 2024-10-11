import { Editor, Element, Transforms } from "slate";
import { TextAlignment } from "../components/Toolbar";
import { ElementType } from "../components/Editor";

export function isBlockActive(
  editor: Editor,
  format: ElementType | TextAlignment
) {
  const { selection } = editor;
  if (!selection) return false;

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n) =>
        !Editor.isEditor(n) &&
        Element.isElement(n) &&
        (n.type === format || n.align === format),
    })
  );

  return !!match;
}

export function toggleBlock(
  editor: Editor,
  format: ElementType | TextAlignment,
  alignment: boolean = false
) {
  const isActive = isBlockActive(editor, format);

  const isList = format === "list";

  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) &&
      Element.isElement(n) &&
      !alignment &&
      n.type === "list",
    split: true,
  });

  const newProperties = alignment
    ? { align: isActive ? undefined : (format as TextAlignment) }
    : {
        type: isActive
          ? "paragraph"
          : isList
            ? "list-item"
            : (format as ElementType),
      };

  Transforms.setNodes(editor, newProperties);

  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
}
