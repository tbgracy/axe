import { ReactEditor, useSlate } from "slate-react";

export default function useHistoryActions() {
  const editor = useSlate();

  const handleRedo = () => {
    editor.redo();
    ReactEditor.focus(editor);
  };
  const handleUndo = () => {
    editor.undo();
    ReactEditor.focus(editor);
  };
  return { handleRedo, handleUndo };
}
