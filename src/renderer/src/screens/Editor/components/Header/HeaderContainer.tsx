import Header, { HeaderProps } from "./Header";
import { useHistoryActions } from "../../hooks";

export function HeaderContainer({
  users,
  document,
}: Pick<HeaderProps, "users" | "document">) {
  const handleSave = () => {};

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
