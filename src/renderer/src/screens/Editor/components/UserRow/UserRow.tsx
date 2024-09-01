import Avatar from "@renderer/components/Avatar";

export default function UserRow({ users }: { users: User[] }) {
  return (
    <ul className="flex justify-end ml-4">
      {users.map((user) => (
        <li className="relative -ml-4">
          <Avatar user={user} expanded={false} />
        </li>
      ))}
    </ul>
  );
}
