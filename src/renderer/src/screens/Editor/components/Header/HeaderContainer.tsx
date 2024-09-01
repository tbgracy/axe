import { useContext } from "react";

import Header, { HeaderProps } from "./Header";

import EditorContext from "../../context";

export function HeaderContainer({
  users,
  document,
}: Pick<HeaderProps, "users" | "document">) {
  const editor = useContext(EditorContext);

  const handleSave = editor?.can().chain().focus().undo().run()
    ? () => {
        console.log("Saving document ...");
        const newDocument = {
          ...document,
          content: editor.getHTML(),
        } as TextDocument;
        window.electron.ipcRenderer
          .invoke("save-document", newDocument)
          .then((res: Result<TextDocument>) => {
            console.log(res);
          });
      }
    : undefined;

  const handleRedo = editor?.can().chain().focus().redo().run()
    ? () => {
        editor?.chain().focus().redo().run();
      }
    : undefined;
  const handleUndo = editor?.can().chain().focus().undo().run()
    ? () => {
        editor?.chain().focus().undo().run();
      }
    : undefined;

  return (
    <Header
      users={users}
      document={document}
      onRedo={handleRedo}
      onUndo={handleUndo}
      onSave={handleSave}
      syncState="not-synced"
    />
  );
}
