import Header, { HeaderProps } from "./Header";

export function HeaderContainer({
  users,
  document,
}: Pick<HeaderProps, "users" | "document">) {
  return (
    <Header
      users={users}
      document={document}
      onRedo={() => {}}
      onUndo={() => {}}
      syncState="not-synced"
    />
  );
}
