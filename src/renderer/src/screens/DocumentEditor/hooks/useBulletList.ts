import { Editor, Transforms, Element } from "slate";
import { useSlate } from "slate-react";

export default function useBulletList() {
  const editor = useSlate();

  function checkIfBulletList() {
    const [match] = Editor.nodes(editor, {
      match: (n) => Element.isElement(n) && n.type === "list",
    });

    return !!match;
  }

  const isBulletList = checkIfBulletList();

  function toggleBulletList() {
    const isActive = checkIfBulletList();
    console.log("bulletList status", isActive);

    Transforms.unwrapNodes(editor, {
      match: (n) => Element.isElement(n) && n.type === "list-item",
      split: true,
    });

    Transforms.setNodes(
      editor,
      { type: isActive ? "paragraph" : "list-item" },
      { match: (n) => Element.isElement(n) }
    );

    if (!isActive) {
      const wrapper = { type: "list", children: [] } as Element;
      Transforms.wrapNodes(editor, wrapper);
    }
  }

  return { isBulletList, toggleBulletList };
}
