import { useSlate } from "slate-react";
import { isBlockActive, toggleBlock } from "./utils";

export default function useBulletList() {
  const editor = useSlate();

  const isBulletList = isBlockActive(editor, "list");

  function toggleBulletList() {
    toggleBlock(editor, "list");
  }

  return { isBulletList, toggleBulletList };
}
