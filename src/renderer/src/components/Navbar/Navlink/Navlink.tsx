import { ReactNode } from "react";
import clsx from "clsx";

type NavlinkProps = {
  onClick: () => void;
  icon: ReactNode;
  current?: boolean;
  expanded?: boolean;
  children: ReactNode;
};

export default function Navlink({
  onClick,
  icon,
  current = false,
  expanded = true,
  children,
}: NavlinkProps) {
  return (
    <div
      onClick={onClick}
      className={clsx({
        "flex font-bold gap-2 hover:bg-[rgba(255,255,255,0.14)] py-2 px-4 cursor-pointer":
          true,
        "text-white": current,
        "text-lightGrey": !current,
        "justify-center ": !expanded,
      })}
      title={!expanded ? children?.toString() : ""}
    >
      {icon}
      {expanded && <p className="select-none">{children}</p>}
    </div>
  );
}
