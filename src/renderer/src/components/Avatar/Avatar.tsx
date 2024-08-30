import clsx from "clsx";

type AvatarProps = {
  user?: User;
  expanded?: boolean;
};

export default function Avatar({ user, expanded = true }: AvatarProps) {
  return (
    <div
      className={clsx({
        "flex items-center gap-3": true,
        "w-full": expanded,
      })}
    >
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
