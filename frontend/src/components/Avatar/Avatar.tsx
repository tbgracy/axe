import clsx from "clsx";
import { User } from "../../types/user";

type AvatarProps = {
  user?: User;
  expanded?: boolean;
};

export default function Avatar({ user, expanded = true }: AvatarProps) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={user?.profilePicturePath ?? "/avatar-placeholder.jpg"}
        alt="user profile picture"
        className={clsx({
          "rounded-full object-cover": true,
          "size-12": !expanded,
          "size-14": expanded,
        })}
      />
      {expanded && Boolean(user) && (
        <p className="text-white">{user?.username}</p>
      )}
    </div>
  );
}
