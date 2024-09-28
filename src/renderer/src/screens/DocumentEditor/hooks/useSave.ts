import { useSlate } from "slate-react";

export default function useSave(document: TextDocument) {
  const editor = useSlate();

  function handleSave() {
    window.electron.ipcRenderer
      .invoke("save-document", {
        ...document,
        content: JSON.stringify(editor.children),
      } as TextDocument)
      .then(() => {
        console.log("saved");
      });
  }

  return handleSave;
}
