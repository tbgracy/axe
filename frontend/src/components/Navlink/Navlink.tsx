import { ReactNode } from "react";
import clsx from "clsx";

type NavlinkProps = {
  target: string;
  icon: ReactNode;
  current?: boolean;
  expanded?: boolean;
  children: ReactNode;
};

export default function Navlink({
  target,
  icon,
  current = false,
  expanded = true,
  children,
}: NavlinkProps) {
  return (
    <a
      href={target}
      className={clsx({
        "flex font-bold gap-2 hover:bg-[rgba(255,255,255,0.14)] py-2 px-4 cursor-pointer":
          true,
        "text-white": current,
        "text-[#cdcdcd]": !current,
        "justify-center ": !expanded,
      })}
    >
      {icon}
      {expanded && <p>{children}</p>}
    </a>
  );
}
