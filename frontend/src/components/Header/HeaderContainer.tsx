import { useContext } from "react";
import Header, { HeaderProps } from "./Header";
import EditorContext from "../../screens/Editor/context";

export function HeaderContainer({
  users,
  document,
}: Pick<HeaderProps, "users" | "document">) {
  const editor = useContext(EditorContext);

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
      syncState="not-synced"
    />
  );
}
