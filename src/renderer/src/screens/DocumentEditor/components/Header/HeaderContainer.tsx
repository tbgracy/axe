import Header, { HeaderProps } from "./Header";
import { useHistoryActions, useSave } from "../../hooks";

export function HeaderContainer({
  users,
  document,
}: Pick<HeaderProps, "users" | "document">) {
  const handleSave = useSave(document);

  const { handleRedo, handleUndo } = useHistoryActions();

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
