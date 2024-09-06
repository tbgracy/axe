import { ReactEditor, useSlate } from "slate-react";

export default function useHistoryActions() {
  const editor = useSlate();
  const canRedo = editor.history.redos.length > 0;
  const canUndo = editor.history.undos.length > 0;

  const handleRedo = canRedo
    ? () => {
        editor.redo();
        ReactEditor.focus(editor);
      }
    : undefined;
  const handleUndo = canUndo
    ? () => {
        editor.undo();
        ReactEditor.focus(editor);
      }
    : undefined;

  return { handleRedo, handleUndo };
}
